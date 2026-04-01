import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Handshake, Globe, MapPin, Building2, CheckCircle2, ChevronRight, Phone, Users, Clock, Briefcase, Map, FileText, RotateCw, Scale, LifeBuoy, Star, Shield, Lock, CheckSquare, Percent, UserCheck } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AgentProtection from '@/components/b2b/AgentProtection';
import FAQsSection from '@/components/FAQsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value).toString() + "+";
                    }
                }
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView]);

    return <span ref={nodeRef} className="font-bold tabular-nums text-inherit">{from}+</span>;
};

const finalFaqs = [
    { question: "How does the B2B agent onboarding process work?", answer: "The onboarding process is rapid and digital. Fill out the Partner Enquiry Form below with your agency's MSME, GST (if applicable), and contact details. Our B2B Support Team will verify your credentials within 24 hours and activate your account, granting you immediate access to our wholesale net rates." },
    { question: "How does the commission structure work?", answer: "We operate on a pure net-rate B2B model. We provide you with rock-bottom wholesale pricing for hotels, transfers, and excursions. You are entirely free to apply your own markup before presenting the final itinerary to your retail client, allowing you to control your profit margins dynamically." },
    { question: "Are your B2B services truly 100% white-labeled?", answer: "Yes. Our Agent Protection Policy is absolute. All airport placards, driver interactions, and on-ground coordination in destinations like Thailand and Dubai are conducted entirely under your agency's name. We never solicit or contact your retail customers directly." },
    { question: "What level of support infrastructure do you provide?", answer: "We provide dual-tier support. First, your dedicated account manager in India handles all pre-booking quotes and modifications. Second, our localized 24/7 on-ground teams in destination countries (e.g., Thailand) handle real-time crisis management during your client's travel window." },
    { question: "Can I claim GST input tax credit for B2B bookings?", answer: "Absolutely. Rudraksh Safar is a government-registered MSME and fully GST-compliant. We issue proper B2B GST invoices for every transaction, allowing your agency to legally claim full input tax credit (ITC), further boosting your profitability." },
    { question: "Do you handle custom FIT itineraries?", answer: "Yes, fully customized FIT (Free Independent Traveler) itineraries form the backbone of our operations. Whether it's a budget family trip to Phuket or an ultra-luxury honeymoon in a Maldives water villa, our destination experts tailor every detail to your client's exact demands." },
    { question: "What is your typical turnaround time for a B2B quote?", answer: "For standard destination itineraries, our operations team will deliver a comprehensive, white-labeled quotation with net rates within 2 to 4 hours. For highly complex, multi-city European tours or massive corporate MICE movements, we guarantee a response within 24 hours." }
];

