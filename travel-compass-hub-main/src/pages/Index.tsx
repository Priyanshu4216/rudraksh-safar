import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PackagesSection from '@/components/PackagesSection';
import DestinationsSection from '@/components/DestinationsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import FAQsSection from '@/components/FAQsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LoadingScreen from '@/components/LoadingScreen';
import AEOStructuredData from '@/components/AEOStructuredData';
import AIParseableContent from '@/components/AIParseableContent';
import heroVideo from '@/assets/hero-video.mp4';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Preload the hero video
  useEffect(() => {
    const video = document.createElement('video');
    video.src = heroVideo;
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      setVideoReady(true);
    };
    
    video.addEventListener('canplaythrough', handleCanPlay);
    video.load();
    
    // Fallback timeout in case video takes too long
    const timeout = setTimeout(() => setVideoReady(true), 5000);
    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      clearTimeout(timeout);
    };
  }, []);

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
        
        <AboutSection />

        <ServicesSection />
        
        <PackagesSection />
        
        <DestinationsSection />
        
        <WhyChooseUsSection />
        
        <ContactSection />

        <FAQsSection />
      </main>
      
      <Footer />
      
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
