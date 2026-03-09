import { lazy, Suspense } from 'react';
import Hero from '@/components/home-redesign/Hero';
import TravellerTypes from '@/components/home-redesign/TravellerTypes';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/SEOHead';
import MobileAppShell from '@/components/mobile-ux/MobileAppShell';

// Lazy loaded components (Below the fold)
const PilgrimageSpecials = lazy(() => import('@/components/home-redesign/PilgrimageSpecials'));
const SeasonalPicks = lazy(() => import('@/components/home-redesign/SeasonalPicks'));
const VisaEasy = lazy(() => import('@/components/home-redesign/VisaEasy'));
const TrustSection = lazy(() => import('@/components/home-redesign/TrustSection'));
const HappyExplorers = lazy(() => import('@/components/home-redesign/HappyExplorers'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const CallToAction = lazy(() => import('@/components/home-redesign/CallToAction'));
const FloatingWhatsApp = lazy(() => import('@/components/FloatingWhatsApp'));
const SummerPackages = lazy(() => import('@/components/home-redesign/SummerPackages'));

const HomeRedesign = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEOHead
                title="Trusted Travel Agency in Bhilai - Rudraksh Safar"
                description="Book domestic & international tour packages from Bhilai. Best deals on Kedarnath, Dubai, Thailand, and Family trips. Ideal for travelers from Bhilai, Raipur, and across Chhattisgarh."
                keywords="Travel Agency in Bhilai, Tour Packages from Bhilai, Best Travel Agent Raipur, Rudraksh Safar"
                canonicalUrl="https://rudrakshsafar.com/"
            />

            <Navbar />
            <MobileAppShell />

            <main>
                <Hero />
                <TravellerTypes /> {/* White - Persona */}

                <Suspense fallback={<div className="h-32 flex items-center justify-center text-muted-foreground">Loading...</div>}>
                    <ServicesSection /> {/* New: Services Section */}
                    <TrustSection /> {/* Dark - Authority */}
                    <SummerPackages /> {/* New: Exclusive Summer Deals */}
                    <PilgrimageSpecials /> {/* Amber/Light - Spiritual */}
                    <SeasonalPicks /> {/* White - Elegant Seasonal */}
                    <VisaEasy /> {/* Light Grey - Utility */}
                    <HappyExplorers /> {/* White - Social Proof + Gallery */}
                    <ContactSection showGallery={false} />
                    <CallToAction /> {/* Brand Color - Action */}
                </Suspense>
            </main>

            <Footer />
            <Suspense fallback={null}>
                <FloatingWhatsApp />
            </Suspense>
        </div>
    );
};

export default HomeRedesign;
