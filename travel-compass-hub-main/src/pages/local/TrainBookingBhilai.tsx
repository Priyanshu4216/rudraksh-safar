import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Train, Clock, MapPin, AlertTriangle, CheckCircle, ShieldCheck, Phone, Calendar, Users, Info, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FAQsSection from '@/components/FAQsSection';
import TLDRSection from '@/components/TLDRSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';



const TrainBookingBhilai = () => {

const popularTrains = [
    { name: "Vande Bharat Express", route: "Durg to Visakhapatnam / Nagpur", time: "Daytime", availability: "High Demand (Book Early)" },
    { name: "Gitanjali Express", route: "Durg to Mumbai / Howrah", time: "Daily", availability: "Book 60 days prior" },
    { name: "Amarkantak Express", route: "Durg to Bhopal / Jabalpur", time: "Evening", availability: "Moderate" },
    { name: "South Bihar Express", route: "Durg to Patna / Tata", time: "Daily", availability: "Heavy Rush" },
    { name: "Durg - Puri Express", route: "Durg to Jagannath Puri", time: "Evening", availability: "Good for Pilgrims" },
];

const quickAnswers = [
    { q: "What is Tatkal booking?", a: "Tatkal is an emergency quota for booking train tickets one day before travel. It opens at 10:00 AM for AC and 11:00 AM for Non-AC classes." },
    { q: "Can agents book Tatkal?", a: "Yes, authorized agents can book Tatkal tickets after 10:15 AM (AC) and 11:15 AM (Non-AC). We cannot book during the first 15 minutes." },
    { q: "Which station is better: Durg or Raipur?", a: "Durg Junction (DURG) has higher seat quotas for trains starting from there (like Amarkantak Exp). Raipur is better for passing trains." },
    { q: "Is ID confirmation needed?", a: "Yes, one passenger must carry an original Government ID (Aadhaar/Voter ID) during the journey to avoid penalties." }
];

const faqs = [
    { question: "Can you book Tatkal tickets from Bhilai?", answer: "Yes, we facilitate Tatkal bookings after the authorized agent window opens (10:15 AM AC / 11:15 AM Non-AC). We maximize confirmation chances by being ready with details instantly." },
    { question: "Is Rudraksh Safar an authorized IRCTC agent?", answer: "Yes, we are a compliant IRCTC booking partner serving Bhilai & Durg. We follow all railway guidelines regarding refunds and booking timings." },
    { question: "Do you help with Ladies or Senior Citizen Quota?", answer: "Absolutely. We specifically check availability in Lower Berth Quota (Senior Citizens) and Ladies Quota to ensure comfortable seats for families." },
    { question: "What happens if my ticket stays Waitlisted?", answer: "If a ticket remains WL after chart preparation, we process the automatic refund immediately. We also suggest alternate buses from Power House if train seats are unavailable." },
    { question: "Do you handle bulk booking for marriages?", answer: "Yes, for groups of 20+ traveling from Durg/Raipur, we use the specific Bulk Booking facility to try and get all seats in the same coach." }
];

// Multi-Layer Schema: Service + FAQPage
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Train Ticket Booking Service in Bhilai",
            "serviceType": "IRCTC Train Ticket Booking Assistance",
            "provider": {
                "@type": "TravelAgency",
                "name": "Rudraksh Safar",
                "telephone": "+919406182174",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bhilai",
                    "addressRegion": "Chhattisgarh",
                    "addressCountry": "IN"
                }
            },
            "areaServed": [
                { "@type": "Place", "name": "Bhilai" },
                { "@type": "Place", "name": "Durg" },
                { "@type": "Place", "name": "Raipur" },
                { "@type": "Place", "name": "Supela" },
                { "@type": "Place", "name": "Power House" },
                { "@type": "Place", "name": "Nehru Nagar" },
                { "@type": "Place", "name": "Risali" },
                { "@type": "Place", "name": "Bhilai Steel Plant" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Train Booking Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tatkal Ticket Booking" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Confirmed Seat Assistance" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Senior Citizen Quota Booking" } }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                }
            }))
        }
    ]
};



