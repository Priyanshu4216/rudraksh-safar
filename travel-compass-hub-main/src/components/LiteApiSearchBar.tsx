import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Users, Search, Loader2, Building2 } from 'lucide-react';
import { supabaseUrl, supabaseAnonKey } from '../lib/supabase';
import { fuzzyMatchCity } from '../utils/fuzzySearch';

const getTomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

const getDayAfterTomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  return d.toISOString().split('T')[0];
};

interface LiteApiSearchBarProps {
  onSearch: (searchData: any) => void;
  primaryColor?: string;
}

export const LiteApiSearchBar: React.FC<LiteApiSearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState(getTomorrow());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrow());
  const [adults, setAdults] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [predictions, setPredictions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [acLoading, setAcLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const TRENDING_DESTINATIONS = [
    { cityName: 'Dubai', countryCode: 'AE', type: 'city', displayName: 'Dubai, United Arab Emirates' },
    { cityName: 'Bangkok', countryCode: 'TH', type: 'city', displayName: 'Bangkok, Thailand' },
    { cityName: 'Paris', countryCode: 'FR', type: 'city', displayName: 'Paris, France' },
    { cityName: 'Bali', countryCode: 'ID', type: 'city', displayName: 'Bali, Indonesia' }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      try { setRecentSearches(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Autocomplete via LiteAPI /data/places — same source the widget uses
  useEffect(() => {
    const timer = setTimeout(async () => {
      const q = city.trim();
      if (q.length < 2) {
        setPredictions([]);
        return;
      }

      setAcLoading(true);
      try {
        // Call LiteAPI places API through our edge function proxy
        // We use a direct backend call here since the key is server-side
        const res = await fetch(
          `${supabaseUrl}/functions/v1/hotel-places?text=${encodeURIComponent(q)}`,
          {
            headers: {
              Authorization: `Bearer ${supabaseAnonKey}`,
            },
          }
        );

        if (res.ok) {
          const json = await res.json();
          const places = json.data || json.places || (Array.isArray(json) ? json : []);
          const mapped = places.slice(0, 8).map((p: any) => ({
            displayName: p.displayName || p.name || p.label || q,
            cityName: p.cityName || p.name || p.displayName?.split(',')[0] || q,
            placeId: p.placeId || p.place_id || null,
            hotelId: p.hotelId || p.hotel_id || p.id || null, // Capture hotelId
            countryCode: p.countryCode || p.country_code || null,
            type: p.hotelId ? 'hotel' : (p.type || 'city'),
          }));
          setPredictions(mapped);
          setShowDropdown(mapped.length > 0);
        } else {
          // Fallback to Nominatim if edge function not available
          await fallbackAutocomplete(q);
        }
      } catch {
        await fallbackAutocomplete(q);
      } finally {
        setAcLoading(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [city]);

  // Fallback: Nominatim OSM autocomplete (no placeId, but at least shows cities)
  const fallbackAutocomplete = async (q: string) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=6&accept-language=en`
      );
      const data = await res.json();
      const mapped = data.map((d: any) => ({
        displayName: d.display_name,
        cityName: d.name || d.address?.city || d.address?.town || d.address?.village || d.address?.state || q,
        placeId: null, // No placeId from Nominatim
        countryCode: (d.address?.country_code || 'IN').toUpperCase(),
        type: d.type === 'hotel' || d.class === 'tourism' ? 'hotel' : 'city',
      }));
      const unique = mapped.filter((v: any, i: number, a: any[]) =>
        a.findIndex(t => t.displayName === v.displayName) === i
      );
      setPredictions(unique);
      setShowDropdown(unique.length > 0);
    } catch (e) {
      console.error('Fallback autocomplete error:', e);
    }
  };

  const triggerSearch = (searchData: any) => {
    if (!searchData.cityName?.trim()) {
      setError('Please enter a destination.');
      return;
    }
    if (checkIn >= checkOut) {
      setError('Check-out must be after check-in.');
      return;
    }
    setError('');
    setLoading(true);
    setShowDropdown(false);
    
    // Save to recent
    const newSearch = { 
      cityName: searchData.cityName, 
      countryCode: searchData.countryCode, 
      placeId: searchData.placeId,
      hotelId: searchData.hotelId,
      displayName: searchData.cityName 
    };
    const updated = [newSearch, ...recentSearches.filter(r => r.cityName !== newSearch.cityName)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    onSearch(searchData);
    setTimeout(() => setLoading(false), 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Apply fuzzy matching to autocorrect common typos (e.g. 'Bankok' -> 'Bangkok')
    const correctedCity = fuzzyMatchCity(city.trim());
    
    triggerSearch({
      cityName: correctedCity,
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      chkIn: checkIn,
      chkOut: checkOut,
      adults,
      guestInfo: adults.toString(),
      // No placeId — will be resolved by edge function
    });
  };

  const handlePredictionClick = (p: any) => {
    setCity(p.displayName || p.cityName); // Use displayName so it shows the hotel name in the input
    setShowDropdown(false);
    triggerSearch({
      cityName: p.cityName,
      placeId: p.placeId || undefined, 
      hotelId: p.hotelId || undefined, // Pass hotelId!
      countryCode: p.countryCode || undefined,
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      chkIn: checkIn,
      chkOut: checkOut,
      adults,
      guestInfo: adults.toString(),
    });
  };

  return (
    <div className="w-full relative" ref={wrapperRef}>
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
      >
        <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {/* Destination */}
          <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-0 relative">
            <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Destination or Hotel
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={city}
                  onChange={e => { setCity(e.target.value); setError(''); setShowDropdown(true); }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search city, region or hotel name..."
                  className="w-full bg-transparent text-gray-900 font-semibold text-base outline-none placeholder-gray-400 pr-6"
                  autoComplete="off"
                />
                {acLoading && (
                  <Loader2 className="absolute right-0 w-4 h-4 text-blue-400 animate-spin" />
                )}
              </div>
            </div>
          </div>

          {/* Check-in */}
          <div className="flex items-center gap-3 px-5 py-4 md:w-44">
            <Calendar className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                min={getTomorrow()}
                onChange={e => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-gray-900 font-semibold text-sm outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-center gap-3 px-5 py-4 md:w-44">
            <Calendar className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={e => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-gray-900 font-semibold text-sm outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 px-5 py-4 md:w-40">
            <Users className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Guests
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm flex items-center justify-center transition-colors"
                >
                  −
                </button>
                <span className="text-gray-900 font-bold text-base min-w-[1.5rem] text-center">
                  {adults}
                </span>
                <button
                  type="button"
                  onClick={() => setAdults(Math.min(10, adults + 1))}
                  className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base transition-all duration-200 disabled:opacity-70 md:rounded-r-2xl active:scale-95 shrink-0"
          >
            {loading
              ? <Loader2 className="w-5 h-5 animate-spin" />
              : <Search className="w-5 h-5" />
            }
            <span>Search</span>
          </button>
        </div>

        {/* Validation error */}
        {error && (
          <div className="px-5 pb-3 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}
      </form>

      {/* Autocomplete Predictions & Recent Searches Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 w-full md:w-[28rem] bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {predictions.length > 0 ? (
            <>
              <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
                <span>Suggested Destinations</span>
                {predictions[0]?.placeId && (
                  <span className="text-[10px] text-green-500 font-semibold normal-case">✓ Full inventory</span>
                )}
              </div>
              {predictions.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => handlePredictionClick(p)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors group"
                >
                  {p.type === 'hotel' ? (
                    <Building2 className="w-4 h-4 text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" />
                  ) : (
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {p.cityName}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {p.displayName}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {p.placeId && (
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-green-50 text-green-600">
                        Full
                      </span>
                    )}
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-700">
                      {p.type === 'hotel' ? 'Hotel' : 'City'}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : city.trim().length < 2 ? (
            <>
              {recentSearches.length > 0 && (
                <>
                  <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
                    <span>Recent Searches</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setRecentSearches([]); localStorage.removeItem('recentSearches'); }} 
                      className="text-[10px] text-gray-400 hover:text-red-500 hover:underline cursor-pointer transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  {recentSearches.map((r, idx) => (
                    <div 
                      key={`recent-${idx}`} 
                      onClick={() => handlePredictionClick(r)} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors group"
                    >
                       <Search className="w-4 h-4 text-gray-400 shrink-0" />
                       <div className="min-w-0 flex-1">
                         <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{r.cityName}</p>
                       </div>
                    </div>
                  ))}
                </>
              )}
              <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                <span>Trending Destinations</span>
              </div>
              {TRENDING_DESTINATIONS.map((t, idx) => (
                <div 
                  key={`trend-${idx}`} 
                  onClick={() => handlePredictionClick(t)} 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 cursor-pointer transition-colors group"
                >
                   <MapPin className="w-4 h-4 text-orange-500 shrink-0 group-hover:scale-110 transition-transform" />
                   <div className="min-w-0 flex-1">
                     <p className="text-sm font-bold text-gray-900 truncate group-hover:text-orange-600 transition-colors">{t.cityName}</p>
                     <p className="text-xs text-gray-400 truncate">{t.displayName}</p>
                   </div>
                </div>
              ))}
            </>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500 text-sm">
              {acLoading ? <div className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-blue-500"/> Searching destinations...</div> : 'No destinations found.'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
