import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelTypesService } from "../_shared/integrations/liteapi/services/types.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'GET') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const typesData = await HotelTypesService.getHotelTypes();

    return new Response(JSON.stringify(typesData), {
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
