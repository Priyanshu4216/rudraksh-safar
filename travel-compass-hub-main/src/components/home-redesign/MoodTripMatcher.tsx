import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain, Waves, Landmark, Building2,
  Heart, Users, Compass, User,
  ArrowRight, MessageCircle, Star, Clock,
  CheckCircle2, Sparkles, TrendingUp, Shield
} from 'lucide-react';

interface MoodMatch {
  title: string;
  tagline: string;
  description: string;
  whyMatch: string;
  href: string;
  image: string;
  startingPrice: string;
  originalPrice?: string;
  duration: string;
  rating: number;
  reviews: number;
  highlights: string[];
  badge?: string;
}

const MATCHES: Record<string, Record<string, MoodMatch>> = {
  Mountains: {
    Couple: {
      title: 'Kashmir Houseboat Romance',
      tagline: 'Dal Lake • Gulmarg • Pahalgam',
      description: 'Float on a luxury shikara houseboat on Dal Lake, ride a gondola in Gulmarg, and stroll the tulip gardens hand-in-hand in the valley of love.',
      whyMatch: 'Intimate settings + private houseboat + snow-capped romance — made for couples.',
      href: '/domestic-tours/kashmir',
      image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹17,999',
      originalPrice: '₹24,000',
      duration: '6N / 7D',
      rating: 4.9,
      reviews: 312,
      highlights: ['Private houseboat stay', 'Shikara sunrise ride', 'Gulmarg Gondola', 'Couple candlelight dinner'],
      badge: '❤️ Most Loved'
    },
    Family: {
      title: 'Manali Family Escape',
      tagline: 'Solang Valley • Rohtang • Old Manali',
      description: 'Snow play for kids at Solang Valley, a thrilling Rohtang Pass adventure, cozy wooden cottages, and bonfire evenings the whole family will remember.',
      whyMatch: 'Child-safe activities + comfortable hotels + family group discounts — perfect fit.',
      href: '/domestic-tours/manali',
      image: 'https://images.unsplash.com/photo-1596021688656-9a7e31f7bcbb?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹5,999',
      originalPrice: '₹8,500',
      duration: '5N / 6D',
      rating: 4.8,
      reviews: 528,
      highlights: ['Snow activities for kids', 'Rohtang Pass permit', 'Family suite stay', 'Bonfire & BBQ night'],
      badge: '👨‍👩‍👧 Family Fav'
    },
    Friends: {
      title: 'Manali + Kasol Group Trip',
      tagline: 'Kheerganga Trek • Parvati Valley • Rohtang',
      description: 'India\'s most iconic friend trip — Kheerganga hot springs trek, riverside camping in Kasol, Rohtang adventure, and unforgettable night bonfires.',
      whyMatch: 'Group camping + trekking + budget-friendly — literally built for friend squads.',
      href: '/domestic-tours/manali',
      image: 'https://images.unsplash.com/photo-1577535273006-13dd6e08fa44?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹5,999',
      originalPrice: '₹9,000',
      duration: '5N / 6D',
      rating: 4.9,
      reviews: 741,
      highlights: ['Kheerganga hot springs trek', 'Riverside tent camping', 'Group adventure activities', 'Kasol cafe hopping'],
      badge: '🔥 Bestseller'
    },
    Solo: {
      title: 'Ladakh Ultimate Expedition',
      tagline: 'Pangong Lake • Nubra Valley • Khardung La',
      description: 'Cross the world\'s highest motorable pass, camp beside the electrifying Pangong Lake, ride sand dunes in Nubra, and discover Buddhist monasteries at dawn.',
      whyMatch: 'Epic solo adventure + oxygen-equipped vehicles + acclimated pacing for one.',
      href: '/domestic-tours/ladakh',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹28,500',
      originalPrice: '₹35,000',
      duration: '8N / 9D',
      rating: 4.9,
      reviews: 203,
      highlights: ['Pangong Lake camping', 'Khardung La pass', 'Nubra Valley camel ride', 'Monastery dawn prayers'],
      badge: '🏔️ Epic Journey'
    }
  },
  Beaches: {
    Couple: {
      title: 'Bali Honeymoon Villa',
      tagline: 'Ubud • Seminyak • Tanah Lot',
      description: 'Private infinity pool villa in Ubud, sunset Tanah Lot temple visit, romantic beach club dinners in Seminyak, and a traditional Balinese spa couple ritual.',
      whyMatch: 'Private villa + romantic sunsets + couple spa — Bali is honeymoon royalty.',
      href: '/international-tours/bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹34,500',
      originalPrice: '₹45,000',
      duration: '5N / 6D',
      rating: 4.9,
      reviews: 418,
      highlights: ['Private infinity pool villa', 'Couple Balinese spa', 'Tanah Lot sunset', 'Romantic beach dinner'],
      badge: '💍 Honeymoon Pick'
    },
    Family: {
      title: 'Goa Family Holiday',
      tagline: 'North Goa • South Goa • Water Parks',
      description: 'Splash at water parks with the kids, cruise on Mandovi River, eat fresh seafood at beach shacks, and explore Old Goa\'s UNESCO heritage churches together.',
      whyMatch: 'Water parks + calm South Goa beaches + family-friendly resorts — perfect balance.',
      href: '/domestic-tours/goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹8,999',
      originalPrice: '₹13,000',
      duration: '4N / 5D',
      rating: 4.7,
      reviews: 634,
      highlights: ['Water park day pass', 'Mandovi River cruise', 'Beach resort stay', 'Seafood shack dinner'],
      badge: '🏖️ Summer Special'
    },
    Friends: {
      title: 'Thailand: Bangkok + Pattaya',
      tagline: 'Coral Island • Alcazar • Night Bazaar',
      description: 'Speedboat to Coral Island, Alcazar cabaret spectacular, Bangkok rooftop bars, floating market breakfast, and wild night bazaar shopping with the squad.',
      whyMatch: 'Group party vibes + island adventures + nightlife + budget international — friend trip gold.',
      href: '/international-tours/thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹11,999',
      originalPrice: '₹18,000',
      duration: '5N / 6D',
      rating: 4.8,
      reviews: 892,
      highlights: ['Coral Island speedboat', 'Alcazar cabaret show', 'Floating market tour', 'Bangkok nightlife'],
      badge: '🔥 Bestseller'
    },
    Solo: {
      title: 'Goa Solo Explorer',
      tagline: 'Bikepacking • Flea Markets • Beach Yoga',
      description: 'Rent a Royal Enfield, wake up for sunrise beach yoga, flea market hunting at Anjuna, paragliding at Arambol, and hostel social nights with global travellers.',
      whyMatch: 'Solo-safe + hostel community + budget-friendly + maximum freedom — Goa for one.',
      href: '/domestic-tours/goa',
      image: 'https://images.unsplash.com/photo-1581339083832-fe85acdd7c71?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹7,999',
      originalPrice: '₹12,000',
      duration: '4N / 5D',
      rating: 4.6,
      reviews: 287,
      highlights: ['Bike rental included', 'Anjuna flea market', 'Paragliding at Arambol', 'Sunrise beach yoga'],
      badge: '🎒 Solo Pick'
    }
  },
  Pilgrimage: {
    Couple: {
      title: 'Char Dham Yatra & Kedarnath',
      tagline: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
      description: 'Complete Char Dham circuit with VIP darshan assistance, helicopter options, senior-friendly pacing, Swiss tent stays, and registration management handled for you.',
      whyMatch: 'Comfortable pacing + VIP assistance + together seeking blessings — divine couple journey.',
      href: '/chardham-yatra-package',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹22,999',
      originalPrice: '₹30,000',
      duration: '10N / 11D',
      rating: 4.9,
      reviews: 456,
      highlights: ['VIP darshan assistance', 'Helicopter option available', 'All 4 Dhams covered', 'Swiss tent accommodation'],
      badge: '🙏 Sacred Circuit'
    },
    Family: {
      title: 'Puri Jagannath Yatra',
      tagline: 'Jagannath Temple • Konark • Chilika Lake',
      description: 'Seek blessings at the sacred Puri Jagannath Temple, witness the Sun Temple of Konark, boat on flamingo-dotted Chilika Lake, and feast on Odia thali by the sea.',
      whyMatch: 'All-ages temple visits + beach + boat activities + affordable — ideal family pilgrimage.',
      href: '/domestic-tours/puri',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹8,500',
      originalPrice: '₹13,000',
      duration: '4N / 5D',
      rating: 4.7,
      reviews: 318,
      highlights: ['Jagannath temple darshan', 'Konark Sun Temple visit', 'Chilika Lake boat ride', 'Traditional Odia thali'],
      badge: '✨ Divine Journey'
    },
    Friends: {
      title: 'Kedarnath Group Yatra',
      tagline: 'Gaurikund Trek • Triyuginarayan • Chopta',
      description: 'Trek the 20km Gaurikund to Kedarnath trail with your crew, stay in Chopta (Mini Switzerland), visit the eternal-fire Triyuginarayan temple, and camp under Himalayan stars.',
      whyMatch: 'Adventure trekking + spiritual experience + group bonding + Himalayan camping.',
      href: '/domestic-tours/kedarnath',
      image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹14,500',
      originalPrice: '₹20,000',
      duration: '6N / 7D',
      rating: 4.8,
      reviews: 229,
      highlights: ['Kedarnath trek 20km', 'Chopta camping', 'Triyuginarayan temple', 'Himalayan star-gazing'],
      badge: '⛰️ Trek + Spiritual'
    },
    Solo: {
      title: 'Kumbh Mela 2027 Experience',
      tagline: 'Prayagraj • Ganga Aarti • Sangam Snan',
      description: 'Join the world\'s largest gathering — take the holy Sangam dip, witness the grand Ganga Aarti at night, stay in premium camp tents, and immerse in India\'s most powerful spiritual energy.',
      whyMatch: 'Solo spiritual immersion + community connection + once-in-12-years experience.',
      href: '/kumbh-mela-2027',
      image: 'https://images.unsplash.com/photo-1612438214708-f428a707f735?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹12,500',
      originalPrice: '₹18,000',
      duration: '3N / 4D',
      rating: 4.9,
      reviews: 174,
      highlights: ['Sangam holy dip', 'Grand Ganga Aarti', 'Premium camp stay', 'Spiritual guided tour'],
      badge: '🕉️ Once in 12 Years'
    }
  },
  'City and culture': {
    Couple: {
      title: 'Dubai Luxury Escape',
      tagline: 'Burj Khalifa • Desert Safari • Marina Dhow',
      description: 'Watch the city from Burj Khalifa\'s 124th floor, dune bash at sunset, dine under stars in the desert, and cruise on a romantic Marina Dhow — all with fast-track visa.',
      whyMatch: 'Luxury hotels + romantic dinners + iconic skyline + effortless visa — couple\'s dream city.',
      href: '/international-tours/dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹33,999',
      originalPrice: '₹45,000',
      duration: '5N / 6D',
      rating: 4.9,
      reviews: 509,
      highlights: ['Burj Khalifa 124th floor', 'Desert safari & BBQ dinner', 'Marina Dhow cruise', 'Fast-track tourist visa'],
      badge: '👑 Premium'
    },
    Family: {
      title: 'Singapore Sentosa Adventure',
      tagline: 'Universal Studios • Gardens by the Bay • Cable Car',
      description: 'Thrill the kids at Universal Studios, wonder at the Supertree light show, ride the Sentosa cable car, and feast on hawker centre food from across Asia.',
      whyMatch: 'World-class theme parks + safe city + kid-friendly attractions + easy transit.',
      href: '/international-tours/singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹48,999',
      originalPrice: '₹65,000',
      duration: '5N / 6D',
      rating: 4.9,
      reviews: 387,
      highlights: ['Universal Studios day', 'Gardens by the Bay', 'Sentosa cable car', 'Hawker centre food tour'],
      badge: '🎡 Family Adventure'
    },
    Friends: {
      title: 'Vietnam: Da Nang + Hoi An',
      tagline: 'Golden Bridge • Ba Na Hills • Hoi An Lanterns',
      description: 'Walk the iconic Golden Hands Bridge, explore surreal Ba Na Hills theme world, kayak in Halong Bay, and release glowing lanterns into the river at ancient Hoi An.',
      whyMatch: 'Cheap + beautiful + group-friendly activities + exotic culture — friend trip perfection.',
      href: '/international-tours/vietnam',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹32,500',
      originalPrice: '₹44,000',
      duration: '6N / 7D',
      rating: 4.8,
      reviews: 341,
      highlights: ['Golden Bridge walk', 'Ba Na Hills full day', 'Hoi An lantern ceremony', 'Halong Bay kayaking'],
      badge: '🌟 Trending'
    },
    Solo: {
      title: 'Thailand Solo City Explorer',
      tagline: 'Bangkok • Chiang Mai • Temples & Markets',
      description: 'Navigate Bangkok\'s epic street food scene solo, meditate at Doi Suthep in Chiang Mai, zip-line through jungle canopies, and find your flow in Thailand\'s gentle rhythm.',
      whyMatch: 'Ultra-solo-friendly + cheap + vibrant culture + perfect for independent explorers.',
      href: '/international-tours/thailand',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop',
      startingPrice: '₹11,999',
      originalPrice: '₹17,000',
      duration: '5N / 6D',
      rating: 4.8,
      reviews: 622,
      highlights: ['Bangkok street food tour', 'Doi Suthep temple', 'Jungle zip-line Chiang Mai', 'Floating market visit'],
      badge: '🎒 Solo Friendly'
    }
  }
};

