import React, { useState } from 'react';
import { HotelApiService } from '../services/api/hotel.service';
import { Sparkles, Loader2, MapPin, Search, Star, Building2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabaseUrl, supabaseAnonKey } from '../lib/supabase';

interface AiRoomSearchResult {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  rooms: {
    room_name: string;
    image_url: string;
    similarity: number;
  }[];
}

interface SemanticHotelResult {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  rating?: number;
  main_photo?: string;
  thumbnail?: string;
  tags?: string[];
  persona?: string;
  style?: string;
  story?: string;
}

type SearchMode = 'room' | 'hotel';

export const AiRoomSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [roomResults, setRoomResults] = useState<AiRoomSearchResult[]>([]);
  const [hotelResults, setHotelResults] = useState<SemanticHotelResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<SearchMode>('hotel');
  const navigate = useNavigate();

  const EXAMPLE_QUERIES_HOTEL = [
    'Romantic getaway in Goa with sea view',
    'Budget family hotel near Manali hills',
    'Luxury spa resort in Kerala backwaters',
    'Business hotel in Delhi with airport access',
  ];

  const EXAMPLE_QUERIES_ROOM = [
    'luxury modernist room with city view',
    'cozy room with mountain views and fireplace',
    'blue accessible bathroom with walk-in shower',
    'twin room with garden and pool view',
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setHasSearched(true);
      setRoomResults([]);
      setHotelResults([]);

      if (mode === 'room') {
        // Room image/style search
        const data = await HotelApiService.searchRoomsSemantic({ query: query.trim(), limit: 12 });
        setRoomResults(data || []);
      } else {
        // Semantic hotel search — natural language 
        const data = await HotelApiService.searchSemantic({ query: query.trim(), limit: 20 });
        // data can be array of hotels or { data: [] }
        const hotels = Array.isArray(data) ? data : (data?.hotels || data?.data || []);
        setHotelResults(hotels);
      }
    } catch (err: any) {
      console.error('AI Search Failed:', err);
      setError(err.message || 'AI search failed — please try a different query');
    } finally {
      setLoading(false);
    }
  };

  const navigateToHotel = (hotelId: string) => {
    navigate(`/hotel/${hotelId}`);
  };

  const navigateToHotels = (hotel: SemanticHotelResult) => {
    const params = new URLSearchParams();
    if (hotel.city) params.set('city', hotel.city);
    if (hotel.country) params.set('country', hotel.country);
    navigate(`/hotels?${params.toString()}`);
  };

  const examples = mode === 'room' ? EXAMPLE_QUERIES_ROOM : EXAMPLE_QUERIES_HOTEL;
  const placeholder = mode === 'room'
    ? "e.g. 'luxury modernist room' or 'blue accessible bathroom'"
    : "e.g. 'Romantic Goa beach hotel' or 'Cozy hill station retreat'";

  const totalResults = mode === 'room'
    ? roomResults.reduce((sum, h) => sum + (h.rooms?.length || 0), 0)
    : hotelResults.length;

  return (
    <div className="w-full flex flex-col items-center">

      {/* Mode Toggle */}
      <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 gap-1 mb-6 border border-white/20">
        <button
          type="button"
          onClick={() => { setMode('hotel'); setHasSearched(false); }}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'hotel' ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/80 hover:text-white'}`}
        >
          <Building2 className="w-4 h-4" />
          Hotel Vibes
        </button>
        <button
          type="button"
          onClick={() => { setMode('room'); setHasSearched(false); }}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'room' ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/80 hover:text-white'}`}
        >
          <Sparkles className="w-4 h-4" />
          Room Style
        </button>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-3xl mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1 rounded-2xl shadow-xl">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-xl overflow-hidden p-2"
          >
            <div className="flex items-center justify-center pl-4 pr-2">
              <Sparkles className="w-6 h-6 text-indigo-500 animate-pulse" />
            </div>
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 text-base py-3 px-2 outline-none text-gray-800 placeholder-gray-400 font-medium"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Example queries */}
        {!hasSearched && (
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {examples.map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuery(ex)}
                className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 transition-all"
              >
                {ex}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Counter */}
      {hasSearched && !loading && totalResults > 0 && (
        <p className="text-white/70 text-sm mb-6">
          Found <span className="font-bold text-white">{totalResults}</span> {mode === 'room' ? 'matching rooms' : 'hotels'} matching your query
        </p>
      )}

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse h-[360px]">
              <div className="h-56 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="h-6 bg-gray-200 rounded w-1/4 mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-2xl px-8 max-w-md mx-auto">
          <Sparkles className="w-10 h-10 text-white/40 mx-auto mb-3" />
          <p className="text-white font-semibold mb-1">Search didn't return results</p>
          <p className="text-white/60 text-sm">{error}</p>
        </div>
      ) : hasSearched && totalResults === 0 ? (
        <div className="text-center py-16 bg-white/10 backdrop-blur-sm rounded-2xl px-8 max-w-md mx-auto">
          <Sparkles className="w-12 h-12 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No matches found</h3>
          <p className="text-white/60">Try a broader or different description</p>
        </div>
      ) : mode === 'room' ? (
        /* Room Results */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {roomResults.map((hotel) =>
            hotel.rooms?.map((room, index) => (
              <div
                key={`${hotel.id}-${index}`}
                onClick={() => navigateToHotel(hotel.id)}
                className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image_url}
                    alt={room.room_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-indigo-700 shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {Math.round(room.similarity * 100)}% Match
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-1 mb-1">{hotel.name}</h3>
                  <div className="flex items-center text-gray-500 text-xs mb-3">
                    <MapPin className="w-3 h-3 mr-1 shrink-0" />
                    <span className="line-clamp-1">{hotel.city}, {hotel.country}</span>
                  </div>
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-indigo-600 line-clamp-2">{room.room_name}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        /* Semantic Hotel Results */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {hotelResults.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => navigateToHotel(hotel.id)}
              className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
                {hotel.main_photo || hotel.thumbnail ? (
                  <img
                    src={hotel.main_photo || hotel.thumbnail}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-indigo-300" />
                  </div>
                )}
                {hotel.persona && (
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-white">
                    {hotel.persona}
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-base line-clamp-2 leading-tight mb-1">{hotel.name}</h3>
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <MapPin className="w-3 h-3 mr-1 shrink-0" />
                  <span>{hotel.city}{hotel.country ? `, ${hotel.country}` : ''}</span>
                  {hotel.stars && hotel.stars > 0 && (
                    <span className="ml-auto flex items-center gap-0.5 text-amber-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-semibold">{hotel.stars}</span>
                    </span>
                  )}
                </div>
                {hotel.style && (
                  <p className="text-xs text-indigo-600 font-medium line-clamp-1 mb-2">{hotel.style}</p>
                )}
                {hotel.tags && hotel.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {hotel.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">View hotel →</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigateToHotels(hotel); }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    More in {hotel.city}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
