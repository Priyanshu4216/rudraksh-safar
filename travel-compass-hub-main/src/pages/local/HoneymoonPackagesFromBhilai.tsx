import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { ShieldCheck, Heart, MapPin, Users, CheckCircle, Info } from 'lucide-react';
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
        "areaServed": {
            "@type": "City",
            "name": "Bhilai"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Couples & Newlyweds",
            "geographicArea": {
                "@type": "City",
                "name": "Bhilai"
            }
        },
        "description": "Private and personalized honeymoon tour packages from Bhilai. Face-to-face planning, couple-friendly hotels, and 24/7 support for hassle-free romantic getaways."
    };

    return (
        <>
            <Helmet>
                <title>Honeymoon Packages from Bhilai: Romantic Getaways & Privacy Guaranteed</title>
                <meta name="description" content="Plan your perfect honeymoon from Bhilai with Rudraksh Safar. Private couples' trips to Maldives, Bali, Manali & Goa. Face-to-face consultation & privacy guaranteed." />
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

                {/* LOCAL INTENT DECLARATION & TRUST SIGNALS */}
                <section className="py-12 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Why Plan Your Honeymoon Locally?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Planning a honeymoon is different from a regular trip. It requires <strong>privacy, safety, and personalization</strong>.
                                As your <strong>local travel partners in Bhilai</strong>, we offer what online portals cannot:
                                <span className="text-foreground font-medium"> Face-to-face consultation</span> to discuss your preferences in confidence,
                                <span className="text-foreground font-medium"> privacy guarantees</span> for your documents, and
                                <span className="text-foreground font-medium"> 24/7 personal support</span> while you are away.
                                We are located right here in Civic Centre to assist you and your family at every step.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-secondary/5 border border-secondary/10 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <ShieldCheck className="w-6 h-6 text-secondary" />
                                        <h3 className="font-bold text-foreground">Privacy & Safety First</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Your documents and travel details are handled with strict confidentiality. We ensure verified, couple-friendly hotels only.
                                    </p>
                                </div>
                                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Heart className="w-6 h-6 text-primary" />
                                        <h3 className="font-bold text-foreground">Couple-Centric Planning</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        We customize itineraries with romantic dinners, private transfers, and leisure time—no rushing like group tours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DECISION SUPPORT MICRO-ANSWERS */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8">Quick Decision Guide for Bhilai Couples</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-background p-5 rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-blue-500" /> Best for Privacy</h4>
                                <p className="text-sm text-muted-foreground"><strong>Maldives & Bali:</strong> Private pool villas and island seclusion. Best for undisturbed time together.</p>
                            </div>
                            <div className="bg-background p-5 rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-green-500" /> Best on Budget</h4>
                                <p className="text-sm text-muted-foreground"><strong>Manali & Goa:</strong> Beautiful experiences starting ₹12,999. Great for 4-5 day trips from Raipur.</p>
                            </div>
                            <div className="bg-background p-5 rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-purple-500" /> Best for Culture</h4>
                                <p className="text-sm text-muted-foreground"><strong>Kerala & Rajasthan:</strong> Royal palaces or serene backwaters. Perfect for relaxed sightseeing.</p>
                            </div>
                        </div>
                    </div>
                </section>

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
                <RelatedServices mode="packages" />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default HoneymoonPackagesFromBhilai;
