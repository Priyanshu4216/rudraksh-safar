import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Shield, DollarSign, AlertTriangle, CheckCircle, HelpCircle, BookOpen, UserCheck, Plane, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const TravelGuideBhilai = () => {
    return (
        <>
            <Helmet>
                <title>Travel Guide from Bhilai | Planning, Budget & Safety Tips</title>
                <meta name="description" content="The ultimate travel guide for Bhilai residents. How to plan a trip, budget tips, safety advice, booking mistakes to avoid, and why local agents save you money." />
                <meta name="keywords" content="travel guide Bhilai, how to plan trip from Bhilai, travel tips Bhilai, booking mistakes tour packages, Rudraksh Safar guide" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-guide-from-bhilai" />
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
                                        For popular destinations (Thailand, Dubai, Kashmir), packages are often 20% cheaper than booking yourself because agents get bulk hotel rates.
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
                                <p className="text-muted-foreground">Always leave a copy of your plan with family in Bhilai. We do this automatically for our clients.</p>
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

                {/* Level 6 FAQs (First Time Travellers) */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">First-Time Traveller FAQs</h2>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it better to book a tour package or plan independently?</AccordionTrigger>
                                <AccordionContent>
                                    For first-timers, a package is safer and often cheaper. You get on-ground support and verified hotels. Independent planning is great if you are experienced and have plenty of time to research.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Are tour packages worth it?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, especially for international trips. The hassle of transfers, tickets, and finding good food is managed for you, so you can just enjoy the holiday.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>How early should I book?</AccordionTrigger>
                                <AccordionContent>
                                    For international: 3 months. For domestic: 45 days. Last-minute bookings (under 7 days) are always the most expensive.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                <Footer />
                <FloatingWhatsApp />
            </main>
        </>
    );
};

export default TravelGuideBhilai;
