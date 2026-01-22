import { MapPin, Calendar, ArrowRight, ArrowLeft, Mountain, Zap, Flame, Waves, Bike, Clock } from 'lucide-react';
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

const PHONE_NUMBER = '919406182174';

const adventurePackages = [
  {
    id: 'ladakh-bike-tour',
    title: 'Ladakh & Spiti Bike Tour',
    location: 'Leh-Ladakh & Spiti Valley',
    duration: '12 Days / 11 Nights',
    price: '₹34,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=2074&auto=format&fit=crop',
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

const PackageCard = ({ pkg, index }: { pkg: typeof adventurePackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Yo! I'm pumped about the ${pkg.title} package (${pkg.duration}) at ${pkg.price}. Hit me with the details! 🔥`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
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
                LET'S GO
                <Zap className="w-4 h-4 ml-1.5" />
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
    "@type": "ItemList",
    "name": "Adventure Tour Packages",
    "description": "Thrilling adventure packages - Ladakh bike tour, Rishikesh rafting, Andaman scuba diving, Nepal trekking, Thailand island hopping",
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
          title="Adventure Packages - Ladakh Bike Tour, Rafting, Scuba Diving, Trekking"
          description="Epic adventure trips for thrill seekers! Ladakh bike tour, Rishikesh rafting, Andaman scuba diving, Nepal trekking, Thailand island hopping. YOLO trips starting ₹6,999!"
          keywords="adventure packages, Ladakh bike tour, Rishikesh rafting, scuba diving Andaman, Nepal trekking, Thailand island hopping, Dubai desert safari, extreme sports, youth travel"
          canonicalUrl="https://rudrakshsafar.com/adventure-packages"
          structuredData={structuredData}
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
                  Adventure <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Awaits</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Life's too short for boring trips. 🔥 Push your limits with epic adventures - 
                  from mountain peaks to ocean depths. YOLO, right?
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-orange-300/30 bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-950/30 dark:to-amber-950/30 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">No Cap Adventures</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real experiences, zero filter. Built for the wild ones 🤙
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Activity Tags */}
        <section className="pb-10">
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
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50 dark:from-orange-950/20 dark:to-amber-950/20" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto border border-orange-200/50 dark:border-orange-800/30">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Got Something Crazier in Mind?</h2>
                <p className="text-muted-foreground mb-6">Tell us your wildest adventure dreams. We'll make it happen! 🚀</p>
                <Button 
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Yo! I want to plan an epic adventure trip. Let's talk! 🔥")}`, '_blank'); }} 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all font-bold text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  LET'S GO WILD
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default AdventurePackages;
