import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Clock, ArrowRight, MessageCircle } from 'lucide-react';

interface CityPackage {
  title: string;
  meta: string;
  duration: string;
  startingPrice: string;
  href: string;
  image: string;
  badge?: string;
}

const CITIES = ['Raipur', 'Bhilai', 'Durg', 'Bilaspur', 'Nagpur', 'Delhi'];

const PACKAGES_BY_CITY: Record<string, CityPackage[]> = {
  Raipur: [
    {
      title: 'Manali + Kasol Strangers Trip',
      meta: 'Volvo from Delhi / Raipur connect · Solo & group friendly',
      duration: '5N / 6D',
      startingPrice: '₹5,999',
      href: '/manali-kasol-strangers-trip',
      image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=600&auto=format&fit=crop',
      badge: 'Popular'
    },
    {
      title: 'Ladakh Ultimate High Pass Expedition',
      meta: 'Flight connect from Raipur · Oxygen-fitted vehicles',
      duration: '12N / 13D',
      startingPrice: '₹28,500',
      href: '/domestic-tours/ladakh',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      badge: 'Bestseller'
    },
    {
      title: 'Thailand: Bangkok + Pattaya Special',
      meta: 'Flights via Kolkata / Mumbai · 4-star hotels & visa help',
      duration: '4N / 5D',
      startingPrice: '₹11,999',
      href: '/international-tours/thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      badge: 'Trending'
    },
    {
      title: 'Char Dham Yatra from Raipur',
      meta: 'Train or flight to Haridwar · VIP darshan & hotels',
      duration: '9N / 10D',
      startingPrice: '₹24,999',
      href: '/chardham-yatra-from-raipur',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      badge: 'Spiritual'
    }
  ],
  Bhilai: [
    {
      title: 'Kedarnath Temple Yatra',
      meta: 'Haridwar pick & drop · Helicopter / Trek options',
      duration: '4N / 5D',
      startingPrice: '₹14,500',
      href: '/kedarnath-temple',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      badge: 'Top Yatra'
    },
    {
      title: 'Goa Holiday Package Under ₹10,000',
      meta: 'Direct train / flight from Raipur · Beachside resorts',
      duration: '3N / 4D',
      startingPrice: '₹7,999',
      href: '/domestic-tours/goa-trip-under-10000',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      badge: 'Budget'
    },
    {
      title: 'Dubai 5-Day Extravaganza',
      meta: 'Visa, Burj Khalifa, Desert Safari & Transfers',
      duration: '4N / 5D',
      startingPrice: '₹42,500',
      href: '/international-tours/dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      badge: 'Luxury'
    },
    {
      title: 'Puri Jagannath Dham & Konark',
      meta: 'Durg / Raipur direct train · Ocean resort & temple VIP',
      duration: '3N / 4D',
      startingPrice: '₹8,500',
      href: '/domestic-tours/puri-jagannath-dham',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop',
      badge: 'Spiritual'
    }
  ],
  Durg: [
    {
      title: 'Kashmir Summer Special',
      meta: 'Srinagar, Gulmarg gondola, Pahalgam valleys',
      duration: '5N / 6D',
      startingPrice: '₹17,999',
      href: '/domestic-tours/kashmir',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      badge: 'Summer'
    },
    {
      title: 'Bali Honeymoon with Private Pool Villa',
      meta: 'Flights from Raipur · Ubud & Nusa Penida tours',
      duration: '5N / 6D',
      startingPrice: '₹34,500',
      href: '/international-tours/bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      badge: 'Honeymoon'
    },
    {
      title: 'Haridwar Kumbh Mela 2027 Tents',
      meta: 'Direct Durg-Haridwar train guidance · Ganga ghat stays',
      duration: '3N / 4D',
      startingPrice: '₹12,500',
      href: '/kumbh-mela-2027',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
      badge: 'Upcoming'
    },
    {
      title: 'Kerala Backwaters & Munnar Hills',
      meta: 'Houseboat night, tea gardens, spice plantations',
      duration: '4N / 5D',
      startingPrice: '₹16,500',
      href: '/domestic-tours/kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
      badge: 'Scenic'
    }
  ],
  Bilaspur: [
    {
      title: 'Char Dham Fixed Departures',
      meta: 'Bilaspur train assistance · All meals & stays',
      duration: '9N / 10D',
      startingPrice: '₹24,999',
      href: '/chardham-yatra-package',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      badge: 'Spiritual'
    },
    {
      title: 'Thailand Budget Explorer',
      meta: 'Pattaya + Bangkok combo · Island speedboats',
      duration: '4N / 5D',
      startingPrice: '₹11,999',
      href: '/international-tours/thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      badge: 'Budget'
    },
    {
      title: 'Ladakh Bike & SUV Expedition',
      meta: 'Leh-to-Leh with Raipur/Bilaspur flight options',
      duration: '6N / 7D',
      startingPrice: '₹21,500',
      href: '/domestic-tours/ladakh',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      badge: 'Adventure'
    },
    {
      title: 'Goa Beach Resort Holiday',
      meta: 'North & South Goa · Calangute & Baga',
      duration: '3N / 4D',
      startingPrice: '₹8,999',
      href: '/domestic-tours/goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      badge: 'Relax'
    }
  ],
  Nagpur: [
    {
      title: 'Dubai Complete Family Holiday',
      meta: 'Direct Nagpur-Sharjah / Dubai flight connects',
      duration: '5N / 6D',
      startingPrice: '₹39,999',
      href: '/international-tours/dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      badge: 'Family'
    },
    {
      title: 'Kedarnath Helicopter Package',
      meta: 'Phata/Guptkashi helipad tickets & VIP darshan',
      duration: '3N / 4D',
      startingPrice: '₹19,999',
      href: '/kedarnath-temple',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      badge: 'Helicopter'
    },
    {
      title: 'Vietnam: Da Nang, Ba Na Hills & Hanoi',
      meta: 'Golden Bridge, Halong Bay luxury cruise',
      duration: '5N / 6D',
      startingPrice: '₹32,500',
      href: '/international-tours/vietnam',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop',
      badge: 'Popular'
    },
    {
      title: 'Singapore Sentosa & Universal Studios',
      meta: '4-star hotel, night safari & airport transfers',
      duration: '4N / 5D',
      startingPrice: '₹48,999',
      href: '/international-tours/singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop',
      badge: 'Family'
    }
  ],
  Delhi: [
    {
      title: 'Manali Kasol Strangers Trip',
      meta: 'Overnight Volvo from Majnu Ka Tila · Meals & Bonfire',
      duration: '5N / 6D',
      startingPrice: '₹5,999',
      href: '/manali-kasol-strangers-trip',
      image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=600&auto=format&fit=crop',
      badge: 'Weekly'
    },
    {
      title: 'Char Dham Yatra from Delhi / Haridwar',
      meta: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
      duration: '9N / 10D',
      startingPrice: '₹21,999',
      href: '/chardham-yatra-package',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      badge: 'Yatra'
    },
    {
      title: 'Thailand Direct Flight Package',
      meta: 'Direct Indira Gandhi Airport departures',
      duration: '4N / 5D',
      startingPrice: '₹14,999',
      href: '/international-tours/thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      badge: 'Fast Visa'
    },
    {
      title: 'Ladakh Highway Circuit via Manali',
      meta: 'Atal Tunnel, Jispa, Sarchu, Leh, Pangong',
      duration: '7N / 8D',
      startingPrice: '₹22,500',
      href: '/domestic-tours/ladakh',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      badge: 'Road Trip'
    }
  ]
};

