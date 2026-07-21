import { supabase, supabaseUrl, supabaseAnonKey } from '../../lib/supabase';

export class HotelApiService {
  static async search(params: Record<string, string>) {
    const { data, error } = await supabase.functions.invoke('hotel-search', {
      body: params,
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async searchStream(params: Record<string, string>, onChunk: (data: any) => void) {
    const response = await fetch(`${supabaseUrl}/functions/v1/hotel-search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`
      },
      body: JSON.stringify(params)
    });

    if (!response.body) throw new Error('ReadableStream not supported in this browser.');
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      let errMsg = 'Failed to start stream';
      if (err.error) {
        if (typeof err.error === 'object') {
          errMsg = err.error.message || err.error.description || JSON.stringify(err.error);
        } else {
          errMsg = err.error;
        }
      } else if (err.message) {
        errMsg = err.message;
      }
      throw new Error(errMsg);
    }

    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let messageBuffer = "";
    
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        onChunk({ done: true });
        break;
      }
      
      messageBuffer += value;
      const messages = messageBuffer.split("\n\n");

      for (let i = 0; i < messages.length - 1; i++) {
        const message = messages[i];
        if (message.startsWith("data: ")) {
          const dataStr = message.slice(6);
          if (dataStr.trim() === "[DONE]") {
            onChunk({ done: true });
            return;
          }
          
          try {
            const dataJson = JSON.parse(dataStr);
            onChunk(dataJson);
          } catch (e) {
            console.error("Failed to parse chunk:", e);
          }
        }
      }
      messageBuffer = messages[messages.length - 1];
    }
  }

  static async getDetails(hotelId: string) {
    const { data, error } = await supabase.functions.invoke('hotel-details', {
      body: { hotelId },
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getRates(hotelId: string, params: Record<string, any>) {
    const { data, error } = await supabase.functions.invoke('hotel-rates', {
      body: { hotelId, ...params },
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getPriceIndex(hotelIds: string, fromDate?: string, toDate?: string) {
    const { data, error } = await supabase.functions.invoke('hotel-prices', {
      body: { hotelIds, fromDate, toDate },
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async prebook(
    rateId: string, 
    bookingId: string, 
    addons?: any[], 
    usePaymentSdk: boolean = false,
    options?: { voucherCode?: string; bedTypeIds?: number[]; includeCreditBalance?: boolean }
  ) {
    const { data, error } = await supabase.functions.invoke('hotel-prebook', {
      method: 'POST',
      body: { rateId, bookingId, addons, usePaymentSdk, ...options }
    });
    if (error) throw new Error(error.message);
    if (data?.error) throw new Error(data.error);
    if (!data?.data) throw new Error("No data returned from prebook");
    return data.data;
  }

  static async getPrebook(prebookId: string, includeCreditBalance: boolean = false) {
    const { data, error } = await supabase.functions.invoke(`hotel-prebook?prebookId=${prebookId}${includeCreditBalance ? '&includeCreditBalance=true' : ''}`, {
      method: 'GET'
    });
    
    if (error) {
      console.error('Supabase function error (getPrebook):', error);
      throw error;
    }
    
    if (data?.error) throw new Error(data.error);
    return data.data;
  }

  static async book(
    prebookRef: string, 
    bookingId: string, 
    guestInfo: any, 
    idempotencyKey: string, 
    transactionId?: string,
    options?: { metadata?: any; customTags?: any; guestPayment?: any }
  ) {
    const { data, error } = await supabase.functions.invoke('hotel-book', {
      body: { prebookRef, bookingId, guestInfo, transactionId, ...options },
      headers: { 'Idempotency-Key': idempotencyKey },
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }


  static async getCities(countryCode: string) {
    const { data, error } = await supabase.functions.invoke('hotel-cities', {
      body: { countryCode },
      method: 'POST'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getCountries() {
    const { data, error } = await supabase.functions.invoke('hotel-countries', {
      method: 'GET'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getHotelTypes() {
    const { data, error } = await supabase.functions.invoke('hotel-types', {
      method: 'GET'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getHotelChains() {
    const { data, error } = await supabase.functions.invoke('hotel-chains', {
      method: 'GET'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async listBookings(params: { 
    clientReference?: string, guestId?: string, customTags?: string, timeout?: number,
    startDate?: string, endDate?: string, bookingStartDate?: string, bookingEndDate?: string,
    status?: string, paymentStatus?: string, Sandbox?: string
  } = {}) {
    const { data, error } = await supabase.functions.invoke('hotel-bookings', {
      body: { action: 'list', ...params },
      method: 'POST'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getBooking(bookingId: string, timeout?: number) {
    const { data, error } = await supabase.functions.invoke('hotel-bookings', {
      body: { action: 'retrieve', bookingId, timeout },
      method: 'POST'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async cancelBooking(bookingId: string) {
    const { data, error } = await supabase.functions.invoke('hotel-bookings', {
      body: { action: 'cancel', bookingId },
      method: 'POST'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async amendBooking(bookingId: string, holder: { firstName: string; lastName: string; email: string; phone?: string }, remarks?: string) {
    const { data, error } = await supabase.functions.invoke('hotel-booking-amend', {
      body: { bookingId, holder, remarks },
      method: 'POST'
    });
    
    if (error) {
      console.error('Supabase function error (amendBooking):', error);
      throw new Error(error.message);
    }
    
    if (data?.error) throw new Error(data.error.message || data.error);
    return data;
  }

  static async getAlternativePrebooks(
    bookingId: string, 
    params: { occupancies: { adults: number; children?: number[] }[]; checkin: string; checkout: string; maxPrebooks?: number }
  ) {
    const { data, error } = await supabase.functions.invoke('hotel-booking-alternative-prebooks', {
      body: { bookingId, ...params },
      method: 'POST'
    });
    
    if (error) throw new Error(error.message);
    if (data?.error) throw new Error(data.error.message || data.error);
    return data?.data || data;
  }

  static async rebookBooking(prebookId: string, existingBookingId: string) {
    const { data, error } = await supabase.functions.invoke('hotel-booking-rebook', {
      body: { prebookId, existingBookingId },
      method: 'POST'
    });
    
    if (error) throw new Error(error.message);
    if (data?.error) throw new Error(data.error.message || data.error);
    return data?.data || data;
  }

  static async getHotelReviews(hotelId: string) {
    const { data, error } = await supabase.functions.invoke(`hotel-reviews?hotelId=${hotelId}`, {
      method: 'GET'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getWeather(lat: number, lng: number, start: string, end: string) {
    const { data, error } = await supabase.functions.invoke(`hotel-weather?lat=${lat}&lng=${lng}&start=${start}&end=${end}`, {
      method: 'GET'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getEsimPackages(countryCode: string) {
    const { data, error } = await supabase.functions.invoke(`hotel-addons?countryCode=${countryCode}`, {
      method: 'GET'
    });
    if (error) throw new Error(error.message);
    return data?.data || data;
  }

  static async getCurrencies() {
    const { data, error } = await supabase.functions.invoke('hotel-currencies', {
      method: 'GET'
    });

    if (error) throw new Error(error.message);
    return data?.data || data;
  }
}




