import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wallet, Plane, Hotel, Utensils, TrainFront, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/seo/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';

const DubaiTripCost = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What is the average Dubai trip cost from India for a couple?",
            answer: "A comfortable 5-day Dubai trip for a couple from India typically costs between ₹1,10,000 to ₹1,50,000. This includes return flights, a 3 or 4-star hotel, Dubai visa fees, basic food, local Metro transport, and standard sightseeing tickets like the Burj Khalifa and Desert Safari."
        },
        {
            question: "How much cash should I carry to Dubai from India?",
            answer: "While Dubai is highly card-friendly, we recommend carrying around 500 to 1000 AED (approx. ₹11,000 to ₹23,000) in physical cash for a 5-day trip. Use this for small expenses like street food, local taxis, and souk (market) shopping where card machines might charge extra."
        },
        {
            question: "Is Dubai visa free for Indians?",
            answer: "No, Dubai (UAE) is not visa-free for standard Indian passport holders. However, Indians holding a valid US Visa, US Green Card, UK Resident Permit, or EU Resident Permit can get a visa on arrival. Otherwise, you must apply for an e-Visa costing around ₹6,500 to ₹7,500."
        },
        {
            question: "What is the cheapest month to visit Dubai?",
            answer: "The cheapest time to visit Dubai is during the peak summer months, from June to August. During this time, flight prices drop significantly, and luxury 5-star hotels offer massive discounts. However, outdoor activities will be severely restricted by extreme heat."
        },
        {
            question: "How much does food cost per day in Dubai?",
            answer: "A budget traveler can manage with ₹1,500 to ₹2,500 per day by eating at Indian restaurants in Bur Dubai/Deira and food courts. For a mid-range experience dining at casual restaurants, allocate around ₹3,000 to ₹5,000 per person per day."
        },
        {
            question: "Are flights to Dubai from Mumbai cheaper than Delhi?",
            answer: "Generally, yes. Due to closer geographical proximity and high flight frequency, return flights from Mumbai (BOM) to Dubai (DXB) are often ₹2,000 to ₹5,000 cheaper than flights originating from Delhi (DEL), especially if booked 2-3 months in advance."
        },
        {
            question: "Do I need to pay for the Dubai Metro card in advance?",
            answer: "No, you can easily purchase a Nol Card (the official transport card) at any Dubai Metro station arriving at the airport. A standard Red or Silver Nol card will cost you around 25 AED (approx. ₹570), which includes some initial credit."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "UAE", "item": "https://rudrakshsafar.com/destinations/uae" },
            { "@type": "ListItem", "position": 4, "name": "Dubai Trip Cost from India", "item": "https://rudrakshsafar.com/destinations/uae/dubai-trip-cost" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Dubai Trip Cost from India (2025) | Budget & Expense Breakdown</title>
                <meta name="description" content="Detailed breakdown of Dubai trip cost from India. Calculate your budget for flights, visa, hotels, food, and attractions like Burj Khalifa." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                </div>
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/50 text-sm font-semibold mb-6">
                        Updated for 2025
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                        Dubai Trip Cost from India
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow mb-8 border-l-4 border-primary pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        Planning an Arabian holiday? From affordable 3-star stays in Bur Dubai to the dizzying heights of the Burj Khalifa, here is the ultimate, realistic budget breakdown for Indian travelers visiting the UAE.
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
                                    Average 5-Day Trip Cost (Per Person)
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Budget</div>
                                        <div className="text-xl font-bold text-green-600">₹45,000+</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm border-primary">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Mid-Range (Couples)</div>
                                        <div className="text-xl font-bold text-primary">₹65,000+</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Luxury</div>
                                        <div className="text-xl font-bold text-purple-600">₹1,20,000+</div>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary-foreground leading-relaxed">
                                    <span className="font-bold text-red-500">Note:</span> These estimates factor in standard flights from major hubs like Mumbai or Delhi. Costs will fluctuate heavily based on the season you travel in. Read our <Link to="/best-time-to-visit" className="text-primary hover:underline">Best Time to Visit guide</Link> for seasonality details.
                                </p>
                            </div>
                        </section>

                        {/* Flights & Visa */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">1. Flights & UAE Visa Fees</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                The foundation of your Dubai trip cost from India begins with airfare and immigration. Unlike some destinations, Dubai requires a pre-approved e-Visa for most Indians.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Return Airfare (₹18,000 – ₹28,000)</h3>
                                        <p className="text-muted-foreground">
                                            Booking 2-3 months in advance is critical. Flights from West Coast hubs like Mumbai (BOM) or Ahmedabad (AMD) are generally cheaper and shorter. Flying from tier-2 cities or waiting until the last minute during December can push fares past ₹35,000.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Dubai e-Visa (₹6,500 – ₹7,500)</h3>
                                        <p className="text-muted-foreground">
                                            A standard 30-day single-entry tourist visa costs around ₹6,500 to ₹7,500 depending on the agency. Express visas cost up to ₹2,000 more. This is a mandatory, fixed cost for your trip.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Accommodation */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">2. Accommodation Costs in Dubai</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Where you stay dramatically alters your overall Dubai trip cost. The city is broadly divided into "Old Dubai" (budget-friendly) and "New Dubai" (premium).
                            </p>

                            <div className="overflow-hidden rounded-xl border">
                                <table className="w-full text-left bg-card">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="p-4 font-semibold border-b border-border/50">Hotel Category</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Top Locations</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Cost Per Night (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Budget (2-3 Star)</td>
                                            <td className="p-4 text-muted-foreground">Bur Dubai, Deira, Karama</td>
                                            <td className="p-4 text-green-600 font-bold">₹3,000 – ₹5,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Mid-Range (4 Star)</td>
                                            <td className="p-4 text-muted-foreground">Al Barsha, Business Bay</td>
                                            <td className="p-4 text-primary font-bold">₹7,000 – ₹12,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Luxury (5 Star / Resorts)</td>
                                            <td className="p-4 text-muted-foreground">Downtown Dubai, Palm Jumeirah</td>
                                            <td className="p-4 text-purple-600 font-bold">₹25,000 – ₹1,00,000+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
                                <Hotel className="w-4 h-4" /> <em>Pro-tip: For a 5-day trip, expect to spend at least <strong>₹15,000 to ₹25,000</strong> per person on decent accommodation on a sharing basis.</em>
                            </p>
                        </section>

                        {/* Attractions & Activities */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">3. Sightseeing & Attraction Tickets</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                This is where costs can spiral. Dubai is home to world-record-breaking attractions, and entry fees reflect that premium. If you book one of our <Link to="/international-tours/dubai" className="text-primary hover:underline">all-inclusive Dubai packages</Link>, these are typically covered.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Burj Khalifa (124th & 125th Floor)</span>
                                    <span className="font-bold shrink-0">~ ₹3,500 - ₹5,000</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Premium Desert Safari with BBQ Dinner</span>
                                    <span className="font-bold shrink-0">~ ₹2,500 - ₹4,500</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Dubai Frame</span>
                                    <span className="font-bold shrink-0">~ ₹1,100</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Museum of the Future</span>
                                    <span className="font-bold shrink-0">~ ₹3,300</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Aquaventure Waterpark (Atlantis)</span>
                                    <span className="font-bold shrink-0">~ ₹6,500 - ₹8,000</span>
                                </li>
                            </ul>
                            <div className="bg-muted p-4 rounded-lg flex gap-3">
                                <Activity className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-sm">
                                    <strong>Activity Budget:</strong> Set aside at least <strong>₹12,000 to ₹18,000</strong> per person to cover three or four major attractions.
                                </p>
                            </div>
                        </section>

                        {/* Food & Transport */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">4. Food & Local Transportation</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Utensils className="w-5 h-5 text-primary" /> Food Expenses
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Dubai has fantastic Indian food options, especially in Bur Dubai and Karama. You can grab a hearty shawarma or Kerala parotta meal for as low as 15-20 AED (₹350-₹450).
                                    </p>
                                    <p className="text-muted-foreground font-medium">
                                        Daily Budget: ₹1,500 (Budget) to ₹4,000 (Mid-range) per person.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <TrainFront className="w-5 h-5 text-primary" /> Transportation
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Rely heavily on the Dubai Metro. Buy a Silver Nol Card. A single metro ride costs between 3 to 7.5 AED (₹70 to ₹170). Taxis (Careem/Uber) are expensive, with starting meters around 12 AED.
                                    </p>
                                    <p className="text-muted-foreground font-medium">
                                        Daily Budget: ₹500 (Metro only) to ₹2,500 (Mixed Taxi/Metro).
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Final Verdict */}
                        <section className="bg-primary/10 border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
                            <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Final Verdict</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                For a comfortable, well-rounded 5-day holiday experiencing the best of Dubai (including flights from India), you should budget around <strong>₹65,000 to ₹75,000 per person</strong>. If you intend to shop heavily at the Dubai Mall or stay in Marina/JBR, scale your budget upwards of ₹1 Lakh. To read about foreign exchange complexities, read our <Link to="/currency-guide" className="font-bold underline text-primary">currency guide</Link>.
                            </p>
                        </section>

                        <section id="faqs" className="pt-8">
                            <FAQSection title="Frequently Asked Questions: Dubai Trip Costs" faqs={faqs} />
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Sidebar CTA */}
                        <div className="bg-card rounded-2xl border p-6 text-center shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold mb-4 font-serif">Too Confusing?</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Skip the stress of budgeting and piecing together bookings. Get a fixed-price, fully customized Dubai package from India.
                            </p>
                            <Link to="/international/dubai/DubaiMaster" className="w-full">
                                <Button className="w-full text-lg h-12 mb-3">View Dubai Packages</Button>
                            </Link>
                            <a href="https://wa.me/919406182174?text=Hi, I want to know the latest Dubai package pricing." target="_blank" rel="noreferrer">
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
                                    <Link to="/international-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Compare All International Costs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/best-time-to-visit" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Global Seasonality Maps
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/budget-tour-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Top Budget Destinations
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/destinations/thailand/trip-cost-from-india" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Compare: Cost of Thailand
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/family-holiday-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Family Travel Hacks
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
                            Stop worrying about unseen taxes and hidden attraction fees. Our Dubai packages include flights, visas, and premium sightseeing under one transparent price.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I would like to book a transparent Dubai package from India.">
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

export default DubaiTripCost;
