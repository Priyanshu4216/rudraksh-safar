import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Car, Clock, Users, Coffee, Camera, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WeekendGetawaysRaipur = () => {
    const shortTrips = [
        { name: "Pachmarhi (MP)", dist: "350 km", time: "8-9 Hours", type: "Hill Station", desc: "Queen of Satpura. Waterfalls, caves & viewpoints.", img: "https://loremflickr.com/800/600/pachmarhi,forest" },
        { name: "Amarkantak", dist: "200 km", time: "4-5 Hours", type: "Pilgrimage/Nature", desc: "Source of Narmada River. Lush forests & temples.", img: "https://loremflickr.com/800/600/amarkantak,temple" },
        { name: "Kanha National Park", dist: "200 km", time: "4-5 Hours", type: "Wildlife", desc: "Tiger Reserve. Jungle Safari & Nature Trails.", img: "https://loremflickr.com/800/600/tiger,jungle" },
        { name: "Chitrakote Falls", dist: "280 km", time: "6 Hours", type: "Adventure", desc: "Niagara of India. Monsoon special destination.", img: "https://loremflickr.com/800/600/waterfall,india" },
    ];

    const longTrips = [
        { name: "Visakhapatnam", dist: "Overnight Train", time: "10 Hours", type: "Beach", desc: "Nearest beach destination. Araku Valley & submarine museum.", img: "https://loremflickr.com/800/600/visakhapatnam,beach" },
        { name: "Nagpur + Pench", dist: "280 km", time: "5 Hours", type: "City + Wildlife", desc: "Tiger safari in Pench & shopping in Nagpur.", img: "https://loremflickr.com/800/600/tiger,pench" },
    ];

    return (
        <>
            <Helmet>
                <title>Best Weekend Getaways from Raipur | Short Trips & Road Trips</title>
                <meta name="description" content="Plan perfect weekend trips from Raipur. Top destinations under 300km: Pachmarhi, Kanha, Amarkantak & Chitrakote. Book hotels & cabs with Rudraksh Safar." />
                <meta name="keywords" content="weekend getaways from raipur, places to visit near raipur, raipur to pachmarhi package, kanha tour from raipur, short trips from raipur" />
                <link rel="canonical" href="https://rudrakshsafar.com/weekend-getaways-raipur" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-green-50 dark:bg-green-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <Badge variant="outline" className="mb-4 border-green-600 text-green-700">Refresh & Recharge</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Perfect Weekend Trips from <span className="text-green-600">Raipur</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Escape the city chaos. Discover waterfalls, tigers, and hills just a few hours drive away from Raipur.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                                <a href="https://wa.me/919406182174?text=Suggest weekend trips from Raipur">Plan My Getaway</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Filters / Distances */}
                <section className="py-12 border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-background rounded-xl shadow-sm border">
                                <Car className="w-10 h-10 text-green-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">Under 200 KM</h3>
                                <p className="text-sm text-muted-foreground">Kanha, Amarkantak, Sirpur</p>
                            </div>
                            <div className="p-6 bg-background rounded-xl shadow-sm border">
                                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">200 - 500 KM</h3>
                                <p className="text-sm text-muted-foreground">Pachmarhi, Chitrakote, Mainpat</p>
                            </div>
                            <div className="p-6 bg-background rounded-xl shadow-sm border">
                                <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">Overnight Journey</h3>
                                <p className="text-sm text-muted-foreground">Visakhapatnam, Hyderabad, Puri</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations Grid - Short Trips */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-bold">Road Trips (Under 6 Hours)</h2>
                            <Button variant="ghost" asChild><a href="https://wa.me/919406182174?text=Car rental for weekend trip">Need a Cab? <ArrowRight className="w-4 h-4 ml-2" /></a></Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {shortTrips.map((trip, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                                    <div className="h-48 bg-muted relative">
                                        <img src={trip.img} alt={trip.name} className="w-full h-full object-cover" />
                                        <Badge className="absolute top-2 left-2 bg-white/90 text-black">{trip.dist}</Badge>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-lg mb-1">{trip.name}</h3>
                                        <p className="text-sm font-medium text-green-600 mb-2">{trip.type}</p>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                            <Clock className="w-3 h-3" /> {trip.time} Drive
                                        </div>
                                        <p className="text-sm text-muted-foreground">{trip.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Destinations Grid - Long Trips */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10">Long Weekend Specials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            {longTrips.map((trip, index) => (
                                <Card key={index} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-all">
                                    <div className="w-full md:w-2/5 h-48 md:h-auto bg-muted">
                                        <img src={trip.img} alt={trip.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
                                        <h3 className="font-bold text-xl mb-2">{trip.name}</h3>
                                        <div className="flex gap-3 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {trip.dist}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {trip.time}</span>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{trip.desc}</p>
                                        <Button size="sm" variant="secondary" className="w-fit" asChild>
                                            <a href="https://wa.me/919406182174?text=Book hotel for Vizag trip">Check Hotels</a>
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who is it for? */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Who are these trips for?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Coffee className="w-8 h-8 text-pink-600" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Couples</h3>
                                <p className="text-muted-foreground">Romantic resorts in Pachmarhi or serene beaches in Vizag.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Families</h3>
                                <p className="text-muted-foreground">Kid-friendly resorts in Kanha with swimming pools and safari.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Camera className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Friends</h3>
                                <p className="text-muted-foreground">Camping in Amarkantak or trekking adventure in Mainpat.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Need a Quick Break?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            We arrange Cabs, Hotels, and Jungle Safaris. Just pack your bags and go!
                        </p>
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-green-800">
                            <a href="https://wa.me/919406182174?text=Book weekend trip from Raipur">
                                Book Weekend Trip
                            </a>
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WeekendGetawaysRaipur;
