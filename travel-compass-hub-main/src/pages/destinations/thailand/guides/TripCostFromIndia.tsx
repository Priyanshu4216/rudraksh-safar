import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wallet, Plane, Hotel, Utensils, TrainFront, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/seo/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';

const TripCostFromIndia = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqs = [
        {
            question: "Is 1 Lakh enough for a couple trip to Thailand?",
            answer: "Yes, ₹1,00,000 is perfectly sufficient for a 5-6 day couple trip to Thailand (Bangkok & Pattaya or Phuket) if you book flights in advance. It covers 3/4-star hotels, local transport, food, and standard sightseeing. However, extreme luxury or scuba diving will push the budget higher."
        },
        {
            question: "How much cash should I carry to Thailand from India?",
            answer: "Thai Immigration officially mandates tourists arriving on Visa on Arrival to show proof of funds equal to 10,000 THB per person or 20,000 THB per family (approx. ₹23,000 - ₹46,000). You should carry this in physical Baht or USD. For daily expenses, rely heavily on a zero-markup Forex card."
        },
        {
            question: "How much does a Thailand Visa cost for Indians?",
            answer: "Currently, Thailand offers visa-free entry for Indian passport holders until November 2024 (subject to extension). If regular Visa on Arrival is reinstated, it usually costs 2,000 THB (approx. ₹4,600) per person."
        },
        {
            question: "Can I use Indian UPI in Thailand?",
            answer: "Yes, some major retail outlets like 7-Eleven, Big C, and Central Malls in Bangkok now accept Indian UPI via prompt pay or Liquid Group QR codes. However, smaller street vendors and Tuk-Tuk drivers still strictly demand physical cash (Thai Baht)."
        },
        {
            question: "What is the daily food budget for an Indian in Thailand?",
            answer: "If you eat at popular Indian restaurants in Bangkok (like those in Sukhumvit or Silom), expect to spend around ₹800 - ₹1,200 per meal. Eating authentic Thai street food or Pad Thai drops the cost to just ₹150 - ₹300 per meal. A safe daily food budget is ₹1,500 - ₹2,000 per person."
        },
        {
            question: "Are flights to Phuket more expensive than Bangkok?",
            answer: "Yes. Direct flights from India to Phuket (HKT) are generally ₹5,000 to ₹8,000 more expensive than flying into Bangkok (BKK/DMK) because there are fewer direct routes. Many budget travelers choose to fly to Bangkok and take a cheap domestic flight to Phuket."
        },
        {
            question: "How much is an average 4-star hotel in Bangkok?",
            answer: "Bangkok has incredibly affordable luxury. A high-quality 4-star hotel in areas like Pratunam or Sukhumvit ranges between ₹2,500 to ₹4,500 per night. If you share this with a partner, the accommodation cost per person becomes incredibly low."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Thailand Trip Cost from India", "item": "https://rudrakshsafar.com/destinations/thailand/guides/trip-cost-from-india" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Thailand Trip Cost from India (2025) | Detailed Budget Breakdown</title>
                <meta name="description" content="Calculate your Thailand trip cost from India. Flight prices from Delhi/Mumbai, visa fees, hotel rates (Bangkok vs Phuket), and daily food budget for Indian travelers." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop"
                        alt="Thailand Grand Palace"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                </div>
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/50 text-sm font-semibold mb-6">
                        Updated Budget Guide 2025
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                        Thailand Trip Cost from India
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow mb-8 border-l-4 border-primary pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        Planning an ultimate Asian getaway? From 3-star stays in Bangkok to extravagant island hopping in Phuket, explore our hyper-detailed budget breakdown for Indian travelers calculating their real Thailand trip cost.
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
                                    Average 6-Day Trip Cost (Per Person)
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Budget Backpacker</div>
                                        <div className="text-xl font-bold text-green-600">₹30,000+</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm border-primary">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Mid-Range (Couples)</div>
                                        <div className="text-xl font-bold text-primary">₹50,000+</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Luxury Islands</div>
                                        <div className="text-xl font-bold text-purple-600">₹90,000+</div>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary-foreground leading-relaxed">
                                    <span className="font-bold text-red-500">Note:</span> Above numbers refer to flights originating from major Indian hubs like Kolkata (CCU) or Delhi (DEL). Prices fluctuate wildly based on peak/off-peak timing. Please consult our <Link to="/best-time-to-visit" className="text-primary hover:underline">Best Time to Visit guide</Link> for detailed seasonal insights.
                                </p>
                            </div>
                        </section>

                        {/* Flights & Visa */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">1. International Flights & Visa Fees</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Flights constitute a significant portion (roughly 35%) of your overall Thailand trip cost. Since traveling out of India requires flying over the Bay of Bengal, direct routes differ wildly in price.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Round Trip Airfare (₹15,000 – ₹25,000)</h3>
                                        <p className="text-muted-foreground">
                                            Kolkata (CCU) offers the absolute cheapest flights to Bangkok, starting as low as ₹12,000 round trip. Delhi (DEL) and Mumbai (BOM) flights average ₹18,000 to ₹22,000. Low-cost carriers like Indigo, AirAsia, and Thai Vietjet offer the best economy rates. Remember that flying directly into Phuket (HKT) costs significantly more than Bangkok.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Thailand Visa (₹0 – ₹4,600)</h3>
                                        <p className="text-muted-foreground">
                                            Presently, Thailand allows Visa Free entry for Indian citizens (policy subject to continuous extensions). If that window closes, a standard Visa on Arrival will cost you approximately 2,000 THB (₹4,600 per person).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Accommodation */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">2. Hotel & Resort Accommodation</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Thailand arguably offers the greatest "hotel value" on the planet. You can secure a premium 4-star hotel in Bangkok for the price of a generic budget motel in Europe.
                            </p>

                            <div className="overflow-hidden rounded-xl border">
                                <table className="w-full text-left bg-card">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="p-4 font-semibold border-b border-border/50">Hotel Quality</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Best Areas (BKK / Phuket)</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Cost Per Night (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Budget (Hostels/3 Star)</td>
                                            <td className="p-4 text-muted-foreground">Khao San Road / Patong Center</td>
                                            <td className="p-4 text-green-600 font-bold">₹800 – ₹2,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Mid-Range (4 Star / Condos)</td>
                                            <td className="p-4 text-muted-foreground">Pratunam, Sukhumvit / Kata Beach</td>
                                            <td className="p-4 text-primary font-bold">₹2,500 – ₹5,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Luxury (5 Star / Private Villa)</td>
                                            <td className="p-4 text-muted-foreground">Riverside BKK / Laguna Phuket</td>
                                            <td className="p-4 text-purple-600 font-bold">₹10,000 – ₹25,000+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
                                <Hotel className="w-4 h-4" /> <em>Budgeting tip: If traveling as a couple on a 6-day trip, expect to split a total accommodation footprint of around ₹15,000 to ₹18,000 (meaning ₹8,000 to ₹9,000 per person).</em>
                            </p>
                        </section>

                        {/* Attractions & Activities */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">3. Sightseeing & Activities</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Depending on your itinerary, activities scale drastically. Island hopping via speedboat is more expensive than visiting Buddhist temples in the city. Packages like our <Link to="/international-tours/thailand" className="text-primary hover:underline">Thailand Tour Packages</Link> bundle these costs together.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Grand Palace & Emerald Buddha (BKK)</span>
                                    <span className="font-bold shrink-0">~ ₹1,100 (500 THB)</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Phi Phi Islands Full Day Speedboat Tour (Phuket)</span>
                                    <span className="font-bold shrink-0">~ ₹3,500 - ₹5,000</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Coral Island Half Day (Pattaya)</span>
                                    <span className="font-bold shrink-0">~ ₹1,500</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Chao Phraya River Dinner Cruise</span>
                                    <span className="font-bold shrink-0">~ ₹2,000 - ₹3,000</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Authentic Thai Massage (1 Hour)</span>
                                    <span className="font-bold shrink-0">~ ₹600 - ₹900 (300 THB)</span>
                                </li>
                            </ul>
                            <div className="bg-muted p-4 rounded-lg flex gap-3">
                                <Activity className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-sm">
                                    <strong>Activity Budget:</strong> You should allocate about <strong>₹8,000 to ₹12,000</strong> per person for a comprehensive mix of city tours and an island-hopping excursion.
                                </p>
                            </div>
                        </section>

                        {/* Food & Transport */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">4. Food, Drink & Internal Transport</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Utensils className="w-5 h-5 text-primary" /> Indian Veg/Non-Veg Food
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Finding vegetarian or Jain food in Thailand is surprisingly easy format. Restaurants in Little India (Phahurat) and Sukhumvit Soi 11 cater specifically to Indian palates. A proper Indian curry/naan meal will cost ₹800 to ₹1,200.
                                    </p>
                                    <p className="text-muted-foreground font-medium">
                                        Daily Food Budget: ₹1,500 - ₹2,500 per person.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <TrainFront className="w-5 h-5 text-primary" /> Transport (BTS / Grab)
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        In Bangkok, heavily utilize the BTS Skytrain (₹70 to ₹150 per ride) to avoid massive traffic jams. Instead of unmetered Tuk-Tuks, download the <strong>Grab app</strong> or <strong>Bolt app</strong> for transparent taxi pricing.
                                    </p>
                                    <p className="text-muted-foreground font-medium">
                                        Daily Route Budget: ₹500 - ₹1,000 per person.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Summary Block */}
                        <section className="bg-primary/10 border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
                            <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Final Verification</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                For an excellent, well-balanced 6-day holiday covering Bangkok and Pattaya, an Indian traveler must allocate between <strong>₹45,000 and ₹55,000 per person</strong>. This covers comfortable flights, 4-star shared accommodation, standard Indian meals, and extensive sightseeing. For deeper advice on reducing exchange costs, visit our <Link to="/currency-guide" className="font-bold underline text-primary">currency optimization guide</Link>.
                            </p>
                        </section>

                        <section id="faqs" className="pt-8">
                            <FAQSection title="Thailand Budgeting FAQs" faqs={faqs} />
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Sidebar CTA */}
                        <div className="bg-card rounded-2xl border p-6 text-center shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold mb-4 font-serif">Fixed Price Thailand Trips</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Avoid hidden card charges and cab scams. Let us organize a 100% prepaid, tailored Thailand tour including verified 4-star hotels and flights.
                            </p>
                            <Link to="/international-tours/thailand" className="w-full">
                                <Button className="w-full text-lg h-12 mb-3">Explore Thailand Packages</Button>
                            </Link>
                            <a href="https://wa.me/919203650311?text=Hi, I am looking to plan a Thailand trip from India and need a quote." target="_blank" rel="noreferrer">
                                <Button variant="outline" className="w-full h-12 text-green-600 border-green-600 hover:bg-green-50">
                                    WhatsApp an Expert
                                </Button>
                            </a>
                        </div>

                        {/* Related Guides List */}
                        <div className="bg-muted/30 rounded-2xl border p-6">
                            <h4 className="font-bold text-lg mb-4 text-primary">More Travel Resources</h4>
                            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                                <li>
                                    <Link to="/destinations/thailand/itinerary" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> 7 Day Thailand Itinerary
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/best-time-to-visit" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Peak Seasons vs Monsoons
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/beach-holiday-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Best Beach Destinations
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/uae/dubai-trip-cost" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Compare: Dubai Trip Cost
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/family-holiday-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> International Travel with Kids
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
                            Planning a bachelor trip, a honeymoon, or a grand family holiday? Send us your expected travel dates and we will curate a fully vetted itinerary starting at fixed, transparent prices.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919203650311?text=Hi, I would like to get a quote for a Thailand trip.">
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

export default TripCostFromIndia;
