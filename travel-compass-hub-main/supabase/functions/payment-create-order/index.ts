import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { prebookRef, bookingId, guestInfo, amount, currency } = await req.json();

    const APP_ID = Deno.env.get('CASHFREE_APP_ID');
    const SECRET_KEY = Deno.env.get('CASHFREE_SECRET_KEY');
    const ENVIRONMENT = Deno.env.get('CASHFREE_ENVIRONMENT') || 'sandbox';

    if (!APP_ID || !SECRET_KEY) {
      throw new Error("Payment gateway not configured. Missing CASHFREE_APP_ID or CASHFREE_SECRET_KEY.");
    }

    // Use the correct Cashfree API base based on environment
    const cashfreeBase = ENVIRONMENT === 'production'
      ? 'https://api.cashfree.com/pg/orders'
      : 'https://sandbox.cashfree.com/pg/orders';

    const cashfreeResponse = await fetch(cashfreeBase, {
      method: 'POST',
      headers: {
        'x-api-version': '2023-08-01',
        'x-client-id': APP_ID,
        'x-client-secret': SECRET_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: `ORDER_${bookingId}_${Date.now()}`,
        order_amount: amount,
        order_currency: currency || 'INR',
        customer_details: {
          customer_id: `CUST_${bookingId}`,
          customer_name: `${guestInfo.firstName} ${guestInfo.lastName}`,
          customer_email: guestInfo.email,
          customer_phone: guestInfo.phone || "9999999999"
        },
        order_meta: {
          return_url: `https://jhnszzidjqwaxghapohe.supabase.co/functions/v1/payment-webhook?bookingId=${bookingId}`,
          notify_url: `https://jhnszzidjqwaxghapohe.supabase.co/functions/v1/payment-webhook`
        }
      })
    });

    const data = await cashfreeResponse.json();

    if (!cashfreeResponse.ok) {
      console.error("Cashfree Error:", data);
      throw new Error(data.message || "Failed to initialize payment gateway");
    }

    return new Response(JSON.stringify({
      payment_session_id: data.payment_session_id,
      order_id: data.order_id
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
