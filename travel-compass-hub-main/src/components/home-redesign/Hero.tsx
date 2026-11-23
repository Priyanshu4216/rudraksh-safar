import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight,
  Star,
  Flame,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Compass,
  Plane
} from 'lucide-react';

interface Slide {
  id: string;
  tabLabel: string;
  tabIcon: string;
  tag: string;
  badgeHighlight: string;
  badgeColor: string;
  title: string;
  price: string;
  originalPrice: string;
  savings: string;
  duration: string;
  subtitle: string;
  text: string;
  href: string;
  cta: string;
  place: string;
  bgGradient: string;
  image: string;
  weather: string;
  rating: string;
  reviewsCount: string;
  departures: string;
  highlights: string[];
}

const SLIDES: Slide[] = [
  {
    id: 'thailand',
    tabLabel: 'Thailand',
    tabIcon: '🌴',
    tag: 'Beaches & Island Hopping',
    badgeHighlight: '🔥 Most Popular International',
    badgeColor: 'from-rose-500 to-amber-500',
    title: 'Thailand from ₹11,999',
    price: '₹11,999',
    originalPrice: '₹16,999',
    savings: 'Save ₹5,000',
    duration: '4N / 5D',
    subtitle: 'Bangkok, Coral Island & Pattaya',
    text: 'Speedboats to Coral Island, Alcazar cabaret show, 4-star seaside resorts, and fast Indian eVisa guidance.',
    href: '/international-tours/thailand',
    cta: 'Explore Thailand',
    place: 'Phuket & Pattaya',
    bgGradient: 'from-[#781832]/92 via-[#96264e]/86 to-[#281545]/85',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1400&auto=format&fit=crop',
    weather: '☀️ 31°C · Sunny Beach Waves',
    rating: '4.95',
    reviewsCount: '540+ Happy Couples',
    departures: 'Raipur · Kolkata · Delhi',
    highlights: ['Speedboat to Coral Island', '4★ Seaside Resorts', 'Free Visa Assistance', 'Indian Food Available']
  },
  {
    id: 'manali',
    tabLabel: 'Manali & Kasol',
    tabIcon: '🏔️',
    tag: 'Snow Valleys & Riverside Cafes',
    badgeHighlight: '🎸 #1 Youth & Solo Bestseller',
    badgeColor: 'from-cyan-500 to-blue-600',
    title: 'Manali + Kasol from ₹5,999',
    price: '₹5,999',
    originalPrice: '₹8,999',
    savings: 'Save ₹3,000',
    duration: '5N / 6D',
    subtitle: 'Parvati Valley & Solang Adventure',
    text: 'Riverside bonfire camps, café hopping in Old Manali, thrilling Solang snow activities, and overnight AC Volvo.',
    href: '/manali-kasol-strangers-trip',
    cta: 'Join The Trip',
    place: 'Manali & Parvati Valley',
    bgGradient: 'from-[#0e2c52]/92 via-[#1a4a7a]/86 to-[#081e3a]/85',
    image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=1400&auto=format&fit=crop',
    weather: '❄️ 14°C · Crisp Mountain Air',
    rating: '4.92',
    reviewsCount: '780+ Explorers',
    departures: 'Delhi / Raipur Connect',
    highlights: ['Riverside Bonfire Camps', 'Overnight Volvo AC', 'Solang Snow Points', 'Guided Kasol Treks']
  },
  {
    id: 'kumbh',
    tabLabel: 'Kumbh 2027',
    tabIcon: '🚩',
    tag: 'Haridwar Ardh Kumbh',
    badgeHighlight: '🚩 14 Jan 2027 Inaugural Snan',
    badgeColor: 'from-amber-500 to-rose-600',
    title: 'Kumbh Mela 2027',
    price: '₹12,500',
    originalPrice: '₹15,000',
    savings: 'Early Bird Slot',
    duration: '3N / 4D',
    subtitle: 'Sacred Ganga Ghats & Royal Snan',
    text: 'Royal Amrit Snan assistance, Ganga-facing luxury Swiss cottages, 24x7 local guides, and confirmed shuttle services.',
    href: '/kumbh-mela-2027',
    cta: 'Book Kumbh Package',
    place: 'Haridwar Kumbh',
    bgGradient: 'from-[#8c1d2f]/92 via-[#aa2929]/86 to-[#d9531e]/85',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1400&auto=format&fit=crop',
    weather: '🕉️ Sacred Ganga Aarti Darshan',
    rating: '4.98',
    reviewsCount: '1,200+ Devotees',
    departures: 'Raipur · Durg · Bilaspur',
    highlights: ['Swiss Tents with Attached Bath', 'Har Ki Pauri VIP Access', 'Sattvic Mahaprasad Meals', 'Direct Train Support']
  },
  {
    id: 'dubai',
    tabLabel: 'Dubai',
    tabIcon: '🏙️',
    tag: 'Skyline & Desert Safari',
    badgeHighlight: '✨ Best Luxury Seller',
    badgeColor: 'from-amber-500 to-purple-600',
    title: 'Dubai from ₹33,999',
    price: '₹33,999',
    originalPrice: '₹39,999',
    savings: 'Save ₹6,000',
    duration: '4N / 5D',
    subtitle: 'Burj Khalifa, Desert Dunes & Marina',
    text: '5 days in Dubai with Burj Khalifa 124th floor, evening Desert Dune Bashing with BBQ, Marina Dhow Cruise, and express UAE tourist visa.',
    href: '/international-tours/dubai',
    cta: 'Explore Dubai',
    place: 'Dubai, UAE',
    bgGradient: 'from-[#1c2e4a]/92 via-[#312b4f]/88 to-[#5e2b4d]/85',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop',
    weather: '☀️ 28°C · Pleasant Evening Safaris',
    rating: '4.97',
    reviewsCount: '620+ Travellers',
    departures: 'Raipur · Nagpur · Delhi',
    highlights: ['Burj Khalifa 124th Floor', 'Desert Safari with BBQ', 'Marina Dhow Cruise', 'Express UAE Visa Included']
  },
  {
    id: 'ladakh',
    tabLabel: 'Ladakh',
    tabIcon: '❄️',
    tag: 'High Passes & Pangong Tso',
    badgeHighlight: '❄️ 100% Oxygen Fleet',
    badgeColor: 'from-blue-600 to-cyan-500',
    title: 'Ladakh High Pass Expedition',
    price: '₹28,500',
    originalPrice: '₹34,000',
    savings: 'Save ₹5,500',
    duration: '12N / 13D',
    subtitle: 'Leh, Nubra Dunes & Hanle Star Skies',
    text: 'Conquer Khardung La & Chang La with acclimatized pacing, oxygen-fitted luxury tempo travellers, and lakeside camps.',
    href: '/domestic-tours/ladakh',
    cta: 'Explore Ladakh',
    place: 'Pangong Lake',
    bgGradient: 'from-[#142f4d]/92 via-[#1d4366]/86 to-[#185e54]/85',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1400&auto=format&fit=crop',
    weather: '🌌 Crystal Star-Filled Skies',
    rating: '4.94',
    reviewsCount: '380+ Adventurers',
    departures: 'Leh Connect · Raipur Flights',
    highlights: ['Oxygen-Fitted Fleet', 'Pangong Glamping Tents', 'Nubra Double Hump Camels', 'Inner Line Permits Included']
  }
];

