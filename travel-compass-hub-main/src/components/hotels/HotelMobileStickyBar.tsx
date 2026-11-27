import React from 'react';
import { Phone, MessageCircle, Search } from 'lucide-react';
import { HOTEL_NAP } from '../../data/hotelSiloData';

interface HotelMobileStickyBarProps {
  onBookClick?: () => void;
  bookLabel?: string;
}

export const HotelMobileStickyBar: React.FC<HotelMobileStickyBarProps> = ({
  onBookClick,
  bookLabel = 'Check Rates',
}) => {
  const handleBook = () => {
    if (onBookClick) {
      onBookClick();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={HOTEL_NAP.telHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl border border-gray-300 text-gray-800 font-bold text-xs active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>Call</span>
        </a>
        <a
          href={HOTEL_NAP.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={handleBook}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-600 text-white font-bold text-xs active:scale-95 transition-transform"
        >
          <Search className="w-3.5 h-3.5" />
          <span>{bookLabel}</span>
        </button>
      </div>
    </div>
  );
};
