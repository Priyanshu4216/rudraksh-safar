import { lazy, Suspense } from 'react';
import Hero from '@/components/home-redesign/Hero';
import TravellerTypes from '@/components/home-redesign/TravellerTypes';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/SEOHead';
import MobileAppShell from '@/components/mobile-ux/MobileAppShell';

import PilgrimageSpecials from '@/components/home-redesign/PilgrimageSpecials';
import SeasonalPicks from '@/components/home-redesign/SeasonalPicks';
import VisaEasy from '@/components/home-redesign/VisaEasy';
import TrustSection from '@/components/home-redesign/TrustSection';
import HappyExplorers from '@/components/home-redesign/HappyExplorers';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/home-redesign/CallToAction';
import SummerPackages from '@/components/home-redesign/SummerPackages';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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

                <ServicesSection /> {/* New: Services Section */}
                <TrustSection /> {/* Dark - Authority */}
                <SummerPackages /> {/* New: Exclusive Summer Deals */}
                <PilgrimageSpecials /> {/* Amber/Light - Spiritual */}
                <SeasonalPicks /> {/* White - Elegant Seasonal */}
                <VisaEasy /> {/* Light Grey - Utility */}
                <HappyExplorers /> {/* White - Social Proof + Gallery */}
                <ContactSection showGallery={false} />
                <CallToAction /> {/* Brand Color - Action */}
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default HomeRedesign;
