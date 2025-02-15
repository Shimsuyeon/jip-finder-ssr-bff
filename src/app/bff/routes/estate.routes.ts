import { FastifyInstance } from "fastify";
import { FrontendEstate } from "../types/estate.types";
import { EstateService } from "../services/estate.service";
import { estateResponseSchema } from "../schemas/estate.schema";

export async function estateRoutes(app: FastifyInstance) {
  app.get("/estates", {
    schema: {
      tags: ["Estates"],
      response: {
        200: estateResponseSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = await EstateService.getEsates();

        const transformedData: FrontendEstate[] = rawData.data.items.item.map(
          (item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
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
