import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight, Dices } from 'lucide-react';

interface DestItem {
  name: string;
  href: string;
  image: string;
  tagline: string;
}

const DESTINATIONS: DestItem[] = [
  {
    name: 'Kedarnath',
    href: '/kedarnath-temple',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400&auto=format&fit=crop',
    tagline: 'Himalayan Darshan'
  },
  {
    name: 'Char Dham',
    href: '/chardham-yatra-package',
    image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=400&auto=format&fit=crop',
    tagline: 'Sacred 4 Dhams'
  },
  {
    name: 'Kumbh 2027',
    href: '/kumbh-mela-2027',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400&auto=format&fit=crop',
    tagline: 'Haridwar Ardh Kumbh'
  },
  {
    name: 'Ladakh',
    href: '/domestic-tours/ladakh',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=400&auto=format&fit=crop',
    tagline: 'Pangong & Passes'
  },
  {
    name: 'Manali',
    href: '/manali-kasol-strangers-trip',
    image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=400&auto=format&fit=crop',
    tagline: 'Snow & Valleys'
  },
  {
    name: 'Kashmir',
    href: '/domestic-tours/kashmir',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=400&auto=format&fit=crop',
    tagline: 'Paradise on Earth'
  },
  {
    name: 'Goa',
    href: '/domestic-tours/goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=400&auto=format&fit=crop',
    tagline: 'Beaches & Sunsets'
  },
  {
    name: 'Kerala',
    href: '/domestic-tours/kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop',
    tagline: 'Backwaters & Tea Hills'
  },
  {
    name: 'Puri Dham',
    href: '/domestic-tours/puri-jagannath-dham',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=400&auto=format&fit=crop',
    tagline: 'Jagannath & Konark'
  },
  {
    name: 'Thailand',
    href: '/international-tours/thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=400&auto=format&fit=crop',
    tagline: 'Bangkok & Pattaya'
  },
  {
    name: 'Dubai',
    href: '/international-tours/dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop',
    tagline: 'Skyline & Desert Safari'
  },
  {
    name: 'Bali',
    href: '/international-tours/bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&auto=format&fit=crop',
    tagline: 'Tropical Villas'
  },
  {
    name: 'Singapore',
    href: '/international-tours/singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop',
    tagline: 'Marina & Sentosa'
  },
  {
    name: 'Vietnam',
    href: '/international-tours/vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop',
    tagline: 'Da Nang & Halong'
  }
];

const STYLE_CHIPS = [
  { name: 'Honeymoon', href: '/honeymoon-packages' },
  { name: 'Family Special', href: '/family-packages' },
  { name: 'Adventure & Treks', href: '/adventure-packages' },
  { name: 'Spiritual Pilgrimage', href: '/chardham-yatra-package' },
  { name: 'Luxury Holidays', href: '/luxury-packages' },
  { name: 'Budget Friendly', href: '/domestic-tours/goa-trip-under-10000' },
  { name: 'Solo / Friends', href: '/manali-kasol-strangers-trip' },
  { name: 'Beaches', href: '/domestic-tours/goa' },
  { name: 'Snow & Mountains', href: '/domestic-tours/ladakh' }
];

const DestinationExplorer: React.FC = () => {
  const [surpriseIdx, setSurpriseIdx] = useState(3);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSurpriseMe = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      setSurpriseIdx(Math.floor(Math.random() * DESTINATIONS.length));
      if (counter >= 12) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  const selectedDest = DESTINATIONS[surpriseIdx];

  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section 1: Where do you want to go? Rail */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
                Explore India & Beyond
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
                Where do you want to go?
              </h2>
            </div>
            <Link
              to="/domestic-packages"
              className="text-sm font-bold text-[#8c1d2f] dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>View all destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Swipeable Destination Circular Avatars */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x">
            {DESTINATIONS.map((d, i) => (
              <Link
                key={i}
                to={d.href}
                className="group flex flex-col items-center shrink-0 w-24 sm:w-28 text-center snap-start"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-[#8c1d2f] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=400&auto=format&fit=crop"; }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <span className="mt-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#8c1d2f] dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                  {d.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {d.tagline}
                </span>
              </Link>
            ))}
          </div>

          {/* Style Filter Chips */}
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 pt-4 pb-2 sm:pb-0 scrollbar-none">
            {STYLE_CHIPS.map((chip, idx) => (
              <Link
                key={idx}
                to={chip.href}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-[#ff7a1a] hover:text-white hover:border-[#ff7a1a] shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                {chip.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive "Spin the world. Pick your next stop." */}
        <div className="relative rounded-3xl p-5 sm:p-12 bg-gradient-to-br from-[#fff3e2] via-[#ffe8d6] to-[#fff0e6] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border border-amber-200 dark:border-slate-800 shadow-xl overflow-hidden text-center">
          <div className="max-w-xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-[#8c1d2f] dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Trip Picker</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white">
              Spin the world. Pick your next stop.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Can't decide between snow peaks, holy rivers, tropical beaches or futuristic skylines? Let our smart trip selector surprise you!
            </p>
          </div>

          {/* Surprise Showcase Card */}
          <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200 dark:border-slate-700 transition-all duration-300">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Recommended For You
            </span>

            <div
              className={`text-3xl sm:text-4xl font-serif font-black text-[#8c1d2f] dark:text-amber-400 mt-2 mb-4 transition-all duration-150 ${
                isSpinning ? 'blur-sm scale-95 opacity-70' : 'blur-0 scale-100 opacity-100'
              }`}
            >
              {selectedDest.name}
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden mb-4 shadow-md">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=400&auto=format&fit=crop"; }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-sm font-semibold">
                  {selectedDest.tagline}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSurpriseMe}
                disabled={isSpinning}
                className="px-6 py-3 rounded-full border-2 border-[#8c1d2f] text-[#8c1d2f] dark:border-amber-400 dark:text-amber-400 font-bold text-sm hover:bg-[#8c1d2f] hover:text-white transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Dices className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
                <span>{isSpinning ? 'Selecting...' : 'Surprise Me'}</span>
              </button>

              <Link
                to={selectedDest.href}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff4f3d] hover:from-[#e86a0d] hover:to-[#e84232] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Plan This Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationExplorer;
