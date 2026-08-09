import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ChevronRight, X, ChevronLeft, MapPin, Building2, Loader2, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SmartImage from '@/components/SmartImage';
import { Button } from '@/components/ui/button';
import { supabaseUrl, supabaseAnonKey } from '@/lib/supabase';

// Static featured destinations shown on load (curated, always visible)
const FEATURED_DESTINATIONS = [
  { id: 'goa', name: 'Goa', tag: 'Beaches & Nightlife', slug: '/destinations/goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', fontClass: 'font-serif' },
  { id: 'manali', name: 'Manali', tag: 'Mountains & Adventure', slug: '/destinations/manali', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', fontClass: 'font-serif' },
  { id: 'jaipur', name: 'Jaipur', tag: 'Royal Heritage', slug: '/destinations/jaipur', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', fontClass: 'font-serif' },
  { id: 'kerala', name: 'Kerala', tag: 'Backwaters & Spice', slug: '/destinations/kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', fontClass: 'font-serif' },
  { id: 'ladakh', name: 'Ladakh', tag: 'High Altitude Desert', slug: '/destinations/ladakh', image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80', fontClass: 'font-serif' },
  { id: 'rishikesh', name: 'Rishikesh', tag: 'Yoga & Rafting', slug: '/destinations/rishikesh', image: 'https://images.unsplash.com/photo-1544553892-7d96b0b9ce36?w=600&q=80', fontClass: 'font-serif' },
  { id: 'udaipur', name: 'Udaipur', tag: 'City of Lakes', slug: '/destinations/udaipur', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', fontClass: 'font-serif' },
  { id: 'shimla', name: 'Shimla', tag: 'Colonial Hill Station', slug: '/destinations/shimla', image: 'https://images.unsplash.com/photo-1626714781-5e9c2f1fdbad?w=600&q=80', fontClass: 'font-serif' },
  { id: 'darjeeling', name: 'Darjeeling', tag: 'Tea & Himalayan Views', slug: '/destinations/darjeeling', image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=600&q=80', fontClass: 'font-serif' },
  { id: 'varanasi', name: 'Varanasi', tag: 'Spiritual Capital', slug: '/destinations/varanasi', image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80', fontClass: 'font-serif' },
  { id: 'dubai', name: 'Dubai', tag: 'Luxury & Skyline', slug: '/hotels?city=Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', fontClass: 'font-sans' },
  { id: 'bali', name: 'Bali', tag: 'Temples & Rice Fields', slug: '/hotels?city=Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', fontClass: 'font-serif' },
];

interface PlaceSuggestion {
  placeId: string | null;
  displayName: string;
  cityName: string;
  countryCode: string | null;
  type: string;
  hotelId?: string | null;
  hotelName?: string | null;
  slug?: string;
  image?: string;
}

const SearchExperience = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleClose = () => {
    navigate(-1);
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const timer = setTimeout(checkScrollButtons, 500);
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Live autocomplete via LiteAPI /data/places
  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    setIsSearching(true);
    try {
      const res = await fetch(
        `${supabaseUrl}/functions/v1/hotel-places?text=${encodeURIComponent(query.trim())}&limit=8`,
        { headers: { Authorization: `Bearer ${supabaseAnonKey}` } }
      );
      if (res.ok) {
        const json = await res.json();
        setSuggestions(json.data || []);
      }
    } catch (e) {
      console.error('[SearchExperience] autocomplete error:', e);
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => fetchSuggestions(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, fetchSuggestions]);

  // Navigate to hotels search page with pre-filled params
  const handleSuggestionClick = (suggestion: PlaceSuggestion) => {
    const params = new URLSearchParams();
    if (suggestion.cityName) params.set('city', suggestion.cityName);
    if (suggestion.placeId) params.set('placeId', suggestion.placeId);
    if (suggestion.hotelId) params.set('hotelId', suggestion.hotelId);
    if (suggestion.countryCode) params.set('country', suggestion.countryCode);
    navigate(`/hotels?${params.toString()}`);
  };

  // Show live suggestions OR the curated featured grid
  const showSuggestions = searchTerm.trim().length >= 2;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-green-100 flex flex-col relative overflow-hidden">

      {/* Background Map Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 20%',
          backgroundSize: '120%'
        }}
      />

      <main className="flex-grow container mx-auto px-4 pt-8 md:pt-16 pb-8 flex flex-col items-center relative z-10">

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            What's <span className="text-[#00D285] font-handwrite text-4xl md:text-5xl relative inline-block px-2 transform translate-y-2">
              your pick
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00D285]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> for your next vacation?
          </h1>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-2xl mb-6 animate-fade-in-up delay-100">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00D285] transition-colors duration-300" />
            <Input
              autoFocus
              type="text"
              placeholder="Search any city, region or hotel..."
              className="w-full h-16 pl-16 pr-12 rounded-full text-lg border-2 border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-visible:ring-0 focus-visible:border-[#00D285] hover:border-[#00D285]/50 transition-all bg-white placeholder:text-slate-300 placeholder:font-light"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isSearching && (
              <Loader2 className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D285] animate-spin" />
            )}
            {searchTerm && !isSearching && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            )}
          </div>

          {/* Live Autocomplete Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute mt-2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {suggestions.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSuggestionClick(s)}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-green-50 cursor-pointer transition-colors group border-b border-slate-50 last:border-b-0"
                >
                  {s.type === 'hotel' ? (
                    <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  ) : (
                    <MapPin className="w-4 h-4 text-[#00D285] shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate group-hover:text-[#00D285] transition-colors">
                      {s.type === 'hotel' ? (s.hotelName || s.cityName) : s.cityName}
                    </p>
                    <p className="text-xs text-slate-400 truncate">{s.displayName}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {s.placeId && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-50 text-green-600">Full</span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 capitalize">{s.type}</span>
                  </div>
                </div>
              ))}
              {/* Direct hotels search link */}
              <div
                onClick={() => navigate(`/hotels?city=${encodeURIComponent(searchTerm)}`)}
                className="flex items-center gap-3 px-5 py-3 bg-slate-50 hover:bg-green-50 cursor-pointer transition-colors group"
              >
                <Search className="w-4 h-4 text-[#00D285] shrink-0" />
                <p className="text-sm font-semibold text-slate-700 group-hover:text-[#00D285] transition-colors">
                  Search hotels in "<span className="font-bold">{searchTerm}</span>"
                </p>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </div>
            </div>
          )}

          {/* No results state */}
          {showSuggestions && !isSearching && suggestions.length === 0 && (
            <div className="absolute mt-2 w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 z-50 p-5">
              <div
                onClick={() => navigate(`/hotels?city=${encodeURIComponent(searchTerm)}`)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-[#00D285]" />
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-[#00D285] transition-colors">
                    Search hotels in "{searchTerm}"
                  </p>
                  <p className="text-xs text-slate-400">Check availability & prices</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </div>
            </div>
          )}
        </div>

        {/* Featured Destinations Grid (shown when no search query) */}
        {!showSuggestions && (
          <>
            <p className="text-sm font-medium text-slate-400 mb-4 animate-fade-in-up delay-150">
              ✨ Popular destinations to explore
            </p>
            <div className="flex items-center justify-center w-full max-w-[1920px] gap-4 md:gap-6 px-2 md:px-8 relative animate-fade-in-up delay-200">

              {/* Left Button */}
              <button
                onClick={() => scroll('left')}
                className={`hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-[#00D285] hover:border-[#00D285] items-center justify-center transition-all duration-300 z-20 flex-shrink-0 ${showLeftArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>

              <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                className="overflow-x-auto hide-scrollbar py-8 px-4 scroll-smooth w-full"
              >
                <div className="flex gap-4 md:gap-6 w-max mx-auto px-4">
                  {FEATURED_DESTINATIONS.map((dest) => (
                    <Link
                      key={dest.id}
                      to={dest.slug}
                      className="group relative flex flex-col items-center w-[180px] md:w-[220px] flex-shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:z-30"
                    >
                      {/* Arch Shape */}
                      <div
                        className="relative w-full aspect-[4/5] rounded-t-[1000px] rounded-b-[30px] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white"
                        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                      >
                        <SmartImage
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute bottom-0 left-0 w-full p-6 text-center flex flex-col items-center">
                          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">
                            {dest.tag}
                          </p>
                          <h3 className={`text-xl md:text-2xl font-bold text-white mb-0 leading-none ${dest.fontClass || 'font-serif'}`}>
                            {dest.name}
                          </h3>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 border border-white/30">
                          <ChevronRight className="w-6 h-6 text-white stroke-[3]" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Button */}
              <button
                onClick={() => scroll('right')}
                className={`hidden md:flex w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-[#00D285] hover:border-[#00D285] items-center justify-center transition-all duration-300 z-20 flex-shrink-0 ${showRightArrow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </>
        )}

      </main>

      <div className="w-full py-6 text-center text-slate-400 text-sm relative z-10">
        <Button variant="ghost" onClick={handleClose} className="hover:bg-slate-100 text-slate-500">
          Close Search
        </Button>
      </div>
    </div>
  );
};

export default SearchExperience;
