import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Loader2 } from 'lucide-react';

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

    // Build the same payload shape HotelsHub expects
    onSearch({
      cityName: city.trim(),
      checkin: checkIn,
      checkout: checkOut,
      checkIn,
      checkOut,
      adults,
      guestInfo: adults.toString(),
    });

    // Reset loading after a short delay (parent controls actual loading)
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {/* Destination */}
          <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-0">
            <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                Destination
              </label>
              <input
                type="text"
                value={city}
                onChange={e => { setCity(e.target.value); setError(''); }}
                placeholder="City, region or hotel"
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
    </div>
  );
};
