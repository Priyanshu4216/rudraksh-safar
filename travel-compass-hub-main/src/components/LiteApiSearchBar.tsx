import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Users, Search, Loader2, Building2 } from 'lucide-react';

interface LiteApiSearchBarProps {
  onSearch: (searchData: any) => void;
  primaryColor?: string;
}

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

export const LiteApiSearchBar: React.FC<LiteApiSearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState(getTomorrow());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrow());
  const [adults, setAdults] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [predictions, setPredictions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Autocomplete fetch for cities and hotel names
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (city.trim().length > 2) {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&addressdetails=1&limit=6&accept-language=en`);
          const data = await res.json();
          
          const mapped = data.map((d: any) => {
            const isHotel = d.type === 'hotel' || d.class === 'tourism' || (d.name && d.name.toLowerCase().includes('hotel'));
            const cityName = d.name || d.address?.city || d.address?.town || d.address?.village || d.address?.state || '';
            const display = d.display_name;
            const countryCode = (d.address?.country_code || 'IN').toUpperCase();
            return {
              display,
              city: cityName,
              countryCode,
              type: isHotel ? 'hotel' : 'city',
              fullName: d.name
            };
          });

          // Deduplicate
          const unique = mapped.filter((v: any, i: number, a: any[]) => a.findIndex(t => (t.display === v.display)) === i);
          setPredictions(unique);
          setShowDropdown(true);
        } catch (e) {
          console.error("Autocomplete error:", e);
        }
      } else {
        setPredictions([]);
        setShowDropdown(false);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [city]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
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

    onSearch({
      cityName: city.trim(),
      hotelName: city.trim(),
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      adults,
      guestInfo: adults.toString(),
    });

    setTimeout(() => setLoading(false), 800);
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
              <input
                type="text"
                value={city}
                onChange={e => { setCity(e.target.value); setError(''); }}
                onFocus={() => { if (predictions.length > 0) setShowDropdown(true); }}
                placeholder="Search city, region or hotel name..."
                className="w-full bg-transparent text-gray-900 font-semibold text-base outline-none placeholder-gray-400"
                autoComplete="off"
              />
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

      {/* Autocomplete Predictions Dropdown */}
      {showDropdown && predictions.length > 0 && (
        <div className="absolute top-full left-0 w-full md:w-96 bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Suggested Destinations & Hotels
          </div>
          {predictions.map((p, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCity(p.city);
                setShowDropdown(false);
                onSearch({
                  cityName: p.city,
                  hotelName: p.type === 'hotel' ? p.fullName : p.city,
                  countryCode: p.countryCode,
                  checkin: checkIn,
                  checkout: checkOut,
                  checkIn,
                  checkOut,
                  adults,
                  guestInfo: adults.toString(),
                });
              }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors group"
            >
              {p.type === 'hotel' ? (
                <Building2 className="w-4 h-4 text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" />
              ) : (
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {p.city}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {p.display}
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-700">
                {p.type === 'hotel' ? 'Hotel' : 'City'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
