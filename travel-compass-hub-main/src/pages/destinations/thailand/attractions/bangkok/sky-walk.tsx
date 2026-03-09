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
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';

const SkyWalk = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Sky Walk Tour | Bangkok Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Sky Walk in Bangkok. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/sky-walk" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Bangkok', path: '/destinations/thailand/bangkok' },
                        { label: 'Mahanakhon SkyWalk', path: '/destinations/thailand/attractions/bangkok/sky-walk' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop"
                    alt="Sky Walk"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Iconic</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Sky Walk</h1>
                    <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-6 font-medium drop-shadow-md">An iconic experience in Bangkok offering unforgettable memories and stunning sights.</p>
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
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</span><span className="font-bold text-sm">Central Bangkok</span></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Ticket className="w-6 h-6 text-orange-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Entry Fee</span><span className="font-bold text-sm">Paid Access</span></div>
                            </div>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION & 8. STORYTELLING SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Discover Mahanakhon SkyWalk: Bangkok's Highest Observation Deck</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Prepare to elevate your Bangkok experience, literally. Perched majestically atop the futuristic King Power Mahanakhon Building, the <strong>Mahanakhon SkyWalk</strong> is Thailand’s highest observation deck, soaring an astonishing 314 meters (1,030 feet) above the vibrant streets below. For Indian travelers seeking that perfect adrenaline-pumping vacation memory—and exceptional photos for social media—the SkyWalk is an absolute must-visit.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                More than just a viewing platform, the Mahanakhon building itself is an architectural marvel. Its distinctive pixelated facade makes it one of the most recognizable structures in the Bangkok skyline. Inside, the journey begins the moment you step into the high-speed elevator, which rockets you to the 74th floor in under 50 seconds, accompanied by a digital multimedia presentation wrapping around the elevator walls.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                But the real magic happens when you step outside onto the 78th-floor rooftop. Here, you are not just looking at the city; you are suspended over it. The attraction features one of the world's largest interactive glass trays. Walking across the transparent glass floor with the miniature-looking city directly beneath your feet is an experience that induces both vertigo and unparalleled awe.
                            </p>
                        </section>

                        {/* NEW BLOCK: Best Time of Day to Visit */}
                        <section className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Best Time of Day to Visit Mahanakhon SkyWalk</h3>
                            <p className="text-muted-foreground mb-6">Timing is everything when you want to capture the perfect panoramic view of Bangkok. Here is a breakdown of the best times to experience the SkyWalk:</p>

                            <div className="space-y-6">
                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground">1. The "Golden Hour" & Sunset (4:30 PM - 6:30 PM)</h4>
                                    <p className="text-muted-foreground"><strong>The absolute best time to visit.</strong> Arrive late in the afternoon to watch the sky transition from bright blue to brilliant shades of orange, pink, and purple. As the sun dips behind the Chao Phraya River, the city lights begin to flicker on, offering you a two-for-one experience: a daytime view and a glittering nightscape. <em>Note: This is the most crowded time, so book tickets well in advance.</em></p>
                                </div>

                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground">2. Early Morning (10:00 AM - 12:00 PM)</h4>
                                    <p className="text-muted-foreground">If you prefer avoiding crowds and want clear, obstruction-free photos on the glass tray, the morning slot is ideal. The lighting is crisp, making it perfect for taking selfies without hundreds of tourists in the background.</p>
                                </div>

                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground">3. Nighttime (After 7:00 PM)</h4>
                                    <p className="text-muted-foreground">For couples seeking a romantic atmosphere, visiting after dark is magical. The rooftop bar comes alive with music, signature cocktails, and a sophisticated vibe. The sprawling metropolis below looks like a glowing sea of stars.</p>
                                </div>
                            </div>
                        </section>

                        {/* NEW BLOCK: Ticket Types Breakdown */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h3 className="text-2xl font-serif font-bold mt-12 mb-6">Decoding the SkyWalk Ticket Types</h3>
                            <p className="text-muted-foreground">The Mahanakhon SkyWalk offers a few different entry tiers. Understanding what each ticket includes allows you to budget your trip effectively:</p>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="flex gap-4 p-4 border rounded-xl bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg">1. Standard Admission Ticket</strong>
                                        <span className="text-muted-foreground text-sm">Includes access to the indoor observation deck on the 74th floor and the outdoor rooftop and glass tray on the 78th floor. This is the most popular choice for general tourists.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 border rounded-xl bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg">2. Sunset Entry Ticket</strong>
                                        <span className="text-muted-foreground text-sm">A slightly premium ticket specifically for the peak sunset hours. It often includes a complimentary drink (mocktail or cocktail) at the highest rooftop bar in Thailand.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 border rounded-xl bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg">3. VR Flight Experience Add-on</strong>
                                        <span className="text-muted-foreground text-sm">For tech enthusiasts, you can add the Mahanakhon SkyRides experience on the 1st floor—a thrilling Virtual Reality paragliding ride through the cityscape of Bangkok.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* NEW BLOCK: Dress Code */}
                        <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2"><Info className="w-6 h-6 text-blue-600" /> Mahanakhon SkyWalk Dress Code & Safety Rules</h3>
                            <p className="text-muted-foreground mb-4">Unlike Bangkok's Grand Palace, the SkyWalk does not have a strict traditional dress code, but there are a few important rules to keep in mind, especially for the Glass Tray:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong>Glass Tray Footwear:</strong> You cannot wear your own shoes on the glass floor. The staff will provide mandatory protective fabric shoe covers (booties) to slip over your footwear to prevent scratching the glass.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong>No Loose Items:</strong> Mobile phones, cameras, or selfie sticks are strictly prohibited on the glass tray itself. If you want photos, a friend or family member must stand outside the designated glass area to take the picture for you.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong>General Attire:</strong> Smart casual is recommended if you plan to stay and drink at the Rooftop Bar. Avoid overly scruffy beachwear.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 3. WHY VISIT (HIGHLIGHTS) */}

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="text-muted-foreground mb-4">Easily accessible via the BTS Skytrain. Get off at the <strong>Chong Nonsi BTS Station (Silom Line)</strong> and take Exit 3, which connects directly to the King Power Mahanakhon Building.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <FAQSection title="Mahanakhon SkyWalk FAQs" faqs={[
                            {
                                question: "Is the Mahanakhon SkyWalk glass tray safe to walk on?",
                                answer: "Yes, the glass tray is incredibly safe. It is constructed from multi-layered tempered glass designed specifically to hold immense weight securely. However, to maintain the integrity of the glass, you must wear the provided protective shoe covers and strictly avoid bringing heavy items or cameras onto the tray."
                            },
                            {
                                question: "What are the opening hours of the Mahanakhon SkyWalk?",
                                answer: "The Mahanakhon SkyWalk is typically open daily from 10:00 AM to 7:00 PM, with the last admission allowed at 6:30 PM. The rooftop bar timings may vary, often staying open later into the evening for drinks and music."
                            },
                            {
                                question: "Can I bring my camera to the Mahanakhon SkyWalk?",
                                answer: "You can bring your camera to the observation deck and the outdoor rooftop area to capture the stunning Bangkok skyline. However, cameras and smartphones are strictly banned when you are physically standing on the glass tray itself. A companion must take photos of you from outside the glass area."
                            },
                            {
                                question: "Is the Mahanakhon SkyWalk accessible for wheelchair users?",
                                answer: "Yes, the entire King Power Mahanakhon building and the SkyWalk observation decks are fully accessible for visitors in wheelchairs. Elevators and ramps are provided throughout the public areas."
                            },
                            {
                                question: "How long should I plan to spend at the SkyWalk?",
                                answer: "Most visitors spend about 1.5 to 2 hours at the Mahanakhon SkyWalk. This gives you ample time to take the elevator up, enjoy the 360-degree views, brave the glass floor, and perhaps enjoy a drink at the rooftop bar."
                            }
                        ]} />
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-24 space-y-8">

                            <div className="bg-card rounded-2xl border shadow-xl overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-8">
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Visit</h3>
                                    <p className="text-muted-foreground mb-6">Add the Mahanakhon SkyWalk to your custom Bangkok itinerary. Let our experts handle the tickets and transfers.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Pre-booked tickets</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Dedicated local support</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Explore Thailand Packages</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm">
                                <h4 className="font-serif font-bold text-xl mb-4">More Bangkok Master Pages</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/bangkok" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore Bangkok City Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/thailand/attractions/bangkok/grand-palace" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">The Grand Palace</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* PHASE 2C: INTERNAL LINKING & ENTITY ARCHITECTURE */}
            <section className="py-12 bg-muted/20 border-t border-border mt-12">
                <div className="container max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold mb-6 text-foreground text-center">More Thailand Travel Guides & Packages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1. Destination Pillar Links */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Explore Destinations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Complete Thailand Travel Guide</Link></li>
                                <li><Link to="/destinations/thailand/bangkok" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Bangkok Attractions & Itineraries</Link></li>
                                <li><Link to="/destinations/thailand/phuket" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Phuket Island Hopping Guide</Link></li>
                                <li><Link to="/destinations/thailand/krabi" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Krabi Beaches & Resorts</Link></li>
                                <li><Link to="/destinations/thailand/koh-samui" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Koh Samui Travel Tips</Link></li>
                            </ul>
                        </div>
                        {/* 2. Attraction Cross-linking (Bangkok) */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Top Bangkok Attractions</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand/attractions/bangkok/grand-palace" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Tour the Grand Palace</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/safari-world" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Safari World Bangkok Tickets</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/sea-life" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Sea Life Ocean World Access</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/dream-world" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Dream World Theme Park Guide</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/sky-walk" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Mahanakhon SkyWalk Views</Link></li>
                            </ul>
                        </div>
                        {/* 3. Tour Package Linking */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Popular Tour Packages</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/international-tours/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Thailand Holiday Packages</Link></li>
                                <li><Link to="/international-packages" className="text-muted-foreground hover:text-primary transition-colors hover:underline">All International Tour Packages</Link></li>
                                <li><Link to="/budget-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Affordable Budget Travel Deals</Link></li>
                                <li><Link to="/luxury-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Premium Luxury Honeymoon Packages</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                        <p>Planning your trip? Most international flights land at Suvarnabhumi Airport in Bangkok. We recommend combining a city tour with island excursions to Phuket or Koh Samui for the ultimate Thai experience.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SkyWalk;
