import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelAddonsService } from "../_shared/integrations/liteapi/services/addons.ts";
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
    const countryCode = url.searchParams.get('countryCode');

    if (!countryCode) {
      return new Response(JSON.stringify({ error: "Missing countryCode" }), { status: 400, headers: corsHeaders });
    }

    const data = await HotelAddonsService.getEsimPackages(countryCode);

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
