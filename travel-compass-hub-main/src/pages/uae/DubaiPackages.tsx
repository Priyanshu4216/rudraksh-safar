import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, Calendar, Star, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const packages = [
    {
        title: "Dubai Essentials",
        duration: "5 Days / 4 Nights",
        price: "₹23,999",
        desc: "Perfect for first timers. Includes Burj Khalifa, Desert Safari, Marina Cruise & City Tour.",
        tag: "Best Seller",
        link: "/dubai-5-day-itinerary"
    },
    {
        title: "Dubai + Abu Dhabi Combo",
        duration: "6 Days / 5 Nights",
        price: "₹32,500",
        desc: "The complete UAE experience. Adds Sheikh Zayed Mosque & Ferrari World.",
        tag: "Value for Money",
        link: "/dubai-tour-packages"
    },
    {
        title: "Luxury Honeymoon Special",
        duration: "5 Days / 4 Nights",
        price: "₹45,000",
        desc: "Private transfers, 5-Star Hotel, Romantic Dinner Cruise, and surprises.",
        tag: "Premium",
        link: "/dubai-tour-packages"
    },
    {
        title: "Family Fun Week",
        duration: "7 Days / 6 Nights",
        price: "₹38,000",
        desc: "Includes Dubai Parks & Resorts (Legoland), Miracle Garden & Glow Garden.",
        tag: "Kids Friendly",
        link: "/dubai-tour-packages"
    }
];

