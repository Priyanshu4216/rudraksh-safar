import React, { useState } from 'react';
import { HotelApiService } from '../services/api/hotel.service';
import { Sparkles, Loader2, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

export const AiRoomSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AiRoomSearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setHasSearched(true);
      const data = await HotelApiService.searchRoomsSemantic({ query, limit: 12 });
      setResults(data || []);
    } catch (err: any) {
      console.error("AI Search Failed:", err);
      setError(err.message || 'Failed to perform AI search');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input */}
      <div className="w-full max-w-3xl mb-12">
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
              placeholder="e.g. 'luxury modernist comfort' or 'blue accessible bathroom'"
              className="flex-1 text-lg py-3 px-2 outline-none text-gray-800 placeholder-gray-400 font-medium"
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
      </div>

      {/* Results State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse h-[400px]">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      ) : hasSearched && results.length === 0 ? (
        <div className="text-center py-20 w-full max-w-lg mx-auto bg-white rounded-3xl shadow-sm border border-gray-100">
          <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">No matching rooms found</h3>
          <p className="text-gray-500">Try adjusting your aesthetic query to be more general.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {results.map((hotel) => (
            hotel.rooms?.map((room, index) => (
              <div 
                key={`${hotel.id}-${index}`} 
                onClick={() => navigate(`/hotel/${hotel.id}`)}
                className="group rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image_url} 
                    alt={room.room_name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop';
                    }}
                  />
                  
                  {/* Similarity Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-indigo-700 shadow-sm flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {Math.round(room.similarity * 100)}% Match
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-2 leading-tight mb-2">
                    {hotel.name}
                  </h3>
                  
                  <div className="flex items-start text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{hotel.city}, {hotel.country}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-indigo-600 line-clamp-2">
                      {room.room_name}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ))}
        </div>
      )}
    </div>
  );
};
