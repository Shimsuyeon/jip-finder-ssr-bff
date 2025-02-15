// src/app/bff/server.ts
import dotenv from "dotenv";
import { fastify } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import { envSchema } from "./config/env.schema";
import { swaggerOptions, swaggerUiOptions } from "./config/swagger.config";
import { defaultRoutes } from "./routes/default.routes";
import { listingRoutes } from "./routes/listing.routes";

// Load environment variables
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.secret", override: true });

async function buildServer() {
  const app = fastify({ logger: false });

  // Register plugins
  await app.register(cors, { origin: "*" });
  await app.register(fastifyEnv, { schema: envSchema, dotenv: true });
  await app.register(fastifySwagger, swaggerOptions);
  await app.register(fastifySwaggerUi, swaggerUiOptions);

  // Register routes
  await app.register(defaultRoutes);
  await app.register(listingRoutes);

  return app;
}

async function startServer() {
  try {
    const app = await buildServer();
    await app.listen({ port: 5000 });
    console.log("Server started on port 5000");
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

startServer();
