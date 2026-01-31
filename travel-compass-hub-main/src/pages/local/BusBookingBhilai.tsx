import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bus, Clock, MapPin, CheckCircle, ShieldCheck, Phone, Wifi, Armchair } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BusBookingBhilai = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const popularRoutes = [
        { dest: "Hyderabad", type: "AC Sleeper / Volvo", time: "Overnight (12-14 hrs)", fare: "₹1200 - ₹2500" },
        { dest: "Pune", type: "AC Sleeper", time: "Overnight (16-18 hrs)", fare: "₹1800 - ₹3000" },
        { dest: "Nagpur", type: "AC / Non-AC Seater", time: "4-5 hrs", fare: "₹400 - ₹800" },
        { dest: "Indore", type: "AC Sleeper", time: "Overnight (10-12 hrs)", fare: "₹1000 - ₹2000" },
        { dest: "Bhubaneswar", type: "AC Sleeper", time: "Overnight (10-12 hrs)", fare: "₹1000 - ₹1800" },
    ];

    const faqs = [
        { question: "Where are the boarding points in Bhilai?", answer: "Major boarding points include Power House, Supela, Rajeshwari Travels (GE Road), and Nehru Nagar. We will guide you to the nearest point based on your location." },
        { question: "Are sleeper buses comfortable for families?", answer: "Yes, modern AC sleeper buses (Volvo/Scania) come with personal charging points, blankets, and smooth suspension. We recommend booking 'Double' berths for couples/families." },
        { question: "Is it safe for solo female travelers?", answer: "Absolutely. We only book with top-rated operators (like Hans, Kanker, Mahendra) that track buses via GPS. We can also reserve specific 'Ladies' seats for added security." },
        { question: "Can I cancel my bus ticket?", answer: "Yes, cancellation policies vary by operator but usually allow refunds if cancelled 4-12 hours before departure. We process the refund for you instantly." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar - Bus Ticket Agent Bhilai",
        "intro": "Luxury Bus booking services from Bhilai to Hyderabad, Pune, Nagpur.",
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
        return <PageLoader type="bus" />;
    }

    return (
        <>
            <Helmet>
                <title>Luxury Bus Ticket Booking in Bhilai | AC Sleeper to Hyderabad, Pune</title>
                <meta name="description" content="Book AC Sleeper Bus tickets from Bhilai to Hyderabad, Pune, Indore, Nagpur. Trusted bus agent in Bhilai. Volvo/Scania booking with ladies seat assurance." />
                <meta name="keywords" content="bus ticket agent bhilai, volvo bus booking bhilai, bhilai to hyderabad bus, bhilai to pune bus ticket, luxury bus agent durg" />
                <link rel="canonical" href="https://rudrakshsafar.com/bus-booking-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-purple-50 via-background to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2 rounded-full mb-6">
                                <Bus className="w-4 h-4" />
                                <span className="text-sm font-medium">Interstate Bus Booking Service</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Comfort on Wheels: <span className="text-purple-600">Luxury Bus Booking</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Travel to Hyderabad, Pune, or Indore in style. We book only top-rated AC Sleepers with clean linens and GPS tracking.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                                    <a href="https://wa.me/919406182174?text=I need bus ticket" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Book Seat Now
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <Armchair className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Seat Selection</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Lower berth? Front row? Single seat? We let you choose exactly where you sit for maximum comfort.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <ShieldCheck className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Safety First</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We partner with operators known for punctuality and safe driving. Special care for female solo travelers.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <Wifi className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Modern Amenities</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Most buses we book feature Charging Points, Reading Lights, Blankets, and sometimes WiFi.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us - Agent Benefits */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Book with Rudraksh Safar?</h2>
                            <p className="text-muted-foreground">More than just a ticket - we provide travel assurance.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <ShieldCheck className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Vetted Operators Only</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We don't book cheap, unreliable buses. We only partner with operators who have a track record of punctuality and safety.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <Phone className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Instant Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Bus late? Boarding point confusion? Call us directly. You get a human, not a customer care IVR.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Hassle-Free Refunds</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">If the bus is cancelled by the operator, we process your full refund instantly to your account.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Routes Table */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Top Bus Routes from Bhilai</h2>
                        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-purple-50 dark:bg-purple-950/20">
                                        <TableHead className="font-bold text-foreground">Destination</TableHead>
                                        <TableHead className="font-bold text-foreground">Bus Type</TableHead>
                                        <TableHead className="font-bold text-foreground">Travel Time</TableHead>
                                        <TableHead className="font-bold text-foreground">Est. Fare</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {popularRoutes.map((route, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{route.dest}</TableCell>
                                            <TableCell>{route.type}</TableCell>
                                            <TableCell>{route.time}</TableCell>
                                            <TableCell>{route.fare}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Bus Booking FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`}>
                                        <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-purple-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Ride?</h2>
                        <p className="text-lg opacity-90 mb-8">Secure your preferred seat before the bus fills up.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8 text-purple-700" asChild>
                            <a href="https://wa.me/919406182174?text=Bus ticket enquiry">
                                <Phone className="w-5 h-5 mr-2" /> Book Bus Ticket
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Legal Disclaimer */}
                <section className="bg-background py-6 border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto opacity-70">
                            <p className="text-xs text-muted-foreground text-center">
                                <strong>Disclaimer:</strong> Rudraksh Safar is a booking partner. Amenities like WiFi/AC usage and arrival timings are dependent on the respective Bus Operator. We assist with refunds but are not liable for operational delays.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BusBookingBhilai;
