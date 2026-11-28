import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { KUMBH_PACKAGES } from '@/data/kumbh/packages';
import { KUMBH_SITE } from '@/data/kumbh/site';
import {
  Calendar,
  MapPin,
  Hotel,
  Utensils,
  Download,
  MessageCircle,
  Heart
} from 'lucide-react';

interface KumbhPackageCardsGridProps {
  lang?: 'en' | 'hi';
  cityName?: string;
}

export const KumbhPackageCardsGrid: React.FC<KumbhPackageCardsGridProps> = ({
  lang = 'en',
  cityName
}) => {
  const isHi = lang === 'hi';
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {KUMBH_PACKAGES.map((pkg) => {
        const detailUrl = isHi
          ? `/hi/kumbh-mela-2027/packages/${pkg.slug}`
          : `/kumbh-mela-2027/packages/${pkg.slug}`;
        const isFav = !!favorites[pkg.id];

        const whatsappText = cityName
          ? `Hi Rudraksh Safar, I am from ${cityName} and want to talk to an executive regarding ${pkg.titleEn} (${pkg.duration}). Please connect with me.`
          : `Hi Rudraksh Safar, I want to talk to an executive regarding ${pkg.titleEn} (${pkg.duration}). Please connect with me.`;

        return (
          <article
            key={pkg.id}
            onClick={() => navigate(detailUrl)}
            className="cursor-pointer rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col group hover:-translate-y-1"
          >
            {/* Top Image Banner */}
            <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-muted">
              <img
                src={pkg.imageUrl}
                alt={isHi ? pkg.titleHi : pkg.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Top Badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto px-3.5 py-1 rounded-full bg-white/95 dark:bg-card/95 text-orange-600 dark:text-orange-400 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur">
                  {isHi ? pkg.badgeTextHi || "प्रमाणित 2027" : pkg.badgeTextEn || "CERTIFIED 2027"}
                </span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(pkg.id); }}
                  aria-label="Wishlist"
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur shadow flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-muted-foreground hover:text-rose-500"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFav ? 'fill-rose-500 text-rose-500' : 'fill-none'
                    }`}
                  />
                </button>
              </div>

              {/* Title & Route Overlaid at Bottom of Image */}
              <div className="absolute bottom-4 inset-x-4">
                <h3 className="font-serif font-bold text-white text-lg md:text-xl leading-snug drop-shadow-sm mb-1.5 line-clamp-2">
                  <Link to={detailUrl} className="hover:underline">
                    {isHi ? pkg.titleHi : pkg.titleEn}
                  </Link>
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-orange-200">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate font-medium">{isHi ? pkg.routeHi || pkg.routeEn : pkg.routeEn}</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Duration row & Pilgrimage Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-600/20 text-[10px] font-bold uppercase tracking-wider">
                    {isHi ? pkg.categoryTagHi || "पावन तीर्थ" : pkg.categoryTagEn || "TAILOR-MADE"}
                  </span>
                </div>

                {/* Hotel & Meals Pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/50 mb-4">
                  <div className="truncate flex items-center gap-1" title={pkg.hotelProposedEn}>
                    <Hotel className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{isHi ? pkg.hotelProposedHi : pkg.hotelProposedEn}</span>
                  </div>
                  <div className="truncate flex items-center gap-1" title={pkg.mealsEn}>
                    <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{isHi ? pkg.mealsHi : pkg.mealsEn}</span>
                  </div>
                </div>

                {/* Dashed divider */}
                <div className="border-b border-dashed border-border/80 my-3" />

                {/* Price & View Details Row */}
                <div className="flex items-end justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] text-muted-foreground block font-medium">
                      {isHi ? "शुरुआती कीमत (Starting from)" : "Starting from"}
                    </span>
                    <p className="text-2xl font-bold font-serif text-foreground leading-none mt-1">
                      {pkg.priceStarting}
                    </p>
                  </div>

                  <Link
                    to={detailUrl}
                    className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold text-xs transition-colors shrink-0"
                  >
                    {isHi ? "विवरण देखें" : "View details"}
                  </Link>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="space-y-2.5 pt-2">
                {/* Primary Book Now Button */}
                <Link
                  to={detailUrl}
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isHi ? "अभी बुक करें / पूरा कार्यक्रम" : "Book Now"}</span>
                </Link>

                {/* Two-Column Action Bar: Download PDF & Talk to Executive */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={pkg.pdfCleanUrl || pkg.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2.5 px-2 rounded-xl bg-muted/60 hover:bg-muted text-foreground font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-border/60"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isHi ? "डाउनलोड PDF" : "Download PDF"}</span>
                  </a>

                  <a
                    href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2.5 px-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-emerald-500/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isHi ? "सलाहकार" : "Talk to Executive"}</span>
                  </a>
                </div>

                {/* Subtle Footer Note */}
                <p className="text-[10px] text-center text-muted-foreground/80 mt-1">
                  {isHi ? "अंतिम समावेशन एवं दरें पूछताछ के उपरांत पुष्ट की जाती हैं।" : "Final inclusions and price are confirmed after enquiry."}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
