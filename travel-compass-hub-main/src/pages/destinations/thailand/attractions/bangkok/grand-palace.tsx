import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2, Star, Navigation, ArrowRight, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';

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
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/grand-palace" />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Bangkok', path: '/destinations/thailand/bangkok' },
                        { label: 'The Grand Palace', path: '/destinations/thailand/attractions/bangkok/grand-palace' }
                    ]} />
                </div>
            </div>

            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop"
                    alt="Grand Palace Bangkok"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
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

                        <div className="flex flex-wrap gap-4 p-4 rounded-xl border border-border bg-card shadow-sm mb-12">
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <Clock className="w-5 h-5 text-primary" />
                                <div><span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Timings</span><span className="font-bold text-sm">8:30 AM - 3:30 PM</span></div>
                            </div>
                            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
                                <Ticket className="w-5 h-5 text-orange-500" />
                                <div><span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Entry Fee</span><span className="font-bold text-sm">500 THB</span></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <div><span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</span><span className="font-bold text-sm">Phra Nakhon, Bangkok</span></div>
                            </div>
                        </div>

                        {/* SECTION 1: History & Architecture */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">The Jewel of Bangkok: The Grand Palace</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                If there is only one historical landmark you can visit during your time in Thailand, make it the <strong>Grand Palace</strong>. Since its establishment in 1782 by King Rama I, this astonishingly intricate complex has stood as the spiritual and royal heart of the Thai Kingdom. For 150 years, it was the official residence of the Kings of Siam (and later Thailand), the Royal court, and the administrative seat of the government.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Today, while the King primarily resides elsewhere, the Grand Palace remains a working complex, still used for highly significant royal ceremonies and state functions. The breathtaking architecture—a blend of traditional Thai motifs with subtle European influences added by later monarchs—makes it an undisputed masterpiece of craftsmanship.
                            </p>
                            <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">What to See Inside the Palace Grounds</h3>
                            <p className="text-muted-foreground mb-4">
                                The precinct is vast, covering over 218,000 square meters. Inside the walled complex, you will find several distinct zones and spectacular structures:
                            </p>
                            <ul className="space-y-4 mb-8 list-none pl-0">
                                <li className="flex gap-4 p-5 bg-muted/20 border border-border rounded-xl">
                                    <Star className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                                    <div>
                                        <strong className="block text-foreground text-lg">Wat Phra Kaew (Temple of the Emerald Buddha)</strong>
                                        <span className="text-muted-foreground text-sm block mt-1">Regarded as the most sacred Buddhist temple in Thailand, Wat Phra Kaew enshrines the revered Emerald Buddha. Carved meticulously from a single block of jade, this highly venerated statue is adorned in garments of gold, which are changed by the King himself three times a year to correspond with the seasons.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-5 bg-muted/20 border border-border rounded-xl">
                                    <Star className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                                    <div>
                                        <strong className="block text-foreground text-lg">Phra Thaen Manangkhasila Asana</strong>
                                        <span className="text-muted-foreground text-sm block mt-1">Historically monumental, these impressive halls feature exquisite throne rooms showcasing traditional Thai artisan skills. Observe the golden spires that dominate the skyline, intricate mosaics, and fearsome Demon Guardian statues that protect the temple.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-5 bg-muted/20 border border-border rounded-xl">
                                    <Star className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                                    <div>
                                        <strong className="block text-foreground text-lg">The Ramakien Murals</strong>
                                        <span className="text-muted-foreground text-sm block mt-1">Wrapping around the cloisters of Wat Phra Kaew is a continuous mural depicting the Thai interpretation of the Hindu epic, the Ramayana (known locally as the Ramakien). These meticulously painted walls tell a vibrant story of good versus evil.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 2: Detailed Dress Code (Expanded for SERP Features) */}
                        <section className="bg-red-50 dark:bg-red-950/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 my-12 shadow-sm">
                            <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-red-700 dark:text-red-400">
                                <ShieldAlert className="w-8 h-8" />
                                The Strict Grand Palace Dress Code
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                The Grand Palace is not a typical tourist trap; it is Thailand's most sacred site. The dress code is rigorously enforced by guards at the entrance. Failure to comply <strong className="text-foreground">will result in denied entry</strong>. Do not rely on loose interpretations.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white dark:bg-card p-5 rounded-xl border border-red-100 dark:border-red-900/30">
                                    <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 border-b border-red-100 dark:border-red-900/30 pb-2">❌ What is NOT Allowed</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✖</span> Shorts of any length (even knee-length bermudas).</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✖</span> Tank tops, sleeveless shirts, or spaghetti straps.</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✖</span> See-through clothing or bare midriffs.</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✖</span> Ripped jeans or tight leggings/yoga pants.</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✖</span> Short skirts (must be well below the knee).</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-card p-5 rounded-xl border border-green-100 dark:border-green-900/30">
                                    <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 border-b border-green-100 dark:border-green-900/30 pb-2">✅ What IS Allowed</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✔</span> Long trousers/pants that cover the ankles.</li>
                                        <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✔</span> Shirts with sleeves (T-shirts or button-downs).</li>
                                        <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✔</span> Long maxi skirts for women.</li>
                                        <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✔</span> Comfortable walking shoes (you must remove shoes before entering temple buildings).</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 p-3 rounded-lg flex gap-2">
                                <Info className="w-5 h-5 shrink-0" />
                                <span><strong>Scam Alert:</strong> Locals outside the palace may tell you it is closed to try and take you on a Tuk-Tuk ride to gem stores. Ignore them. The palace is almost always open unless there is a rare formal state function.</span>
                            </p>
                        </section>

                        {/* SECTION 3: How to reach */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h3 className="text-2xl font-serif font-bold mb-4">How to Reach the Grand Palace in Bangkok</h3>
                            <p className="text-muted-foreground mb-4">
                                Navigating Bangkok traffic can be daunting. The easiest and most scenic way to reach the Grand Palace is via the Chao Phraya Express Boat. Take the BTS Skytrain to <strong>Saphan Taksin Station</strong>. From there, walk down to the Sathorn (Central) Pier and catch a Chao Phraya Express Boat to <strong>Tha Chang Pier (No. 9)</strong>. Upon disembarking, it is only a short 3-minute walk to the entrance. Alternatively, arranging a guided tour with private transportation ensures a hassle-free visit.
                            </p>
                        </section>

                        {/* SECTION 4: FAQ with Schema */}
                        <div className="mt-12">
                            <FAQSection title="Frequently Asked Questions About The Grand Palace" faqs={[
                                {
                                    question: "How long does it take to tour the Grand Palace in Bangkok?",
                                    answer: "You should allocate a minimum of 2 to 3 hours to properly explore the Grand Palace complex and the Temple of the Emerald Buddha. Because the grounds are vast and highly detailed, rushing through takes away from the experience."
                                },
                                {
                                    question: "Can I take pictures inside the Grand Palace?",
                                    answer: "Photography is allowed everywhere on the Grand Palace grounds, EXCEPT inside the main chapel of Wat Phra Kaew (the Temple of the Emerald Buddha). Taking photos inside the chapel is strictly forbidden."
                                },
                                {
                                    question: "What is the entry fee for the Grand Palace for Indian tourists?",
                                    answer: "The entry fee to the Grand Palace is 500 Thai Baht (approx. ₹1,150 INR) for all foreign nationals, including Indian tourists. Thai citizens enter for free. This ticket also includes access to the Queen Sirikit Museum of Textiles located nearby."
                                },
                                {
                                    question: "Do I need to hire a local guide at the Grand Palace?",
                                    answer: "While you can manage alone by renting an audio guide (around 200 THB), hiring a certified local English-speaking guide highly enhances the experience by providing rich historical context that is not written on the plaques. You can hire official guides near the ticket counters."
                                },
                                {
                                    question: "Are backpacks allowed inside the Grand Palace?",
                                    answer: "Small daypacks and handbags are allowed, but you may be subject to a security check at the gates. Large luggage or bulky backpacks are generally frowned upon or need to be stored, though locker facilities are extremely limited."
                                }
                            ]} />
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-card rounded-2xl border shadow-lg overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Book Bangkok City Tour</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Includes Grand Palace, Wat Traimit, Wat Pho, and private hotel transfers with an English-speaking guide.</p>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full" size="lg">View Packages</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-5 border rounded-2xl bg-card shadow-sm mt-8">
                                <h4 className="font-serif font-bold text-lg mb-4">More Bangkok Treasures</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/destinations/thailand/bangkok" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors text-sm">
                                            <span className="font-semibold">Bangkok Travel Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/thailand/attractions/bangkok/sky-walk" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors text-sm">
                                            <span className="font-semibold">Mahanakhon SkyWalk</span>
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
export default GrandPalace;
