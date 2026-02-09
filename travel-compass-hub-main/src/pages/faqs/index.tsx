import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Plane, Train, Hotel, Car, Globe, FileText, Anchor, MapPin } from 'lucide-react';

const FAQHub = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [] // Will be populated as questions are added
    };

    const serviceSilos = [
        { title: "Train Booking FAQs", icon: Train, link: "/faqs/train-booking", desc: "Tatkal, Cancellations & IRCTC Rules" },
        { title: "Flight Booking FAQs", icon: Plane, link: "/faqs/flight-booking", desc: "Web Check-in, Baggage & Rescheduling" },
        { title: "Hotel Booking FAQs", icon: Hotel, link: "/faqs/hotel-booking", desc: "Check-in times, Meal Plans & Couples Policy" },
        { title: "Cab Booking FAQs", icon: Car, link: "/faqs/cab-booking", desc: "Outstation, Local Rentals & Driver Details" },
        { title: "Visa Services FAQs", icon: FileText, link: "/faqs/visa-services", desc: "Requirements, Processing Time & Fees" },
        { title: "Passport Services FAQs", icon: FileText, link: "/faqs/passport-services", desc: "New Applications, Renewals & Tatkal" },
        { title: "International Tours FAQs", icon: Globe, link: "/faqs/international-tours", desc: "Inclusions, Forex & Sim Cards" },
        { title: "Tour Packages FAQs", icon: Globe, link: "/faqs/tour-packages", desc: "General Questions, Pricing & Inclusions" },
        { title: "Cruise Booking FAQs", icon: Anchor, link: "/faqs/cruise-booking", desc: "Boarding, Activities & Seasickness" },
    ];

    const localSilos = [
        { title: "Bhilai FAQs", link: "/faqs/bhilai", desc: "Office location, Home Visits & Local Services" },
        { title: "Raipur FAQs", link: "/faqs/raipur", desc: "Airport Pickups, Home Delivery & Consultations" },
        { title: "Durg FAQs", link: "/faqs/durg", desc: "Railway Station Transfers & Nearby Areas" },
    ];

    return (
        <>
            <Helmet>
                <title>Travel Agency FAQs | Rudraksh Safar - Your Questions Answered</title>
                <meta name="description" content="Detailed answers to all your travel questions. Flight bookings, train tickets, visas, and tour packages explained by Rudraksh Safar experts." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <section className="relative py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'FAQs', path: '/faqs' }]} />
                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                                How Can We <span className="text-primary">Help You?</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Find answers to common questions about our services, booking policies, and travel assistance.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Browse by Service</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceSilos.map((silo, index) => (
                                <Link key={index} to={silo.link} className="group">
                                    <Card className="h-full hover:shadow-lg transition-all border-muted/50">
                                        <CardHeader>
                                            <silo.icon className="w-10 h-10 text-primary mb-4" />
                                            <CardTitle className="group-hover:text-primary transition-colors">{silo.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{silo.desc}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Local Support FAQs</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {localSilos.map((silo, index) => (
                                <Link key={index} to={silo.link} className="group">
                                    <Card className="h-full hover:shadow-lg transition-all border-muted/50">
                                        <CardHeader>
                                            <MapPin className="w-10 h-10 text-secondary mb-4" />
                                            <CardTitle className="group-hover:text-secondary transition-colors">{silo.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{silo.desc}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-6">Still have questions?</h2>
                        <p className="text-muted-foreground mb-8">Can't find what you're looking for? Reach out to our support team.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                                Contact Us
                            </Link>
                            <a href="https://wa.me/919406182174" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default FAQHub;
