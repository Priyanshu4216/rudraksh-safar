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

const KohSamuiCityTour = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Koh Samui City Tour Tour | Koh samui Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Koh Samui City Tour in Koh samui. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Budda_kuju.jpg/960px-Budda_kuju.jpg" fetchPriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/koh-samui/koh-samui-city-tour" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Koh Samui', path: '/destinations/thailand/koh-samui' },
                        { label: 'Around The Island City Tour', path: '/destinations/thailand/attractions/koh-samui/koh-samui-city-tour' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Budda_kuju.jpg/960px-Budda_kuju.jpg"
                    alt="Koh Samui City Tour"
                    className="w-full h-full object-cover"
                    fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Cultural</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Koh Samui City Tour</h1>
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
                            <h2 className="text-3xl font-serif font-bold text-foreground">Explore Koh Samui: The Ultimate Around the Island City Tour</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                If it is your first time visiting Thailand's gorgeous Gulf Coast, booking a <strong>Koh Samui City Tour</strong> (often billed as the "Around the Island Tour") is the absolute best way to orient yourself. Koh Samui is perfectly sized for a single-day circumnavigation. A well-planned half-day or full-day tour lets you check off all the major cultural, natural, and spiritual landmarks efficiently, leaving you free to spend the rest of your vacation relaxing on the beach.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                The tour follows the main ring road (Route 4169) that circles the island's coastline, stopping at deeply revered Buddhist temples, bizarre natural geological formations, and stunning elevated viewpoints offering sweeping vistas of the turquoise ocean.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">The Big 4 Stops on the Itinerary</h3>
                            <p className="text-muted-foreground mb-6">
                                While specific tour operators might add a few minor detours or shopping stops, the core itinerary of any authentic "Around the Island" tour will always feature these four iconic Koh Samui landmarks:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pl-0">
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">1. Big Buddha Temple (Wat Phra Yai)</h4>
                                    <p className="text-muted-foreground text-sm">Located on a small rocky island connected to Samui by a dirt causeway, this is the island's most famous landmark. The massive 12-meter tall golden Buddha statue was built in 1972 and can be seen from miles away. Climbing the dragon-flanked staircase offers magnificent views of the surrounding bay and nearby Koh Phangan.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">2. Wat Plai Laem</h4>
                                    <p className="text-muted-foreground text-sm">Located quite close to the Big Buddha, this newer temple complex is arguably more visually spectacular. It features a giant, striking 18-armed statue of Guanyin, the Goddess of Mercy and Compassion, deeply rooted in Chinese-Thai heritage. Visitors can feed hundreds of massive catfish in the temple's surrounding lake.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">3. Hin Ta & Hin Yai Rocks</h4>
                                    <p className="text-muted-foreground text-sm">Often resulting in giggles from tourists, these naturally occurring rock formations on Lamai Beach strangely resemble male and female genitalia. According to local folklore, they represent an elderly couple who shipwrecked in the bay and turned to stone. It is a quirky, beautiful, and highly photographed spot along the coast.</p>
                                </div>
                                <div className="border border-border p-5 rounded-xl bg-card shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">4. Wat Khunaram (The Mummified Monk)</h4>
                                    <p className="text-muted-foreground text-sm">A uniquely fascinating spiritual stop. This temple houses the mummified body of Luang Pho Daeng, a highly revered monk who died in 1973 while meditating. His miraculously preserved body remains seated upright in a glass case, notably wearing Ray-Ban sunglasses to hide his desiccated eye sockets—a stark reminder of Buddhist teachings on mortality.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Viewpoints & Shopping */}
                        <section className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Viewpoints & Coconut Plantations</h3>
                            <p className="text-muted-foreground mb-6">Between temple stops, the tour highlights Koh Samui's natural agricultural history. Long before tourism exploded, the island's main export was coconuts.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                                            <Navigation className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Lad Koh Viewpoint</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">Strategically situated between the bustling Chaweng and Lamai beaches, this elevated pavilion provides breathtaking, unobstructed panoramic views over the vast expanse of the Gulf of Thailand. It is an obligatory photo stop and the perfect place to feel the strong ocean breeze.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-32 bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                                            <Star className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <strong className="block text-foreground text-lg mb-1">Coconut Processing Demonstration</strong>
                                        <p className="text-muted-foreground text-sm leading-relaxed">Many standard tours include a brief 15-minute stop to observe the traditional Thai method of extracting coconut milk and oil. While occasionally leaning towards a “tourist trap” vibe encouraging souvenir purchases, it remains a quick, informative glimpse into the island's historical economy.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Tips for the City Tour</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Temple Dress Code is Strict:</strong> You will be actively visiting three deeply sacred Buddhist temples. Men must wear shirts with sleeves; no tank tops. Women must cover their shoulders and wear skirts or trousers extending below the knee. Carrying a large sarong or pashmina in your bag to drape over yourself when needed is highly recommended.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Footwear:</strong> You must remove your shoes before entering any temple building. Wear slip-on shoes or sandals for convenience, rather than tightly laced sneakers which you will be constantly tying and untying.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Morning vs Afternoon:</strong> If you have the choice, book the morning departure (usually around 9:00 AM). The temples get incredibly hot by midday, and the morning light is much better for photographing the Big Buddha and the viewpoints.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Koh Samui Ring Road</p>
                                    <p className="text-muted-foreground mb-4">The tour literally loops the entire island via the main 50km coastal highway. You will be picked up directly from your resort in a comfortable air-conditioned minivan and dropped back at the end of the day.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Koh Samui City Tour FAQs" faqs={[
                                {
                                    question: "How long is the Koh Samui City Tour?",
                                    answer: "Typically, the classic Around the Island tour takes about 4 to 5 hours, classifying it as a half-day tour. Morning departures usually run from 9:00 AM to 2:00 PM, getting you back to your hotel with the whole afternoon free."
                                },
                                {
                                    question: "Is lunch included in the city tour?",
                                    answer: "Normally, no. However, depending on the operator, the tour may stop at a local viewpoint restaurant or the Hin Ta Hin Yai rock complex where you have 45 minutes of free time to purchase your own lunch or snacks before heading back."
                                },
                                {
                                    question: "Do I have to climb stairs at the Big Buddha?",
                                    answer: "Yes, approaching the actual Big Buddha statue requires climbing a long, dragon-themed staircase consisting of about 70 steps. If you have severe mobility issues, you can still view the statue clearly from the ground level plaza area."
                                },
                                {
                                    question: "Are there entry fees to the temples?",
                                    answer: "No, the major temples on this tour (Big Buddha, Wat Plai Laem, Wat Khunaram) do not charge a strict admission fee. However, small donations (20-50 THB) in the temple collection boxes are highly encouraged and appreciated."
                                },
                                {
                                    question: "Is this tour done in a 4x4 or a minivan?",
                                    answer: "Unlike the rugged Jungle Safari, the cultural City Tour stays strictly on the main paved roads. You will travel in a modern, comfortable, air-conditioned 10-to-12-seater passenger minivan."
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
                                    <h3 className="font-serif font-bold text-2xl mb-3">Book Your Island Tour</h3>
                                    <p className="text-muted-foreground mb-6">Let us handle the logistics. Enjoy an air-conditioned journey around the island with English-speaking guides explaining the rich history of every temple.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Door-to-door hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> English-speaking cultural guides</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Comfort in AC Minivans</div>
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

export default KohSamuiCityTour;
