import React, { useState, useCallback } from 'react';
import { Loader2, Sparkles, Star, Building2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiteApiSearchBar } from '../components/LiteApiSearchBar';
import { HotelCard } from '../components/HotelCard';
import { SkeletonCard } from '../components/SkeletonCard';
import Navbar from '../components/Navbar';
import { HotelApiService } from '../services/api/hotel.service';

const fetchUserCurrency = async () => 'INR';

export const HotelsHub: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [lastSearchParams, setLastSearchParams] = useState<Record<string, string>>({});
  
  // Track rates by hotel ID as they stream in
  const [ratesMap, setRatesMap] = useState<Map<string, any>>(new Map());

  const handleSearch = useCallback(async (params: Record<string, string>) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setHotels([]);
    setRatesMap(new Map());
    setLastSearchParams(params);
    
    let accumulatedHotels: any[] = [];
    const currentRates = new Map<string, any>();

    try {
      const currency = await fetchUserCurrency();
      const searchParams = { ...params, currency, guestInfo: params.guestInfo || '2' };
      
      await HotelApiService.searchStream(searchParams, (chunk) => {
        console.log('[HotelsHub] Chunk received:', chunk);
        if (chunk.done) {
          setIsLoading(false);
          return;
        }

        // If chunk contains rates, store them
        if (chunk.rates) {
          console.log('[HotelsHub] Rates chunk, count:', chunk.rates.length);
          chunk.rates.forEach((rate: any) => {
            currentRates.set(rate.hotelId, rate);
          });
          setRatesMap(new Map(currentRates));
        }

        // If chunk contains hotels, append them
        if (chunk.hotels) {
          console.log('[HotelsHub] Hotels chunk, count:', chunk.hotels.length);
          const newHotels = chunk.hotels.map((h: any) => ({
            ...h,
            image: h.main_photo || h.thumbnail || null
          }));
          accumulatedHotels = [...accumulatedHotels, ...newHotels];
          setHotels([...accumulatedHotels]);
        }
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to fetch hotels. Please try again.');
      setIsLoading(false);
    }
  }, []);

  const FAMOUS_HOTEL_BRANDS = [
    { name: 'Mayfair Hotels', category: 'Heritage & Spa Resorts' },
    { name: 'Lemon Tree Hotels', category: 'Midscale & Business Stay' },
    { name: 'Hyatt Regency', category: 'Global Luxury & Resorts' },
    { name: 'Taj Hotels & Palaces', category: 'Ultra Luxury & Heritage' },
    { name: 'The Oberoi Group', category: 'Luxury Palaces & Villas' },
    { name: 'Marriott Bonvoy', category: 'Premium International' },
    { name: 'ITC Hotels', category: 'Responsible Luxury' },
    { name: 'Radisson Blu', category: 'Upper Upscale Stay' },
    { name: 'The Leela Palaces', category: 'Royal Palaces & Spas' },
    { name: 'Ginger Hotels', category: 'Smart Economy Stay' },
    { name: 'Hilton Hotels', category: 'Global Hospitality' },
    { name: 'Novotel & Accor', category: 'Contemporary Modern' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <section className="relative min-h-[460px] flex flex-col items-center justify-center pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md tracking-tight">
              Find Your Perfect Stay
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-sm">
              Search through millions of premium hotels worldwide with real-time pricing and verified reviews.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            <div className="w-full shadow-2xl rounded-2xl">
              <LiteApiSearchBar 
                onSearch={async (searchData) => {
                  const formatDate = (d: Date) => d.toISOString().split('T')[0];
                  let chkIn = searchData.checkin || searchData.checkIn;
                  let chkOut = searchData.checkout || searchData.checkOut;
                  
                  if (chkIn && typeof chkIn === 'string') chkIn = chkIn.replace(/\s+/g, '-');
                  if (chkOut && typeof chkOut === 'string') chkOut = chkOut.replace(/\s+/g, '-');
                  
                  if (!chkIn && searchData.dates?.start) chkIn = formatDate(new Date(searchData.dates.start));
                  if (!chkOut && searchData.dates?.end) chkOut = formatDate(new Date(searchData.dates.end));
                  
                  if (!chkIn) chkIn = formatDate(new Date(Date.now() + 86400000 * 7));
                  if (!chkOut) chkOut = formatDate(new Date(Date.now() + 86400000 * 10));

                  const finalCity = searchData.cityName || searchData.query || '';

                  const searchPayload: any = {
                    cityName: finalCity,
                    chkIn: chkIn,
                    chkOut: chkOut,
                    guestInfo: searchData.guestInfo || searchData.adults?.toString() || '2'
                  };

                  if (searchData.hotelName) searchPayload.hotelName = searchData.hotelName;
                  if (searchData.hotelId) searchPayload.hotelId = searchData.hotelId;
                  if (searchData.countryCode) searchPayload.countryCode = searchData.countryCode;

                  // Fallback country code parsing from city string if contains comma
                  if (!searchPayload.countryCode && finalCity.includes(',')) {
                    const parts = finalCity.split(',').map((p: string) => p.trim().toLowerCase());
                    const countryMap: Record<string, string> = {
                      'india': 'IN', 'usa': 'US', 'united states': 'US', 'uk': 'GB',
                      'united kingdom': 'GB', 'france': 'FR', 'germany': 'DE', 'italy': 'IT',
                      'spain': 'ES', 'canada': 'CA', 'australia': 'AU', 'japan': 'JP',
                      'china': 'CN', 'brazil': 'BR', 'mexico': 'MX', 'thailand': 'TH',
                      'indonesia': 'ID', 'malaysia': 'MY', 'singapore': 'SG', 'vietnam': 'VN',
                      'philippines': 'PH', 'south korea': 'KR', 'switzerland': 'CH',
                      'netherlands': 'NL', 'uae': 'AE', 'united arab emirates': 'AE', 'portugal': 'PT',
                      'himachal pradesh': 'IN', 'rajasthan': 'IN', 'goa': 'IN', 'kerala': 'IN',
                      'maharashtra': 'IN', 'uttarakhand': 'IN', 'punjab': 'IN', 'haryana': 'IN',
                      'jammu & kashmir': 'IN', 'jammu and kashmir': 'IN', 'gujarat': 'IN',
                      'karnataka': 'IN', 'tamil nadu': 'IN', 'andhra pradesh': 'IN',
                      'telangana': 'IN', 'west bengal': 'IN', 'odisha': 'IN', 'bihar': 'IN',
                      'uttar pradesh': 'IN', 'madhya pradesh': 'IN', 'chhattisgarh': 'IN',
                      'jharkhand': 'IN', 'assam': 'IN', 'sikkim': 'IN', 'manipur': 'IN',
                      'meghalaya': 'IN', 'mizoram': 'IN', 'nagaland': 'IN', 'tripura': 'IN',
                      'arunachal pradesh': 'IN', 'delhi': 'IN',
                    };
                    let resolved = '';
                    for (let i = parts.length - 1; i >= 0; i--) {
                      if (countryMap[parts[i]]) { resolved = countryMap[parts[i]]; break; }
                    }
                    if (resolved) searchPayload.countryCode = resolved;
                  }

                  handleSearch(searchPayload);
                }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Famous Hotel Brands Light Theme Auto-Moving Carousel */}
      <section className="bg-white py-4 border-y border-gray-200/90 shadow-sm relative overflow-hidden">
        <style>{`
          @keyframes brandScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-brand-scroll {
            display: flex;
            width: max-content;
            animation: brandScroll 32s linear infinite;
          }
          .animate-brand-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800">
            <Building2 className="w-4 h-4 text-blue-600" />
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-800">Top Hotel Brands Across Categories</h2>
          </div>
        </div>

        <div className="overflow-hidden w-full relative">
          <div className="animate-brand-scroll flex items-center gap-3.5 px-4">
            {[...FAMOUS_HOTEL_BRANDS, ...FAMOUS_HOTEL_BRANDS].map((brand, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handleSearch({
                    cityName: brand.name,
                    countryCode: 'IN',
                    chkIn: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
                    chkOut: new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0],
                    guestInfo: '2'
                  });
                }}
                className="group flex flex-col justify-center bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-500/50 rounded-xl px-5 py-2.5 shrink-0 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="font-extrabold text-gray-900 text-sm group-hover:text-blue-600 transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10.5px] text-gray-500 font-medium whitespace-nowrap mt-0.5">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Rendering */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {hasSearched && !isLoading && hotels.length === 0 && !error && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700">No matches found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your destination or search query.</p>
          </div>
        )}

        {hasSearched && (hotels.length > 0 || isLoading) && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                Search Results
              </h2>
              <p className="text-gray-500 text-lg">
                Found {hotels.length} luxury properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => {
                const rate = ratesMap.get(hotel.id || hotel.hotelId);
                
                let price = null;
                let currency = 'INR';
                let initialPrice = null;
                
                if (rate) {
                  if (rate.roomTypes && rate.roomTypes.length > 0) {
                    const allRates = rate.roomTypes.flatMap((rt: any) => rt.rates || []);
                    if (allRates.length > 0) {
                      price = Math.min(...allRates.map((r: any) => r.retailRate?.total?.[0]?.amount || r.price || 999999));
                      currency = allRates[0].retailRate?.total?.[0]?.currency || allRates[0].currency || 'INR';
                      initialPrice = allRates[0].retailRate?.initialPrice || null;
                    }
                  } else if (rate.finalRate != null) {
                    price = rate.finalRate;
                    currency = rate.currency || 'INR';
                  }
                }

                return (
                  <HotelCard
                    key={hotel.id || hotel.hotelId}
                    id={hotel.id || hotel.hotelId}
                    name={hotel.name || ''}
                    address={hotel.address || ''}
                    stars={hotel.stars ?? null}
                    rating={hotel.reviewScore ?? hotel.rating ?? undefined}
                    image={hotel.main_photo || hotel.thumbnail || hotel.image || ''}
                    city={hotel.city || ''}
                    country={hotel.country || ''}
                    price={price}
                    currency={currency}
                    initialPrice={initialPrice}
                    roomName={rate?.roomName || ''}
                    promotions={rate?.promotions || []}
                    perks={rate?.perks || []}
                    checkin={lastSearchParams.chkIn}
                    checkout={lastSearchParams.chkOut}
                  />
                );
              })}
              
              {isLoading && (
                [...Array(6)].map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
};
