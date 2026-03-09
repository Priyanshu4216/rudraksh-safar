import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Bus, Hotel, Users, Shield, BadgeCheck, Phone, CheckCircle, Handshake, LifeBuoy, Map, Clock, Scale, TrendingUp, FileText, Building2, Navigation } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AgentProtection from '@/components/b2b/AgentProtection';
import FAQsSection from '@/components/FAQsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "What is your exact scope as a Thailand DMC?",
        answer: "As a specialized Thailand Destination Management Company (DMC), we provide comprehensive end-to-end ground handling. This includes direct 4-star and 5-star hotel contracting, multi-city transport and airport transfers (private and SIC), and curated excursions across major hubs like Bangkok, Pattaya, Phuket, Koh Samui, and Krabi. We manage the entire backend logistics so you can focus on sales."
    },
    {
        question: "Can you handle both FIT and large Corporate MICE Groups?",
        answer: "Yes, our operational bandwidth covers all scales. We routinely handle individual FIT (Free Independent Traveler) itineraries, bespoke honeymoon packages with special inclusions, and large-scale Corporate MICE (Meetings, Incentives, Conferences, and Exhibitions) groups exceeding 500 passengers. We provide dedicated tour managers for large groups."
    },
    {
        question: "How does the visa assistance work for Indian nationals traveling to Thailand?",
        answer: "We manage complete B2B visa support for Indian passport holders. Depending on current regulations, this includes facilitating e-Visas before departure to avoid long queues on arrival, or assisting with fast-track Visa on Arrival (VoA) services at Suvarnabhumi Airport (BKK) and Phuket International Airport (HKT)."
    },
    {
        question: "Do you own your own transport fleet in Thailand?",
        answer: "We operate through exclusive, long-term partnerships with leading elite transport providers in Thailand. This pseudo-ownership model ensures we have guaranteed inventory of private sedans, luxury minivans (like Toyota Commuters), and 45-seater Volvo coaches at preferential wholesale rates, completely bypassing intermediary markups."
    },
    {
        question: "How do travel agents get quotes and backend support?",
        answer: "Our dedicated B2B sales team, headquartered in Bhilai, provides lightning-fast turnarounds on custom quotes via email and our proprietary WhatsApp support channels. Once a booking is confirmed, your clients receive 24/7 on-ground emergency support from our local Thai coordination team, fully white-labeled under your agency's brand."
    },
    {
        question: "Are your services 100% white-labeled to protect my agency?",
        answer: "Absolutely. We adhere to a strict Agent Protection Policy. All our ground operations, meet-and-greet services at airports, and driver interactions are conducted under a white-label framework. We never solicit or market directly to your clients, ensuring your agency retains total brand loyalty."
    },
    {
        question: "Do you provide pure vegetarian or Jain food options for Indian groups?",
        answer: "Yes, dietary requirements are a core strength of our DMC operations. We have established tie-ups with premium Indian restaurants across Bangkok, Pattaya, and Phuket. We routinely arrange specialized pure vegetarian, Jain, and Halal meals as part of group itineraries or FIT bookings."
    }
];

