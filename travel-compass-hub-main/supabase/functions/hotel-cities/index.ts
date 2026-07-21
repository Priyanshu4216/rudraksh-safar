import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelCitiesService } from "../_shared/integrations/liteapi/services/cities.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const { countryCode } = await req.json();

    if (!countryCode) {
      return new Response(JSON.stringify({ error: "Missing countryCode" }), { status: 400, headers: corsHeaders });
    }

    const citiesData = await HotelCitiesService.getCities(countryCode);

    return new Response(JSON.stringify(citiesData), {
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
