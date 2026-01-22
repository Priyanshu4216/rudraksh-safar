import { MapPin, Calendar, ArrowRight, ArrowLeft, Crown, Gem, Wine, Clock } from 'lucide-react';
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

const luxuryPackages = [
  {
    id: 'udaipur-palace',
    title: 'Udaipur Palace Stay',
    location: 'Rajasthan, India',
    duration: '4 Days / 3 Nights',
    price: '₹89,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heritage Luxury',
    perks: ['Royal Palace Suite', 'Private Butler', 'Lake View Dining'],
  },
  {
    id: 'maldives-villa',
    title: 'Maldives Water Villa',
    location: 'Maldives',
    duration: '5 Days / 4 Nights',
    price: '₹1,99,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Ultra Luxury',
    perks: ['Overwater Villa', 'Private Pool', 'Spa Treatments'],
  },
  {
    id: 'dubai-yacht',
    title: 'Dubai Yacht Experience',
    location: 'Dubai, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹2,49,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Elite Experience',
    perks: ['Private Yacht Tour', 'Burj Al Arab Dinner', 'Helicopter Ride'],
  },
  {
    id: 'switzerland-alps',
    title: 'Swiss Alps Retreat',
    location: 'Switzerland',
    duration: '7 Days / 6 Nights',
    price: '₹2,99,999',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    tag: 'Chalet Luxury',
    perks: ['Mountain Chalet', 'First Class Train', 'Fine Dining'],
  },
  {
    id: 'bali-private-villa',
    title: 'Bali Private Villa',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹1,49,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Private Retreat',
    perks: ['Infinity Pool Villa', 'Personal Chef', 'Spa Package'],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof luxuryPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Good day. I'm interested in the ${pkg.title} luxury experience (${pkg.duration}) at ${pkg.price}. Kindly share the complete details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/50 to-stone-50 dark:from-amber-950/10 dark:to-stone-950/20 border border-amber-200/30 dark:border-amber-800/20 hover:shadow-[0_20px_50px_-12px_rgba(217,175,124,0.3)] transition-all duration-700">
          {/* Luxury crown badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
            <Crown className="w-3 h-3" />
            {pkg.tag}
          </div>
          
          <div className="relative h-64 overflow-hidden">
            <img src={pkg.image} alt={`${pkg.title} luxury tour package - ${pkg.location}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg mb-2 tracking-wide">{pkg.title}</h3>
              <div className="flex items-center gap-1 text-amber-200/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="drop-shadow-md tracking-wide">{pkg.location}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground tracking-wide">
                <Calendar className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Gem className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                Handpicked
              </div>
            </div>

            <div className="mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>
            
            {/* Perks */}
            <div className="flex flex-wrap gap-2 mb-5">
              {pkg.perks.map((perk, idx) => (
                <span key={idx} className="text-xs bg-amber-100/50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 px-3 py-1.5 rounded-full border border-amber-200/50 dark:border-amber-700/30 tracking-wide">
                  {perk}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-5 border-t border-amber-200/30 dark:border-amber-800/20">
              <div>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Starting from</p>
                <p className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-400">{pkg.price}</p>
              </div>
              <Button 
                onClick={(e) => { e.preventDefault(); handleWhatsApp(); }} 
                className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white px-6 py-3 text-sm rounded-full shadow-lg hover:shadow-amber-600/20 transition-all tracking-wide"
              >
                Reserve
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const LuxuryPackages = () => {
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
    "name": "Luxury Tour Packages",
    "description": "Premium luxury travel experiences - 5-star palace stays, water villas, private yachts, and exclusive retreats",
    "numberOfItems": luxuryPackages.length,
    "itemListElement": luxuryPackages.map((pkg, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pkg.title,
      "url": `https://rudrakshsafar.com/package/${pkg.id}`
    }))
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="luxury" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Luxury Packages - 5-Star Stays, Private Villas, Yacht Tours"
          description="Indulge in ultra-luxury travel. 5-star palace stays in Udaipur, Maldives water villas, Dubai yacht tours, Swiss Alps chalets. Private butlers, fine dining & exclusive experiences."
          keywords="luxury tour packages, 5-star hotels, Maldives water villa, Dubai yacht tour, Swiss Alps luxury, Udaipur palace stay, Bali private villa, premium travel, exclusive vacations"
          canonicalUrl="https://rudrakshsafar.com/luxury-packages"
          structuredData={structuredData}
        />
        <Navbar />
        
        {/* Hero Section - Minimal & Elegant */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-background to-stone-50/20 dark:from-amber-950/10 dark:to-stone-950/10" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-amber-700 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-amber-600 to-transparent" />
                  <span className="text-amber-700 dark:text-amber-400 font-medium tracking-[0.3em] uppercase text-xs flex items-center gap-2">
                    <Gem className="w-3 h-3" />
                    Exclusive Collection
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
                  Luxury <span className="text-amber-700 dark:text-amber-400">Escapes</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  For the discerning traveler who seeks nothing but the finest. 
                  Curated experiences at the world's most exclusive destinations.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="p-6 border border-amber-200/30 dark:border-amber-800/20 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20 rounded-2xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground tracking-wide">Premium Only</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Premium stays, private experiences, and dedicated concierge service
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Premium Badges */}
        <section className="pb-12">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Crown, text: 'Premium Properties' },
                { icon: Gem, text: 'Exclusive Access' },
                { icon: Wine, text: 'Fine Dining' },
                { icon: Clock, text: 'Concierge Support' },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-amber-100/30 dark:bg-amber-900/10 text-amber-800 dark:text-amber-300 px-5 py-2.5 rounded-full text-sm font-medium border border-amber-200/30 dark:border-amber-700/20 tracking-wide">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {luxuryPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 to-stone-50/30 dark:from-amber-950/10 dark:to-stone-950/10" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="p-12 max-w-2xl mx-auto border border-amber-200/30 dark:border-amber-800/20 bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/10 rounded-3xl">
                <Crown className="w-14 h-14 text-amber-600 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 tracking-tight">Bespoke Luxury Experiences</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">Our luxury travel specialists will craft a personalized itinerary tailored to your preferences</p>
                <Button 
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Good day. I'm interested in a bespoke luxury travel experience. Kindly connect me with your luxury travel specialist.")}`, '_blank'); }} 
                  className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-amber-600/20 transition-all tracking-wide text-base"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Speak to Specialist
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

export default LuxuryPackages;
