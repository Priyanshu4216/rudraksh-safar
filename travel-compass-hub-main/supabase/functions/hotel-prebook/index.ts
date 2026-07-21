import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelPrebookService } from "../_shared/integrations/liteapi/services/prebook.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  if (req.method === 'GET') {
    try {
      const url = new URL(req.url);
      const prebookId = url.searchParams.get('prebookId');
      const includeCreditBalance = url.searchParams.get('includeCreditBalance') === 'true';

      if (!prebookId) {
        return new Response(JSON.stringify({ error: "Missing prebookId query parameter" }), { status: 400, headers: corsHeaders });
      }

      const data = await HotelPrebookService.getPrebook(prebookId, includeCreditBalance);
      
      return new Response(JSON.stringify({ data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }
  }

  try {
    const body = await req.json();
    const { rateId, bookingId, addons, usePaymentSdk, voucherCode, bedTypeIds, includeCreditBalance } = body;

    if (!rateId || !bookingId) {
      return new Response(JSON.stringify({ error: "Missing rateId or bookingId" }), { status: 400, headers: corsHeaders });
    }

    const options = {
      voucherCode,
      bedTypeIds,
      includeCreditBalance
    };

    const prebookData = await HotelPrebookService.prebook(rateId, bookingId, addons, usePaymentSdk, options);

    return new Response(JSON.stringify({ data: prebookData }), {
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
