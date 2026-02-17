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
import { Link } from 'react-router-dom';
import { Plane, FileText, Globe, Car, ShieldCheck, CheckCircle, Wallet, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InternationalToursFromBhilai = () => {




    const highDemandRoutes: Destination[] = [
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/package/thailand", rating: "4.8" },
        { name: "Dubai", image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "Starts ₹45,999", duration: "5N/6D", link: "/package/dubai", rating: "4.9" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/package/bali", rating: "4.9" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/package/singapore", rating: "4.8" },
        { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800", price: "Starts ₹38,999", duration: "5N/6D", link: "/package/malaysia", rating: "4.7" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/package/maldives", tag: "Luxury" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800", price: "Starts ₹35,999", duration: "6N/7D", link: "/package/vietnam", tag: "Trending" },
        { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/package/sri-lanka", tag: "Ramayana Trail" },
        { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/package/nepal", tag: "Budget" },
    ];

    const bestTimeData = [
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Thailand", months: "Nov – Apr" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Maldives", months: "Nov – Apr" },
    ];

    const faqs = [
        {
            question: "Which international destination is easiest to travel to from Bhilai?",
            answer: <span><strong>Thailand</strong> and <strong>Vietnam</strong> are the easiest. We arrange flights from Swami Vivekananda Airport (Raipur) to Kolkata/Delhi connecting directly to Bangkok. Visa is on arrival!</span>,
            answerText: "Thailand and Vietnam are the easiest. We arrange flights from Swami Vivekananda Airport (Raipur) to Kolkata/Delhi connecting directly to Bangkok. Visa is on arrival!"
        },
        {
            question: "Do you maintain a local office in Bhilai for international bookings?",
            answer: <span>Yes, unlike online portals, we have a physical office in <Link to="/travel-agent-bhilai" className="text-primary hover:underline">Bhilai 3</Link>. You can submit your passport and documents securely in person. We also assist with Passport Seva Kendra (PSK) appointments in Bhilai/Raipur.</span>,
            answerText: "Yes, unlike online portals, we have a physical office in Bhilai 3. You can submit your passport and documents securely in person. We also assist with Passport Seva Kendra (PSK) appointments in Bhilai/Raipur."
        },
        {
            question: "Where can I exchange currency in Bhilai?",
            answer: "We assist with authorized forex services. You can also find RBI-authorized money changers in Civic Centre and Supela. We ensure you get the best exchange rates before you fly.",
            answerText: "We assist with authorized forex services. You can also find RBI-authorized money changers in Civic Centre and Supela. We ensure you get the best exchange rates before you fly."
        },
        {
            question: "Do you handle Visas for Dubai or Singapore from Bhilai?",
            answer: <span>Absolutely. We are a certified <Link to="/visa-agent-bhilai" className="text-primary hover:underline">Visa Agent in Bhilai</Link>. We handle the entire documentation process, biometric appointments (if needed), and submission.</span>,
            answerText: "Absolutely. We are a certified Visa Agent in Bhilai. We handle the entire documentation process, biometric appointments (if needed), and submission."
        },
        {
            question: "What if my flight from Raipur gets delayed?",
            answer: "Our 24/7 support team monitors all connections. Since we book your complete itinerary including the Raipur leg, we assist in rescheduling connecting flights to ensuring you don't get stranded.",
            answerText: "Our 24/7 support team monitors all connections. Since we book your complete itinerary including the Raipur leg, we assist in rescheduling connecting flights to ensuring you don't get stranded."
        }
    ];

    // Top-1% CollectionPage Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "International Tours from Bhilai - Rudraksh Safar",
        "description": "Best international holiday packages from Bhilai. Complete travel assistance: Flights from Raipur, Visa services, and creating itineraries for Thailand, Dubai, Bali, and more.",
        "url": "https://rudrakshsafar.com/tour-packages-from-bhilai/international-tours",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Rudraksh Safar",
            "url": "https://rudrakshsafar.com/"
        },
        "areaServed": [
            { "@type": "City", "name": "Bhilai" },
            { "@type": "City", "name": "Durg" },
            { "@type": "City", "name": "Raipur" },
            { "@type": "AdministrativeArea", "name": "Chhattisgarh" }
        ],
        "about": {
            "@type": "ItemList",
            "itemListElement": highDemandRoutes.map((dest, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "TouristDestination",
                    "name": dest.name,
                    "description": `${dest.name} tour package from Bhilai via ${dest.tag || 'Standard'} route.`,
                    "url": `https://rudrakshsafar.com${dest.link}`
                }
            }))
        },
        "provider": {
            "@id": "https://rudrakshsafar.com/#travelagency"
        }
    };

    return (
        <>
            <Helmet>
                <title>International Tours from Bhilai | Thailand, Dubai, Bali Packages</title>
                <meta name="description" content="Plan your international trip from Bhilai with Rudraksh Safar. We handle Raipur airport transfers, Visas, and currency exchange for Thailand, Dubai, Bali & more." />
                <meta name="keywords" content="international tours from bhilai, foreign trips from bhilai, travel agent bhilai for international tour, thailand package bhilai, dubai tour bhilai, visa agent bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/international-tours" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="International Tours from Bhilai"
                    subtitle="Your dream international vacation starts right here in Bhilai. We handle your Visa, Flights from Raipur, and Currency."
                    bgImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'International Tours', path: '/tour-packages-from-bhilai/international-tours' }]} />
                    </div>
                </LocationHero>

                {/* Local Process Section - "How It Works" */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-4">How International Travel Works from Bhilai</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Travelling abroad doesn't have to be complicated. We manage the entire logistics chain from your doorstep in Supela, Smriti Nagar, or Durg.
                            </p>

                            <div className="grid md:grid-cols-4 gap-6 relative">
                                {/* Connector Line (Desktop) */}
                                <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

                                {[
                                    { icon: FileText, title: "1. Planning & Visa", desc: "Visit our Bhilai office. We handle your Visa application and documentation securely." },
                                    { icon: Globe, title: "2. Booking", desc: "We book your complete itinerary including connecting flights from Raipur Airport." },
                                    { icon: Car, title: "3. Doorstep Pickup", desc: "Complimentary cab from your home in Bhilai/Durg to Swami Vivekananda Airport." },
                                    { icon: Plane, title: "4. Departure", desc: "Fly seamlessly to your dream destination with 24/7 WhatsApp support." },
                                ].map((step, i) => (
                                    <div key={i} className="bg-card p-6 rounded-xl border shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <step.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="w-8 h-8 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg">Safety First Guarantee</h3>
                                        <p className="text-sm text-muted-foreground">We only book verified hotels and provide Indian Embassies' contact details for every destination.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Link to="/visa-agent-bhilai" className="text-primary font-medium hover:underline text-sm">Need Visa Only?</Link>
                                    <span className="text-border">|</span>
                                    <Link to="/contact" className="text-primary font-medium hover:underline text-sm">Visit Office</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What's Included Section - Merged from Deprecated Page */}
                <section className="py-16 bg-white dark:bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                                All-Inclusive International Packages
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-4 rounded-lg bg-orange-50 border border-orange-100">
                                        <Plane className="w-8 h-8 text-orange-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-orange-900">Flight & Logistics</h4>
                                            <p className="text-sm text-orange-800">Return flights from Raipur/Nagpur with checked baggage. We handle all connections.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
                                        <Building2 className="w-8 h-8 text-blue-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-blue-900">Premium Stay</h4>
                                            <p className="text-sm text-blue-800">3-star to 5-star hotels in safe, central locations. Breakfast included.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-4 rounded-lg bg-green-50 border border-green-100">
                                        <FileText className="w-8 h-8 text-green-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-green-900">Visa & Documents</h4>
                                            <p className="text-sm text-green-800">Complete visa assistance, immigration forms, and travel insurance guidance.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-lg bg-purple-50 border border-purple-100">
                                        <Wallet className="w-8 h-8 text-purple-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-purple-900">No Hidden Costs</h4>
                                            <p className="text-sm text-purple-800">Transparent pricing. No surprise taxes or "service fees" on arrival.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DestinationBuckets
                    title="World's Best Destinations for You"
                    description="Curated international experiences for travelers from Chhattisgarh."
                    destinations={highDemandRoutes}
                />

                <WhyTravelSection city="Bhilai" />

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="International Travel FAQs from Bhilai"
                    description="Answers to common questions about travelling abroad from Bhilai & Raipur."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default InternationalToursFromBhilai;
