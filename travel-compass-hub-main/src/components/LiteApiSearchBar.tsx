import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Users, Search, Loader2, Building2, ChevronDown } from 'lucide-react';
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

// Detect user's country code from browser locale (best-effort)
function detectUserNationality(): string {
  try {
    const locale = navigator.language || navigator.languages?.[0] || 'en-IN';
    const parts = locale.split('-');
    if (parts.length >= 2) {
      const country = parts[parts.length - 1].toUpperCase();
      if (country.length === 2) return country;
    }
  } catch {}
  return 'IN'; // Default to India for Rudraksh Safar's core audience
}

// Generate or retrieve a session ID for price consistency
function getSessionId(): string {
  const key = 'hotel_search_session_id';
  let sessionId = sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
}

interface LiteApiSearchBarProps {
  onSearch: (searchData: any) => void;
  primaryColor?: string;
}

interface GuestConfig {
  adults: number;
  rooms: number;
  children: number; // count
  childrenAges: number[]; // ages array
}

const TRENDING_DESTINATIONS = [
  { cityName: 'Goa', countryCode: 'IN', type: 'city', displayName: 'Goa, India', placeId: null },
  { cityName: 'Manali', countryCode: 'IN', type: 'city', displayName: 'Manali, Himachal Pradesh, India', placeId: null },
  { cityName: 'Jaipur', countryCode: 'IN', type: 'city', displayName: 'Jaipur, Rajasthan, India', placeId: null },
  { cityName: 'Munnar', countryCode: 'IN', type: 'city', displayName: 'Munnar, Kerala, India', placeId: null },
  { cityName: 'Rishikesh', countryCode: 'IN', type: 'city', displayName: 'Rishikesh, Uttarakhand, India', placeId: null },
  { cityName: 'Udaipur', countryCode: 'IN', type: 'city', displayName: 'Udaipur, Rajasthan, India', placeId: null },
  { cityName: 'Shimla', countryCode: 'IN', type: 'city', displayName: 'Shimla, Himachal Pradesh, India', placeId: null },
  { cityName: 'Darjeeling', countryCode: 'IN', type: 'city', displayName: 'Darjeeling, West Bengal, India', placeId: null },
  { cityName: 'Dubai', countryCode: 'AE', type: 'city', displayName: 'Dubai, United Arab Emirates', placeId: null },
  { cityName: 'Bangkok', countryCode: 'TH', type: 'city', displayName: 'Bangkok, Thailand', placeId: null },
  { cityName: 'Bali', countryCode: 'ID', type: 'city', displayName: 'Bali, Indonesia', placeId: null },
  { cityName: 'Paris', countryCode: 'FR', type: 'city', displayName: 'Paris, France', placeId: null },
];

