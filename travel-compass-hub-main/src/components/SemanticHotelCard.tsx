import React from 'react';
import { Star, MapPin, Sparkles, Building, User, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface SemanticHotelProps {
  id: string;
  name: string;
  main_photo: string;
  address: string;
  city: string;
  country: string;
  tags?: string[];
  score?: number;
  persona?: string;
  style?: string;
  location_type?: string;
  story?: string;
}

export const SemanticHotelCard: React.FC<SemanticHotelProps> = ({
  id,
  name,
  main_photo,
  address,
  city,
  country,
  tags,
  score,
  persona,
  style,
  location_type,
  story
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <img
          src={main_photo || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-bold text-gray-800">
            {score ? `${Math.round(score * 100)}% Match` : 'AI Pick'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{city}, {country}</span>
        </div>

        {/* Narrative Story */}
        {story && (
          <p className="text-gray-600 text-sm leading-relaxed mb-5 italic line-clamp-3">
            "{story}"
          </p>
        )}

        {/* Semantic Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {persona && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-100">
              <User className="w-3 h-3" />
              {persona}
            </div>
          )}
          {style && (
            <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md text-xs font-medium border border-purple-100">
              <Star className="w-3 h-3" />
              {style}
            </div>
          )}
          {location_type && (
            <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-medium border border-emerald-100">
              <Building className="w-3 h-3" />
              {location_type}
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[11px] font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[11px] font-medium">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            to={`/hotel/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
};
