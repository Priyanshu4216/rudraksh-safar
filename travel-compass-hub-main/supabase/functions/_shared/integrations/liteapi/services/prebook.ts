import { liteApiClient } from '../v3/client.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelPrebookService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  /**
   * Prebooks a rate, applying a booking lock to prevent race conditions.
   * Modifies the state machine to PREBOOKED.
   */
  static async prebook(
    rateId: string, 
    bookingId: string, 
    addons?: any[], 
    usePaymentSdk: boolean = false,
    options?: { voucherCode?: string; bedTypeIds?: number[]; includeCreditBalance?: boolean }
  ): Promise<any> {
    // 1. Booking Lock: Ensure we are in RATE_CONFIRMED state
    const { data: booking, error } = await this.supabase
      .from('hotel_bookings')
      .update({ status: 'PREBOOKED' })
      .eq('id', bookingId)
      .in('status', ['RATE_CONFIRMED', 'ROOM_SELECTED'])
      .select()
      .single();

    if (error || !booking) {
      throw new Error("Booking Lock Failed: Invalid state transition or booking not found.");
    }

    try {
      // 2. Fetch from Supplier (LiteAPI)
      const payload: any = { offerId: rateId, usePaymentSdk: usePaymentSdk };
      if (addons && addons.length > 0) {
        payload.addons = addons;
      }
      if (options?.voucherCode) payload.voucherCode = options.voucherCode;
      if (options?.bedTypeIds) payload.bedTypeIds = options.bedTypeIds;
      if (options?.includeCreditBalance !== undefined) payload.includeCreditBalance = options.includeCreditBalance;
      
      const rawResponse = await liteApiClient.request<any>('/rates/prebook', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      // 3. Update Prebook Reference
      const prebookRef = rawResponse?.data?.prebookId || rawResponse?.prebookId;
      await this.supabase
        .from('hotel_bookings')
        .update({ 
          prebook_ref: prebookRef
        })
        .eq('id', bookingId);

      // 4. Record History
      await this.supabase.from('booking_history').insert({
        booking_id: bookingId,
        previous_status: booking.status,
        new_status: 'PREBOOKED',
        notes: `Prebooked successfully with ref: ${prebookRef}`
      });

      return rawResponse;
    } catch (e: any) {
      // Revert lock on failure
      await this.supabase
        .from('hotel_bookings')
        .update({ status: 'FAILED' })
        .eq('id', bookingId);
      
      throw new Error(`Prebook Failed: ${e.message}`);
    }
  }

  /**
   * Retrieves an existing prebook session by ID.
   */
  static async getPrebook(prebookId: string, includeCreditBalance: boolean = false): Promise<any> {
    const url = `/prebooks/${prebookId}${includeCreditBalance ? '?includeCreditBalance=true' : ''}`;
    try {
      const rawResponse = await liteApiClient.request<any>(url, {
        method: 'GET'
      });
      return rawResponse;
    } catch (e: any) {
      throw new Error(`Failed to retrieve prebook: ${e.message}`);
    }
  }
}
