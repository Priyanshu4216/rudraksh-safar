import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Train, Clock, MapPin, AlertTriangle, CheckCircle, ShieldCheck, Phone, Calendar, Users, ChevronDown, ChevronUp, Info, HelpCircle, FileQuestion } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TrainBookingBhilai = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    useEffect(() => {
        // Simulate loading time for the train animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const popularTrains = [
        { name: "Vande Bharat Express", route: "Durg to Visakhapatnam / Nagpur", time: "Daytime", availability: "High Demand" },
        { name: "Gitanjali Express", route: "Durg to Mumbai / Howrah", time: "Daily", availability: "Book 60 days prior" },
        { name: "Azad Hind Express", route: "Durg to Pune / Kolkata", time: "Daily", availability: "Very High Demand" },
        { name: "Chhattisgarh Express", route: "Durg to Amritsar", time: "Daily", availability: "Moderate" },
        { name: "Gondwana Express", route: "Raipur to Nizamuddin (Delhi)", time: "Daily", availability: "High Demand" },
        { name: "Amarkantak Express", route: "Durg to Bhopal / Jabalpur", time: "Evening", availability: "Moderate" },
        { name: "Shivnath Express", route: "Durg to Nagpur", time: "Daily", availability: "Good" },
        { name: "South Bihar Express", route: "Durg to Patna / Tata", time: "Daily", availability: "Heavy Rush" },
        { name: "Durg - Puri Express", route: "Durg to Jagannath Puri", time: "Evening", availability: "Good for Pilgrims" },
    ];

    const faqs = [
        { question: "Can you book Tatkal tickets from Bhilai?", answer: "Yes, we are an authorized agent for Tatkal bookings. Note that as per IRCTC rules, agents can only book Tatkal tickets after the specific opening window (10:15 AM for AC, 11:15 AM for Non-AC). We handle the entire process for you immediately after this time to secure your seat." },
        { question: "Is Rudraksh Safar an authorized IRCTC agent?", answer: "Yes, we are a fully authorized IRCTC booking partner. This means your bookings are safe, regulated, and we offer official support for cancellations and refunds, unlike unauthorized touts." },
        { question: "What documents are needed for train booking?", answer: "For normal booking, we just need the passenger's Name, Age, and Gender. For Tatkal booking, one passenger must provide an Original ID card number (Aadhaar, Voter ID, or Driving License) during the journey." },
        { question: "How long does a train ticket refund take?", answer: "If you cancel a confirmed ticket, the refund amount is credited to your bank account within 3-5 working days. For waitlisted tickets that don't confirm, the refund is automatic." },
        { question: "Do you help with Ladies or Senior Citizen Quota?", answer: "Absolutely. We verify age proof (60+ for men, 45+ for women) to book under the Lower Berth Quota for Senior Citizens. We also prioritize the specific Ladies Quota for female travelers traveling alone or with children." },
        { question: "Can I change my boarding point from Durg to Raipur?", answer: "Yes, boarding points can be changed up to 24 hours before the train's departure. Just inform us on WhatsApp, and we will update it in the official system." },
        { question: "What if my ticket is stuck in Waitlist (WL)?", answer: "We monitor PNR status daily. If it doesn't confirm by the chart preparation time (4 hours before departure), we can help you find alternative trains or buses to ensuring you don't get stranded." },
        { question: "Do you guarantee confirmed tickets?", answer: "Ticket confirmation depends entirely on railway availability and rules. However, our expertise significantly improves the chances by selecting the right quotas and trains." },
        { question: "Is ID required for train travel?", answer: "Yes, valid ID Proof (Aadhaar/Voter ID) is required in original during the journey for at least one passenger in the group." },
    ];

    const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar - Train Ticket Booking Agent Bhilai",
        "intro": "Authorized IRCTC Agent for Tatkal and Normal train tickets.",
        "telephone": "+919406182174",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
        "priceRange": "₹"
    };

    if (isLoading) {
        return <PageLoader type="train" />;
    }

    return (
        <>
            <Helmet>
                <title>Train Ticket Booking Agent in Bhilai | Authorized IRCTC Partner</title>
                <meta name="description" content="Authorized IRCTC Agent in Bhilai. Reliable Tatkal & Confirmed train tickets from Durg/Raipur. Senior Citizen quota help, fast refunds, and PNR status tracking." />
                <meta name="keywords" content="irctc agent bhilai, railway ticket agent durg, tatkal ticket booking bhilai, authorized train booking agent, train ticket refund bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/train-booking-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-4 py-2 rounded-full mb-6 border border-green-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <CheckCircle className="w-5 h-5 fill-green-600 text-white" />
                                <span className="text-sm font-bold tracking-wide">Authorised IRCTC Agent</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Hassle-Free <span className="text-orange-600">Train Ticket Booking</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Skip the IRCTC server errors. Get expert help for Confirmed Seats, Tatkal, and Ladies Quota bookings from Durg & Raipur Junction.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                                    <a href="https://wa.me/919406182174?text=I need train ticket" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Book via WhatsApp
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a href="#trains">View Popular Trains</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-orange-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-orange-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Train booking services assist travellers with railway ticket reservations, availability checks, and travel planning. We help passengers understand train options, seat availability, travel classes, and booking procedures for smoother railway journeys from Durg and Raipur.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Tatkal Alert Section */}
                <section className="py-12 bg-background border-b">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Alert variant="destructive" className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800 shadow-sm">
                                <AlertTriangle className="h-5 w-5" />
                                <AlertTitle className="text-lg font-bold ml-2">Important Notice: Tatkal Booking Rules</AlertTitle>
                                <AlertDescription className="mt-2 ml-2 text-sm leading-relaxed">
                                    <p className="mb-2">To comply with Indian Railway regulations, authorized agents are <strong>not permitted</strong> to book Tatkal tickets during the exclusive opening window:</p>
                                    <ul className="list-disc list-inside font-medium opacity-90 space-y-1">
                                        <li>AC Class (10:00 AM - 10:30 AM)</li>
                                        <li>Non-AC Class (11:00 AM - 11:30 AM)</li>
                                    </ul>
                                    <p className="mt-2">We can legally assist you with Tatkal bookings <strong>after</strong> this restrictive time slot, subject to availability. We prioritize transparency and compliance.</p>
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>
                </section>

                {/* Planning & Types */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Train Travel Planning Made Easy</h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Train travel is one of the most economical modes of transport. However, availability rules, waiting lists, and class options can be confusing.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" /> Check real-time availability</li>
                                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" /> Explain quota options (Tatkal/Ladies)</li>
                                        <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" /> Assist with waiting list prediction</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="font-bold text-xl mb-4">Types of Bookings We Assist With</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="bg-background p-3 rounded-lg shadow-sm font-medium">🚄 General & Tatkal Reservations</div>
                                        <div className="bg-background p-3 rounded-lg shadow-sm font-medium">🛌 Sleeper (SL) & AC Classes (1A, 2A, 3A)</div>
                                        <div className="bg-background p-3 rounded-lg shadow-sm font-medium">👥 Group Travel Coordination</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid - Updated with Bulk Booking */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Book Train Tickets with Us?</h2>
                            <p className="text-muted-foreground">Expertise that increases your chances of a confirmed seat.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Users className="w-10 h-10 text-orange-600 mb-2" />
                                    <CardTitle>Quota Expertise</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Senior Citizen, Ladies, and Lower Berth assistance for comfortable family travel.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-orange-600 mb-2" />
                                    <CardTitle>Bulk / Group Booking</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Marriage party or College tour? We handle <strong>Bulk Bookings</strong> (50+ seats) ensuring everyone gets in the same coach.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-orange-600 mb-2" />
                                    <CardTitle>PNR Prediction</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Waitlisted? Our experts analyze trends to tell you if your ticket has a chance of confirming.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Calendar className="w-10 h-10 text-orange-600 mb-2" />
                                    <CardTitle>Advance Planning</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Booking opens 60 days in advance (new IRCTC rule). We book exactly when the window opens.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>



                {/* Station Insights */}
                <section className="py-16 bg-background border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 rounded-2xl border border-orange-100 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MapPin className="w-6 h-6 text-orange-600" />
                                        <h3 className="text-xl font-bold">Durg Junction (DURG)</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Starting point for major long-distance trains like Gitanjali and Amarkantak Express. Higher quota availability for Tatkal bookings compared to Raipur.
                                    </p>
                                    <ul className="text-xs space-y-2 text-foreground font-medium">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> 5+ Platforms</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> AC Waiting Rooms</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl border border-orange-100 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MapPin className="w-6 h-6 text-orange-600" />
                                        <h3 className="text-xl font-bold">Raipur Junction (R)</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Ideal boarding point for trains coming from Bilaspur/Nagpur direction. Has premium lounge facilities and better food options for waiting passengers.
                                    </p>
                                    <ul className="text-xs space-y-2 text-foreground font-medium">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> Escallators & Lifts</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> 24x7 Food Plaza</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Trains Table */}
                <section id="trains" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Popular Trains from Durg & Raipur</h2>
                        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-orange-50 dark:bg-orange-950/20">
                                        <TableHead className="font-bold text-foreground">Train Name</TableHead>
                                        <TableHead className="font-bold text-foreground">Route</TableHead>
                                        <TableHead className="font-bold text-foreground">Timing</TableHead>
                                        <TableHead className="font-bold text-foreground">Booking Tip</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {popularTrains.map((train, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{train.name}</TableCell>
                                            <TableCell>{train.route}</TableCell>
                                            <TableCell>{train.time}</TableCell>
                                            <TableCell>
                                                <span className={`text-xs px-2 py-1 rounded-full ${train.availability === 'High Demand' || train.availability === 'Heavy Rush' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                                    {train.availability}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">*Schedules subject to change by Indian Railways.</p>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Train Booking FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {displayedFaqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`}>
                                        <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="text-center mt-8">
                                <Button variant="outline" onClick={() => setShowAllFaqs(!showAllFaqs)}>
                                    {showAllFaqs ? (
                                        <>Show Less <ChevronUp className="ml-2 w-4 h-4" /></>
                                    ) : (
                                        <>Load More Guide <ChevronDown className="ml-2 w-4 h-4" /></>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-16 pt-4 bg-background">
                    <div className="container mx-auto px-4">
                        <p className="text-sm text-center text-muted-foreground max-w-3xl mx-auto">
                            <strong>Important Information:</strong> Train services are governed by railway authorities. Schedule changes, delays, and availability are outside booking assistance control.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-orange-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Plan Your Journey Today</h2>
                        <p className="text-lg opacity-90 mb-8">Don't wait for tickets to sell out. Secure your seat now.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8 text-orange-700" asChild>
                            <a href="https://wa.me/919406182174?text=Check train availability for me">
                                <Phone className="w-5 h-5 mr-2" /> Check Availability
                            </a>
                        </Button>
                    </div>
                </section>
            </main >
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TrainBookingBhilai;
