import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelRatesService } from "../_shared/integrations/liteapi/services/rates.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const params = await req.json();
    const hotelId = params.hotelId;
    delete params.hotelId; // Separate hotelId from other params

    if (!hotelId) {
      return new Response(JSON.stringify({ error: "Missing hotelId" }), { status: 400, headers: corsHeaders });
    }

    const rates = await HotelRatesService.getRates(hotelId, params);

    return new Response(JSON.stringify({ data: rates }), {
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
