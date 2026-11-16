import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SnanCalendarWidget } from './SnanCalendarWidget';

export const KumbhHomePromoCard: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 my-10 md:my-14" aria-label="Haridwar Kumbh 2027 Featured Guide">
      <div className="relative overflow-hidden rounded-3xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-background to-orange-500/5 p-6 md:p-10 shadow-lg mb-8">
        {/* Sacred subtle aura */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haridwar Ardh Kumbh Mela 2027</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              Official Bathing Dates, Royal Amrit Snans & Verified Stays
            </h2>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Plan your holy pilgrimage on the sacred banks of the Ganges. Complete verified guide for 14 Jan – 20 Apr 2027, featuring all 10 snan festivals, 13 traditional Akharas, riverside Swiss cottage tents, and dedicated group departures from <strong>Raipur, Bhilai, Bilaspur, Durg & Rajnandgaon</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-600" />
                3 Royal Amrit Snans (6 Mar, 8 Mar, 14 Apr)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Senior Citizen & Family Care Concierge
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <Link
              to="/kumbh-mela-2027"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 text-center"
            >
              <span>Explore Kumbh 2027 Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/kumbh-mela-2027/packages/chhattisgarh"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-card border border-border hover:border-orange-500/50 text-foreground font-semibold text-sm transition-all active:scale-95 text-center"
            >
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Chhattisgarh Departures</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Snan Calendar Grid with Hover & Mobile Drawers */}
      <SnanCalendarWidget />
    </section>
  );
};
