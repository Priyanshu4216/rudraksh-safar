import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BentoDestinations: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
              Handcrafted Portfolios
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
              Where to next?
            </h2>
          </div>
          <Link
            to="/international-packages"
            className="text-sm font-bold text-[#8c1d2f] dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>Explore all trips</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="flex sm:hidden items-center justify-between text-xs mb-2.5 px-0.5 text-slate-500 font-semibold">
          <span className="text-[#ff7a1a]">Swipe handcrafted destinations →</span>
        </div>
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-3.5 sm:gap-4 pb-3 sm:pb-0 scrollbar-none sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[180px]">
          {/* Tile 1: Ladakh (Large 2x2 Tile) */}
          <Link
            to="/domestic-tours/ladakh"
            className="group relative sm:col-span-2 sm:row-span-2 rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col justify-end text-white border border-amber-900/20 shrink-0 w-[270px] h-[230px] sm:w-auto sm:h-auto snap-start"
          >
            <img
              src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop"
              alt="Ladakh"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                Pangong & High Passes
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-black leading-tight drop-shadow">
                Ladakh
              </h3>
              <p className="text-xs sm:text-sm text-white/90 line-clamp-2 max-w-md">
                Oxygen-fitted SUVs, acclimatization halts, monastery trails, and luxury camps by the lake.
              </p>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#ff7a1a] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Tile 2: Thailand (2 cols span 1 row) */}
          <Link
            to="/international-tours/thailand"
            className="group relative sm:col-span-2 rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col justify-end text-white border border-amber-900/20 shrink-0 w-[260px] h-[230px] sm:w-auto sm:h-auto snap-start"
          >
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop"
              alt="Thailand"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8c1d2f]/85 via-black/30 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                  Starts at ₹11,999
                </span>
                <h3 className="text-2xl font-serif font-black leading-tight">
                  Thailand: Pattaya & Phuket
                </h3>
              </div>
              <span className="text-xs font-semibold underline text-amber-100">Details →</span>
            </div>
          </Link>

          {/* Tile 3: Kashmir */}
          <Link
            to="/domestic-tours/kashmir"
            className="group relative rounded-3xl overflow-hidden shadow-lg p-5 flex flex-col justify-end text-white border border-amber-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop"
              alt="Kashmir"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b6b5f]/85 via-black/25 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-teal-200 uppercase">Dal Lake & Gulmarg</span>
              <h3 className="text-xl font-serif font-black">Kashmir</h3>
            </div>
          </Link>

          {/* Tile 4: Goa */}
          <Link
            to="/domestic-tours/goa"
            className="group relative rounded-3xl overflow-hidden shadow-lg p-5 flex flex-col justify-end text-white border border-amber-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop"
              alt="Goa"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e8741e]/85 via-black/25 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-amber-200 uppercase">Beaches & Sunsets</span>
              <h3 className="text-xl font-serif font-black">Goa</h3>
            </div>
          </Link>

          {/* Tile 5: Dubai (2 cols) */}
          <Link
            to="/international-tours/dubai"
            className="group relative sm:col-span-2 rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col justify-end text-white border border-amber-900/20 shrink-0 w-[260px] h-[230px] sm:w-auto sm:h-auto snap-start"
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
              alt="Dubai"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#9a7418]/85 via-black/30 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                  Desert Safari & Skylines
                </span>
                <h3 className="text-2xl font-serif font-black leading-tight">
                  Dubai 5-Day Itineraries
                </h3>
              </div>
              <span className="text-xs font-semibold underline text-amber-100">Details →</span>
            </div>
          </Link>

          {/* Tile 6: Puri Dham */}
          <Link
            to="/domestic-tours/puri-jagannath-dham"
            className="group relative rounded-3xl overflow-hidden shadow-lg p-5 flex flex-col justify-end text-white border border-amber-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop"
              alt="Puri Jagannath Dham"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6b3a1f]/85 via-black/25 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-amber-200 uppercase">Coastal Pilgrimage</span>
              <h3 className="text-xl font-serif font-black">Puri Dham</h3>
            </div>
          </Link>

          {/* Tile 7: Bali */}
          <Link
            to="/international-tours/bali"
            className="group relative rounded-3xl overflow-hidden shadow-lg p-5 flex flex-col justify-end text-white border border-amber-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop"
              alt="Bali"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f5f7a]/85 via-black/25 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-cyan-200 uppercase">Ubud & Nusa Penida</span>
              <h3 className="text-xl font-serif font-black">Bali</h3>
            </div>
          </Link>

          {/* Tile 8: Kerala (2 cols) */}
          <Link
            to="/domestic-tours/kerala"
            className="group relative sm:col-span-2 rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col justify-end text-white border border-amber-900/20 shrink-0 w-[260px] h-[230px] sm:w-auto sm:h-auto snap-start"
          >
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
              alt="Kerala"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f6b3a]/85 via-black/30 to-transparent" />
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-200">
                  God's Own Country
                </span>
                <h3 className="text-2xl font-serif font-black leading-tight">
                  Kerala: Backwaters & Munnar
                </h3>
              </div>
              <span className="text-xs font-semibold underline text-green-100">Details →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoDestinations;
