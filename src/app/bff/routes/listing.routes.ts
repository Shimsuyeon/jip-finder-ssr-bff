import { FastifyInstance } from "fastify";
import { ListingService } from "../services/listing.service";
import { FrontendListing } from "../types/listing.types";
import { listingResponseSchema } from "../schemas/listing.schema";

export async function listingRoutes(app: FastifyInstance) {
  app.get("/listings", {
    schema: {
      tags: ["Listings"],
      response: {
        200: listingResponseSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = await ListingService.getListings();

        // 🛠 데이터 가공 로직
        const transformedData: FrontendListing[] = rawData.data.items.item.map(
          (item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              year: item.buildYear,
              type: item.houseType,
              area: item.totalFloorAr,
            },
            price: {
              deposit: item.deposit,
              monthlyRent: item.monthlyRent,
            },
            location: {
              district: item.umdNm,
            },
          })
        );

        res.send(transformedData);
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });
}
