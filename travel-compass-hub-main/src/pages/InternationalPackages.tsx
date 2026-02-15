import { MapPin, Calendar, ArrowRight, ArrowLeft, Plane, Sparkles, Banknote, Clock, Globe, ShieldCheck, UserCheck, HelpCircle, Info, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getBestTimeToVisit } from '@/lib/travelMeta';
import SmartImage from '@/components/SmartImage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import RelatedServices from '@/components/RelatedServices';

const PHONE_NUMBER = '919406182174';

const internationalPackages = [
  {
    id: 'phuket',
    title: 'Phuket Beach Paradise',
    location: 'Phuket, Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹42,999',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop',
    tag: 'Beach Escape',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Patong Beach', 'Phi Phi Islands', 'Big Buddha', 'Old Phuket Town'],
    whatToEat: ['Pad Thai', 'Tom Yum', 'Fresh Seafood', 'Mango Sticky Rice'],
    attractions: ['Island Hopping', 'Snorkeling', 'Thai Massage', 'Night Markets'],
    itinerary: ['Day 1: Arrival in Phuket', 'Day 2: Phi Phi Island Tour', 'Day 3: Beach & Water Sports', 'Day 4: Old Town & Big Buddha', 'Day 5: Departure'],
  },
  {
    id: 'singapore',
    title: 'Singapore City Explorer',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹58,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop',
    tag: 'City Break',
    visa: 'e-Visa',
    currency: 'Singapore Dollar (SGD)',
    famousPlaces: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Orchard Road'],
    whatToEat: ['Chilli Crab', 'Hainanese Chicken Rice', 'Laksa', 'Kaya Toast'],
    attractions: ['Universal Studios', 'Singapore Zoo', 'Night Safari', 'Clarke Quay'],
    itinerary: ['Day 1: Arrival & Marina Bay', 'Day 2: Sentosa Island', 'Day 3: Universal Studios', 'Day 4: Gardens & Zoo', 'Day 5: Shopping & Departure'],
  },
  {
    id: 'nepal',
    title: 'Nepal Himalayan Trek',
    location: 'Nepal',
    duration: '7 Days / 6 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
    tag: 'Trekking',
    visa: 'On Arrival',
    currency: 'Nepalese Rupee (NPR)',
    famousPlaces: ['Kathmandu Durbar Square', 'Swayambhunath (Monkey Temple)', 'Pokhara Lake', 'Bhaktapur'],
    whatToEat: ['Dal Bhat', 'Momos', 'Newari Khaja Set', 'Sel Roti'],
    attractions: ['Annapurna Base Camp View', 'Pashupatinath Temple', 'Boudhanath Stupa', 'Paragliding in Pokhara'],
    itinerary: ['Day 1: Arrival in Kathmandu', 'Day 2: Kathmandu Valley Tour', 'Day 3: Drive to Pokhara', 'Day 4-5: Pokhara & Sarangkot', 'Day 6: Return to Kathmandu', 'Day 7: Departure'],
  },
  {
    id: 'dubai',
    title: 'Dubai Extravaganza',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    visa: 'e-Visa',
    currency: 'UAE Dirham (AED)',
    famousPlaces: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina'],
    whatToEat: ['Shawarma', 'Al Harees', 'Luqaimat', 'Machboos'],
    attractions: ['Desert Safari', 'Dhow Cruise', 'Ski Dubai', 'Gold Souk Shopping'],
    itinerary: ['Day 1: Arrival & City Tour', 'Day 2: Burj Khalifa & Dubai Mall', 'Day 3: Desert Safari', 'Day 4: Palm & Marina Tour', 'Day 5: Shopping & Departure'],
  },
  {
    id: 'thailand',
    title: 'Thailand Explorer',
    location: 'Thailand',
    duration: '4 Days / 3 Nights',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Beach & Culture',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Grand Palace Bangkok', 'Phi Phi Islands', 'Phuket Old Town', 'Wat Arun'],
    whatToEat: ['Pad Thai', 'Tom Yum Soup', 'Green Curry', 'Mango Sticky Rice'],
    attractions: ['Island Hopping', 'Floating Markets', 'Muay Thai Show', 'Night Markets'],
    itinerary: ['Day 1: Bangkok → Pattaya (Arrival + leisure)', 'Day 2: Coral Island speedboat tour', 'Day 3: Pattaya city tour + Alcazar show', 'Day 4: Pattaya → Bangkok (Departure)'],
  },
  {
    id: 'srilanka',
    title: 'Sri Lanka Heritage',
    location: 'Sri Lanka',
    duration: '6 Days / 5 Nights',
    price: '₹35,999',
    image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=2070&auto=format&fit=crop',
    tag: 'Cultural',
    visa: 'ETA Online',
    currency: 'Sri Lankan Rupee (LKR)',
    famousPlaces: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Galle Fort', 'Nuwara Eliya'],
    whatToEat: ['Rice & Curry', 'Kottu Roti', 'Hoppers', 'Ceylon Tea'],
    attractions: ['Whale Watching', 'Train to Ella', 'Tea Plantation Tours', 'Safari at Yala'],
    itinerary: ['Day 1: Colombo Arrival', 'Day 2: Sigiriya & Dambulla', 'Day 3: Kandy Tour', 'Day 4: Nuwara Eliya', 'Day 5: Galle Fort', 'Day 6: Departure'],
  },
  {
    id: 'maldives',
    title: 'Maldives Paradise',
    location: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: '₹85,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Romantic',
    visa: 'On Arrival',
    currency: 'Maldivian Rufiyaa (MVR)',
    famousPlaces: ['Male City', 'Maafushi Island', 'Veligandu Island', 'Banana Reef'],
    whatToEat: ['Garudhiya', 'Mas Huni', 'Fihunu Mas', 'Fresh Seafood'],
    attractions: ['Snorkeling with Mantas', 'Sunset Dolphin Cruise', 'Underwater Restaurant', 'Water Villa Stay'],
    itinerary: ['Day 1: Male Arrival & Resort Transfer', 'Day 2: Water Activities & Spa', 'Day 3: Island Hopping & Snorkeling', 'Day 4: Leisure & Departure'],
  },
  {
    id: 'bali',
    title: 'Bali Paradise',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹64,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Beach Escape',
    visa: 'On Arrival',
    currency: 'Indonesian Rupiah (IDR)',
    famousPlaces: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Uluwatu Temple', 'Seminyak Beach'],
    whatToEat: ['Nasi Goreng', 'Babi Guling', 'Satay', 'Bebek Betutu'],
    attractions: ['Monkey Forest', 'Mount Batur Sunrise', 'Water Temples', 'Beach Clubs'],
    itinerary: ['Day 1: Arrival in Bali', 'Day 2: Ubud Cultural Tour', 'Day 3: Tanah Lot & Rice Terraces', 'Day 4: Beach & Water Sports', 'Day 5: Uluwatu Temple & Kecak Dance', 'Day 6: Departure'],
  },
  {
    id: 'malaysia',
    title: 'Malaysia Truly Asia',
    location: 'Malaysia',
    duration: '5 Days / 4 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop',
    tag: 'City & Highlands',
    visa: 'Visa Free',
    currency: 'Malaysian Ringgit (MYR)',
    famousPlaces: ['Petronas Towers', 'Batu Caves', 'Genting Highlands', 'Langkawi', 'Sunway Lagoon'],
    whatToEat: ['Nasi Lemak', 'Satay', 'Laksa', 'Roti Canai'],
    attractions: ['Cable Car Ride', 'Theme Parks', 'Cave Exploration', 'Island Hopping'],
    itinerary: ['Day 1: Arrival in KL', 'Day 2: Kuala Lumpur City Tour', 'Day 3: Genting Highlands Day Trip', 'Day 4: Sunway Lagoon / Leisure', 'Day 5: Departure'],
  },
  {
    id: 'vietnam',
    title: 'Vietnam Timeless Charm',
    location: 'Vietnam',
    duration: '6 Days / 5 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1528127220198-3498b6eb06ba?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature & Culture',
    visa: 'e-Visa',
    currency: 'Vietnamese Dong (VND)',
    famousPlaces: ['Ha Long Bay', 'Hanoi Old Quarter', 'Golden Bridge (Da Nang)', 'Hoi An'],
    whatToEat: ['Pho', 'Banh Mi', 'Egg Coffee', 'Spring Rolls'],
    attractions: ['Overnight Cruise', 'Basket Boat Ride', 'Ancient Town Walk', 'Cave Tours'],
    itinerary: ['Day 1: Arrival in Hanoi', 'Day 2: Hanoi City Tour', 'Day 3: Ha Long Bay Cruise', 'Day 4: Flight to Da Nang', 'Day 5: Ba Na Hills & Golden Bridge', 'Day 6: Departure'],
  },
  {
    id: 'mauritius',
    title: 'Mauritius Honeymoon Bliss',
    location: 'Mauritius',
    duration: '7 Days / 6 Nights',
    price: '₹65,999',
    image: 'https://images.unsplash.com/photo-1555547432-8411a7686567?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    visa: 'Visa Free',
    currency: 'Mauritian Rupee (MUR)',
    famousPlaces: ['Ile Aux Cerfs', 'Seven Colored Earth', 'Port Louis', 'Casela Park'],
    whatToEat: ['Dholl Puri', 'Seafood', 'Mauritian Curry', 'Gateau Piment'],
    attractions: ['Catamaran Cruise', 'Undersea Walk', 'Wildlife Safari', 'Water Sports'],
    itinerary: ['Day 1: Arrival in Mauritius', 'Day 2: North Island Tour', 'Day 3: South Island Tour', 'Day 4: Ile Aux Cerfs Island', 'Day 5: Catamaran Cruise', 'Day 6: Leisure/Shopping', 'Day 7: Departure'],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof internationalPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hello Rudraksh Safar, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share the detailed itinerary and inclusions.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link
        to={pkg.id === 'dubai' ? '/dubai-tour-packages' : `/package/${pkg.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="block h-full"
        aria-label={`View package: ${pkg.title}`}
      >
        <div className="group glass-card overflow-hidden hover:shadow-elevated transition-all duration-500">
          <div className="relative h-64 image-zoom">
            <SmartImage src={pkg.image} alt={`${pkg.title} tour package - ${pkg.location}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-secondary px-3 py-1 rounded-full text-xs font-bold text-secondary-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {pkg.tag}
              </span>
              <span className="bg-primary/90 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground flex items-center gap-1">
                <Plane className="w-3 h-3" />
                {pkg.visa}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-serif font-bold text-white drop-shadow-lg mb-1">{pkg.title}</h3>
              <div className="flex items-center gap-1 text-white/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="drop-shadow-md">{pkg.location}</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4 p-3 bg-secondary/10 rounded-lg">
              <Banknote className="w-5 h-5 text-secondary dark:text-blue-300" />
              <p className="text-sm font-medium text-foreground">{pkg.currency}</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-xl font-serif font-bold text-secondary dark:text-blue-300">{pkg.price}</p>
              </div>
              <Button onClick={(e) => { e.preventDefault(); handleWhatsApp(); }} className="btn-gold px-5 py-2.5 text-sm">
                Book Now
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const InternationalPackages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "International Tour Packages from India (Bhilai/Raipur)",
    "description": "Compare best international holiday packages from India. Discovery guide for first-time travellers, budget trips, and luxury vacations with visa assistance.",
    "about": {
      "@type": "Thing",
      "name": "International Travel Management",
      "description": "Complete guidance for international trips including visa handling, flight booking, and itinerary planning for Indian citizens."
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Indian Travellers",
      "geographicArea": {
        "@type": "City",
        "name": "Bhilai"
      }
    },
    "numberOfItems": 9,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Dubai Extravaganza", "url": "https://rudrakshsafar.com/package/dubai" },
      { "@type": "ListItem", "position": 2, "name": "Bali Paradise", "url": "https://rudrakshsafar.com/package/bali" },
      { "@type": "ListItem", "position": 3, "name": "Maldives Paradise", "url": "https://rudrakshsafar.com/package/maldives" },
      { "@type": "ListItem", "position": 4, "name": "Thailand Explorer", "url": "https://rudrakshsafar.com/package/thailand" },
      { "@type": "ListItem", "position": 5, "name": "Nepal Himalayan Trek", "url": "https://rudrakshsafar.com/package/nepal" },
      { "@type": "ListItem", "position": 6, "name": "Malaysia Truly Asia", "url": "https://rudrakshsafar.com/package/malaysia" },
      { "@type": "ListItem", "position": 7, "name": "Vietnam Timeless Charm", "url": "https://rudrakshsafar.com/package/vietnam" },
      { "@type": "ListItem", "position": 8, "name": "Mauritius Honeymoon Bliss", "url": "https://rudrakshsafar.com/package/mauritius" }
    ]
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="international" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="International Tour Packages from India: Best Holiday Deals 2025"
          description="Discover the best international tour packages from India. Compare budget trips to Thailand & Nepal vs luxury vacations in Dubai & Maldives. Visa support included."
          keywords="international tour packages from india, international tour packages from bhilai, international trip for first timers, cheapest international trip from india, abroad tour packages"
          canonicalUrl="https://rudrakshsafar.com/international-packages"
          structuredData={structuredData}
        />
        <Navbar />

        {/* Hero Banner */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container relative z-10">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'International Packages', path: '/international-packages' }]} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-secondary to-transparent" />
                  <span className="text-secondary dark:text-blue-300 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    Explore the World
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  International <span className="text-secondary dark:text-blue-300">Tour Packages from India</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Your trusted guide for international travel. Discover affordable, safe, and visa-easy holiday destinations from Bhilai, Raipur, and across India.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-secondary/30 bg-gradient-to-br from-secondary/10 to-transparent max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary dark:text-blue-300" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Tailor-Made Trips</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    100% customizable itineraries crafted just for you
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="container">

            <AnimatedSection animation="fade-up" delay={100} className="mb-12">
              <div className="glass-card p-8 border-l-4 border-l-primary bg-primary/5">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0 hidden md:block">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">International Travel Guide 101</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This page is designed to help Indian travellers <strong>compare and choose</strong> the perfect international destination.
                      Whether you are looking for <span className="text-foreground font-medium">budget-friendly trips</span> (Nepal, Thailand),
                      <span className="text-foreground font-medium">luxury escapes</span> (Dubai, Maldives), or
                      <span className="text-foreground font-medium">cultural explorations</span> (Sri Lanka, Bali),
                      we provide end-to-end support including Visa, Forex, and Flights from Raipur/India.
                    </p>
                    <LastUpdated />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* DECISION SUPPORT MICRO-SECTIONS */}
        <section className="pb-20 bg-muted/30 pt-16 border-y border-border/50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Which International Trip is Right For You?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* First Time Travellers */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">First-Time Travellers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Best for easy visas and direct flights.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Thailand:</strong> Visa-free/VOA, budget-friendly.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Dubai:</strong> Modern, Hindi widely spoken.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Nepal:</strong> No Visa required for Indians.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Budget Conscious */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Banknote className="w-5 h-5 text-orange-600" />
                    <CardTitle className="text-lg">Best Budget Trips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Most value for money (Exchange rate advantage).</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Nepal:</strong> Under ₹25k. Mountains & Culture.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Thailand:</strong> Under ₹30k. Beaches & Nightlife.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Vietnam:</strong> High value, amazing food.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Luxury & Honeymoon */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <CardTitle className="text-lg">Luxury & Honeymoon</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Premium experiences and privacy.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Maldives:</strong> Water villas, private islands.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Bali:</strong> Private pool villas, romantic dining.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Singapore:</strong> Urban luxury, shopping, cruises.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* LOCAL SUPPORT PROMISE */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="glass-card p-8 md:p-12 border border-secondary/20 bg-secondary/5 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-10 h-10 text-secondary dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                    Local Support Promise (Bhilai & Raipur)
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    We are not just a website. We are your <strong>local travel partners in Bhilai</strong>. Visit our office for face-to-face consultation, document handover, and payment safety. We provide dedicated support for:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
                    <span className="flex items-center gap-2 justify-center md:justify-start"><UserCheck className="w-4 h-4 text-green-600" /> Personal Document Verification</span>
                    <span className="flex items-center gap-2 justify-center md:justify-start"><Plane className="w-4 h-4 text-green-600" /> Raipur Airport Pickup/Drop</span>
                    <span className="flex items-center gap-2 justify-center md:justify-start"><Globe className="w-4 h-4 text-green-600" /> Forex & Currency Exchange</span>
                    <span className="flex items-center gap-2 justify-center md:justify-start"><HelpCircle className="w-4 h-4 text-green-600" /> 24/7 International Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Info Banner */}
        <section className="py-12">
          <div className="container">
            <AnimatedSection animation="fade-up">
              <div className="glass-card p-8 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Plane className="w-7 h-7 text-secondary dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground">Hassle-Free Visa Assistance</h3>
                      <p className="text-muted-foreground">We handle all your visa requirements for a smooth journey</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const message = "Hello, I require visa assistance for my international travel. Please guide me through the document requirements and process.";
                      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Get Visa Help
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto">
                <Sparkles className="w-12 h-12 text-secondary dark:text-blue-300 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Dreaming of a different destination?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tell us your dream destination and we'll create a perfect itinerary for you
                </p>
                <Button
                  onClick={() => {
                    const message = "Hello, I am looking for a customized international travel package. Please assist me in planning my trip abroad.";
                    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="btn-gold"
                >
                  Request Custom Package
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PAA - Frequently Asked Travel Questions */}
        <FAQsSection
          title="Frequently Asked Travel Questions (India & International)"
          faqs={[
            {
              question: "What is the cheapest international trip from India?",
              answer: "The cheapest international trips from India are usually to nearby countries such as Nepal, Sri Lanka, Thailand, Malaysia, and Indonesia (Bali). Budget international trips can start from ₹15,000–₹25,000 per person when booked with economy flights, budget hotels, and off-season travel dates."
            },
            {
              question: "Which international trip is best?",
              answer: "The best international trip depends on travel preferences. Thailand and Bali are popular for first-time international travelers, Dubai is ideal for luxury and short stays, Singapore suits families, and Nepal is best for budget and nature travel."
            },
            {
              question: "What are the visa requirements for Indians?",
              answer: "Many popular destinations like Thailand, Sri Lanka, and Malaysia offer Visa-on-Arrival or E-Visa facilities for Indian citizens. Some, like Nepal and Maldives (for tourists), are often visa-free or have simplified entry processes."
            },
            {
              question: "Which country is best for a 4 day trip?",
              answer: "For a 4-day international trip from India, destinations like Dubai, Nepal, Sri Lanka, Thailand, and Singapore are ideal. These countries offer short travel time, good connectivity, and enough attractions to enjoy within a limited duration."
            }
          ]}
        />

        <RelatedServices mode="packages" />

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default InternationalPackages;
