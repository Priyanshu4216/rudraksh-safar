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

const InternationalToursFromRaipur = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const highDemandRoutes: Destination[] = [
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹32,999", duration: "5N/6D", link: "/visa/thailand", rating: "4.8" },
        { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "5N/6D", link: "/visa/dubai", rating: "4.9" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/visa/bali", rating: "4.9" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/visa/singapore", rating: "4.8" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800", price: "Starts ₹35,999", duration: "6N/7D", link: "/international-packages", tag: "Emerging" },
        { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800", price: "Starts ₹38,999", duration: "5N/6D", link: "/visa/malaysia", rating: "4.7" },
        { name: "Sri Lanka", image: "https://images.unsplash.com/photo-Mn-0B5p7y7o?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/visa/sri-lanka", rating: "4.6" },
        { name: "Turkey", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a6b?auto=format&fit=crop&q=80&w=800", price: "Starts ₹85,999", duration: "6N/7D", link: "/visa/turkey", tag: "Premium" },
    ];

    const bestTimeData = [
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Thailand", months: "Nov – Apr" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Vietnam", months: "Dec – Apr" },
        { destination: "Turkey", months: "Apr – Oct" },
    ];

    const faqs = [
        { question: "Which international destinations have direct flights from Raipur?", answer: "Currently, most international flights from Raipur connect via Delhi, Mumbai, or Kolkata. We manage all transit bookings for a seamless experience." },
        { question: "How much does a Dubai trip cost from Raipur?", answer: "A 5-day Dubai trip from Raipur typically starts around ₹45,999 per person (excluding flights). Flight rates vary seasonally." },
        { question: "Do you handle visas for Schengen countries?", answer: "Yes, we have a specialized visa team in Raipur that handles Schengen, UK, US, and other complex visa applications with high success rates." },
        { question: "Is travel insurance mandatory?", answer: "For many countries like Schengen states and UAE, it is mandatory. For others, it's highly recommended. We include it in our premium packages." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "International Tours from Raipur",
        "description": "Best international tour packages from Raipur. Visit Dubai, Thailand, Bali, Singapore with reliable local support.",
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
                <title>International Tours from Raipur | Dubai, Thailand, Bali Packages</title>
                <meta name="description" content="Book international tour packages from Raipur. Best deals on Dubai, Thailand, Bali, Singapore trips with visa & flight support. Start your world tour today!" />
                <meta name="keywords" content="international tours from raipur, foreign trips from raipur, dubai package from raipur, thailand tour from raipur, visa agent raipur" />
                <link rel="canonical" href="https://rudrakshsafar.com/international-tours-from-raipur" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Raipur"
                    title="International Tours from Raipur"
                    subtitle="Explore the world with tailored international packages starting from Raipur via major hubs."
                    bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
                />

                <WhyTravelSection city="Raipur" />

                <DestinationBuckets
                    title="Top International Picks"
                    description="Handpicked foreign destinations that are popular among Raipur travelers."
                    destinations={highDemandRoutes}
                />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="International Travel FAQs"
                    description="Clear answers for your international travel plans from Raipur."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default InternationalToursFromRaipur;
