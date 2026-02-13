
import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar'; // Section 2
import SEOHead from '@/components/SEOHead';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LoadingScreen from '@/components/LoadingScreen';
import AEOStructuredData from '@/components/AEOStructuredData';
import AIParseableContent from '@/components/AIParseableContent';
import PattayaPromoPopup from '@/components/PattayaPromoPopup';
import heroVideo from '@/assets/hero-video.mp4';
import heroPoster from '@/assets/hero-poster.jpg';
import Footer from '@/components/Footer';

// Lazy load non-critical sections
const TravelStyle = lazy(() => import('@/components/TravelStyle')); // Section 3
const SignatureJourneys = lazy(() => import('@/components/SignatureJourneys')); // Section 4
const ServicesSection = lazy(() => import('@/components/ServicesSection')); // Section 5
const PilgrimageSpecials = lazy(() => import('@/components/home-redesign/PilgrimageSpecials')); // Section 6
const DestinationShowcase = lazy(() => import('@/components/DestinationShowcase')); // Section 7
const DestinationFinder = lazy(() => import('@/components/DestinationFinder')); // Section 8
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection')); // Section 9
const WhyChooseUsSection = lazy(() => import('@/components/WhyChooseUsSection')); // Section 10
const ContactSection = lazy(() => import('@/components/ContactSection')); // Section 11
const FinalCTA = lazy(() => import('@/components/FinalCTA')); // Section 12
const FAQsSection = lazy(() => import('@/components/FAQsSection'));

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
    video.preload = 'metadata';

    const handleCanPlay = () => {
      setVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleCanPlay);
    video.load();

    const timeout = setTimeout(() => setVideoReady(true), 1200);

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

  useEffect(() => {
    if (animationComplete && videoReady) {
      setIsLoading(false);
      sessionStorage.setItem('rudraksh_landing_loader_shown', 'true');
    }
  }, [animationComplete, videoReady]);

  useEffect(() => {
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
        title="Best Travel Agency in Bhilai | Luxury Tours & Verified Agents"
        description="Rudraksh Safar: Experience elite travel with Bhilai's most trusted agency. Premium domestic & international tours, visa expertise, and 24/7 personalized support."
        keywords="luxury travel agent Bhilai, premium tour packages Raipur, best travel agency Durg, international holidays Chhattisgarh, verified travel agent"
        canonicalUrl="https://rudrakshsafar.com/"
        ogType="website"
      />

      <AEOStructuredData mode="homepage" />
      <AIParseableContent />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="min-h-screen bg-black text-white" role="main">
        {/* Section 1: Cinematic Hero */}
        <HeroSection />

        <Helmet>
          <link rel="preload" as="image" href={heroPoster} />
        </Helmet>

        {/* Section 2: Prestige Trust Bar */}
        <TrustBar />

        {/* Section 3: Luxury Catalogue */}
        <Suspense fallback={<div className="h-96" />}>
          <TravelStyle />
        </Suspense>

        {/* Section 4: Signature Journeys */}
        <Suspense fallback={<div className="h-96" />}>
          <SignatureJourneys />
        </Suspense>

        {/* Section 5: Refined Travel Solutions */}
        <Suspense fallback={<div className="h-96" />}>
          <ServicesSection />
        </Suspense>

        {/* Section 6: Spiritual Experiences */}
        <Suspense fallback={<div className="h-96" />}>
          <PilgrimageSpecials />
        </Suspense>

        {/* Section 7: Magazine Showcase */}
        <Suspense fallback={<div className="h-96" />}>
          <DestinationShowcase />
        </Suspense>

        {/* Section 8: Interactive Tool */}
        <Suspense fallback={<div className="h-96" />}>
          <DestinationFinder />
        </Suspense>

        {/* Section 9: Human Stories */}
        <Suspense fallback={<div className="h-96" />}>
          <TestimonialsSection />
        </Suspense>

        {/* Section 10: Why Choose Us */}
        <Suspense fallback={<div className="h-96" />}>
          <WhyChooseUsSection />
        </Suspense>

        {/* Section 11: Elegant Contact */}
        <Suspense fallback={<div className="h-96" />}>
          <ContactSection />
        </Suspense>

        <Suspense fallback={null}>
          <FAQsSection
            title="Curious Minds Ask"
            description="Everything you need to know about crafting your perfect journey with us."
            faqs={[
              {
                question: "What distinguishes Rudraksh Safar from other travel agencies?",
                answer: "We are not just booking agents; we are travel designers. We specialize in curating personalized, premium experiences that go beyond standard itineraries, offering 24/7 support and exclusive perks."
              },
              {
                question: "Do you handle international visa processing?",
                answer: "Yes, our expert team provides comprehensive visa assistance, ensuring your documentation is perfect for higher approval success rates for destinations worldwide."
              },
              {
                question: "Can I customize the tour packages?",
                answer: "Absolutely. customization is our forte. Whether you want a private dinner on a beach or a helicopter ride in the mountains, we tailor every detail to your desires."
              }
            ]}
          />
        </Suspense>

        {/* Section 12: Aspirational CTA */}
        <Suspense fallback={<div className="h-60" />}>
          <FinalCTA />
        </Suspense>
      </main>

      {/* Section 13: Premium Footer */}
      <Footer />

      <FloatingWhatsApp />
      <PattayaPromoPopup />
    </>
  );
};

export default Index;

