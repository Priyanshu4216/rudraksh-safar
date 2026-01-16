import { MapPin, Calendar, ArrowRight, ArrowLeft, Users, Shield, Sparkles, Baby, Home } from 'lucide-react';
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

const PHONE_NUMBER = '919229150311';

const familyPackages = [
  {
    id: 'shimla-manali-family',
    title: 'Shimla Manali Family Tour',
    location: 'Himachal Pradesh, India',
    duration: '7 Days / 6 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Kid Friendly',
    features: ['Comfortable Stay', 'Guided Tours', 'Family Activities'],
  },
  {
    id: 'kerala-family',
    title: 'Kerala Family Vacation',
    location: 'Kerala, India',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature Retreat',
    features: ['Houseboat Stay', 'Wildlife Safari', 'Beach Fun'],
  },
  {
    id: 'rajasthan-family',
    title: 'Rajasthan Heritage Tour',
    location: 'Rajasthan, India',
    duration: '8 Days / 7 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Cultural Experience',
    features: ['Palace Visits', 'Camel Safari', 'Cultural Shows'],
  },
  {
    id: 'singapore-family',
    title: 'Singapore Family Fun',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹69,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2152&auto=format&fit=crop',
    tag: 'Theme Parks',
    features: ['Universal Studios', 'Sentosa Island', 'Night Safari'],
  },
  {
    id: 'dubai-family',
    title: 'Dubai Family Adventure',
    location: 'Dubai, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹74,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Theme Parks',
    features: ['Burj Khalifa', 'Desert Safari', 'Aquarium Visit'],
  },
  {
    id: 'thailand-family',
    title: 'Thailand Family Holiday',
    location: 'Thailand',
    duration: '7 Days / 6 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Beach & Culture',
    features: ['Beach Activities', 'Temple Tours', 'Island Hopping'],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof familyPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200/50 dark:border-blue-800/30 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] transition-all duration-500">
          {/* Family badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Users className="w-3 h-3" />
            Family Safe
          </div>
          
          <div className="relative h-56 overflow-hidden">
            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
              <Baby className="w-3 h-3" />
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
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.features.map((feature, idx) => (
                <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-blue-200/50 dark:border-blue-800/30">
              <div>
                <p className="text-xs text-muted-foreground">Per Family from</p>
                <p className="text-xl font-serif font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{pkg.price}</p>
              </div>
              <Button 
                onClick={(e) => { e.preventDefault(); handleWhatsApp(); }} 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2.5 text-sm rounded-full shadow-lg hover:shadow-blue-500/25 transition-all"
              >
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

const FamilyPackages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Family Tour Packages",
    "description": "Kid-friendly family vacation packages to India and International destinations - Shimla Manali, Kerala, Singapore, Dubai, Thailand",
    "numberOfItems": familyPackages.length,
    "itemListElement": familyPackages.map((pkg, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pkg.title,
      "url": `https://rudrakshsafar.com/package/${pkg.id}`
    }))
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="family" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Family Tour Packages - Kid Friendly Vacations to Singapore, Dubai, Thailand"
          description="Best family vacation packages with kid-friendly activities, comfortable stays & guided tours. Singapore, Dubai, Thailand, Shimla Manali, Kerala & more. Safe & memorable trips!"
          keywords="family tour packages, kid friendly vacation, family holiday, Singapore family trip, Dubai family tour, Thailand family vacation, Shimla Manali family, Kerala family tour"
          canonicalUrl="https://rudrakshsafar.com/family-packages"
          structuredData={structuredData}
        />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-background to-cyan-100/30 dark:from-blue-950/20 dark:to-cyan-950/10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-blue-500 to-transparent" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    For Families
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Family <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Packages</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Create lasting memories with your loved ones. Kid-friendly destinations, comfortable stays, 
                  and guided tours designed for the whole family.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-blue-300/30 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/30 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Safe & Trusted</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kid-friendly activities, comfortable stays & 24/7 support
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Trust Badges */}
        <section className="pb-10">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Baby, text: 'Kid Friendly' },
                { icon: Home, text: 'Comfortable Stays' },
                { icon: Shield, text: 'Safe & Secure' },
                { icon: Users, text: 'Guided Tours' },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
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
              {familyPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-950/20 dark:to-cyan-950/20" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto border border-blue-200/50 dark:border-blue-800/30">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Plan Your Family Vacation</h2>
                <p className="text-muted-foreground mb-6">Let us create a customized family-friendly itinerary for you</p>
                <Button 
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I'd like to plan a family vacation package.")}`, '_blank'); }} 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Plan Family Trip
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

export default FamilyPackages;
