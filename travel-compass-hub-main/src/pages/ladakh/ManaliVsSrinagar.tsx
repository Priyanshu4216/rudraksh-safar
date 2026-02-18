import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Table, AlertTriangle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const ManaliVsSrinagar = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Manali vs Srinagar Route for Ladakh: Which is Better in 2026?",
        "description": "Detailed comparison of Manali-Leh vs Srinagar-Leh highway. Analysis of altitude, road conditions, scenery, and acclimatization for family and bikers.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Manali vs Srinagar Route for Ladakh Trip 2026 | Which is Best?"
                description="Confused between Manali or Srinagar route for Ladakh? Read our expert comparison on altitude, road safety, scenery, and best route for bikers vs families."
                keywords="manali vs srinagar route, srinagar to leh vs manali to leh, best route for ladakh trip, ladakh road trip comparison, is manali leh route safe"
                canonicalUrl="https://rudrakshsafar.com/manali-vs-srinagar-route-ladakh"
                structuredData={structuredData}
            />

            <Navbar />

            <div className="container py-12 lg:py-20">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8">Manali vs Srinagar: The Ultimate Ladakh Route Showdown</h1>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                    Choosing the right route is the most critical decision for your Ladakh road trip. One offers adventure and adrenaline; the other offers scenic beauty and gradual acclimatization. Let's compare them side-by-side.
                </p>

                {/* Quick Comparison Table */}
                <section className="mb-16">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-white/10 rounded-lg overflow-hidden min-w-[800px]">
                            <thead>
                                <tr className="bg-secondary/20">
                                    <th className="p-4 text-left border border-white/10 font-bold w-1/4">Feature</th>
                                    <th className="p-4 text-left border border-white/10 font-bold text-gold w-1/4">Option A: Srinagar Route</th>
                                    <th className="p-4 text-left border border-white/10 font-bold text-orange-400 w-1/4">Option B: Manali Route</th>
                                    <th className="p-4 text-left border border-white/10 font-bold text-red-500 bg-red-500/10 w-1/4">Option C: Ultimate Circuit 🔥</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-card">
                                    <td className="p-4 border border-white/10 font-medium">Acclimatization</td>
                                    <td className="p-4 border border-white/10 text-green-400">
                                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 shrink-0" /> Better (Gradual)</div>
                                    </td>
                                    <td className="p-4 border border-white/10 text-red-400">
                                        <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 shrink-0" /> Risky (Rapid)</div>
                                    </td>
                                    <td className="p-4 border border-white/10 text-green-400 bg-red-500/5">
                                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 shrink-0" /> <strong>Perfect</strong> (Start Srinagar)</div>
                                    </td>
                                </tr>
                                <tr className="bg-muted/10">
                                    <td className="p-4 border border-white/10 font-medium">Vibe & Scenery</td>
                                    <td className="p-4 border border-white/10">Green Valleys (Kashmir)</td>
                                    <td className="p-4 border border-white/10">Barren Mountains (Lahaul)</td>
                                    <td className="p-4 border border-white/10 font-bold bg-red-500/5">See BOTH Worlds</td>
                                </tr>
                                <tr className="bg-card">
                                    <td className="p-4 border border-white/10 font-medium">Major Passes</td>
                                    <td className="p-4 border border-white/10">Zoji La, Namika La</td>
                                    <td className="p-4 border border-white/10">Baralacha La, Tanglang La</td>
                                    <td className="p-4 border border-white/10 bg-red-500/5">
                                        All + <strong>Umling La (19,300ft)</strong>
                                    </td>
                                </tr>
                                <tr className="bg-muted/10">
                                    <td className="p-4 border border-white/10 font-medium">Recommendation</td>
                                    <td className="p-4 border border-white/10">Good for Families</td>
                                    <td className="p-4 border border-white/10">Good for Bikes</td>
                                    <td className="p-4 border border-white/10 bg-red-500/5">
                                        <Link to="/ladakh-ultimate-expedition" className="text-red-500 underline font-bold hover:text-red-400">View Itinerary &rarr;</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Srinagar Analysis */}
                    <div className="space-y-6">
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img src="/images/ladakh/ladakh-img-14.jpeg" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" alt="Srinagar Route" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Option A: Via Srinagar</h2>
                            <p className="text-muted-foreground text-sm">
                                Known as the "Golden Route". Historically significant and visually stunning transition from green to brown.
                            </p>
                        </div>

                        <div className="bg-green-500/10 p-5 rounded-lg border border-green-500/20 h-full">
                            <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider"><CheckCircle className="w-4 h-4" /> The Good Part</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">•</span> <strong>Safety:</strong> Gradual ascent = No AMS.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">•</span> <strong>Scenery:</strong> Green valleys of Sonamarg.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-green-500 font-bold">•</span> <strong>Comfort:</strong> Better roads.</li>
                            </ul>
                        </div>

                        <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                            <Link to="/ladakh-tour-via-srinagar">View Srinagar Itinerary</Link>
                        </Button>
                    </div>

                    {/* Manali Analysis */}
                    <div className="space-y-6">
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img src="/images/ladakh/ladakh-img-15.jpeg" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" alt="Manali Route" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Option B: Via Manali</h2>
                            <p className="text-muted-foreground text-sm">
                                The "Highway to Hell". Legendary among bikers for its challenging terrain and high passes.
                            </p>
                        </div>

                        <div className="bg-orange-500/10 p-5 rounded-lg border border-orange-500/20 h-full">
                            <h3 className="font-bold text-orange-400 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider"><CheckCircle className="w-4 h-4" /> The Good Part</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm"><span className="text-orange-500 font-bold">•</span> <strong>Adventure:</strong> High adrenaline.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-orange-500 font-bold">•</span> <strong>Time:</strong> Faster via Atal Tunnel.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-orange-500 font-bold">•</span> <strong>Snow:</strong> Walls of snow at passes.</li>
                            </ul>
                        </div>

                        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                            <Link to="/ladakh-tour-via-manali">View Manali Itinerary</Link>
                        </Button>
                    </div>

                    {/* Ultimate Circuit Analysis (Option C) */}
                    <div className="space-y-6 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-b from-gold/20 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-gold/50">
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse uppercase tracking-wider">
                                Recommended
                            </div>
                            <img src="/images/ladakh/ladakh-img-16.jpeg" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" alt="Ultimate Ladakh Circuit" />
                        </div>
                        <div className="relative">
                            <h2 className="text-2xl font-serif font-bold text-white mb-2 flex items-center gap-2">
                                Option C: Ultimate <span className="text-gold">Circuit</span>
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                <strong>Why choose? Do both.</strong> Enter via Srinagar to acclimatize, exit via Manali for adventure.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-b from-gold/10 to-transparent p-5 rounded-lg border border-gold/30 h-full">
                            <h3 className="font-bold text-gold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider"><CheckCircle className="w-4 h-4" /> The Best Part</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm"><span className="text-gold font-bold">•</span> <strong>All Access:</strong> See Kashmir & Manali.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-gold font-bold">•</span> <strong>Umling La:</strong> World's Highest Pass included.</li>
                                <li className="flex items-start gap-2 text-sm"><span className="text-gold font-bold">•</span> <strong>Hanle:</strong> Dark Sky Reserve included.</li>
                            </ul>
                        </div>

                        <Button asChild className="w-full bg-gold text-black hover:bg-gold/90 font-bold relative z-10">
                            <Link to="/ladakh-ultimate-expedition">View Ultimate Itinerary</Link>
                        </Button>
                    </div>

                </div>


                <section className="mt-16 bg-gradient-to-r from-black via-zinc-900 to-black p-8 rounded-2xl border border-gold/30 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gold/5 animate-pulse" />
                    <h2 className="text-3xl font-serif font-bold mb-4 text-white relative z-10">Don't Choose. Do Both! 🏔️</h2>
                    <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-300 relative z-10">
                        For the <strong>Best of Both Worlds</strong>, we recommend the <strong>Ultimate 13-Day Circuit</strong>. Enter via Srinagar (to acclimatize) → Explore Leh/Hanle → Exit via Manali (for adventure).
                    </p>
                    <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 font-bold px-8 h-12 rounded-full">
                            <Link to="/ladakh-ultimate-expedition">View Ultimate Circuit Itinerary</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-12 rounded-full px-8">
                            <Link to="/contact">Customize This Trip</Link>
                        </Button>
                    </div>
                </section>

            </div >

            <FloatingWhatsApp />
            <Footer />
        </main >
    );
};

export default ManaliVsSrinagar;
