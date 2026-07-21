import { liteApiClient } from "../v3/client.ts";

export class HotelBookingsService {
  static async listBookings(params: { 
    clientReference?: string, guestId?: string, customTags?: string, timeout?: number,
    startDate?: string, endDate?: string, bookingStartDate?: string, bookingEndDate?: string,
    status?: string, paymentStatus?: string, Sandbox?: string
  } = {}) {
    const queryParams = new URLSearchParams();
    if (params.clientReference) queryParams.append('clientReference', params.clientReference);
    if (params.guestId) queryParams.append('guestId', params.guestId);
    if (params.customTags) queryParams.append('customTags', params.customTags);
    if (params.timeout) queryParams.append('timeout', params.timeout.toString());
    if (params.startDate) queryParams.append('startDate', params.startDate);
    if (params.endDate) queryParams.append('endDate', params.endDate);
    if (params.bookingStartDate) queryParams.append('bookingStartDate', params.bookingStartDate);
    if (params.bookingEndDate) queryParams.append('bookingEndDate', params.bookingEndDate);
    if (params.status) queryParams.append('status', params.status);
    if (params.paymentStatus) queryParams.append('paymentStatus', params.paymentStatus);
    if (params.Sandbox) queryParams.append('Sandbox', params.Sandbox);
    
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
    
    return liteApiClient.request<any>(`/bookings${queryString}`, {
      method: 'GET'
    });
  }

  static async getBooking(bookingId: string, timeout?: number) {
    const queryString = timeout ? `?timeout=${timeout}` : '';
    return liteApiClient.request<any>(`/bookings/${bookingId}${queryString}`, {
      method: 'GET'
    });
  }

  static async cancelBooking(bookingId: string) {
    return liteApiClient.request<any>(`/bookings/${bookingId}`, {
      method: 'PUT'
    });
  }
}
