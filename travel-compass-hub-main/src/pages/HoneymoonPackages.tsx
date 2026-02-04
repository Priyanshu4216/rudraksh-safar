import { MapPin, Calendar, ArrowRight, ArrowLeft, Heart, Sparkles, Clock } from 'lucide-react';
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
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import RelatedServices from '@/components/RelatedServices';
const PHONE_NUMBER = '919406182174';

const honeymoonPackages = [
  {
    id: 'manali-honeymoon',
    title: 'Manali Romantic Escape',
    location: 'Himachal Pradesh, India',
    duration: '5 Days / 4 Nights',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
    tag: 'Snow Romance',
    highlight: 'Candlelight dinner with mountain views',
  },
  {
    id: 'kashmir-honeymoon',
    title: 'Kashmir Paradise',
    location: 'Jammu & Kashmir, India',
    duration: '6 Days / 5 Nights',
    price: '₹26,999',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heaven on Earth',
    highlight: 'Shikara ride on Dal Lake',
  },
  {
    id: 'udaipur-honeymoon',
    title: 'Udaipur Royal Romance',
    location: 'Rajasthan, India',
    duration: '4 Days / 3 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Royal Love',
    highlight: 'Lake palace dinner experience',
  },
  {
    id: 'kerala-honeymoon',
    title: 'Kerala Backwater Romance',
    location: 'Kerala, India',
    duration: '5 Days / 4 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Serene Love',
    highlight: 'Private houseboat stay',
  },
  {
    id: 'bali-honeymoon',
    title: 'Bali Island Romance',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Tropical Love',
    highlight: 'Sunset beach dinner',
  },
  {
    id: 'maldives-honeymoon',
    title: 'Maldives Water Villa',
    location: 'Maldives',
    duration: '5 Days / 4 Nights',
    price: '₹89,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Ultimate Romance',
    highlight: 'Overwater villa experience',
  },
  {
    id: 'paris-honeymoon',
    title: 'Paris City of Love',
    location: 'Paris, France',
    duration: '7 Days / 6 Nights',
    price: '₹1,49,999',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    tag: 'City of Love',
    highlight: 'Eiffel Tower dinner',
  },
  {
    id: 'switzerland-honeymoon',
    title: 'Switzerland Alps Romance',
    location: 'Switzerland',
    duration: '8 Days / 7 Nights',
    price: '₹1,79,999',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    tag: 'Alpine Love',
    highlight: 'Swiss Alps train journey',
  },
  {
    id: 'europe-honeymoon',
    title: 'Europe Romantic Trail',
    location: 'Multi-Country Europe',
    duration: '12 Days / 11 Nights',
    price: '₹2,49,999',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
    tag: 'Grand Romance',
    highlight: 'Paris, Venice & Swiss Alps',
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof honeymoonPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.title} honeymoon package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200/50 dark:border-rose-800/30 hover:shadow-[0_20px_50px_-12px_rgba(244,63,94,0.25)] transition-all duration-500">
          {/* Romantic overlay hearts */}
          <div className="absolute top-4 right-4 z-10 flex gap-1">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
            <Heart className="w-3 h-3 text-rose-300 fill-rose-300 animate-pulse delay-100" />
          </div>

          <div className="relative h-56 overflow-hidden">
            <img src={pkg.image} alt={`${pkg.title} honeymoon package - ${pkg.location}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
              <Heart className="w-3 h-3 fill-current" />
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
              <span className="text-xs text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {pkg.highlight}
              </span>
            </div>

            <div className="mb-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-rose-200/50 dark:border-rose-800/30">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">{pkg.price}</p>
              </div>
              <Button
                onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-5 py-2.5 text-sm rounded-full shadow-lg hover:shadow-rose-500/25 transition-all"
              >
                Inquire
                <Heart className="w-4 h-4 ml-1.5 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const HoneymoonPackages = () => {
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
    "name": "Honeymoon Tour Packages",
    "description": "Romantic honeymoon packages to India and International destinations - Manali, Kashmir, Bali, Maldives, Paris, Switzerland",
    "numberOfItems": honeymoonPackages.length,
    "itemListElement": honeymoonPackages.map((pkg, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pkg.title,
      "url": `https://rudrakshsafar.com/package/${pkg.id}`
    }))
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="honeymoon" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Honeymoon Packages - Romantic Getaways to Bali, Maldives, Paris, Kashmir"
          description="Plan your dream honeymoon with romantic packages to Bali, Maldives, Paris, Switzerland, Kashmir & more. Candlelight dinners, private villas, sunset experiences. Book now!"
          keywords="honeymoon packages, romantic getaway, Bali honeymoon, Maldives water villa, Paris honeymoon, Switzerland honeymoon, Kashmir honeymoon, Kerala backwaters honeymoon"
          canonicalUrl="https://rudrakshsafar.com/honeymoon-packages"
          structuredData={structuredData}
        />
        <Navbar />

        {/* Hero Section with romantic gradient */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-background to-pink-100/30 dark:from-rose-950/20 dark:to-pink-950/10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Honeymoon Packages', path: '/honeymoon-packages' }]} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-rose-500 to-transparent" />
                  <span className="text-rose-600 dark:text-rose-400 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-current" />
                    For Lovebirds
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Honeymoon <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Packages</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Begin your forever with unforgettable romantic escapes. From serene backwaters to exotic islands,
                  create memories that last a lifetime.
                </p>
                <div className="mt-4">
                  <LastUpdated />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-rose-300/30 bg-gradient-to-br from-rose-50/80 to-pink-50/80 dark:from-rose-950/30 dark:to-pink-950/30 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-current" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Romance Guaranteed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Candlelight dinners, couple spa, private experiences & more
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {honeymoonPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <FAQsSection
          title="Common Questions About Honeymoon Packages"
          faqs={[
            {
              question: "Which destination is best for a honeymoon in India?",
              answer: "For a romantic getaway in India, Kerala (Backwaters), Kashmir (Snow & Valleys), Andaman (Islands), and Manali (Mountains) are top choices. Udaipur is perfect for a royal heritage experience."
            },
            {
              question: "Do you offer international honeymoon packages?",
              answer: "Yes! Our most popular international honeymoon destinations include Bali (Indonesia), Maldives (Water Villas), Thailand (Phuket/Krabi), Dubai, and Europe (Paris/Switzerland)."
            },
            {
              question: "Can we customize our honeymoon itinerary?",
              answer: "Absolutely. We specialize in personalized honeymoon itineraries. You can add candlelit dinners, couple spa sessions, private transfers, and specific experiences to make your trip unique."
            },
            {
              question: "What is included in the honeymoon package?",
              answer: "Most packages include accommodation, breakfast, transfers, sightseeing, and special honeymoon inclusions like a flower bed decoration, cake, or a romantic dinner. Flights can be added upon request."
            }
          ]}
        />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 dark:from-rose-950/20 dark:to-pink-950/20" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto border border-rose-200/50 dark:border-rose-800/30">
                <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 fill-current" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Plan Your Perfect Honeymoon</h2>
                <p className="text-muted-foreground mb-6">Let us create a personalized romantic itinerary just for you two</p>
                <Button
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I'd like to plan a customized honeymoon package.")}`, '_blank'); }}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-rose-500/25 transition-all"
                >
                  <Heart className="w-4 h-4 mr-2 fill-current" />
                  Plan My Honeymoon
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <RelatedServices mode="packages" />

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default HoneymoonPackages;
