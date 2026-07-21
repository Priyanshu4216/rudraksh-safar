import { liteApiClient } from "../v3/client.ts";

export class HotelCitiesService {
  static async getCities(countryCode: string) {
    return liteApiClient.request<any>('/data/cities', {
      method: 'GET',
      query: { countryCode }
    });
  }
}
