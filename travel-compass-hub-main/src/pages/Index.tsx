import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
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
import AEOStructuredData from '@/components/AEOStructuredData';
import AIParseableContent from '@/components/AIParseableContent';
import PattayaPromoPopup from '@/components/PattayaPromoPopup';
import SEOHead from '@/components/SEOHead';
import heroVideo from '@/assets/hero-video.mp4';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
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
    const timeout = setTimeout(() => setVideoReady(true), 2000);

    return () => {
      video.removeEventListener('loadedmetadata', handleCanPlay);
      clearTimeout(timeout);
    };
  }, [shouldPreloadVideo]);

  // Complete loading when both animation and video are ready
  useEffect(() => {
    if (animationComplete && videoReady) {
      setIsLoading(false);
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
      {/* AEO Structured Data for AI platforms */}
      <AEOStructuredData />

      {/* Hidden crawlable content for AI/Search engines */}
      <AIParseableContent />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background" role="main">
        <HeroSection />

        {/* Below-the-fold sections are code-split for faster first load */}
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}>
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
