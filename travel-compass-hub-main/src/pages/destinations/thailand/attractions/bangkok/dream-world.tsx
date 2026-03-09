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

const DreamWorld = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Dream World Tour | Bangkok Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Dream World in Bangkok. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://upload.wikimedia.org/wikipedia/commons/9/9c/Dream_World%2C_Thailand.jpg" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/dream-world" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Bangkok', path: '/destinations/thailand/bangkok' },
                        { label: 'Dream World Bangkok', path: '/destinations/thailand/attractions/bangkok/dream-world' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Dream_World%2C_Thailand.jpg"
                    alt="Dream World"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Family</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Dream World</h1>
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
                            <h2 className="text-3xl font-serif font-bold text-foreground">A Magical Family Escape: Dream World Bangkok</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                If you are looking for an action-packed, adrenaline-pumping, utterly magical day out in Bangkok, look no further than <strong>Dream World Bangkok</strong>. Often referred to as "The Disneyland of Thailand," this massive amusement park offers a fantastic blend of high-speed roller coasters, whimsical fairy tale zones, and spectacular live entertainment that appeals equally to toddlers, teenagers, and adults.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Located just a short drive north of central Bangkok in the Pathum Thani province, Dream World is meticulously designed across beautifully landscaped grounds. The park features over 40 distinct rides and attractions, making it the premier family destination in the country.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">Explore The Four Dreamy Zones</h3>
                            <p className="text-muted-foreground mb-6">
                                Dream World is conceptually divided into four beautifully themed zones. To maximize your day, you should strategically plan your route through these areas:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🎢 Adventure Land</h4>
                                    <p className="text-muted-foreground text-sm">The heart of the park and the place for thrill-seekers! Home to the adrenaline-pumping 'Space Mountain' indoor coaster, the gravity-defying 'Tornado', and the famous 'Super Splash' which guarantees you will get soaking wet. This is where teenagers and adults will spend most of their time.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">❄️ Snow Town</h4>
                                    <p className="text-muted-foreground text-sm">Experience the Arctic in the middle of tropical Thailand! Step into a sub-zero environment where you can build snowmen, ride a sleigh, and engage in snowball fights. Jackets and boots are provided. It is a wildly popular escape from the Bangkok heat.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🧚‍♂️ Dream Garden</h4>
                                    <p className="text-muted-foreground text-sm">A serene and ridiculously photogenic area. Ride the calming 'Cable Car' to get a spectacular aerial view of the entire park, row a boat across the tranquil lake, and explore the 'Seven Wonders of the World' miniature exhibit showcasing the Taj Mahal, Great Wall of China, and more.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🏰 Fantasy Land</h4>
                                    <p className="text-muted-foreground text-sm">Perfect for younger children, featuring fairy tale classics brought to life. Explore the Giant House where everything is incredibly massive, visit Sleeping Beauty's Castle, and step inside the enchanting Cinderella's carriage.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Ticket Options */}
                        <section className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Decoding Dream World Ticket Packages</h3>
                            <p className="text-muted-foreground mb-6">Navigating ticket options for Dream World can be confusing at the gate. As an international tourist, you have access to specifically tailored day packages if booked via a travel agent.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg mb-1">Standard Visa Ticket</strong>
                                        <p className="text-muted-foreground text-sm">This is the base unlimited rides ticket. It grants you entry to the park and allows unlimited turns on almost all the rides in Adventure Land, Dream Garden, and Fantasy Land.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/10">
                                    <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg mb-1">Super Visa Ticket (All-Inclusive)</strong>
                                        <p className="text-muted-foreground text-sm">This covers absolutely everything. You get the standard Visa perks PLUS access to the premium zones which normally cost extra: Snow Town, the Water Fun park, the Animal Farm, and the Go-Kart track.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-6 p-4 bg-primary/10 rounded-lg flex gap-3 text-sm">
                                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <p><strong>Pro Tip:</strong> We highly advise booking the <em>"Super Visa + Indian Buffet Lunch + Round-trip Transfer"</em> combo. The park is far out, and local taxis are hard to find for the return journey.</p>
                            </div>
                        </section>

                        {/* SECTION 4: SHOW SCHEDULE */}
                        <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Star className="w-6 h-6 text-blue-600 fill-blue-600" /> Sensational Live Shows</h3>
                            <p className="text-muted-foreground mb-4">Aside from the rides, the park hosts two major daily events that you should plan your itinerary around:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Hollywood Action Show (1:00 PM & 2:30 PM):</strong> An incredibly loud, action-packed stunt show featuring real explosions, intense fight choreography, and a S.W.A.T team raiding a terrorist camp. Very impressive scale.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">The Colors of the World Parade (3:45 PM weekends):</strong> A massive, cheerful parade featuring park mascots, magical creatures, and brightly colored floats parading around the main lake area.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Dream World, Pathum Thani</p>
                                    <p className="text-muted-foreground mb-4">Located about 45 minutes north of central Bangkok. Driving or taking a private van is highly recommended as there is no direct BTS skytrain station nearby.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Dream World Bangkok FAQs" faqs={[
                                {
                                    question: "What is the entry fee for Dream World Bangkok?",
                                    answer: "Ticket prices vary wildly between walk-in rates and agency rates. A basic unlimited ride pass usually costs around 1,000 THB if booked online. Combo passes including Snow Town, lunch, and bus transfers generally sit around 1,300 - 1,500 THB."
                                },
                                {
                                    question: "Are jackets provided in Snow Town?",
                                    answer: "Yes, heavy winter jackets and rubber boots to slip over your shoes are provided free of charge when you enter the Snow Town zone. However, we recommend bringing your own socks, or you will have to buy them at the counter."
                                },
                                {
                                    question: "Is outside food allowed in Dream World?",
                                    answer: "No, outside food and beverages are not allowed inside the park. However, there are numerous affordable food stalls, a large Food Pavilion, and an Indian buffet restaurant located inside."
                                },
                                {
                                    question: "Which rides are best for adults?",
                                    answer: "Adults and older teenagers will enjoy the high-adrenaline rides in Adventure Land, specifically the Tornado, the Hurricane, Space Mountain, and the Sky Coaster (a suspended roller coaster)."
                                },
                                {
                                    question: "Is there an Indian restaurant in Dream World?",
                                    answer: "Yes, Dream World specifically caters to its large volume of Indian visitors by maintaining a dedicated Halal and Indian food section within the main buffet restaurant."
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
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Theme Park Day</h3>
                                    <p className="text-muted-foreground mb-6">Skip the queues and confusing taxi negotiations. Get the definitive Super Visa pass with private van transfers and an Indian lunch included.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Super Visa Passes</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Guaranteed Indian Buffet</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm mt-8">
                                <h4 className="font-serif font-bold text-xl mb-4">Explore Bangkok</h4>
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

export default DreamWorld;
