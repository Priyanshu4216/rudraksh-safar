import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Camera, ArrowRight, Sun, Droplets, Mountain, Trees, Calendar, Info, HelpCircle, Umbrella, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FAQsSection from '@/components/FAQsSection';

const WeekendGetawaysBhilai = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Weekend Getaways from Bhilai",
        "description": "Top weekend destinations near Bhilai including Kanha National Park, Chitrakote Falls, and Gangrel Dam. Expert travel planning by Rudraksh Safar.",
        "touristType": ["Family", "Nature Lovers", "Adventure Seekers"],
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "url": "https://rudrakshsafar.com",
            "telephone": "+919406182174"
        }
    };

    const destinations = [
        {
            name: "Kanha National Park",
            distance: "200 km",
            time: "4-5 hrs",
            type: "Wildlife Safari",
            icon: Trees,
            desc: "One of India's finest tiger reserves. Inspiration for 'The Jungle Book'. Famous for Royal Bengal Tigers and Barasingha.",
            bestTime: "Oct to Jun",
            tip: "Book safari permits 90 days in advance.",
            highlights: ["Tiger Safari", "Bamni Dadar Sunset", "Jungle Stay"]
        },
        {
            name: "Chitrakote Waterfalls",
            distance: "300 km",
            time: "6-7 hrs",
            type: "Nature Wonder",
            icon: Droplets,
            desc: "The 'Niagara of India'. Widest waterfall in India on Indravati river. Spectacular during monsoon.",
            bestTime: "Aug to Jan",
            tip: "Visit during sunrise/sunset for best photos.",
            highlights: ["Boating", "Camping", "Jagdalpur City"]
        },
        {
            name: "Gangrel Dam",
            distance: "80 km",
            time: "2 hrs",
            type: "Water Sports",
            icon: Sun,
            desc: "Perfect for quick day trips. Features a massive reservoir, water sports (jet ski), and island cottages.",
            bestTime: "Aug to Feb",
            tip: "Book island cottages for a unique stay.",
            highlights: ["Jet Skiing", "Island Camping", "Temple Visit"]
        },
        {
            name: "Mainpat",
            distance: "350 km",
            time: "7-8 hrs",
            type: "Hill Station",
            icon: Mountain,
            desc: "'Shimla of Chhattisgarh'. Lush green pastures, waterfalls, and a Tibetan settlement.",
            bestTime: "Sep to Mar",
            tip: "Try Tibetan food and buy woolens.",
            highlights: ["Tiger Point", "Monastery", "Ulta Pani"]
        },
        {
            name: "Amarkantak",
            distance: "250 km",
            time: "5-6 hrs",
            type: "Pilgrimage & Nature",
            icon: Mountain,
            desc: "Origin of rivers Narmada and Sone. A spiritual town surrounded by dense forests and waterfalls.",
            bestTime: "Year Round",
            tip: "Visit Narmada Udgam temple early morning.",
            highlights: ["Narmada Temple", "Kapil Dhara Fall", "Forests"]
        },
        {
            name: "Bhoramdeo",
            distance: "130 km",
            time: "3 hrs",
            type: "Heritage",
            icon: Camera,
            desc: "'Khajuraho of Chhattisgarh'. Ancient Shiva temple with intricate erotic sculptures in Satpura range.",
            bestTime: "Oct to Mar",
            tip: "Drive through Chilpi Ghati is scenic.",
            highlights: ["Ancient Temple", "Tribal Culture", "Scenic Drive"]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Weekend Getaways from Bhilai | Short Trips to Kanha, Amarkantak & Chitrakote</title>
                <meta name="description" content="Best weekend trips near Bhilai & Raipur. Plan 2-3 day holidays to Kanha, Mainpat, Gangrel, and Amarkantak. Affordable packages with cab and hotel." />
                <meta name="keywords" content="weekend getaways bhilai, short trips from bhilai, picnic spots near durg, kanha tour package, chitrakote trip, amarkantak packages" />
                <link rel="canonical" href="https://rudrakshsafar.com/weekend-getaways-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">Short Breaks & Road Trips</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Weekend Getaways from <span className="text-primary">Bhilai</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Recharge with a quick 2-3 day trip. Explore hills, waterfalls, and jungles just a few hours drive away.
                        </p>

                        {/* TL;DR Summary */}
                        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6 shadow-sm text-left mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">Why Plan a Weekend Getaway?</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        Weekend getaways are short trips (2-3 days) designed for quick relaxation without needing long leave.
                                        Destinations like <strong>Kanha, Amarkantak, and Gangrel</strong> offer a perfect mix of nature and adventure within <strong>5-8 hours drive</strong> from Bhilai.
                                        Rudraksh Safar provides complete packages including <strong>cab, hotel, and sightseeing</strong> for a hassle-free break.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button size="lg" asChild className="text-lg px-8 shadow-lg">
                                <a href="https://wa.me/919406182174?text=Hi, I want to plan a weekend trip from Bhilai" target="_blank" rel="noopener noreferrer">
                                    <Car className="w-5 h-5 mr-2" /> Plan My Trip
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Top Destinations */}
                <section id="destinations" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Top Weekend Destinations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-muted group h-full flex flex-col">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                <dest.icon className="w-6 h-6" />
                                            </div>
                                            <Badge variant="secondary">{dest.type}</Badge>
                                        </div>
                                        <CardTitle className="text-xl">{dest.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1">
                                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Car className="w-4 h-4" /> {dest.distance}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {dest.time}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-6 flex-1">
                                            {dest.desc}
                                        </p>
                                        <div className="bg-muted/50 p-3 rounded-lg text-sm mb-4">
                                            <p><span className="font-semibold">Best Time:</span> {dest.bestTime}</p>
                                            <p className="italic text-xs mt-1 text-muted-foreground">Tip: {dest.tip}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {dest.highlights.map((h, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider bg-background border px-2 py-1 rounded">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seasonal Guide */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Best Time to Plan</h2>
                        <div className="max-w-3xl mx-auto bg-background rounded-xl overflow-hidden shadow-sm border">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50">
                                        <TableHead>Season</TableHead>
                                        <TableHead>Months</TableHead>
                                        <TableHead>Best Destinations</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-orange-500 flex items-center gap-2"><Sun className="w-4 h-4" /> Summer</TableCell>
                                        <TableCell>Mar - Jun</TableCell>
                                        <TableCell>Mainpat (Hill Station), Gangrel (Water Sports), Amarkantak (Forests)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-blue-500 flex items-center gap-2"><Umbrella className="w-4 h-4" /> Monsoon</TableCell>
                                        <TableCell>Jul - Sep</TableCell>
                                        <TableCell>Chitrakote (Full flow), Teerathgarh, Amarkantak</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-green-600 flex items-center gap-2"><Trees className="w-4 h-4" /> Winter</TableCell>
                                        <TableCell>Oct - Feb</TableCell>
                                        <TableCell>Kanha/Pench (Safari), Sirpur (Heritage), Mainpat</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* Planning & Safety */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">What's Included?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><Camera className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Transport:</strong> Comfortable AC Cab (Sedan/SUV) from your doorstep.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><Camera className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Stay:</strong> Pre-booked Hotels/Resorts based on budget.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><Camera className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Sightseeing:</strong> Local sightseeing as per itinerary.</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Travel Smart Tips</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-amber-100 p-1 rounded-full text-amber-600"><Shield className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Start Early:</strong> Leave by 6 AM to maximize time at destination.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-amber-100 p-1 rounded-full text-amber-600"><Shield className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Pre-book:</strong> Hotels in Kanha/Mainpat fill up fast on weekends.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-amber-100 p-1 rounded-full text-amber-600"><Shield className="w-4 h-4" /></div>
                                        <p className="text-sm"><strong>Carry Cash:</strong> Network can be poor in forest areas.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    title="Weekend Getaway FAQs"
                    description="Common questions about planning short trips from Bhilai."
                    faqs={[
                        {
                            question: "What is the best weekend getaway for families?",
                            answer: "For families, Gangrel Dam (water sports & resort) and Amarkantak (temples & nature) are excellent choices. They offer safe accommodation and activities for all ages."
                        },
                        {
                            question: "Which destination is closest to Bhilai?",
                            answer: "Gangrel Dam is the closest, just about 1.5 - 2 hours drive (80 km). Sirpur Heritage site is also very close (90 km)."
                        },
                        {
                            question: "Do needed safari permits for Kanha?",
                            answer: "Yes! Kanha safari permits are mandatory and limited. For weekend dates, we highly recommend booking at least 60-90 days in advance."
                        },
                        {
                            question: "Is it safe to drive to these places?",
                            answer: "Yes, roads to all listed destinations are generally good. However, driving in forest areas (Kanha/Bhoramdeo) should be avoided after sunset due to wildlife movement."
                        },
                        {
                            question: "Can I customize a weekend package?",
                            answer: "Absolutely. You can choose your vehicle (Sedan/SUV), hotel category (Budget/Luxury), and duration (1 Night or 2 Nights). We tailor it to your needs."
                        }
                    ]}
                />

                {/* CTA */}
                <section className="py-20 bg-primary/5 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Need a Quick Break?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let us plan your perfect weekend escape. Cab, Hotel, and Peace of Mind included.
                        </p>
                        <Button size="lg" className="text-lg px-8" asChild>
                            <a href="https://wa.me/919406182174?text=I want to book a weekend getaway">
                                <Car className="w-5 h-5 mr-2" /> Book Now
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-background py-8 border-t">
                    <div className="container mx-auto px-4 text-center opacity-70">
                        <p className="text-xs text-muted-foreground">
                            *Package availability and prices are subject to seasonal changes. Wildlife safari permits are subject to forest department rules.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WeekendGetawaysBhilai;
