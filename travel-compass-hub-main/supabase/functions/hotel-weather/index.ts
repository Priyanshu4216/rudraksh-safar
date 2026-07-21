import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelWeatherService } from "../_shared/integrations/liteapi/services/weather.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'GET') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const lat = url.searchParams.get('lat');
    const lng = url.searchParams.get('lng');
    const start = url.searchParams.get('start');
    const end = url.searchParams.get('end');

    if (!lat || !lng || !start || !end) {
      return new Response(JSON.stringify({ error: "Missing required parameters" }), { status: 400, headers: corsHeaders });
    }

    const data = await HotelWeatherService.getWeather(lat, lng, start, end);

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