return (
    <>
        <Helmet>
            <title>Train Ticket Booking Agent in Bhilai (IRCTC Authorized) | Tatkal & Confirmed Seats</title>
            <meta name="description" content="Trusted IRCTC Agent in Bhilai. We assist with Tatkal, Confirmed, and Senior Citizen railway tickets from Durg & Raipur Junction. Refunds guaranteed." />
            <meta name="keywords" content="train booking agent bhilai, irctc agent bhilai, railway ticket agent durg, tatkal booking bhilai, train ticket booking raipur, confirmed train ticket bhilai" />
            <link rel="canonical" href="https://rudrakshsafar.com/train-booking-bhilai" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>

        <Navbar />

        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Train Booking', path: '/train-booking-bhilai' }]} />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-4 py-2 rounded-full mb-6 border border-green-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <ShieldCheck className="w-5 h-5 text-green-700" />
                            <span className="text-sm font-bold tracking-wide">Authorized IRCTC Booking Partner</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Train Ticket Booking Agent in Bhilai <span className="text-orange-600">(IRCTC Authorized)</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Skip the IRCTC errors. Get expert help for <strong>Tatkal</strong>, <strong>Senior Citizen</strong>, and <strong>Group Bookings</strong> from Durg & Raipur Junction.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 gap-2" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I need help with Train Ticket Booking from Bhilai" target="_blank" rel="noopener noreferrer">
                                    <Phone className="w-5 h-5" />
                                    WhatsApp for Seat Check
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="#quick-answers">Read Rules</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Alert */}
            <section className="py-8 bg-background border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Alert className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10">
                            <Info className="h-5 w-5 text-blue-600" />
                            <AlertTitle className="font-bold text-blue-800 dark:text-blue-300">IRCTC Compliance Notice</AlertTitle>
                            <AlertDescription className="text-blue-700 dark:text-blue-400 mt-1 text-sm">
                                We function strictly as per Indian Railway regulations. Agents are permitted to book Tatkal tickets only <strong>after 10:15 AM (AC)</strong> and <strong>11:15 AM (Non-AC)</strong>. We do not use illegal software; all bookings are manual and legitimate.
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </section>

            {/* TL;DR Section */}
            <div className="container mx-auto px-4 mt-8">
                <TLDRSection
                    title="TL;DR: Train Ticket Agent"
                    summary="We provide authorized IRCTC train ticket booking services from Bhilai, Durg, and Raipur. Our services include Tatkal booking assistance (post-10:15/11:15 AM), Senior Citizen/Ladies Quota checks, and bulk booking for groups. We ensure refund processing for waitlisted tickets."
                    areasServed={["Bhilai", "Durg", "Raipur", "Charoda", "Kumhari"]}
                />
            </div>

            {/* AEO: Quick Answers (Google SGE Optimized) */}
            <section id="quick-answers" className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Train Booking from Bhilai – Quick Answers</h2>
                        <p className="text-muted-foreground">Fast facts about Durg/Raipur railway reservations.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {quickAnswers.map((qa, i) => (
                            <Card key={i} className="border-none shadow-sm ring-1 ring-border/50">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                        {qa.q}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">{qa.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust/Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Expert Booking Services for Bhilai/Durg</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <Card className="hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <CardTitle>Tatkal Assistance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Expert typing speed to Secure seats right when the agent window opens. No waiting in lines at the counter.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <CardTitle>Group & Bulk</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Planning a wedding or college tour from Durg? We organize Bulk Booking for 20+ passengers.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <CardTitle>Quota Management</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">We verify eligibility for Lower Berth (Senior Citizen) and Ladies Quota to get confirmed berths.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <CardTitle>Local Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Office near Supela/Power House. Trusted by Bhilai Steel Plant employees for decades.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Popular Trains */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Popular Trains from Durg (DURG) Junction</h2>
                    <div className="max-w-4xl mx-auto rounded-xl border bg-card overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted">
                                    <TableHead className="font-bold">Train Name</TableHead>
                                    <TableHead className="font-bold">Route</TableHead>
                                    <TableHead className="font-bold">Availability Tip</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {popularTrains.map((train, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{train.name}</TableCell>
                                        <TableCell>{train.route}</TableCell>
                                        <TableCell>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${train.availability.includes('Heavy') || train.availability.includes('High') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                                {train.availability}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-4">*Schedules subject to Indian Railways. Durg Junction is the primary boarding point.</p>
                </div>
            </section>

            <FAQsSection
                title="Train Booking FAQs"
                description="Common questions about Tatkal, Refunds, and Availability."
                faqs={faqs}
            />

            <RelatedServices mode="booking" />

            <section className="py-12 bg-background border-t">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-6">Need a Confirmed Seat?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Don't risk untrusted apps. Get professional booking assistance with refund support.</p>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 h-14 text-lg px-8" asChild>
                        <a href="https://wa.me/919406182174?text=Check Seat Availability for me">
                            <Calendar className="w-5 h-5 mr-2" />
                            Check Availability Now
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

export default TrainBookingBhilai;
