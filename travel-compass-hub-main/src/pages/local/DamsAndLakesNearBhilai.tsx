import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Droplets, Sailboat, AlertTriangle, Clock, Camera, Route, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LocationHero from '@/components/LocationHero';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TLDRSection from '@/components/TLDRSection';
import LastUpdated from '@/components/LastUpdated';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DamsAndLakesNearBhilai = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristDestination",
                "name": "Dams & Lakes Near Bhilai",
                "description": "Discover the most beautiful dams and lakes near Bhilai, including Tandula Dam, Gangrel Dam, and Kuthrel Dam. Detailed guide on water sports and boating.",
                "touristType": ["Family", "Nature Lovers", "Adventure Seekers"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "250"
                },
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Rudraksh Safar",
                    "url": "https://rudrakshsafar.com",
                    "telephone": "+919203650311",
                    "priceRange": "₹-₹₹"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which is the best dam for a one-day picnic near Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tandula Dam (approx 60km away) is widely considered the best for a quick one-day family picnic due to its sea-like views, low crowds, and easy accessibility from Bhilai."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is water sports available at Gangrel Dam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Gangrel Dam (Bhowani) is the hub for water sports in Chhattisgarh. It offers speed boating, jet skiing, water surfing, and island camping."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far is Gangrel Dam from Raipur?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Gangrel Dam is located near Dhamtari, approximately 90 kilometers from Raipur. The drive takes around 2 hours via NH30."
                        }
                    }
                ]
            }
        ]
    };

    const spots = [
        {
            name: "Tandula Dam",
            tag: "Scenic & Calm",
            type: "Water Reservoir",
            desc: "A massive dam giving a sea-like feel. Perfect for friends, couples, and photography. Famous for winter picnics.",
            distance: "From Bhilai: ~60 km",
            bestTime: "Winter and Monsoon"
        },
        {
            name: "Gangrel Dam (Bhowani)",
            tag: "Water Sports Hub",
            type: "Dam & Eco-Resort",
            desc: "The longest dam in Chhattisgarh built across the Mahanadi river. Offers water sports, island resorts, and boating.",
            distance: "From Bhilai: ~100 km",
            bestTime: "All Year (Monsoon for full capacity)"
        },
        {
            name: "Kuthrel Dam",
            tag: "Hidden Gem",
            type: "Lake & Forest",
            desc: "An uncommon spot perfect for quiet picnics and nature lovers away from the city crowd.",
            distance: "From Bhilai: ~95 km",
            bestTime: "Post-Monsoon"
        },
        {
            name: "Kharkhara Dam",
            tag: "Offbeat Reservoir",
            type: "Dam",
            desc: "A completely soil-built dam with a lush green environment, making it a peaceful getaway.",
            distance: "From Bhilai: ~110 km",
            bestTime: "October to March"
        },
        {
            name: "Murrum Silli Dam",
            tag: "Architectural Marvel",
            type: "Siphon Spillway Dam",
            desc: "Asia's first dam to have siphon spillways. A brilliant piece of architecture surrounded by thick forests.",
            distance: "From Bhilai: ~95 km",
            bestTime: "Monsoon"
        }
    ];

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
                style={{ scaleX }}
            />
            <Helmet>
                <title>Top Dams & Lakes Near Bhilai & Raipur | Water Sports 2024</title>
                <meta name="description" content="Plan a day trip to the best dams and lakes near Bhilai and Raipur. Explore Tandula Dam, Gangrel Dam for water sports, timings, and boating costs." />
                <meta name="keywords" content="dams near bhilai, lakes near raipur, tandula dam, gangrel dam water sports, kuthrel dam, murrum silli, water sports chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/dams-and-lakes" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Bhilai & Raipur"
                    title="Scenic Dams & Lakes Near Bhilai"
                    subtitle="Escape to massive reservoirs and tranquil lakes. Complete guide to boating, water sports, and perfect picnic spots."
                    bgImage="https://images.unsplash.com/photo-1543884351-4c9df4ff0b0b?auto=format&fit=crop&q=80&w=2000"
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Dams & Lakes', path: '/tour-packages-from-bhilai/dams-and-lakes' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <LastUpdated className="mb-6" />

                        {/* TL;DR Section */}
                        <div className="mb-16 max-w-4xl mx-auto text-left">
                            <TLDRSection
                                title="Quick Summary: Dams & Lakes"
                                summary="For a quick, peaceful family picnic, Tandula Dam (60km from Bhilai) is unmatched. If you are looking for adrenaline and water sports (jet skiing, speed boating), head straight to Gangrel Dam (100km). Pack lunch if visiting Tandula, as food options are limited, whereas Gangrel has full-fledged eco-resorts."
                                areasServed={["Tandula Dam", "Gangrel Dam", "Murrum Silli", "Kuthrel Dam"]}
                            />
                        </div>

                        {/* Quick Cards Grid */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <Sailboat className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl font-bold">Top Dams & Lakes at a Glance</h2>
                            </div>
                            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {spots.map((spot, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Card className="h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/20 dark:border-white/10">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge variant="outline" className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none">{spot.tag}</Badge>
                                                </div>
                                                <CardTitle className="text-xl">{spot.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-sm space-y-2">
                                                <p className="font-medium text-primary">{spot.type}</p>
                                                <p className="text-muted-foreground">{spot.desc}</p>
                                                <p className="text-xs flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-600" /> {spot.distance}</p>
                                                <p className="text-xs bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 p-2 rounded mt-2">🌤️ Best Time: {spot.bestTime}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Deep Dive Section */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold mb-8">Deep Dive: The Major Reservoirs</h2>
                            
                            <div className="space-y-12">
                                {/* Gangrel */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">1. Gangrel Dam (Bhowani)</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            Gangrel Dam, built across the mighty Mahanadi River, is the longest dam in Chhattisgarh. It's not just a dam; it's a massive eco-tourism hub. It supplies water to Bhilai Steel Plant and Raipur, but for tourists, it is the state's premier destination for water sports. The vast expanse of water looks almost like a sea, especially during the monsoon.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Route:</strong> Take NH30 towards Dhamtari. It's about a 2-hour drive from Raipur (90km) and slightly longer from Bhilai.</li>
                                                    <li><strong>Road Condition:</strong> The NH30 is a smooth, fast 4-lane highway, making the drive highly enjoyable.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Sailboat className="w-4 h-4" /> Activities & Costs</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Water Sports:</strong> Speed boating, jet skiing, and water surfing are actively run by local operators. Prices range from ₹200 to ₹1000 depending on the activity.</li>
                                                    <li><strong>Accommodation:</strong> The Bardiha Lake View Resort (run by CTB) offers excellent cottage stays right on the water's edge.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tandula */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">2. Tandula Dam</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            Located in Balod district, Tandula Dam is a massive, tranquil reservoir built at the confluence of the Tandula and Sukha rivers. Unlike Gangrel, Tandula is heavily favored for its peace and quiet. It's a favorite winter picnic spot for families from Bhilai and Durg, offering immense, uninterrupted views of the water meeting the horizon.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Route:</strong> Drive south from Bhilai towards Balod. The distance is roughly 60km.</li>
                                                    <li><strong>Time:</strong> Takes about 1.5 hours. The roads pass through scenic rural Chhattisgarh.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Info className="w-4 h-4" /> Crucial Info</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Food:</strong> Very limited commercialization. It is highly recommended to pack your own picnic lunch and water.</li>
                                                    <li><strong>Timings:</strong> Open all day, but best to visit in the morning or late afternoon for sunset views. Avoid staying after dark.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pro Travel Tips */}
                        <div className="mb-20">
                            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h2 className="text-3xl font-bold mb-6 relative z-10">Pro Picnic & Travel Tips</h2>
                                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Pack Your Trash</h4>
                                        <p className="text-blue-100 text-sm leading-relaxed">Most dams (especially Tandula and Kharkhara) are drinking water reservoirs. Always carry garbage bags and take your plastic waste back to the city with you.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="w-5 h-5" /> Sun Protection</h4>
                                        <p className="text-blue-100 text-sm leading-relaxed">Dams offer very little natural shade. If you are going for a day picnic, carry a large umbrella, caps, and sunscreen to avoid heat exhaustion.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Monsoon Safety</h4>
                                        <p className="text-blue-100 text-sm leading-relaxed">During heavy monsoons, dam gates are frequently opened. Never venture onto the rocks downstream or attempt to swim in unauthorized zones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section (AEO) */}
                        <div className="mb-20 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-semibold">Which is the best dam for a one-day picnic near Bhilai?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Tandula Dam (approx 60km away) is widely considered the best for a quick one-day family picnic. It is closer to Bhilai, less crowded than Gangrel, and offers beautiful, sea-like scenic views perfect for photography.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-semibold">Is water sports available at Gangrel Dam?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Yes! Gangrel Dam (Bhowani) is the official hub for water sports in Chhattisgarh. You can enjoy speed boating, jet skiing, water surfing, and even island camping arranged by local operators and the tourism board.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-semibold">How far is Gangrel Dam from Raipur?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Gangrel Dam is located near Dhamtari, which is approximately 90 kilometers from Raipur. The drive is very smooth as it follows NH30, usually taking around 2 hours.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-semibold">Are there food options at Tandula Dam?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Unlike Gangrel, Tandula Dam is not heavily commercialized. There are very few (if any) reliable food stalls or restaurants right at the dam. It is highly recommended to pack your own lunch and drinking water.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Related Categories (Hub Link back) */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-bold mb-4">Explore More Near Bhilai</h3>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/tour-packages-from-bhilai/picnic-spots" className="bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    🧺 Best Picnic Spots
                                </Link>
                                <Link to="/tour-packages-from-bhilai/waterfalls" className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    🌊 Majestic Waterfalls
                                </Link>
                                <Link to="/tour-packages-from-bhilai/hidden-gems" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    ✨ Hidden Gems
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DamsAndLakesNearBhilai;
