import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Anchor, MapPin, Calendar, Star, Info, Phone, MessageCircle, CheckCircle, HelpCircle, DollarSign, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CruiseLoader from '@/components/CruiseLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DisclaimerSection from '@/components/DisclaimerSection';
import FAQsSection from '@/components/FAQsSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TLDRSection from '@/components/TLDRSection';
import RelatedServices from '@/components/RelatedServices';

const CruiseBooking = () => {
    const [loading, setLoading] = useState(() => !sessionStorage.getItem('rudraksh_cruise_loader_shown'));

    const cruiseTypes = [
        {
            title: "Domestic Cruises (India)",
            desc: "Explore India's coastline with sailing routes to Goa, Lakshadweep, and Mumbai. Experience luxury without a passport.",
            icon: Anchor,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "International Cruises",
            desc: "Set sail to exotic destinations in Asia (Singapore, Thailand), Middle East (Dubai), Europe, and the Caribbean.",
            icon: Globe,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Family Cruises",
            desc: "Designed for all ages, featuring water parks, kids' clubs, broadway-style shows, and family-friendly dining.",
            icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            title: "Honeymoon & Couple Cruises",
            desc: "Romantic getaways with private balconies, candlelit dinners, couple spas, and sunset decks.",
            icon: MessageCircle, // Using MessageCircle as a placeholder for a heart/romance feel or similar if Heart isn't available
            color: "text-pink-500",
            bg: "bg-pink-50"
        }
    ];

    const packageInclusions = [
        "Accommodation in selected cabin category",
        "All meals onboard (Breakfast, Lunch, Dinner)",
        "Onboard entertainment (Shows, Live Music)",
        "Access to pools, gym, and common areas",
        "Port charges and taxes (usually included)",
        "Kids' activities and youth programs"
    ];

    const faqs = [
        {
            question: "Is a cruise holiday suitable for first-time travellers?",
            answer: "Yes, absolutely. Cruise holidays are ideal for first-timers because they are 'unpack once' vacations. Your accommodation, meals, transport between destinations, and entertainment are all included, making it stress-free and easy to manage."
        },
        {
            question: "Are cruise holidays good for families?",
            answer: "Yes! Family cruises are incredibly popular because they offer safe environments, dedicated kids' clubs, supervising staff, water slides, and diverse food options that cater to picky eaters."
        },
        {
            question: "Do cruise packages include food and accommodation?",
            answer: "Most cruise packages are full-board, meaning your cabin stay and all meals at main dining venues are included. Specialty dining may cost extra."
        },
        {
            question: "Do I need a passport or visa for a cruise?",
            answer: "For domestic cruises (like Mumbai-Goa), you just need a government ID (Aadhar/Voter ID). For international cruises, a valid passport (6 months validity) and relevant visas for the countries you visit are mandatory."
        },
        {
            question: "Is cruise travel expensive?",
            answer: "It offers excellent value. When you factor in that you aren't paying separately for hotels, 3 meals a day, shows, and travel between cities, cruises are often cheaper than comparable land-based holidays."
        },
        {
            question: "How do I book a cruise holiday?",
            answer: "You can book easily by contacting Rudraksh Safar. We help you choose the right ship, cabin, and sailing date, and handle all the documentation for you."
        }
    ];

    return (
        <>
            <AnimatePresence>
                {loading && <CruiseLoader onComplete={() => {
                    setLoading(false);
                    sessionStorage.setItem('rudraksh_cruise_loader_shown', 'true');
                }} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Helmet>
                        <title>Cruise Holidays & Booking Services India | Rudraksh Safar</title>
                        <meta name="description" content="Book domestic & international cruise packages with Rudraksh Safar. All-inclusive luxury cruises for families, couples & first-timers. Expert guidance & best prices." />
                        <meta name="keywords" content="cruise booking india, luxury cruise holidays, cordelia cruise booking, international cruise packages, family cruise vacation, honeymoon cruise" />
                        <link rel="canonical" href="https://rudrakshsafar.com/cruise-booking" />
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": [
                                    {
                                        "@type": "Service",
                                        "name": "Cruise Booking Services",
                                        "provider": {
                                            "@type": "TravelAgency",
                                            "name": "Rudraksh Safar"
                                        },
                                        "serviceType": "Travel Booking",
                                        "description": "Domestic and International cruise booking assistance for Cordelia, Royal Caribbean, and more."
                                    }
                                ]
                            })}
                        </script>
                    </Helmet>

                    <Navbar />

                    <main className="min-h-screen bg-background">
                        {/* Hero Section */}
                        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-blue-950 text-white">
                            <div className="absolute inset-0 bg-[url('/images/cruise/pool-deck.jpg')] bg-cover bg-center opacity-40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent"></div>

                            <div className="container relative z-10 text-center px-4">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-4xl mx-auto"
                                >
                                    <div className="flex justify-center mb-6">
                                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cruise Booking', path: '/cruise-booking' }]} />
                                    </div>
                                    <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                                        Premium Ocean Voyages
                                    </Badge>
                                    <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-tight">
                                        Discover the World <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">From the Ocean</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        Your all-inclusive floating luxury resort.
                                        Experience seamless travel with accommodation, meals,
                                        and entertainment included in one journey.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 text-lg h-14 px-8 rounded-full shadow-lg shadow-cyan-500/20" asChild>
                                            <a href="https://wa.me/919406182174?text=I want to plan a cruise holiday">Plan My Cruise</a>
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        <section className="py-12 bg-white dark:bg-slate-950 relative z-20">
                            <div className="container mx-auto px-4">
                                <TLDRSection
                                    title="Quick Answer: Cruise Booking"
                                    summary="Cruise holidays offer an all-inclusive travel experience combining accommodation, dining, and entertainment on a sailing resort. We simplify the booking process for domestic (Cordelia) and international voyages, ensuring you choose the right cabin and itinerary for a hassle-free vacation."
                                    areasServed={["Pan India", "International"]}
                                />
                            </div>
                        </section>

                        {/* Cruise Partners Marquee */}
                        <section className="bg-slate-900 border-b border-white/10 overflow-hidden py-6">
                            <div className="relative w-full overflow-hidden">
                                <div className="flex w-[200%] animate-marquee">
                                    {/* First Set */}
                                    <div className="flex justify-around items-center w-1/2 shrink-0 px-4 gap-8 md:gap-16">
                                        {["Cordelia Cruises", "Royal Caribbean", "Costa Cruises", "MSC Cruises", "Norwegian Cruise Line", "Princess Cruises", "Celebrity Cruises"].map((brand, i) => (
                                            <span key={i} className="text-xl md:text-2xl font-bold font-serif text-slate-300 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Duplicate Set for Loop */}
                                    <div className="flex justify-around items-center w-1/2 shrink-0 px-4 gap-8 md:gap-16">
                                        {["Cordelia Cruises", "Royal Caribbean", "Costa Cruises", "MSC Cruises", "Norwegian Cruise Line", "Princess Cruises", "Celebrity Cruises"].map((brand, i) => (
                                            <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold font-serif text-slate-300 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* What is a Cruise */}
                        <section className="py-20">
                            <div className="container mx-auto px-4">
                                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is a Cruise Holiday?</h2>
                                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                            <p>
                                                A cruise holiday is a travel experience where you stay on a cruise ship that sails to multiple destinations while providing accommodation, meals, onboard entertainment, and activities.
                                            </p>
                                            <p>
                                                Unlike traditional tours, cruises allow you to <strong>relax, unpack once</strong>, and enjoy both travel and leisure in one seamless experience.
                                            </p>
                                            <p>
                                                Cruise vacations are popular among families, honeymoon couples, senior travellers, and people looking for stress-free holidays.
                                            </p>
                                        </div>
                                        <div className="mt-8 flex gap-4">
                                            <Badge variant="secondary" className="px-3 py-1">Family Friendly</Badge>
                                            <Badge variant="secondary" className="px-3 py-1">All-Inclusive Meals</Badge>
                                            <Badge variant="secondary" className="px-3 py-1">Multiple Cities</Badge>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform -rotate-3"></div>
                                        <img
                                            src="/images/cruise/princess-ship.jpg"
                                            alt="Luxury Cruise Ship Deck"
                                            className="rounded-2xl shadow-xl relative transform rotate-3 hover:rotate-0 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Types of Cruise */}
                        <section className="py-20 bg-muted/20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What are the different types of cruise holidays?</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        We help travellers plan and book a wide range of cruise holidays tailored to your needs.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                    {cruiseTypes.map((type, index) => (
                                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all dark:bg-slate-800">
                                            <CardContent className="p-6 flex items-start gap-4">
                                                <div className={`p-4 rounded-xl ${type.bg} ${type.color} shrink-0`}>
                                                    <type.icon className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                                                    <p className="text-muted-foreground">{type.desc}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Assistance & Cost */}
                        <section className="py-20">
                            <div className="container mx-auto px-4">
                                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                                    {/* Assistance */}
                                    <div>
                                        <div className="mb-8">
                                            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-2">
                                                <MapPin className="w-4 h-4" /> Pan-India Service
                                            </div>
                                            <h2 className="text-3xl font-bold mb-6">How do we assist with cruise booking?</h2>
                                            <p className="text-muted-foreground mb-6">
                                                Travellers from different cities often need guidance on choosing the right cruise and planning travel to the cruise departure port. Rudraksh Safar provides complete assistance:
                                            </p>
                                            <ul className="space-y-4">
                                                {[
                                                    "Selecting the right cruise route and duration",
                                                    "Guidance on departure ports and connecting travel",
                                                    "Assistance with passport, visa, and documentation",
                                                    "Clear explanation of inclusions, cabins, and facilities"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span className="font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Cost */}
                                    <div className="bg-primary/5 dark:bg-slate-900/50 rounded-3xl p-8 border border-primary/10">
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                            <DollarSign className="w-6 h-6 text-primary" />
                                            How Much Does it Cost?
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            Cruise holiday pricing depends on duration, destination, season, and cabin category.
                                            However, they often provide <strong>better value</strong> than traditional holidays because almost everything is included.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-transparent dark:border-slate-700">
                                                <h4 className="font-bold flex justify-between mb-1">
                                                    <span>Budget Friendly</span>
                                                    <span className="text-green-600 dark:text-green-400">Interior Cabins</span>
                                                </h4>
                                                <p className="text-xs text-muted-foreground">Best value, perfect if you spend most time on deck.</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border-l-4 border-l-primary dark:border-l-primary dark:border-slate-700">
                                                <h4 className="font-bold flex justify-between mb-1">
                                                    <span>Most Popular</span>
                                                    <span className="text-blue-600 dark:text-blue-400">Ocean View / Balcony</span>
                                                </h4>
                                                <p className="text-xs text-muted-foreground">Wake up to ocean views and fresh sea breeze.</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-transparent dark:border-slate-700">
                                                <h4 className="font-bold flex justify-between mb-1">
                                                    <span>Luxury</span>
                                                    <span className="text-purple-600 dark:text-purple-400">Suites</span>
                                                </h4>
                                                <p className="text-xs text-muted-foreground">VIP access, butler service, and spacious living.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Book With Us & Inclusions */}
                        <section className="py-20 bg-slate-900 text-white">
                            <div className="container mx-auto px-4">
                                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6">Why Book with Rudraksh Safar?</h2>
                                        <p className="text-slate-300 mb-8">
                                            Our focus is to simplify cruise travel and help travellers make informed decisions. We don't just sell a ticket; we plan your voyage.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                "Guidance for first-time cruisers",
                                                "Personalised cruise selection",
                                                "Help with travel planning",
                                                "Transparent cost explanation",
                                                "Support during travel"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                                    <Star className="w-4 h-4 text-yellow-400" />
                                                    <span className="text-sm font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Card className="bg-white/5 border-white/10 text-white backdrop-blur-md">
                                        <CardHeader>
                                            <CardTitle className="text-xl">What's Usually Included?</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                {packageInclusions.map((inc, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                                        <span className="text-slate-200">{inc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-slate-400">
                                                *Shore excursions, specialty dining, and spa treatments are usually optional extras.
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </section>

                        {/* Life Onboard Gallery + Partners - Combined Section */}
                        <section className="py-20 bg-muted/20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">What is the experience like on a cruise ship?</h2>
                                    <p className="text-muted-foreground">From water parks at sea to sunset cocktails, the ship is your playground.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
                                    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                                        <img src="/images/cruise/royal-caribbean.jpg" alt="Water park and activities on deck" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                            <p className="text-white font-bold text-lg">Adventure & Activities</p>
                                        </div>
                                    </div>
                                    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                                        <img src="/images/cruise/sunset-pool.jpg" alt="Sunset by the pool" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                            <p className="text-white font-bold text-lg">Relaxation & Sunsets</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <FAQsSection
                            title="Frequently asked questions about cruise holidays"
                            description="Answers to common questions for first-time cruisers."
                            faqs={faqs}
                        />

                        <RelatedServices mode="booking" />

                        <section className="py-20 bg-background">
                            <div className="container mx-auto px-4 text-center">

                                <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">How to plan your cruise holiday?</h2>
                                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                                        Whether you are planning a domestic cruise or an international voyage, we simplify the process with clear guidance and personalised assistance.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full" asChild>
                                            <a href="https://wa.me/919406182174?text=Hi, help me book a cruise">
                                                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                            </a>
                                        </Button>
                                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full" asChild>
                                            <a href="tel:+919406182174">
                                                <Phone className="w-5 h-5 mr-2" /> Call Expert
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main >

                    <Footer />
                    <FloatingWhatsApp />
                </motion.div >
            )}
        </>
    );
};

export default CruiseBooking;
