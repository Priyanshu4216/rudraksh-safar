import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

const DHAM_NODES = [
  { name: 'Yamunotri', link: '/yamunotri-temple', km: 'First Sacred Portal' },
  { name: 'Gangotri', link: '/gangotri-temple', km: 'Holy Bhagirathi Origin' },
  { name: 'Kedarnath', link: '/kedarnath-temple', km: 'Himalayan Jyotirlinga' },
  { name: 'Badrinath', link: '/badrinath-temple', km: 'Abode of Lord Vishnu' }
];

const CharDhamSpecial: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content & Inclusions */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-[#8c1d2f] dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Dedicated Yatra Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 dark:text-white leading-[1.1]">
              Char Dham Yatra, <br />
              <span className="text-[#8c1d2f] dark:text-amber-400">Handled End-to-End.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              From Uttarakhand mandatory biometric registration and helicopter slots to senior-friendly road pacing with medical oxygen halts, our experienced Haridwar operations team walks with you at every step.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Guaranteed Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Senior Citizen Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Helicopter / Ground Options</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24x7 Haridwar Ground Staff</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/chardham-yatra-package"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8c1d2f] to-[#c2392b] hover:from-[#731625] hover:to-[#a93024] text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Char Dham Packages 2027</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/chardham-yatra-registration-process"
                className="px-5 py-3.5 rounded-full border border-amber-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-amber-100/50 transition-all"
              >
                Registration Guide
              </Link>
            </div>
          </div>

          {/* Right: Connected Pilgrimage Route Diagram & Cards */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#fff3e2] to-[#ffe5d0] dark:from-slate-900 dark:to-slate-900/80 p-6 sm:p-8 rounded-3xl border border-amber-200 dark:border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8c1d2f] dark:text-amber-400 block mb-4 text-center">
              The Sacred Himalayan Pilgrimage Route
            </span>

            {/* Visual SVG Connecting Path */}
            <div className="w-full py-4">
              <svg viewBox="0 0 420 120" fill="none" className="w-full h-auto">
                <path
                  d="M 30 90 C 90 20, 150 110, 210 40 S 330 110, 390 30"
                  stroke="#8c1d2f"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-80"
                />
                <circle cx="30" cy="90" r="9" fill="#ff7a1a" />
                <circle cx="150" cy="80" r="9" fill="#ff7a1a" />
                <circle cx="270" cy="65" r="9" fill="#ff7a1a" />
                <circle cx="390" cy="30" r="9" fill="#ff7a1a" />
              </svg>
            </div>

            {/* 4 Dham Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-2">
              {DHAM_NODES.map((dham, idx) => (
                <Link
                  key={idx}
                  to={dham.link}
                  className="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-amber-200/80 dark:border-slate-700 shadow-sm hover:border-[#8c1d2f] hover:scale-105 transition-all"
                >
                  <div className="text-xs font-extrabold text-[#8c1d2f] dark:text-amber-400">
                    Dham 0{idx + 1}
                  </div>
                  <div className="font-serif font-black text-sm text-slate-900 dark:text-white mt-0.5">
                    {dham.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    {dham.km}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-slate-800/70 p-3 rounded-xl border border-amber-200/50">
              Departures available from <strong>Raipur, Bhilai, Bilaspur, Durg, Delhi & Haridwar</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharDhamSpecial;
