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

const AngThongMarinePark = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Ang Thong Marine Park Tour | Koh samui Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Ang Thong Marine Park in Koh samui. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg/960px-Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/koh-samui/ang-thong-marine-park" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Koh Samui', path: '/destinations/thailand/koh-samui' },
                        { label: 'Ang Thong Marine Park', path: '/destinations/thailand/attractions/koh-samui/ang-thong-marine-park' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg/960px-Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg"
                    alt="Ang Thong Marine Park"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Nature</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Ang Thong Marine Park</h1>
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
                            <h2 className="text-3xl font-serif font-bold text-foreground">Explore Mu Ko Ang Thong National Marine Park</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                If you only take one boat trip during your stay in Koh Samui, make it to the <strong>Mu Ko Ang Thong National Marine Park</strong>. Translating to "Bowl of Gold," this pristine archipelago consists of 42 towering limestone islands rising dramatically from the emerald-green waters of the Gulf of Thailand. Covering over 100 square kilometers, it is a protected sanctuary teeming with vibrant marine life, hidden lagoons, and untouched white-sand beaches.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Famous as the visual inspiration for Alex Garland's novel <em>The Beach</em>, Ang Thong remains surprisingly unspoiled thanks to strict government preservation efforts. Depending on the tour you book—whether by a slow wooden junk boat, a high-speed catamaran, or a standard speedboat—you will spend the day hiking through dense jungles, kayaking into dark coastal caves, and snorkeling over shallow coral reefs.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">Top Highlights of the Archipelago</h3>
                            <p className="text-muted-foreground mb-6">
                                While no single day trip can cover all 42 islands, most comprehensive itineraries focus on the park's crown jewels. Here is what you can expect to experience on an Ang Thong tour:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">💎 The Emerald Lake (Thale Nai)</h4>
                                    <p className="text-muted-foreground text-sm">Located on Koh Mae Ko (Mother Island), this is arguably the park's most famous attraction. A steep, sweaty 15-minute climb up a metal staircase leads you to a viewing platform overlooking a stunning, landlocked saltwater lagoon. It is connected to the sea by an intricate network of underwater caves. Swimming in the lake is strictly prohibited to preserve its delicate ecosystem, but the view is breathtaking.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">⛰️ Wua Ta Lap Viewpoint</h4>
                                    <p className="text-muted-foreground text-sm">Translating to "Sleeping Cow Island," Wua Ta Lap is the park's headquarters. The main attraction here is the grueling 500-meter hike up a steep jungle path consisting of uneven rocks and roots. If you conquer the 45-minute climb to the summit, you are rewarded with the iconic, panoramic postcard view of all 42 islands stretching across the horizon.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">🚣 Sea Kayaking</h4>
                                    <p className="text-muted-foreground text-sm">Most tours include an hour or two of guided sea kayaking. You will paddle close to the sheer limestone cliffs, navigate through natural stone arches, and explore shallow sea caves. It is a fantastic way to silently get up close to the park's unique geological formations and spot monkeys playing in the coastal trees.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">🤿 Snorkeling in the Coral Gardens</h4>
                                    <p className="text-muted-foreground text-sm">While the water clarity inside the park can vary depending on recent weather, specific islands like Koh Wao and Koh Tay Plaow offer excellent shallow reef snorkeling. You can expect to swim alongside schools of sergeant majors, parrotfish, and occasionally spot small stingrays or sea turtles.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: BOATS */}
                        <section className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Choosing the Right Boat</h3>
                            <p className="text-muted-foreground mb-6">Your experience in the marine park will be heavily influenced by the mode of transport you choose. It takes about an hour to reach the park from Koh Samui.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                            <Navigation className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Speedboats</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">The fastest and most popular way to travel. You get to the park quickly, maximizing your time for activities. However, the ride can be very bumpy and harsh if the sea is choppy. Not recommended for travelers with severe back problems or those prone to sea sickness.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                                            <Star className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Big Boats & Yachts</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">Considerably slower, taking about 90 minutes to 2 hours to reach the park. These offer a much smoother, more relaxed ride. You can sunbathe on the deck, and lunch is usually served buffet-style on board rather than on the island. A great choice for seniors and families with young children.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Survival Tips for the Trip</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Footwear is Critical:</strong> The hike up Wua Ta Lap and the stairs at the Emerald Lake require proper footwear. Flip-flops are dangerous on the jagged limestone rocks. Wear sports shoes, or at the very least, sturdy strap-on sandals.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Dry Bags:</strong> You will be getting onto and off boats frequently, sometimes wading through knee-deep water. Bring a waterproof dry bag to protect your phone, wallet, and camera equipment.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">National Park Fees:</strong> Most tour quoted prices do <em>not</em> include the mandatory National Marine Park admission fee (usually 300 THB for adults, 150 THB for children). You must pay this in cash directly to the rangers upon entering the park.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Koh Samui Piers (Nathon / Maenam)</p>
                                    <p className="text-muted-foreground mb-4">Tours depart daily from various piers around Koh Samui. Your tour package will inevitably include a hotel transfer tying you to the designated boat launch area.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Ang Thong Marine Park FAQs" faqs={[
                                {
                                    question: "Are there overnight accommodations in the Marine Park?",
                                    answer: "Yes, but they are very basic. You can rent simple government-run bungalows or pitch a tent at the headquarters on Koh Wua Ta Lap. You must book these well in advance directly through the Thai National Parks website. There are no luxury resorts in the park."
                                },
                                {
                                    question: "When is the park closed to tourists?",
                                    answer: "To allow the marine ecosystem to recover, the park is typically closed every year during November and early December due to heavy monsoon rains and rough seas. Always check official announcements before planning your trip during these months."
                                },
                                {
                                    question: "Are drones allowed in the park?",
                                    answer: "No. Drone flying is strictly prohibited anywhere within the boundaries of the Mu Ko Ang Thong National Marine Park without explicit pre-approved permits from the Thai government. Attempting to fly a drone will result in heavy fines."
                                },
                                {
                                    question: "Will I definitely see pink dolphins?",
                                    answer: "Rare pink dolphins (Indo-Pacific humpback dolphins) do occasionally inhabit the waters surrounding the park, but sightings are extremely rare and based entirely on luck. Tour operators cannot guarantee you will see them."
                                },
                                {
                                    question: "What should I pack for the day trip?",
                                    answer: "Bring sunscreen (reef-safe if possible), a hat, sunglasses, a towel, swimwear, a dry change of clothes for the ride back, cash for the park fee, a waterproof phone pouch, and sturdy shoes for the viewpoints."
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
                                    <h3 className="font-serif font-bold text-2xl mb-3">Book Your Boat Trip</h3>
                                    <p className="text-muted-foreground mb-6">Let us hook you up with the best speedboats and catamaran tours headed to Ang Thong. Snorkel, hike, and paddle the archipelago.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Door-to-door hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Snorkeling & kayak gear included</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Light breakfast & buffet lunch</div>
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
                                        <Link to="/destinations/thailand/attractions/koh-samui/jungle-safari" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Koh Samui Jungle Safari</span>
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

export default AngThongMarinePark;
