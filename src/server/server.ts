import cors from "@fastify/cors";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { z } from "zod";
import { calculateQuote, QuoteRequestSchema, QuoteResponseSchema } from "./calculator.js";

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

const port = Number(process.env.PORT ?? 3001);
await app.listen({ port, host: "0.0.0.0" });

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