export const LiteApiSearchBar: React.FC<LiteApiSearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState(getTomorrow());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrow());
  const [guests, setGuests] = useState<GuestConfig>({ adults: 2, rooms: 1, children: 0, childrenAges: [] });
  const [showGuestPanel, setShowGuestPanel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [predictions, setPredictions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [acLoading, setAcLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const guestPanelRef = useRef<HTMLDivElement>(null);

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
      if (guestPanelRef.current && !guestPanelRef.current.contains(event.target as Node)) {
        setShowGuestPanel(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Autocomplete via LiteAPI /data/places — returns cities AND hotels
  useEffect(() => {
    const timer = setTimeout(async () => {
      const q = city.trim();
      if (q.length < 2) {
        setPredictions([]);
        return;
      }

      setAcLoading(true);
      try {
        // No type filter = gets both cities and hotels
        const res = await fetch(
          `${supabaseUrl}/functions/v1/hotel-places?text=${encodeURIComponent(q)}&limit=10`,
          {
            headers: { Authorization: `Bearer ${supabaseAnonKey}` },
          }
        );

        if (res.ok) {
          const json = await res.json();
          const places = json.data || [];
          setPredictions(places);
          setShowDropdown(places.length > 0);
        } else {
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
        cityName: d.name || d.address?.city || d.address?.town || d.address?.state || q,
        placeId: null,
        countryCode: (d.address?.country_code || 'IN').toUpperCase(),
        type: 'city',
      }));
      setPredictions(mapped);
      setShowDropdown(mapped.length > 0);
    } catch (e) {
      console.error('Fallback autocomplete error:', e);
    }
  };

  const buildOccupancies = () => {
    const singleRoom: { adults: number; children?: number[] } = { adults: guests.adults };
    if (guests.childrenAges.length > 0) singleRoom.children = guests.childrenAges;
    return Array.from({ length: Math.max(1, guests.rooms) }, () => ({ ...singleRoom }));
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
    setShowGuestPanel(false);
    
    const newSearch = { 
      cityName: searchData.cityName, 
      countryCode: searchData.countryCode, 
      placeId: searchData.placeId,
      hotelId: searchData.hotelId,
      displayName: searchData.displayName || searchData.cityName 
    };
    const updated = [newSearch, ...recentSearches.filter(r => r.cityName !== newSearch.cityName)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    onSearch(searchData);
    setTimeout(() => setLoading(false), 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctedCity = fuzzyMatchCity(city.trim());
    const occupancies = buildOccupancies();

    triggerSearch({
      cityName: correctedCity,
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      chkIn: checkIn,
      chkOut: checkOut,
      adults: guests.adults,
      guestInfo: guests.adults.toString(),
      rooms: guests.rooms,
      childrenAges: guests.childrenAges,
      occupancies,
      guestNationality: detectUserNationality(),
      sessionId: getSessionId(),
    });
  };

  const handlePredictionClick = (p: any) => {
    setCity(p.displayName || p.cityName);
    setShowDropdown(false);
    const occupancies = buildOccupancies();

    triggerSearch({
      cityName: p.cityName,
      displayName: p.displayName,
      placeId: p.placeId || undefined,
      hotelId: p.hotelId || undefined,
      countryCode: p.countryCode || undefined,
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      chkIn: checkIn,
      chkOut: checkOut,
      adults: guests.adults,
      guestInfo: guests.adults.toString(),
      rooms: guests.rooms,
      childrenAges: guests.childrenAges,
      occupancies,
      guestNationality: detectUserNationality(),
      sessionId: getSessionId(),
    });
  };

  // Guest panel helpers
  const updateAdults = (delta: number) => setGuests(g => ({ ...g, adults: Math.max(1, Math.min(10, g.adults + delta)) }));
  const updateRooms = (delta: number) => setGuests(g => ({ ...g, rooms: Math.max(1, Math.min(5, g.rooms + delta)) }));
  const updateChildren = (delta: number) => {
    setGuests(g => {
      const newCount = Math.max(0, Math.min(6, g.children + delta));
      const newAges = delta > 0
        ? [...g.childrenAges, 5]  // Default child age 5
        : g.childrenAges.slice(0, newCount);
      return { ...g, children: newCount, childrenAges: newAges };
    });
  };
  const updateChildAge = (idx: number, age: number) => {
    setGuests(g => {
      const ages = [...g.childrenAges];
      ages[idx] = age;
      return { ...g, childrenAges: ages };
    });
  };

  const guestSummary = () => {
    const parts = [`${guests.adults} Adult${guests.adults !== 1 ? 's' : ''}`];
    if (guests.children > 0) parts.push(`${guests.children} Child${guests.children !== 1 ? 'ren' : ''}`);
    if (guests.rooms > 1) parts.push(`${guests.rooms} Rooms`);
    return parts.join(', ');
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

          {/* Guests — Dropdown Panel */}
          <div className="flex items-center gap-3 px-5 py-4 md:w-52 relative" ref={guestPanelRef}>
            <Users className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Guests & Rooms
              </label>
              <button
                type="button"
                onClick={() => setShowGuestPanel(prev => !prev)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-gray-900 font-semibold text-sm truncate">{guestSummary()}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 ml-1 transition-transform ${showGuestPanel ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Guest panel dropdown */}
            {showGuestPanel && (
              <div className="absolute top-full left-0 w-80 bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 z-50 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* Adults */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Adults</p>
                    <p className="text-xs text-gray-400">Ages 18+</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateAdults(-1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.adults <= 1}>−</button>
                    <span className="w-5 text-center font-bold text-gray-900">{guests.adults}</span>
                    <button type="button" onClick={() => updateAdults(1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.adults >= 10}>+</button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Children</p>
                    <p className="text-xs text-gray-400">Ages 0–17</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateChildren(-1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.children <= 0}>−</button>
                    <span className="w-5 text-center font-bold text-gray-900">{guests.children}</span>
                    <button type="button" onClick={() => updateChildren(1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.children >= 6}>+</button>
                  </div>
                </div>

                {/* Children ages */}
                {guests.childrenAges.length > 0 && (
                  <div className="mb-4 border-t pt-3">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Age of each child</p>
                    <div className="grid grid-cols-3 gap-2">
                      {guests.childrenAges.map((age, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <label className="text-[10px] text-gray-400 mb-0.5">Child {idx + 1}</label>
                          <select
                            value={age}
                            onChange={e => updateChildAge(idx, parseInt(e.target.value))}
                            className="w-full border border-gray-200 rounded-lg text-sm p-1.5 text-center font-semibold text-gray-900 outline-none focus:border-blue-400"
                          >
                            {Array.from({ length: 18 }, (_, i) => (
                              <option key={i} value={i}>{i === 0 ? '< 1 yr' : `${i} yr`}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rooms */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Rooms</p>
                    <p className="text-xs text-gray-400">For all guests</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateRooms(-1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.rooms <= 1}>−</button>
                    <span className="w-5 text-center font-bold text-gray-900">{guests.rooms}</span>
                    <button type="button" onClick={() => updateRooms(1)}
                      className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={guests.rooms >= 5}>+</button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowGuestPanel(false)}
                  className="mt-4 w-full py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Done
                </button>
              </div>
            )}
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
        <div className="absolute top-full left-0 w-full md:w-[32rem] bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          
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
                      {p.type === 'hotel' ? (p.hotelName || p.cityName) : p.cityName}
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
                      {p.type === 'hotel' ? 'Hotel' : p.type === 'airport' ? 'Airport' : 'City'}
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
                         <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{r.displayName || r.cityName}</p>
                       </div>
                    </div>
                  ))}
                </>
              )}
              <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                <span>🔥 Trending Destinations</span>
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
              {acLoading ? <div className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-blue-500"/>Searching destinations...</div> : 'No destinations found.'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
