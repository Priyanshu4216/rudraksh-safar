import { liteApiClient } from "../v3/client.ts";

export class HotelReviewsService {
  static async getReviews(hotelId: string, getSentiment: boolean = true) {
    return liteApiClient.request<any>('/data/reviews', {
      method: 'GET',
      query: { 
        hotelId,
        getSentiment: getSentiment.toString()
      }
    });
  }
}
