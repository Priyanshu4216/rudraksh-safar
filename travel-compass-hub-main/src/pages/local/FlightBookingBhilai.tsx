import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plane, Clock, MapPin, CheckCircle, ShieldCheck, Phone, Globe, CreditCard, FileText, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FAQsSection from '@/components/FAQsSection';

const FlightBookingBhilai = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageLoader type="flight" />;
    }
    const directFlights = [
        { dest: "Delhi (DEL)", freq: "Daily (Multiple)", airline: "IndiGo, Vistara", time: "2h 00m" },
        { dest: "Mumbai (BOM)", freq: "Daily", airline: "IndiGo, Air India", time: "1h 50m" },
        { dest: "Bangalore (BLR)", freq: "Daily", airline: "IndiGo", time: "2h 15m" },
        { dest: "Hyderabad (HYD)", freq: "Daily", airline: "IndiGo", time: "1h 30m" },
        { dest: "Kolkata (CCU)", freq: "Daily", airline: "IndiGo", time: "1h 35m" },
        { dest: "Indore (IDR)", freq: "Direct/Via", airline: "IndiGo", time: "1h 10m" },
    ];

    const faqs = [
        { question: "Why book with an agent instead of online apps?", answer: "Online apps often have hidden 'convenience fees', 'meal charges', and 'seat selection fees'. We give you a final, transparent price. Plus, if your flight is cancelled, we handle the refund fight for you—you don't have to talk to a chatbot." },
        { question: "Do you help with Web Check-in?", answer: "Yes! We generate your boarding pass and send it to your WhatsApp 24-48 hours before the flight, so you don't have to worry about the check-in window." },
        { question: "Can I get a GST Invoice for business travel?", answer: "Absolutely. Provide your GST details at the time of booking, and we will issue a proper GST invoice for your company claim." },
        { question: "Do you book International flights?", answer: "Yes, we book flights to Dubai, Thailand, Singapore, USA, UK, and more with visa assistance." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar - Flight Booking Agent Bhilai",
        "intro": "Authorized air ticket booking services in Bhilai for Domestic & International flights.",
        "telephone": "+919406182174",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
        "priceRange": "₹₹"
    };

    return (
        <>
            <Helmet>
                <title>Flight Booking Agent in Bhilai | Cheap Air Tickets from Raipur</title>
                <meta name="description" content="Best Flight Ticket Agent in Bhilai. Direct flights from Raipur to Delhi, Mumbai, Bangalore. No hidden fees, free web check-in, and GST invoice support." />
                <meta name="keywords" content="flight ticket agent bhilai, air ticket booking raipur, cheap flights from raipur, travel agent for flights bhilai, indigo booking agents bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/flight-booking-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-blue-50 via-background to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
                                <Plane className="w-4 h-4" />
                                <span className="text-sm font-medium">Flight Booking Specialist in Bhilai</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Fly Smart with <span className="text-blue-600">Local Expertise</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Getting the best fare is an art. We compare all airlines from Raipur Airport (RPR) to get you the cheapest deal with no hidden surprises.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="https://wa.me/919406182174?text=I need flight prices" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Get Price Quote
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid - Updated for Corporate/Group */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">The Rudraksh Application Advantage</h2>
                            <p className="text-muted-foreground">Why 5000+ flyers choose us over websites.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-blue-600 mb-2" />
                                    <CardTitle>Free Web Check-in</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">We check you in, pick preferred seats, and WhatsApp the boarding pass to you.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900">
                                <CardHeader>
                                    <FileText className="w-10 h-10 text-blue-600 mb-2" />
                                    <CardTitle>GST Invoice</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Business trip? Get a valid GST Invoice instantly to claim 100% Tax Credit (ITC) for your company.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900">
                                <CardHeader>
                                    <Users className="w-10 h-10 text-blue-600 mb-2" />
                                    <CardTitle>Group Fares</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Traveling with 9+ people? We unlock special "Series Fares" lower than online rates.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900">
                                <CardHeader>
                                    <ShieldCheck className="w-10 h-10 text-blue-600 mb-2" />
                                    <CardTitle>Reschedule Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Change plans easily. We handle the airline coordination instantly.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Direct Flights Table */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Direct Connectivity from Raipur (RPR)</h2>
                        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-blue-50 dark:bg-blue-950/20">
                                        <TableHead className="font-bold text-foreground">Destination</TableHead>
                                        <TableHead className="font-bold text-foreground">Frequency</TableHead>
                                        <TableHead className="font-bold text-foreground">Airlines</TableHead>
                                        <TableHead className="font-bold text-foreground">Avg. Flight Time</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {directFlights.map((flight, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{flight.dest}</TableCell>
                                            <TableCell>{flight.freq}</TableCell>
                                            <TableCell>{flight.airline}</TableCell>
                                            <TableCell>{flight.time}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    title="Frequently Asked Questions on Flight Booking"
                    description="Everything you need to know about booking air tickets from Raipur with Rudraksh Safar."
                    faqs={[
                        {
                            question: "How can I get the cheapest flight tickets from Raipur?",
                            answer: "To get the cheapest rates from Raipur (RPR), we recommend booking 2-3 weeks in advance. Rudraksh Safar compares fares across multiple B2B portals and airline systems to find you 'Series Fares' and 'Coupon Fares' that are often cheaper than online websites."
                        },
                        {
                            question: "Do you charge extra hidden fees like online apps?",
                            answer: "No! Unlike online apps that add 'Convenience Fees', 'Meal Charges', and 'Seat Selection Costs' at the last step, our pricing is transparent. The price we quote is the final price you pay. No surprises."
                        },
                        {
                            question: "Can I get a GST Invoice for my corporate flight booking?",
                            answer: "Yes, absolutely. We provide valid GST invoices for all business travel. Just share your company's GST details at the time of booking, and you can claim 100% Tax Credit (ITC) for your business expenses."
                        },
                        {
                            question: "Do you handle web check-in for passengers?",
                            answer: "Yes, this is a complimentary service for our clients. We track your flight window, complete your web check-in, select the best available seats, and send the boarding pass directly to your WhatsApp 24-48 hours before departure."
                        },
                        {
                            question: "What happens if my flight is cancelled or rescheduled?",
                            answer: "This is where a travel agent shines. Instead of you waiting on hold with airline customer care for hours, we handle the rescheduling or refund process for you. We fight for your refund and ensure you get the best alternative flight options immediately."
                        },
                        {
                            question: "Can you book international flights from Raipur with visa support?",
                            answer: "Yes, we book flights to all major international destinations including Dubai, Thailand, Singapore, USA, London, and Canada. We also provide complete visa assistance, travel insurance, and foreign exchange (Forex) services as a one-stop solution."
                        },
                        {
                            question: "Do you offer group discounts for family or wedding travel?",
                            answer: "Yes! If you are traveling with 9 or more people, we can access special 'Group Fares' from airlines which are significantly lower than individual ticket prices. Perfect for family vacations, weddings, or corporate team outings."
                        },
                        {
                            question: "How can I pay for my flight ticket?",
                            answer: "We offer flexible payment options including UPI (Google Pay, PhonePe), Bank Transfer (IMPS/NEFT), and Cash at our Bhilai office. For expensive international tickets, we can effectively manage payment schedules."
                        },
                    ]}
                />

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Book Your Flight Today</h2>
                        <p className="text-lg opacity-90 mb-8">Get the best price manual comparison by our experts.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8 text-blue-700" asChild>
                            <a href="https://wa.me/919406182174?text=I want to book a flight">
                                <Phone className="w-5 h-5 mr-2" /> Message Us
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Legal Disclaimer */}
                <section className="bg-background py-6 border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto opacity-70">
                            <p className="text-xs text-muted-foreground text-center">
                                <strong>Disclaimer:</strong> Flight prices are dynamic and subject to change until the ticket is issued. Rudraksh Safar is an authorized booking agent; flight delays, cancellations, or schedule changes are under the airline's jurisdiction.
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

export default FlightBookingBhilai;
