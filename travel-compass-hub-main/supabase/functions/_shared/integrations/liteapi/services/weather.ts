import { liteApiClient } from "../v3/client.ts";

export class HotelWeatherService {
  static async getWeather(lat: string, lng: string, startDate: string, endDate: string) {
    return liteApiClient.request<any>('/data/weather', {
      method: 'GET',
      query: { 
        latitude: lat,
        longitude: lng,
        startDate,
        endDate,
        units: 'metric'
      }
    });
  }
}
