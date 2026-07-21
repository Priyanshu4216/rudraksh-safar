import { liteApiClient } from "../v3/client.ts";

export class HotelAddonsService {
  static async getEsimPackages(countryCode: string) {
    return liteApiClient.request<any>(`/addons/esimply/packages/${countryCode}`, {
      method: 'GET'
    });
  }
}
