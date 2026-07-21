import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { liteApiClient } from "../_shared/integrations/liteapi/v3/client.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'GET') {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const hashKey = 'currencies_list_v1';

    // 1. Cache Check
    const { data: cached } = await supabase
      .from('static_cache')
      .select('data, expires_at')
      .eq('hash_key', hashKey)
      .single();

    if (cached && new Date(cached.expires_at) > new Date()) {
       return new Response(JSON.stringify(cached.data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
       });
    }

    // 2. Fetch from Supplier (LiteAPI)
    const rawResponse = await liteApiClient.request<any>('/data/currencies', {
      method: 'GET'
    });

    // 3. Cache (24 hours)
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    await supabase.from('static_cache').upsert({
      hash_key: hashKey,
      data: rawResponse,
      expires_at: expiresAt.toISOString()
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
