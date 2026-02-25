import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2 } from 'lucide-react';

const GrandPalace = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Bangkok", "item": "https://rudrakshsafar.com/destinations/thailand/bangkok" },
            { "@type": "ListItem", "position": 5, "name": "Grand Palace", "item": "https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/grand-palace" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Grand Palace Bangkok | Tickets & Dress Code Guide</title>
                <meta name="description" content="Guide to the Grand Palace in Bangkok. Check entry timings, strict dress code rules, ticket prices, and how to reach from Pratunam area." />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>

            <Navbar />

            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop"
                    alt="Grand Palace Bangkok"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex gap-2 mb-3">
                        <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">Cultural Heritage</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Grand Palace</h1>
                    <p className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-6">The former residence of the Kings of Siam. The most spectacular landmark in Bangkok.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 space-y-12">

                        <div className="flex flex-wrap gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <Clock className="w-5 h-5 text-primary" />
                                <div><span className="block text-xs text-muted-foreground">Timings</span><span className="font-bold text-sm">8:30 AM - 3:30 PM</span></div>
                            </div>
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <Ticket className="w-5 h-5 text-orange-500" />
                                <div><span className="block text-xs text-muted-foreground">Entry Fee</span><span className="font-bold text-sm">500 THB</span></div>
                            </div>
                        </div>

                        <section>
                            <h2 className="text-3xl font-serif font-bold mb-4">A Marvel of Thai Architecture</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Built in 1782, the Grand Palace is a complex of beautiful buildings and gardens. It houses the Temple of the Emerald Buddha (Wat Phra Kaew), considered the most sacred Buddhist temple in Thailand.
                            </p>
                        </section>

                        <section className="bg-red-50 dark:bg-red-950/20 p-6 md:p-8 rounded-2xl border border-red-100 dark:border-red-900/50">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600 dark:text-red-400"><Info className="w-6 h-6" /> STRICT Dress Code</h3>
                            <p className="text-sm mb-4">The Grand Palace is a highly sacred site. Strict rules apply to all visitors.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" /> Men must wear long pants and shirts with sleeves (No tank tops/shorts).
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" /> Women must conservatively dress (No see-through clothes, bare shoulders, short skirts or tight pants).
                                </li>
                            </ul>
                            <p className="text-xs text-muted-foreground mt-4 italic">Note: If dressed inappropriately, you will have to rent clothes near the entrance.</p>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-card rounded-2xl border shadow-lg overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Book Bangkok City Tour</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Includes Grand Palace, Wat Traimit, and hotel transfers.</p>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full" size="lg">View Packages</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default GrandPalace;
