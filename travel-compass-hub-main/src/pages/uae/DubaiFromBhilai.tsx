import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, MapPin, ShieldCheck, Briefcase, Car, Utensils, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DubaiFromBhilai = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Tour Packages from Bhilai (Flights + Visa) | Rudraksh Safar</title>
                <meta name="description" content="Best Dubai packages from Bhilai (Chhattisgarh). Visit our Estate Plaza office for face-to-face planning. Includes flight guidance, visa, and veg food." />
                <meta name="keywords" content="dubai tour packages from bhilai, travel agent for dubai in bhilai, dubai trip from bhilai, estate plaza bhilai travel agency" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-tour-packages-from-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",
                            "name": "Rudraksh Safar",
                            "url": "https://rudrakshsafar.com",
                            "telephone": "+917566788884",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Shop No-07, G.E. Road, Estate Plaza",
                                "addressLocality": "Bhilai",
                                "addressRegion": "Chhattisgarh",
                                "postalCode": "490020",
                                "addressCountry": "IN"
                            },
                            "priceRange": "₹25000-₹100000"
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Where is your office in Bhilai?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "We are located at Shop No-07, Estate Plaza, G.E. Road, Bhilai. You can visit us anytime for a face-to-face discussion." }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How do we go to Dubai from Bhilai?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "We arrange a cab from Bhilai to Raipur Airport (1 Hour). From Raipur, you take a connecting flight via Delhi or Mumbai to Dubai." }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you handle Visas for Bhilai residents?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle the complete Dubai E-Visa process for passport holders of Durg/Bhilai/Raipur." }
                                }
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO */}
                <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&q=80&w=2000"
                        alt="Dubai Skyline"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-blue-950/70" />
                    <div className="relative container max-w-4xl px-4 space-y-6">
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wider mb-4">
                            Exclusively for Bhilai Residents
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                            Dubai Tour Packages from Bhilai
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                            Stop talking to call centers. Walk into our office at Estate Plaza, Bhilai and plan your dream Dubai trip face-to-face.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 font-bold" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I want to visit your Bhilai office for Dubai package." target="_blank" rel="noopener noreferrer">
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2 filter brightness-0 invert" />
                                    Chat with Expert
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-16 space-y-20">

                    {/* 1. FLIGHT CONNECTIVITY GUIDE */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Plane className="w-8 h-8 text-blue-600" /> Traveling from Bhilai to Dubai
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-l-4 border-l-blue-600 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Step 1: Bhilai to Raipur Airport</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        The journey starts from your home in Bhilai.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Car className="w-4 h-4 text-orange-600" />
                                            <span><strong>Distance:</strong> ~45 km (1 Hour via GE Road)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span><strong>Cab Service:</strong> We can arrange a reliable airport drop-off for you.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-purple-600 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Step 2: Raipur (RPR) to Dubai</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        No direct flights, but excellent connection options.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Route A:</span> <strong>Via Delhi (Recommended)</strong>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Route B:</span> <strong>Via Mumbai</strong>
                                        </li>
                                        <li className="border-t pt-2 mt-2 flex justify-between font-bold text-purple-700">
                                            <span>Total Time:</span> <span>~10-12 Hours</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 2. WHY LOCAL TRUST MATTERS */}
                    <section className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">Why Bhilai Families Trust Us?</h2>
                            <p className="text-muted-foreground">
                                We are right here in Estate Plaza. Real people, real office.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <MapPin className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg">Walk-in Anytime</h3>
                                <p className="text-sm text-muted-foreground">
                                    Don't trust valid-until-payment online agents. Come to our office, have tea, and plan your itinerary on a big screen.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <Briefcase className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Visa Hand-Holding</h3>
                                <p className="text-sm text-muted-foreground">
                                    passport details checking is done manually by our experts to ensure specific acceptance for Dubai Immigration.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <Utensils className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg">Pure Veg Food</h3>
                                <p className="text-sm text-muted-foreground">
                                    Many Bhilai families prefer vegetarian food. We book hotels near top Indian/Gujarati restaurants in Bur Dubai.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. POPULAR PACKAGES */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center">Trending Packages for Bhilai</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Dubai Essentials", duration: "5 Days / 4 Nights", price: "₹24,999*", desc: "Burj Khalifa, Desert Safari, Marina Cruise + City Tour.", link: "/dubai-5-day-itinerary" },
                                { title: "Dubai & Abu Dhabi", duration: "6 Days / 5 Nights", price: "₹32,500*", desc: "Includes Ferrari World & Sheikh Zayed Mosque day trip.", link: "/dubai-tour-packages" },
                                { title: "Luxury Couple", duration: "5 Days / 4 Nights", price: "₹45,000*", desc: "Private Transfers, Marina Dinner, 5-Star Hotel Stay.", link: "/dubai-tour-packages" },
                            ].map((pkg, i) => (
                                <Card key={i} className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 space-y-4">
                                        <Badge variant="outline">{pkg.duration}</Badge>
                                        <h3 className="font-bold text-xl">{pkg.title}</h3>
                                        <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                                        <Separator />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">Starting from</span>
                                                <span className="font-bold text-orange-600 text-lg">{pkg.price}</span>
                                                <span className="text-xs text-muted-foreground block">+ Flights</span>
                                            </div>
                                            <Button size="sm" asChild>
                                                <Link to={pkg.link}>View Plan</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <p className="text-center text-xs text-muted-foreground mt-4">*Prices per person for land package only. Flight costs vary.</p>
                    </section>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiFromBhilai;
