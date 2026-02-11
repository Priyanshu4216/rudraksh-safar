import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CreditCard, ChevronRight, Gem, Camera, Utensils, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DubaiTravelGuide = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Travel Guide 2026: The Ultimate Resource for Indian Travelers</title>
                <meta name="description" content="Complete Dubai Travel Guide for Indians. Best time to visit, visa rules, veg food guide, and detailed attraction reviews. Plan your perfect Dubai trip." />
                <meta name="keywords" content="dubai travel guide for indians, dubai trip rules, dubai veg food guide, best time to visit dubai from india" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-travel-guide" />
                <script type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "TouristDestination",
                            "name": "Dubai",
                            "description": "The ultimate travel guide for Dubai, covering attractions, visa rules, food, and itineraries for Indian travelers.",
                            "touristType": ["Family", "Couples", "Luxury", "Budget"],
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 25.2048,
                                "longitude": 55.2708
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                                { "@type": "ListItem", "position": 2, "name": "UAE", "item": "https://rudrakshsafar.com/dubai-tour-packages" },
                                { "@type": "ListItem", "position": 3, "name": "Dubai Guide", "item": "https://rudrakshsafar.com/dubai-travel-guide" }
                            ]
                        }
                    ])}
                </script>
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO SECTION */}
                <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&q=80&w=2000"
                        alt="Dubai Skyline"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="relative container max-w-4xl px-4 space-y-6">
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wider mb-4">
                            2026 Edition
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                            The Ultimate Dubai Travel Guide
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200">
                            Everything you need to know before you fly. Unbiased reviews, local secrets, and Indian traveler tips.
                        </p>
                    </div>
                </div>

                <div className="container max-w-6xl mx-auto px-4 py-16 space-y-20">

                    {/* NEW: TABLE OF CONTENTS (TOC) */}
                    <nav className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <h2 className="text-lg font-bold mb-4 border-b pb-2">Jump to Section</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Top Attractions", id: "attractions" },
                                { label: "Itineraries", id: "itineraries" },
                                { label: "Visa & Rules", id: "visa" },
                                { label: "Best Time", id: "best-time" },
                                { label: "Trip Cost", id: "cost" },
                                { label: "Veg Food", id: "food" },
                                { label: "Packages", id: "packages" },
                            ].map((item, i) => (
                                <a key={i} href={`#${item.id}`} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 text-sm font-medium rounded-full transition-colors text-slate-700 dark:text-slate-300 hover:text-orange-700">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* 1. TOP ATTRACTIONS GRID (The Silos) */}
                    <section id="attractions" className="scroll-mt-24">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">Must-Visit Attractions</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Detailed guides with ticket prices, scam warnings, and "Is it worth it?" verdicts.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Burj Khalifa", url: "/dubai/burj-khalifa", img: "https://images.unsplash.com/photo-1546412414-e18d4806796a?auto=format&fit=crop&q=80&w=800", desc: "Tickets, Sunset Slots & 124 vs 148" },
                                { title: "Dubai Frame", url: "/dubai/dubai-frame", img: "https://images.unsplash.com/photo-1577085773663-1e582e361bc4?auto=format&fit=crop&q=80&w=800", desc: "Budget Alternative with Glass Floor" },
                                { title: "Museum of the Future", url: "/dubai/museum-of-the-future", img: "https://images.unsplash.com/photo-1518684079858-e91647fbc0a2?auto=format&fit=crop&q=80&w=800", desc: "Why it is always Sold Out" },
                                { title: "Desert Safari", url: "/dubai/desert-safari", img: "https://images.unsplash.com/photo-1451337516015-6b6fcd1c95e3?auto=format&fit=crop&q=80&w=800", desc: "Dune Bashing & BBQ Guide" },
                                { title: "Sheikh Zayed Mosque", url: "/abu-dhabi/sheikh-zayed-mosque", img: "https://images.unsplash.com/photo-1543746357-19416df99346?auto=format&fit=crop&q=80&w=800", desc: "Abu Dhabi's White Pearl" },
                                { title: "Ferrari World", url: "/abu-dhabi/ferrari-world", img: "https://images.unsplash.com/photo-1597893149520-2c70830cb822?auto=format&fit=crop&q=80&w=800", desc: "Fastest Coaster on Earth" },
                            ].map((item, i) => (
                                <Link key={i} to={item.url} className="group block h-full">
                                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md">
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <CardContent className="p-4">
                                            <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                                            <span className="text-xs font-bold text-orange-600 uppercase flex items-center gap-1">
                                                Read Guide <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* 2. ITINERARIES (Decision Support) */}
                    <section id="itineraries" className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border scroll-mt-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Planned to Perfection</h2>
                                <p className="text-muted-foreground text-lg">
                                    Don't waste time traveling between distant locations. Use our battle-tested itineraries optimized for traffic and geography.
                                </p>
                                <div className="space-y-4">
                                    <Button variant="outline" className="w-full justify-start h-auto py-4 px-6 text-left" asChild>
                                        <Link to="/dubai-4-day-itinerary">
                                            <div>
                                                <span className="font-bold text-foreground block">4 Days: The Essentials</span>
                                                <span className="text-sm text-muted-foreground">Burj Khalifa, Marina, Desert Safari, Shopping.</span>
                                            </div>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start h-auto py-4 px-6 text-left" asChild>
                                        <Link to="/dubai-5-day-itinerary">
                                            <div>
                                                <span className="font-bold text-foreground block">5 Days: The Explorer</span>
                                                <span className="text-sm text-muted-foreground">Adds Abu Dhabi Day Trip (Mosque + Ferrari World).</span>
                                            </div>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative hidden md:block">
                                <img src="https://images.unsplash.com/photo-1569335445210-2f960f276229?auto=format&fit=crop&q=80&w=800" alt="Dubai Itinerary Map" className="rounded-xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500" />
                            </div>
                        </div>
                    </section>

                    {/* 3. PRACTICAL INFO (Logistics Money Pages) */}
                    <section id="visa" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-center mb-10">Essential Travel Logistics</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link to="/dubai-visa-for-indians">
                                <Card className="hover:border-orange-500 transition-colors h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <ShieldCheck className="w-5 h-5 text-green-600" /> Dubai Visa
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Documents needed, rejection reasons, and 'Visa on Arrival' rules for Indians with US Visa.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <div id="best-time" className="h-full">
                                <Link to="/best-time-to-visit-dubai">
                                    <Card className="hover:border-orange-500 transition-colors h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-lg">
                                                <Calendar className="w-5 h-5 text-blue-600" /> Best Time
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Why November to March is perfect. Handling the summer heat (June-August).
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>

                            <div id="cost" className="h-full">
                                <Link to="/dubai-trip-cost">
                                    <Card className="hover:border-orange-500 transition-colors h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-lg">
                                                <CreditCard className="w-5 h-5 text-purple-600" /> Trip Cost
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Real budget breakdown: Flights, Hotels, Food, and Activities for couples vs families.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>

                            <div id="food" className="h-full">
                                <Link to="/dubai-food-guide">
                                    <Card className="hover:border-orange-500 transition-colors h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-lg">
                                                <Utensils className="w-5 h-5 text-orange-600" /> Veg Food
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Finding pure veg / Jain food in Dubai. Top Indian restaurants in Karama & Bur Dubai.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* NEW: WHY TRUST US (E-E-A-T) */}
                    <section className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-xl border border-blue-100 dark:border-blue-900/30 text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 font-serif text-blue-900 dark:text-blue-200">Why trust this Dubai travel guide?</h2>
                        <p className="text-blue-800 dark:text-blue-300 leading-relaxed">
                            This guide is written by travel consultants at <strong>Rudraksh Safar</strong>, a government-registered travel agency based in Bhilai, Chhattisgarh.
                            Unlike generic blogs, our advice is based on real itineraries, customer feedback, and on-ground experience in Dubai & Abu Dhabi.
                        </p>
                    </section>

                    {/* 4. COMMERCIAL CTA (Commercial Hub) */}
                    <div id="packages" className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white space-y-6 scroll-mt-24">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready to Book?</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Whether you want a fully customizable package or just flight tickets, our experts in Bhilai & Raipur are here to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                <Link to="/dubai-tour-packages">View All Packages</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                                <Link to="/dubai-tour-packages-from-raipur">Flights from Raipur</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                                <Link to="/dubai-tour-packages-from-bhilai">Plan from Bhilai</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiTravelGuide;
