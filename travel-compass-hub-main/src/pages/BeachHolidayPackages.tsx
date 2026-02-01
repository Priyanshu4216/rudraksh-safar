import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Palmtree, Sun, Umbrella, Anchor, Plane, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BeachHolidayPackages = () => {
    const destinations = [
        { name: "Andaman Islands", tag: "Exotic", desc: "Havelock & Neil Island. Scuba diving paradise." },
        { name: "Maldives", tag: "Luxury", desc: "Water villas & turquoise lagoons. Visa on Arrival." },
        { name: "Goa", tag: "Party", desc: "North Goa Nightlife or South Goa Peace." },
        { name: "Bali", tag: "Culture", desc: "Beaches, Temples & Rice Terraces. Affordable luxury." },
        { name: "Thailand", tag: "Fun", desc: "Phuket & Krabi island hopping tours." },
        { name: "Lakshadweep", tag: "Trending", desc: "India's own Maldives. Pristine coral reefs." },
    ];

    return (
        <>
            <Helmet>
                <title>Best Beach Holiday Packages | Goa, Andaman, Maldives & Bali - Rudraksh Safar</title>
                <meta name="description" content="Plan your dream beach vacation. Exclusive deals on Andaman honeymoon packages, Maldives water villas, and Goa party trips. Flight included options available." />
                <meta name="keywords" content="beach holiday packages, andaman tour package, maldives honeymoon package, goa trip cost, bali tour package" />
                <link rel="canonical" href="https://rudrakshsafar.com/beach-holiday-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-cyan-100 dark:bg-cyan-950/30 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Palmtree className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
                            Vitamin <span className="text-cyan-600">Sea</span> Awaits
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Sun, Sand, and Tan lines. Dive into the world's most beautiful coastlines.
                        </p>
                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white" asChild>
                            <a href="#beaches">Explore Beaches</a>
                        </Button>
                    </div>
                </section>

                {/* Why Beach? */}
                <section className="py-12 border-b bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center gap-8 md:gap-16 text-center">
                            <div>
                                <Sun className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <span className="font-medium text-sm md:text-base">Sun Bathing</span>
                            </div>
                            <div>
                                <Umbrella className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                <span className="font-medium text-sm md:text-base">Relaxation</span>
                            </div>
                            <div>
                                <Anchor className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <span className="font-medium text-sm md:text-base">Water Sports</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section id="beaches" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Handpicked Beach Paradises</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-950 dark:to-teal-950 flex items-center justify-center">
                                        <Palmtree className="w-24 h-24 text-teal-300 dark:text-teal-800 opacity-50" />
                                        <Badge className="absolute top-4 right-4 bg-white/90 text-black">{dest.tag}</Badge>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                                        <p className="text-muted-foreground mb-6">{dest.desc}</p>
                                        <Button className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors" variant="outline" asChild>
                                            <a href={`https://wa.me/919406182174?text=Quote for ${dest.name} beach package`}>
                                                View Deals <ArrowRight className="w-4 h-4 ml-2" />
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Beach Guide - SEO Content */}
                <section className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">Guide to Best Beach Holidays in India</h2>

                            <div className="space-y-8 text-muted-foreground leading-relaxed">
                                <div className="bg-background p-6 rounded-xl border shadow-sm">
                                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                        <Sun className="w-5 h-5 text-orange-500" />
                                        Best Time for Beach Vacations
                                    </h3>
                                    <p>
                                        The ideal time for a beach holiday in India and nearby destinations like Maldives or Thailand is generally from <strong>October to March</strong>. During these months, the weather is pleasant, dry, and perfect for water sports.
                                        <br /><br />
                                        However, if you're looking for budget deals, the shoulder seasons (April-May or September) offer significantly lower rates on luxury resorts, though you might encounter some humidity or light showers.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-background p-6 rounded-xl border shadow-sm">
                                        <h3 className="text-xl font-bold text-foreground mb-3">For Couples & Honeymooners</h3>
                                        <p>
                                            <strong>Maldives</strong> and <strong>Andaman</strong> are the top choices. Maldives offers private water villas for unmatched privacy, while Havelock Island in Andaman offers secluded beaches like Radhanagar with romantic sunset cruises.
                                        </p>
                                    </div>
                                    <div className="bg-background p-6 rounded-xl border shadow-sm">
                                        <h3 className="text-xl font-bold text-foreground mb-3">For Families & Adventure</h3>
                                        <p>
                                            <strong>Goa</strong> and <strong>Bali</strong> are unbeatable. Goa has safe beaches for kids and plenty of water sports. Bali offers a mix of beach fun, cultural temples, and wildlife parks that keep children entertained.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-background p-6 rounded-xl border shadow-sm">
                                    <h3 className="text-xl font-bold text-foreground mb-3">Packing Essentials</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>High SPF Sunscreen (reef-safe preferred) and UV sunglasses.</li>
                                        <li>Quick-dry swimwear and a microfiber travel towel.</li>
                                        <li>Waterproof phone case for capturing underwater moments.</li>
                                        <li>Light cotton clothes and comfortable flip-flops.</li>
                                        <li>Mosquito repellent, especially for tropical evenings.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-cyan-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Which Ocean calls you today?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            From the Indian Ocean to the Arabian Sea, we have covered all coasts.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-cyan-800">
                                <a href="https://wa.me/919406182174?text=Plan my beach vacation">
                                    Plan Trip Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BeachHolidayPackages;
