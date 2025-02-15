//src/app/bff/services/listing.service.ts
import axios from "axios";
import { ListingResponse } from "../types/listing.types";

export class ListingService {
  static async getListings(): Promise<ListingResponse> {
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
