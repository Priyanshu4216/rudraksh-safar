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

const SafariTour = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Safari Tour Tour | Koh samui Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Safari Tour in Koh samui. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1582299863456-ccde3b132890?q=80&w=2670&auto=format&fit=crop" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/koh-samui/safari-tour" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Koh Samui', path: '/destinations/thailand/koh-samui' },
                        { label: 'Safari Tour Koh Samui', path: '/destinations/thailand/attractions/koh-samui/safari-tour' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1582299863456-ccde3b132890?q=80&w=2670&auto=format&fit=crop"
                    alt="Safari Tour"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Wildlife</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Safari Tour</h1>
                    <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-6 font-medium drop-shadow-md">An iconic experience in Koh samui offering unforgettable memories and stunning sights.</p>
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
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</span><span className="font-bold text-sm">Central Koh samui</span></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Ticket className="w-6 h-6 text-orange-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Entry Fee</span><span className="font-bold text-sm">Paid Access</span></div>
                            </div>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Explore the Koh Samui Safari Tour: Jungle Adventures Wait</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                While Koh Samui is globally renowned for its pristine white-sand beaches and crystal-clear turquoise waters, the island's mountainous, jungle-clad interior offers a completely different, adrenaline-pumping world. A <strong>Koh Samui Safari Tour</strong> (often centered around the famous Namuang Safari Park) is the ultimate way to venture off the shoreline and dive deep into the island's lush tropical rainforests.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                These tours are typically full or half-day excursions conducted in rugged, modified 4x4 military-style jeeps. They take you scaling up steep, muddy jungle tracks to the highest peaks of the island, offering breathtaking panoramic viewpoints, hidden waterfalls, and a thrilling mix of outdoor activities that cater to both families and hardcore adventure seekers.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">What to Expect on a 4x4 Jungle Safari</h3>
                            <p className="text-muted-foreground mb-6">
                                A standard full-day Safari Tour in Koh Samui is highly structured to pack as much adventure into a single day as possible. Here is a breakdown of the core experiences you will encounter:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🚙 4x4 Off-Roading</h4>
                                    <p className="text-muted-foreground text-sm">The backbone of the tour. You will sit in the back of an open-air, canopy-covered 4x4 truck. The drivers are skilled at navigating incredibly steep, bumpy dirt roads. The ride itself is a rollercoaster, culminating at the highest viewpoint on the island (often near the Secret Buddha Garden) offering 360-degree views of the Gulf of Thailand.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">💦 Namuang Waterfalls</h4>
                                    <p className="text-muted-foreground text-sm">Almost all safari tours include a stop at the famous Namuang Waterfalls. Namuang 1 is easily accessible and features a massive natural pool perfect for swimming. Namuang 2 requires a short, strenuous hike but rewards you with a towering 80-meter cascade of water deep in the jungle.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🗿 Secret Buddha Garden</h4>
                                    <p className="text-muted-foreground text-sm">Also known as the Magic Garden. Hidden high up in the hills, this mystical sculpture park was created by a local farmer in 1976. It features dozens of ancient-looking stone statues of deities, animals, and mythical creatures scattered along a peaceful mountain stream.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">🏎️ ATV Adventures</h4>
                                    <p className="text-muted-foreground text-sm">Many premium safari packages include a 30-to-60-minute ATV (All-Terrain Vehicle) riding session. After a brief safety orientation, you will follow a guide through muddy, winding trails, splashing through streams and navigating dense palm plantations.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Ethics and Wildlife */}
                        <section className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">A Note on Elephant Trekking & Animal Shows</h3>
                            <p className="text-muted-foreground mb-6">Historically, "Safari Tours" in Thailand relied heavily on elephant trekking and animal performances (monkey shows, crocodile wrestling). However, the global tourism industry is rapidly shifting towards ethical wildlife interactions.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/10">
                                    <Info className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground text-lg mb-1">Choosing Ethical Elephant Sanctuaries</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">While some older Safari Parks in Koh Samui (like Namuang Safari Park) still offer elephant riding and animal shows, we strongly encourage travelers to opt for <strong>Ethical Eco-Safari options</strong>. Instead of riding elephants on a wooden chair (which is harmful to their spines), choose tours that visit ethical sanctuaries where you can feed, walk with, and bathe rescued elephants in a natural, cruelty-free environment.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Navigation className="w-6 h-6 text-blue-600" /> Essential Jungle Survival Tips</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">What to Wear:</strong> You are going into the jungle. Wear comfortable, breathable clothes that you do not mind getting dirty or muddy. Bring swimwear to wear underneath your clothes for the waterfall stops.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Footwear:</strong> Flip-flops are terrible for this tour. The rocks around the waterfalls and the Magic Garden are incredibly slippery. Wear sturdy water shoes, strap-on sandals, or old sneakers with good grip.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Bug Spray is Mandatory:</strong> Tropical rainforests are full of mosquitoes, especially near the waterfalls. Apply high-deet insect repellent generously before the tour and reapply after swimming.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Motion Sickness:</strong> The 4x4 ride up the mountain is very bumpy, jerky, and winding. If you are prone to severe motion sickness, take medication beforehand or request to sit in the front cab with the driver.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Koh Samui Interior Jungle</p>
                                    <p className="text-muted-foreground mb-4">Safari tours operate all across the central mountain range of Koh Samui. A massive benefit of booking a safari tour package is that round-trip hotel transfers in the 4x4 trucks are inherently included.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Koh Samui Safari Tour FAQs" faqs={[
                                {
                                    question: "Are Koh Samui 4x4 Safari tours safe for young children?",
                                    answer: "Generally, yes, families with children take these tours daily. However, the 4x4 ride up the mountain is very bumpy and open-air. Parents must ensure children remain seated and hold on tight. It is not recommended for infants or pregnant women."
                                },
                                {
                                    question: "What is included in a full-day Safari Tour package?",
                                    answer: "A standard full-day package usually includes round-trip hotel transfers, the 4x4 jungle drive, visits to Namuang Waterfalls, the Secret Buddha Garden, a Thai buffet lunch, and optionally ATVs or ethical elephant interactions depending on the package."
                                },
                                {
                                    question: "Can I do the Safari Tour if it is raining?",
                                    answer: "Tours operate rain or shine. In fact, light rain makes the off-roading muddier and more fun, and ensures the waterfalls are flowing heavily. However, in severe monsoon storms, operators will cancel and refund or reschedule for safety reasons."
                                },
                                {
                                    question: "Is Indian or vegetarian food provided during the tour lunch?",
                                    answer: "Most tours provide a standard Thai buffet (rice, fried chicken, mild curries, fresh fruit). While pure Indian food is rarely available in the jungle camps, you can easily request vegetarian Thai dishes (like Pad Thai or vegetable stir-fry) if you specify your dietary requirements when booking."
                                },
                                {
                                    question: "Do I need an international driving permit to ride the ATVs?",
                                    answer: "No, the ATV elements of these tours are off-road on private jungle tracks. You do not need a driving license. The guides provide a safety briefing and training before you set off."
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
                                    <h3 className="font-serif font-bold text-2xl mb-3">Book Your Jungle Safari</h3>
                                    <p className="text-muted-foreground mb-6">Secure your spot on the ultimate 4x4 mountain adventure. Let our experts tailor the exact itinerary to suit your family's thrill level.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Hotel pick up & drop-off included</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> English-speaking jungle guides</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Multi-activity packages (ATV, Waterfall)</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm mt-8">
                                <h4 className="font-serif font-bold text-xl mb-4">More in Koh Samui</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/koh-samui" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore Koh Samui Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/thailand/attractions/koh-samui/ang-thong-marine-park" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Ang Thong Marine Park</span>
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
                                <li><Link to="/destinations/thailand/koh-samui" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Koh Samui Attractions & Itineraries</Link></li>
                                <li><Link to="/destinations/thailand/phuket" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Phuket Island Hopping Guide</Link></li>
                                <li><Link to="/destinations/thailand/krabi" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Krabi Beaches & Resorts</Link></li>
                                <li><Link to="/destinations/thailand/bangkok" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Bangkok City Travel Tips</Link></li>
                            </ul>
                        </div>
                        {/* 2. Attraction Cross-linking (Koh Samui) */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Top Koh Samui Attractions</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand/attractions/koh-samui/koh-samui-city-tour" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Koh Samui Island City Tour</Link></li>
                                <li><Link to="/destinations/thailand/attractions/koh-samui/ang-thong-marine-park" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Ang Thong Marine Park Boat Trips</Link></li>
                                <li><Link to="/destinations/thailand/attractions/koh-samui/safari-tour" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Koh Samui Jungle Safari Tour</Link></li>
                                <li><Link to="/destinations/thailand/attractions/koh-samui/jungle-safari" className="text-muted-foreground hover:text-primary transition-colors hover:underline">4x4 Off-Road Jeep Safari</Link></li>
                            </ul>
                        </div>
                        {/* 3. Tour Package Linking */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Popular Tour Packages</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/international-tours/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Thailand Holiday Packages</Link></li>
                                <li><Link to="/budget-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Affordable Budget Travel Deals</Link></li>
                                <li><Link to="/luxury-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Premium Luxury Honeymoon Packages</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                        <p>Flying into Thailand? You can catch a quick domestic flight from Suvarnabhumi Airport in Bangkok directly to Koh Samui, or take a ferry from the mainland. Make sure your itinerary includes time to relax on the beaches of Phuket and Krabi as well!</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SafariTour;
