import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Search, Loader2 } from 'lucide-react';

interface HeroSearchProps {
  onSearch: (params: Record<string, string>) => void;
  isLoading: boolean;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{city: string, countryCode: string, display: string} | null>(null);

  const defaultCheckIn = new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0];
  const defaultCheckOut = new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0];
  
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Geocoding Autocomplete
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2 && (!selectedLocation || selectedLocation.display !== query)) {
        setIsSearchingLocation(true);
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5&accept-language=en`);
          const data = await res.json();
          
          const mapped = data
            .filter((d: any) => d.address && d.address.country_code && (d.address.city || d.address.town || d.address.village || d.address.state || d.name))
            .map((d: any) => {
               // Prefer d.name if it exists, otherwise fall back to city, town, village, or state
               const cityName = d.name || d.address.city || d.address.town || d.address.village || d.address.state;
               return {
                 display: d.display_name,
                 city: cityName,
                 countryCode: d.address.country_code.toUpperCase()
               };
            });
            
          // Deduplicate
          const unique = mapped.filter((v: any, i: number, a: any[]) => a.findIndex(t => (t.display === v.display)) === i);
          
          setPredictions(unique);
          setShowDropdown(true);
        } catch (e) {
          console.error("Geocoding failed", e);
        } finally {
          setIsSearchingLocation(false);
        }
      } else {
        setPredictions([]);
      }
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSearch = () => {
    if (selectedLocation) {
      onSearch({ 
        cityName: selectedLocation.city, 
        countryCode: selectedLocation.countryCode,
        chkIn: checkIn,
        chkOut: checkOut
      });
    } else if (predictions.length > 0) {
      const top = predictions[0];
      setQuery(top.display);
      setSelectedLocation(top);
      setShowDropdown(false);
      onSearch({ 
        cityName: top.city, 
        countryCode: top.countryCode,
        chkIn: checkIn,
        chkOut: checkOut
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 p-4">
      {/* Glassmorphism Elite Container */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center drop-shadow-md">
          Find Your Perfect Stay
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-3 relative bg-white/95 p-3 rounded-2xl shadow-inner border border-white/40">
          
          {/* Location Input */}
          <div className="flex-[2] relative" ref={wrapperRef}>
            <div className="flex items-center bg-gray-50/50 rounded-xl px-4 py-1 border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition-all group">
              <MapPin className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <div className="flex-1 ml-3 relative">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Where</label>
                <input
                  type="text"
                  className="w-full bg-transparent text-gray-900 focus:outline-none font-semibold text-lg placeholder-gray-400"
                  placeholder="Dubai, Paris, New York..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedLocation(null);
                  }}
                  onFocus={() => {
                    if (predictions.length > 0) setShowDropdown(true);
                  }}
                />
                {isSearchingLocation && (
                  <Loader2 className="w-4 h-4 text-blue-500 animate-spin absolute right-0 top-1/2 -translate-y-1/2" />
                )}
              </div>
            </div>

            {/* Autocomplete Dropdown */}
            {showDropdown && predictions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl max-h-72 overflow-y-auto z-50 overflow-hidden border border-gray-100 divide-y divide-gray-50">
                {predictions.map((p, idx) => (
                  <li 
                    key={idx} 
                    className="px-5 py-4 hover:bg-blue-50/50 cursor-pointer transition-colors duration-200 flex items-start gap-3"
                    onClick={() => {
                      setQuery(p.display);
                      setSelectedLocation(p);
                      setShowDropdown(false);
                    }}
                  >
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <span className="block font-bold text-gray-900">{p.city}</span>
                      <span className="block text-sm text-gray-500">{p.display}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date Pickers */}
          <div className="flex-[1.5] flex gap-2">
            <div className="flex-1 flex items-center bg-gray-50/50 rounded-xl px-4 py-1 border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition-all group">
              <Calendar className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <div className="flex-1 ml-3">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Check-in</label>
                <input
                  type="date"
                  className="w-full bg-transparent text-gray-900 focus:outline-none font-semibold cursor-pointer"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (e.target.value >= checkOut) {
                      const nextDay = new Date(e.target.value);
                      nextDay.setDate(nextDay.getDate() + 1);
                      setCheckOut(nextDay.toISOString().split('T')[0]);
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="flex-1 flex items-center bg-gray-50/50 rounded-xl px-4 py-1 border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition-all group">
              <div className="flex-1">
                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Check-out</label>
                <input
                  type="date"
                  className="w-full bg-transparent text-gray-900 focus:outline-none font-semibold cursor-pointer"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Search Button */}
          <button 
            onClick={handleSearch}
            disabled={isLoading || (!selectedLocation && predictions.length === 0)}
            className={`flex-[0.5] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg text-lg ${isLoading || (!selectedLocation && predictions.length === 0) ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-[1.02] active:scale-[0.98]'}`}
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
            <span className="lg:hidden">Search</span>
          </button>

        </div>
      </div>
    </div>
  );
};
