import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wallet, Plane, Hotel, Utensils, TrainFront, Activity, Snowflake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/seo/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';

const KashmirTripCost = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How much does a Kashmir trip cost for a couple?",
            answer: "A comfortable 6-day honeymoon or couple's trip to Kashmir typically costs between ₹55,000 to ₹75,000 per couple (excluding flights). This includes a private taxi (Innova/Sedan) for all days, 3/4-star hotels, a Houseboat stay in Dal Lake, and standard activities like Shikara rides."
        },
        {
            question: "Which is the cheapest month to visit Kashmir?",
            answer: "The cheapest months to visit Kashmir are late August to September, right before the autumn rush, and February to March, before the spring/tulip season begins. During off-peak windows, hotel prices in Gulmarg and Pahalgam frequently drop by 30-40%."
        },
        {
            question: "Is it safe to carry cash in Kashmir?",
            answer: "Yes, it is entirely safe. While hotels and major restaurants accept UPI and cards, you must carry around ₹10,000 to ₹15,000 in physical cash. You will strictly need cash for pony rides in Pahalgam, ATV rides in Gulmarg, and tipping local guides/drivers."
        },
        {
            question: "How much does a Gondola ride cost in Gulmarg?",
            answer: "The Gulmarg Gondola (cable car) operates in two phases. Phase 1 costs ₹810 per person, and Phase 2 costs an additional ₹1,010 per person. Total cost for both phases is ₹1,820 per person. You must book this online weeks in advance as tickets sell out rapidly."
        },
        {
            question: "What is the daily food budget in Kashmir?",
            answer: "Vegetarian food at decent restaurants (dhabas) costs around ₹300-₹500 per meal. Dining at premium cafes or ordering Wazwan (traditional Kashmiri non-veg cuisine) will cost ₹800-₹1,500 per meal. Average daily food budget: ₹1,000 to ₹2,000 per person."
        },
        {
            question: "Why are cabs so expensive in Kashmir?",
            answer: "Kashmir has strict local taxi union rules. A taxi hired from Srinagar cannot be used for local sightseeing inside Pahalgam or Gulmarg. You must hire a separate local union taxi upon reaching these towns, which significantly adds to the overall transport budget."
        },
        {
            question: "How much does a houseboat stay cost in Srinagar?",
            answer: "A standard Deluxe Houseboat on Nigeen or Dal Lake costs between ₹3,000 to ₹5,000 per night, usually including breakfast and dinner. Premium luxury houseboats with bathtubs and heating can range from ₹8,000 to ₹15,000 per night."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Domestic Tours", "item": "https://rudrakshsafar.com/domestic-tours" },
            { "@type": "ListItem", "position": 3, "name": "Kashmir", "item": "https://rudrakshsafar.com/domestic/kashmir/KashmirMaster" },
            { "@type": "ListItem", "position": 4, "name": "Kashmir Trip Cost", "item": "https://rudrakshsafar.com/domestic/kashmir/kashmir-trip-cost" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Kashmir Trip Cost (2025) | Budget Breakdown & Insights</title>
                <meta name="description" content="Detailed breakdown of Kashmir trip cost from India. Calculate your budget for flights, taxi union fares, houseboats, food, and Gulmarg Gondola tickets." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop"
                        alt="Dal Lake Shikara Kashmir"
                        className="w-full h-full object-cover brightness-[0.35]"
                    />
                </div>
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/50 text-sm font-semibold mb-6 shadow-sm">
                        Updated Domestic Guide 2025
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                        Kashmir Trip Cost Breakdown
                    </h1>
                    <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md mb-8 border-l-4 border-primary pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        Planning to visit "Paradise on Earth"? From union taxi monopolies to premium Dal Lake houseboats, here is an honest, fully transparent budget breakdown for a 6-day holiday in Kashmir.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Box */}
                        <section>
                            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                                    <Wallet className="w-6 h-6 text-primary" />
                                    Average 6-Day Trip Cost (Excluding Flights)
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Budget</div>
                                        <div className="text-xl font-bold text-green-600">₹18,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person (Group)</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm border-primary">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Mid-Range / Couple</div>
                                        <div className="text-xl font-bold text-primary">₹32,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Luxury</div>
                                        <div className="text-xl font-bold text-purple-600">₹60,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person</div>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary-foreground leading-relaxed">
                                    <span className="font-bold text-red-500">Note:</span> Prices skyrocket during the Tulip Festival (April) and peak Winter Snow (Dec/Jan). Group travel significantly reduces per-person taxi costs. Read our <Link to="/best-time-to-visit" className="text-primary hover:underline">Best Time to Visit guide</Link> for seasonality details.
                                </p>
                            </div>
                        </section>

                        {/* Flights */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">1. Flights to Srinagar (SXR)</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                The Srinagar International Airport (SXR) is well connected to major Indian cities.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Airfare (₹8,000 – ₹15,000)</h3>
                                        <p className="text-muted-foreground">
                                            Return flights from Delhi (DEL) to Srinagar usually range between ₹8,000 to ₹10,000 if booked a month prior. Direct flights from Mumbai or Bangalore can range from ₹12,000 to ₹16,000. Alternatively, budget travelers can take a train to Jammu (Jammu Tawi) and hire a shared cab to Srinagar, though this adds 8-10 arduous hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Accommodation */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">2. Hotels & Houseboats</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                A classic 6-day Kashmir itinerary splits hotel stays across Srinagar, Pahalgam, and Gulmarg (or Sonamarg). Night stays in Gulmarg are notably expensive due to limited inventory.
                            </p>

                            <div className="overflow-hidden rounded-xl border">
                                <table className="w-full text-left bg-card">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="p-4 font-semibold border-b border-border/50">Accommodation Type</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Location</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Cost Per Night (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Deluxe Houseboat (With MAP/Food)</td>
                                            <td className="p-4 text-muted-foreground">Dal/Nigeen Lake</td>
                                            <td className="p-4 text-green-600 font-bold">₹3,500 – ₹6,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">3-Star / 4-Star Hotel</td>
                                            <td className="p-4 text-muted-foreground">Srinagar City / Pahalgam</td>
                                            <td className="p-4 text-primary font-bold">₹3,000 – ₹7,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Premium Resort / Winter Stay</td>
                                            <td className="p-4 text-muted-foreground">Gulmarg (Near Gondola)</td>
                                            <td className="p-4 text-purple-600 font-bold">₹10,000 – ₹25,000+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
                                <Hotel className="w-4 h-4" /> <em>Budgeting tip: If you want to ski in Gulmarg, book hotels 4-5 months in advance.</em>
                            </p>
                        </section>

                        {/* Transport - The Hidden Cost */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">3. Transportation & The "Union" System</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Transport is where many independent travelers drastically miscalculate their Kashmir trip cost. Local taxi unions fiercely protect their jurisdictions.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <TrainFront className="w-5 h-5 text-primary" /> Main Itinerary Taxi
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Hiring an Innova/Etios from Srinagar for your entire 6-day circuit (airport pickup, transfers to Pahalgam/Gulmarg, airport drop) costs a flat rate of <strong>₹12,000 to ₹18,000</strong> for the entire vehicle depending on season.
                                    </p>
                                </div>
                                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-200">
                                    <h3 className="text-xl text-red-800 dark:text-red-400 font-bold mb-3 flex items-center gap-2">
                                        <Activity className="w-5 h-5" /> Local Union Taxis (Extra)
                                    </h3>
                                    <p className="text-red-800/80 dark:text-red-300/80 text-sm">
                                        Your Srinagar taxi <strong>cannot</strong> take you to Aru Valley/Betaab Valley in Pahalgam, or from Tangmarg up to Gulmarg during heavy snow. You are forced to hire local union Jeeps (Sumo/Tavera). Setup a budget of at least <strong>₹3,500 - ₹5,000 EXTRA</strong> just for these mandatory local union transfers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Activities & Attractions */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">4. Sightseeing & Adventure</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Kashmir offers unparalleled natural beauty, but accessing specific viewpoints involves ponies, ATV rides, and cable cars. You must negotiate fiercely.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium flex items-center gap-2"><Snowflake className="w-4 h-4 text-blue-500" /> Gulmarg Gondola (Phase 1 + Phase 2)</span>
                                    <span className="font-bold shrink-0">₹1,820</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Shikara Ride on Dal Lake (1 Hour)</span>
                                    <span className="font-bold shrink-0">~ ₹700 - ₹1,000 (Per Boat)</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Pony Ride (Pahalgam - Baisaran Valley)</span>
                                    <span className="font-bold shrink-0">~ ₹1,500 - ₹2,500 (Negotiable)</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Mughal Gardens Entry (Shalimar/Nishat)</span>
                                    <span className="font-bold shrink-0">₹24</span>
                                </li>
                            </ul>

                        </section>

                        {/* Summary Block */}
                        <section className="bg-primary/10 border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
                            <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Final Verification</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                To avoid the severe headache of haggling with pony owners and multiple taxi unions, we strongly recommend booking a pre-arranged package. A well-planned, fully private 6-Day <strong>Kashmir trip cost for a couple sits around ₹65,000</strong> (excluding flights). For groups of 4 or 6, the per-person cost drops drastically as the heavily expensive taxi costs are divided.
                            </p>
                        </section>

                        <section id="faqs" className="pt-8">
                            <FAQSection title="Kashmir Travel FAQs" faqs={faqs} />
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Sidebar CTA */}
                        <div className="bg-card rounded-2xl border p-6 text-center shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold mb-4 font-serif">Avoid the Haggling</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Tired of worrying about unpredictable taxi unions and sold-out Gondola tickets? Let us organize a 100% transparent Kashmir tour.
                            </p>
                            <Link to="/domestic/kashmir/KashmirMaster" className="w-full">
                                <Button className="w-full text-lg h-12 mb-3">Explore Kashmir Packages</Button>
                            </Link>
                            <a href="https://wa.me/919203650311?text=Hi, I am looking to plan a Kashmir trip and need a transparent quote." target="_blank" rel="noreferrer">
                                <Button variant="outline" className="w-full h-12 text-green-600 border-green-600 hover:bg-green-50">
                                    WhatsApp an Expert
                                </Button>
                            </a>
                        </div>

                        {/* Related Guides List */}
                        <div className="bg-muted/30 rounded-2xl border p-6">
                            <h4 className="font-bold text-lg mb-4 text-primary">Helpful Links</h4>
                            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                                <li>
                                    <Link to="/domestic-tours" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Compare All Domestic Tours
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/best-time-to-visit" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Best Time for Snow
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/budget-tour-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Top Budget Trips
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/chardham/CharDhamPrice" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Cost: Char Dham Yatra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/family-holiday-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Family Travel in India
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>

            <AnimatedSection>
                <div className="container mx-auto px-4 py-8 mb-12">
                    <div className="bg-blue-900 rounded-3xl p-8 md:p-14 text-center text-blue-50">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">Plan Your Trip With Rudraksh Safar</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            Our Kashmir operations are deeply integrated. We secure your Gondola tickets, handle all union taxi transfers, and provide premium houseboats at fixed, no-nonsense prices.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919203650311?text=Hi, I would like to get a quote for a Kashmir trip without hidden costs.">
                                    Start Planning via WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-800 font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <Link to="/contact">Request a Call Back</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <Footer />
        </div>
    );
};

export default KashmirTripCost;