const SEARCH_INDEX = [
  { title: 'Kedarnath Temple Guide', href: '/kedarnath-temple', kind: 'Pilgrimage' },
  { title: 'Char Dham Yatra Package', href: '/chardham-yatra-package', kind: 'Package' },
  { title: 'Char Dham from Raipur', href: '/chardham-yatra-from-raipur', kind: 'Package' },
  { title: 'Char Dham Registration Process', href: '/chardham-yatra-registration-process', kind: 'Guide' },
  { title: 'Kumbh Mela 2027 Haridwar', href: '/kumbh-mela-2027', kind: 'Kumbh' },
  { title: 'Kumbh Snan Dates 2027', href: '/kumbh-mela-2027/snan-dates', kind: 'Kumbh' },
  { title: 'Kumbh Stays and Tents', href: '/kumbh-mela-2027/stay', kind: 'Kumbh' },
  { title: 'Ladakh Packages from Bhilai', href: '/domestic-tours/ladakh', kind: 'Package' },
  { title: 'Ladakh Opening Date 2026', href: '/ladakh-opening-date-2026', kind: 'Guide' },
  { title: 'Thailand Tour Packages', href: '/international-tours/thailand', kind: 'Package' },
  { title: 'Thailand Visa for Indians', href: '/visa/thailand', kind: 'Visa' },
  { title: 'Dubai Tour Packages', href: '/international-tours/dubai', kind: 'Package' },
  { title: 'Dubai Visa for Indians', href: '/dubai-visa-for-indians', kind: 'Visa' },
  { title: 'Bali Honeymoon Packages', href: '/international-tours/bali', kind: 'Package' },
  { title: 'Vietnam Tour Packages', href: '/international-tours/vietnam', kind: 'Package' },
  { title: 'Goa Tour Packages', href: '/domestic-tours/goa', kind: 'Package' },
  { title: 'Kashmir Summer Special', href: '/domestic-tours/kashmir', kind: 'Package' },
  { title: 'Manali Kasol Strangers Trip', href: '/manali-kasol-strangers-trip', kind: 'Package' },
  { title: 'Flight Booking Bhilai', href: '/flight-booking-bhilai', kind: 'Service' },
  { title: 'Train Booking Bhilai (IRCTC)', href: '/train-booking-bhilai', kind: 'Service' }
];

