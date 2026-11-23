import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sun, Snowflake, CloudRain, Sparkles } from 'lucide-react';

interface MonthPick {
  title: string;
  href: string;
  note: string;
  image: string;
  highlight: string;
}

const MONTH_DATA: Record<string, MonthPick[]> = {
  Jan: [
    {
      title: 'Manali in Winter & Solang Valley',
      href: '/manali-kasol-strangers-trip',
      note: 'Fresh snow, cosy riverside stays and thrilling ski slopes.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      highlight: 'Snow Peak Season'
    },
    {
      title: 'Haridwar Kumbh Mela 2027',
      href: '/kumbh-mela-2027',
      note: 'Starts mid-January. Holy Makar Sankranti inaugural snan.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
      highlight: 'Sacred Inaugural'
    },
    {
      title: 'Goa Coastal Winter Holiday',
      href: '/domestic-tours/goa',
      note: 'Pleasant 26°C beach weather, dolphin cruises & night markets.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Peak Beach Weather'
    }
  ],
  Feb: [
    {
      title: 'Goa & Dudhsagar Falls',
      href: '/domestic-tours/goa',
      note: 'Carnival vibes, water sports, sunset cruises and beach shacks.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Goa Carnival'
    },
    {
      title: 'Kerala Backwaters & Munnar Hills',
      href: '/domestic-tours/kerala',
      note: 'Mild cool weather, lush green tea estates and peaceful houseboats.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
      highlight: 'Misty Tea Gardens'
    },
    {
      title: 'Thailand Tropical Escape',
      href: '/international-tours/thailand',
      note: 'Dry, sunny weather in Pattaya, Coral Island & Phuket.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      highlight: 'Island Hopping'
    }
  ],
  Mar: [
    {
      title: 'Kumbh 2027 Royal Snan Fest',
      href: '/kumbh-mela-2027/snan-dates',
      note: 'Mahashivratri (6 Mar) & Somvati Amavasya (8 Mar) Amrit Snans.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
      highlight: '2 Major Amrit Snans'
    },
    {
      title: 'Rajasthan Royal Forts & Palaces',
      href: '/domestic-packages',
      note: 'Jaipur, Udaipur & Jaisalmer before summer heat kicks in.',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format&fit=crop',
      highlight: 'Heritage Palaces'
    },
    {
      title: 'Bali Tropical Pre-Monsoon Calm',
      href: '/international-tours/bali',
      note: 'Clear skies, peaceful Ubud waterfalls and beach clubs.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      highlight: 'Peaceful Villas'
    }
  ],
  Apr: [
    {
      title: 'Kashmir Spring Tulip Garden',
      href: '/domestic-tours/kashmir',
      note: 'Asia’s largest tulip garden in full bloom at Dal Lake.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      highlight: 'Tulip Bloom'
    },
    {
      title: 'Kumbh 2027 Grand Mesh Sankranti',
      href: '/kumbh-mela-2027/snan-dates',
      note: '14 April major Shahi Snan with Har Ki Pauri holy dip.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
      highlight: 'Shahi Snan'
    },
    {
      title: 'Puri Jagannath Dham',
      href: '/domestic-tours/puri-jagannath-dham',
      note: 'Breezy coastal pilgrimage, Konark Sun Temple and Chilika dolphins.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Coastal Temple'
    }
  ],
  May: [
    {
      title: 'Char Dham Yatra Opening',
      href: '/chardham-yatra-package',
      note: 'Temple portals open for the sacred Himalayan season.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      highlight: 'Yatra Portal Opening'
    },
    {
      title: 'Ladakh High Roads Opening',
      href: '/domestic-tours/ladakh',
      note: 'Manali-Leh & Srinagar-Leh highways open up for the season.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Roads Open'
    },
    {
      title: 'Kashmir Summer Retreat',
      href: '/domestic-tours/kashmir',
      note: 'Gulmarg Gondola snow point & lush green Pahalgam valleys.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      highlight: 'Snow Points'
    }
  ],
  Jun: [
    {
      title: 'Ladakh Peak Summer Expedition',
      href: '/domestic-tours/ladakh',
      note: 'Clear blue skies, shimmering Pangong & Nubra sand dunes.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Peak Ladakh Season'
    },
    {
      title: 'Manali + Kasol Strangers Trip',
      href: '/manali-kasol-strangers-trip',
      note: 'Cool mountain air, café hopping in Old Manali & Parvati river.',
      image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=600&auto=format&fit=crop',
      highlight: 'Cool & Social'
    },
    {
      title: 'Char Dham Yatra Senior Pacing',
      href: '/chardham-yatra-package',
      note: 'Smooth road travel and helicopter darshan to Kedarnath.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      highlight: 'Senior Care'
    }
  ],
  Jul: [
    {
      title: 'Ladakh High Passes & Monasteries',
      href: '/domestic-tours/ladakh',
      note: 'Khardung La, Hemis festival and Tso Moriri lakes.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Clear High Altitude'
    },
    {
      title: 'Kashmir Valley of Flowers',
      href: '/domestic-tours/kashmir',
      note: 'Alpine meadows, Sonamarg glacier treks and houseboat living.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      highlight: 'Alpine Flowers'
    },
    {
      title: 'Bali Dry Season Retreat',
      href: '/international-tours/bali',
      note: 'Surfing, temple sunsets at Uluwatu, and cool rice terrace breezes.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      highlight: 'Perfect Weather'
    }
  ],
  Aug: [
    {
      title: 'Ladakh Late Summer Circuits',
      href: '/domestic-tours/ladakh',
      note: 'Ideal time for bike expeditions and Leh marketplace exploration.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Bike Expedition'
    },
    {
      title: 'Kerala Monsoon Ayurveda Retreat',
      href: '/domestic-tours/kerala',
      note: 'Traditional monsoon rejuvenation therapies and roaring waterfalls.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
      highlight: 'Ayurveda Rejuvenation'
    },
    {
      title: 'Puri Jagannath Temple Pilgrimage',
      href: '/domestic-tours/puri-jagannath-dham',
      note: 'Sacred coastal prayers and fresh monsoon sea breeze.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Spiritual Coast'
    }
  ],
  Sep: [
    {
      title: 'Kashmir Golden Chinar Season',
      href: '/domestic-tours/kashmir',
      note: 'Golden autumn leaves, crisp mountain air and tranquil Dal Lake.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      highlight: 'Golden Autumn'
    },
    {
      title: 'Rajasthan Post-Monsoon Lakes',
      href: '/domestic-packages',
      note: 'Udaipur lake palaces brimming with fresh monsoon water.',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format&fit=crop',
      highlight: 'Full Lakes'
    },
    {
      title: 'Vietnam: Hanoi & Halong Bay',
      href: '/international-tours/vietnam',
      note: 'Clear emerald waters and breathtaking limestone karsts.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop',
      highlight: 'Emerald Karsts'
    }
  ],
  Oct: [
    {
      title: 'Dubai Autumn Season Begins',
      href: '/international-tours/dubai',
      note: 'Cooler evening desert safaris, beach clubs and theme parks.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      highlight: 'Cool Desert Nights'
    },
    {
      title: 'Thailand Beach Season Kickoff',
      href: '/international-tours/thailand',
      note: 'Pleasant tropical breeze, vibrant night markets and water sports.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      highlight: 'Sunny Beaches'
    },
    {
      title: 'Char Dham Autumn Darshan',
      href: '/chardham-yatra-package',
      note: 'Clear blue Himalayan skies before the sacred winter portal closing.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      highlight: 'Pre-Closing Darshan'
    }
  ],
  Nov: [
    {
      title: 'Goa Peak Season Opening',
      href: '/domestic-tours/goa',
      note: 'Music festivals, water sports and festive beachside seafood shacks.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      highlight: 'Festive Season'
    },
    {
      title: 'Dubai Shopping & Desert Glamping',
      href: '/international-tours/dubai',
      note: 'Perfect 27°C weather, luxury yacht cruises and Miracle Garden.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      highlight: 'Desert Glamping'
    },
    {
      title: 'Thailand: Bangkok & Pattaya',
      href: '/international-tours/thailand',
      note: 'Ideal holiday weather for couples, friend groups and families.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      highlight: 'Great Weather'
    }
  ],
  Dec: [
    {
      title: 'Manali & Solang Snow Wonderland',
      href: '/manali-kasol-strangers-trip',
      note: 'White Christmas and New Year snowfalls in Rohtang & Solang.',
      image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=600&auto=format&fit=crop',
      highlight: 'White Winter'
    },
    {
      title: 'Goa New Year & Christmas Holidays',
      href: '/domestic-tours/goa',
      note: 'Celebrations, fireworks, beach parties and luxury catamaran cruises.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      highlight: 'New Year Bash'
    },
    {
      title: 'Kashmir Winter Snow in Gulmarg',
      href: '/domestic-tours/kashmir',
      note: 'Skiing on powdery slopes, heated houseboats and snow sledding.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      highlight: 'Gulmarg Skiing'
    }
  ]
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MonthEscapes: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState('Apr');

  const picks = MONTH_DATA[activeMonth] || MONTH_DATA['Apr'];

  return (
    <section className="py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
              Best Trips by Month
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
              Your month. Your next escape.
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Selected travel season recommendations with verified local weather
          </span>
        </div>

        {/* 12-Month Pills Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none snap-x mb-8">
          {MONTHS.map((mon) => (
            <button
              key={mon}
              onClick={() => setActiveMonth(mon)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 snap-start ${
                activeMonth === mon
                  ? 'bg-[#8c1d2f] text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-amber-200/80 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              {mon}
            </button>
          ))}
        </div>

        {/* 3 Featured Month Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {picks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-amber-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#8c1d2f] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {item.highlight}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-[#8c1d2f] dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {item.note}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between text-xs font-bold text-[#ff7a1a]">
                <span>Explore Package Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 text-xs text-slate-500 dark:text-slate-400">
          Want a different month or customized dates? Chat directly with our travel desk on{' '}
          <a
            href="https://wa.me/919203650311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8c1d2f] dark:text-amber-400 font-bold underline"
          >
            WhatsApp +91 92036 50311
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonthEscapes;
