import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { ShieldCheck, Heart, MapPin, Users, CheckCircle, Info, Plane, Utensils, BedDouble, Car } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import DestinationBuckets, { Destination } from '@/components/DestinationBuckets';
import LogisticsSection from '@/components/LogisticsSection';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';
import RelatedServices from '@/components/RelatedServices';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Link } from 'react-router-dom';

const HoneymoonPackagesFromBhilai = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const snowDestinations: Destination[] = [
        { name: "Manali (Snow)", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800", price: "Starts ₹15,999", duration: "5N/6D", link: "/manali-tour-package-from-bhilai", rating: "4.9", tag: "Snow Love" },
        { name: "Kashmir", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800", price: "Starts ₹22,999", duration: "5N/6D", link: "/kashmir-tour-package-from-bhilai", rating: "4.9", tag: "Heaven on Earth" },
    ];

    const beachDestinations: Destination[] = [
        { name: "Goa (North vs South)", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", price: "Starts ₹12,999", duration: "4N/5D", link: "/goa-tour-package-from-bhilai", rating: "4.7", tag: "Party + Privacy" },
        { name: "Andaman (LTC)", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/andaman-tour-package-from-bhilai", rating: "4.8", tag: "Exotic Indian" },
        { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/kerala-tour-package-from-bhilai", rating: "4.8", tag: "Backwaters" },
    ];

    const internationalDestinations: Destination[] = [
        { name: "Bali (Indonesia)", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/bali-tour-package-from-bhilai", rating: "4.9", tag: "Island Villas" },
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/thailand-tour-package-from-bhilai", rating: "4.8", tag: "Budget International" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/package/maldives", rating: "5.0", tag: "Luxury Water Villa" },
    ];

    const bestTimeData = [
        { destination: "Manali (Snow)", months: "Dec – Feb" },
        { destination: "Kashmir", months: "Mar – Oct" },
        { destination: "Bali", months: "Apr – Oct" },
        { destination: "Kerala", months: "Sep – Mar" },
    ];

    const faqs = [
        { question: "Do you offer private honeymoon packages from Bhilai?", answer: "Yes, our honeymoon packages are 100% private. You get private AC cabs, private dinners, and verified couple-friendly hotels. No shared buses." },
        { question: "Do we need a Marriage Certificate for hotels?", answer: "Most hotels in India do NOT ask for a marriage certificate, only valid ID proofs (Aadhar/Voter ID) for both guests. We ensure you book couple-friendly properties." },
        { question: "What are the best honeymoon places near Bhilai?", answer: "For quick trips, we recommend a luxury stay in Kanha/Bandhavgarh or a flight to Goa/Manali. If you want something nearby, we can plan luxury stays in Jagdalpur." },
        { question: "Can we pay in installments?", answer: "Yes! You can pay a booking amount to reserve your package and pay the rest before travel. We also accept credit cards." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Honeymoon Tour Planning in Bhilai",
        "serviceType": "TravelAgency",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "telephone": "+919406182174",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 04, New Civic Centre",
                "addressLocality": "Bhilai",
                "addressRegion": "Chhattisgarh",
                "postalCode": "490006",
                "addressCountry": "IN"
            },
            "priceRange": "₹15000-₹500000"
        },
        "areaServed": "Bhilai",
        "audience": "Couples & Newlyweds",
        "description": "Private and personalized honeymoon tour packages from Bhilai. Face-to-face planning, couple-friendly hotels, and 24/7 support for hassle-free romantic getaways."
    };

    return (
        <>
            <Helmet>
                <title>Honeymoon Packages from Bhilai: Romantic, Private & Safe (2025)</title>
                <meta name="description" content="Plan your perfect honeymoon from Bhilai with Rudraksh Safar. Private couples' trips to Maldives, Bali, Manali & Goa. Flower beds, Candlelight dinners & Privacy guaranteed." />
                <meta name="keywords" content="honeymoon packages from bhilai, couple tour packages bhilai, private honeymoon trips bhilai, personalized honeymoon planning bhilai, romantic getaways from chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/honeymoon-packages" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Honeymoon Packages from Bhilai"
                    subtitle="Start your new life with a magical journey. Private, safe, and romantic getaways designed for Bhilai couples."
                    bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Honeymoon Packages', path: '/tour-packages-from-bhilai/honeymoon-packages' }]} />
                    </div>
                </LocationHero>

                {/* THE RUDRAKSH ROMANCE GUARANTEE */}
                <section className="py-12 bg-pink-50 border-b border-pink-200">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex justify-center items-center gap-2 mb-4">
                            <Heart className="w-8 h-8 text-pink-600 fill-current" />
                            <h2 className="text-3xl font-serif font-bold text-pink-900">The "Rudraksh Romance Guarantee"</h2>
                        </div>
                        <p className="text-pink-800 mb-8 max-w-2xl mx-auto text-lg">
                            We know this isn't just a holiday; it's your first memory together. We ensure it's perfect.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition">
                                <ShieldCheck className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-800">100% Privacy</h3>
                                <p className="text-sm text-gray-600">Verified couple-friendly hotels. No judgment, no hassle.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition">
                                <Car className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-800">Private AC Cab</h3>
                                <p className="text-sm text-gray-600">No shared buses. Just you, your partner, and the scenic route.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition">
                                <Utensils className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-800">Candlelight Dinner</h3>
                                <p className="text-sm text-gray-600">One romantic dinner by the beach or river included in every premium package.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition">
                                <BedDouble className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-800">Room Decor</h3>
                                <p className="text-sm text-gray-600">Flower bed decoration and honeymoon cake on arrival night.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3 DISTINCT TRACKS */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Honeymoon Vibe</h2>

                        {/* Track 1: Snow */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6 bg-blue-50 p-3 rounded-lg w-fit mx-auto md:mx-0">
                                <span className="text-2xl">❄️</span>
                                <h3 className="text-2xl font-bold text-blue-900">The "Snow & Snuggles" Textures</h3>
                                <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">Best: Dec - Mar</span>
                            </div>
                            <DestinationBuckets
                                title=""
                                description="Cozy up in the mountains with snow-capped views."
                                destinations={snowDestinations}
                            />
                        </div>

                        {/* Track 2: Beach */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6 bg-orange-50 p-3 rounded-lg w-fit mx-auto md:mx-0">
                                <span className="text-2xl">🏖️</span>
                                <h3 className="text-2xl font-bold text-orange-900">The "Sun & Sand" Escapes</h3>
                                <span className="text-sm bg-orange-200 text-orange-800 px-2 py-1 rounded">Best: Oct - Apr</span>
                            </div>
                            <DestinationBuckets
                                title=""
                                description="Relax by the ocean with sunset dinners."
                                destinations={beachDestinations}
                            />
                        </div>

                        {/* Track 3: International */}
                        <div>
                            <div className="flex items-center gap-3 mb-6 bg-purple-50 p-3 rounded-lg w-fit mx-auto md:mx-0">
                                <span className="text-2xl">✈️</span>
                                <h3 className="text-2xl font-bold text-purple-900">The "Global Flex" (International)</h3>
                                <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">Trending Now</span>
                            </div>
                            <DestinationBuckets
                                title=""
                                description="Show the world you went global. Visa assistance included."
                                destinations={internationalDestinations}
                            />
                        </div>
                    </div>
                </section>

                <div className="bg-slate-50 py-12">
                    <WhyTravelSection city="Bhilai" />
                </div>

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="Honeymoon Planning FAQs"
                    description="Tips for planning your perfect romantic vacation."
                />

                <RelatedServices mode="packages" />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default HoneymoonPackagesFromBhilai;
