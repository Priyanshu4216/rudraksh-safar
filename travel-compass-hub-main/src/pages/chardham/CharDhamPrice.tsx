import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wallet, Plane, Hotel, Utensils, Activity, Mountain, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/seo/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';

const CharDhamPrice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What is the average Char Dham Yatra cost from Haridwar?",
            answer: "A standard 10 to 12-day Char Dham Yatra starting from Haridwar or Rishikesh typically costs between ₹25,000 to ₹35,000 per person in a group tour (using bus/tempo traveller). A private Innova tour for 4 people will cost around ₹40,000 to ₹50,000 per person."
        },
        {
            question: "How much does the Kedarnath Helicopter ticket cost?",
            answer: "The official IRCTC Kedarnath heli-ticket price ranges from ₹5,500 to ₹8,000 for a round trip depending on your helipad (Phata, Sirsi, or Guptkashi). Note that these tickets must be booked strictly through the official IRCTC HeliYatra website."
        },
        {
            question: "What is the cost of food during Char Dham Yatra?",
            answer: "Since the entire route strictly serves vegetarian (often onion/garlic free) food, dining is quite affordable. Eating at local dhabas along the route will cost around ₹400 to ₹600 per day. For a 11-day trip, budget around ₹5,000 to ₹7,000 for food per person."
        },
        {
            question: "Is hiring a pony or palanquin (Palki) expensive?",
            answer: "Yes, hiring mules/ponies for the Kedarnath trek (16km) costs ₹3,000 to ₹3,500 one way. A Palki (palanquin) handled by four people costs ₹8,000 to ₹10,000 one way. The Yamunotri trek (6km) pony costs around ₹1,500 to ₹2,000 for a round trip."
        },
        {
            question: "Why do Char Dham prices increase in May and June?",
            answer: "May and June are the absolute peak months coinciding with Indian summer school holidays. Since millions of pilgrims arrive during this narrow 60-day window, hotels along the route in Barkot, Uttarkashi, and Guptkashi inflate their rates by 200%."
        },
        {
            question: "Are VIP Darshan tickets available to skip the lines?",
            answer: "Yes, VIP Darshan slips are officially issued by the Badri-Kedar Temple Committee (BKTC) for Badrinath and Kedarnath. They usually cost about ₹300 per person and offer a significantly faster, dedicated queue for darshan."
        },
        {
            question: "How much cash should I carry during the Yatra?",
            answer: "While major towns have ATMs, machines in high altitude areas frequently run out of cash. Carry at least ₹15,000 to ₹20,000 in physical cash per person to pay for ponies, small dhaba meals, and donations at the temples where UPI networks might fail."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Pilgrimage Tours", "item": "https://rudrakshsafar.com/pilgrimage-tours" },
            { "@type": "ListItem", "position": 3, "name": "Char Dham", "item": "https://rudrakshsafar.com/chardham/CharDhamPillar" },
            { "@type": "ListItem", "position": 4, "name": "Char Dham Yatra Cost", "item": "https://rudrakshsafar.com/chardham/chardham-price" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Char Dham Yatra Cost (2025) | Budget Breakdown & Package Prices</title>
                <meta name="description" content="Detailed Char Dham Yatra cost from India. Calculate your budget for Haridwar transport, Kedarnath helicopter tickets, pony rides, and high-altitude accommodation." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1626023348002-8f19be1e74f8?q=80&w=2070&auto=format&fit=crop"
                        alt="Kedarnath Temple Valley"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                </div>
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-100 border border-orange-500/50 text-sm font-semibold mb-6 shadow-sm">
                        Updated Pilgrimage Guide 2025
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                        Char Dham Yatra Cost Breakdown
                    </h1>
                    <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md mb-8 border-l-4 border-orange-500 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        Planning your sacred journey to the Himalayas? From helicopter tickets at Kedarnath to private Innova hires from Haridwar, here is the most transparent budget breakdown for the Char Dham Yatra.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Box */}
                        <section>
                            <div className="bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-2xl p-6 md:p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                                    <Wallet className="w-6 h-6 text-orange-600" />
                                    Average 11-Day Trip Cost (Ex. Haridwar)
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Bus / Group Tour</div>
                                        <div className="text-xl font-bold text-green-600">₹25,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm border-orange-500">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Private Innova (4-Pax)</div>
                                        <div className="text-xl font-bold text-orange-600">₹45,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person</div>
                                    </div>
                                    <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Luxury / VIP</div>
                                        <div className="text-xl font-bold text-purple-600">₹80,000+</div>
                                        <div className="text-xs text-muted-foreground mt-1">Per Person</div>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary-foreground leading-relaxed">
                                    <span className="font-bold text-red-500">Note:</span> Above costs <em>exclude</em> flight/train tickets from your home city to Haridwar/Dehradun. Accommodation costs will double if you travel during the absolute peak weeks of May/June.
                                </p>
                            </div>
                        </section>

                        {/* Transport */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">1. Vehicle Hire & Route Transport</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Transport is the largest fixed cost in your Char Dham itinerary. The circuit spans roughly 1,600 km of mountainous terrain starting from Haridwar/Rishikesh.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Mountain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Private Vehicle (₹50,000 – ₹70,000 Total)</h3>
                                        <p className="text-muted-foreground">
                                            Hiring an SUV (Innova or Ertiga) is highly recommended for safety and comfort on winding hill roads. A 10-12 day Innova booking from Haridwar costs between ₹60,000 to ₹70,000 (all inclusive of tolls and driver bata). If divided among 4 passengers, this is roughly ₹17,000 per person.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Group Bus / Tempo Traveller</h3>
                                        <p className="text-muted-foreground">
                                            For budget pilgrims, registering for a 2X2 Pushback Bus or a 14-seater Tempo Traveller will slash transport costs down to ₹8,000–₹12,000 per seat. However, buses take much longer and offer zero flexibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Accommodation */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">2. Accommodation in the Himalayas</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Finding good hotels in remotes nodes like Yamunotri (Barkot), Gangotri (Uttarkashi), Kedarnath (Guptkashi/Sonprayag), and Badrinath is challenging. Demand massively outstrips supply constraint.
                            </p>

                            <div className="overflow-hidden rounded-xl border">
                                <table className="w-full text-left bg-card">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="p-4 font-semibold border-b border-border/50">Hotel Category</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Quality Profile</th>
                                            <th className="p-4 font-semibold border-b border-border/50">Cost Per Night (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Ashrams / GMVN Dorms</td>
                                            <td className="p-4 text-muted-foreground">Basic bed, shared washroom, strict timings</td>
                                            <td className="p-4 text-green-600 font-bold">₹500 – ₹1,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Standard 2/3-Star</td>
                                            <td className="p-4 text-muted-foreground">Clean attached bath, geyser, basic meals</td>
                                            <td className="p-4 text-primary font-bold">₹3,000 – ₹6,000</td>
                                        </tr>
                                        <tr className="hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-medium">Premium Swiss Tents/4-Star</td>
                                            <td className="p-4 text-muted-foreground">Heaters, great views, buffet meals</td>
                                            <td className="p-4 text-purple-600 font-bold">₹8,000 – ₹15,000+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-muted-foreground text-sm flex items-center gap-2">
                                <Hotel className="w-4 h-4" /> <em>Hotel Budget: For an 11-day trip booking standard 3-star hotels (sharing basis), expect to spend ₹18,000 to ₹25,000 per person.</em>
                            </p>
                        </section>

                        {/* Helicopter & Ponies */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">3. Kedarnath Trek: Helicopter & Pony Costs</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                The Kedarnath trek is a grueling 16km steep ascent. Unless you are extremely physically fit, you must budget for external help.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium flex items-center gap-2">Kedarnath Helicopter (Round Trip)</span>
                                    <span className="font-bold shrink-0 text-red-600 dark:text-red-400">₹5,500 - ₹8,000</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Mule/Pony Ride (One Way Kedarnath)</span>
                                    <span className="font-bold shrink-0">₹3,000 - ₹3,500</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Palanquin/Palki (One Way Kedarnath)</span>
                                    <span className="font-bold shrink-0">₹8,000 - ₹10,000</span>
                                </li>
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Kandi (Basket ride for children)</span>
                                    <span className="font-bold shrink-0">₹1,500 - ₹2,500</span>
                                </li>
                            </ul>
                            <div className="bg-red-50 dark:bg-red-900/10 p-4 border border-red-200 rounded-lg flex gap-3">
                                <Activity className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0" />
                                <p className="text-sm text-red-800 dark:text-red-300">
                                    <strong>WARNING:</strong> Kedarnath Helicopter tickets are the most scammed items in India. NEVER transfer money to WhatsApp agents. Tickets are <strong>ONLY sold via the official IRCTC HeliYatra website</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Food */}
                        <section>
                            <h2 className="text-3xl font-bold font-serif mb-6 border-b pb-2">4. Food & Darshan Costs</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Utensils className="w-5 h-5 text-orange-600" /> Food Expenses
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Food is relatively inexpensive. Expect simple thalis, parathas, and maggi. A daily food budget of ₹500 to ₹700 per person is ample.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Wallet className="w-5 h-5 text-orange-600" /> VIP Darshan & Pooja
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Booking special Poojas (like Maha Abhishek at Badrinath) costs ₹3,000 to ₹5,000+. Standard VIP Darshan slips cost ₹300 per temple.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Summary Block */}
                        <section className="bg-orange-50/50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-xl">
                            <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Final Verification</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                A high-quality, perfectly managed <strong>11-Day Char Dham Yatra cost from Haridwar sits around ₹45,000 per person</strong>. This includes a private Innova, verified 3-star accommodations, daily meals, and VIP Darshan slips. Any "cheap" package offering the trip for ₹20,000 will inevitably put you in unsafe tempos and unregulated dorms. Read our <Link to="/chardham/CharDhamRegistration" className="font-bold underline text-primary">Registration Guide</Link> before booking any tickets.
                            </p>
                        </section>

                        <section id="faqs" className="pt-8">
                            <FAQSection title="Char Dham Cost FAQs" faqs={faqs} />
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Sidebar CTA */}
                        <div className="bg-card rounded-2xl border p-6 text-center shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold mb-4 font-serif">Fixed Price Yatra Packages</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                Avoid the devastating stress of finding hotels in the mountains. Book a unified, pre-arranged, and verified Char Dham Yatra with us.
                            </p>
                            <Link to="/chardham/CharDhamPillar" className="w-full">
                                <Button className="w-full text-lg h-12 mb-3 bg-orange-600 hover:bg-orange-700">View Yatra Packages</Button>
                            </Link>
                            <a href="https://wa.me/919406182174?text=Hi, I need an honest pricing quote for my upcoming Char Dham Yatra." target="_blank" rel="noreferrer">
                                <Button variant="outline" className="w-full h-12 text-orange-600 border-orange-600 hover:bg-orange-50">
                                    Consult our Pundit
                                </Button>
                            </a>
                        </div>

                        {/* Related Guides List */}
                        <div className="bg-muted/30 rounded-2xl border p-6">
                            <h4 className="font-bold text-lg mb-4 text-primary">Himalayan Guides</h4>
                            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                                <li>
                                    <Link to="/chardham/KedarnathTemple" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Kedarnath Temple Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/chardham/BadrinathTemple" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Badrinath Temple Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/chardham/CharDhamRouteMap" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> View Yatra Route Map
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/domestic/kashmir/KashmirTripCost" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Compare: Kashmir Cost
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/budget-tour-packages" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Best Budget Trips
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>

            <AnimatedSection>
                <div className="container mx-auto px-4 py-8 mb-12">
                    <div className="bg-orange-600 rounded-3xl p-8 md:p-14 text-center text-orange-50">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">Plan Your Sacred Yatra With Rudraksh Safar</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            We take the burden of logistics so you can focus purely on your devotion. We secure premier Himalayan hotels, verified 4x4 vehicles, and coordinate your entire Kedarnath trek efficiently.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-white hover:bg-orange-50 text-orange-600 font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I would like to book a transparent Char Dham package.">
                                    Start Planning via WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-orange-200 text-orange-100 hover:bg-orange-800 font-bold text-lg h-14 px-8 rounded-full" asChild>
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

export default CharDhamPrice;
