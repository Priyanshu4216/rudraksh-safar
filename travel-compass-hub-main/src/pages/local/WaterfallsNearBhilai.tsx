import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Droplets, AlertTriangle, Clock, Map, Info, Camera, Route } from 'lucide-react';
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

const WaterfallsNearBhilai = () => {
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
                "name": "Waterfalls Near Bhilai & Raipur",
                "description": "Discover the most majestic waterfalls near Bhilai and Raipur, including Ghatarani, Jatmai, and Chitrakote. Complete guide with timings and routes.",
                "touristType": ["Nature Lovers", "Adventure Seekers"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "215"
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
                        "name": "Which is the nearest waterfall to Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ghatarani and Jatmai are the nearest major waterfalls to Bhilai, located approximately 110 kilometers away. It takes about 2.5 hours to reach them by car."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Ghatarani waterfall safe during the monsoon?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "During peak monsoon (July and August), water levels at Ghatarani can rise suddenly. It is generally safe if you stay in designated viewing areas and do not attempt to cross the heavy streams or climb wet rocks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far is Chitrakote waterfall from Raipur?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Chitrakote waterfall is located in the Bastar district, roughly 280 kilometers from Raipur. The drive takes around 6 to 7 hours, making it ideal for a weekend overnight trip."
                        }
                    }
                ]
            }
        ]
    };

    const waterfalls = [
        {
            name: "Ghatarani Waterfalls",
            tag: "Most Popular",
            type: "Tiered Waterfall & Temple",
            desc: "A massive, beautiful waterfall nestled in dense forests, located near the Jatmai temple complex. Best visited during monsoon.",
            distance: "From Raipur: ~85 km | From Bhilai: ~110 km",
            bestTime: "July to December"
        },
        {
            name: "Jatmai Waterfalls",
            tag: "Nature & Heritage",
            type: "Waterfall + Temple",
            desc: "Located close to Ghatarani, this waterfall flows right next to the revered Jatmai Mata Temple. Great for family outings.",
            distance: "From Raipur: ~85 km | From Bhilai: ~110 km",
            bestTime: "August to October"
        },
        {
            name: "Chitrakote Waterfalls",
            tag: "Niagara of India",
            type: "Massive River Fall",
            desc: "The widest waterfall in India, spanning the Indravati river. It takes a full-day trip to reach but is an absolute must-see.",
            distance: "From Raipur: ~280 km (Bastar)",
            bestTime: "Monsoon (July to October) for full volume"
        },
        {
            name: "Tirathgarh Waterfalls",
            tag: "Photographer's Dream",
            type: "Block Waterfall",
            desc: "A stunning, white cascade that splits into multiple streams over limestone rocks. Located in the Kanger Valley National Park.",
            distance: "From Raipur: ~300 km (Near Jagdalpur)",
            bestTime: "October to February"
        },
        {
            name: "Amrit Dhara",
            tag: "Offbeat Gem",
            type: "Natural Cascade",
            desc: "A lesser-known, gorgeous waterfall on the Hasdeo river in Koriya district. Ideal for those wanting to escape the crowds.",
            distance: "From Raipur: ~320 km",
            bestTime: "Monsoon and Post-Monsoon"
        }
    ];

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-600 z-[100] origin-left"
                style={{ scaleX }}
            />
            <Helmet>
                <title>Top Waterfalls Near Bhilai & Raipur | Monsoon Trips 2024</title>
                <meta name="description" content="Explore the best waterfalls in Chhattisgarh. Detailed guide to Ghatarani, Jatmai, and Chitrakote waterfalls from Bhilai and Raipur including timings and routes." />
                <meta name="keywords" content="waterfalls near bhilai, waterfalls near raipur, ghatarani waterfalls, jatmai, chitrakote, waterfalls in chhattisgarh, monsoon trip, how to reach ghatarani" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/waterfalls" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Bhilai & Raipur"
                    title="Majestic Waterfalls Near Bhilai & Raipur"
                    subtitle="Experience the raw power of nature. The ultimate guide to Ghatarani, Chitrakote, and hidden cascades."
                    bgImage="https://images.unsplash.com/photo-1432405972618-fc608089b692?auto=format&fit=crop&q=80&w=2000"
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Waterfalls', path: '/tour-packages-from-bhilai/waterfalls' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <LastUpdated className="mb-6" />
                        
                        {/* TL;DR Section */}
                        <div className="mb-16 max-w-4xl mx-auto text-left">
                            <TLDRSection
                                title="Quick Summary: Waterfalls Guide"
                                summary="If you live in Bhilai or Raipur, Ghatarani and Jatmai (85-110km) are your best bets for a one-day monsoon trip. For a longer weekend getaway, drive down to Bastar (280km) to witness Chitrakote, the 'Niagara of India'. Always carry trekking shoes and avoid entering deep waters during July-August."
                                areasServed={["Ghatarani", "Jatmai", "Chitrakote", "Tirathgarh"]}
                            />
                        </div>

                        {/* Quick Cards Grid */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <Droplets className="w-8 h-8 text-cyan-600" />
                                <h2 className="text-3xl font-bold">Top Waterfalls at a Glance</h2>
                            </div>
                            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {waterfalls.map((spot, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Card className="h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/20 dark:border-white/10">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge variant="outline" className="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">{spot.tag}</Badge>
                                                </div>
                                                <CardTitle className="text-xl">{spot.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-sm space-y-2">
                                                <p className="font-medium text-primary">{spot.type}</p>
                                                <p className="text-muted-foreground">{spot.desc}</p>
                                                <p className="text-xs flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-600" /> {spot.distance}</p>
                                                <p className="text-xs bg-cyan-50 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-200 p-2 rounded mt-2">🌧️ Best Time: {spot.bestTime}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Deep Dive Section */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold mb-8">Deep Dive: The Big Three</h2>
                            
                            <div className="space-y-12">
                                {/* Ghatarani */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">1. Ghatarani Waterfalls</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            Ghatarani is arguably the most famous waterfall near Raipur and Bhilai. The water cascades down massive rock formations, creating natural pools at the bottom. The area is heavily forested, providing a very authentic jungle feel. Right next to the falls is the Jatmai Mata temple, making it a popular spot for both nature enthusiasts and pilgrims.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>From Raipur:</strong> Take the NH 30 towards Abhanpur, then take the state highway towards Rajim. From Rajim, it's about 25km.</li>
                                                    <li><strong>From Bhilai:</strong> Head to Raipur first, or take the Patan-Abhanpur bypass to skip city traffic.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Clock className="w-4 h-4" /> Crucial Info</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Timings:</strong> 8:00 AM to 6:00 PM (Best to leave before dark)</li>
                                                    <li><strong>Entry Fee:</strong> Minimal parking fee (approx ₹20-50).</li>
                                                    <li><strong>Food:</strong> Local vendors sell tea, maggi, and pakoras near the temple. No luxury dining available.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chitrakote */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">2. Chitrakote Waterfalls</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            Known globally as the "Niagara Falls of India", Chitrakote is the widest waterfall in the country. During the peak monsoon, the Indravati river turns violent and muddy red, expanding the falls to nearly 300 meters wide. In the winter, the water is calm and crystal clear, allowing for boating right up to the base of the falls.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Route:</strong> Drive from Raipur to Jagdalpur via NH30 (approx 6-7 hours). From Jagdalpur, the falls are another 38km away.</li>
                                                    <li><strong>Road Condition:</strong> Excellent 4-lane highway up to Dhamtari, followed by scenic, well-maintained 2-lane ghat roads through Keshkal.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Camera className="w-4 h-4" /> Crucial Info</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Timings:</strong> Open 24/7, but best viewed from sunrise to sunset.</li>
                                                    <li><strong>Activities:</strong> Boating available during winter and summer (approx ₹100 per person).</li>
                                                    <li><strong>Stay:</strong> Chhattisgarh Tourism Board (CTB) operates a fantastic resort right next to the falls.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pro Travel Tips */}
                        <div className="mb-20">
                            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h2 className="text-3xl font-bold mb-6 relative z-10">Pro Packing & Travel Tips</h2>
                                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Navigation</h4>
                                        <p className="text-cyan-100 text-sm leading-relaxed">Network coverage (Jio/Airtel) completely drops 10km before Ghatarani and Jatmai. <strong>Download offline Google Maps</strong> before leaving Raipur/Bhilai.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Footwear</h4>
                                        <p className="text-cyan-100 text-sm leading-relaxed">The moss-covered rocks near the waterfalls are incredibly slippery. Do not wear flip-flops. Wear sports shoes or dedicated trekking sandals.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Info className="w-5 h-5" /> Monsoon Safety</h4>
                                        <p className="text-cyan-100 text-sm leading-relaxed">In July and August, sudden flash floods are common in these rivers. Never camp right on the riverbed and listen to local guards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section (AEO) */}
                        <div className="mb-20 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-semibold">Which is the nearest waterfall to Bhilai?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Ghatarani and Jatmai are the nearest major waterfalls to Bhilai, located approximately 110 kilometers away. The drive usually takes about 2.5 hours via the Raipur-Abhanpur-Rajim route.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-semibold">Is Ghatarani waterfall safe during the monsoon?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        During peak monsoon (July and August), water levels at Ghatarani can rise suddenly. It is generally safe if you stay in designated viewing areas and do not attempt to cross the heavy streams or climb wet rocks. The local administration sometimes restricts entry to the lower pools during heavy rains.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-semibold">How far is Chitrakote waterfall from Raipur?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Chitrakote waterfall is located in the Bastar district, roughly 280 kilometers from Raipur. The drive takes around 6 to 7 hours. Due to the distance, it is highly recommended to make this a 2-day weekend trip rather than a rushed 1-day drive.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-semibold">Do I need to pay an entry fee for these waterfalls?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        There is no official "entry ticket" for most natural waterfalls in Chhattisgarh. However, local panchayats or forest departments usually charge a nominal parking fee (between ₹20 to ₹50 per car). For Tirathgarh, which is inside a National Park, standard park entry fees apply.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Safety Note */}
                        <div className="mt-12 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4 rounded-lg flex gap-3 text-sm mb-16">
                            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                            <p className="text-amber-800 dark:text-amber-200">
                                <strong>Safety Warning:</strong> During peak monsoon (July-August), water levels at Ghatarani and Chitrakote can rise suddenly. Never step onto slippery rocks near the edge, and always follow local authority guidelines.
                            </p>
                        </div>

                        {/* Related Categories (Hub Link back) */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-bold mb-4">Explore More Near Bhilai</h3>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/tour-packages-from-bhilai/picnic-spots" className="bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    🧺 Best Picnic Spots
                                </Link>
                                <Link to="/tour-packages-from-bhilai/dams-and-lakes" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    🌊 Dams & Lakes
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

export default WaterfallsNearBhilai;
