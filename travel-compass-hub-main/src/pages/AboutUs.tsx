import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, Heart, Phone, CheckCircle, Globe, Smile, ShieldCheck, Clock, Building, Navigation, Plane, Target, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQSection from '@/components/seo/FAQSection';

const faqs = [
    {
        question: "Is Rudraksh Safar a registered travel agency?",
        answer: "Yes, Rudraksh Safar is a fully registered and certified travel agency headquartered in Bhilai, Chhattisgarh. Operating since 2010, we hold all local administrative licenses for tour operations and are recognized by major domestic and international Destination Management Companies (DMCs)."
    },
    {
        question: "Where is the Rudraksh Safar office located?",
        answer: "Our primary physical office is located centrally in Bhilai, Chhattisgarh. We encourage clients to visit us for personalized, face-to-face travel planning. Meeting with a dedicated travel expert significantly reduces the risk of online booking frauds and ensures absolute transparency in pricing."
    },
    {
        question: "Do you specialize in both domestic and international tours?",
        answer: "Yes, we specialize in comprehensive trip planning for both sectors. Domestically, our expertise lies in Andaman packages, Kashmir tours, and Kerala backwaters. Internationally, we are heavily focused on Southeast Asia, acting as a B2B supplier for Thailand, Maldives, Bali, and Dubai."
    },
    {
        question: "What is your policy on hidden charges or extra fees?",
        answer: "We adhere strictly to a zero-hidden-costs policy. All our quotes clearly itemize taxes (like GST and TCS), visa fees, extra bed charges, and transfer costs. The price we confirm before your booking is the final price you pay, eliminating unpleasant surprises during your trip."
    },
    {
        question: "Can I customize a standard tour package?",
        answer: "Absolutely. Over 85% of our bookings are tailor-made. Whether you wish to upgrade to an ocean-view water villa in the Maldives, add a private yacht tour in Dubai, or include an ethical elephant sanctuary visit in your Thailand package, our experts design the itinerary around your specific requests."
    },
    {
        question: "How do you handle trip emergencies or flight delays?",
        answer: "We provide dedicated 24/7 on-ground assistance via WhatsApp and direct calling. In the event of flight delays, driver miscommunications, or medical emergencies, our operations team coordinates directly with local suppliers across time zones to resolve issues immediately."
    },
    {
        question: "Do you offer services for B2B travel agents?",
        answer: "Yes, through our dedicated B2B division, we serve as a trusted wholesale supplier and DMC for Thailand, Dubai, and Maldives. We offer white-label services, absolute agent protection, and highly competitive net rates to partner travel agencies across India."
    }
];

