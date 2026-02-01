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

const TourPackagesFromRaipur = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const domesticDestinations: Destination[] = [
        { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", price: "Starts ₹8,999", duration: "3N/4D", link: "/package/goa", rating: "4.8" },
        { name: "Kashmir", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/package/kashmir", rating: "4.9" },
        { name: "North East", image: "https://images.unsplash.com/photo-1596482855174-8b067332da2f?auto=format&fit=crop&q=80&w=800", price: "Starts ₹24,999", duration: "6N/7D", link: "/package/gangtok-darjeeling", rating: "4.8", tag: "Nature" },
        { name: "Ladakh", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "6N/7D", link: "/package/ladakh", rating: "4.9", tag: "Adventure" },
        { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", price: "Starts ₹14,999", duration: "4N/5D", link: "/package/kerala-family", rating: "4.7" },
        { name: "Andaman", image: "https://images.unsplash.com/photo-LxvxWrx7l80?auto=format&fit=crop&q=80&w=800", price: "Starts ₹22,999", duration: "5N/6D", link: "/package/andaman", rating: "4.9" },
        { name: "Himachal", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800", price: "Starts ₹10,999", duration: "5N/6D", link: "/package/shimla-manali", rating: "4.8" },
        { name: "Char Dham", image: "https://images.unsplash.com/photo-4O05q44dGjE?auto=format&fit=crop&q=80&w=800", price: "Starts ₹25,999", duration: "10N/11D", link: "/package/chardham", rating: "5.0", tag: "Spiritual" },
    ];

    const internationalDestinations: Destination[] = [
        { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "5N/6D", link: "/visa/dubai" },
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/visa/thailand" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800", price: "Starts ₹35,999", duration: "5N/6D", link: "/international-packages", tag: "Trending" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/visa/bali" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/visa/singapore" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/visa/maldives" },
        { name: "Turkey", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a6b?auto=format&fit=crop&q=80&w=800", price: "Starts ₹85,999", duration: "6N/7D", link: "/visa/turkey" },
    ];

    const bestTimeData = [
        { destination: "Goa", months: "Nov – Feb" },
        { destination: "Kashmir", months: "Apr – Oct" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Ladakh", months: "May – Sep" },
    ];

    const faqs = [
        { question: "What are the best tour packages from Raipur?", answer: "Travelers from Raipur love our packages to Goa, Kashmir, North East (Sikkim/Darjeeling), and international spots like Dubai and Thailand. We provide direct flight connections where available." },
        { question: "Do you assist with visas for international trips from Raipur?", answer: "Yes, our Raipur office team provides complete visa assistance for all countries including Thailand, Dubai, Singapore, and Schengen countries." },
        { question: "Are flights included in the package cost?", answer: "Our standard packages include accommodation, transfers, and sightseeing. Flights are usually extra, but we can bundle them to give you an all-inclusive price." },
        { question: "Can I book a group tour from Raipur?", answer: "Absolutely. We organize group tours for families, colleges, and corporates from Raipur with special group discounts." },
        { question: "How can I contact your Raipur agent?", answer: "You can reach our Raipur support directly via WhatsApp or call at +91 94061 82174 for quick quotes and itinerary planning." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Tour Packages from Raipur",
        "description": "Book best tour packages from Raipur. Domestic & international holiday packages for family, honeymoon & groups.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "telephone": "+919406182174",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Tour Packages from Raipur | Best Travel Agent in Raipur</title>
                <meta name="description" content="Explore top tour packages from Raipur. Affordable domestic & international trips to Goa, Kashmir, Dubai, Thailand. Flight & visa assistance included." />
                <meta name="keywords" content="tour packages from raipur, travel agent raipur, international tours from raipur, holiday packages raipur, best travel agency in raipur" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-raipur" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Raipur"
                    title="Tour Packages from Raipur"
                    subtitle="Your gateway to the world. Premium holiday packages with flights via Raipur."
                    bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
                />

                <WhyTravelSection city="Raipur" />

                <DestinationBuckets
                    title="Domestic Wonders"
                    description="From the Himalayas to the Andamans, explore India from Raipur."
                    destinations={domesticDestinations}
                />

                <DestinationBuckets
                    title="International Escapes"
                    description="Fly to exotic destinations from Swami Vivekananda Airport (connecting)."
                    destinations={internationalDestinations}
                />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="FAQs for Raipur Travelers"
                    description="Common questions about booking your next trip from Raipur."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TourPackagesFromRaipur;
