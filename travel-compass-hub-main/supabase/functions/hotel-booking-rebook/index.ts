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
    const body = await req.json();
    const { prebookId, existingBookingId } = body;

    if (!prebookId || !existingBookingId) {
      return new Response(JSON.stringify({ error: 'Missing required fields: prebookId, existingBookingId' }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const endpoint = `/rates/rebook`;

    const requestBody = {
      prebookId,
      existingBookingId
    };

    const rawResponse = await liteApiClient.request<any>(endpoint, {
      method: 'POST',
      body: requestBody
    });

    return new Response(JSON.stringify(rawResponse), {
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
