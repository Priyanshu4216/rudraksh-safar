import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import DestinationBuckets, { Destination } from '@/components/DestinationBuckets';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import { Plane, Globe, ShieldCheck, MapPin } from 'lucide-react';

const InternationalToursFromRaipur = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    // Expert-curated destination list with Raipur-specific context
    const highDemandRoutes: Destination[] = [
        {
            name: "Thailand",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹32,000+",
            duration: "5N/6D",
            link: "/thailand-tour-package-from-raipur",
            rating: "4.8",
            description: "Most popular choice. Flights via Kolkata/Delhi. Visa on Arrival available."
        },
        {
            name: "Dubai",
            image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹45,000+",
            duration: "5N/6D",
            link: "/dubai-tour-package-from-raipur",
            rating: "4.9",
            description: "Direct connectivity via Mumbai/Delhi. E-Visa required (2-3 days processing)."
        },
        {
            name: "Bali",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹45,000+",
            duration: "6N/7D",
            link: "/visa/bali",
            rating: "4.9",
            description: "Best for couples. Flights via Bangkok/Singapore. Visa on Arrival."
        },
        {
            name: "Singapore",
            image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹55,000+",
            duration: "5N/6D",
            link: "/visa/singapore",
            rating: "4.8",
            description: "Cleanest city. Direct slots via Chennai/Delhi. Pre-entry visa required."
        },
        {
            name: "Vietnam",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹35,000+",
            duration: "6N/7D",
            link: "/international-packages",
            tag: "Trending",
            description: "Emerging favorite. Cheap flights via Kolkata. E-Visa is easy."
        },
        {
            name: "Malaysia",
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
            price: "Approx ₹38,000+",
            duration: "5N/6D",
            link: "/visa/malaysia",
            rating: "4.7",
            description: "Visa-free entry for Indians (currently). Connect via Chennai/Delhi."
        }
    ];

    const faqs = [
        {
            question: "Do I need to go to Delhi for international visas from Raipur?",
            answer: "No. For most destinations (Dubai, Thailand, Singapore, Bali, Europe), we process visas online or handle the submission from our Raipur/Bhilai office. You rarely need to visit the embassy physically."
        },
        {
            question: "Which international flights are easiest from Raipur?",
            answer: "Raipur (RPR) connects well with Delhi (DEL) and Mumbai (BOM). For Southeast Asia (Thailand, Vietnam), flights via Kolkata (CCU) are often cheaper and shorter."
        },
        {
            question: "Is travel insurance mandatory for trips from Raipur?",
            answer: "For Schengen (Europe) and Dubai, yes. For others, it's optional but highly recommended to cover flight delays or baggage loss, which can happen on connecting flights."
        },
        {
            question: "How early should I book an international trip from Raipur?",
            answer: "Since all international trips from Raipur involve a domestic connecting flight, we recommend booking 45-60 days in advance to get the best rates on the Raipur-Delhi/Mumbai leg."
        }
    ];

    // Elite Schema: CollectionPage > ItemList (Destinations) > TravelAgency
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "International Tours from Raipur",
        "description": "Expert-guided international tour packages from Raipur. Complete logistics support for flights from Swami Vivekananda Airport (RPR) to Dubai, Thailand, Bali, and more.",
        "url": "https://rudrakshsafar.com/tour-packages-from-raipur/international-tours",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": highDemandRoutes.map((dest, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "TouristDestination",
                    "name": dest.name,
                    "description": dest.description,
                    "image": dest.image
                }
            }))
        },
        "publisher": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "logo": "https://rudrakshsafar.com/logo.png",
            "telephone": "+919406182174",
            "areaServed": {
                "@type": "City",
                "name": "Raipur"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>International Tours from Raipur | Dubai, Thailand, Bali Packages</title>
                <meta name="description" content="Book international tour packages from Raipur. Expert guidance on flights from RPR Airport, visas, and itineraries for Dubai, Thailand, Bali & more." />
                <meta name="keywords" content="international tours from raipur, foreign trip from raipur, dubai tour from raipur, thailand package from raipur, raipur travel agent international" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-raipur/international-tours" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Raipur"
                    title="International Tours from Raipur"
                    subtitle="Seamless international travel starting from Swami Vivekananda Airport (RPR)."
                    bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'Raipur Packages', path: '/tour-packages-from-raipur' },
                            { label: 'International Tours', path: '/tour-packages-from-raipur/international-tours' }
                        ]} />
                    </div>
                </LocationHero>

                {/* TL;DR / AI Summary Section */}
                <section className="py-10 bg-muted/20 border-b">
                    <div className="container mx-auto px-4">
                        <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-border max-w-4xl mx-auto">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                International Travel from Raipur: At a Glance
                            </h2>
                            <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary-foreground font-semibold">• Hubs:</span>
                                    International flights usually connect via Delhi (DEL), Mumbai (BOM), or Kolkata (CCU).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary-foreground font-semibold">• Easiest Visas:</span>
                                    Thailand, Sri Lanka, Malaysia, and Vietnam (often Visa-free or E-Visa).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary-foreground font-semibold">• Flight Time:</span>
                                    Expect 6-9 hours total travel time for Southeast Asia/Dubai including layovers.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary-foreground font-semibold">• Our Role:</span>
                                    We handle the complete chain: Raipur → Hub → Destination + Visa + Transfers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <WhyTravelSection city="Raipur" />

                {/* Hyper-Local Logistics Section */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">How International Travel Works from Raipur</h2>
                            <p className="text-muted-foreground">
                                Unlike metro cities, traveling abroad from Chhattisgarh requires smart planning. Here is how we manage it.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-lg bg-card border border-border/50 text-center">
                                <Plane className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">1. The RPR Connection</h3>
                                <p className="text-sm text-muted-foreground">
                                    We book your domestic leg from Swami Vivekananda Airport to the best hub (Delhi for West, Kolkata for East) to minimize layover time.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-card border border-border/50 text-center">
                                <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">2. Visa & Documentation</h3>
                                <p className="text-sm text-muted-foreground">
                                    No need to travel to embassies. We check your documents in Raipur/Bhilai and process filings for you digitally or via courier.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-card border border-border/50 text-center">
                                <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">3. Arrival Support</h3>
                                <p className="text-sm text-muted-foreground">
                                    From the moment you land, our local partners handle forex, sim cards, and hotel transfers. You are never alone in a new country.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <DestinationBuckets
                    title="Popular International Packages from Raipur"
                    description="Curated trips with flight logic optimized for Raipur travelers."
                    destinations={highDemandRoutes}
                />

                <FAQsSection
                    faqs={faqs}
                    title="International Travel FAQs for Raipur Residents"
                    description="Common questions about flying abroad from Chhattisgarh."
                />

                <RelatedServices mode="packages" />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default InternationalToursFromRaipur;