const B2BThailand = () => {
    const breadcrumbItems = [
        { label: 'B2B Partners', path: '/b2b-travel-partners' },
        { label: 'Thailand DMC', path: '/b2b/thailand' }
    ];

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;
        setMousePosition({ x, y });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-16">
            <Helmet>
                <title>Thailand B2B Travel Supplier & DMC Services | Rudraksh Safar</title>
                <meta name="description" content="Premium B2B Thailand Destination Management Company (DMC). We offer exclusive wholesale rates, 4/5-star hotel tie-ups, reliable transport, and 100% white-label support for travel agents." />
                <link rel="canonical" href="https://rudrakshsafar.com/b2b/thailand" />
                <script type="application/ld+json">
                    {JSON.stringify({
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
                    })}
                </script>
            </Helmet>

            <Navbar />

            <div className="container mx-auto px-4 mt-4 mb-4">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white min-h-[70vh] flex items-center pt-20 pb-24 overflow-hidden" onMouseMove={handleMouseMove}>
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 30 }}
                    className="absolute inset-[-5%] w-[110%] h-[110%] z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1549487593-ad4771638206?q=80&w=2000&auto=format&fit=crop"
                        alt="Thailand B2B DMC Supplier - Grand Palace Bangkok"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* 3D Floating Elements */}
                <motion.div animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/20 blur-[80px] z-10 pointer-events-none" />
                <motion.div animate={{ rotate: -360, y: [0, 30, 0] }} transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-secondary/30 blur-[100px] z-10 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6 font-bold tracking-wide uppercase text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <MapPin className="w-5 h-5" /> Preferred Thailand DMC Connect
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none rounded-md" tabIndex={0}>
                            Your Ultimate <br className="hidden md:block" />
                            <span className="relative inline-block"><span className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-400 blur opacity-60 rounded-lg"></span><span className="relative text-white">Thailand Travel Supplier</span></span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] leading-relaxed">
                            Empowering Indian travel agents with direct hotel contracts, a massive ground support fleet, and unbeatable wholesale net rates for FIT, Honeymoon, and large Corporate MICE groups traveling to Thailand.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.95 }} href="#booking-process" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl inline-block">
                                Explore B2B Workflows
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} href="https://wa.me/919406182174?text=Hi,%20I%20am%20a%20travel%20agent%20looking%20for%20B2B%20Thailand%20rates." className="bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2 transition-colors">
                                <Phone className="w-5 h-5" /> Agent Registration Desk
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Table of Contents Header */}
            <section className="py-8 bg-muted/10 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-2 text-primary font-bold"><Navigation className="w-4 h-4" /> Quick Jump:</span>
                        <a href="#agent-protection" className="hover:text-primary transition-colors">Agent Protection</a> •
                        <a href="#operations" className="hover:text-primary transition-colors">Operations & Supply</a> •
                        <a href="#services" className="hover:text-primary transition-colors">Group vs FIT Handling</a> •
                        <a href="#advantage" className="hover:text-primary transition-colors">DMC Advantage</a> •
                        <a href="#faqs" className="hover:text-primary transition-colors">B2B FAQs</a>
                    </div>
                </div>
            </section>

            {/* Agent Protection Component */}
            <div id="agent-protection">
                <AgentProtection />
            </div>

            {/* Supplier Strength Overview - Deep Content */}
            <section id="operations" className="py-24 bg-white border-y border-border">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">Unrivaled <span className="text-primary">Operational Strength</span> in Thailand</motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed font-light">
                            To succeed as a B2B travel agent, you cannot rely on fragmented online aggregating platforms. Rudraksh Safar acts as your physical extension in Thailand, providing an immense, directly-contracted inventory across Bangkok, Pattaya, Phuket, Krabi, and Koh Samui, backed by robust local Indian and Thai support teams.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Hotels */}
                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <motion.div className="absolute inset-0 bg-blue-200 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center" />
                                <Hotel className="w-8 h-8 text-blue-600 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Direct Premium Hotel Contracting</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                We bypass the massive intermediary markups by signing static B2B net rate contracts directly with hotel management networks across Thailand. Whether your client needs a bustling 4-star property near Sukhumvit in Bangkok, a family-friendly resort in Pattaya, or an ultra-luxury private pool villa in Phuket, our rates allow you to command superior retail margins.
                            </p>
                            <ul className="space-y-2 text-slate-700 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Blocked inventory during peak season (Dec-Jan).</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Special honeymoon inclusions guaranteed.</li>
                            </ul>
                        </motion.div>

                        {/* Transport */}
                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <motion.div className="absolute inset-0 bg-amber-200 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center" />
                                <Bus className="w-8 h-8 text-amber-600 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Massive Transport Fleet Reliability</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                Transport delays kill the client experience. We utilize a highly vetted, GPS-tracked fleet. From private luxury sedans for VIP couples, to executive VIP minivans (Toyota Commuter), up to 45-seater Volvo luxury coaches for massive corporate movements—we handle all Seat-In-Coach (SIC) and Private transfer logistics smoothly.
                            </p>
                            <ul className="space-y-2 text-slate-700 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-500" /> English/Hindi speaking driver networks.</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-500" /> Strict adherence to pickup schedules.</li>
                            </ul>
                        </motion.div>

                        {/* Tours */}
                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <motion.div className="absolute inset-0 bg-emerald-200 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center" />
                                <Users className="w-8 h-8 text-emerald-600 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Excursions & Local Tour Suppliers</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                Don't let your clients fall victim to street-side tour scams. We have direct ticketing partnerships with major attractions including Safari World Bangkok, Alcazar Cabaret, Phi Phi Island speedboat runners, and ethical elephant sanctuaries. We ensure your clients receive verified, high-quality sightseeing experiences.
                            </p>
                            <Link to="/international-tours/thailand" className="text-primary hover:underline font-bold mt-2 inline-block">View Sample Thailand Excursions →</Link>
                        </motion.div>

                        {/* Visa */}
                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <motion.div className="absolute inset-0 bg-purple-200 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 origin-center" />
                                <Shield className="w-8 h-8 text-purple-600 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Visa Assistance Hub</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                Visa protocols change frequently. Our back-office handles end-to-end B2B <Link to="/visa/thailand" className="text-primary hover:underline">Thailand e-Visa processing</Link>, sticker visa submission at consulates, and documentation guidance for Indians seeking Visa on Arrival (VoA), drastically reducing boarding denials.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Services Breakdown - Depth Expansion */}
            <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden flex flex-col items-center">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Mastering <span className="text-primary">Group vs FIT</span> Dynamics</motion.h2>
                        <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Serving diverse travel segments demands distinct operational strategies. As a B2B travel partner, we equip you to sell to every demographic confidently.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-8">
                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-lg text-green-600"><CheckCircle className="w-6 h-6" /></div>
                                    FIT & Family Customization
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Free Independent Travelers (FIT) require flexibility. We provide modular itineraries where agents can quickly add or remove days, upgrade room categories to suites, or swap standard SIC tours for private luxury yacht trips, generating higher margins per capita.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="p-2 bg-pink-100 rounded-lg text-pink-600"><Heart className="w-6 h-6 fill-pink-600" /></div>
                                    Honeymoon Specials
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Couples demand perfection. We liaise with hotel concierges in Phuket and Koh Samui to ensure floral bed decorations, complimentary wine/cakes on arrival, and exclusive seating at romantic beachfront dinners—making you look like a superstar agent.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Building2 className="w-6 h-6" /></div>
                                    Corporate MICE Deployments
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Large-scale logistics are our forte. We negotiate mega-block bookings for hotels, coordinate fleet movements of 10+ luxury buses simultaneously, arrange gala dinners with pure Indian catering in Bangkok, and handle team-building activities in Pattaya for groups of 50 to 500+ delegates.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -1 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1200&auto=format&fit=crop" alt="Thailand Corporate Travel MICE Bangkok Cityscape" className="absolute inset-0 object-cover h-full w-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-medium text-lg border-l-4 border-primary pl-4">We handle the backend chaos so you can focus entirely on client acquisition and front-end sales.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Work With a Professional DMC Partner */}
            <section id="advantage" className="py-24 bg-slate-900 text-white border-b border-border">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="container mx-auto px-4 text-center max-w-5xl">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">The Rudraksh Safar <span className="text-secondary">Advantage</span></motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-16 leading-relaxed">
                        Partnering with an expert destination supplier directly impacts your bottom line. We reduce your operational headaches, eliminate intermediary commissions, and drastically boost your customer referral rate.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <motion.div variants={itemVariants} whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }} className="flex items-start gap-5 bg-white/5 p-8 rounded-2xl border border-white/10 group transition-all">
                            <MapPin className="w-10 h-10 text-primary shrink-0 transition-transform group-hover:scale-110" />
                            <div>
                                <h4 className="font-bold text-xl mb-3 text-white">Deep Local Geographic Knowledge</h4>
                                <p className="text-slate-400 text-base leading-relaxed">We know exactly which Pattaya hotels are truly family-friendly versus party-centric. We know traffic patterns in Bangkok to optimize transfer times. This micro-knowledge prevents bad client experiences.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }} className="flex items-start gap-5 bg-white/5 p-8 rounded-2xl border border-white/10 group transition-all">
                            <Shield className="w-10 h-10 text-secondary shrink-0 transition-transform group-hover:scale-110" />
                            <div>
                                <h4 className="font-bold text-xl mb-3 text-white">Vetted, Reliable Supply Chain</h4>
                                <p className="text-slate-400 text-base leading-relaxed">Online B2B portals often list unverified vendors. Our contracted hotels, speedboat operators, and transport providers are rigorously vetted for safety, hygiene, and absolute punctuality.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }} className="flex items-start gap-5 bg-white/5 p-8 rounded-2xl border border-white/10 group transition-all">
                            <Clock className="w-10 h-10 text-emerald-400 shrink-0 transition-transform group-hover:rotate-12 duration-300" />
                            <div>
                                <h4 className="font-bold text-xl mb-3 text-white">Lightning Fast Dispute Resolution</h4>
                                <p className="text-slate-400 text-base leading-relaxed">If a client misses a ferry in Phuket due to flight delays, our local 24/7 team immediately reorganizes the logistics. We handle real-time crisis management so you can sleep peacefully in India.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }} className="flex items-start gap-5 bg-white/5 p-8 rounded-2xl border border-white/10 group transition-all">
                            <Scale className="w-10 h-10 text-blue-400 shrink-0 transition-transform group-hover:scale-110" />
                            <div>
                                <h4 className="font-bold text-xl mb-3 text-white">Massive Risk Reduction for Agents</h4>
                                <p className="text-slate-400 text-base leading-relaxed">By acting as your sole point of contact for the entire itinerary, we eliminate the need for you to chase 10 different fragmented suppliers. We take full accountability for the ground delivery.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* SEO FAQ Section */}
            <motion.section
                id="faqs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-white"
            >
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">Thailand DMC & B2B <span className="text-primary">FAQs</span></h2>
                        <p className="text-slate-600 text-xl max-w-2xl mx-auto">Get absolute clarity on our supply side operations, onboarding procedures, and the benefits of our wholesale travel network.</p>
                    </div>
                    <FAQsSection faqs={faqs} title="" />
                </div>
            </motion.section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-primary via-blue-900 to-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549487593-ad4771638206?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Scale Your Travel Agency Today</h2>
                    <p className="text-white/90 mb-10 text-xl max-w-2xl mx-auto leading-relaxed drop-shadow">
                        Join hundreds of successful travel agents across India who trust Rudraksh Safar to handle their Thailand, Dubai, and Maldives deployments. Get access to our exclusive B2B Net Rates.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/919406182174?text=Hello,%20I%20want%20to%20register%20my%20agency%20for%20B2B%20Thailand%20rates." className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
                            <Phone className="w-5 h-5" /> Register For B2B Rates
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/b2b-travel-partners" className="bg-white/10 backdrop-blur-md border border-white/50 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-white/20 transition-colors">
                            View All B2B Hubs
                        </motion.a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default B2BThailand;
