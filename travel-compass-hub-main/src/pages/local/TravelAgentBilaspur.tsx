import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import FAQsSection from '@/components/FAQsSection';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Clock, FileCheck, CheckCircle, Sun, Shield, Mountain } from 'lucide-react';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CustomerGallery from '@/components/CustomerGallery';
import TrustBadges from '@/components/TrustBadges';
import LocalCoverage from '@/components/LocalCoverage';

const TravelAgentBilaspur = () => {
    // LocalBusiness Schema - Optimized for Bilaspur
    const faqs = [
    {
      question: "How do I verify a travel agency before booking from Bilaspur?",
      answer: "Bilaspur travelers often need reliable connections to Raipur airport or Durg junction. A trusted agency should manage these transit logistics alongside your main tour. Rudraksh Safar, based in central Chhattisgarh, provides comprehensive itineraries covering these connections, backed by official GST billing (GST: 22AGBPC7350G1ZZ) and transparent pricing."
    },
        {
            question: "How do I start an international trip from Bilaspur?",
            answer: "Bilasa Devi Kevat Airport has limited connectivity, so we optimize your itinerary by arranging comfortable cab transfers from Bilaspur directly to Raipur Airport (RPR) for your international flight."
        },
        {
            question: "Are there direct trains to Kashmir from Bilaspur?",
            answer: "Yes, Bilaspur Junction (BSP) offers excellent connectivity. We highly recommend boarding the Durg - MCTM Udhampur SF Express (20847) which halts at Bilaspur, acting as a gateway route toward Jammu & Kashmir."
        },
        {
            question: "Do you serve specific areas in Bilaspur?",
            answer: "We proudly serve clients across Vyapar Vihar, Rajkishore Nagar, Sarkanda, and all major residential areas in Bilaspur."
        },
        {
            question: "What makes Bilaspur departures unique?",
            answer: "Because Bilaspur is a railway stronghold but lacks major airport infrastructure, our packages are heavily curated around train schedules for domestic routes. For places like Goa or Kerala, we blend SECR train departures with premium local stays."
        },
        {
            question: "Do you offer honeymoon packages for couples in Bilaspur?",
            answer: "Absolutely! We design romantic getaways starting from your doorstep in Bilaspur. Whether it's a serene houseboat stay in Kerala or a snowy retreat in Manali, we ensure ultimate privacy and luxury."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://rudrakshsafar.com/#travelagency",
        "name": "Rudraksh Safar",
        "image": "https://rudrakshsafar.com/logo.png",
        "telephone": "+919203650311",
        "email": "rudrakshsafar@gmail.com",
                        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
            "addressLocality": "Durg",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "url": "https://rudrakshsafar.com/travel-agent-bilaspur",
                "areaServed": [
            { "@type": "AdministrativeArea", "name": "Bhilai" },
            { "@type": "AdministrativeArea", "name": "Raipur" },
            { "@type": "AdministrativeArea", "name": "Durg" },
            { "@type": "AdministrativeArea", "name": "Bilaspur" },
            { "@type": "Place", "name": "Naya Raipur" },
            { "@type": "Place", "name": "Supela" },
            { "@type": "Place", "name": "Durg-Bhilai" }
        ],
        "knowsAbout": [
            "Train tours from SECR HQ",
            "International Holiday Packages via Raipur",
            "Visa Assistance",
            "Kashmir Tour Packages"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const services = [
        { icon: <Mountain className="w-10 h-10 text-primary mx-auto" />, title: "J&K Gateway Tours", desc: "Board the Udhampur SF Express (20847) from Bilaspur for onward travel to Kashmir.", link: "/package/kashmir" },
        { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "International Flights", desc: "AC Cab transfers from Bilaspur to Swami Vivekananda Airport for global departures.", link: "/flight-booking-bhilai" },
        { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Visa Processing", desc: "We manage all paperwork for Bilaspur residents traveling abroad.", link: "/visa-agent-bhilai" },
        { icon: <Clock className="w-10 h-10 text-primary mx-auto" />, title: "Train Tickets", desc: "Expert booking from SECR HQ - Bilaspur Junction (BSP).", link: "/train-booking-bhilai" },
        { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Holiday Deals", desc: "Goa, Kerala, and Rajasthan packages tailored for you.", link: "/domestic-tours" },
        { icon: <Shield className="w-10 h-10 text-primary mx-auto" />, title: "Secure Travel", desc: "Comprehensive insurance and 24/7 support during your trip.", link: "/travel-safety" },
    ];

    

    return (
        <>
            <Helmet>
                <title>Top Travel Agency serving Bilaspur | Tour Packages & Visas</title>
                <meta name="description" content="Rudraksh Safar offers expertly crafted tour packages, visa services, and seamless airport transfers for residents of Bilaspur, Vyapar Vihar, and Sarkanda." />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bilaspur" />
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bilaspur"
                    title="Expert Travel Planning for Bilaspur"
                    subtitle="Seamless Domestic & International Tours from the Heart of SECR"
                    bgImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
                />

                <TrustBadges />

                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6">Why Choose Us for Your Bilaspur Departures?</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Booking a trip from Bilaspur requires specialized local knowledge. As the SECR Zonal Headquarters, 
                                <strong> Bilaspur Junction (BSP)</strong> offers incredible train routes which we leverage for our domestic packages, 
                                like the Udhampur SF Express serving as a gateway toward Jammu & Kashmir. For international trips, we bridge the gap by arranging AC cab transfers 
                                from your home in Vyapar Vihar or Rajkishore Nagar directly to Raipur Airport.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Known locally as the "City of Festivals" and a major commercial hub of Chhattisgarh, Bilaspur's residents deserve travel solutions that match their dynamic lifestyle. We eliminate the stress of coordinating multiple transport modes. Whether you're planning a luxurious honeymoon in the Maldives, a family pilgrimage to Chardham, or a corporate retreat to Dubai, our Bilaspur-focused team ensures that your journey begins the moment you step out of your door in Sarkanda or Civil Lines. We handle the intricacies of flight connections, visa processing, and secure hotel bookings so you can focus entirely on enjoying your well-deserved holiday.
                            </p>
                        </div>
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

                <FAQsSection
                    faqs={faqs}
                    title="Frequently Asked Questions by Bilaspur Travelers"
                    description="Clear answers regarding routes, logistics, and local services."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TravelAgentBilaspur;
