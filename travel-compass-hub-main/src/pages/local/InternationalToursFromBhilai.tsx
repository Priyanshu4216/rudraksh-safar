import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import DestinationBuckets, { Destination } from '@/components/DestinationBuckets';
import LogisticsSection from '@/components/LogisticsSection';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';

import Breadcrumbs from '@/components/seo/Breadcrumbs';

const InternationalToursFromBhilai = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const highDemandRoutes: Destination[] = [
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/package/thailand", rating: "4.8" },
        { name: "Dubai", image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "Starts ₹45,999", duration: "5N/6D", link: "/package/dubai", rating: "4.9" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/package/bali", rating: "4.9" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/package/singapore", rating: "4.8" },
        { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800", price: "Starts ₹38,999", duration: "5N/6D", link: "/package/malaysia", rating: "4.7" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/package/maldives-honeymoon", tag: "Luxury" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800", price: "Starts ₹35,999", duration: "6N/7D", link: "/package/vietnam", tag: "Trending" },
        { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/package/nepal", tag: "Budget" },
    ];

    const bestTimeData = [
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Thailand", months: "Nov – Apr" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Maldives", months: "Nov – Apr" },
    ];

    const faqs = [
        { question: "Best international tour from Bhilai for first-timers?", answer: "Thailand is the best choice for first-timers due to easy visa-on-arrival, affordability, and short flight duration via Kolkata or Raipur-Delhi." },
        { question: "Do you provide airport transfer to Raipur from Bhilai?", answer: "Yes, all our international packages booked from Bhilai include complimentary cab transfer to Swami Vivekananda Airport, Raipur." },
        { question: "Can we pay in installments for international trips?", answer: "Yes, we offer EMI options for packages above ₹50,000. You can also book with a small token amount and pay the rest in installments before the trip." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "International Tours from Bhilai",
        "description": "Affordable international tour packages from Bhilai. Visit Thailand, Dubai, Bali with local agency support.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "telephone": "+919406182174",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhilai",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>International Tours from Bhilai | Thailand, Dubai, Bali Packages</title>
                <meta name="description" content="Best international tour packages from Bhilai. Plan your trip to Thailand, Dubai, Bali, Maldives. Includes visa, flights & local pickup from Bhilai." />
                <meta name="keywords" content="international tours from bhilai, foreign trips from bhilai, travel agent bhilai for international tour, thailand package bhilai, dubai tour bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/international-tours" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="International Tours from Bhilai"
                    subtitle="Your dream international vacation starts here. Hassle-free planning, visas, and transfers."
                    bgImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'International Tours', path: '/tour-packages-from-bhilai/international-tours' }]} />
                    </div>
                </LocationHero>

                <WhyTravelSection city="Bhilai" />

                <DestinationBuckets
                    title="World's Best Destinations"
                    description="Curated international experiences for travelers from Bhilai."
                    destinations={highDemandRoutes}
                />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="International Travel FAQs"
                    description="Answers to common questions about travelling abroad from Bhilai."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default InternationalToursFromBhilai;
