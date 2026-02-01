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

const HoneymoonPackagesFromBhilai = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const honeymoonDestinations: Destination[] = [
        { name: "Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800", price: "Starts ₹15,999", duration: "5N/6D", link: "/package/manali-honeymoon", rating: "4.9", tag: "Romantic" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/package/maldives-honeymoon", rating: "5.0", tag: "Luxury" },
        { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", price: "Starts ₹12,999", duration: "3N/4D", link: "/package/goa-honeymoon", rating: "4.7" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/package/bali-honeymoon", rating: "4.9" },
        { name: "Kashmir", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800", price: "Starts ₹22,999", duration: "5N/6D", link: "/package/kashmir-honeymoon", rating: "4.9" },
        { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/package/kerala-family", rating: "4.8" },
        { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800", price: "Starts ₹1,20,000", duration: "6N/7D", link: "/package/paris-honeymoon", tag: "Dream" },
        { name: "Andaman", image: "https://images.unsplash.com/photo-LxvxWrx7l80?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/package/andaman", rating: "4.8" },
    ];

    const bestTimeData = [
        { destination: "Manali (Snow)", months: "Dec – Feb" },
        { destination: "Kashmir", months: "Mar – Oct" },
        { destination: "Maldives", months: "Nov – Apr" },
        { destination: "Kerala", months: "Sep – Mar" },
    ];

    const faqs = [
        { question: "Do you offer private honeymoon packages from Bhilai?", answer: "Yes, our honeymoon packages are 100% private. You get private cabs, private dinners, and verified couple-friendly hotels." },
        { question: "What are the best honeymoon places near Bhilai?", answer: "For specialized honeymoon trips, we recommend Manali, Goa, Kerala, or Kashmir. If you want something nearby, we can plan luxury stays in Jagdalpur or Kanha/Bandhavgarh." },
        { question: "Are prices per couple or per person?", answer: "The prices listed are typically per person on a twin-sharing basis. However, we can provide a total couple cost with all inclusions upon request." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Honeymoon Packages from Bhilai",
        "description": "Romantic honeymoon packages from Bhilai. Book Maldives, Manali, Goa, Bali trips with special couple inclusions.",
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
                <title>Honeymoon Packages from Bhilai | Best Couple Tours</title>
                <meta name="description" content="Book romantic honeymoon packages from Bhilai. Maldives, Bali, Goa, Manali trips with private car, candlelight dinner & flower decoration. Call +91 94061 82174." />
                <meta name="keywords" content="honeymoon packages from bhilai, couple tour packages bhilai, manali honeymoon from bhilai, maldives honeymoon package bhilai, best honeymoon travel agent bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/honeymoon-packages-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Honeymoon Packages from Bhilai"
                    subtitle="Start your new life with a magical journey. Exotic destinations with touches of romance & privacy."
                    bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
                />

                <WhyTravelSection city="Bhilai" />

                <DestinationBuckets
                    title="Most Romantic Getaways"
                    description="Handpicked destinations for lovebirds starting their journey from Bhilai."
                    destinations={honeymoonDestinations}
                />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="Honeymoon Planning FAQs"
                    description="Tips for planning your perfect romantic vacation."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default HoneymoonPackagesFromBhilai;
