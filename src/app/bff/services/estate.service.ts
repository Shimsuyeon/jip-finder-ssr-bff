//src/app/bff/services/estate.service.ts
import axios from "axios";

import { EstateResponse } from "../types/estate.types";

export class EstateService {
  static async getEsates(): Promise<EstateResponse> {
    const apiUrl = `${process.env.ESTATE_API_URL}?ServiceKey=${process.env.ServiceKey}&LAWD_CD=${process.env.LAWD_CD}&DEAL_YMD=${process.env.DEAL_YMD}`;

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
      throw new Error(`Failed to fetch listings: ${error}`);
    }
  }
}
