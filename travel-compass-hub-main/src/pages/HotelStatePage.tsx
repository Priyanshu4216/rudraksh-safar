import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Building2, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LiteApiSearchBar } from '../components/LiteApiSearchBar';
import { HotelSiloSchema } from '../components/seo/HotelSiloSchema';
import { HotelTrustStrip } from '../components/hotels/HotelTrustStrip';
import { HotelMobileStickyBar } from '../components/hotels/HotelMobileStickyBar';
import {
  HOTEL_CITIES,
  HOTEL_NAP,
  HotelStateData,
  PRIORITY_STATE_LIST,
} from '../data/hotelSiloData';

interface HotelStatePageProps {
  stateData: HotelStateData;
}

export const HotelStatePage: React.FC<HotelStatePageProps> = ({ stateData }) => {
  const navigate = useNavigate();
  const cities = stateData.citySlugs
    .map((slug) => HOTEL_CITIES[slug])
    .filter(Boolean);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: stateData.stateName, url: `/hotels/${stateData.slug}` },
  ];

  const handleSearchRedirect = (searchData: any) => {
    const params = new URLSearchParams();
    if (searchData.cityName) params.set('city', searchData.cityName);
    if (searchData.placeId) params.set('placeId', searchData.placeId);
    if (searchData.countryCode) params.set('country', searchData.countryCode);
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 md:pb-0">
      <HotelSiloSchema
        title={stateData.metaTitle}
        description={stateData.metaDescription}
        canonicalPath={`/hotels/${stateData.slug}`}
        noindex={stateData.readyToIndex === false}
        breadcrumbs={breadcrumbs}
        faqs={stateData.faqs}
        itemList={{
          name: `Hotel Destinations in ${stateData.stateName}`,
          items: cities.map((c) => ({
            name: `Hotels in ${c.cityName}`,
            url: `/hotels/${c.slug}`,
          })),
        }}
      />

      <Navbar />

      {/* Hero + Wrapped Search Widget */}
      <section className="relative bg-slate-900 text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/hotels" className="hover:text-white">Hotels</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">{stateData.stateName}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {stateData.h1}
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-3xl mb-8">
            {stateData.answerFirstSummary}
          </p>

          <div className="max-w-5xl shadow-2xl rounded-2xl">
            <LiteApiSearchBar onSearch={handleSearchRedirect} />
          </div>
        </div>
      </section>

      <HotelTrustStrip />

      {/* Cities in State */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Popular Cities for Hotel Booking in {stateData.stateName}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Select a city below to compare live hotel rates, neighbourhood guides, and GST-eligible stays.
            </p>
          </div>
          <span className="text-xs text-gray-500">Last updated: {stateData.lastUpdated}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/hotels/${city.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 h-44 sm:h-auto shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={city.heroImage}
                  alt={`Hotels in ${city.cityName}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                      Hotels in {city.cityName}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 inline-block px-2.5 py-0.5 rounded-full mb-2.5">
                    {city.typicalPriceRange}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {city.oneSentenceAnswer}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>View Live Rates &amp; Area Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Book With Rudraksh Safar in State */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            Why Book {stateData.stateName} Hotels with {HOTEL_NAP.brandName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {stateData.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions — {stateData.stateName} Hotels
        </h2>
        <div className="space-y-4">
          {stateData.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other States */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="bg-blue-50/70 rounded-2xl border border-blue-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Explore More States &amp; Hotel Hubs</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/hotels"
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
            >
              All India Hotel Hub
            </Link>
            {PRIORITY_STATE_LIST.filter((s) => s.slug !== stateData.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/hotels/${s.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
              >
                Hotels in {s.stateName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <HotelMobileStickyBar />
    </div>
  );
};
