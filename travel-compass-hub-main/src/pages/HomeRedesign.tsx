import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MobileAppShell from '@/components/mobile-ux/MobileAppShell';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';

// Inspired Redesign Components
import Hero from '@/components/home-redesign/Hero';
import DestinationExplorer from '@/components/home-redesign/DestinationExplorer';
import ImagineJourneySection from '@/components/home-redesign/ImagineJourneySection';
import MoodTripMatcher from '@/components/home-redesign/MoodTripMatcher';
import CityDepartures from '@/components/home-redesign/CityDepartures';
import CharDhamSpecial from '@/components/home-redesign/CharDhamSpecial';
import MonthEscapes from '@/components/home-redesign/MonthEscapes';
import BentoDestinations from '@/components/home-redesign/BentoDestinations';
import WhatsAppChatFlow from '@/components/home-redesign/WhatsAppChatFlow';
import HomeFAQ from '@/components/home-redesign/HomeFAQ';
import TellUsCTA from '@/components/home-redesign/TellUsCTA';

// Kept Sections as requested by user
import ServicesSection from '@/components/ServicesSection'; // KEPT: Services Section
import { KumbhHomePromoCard } from '@/components/kumbh/KumbhHomePromoCard'; // KEPT: Kumbh Mela Section
import TrustSection from '@/components/home-redesign/TrustSection'; // KEPT: Trust Section
import HappyExplorers from '@/components/home-redesign/HappyExplorers'; // KEPT: Reviews Section

const HomeRedesign: React.FC = () => {
    useEffect(() => {
        if (window.location.hash === '#ai-planner') {
            setTimeout(() => {
                const el = document.getElementById('ai-planner');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#fffbf5] dark:bg-slate-950 font-sans selection:bg-amber-200 selection:text-amber-950">
            <SEOHead
                title="Trusted Travel Agency in Bhilai & Raipur - Rudraksh Safar"
                description="Book customized domestic, international & pilgrimage tour packages from Bhilai and Raipur. Best verified deals on Kedarnath, Char Dham, Kumbh Mela 2027, Ladakh, Thailand, and Dubai."
                keywords="Travel Agency in Bhilai, Tour Packages from Bhilai, Best Travel Agent Raipur, Kumbh Mela 2027 Packages, Char Dham Yatra from Raipur, Rudraksh Safar"
                canonicalUrl="https://rudrakshsafar.com/"
            />

            <Navbar />
            <MobileAppShell />

            <main className="pt-[86px] sm:pt-[94px] pb-20 md:pb-0">
                {/* 1. Hero with Billboard Carousel, Animated Rotator, Search & Configurator */}
                <Hero />

                {/* 2. Destination Explorer with Circular Avatars & "Spin The World / Surprise Me" */}
                <DestinationExplorer />

                {/* 3. AI Trip Architect & Custom Itinerary Planner */}
                <ImagineJourneySection />

                {/* 4. Interactive Mood & Group Trip Matcher */}
                <MoodTripMatcher />

                {/* 5. Hot Right Now: Departing from City Filter */}
                <CityDepartures />

                {/* 6. Services Section (KEPT as requested) */}
                <ServicesSection />

                {/* 7. Kumbh Mela 2027 Official Hub & Live Countdown (KEPT as requested) */}
                <KumbhHomePromoCard />

                {/* 8. Trust Section: 8+ Years, 5,000+ Happy Travelers (KEPT as requested) */}
                <TrustSection />

                {/* 9. Char Dham Pilgrimage Specialists & Connected Sacred Route */}
                <CharDhamSpecial />

                {/* 10. Best Trips by Month: 12-Month Interactive Season Explorer */}
                <MonthEscapes />

                {/* 11. Handcrafted Bento Destinations Portfolio */}
                <BentoDestinations />

                {/* 12. Customer Reviews & Google Verified Ratings (KEPT as requested) */}
                <HappyExplorers />

                {/* 13. "Skip the forms. Just chat." - WhatsApp Booking Simulation */}
                <WhatsAppChatFlow />

                {/* 14. FAQ Section: Before You Book */}
                <HomeFAQ />

                {/* 15. High-Impact Lead Action Banner */}
                <TellUsCTA />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default HomeRedesign;
