import cors from "@fastify/cors";
import Fastify, { type FastifyInstance } from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { z } from "zod";
import { calculateQuote, QuoteRequestSchema, QuoteResponseSchema } from "./calculator.js";
import { fetchFuelPrice, type FuelPriceResponse } from "../lib/fuelwatch.js";

import { fileURLToPath } from "url";
import { existsSync, readFileSync } from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: true, trustProxy: true });
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
const typed = app.withTypeProvider<ZodTypeProvider>();

await app.register(cors, { origin: true, credentials: true });

typed.get(
  "/api/health",
  {
    schema: {
      response: {
        200: z.object({
          status: z.literal("ok"),
          service: z.string(),
        }),
      },
    },
  },
  async () => ({ status: "ok" as const, service: "truk-2" }),
);

typed.get(
  "/api/greeting",
  {
    schema: {
      querystring: z.object({ name: z.string().min(1).optional() }),
      response: {
        200: z.object({ message: z.string() }),
      },
    },
  },
  async (req) => {
    const who = req.query.name ?? "world";
    return { message: `Hello, ${who}, from Truk.` };
  },
);

// --- Fuel Price (FuelWatch WA) ---

// In-process cache: last fetched response, refreshed on each request
let fuelCache: FuelPriceResponse | null = null;
const FUEL_CACHE_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

typed.get(
  "/api/fuel-price",
  {
    schema: {
      response: {
        200: z.object({
          pricePerL: z.number(),
          isCached: z.boolean(),
          stationCount: z.number(),
          cachedAt: z.string(),
        }),
      },
    },
  },
  async () => {
    // Serve cached data if within TTL
    if (fuelCache && Date.now() - new Date(fuelCache.cachedAt).getTime() < FUEL_CACHE_TTL_MS) {
      return {
        pricePerL: fuelCache.averagePricePerL ?? 1.8,
        isCached: fuelCache.isCached,
        stationCount: fuelCache.metroStationCount,
        cachedAt: fuelCache.cachedAt,
      };
    }

    // Fetch fresh data
    const result = await fetchFuelPrice(fuelCache ?? undefined);
    fuelCache = result;

    return {
      pricePerL: result.averagePricePerL ?? 1.8,
      isCached: result.isCached,
      stationCount: result.metroStationCount,
      cachedAt: result.cachedAt,
    };
  },
);

// --- Quote Calculator ---

typed.post(
  "/api/quote",
  {
    schema: {
      body: QuoteRequestSchema,
      response: {
        200: QuoteResponseSchema,
        400: z.object({ error: z.string() }),
      },
    },
  },
  async (req) => {
    try {
      return calculateQuote(req.body);
    } catch (err) {
      return { error: "Validation error" };
    }
  },
);

// --- Serve static build ---

const distDir = path.resolve(__dirname, "..", "..", "dist", "client");
const contentDir = path.resolve(__dirname, "..", "..", "content");

// --- Serve static blog pages ---
// Maps /blog/slug → content/blog/slug.html (before SPA fallback)
app.get("/blog/:slug", async (request, reply) => {
  const slug = (request.params as { slug: string }).slug;
  const filePath = path.join(contentDir, "blog", `${slug}.html`);
  if (!existsSync(filePath)) {
    return reply.code(404).type("application/json").send({ error: "Blog post not found" });
  }
  const html = readFileSync(filePath, "utf-8");
  return reply.type("text/html; charset=utf-8").send(html);
});

// Serve Vite static build for all non-API routes (SPA fallback to index.html)
await app.register(fastifyStatic, {
  root: distDir,
  prefix: "/",
  serve: true,
  wildcard: false,
});

// SPA fallback: route all remaining GET requests to index.html (but not /api/*)
app.setNotFoundHandler(async (request, reply) => {
  if (request.url.startsWith("/api/")) {
    return reply.code(404).send({ error: "Not found" });
  }
  return reply.type("text/html").sendFile("index.html");
});

const port = Number(process.env.PORT ?? 3001);
await app.listen({ port, host: "0.0.0.0" });
