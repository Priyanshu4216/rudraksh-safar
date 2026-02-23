import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import LocationHero from '../../../components/LocationHero';
import WhyTravelSection from '../../../components/WhyTravelSection';
import DestinationBuckets, { Destination } from '../../../components/DestinationBuckets';
import LogisticsSection from '../../../components/LogisticsSection';
import FAQsSection from '../../../components/FAQsSection';
import LocationPageLoader from '../../../components/LocationPageLoader';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Plane, Building2, Map, Coffee, FileText, ArrowRight } from 'lucide-react';
import BudgetEstimator from '../../../components/BudgetEstimator';
import TravelReality from '../../../components/TravelReality';
import DosAndDonts from '../../../components/DosAndDonts';

const SingaporeTourPackageFromBhilai = () => {




    const destinations: Destination[] = [
        { name: "Sentosa Island", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800", price: "Universal Studios Included", duration: "1 Day", link: "#", rating: "4.9" },
        { name: "Marina Bay", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "City Tour", duration: "Half Day", link: "#", rating: "4.8" },
        { name: "Gardens by Bay", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800", price: "Cloud Forest Included", duration: "Half Day", link: "#", rating: "4.9" },
        { name: "Cruise", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800", price: "Genting/Royal Caribbean", duration: "2N/3D", link: "/travel-services/cruise-booking", rating: "4.7" },
    ];

    const bestTimeData = [
        { destination: "Singapore", months: "Feb – Apr" },
        { destination: "Shopping Festival", months: "Jun – Aug" },
    ];

    const faqs = [
        {
            question: "How do we fly to Singapore from Bhilai?",
            answer: <span>We book your flights from <strong>Raipur (RPR) to Singapore (SIN)</strong>. The most common route is via Kolkata (IndiGo) or Hyderabad. Total travel time is approx 8-10 hours including layover.</span>,
            answerText: "We book your flights from Raipur (RPR) to Singapore (SIN). The most common route is via Kolkata (IndiGo) or Hyderabad. Total travel time is approx 8-10 hours including layover."
        },
        {
            question: "Do you help with Singapore Visa?",
            answer: <span>Yes! Singapore requires a pre-approved Visa (eVisa/Sticker). We are a professional <Link to="/visa-agent-bhilai" className="text-primary hover:underline">Visa Agent in Bhilai</Link>. You just need to submit your documents at our Bhilai office, and we handle the rest.</span>,
            answerText: "Yes! Singapore requires a pre-approved Visa (eVisa/Sticker). We are a professional Visa Agent in Bhilai. You just need to submit your documents at our Bhilai office, and we handle the rest."
        },
        {
            question: "Is Singapore good for a honeymoon?",
            answer: "It's excellent. We have special 'Romantic Singapore' packages that include a private dinner on the Singapore Flyer, a river cruise, and a stay at Sentosa Island resorts.",
            answerText: "It's excellent. We have special 'Romantic Singapore' packages that include a private dinner on the Singapore Flyer, a river cruise, and a stay at Sentosa Island resorts."
        },
        {
            question: "Can we combine Singapore with Malaysia or Bali?",
            answer: "Yes, the most popular combo is Singapore + Malaysia (via bus) or Singapore + Bali (via flight). A 7N/8D trip is perfect for covering two countries.",
            answerText: "Yes, the most popular combo is Singapore + Malaysia (via bus) or Singapore + Bali (via flight). A 7N/8D trip is perfect for covering two countries."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Singapore Tour Package from Bhilai",
        "description": "Best Singapore tour packages from Bhilai & Raipur. Includes Visa, Flights, Universal Studios & Sentosa. 5N/6D starting @ ₹55,000.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "areaServed": ["Bhilai", "Durg", "Raipur"]
        },
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Arrival in Singapore",
                    "description": "Flight from Raipur. Transfer to Hotel. Night Safari."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "City Tour",
                    "description": "Merlion Park, Chinatown, Little India, Marina Bay Sands."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Sentosa Island",
                    "description": "Cable Car ride, S.E.A. Aquarium, Wings of Time show."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Universal Studios",
                    "description": "Full day at Universal Studios Singapore."
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Singapore Tour Packages from Bhilai | Visa & Flights Included</title>
                <meta name="description" content="Book Singapore holiday packages from Bhilai. Complete assistance with Singapore Visa, Flights from Raipur, and Currency Exchange. Best rates for families & couples." />
                <meta name="keywords" content="singapore tour package from bhilai, singapore visa agent bhilai, singapore trip cost from raipur, singapore malaysia tour from bhilai, rudraksh safar singapore" />
                <link rel="canonical" href="https://rudrakshsafar.com/international-tours/singapore-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Singapore Tour Packages from Bhilai"
                    subtitle="The Lion City awaits. Universal Studios, Sentosa & Shoppers' Paradise."
                    bgImage="https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'International Tours', path: '/international-tours' }, { label: 'Singapore', path: '/international-tours/singapore' }]} />
                        <div className="mt-4">
                            <Link to="/international-tours/singapore" className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Singapore Guide
                            </Link>
                        </div>
                    </div>
                </LocationHero>

                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="flex flex-col gap-6">
                        <div className="bg-card/95 backdrop-blur-sm border shadow-lg rounded-xl p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <Plane className="w-5 h-5 text-primary" />
                                        Flight Connectivity
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Raipur &rarr; Singapore</strong><br />
                                        Via Kolkata (CCU) or Hyderabad (HYD).<br />
                                        Seamless baggage check-in.
                                    </p>
                                </div>
                                <div className="space-y-2 border-l pl-6 hidden md:block">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-primary" />
                                        Visa Assistance
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        We handle your Singapore Visa.<br />
                                        Submit docs at our Bhilai/Durg office.
                                    </p>
                                </div>
                                <div className="text-center md:text-right">
                                    <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-bold text-sm mb-2">
                                        All Inclusive
                                    </div>
                                    <p className="text-3xl font-bold text-foreground">₹55,000<span className="text-base font-normal text-muted-foreground">/person</span></p>
                                    <p className="text-xs text-muted-foreground mb-3">Hotel 3* + Breakfast + Visa + Tours</p>
                                    <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto">
                                        Get Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <WhyTravelSection city="Bhilai" />

                <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-serif mb-2">Singapore Trip Budget</h2>
                            <p className="text-muted-foreground">Estimated cost for a 5-Day Singapore Family Trip</p>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
                            <BudgetEstimator
                                destination="Singapore"
                                duration="4 Nights / 5 Days"
                                total="₹55,000 – ₹70,000"
                                costs={[
                                    { category: "Flights (Raipur Return)", cost: "₹20,000 – ₹25,000", icon: Plane },
                                    { category: "Hotel (3 Star)", cost: "₹20,000 – ₹25,000", icon: Building2 },
                                    { category: "Attraction Tickets", cost: "₹10,000 – ₹15,000", icon: Map },
                                    { category: "Visa & Insurance", cost: "₹3,500", icon: FileText }
                                ]}
                                note="Price per person. Shopping & Lunch/Dinner extra."
                            />
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-12 mb-12">
                    <TravelReality
                        title="Travel Reality: Singapore from Chhattisgarh"
                        items={[
                            { type: 'positive', text: "Singapore is incredibly clean and safe. Perfect for first-time international travelers." },
                            { type: 'negative', text: "Strict laws! No chewing gum, no littering. Electronic cigarettes are banned." },
                            { type: 'neutral', text: "Food can be expensive. We recommend hawker centers for authentic, cheap meals." },
                            { type: 'positive', text: "Public transport (MRT) is amazing. You don't need cabs." }
                        ]}
                    />
                </div>

                <DestinationBuckets
                    title="Must-Visit Singapore Attractions"
                    description="From futuristic gardens to island fun."
                    destinations={destinations}
                />

                <div className="container mx-auto px-4 bg-white dark:bg-background pt-12">
                    <DosAndDonts
                        title="Singapore Travel Tips"
                        pros={[
                            "Carry a refillable water bottle (tap water is safe).",
                            "Get an EZ-Link card for MRT/Bus travel.",
                            "Visit Gardens by the Bay in the evening for the light show.",
                            "Carry an umbrella; it rains unpredictably."
                        ]}
                        cons={[
                            "Don't eat or drink on the MRT trains (Fine $500).",
                            "Don't carry chewing gum into the country.",
                            "Don't tip at restaurants (10% service charge is included).",
                            "Don't rely on taxis during peak hours (expensive)."
                        ]}
                    />
                </div>

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="Singapore Tour FAQs"
                    description="Questions about Visa, Currency & Flights."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default SingaporeTourPackageFromBhilai;
