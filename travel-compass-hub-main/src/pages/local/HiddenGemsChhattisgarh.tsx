import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Compass, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LocationHero from '@/components/LocationHero';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const HiddenGemsChhattisgarh = () => {
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
                "name": "Hidden Gems in Chhattisgarh",
                "description": "Discover offbeat and hidden gem tourist destinations in Chhattisgarh, including Keshkal Ghati, Sitanadi River, and Barnawapara.",
                "touristType": ["Adventure Seekers", "Backpackers", "Nature Lovers"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "112"
                }
            }
        ]
    };

    const spots = [
        {
            name: "Keshkal Ghati",
            tag: "Breathtaking Views",
            type: "Valley & Viewpoints",
            desc: "A winding mountain pass with 12 sharp curves, offering breathtaking panoramic views of the dense Bastar forests.",
            distance: "From Raipur: ~130 km",
            bestTime: "Monsoon and Winter"
        },
        {
            name: "Sitanadi River Stretch",
            tag: "Eco-Tourism",
            type: "River & Forest",
            desc: "A pristine river stretch running through the Sitanadi Wildlife Sanctuary. Perfect for bird watching and untouched nature.",
            distance: "From Raipur: ~170 km",
            bestTime: "November to March"
        },
        {
            name: "Barnawapara Buffer Zone",
            tag: "Wildlife Proximity",
            type: "Forest Outskirts",
            desc: "Quiet, peaceful spots on the outskirts of the sanctuary. Great for a peaceful lunch and occasional wildlife spotting.",
            distance: "From Raipur: ~100 km",
            bestTime: "Winter"
        },
        {
            name: "Deobaloda Temple",
            tag: "Ancient History",
            type: "Heritage Site",
            desc: "A very old, intricately carved Shiva temple dating back to the Kalchuri period, featuring a historic stepwell.",
            distance: "From Bhilai: ~20 km",
            bestTime: "All Year"
        },
        {
            name: "Pamed Wild Trails",
            tag: "Extreme Adventure",
            type: "Deep Forest Zone",
            desc: "For true adventure lovers. Deep nature exploration in an uncommercialized zone. Visit with caution and local guides.",
            distance: "From Raipur: ~450 km (Bijapur)",
            bestTime: "Winter"
        }
    ];

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-[100] origin-left"
                style={{ scaleX }}
            />
            <Helmet>
                <title>Hidden Gems & Offbeat Places in Chhattisgarh | Secret Escapes</title>
                <meta name="description" content="Explore hidden gems and offbeat destinations near Bhilai and Raipur, Chhattisgarh. Discover Keshkal Ghati, Sitanadi River, and more." />
                <meta name="keywords" content="hidden gems in chhattisgarh, offbeat places near raipur, keshkal ghati, sitanadi river, undiscovered places chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/hidden-gems" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Chhattisgarh"
                    title="Hidden Gems of Chhattisgarh"
                    subtitle="Step off the beaten path. Discover untouched valleys, ancient temples, and secret forest trails."
                    bgImage="https://images.unsplash.com/photo-1518182170546-076616fd43bf?auto=format&fit=crop&q=80&w=2000" // Moody forest / hidden gem image
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Hidden Gems', path: '/tour-packages-from-bhilai/hidden-gems' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <Compass className="w-8 h-8 text-emerald-600" />
                                <h2 className="text-3xl font-bold">Unexplored Destinations</h2>
                            </div>
                            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {spots.map((spot, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Card className="h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/20 dark:border-white/10">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge variant="outline" className="text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-none">{spot.tag}</Badge>
                                                </div>
                                                <CardTitle className="text-xl">{spot.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-sm space-y-2">
                                                <p className="font-medium text-primary">{spot.type}</p>
                                                <p className="text-muted-foreground">{spot.desc}</p>
                                                <p className="text-xs flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-600" /> {spot.distance}</p>
                                                <p className="text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 p-2 rounded mt-2">✨ Best Time: {spot.bestTime}</p>
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
                                <Link to="/tour-packages-from-bhilai/dams-and-lakes" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    🌊 Dams & Lakes
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

export default HiddenGemsChhattisgarh;