const AboutUs = () => {
    const stats = [
        { label: "Years Experience", value: "14+", icon: Award },
        { label: "Happy Travellers", value: "15,000+", icon: Smile },
        { label: "B2B Partners", value: "300+", icon: Globe },
        { label: "On-Trip Support", value: "24/7", icon: Phone }
    ];

    const values = [
        {
            title: "Verifiable Trust & Transparency",
            desc: "In an industry plagued by hidden costs, we itemize every charge. From TCS on international packages to local city taxes, you will know exactly what you are paying for.",
            icon: ShieldCheck
        },
        {
            title: "First-Hand Travel Expertise",
            desc: "We don't sell brochures; we sell experiences we have verified. Our destination experts actively travel, inspect hotel hygiene, and test transport reliability before recommending them.",
            icon: Target
        },
        {
            title: "Radical Empathy in Operations",
            desc: "If your flight is delayed at 2 AM, our operations team is awake with you. We treat your hard-earned vacation time with the supreme respect and urgency it deserves.",
            icon: Heart
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Rudraksh Safar | Trusted Travel Agency in Bhilai, Chhattisgarh</title>
                <meta name="description" content="Discover Rudraksh Safar's legacy. Since 2010, we've been Bhilai's verified travel experts, creating tailored tours and robust B2B partnerships with zero hidden costs." />
                <meta name="keywords" content="about Rudraksh Safar, travel agency bhilai, tour operator durg, travel agent chhattisgarh, best travel company, registered travel agent" />
                <link rel="canonical" href="https://rudrakshsafar.com/about-rudraksh-safar" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "TravelAgency",
                            "@id": "https://rudrakshsafar.com/#organization",
                            "name": "Rudraksh Safar",
                            "alternateName": "Rudraksh Safar Travels",
                            "legalName": "Rudraksh Safar",
                            "foundingDate": "2010-01-01",
                            "foundingLocation": {
                                "@type": "Place",
                                "name": "Bhilai, Chhattisgarh, India"
                            },
                            "description": "Bhilai's most trusted travel agency and tour operator since 2010. Offering premium domestic packages, international escapes, and comprehensive B2B DMC services.",
                            "url": "https://rudrakshsafar.com",
                            "logo": "https://rudrakshsafar.com/logo.png",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Bhilai",
                                "addressRegion": "Chhattisgarh",
                                "postalCode": "490023",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-9406182174",
                                "contactType": "customer service",
                                "contactOption": "TollFree",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Hindi"]
                            },
                            "sameAs": [
                                "https://www.facebook.com/rudrakshsafar",
                                "https://www.instagram.com/rudrakshsafar"
                            ],
                            "knowsAbout": ["Travel Planning", "International Tourism", "Destination Management", "B2B Travel Operations", "Visa Assistance"]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-medium text-sm">
                                <Award className="w-4 h-4" />
                                <span>Established in 2010 • Chhattisgarh's Trusted Travel Partner</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-foreground tracking-tight leading-tight">
                                Crafting Journeys With <br className="hidden md:block" />
                                <span className="text-primary relative inline-block">
                                    Trust & Transparency
                                    <svg className="absolute -bottom-2 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
                                </span>
                            </h1>
                            <div className="flex justify-center mb-6">
                                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/about-rudraksh-safar' }]} />
                            </div>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                We are not just an algorithmic booking engine. We are your neighbors, your dedicated travel designers, and your physical point of contact acting as your safety net across the globe.
                            </p>
                            <div className="flex justify-center">
                                <LastUpdated />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Deep Dive: Table of Contents */}
                <section className="py-12 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-sm p-6 lg:p-8">
                            <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-foreground">
                                <Navigation className="w-5 h-5 text-primary" />
                                Executive Overview
                            </h2>
                            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground font-medium">
                                <li>
                                    <a href="#our-story" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        Our Story & Foundation (2010–Present)
                                    </a>
                                </li>
                                <li>
                                    <a href="#travel-expertise" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        Demonstrated Travel Expertise
                                    </a>
                                </li>
                                <li>
                                    <a href="#operational-network" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        Global Operational Network & B2B
                                    </a>
                                </li>
                                <li>
                                    <a href="#trust-signals" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        Core Values & Trust Factors
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 1: Our Story / Company History */}
                <section id="our-story" className="py-20 scroll-mt-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
                            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">The Rudraksh Safar Genesis</h2>

                                <p>
                                    Founded in 2010, Rudraksh Safar emerged from a critical gap in the regional travel market. Travelers in <strong>Bhilai</strong>, <strong>Durg</strong>, and the broader state of Chhattisgarh were increasingly frustrated by faceless online travel portals that provided zero accountability during flight cancellations or hotel disputes.
                                </p>

                                <p>
                                    We established our physical presence to bring the human element back to travel planning. What began as a localized desk handling <Link to="/domestic-tours" className="text-primary hover:underline font-medium">domestic Indian holidays</Link> and ticketing has steadily evolved over 14 years. We matured by listening to our clients, prioritizing safety, and realizing that a successful trip requires meticulous, unseen backend coordination.
                                </p>

                                <p>
                                    Today, we are a full-scale outbound tour operator and a recognized <Link to="/b2b" className="text-primary hover:underline font-medium">B2B DMC</Link> (Destination Management Company). Despite our massive growth and handling over 15,000 itineraries, we maintain our foundational ethos: every client deserves a direct phone line to an expert who genuinely cares about their vacation.
                                </p>
                            </div>
                            <div className="lg:col-span-5 relative">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                    alt="Rudraksh Safar Travel Consultants reviewing itineraries"
                                    className="relative z-10 rounded-2xl shadow-xl object-cover h-[400px] w-full border border-border"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Travel Expertise (E-E-A-T) */}
                <section id="travel-expertise" className="py-20 bg-muted/20 scroll-mt-24 border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">First-Hand Operational Expertise</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
                                True expertise stems from geographical familiarity, not merely reading internet reviews. Our operational strength relies on a philosophy of "verify before recommending."
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                                    <Plane className="w-10 h-10 text-primary mb-5" />
                                    <h3 className="text-xl font-bold mb-3 text-foreground">Rigorous Destination Audits</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our founders and lead consultants routinely execute reconnaissance (recce) trips across our primary sectors. Before marketing <Link to="/international-tours/thailand" className="text-primary hover:underline">Thailand travel packages</Link> or <Link to="/domestic-tours/andaman" className="text-primary hover:underline">Andaman island tours</Link>, we physically inspect resort properties for hygiene, analyze the safety standards of scuba diving operators, and assess local transport comfort.
                                    </p>
                                </div>
                                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                                    <Star className="w-10 h-10 text-primary mb-5" />
                                    <h3 className="text-xl font-bold mb-3 text-foreground">Complex Itinerary Design</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We specialize in overcoming travel friction. Whether securing <Link to="/visa/thailand" className="text-primary hover:underline">Thailand visas</Link> swiftly, coordinating multi-city European rail passes, or arranging specific dietary requirements (like pure Indian vegetarian meals in Bali), our team handles the logistical heavy-lifting so you simply arrive and enjoy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Global Operational Network & B2B */}
                <section id="operational-network" className="py-20 scroll-mt-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="order-2 lg:order-1 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400" alt="Thailand Operations" className="rounded-xl shadow-md h-48 w-full object-cover" />
                                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400" alt="Dubai Operations" className="rounded-xl shadow-md h-48 w-full object-cover mt-8" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-4 rounded-full shadow-2xl">
                                    <Globe className="w-12 h-12 text-primary" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Global Ground Network</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A travel agency is only as robust as its suppliers. Over the past decade, we have bypassed traditional middlemen to sign direct contracting agreements with premium hotel chains globally.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    This direct contracting gives us tremendous negotiating power, which led to the creation of our dedicated B2B division. Today, we are proud to function as a premier <Link to="/b2b/thailand" className="text-primary hover:underline font-bold">B2B DMC for Thailand</Link>. We supply over 300+ independent travel agents across India with white-label transport, verified tour guides, and wholesale hotel tariffs, actively facilitating group MICE tours and bespoke luxury holidays.
                                </p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-foreground font-medium">Direct Hotel Purchasing Power</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-foreground font-medium">Dedicated Transport Fleets in Southeast Asia</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-foreground font-medium"><Link to="/b2b" className="hover:text-primary transition-colors">Trusted by 300+ Travel Partners (B2B Hub)</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Trust Signals & Core Values */}
                <section id="trust-signals" className="py-24 bg-slate-900 text-white scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Travelers Choose Our Local Expertise</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                In an industry saturated with heavy discounting and hidden conditions, we compete on absolute reliability and profound destination knowledge.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {values.map((item, index) => (
                                <Card key={index} className="bg-white/5 border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                                    <CardContent className="p-8 text-center h-full flex flex-col items-center">
                                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner transform rotate-3">
                                            <item.icon className="w-10 h-10 text-primary-400 -rotate-3" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-slate-300 leading-relaxed text-base flex-grow">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Metrics / Stats */}
                <section className="py-16 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                                    <stat.icon className="w-12 h-12 mx-auto text-primary mb-5 opacity-90" />
                                    <div className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3">{stat.value}</div>
                                    <div className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Block with Schema handled by Component */}
                <section id="faqs" className="py-24 bg-background scroll-mt-10">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Operations & Booking FAQs</h2>
                            <p className="text-muted-foreground text-lg">Common questions about how we work, custom itineraries, and financial security.</p>
                        </div>
                        <FAQSection title="" faqs={faqs} />
                    </div>
                </section>

                {/* Commercial / Contact CTA */}
                <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <MapPin className="w-16 h-16 mx-auto mb-6 text-white/90" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Next Adventure</h2>
                        <p className="text-white/90 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                            Skip the confusing online reviews. Visit our office in Bhilai for a transparent, coffee-fueled conversation about your personalized itinerary. No pressure, just honest travel advice.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full shadow-2xl bg-white text-primary hover:bg-slate-100 text-lg h-14 px-8" asChild>
                                <a href="https://wa.me/919406182174?text=Hello,%20I%20would%20like%20to%20visit%20your%20office%20to%20plan%20a%20trip.">
                                    <Phone className="w-5 h-5 mr-3" />
                                    Book an In-Office Appointment
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full shadow-xl bg-primary/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary transition-all text-lg h-14 px-8" asChild>
                                <Link to="/Contact">
                                    View Office Address & Map
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer />
                <FloatingWhatsApp />
            </main>
        </>
    );
};

export default AboutUs;
