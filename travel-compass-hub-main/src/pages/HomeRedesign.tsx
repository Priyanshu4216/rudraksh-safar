
import Hero from '@/components/home-redesign/Hero';
import TravellerTypes from '@/components/home-redesign/TravellerTypes';
import PilgrimageSpecials from '@/components/home-redesign/PilgrimageSpecials';
import SeasonalPicks from '@/components/home-redesign/SeasonalPicks';
import VisaEasy from '@/components/home-redesign/VisaEasy';
import TrustSection from '@/components/home-redesign/TrustSection';
import HappyExplorers from '@/components/home-redesign/HappyExplorers';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/home-redesign/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/SEOHead';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const HomeRedesign = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEOHead
                title="Trusted Travel Agency in Bhilai - Rudraksh Safar"
                description="Book domestic & international tour packages from Bhilai. Rudraksh Safar offers best deals on Kedarnath, Dubai, Thailand, and Family trips with 24/7 support."
                keywords="Travel Agency in Bhilai, Tour Packages from Bhilai, Best Travel Agent Raipur, Rudraksh Safar"
                canonicalUrl="https://rudrakshsafar.com/"
            />

            <Navbar />

            <main>
                <Hero />
                <TravellerTypes /> {/* White - Persona */}
                <ServicesSection /> {/* New: Services Section */}
                <TrustSection /> {/* Dark - Authority */}
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
