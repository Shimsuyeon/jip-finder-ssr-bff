import { FastifyInstance } from "fastify";
import {
  rentResponseApartmentSchema,
  rentResponseMultiHouseHoldSchema,
  rentResponseOfficetelSchema,
  rentResponseSingleMultiFamilySchema,
} from "../schemas/rent.schema";
import { RentService } from "../services/rent.service";
import {
  FrontendRentMultiHousehold,
  FrontendRentOfficetel,
  FrontendRentSingleMultiFamily,
  RentApartmentResponse,
  RentMultiHouseholdResponse,
  RentOfficetelResponse,
  RentSingleMultiFamilyResponse,
} from "../types/rent,types";

export async function rentRoutes(app: FastifyInstance) {
  app.get("/rent/single-multi-family", {
    schema: {
      tags: ["Rents"],
      response: {
        200: rentResponseSingleMultiFamilySchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = (await RentService.getRentDatatype(
          "singleMultiFamily"
        )) as RentSingleMultiFamilyResponse;

        const transformedData: FrontendRentSingleMultiFamily[] =
          rawData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              type: item.houseType,
              area: item.totalFloorAr,
              year: item.buildYear,
            },
            price: {
              deposit: item.deposit,
              monthlyRent: item.monthlyRent,
            },
            location: {
              district: item.umdNm,
            },
            contract: {
              date: `${item.dealYear}${item.dealMonth}${item.dealDay}`,
              term: item.contractTerm,
              type: item.contractType,
            },
          }));

        res.send(transformedData);
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });

  app.get("/rent/officetel", {
    schema: {
      tags: ["Rents"],
      response: {
        200: rentResponseOfficetelSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = (await RentService.getRentDatatype(
          "officetel"
        )) as RentOfficetelResponse;

        const transformedData: FrontendRentOfficetel[] =
          rawData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              name: item.offiNm,
              area: item.excluUseAr,
              floor: item.floor,
              year: item.buildYear,
            },
            price: {
              deposit: item.deposit,
              monthlyRent: item.monthlyRent,
            },
            location: {
              district: `${item.sggNm} ${item.umdNm} ${item.jibun}`,
            },
            contract: {
              date: `${item.dealYear}${item.dealMonth}${item.dealDay}`,
              term: item.contractTerm,
              type: item.contractType,
            },
          }));

        res.send(transformedData);
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });

  app.get("/rent/apartment", {
    schema: {
      tags: ["Rents"],
      response: {
        200: rentResponseApartmentSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = (await RentService.getRentDatatype(
          "apartment"
        )) as RentApartmentResponse;

        const transformedData: FrontendRentOfficetel[] =
          rawData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              name: item.aptNm,
              area: item.excluUseAr,
              floor: item.floor,
              year: item.buildYear,
            },
            price: {
              deposit: item.deposit,
              monthlyRent: item.monthlyRent,
            },
            location: {
              district: `${item.umdNm} ${item.jibun}`,
            },
            contract: {
              date: `${item.dealYear}${item.dealMonth}${item.dealDay}`,
              term: item.contractTerm,
              type: item.contractType,
            },
          }));

        res.send(transformedData);
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });

  app.get("/rent/multiHousehold", {
    schema: {
      tags: ["Rents"],
      response: {
        200: rentResponseMultiHouseHoldSchema,
      },
    },
    handler: async (req, res) => {
      try {
        const rawData = (await RentService.getRentDatatype(
          "multiHousehold"
        )) as RentMultiHouseholdResponse;

        const transformedData: FrontendRentMultiHousehold[] =
          rawData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              type: item.houseType,
              name: item.mhouseNm,
              area: item.excluUseAr,
              floor: item.floor,
              year: item.buildYear,
            },
            price: {
              deposit: item.deposit,
              monthlyRent: item.monthlyRent,
            },
            location: {
              district: `${item.umdNm} ${item.jibun}`,
            },
            contract: {
              date: `${item.dealYear}${item.dealMonth}${item.dealDay}`,
              term: item.contractTerm,
              type: item.contractType,
            },
          }));
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
