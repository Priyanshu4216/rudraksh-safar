import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { HotelApiService } from '../services/api/hotel.service';
import {
  ShieldCheck, CreditCard, User, Loader2, Phone,
  MessageSquare, Info, Calendar, MapPin, CheckCircle
} from 'lucide-react';
import { useCurrency } from '../contexts/CurrencyContext';
import { BookingStepper } from '../components/BookingStepper';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    LiteAPIPayment: any;
  }
}

type Step = 'guest_info' | 'prebooking' | 'payment' | 'finalizing' | 'failed';

export const Checkout = () => {
  const { offerId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { currency } = useCurrency();

  // Step state
  const [step, setStep] = useState<Step>('guest_info');
  const [error, setError] = useState<string | null>(null);

  // Guest form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Read booking state from HotelDetails navigation
  const state = (location.state as any) || {};
  const roomName    = state.roomName    || 'Selected Room';
  const hotelName   = state.hotelName   || 'Hotel';
  const hotelAddress= state.hotelAddress|| '';
  const boardName   = state.boardName   || 'Room Only';
  const displayCurrency = state.currency || currency;
  const price   = Number(state.price)  || 0;
  const taxes   = Number(state.taxes)  || 0;
  const total   = price + taxes;
  const hotelId = state.hotelId  || '';
  const checkin = state.checkin  || new Date().toISOString().split('T')[0];
  const checkout = state.checkout || new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const nights = Math.max(
    1,
    Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000)
  );

  const currencySymbol = displayCurrency === 'INR' ? '₹'
    : displayCurrency === 'USD' ? '$'
    : displayCurrency + ' ';

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  // ─── 1. Load LiteAPIPayment SDK script ────────────────────────────────────
  useEffect(() => {
    if (document.getElementById('liteapi-sdk-script')) return;
    const script = document.createElement('script');
    script.id = 'liteapi-sdk-script';
    script.src = 'https://payment-wrapper.liteapi.travel/dist/liteAPIPayment.js?v=a1';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('liteapi-sdk-script');
      if (el) el.remove();
    };
  }, []);

  // ─── 2. On mount: check if returning from payment redirect (tid + pid) ────
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tid = params.get('tid');
    const pid = params.get('pid');

    if (!tid || !pid) return;

    // Clean URL immediately
    window.history.replaceState({}, document.title, location.pathname);

    setStep('finalizing');

    const finalize = async () => {
      try {
        const storedGuest   = sessionStorage.getItem('guestInfo');
        const storedBooking = sessionStorage.getItem('pendingBookingId');

        const gInfo       = storedGuest   ? JSON.parse(storedGuest) : { firstName: 'Guest', lastName: '', email: '' };
        const realBookingId = storedBooking || crypto.randomUUID();

        const idempotencyKey = crypto.randomUUID();

        await HotelApiService.book(
          pid,            // prebookId
          realBookingId,  // our DB booking ID
          gInfo,
          idempotencyKey,
          tid             // transactionId from payment
        );

        sessionStorage.removeItem('guestInfo');
        sessionStorage.removeItem('pendingBookingId');

        navigate(`/booking/confirm?bookingId=${realBookingId}`, { replace: true });
      } catch (err: any) {
        setError(
          'Payment was received but booking confirmation failed: ' +
          err.message +
          '. Please contact support — your payment will not be charged twice.'
        );
        setStep('failed');
      }
    };

    finalize();
  }, [location.search, location.pathname, navigate]);

  // ─── 3. Main form submit ──────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setError(null);
    setStep('prebooking');

    try {
      // 3a. Save booking to DB
      const { data: bookingRecord, error: dbErr } = await supabase
        .from('hotel_bookings')
        .insert({
          hotel_id:    hotelId,
          status:      'ROOM_SELECTED',
          total_price: total,
          currency:    displayCurrency,
          checkin,
          checkout,
          guest_info:  { firstName, lastName, email, phone, specialRequests }
        })
        .select()
        .single();

      if (dbErr || !bookingRecord) {
        throw new Error('Failed to create booking record: ' + (dbErr?.message || 'unknown error'));
      }

      const realBookingId = bookingRecord.id;

      // Persist for finalization after redirect
      sessionStorage.setItem('guestInfo', JSON.stringify({ firstName, lastName, email, phone, specialRequests }));
      sessionStorage.setItem('pendingBookingId', realBookingId);

      // 3b. Prebook with LiteAPI Payment SDK enabled
      const prebookData = await HotelApiService.prebook(
        offerId as string,
        realBookingId,
        [],
        true   // usePaymentSdk = true → returns secretKey + transactionId
      );

      // LiteAPI response shape: { data: { prebookId, secretKey, transactionId } }
      const secretKey     = prebookData?.data?.secretKey     || prebookData?.secretKey;
      const transactionId = prebookData?.data?.transactionId || prebookData?.transactionId;
      const prebookId     = prebookData?.data?.prebookId     || prebookData?.prebookId;

      if (!secretKey || !transactionId || !prebookId) {
        throw new Error(
          'Payment SDK credentials not received from LiteAPI. ' +
          'Make sure your NUITEE_APT_KEY is a live key and the rate supports payment SDK.'
        );
      }

      // 3c. Activate payment UI
      setStep('payment');

      // Give React time to render the #liteapi-payment-element div
      setTimeout(() => {
        if (!window.LiteAPIPayment) {
          setError('Payment SDK failed to load. Please refresh the page and try again.');
          setStep('guest_info');
          return;
        }

        const returnUrl =
          `${window.location.origin}${window.location.pathname}?tid=${transactionId}&pid=${prebookId}`;

        const litePayment = new window.LiteAPIPayment({
          publicKey:     import.meta.env.VITE_LITEAPI_ENV === 'live' ? 'live' : 'sandbox',
          appearance:    { theme: 'flat' },
          options:       { business: { name: 'Rudraksh Safar' } },
          targetElement: '#liteapi-payment-element',
          secretKey,
          returnUrl,
        });

        litePayment.handlePayment();
      }, 400);

    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStep('guest_info');
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  const isFormLocked = step !== 'guest_info' && step !== 'failed';

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Stepper */}
      <div className="bg-white border-b border-gray-200 shadow-sm mb-8">
        <BookingStepper currentStep={step === 'guest_info' || step === 'failed' ? 2 : 3} />
      </div>

      {/* Finalizing overlay */}
      {step === 'finalizing' && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl max-w-sm mx-4">
            <Loader2 className="w-14 h-14 text-green-600 animate-spin mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirming with Hotel…</h2>
            <p className="text-gray-500 text-sm">Payment received. Do not close this tab.</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Secure Checkout</h1>
          <p className="text-gray-500 flex items-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Your booking is protected by bank-level encryption.
          </p>
        </div>

        {/* Error banner */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-xl flex items-start gap-3">
            <Info className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="font-bold text-red-800 text-sm">Error</p>
              <p className="text-red-700 text-sm mt-0.5">{error}</p>
            </div>
            <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600 text-lg leading-none ml-2">✕</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Guest Details Card */}
            <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-opacity duration-300 ${isFormLocked ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Guest Details
                </h2>

                <form id="checkout-form" onSubmit={handleSubmit}>
                  {/* Name row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text" required autoComplete="given-name"
                        placeholder="Priyanshu"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text" required autoComplete="family-name"
                        placeholder="Chaudhary"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email" required autoComplete="email"
                        placeholder="rudrakshsafar@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number * <span className="text-gray-400 font-normal">(with country code)</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel" required autoComplete="tel"
                          placeholder="+91 97130 57086"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special requests */}
                  <div className="border-t border-gray-100 pt-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      Special Requests <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Early check-in, high floor, quiet room, extra pillows..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      value={specialRequests}
                      onChange={e => setSpecialRequests(e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                      Special requests are not guaranteed but the hotel will do its best.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment element — rendered by Payment SDK */}
            {(step === 'prebooking' || step === 'payment') && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shadow-blue-200">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
                      <p className="text-xs text-gray-500">Complete your payment securely below</p>
                    </div>
                  </div>
                  {step === 'prebooking' && (
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-blue-100">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                      Securing rate…
                    </span>
                  )}
                </div>

                <style>{`
                  #liteapi-payment-element iframe {
                    width: 100% !important;
                    max-width: 520px !important;
                    margin: 0 auto !important;
                    border-radius: 16px !important;
                    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05) !important;
                  }
                `}</style>

                {/* Payment SDK mounts here */}
                <div
                  id="liteapi-payment-element"
                  className="w-full min-h-[420px] p-6 md:p-8 flex flex-col items-center justify-center bg-gray-50/50"
                >
                  {step === 'prebooking' && (
                    <div className="text-center py-12 space-y-3">
                      <Loader2 className="w-10 h-10 text-blue-500 animate-spin mx-auto" />
                      <p className="text-gray-700 font-semibold">Locking in your room rate…</p>
                      <p className="text-gray-400 text-sm">Setting up secure payment window. Please wait.</p>
                    </div>
                  )}
                  {step === 'payment' && (
                    <div className="text-center py-8 text-gray-400 text-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                      Loading secure payment form…
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info notice */}
            {step === 'guest_info' && (
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Booking Information
                </h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Your card is charged only after the hotel confirms the booking.</li>
                  <li>A confirmation email will be sent to the address you provide.</li>
                  <li>Cancellation terms are set by the hotel and shown at payment.</li>
                </ul>
              </div>
            )}
          </div>

          {/* ── Right column: Booking Summary ── */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-8">

              {/* Dark header */}
              <div className="p-6 bg-gray-900 text-white">
                <h2 className="font-bold text-lg mb-0.5">Booking Summary</h2>
                <p className="text-gray-400 text-sm truncate">{hotelName}</p>
              </div>

              {/* Hotel info */}
              <div className="p-5 border-b border-gray-100 space-y-2.5">
                {hotelAddress && (
                  <p className="text-xs text-gray-500 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" />
                    {hotelAddress}
                  </p>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="font-semibold">{fmtDate(checkin)}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-semibold">{fmtDate(checkout)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {nights} Night{nights > 1 ? 's' : ''}
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {boardName}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 truncate">{roomName}</p>
              </div>

              {/* Price breakdown */}
              <div className="p-5 border-b border-gray-100 space-y-2.5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Price Breakdown</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Base Rate ({nights} night{nights > 1 ? 's' : ''})</span>
                  <span>{currencySymbol}{price.toLocaleString('en-IN')}</span>
                </div>
                {taxes > 0 && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Taxes & Fees</span>
                    <span>{currencySymbol}{taxes.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                )}
              </div>

              {/* Total + CTA */}
              <div className="p-5 bg-gray-50">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-blue-600">
                    {currencySymbol}{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                {/* CTA button — only show when form is active */}
                {(step === 'guest_info' || step === 'failed') && (
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Payment
                  </button>
                )}

                {step === 'prebooking' && (
                  <div className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Securing Rate…
                  </div>
                )}

                {step === 'payment' && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-xl p-3 mt-1">
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
                    Payment window open. Complete payment above.
                  </div>
                )}

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  256-bit SSL Bank-Grade Encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