const B2BHub = () => {
    const breadcrumbItems = [
        { label: 'B2B Partners', path: '/b2b-travel-partners' }
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
                <title>B2B Travel Partner Hub & DMC Services | Rudraksh Safar</title>
                <meta name="description" content="Join India's fastest-growing B2B travel network. Access transparent wholesale rates, rapid onboarding, white-label ground operations, and complete agent protection." />
                <link rel="canonical" href="https://rudrakshsafar.com/b2b-travel-partners" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": finalFaqs.map(faq => ({
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
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
                        alt="B2B Travel Partner DMC Aviation"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/20 blur-[80px] z-10 pointer-events-none" />
                <motion.div animate={{ rotate: -360, y: [0, 30, 0] }} transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-secondary/30 blur-[100px] z-10 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 backdrop-blur-md font-semibold tracking-wide uppercase text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <ShieldCheck className="w-5 h-5" />
                            Elite B2B Wholesale Network
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                            Empowering Travel Agents With <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-400">Premium Operations</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-10 text-balance drop-shadow-md leading-relaxed">
                            Stop losing profit margins to middlemen. Partner with a dedicated Destination Management Company providing transparent net rates, massive local inventory, and a strict no-compete guarantee.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.95 }} href="#onboarding" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-5 rounded-full font-bold text-lg shadow-xl flex items-center gap-3">
                                <Handshake className="w-6 h-6" /> Start Agent Onboarding
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }} whileTap={{ scale: 0.95 }} href="tel:+919203650311" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg backdrop-blur-md flex items-center gap-3">
                                <Phone className="w-6 h-6" /> B2B Helpdesk
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links Table of Contents equivalent */}
            <section className="py-8 bg-muted/10 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-600">
                        <a href="#benefits" className="flex items-center gap-2 hover:text-primary transition-colors"><Star className="w-4 h-4" /> Agent Benefits</a>
                        <a href="#commission" className="flex items-center gap-2 hover:text-primary transition-colors"><Percent className="w-4 h-4" /> Commission & Rates</a>
                        <a href="#onboarding" className="flex items-center gap-2 hover:text-primary transition-colors"><UserCheck className="w-4 h-4" /> Seamless Onboarding</a>
                        <a href="#support" className="flex items-center gap-2 hover:text-primary transition-colors"><LifeBuoy className="w-4 h-4" /> Infrastructure</a>
                    </div>
                </div>
            </section>

            {/* Agent Protection Component - Absolute essential trust signal */}
            <AgentProtection />

            {/* Core Agent Benefits */}
            <section id="benefits" className="py-24 bg-white border-y border-border">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">The B2B <span className="text-primary">Advantage</span></motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed font-light">
                            We don't just sell itineraries; we build an operational firewall around your retail agency, allowing you to scale without the stress of ground-level execution.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <Shield className="w-8 h-8 text-blue-600 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Total Brand Protection</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our services are 100% white-labeled. From airport placards bearing your agency logo to tour guides who represent your brand, the retail client never encounters "Rudraksh Safar". We guarantee absolute client non-solicitation.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <Clock className="w-8 h-8 text-emerald-600 relative z-10 group-hover:rotate-12 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Rapid Quotation Delivery</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Time kills sales. Our dedicated B2B sales team provides <Link to="/b2b/thailand" className="text-primary hover:underline font-medium">Thailand</Link> & <Link to="/domestic-tours/andaman" className="text-primary hover:underline font-medium">Domestic</Link> quotations within 2-4 hours. You receive a fully formatted, unbranded PDF itinerary ready to be forwarded to your client.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                                <CheckSquare className="w-8 h-8 text-purple-600 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">End-to-End Fulfilment</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We handle it all: Visa assistance, flight ticketing (group & FIT), hotel procurement, and complex multi-city transport grids. You bring the client; we handle the operational chaos.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Commission & Pricing Structure */}
            <section id="commission" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-8">
                            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Financial Control & <span className="text-emerald-600">Commissions</span></motion.h2>
                            <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed font-light">
                                Unlike strict aggregators that dictate your profit margins via fixed percentages, we grant you the financial freedom to scale your revenue.
                            </motion.p>

                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Percent className="w-5 h-5" /></div>
                                    Dynamic Net-Rate Pricing
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We do not offer a flat "commission". Instead, we provide you with absolute bottom-line net wholesale rates for our DMC services. You are free to mark up the package by 10%, 20%, or whatever the market will bear.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><FileText className="w-5 h-5" /></div>
                                    Full GST Input Tax Credit
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    As an Indian agency working with an Indian supplier, cash flow is crucial. We issue compliant B2B invoices featuring your GSTIN, allowing you to seamlessly claim Input Tax Credit (ITC) and optimize your tax liabilities.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="B2B Travel Agency Analytics" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
                                <div className="flex items-center gap-4 mb-2">
                                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                                    <span className="text-2xl font-black text-slate-900">100%</span>
                                </div>
                                <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">Pricing Control</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Seamless Agent Onboarding Process */}
            <section id="onboarding" className="py-24 bg-slate-900 text-white border-y border-slate-800">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 font-display">The Seamless <span className="text-secondary">Onboarding</span> Process</motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                            No rigorous physical paperwork or agonizing wait times. We verify your credentials digitally and onboard you within hours.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 relative gap-8 text-center">
                        <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-0.5 bg-slate-700 z-0">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }} className="h-full bg-secondary"></motion.div>
                        </div>

                        {[
                            { step: 1, title: 'Submit Enquiry', desc: 'Fill out the B2B form below with your agency name and basic contact details.' },
                            { step: 2, title: 'Credential Check', desc: 'Our team verifies your trade credentials (GST/MSME/Website) within 24 hours.' },
                            { step: 3, title: 'Account Activation', desc: 'Receive your dedicated Account Manager contact and partnership agreement.' },
                            { step: 4, title: 'Start Quoting', desc: 'Instantly start requesting white-labeled quotes and securing net availability.' },
                        ].map((item, index) => (
                            <motion.div key={index} variants={itemVariants} className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-800 text-white border-2 border-secondary flex items-center justify-center font-bold text-2xl mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Registration Form */}
                    <motion.div variants={itemVariants} className="mt-24 max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-slate-900 border border-slate-200">
                        <h3 className="text-3xl font-bold mb-2 text-center">Register Your Agency</h3>
                        <p className="text-center text-slate-500 mb-8 font-medium">Join 300+ Indian travel partners scaling their operations.</p>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Agency/Company Name *</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50" placeholder="e.g. Royal Travels" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Full Name *</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50" placeholder="John Doe" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number *</label>
                                    <input type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50" placeholder="+91 XXXXX XXXXX" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Agency Email *</label>
                                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50" placeholder="sales@agency.com" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">GSTIN / MSME Udyam Number (Strongly Recommended)</label>
                                <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50" placeholder="For automated fast-track verification" />
                            </div>
                            <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl shadow-[0_10px_30px_rgba(226,30,45,0.3)] text-lg transition-all mt-4">
                                Request Partnership Approval
                            </motion.button>
                            <p className="text-xs text-center text-slate-400 font-medium">By submitting, you agree to our standard B2B Agent Confidentiality Terms.</p>
                        </form>
                    </motion.div>
                </motion.div>
            </section>

            {/* Support Infrastructure */}
            <section id="support" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="24/7 B2B Travel Operations Support" className="object-cover h-[500px] w-full" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8">
                                <h3 className="text-white font-bold text-2xl mb-2">Crisis Mitigated.</h3>
                                <p className="text-slate-200">Our team recently reorganized a 45-pax corporate group's Phuket ferry transfers in 40 minutes following sudden monsoons.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="order-1 lg:order-2 space-y-8">
                            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">Robust <span className="text-primary">Support Infrastructure</span></motion.h2>
                            <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed font-light">
                                Your retail clients expect flawless execution. When natural delays or sudden changes occur halfway across the world, you need an operational safety net.
                            </motion.p>

                            <ul className="space-y-6">
                                <motion.li variants={itemVariants} className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl h-fit"><Phone className="w-6 h-6 text-primary" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Dedicated Account Manager</h4>
                                        <p className="text-slate-600 mt-1">Say goodbye to generic call center queues. You get a direct line to a dedicated specialist handling your agency's entire portfolio.</p>
                                    </div>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex gap-4">
                                    <div className="bg-emerald-500/10 p-3 rounded-xl h-fit"><Globe className="w-6 h-6 text-emerald-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">24/7 On-Ground Emergency Teams</h4>
                                        <p className="text-slate-600 mt-1">If an issue arises in Bangkok at 2 AM, our localized Thai coordination team resolves it instantly, shielding you from distress calls.</p>
                                    </div>
                                </motion.li>
                                <motion.li variants={itemVariants} className="flex gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-xl h-fit"><RotateCw className="w-6 h-6 text-blue-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Seamless Modifications</h4>
                                        <p className="text-slate-600 mt-1">Handling last-minute passenger name changes, flight reschedulings, or room upgrades with maximum agility and zero friction.</p>
                                    </div>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hub Destinations */}
            <section className="py-20 bg-muted/20 border-t border-border">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-6">Explore Our <span className="text-primary">Destination Hubs</span></motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-10">Select your target territory to view specific DMC operational strength.</motion.p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/b2b/thailand" className="group relative overflow-hidden rounded-2xl shadow-md w-full sm:w-64 h-40 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="B2B Thailand" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                            <h3 className="relative z-10 text-white font-bold text-2xl drop-shadow-md flex items-center gap-2">Thailand <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" /></h3>
                        </Link>
                        <div className="group relative overflow-hidden rounded-2xl shadow-md border-2 border-dashed border-slate-300 w-full sm:w-64 h-40 flex flex-col items-center justify-center bg-white cursor-not-allowed">
                            <h3 className="text-slate-400 font-bold text-2xl mb-1">Dubai</h3>
                            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Launching Soon</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SEO FAQ Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-white border-t border-border"
            >
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-display tracking-tight">Agent Partnership <span className="text-primary">FAQs</span></h2>
                        <p className="text-slate-600 text-xl max-w-2xl mx-auto">Get absolute clarity on our B2B procedures, pricing mechanics, and support infrastructure.</p>
                    </div>
                    <FAQsSection faqs={finalFaqs} title="" />
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default B2BHub;
