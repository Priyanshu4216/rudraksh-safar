import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Compass, Heart, DollarSign, Mountain, Palmtree, Users, Globe, Sun, Snowflake, CloudRain, Filter, Map, TrendingUp } from 'lucide-react';

const TravelInspiration = () => {

    const categories = [
        {
            title: "First International Trip",
            icon: Globe,
            desc: "Ideal for first-timers. Easy visas (or visa-free), short flights (< 5 hrs), and English-friendly cultures.",
            destinations: ["Thailand", "Dubai", "Vietnam", "Bali"],
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Honeymoon Specials",
            icon: Heart,
            desc: "Curated for romance. Privacy guaranteed, couple-friendly stays, and candlelight dinner inclusions.",
            destinations: ["Maldives", "Bali", "Kashmir", "Andaman"],
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-900/20"
        },
        {
            title: "Budget Friendly",
            icon: DollarSign,
            desc: "Max experience, min cost. Destinations where ₹40k-₹50k covers flights, stay, and sightseeing.",
            destinations: ["Goa", "Nepal", "Kerala", "Sri Lanka"],
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-900/20"
        },
        {
            title: "Family Fun",
            icon: Users,
            desc: "Kid-friendly and low-stress. Theme parks, safe food options, and relaxed itineraries for all ages.",
            destinations: ["Singapore", "Dubai", "Hong Kong", "Himachal"],
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/20"
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Where Should You Travel Next? Expert Travel Ideas 2026",
        "description": "Don't know where to go? Use our travel decision guide to find the perfect destination based on budget, season, and visa requirements.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": categories.map((cat, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": cat.title,
                "description": cat.desc
            }))
        }
    };

    return (
        <>
            <Helmet>
                <title>Where Should You Travel Next? Expert Insights for 2026 | Rudraksh Safar</title>
                <meta name="description" content="Confused where to travel? Use our 2026 Travel Decision Guide. Compare destinations by budget (Under 50k), Visa Ease (Visa-Free), and Season (Summer vs Winter)." />
                <meta name="keywords" content="where to travel 2026, best holiday destinations from india, visa free countries for indians, budget international trips under 50k, honeymoon destinations 2026" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-inspiration" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center opacity-5"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Compass className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Where Should You <span className="text-primary">Travel Next?</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Expert-picked destinations based on your <strong>Budget, Season & Travel Style</strong>.
                        </p>
                    </div>
                </section>

                {/* HOW TO CHOOSE GUIDE */}
                <section className="py-12 bg-background border-b border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    <Filter className="w-3 h-3" /> Decision Guide
                                </span>
                                <h2 className="text-3xl font-bold mb-4">How to Choose Your Next Destination?</h2>
                                <p className="text-muted-foreground">Don't follow the herd. Pick a destination that fits your constraints.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-card border p-6 rounded-xl">
                                    <h3 className="font-bold flex items-center gap-2 mb-3">
                                        <DollarSign className="w-5 h-5 text-green-500" /> By Budget
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Under ₹25k:</strong> Goa, Hampi, Agra</li>
                                        <li><strong>₹30k - ₹50k:</strong> Kerala, Thailand (Budget), Nepal</li>
                                        <li><strong>₹1L+:</strong> Dubai, Bali, Singapore</li>
                                        <li><strong>₹2L+:</strong> Europe, Maldives, Japan</li>
                                    </ul>
                                </div>
                                <div className="bg-card border p-6 rounded-xl">
                                    <h3 className="font-bold flex items-center gap-2 mb-3">
                                        <Globe className="w-5 h-5 text-blue-500" /> By Visa Ease
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Visa Free:</strong> Thailand, Malaysia, Kenya</li>
                                        <li><strong>E-Visa (Easy):</strong> Dubai, Vietnam, Singapore</li>
                                        <li><strong>Paper Visa (Hard):</strong> Schengen, UK, USA</li>
                                    </ul>
                                </div>
                                <div className="bg-card border p-6 rounded-xl">
                                    <h3 className="font-bold flex items-center gap-2 mb-3">
                                        <Users className="w-5 h-5 text-orange-500" /> By Company
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Couples:</strong> Maldives, Kashmir, Bali</li>
                                        <li><strong>Family:</strong> Singapore, Dubai, Kerala</li>
                                        <li><strong>Solo:</strong> Vietnam, Himachal, Goa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {categories.map((cat, idx) => (
                                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                                    <CardContent className="p-8">
                                        <div className={`w-14 h-14 ${cat.bg} rounded-full flex items-center justify-center mb-6`}>
                                            <cat.icon className={`w-7 h-7 ${cat.color}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                                        <p className="text-muted-foreground mb-6">{cat.desc}</p>

                                        <div className="mb-6">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Top Picks:</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {cat.destinations.map((dest, i) => (
                                                    <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">
                                                        {dest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Button variant="outline" className="w-full group" asChild>
                                            <a href={`https://wa.me/919406182174?text=I need suggestions for ${cat.title}`}>
                                                Get {cat.title} Quote
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEASONAL INSPIRATION */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Explore by Season</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                            Timing is everything. Visiting a place in the wrong season can ruin the experience.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                            <div className="bg-background p-6 rounded-xl shadow-sm border group hover:border-orange-200 transition-colors">
                                <Sun className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Summer (Apr - Jun)</h3>
                                <p className="text-xs text-muted-foreground mb-3">Escape the heat. Head to mountains or cooler latitudes.</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Ladakh</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Switzerland</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Kashmir</span>
                                </div>
                            </div>
                            <div className="bg-background p-6 rounded-xl shadow-sm border group hover:border-blue-200 transition-colors">
                                <CloudRain className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Monsoon (Jul - Sep)</h3>
                                <p className="text-xs text-muted-foreground mb-3">Lush greenery and waterfalls. Avoid beaches.</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Kerala</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Valley of Flowers</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Udaipur</span>
                                </div>
                            </div>
                            <div className="bg-background p-6 rounded-xl shadow-sm border group hover:border-green-200 transition-colors">
                                <Map className="w-10 h-10 text-green-500 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Autumn (Oct - Nov)</h3>
                                <p className="text-xs text-muted-foreground mb-3">Perfect weather everywhere. Peak festival season.</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Bhutan</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Nepal</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Golden Triangle</span>
                                </div>
                            </div>
                            <div className="bg-background p-6 rounded-xl shadow-sm border group hover:border-cyan-200 transition-colors">
                                <Snowflake className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Winter (Dec - Feb)</h3>
                                <p className="text-xs text-muted-foreground mb-3">Snow sports or tropical beaches.</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Gulmarg</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Thailand</span>
                                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded">Dubai</span>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" asChild className="rounded-full px-8">
                            <Link to="/best-time-to-visit">Detailed 'Best Time to Visit' Guide</Link>
                        </Button>
                    </div>
                </section>

                {/* Trending Now */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                                <TrendingUp className="w-8 h-8 text-primary" /> Trending for Indians 🇮🇳
                            </h2>
                            <p className="text-muted-foreground">Why these destinations are hot right now.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: "Ayodhya & Kashi", type: "Spiritual", reason: "Ram Mandir Corridor" },
                                { name: "Vietnam", type: "International", reason: "Cheap Flights + Viral Reels" },
                                { name: "Lakshadweep", type: "Beach", reason: "Alternative to Maldives" },
                                { name: "Japan", type: "Cherry Blossom", reason: "Weak Yen (Cheaper than usual)" },
                                { name: "Kazakhstan", type: "Visa Free", reason: "New Visa Free Entry" }
                            ].map((trend, idx) => (
                                <div key={idx} className="bg-card border px-6 py-3 rounded-full flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-default">
                                    <div>
                                        <span className="font-bold block text-sm">{trend.name}</span>
                                        <span className="text-[10px] text-muted-foreground">{trend.reason}</span>
                                    </div>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{trend.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TravelInspiration;
