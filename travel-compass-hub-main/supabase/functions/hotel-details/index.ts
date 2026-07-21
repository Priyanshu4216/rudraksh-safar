import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { liteApiClient } from "../_shared/integrations/liteapi/v3/client.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const { hotelId } = await req.json();

    if (!hotelId) {
      return new Response(JSON.stringify({ error: "Missing hotelId" }), { status: 400, headers: corsHeaders });
    }

    // We can directly call the client for simple lookups, CostGuard will protect it
    const details = await liteApiClient.request<any>('/data/hotel', {
      method: 'GET',
      query: { hotelId }
    });

    return new Response(JSON.stringify({ data: details }), {
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