const DubaiPackages = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Tour Packages from Bhilai & Raipur (Flights + Visa) | Rudraksh Safar</title>
                <meta name="description" content="Book affordable Dubai tour packages from Bhilai & Raipur. Best prices for couples & families. Includes Visa, Flights, Hotel & Sightseeing. Local office in Bhilai." />
                <meta name="keywords" content="dubai tour packages from bhilai, dubai tour packages from raipur, dubai honeymoon package from chhattisgarh, dubai group tour from india" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-tour-packages" />
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
                                    "name": "Why book Dubai with a local travel agency instead of online portals?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Face-to-face support in Bhilai, Visa follow-up done locally, No last-minute hotel surprises, and Veg & Jain food understanding." }
                                }
                            ]
                        },
                        // Product Schema for the Featured Package
                        {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": "Dubai Essentials Tour Package",
                            "description": "5 Days / 4 Nights Dubai Tour including Burj Khalifa, Desert Safari, and Marina Cruise.",
                            "image": "https://rudrakshsafar.com/images/dubai/dubai-skyline.jpg",
                            "offers": {
                                "@type": "Offer",
                                "url": "https://rudrakshsafar.com/dubai-5-day-itinerary",
                                "priceCurrency": "INR",
                                "price": "24999",
                                "availability": "https://schema.org/InStock"
                            }
                        }
                    ])}
                </script>
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO */}
                <div className="relative h-[50vh] flex items-center justify-center text-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1920&auto=format&fit=crop"
                        alt="Dubai Skyline"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative container max-w-4xl px-4 space-y-6">
                        <Badge className="bg-orange-500 text-white uppercase tracking-wider mb-4">
                            2026 Season Open
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                            Dubai Tour Packages
                        </h1>
                        <p className="text-xl text-slate-200">
                            Trusted by travelers from Bhilai, Raipur & Durg.
                        </p>
                    </div>
                </div>

                <div className="container max-w-6xl mx-auto px-4 py-16 space-y-20">

                    {/* NEW: AUTHORITY SECTION */}
                    <section className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 font-serif">Is this the best Dubai tour package for travelers from Bhilai & Raipur?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            If you are searching for a reliable Dubai tour package from Bhilai or Raipur,
                            this page is designed specifically for Chhattisgarh travelers.
                            Unlike online portals, Rudraksh Safar provides local support,
                            transparent pricing, visa assurance, and vegetarian-friendly itineraries.
                        </p>
                    </section>

                    {/* 1. TRUST & AUTHORITY LINK */}
                    <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-400">Planning your first trip?</h2>
                            <p className="text-orange-800 dark:text-orange-300">
                                Don't just book a package. Read our ultimate guide to understand the city, avoid scams, and save money.
                            </p>
                        </div>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shrink-0" asChild>
                            <Link to="/dubai-travel-guide">Read Dubai Guide 2026</Link>
                        </Button>
                    </div>

                    {/* 2. PACKAGES GRID */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center">Best Selling Packages</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packages.map((pkg, i) => (
                                <Card key={i} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                                    <div className="bg-slate-100 dark:bg-slate-800 h-40 overflow-hidden relative">
                                        <Badge className="absolute top-2 left-2 bg-blue-600">{pkg.tag}</Badge>
                                        <img
                                            src={
                                                i === 0 ? "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=800&auto=format&fit=crop" : // Essentials
                                                    i === 1 ? "https://images.unsplash.com/photo-1546412414-e18d4806796a?q=80&w=800&auto=format&fit=crop" : // Abu Dhabi
                                                        i === 2 ? "https://images.unsplash.com/photo-1518684079858-e91647fbc0a2?q=80&w=800&auto=format&fit=crop" : // Honeymoon
                                                            "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop" // Family
                                            }
                                            alt={pkg.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                    <CardContent className="p-4 flex-grow space-y-4">
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight mb-1">{pkg.title}</h3>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {pkg.duration}
                                            </p>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {pkg.desc}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0 mt-auto block">
                                        <div className="flex items-end justify-between mb-4">
                                            <div>
                                                <span className="text-xs text-muted-foreground block">From</span>
                                                <span className="text-xl font-bold text-orange-600">{pkg.price}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">+ Flights</span>
                                        </div>
                                        <Button className="w-full" asChild>
                                            <a href={`https://wa.me/917566788884?text=Hi, I am interested in ${pkg.title}`} target="_blank" rel="noopener noreferrer">
                                                Get Quote
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* NEW: COMPARISON BLOCK VS OTAs */}
                    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
                        <div className="md:flex items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                                    Why book Dubai with a local travel agency instead of online portals?
                                </h2>
                                <ul className="space-y-3">
                                    {[
                                        "Face-to-face support in Bhilai",
                                        "Visa follow-up done locally",
                                        "No last-minute hotel surprises",
                                        "Veg & Jain food understanding"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="shrink-0 hidden md:block">
                                <ShieldCheck className="w-24 h-24 text-blue-600 opacity-20" />
                            </div>
                        </div>
                    </section>

                    {/* 3. WHY CHOOSE US (Local Presence) */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Bhilai Trusts Us?</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full h-fit">
                                        <ShieldCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Local Office Support</h3>
                                        <p className="text-muted-foreground text-sm">We are physically present in Estate Plaza, Bhilai. Support local, get global service.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full h-fit">
                                        <Plane className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Flight Intelligence</h3>
                                        <p className="text-muted-foreground text-sm">We know the best connections from Raipur (IndiGo/Air India) to minimize your travel time.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-full h-fit">
                                        <Star className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">No Hidden Costs</h3>
                                        <p className="text-muted-foreground text-sm">Our quotes include taxes. No surprises at the hotel check-in desk.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Button variant="outline" className="mr-4" asChild>
                                    <Link to="/dubai-tour-packages-from-raipur">View Flights from Raipur</Link>
                                </Button>
                                <Button variant="outline" className="mr-4" asChild>
                                    <Link to="/dubai-tour-packages-from-bhilai">Plan from Bhilai</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link to="/dubai-visa-for-indians">Check Visa Rules</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop" alt="Happy Travelers" className="rounded-2xl shadow-xl" />
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border max-w-xs">
                                <p className="font-serif italic text-lg mb-2">"The veg food arrangement was perfect. My parents were very happy."</p>
                                <p className="text-sm font-bold">- Rahul S., Bhilai</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. COMPARISON TOOLS */}
                    <section className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Confused about where to go?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="secondary" asChild>
                                <Link to="/comparisons/dubai-vs-abu-dhabi">Dubai vs Abu Dhabi</Link>
                            </Button>
                            <Button variant="secondary" asChild>
                                <Link to="/dubai-4-day-itinerary">See 4 Day Plan</Link>
                            </Button>
                            <Button variant="secondary" asChild>
                                <Link to="/dubai/burj-khalifa">Read Burj Khalifa Guide</Link>
                            </Button>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiPackages;
