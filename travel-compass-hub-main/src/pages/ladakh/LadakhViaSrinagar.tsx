import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Shield, CheckCircle, ArrowRight, Mountain, Camera } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhViaSrinagar = () => {
    const heroImage = "/images/ladakh/ladakh-img-14.jpeg"; // Srinagar highway

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": "Srinagar to Leh Road Trip Package",
        "description": "Premium 9-Day Ladakh Road Trip via Srinagar. Visit Sonamarg, Zoji La, Kargil War Memorial, and Magnetic Hill. Best for acclimatization.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "url": "https://rudrakshsafar.com"
        },
        "itinerary": [
            { "@type": "City", "name": "Srinagar" },
            { "@type": "City", "name": "Kargil" },
            { "@type": "City", "name": "Leh" },
            { "@type": "City", "name": "Nubra Valley" },
            { "@type": "City", "name": "Pangong Lake" }
        ]
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Srinagar to Leh Road Trip 2026 | Best Ladakh Route for Family"
                description="Book the scenic Srinagar to Leh road trip. 9 Days itinerary covering Sonamarg, Kargil, Nubra, and Pangong. Best route for acclimatization and green landscapes."
                keywords="srinagar to leh road trip, kashmir to ladakh package, srinagar leh highway status, ladakh trip via srinagar, sonamarg to leh distance"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-via-srinagar"
                ogImage={heroImage}
                structuredData={structuredData}
            />

            <Navbar />

            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Srinagar Leh Highway" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Srinagar to Leh Road Trip
                    </h1>
                    <p className="text-xl text-white/90 font-medium">The Scenic Gateway to Ladakh</p>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Why Choose the Srinagar Route?</h2>
                            <p>
                                The <strong>Srinagar-Leh Highway (NH 1)</strong> is often called the "Golden Route" for a reason. Unlike the rugged and rapid ascent of the Manali route, this highway offers a gradual climb, making it the <strong>#1 choice for families and first-time visitors</strong> to prevent Acute Mountain Sickness (AMS).
                            </p>
                            <p>
                                Starting from the lush green valleys of Kashmir, you witness a dramatic shift in landscape—from the golden meadows of <strong>Sonamarg</strong> to the cold desert of <strong>Drass</strong>. This route is not just a drive; it's a journey through history, passing the iconic <strong>Kargil War Memorial</strong>.
                            </p>
                        </section>

                        {/* Itinerary Highlight */}
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">9 Days Detailed Itinerary</h2>
                            <div className="space-y-4">
                                {[
                                    { day: 1, title: "Arrival in Srinagar", desc: "Pickup from airport. Shikara ride in Dal Lake. Overnight in Houseboat." },
                                    { day: 2, title: "Srinagar to Kargil", desc: "Cross Zoji La Pass. Visit Drass War Memorial. Overnight in Kargil." },
                                    { day: 3, title: "Kargil to Leh", desc: "Visit Lamayuru Monastery, Magnetic Hill, and Pathar Sahib Gurudwara." },
                                    { day: 4, title: "Leh Local Sightseeing", desc: "Shanti Stupa, Leh Palace, and Hall of Fame. Acclimatization day." },
                                    { day: 5, title: "Leh to Nubra Valley", desc: "via Khardung La (World's Highest Motorable Road). Camel ride at Hunder." },
                                    { day: 6, title: "Nubra to Pangong Lake", desc: "via Shyok River route. Witness the color-changing lake. Camping." },
                                    { day: 7, title: "Pangong to Leh", desc: "via Chang La Pass. Visit Thiksey Monastery." },
                                    { day: 8, title: "Leh Airport Drop", desc: "Fly back with memories of a lifetime." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                                        <div className="shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-secondary">
                                            Day {item.day}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <LadakhFAQ />

                        {/* Suggested Reading - SEO Internal Linking */}
                        <section className="bg-secondary/5 p-8 rounded-xl border border-secondary/20">
                            <h3 className="text-2xl font-serif font-bold mb-6">Suggested Reading</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link to="/manali-vs-srinagar-route-ladakh" className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-gold transition-colors">
                                    <div className="p-2 bg-muted rounded-full"><MapPin className="w-5 h-5 text-gold" /></div>
                                    <div>
                                        <p className="font-bold text-sm">Compare Routes</p>
                                        <p className="text-xs text-muted-foreground">Is Manali route better for you?</p>
                                    </div>
                                </Link>
                                <Link to="/ladakh-packing-list" className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-gold transition-colors">
                                    <div className="p-2 bg-muted rounded-full"><CheckCircle className="w-5 h-5 text-gold" /></div>
                                    <div>
                                        <p className="font-bold text-sm">Packing List</p>
                                        <p className="text-xs text-muted-foreground">What to carry for Zoji La cold?</p>
                                    </div>
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-2">Book This Route</h3>
                            <p className="text-2xl font-bold text-gold mb-1">₹28,500 <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                            <div className="space-y-3 mb-6 mt-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> Best for Families</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> Gradual Acclimatization</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> Houseboat Stay Included</div>
                            </div>
                            <Button className="w-full bg-gold text-black font-bold hover:bg-gold/90 mb-3">Request Quote</Button>
                            <Button variant="outline" className="w-full">
                                <Link to="/contact">Customize Trip</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhViaSrinagar;