const MOODS = [
  { label: 'Mountains', icon: Mountain, color: 'from-blue-500 to-teal-600', emoji: '🏔️' },
  { label: 'Beaches', icon: Waves, color: 'from-cyan-500 to-blue-600', emoji: '🌊' },
  { label: 'Pilgrimage', icon: Landmark, color: 'from-amber-500 to-orange-600', emoji: '🙏' },
  { label: 'City and culture', icon: Building2, color: 'from-purple-500 to-indigo-600', emoji: '🏙️' }
];

const WHOS = [
  { label: 'Couple', icon: Heart, emoji: '❤️' },
  { label: 'Family', icon: Users, emoji: '👨‍👩‍👧' },
  { label: 'Friends', icon: Compass, emoji: '🤝' },
  { label: 'Solo', icon: User, emoji: '🎒' }
];

const MoodTripMatcher: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState('Mountains');
  const [selectedWho, setSelectedWho] = useState('Family');
  const [animKey, setAnimKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentMatch = MATCHES[selectedMood]?.[selectedWho] || MATCHES['Mountains']['Family'];

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
    setAnimKey(k => k + 1);
  };

  const handleWhoChange = (who: string) => {
    setSelectedWho(who);
    setAnimKey(k => k + 1);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [animKey]);

  const getWhatsAppInquiry = () => {
    const text = `Hi Rudraksh Safar! I'm travelling as a ${selectedWho} and looking for a ${selectedMood} trip — specifically interested in "${currentMatch.title}" (${currentMatch.startingPrice}/person). Please send me a customised itinerary and quote. 🙏`;
    return `https://wa.me/919203650311?text=${encodeURIComponent(text)}`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
      />
    ));
  };

  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
            <Sparkles className="w-3.5 h-3.5" />
            Find Your Trip in 20 Seconds
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
            Tell us the mood. We'll match the trip.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-sans">
            16 curated matches across moods & travel styles — personalised for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left: Controls ── */}
          <div className="lg:col-span-5 space-y-7">

            {/* 1. Mood */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                1. What are you craving?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {MOODS.map((m) => {
                  const Icon = m.icon;
                  const isSelected = selectedMood === m.label;
                  return (
                    <button
                      key={m.label}
                      onClick={() => handleMoodChange(m.label)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#8c1d2f] text-white border-[#8c1d2f] shadow-lg shadow-[#8c1d2f]/20 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-amber-200/80 dark:border-slate-800 hover:border-[#8c1d2f]/40 hover:shadow-md'
                      }`}
                    >
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20' : 'bg-amber-50 dark:bg-slate-800'
                      }`}>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#8c1d2f] dark:text-amber-400'}`} />
                      </span>
                      <div>
                        <div className="text-xs font-bold leading-tight">{m.label}</div>
                        <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/70' : 'text-slate-400'}`}>{m.emoji} Vibe</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Who */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                2. Who is travelling?
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {WHOS.map((w) => {
                  const Icon = w.icon;
                  const isSelected = selectedWho === w.label;
                  return (
                    <button
                      key={w.label}
                      onClick={() => handleWhoChange(w.label)}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center ${
                        isSelected
                          ? 'bg-[#8c1d2f] text-white border-[#8c1d2f] shadow-lg shadow-[#8c1d2f]/20 scale-[1.04]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-amber-200/80 dark:border-slate-800 hover:border-[#8c1d2f]/40 hover:shadow-md'
                      }`}
                    >
                      <span className="text-base mb-1">{w.emoji}</span>
                      <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-white' : 'text-[#8c1d2f] dark:text-amber-400'}`} />
                      <span className="text-[10px] font-bold">{w.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Value badges row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400">
                <Shield className="w-4 h-4 shrink-0" />
                <span className="font-semibold">100% Flexible Dates</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span className="font-semibold">Best Price Guarantee</span>
              </div>
            </div>

            {/* Why This Match */}
            <div
              key={`why-${animKey}`}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-[#ff7a1a] shadow-sm"
              style={{ animation: 'fadeSlideIn 0.4s ease-out' }}
            >
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#ff7a1a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff7a1a]">Why This Match?</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{currentMatch.whyMatch}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Result Card ── */}
          <div className="lg:col-span-7" ref={cardRef}>
            <div
              key={`card-${animKey}`}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-amber-200/90 dark:border-slate-800 shadow-2xl"
              style={{ animation: 'fadeSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Hero Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  key={currentMatch.image}
                  src={currentMatch.image}
                  alt={currentMatch.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge */}
                {currentMatch.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                      {currentMatch.badge}
                    </span>
                  </div>
                )}

                {/* Duration pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 border border-white/20">
                    <Clock className="w-3 h-3" />
                    {currentMatch.duration}
                  </span>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-amber-300 font-semibold tracking-wide uppercase mb-1">
                    {currentMatch.tagline}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-serif font-black leading-tight drop-shadow">
                    {currentMatch.title}
                  </h3>
                  {/* Stars + Reviews */}
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex items-center gap-0.5">{renderStars(currentMatch.rating)}</div>
                    <span className="text-xs text-white/80 font-semibold">{currentMatch.rating}</span>
                    <span className="text-xs text-white/60">({currentMatch.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {currentMatch.description}
                </p>

                {/* Highlights pills */}
                <div className="grid grid-cols-2 gap-2">
                  {currentMatch.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTAs */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-100 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Starting From</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-[#8c1d2f] dark:text-amber-400">
                        {currentMatch.startingPrice}
                      </span>
                      {currentMatch.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">{currentMatch.originalPrice}</span>
                      )}
                      <span className="text-xs text-slate-400 font-normal">/ person</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      to={currentMatch.href}
                      className="px-5 py-2.5 rounded-full border-2 border-[#8c1d2f] text-[#8c1d2f] dark:border-amber-400 dark:text-amber-400 font-bold text-xs sm:text-sm hover:bg-[#8c1d2f] hover:text-white dark:hover:bg-amber-400 dark:hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppInquiry()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff4f3d] hover:from-[#e86a0d] hover:to-[#e84232] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-200/50 dark:shadow-orange-900/30 transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </a>
                  </div>
                </div>

                {/* Personalisation tag */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  <Sparkles className="w-3 h-3 text-[#ff7a1a]" />
                  <span>Personalised for <strong className="text-slate-700 dark:text-slate-200">{selectedWho}</strong> travelers craving <strong className="text-slate-700 dark:text-slate-200">{selectedMood}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default MoodTripMatcher;
