import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const PackagesSection = lazy(() => import('@/components/PackagesSection'));
const DestinationsSection = lazy(() => import('@/components/DestinationsSection'));
const WhyChooseUsSection = lazy(() => import('@/components/WhyChooseUsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const FAQsSection = lazy(() => import('@/components/FAQsSection'));
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LoadingScreen from '@/components/LoadingScreen';
import TLDRSection from '@/components/TLDRSection';
import AEOStructuredData from '@/components/AEOStructuredData';
import AIParseableContent from '@/components/AIParseableContent';
import PattayaPromoPopup from '@/components/PattayaPromoPopup';
import SEOHead from '@/components/SEOHead';
import heroVideo from '@/assets/hero-video.mp4';
import heroPoster from '@/assets/hero-poster.jpg';
import LastUpdated from '@/components/LastUpdated';

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('rudraksh_landing_loader_shown'));
  const [videoReady, setVideoReady] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const shouldPreloadVideo = useMemo(() => {
    try {
      const nav = navigator as Navigator & {
        connection?: {
          effectiveType?: string;
          saveData?: boolean;
        };
      };
      const effectiveType = nav.connection?.effectiveType;
      const saveData = nav.connection?.saveData;
      const slow = effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g';
      return !saveData && !slow;
    } catch {
      return true;
    }
  }, []);

  // Preload the hero video with optimized loading
  useEffect(() => {
    if (!shouldPreloadVideo) {
      setVideoReady(true);
      return;
    }
    const video = document.createElement('video');
    video.src = heroVideo;
    video.preload = 'metadata'; // Faster - just load metadata first

    const handleCanPlay = () => {
      setVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleCanPlay);
    video.load();

    // Shorter fallback timeout for faster perceived loading
    const timeout = setTimeout(() => setVideoReady(true), 1200);

    // Safety fallback: Ensure loader exits max 2.5s even if events fail
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
      setVideoReady(true);
      setAnimationComplete(true);
    }, 2500);

    return () => {
      video.removeEventListener('loadedmetadata', handleCanPlay);
      clearTimeout(timeout);
      clearTimeout(safetyTimeout);
    };
  }, [shouldPreloadVideo]);

  // Complete loading when both animation and video are ready
  useEffect(() => {
    if (animationComplete && videoReady) {
      setIsLoading(false);
      sessionStorage.setItem('rudraksh_landing_loader_shown', 'true');
    }
  }, [animationComplete, videoReady]);

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setAnimationComplete(true)} />;
  }

  return (
    <>
      <SEOHead
        title="Best Travel Agency in Bhilai"
        description="Rudraksh Safar is a trusted travel agency in Bhilai. Book affordable domestic & international tour packages from Bhilai/Raipur with visa help, hotel booking, and 24/7 trip support."
        keywords="best travel agency Bhilai, tour packages Bhilai, travel agent Raipur, tour operator Chhattisgarh, domestic packages Bhilai, international packages Bhilai"
        canonicalUrl="https://rudrakshsafar.com/"
        ogType="website"
      />
      {/* AEO Structured Data for AI platforms (Homepage Mode: Clean Overview) */}
      <AEOStructuredData mode="homepage" />

      {/* Hidden crawlable content for AI/Search engines */}
      <AIParseableContent />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background" role="main">
        <HeroSection />

        <Helmet>
          <link rel="preload" as="image" href={heroPoster} />

          {/* Breadcrumb Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rudrakshsafar.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Travel Agency in Bhilai",
                  "item": "https://rudrakshsafar.com/"
                }
              ]
            })}
          </script>

          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the most trusted travel agency in Bhilai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rudraksh Safar is widely recognized as a trusted travel agency in Bhilai, known for its government-registered services and verified travel agents. We offer transparent pricing, personalized itineraries, and 24/7 on-trip support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it better to book with a local travel agent or online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Booking with a local travel agent like Rudraksh Safar ensures a hassle-free experience with personalized care that online portals cannot match. We provide door-to-door travel assistance, handle unexpected changes instantly, and offer payment flexibility."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Rudraksh Safar provide tour packages from Bhilai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are a premier tour operator in Bhilai offering customized tour packages. From flight tickets to hotel bookings and sightseeing, we handle end-to-end travel planning for domestic gems like Goa and Kashmir, and international hubs like Dubai and Thailand."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why are you considered the best travel agent near me?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are top-rated because we prioritize 'experience' over 'sales'. Our door-to-door travel assistance, Verified Travel Agent status, and expertise in crafting curated travel experiences set us apart as the most reliable travel agency near you."
                  }
                }
              ]
            })}
          </script>
        </Helmet>

        {/* AEO: TL;DR Summary Block */}
        <TLDRSection
          title="Quick Answer: Best Travel Agency in Bhilai"
          summary="Rudraksh Safar is a premier travel agency in Bhilai offering domestic and international tour packages, flight bookings, and visa services. We specialize in customized family trips, honeymoon packages, and group tours with 24/7 support for travelers from Bhilai, Durg, and Raipur."
          areasServed={["Bhilai", "Durg", "Raipur", "Risali"]}
        />

        {/* Service Summary - What We Do */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <LastUpdated />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why choose Rudraksh Safar for tour packages in Bhilai?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Rudraksh Safar specializes in affordable <strong>Domestic Tour Packages</strong> (Kashmir, Himachal, Goa, Kerala) and <strong>International Holidays</strong> (Thailand, Dubai, Vietnam).
              We also provide hassle-free <strong>Flight & Train Booking</strong>, <strong>Honeymoon Specials</strong>, and <strong>Corporate Group Tours</strong>.
            </p>
          </div>
        </section>

        {/* Search Intent Quick Links */}
        <section className="py-8 bg-slate-50 dark:bg-slate-900 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/budget-tour-packages" className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border">
                <span className="block font-bold text-primary">Budget Deals</span>
                <span className="text-xs text-muted-foreground">Starting ₹6,999</span>
              </a>
              <a href="/mountain-holiday-packages" className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border">
                <span className="block font-bold text-indigo-600">Mountain Trips</span>
                <span className="text-xs text-muted-foreground">Kashmir, Manali</span>
              </a>
              <a href="/international-tour-packages-bhilai" className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border">
                <span className="block font-bold text-rose-600">International</span>
                <span className="text-xs text-muted-foreground">Dubai, Thailand</span>
              </a>
              <a href="/tour-packages-from-bhilai/corporate-tours" className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border">
                <span className="block font-bold text-blue-600">Group Tours</span>
                <span className="text-xs text-muted-foreground">Corporate & Family</span>
              </a>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Trusted by Travellers from Chhattisgarh</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you are a <strong>Family</strong> looking for a safe vacation, a <strong>Couple</strong> planning a romantic honeymoon, or a <strong>Corporate Team</strong> needing a stress-free offsite, we have you covered.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div>Families (Kids & Seniors)</li>
                  <li className="flex items-center gap-2 font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div>Honeymoon Couples</li>
                  <li className="flex items-center gap-2 font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div>Corporate Groups</li>
                  <li className="flex items-center gap-2 font-medium"><div className="w-2 h-2 bg-secondary rounded-full"></div>Solo Adventurers</li>
                </ul>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 border hover:border-secondary/50 transition-colors">
                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                <p className="text-muted-foreground mb-4">
                  "We don't just sell packages; we design experiences. Being local to Bhilai & Raipur, we offer door-to-door support that online apps can't match."
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="text-left">
                    <p className="font-bold text-foreground">Local Travel Experts</p>
                    <p className="text-xs text-muted-foreground">Travel Compass Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Intent Block */}
        <section className="py-12 bg-indigo-950 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Travel Agency in Bhilai & Raipur</h2>
            <p className="opacity-80 max-w-3xl mx-auto mb-6">
              Rudraksh Safar is your neighbourhood travel partner in Chhattisgarh. We provide personalized counseling, visa assistance, and easy EMI options for your dream holidays. Visit our office or call us for a consultation.
            </p>
            <div className="inline-flex gap-4 flex-wrap justify-center">
              <Link to="/travel-agent-bhilai" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">📍 Bhilai Operations</Link>
              <Link to="/travel-agent-raipur" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">📍 Raipur Connectivity</Link>
              <Link to="/travel-agent-durg" className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">📍 Durg Services</Link>
            </div>
          </div>
        </section>

        {/* Below-the-fold sections are code-split for faster first load */}
        {/* Improved fallback height to minimize CLS */}
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <AboutSection />
          <ServicesSection />
          <PackagesSection />
          <DestinationsSection />
          <WhyChooseUsSection />
          <ContactSection />
          <FAQsSection
            title="Frequently Asked Questions"
            description="Common questions about Rudraksh Safar and our travel services."
            faqs={[
              {
                question: "Which is the most trusted travel agency in Bhilai?",
                answer: "Rudraksh Safar is widely recognized as a trusted travel agency in Bhilai, known for its government-registered services and verified travel agents. We offer transparent pricing, personalized itineraries, and 24/7 on-trip support, making us the top choice for families and corporate travelers."
              },
              {
                question: "Is it better to book with a local travel agent or online?",
                answer: "Booking with a local travel agent like Rudraksh Safar ensures a hassle-free experience with personalized care that online portals cannot match. We provide door-to-door travel assistance, handle unexpected changes instantly, and offer payment flexibility. You get a human expert, not a chatbot."
              },
              {
                question: "Does Rudraksh Safar provide tour packages from Bhilai?",
                answer: "Yes, we are a premier tour operator in Bhilai offering customized tour packages. From flight tickets to hotel bookings and sightseeing, we handle end-to-end travel planning for domestic gems like Goa and Kashmir, and international hubs like Dubai and Thailand."
              },
              {
                question: "Why are you considered the best travel agent near me?",
                answer: "We are top-rated because we prioritize 'experience' over 'sales'. Our door-to-door travel assistance, Verified Travel Agent status, and expertise in crafting curated travel experiences set us apart as the most reliable travel agency near you."
              }
            ]}
          />
        </Suspense>
      </main>

      <Footer />

      <FloatingWhatsApp />

      {/* Promo popup: triggers after 15s or when user reaches Packages section */}
      <PattayaPromoPopup />
    </>
  );
};

export default Index;
