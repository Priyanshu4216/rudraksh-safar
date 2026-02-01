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

const TourPackagesFromBhilai = () => {
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
        { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", price: "Starts ₹14,999", duration: "4N/5D", link: "/package/kerala-family", rating: "4.7" },
        { name: "Himachal", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800", price: "Starts ₹10,999", duration: "5N/6D", link: "/package/shimla-manali", rating: "4.8" },
        { name: "Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", price: "Starts ₹12,999", duration: "5N/6D", link: "/package/rajasthan-family", rating: "4.7" },
        { name: "Andaman", image: "https://images.unsplash.com/photo-LxvxWrx7l80?auto=format&fit=crop&q=80&w=800", price: "Starts ₹22,999", duration: "5N/6D", link: "/package/andaman", rating: "4.9" },
        { name: "Char Dham", image: "https://images.unsplash.com/photo-4O05q44dGjE?auto=format&fit=crop&q=80&w=800", price: "Starts ₹25,999", duration: "10N/11D", link: "/package/chardham", rating: "5.0", tag: "Spiritual" },
    ];

    const internationalDestinations: Destination[] = [
        { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "5N/6D", link: "/visa/dubai", rating: "4.9" },
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/visa/thailand", rating: "4.8" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/visa/bali", rating: "4.9" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/visa/singapore", rating: "4.8" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/visa/maldives", rating: "5.0", tag: "Honeymoon" },
        { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/visa/nepal", rating: "4.7" },
        { name: "Sri Lanka", image: "https://images.unsplash.com/photo-Mn-0B5p7y7o?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/visa/sri-lanka", rating: "4.6" },
    ];

    const bestTimeData = [
        { destination: "Goa", months: "Nov – Feb" },
        { destination: "Kashmir", months: "Apr – Oct" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Thailand", months: "Nov – Apr" },
    ];

    const faqs = [
        { question: "What are the best tour packages from Bhilai?", answer: "The best tour packages from Bhilai include Goa (Beach), Kashmir (Honeymoon), and Manali (Adventure). For international travel, our Dubai and Thailand packages are top-rated for being all-inclusive and budget-friendly." },
        { question: "What is the cheapest tour package from Bhilai?", answer: "Our cheapest tour packages start at ₹5,999 for Puri/Konark and ₹7,999 for Manali (via sleeper bus). We specialize in creating high-value trips for students and large families." },
        { question: "How much does a tour package from Bhilai cost?", answer: "Domestic packages typically range from ₹8,000 to ₹25,000 per person. International packages start from ₹29,000 (Thailand) to ₹65,000 (Maldives). Prices vary based on travel dates and hotel choices." },
        { question: "Which international trips are cheapest from Bhilai?", answer: "Nepal (via train/flight), Thailand, and Vietnam are the cheapest international trips from Bhilai. We can arrange budget airlines and cost-effective hostels/hotels to keep expenses low." },
        { question: "Are budget tour packages from Bhilai reliable?", answer: "Yes! At Rudraksh Safar, 'Budget' means smart planning, not cutting safety. We use vetted budget hotels and trusted transport operators. You get full itinerary transparency before paying." },
        { question: "How can I reduce the cost of a tour package?", answer: "To reduce costs: 1) Book 60 days in advance. 2) Travel during off-season (avoid May/June & Dec). 3) Choose sleeper trains instead of flights. 4) Opt for standard hotels instead of luxury resorts." },
        { question: "Is booking through a travel agent cheaper than online booking?", answer: "Often, yes! We have B2B trade rates with hotels that are 20-30% cheaper than public online prices. Plus, we save you from hidden 'convenience fees' charged by booking apps." },
        { question: "What hidden costs should I check in tour packages?", answer: "Always check for GST, entrance fees, and meal inclusions. Our packages clearly list 'Inclusions' and 'Exclusions' so you never face surprise costs during your trip." },
        { question: "What happens after I pay for the package?", answer: "Once you pay the booking amount, you instantly receive a booking confirmation. Within 24 hours, you get your hotel vouchers and flight tickets. We then create a WhatsApp group with your 'Trip Manager' who stays with you virtually throughout the trip." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Tour Packages from Bhilai",
        "description": "Best domestic and international tour packages from Bhilai. Book affordable holidays to Goa, Thailand, Dubai, and more with Rudraksh Safar.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "image": "https://rudrakshsafar.com/logo.png",
            "telephone": "+919406182174",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhilai",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            }
        },
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": domesticDestinations.map((dest, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": dest.name,
                "url": `https://rudrakshsafar.com${dest.link}`
            }))
        }
    };

    return (
        <>
            <Helmet>
                <title>Tour Packages from Bhilai | Lowest Price & Best Service</title>
                <meta name="description" content="Looking for cheap tour packages from Bhilai? We offer the lowest cost holiday packages to Goa, Kashmir, Dubai & Thailand. Best budget travel agent in Bhilai." />
                <meta name="keywords" content="tour packages from bhilai, cheapest tour packages from bhilai, low budget family tour from bhilai, affordable honeymoon packages from bhilai, budget travel agency bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Tour Packages from Bhilai"
                    subtitle="Domestic & international tours with local support. Start your journey from the Steel City."
                    bgImage="https://images.unsplash.com/photo-1536768138796-191459a932b1?auto=format&fit=crop&q=80&w=2000"
                />

                <WhyTravelSection city="Bhilai" />

                <DestinationBuckets
                    title="Top Domestic Destinations"
                    description="Explore the best of India with our direct packages from Bhilai."
                    destinations={domesticDestinations}
                />

                <div className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-serif mb-2 text-foreground">Budget Friendly Tours</h2>
                            <p className="text-muted-foreground mb-4">High on experience, low on price. Specially curated for budget travelers from Bhilai.</p>
                            <p className="text-xs text-muted-foreground bg-background inline-block px-3 py-1 rounded-full border border-border shadow-sm">
                                ℹ️ Prices depend on travel dates, hotel category, and inclusions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Goa Budget Trip", price: "Under ₹10k", desc: "Train + Hotel + Scooter" },
                                { title: "Manali Group Tour", price: "Under ₹8k", desc: "Volvo + Stay + Meals" },
                                { title: "Puri & Konark", price: "Under ₹6k", desc: "Train + Hotel + Darshan" }
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-6 rounded-xl shadow-sm border border-secondary/20 hover:border-secondary transition-colors text-center">
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-secondary font-bold text-lg mb-1">{item.price}</p>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <DestinationBuckets
                    title="Trending International Tours"
                    description="Go global with our hassle-free international packages."
                    destinations={internationalDestinations}
                />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="FAQs About Tours from Bhilai"
                    description="Everything you need to know before booking your trip."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TourPackagesFromBhilai;
