import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { HotelReviewsService } from "../_shared/integrations/liteapi/services/reviews.ts";
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
    const hotelId = url.searchParams.get('hotelId');

    if (!hotelId) {
      return new Response(JSON.stringify({ error: "Missing hotelId" }), { status: 400, headers: corsHeaders });
    }

    const reviewsData = await HotelReviewsService.getReviews(hotelId, true);

    return new Response(JSON.stringify(reviewsData), {
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
