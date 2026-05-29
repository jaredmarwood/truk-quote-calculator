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
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
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

// --- Beta Signup ---

const BETA_DIR = path.resolve(__dirname, "..", "..", "data");
const BETA_FILE = path.join(BETA_DIR, "beta-signups.json");

typed.post(
  "/api/beta-signup",
  {
    schema: {
      body: z.object({
        businessName: z.string().min(1),
        contactName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        state: z.string().min(2),
        fleetSize: z.string(),
        currentMethod: z.string(),
        sectors: z.string().optional(),
        notes: z.string().optional(),
      }),
      response: {
        200: z.object({ status: z.literal("ok"), id: z.string() }),
        400: z.object({ error: z.string() }),
      },
    },
  },
  async (req) => {
    if (!existsSync(BETA_DIR)) {
      mkdirSync(BETA_DIR, { recursive: true });
    }

    let entries: Array<{
      id: string;
      businessName: string;
      contactName: string;
      email: string;
      phone?: string;
      state: string;
      fleetSize: string;
      currentMethod: string;
      sectors?: string;
      notes?: string;
      submittedAt: string;
      status: "pending" | "invited" | "active";
    }> = [];
    if (existsSync(BETA_FILE)) {
      try {
        entries = JSON.parse(readFileSync(BETA_FILE, "utf-8"));
      } catch {
        entries = [];
      }
    }

    const entry = {
      id: `beta-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...req.body,
      submittedAt: new Date().toISOString(),
      status: "pending" as const,
    };

    entries.push(entry);
    writeFileSync(BETA_FILE, JSON.stringify(entries, null, 2), "utf-8");

    return { status: "ok" as const, id: entry.id };
  },
);

// --- Passive Feedback ---

const FEEDBACK_DIR = path.resolve(__dirname, "..", "..", "data");
const FEEDBACK_FILE = path.join(FEEDBACK_DIR, "feedback.json");

typed.post(
  "/api/feedback",
  {
    schema: {
      body: z.object({
        rating: z.number().min(1).max(5),
        comment: z.string().max(500).optional(),
        sentiment: z.enum(["positive", "neutral", "negative"]),
      }),
      response: {
        200: z.object({ status: z.literal("ok") }),
        400: z.object({ error: z.string() }),
      },
    },
  },
  async (req) => {
    // Ensure data directory exists
    if (!existsSync(FEEDBACK_DIR)) {
      mkdirSync(FEEDBACK_DIR, { recursive: true });
    }

    // Read existing feedback or start empty array
    let entries: Array<{
      id: string;
      rating: number;
      comment: string;
      sentiment: string;
      submittedAt: string;
    }> = [];
    if (existsSync(FEEDBACK_FILE)) {
      try {
        entries = JSON.parse(readFileSync(FEEDBACK_FILE, "utf-8"));
      } catch {
        entries = [];
      }
    }

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      rating: req.body.rating,
      comment: req.body.comment || "",
      sentiment: req.body.sentiment,
      submittedAt: new Date().toISOString(),
    };

    entries.push(entry);
    writeFileSync(FEEDBACK_FILE, JSON.stringify(entries, null, 2), "utf-8");

    return { status: "ok" as const };
  },
);

// --- Serve static build ---

const distDir = path.resolve(__dirname, "..", "..", "dist", "client");
const contentDir = path.resolve(__dirname, "..", "..", "content");

// --- Serve recruitment page at /recruit ---
app.get("/recruit", async (_request, reply) => {
  const filePath = path.join(contentDir, "recruit.html");
  if (!existsSync(filePath)) {
    return reply.code(503).type("application/json").send({ error: "Recruitment page not found" });
  }
  const html = readFileSync(filePath, "utf-8");
  return reply.type("text/html; charset=utf-8").send(html);
});

// --- Serve calculator at /calculator ---
// Vite HTML inputs preserve their relative path, so calculator lands at src/client/src/web/index.html
const calculatorDistDir = path.resolve(__dirname, "..", "..", "dist", "client", "src", "web");
app.get("/calculator", async (_request, reply) => {
  const filePath = path.join(calculatorDistDir, "index.html");
  if (!existsSync(filePath)) {
    return reply.code(503).type("application/json").send({ error: "Calculator build not found" });
  }
  const html = readFileSync(filePath, "utf-8");
  return reply.type("text/html; charset=utf-8").send(html);
});

// --- Serve dashboard at /dashboard ---
// Vite HTML inputs preserve their relative path, so dashboard.html lands at src/client/src/client/dashboard.html
const dashboardDistDir = path.resolve(__dirname, "..", "..", "dist", "client", "src", "client");
app.get("/dashboard", async (_request, reply) => {
  const filePath = path.join(dashboardDistDir, "dashboard.html");
  if (!existsSync(filePath)) {
    return reply.code(503).type("application/json").send({ error: "Dashboard build not found" });
  }
  const html = readFileSync(filePath, "utf-8");
  return reply.type("text/html; charset=utf-8").send(html);
});

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

// Landing page entry — Vite builds src/client/src/client/index.html
const landingHtmlPath = path.join(distDir, "src", "client", "index.html");

// SPA fallback: route all remaining GET requests to index.html (but not /api/*)
app.setNotFoundHandler(async (request, reply) => {
  if (request.url.startsWith("/api/")) {
    return reply.code(404).send({ error: "Not found" });
  }
  if (!existsSync(landingHtmlPath)) {
    return reply.code(503).type("application/json").send({ error: "Landing page not built" });
  }
  return reply.type("text/html").sendFile(landingHtmlPath);
});

const port = Number(process.env.PORT ?? 3001);
await app.listen({ port, host: "0.0.0.0" });
