import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Heart, Tag } from 'lucide-react';

interface HotelCardProps {
  id: string;
  name: string;
  address: string;
  rating?: number;
  stars?: number | null;
  image: string;
  price: number | null;
  currency: string | null;
  initialPrice?: number | null;
  promotions?: any[];
  perks?: any[];
  checkin?: string;
  checkout?: string;
  city?: string;
  country?: string;
  roomName?: string;
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$', EUR: '€', GBP: '£', INR: '₹', AED: 'د.إ', SGD: 'S$', AUD: 'A$', CAD: 'C$',
};

export const HotelCard: React.FC<HotelCardProps> = ({
  id, name, address, rating, stars, image, price, currency, initialPrice,
  promotions, perks, checkin, checkout, city, country, roomName,
}) => {
  const [actualImage, setActualImage] = React.useState(image);
  const [resolvedName, setResolvedName] = React.useState(name);
  const [resolvedAddress, setResolvedAddress] = React.useState(address);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  React.useEffect(() => {
    // If name or image is missing, fetch hotel details
    if ((!name || !image) && id) {
      let isMounted = true;
      import('../services/api/hotel.service').then(({ HotelApiService }) => {
        HotelApiService.getDetails(id).then((details: any) => {
          if (isMounted && details) {
            const d = details.data || details;
            const imgUrl = d.main_photo || d.thumbnail || d.hotelImages?.[0]?.url || d.hotelImages?.[0]?.urlHd;
            if (imgUrl) setActualImage(imgUrl);
            if (!name && d.name) setResolvedName(d.name);
            if (!address && d.address) setResolvedAddress(d.address);
          }
        }).catch(() => {});
      });
      return () => { isMounted = false; };
    }
  }, [id, name, image, address]);

  // Sync props → state if parent re-renders with data
  React.useEffect(() => { if (name) setResolvedName(name); }, [name]);
  React.useEffect(() => { if (address) setResolvedAddress(address); }, [address]);
  React.useEffect(() => { if (image) setActualImage(image); }, [image]);

  const hasDiscount = initialPrice && price && initialPrice > price;
  const discountPct = hasDiscount ? Math.round(((initialPrice - price) / initialPrice) * 100) : 0;
  const currencySymbol = currency ? (CURRENCY_SYMBOLS[currency] || currency + ' ') : '';
  const displayLocation = resolvedAddress || [city, country].filter(Boolean).join(', ') || '';
  const displayStars = stars ?? rating ?? null;

  // Format price nicely
  const formattedPrice = price != null
    ? new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(price)
    : null;

  return (
    <Link
      to={`/hotel/${id}?checkin=${checkin || ''}&checkout=${checkout || ''}&adults=2`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-400 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-100">
        <img
          src={actualImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80'}
          alt={name || 'Hotel'}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.preventDefault(); setIsWishlisted(w => !w); }}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 transition-all"
        >
          <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>

        {/* Discount Badge */}
        {hasDiscount && discountPct > 0 && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            <Tag className="w-3 h-3" />
            {discountPct}% OFF
          </div>
        )}

        {/* Star Rating Badge */}
        {displayStars != null && displayStars > 0 && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-amber-900" />
            {displayStars} Star
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Hotel Name */}
        <h3 className="text-base font-bold text-gray-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">
          {resolvedName || <span className="text-gray-400 italic">Loading name…</span>}
        </h3>

        {/* Location */}
        {displayLocation && (
          <p className="flex items-center gap-1 text-gray-500 text-sm line-clamp-1 mb-3">
            <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            {displayLocation}
          </p>
        )}

        {/* Room type if available */}
        {roomName && (
          <p className="text-xs text-gray-400 line-clamp-1 mb-3 italic">{roomName}</p>
        )}

        {/* Perks */}
        {perks && perks.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {perks.slice(0, 2).map((p: any, i: number) => (
              <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                {p.name || p}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-100 pt-3 flex items-end justify-between">
          <div>
            {hasDiscount && (
              <span className="block text-xs text-gray-400 line-through mb-0.5">
                {currencySymbol}{new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(initialPrice)}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              {formattedPrice ? (
                <>
                  <span className="text-xl font-extrabold text-gray-900">{currencySymbol}{formattedPrice}</span>
                  <span className="text-sm text-gray-400 font-normal">/ night</span>
                </>
              ) : (
                <span className="text-sm font-semibold text-blue-600">Check Availability</span>
              )}
            </div>
          </div>
          <div className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors">
            View →
          </div>
        </div>
      </div>
    </Link>
  );
};
