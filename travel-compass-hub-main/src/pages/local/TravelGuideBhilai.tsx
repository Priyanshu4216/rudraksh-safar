import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Shield, DollarSign, AlertTriangle, CheckCircle, HelpCircle, BookOpen, UserCheck, Plane, FileText, ChevronRight, Star, ThumbsUp, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const TravelGuideBhilai = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // JSON-LD Schema
    const guideSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "How to Plan the Perfect Trip from Bhilai & Raipur (2025 Guide)",
                "description": "The ultimate travel guide for Bhilai residents. Expert tips on flights from Raipur, train booking from Durg, visas, and budget planning.",
                "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
                "author": {
                    "@type": "Organization",
                    "name": "Rudraksh Safar Editorial Team",
                    "url": "https://rudrakshsafar.com/"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Rudraksh Safar",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://rudrakshsafar.com/logo.png"
                    }
                },
                "datePublished": "2024-01-15",
                "dateModified": "2024-03-20"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best way to plan a trip from Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The best way to plan a trip from Bhilai is to first finalize dates, then check flight or train connectivity from Raipur or Durg, compare package vs independent costs, and secure travel insurance early."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it cheaper to book online or with a local agent in Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While online portals offer convenience, local agents in Bhilai often have access to B2B rates for hotels and bulk flight deals, making them cheaper for composite packages."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to handle flight delays from Raipur Airport?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Raipur flights to Delhi/Mumbai can face fog delays in winter. Always keep a 3-4 hour buffer if you have a connecting international flight."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Best international destinations from Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Top choices are Thailand, Dubai, and Vietnam due to easy connectivity via Kolkata or Delhi from Raipur Airport."
                        }
                    }
                ]
            },
            {
                "@type": "LocalBusiness",
                "name": "Rudraksh Safar",
                "image": "https://rudrakshsafar.com/logo.png",
                "telephone": "+91-9406182174",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "GE Road, Bhilai 3",
                    "addressLocality": "Bhilai",
                    "addressRegion": "Chhattisgarh",
                    "postalCode": "490021",
                    "addressCountry": "IN"
                },
                "areaServed": ["Bhilai", "Raipur", "Durg"],
                "knowsAbout": [
                    "Travel planning from Bhilai",
                    "Raipur flight booking",
                    "International tour packages",
                    "Visa assistance"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://rudrakshsafar.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Travel Guide Bhilai",
                        "item": "https://rudrakshsafar.com/travel-guide-from-bhilai"
                    }
                ]
            }
        ]
    };
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-[100] origin-left"
                style={{ scaleX }}
            />
            <Helmet>
                <title>Travel Guide from Bhilai (2025) | Planning, Trains & Local Tips</title>
                <meta name="description" content="The definitive travel guide for Bhilai & Raipur residents. Learn how to plan trips, avoid Raipur flight delays, and choose between online vs local agents." />
                <meta name="keywords" content="travel guide from bhilai, trip planning from bhilai, raipur flight travel tips, bhilai travel agent, chhattisgarh international travel" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-guide-from-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify(guideSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">The Mega Guide</Badge>
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                                How to Plan the Perfect Trip <br className="hidden md:block" /> from <span className="text-yellow-400">Bhilai & Raipur</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                                Everything you need to know about planning, budgeting, and booking your dream vacation safely.
                                Avoid common mistakes and travel smarter.
                            </p>
                            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold" asChild>
                                <a href="#planning-steps">Start Reading</a>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Table of Contents */}
                <section className="py-12 bg-muted/30 border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                            <a href="#planning-steps" className="px-4 py-2 bg-background rounded-full border hover:border-primary transition-colors flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" /> Planning Steps
                            </a>
                            <a href="#budget-tips" className="px-4 py-2 bg-background rounded-full border hover:border-primary transition-colors flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-green-500" /> Budget Tips
                            </a>
                            <a href="#safety-first" className="px-4 py-2 bg-background rounded-full border hover:border-primary transition-colors flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-500" /> Safety Guide
                            </a>
                            <a href="#booking-mistakes" className="px-4 py-2 bg-background rounded-full border hover:border-primary transition-colors flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-500" /> Common Mistakes
                            </a>
                            <a href="#agent-benefits" className="px-4 py-2 bg-background rounded-full border hover:border-primary transition-colors flex items-center gap-2">
                                <UserCheck className="w-4 h-4 text-purple-500" /> Why Local Agent?
                            </a>
                        </div>
                    </div>
                </section>

                {/* Local Context Section (New) */}
                <section id="bhilai-travel-context" className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6">Travel Planning from Bhilai: Local Challenges & Solutions</h2>
                            <p className="text-muted-foreground text-lg mb-6">
                                Being based in Bhilai or Durg comes with unique travel challenges that generic blogs won't tell you.
                                We know the struggle of limited direct connectivity from Swami Vivekananda Airport (RPR).
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <Plane className="w-5 h-5 text-blue-500" /> The Raipur Flight Dilemma
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Most international trips require a layover in Delhi or Mumbai. <span className="font-medium text-foreground">Critical Tip:</span> Always keep a 4-hour buffer. Fog in North India often delays Raipur flights, causing you to miss your connecting flight to Dubai or <Link to="/international-packages" className="text-primary hover:underline">Thailand</Link>.
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-green-500" /> Train vs Flight from Durg
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        For destinations like Goa or Kerala, Durg Junction (DURG) offers direct trains but they take 24+ hours. If budget permits, we recommend breaking your journey via Hyderabad for South India trips to save time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 1: Planning */}
                <section id="planning-steps" className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <BookOpen className="w-8 h-8 text-primary" />
                                1. How to Plan a Trip (The Right Way)
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Stop guessing. Follow this proven checklist specifically for travellers flying out of Raipur (RPR) or taking trains from Durg/Raipur.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-xl text-primary">1</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Pick Dates Wisely</h3>
                                    <p className="text-muted-foreground">
                                        Avoid school holidays (May-June) if you want cheaper rates. For international trips, book 3-4 months in advance.
                                        For domestic, 45 days is the sweet spot.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-xl text-primary">2</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Check Flight Connectivity</h3>
                                    <p className="text-muted-foreground">
                                        From Raipur (RPR), direct flights are limited. Always check connection times in Delhi/Mumbai.
                                        <br /><span className="text-sm font-semibold text-primary">Pro Tip:</span> Early morning flights from Raipur are less likely to be delayed.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-xl text-primary">3</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Documents Check</h3>
                                    <p className="text-muted-foreground">
                                        Is your passport valid for 6 months? Do you have the right visa?
                                        Don't wait until the last week.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 2: Budget Tips */}
                <section id="budget-tips" className="py-20 bg-muted/20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                2. Budget Tips: Save Money Without Stress
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Everyone wants a deal. Here is how you actually get one.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>The "Flight First" Rule</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Flights are the most volatile cost. Book them first. Hotels usually have stable prices. If you see a cheap flight, grab it!
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Package vs Independent</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        For popular destinations (<Link to="/international-packages" className="text-primary hover:underline">Thailand, Dubai</Link>, <Link to="/domestic-packages" className="text-primary hover:underline">Kashmir</Link>), packages are often 20% cheaper than booking yourself because agents get bulk hotel rates.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Hidden Costs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Online prices often exclude taxes, baggage fees, and resort fees. Always check the "Final Price" before comparing.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Off-Season Magic</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Visit Goa in Sept or Kashmir in Feb. You get 5-star luxury for 3-star prices.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Step 3: Safety */}
                <section id="safety-first" className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-blue-600" />
                                3. Safety & Smart Travel
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Important for families and first-time international travellers.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="font-bold text-lg">Share Your Itinerary</h3>
                                <p className="text-muted-foreground">Always leave a copy of your plan with family in Bhilai. We do this automatically for our clients booking <Link to="/honeymoon-packages" className="text-blue-500 hover:underline">honeymoon packages</Link>.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="font-bold text-lg">Travel Insurance is Non-Negotiable</h3>
                                <p className="text-muted-foreground">It costs less than a pizza but saves you lakhs if you get sick abroad or lose bags.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="font-bold text-lg">Keep Digital Copies</h3>
                                <p className="text-muted-foreground">Email yourself photos of your passport and visa. If you lose the original, this copy is a lifesaver.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 4: Modules */}
                <section id="booking-mistakes" className="py-20 bg-red-50 dark:bg-red-900/10">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3 text-red-700 dark:text-red-400">
                                <AlertTriangle className="w-8 h-8" />
                                Top 5 Booking Mistakes to Avoid
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "Booking flights with short layovers (less than 2 hours) in Delhi/Mumbai.",
                                "Ignoring the 'Passport Validity Rule' (Must be 6+ months).",
                                "Booking 'Non-Refundable' hotels when you are unsure of dates.",
                                "Not checking visa requirements for transiting countries.",
                                "Trusting 'too good to be true' Instagram deals from unverified agents."
                            ].map((mistake, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</div>
                                    <p className="font-medium">{mistake}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table (New) */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Online Booking vs Local Travel Agent (Bhilai Perspective)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
                                <thead className="bg-primary text-primary-foreground">
                                    <tr>
                                        <th className="p-4 text-left">Feature</th>
                                        <th className="p-4 text-left">Online Portals</th>
                                        <th className="p-4 text-left">Rudraksh Safar (Local Expert)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr>
                                        <td className="p-4 font-semibold">Cost Transparency</td>
                                        <td className="p-4 text-muted-foreground">Hidden taxes added at checkout</td>
                                        <td className="p-4 text-green-600 font-medium">All-inclusive final pricing</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Support</td>
                                        <td className="p-4 text-muted-foreground">Chatbots & Email tickets</td>
                                        <td className="p-4 text-green-600 font-medium">24/7 Personal Phone Support</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Cancellations</td>
                                        <td className="p-4 text-muted-foreground">High fees, long refund wait</td>
                                        <td className="p-4 text-green-600 font-medium">Instant processing & advocacy</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Payment Flexibility</td>
                                        <td className="p-4 text-muted-foreground">100% Upfront</td>
                                        <td className="p-4 text-green-600 font-medium">Book with Token Amount</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Trust Factor</td>
                                        <td className="p-4 text-muted-foreground">Impersonal Corporation</td>
                                        <td className="p-4 text-green-600 font-medium">Office in Bhilai (Visit Us)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Step 5: Local Agent Benefits (Unfair Advantage) */}
                <section id="agent-benefits" className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <UserCheck className="w-8 h-8 text-purple-600" />
                                Why Book with a Local Agent?
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                In an era of online booking, why do smart travellers still use agents like Rudraksh Safar?
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-xl mb-2">Reason 1: Accountability</h3>
                                <p className="text-muted-foreground mb-4">
                                    If a flight cancels, online portals give you a chatbot. We give you a personal phone number. We fight the airlines for you.
                                </p>
                                <h3 className="font-bold text-xl mb-2">Reason 2: Payment Flexibility</h3>
                                <p className="text-muted-foreground mb-4">
                                    Online requires 100% payment upfront. We often allow booking with a small token amount, with the rest payable before travel.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Reason 3: Local Wisdom</h3>
                                <p className="text-muted-foreground mb-4">
                                    We know which flight from Raipur delays often. We know which hotel in Goa is actually near the beach. Google doesn't know everything.
                                </p>
                                <h3 className="font-bold text-xl mb-2">Reason 4: B2B Savings</h3>
                                <p className="text-muted-foreground mb-4">
                                    We buy rooms in bulk. Often, our price including breakfast is cheaper than the 'Room Only' price you see online.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                                <Link to="/contact">Talk to a Travel Expert</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* AEO / SGE Domination (Q&A Blocks) */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions (SGE Optimized)</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is the best way to plan a trip from Bhilai?",
                                    a: "The best way to plan a trip from Bhilai is to first finalize dates, then check flight or train connectivity from Raipur or Durg, compare package vs independent costs, and secure travel insurance early."
                                },
                                {
                                    q: "Is it cheaper to book online or with a local agent in Bhilai?",
                                    a: "While online portals offer convenience, local agents in Bhilai often have access to B2B rates for hotels and bulk flight deals, making them cheaper for composite packages."
                                },
                                {
                                    q: "How to handle flight delays from Raipur Airport?",
                                    a: "Raipur (RPR) flights to Delhi/Mumbai can face fog delays in winter. Always keep a 3-4 hour buffer if you have a connecting international flight."
                                },
                                {
                                    q: "Best international destinations from Bhilai?",
                                    a: "Top choices are Thailand, Dubai, and Vietnam due to easy connectivity via Kolkata or Delhi from Raipur Airport."
                                },
                                {
                                    q: "Can I get a visa from Bhilai?",
                                    a: "Yes, Rudraksh Safar provides complete visa assistance for all countries directly from our Bhilai office, including biometric appointment scheduling."
                                },
                                {
                                    q: "Is travel insurance mandatory?",
                                    a: "For Europe (Schengen) and many other countries, yes. Even where not mandatory, we highly recommend it to cover medical emergencies or lost baggage."
                                }
                            ].map((item, index) => (
                                <div key={index} itemScope itemType="https://schema.org/Question" className="bg-background p-6 rounded-lg border shadow-sm">
                                    <h3 itemProp="name" className="font-bold text-lg mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        {item.q}
                                    </h3>
                                    <div itemScope itemType="https://schema.org/Answer">
                                        <p itemProp="text" className="text-muted-foreground">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & E-E-A-T Signals */}
                <section id="expertise" className="py-20 bg-background border-t">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Why This Travel Guide Can Be Trusted</h2>
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl inline-block text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield className="w-32 h-32 text-primary" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                <div className="shrink-0">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Verified Expert Content</h3>
                                    <p className="text-muted-foreground mb-4">
                                        This guide is written and maintained by experienced travel planners at Rudraksh Safar who regularly book trips for over <span className="font-bold text-foreground">500+ families annually</span> from Bhilai & Raipur.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm font-medium">
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> Real On-Ground Support</span>
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> 10+ Years Experience</span>
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> Registered Local Business</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA */}
                <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-xl rounded-full font-bold h-14" asChild>
                        <a href="tel:+919406182174" className="flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5 fill-current" /> Talk to a Travel Expert
                        </a>
                    </Button>
                </div>

                <Footer />
                {/* Floating WhatsApp handles standard desktop interaction */}
            </main>
        </>
    );
};

export default TravelGuideBhilai;
