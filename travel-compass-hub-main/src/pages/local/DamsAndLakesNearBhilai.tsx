import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Droplets, Sailboat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LocationHero from '@/components/LocationHero';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

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
                "description": "Discover the most beautiful dams and lakes near Bhilai, including Tandula Dam, Gangrel Dam, and Kuthrel Dam. Ideal for picnics and watersports.",
                "touristType": ["Family", "Nature Lovers"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.7",
                    "reviewCount": "180"
                }
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
                <meta name="description" content="Plan a day trip to the best dams and lakes near Bhilai and Raipur. Explore Tandula Dam, Gangrel Dam for water sports, and hidden lakes." />
                <meta name="keywords" content="dams near bhilai, lakes near raipur, tandula dam, gangrel dam water sports, kuthrel dam, murrum silli" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/dams-and-lakes" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Bhilai & Raipur"
                    title="Scenic Dams & Lakes Near Bhilai"
                    subtitle="Escape to massive reservoirs and tranquil lakes. Perfect for boating, water sports, and sunset views."
                    bgImage="https://images.unsplash.com/photo-1543884351-4c9df4ff0b0b?auto=format&fit=crop&q=80&w=2000" // Beautiful dam/lake image
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Dams & Lakes', path: '/tour-packages-from-bhilai/dams-and-lakes' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <Sailboat className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl font-bold">Top Dams & Lakes to Visit</h2>
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