const ROTATING_WORDS = ['Ladakh', 'Thailand', 'Kedarnath', 'Dubai', 'Kashmir'];

const CITIES = ['Raipur', 'Bhilai', 'Durg', 'Bilaspur', 'Nagpur', 'Delhi'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SLIDE_DURATION = 6500; // 6.5s per slide

const Hero: React.FC = () => {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Rotating title word
  const [wordIdx, setWordIdx] = useState(0);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Quick configurator state
  const [selectedTab, setSelectedTab] = useState<'domestic' | 'international' | 'pilgrimage'>('domestic');
  const [selectedCity, setSelectedCity] = useState('Raipur');
  const [selectedMonth, setSelectedMonth] = useState('Apr');
  const [travelerCount, setTravelerCount] = useState('2 adults');

  const searchRef = useRef<HTMLDivElement>(null);

  // Smooth Auto-timer with live progress bar
  useEffect(() => {
    if (isPaused) return;
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  // Reset progress when changing slides manually
  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  // Rotate hero destination title
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(wordInterval);
  }, []);

  // Filter search results
  const filteredResults = searchQuery.trim()
    ? SEARCH_INDEX.filter((item) =>
        searchQuery
          .toLowerCase()
          .split(/\s+/)
          .every((word) => item.title.toLowerCase().includes(word) || item.kind.toLowerCase().includes(word))
      ).slice(0, 6)
    : [];

  const tabHints = {
    domestic: 'Manali, Goa, Ladakh, Kashmir',
    international: 'Thailand, Dubai, Bali, Singapore',
    pilgrimage: 'Char Dham, Kumbh 2027, Kedarnath, Puri'
  };

  const getWhatsAppUrl = () => {
    const message = `Hi Rudraksh Safar, I want a ${selectedTab.toUpperCase()} trip quote from ${selectedCity} around ${selectedMonth} for ${travelerCount}. Please share itinerary and price options.`;
    return `https://wa.me/919203650311?text=${encodeURIComponent(message)}`;
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Featured Trips Billboard Carousel */}
      <section
        className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4"
        aria-label="Featured Trips Billboard"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative min-h-[510px] sm:h-[500px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-amber-500/20 group">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Background Image with Cinematic Ken Burns Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ transitionDuration: "7000ms" }}
                    className={`w-full h-full object-cover object-center transition-transform ease-out ${
                      isActive ? 'scale-110 translate-x-1' : 'scale-100 translate-x-0'
                    }`}
                  />
                </div>

                {/* Rich Cinematic Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-black/20" />

                {/* Animated Ambient Aura Orbs (Movement in background) */}
                <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse pointer-events-none" />
                <div className="absolute right-40 -bottom-20 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

                {/* Content Overlay Grid */}
                <div className="relative h-full flex flex-col justify-between p-5 sm:p-8 md:p-12 text-white pb-24 sm:pb-20">
                  
                  {/* Top Bar inside banner: Live Status Pill & Weather */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 z-20">
                    <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/25 shadow-sm text-amber-200">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                      </span>
                      <span>{slide.badgeHighlight}</span>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/95 border border-white/20">
                      <span>{slide.weather}</span>
                    </div>
                  </div>

                  {/* Main Hero Story + Right Interactive Widget */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto pt-2">
                    {/* Left: Titles & Highlights */}
                    <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                      {/* Subtitle / Location */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-200 uppercase">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{slide.subtitle}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/90 font-mono">{slide.duration}</span>
                      </div>

                      {/* Main Title */}
                      <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[1.08] text-white drop-shadow-lg">
                        {slide.title}
                      </h2>

                      {/* Description */}
                      <p className="text-xs sm:text-base md:text-lg text-white/90 font-sans leading-relaxed max-w-xl drop-shadow line-clamp-3 sm:line-clamp-none">
                        {slide.text}
                      </p>

                      {/* Interactive Feature Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {slide.highlights.map((item, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-medium text-white transition-all duration-200 cursor-default hover:scale-105"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          to={slide.href}
                          className="px-5 sm:px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 hover:brightness-110 font-black text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-amber-300/40"
                        >
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href={`https://wa.me/919203650311?text=${encodeURIComponent(`Hi Rudraksh Safar, I am looking for quotation for ${slide.title} (${slide.subtitle}). Please send detailed day-wise itinerary.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 sm:px-6 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp Quote</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Interactive Live Floating Deal Card (Desktop & Tablet) */}
                    <div className="hidden lg:block lg:col-span-5">
                      <div className="relative rounded-3xl p-6 bg-slate-900/75 backdrop-blur-2xl border border-white/25 shadow-2xl space-y-4 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1">
                        
                        {/* Live Rating & Verified Badge */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span>{slide.rating}</span>
                            <span className="text-white/60 font-normal">({slide.reviewsCount})</span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                            ⚡ Instant Confirmation
                          </span>
                        </div>

                        {/* Price Display */}
                        <div>
                          <div className="text-[11px] uppercase font-bold text-slate-300 tracking-wider">
                            Special Package Price
                          </div>
                          <div className="flex items-baseline gap-2.5 mt-0.5">
                            <span className="text-3xl font-serif font-black text-amber-300 drop-shadow">
                              {slide.price}
                            </span>
                            <span className="text-sm text-slate-400 line-through">
                              {slide.originalPrice}
                            </span>
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-orange-500 text-white shadow-xs">
                              {slide.savings}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            Per person on twin sharing · All taxes included
                          </div>
                        </div>

                        {/* Departure Cities Pill */}
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                          <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Departures: <strong>{slide.departures}</strong></span>
                        </div>

                        {/* Micro Value Guarantee */}
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Zero Hidden Charges</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>24x7 Trip Support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer to keep distance from bottom rail */}
                  <div className="h-6" />
                </div>
              </div>
            );
          })}

          {/* Interactive Bottom Destination Switcher Rail */}
          <div className="absolute left-3 sm:left-6 right-3 sm:right-6 bottom-3 z-30 flex items-center justify-between gap-3 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-2xl border border-white/15">
            {/* Interactive Destination Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none flex-1 py-0.5">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`group relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-white text-slate-950 shadow-md scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{slide.tabIcon}</span>
                    <span className="whitespace-nowrap">{slide.tabLabel}</span>
                    <span className={`text-[10px] font-mono font-normal hidden sm:inline ${
                      isActive ? 'text-amber-800 font-bold' : 'text-amber-300/80'
                    }`}>
                      {slide.price}
                    </span>

                    {/* Progress Timer Line on Active Tab */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-600 transition-all ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Previous / Next Arrows */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => goToSlide((currentSlide + SLIDES.length - 1) % SLIDES.length)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goToSlide((currentSlide + 1) % SLIDES.length)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Core with Live Search & WhatsApp Trip Configurator */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-[#fff3e2] via-[#fffbf5] to-[#fff8f0] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Soft Ambient Blobs */}
        <div className="absolute -left-20 top-10 w-96 h-96 rounded-full bg-amber-200/50 dark:bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-rose-200/50 dark:bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-teal-200/40 dark:bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Headline, Value Proposition & Live Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Domestic, International & Pilgrimage · Departures Across India</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                Your next trip to{' '}
                <span className="inline-block min-w-[200px] text-transparent bg-clip-text bg-gradient-to-r from-[#8c1d2f] via-[#c2392b] to-[#e8741e] transition-all duration-300">
                  {ROTATING_WORDS[wordIdx]}
                </span>
                <br />
                <span className="italic font-light text-slate-700 dark:text-slate-300">
                  starts right here.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
                Bhilai & Raipur’s top-rated travel planners. Handcrafted itineraries, transparent hotel tiers, verified transport, and genuine local guidance from start to finish.
              </p>

              {/* Instant Search Bar with Live Filter Dropdown */}
              <div ref={searchRef} className="relative max-w-xl">
                <div className="relative flex items-center bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-500/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:border-[#8c1d2f] focus-within:ring-4 focus-within:ring-amber-500/20">
                  <Search className="w-5 h-5 text-amber-600 dark:text-amber-400 ml-4 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    placeholder="Search Kedarnath, Ladakh, Thailand, Kumbh, Dubai..."
                    className="w-full py-4 px-3 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                    aria-label="Search destinations and packages"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-slate-400 hover:text-slate-600 mr-4 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Live Search Suggestion Dropdown */}
                {isSearchFocused && filteredResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Matching Packages & Guides
                    </div>
                    {filteredResults.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => {
                          setIsSearchFocused(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-800 text-sm text-slate-800 dark:text-slate-100 transition-colors"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-slate-800 text-[#8c1d2f] dark:text-amber-400">
                          {item.kind}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Inspiration Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-slate-500">Popular:</span>
                {[
                  { name: 'Kedarnath 2026', href: '/kedarnath-temple' },
                  { name: 'Kumbh 2027 Tents', href: '/kumbh-mela-2027/stay' },
                  { name: 'Ladakh High Passes', href: '/domestic-tours/ladakh' },
                  { name: 'Thailand 4N/5D', href: '/international-tours/thailand' },
                  { name: 'Manali Kasol ₹5,999', href: '/manali-kasol-strangers-trip' }
                ].map((chip, idx) => (
                  <Link
                    key={idx}
                    to={chip.href}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {chip.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: WhatsApp Trip Configurator Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-[#8c1d2f] dark:text-amber-400 text-xs font-bold uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Quote</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mt-2">
                    Build your trip in 15 seconds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Select your preferences and get a customized itinerary directly on WhatsApp.
                  </p>
                </div>

                {/* Step 1: Category Tab */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    1. Trip Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['domestic', 'international', 'pilgrimage'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                          selectedTab === tab
                            ? 'bg-[#8c1d2f] text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    e.g. {tabHints[selectedTab]}
                  </span>
                </div>

                {/* Step 2: From City & Month */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                      2. Departing From
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-amber-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                      3. Travel Month
                    </label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-amber-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {MONTHS.map((m) => (
                        <option key={m} value={m}>
                          {m} 2026/27
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Step 3: Travelers */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    4. Who is travelling?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Couple (2)', 'Family (4)', 'Friends (5+)', 'Solo'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTravelerCount(t)}
                        className={`py-2 px-1 rounded-xl text-[11px] font-bold transition-all text-center cursor-pointer ${
                          travelerCount === t
                            ? 'bg-[#ff7a1a] text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Final Submit: WhatsApp Link Button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Get Free Itinerary & Quote on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span>⚡ Responds in ~10 mins</span>
                  <span>🔒 100% Free Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards: Why Travellers Trust Us */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-14">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 text-[#8c1d2f] dark:text-amber-400 font-bold">
                01
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                  Direct Local Office
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Visit us in Bhilai (Supela) or call our Raipur desk. Face-to-face consultation anytime.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-950 text-[#c2392b] dark:text-rose-400 font-bold">
                02
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                  On-Ground Escort Care
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Verified mountain drivers, dedicated Haridwar/Kedarnath camp coordinators & 24x7 helpline.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold">
                03
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                  Flexible Easy Payments
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Small booking token. Balance payments in easy stages with transparent GST invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
