import React, { useState, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  MapPin, ChevronRight, Calendar, Sparkles, ArrowRight,
  Phone, MessageCircle, Compass, CheckCircle2, Info,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LiteApiSearchBar } from '../components/LiteApiSearchBar';
import { HotelCard } from '../components/HotelCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { HotelApiService } from '../services/api/hotel.service';
import { HotelSiloSchema } from '../components/seo/HotelSiloSchema';
import { HotelTrustStrip } from '../components/hotels/HotelTrustStrip';
import { HotelMobileStickyBar } from '../components/hotels/HotelMobileStickyBar';
import { HOTEL_CITIES, HOTEL_NAP, HotelCityData } from '../data/hotelSiloData';

interface HotelCityPageProps {
  cityData: HotelCityData;
}

function detectNationality(): string {
  try {
    const locale = navigator.language || navigator.languages?.[0] || 'en-IN';
    const parts = locale.split('-');
    if (parts.length >= 2) {
      const country = parts[parts.length - 1].toUpperCase();
      if (country.length === 2) return country;
    }
  } catch {}
  return 'IN';
}

function getSessionId(): string {
  const key = 'hotel_search_session_id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export const HotelCityPage: React.FC<HotelCityPageProps> = ({ cityData }) => {
  const [searchParams] = useSearchParams();
  const hasQueryParams = searchParams.toString().length > 0;

  // Live API state — wraps existing HotelApiService.searchStream untouched
  const [hotels, setHotels] = useState<any[]>([]);
  const [ratesMap, setRatesMap] = useState<Map<string, any>>(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [ratesLoading, setRatesLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchParams, setLastSearchParams] = useState<Record<string, any>>({});
  const [sortOrder, setSortOrder] = useState<'recommended' | 'price_asc' | 'price_desc'>('recommended');

  const todayFormatted = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const runLiveSearch = useCallback(async (params: Record<string, any>) => {
    setIsLoading(true);
    setRatesLoading(true);
    setError(null);
    setHotels([]);
    setRatesMap(new Map());
    setLastSearchParams(params);

    try {
      const payload: Record<string, any> = {
        ...params,
        currency: 'INR',
        guestInfo: params.guestInfo || String(params.adults || 2),
        guestNationality: params.guestNationality || detectNationality(),
        sessionId: params.sessionId || getSessionId(),
        offset: 0,
      };
      if (params.occupancies) {
        payload.occupancies =
          typeof params.occupancies === 'string'
            ? params.occupancies
            : JSON.stringify(params.occupancies);
      }

      await HotelApiService.searchStream(payload, (chunk) => {
        if (chunk.done) {
          setIsLoading(false);
          setRatesLoading(false);
          return;
        }
        if (chunk.rates) {
          setRatesMap((prev) => {
            const next = new Map(prev);
            chunk.rates.forEach((rate: any) => next.set(rate.hotelId, rate));
            return next;
          });
          setRatesLoading(false);
        }
        if (chunk.hotels) {
          const mapped = chunk.hotels.map((h: any) => ({
            ...h,
            image: h.main_photo || h.thumbnail || null,
          }));
          setHotels((prev) => {
            const existing = new Set(prev.map((p) => p.id || p.hotelId));
            return [...prev, ...mapped.filter((h: any) => !existing.has(h.id || h.hotelId))];
          });
        }
      });
    } catch (err: any) {
      setError(err.message || 'Could not load live rates right now. Please try searching again.');
      setIsLoading(false);
      setRatesLoading(false);
    }
  }, []);

  // Load live rates after initial paint (client-side only; Googlebot sees curated HTML below)
  useEffect(() => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const checkout = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
    runLiveSearch({
      cityName: cityData.cityName,
      placeId: cityData.placeId,
      countryCode: cityData.countryCode,
      chkIn: tomorrow,
      chkOut: checkout,
      checkin: tomorrow,
      checkout: checkout,
      guestInfo: '2',
      adults: 2,
    });
  }, [cityData.slug, cityData.cityName, cityData.placeId, cityData.countryCode, runLiveSearch]);

  const processedHotels = React.useMemo(() => {
    const result = hotels.filter((h) => ratesMap.has(h.id || h.hotelId));
    if (sortOrder === 'price_asc' || sortOrder === 'price_desc') {
      result.sort((a, b) => {
        const ra = ratesMap.get(a.id || a.hotelId);
        const rb = ratesMap.get(b.id || b.hotelId);
        const pa = ra?.offerRetailRate?.amount ?? ra?.roomTypes?.[0]?.offerRetailRate?.amount ?? ra?.finalRate ?? 999999;
        const pb = rb?.offerRetailRate?.amount ?? rb?.roomTypes?.[0]?.offerRetailRate?.amount ?? rb?.finalRate ?? 999999;
        return sortOrder === 'price_asc' ? pa - pb : pb - pa;
      });
    }
    return result;
  }, [hotels, ratesMap, sortOrder]);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: cityData.stateName, url: `/hotels/${cityData.stateSlug}` },
    { name: `Hotels in ${cityData.cityName}`, url: `/hotels/${cityData.slug}` },
  ];

  const nearbyCities = cityData.nearbyCitySlugs
    .map((s) => HOTEL_CITIES[s])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 md:pb-0">
      <HotelSiloSchema
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        canonicalPath={`/hotels/${cityData.slug}`}
        noindex={hasQueryParams || cityData.readyToIndex === false}
        breadcrumbs={breadcrumbs}
        faqs={cityData.faqs}
        itemList={{
          name: `Top Hotels in ${cityData.cityName}`,
          items: cityData.curatedHotels.map((h) => ({
            name: `${h.name} (${h.area}) — from ₹${h.fromPriceInr}/night`,
            url: `/hotels/${cityData.slug}`,
          })),
        }}
      />

      <Navbar />

      {/* 1. Above-the-fold Hero + H1 + Wrapped Search Widget */}
      <section className="relative bg-slate-900 text-white py-12 md:py-16 overflow-hidden">
        <img
          src={cityData.heroImage}
          alt={`Hotels in ${cityData.cityName}`}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/70 to-slate-900/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/hotels" className="hover:text-white">Hotels</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to={`/hotels/${cityData.stateSlug}`} className="hover:text-white">
              {cityData.stateName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">{cityData.cityName}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            {cityData.h1}
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-3xl mb-7">
            {cityData.oneSentenceAnswer}
          </p>

          <div id="city-search-widget" className="max-w-5xl shadow-2xl rounded-2xl">
            <LiteApiSearchBar
              onSearch={(searchData) => {
                const formatDate = (d: Date) => d.toISOString().split('T')[0];
                const chkIn = searchData.checkin || searchData.chkIn || formatDate(new Date(Date.now() + 86400000));
                const chkOut = searchData.checkout || searchData.chkOut || formatDate(new Date(Date.now() + 86400000 * 3));
                runLiveSearch({
                  ...searchData,
                  chkIn,
                  chkOut,
                  checkin: chkIn,
                  checkout: chkOut,
                });
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <HotelTrustStrip />

      {/* 3. Answer-First Summary (40–60 words for AEO & AI citations) */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <div className="bg-white rounded-2xl border border-blue-100 p-6 md:p-7 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h2 className="text-lg md:text-xl font-extrabold text-gray-900">
              Where to Stay in {cityData.cityName}: Quick Summary
            </h2>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              Prices checked {todayFormatted}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            {cityData.answerFirstSummary}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-xs sm:text-sm">
            <div>
              <span className="text-gray-500 block">Typical Price Range</span>
              <span className="font-bold text-gray-900">{cityData.typicalPriceRange}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Best Season</span>
              <span className="font-bold text-gray-900">{cityData.bestSeason}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Standard Timings</span>
              <span className="font-bold text-gray-900">{cityData.checkInStandard}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Hotel Results (API-driven after paint) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Live Available Hotels in {cityData.cityName}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {isLoading || ratesLoading
                ? `Checking live room rates in ${cityData.cityName}…`
                : `${processedHotels.length} hotels with confirmed availability`}
            </p>
          </div>
          {processedHotels.length > 0 && (
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              aria-label="Sort hotels"
              className="bg-white border border-gray-200 text-gray-800 text-sm rounded-lg px-3 py-2 font-medium outline-none"
            >
              <option value="recommended">Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          )}
        </div>

        {error && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processedHotels.slice(0, 12).map((hotel) => {
            const rate = ratesMap.get(hotel.id || hotel.hotelId);
            const cheapest = rate?.roomTypes?.[0];
            const price =
              rate?.finalRate ??
              cheapest?.offerRetailRate?.amount ??
              cheapest?.rates?.[0]?.retailRate?.total?.[0]?.amount ??
              null;
            const currency =
              rate?.currency ??
              cheapest?.offerRetailRate?.currency ??
              'INR';
            const initialPrice =
              rate?.initialRate ??
              cheapest?.offerInitialPrice?.amount ??
              null;

            return (
              <HotelCard
                key={hotel.id || hotel.hotelId}
                id={hotel.id || hotel.hotelId}
                name={hotel.name || ''}
                address={hotel.address || ''}
                stars={hotel.stars ?? null}
                rating={hotel.reviewScore ?? hotel.rating ?? undefined}
                image={hotel.main_photo || hotel.thumbnail || hotel.image || ''}
                city={hotel.city || cityData.cityName}
                country={hotel.country || cityData.countryCode}
                price={price}
                currency={currency}
                initialPrice={initialPrice}
                roomName={rate?.roomName || ''}
                promotions={rate?.promotions || []}
                perks={rate?.perks || []}
                checkin={lastSearchParams.chkIn || lastSearchParams.checkin}
                checkout={lastSearchParams.chkOut || lastSearchParams.checkout}
                adults={lastSearchParams.adults || 2}
              />
            );
          })}

          {(isLoading || ratesLoading) &&
            [...Array(4)].map((_, i) => <SkeletonCard key={`skel-${i}`} />)}
        </div>
      </section>

      {/* 5. Compare-in-One-Table Block (Prerendered HTML for AI & Snippets) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Top Hotels in {cityData.cityName} by Budget Tier
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Quick comparison of popular areas, traveller fit, and indicative starting tariffs (checked {todayFormatted}).
        </p>
        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-xs">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-bold">
                <th className="py-3.5 px-4">Hotel / Property</th>
                <th className="py-3.5 px-4">Tier</th>
                <th className="py-3.5 px-4">Area</th>
                <th className="py-3.5 px-4">Best For</th>
                <th className="py-3.5 px-4">From (INR/Night)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cityData.curatedHotels.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/70">
                  <td className="py-3.5 px-4 font-bold text-gray-900">{row.name}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                      {row.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600">{row.area}</td>
                  <td className="py-3.5 px-4 text-gray-700">{row.bestFor}</td>
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">
                    ₹{row.fromPriceInr.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Where to Stay Guide (Neighbourhoods + Distances) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Where to Stay in {cityData.cityName}: Neighbourhood Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cityData.areas.map((area, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-xs font-bold text-emerald-700 mb-2">
                  {area.typicalPriceRange} · Best for: {area.bestFor}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{area.highlights}</p>
              </div>
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-2.5">
                {area.distanceNote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bundle Upsell (Value OTAs Cannot Copy) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Hotel + Transfer + Sightseeing Bundle
            </div>
            <h2 className="text-2xl font-extrabold mb-2">{cityData.bundleUpsell.title}</h2>
            <p className="text-blue-100 text-sm md:text-base">{cityData.bundleUpsell.description}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to={cityData.bundleUpsell.packageHref}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              <span>{cityData.bundleUpsell.packageLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={HOTEL_NAP.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 text-white font-bold rounded-xl text-sm hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Expert</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. How to Reach & Indian Traveller Essentials */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-600" />
              How to Reach {cityData.cityName}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{cityData.howToReach}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" />
              Indian Traveller Essentials
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pay in INR via UPI, NetBanking, Debit/Credit Card, or EMI</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>GST invoices available ({HOTEL_NAP.gstin}) for corporate reimbursements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct WhatsApp &amp; phone support on {HOTEL_NAP.phoneFormatted}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FAQs (AEO Answer-First Q&A) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions — Hotels in {cityData.cityName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cityData.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Related Links & Direct Support Strip */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gray-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Explore Nearby &amp; Related Guides</h2>
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/hotels/${cityData.stateSlug}`}
                className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
              >
                All Hotels in {cityData.stateName}
              </Link>
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  to={`/hotels/${nc.slug}`}
                  className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
                >
                  Hotels in {nc.cityName}
                </Link>
              ))}
              <Link
                to="/hotels"
                className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
              >
                All India Hotel Hub
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-600 shrink-0">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>
              Need help? Call <a href={HOTEL_NAP.telHref} className="font-bold text-gray-900 underline">{HOTEL_NAP.phone}</a> · {HOTEL_NAP.email}
            </span>
          </div>
        </div>
      </section>

      <Footer />
      <HotelMobileStickyBar
        onBookClick={() =>
          document.getElementById('city-search-widget')?.scrollIntoView({ behavior: 'smooth' })
        }
      />
    </div>
  );
};
