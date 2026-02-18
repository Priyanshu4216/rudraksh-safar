import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Shield, CheckCircle, ArrowRight, Mountain, Camera, Flame } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhViaManali = () => {
    const heroImage = "/images/ladakh/ladakh-img-15.jpeg"; // Manali highway

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": "Manali to Leh Road Trip Package",
        "description": "Adrenaline-packed 10-Day Ladakh Road Trip via Manali. Cross Atal Tunnel, Baralacha La, and Tanglang La. Best for bikers and thrill-seekers.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "url": "https://rudrakshsafar.com"
        },
        "itinerary": [
            { "@type": "City", "name": "Manali" },
            { "@type": "City", "name": "Jispa" },
            { "@type": "City", "name": "Sarchu" },
            { "@type": "City", "name": "Leh" },
            { "@type": "City", "name": "Nubra Valley" },
            { "@type": "City", "name": "Pangong Lake" }
        ]
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Manali to Leh Road Trip 2026 | Ultimate Adventure Route"
                description="Book the legendary Manali to Leh road trip. 10 Days itinerary crossing 5 high-altitude passes including Baralacha La. Ideal for bikers and adventure lovers."
                keywords="manali to leh road trip, manali to leh bike trip, atal tunnel to ladakh, manali leh highway map, jispa sarchu route, ladakh adventure tour"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-via-manali"
                ogImage={heroImage}
                structuredData={structuredData}
            />

            <Navbar />

            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Manali Leh Highway" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Manali to Leh Road Trip
                    </h1>
                    <p className="text-xl text-white/90 font-medium">The Highway to Heaven</p>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Why Choose the Manali Route?</h2>
                            <p>
                                The <strong>Manali-Leh Highway</strong> is not for the faint-hearted. It is an odyssey that takes you through the transformative landscape of the Himalayas. From the pine forests of <strong>Manali</strong>, you pass through the engineering marvel <strong>Atal Tunnel</strong>, and enter the stark, barren beauty of <strong>Lahaul & Spiti</strong>.
                            </p>
                            <p>
                                This route is famous for its rapid altitude gain and high passes like <strong>Baralacha La</strong> and <strong>Tanglang La</strong>. It is the preferred choice for <strong>bikers and adventure enthusiasts</strong> who want to test their mettle against the mountains.
                            </p>
                            <div className="flex items-center gap-2 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-200 text-sm">
                                <Flame className="w-5 h-5 text-orange-500 shrink-0" />
                                <strong>Note:</strong> We recommend taking acclimatization tablets (Diamox) as this route gains height quickly.
                            </div>
                        </section>

                        {/* Itinerary Highlight */}
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">10 Days Adventure Itinerary</h2>
                            <div className="space-y-4">
                                {[
                                    { day: 1, title: "Arrival in Manali", desc: "Pickup from Volvo stand. Acclimatization walk in Old Manali. Gear check." },
                                    { day: 2, title: "Manali to Jispa", desc: "Cross Atal Tunnel & Keylong. Riverside camping in Jispa." },
                                    { day: 3, title: "Jispa to Sarchu/Leh", desc: "Cross Baralacha La & Tanglang La. (Long scenic drive)." },
                                    { day: 4, title: "Leh Local Sightseeing", desc: "Rest day mandatory. Visit Leh Market & Shanti Stupa." },
                                    { day: 5, title: "Leh to Nubra Valley", desc: "via Khardung La. ATV ride in sand dunes." },
                                    { day: 6, title: "Nubra to Pangong", desc: "via Shyok River. Night stay at lakeside camp." },
                                    { day: 7, title: "Pangong to Hanle", desc: "Visit the Dark Sky Reserve (Optional Add-on)." },
                                    { day: 8, title: "Hanle to Leh", desc: "via Umling La (World's Highest Pass) if open." },
                                    { day: 9, title: "Leh Buffer Day", desc: "Shopping or rafting in Zanskar river." },
                                    { day: 10, title: "Departure", desc: "Fly out from Leh." }
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

                        {/* Cross-Sell Ultimate Expedition */}
                        <div className="bg-gradient-to-r from-black via-zinc-900 to-black p-8 rounded-2xl border border-gold/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Mountain className="w-48 h-48 text-white" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold mb-4 animate-pulse">
                                    <Flame className="w-3 h-3" /> Rare Upgrade Available
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                                    Want to go beyond Manali-Leh?
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-lg">
                                    Join the <strong>Ultimate 13-Day Expedition</strong>. It covers Manali-Leh AND the remote <strong>Umling La (19,300 ft), Hanle, & Srinagar</strong>.
                                </p>
                                <Button asChild className="bg-gold text-black hover:bg-gold/90 font-bold">
                                    <Link to="/ladakh-ultimate-expedition">View Ultimate Circuit Itinerary &rarr;</Link>
                                </Button>
                            </div>
                        </div>

                        <LadakhFAQ />

                        {/* Suggested Reading - SEO Internal Linking */}
                        <section className="bg-secondary/5 p-8 rounded-xl border border-secondary/20">
                            <h3 className="text-2xl font-serif font-bold mb-6">Suggested Reading</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link to="/manali-vs-srinagar-route-ladakh" className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-gold transition-colors">
                                    <div className="p-2 bg-muted rounded-full"><MapPin className="w-5 h-5 text-gold" /></div>
                                    <div>
                                        <p className="font-bold text-sm">Route Comparison</p>
                                        <p className="text-xs text-muted-foreground">Why pick Manali route?</p>
                                    </div>
                                </Link>
                                <Link to="/ladakh-bike-trip-packages" className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-gold transition-colors">
                                    <div className="p-2 bg-muted rounded-full"><Mountain className="w-5 h-5 text-gold" /></div>
                                    <div>
                                        <p className="font-bold text-sm">Bike Expeditions</p>
                                        <p className="text-xs text-muted-foreground">Rentals vs Own Bike cost</p>
                                    </div>
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-2">Book Adventure</h3>
                            <p className="text-2xl font-bold text-gold mb-1">₹32,000 <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                            <div className="space-y-3 mb-6 mt-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> High Adventure</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> Atal Tunnel Crossing</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" /> Jispa Camping</div>
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

export default LadakhViaManali;