const CityDepartures: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Raipur');

  const packages = PACKAGES_BY_CITY[selectedCity] || PACKAGES_BY_CITY['Raipur'];

  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
              Hot Right Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
              Departing from <span className="text-[#8c1d2f] dark:text-amber-400">{selectedCity}</span>
            </h2>
          </div>

          {/* City Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCity === city
                    ? 'bg-[#8c1d2f] text-white shadow-md scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-amber-200/80 dark:border-slate-800 hover:border-amber-400'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="flex sm:hidden items-center justify-between text-xs mb-2.5 px-0.5 text-slate-500 font-semibold">
          <span className="text-[#8c1d2f] dark:text-amber-400">Swipe departures →</span>
        </div>
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-6 pb-3 sm:pb-0 scrollbar-none sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-amber-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shrink-0 w-[265px] sm:w-auto snap-start"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 bg-[#ff7a1a] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md tracking-wider">
                      {pkg.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90">
                    {pkg.duration}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#8c1d2f] dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {pkg.meta}
                  </p>

                  {/* Inclusion Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-medium bg-amber-50 dark:bg-slate-800 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-md">
                      Hotels
                    </span>
                    <span className="text-[10px] font-medium bg-amber-50 dark:bg-slate-800 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-md">
                      Transfers
                    </span>
                    <span className="text-[10px] font-medium bg-amber-50 dark:bg-slate-800 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-md">
                      24x7 Care
                    </span>
                    <span className="text-[10px] font-medium bg-amber-50 dark:bg-slate-800 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-md">
                      No Cost EMI
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">
                    Starting from
                  </span>
                  <div className="text-lg font-black text-[#8c1d2f] dark:text-amber-400 leading-tight">
                    {pkg.startingPrice}
                  </div>
                </div>

                <a
                  href={`https://wa.me/919203650311?text=${encodeURIComponent(`Hi Rudraksh Safar, I am looking for package quote for "${pkg.title}" from ${selectedCity}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff4f3d] text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityDepartures;
