import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Compass, Heart, DollarSign, Mountain, Palmtree, Users, Globe } from 'lucide-react';

const TravelInspiration = () => {

    const categories = [
        {
            title: "First International Trip",
            icon: Globe,
            desc: "Easy visas, short flights, and budget friendly.",
            destinations: ["Thailand", "Dubai", "Vietnam", "Bali"],
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Honeymoon Specials",
            icon: Heart,
            desc: "Private beaches, romantic dinners, and luxury.",
            destinations: ["Maldives", "Bali", "Kashmir", "Andaman"],
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-900/20"
        },
        {
            title: "Budget Friendly",
            icon: DollarSign,
            desc: "Amazing experiences that don't break the bank.",
            destinations: ["Goa", "Nepal", "Kerala", "Sri Lanka"],
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-900/20"
        },
        {
            title: "Family Fun",
            icon: Users,
            desc: "Theme parks, safe hotels, and easy pacing.",
            destinations: ["Singapore", "Dubai", "Hong Kong", "Himachal"],
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/20"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Where to Go? Best Holiday Destinations | Rudraksh Safar</title>
                <meta name="description" content="Confused where to travel? Discover the best honeymoon destinations, budget-friendly trips, and family vacation ideas from India. Plan your perfect trip." />
                <meta name="keywords" content="best place to travel with family, best honeymoon destination from India, where to go for first international trip, best budget friendly destinations, travel inspiration" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-inspiration" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center opacity-5"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Compass className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Where To Next?
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Don't know where to go? Let us help you decide based on what you love.
                        </p>
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

                {/* Month-wise Guide Link */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Explore by Season</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Timing is everything. Visit Kashmir in Winter for snow, or Ladakh in Summer for clear roads.
                        </p>
                        <Button size="lg" asChild className="rounded-full px-8">
                            <Link to="/best-time-to-visit">See Best Time to Visit Guide</Link>
                        </Button>
                    </div>
                </section>

                {/* Trending Now */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Trending for Indians 🇮🇳</h2>
                            <p className="text-muted-foreground">Where everyone is traveling right now.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: "Ayodhya & Kashi", type: "Spiritual" },
                                { name: "Vietnam", type: "International" },
                                { name: "Lakshadweep", type: "Beach" },
                                { name: "Japan", type: "Cherry Blossom" },
                                { name: "Kazakhstan", type: "Visa Free" }
                            ].map((trend, idx) => (
                                <div key={idx} className="bg-card border px-6 py-3 rounded-full flex items-center gap-2 shadow-sm">
                                    <span className="font-bold">{trend.name}</span>
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
