import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, Train, Bus, Phone, MapPin, AlertTriangle, CheckCircle, Clock, ShieldCheck, CreditCard, HelpCircle, X, Check, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import RelatedServices from '@/components/RelatedServices';

const TicketBookingBhilai = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar - Ticket Booking Agent Bhilai",
        "image": "https://rudrakshsafar.com/og-image.png",
        "url": "https://rudrakshsafar.com/ticket-booking-bhilai",
        "telephone": "+919406182174",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.206181",
            "longitude": "81.424916"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "10:00",
            "closes": "21:00"
        },
        "priceRange": "₹"
    };

    return (
        <>
            <Helmet>
                <title>Flight & Train Ticket Agent in Bhilai | Confirmed Railway Booking | Rudraksh Safar</title>
                <meta name="description" content="Reliable ticket booking agent in Bhilai 3 for Flights, Trains & Buses. Tatkal ticket assistance, best flight deals from Raipur, and instant confirmation. Visit our office today." />
                <meta name="keywords" content="ticket booking agent bhilai, railway ticket booking bhilai, tatkal ticket agent bhilai, flight ticket agent bhilai, train ticket office near me, local travel agent bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/ticket-booking-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "TravelAgency",
                                "name": "Rudraksh Safar - Ticket Booking Office",
                                "image": "https://rudrakshsafar.com/og-image.png",
                                "url": "https://rudrakshsafar.com/ticket-booking-bhilai",
                                "telephone": "+919406182174",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Shop No 16, Khursipar, GE Road",
                                    "addressLocality": "Bhilai",
                                    "addressRegion": "Chhattisgarh",
                                    "postalCode": "490011",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": "21.206181",
                                    "longitude": "81.424916"
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "10:00",
                                    "closes": "21:00"
                                },
                                "priceRange": "₹",
                                "areaServed": ["Bhilai", "Durg", "Raipur", "Charoda", "Kumhari"]
                            },
                            {
                                "@type": "Service",
                                "name": "Ticket Booking Services",
                                "serviceType": "Ticket Booking Services",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Rudraksh Safar"
                                },
                                "areaServed": ["Bhilai", "Durg", "Raipur"],
                                "availableChannel": {
                                    "@type": "ServiceChannel",
                                    "serviceLocation": {
                                        "@type": "Place",
                                        "name": "Bhilai 3 Office"
                                    }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "Bhilai Services", "item": "https://rudrakshsafar.com/ticket-booking-bhilai" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Is there a ticket booking agent in Bhilai?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Rudraksh Safar is a trusted ticket booking agent in Bhilai, offering flight, train, and bus ticket booking with local office support, instant assistance, and transparent pricing." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can you help with Tatkal ticket booking?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide legal assistance for Tatkal bookings. We do not use automation software; all bookings are done through official IRCTC channels with customer consent." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you book flight tickets from Raipur?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We book domestic and international flights from Raipur Swami Vivekananda Airport (RPR) and provide web check-in support." }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">Bhilai's Trusted Booking Partner</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Flight & Train Ticket <span className="text-blue-600">Booking in Bhilai</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Hassle-free ticket booking for Flights, Trains, and Buses.
                                Get confirmed seats, best deals, and instant support from your local agent.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="https://wa.me/919406182174?text=Hi, I need to book a ticket" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Book on WhatsApp
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a href="tel:+919406182174">Call: +91 94061 82174</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Booking Context - H1/H2 Clarity Upgrade */}
                <section id="local-booking-context" className="py-12 bg-white dark:bg-slate-950 border-b">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Local Ticket Booking Agent in Bhilai for Flights, Trains & Buses</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Rudraksh Safar provides reliable ticket booking services in <span className="text-foreground font-semibold">Bhilai & Durg</span> for railway tickets,
                            flight reservations, bus tickets, and urgent travel needs. We assist with confirmed bookings, cancellations, and schedule changes
                            with <span className="text-blue-600 font-bold">direct human support</span> at our local office.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Flight Booking */}
                            <Link to="/flight-booking-bhilai" className="group">
                                <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900 cursor-pointer h-full">
                                    <CardHeader className="text-center pb-2">
                                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                                            <Plane className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <CardTitle>Flight Tickets</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left inline-block">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Domestic & International</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Best rates from Raipur (RPR)</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Web Check-in Assistance</li>
                                        </ul>
                                        <div className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors">
                                            Check Flight Rates
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>

                            {/* Train Booking */}
                            <Link to="/train-booking-bhilai" className="group">
                                <Card className="hover:shadow-lg transition-all border-orange-100 dark:border-orange-900 relative overflow-hidden cursor-pointer h-full">
                                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium">most popular</div>
                                    <CardHeader className="text-center pb-2">
                                        <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                                            <Train className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <CardTitle>Train / Railway Tickets</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left inline-block">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Confirmed Seat Assistance</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Tatkal Ticket Guidance</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Senior Citizen Quota</li>
                                        </ul>

                                        {/* Tatkal Disclaimer - STAR POINT */}
                                        <Alert variant="destructive" className="mb-4 text-left border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800">
                                            <AlertTriangle className="h-4 w-4" />
                                            <AlertTitle>Important Note for Tatkal</AlertTitle>
                                            <AlertDescription className="text-xs">
                                                No Tatkal booking during opening window (10-11:30 AM). Legal bookings only.
                                            </AlertDescription>
                                        </Alert>

                                        <div className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors">
                                            Enquire Availability
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>

                            {/* Bus Booking */}
                            <Link to="/bus-booking-bhilai" className="group">
                                <Card className="hover:shadow-lg transition-all border-purple-100 dark:border-purple-900 cursor-pointer h-full">
                                    <CardHeader className="text-center pb-2">
                                        <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                                            <Bus className="w-7 h-7 text-purple-600" />
                                        </div>
                                        <CardTitle>Bus Booking</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left inline-block">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AC / Sleeper / Volvo</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Bhilai to Hyderabad/Pune</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Ladies Seat Safety</li>
                                        </ul>
                                        <div className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors">
                                            Book Bus Ticket
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>

                            {/* Passport Services (Added for Completeness) */}
                            <Link to="/passport-agent-bhilai" className="group">
                                <Card className="hover:shadow-lg transition-all border-indigo-100 dark:border-indigo-900 cursor-pointer h-full">
                                    <CardHeader className="text-center pb-2">
                                        <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                                            <ShieldCheck className="w-7 h-7 text-indigo-600" />
                                        </div>
                                        <CardTitle>Passport Services</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left inline-block">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> New & Renewal</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Raipur PSK Appointment</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Police Verif. Guide</li>
                                        </ul>
                                        <div className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors">
                                            Get Passport Help
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Local Trust Indicators */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10">Why Book With Us?</h2>
                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            <div className="text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">Local Office</h3>
                                <p className="text-sm text-muted-foreground">Visit us at Bhilai 3 for trust</p>
                            </div>
                            <div className="text-center">
                                <CreditCard className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">Easy Refunds</h3>
                                <p className="text-sm text-muted-foreground">Instant processing for failed bookings</p>
                            </div>
                            <div className="text-center">
                                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">24/7 Support</h3>
                                <p className="text-sm text-muted-foreground">Change in plans? We help anytime</p>
                            </div>
                            <div className="text-center">
                                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">Genuine Rates</h3>
                                <p className="text-sm text-muted-foreground">No hidden commission or fees</p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Comparison Table (Featured Snippet Bait) */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Online Vs Local Ticket Agent (Bhilai)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-background shadow-lg rounded-xl overflow-hidden border">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="p-4 text-left">Factor</th>
                                        <th className="p-4 text-left">Online Apps</th>
                                        <th className="p-4 text-left bg-blue-700">Rudraksh Safar</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-4 font-semibold">Human Support</td>
                                        <td className="p-4 text-red-500"><X className="w-5 h-5 inline" /> Chatbot Only</td>
                                        <td className="p-4 text-green-600 font-bold"><Check className="w-5 h-5 inline" /> Real Person (Call/Visit)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Tatkal Guidance</td>
                                        <td className="p-4 text-red-500"><X className="w-5 h-5 inline" /> DIY (Confusing)</td>
                                        <td className="p-4 text-green-600"><Check className="w-5 h-5 inline" /> Expert Assistance</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Refund Help</td>
                                        <td className="p-4 text-red-500">Delayed (5-7 Days)</td>
                                        <td className="p-4 text-green-600"><Check className="w-5 h-5 inline" /> Instant Processing</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Schedule Changes</td>
                                        <td className="p-4">Self-serve</td>
                                        <td className="p-4 text-green-600">Assisted Rescheduling</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Local Office</td>
                                        <td className="p-4 text-red-500"><X className="w-5 h-5 inline" /> No</td>
                                        <td className="p-4 text-green-600"><Check className="w-5 h-5 inline" /> Yes (Bhilai 3)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Transparency & Legal Notice */}
                <section id="booking-transparency" className="py-12 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-100 dark:border-amber-900">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900 rounded-full mb-4">
                            <FileText className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-amber-900 dark:text-amber-100">Legal & Transparent Ticket Booking</h2>
                        <p className="text-lg text-amber-800 dark:text-amber-200">
                            Rudraksh Safar follows strict Indian Railways (IRCTC) and airline booking guidelines.
                            We do not engage in illegal Tatkal booking practices or automation software.
                            All bookings are processed legally with full customer consent and valid ID documentation.
                        </p>
                    </div>
                </section>

                {/* AEO / "Near Me" Answer Blocks */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-10 text-center">Common Questions regarding Booking Services</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Is there a ticket booking agent in Bhilai?",
                                    a: "Yes, Rudraksh Safar is a trusted ticket booking agent in Bhilai (near Bhilai 3 Petrol Pump), offering flight, train, and bus ticket booking with local office support."
                                },
                                {
                                    q: "Do you book railway tickets in Bhilai?",
                                    a: "Yes, we book confirmed railway tickets for all trains to/from Bhilai, Durg, and Raipur stations. We also assist with senior citizen and ladies quota bookings."
                                },
                                {
                                    q: "Can you help with Tatkal ticket booking?",
                                    a: "Yes, we provide guidance and assistance for legitimate Tatkal bookings. Please note we strictly adhere to IRCTC opening times and rules."
                                },
                                {
                                    q: "Do you book flight tickets from Raipur?",
                                    a: "Yes, we offer flight booking services from Raipur Airport (RPR) to Delhi, Mumbai, Bangalore, and international destinations with web check-in support."
                                },
                                {
                                    q: "Can I cancel or reschedule tickets?",
                                    a: "Yes, unlike online apps where you struggle with bots, you can call us directly to cancel or reschedule your tickets. Refunds are processed immediately upon receipt."
                                },
                                {
                                    q: "Is bus ticket booking available in Bhilai?",
                                    a: "Yes, we book bus tickets for major routes like Bhilai to Hyderabad, Pune, Nagpur, and Indore, including AC Sleeper and Volvo options."
                                },
                                {
                                    q: "What are your working hours?",
                                    a: "Our ticket booking office in Bhilai 3 is open from 10:00 AM to 9:00 PM, Monday to Saturday. We are also available on WhatsApp for urgent queries."
                                },
                                {
                                    q: "Do you charge extra commission?",
                                    a: "We maintain transparent pricing. Any service charge is communicated upfront before booking. There are no hidden fees."
                                },
                                {
                                    q: "Can senior citizens get booking assistance?",
                                    a: "Absolutely. We give special attention to senior citizens, helping them find lower berths in trains and convenient flight connections with wheelchair assistance."
                                },
                                {
                                    q: "Is passport help available at booking office?",
                                    a: "Yes, along with tickets, we can guide you on <a href='/passport-agent-bhilai' class='text-blue-600 underline'>passport application and documentation</a> for your international trips."
                                }
                            ].map((item, index) => (
                                <div key={index} itemScope itemType="https://schema.org/Question" className="bg-background border rounded-lg overflow-hidden">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={`item-${index}`} className="border-b-0">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 dark:hover:bg-slate-800">
                                                <span itemProp="name" className="text-left font-semibold text-lg flex items-start gap-3">
                                                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                                    {item.q}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/50" itemScope itemType="https://schema.org/Answer">
                                                <p itemProp="text" className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }}></p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Need a Ticket Urgently?</h2>
                        <p className="text-lg opacity-90 mb-8">Don't risk waitlisted tickets. Talk to our expert.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="https://wa.me/919406182174?text=Urgent ticket booking help needed">
                                <Phone className="w-5 h-5 mr-2" /> Call Now
                            </a>
                        </Button>
                    </div>
                </section>
                <RelatedServices mode="booking" />

                {/* Sticky Mobile CTA */}
                <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none md:hidden">
                    <div className="pointer-events-auto w-full">
                        <Button size="lg" className="w-full bg-blue-700 hover:bg-blue-800 text-white shadow-2xl rounded-full font-bold h-14" asChild>
                            <a href="https://wa.me/919406182174?text=Hi, I need urgent ticket booking assistance">
                                <Phone className="w-5 h-5 mr-2" /> Book Ticket Now
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TicketBookingBhilai;
