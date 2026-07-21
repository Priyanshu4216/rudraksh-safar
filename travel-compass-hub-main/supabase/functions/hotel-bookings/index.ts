import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelBookingsService } from "../_shared/integrations/liteapi/services/bookings.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { action, bookingId } = body;

    let result;
    if (action === 'list') {
      const { 
        clientReference, guestId, customTags, timeout,
        startDate, endDate, bookingStartDate, bookingEndDate,
        status, paymentStatus, Sandbox
      } = body;
      result = await HotelBookingsService.listBookings({ 
        clientReference, guestId, customTags, timeout,
        startDate, endDate, bookingStartDate, bookingEndDate,
        status, paymentStatus, Sandbox
      });
    } else if (action === 'retrieve' && bookingId) {
      const { timeout } = body;
      result = await HotelBookingsService.getBooking(bookingId, timeout);
    } else if (action === 'cancel' && bookingId) {
      result = await HotelBookingsService.cancelBooking(bookingId);
    } else {
      return new Response(JSON.stringify({ error: "Invalid action or missing bookingId" }), { status: 400, headers: corsHeaders });
    }

    // Pass back the data safely
    return new Response(JSON.stringify({ data: result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
