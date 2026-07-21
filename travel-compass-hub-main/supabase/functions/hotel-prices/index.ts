import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelPricesService } from "../_shared/integrations/liteapi/services/prices.ts";
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
    const { hotelIds, fromDate, toDate } = body;

    if (!hotelIds) {
      throw new Error("hotelIds is required");
    }

    const data = await HotelPricesService.getPriceIndex(hotelIds, fromDate, toDate);

    return new Response(JSON.stringify(data), {
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
