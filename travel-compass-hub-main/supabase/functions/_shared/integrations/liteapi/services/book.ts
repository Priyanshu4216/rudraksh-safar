import { liteApiClient } from '../v3/client.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

export class HotelBookService {
  private static supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  /**
   * Finalizes the booking using idempotency keys.
   */
  static async book(
    prebookRef: string, 
    bookingId: string, 
    guestInfo: any, 
    idempotencyKey: string, 
    transactionId?: string,
    options?: { metadata?: any; customTags?: any; guestPayment?: any }
  ): Promise<any> {
    // 1. Idempotency Check & State Machine Enforcement
    const { data: booking, error } = await this.supabase
      .from('hotel_bookings')
      .update({ status: 'BOOKING_IN_PROGRESS', idempotency_key: idempotencyKey })
      .eq('id', bookingId)
      .in('status', ['PREBOOKED', 'PAYMENT_SUCCESS'])
      .select()
      .single();

    if (error || !booking) {
       // Could be a duplicate due to idempotency constraint on the table, or invalid state
       throw new Error("Idempotency Exception or Invalid Booking State: Cannot proceed with booking.");
    }

    try {
      // 2. Fetch from Supplier (LiteAPI)
      // Map guests dynamically if provided, otherwise fallback to single guest
      const guestsPayload = guestInfo.guests && Array.isArray(guestInfo.guests) 
        ? guestInfo.guests 
        : [
            {
              occupancyNumber: 1,
              firstName: guestInfo.firstName,
              lastName: guestInfo.lastName,
              email: guestInfo.email,
              phone: guestInfo.phone,
              remarks: guestInfo.specialRequests || ""
            }
          ];

      const payload: any = { 
         prebookId: prebookRef, 
         clientReference: bookingId,
         holder: {
           firstName: guestInfo.firstName,
           lastName: guestInfo.lastName,
           email: guestInfo.email,
           phone: guestInfo.phone
         },
         payment: transactionId ? {
           method: "TRANSACTION_ID",
           transactionId: transactionId
         } : {
           method: "ACC_CREDIT_CARD"
         },
         guests: guestsPayload
      };
      
      if (options?.metadata) payload.metadata = options.metadata;
      if (options?.customTags) payload.customTags = options.customTags;
      if (options?.guestPayment) payload.guestPayment = options.guestPayment;
      
      const rawResponse = await liteApiClient.request<any>('/rates/book', {
        method: 'POST',
        headers: {
           'Idempotency-Key': idempotencyKey
        },
        body: JSON.stringify(payload)
      });

      // 3. Update Success State
      const finalBookingId = rawResponse?.data?.bookingId || rawResponse?.bookingId;
      const finalHotelConfirmationCode = rawResponse?.data?.hotelConfirmationCode || rawResponse?.hotelConfirmationCode || null;
      
      await this.supabase
        .from('hotel_bookings')
        .update({ 
          status: 'CONFIRMED',
          booking_ref: finalBookingId,
          supplier_booking_id: finalHotelConfirmationCode
        })
        .eq('id', bookingId);

      await this.supabase.from('booking_history').insert({
        booking_id: bookingId,
        previous_status: 'BOOKING_IN_PROGRESS',
        new_status: 'BOOKED',
        notes: `Booking successful with Supplier ID: ${finalBookingId}`
      });

      return rawResponse;
    } catch (e: any) {
      // Transition to FAILED
      await this.supabase
        .from('hotel_bookings')
        .update({ status: 'FAILED' })
        .eq('id', bookingId);
      
      throw new Error(`Booking Failed: ${e.message}`);
    }
  }
}
