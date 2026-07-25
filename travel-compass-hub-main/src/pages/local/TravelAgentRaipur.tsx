import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, Users, Shield, Award, MessageCircle, FileCheck, Plane, ArrowRight, Sun, Snowflake, Mountain, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CustomerGallery from '@/components/CustomerGallery';
import TrustBadges from '@/components/TrustBadges';
import LocalCoverage from '@/components/LocalCoverage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';

const TravelAgentRaipur = () => {
    // LocalBusiness Schema - Optimized for Raipur
    const faqs = [
    {
      question: "How do I verify a travel agency before booking from Raipur?",
      answer: "Instead of relying on faceless online portals, Raipur residents can verify an agency through their GST registration (ours is 22AGBPC7350G1ZZ) and transparent pricing. Located a short drive down the highway in Bhilai, our team provides seamless coordination, including logistics for flights departing from Swami Vivekananda Airport."
    },
        {
            question: "Is there a direct flight from Raipur to Goa?",
            answer: "Yes, Swami Vivekananda Airport (RPR) offers direct flights to Goa (GOX). We can bundle these flights into a seamless 4-day Goa package starting right from Raipur."
        },
        {
            question: "How do I get my passport quickly in Raipur?",
            answer: "The PSK (Passport Seva Kendra) is located in Raipur. We assist with Tatkaal appointments and complete document verification to ensure no delays in your application."
        },
        {
            question: "Which international destinations have easy connectivity from Raipur?",
            answer: "Dubai and Thailand are extremely popular because connecting flights via Delhi or Mumbai from RPR have short layovers. We provide complete Visa and Forex support locally."
        },
        {
            question: "Do you arrange corporate tours near Raipur?",
            answer: "Yes, we handle large corporate groups for offsites. We arrange luxury AC coaches from Raipur to destinations like Kanha, Chitrakote, or direct flights to domestic hill stations."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://rudrakshsafar.com/#travelagency",
        "name": "Rudraksh Safar",
        "url": "https://rudrakshsafar.com/travel-agent-raipur",
        "telephone": "+91-9203650311",
        "email": "rudrakshsafar@gmail.com",
        "priceRange": "₹₹",
        "image": "https://rudrakshsafar.com/og-image.png",
                        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
            "addressLocality": "Durg",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
                "areaServed": [
            { "@type": "AdministrativeArea", "name": "Bhilai" },
            { "@type": "AdministrativeArea", "name": "Raipur" },
            { "@type": "AdministrativeArea", "name": "Durg" },
            { "@type": "AdministrativeArea", "name": "Bilaspur" },
            { "@type": "Place", "name": "Naya Raipur" },
            { "@type": "Place", "name": "Supela" },
            { "@type": "Place", "name": "Durg-Bhilai" }
        ],
        "sameAs": [
            "https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/",
            "https://www.instagram.com/rudrakshsafar",
            "https://www.youtube.com/@RudrakshSafar"
        ],
        "knowsAbout": [
            "Domestic Tour Packages",
            "International Holiday Packages",
            "Customized Tour Packages",
            "Honeymoon Tour Packages",
            "Family Vacation Planning",
            "Group Tour Management",
            "Luxury Holiday Planning",
            "Budget-Friendly Tour Planning",
            "Goa Tour Packages",
            "Manali Tour Packages",
            "Kerala Tour Packages",
            "Munnar Tour Packages",
            "Kashmir Tour Packages",
            "North East India Tour Packages",
            "Rajasthan Tour Packages",
            "Pilgrimage Tours and Yatra Planning",
            "Chardham Yatra Packages",
            "Vaishno Devi Yatra",
            "Religious and Spiritual Tours",
            "Thailand Tour Packages",
            "Dubai Tour Packages",
            "Singapore Tour Packages",
            "Malaysia Tour Packages",
            "Bali Tour Packages",
            "International Group Tours",
            "Flight Ticket Booking Assistance",
            "Train Ticket Booking Assistance",
            "Bus Ticket Booking Assistance",
            "Hotel Reservations",
            "Cruise Holiday Planning",
            "Cab Booking and Taxi Arrangements",
            "Airport Transfers",
            "Outstation Travel Arrangements",
            "Passport Application Assistance",
            "Visa Assistance and Documentation",
            "Travel Insurance Assistance"
        ],
        /* REMOVED DUP */
    };

    // FAQ Schema handled by FAQsSection component



    const services = [
        { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Domestic Escapes", desc: "Customized itineraries for Kashmir, Goa, and Kerala starting directly from Swami Vivekananda Airport (RPR).", link: "/domestic-packages" },
        { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "International Holidays", desc: "Seamless Dubai, Thailand & Singapore trips including direct connecting flights from Raipur.", link: "/international-packages" },
        { icon: <Users className="w-10 h-10 text-primary mx-auto" />, title: "Corporate & MICE Tours", desc: "Specialized offsite planning for companies based in Naya Raipur, Urla, and Siltara Industrial estates.", link: "/group-tour-packages" },
        { icon: <CheckCircle className="w-10 h-10 text-primary mx-auto" />, title: "Visa Processing", desc: "Expert Schengen, US, UK, and Dubai tourist visa filing for Raipur residents.", link: "/travel-services/visa-assistance" },
        { icon: <Award className="w-10 h-10 text-primary mx-auto" />, title: "Premium Honeymoons", desc: "Luxury resorts and romantic getaways carefully curated for newlyweds from Chhattisgarh's capital.", link: "/honeymoon-packages" },
        { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Passport Assistance", desc: "Tatkaal and fresh passport application support for applicants at PSK Raipur.", link: "/travel-services/passport-assistance" },
    ];

    const popularRoutes = [
        { name: "Raipur to Goa", type: "Domestic", price: "Starts ₹12,999", icon: Palmtree, desc: "Direct flights from RPR available.", link: "/domestic-packages" },
        { name: "Raipur to Kashmir", type: "Domestic", price: "Starts ₹18,999", icon: Snowflake, desc: "Srinagar, Gulmarg & Pahalgam.", link: "/domestic-packages" },
        { name: "Raipur to Dubai", type: "International", price: "Starts ₹35,999", icon: Plane, desc: "Includes Visa, Stay & Desert Safari.", link: "/visa/dubai" },
        { name: "Raipur to Thailand", type: "International", price: "Starts ₹24,999", icon: Plane, desc: "Bangkok & Pattaya with Coral Island.", link: "/visa/thailand" },
        { name: "Raipur to Manali", type: "Domestic", price: "Starts ₹9,999", icon: Mountain, desc: "Volvo packages available.", link: "/domestic-packages" },
        { name: "Raipur to Bali", type: "International", price: "Starts ₹45,999", icon: Palmtree, desc: "Experience Island Life & Culture.", link: "/visa/bali" },
    ];

    const whyChooseUs = [
        { icon: Users, title: "Capital City Expertise", desc: "We handle high-volume bookings for families and businesses across Raipur, Naya Raipur, and Birgaon with 10+ years of proven trust." },
        { icon: Plane, title: "Airport Logistics Handled", desc: "Complimentary airport transfers from your home in Raipur to Swami Vivekananda Airport for premium packages." },
        { icon: Award, title: "Direct Flight Advantage", desc: "We optimize your itinerary around direct flights from RPR to Delhi, Mumbai, and Kolkata to minimize layovers." },
        { icon: Clock, title: "24/7 Concierge Support", desc: "Dedicated local support staff available round the clock during your entire journey." },
    ];

    

    return (
        <>
            <Helmet>
                <title>Best Travel Agent in Raipur | Rudraksh Safar - Tour Packages</title>
                <meta name="description" content="Looking for the best travel agent in Raipur? Rudraksh Safar offers domestic & international tour packages, visa assistance, and flight bookings from Raipur." />
                <meta name="keywords" content="travel agent in raipur, tour packages from raipur, travel agency raipur, international tours from raipur, raipur to goa package" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-raipur" />
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="flex justify-center mb-6">
                                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Travel Agent Raipur', path: '/travel-agent-raipur' }]} />
                                </div>
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-200">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">Trusted by Travelers in Raipur & <Link to="/travel-agent-bhilai" className="hover:underline">Bhilai</Link></span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                                    Raipur's Most Trusted <span className="text-primary">Travel Agency</span>
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                                    Your gateway to global exploration. We specialize in curating premium family vacations, international holidays, and corporate MICE tours directly from <strong>Swami Vivekananda Airport (RPR)</strong> and Raipur Junction.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" asChild className="text-lg px-8 h-12 shadow-md hover:shadow-lg transition-all">
                                        <a href="https://wa.me/919203650311?text=Hi, I am from Raipur and need travel assistance" target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            Chat on WhatsApp
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12">
                                        <a href={`tel:+919203650311`}>Call Expert: 92036 50311</a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Google Map Section */}
                <section className="py-12 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <GoogleMapEmbed lazyLoad={true} />
                            <CustomerGallery className="mt-8" />
                        </div>
                    </div>
                </section>

                {/* Local Trust Block */}
                <section className="py-12 bg-muted/20 border-y">
                    <div className="container mx-auto px-4 mb-4">
                        <LastUpdated className="justify-center" />
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
                            <div className="p-4">
                                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-lg">Office in Twin City</h3>
                                <p className="text-sm text-muted-foreground">Just a short drive away in <Link to="/travel-agent-bhilai" className="text-primary hover:underline">Bhilai</Link>. We offer home visits in Raipur for large bookings.</p>
                            </div>
                            <div className="p-4">
                                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-lg">10+ Years Experience</h3>
                                <p className="text-sm text-muted-foreground">Decades of expertise in crafting perfect itineraries for Chhattisgarh families.</p>
                            </div>
                            <div className="p-4">
                                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-lg">Local Support</h3>
                                <p className="text-sm text-muted-foreground">We understand the food and travel preferences of people from our region.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Services in Raipur</h2>
                            <p className="text-muted-foreground">Complete travel solutions for every need.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <Link key={index} to={service.link}>
                                    <Card className="hover:shadow-lg transition-all cursor-pointer h-full border-muted">
                                        <CardContent className="p-6 text-center flex flex-col items-center h-full">
                                            <div className="mb-4 p-3 bg-primary/10 rounded-full">{service.icon}</div>
                                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                            <p className="text-muted-foreground text-sm">{service.desc}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Routes */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Trending Packages from Raipur</h2>
                            <p className="text-muted-foreground">Most loved destinations by travelers from Swami Vivekananda Airport.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {popularRoutes.map((route, index) => (
                                <Card key={index} className="group hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                <route.icon className="w-6 h-6" />
                                            </div>
                                            <Badge variant="outline">{route.type}</Badge>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{route.desc}</p>
                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <span className="font-bold text-primary">{route.price}</span>
                                            <Button variant="ghost" size="sm" className="gap-1" asChild>
                                                <Link to={route.link}>Check <ArrowRight className="w-4 h-4" /></Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyChooseUs.map((item, index) => (
                                <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm border">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection faqs={faqs} title="Frequently Asked Questions" />

                {/* CTA */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Plan Your Dream Trip from Raipur Today!</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Get the best deals and personalized itineraries. Connect with Raipur's trusted travel experts.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                            <a href="https://wa.me/919203650311?text=I want to plan a trip from Raipur">
                                <MessageCircle className="w-5 h-5 mr-2" /> Get Free Quote
                            </a>
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TravelAgentRaipur;
