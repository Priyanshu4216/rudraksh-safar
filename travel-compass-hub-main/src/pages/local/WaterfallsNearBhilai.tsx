import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Droplets, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LocationHero from '@/components/LocationHero';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

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
                "description": "Discover the most majestic waterfalls near Bhilai and Raipur, including Ghatarani, Jatmai, and Chitrakote. Perfect monsoon weekend getaways.",
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
                <meta name="description" content="Explore the best waterfalls in Chhattisgarh. Plan your trip to Ghatarani, Jatmai, and Chitrakote waterfalls from Bhilai and Raipur." />
                <meta name="keywords" content="waterfalls near bhilai, waterfalls near raipur, ghatarani waterfalls, jatmai, chitrakote, waterfalls in chhattisgarh, monsoon trip" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/waterfalls" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Bhilai & Raipur"
                    title="Majestic Waterfalls Near Bhilai & Raipur"
                    subtitle="Experience the raw power of nature. From the 'Niagara of India' to the spiritual falls of Ghatarani."
                    bgImage="https://images.unsplash.com/photo-1432405972618-fc608089b692?auto=format&fit=crop&q=80&w=2000"
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Waterfalls', path: '/tour-packages-from-bhilai/waterfalls' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <Droplets className="w-8 h-8 text-cyan-600" />
                                <h2 className="text-3xl font-bold">Top Waterfalls to Visit</h2>
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
