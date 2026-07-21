import { liteApiClient } from "../v3/client.ts";

export class HotelCountriesService {
  static async getCountries() {
    return liteApiClient.request<any>('/data/countries', {
      method: 'GET'
    });
  }
}
