import { MapPin, Calendar, ArrowRight, ArrowLeft, Mountain, Zap, Flame, Waves, Bike, Clock, ShieldAlert, HeartPulse, HardHat, Info, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQSection from '@/components/seo/FAQSection';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getBestTimeToVisit } from '@/lib/travelMeta';

const faqs = [
  {
    question: "How physically fit do I need to be for the Ladakh Bike Trip?",
    answer: "You need moderate to high physical fitness for the Ladakh bike expedition. Due to high altitudes (up to 18,000 feet), good cardiovascular endurance is essential. We recommend light cardio exercises, jogging, and breathing practices at least 30 days prior to your trip."
  },
  {
    question: "Is Rishikesh river rafting safe for beginners and non-swimmers?",
    answer: "Yes, river rafting in Rishikesh is completely safe for beginners and non-swimmers. Certified instructors provide professional life jackets, safety helmets, and a detailed briefing before the activity. The River Ganga has varying rapid grades, allowing beginners to start with Grade I and II rapids (like the 16km Shivpuri route)."
  },
  {
    question: "What is the best adventure sport in the Andaman Islands?",
    answer: "Scuba diving is universally considered the best adventure sport in the Andaman Islands. Havelock Island (Swaraj Dweep), particularly Elephant Beach and Nemo Reef, offers pristine visibility, vibrant coral reefs, and certified PADI dive centers for the ultimate underwater experience."
  },
  {
    question: "Do you provide medical kits and oxygen on high-altitude treks?",
    answer: "Absolutely. Safety is our primary concern. For high-altitude expeditions like Ladakh, Spiti Valley, and Nepal base camps, our expedition vehicles and trek leaders are equipped with portable oxygen cylinders, oximeters, and comprehensive first-aid kits to handle Acute Mountain Sickness (AMS)."
  },
  {
    question: "What should I pack for a winter Himalayan trek?",
    answer: "For winter Himalayan treks, layering is critical. Pack thermal innerwear, a heavy down jacket (rated for -10°C), waterproof trekking pants, sturdy trekking boots with ankle support, UV-protection sunglasses, and high-quality synthetic moisture-wicking socks."
  },
  {
    question: "Which adventure sports are safe for families and children?",
    answer: "Activities like mild river rafting (Grade I & II), snorkeling, guided jungle safaris, and low-altitude camping are perfect for families. Destinations like Andaman and Rishikesh offer family-friendly outdoor activities governed by strict safety rules."
  },
  {
    question: "Do I need special insurance for extreme sports in India?",
    answer: "Standard travel insurance rarely covers extreme sports. We highly recommend purchasing specialized adventure sports coverage that explicitly includes high-altitude trekking, scuba diving, and motorcycling before booking our extreme expeditions."
  }
];

const PHONE_NUMBER = '919203650311';

interface AdventurePackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  tag: string;
  thrill: string;
  activity: string;
  link?: string;
}

