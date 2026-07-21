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
    
    // Construct query parameters
    const queryParams = new URLSearchParams();
    
    if (body.query) queryParams.append('query', body.query);
    if (body.limit) queryParams.append('limit', body.limit.toString());
    if (body.placeId) queryParams.append('placeId', body.placeId);
    if (body.latitude) queryParams.append('latitude', body.latitude.toString());
    if (body.longitude) queryParams.append('longitude', body.longitude.toString());
    if (body.radius) queryParams.append('radius', body.radius.toString());
    if (body.city) queryParams.append('city', body.city);
    if (body.country) queryParams.append('country', body.country);

    const endpoint = `/data/hotels/room-search?${queryParams.toString()}`;

    const rawResponse = await liteApiClient.request<any>(endpoint, {
      method: 'GET'
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
