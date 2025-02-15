import { FastifyInstance } from "fastify";
import {
  rentResponseApartmentSchema,
  rentResponseMultiHouseHoldSchema,
  rentResponseOfficetelSchema,
  rentResponseSingleMultiFamilySchema,
} from "../schemas/rent.schema";
import { RentService } from "../services/rent.service";
import {
  FrontendRentApartment,
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

        const transformedData: FrontendRentApartment[] =
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

  app.get("/rent/multi-household", {
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
        console.log(transformedData);
        res.send(transformedData);
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });

  app.get("/rent/all", {
    schema: {
      tags: ["Rents"],
      response: {
        200: {
          type: "object",
          properties: {
            singleMultiFamily: rentResponseSingleMultiFamilySchema,
            officetel: rentResponseOfficetelSchema,
            apartment: rentResponseApartmentSchema,
            multiHousehold: rentResponseMultiHouseHoldSchema,
          },
        },
      },
    },
    handler: async (req, res) => {
      try {
        // 🔥 병렬 요청으로 모든 데이터 가져오기
        const [
          singleMultiFamilyData,
          officetelData,
          apartmentData,
          multiHouseholdData,
        ] = await Promise.all([
          RentService.getRentDatatype(
            "singleMultiFamily"
          ) as Promise<RentSingleMultiFamilyResponse>,
          RentService.getRentDatatype(
            "officetel"
          ) as Promise<RentOfficetelResponse>,
          RentService.getRentDatatype(
            "apartment"
          ) as Promise<RentApartmentResponse>,
          RentService.getRentDatatype(
            "multiHousehold"
          ) as Promise<RentMultiHouseholdResponse>,
        ]);
        // console.log(singleMultiFamilyData.data.items.item);

        const transformedSingleMultiFamily: FrontendRentSingleMultiFamily[] =
          singleMultiFamilyData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              type: String(item.houseType), // 이미 string이지만, 확실히 하기 위해 변환
              area: String(item.totalFloorAr),
              year: String(item.buildYear),
            },
            price: {
              deposit: String(item.deposit),
              monthlyRent: String(item.monthlyRent),
            },
            location: {
              district: String(item.umdNm),
            },
            contract: {
              date: `${item.dealYear}.${item.dealMonth}.${item.dealDay}`,
              term: String(item.contractTerm),
              type: String(item.contractType),
            },
          }));

        const transformedOfficetel: FrontendRentOfficetel[] =
          officetelData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              name: String(item.offiNm),
              area: String(item.excluUseAr),
              floor: String(item.floor),
              year: String(item.buildYear),
            },
            price: {
              deposit: String(item.deposit),
              monthlyRent: String(item.monthlyRent),
            },
            location: {
              district: `${String(item.sggNm)} ${String(item.umdNm)} ${String(
                item.jibun
              )}`,
            },
            contract: {
              date: `${item.dealYear}.${item.dealMonth}.${item.dealDay}`,
              term: String(item.contractTerm),
              type: String(item.contractType),
            },
          }));

        const transformedApartment: FrontendRentApartment[] =
          apartmentData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              name: String(item.aptNm),
              area: String(item.excluUseAr),
              floor: String(item.floor),
              year: String(item.buildYear),
            },
            price: {
              deposit: String(item.deposit),
              monthlyRent: String(item.monthlyRent),
            },
            location: {
              district: `${String(item.umdNm)} ${String(item.jibun)}`,
            },
            contract: {
              date: `${item.dealYear}.${item.dealMonth}.${item.dealDay}`,
              term: String(item.contractTerm),
              type: String(item.contractType),
            },
          }));

        const transformedMultiHousehold: FrontendRentMultiHousehold[] =
          multiHouseholdData.data.items.item.map((item, index) => ({
            id: `${item.dealYear}${item.dealMonth}${item.dealDay}-${index + 1}`,
            buildingInfo: {
              type: String(item.houseType),
              name: String(item.mhouseNm),
              area: String(item.excluUseAr),
              floor: String(item.floor),
              year: String(item.buildYear),
            },
            price: {
              deposit: String(item.deposit),
              monthlyRent: String(item.monthlyRent),
            },
            location: {
              district: `${String(item.umdNm)} ${String(item.jibun)}`,
            },
            contract: {
              date: `${item.dealYear}.${item.dealMonth}.${item.dealDay}`,
              term: String(item.contractTerm),
              type: String(item.contractType),
            },
          }));

        // ✅ 모든 데이터를 하나의 JSON 객체로 응답
        res.send({
          singleMultiFamily: transformedSingleMultiFamily,
          officetel: transformedOfficetel,
          apartment: transformedApartment,
          multiHousehold: transformedMultiHousehold,
        });
      } catch (error) {
        console.error("API Error:", error);
        res
          .status(500)
          .send({ error: `외부 API 호출에 실패했습니다. ${error}` });
      }
    },
  });
}
