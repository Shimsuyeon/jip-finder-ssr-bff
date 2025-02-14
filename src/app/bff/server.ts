import dotenv from "dotenv";
import { fastify } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";
dotenv.config();

const app = fastify({ logger: false });

await app.register(cors, {
  origin: "*",
});
const swaggerOptions = {
  swagger: {
    info: {
      title: "My Title",
      description: "My Description.",
      version: "1.0.0",
    },
    host: "localhost:5000",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register((app, options, done) => {
  app.get("/", {
    schema: {
      tags: ["Default"],
      response: {
        200: {
          type: "object",
          properties: {
            anything: { type: "string" },
          },
        },
      },
    },
    handler: (req, res) => {
      res.send({ anything: "meaningfull" });
    },
  });
  done();
});

app.listen(
  {
    port: 5000,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
