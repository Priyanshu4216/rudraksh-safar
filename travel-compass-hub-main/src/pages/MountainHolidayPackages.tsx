import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mountain, CloudSnow, Sun, Wind, Map, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MountainHolidayPackages = () => {
    const destinations = [
        { name: "Kashmir", tag: "Heaven on Earth", title: "Srinagar & Gulmarg", desc: "Houseboat stays, Shikara rides on Dal Lake, and snow activities in Gulmarg.", link: "/package/kashmir" },
        { name: "Manali", tag: "Crowd Favorite", title: "Manali & Solang", desc: "Perfect blend of adventure and peace. Visit Rohtang pass and Hadimba temple.", link: "/package/manali" },
        { name: "Leh Ladakh", tag: "Adventure", title: "Leh, Nubra, Pangong", desc: "High passes, monasteries, and the famous 3-Idiots lake. For the brave hearts.", link: "/package/ladakh" },
        { name: "Shimla", tag: "Colonial Charm", title: "Shimla & Kufri", desc: "The Queen of Hills. Walk down the Mall road and enjoy colonial architecture.", link: "/package/shimla-manali" },
        { name: "Sikkim", tag: "North East Gem", title: "Gangtok & Nathula", desc: "Experience organic living, high altitude lakes, and view of Kanchenjunga.", link: "/package/gangtok-darjeeling" },
        { name: "Uttarakhand", tag: "Devbhoomi", title: "Nainital & Mussoorie", desc: "Lake city vibes in Nainital and waterfalls in Mussoorie.", link: "/package/haridwar-rishikesh" },
    ];

    return (
        <>
            <Helmet>
                <title>Best Mountain Holiday Packages | Kashmir, Manali & Ladakh Trips</title>
                <meta name="description" content="Answer the call of the mountains. Best deals on Kashmir tour packages, Manali volvo trips, and Ladakh bike expeditions. Guided tours with safe hotels." />
                <meta name="keywords" content="mountain holiday packages, hill station tour packages, kashmir trip cost, manali tour package for couple, ladakh tour packages" />
                <link rel="canonical" href="https://rudrakshsafar.com/mountain-holiday-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Mountain className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
                            The <span className="text-indigo-600">Mountains</span> are Calling
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Breathe in the crisp air. Witness snow-capped peaks and serene valleys.
                        </p>
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                            <a href="#hills">Explore Hills</a>
                        </Button>
                    </div>
                </section>

                {/* Experience Types */}
                <section className="py-12 border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base font-medium text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                                <CloudSnow className="w-8 h-8 text-sky-400" />
                                <span>Snow Activities</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Wind className="w-8 h-8 text-teal-400" />
                                <span>Fresh Air</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Camera className="w-8 h-8 text-pink-400" />
                                <span>Scenic Views</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Map className="w-8 h-8 text-orange-400" />
                                <span>Trekking</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section id="hills" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Top Hill Stations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Link to={dest.link} key={index} className="block group">
                                    <Card className="overflow-hidden hover:shadow-xl transition-all h-full">
                                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 flex items-center justify-center">
                                            <Mountain className="w-24 h-24 text-indigo-300 dark:text-indigo-800 opacity-50" />
                                            <div className="absolute inset-0 flex items-end p-6">
                                                <div>
                                                    <Badge className="mb-2 bg-white/20 text-indigo-900 dark:text-indigo-100 dark:bg-black/40 backdrop-blur-md border-0">{dest.tag}</Badge>
                                                    <h3 className="text-2xl font-bold text-indigo-950 dark:text-indigo-50">{dest.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h4 className="font-bold text-lg mb-2 text-indigo-600">{dest.title}</h4>
                                            <p className="text-muted-foreground mb-6 line-clamp-2">{dest.desc}</p>
                                            <Button className="w-full" variant="secondary">
                                                View Itinerary
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-indigo-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready for an Adventure?</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Pack your woolens and get ready for the trip of a lifetime.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-indigo-950">
                                <a href="https://wa.me/919406182174?text=Hello Rudraksh Safar, I am interested in a Mountain Holiday Trip. Please share the itinerary and cost details for Kashmir/Manali/Ladakh packages.">
                                    Book Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default MountainHolidayPackages;
