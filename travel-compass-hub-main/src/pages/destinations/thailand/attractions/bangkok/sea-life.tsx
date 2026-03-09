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

const SeaLife = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Sea Life Tour | Bangkok Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Sea Life in Bangkok. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Siam_Ocean_World_Enterance_2011.jpg/960px-Siam_Ocean_World_Enterance_2011.jpg" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/sea-life" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Bangkok', path: '/destinations/thailand/bangkok' },
                        { label: 'SEA LIFE Ocean World', path: '/destinations/thailand/attractions/bangkok/sea-life' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Siam_Ocean_World_Enterance_2011.jpg/960px-Siam_Ocean_World_Enterance_2011.jpg"
                    alt="Sea Life"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Nature</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Sea Life</h1>
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

                        {/* 2. ABOUT THE ATTRACTION SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Discover SEA LIFE Bangkok Ocean World</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Dive beneath the bustling streets of Bangkok and immerse yourself in an underwater wonderland. Located conveniently in the basement of the ultra-premium Siam Paragon mall, <strong>SEA LIFE Bangkok Ocean World</strong> is one of the largest aquariums in Southeast Asia. Spanning over 10,000 square meters, it is home to more than 30,000 fascinating marine creatures from around the globe.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                For Indian families traveling with young children, SEA LIFE offers an unmatched educational and sensory experience. From incredibly rare species of sharks to playful penguins and giant spider crabs, every exhibit is designed to mesmerize visitors of all ages.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">Must-See Aquarium Zones</h3>
                            <p className="text-muted-foreground mb-6">
                                The aquarium is brilliantly divided into distinct thematic zones, taking you on a journey from rocky shores to the deepest, darkest parts of the ocean. Ensure you spend ample time at these top attractions:
                            </p>

                            <div className="space-y-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2"><Star className="w-5 h-5 text-blue-500 fill-blue-500" /> 1. The Shark Walk</h4>
                                    <p className="text-muted-foreground">Step onto an acrylic glass pathway suspended directly above a tank filled with various species of sharks. The transparent floor gives you a thrilling perspective of these apex predators gliding silently just inches beneath your feet, accompanied by interactive informational screens outlining shark biology and conservation efforts.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2"><Star className="w-5 h-5 text-blue-500 fill-blue-500" /> 2. Penguin Ice Adventure</h4>
                                    <p className="text-muted-foreground">Transport yourself to the frozen landscapes of the Antarctic. Here, you can watch the incredibly cute and comical Gentoo Penguins as they waddle across the ice and dive gracefully into the freezing waters. The exhibit even generates real snow to mimic their natural habitat!</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-muted/20">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2"><Star className="w-5 h-5 text-blue-500 fill-blue-500" /> 3. Ocean Tunnel (The Main Highlight)</h4>
                                    <p className="text-muted-foreground">Walk through a spectacular 270-degree underwater glass tunnel. As you stroll, giant stingrays, incredibly massive groupers, and Sand Tiger Sharks swim all around and directly over you. It provides incredible photo opportunities and gives you the sensation of truly walking on the ocean floor.</p>
                                </div>
                            </div>

                        </section>

                        {/* SECTION 3: Ticket Options */}
                        <section className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">SEA LIFE Ticket Options & Packages</h3>
                            <p className="text-muted-foreground mb-6">Tickets can be quite expensive if purchased directly at the walk-in counter. Booking online through your tour operator ahead of time offers massive savings. There are two main ticket categories you should consider:</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg mb-1">Standard Aquarium Admission</strong>
                                        <p className="text-muted-foreground text-sm">Valid for single entry to all the main marine zones. Ideal if you are short on time and only wish to view the animals without participating in extra experiences.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg mb-1">Super Value Package (Highly Recommended)</strong>
                                        <p className="text-muted-foreground text-sm">Includes aquarium admission plus rides on the Glass Bottom Boat (where you float above the main shark tank), entry to Madame Tussauds Bangkok (located in the same mall), and a 4D Cinema experience.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-blue-600" /> Feeding Times & Family Tips</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Check the Feeding Schedule:</strong> The highlight of any visit is watching the divers hand-feed the sharks and stingrays in the main Ocean Tunnel. This usually happens around 1:00 PM and 2:00 PM, but always check the daily schedule upon entry.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Stroller Accessibility:</strong> The entire aquarium is ramp-friendly, making it incredibly easy to navigate if you have a baby stroller or wheelchair.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Food court next door:</strong> Being inside Siam Paragon means you have access to a massive basement food court right outside the aquarium exit, featuring lots of Indian, Thai, and international fast-food options.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="text-muted-foreground mb-4">Located in the basement of Siam Paragon Shopping Centre. Take the BTS Skytrain to <strong>Siam Station</strong>, which connects directly to the mall. Head to level B1/B2.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="SEA LIFE Bangkok FAQs" faqs={[
                                {
                                    question: "How much time is required to visit SEA LIFE Bangkok?",
                                    answer: "We recommend allocating at least 2 to 3 hours to cover the entire aquarium smoothly, especially if you plan on attending any of the feeding sessions or taking the glass-bottom boat ride."
                                },
                                {
                                    question: "Is SEA LIFE Bangkok Ocean World worth it?",
                                    answer: "Yes, especially if you are traveling with children or prefer an air-conditioned attraction away from the intense midday Bangkok heat. It holds an incredible variety of marine life presented in world-class exhibits."
                                },
                                {
                                    question: "Can I bring my own food and drinks inside?",
                                    answer: "No, outside food and beverages are strictly not allowed inside the aquarium. There are small snack kiosks inside, and hundreds of dining options immediately outside in the Siam Paragon food court."
                                },
                                {
                                    question: "Is photography allowed inside the aquarium?",
                                    answer: "Yes, photography is highly encouraged! However, you must turn OFF your camera flash at all times, as sudden flashes of light can cause severe stress and harm to the marine animals."
                                },
                                {
                                    question: "Does the ticket include Madam Tussauds?",
                                    answer: "Only if you purchase the 'Combo' or 'Super Value' package. A standard admission ticket to SEA LIFE does not grant you access to Madame Tussauds. Since they are located in the same mall, the combo ticket is highly recommended for a full day of entertainment."
                                }
                            ]} />
                        </div>
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA (Sidebar Sidebar) */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-24 space-y-8">

                            <div className="bg-card rounded-2xl border shadow-xl overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-8">
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Visit</h3>
                                    <p className="text-muted-foreground mb-6">Skip the long lines. Add SEA LIFE tickets to your custom Bangkok itinerary with Rudraksh Safar.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Combo Tickets Available</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Zero hidden fees</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm mt-8">
                                <h4 className="font-serif font-bold text-xl mb-4">More Bangkok Master Pages</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/bangkok" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore Bangkok City Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/thailand/attractions/bangkok/safari-world" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Safari World Bangkok</span>
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

export default SeaLife;
