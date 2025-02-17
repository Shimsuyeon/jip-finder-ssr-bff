//src/app/bff/services/rent.service.ts
import axios from "axios";
import { RentType } from "../types/rent,types";

export class RentService {
  static API_URLS() {
    return {
      officetel: process.env.OFFICETEL,
      apartment: process.env.APARTMENT,
      multiHousehold: process.env.MULTI_HOUSEHOLD,
      singleMultiFamily: process.env.SINGLE_MULTI_FAMILY,
    };
  }
  static async getRentDatatype(type: RentType) {
    const apiUrl = `${process.env.ESTATE_API_URL}${
      RentService.API_URLS()[type]
    }?serviceKey=${process.env.ServiceKey}&LAWD_CD=${
      process.env.LAWD_CD
    }&DEAL_YMD=${process.env.DEAL_YMD}`;

    try {
      const response = await axios({
        method: "get",
        url: apiUrl,
        headers: {
          Accept: "application/json",
        },
      });

      const data = response.data.response.body;

      return { data: data };
    } catch (error) {
      throw new Error(`Failed to fetch listings: ${error} ${apiUrl}`);
    }
  }
}
