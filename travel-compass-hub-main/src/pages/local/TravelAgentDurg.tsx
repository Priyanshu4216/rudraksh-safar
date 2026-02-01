import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Clock, FileCheck, CheckCircle, Sun, Shield, Users, Award, Palmtree, Snowflake, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelAgentDurg = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    // Local Business Schema for Durg
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar",
        "image": "https://rudrakshsafar.com/logo.png",
        "telephone": "+919406182174",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Durg",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Su 10:00-21:00",
        "url": "https://rudrakshsafar.com/travel-agent-durg"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is the best travel agency in Durg?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rudraksh Safar is widely trusted in Durg for providing reliable tour packages, visa services, and flight bookings. We offer doorstep assistance to our Durg clients and personalized travel planning."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book international tour packages from Durg?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in international packages from Durg to Dubai, Thailand, Singapore, and Europe. We handle the entire visa process and flight bookings from Raipur airport."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide home service in Durg?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for our clients in Durg, we can arrange a home visit or a consultation at a cafe to discuss trip plans, collect documents, and handle payments securely."
                }
            }
        ]
    };

    const services = [
        { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "Flight Booking", desc: "Best flight rates from Raipur to anywhere. Better deals than online apps.", link: "/flight-booking-bhilai" },
        { icon: <Clock className="w-10 h-10 text-primary mx-auto" />, title: "Train Tickets", desc: "Confirmed Tatkal tickets from Durg Junction. No waiting list tension.", link: "/train-booking-bhilai" },
        { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Passport Consultant", desc: "Expert help for fresh passports and renewals for Durg residents.", link: "/passport-agent-bhilai" },
        { icon: <CheckCircle className="w-10 h-10 text-primary mx-auto" />, title: "Visa Services", desc: "High success rate tourist visas for Durg families looking to travel abroad.", link: "/visa-agent-bhilai" },
        { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Holiday Packages", desc: "Customized domestic and international tours starting from Durg.", link: "/tour-packages-bhilai" },
        { icon: <Shield className="w-10 h-10 text-primary mx-auto" />, title: "Travel Insurance", desc: "Comprehensive travel insurance to keep your family safe during trips.", link: "/travel-safety" },
    ];

    const faqs = [
        {
            question: "Who is the best travel agency in Durg?",
            answer: "Rudraksh Safar is highly recommended in Durg for our transparent services, 24/7 support, and affordable tour packages. We bridge the gap between Durg and world-class travel experiences."
        },
        {
            question: "Are there tour packages available from Durg?",
            answer: "Yes, we have dedicated tour packages starting from Durg. Whether it's a train trip to Goa or a flight to Thailand from Raipur, we manage the complete logistics from your doorstep in Durg."
        },
        {
            question: "Do you help with Train tickets from Durg Junction?",
            answer: "Absolutely. Durg Junction is a major hub, and we assist with confirmed train reservations, Tatkal bookings, and group bookings for tours originating from Durg."
        },
        {
            question: "Can I book a honeymoon package from Durg?",
            answer: "Yes, we curate special honeymoon packages for couples from Durg. From flower-bed decorations to private candle-light dinners, we ensure your trip is romantic and hassle-free."
        },
        {
            question: "Is it safe to book with a travel agent in Durg?",
            answer: "Booking with a local registered agent like Rudraksh Safar is safer than anonymous online sites. We are accountable, accessible, and available in person to solve any travel issues."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Best Travel Agency in Durg | Tour Packages from Durg | Rudraksh Safar</title>
                <meta name="description" content="Searching for a trusted travel agent in Durg? Rudraksh Safar offers best tour packages, flight tickets, and visa services. Visit us for customized travel plans from Durg." />
                <meta name="keywords" content="travel agency in Durg, travel agent in Durg, tour packages from Durg, tour and travels Durg, passport agent in Durg, flight booking agent Durg, best travel agency near Durg" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-durg" />

                <meta property="og:title" content="Best Travel Agency in Durg | Trusted Services" />
                <meta property="og:description" content="Rudraksh Safar brings world-class travel services to Durg. Book tours, flights, and visas with your trusted local expert." />
                <meta property="og:url" content="https://rudrakshsafar.com/travel-agent-durg" />

                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Durg"
                    title="Best Travel Agency in Durg"
                    subtitle="Your Gateway to the World. Trusted by Families in Durg."
                    bgImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
                />

                <WhyTravelSection city="Durg" />

                {/* Services Grid */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services in Durg</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                                    <CardContent className="p-6 text-center">
                                        <div className="mb-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground mb-4">{service.desc}</p>
                                        <Link to={service.link} className="text-primary font-semibold hover:underline">
                                            Learn More &rarr;
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Trust */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Why Durg Trusts Rudraksh Safar?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We aren't just a website; we are your neighbors. We understand the specific travel needs of families in Durg-Bhilai.
                            From catching the train at Durg Junction to finding the best connecting flights from Raipur, we plan it all seamlessly.
                        </p>
                    </div>
                </section>

                <FAQsSection
                    faqs={faqs}
                    title="FAQs for Durg Travelers"
                    description="Common questions from our clients in Durg."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TravelAgentDurg;
