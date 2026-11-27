import React from 'react';
import { ShieldCheck, Star, IndianRupee, MessageCircle, FileText } from 'lucide-react';
import { HOTEL_NAP } from '../../data/hotelSiloData';

export const HotelTrustStrip: React.FC = () => {
  return (
    <div className="bg-white border-y border-gray-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-gray-700">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
          <span>4.9★ Rated Travel Brand (150+ Reviews)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <IndianRupee className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Pay in INR · UPI, Cards &amp; EMI</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
          <span>GST Invoice Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>No Hidden Charges</span>
        </div>
        <a
          href={HOTEL_NAP.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 underline decoration-emerald-300 underline-offset-4"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Free WhatsApp Support ({HOTEL_NAP.phone})</span>
        </a>
      </div>
    </div>
  );
};