export const adventurePackages: AdventurePackage[] = [
  {
    id: 'ladakh-ultimate-expedition',
    title: 'Ladakh Ultimate Expedition',
    location: 'Delhi • Manali • Leh • Srinagar',
    duration: '13 Days / 12 Nights',
    price: 'Price Drop Coming Soon', // Custom price text
    image: 'https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?auto=format&fit=webp&w=2067&q=80',
    tag: 'Signature Journey',
    thrill: 'Extreme',
    activity: 'Full Circuit Expedition',
    link: '/ladakh-ultimate-expedition' // Custom link
  },
  {
    id: 'ladakh-bike',
    title: 'Ladakh & Spiti Bike Tour',
    location: 'Leh-Ladakh & Spiti Valley',
    duration: '12 Days / 11 Nights',
    price: '₹34,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?auto=format&fit=webp&w=2070&q=80',
    tag: 'Epic Ride',
    thrill: 'Extreme',
    activity: 'Bike Expedition',
  },
  {
    id: 'rishikesh-rafting',
    title: 'Rishikesh Rafting Adventure',
    location: 'Rishikesh, Uttarakhand',
    duration: '3 Days / 2 Nights',
    price: '₹6,999',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=webp&w=2070&q=80',
    tag: 'River Rush',
    thrill: 'High',
    activity: 'White Water Rafting',
  },
  {
    id: 'andaman-scuba',
    title: 'Andaman Scuba Diving',
    location: 'Andaman Islands',
    duration: '5 Days / 4 Nights',
    price: '₹38,999',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=webp&w=2070&q=80',
    tag: 'Underwater',
    thrill: 'Extreme',
    activity: 'Scuba Diving & Snorkeling',
  },
  {
    id: 'nepal-trekking',
    title: 'Nepal Everest Base Camp',
    location: 'Nepal',
    duration: '14 Days / 13 Nights',
    price: '₹49,999',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=webp&w=2070&q=80',
    tag: 'Legendary Trek',
    thrill: 'Extreme',
    activity: 'High Altitude Trekking',
  },
  {
    id: 'thailand-island-hopping',
    title: 'Thailand Island Hopping',
    location: 'Phuket & Phi Phi Islands',
    duration: '6 Days / 5 Nights',
    price: '₹44,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=webp&w=2039&q=80',
    tag: 'Island Vibes',
    thrill: 'Medium',
    activity: 'Kayaking, Snorkeling, Cliff Jumping',
  },
  {
    id: 'dubai-desert-safari',
    title: 'Dubai Desert Safari',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹59,999',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=webp&w=2074&q=80',
    tag: 'Desert Thrill',
    thrill: 'High',
    activity: 'Dune Bashing, Sandboarding',
  },
];

const getThrillColor = (thrill: string) => {
  switch (thrill) {
    case 'Extreme': return 'from-red-500 to-orange-500';
    case 'High': return 'from-orange-500 to-amber-500';
    default: return 'from-amber-500 to-yellow-500';
  }
};

