import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Sun, Snowflake, CloudRain, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const BestTimeLadakh = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Time to Visit Ladakh 2026: Month-by-Month Weather Guide",
        "description": "When does the Manali-Leh highway open? Full guide on Ladakh weather in May, June, July, and winter. Best season for snow and road trips.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Best Time to Visit Ladakh 2026 | Road Opening Dates & Weather"
                description="Detailed guide on the best time to visit Ladakh. Know when Manali & Srinagar highways open. Weather in May, June, July, September, and Winter."
                keywords="best time to visit ladakh, ladakh in may, ladakh in june, manali leh highway opening date 2026, ladakh weather by month"
                canonicalUrl="https://rudrakshsafar.com/best-time-to-visit-ladakh"
                structuredData={structuredData}
            />

            <Navbar />

            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">When is the Best Time to Visit Ladakh?</h1>
                    <p className="text-lg text-muted-foreground">
                        Ladakh is a land of extremes. The "Best Time" depends entirely on <strong>HOW</strong> you want to travel (Road vs Flight) and <strong>WHAT</strong> you want to see (Snow vs Greenery).
                    </p>
                </div>

                {/* Season Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">

                    {/* Peak Season */}
                    <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-gold/30 transition-all">
                        <div className="h-48 overflow-hidden relative">
                            <img src="/images/ladakh/ladakh-img-1.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ladakh in Summer" />
                            <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                <Sun className="w-3 h-3" /> Best for Road Trips
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">June to August</h3>
                            <p className="text-sm text-gold font-bold mb-4">Summer</p>
                            <p className="text-muted-foreground text-sm mb-4">
                                Both Manali and Srinagar highways are fully open. Weather is pleasant (15°C - 25°C). Ideal for bikers, families, and photographers.
                            </p>
                            <ul className="text-sm space-y-2 mb-6">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All Passes Open</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Hemis Festival (June/July)</li>
                            </ul>
                            <Button asChild className="w-full bg-gold text-black font-bold">
                                <Link to="/domestic-tours/ladakh">View Summer Packages</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Shoulder Season */}
                    <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-gold/30 transition-all">
                        <div className="h-48 overflow-hidden relative">
                            <img src="/images/ladakh/ladakh-img-8.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ladakh in Autumn" />
                            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> Best for Colors
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Sept to Oct</h3>
                            <p className="text-sm text-orange-400 font-bold mb-4">Autumn</p>
                            <p className="text-muted-foreground text-sm mb-4">
                                Magical landscape with golden poplars and blue waters. Roads start closing by mid-October. Fewer crowds and crisp cold air.
                            </p>
                            <ul className="text-sm space-y-2 mb-6">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Stunning Photography</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Lower Prices</li>
                            </ul>
                            <Button asChild variant="outline" className="w-full">
                                <Link to="/contact">Plan Autumn Trip</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Winter Season */}
                    <div className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-gold/30 transition-all">
                        <div className="h-48 overflow-hidden relative">
                            <img src="/images/ladakh/ladakh-img-9.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ladakh in Winter" />
                            <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                <Snowflake className="w-3 h-3" /> Only for Brave
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Nov to March</h3>
                            <p className="text-sm text-blue-400 font-bold mb-4">Winter</p>
                            <p className="text-muted-foreground text-sm mb-4">
                                Extreme cold (-20°C). Highways closed. Only accessible via flight. Famous for Chadar Trek and Snow Leopard spotting.
                            </p>
                            <ul className="text-sm space-y-2 mb-6">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Frozen Pangong Lake</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Unique Experience</li>
                            </ul>
                            <Button asChild variant="outline" className="w-full">
                                <Link to="/contact">Book Winter Trip</Link>
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Month Breakdown Table */}
                <section className="bg-muted/10 p-8 rounded-xl border border-white/5 mb-16">
                    <h2 className="text-2xl font-serif font-bold mb-6 text-center">Highway Status Calendar 2026 (Expected)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                <tr>
                                    <th className="px-6 py-3">Month</th>
                                    <th className="px-6 py-3">Srinagar-Leh Highway</th>
                                    <th className="px-6 py-3">Manali-Leh Highway</th>
                                    <th className="px-6 py-3">Weather</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 bg-card">
                                    <td className="px-6 py-4 font-bold">April</td>
                                    <td className="px-6 py-4 text-yellow-500"><AlertTriangle className="w-4 h-4 inline mr-1" /> May Open (Late)</td>
                                    <td className="px-6 py-4 text-red-500"><Snowflake className="w-4 h-4 inline mr-1" /> Closed</td>
                                    <td className="px-6 py-4">Still Cold</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-6 py-4 font-bold">May</td>
                                    <td className="px-6 py-4 text-green-500"><CheckCircle className="w-4 h-4 inline mr-1" /> Open</td>
                                    <td className="px-6 py-4 text-yellow-500"><AlertTriangle className="w-4 h-4 inline mr-1" /> Opens Late May</td>
                                    <td className="px-6 py-4">Pleasant Days</td>
                                </tr>
                                <tr className="border-b border-white/5 bg-card">
                                    <td className="px-6 py-4 font-bold">June - Aug</td>
                                    <td className="px-6 py-4 text-green-500"><CheckCircle className="w-4 h-4 inline mr-1" /> Fully Open</td>
                                    <td className="px-6 py-4 text-green-500"><CheckCircle className="w-4 h-4 inline mr-1" /> Fully Open</td>
                                    <td className="px-6 py-4">Best Weather</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-6 py-4 font-bold">Sept - Oct</td>
                                    <td className="px-6 py-4 text-green-500">Open until Nov</td>
                                    <td className="px-6 py-4 text-green-500">Open until Mid-Oct</td>
                                    <td className="px-6 py-4">Cold Nights</td>
                                </tr>
                                <tr className="border-b border-white/5 bg-card">
                                    <td className="px-6 py-4 font-bold">Nov - Mar</td>
                                    <td className="px-6 py-4 text-red-500">Closed</td>
                                    <td className="px-6 py-4 text-red-500">Closed</td>
                                    <td className="px-6 py-4">Frozen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <LadakhFAQ />

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default BestTimeLadakh;
