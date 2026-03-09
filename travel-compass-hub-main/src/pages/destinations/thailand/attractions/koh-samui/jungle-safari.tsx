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

const JungleSafari = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Jungle Safari Tour | Koh samui Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Jungle Safari in Koh samui. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Koh_Samui_Lipa_Noi2.jpg/960px-Koh_Samui_Lipa_Noi2.jpg" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/koh-samui/jungle-safari" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Koh Samui', path: '/destinations/thailand/koh-samui' },
                        { label: 'Koh Samui Jungle Safari', path: '/destinations/thailand/attractions/koh-samui/jungle-safari' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Koh_Samui_Lipa_Noi2.jpg/960px-Koh_Samui_Lipa_Noi2.jpg"
                    alt="Jungle Safari"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Adventure</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Jungle Safari</h1>
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
                            <h2 className="text-3xl font-serif font-bold text-foreground">Discover the Koh Samui 4x4 Jeep Jungle Safari</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Beyond the pristine beaches and luxury resorts lies a rugged, mountainous interior that many visitors to Koh Samui never see. The <strong>Koh Samui 4x4 Jungle Safari</strong> is the ultimate way to explore the island's dense tropical rainforests, hidden valleys, and towering peaks. Climbing into the back of a powerful, modified ex-military 4x4 Jeep, you will embark on an adrenaline-pumping journey off the beaten path, far removed from the typical tourist trail.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                This full-day adventure is perfectly suited for thrill-seekers, nature lovers, and anyone looking to experience the authentic, wild side of Koh Samui. As you bounce along steep dirt tracks and power through shallow riverbeds, you will ascend to the highest points of the island, discovering cultural landmarks, cascading waterfalls, and traditional local industries along the way.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">The Safari Itinerary: What to Expect</h3>
                            <p className="text-muted-foreground mb-6">
                                While different operators offer slight variations, most 4x4 Jungle Safaris follow a route that encompasses the island's best interior attractions. Here are the staple experiences you will encounter:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">🚙 The Off-Road Thrill Ride</h4>
                                    <p className="text-muted-foreground text-sm">The journey itself is half the fun. Leaving the paved ring road behind, your expert driver will navigate incredibly steep, rutted dirt tracks that lead deep into the jungle. Sitting on the open-air benches in the back of the jeep, you will experience a bumpy, exhilarating roller-coaster ride through a canopy of tropical foilage. Hold on tight!</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">🗿 Tarnim Magic Garden (Secret Buddha Garden)</h4>
                                    <p className="text-muted-foreground text-sm">Hidden high up in the hills, this mystical garden was created by a local fruit farmer in 1976. Surrounded by lush jungle and a babbling stream, the garden features dozens of moss-covered statues depicting animals, deities, and figures from Buddhist mythology. It offers a tranquil contrast to the loud, roaring engines of the 4x4s.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">🥥 Rubber Tapping & Coconut Plantations</h4>
                                    <p className="text-muted-foreground text-sm">Before tourism took over, Koh Samui's economy was driven by coconuts and rubber. The safari stops at working plantations where local farmers will demonstrate the skilled process of tapping rubber trees for latex, and you will learn about the island's famous coconut harvesting industry.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">⛰️ The Highest Viewpoint in Samui</h4>
                                    <p className="text-muted-foreground text-sm">The jeeps finally scale to the peak of Khao Pom mountain (almost 600 meters above sea level). From this vantage point, you will be rewarded with spectacular, unobstructed 360-degree panoramic views of the entire island, the Gulf of Thailand, and the distant mainland.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: NAMUANG WATERFALLS */}
                        <section className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Cooling Off at Namuang Waterfalls</h3>
                            <p className="text-muted-foreground mb-6">After several hours of off-roading through the hot, humid jungle, the safari typically concludes with a much-needed stop at the Namuang Waterfalls.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                            <Navigation className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Swimming in the Jungle Pools</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">Most tours stop at Namuang Waterfall 2, the taller of the two falls. You will have time to hike the short distance to the base of the falls and take a refreshing dip in the cool, natural splash pools beneath the cascading water. Don't forget your swimwear!</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                                            <Star className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Traditional Thai Lunch</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">A hearty, authentic Thai buffet lunch is almost always included in the price of the safari. This is usually served at a panoramic mountain restaurant overlooking the jungle canopy near the waterfalls, providing a perfect setting to relax and refuel.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Survival Tips for the Safari</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Sun & Bug Protection:</strong> You will be in an open-air vehicle for most of the day. Apply high-SPF sunscreen liberally before you leave, and bring strong mosquito repellent for the stops in the deep jungle (especially the Magic Garden).</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Dress for Mess:</strong> Do not wear your best white clothes. The dirt trails are notoriously dusty in the dry season and extremely muddy in the rainy season. Wear dark, comfortable clothes that you don't mind getting dirty.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Not for Bad Backs:</strong> We cannot stress enough how bumpy the off-road sections are. If you have severe back problems, neck injuries, or are pregnant, you should strictly avoid the 4x4 jungle safari.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Hotel Pickup (Island-Wide)</p>
                                    <p className="text-muted-foreground mb-4">Because the tour requires specialized vehicles, 100% of operators will pick you up directly from your hotel lobby anywhere in Koh Samui.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Jungle Safari FAQs" faqs={[
                                {
                                    question: "Can children go on the 4x4 jungle safari?",
                                    answer: "Children above the age of 4 are generally allowed, but parents must use their discretion. The ride is extremely bumpy, and there are no seatbelts in the back of the open-air jeeps. You will need to hold onto young children tightly."
                                },
                                {
                                    question: "Are there water guns involved?",
                                    answer: "Yes! Many jungle safari operators provide a large bucket of water and water guns in the back of the jeep. Friendly 'water wars' between passing jeeps are incredibly common, especially during the hot season and Songkran. Expect to get wet."
                                },
                                {
                                    question: "Do the tours still run in the rain?",
                                    answer: "Usually, yes. A light shower actually makes the experience more adventurous, as the mud adds to the off-road challenge. However, tours will be cancelled or rescheduled by the operator in the event of dangerous storms or severe flooding."
                                },
                                {
                                    question: "Do I need to tip the driver?",
                                    answer: "While tipping is not strictly mandatory in Thailand, the driver is aggressively navigating dangerous terrain to keep you entertained and safe all day. A tip of 100-200 THB per person at the end of the tour is highly appreciated."
                                },
                                {
                                    question: "Is vegetarian food available for lunch?",
                                    answer: "Yes, the buffet lunches provided generally include plenty of rice, vegetable stir-fries, and fresh fruit. Large groups of Indian travelers can often request specific dietary accommodations when booking in advance."
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
                                    <h3 className="font-serif font-bold text-2xl mb-3">Book Your Safari</h3>
                                    <p className="text-muted-foreground mb-6">Secure your seats in a 4x4 jeep and hit the dirt tracks today. We handle the bookings with the best, safest operators on the island.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Direct hotel pickup</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Lunch & water included</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> English-speaking guides</div>
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
                                        <Link to="/destinations/thailand/attractions/koh-samui/safari-tour" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Koh Samui Safari Tour</span>
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

export default JungleSafari;
