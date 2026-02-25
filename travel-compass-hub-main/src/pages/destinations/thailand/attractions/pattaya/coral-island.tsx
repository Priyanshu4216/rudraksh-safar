import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const CoralIsland = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Pattaya", "item": "https://rudrakshsafar.com/destinations/thailand/pattaya" },
            { "@type": "ListItem", "position": 5, "name": "Coral Island", "item": "https://rudrakshsafar.com/destinations/thailand/attractions/pattaya/coral-island" }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How to reach Coral Island from Pattaya?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can take a speedboat from Bali Hai Pier in Pattaya. It takes about 15-20 minutes to reach."
                }
            },
            {
                "@type": "Question",
                "name": "Is vegetarian food available on Coral Island?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, many tour operators partnering with Indian agents provide Indian buffet lunch, including vegetarian and Jain food options."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Coral Island (Koh Larn) Pattaya Tour | Guide for Indians</title>
                <meta name="description" content="Complete guide to Coral Island Pattaya. Water sports activities, speedboat timings, Indian food options, and tour packages from Rudraksh Safar." />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            {/* Stacked Hero (Mobile) / Immersive Hero (Desktop) */}
            <div className="relative h-[50vh] md:h-[70vh] min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c78?q=80&w=2574&auto=format&fit=crop"
                    alt="Coral Island Pattaya Speedboat"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex gap-2 mb-3">
                        <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Water Sports</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Coral Island (Koh Larn)</h1>
                    <p className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-6">Experience crystal clear waters, thrilling water sports, and relaxing beaches just a speedboat ride away from Pattaya.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content (Editorial Layout) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Quick Info Bar */}
                        <div className="flex flex-wrap gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <Clock className="w-5 h-5 text-primary" />
                                <div><span className="block text-xs text-muted-foreground">Duration</span><span className="font-bold text-sm">Half Day (9AM-2PM)</span></div>
                            </div>
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <div><span className="block text-xs text-muted-foreground">Location</span><span className="font-bold text-sm">Off Pattaya Coast</span></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Ticket className="w-5 h-5 text-orange-500" />
                                <div><span className="block text-xs text-muted-foreground">Entry</span><span className="font-bold text-sm">Included in Tour</span></div>
                            </div>
                        </div>

                        <section>
                            <h2 className="text-3xl font-serif font-bold mb-4">Why Visit Coral Island?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Also known as Koh Larn, Coral Island is the perfect escape from the bustling city of Pattaya. While Pattaya beach is great for nightlife, Coral Island is where you go for pristine white sand and azure blue waters.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                For Indian travelers, especially families and couples, this is a highlight of the Pattaya itinerary. It offers a mix of relaxation and adrenaline-pumping activities in a safe, guided environment.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-6">Popular Activities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 border rounded-xl bg-card">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Parasailing</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Fly high above the ocean tied to a speedboat. Safe and thrilling.</p>
                                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">Approx 500-800 THB</span>
                                </div>
                                <div className="p-4 border rounded-xl bg-card">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Sea Walking</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Walk on the ocean floor wearing a special helmet. Perfect for non-swimmers.</p>
                                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">Approx 1200 THB</span>
                                </div>
                                <div className="p-4 border rounded-xl bg-card">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Banana Boat</h4>
                                    <p className="text-sm text-muted-foreground mb-3">A fun group activity. Hold on tight as the speedboat pulls you across the waves.</p>
                                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">Approx 300 THB</span>
                                </div>
                                <div className="p-4 border rounded-xl bg-card">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Jet Ski</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Ride the waves yourself (with a guide behind you). High adrenaline.</p>
                                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">Approx 800 THB</span>
                                </div>
                            </div>
                            <p className="text-sm text-orange-600 dark:text-orange-400 mt-4 italic flex items-center gap-1">
                                <Info className="w-4 h-4" /> Rates are approximate and depend on negotiation. Best to book a package that includes activities.
                            </p>
                        </section>

                        {/* Important For Indians Section */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-6 md:p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-green-600" /> Note for Indian Travelers</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm"><strong>Food:</strong> Local tours arranged by pure-veg or Jain food operators include a buffet lunch on the mainland after returning, or sometimes on the island itself.</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm"><strong>Attire:</strong> Wear comfortable clothes, shorts, and slippers. Changing rooms are available (usually paid, 10-20 THB).</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm"><strong>Sun Protection:</strong> The sun can be harsh. Carry strong sunscreen, sunglasses, and a hat.</p>
                                </li>
                            </ul>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left">How to reach Coral Island from Pattaya?</AccordionTrigger>
                                    <AccordionContent>
                                        You can take a speedboat from Bali Hai Pier in Pattaya. It takes about 15-20 minutes to reach. Public ferries are cheaper but take around 45 minutes.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left">Is it safe for kids and elderly?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, relaxing on the beach is perfectly safe. However,speedboat rides can be bumpy. People with back problems or pregnant women should exercise caution or avoid the speedboat journey if waters are rough.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left">Are water sports included in the tour?</AccordionTrigger>
                                    <AccordionContent>
                                        Basic packages usually cover transport and lunch. Water sports are almost always extra, paid directly to the local operators, unless you book a specialized "All-Inclusive Activities" package.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </div>

                    {/* Sidebar Sticky Panel */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Package CTA Card */}
                            <div className="bg-card rounded-2xl border shadow-lg overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Book Pattaya Tours</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Includes Coral Island Tour with Indian Buffet Lunch, transfers, and hotel.</p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Speedboat transfers included</div>
                                        <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Veg/Non-Veg Indian Lunch</div>
                                        <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Choice of Water Sports</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full" size="lg">Explore Packages</Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Related Links */}
                            <div className="p-6 border rounded-xl bg-card">
                                <h4 className="font-bold mb-4">Related in Pattaya</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/destinations/thailand/attractions/pattaya/nong-nooch-garden" className="group flex items-center justify-between text-sm hover:text-primary transition-colors">
                                            <span>Nong Nooch Garden</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                    <li className="block h-[1px] bg-border" />
                                    <li>
                                        <Link to="/destinations/thailand/attractions/pattaya/sanctuary-of-truth" className="group flex items-center justify-between text-sm hover:text-primary transition-colors">
                                            <span>Sanctuary of Truth</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                    <li className="block h-[1px] bg-border" />
                                    <li>
                                        <Link to="/destinations/thailand/pattaya" className="group flex items-center justify-between text-sm text-primary font-semibold transition-colors">
                                            <span>Back to Pattaya Guide</span>
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

export default CoralIsland;
