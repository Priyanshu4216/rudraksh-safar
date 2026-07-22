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
  const [ratesLoading, setRatesLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [lastSearchParams, setLastSearchParams] = useState<Record<string, string>>({});
  
  // Track rates by hotel ID as they stream in
  const [ratesMap, setRatesMap] = useState<Map<string, any>>(new Map());

  const [offset, setOffset] = useState(0);

  const handleSearch = useCallback(async (params: Record<string, string>, isLoadMore = false, currentOffset = 0) => {
    setIsLoading(true);
    setRatesLoading(true);
    setError(null);
    setHasSearched(true);
    
    if (!isLoadMore) {
      setHotels([]);
      setRatesMap(new Map());
      setLastSearchParams(params);
      setOffset(0);
    }
    
    try {
      const currency = await fetchUserCurrency();
      const searchParams = { ...params, currency, guestInfo: params.guestInfo || '2', offset: currentOffset };
      
      await HotelApiService.searchStream(searchParams, (chunk) => {
        if (chunk.done) {
          setIsLoading(false);
          setRatesLoading(false);
          return;
        }

        if (chunk.rates) {
          setRatesMap(prev => {
            const next = new Map(prev);
            chunk.rates.forEach((rate: any) => next.set(rate.hotelId, rate));
            return next;
          });
          setRatesLoading(false);
        }

        if (chunk.hotels) {
          const newHotels = chunk.hotels.map((h: any) => ({
            ...h,
            image: h.main_photo || h.thumbnail || null
          }));
          setHotels(prev => {
            // Deduplicate by ID
            const existingIds = new Set(prev.map(p => p.id || p.hotelId));
            const uniqueNew = newHotels.filter(h => !existingIds.has(h.id || h.hotelId));
            return [...prev, ...uniqueNew];
          });
        }
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to fetch hotels. Please try again.');
      setIsLoading(false);
      setRatesLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    if (!lastSearchParams) return;
    const newOffset = offset + 600; // Same as MAX_HOTELS_TO_PRICE in backend
    setOffset(newOffset);
    handleSearch(lastSearchParams, true, newOffset);
  };


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
                  let chkIn = searchData.checkin || searchData.checkIn || searchData.chkIn;
                  let chkOut = searchData.checkout || searchData.checkOut || searchData.chkOut;
                  
                  if (chkIn && typeof chkIn === 'string') chkIn = chkIn.replace(/\s+/g, '-');
                  if (chkOut && typeof chkOut === 'string') chkOut = chkOut.replace(/\s+/g, '-');
                  
                  if (!chkIn && searchData.dates?.start) chkIn = formatDate(new Date(searchData.dates.start));
                  if (!chkOut && searchData.dates?.end) chkOut = formatDate(new Date(searchData.dates.end));
                  
                  if (!chkIn) chkIn = formatDate(new Date(Date.now() + 86400000));
                  if (!chkOut) chkOut = formatDate(new Date(Date.now() + 86400000 * 2));

                  const finalCity = searchData.cityName || searchData.query || '';

                  // Build search payload — pass placeId if available (unlocks full inventory)
                  const searchPayload: any = {
                    cityName: finalCity,
                    chkIn,
                    chkOut,
                    checkin: chkIn,
                    checkout: chkOut,
                    guestInfo: searchData.guestInfo || String(searchData.adults || 2),
                  };

                  // Pass through placeId for full inventory search (same as widget)
                  if (searchData.placeId) searchPayload.placeId = searchData.placeId;
                  if (searchData.hotelId) searchPayload.hotelId = searchData.hotelId;

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

        {/* "No results" — only show after both hotels AND rates have finished loading */}
        {hasSearched && !isLoading && !ratesLoading && ratesMap.size === 0 && !error && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-5">
              <Building2 className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Available Hotels Found</h3>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              No hotels with room availability were found for your selected dates. Try different dates or a nearby destination.
            </p>
          </div>
        )}

        {hasSearched && (isLoading || ratesLoading || ratesMap.size > 0) && (
          <>
            <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                  Available Hotels
                </h2>
                <p className="text-gray-500 text-base">
                  {isLoading || ratesLoading
                    ? `Searching for available rooms…`
                    : `${ratesMap.size} hotels with confirmed availability · sorted by price`}
                </p>
              </div>
              {!isLoading && !ratesLoading && ratesMap.size > 0 && (
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  ✓ Only showing hotels with available rooms
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Only render hotels that have confirmed rates */}
              {hotels
                .filter(hotel => ratesMap.has(hotel.id || hotel.hotelId))
                .map((hotel) => {
                  const rate = ratesMap.get(hotel.id || hotel.hotelId);

                  let price: number | null = null;
                  let currency = 'INR';
                  let initialPrice: number | null = null;

                  if (rate) {
                    if (rate.finalRate != null) {
                      price = rate.finalRate;
                      currency = rate.currency || 'INR';
                      initialPrice = rate.initialRate ?? null;
                    } else if (rate.roomTypes?.length > 0) {
                      const allRates = rate.roomTypes.flatMap((rt: any) => rt.rates || []);
                      if (allRates.length > 0) {
                        const prices = allRates.map((r: any) =>
                          r.finalRate ?? r.retailRate?.total?.[0]?.amount ?? 999999
                        );
                        price = Math.min(...prices);
                        currency = allRates[0].retailRate?.total?.[0]?.currency || allRates[0].currency || 'INR';
                        initialPrice = allRates[0].retailRate?.initialPrice ?? null;
                      }
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
                      checkin={lastSearchParams.chkIn || lastSearchParams.checkin}
                      checkout={lastSearchParams.chkOut || lastSearchParams.checkout}
                    />
                  );
                })}

              {/* Skeleton cards while loading */}
              {(isLoading || ratesLoading) && (
                [...Array(8)].map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
              )}
            </div>

            {/* Load More Button */}
            {hasSearched && !isLoading && !ratesLoading && hotels.length > offset + 600 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl shadow-sm hover:bg-blue-50 transition-all active:scale-95 flex items-center gap-2"
                >
                  Load More Available Hotels
                </button>
              </div>
            )}
          </>
        )}

      </section>
    </div>
  );
};
