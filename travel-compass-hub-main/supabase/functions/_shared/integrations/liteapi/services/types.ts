import { liteApiClient } from "../v3/client.ts";

export class HotelTypesService {
  static async getHotelTypes() {
    return liteApiClient.request<any>('/data/hotelTypes', {
      method: 'GET'
    });
  }
}
