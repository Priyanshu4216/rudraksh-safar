import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, Train, Bus, Phone, MapPin, AlertTriangle, CheckCircle, Clock, ShieldCheck, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
                <meta name="description" content="Reliable ticket booking agent in Bhilai for Flights, Trains & Buses. Tatkal ticket assistance, best flight deals from Raipur, and instant confirmation. Call +91 94061 82174." />
                <meta name="keywords" content="flight ticket agent bhilai, train ticket booking bhilai, railway ticket agent bhilai, tatkal ticket agent bhilai, bus ticket booking bhilai, air ticket agent durg" />
                <link rel="canonical" href="https://rudrakshsafar.com/ticket-booking-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TicketBookingBhilai;
