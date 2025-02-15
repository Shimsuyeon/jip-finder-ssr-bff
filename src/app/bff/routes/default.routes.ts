import { FastifyInstance } from "fastify";

export async function defaultRoutes(app: FastifyInstance) {
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
      res.send({ anything: "meaningful" });
    },
  });
}
