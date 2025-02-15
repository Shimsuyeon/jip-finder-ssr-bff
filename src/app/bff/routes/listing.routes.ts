// src/app/bff/routes/listing.routes.ts
import { FastifyInstance } from "fastify";
import { ListingService } from "../services/listing.service";
import { listingResponseSchema } from "../schemas/listing.schema";

export async function listingRoutes(app: FastifyInstance) {
  app.get("/listings", {
    schema: {
      tags: ["Default"],
      response: {
        200: listingResponseSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const data = await ListingService.getListings();
        res.send(data);
      } catch (error) {
        console.error("API Error:", error);
        res.status(500).send({
          error: `외부 API 호출에 실패했습니다. ${error}`,
        });
      }
    },
  });
}
