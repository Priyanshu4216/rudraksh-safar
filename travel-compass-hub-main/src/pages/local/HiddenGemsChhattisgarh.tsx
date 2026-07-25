import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Compass, AlertTriangle, Clock, Route, Leaf, ShieldAlert } from 'lucide-react';
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
                "name": "Hidden Gems & Offbeat Places in Chhattisgarh",
                "description": "Discover untouched valleys and secret forest trails near Bhilai and Raipur. A complete guide to Keshkal Ghati, Sitanadi, and offbeat travel.",
                "touristType": ["Adventure Seekers", "Backpackers", "Nature Lovers"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "112"
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
                        "name": "Is Keshkal Ghati safe for a road trip?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Keshkal Ghati is safe during the day and offers spectacular views. However, because it is a vital mountain pass with 12 sharp hair-pin bends, it often sees heavy truck traffic. Night driving should be avoided due to poor visibility and wildlife."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is the Sitanadi Wildlife Sanctuary located?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sitanadi is located in Dhamtari district, roughly 170 kilometers from Raipur. It is named after the Sitanadi river that originates in the sanctuary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are there undiscovered places near Bhilai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! While spots like Maitri Bagh are crowded, places like the ancient Deobaloda Temple (just 20km from Bhilai) or the deep forest buffer zones of Barnawapara remain vastly unexplored by mainstream tourists."
                        }
                    }
                ]
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
                <meta name="description" content="Explore hidden gems and offbeat destinations near Bhilai and Raipur, Chhattisgarh. Discover Keshkal Ghati, Sitanadi River, and uncrowded historical sites." />
                <meta name="keywords" content="hidden gems in chhattisgarh, offbeat places near raipur, keshkal ghati, sitanadi river, undiscovered places chhattisgarh, deobaloda temple" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/hidden-gems" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <LocationHero
                    city="Chhattisgarh"
                    title="Hidden Gems of Chhattisgarh"
                    subtitle="Step off the beaten path. Discover untouched valleys, ancient temples, and secret forest trails away from the crowds."
                    bgImage="https://images.unsplash.com/photo-1518182170546-076616fd43bf?auto=format&fit=crop&q=80&w=2000"
                />

                <div className="container mx-auto px-4 mt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Hidden Gems', path: '/tour-packages-from-bhilai/hidden-gems' }]} />
                </div>

                <section className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <LastUpdated className="mb-6" />

                        {/* TL;DR Section */}
                        <div className="mb-16 max-w-4xl mx-auto text-left">
                            <TLDRSection
                                title="Quick Summary: Offbeat Travel"
                                summary="Skip the crowded parks and generic dams. For history buffs, the 13th-century Deobaloda Temple is right next door in Bhilai. For road-trippers, the 12 hair-pin bends of Keshkal Ghati offer the most spectacular valley views in the state. Always pack food, download offline maps, and travel in groups when exploring these uncommercialized zones."
                                areasServed={["Keshkal Ghati", "Sitanadi", "Barnawapara Buffer", "Deobaloda Temple"]}
                            />
                        </div>

                        {/* Quick Cards Grid */}
                        <div className="mb-20">
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

                        {/* Deep Dive Section */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold mb-8">Deep Dive: True Hidden Gems</h2>
                            
                            <div className="space-y-12">
                                {/* Keshkal Ghati */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">1. Keshkal Ghati (The Gateway to Bastar)</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            Keshkal Ghati marks the dramatic entry into the dense, tribal Bastar region. The road suddenly winds through 12 sharp hair-pin bends, climbing the mountain. At the top, there is a viewpoint (near the Telin Sati temple) that offers a dizzying, endless view of the lush green valley below. It's a photographer's absolute dream, especially during the monsoon when clouds hang low in the valley.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Route:</strong> Drive straight down NH30 from Raipur via Dhamtari and Kanker. The Ghati starts just after Kanker.</li>
                                                    <li><strong>Distance:</strong> About 130 km from Raipur. The drive takes nearly 3 hours depending on truck traffic.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><ShieldAlert className="w-4 h-4" /> Crucial Info</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Traffic:</strong> It is a major commercial route. Be prepared to share the tight bends with heavy trucks.</li>
                                                    <li><strong>Safety:</strong> Do not park on the blind curves for selfies. Only stop at the designated temple viewpoint at the top.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sitanadi */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">2. Sitanadi River & Sanctuary</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            While everyone rushes to Barnawapara or Achanakmar, the Sitanadi Wildlife Sanctuary remains beautifully untouched. The Sitanadi river cuts right through it. While going deep inside requires forest department permissions, the peripheral river stretches offer incredible, quiet spots for bird watching and nature walks where you won't see another tourist for miles.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Route className="w-4 h-4" /> How to Reach</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Location:</strong> Dhamtari district, past Gangrel Dam.</li>
                                                    <li><strong>Drive:</strong> It's a rougher, more remote drive compared to mainstream spots. Taking an SUV is highly recommended.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <h4 className="font-semibold flex items-center gap-2 mb-3"><Leaf className="w-4 h-4" /> Eco-Tourism Rules</h4>
                                                <ul className="text-sm space-y-2 text-muted-foreground">
                                                    <li><strong>Leave No Trace:</strong> This is an incredibly fragile ecosystem. Pack absolutely all your garbage out.</li>
                                                    <li><strong>Permissions:</strong> Do not venture off the main roads without a local guide or forest ranger permission.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pro Travel Tips */}
                        <div className="mb-20">
                            <div className="bg-gradient-to-br from-emerald-700 to-teal-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h2 className="text-3xl font-bold mb-6 relative z-10">Pro Survival Tips for Offbeat Spots</h2>
                                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Navigation</h4>
                                        <p className="text-emerald-100 text-sm leading-relaxed">Hidden gems are hidden for a reason. You will lose network coverage. <strong>Download offline Google Maps</strong> and tell someone your itinerary before you leave.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="w-5 h-5" /> Daylight Rule</h4>
                                        <p className="text-emerald-100 text-sm leading-relaxed">Never travel on these remote routes after sunset. Not because of crime, but because of poor road lighting, trucks, and potential wildlife crossings.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Self-Sufficiency</h4>
                                        <p className="text-emerald-100 text-sm leading-relaxed">There are no dhabas or mechanics near Sitanadi or the deep buffer zones. Carry a spare tire, puncture kit, plenty of water, and food.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section (AEO) */}
                        <div className="mb-20 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-semibold">Is Keshkal Ghati safe for a road trip?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Yes, Keshkal Ghati is safe and incredibly scenic during the day. However, because it is the main highway to Bastar (NH30), it experiences heavy truck traffic navigating the 12 hair-pin bends. Drive carefully, stay in your lane, and absolutely avoid driving this stretch at night.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-semibold">Where is the Sitanadi Wildlife Sanctuary located?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Sitanadi is located in the Dhamtari district of Chhattisgarh, roughly 170 kilometers south of Raipur. It is named after the Sitanadi river that originates within the sanctuary limits.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-semibold">Are there any hidden historical places near Bhilai?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Yes! The Deobaloda Temple is a brilliant hidden gem just 20km from Bhilai. It is a 13th-century Shiva temple built by the Kalchuri dynasty, featuring incredibly intricate stone carvings and an ancient stepwell that most locals don't even know exists.
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
