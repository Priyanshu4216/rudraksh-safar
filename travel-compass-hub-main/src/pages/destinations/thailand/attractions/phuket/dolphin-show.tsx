import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2, Navigation, Star, ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const DolphinShow = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Dolphin Show Tour | Phuket Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Dolphin Show in Phuket. Facts, timings, tickets, and travel tips for tourists." />
            </Helmet>

            <Navbar />

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1570417957960-4414008bc0aa?q=80&w=2574&auto=format&fit=crop"
                    alt="Dolphin Show"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Family</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Dolphin Show</h1>
                    <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-6 font-medium drop-shadow-md">An iconic experience in Phuket offering unforgettable memories and stunning sights.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 5. PRACTICAL INFORMATION (Quick Info Bar) */}
                        <div className="flex flex-wrap gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm">
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <Clock className="w-6 h-6 text-primary" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Duration</span><span className="font-bold text-sm">Half Day</span></div>
                            </div>
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <MapPin className="w-6 h-6 text-green-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</span><span className="font-bold text-sm">Central Phuket</span></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Ticket className="w-6 h-6 text-orange-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Entry Fee</span><span className="font-bold text-sm">Paid Access</span></div>
                            </div>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION & 8. STORYTELLING SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Discover Dolphin Show</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Nestled in the heart of Phuket, Dolphin Show stands as an emblem of the city's vibrant tourist scene. 
                                Whether you are an adventure seeker, a culture enthusiast, or traveling with family, this attraction offers something uniquely spectacular. 
                                From the moment you arrive, the atmosphere captivates you, immersing you in a world far removed from the ordinary.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                                Beyond its immediate visual appeal, the site carries a rich history and cultural significance, making it not just a visual treat but a deeply educational and enriching stop on your Thai itinerary.
                            </p>
                        </section>

                        {/* 3. WHY VISIT (HIGHLIGHTS) */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">Top Highlights <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /></h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex gap-4 p-4 border rounded-xl bg-muted/20">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Incredible Photo Ops</h4>
                                            <p className="text-sm text-muted-foreground">Capture stunning memories against beautiful backdrops.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. THINGS TO DO */}
                        <section className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6">Things To Do</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Take a guided tour to understand the deep history.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Enjoy local cuisine at nearby acclaimed restaurants.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Shop for authentic souvenirs at the local markets attached to the venue.</span>
                                </li>
                            </ul>
                        </section>

                        {/* 7. TRAVEL TIPS FOR INDIAN TRAVELERS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Tips for Indian Travelers</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Food:</strong> Indian and vegetarian options are readily available in the vicinity. Ask your guide for the best spots.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Attire:</strong> Dress comfortably but respect local customs if visiting cultural segments of the attraction.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Timing:</strong> Arrive early in the morning to beat the crowds and the afternoon heat.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Dolphin Show, Phuket</p>
                                    <p className="text-muted-foreground mb-4">Easily accessible via local taxis, Tuk-Tuks, or pre-arranged tour transfers.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="w-full bg-card border rounded-2xl px-6 py-2 shadow-sm">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg font-semibold text-left">Is it suitable for children and families?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        Absolutely. The venue is highly family-friendly with dedicated spaces and activities suited for all age groups.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg font-semibold text-left">How much time should we allocate?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        We recommend dedicating at least 3-4 hours to fully experience everything without rushing.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg font-semibold text-left">Can we buy tickets at the venue?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        Yes, but booking in advance through a package allows you to skip the long queues and often secures a better rate.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA (Sidebar Sidebar) */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-24 space-y-8">
                            
                            <div className="bg-card rounded-2xl border shadow-xl overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-8">
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Visit</h3>
                                    <p className="text-muted-foreground mb-6">Add Dolphin Show to your custom Phuket itinerary. Let our experts handle the tickets and transfers.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Priority access</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private transfers</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm">
                                <h4 className="font-serif font-bold text-xl mb-4">More in Phuket</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/phuket" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore Phuket Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DolphinShow;
