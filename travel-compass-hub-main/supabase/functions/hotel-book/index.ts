import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelBookService } from "../_shared/integrations/liteapi/services/book.ts";
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
    const { prebookRef, bookingId, guestInfo, transactionId, metadata, customTags, guestPayment } = body;
    const idempotencyKey = req.headers.get('Idempotency-Key');

    if (!prebookRef || !bookingId || !guestInfo || !idempotencyKey) {
      return new Response(JSON.stringify({ error: "Missing required fields or Idempotency-Key header" }), { status: 400, headers: corsHeaders });
    }

    const options = {
      metadata,
      customTags,
      guestPayment
    };

    const bookingData = await HotelBookService.book(prebookRef, bookingId, guestInfo, idempotencyKey, transactionId, options);

    return new Response(JSON.stringify({ data: bookingData }), {
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
