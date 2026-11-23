import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { SnanCalendarWidget } from './SnanCalendarWidget';

export const KumbhHomePromoCard: React.FC = () => {
  // Countdown to Haridwar Ardh Kumbh Mela 2027 (14 Jan 2027)
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00'
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-14T00:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const pad = (n: number) => String(n).padStart(2, '0');

      setTimeLeft({
        days: pad(d),
        hours: pad(h),
        mins: pad(m),
        secs: pad(s)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-6 md:my-14" aria-label="Haridwar Kumbh 2027 Featured Guide">
      <div className="relative overflow-hidden rounded-3xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/15 via-[#fffbf5] dark:via-slate-900 to-amber-500/10 p-4 sm:p-6 md:p-10 shadow-xl mb-6 md:mb-8">
        {/* Sacred subtle aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Live Countdown */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haridwar Ardh Kumbh Mela 2027</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white leading-tight">
              Kumbh Mela 2027 Begins In:
            </h2>

            {/* Countdown Clock Display */}
            <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-4 pt-1 max-w-sm sm:max-w-none">
              <div className="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-2 sm:p-4 text-center min-w-0 sm:min-w-[85px] shadow-md">
                <span className="block font-serif font-black text-xl sm:text-4xl text-[#8c1d2f] dark:text-amber-400 leading-none">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                  Days
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-2 sm:p-4 text-center min-w-0 sm:min-w-[85px] shadow-md">
                <span className="block font-serif font-black text-xl sm:text-4xl text-[#8c1d2f] dark:text-amber-400 leading-none">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                  Hours
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-2 sm:p-4 text-center min-w-0 sm:min-w-[85px] shadow-md">
                <span className="block font-serif font-black text-xl sm:text-4xl text-[#8c1d2f] dark:text-amber-400 leading-none">
                  {timeLeft.mins}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                  Mins
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-2 sm:p-4 text-center min-w-0 sm:min-w-[85px] shadow-md">
                <span className="block font-serif font-black text-xl sm:text-4xl text-[#ff7a1a] leading-none">
                  {timeLeft.secs}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                  Secs
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Official verified pilgrimage guide for 14 Jan – 20 Apr 2027. Ghat-side Swiss cottage tents, VIP snan guidance, transfers around traffic closures, and dedicated senior-citizen family care managed directly by our Haridwar ground operations team.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
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

          {/* Right Column: Key Royal Snan Badges & Action Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Key Royal Amrit Snans (Har Ki Pauri)
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-amber-200 dark:border-slate-700 shadow-sm">
                <div className="font-serif font-black text-2xl text-[#8c1d2f] dark:text-amber-400">
                  06
                </div>
                <div className="text-[11px] font-bold text-slate-800 dark:text-white">Mar 2027</div>
                <div className="text-[9px] text-slate-500 line-clamp-1">Mahashivratri</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-amber-200 dark:border-slate-700 shadow-sm">
                <div className="font-serif font-black text-2xl text-[#8c1d2f] dark:text-amber-400">
                  08
                </div>
                <div className="text-[11px] font-bold text-slate-800 dark:text-white">Mar 2027</div>
                <div className="text-[9px] text-slate-500 line-clamp-1">Somvati Amavasya</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-amber-200 dark:border-slate-700 shadow-sm">
                <div className="font-serif font-black text-2xl text-[#8c1d2f] dark:text-amber-400">
                  14
                </div>
                <div className="text-[11px] font-bold text-slate-800 dark:text-white">Apr 2027</div>
                <div className="text-[9px] text-slate-500 line-clamp-1">Mesh Sankranti</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/kumbh-mela-2027/packages"
                className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>Book Kumbh Package</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/kumbh-mela-2027/snan-dates"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-amber-50"
              >
                Snan Dates
              </Link>

              <Link
                to="/kumbh-mela-2027/stay"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-amber-50"
              >
                Camp & Tents
              </Link>

              <Link
                to="/hi/kumbh-mela-2027"
                className="px-4 py-3 rounded-xl bg-amber-100 dark:bg-slate-800 border border-amber-300 text-xs sm:text-sm font-bold text-[#8c1d2f] dark:text-amber-400 hover:bg-amber-200"
              >
                हिंदी गाइड
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Snan Calendar Widget */}
      <SnanCalendarWidget />
    </section>
  );
};