const PackageCard = ({ pkg, index }: { pkg: AdventurePackage; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hello, I am interested in the ${pkg.title} package (${pkg.duration}) priced at ${pkg.price}. Please share the detailed itinerary and safety protocols.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const linkTo = pkg.link || `/package/${pkg.id}`;

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={linkTo} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200/50 dark:border-orange-800/30 hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.3)] transition-all duration-500 hover:-translate-y-1">
          {/* Thrill level badge */}
          <div className={`absolute top-4 right-4 z-10 flex items-center gap-1 bg-gradient-to-r ${getThrillColor(pkg.thrill)} text-white px-2 py-1 rounded-full text-xs font-bold`}>
            <Flame className="w-3 h-3" />
            {pkg.thrill}
          </div>

          <div className="relative h-56 overflow-hidden">
            <img src={pkg.image} alt={`${pkg.title} adventure package - ${pkg.location}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
              <Zap className="w-3 h-3" />
              {pkg.tag}
            </span>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-serif font-bold text-white drop-shadow-lg mb-1">{pkg.title}</h3>
              <div className="flex items-center gap-1 text-white/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="drop-shadow-md">{pkg.location}</span>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-bold flex items-center gap-1 uppercase tracking-wide">
                <Mountain className="w-3 h-3" />
                {pkg.activity}
              </span>
            </div>

            <div className="mb-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-orange-200/50 dark:border-orange-800/30">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-xl font-serif font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{pkg.price}</p>
              </div>
              <Button
                onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2.5 text-sm rounded-full shadow-lg hover:shadow-orange-500/25 transition-all font-bold"
              >
                Request Details
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const AdventurePackages = () => {
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
    "name": "Adventure Tour Packages & Expeditions",
    "description": "Expert-led adventure tours: Ladakh biking, Rishikesh rafting, scuba diving. Safety-first planning with certified guides.",
    "about": {
      "@type": "Thing",
      "name": "Adventure Travel",
      "description": "High-altitude trekking, water sports, and expeditions requiring physical fitness and professional guidance."
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Thrill Seekers & Outdoor Enthusiasts",
      "geographicArea": {
        "@type": "Country",
        "name": "India"
      }
    },
    "numberOfItems": adventurePackages.length,
    "itemListElement": adventurePackages.map((pkg, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pkg.title,
      "url": `https://rudrakshsafar.com/package/${pkg.id}`
    }))
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="adventure" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Adventure Tour Packages | Thrill Seekers & Expeditions"
          description="Book expert-led adventure tour packages: Ladakh bike trips, Rishikesh rafting, scuba diving. Safe, certified extreme sports packages."
          keywords="adventure tour packages, ladakh bike trip cost, rishikesh rafting packages, scuba diving india, trekking in nepal"
          canonicalUrl="https://rudrakshsafar.com/adventure-packages"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }}
        />
        <Navbar />

        {/* Hero Section - Bold & Energetic */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-background to-amber-100/30 dark:from-orange-950/20 dark:to-amber-950/10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange-600 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-orange-500 to-transparent" />
                  <span className="text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    For Thrill Seekers
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Adventure <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Expeditions</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Expert-led adventure tours for those who seek the extraordinary. From high-altitude passes to ocean depths,
                  we ensure <strong>safety, professional guidance, and unforgettable thrills</strong>.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-orange-300/30 bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-950/30 dark:to-amber-950/30 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Safety First</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Certified guides, medical kits & premium gear on every trip.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FEATURED SNIPPET & USER INTENT SECTION */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-2xl border border-orange-200 dark:border-orange-900/50">
                <h2 className="text-xl font-bold text-foreground mb-3">What are adventure tour packages?</h2>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Adventure tour packages are specialized travel itineraries focused on physical outdoor activities such as high-altitude trekking, white-water rafting, scuba diving, and bike expeditions. They typically include technical gear, certified instructors, safety protocols, and medical support.
                </p>
              </div>
              <div className="bg-muted/20 p-6 rounded-2xl border border-border flex flex-col justify-center">
                <h2 className="text-xl font-bold text-foreground mb-3">Best Adventure Trips for Beginners</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are new to extreme sports, start with moderate trips like Grade II rafting in <Link to="/domestic-tours/rishikesh" className="text-orange-600 hover:underline inline-block">Rishikesh</Link> or introductory scuba diving in <Link to="/domestic-tours/andaman" className="text-orange-600 hover:underline inline-block">Andaman</Link>. These provide the thrill of adventure in a highly controlled, beginner-friendly environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY & SUITABILITY SECTION */}
        <section className="py-12 bg-background border-b border-border/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Safety Promise */}
              <div className="bg-orange-50/50 dark:bg-orange-950/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-foreground">Our Safety & Expertise Promise</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Adventure travel carries inherent risks. We mitigate them with professional planning and strict protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HardHat className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Certified Guides:</strong> All trekking and rafting leaders are certified in First Aid and Mountaineering.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HeartPulse className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Medical Preparedness:</strong> Oxygen cylinders (for high altitude) and extensive medical kits are standard.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Premium Equipment:</strong> We use only branded, safety-tested gear for biking, diving, and camping.</span>
                  </li>
                </ul>
              </div>

              {/* Suitability Filter */}
              <div className="bg-background rounded-2xl p-6 border border-border order-first md:order-last">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-foreground">Is This Trip For You?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  These expeditions are designed for active travelers tailored to different skill levels.
                </p>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-red-700 dark:text-red-400 text-sm mb-1">⚠️ High Intensity (Trekking/Biking)</h4>
                    <p className="text-xs text-muted-foreground">Requires good cardiovascular fitness. Not recommended for those with heart conditions or asthma without medical clearance.</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-100 dark:border-green-900/30">
                    <h4 className="font-bold text-green-700 dark:text-green-400 text-sm mb-1">✅ Moderate (Camping/Rafting)</h4>
                    <p className="text-xs text-muted-foreground">Suitable for beginners and families. Basic swimming skills may be required for water sports.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Activity Tags */}
        <section className="py-10">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Bike, text: 'Bike Tours' },
                { icon: Waves, text: 'Water Sports' },
                { icon: Mountain, text: 'Trekking' },
                { icon: Flame, text: 'Extreme Sports' },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-bold border border-orange-200/50 dark:border-orange-700/30">
                  <badge.icon className="w-4 h-4" />
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adventurePackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* --- DEEP SEO CONTENT BLOCKS --- */}

        {/* Table of Contents */}
        <section className="py-12 bg-muted/10 border-t border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-orange-600" />
                Adventure Planning Guide
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground font-medium">
                <li><a href="#fitness" className="hover:text-orange-600 transition-colors">1. Fitness Preparation</a></li>
                <li><a href="#gear" className="hover:text-orange-600 transition-colors">2. Essential Gear</a></li>
                <li><a href="#comparison" className="hover:text-orange-600 transition-colors">3. Destination Comparison</a></li>
                <li><a href="#destinations" className="hover:text-orange-600 transition-colors">4. Top Hubs for Thrill Seekers</a></li>
                <li><a href="#faqs" className="hover:text-orange-600 transition-colors">5. Frequently Asked Questions (FAQs)</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">

            {/* Snippet Optimized Block */}
            <div id="fitness" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">How physically fit do I need to be for adventure expeditions?</h2>
              <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground font-medium">
                  For extreme adventure expeditions like the Ladakh bike trip or Himalayan trekking, you need **moderate to high cardiovascular fitness**. Start a training regimen of running, cycling, or stair-climbing at least 4 weeks before your trip to build endurance and prepare your lungs for high-altitude thin air.
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Different activities demand different physical capabilities. While water sports like scuba diving in the Andaman Islands or river rafting in Rishikesh cater largely to beginners and require minimal athletic preparation, high-altitude desert safaris and mountain motorcycling test your physical endurance and mental fortitude. It is vital to consult your physician before booking high-altitude trips if you suffer from heart conditions, asthma, or severe hypertension.
              </p>
            </div>

            {/* Structured Content Block - Gear */}
            <div id="gear" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Essential Gear for Adventure Sports Expeditions</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Never compromise on equipment. While we provide specialized safety gear (like harnesses, helmets, and life jackets), personal gear is essential for your comfort against the elements.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                    <Mountain className="w-5 h-5" /> Mountain & Trekking Gear
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sturdy, ankle-support trekking boots (broken-in)</li>
                    <li>• Windproof and waterproof outer shell jacket</li>
                    <li>• Thermal innerwear base layers</li>
                    <li>• High UV protection sunglasses (Category 3/4)</li>
                    <li>• Daypack with hydration bladder</li>
                  </ul>
                </div>

                <div className="border rounded-xl p-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <Waves className="w-5 h-5" /> Water & Marine Gear
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quick-drying rash guards or swimwear</li>
                    <li>• Waterproof dry bags for electronics</li>
                    <li>• Aqua shoes or sport sandals with grip</li>
                    <li>• Reef-safe biodegradable sunscreen</li>
                    <li>• Waterproof camera or GoPro</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Readability & Entity rich section */}
            <div id="water-sports" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Top Destiny for Extreme Water Sports in India</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                India offers a massive coastline and mighty rivers that host some of the most thrilling aquatic adventures globally.
              </p>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li><strong>Rishikesh, Uttarakhand:</strong> The undisputed capital of white water rafting. The turbulent rapids of the River Ganga, ranging from Grade I to Grade IV, provide heart-pounding stretches specifically naming sections like "The Wall" and "Golf Course".</li>
                <li><strong>Andaman Islands:</strong> The ultimate hub for scuba diving and sea walking. <Link to="/domestic/andaman/AndamanMaster" className="text-orange-600 hover:underline">Andaman tour packages</Link> frequently feature Havelock Island's coral reefs which boast massive biodiversity including manta rays and sea turtles.</li>
                <li><strong>Goa:</strong> Perfect for high-speed thrills. Parasailing, jet-skiing, and windsurfing are predominant across beaches like Baga and Calangute.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-muted/20 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <FAQSection title="Adventure Travel FAQs" faqs={faqs} />
          </div>
        </section>

        {/* --- END DEEP SEO CONTENT BLOCKS --- */}

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50 dark:from-orange-950/20 dark:to-amber-950/20" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto border border-orange-200/50 dark:border-orange-800/30">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Ready for the Challenge?</h2>
                <p className="text-muted-foreground mb-6">Speak with our adventure experts to plan a safe and thrilling expedition.</p>
                <Button
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello! I want to plan an adventure trip. Please assist with options.")}`, '_blank'); }}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all font-bold text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Speak to an Expert
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* --- EXTRA DEEP SEO CONTENT BLOCKS --- */}
        <section id="deep-seo" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Book Adventure Tour Packages With Rudraksh Safar?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                When it comes to adrenaline-pumping extreme sports, security and expert guidance are non-negotiable. At Rudraksh Safar, we partner exclusively with certified, highly vetted instructors to offer the finest adventure tour packages across India and Asia. Whether you're planning a bike expedition through the rugged terrain of Leh-Ladakh, a scuba diving retreat in the clear waters of the Andaman Islands, or tackling the Grade IV rapids of the Ganges in Rishikesh, your safety remains our highest priority.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Every adventure itinerary is extensively mapped out. For high-altitude treks in the Himalayas (like Spiti Valley or Everest Base Camp), our packages include acclimatization days, oxygen support, and seasoned trek leaders. We provide end-to-end support for our adventurers traveling from Raipur, Bhilai, or Durg, ensuring seamless flight connections to adventure hubs like Dehradun (for Uttarakhand treks) or Leh (for bike tours).
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Understanding Adventure Difficulty Grades</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Grade 1: Beginner / Leisure Adventure</h3>
                  <p className="text-muted-foreground">Activities like kayaking, short day hikes, parasailing, and snorkeling in destinations like Goa or Phuket. Minimal physical fitness required. Perfect for family packages and casual thrill-seekers.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Grade 2: Moderate Expeditions</h3>
                  <p className="text-muted-foreground">White water rafting in Rishikesh, scuba diving in Andaman, desert safaris in Dubai, and short Himalayan winter treks. Basic cardiovascular fitness is recommended. No prior technical experience necessary.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Grade 3: Extreme / Technical</h3>
                  <p className="text-muted-foreground">Multi-day high-altitude trekking (above 14,000 feet), long-distance bullet bike riding through Ladakh or Spiti, and advanced technical ascents. High physical fitness, stamina, and prior acclimatization protocols are mandatory.</p>
                </div>
              </div>
            </div>

            <div id="comparison" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Destination Comparison: Ladakh vs Rishikesh vs Andaman vs Spiti</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm text-left border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 border-b">Feature</th>
                      <th className="p-4 border-b">Ladakh (Biking)</th>
                      <th className="p-4 border-b">Rishikesh (Rafting)</th>
                      <th className="p-4 border-b">Andaman (Scuba)</th>
                      <th className="p-4 border-b">Spiti (Trekking)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium">Best Time</td>
                      <td className="p-4">June - September</td>
                      <td className="p-4">Sep - Nov, Feb - May</td>
                      <td className="p-4">October - May</td>
                      <td className="p-4">May - October</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium">Difficulty</td>
                      <td className="p-4 text-red-600 font-medium">Extreme (High Alt)</td>
                      <td className="p-4 text-green-600 font-medium">Moderate</td>
                      <td className="p-4 text-green-600 font-medium">Beginner/Moderate</td>
                      <td className="p-4 text-red-600 font-medium">Extreme</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium">Focus</td>
                      <td className="p-4">Endurance Riding & Passes</td>
                      <td className="p-4">White Water Rapids & Bungee</td>
                      <td className="p-4">Marine Life & Corals</td>
                      <td className="p-4">Remote Cold Desert Trekking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="destinations" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-4">Top Hubs for Thrill Seekers</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">1. Ladakh & Zanskar Valley</h3>
                  <p>Often hailed as the mecca for motorcycling enthusiasts, the rugged terrain of Leh-Ladakh offers high-altitude challenges that test human endurance. Riders navigate the treacherous curves of world-famous mountain passes like Khardung La and Chang La, while breathing in thin air at 18,000 feet. Our <Link to="/domestic-tours/ladakh" className="text-orange-600 hover:underline">Ladakh tour packages</Link> provide fully supported expeditions featuring expert mechanics, backup vehicles, and supplemental oxygen. For those combining breathtaking monasteries with <Link to="/ladakh-ultimate-expedition" className="text-orange-600 hover:underline">extreme overland journeys</Link>, Ladakh is the ultimate destination.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2. Andaman Islands</h3>
                  <p>The Andaman Islands boast some of the most vibrant marine ecosystems in South Asia, making it a premier destination for underwater explorers. You will find the best PADI-certified scuba diving sites located near Havelock Island, particularly at acclaimed reefs like Nemo Reef and Elephant Beach. Whether you are seeking a beginner shore dive or advanced boat dives to explore sunken ships, check out our <Link to="/domestic-tours/andaman" className="text-orange-600 hover:underline">Andaman holiday packages</Link> to secure your thrilling dive retreat in crystal-clear waters.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">3. Rishikesh, Uttarakhand</h3>
                  <p>Widely recognized as the adventure capital of India, Rishikesh perfectly balances serene spiritual ashrams with heart-pounding adrenaline sports. It is world-renowned for epic white-water rafting on the River Ganga, tackling famous rapids like 'The Wall' and 'Golf Course'. Beyond the river, visitors can experience India's highest bungee jump platform. View our <Link to="/domestic-tours/rishikesh" className="text-orange-600 hover:underline">Rishikesh weekend packages</Link> to experience these thrilling activities tightly integrated into <Link to="/domestic-tours/uttarakhand" className="text-orange-600 hover:underline">Uttarakhand's</Link> incredible wilderness.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">4. Spiti Valley, Himachal Pradesh</h3>
                  <p>A staggering high-altitude cold desert, Spiti Valley offers surreal, lunar-like landscapes ideal for extreme winter trekking and intense off-roading adventures. Traversing routes past ancient monasteries like Key Gompa requires serious preparation and acclimatization. The raw, unfiltered beauty of Spiti attracts hardcore hikers and 4x4 overland enthusiasts from across the globe. See our <Link to="/domestic-tours/himachal" className="text-orange-600 hover:underline">Himachal Volvo packages</Link> that include extensive, guided Spiti circuit itineraries.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">5. Dubai, UAE</h3>
                  <p>Dubai is synonymous with high-octane, motorized luxury adventures amidst vast desert landscapes and towering skyscrapers. Experience dramatic evening desert dune bashing in powerful 4x4 SUVs, heart-racing sandboarding down massive dunes, and awe-inspiring tandem skydiving jumps over the iconic Palm Jumeirah. Find your adrenaline fix with our <Link to="/international-tours/dubai" className="text-orange-600 hover:underline">Dubai holiday packages</Link>, which seamlessly blend opulent luxury with intense, unforgettable thrills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Travel Guides */}
        <section className="py-12 bg-muted/10 border-t">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Helpful Adventure & Travel Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/domestic-tours/ladakh" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-orange-50 hover:border-orange-200 transition-all font-medium text-muted-foreground hover:text-orange-700 shadow-sm">
                🏍️ Ladakh Biking Guide
              </Link>
              <Link to="/domestic-tours/andaman" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-orange-50 hover:border-orange-200 transition-all font-medium text-muted-foreground hover:text-orange-700 shadow-sm">
                🤿 Scuba Diving in Andaman
              </Link>
              <Link to="/international-tours/thailand" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-orange-50 hover:border-orange-200 transition-all font-medium text-muted-foreground hover:text-orange-700 shadow-sm">
                🪂 Pattaya Adventure Guide
              </Link>
              <Link to="/budget-tour-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-orange-50 hover:border-orange-200 transition-all font-medium text-muted-foreground hover:text-orange-700 shadow-sm">
                💰 Budget Travel Tips
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main >
    </>
  );
};

export default AdventurePackages;
