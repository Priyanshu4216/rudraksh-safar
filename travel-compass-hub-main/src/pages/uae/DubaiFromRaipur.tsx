import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, MapPin, ShieldCheck, Briefcase, Phone, CheckCircle2, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DubaiFromRaipur = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Tour Packages from Raipur (Flights + Visa) | Rudraksh Safar</title>
                <meta name="description" content="Best Dubai packages from Raipur (Chhattisgarh). Includes flight guidance (RPR to DXB), visa assistance, and specialized veg/Jain food arrangements. Local office in Bhilai." />
                <meta name="keywords" content="dubai tour packages from raipur, dubai trip cost from raipur, travel agent for dubai in raipur, dubai packages from bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-tour-packages-from-raipur" />
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
                                    "name": "Is there a direct flight from Raipur to Dubai?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "No, currently there are no direct international flights from Swami Vivekananda Airport (RPR). You must connect via Delhi (DEL) or Mumbai (BOM)." }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How much does a Dubai trip cost from Raipur?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Approx ₹55,000 - ₹65,000 per person. This includes Flights (~₹25k), Visa (~₹6k), and a 5-day budget Land Package (~₹25k)." }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you provide visa service for passports issued in Chhattisgarh?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Yes! Passports issued in Raipur/Bhilai work perfectly for Dubai E-Visas. We handle the entire application process for you." }
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
                            For Chhattisgarh Travelers
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                            Dubai Tour Packages from Raipur
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                            The smartest way to plan your UAE trip from Raipur & Bhilai. We handle your flights, visa, and meals.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 font-bold" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I want a quote for Dubai package from Raipur." target="_blank" rel="noopener noreferrer">
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2 filter brightness-0 invert" />
                                    Get Quote (WhatsApp)
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-16 space-y-20">

                    {/* 1. FLIGHT CONNECTIVITY GUIDE */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Plane className="w-8 h-8 text-blue-600" /> Flight Options: Raipur (RPR) to Dubai (DXB)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-l-4 border-l-blue-600 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Option A: Via Delhi (Recommended)</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Best for consistent timings and luggage check-in through to Dubai.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Start:</span> <strong>RPR (IndiGo 6E) → DEL</strong>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Layover:</span> <strong>Approx 3-4 Hours (T3)</strong>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Leg 2:</span> <strong>DEL (IndiGo/AirIndia) → DXB</strong>
                                        </li>
                                        <li className="border-t pt-2 mt-2 flex justify-between font-bold text-blue-700">
                                            <span>Total Time:</span> <span>~9-11 Hours</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-purple-600 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Option B: Via Mumbai</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Good alternative if Delhi flights are expensive. Requires changing terminals in Mumbai sometimes.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Start:</span> <strong>RPR (IndiGo) → BOM</strong>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Layover:</span> <strong>Approx 4-5 Hours</strong>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Leg 2:</span> <strong>BOM → DXB</strong>
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
                            <h2 className="text-3xl font-bold mb-4">Why Book with Rudraksh Safar?</h2>
                            <p className="text-muted-foreground">
                                We are not a call center in Noida. We are your neighbors in Bhilai.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <MapPin className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg">Local Office in Bhilai</h3>
                                <p className="text-sm text-muted-foreground">
                                    Visit us at Shop No-07, G.E. Road, Estate Plaza, Bhilai. Meet us face-to-face before paying a single rupee.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <Briefcase className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Visa Assurance</h3>
                                <p className="text-sm text-muted-foreground">
                                    We check your documents manually. If there's an issue, we fix it locally instead of rejecting you via email.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                    <Utensils className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg">Veg & Jain Food</h3>
                                <p className="text-sm text-muted-foreground">
                                    We know our community's dietary needs. We ensure your hotel and tour meals have pure veg options.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. POPULAR PACKAGES */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center">Trending Dubai Packages</h2>
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

                        {/* Internal Link Boost (New) */}
                        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                            <p className="text-sm md:text-base text-blue-900 dark:text-blue-200">
                                <strong>Need specific tickets?</strong> We can help you book <Link to="/dubai/burj-khalifa" className="underline text-blue-700 font-medium">Burj Khalifa tickets</Link>, <Link to="/dubai/desert-safari" className="underline text-blue-700 font-medium">Desert Safari in Dubai</Link>, or a full <Link to="/abu-dhabi/sheikh-zayed-mosque" className="underline text-blue-700 font-medium">Abu Dhabi day trip</Link>.
                            </p>
                        </div>
                    </section>

                    {/* 4. AUTHORITY SECTION (New) */}
                    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl max-w-4xl mx-auto text-center shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 font-serif">Is Rudraksh Safar the best travel agent for Dubai in Raipur?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Rudraksh Safar is a government-registered travel agency based in Bhilai, serving Raipur and all of Chhattisgarh. With face-to-face support, visa assurance, and 24/7 WhatsApp assistance, we are trusted by hundreds of families for Dubai tours.
                        </p>
                    </section>

                    {/* 5. FAQ */}
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                <CardContent className="p-4">
                                    <h3 className="font-bold mb-2">Is there a direct flight from Raipur to Dubai?</h3>
                                    <p className="text-sm text-muted-foreground">No, currently there are no direct international flights from Swami Vivekananda Airport (RPR). You must connect via Delhi (DEL) or Mumbai (BOM).</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                <CardContent className="p-4">
                                    <h3 className="font-bold mb-2">How much does a Dubai trip cost from Raipur?</h3>
                                    <p className="text-sm text-muted-foreground">Approx ₹55,000 - ₹65,000 per person. This includes Flights (~₹25k), Visa (~₹6k), and a 5-day budget Land Package (~₹25k).</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                <CardContent className="p-4">
                                    <h3 className="font-bold mb-2">Do you provide visa service for passports issued in Chhattisgarh?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Passports issued in Raipur/Bhilai work perfectly for Dubai E-Visas. We handle the entire application process for you.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiFromRaipur;
