import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Camera, ArrowRight, Sun, Droplets, Mountain, Trees, Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
            distance: "200 km from Bhilai",
            time: "4-5 hours drive",
            type: "Wildlife Safari",
            icon: Trees,
            desc: "Kanha Tiger Reserve is one of India's finest wildlife sanctuaries. Famous for its significant population of Royal Bengal Tigers, Indian leopards, and the sloth bear. It was the inspiration for Rudyard Kipling's 'The Jungle Book'.",
            bestTime: "October to June (Park closed in Monsoon)",
            tip: "Book your jungle safari permits at least 90 days in advance, especially for weekends.",
            highlights: ["Tiger Safari", "Bamni Dadar Sunset Point", "Bird Watching"]
        },
        {
            name: "Chitrakote Waterfalls",
            distance: "300 km from Bhilai",
            time: "6-7 hours drive",
            type: "Nature Wonder",
            icon: Droplets,
            desc: "Often called the 'Niagara of India', Chitrakote is the widest waterfall in India. Located on the Indravati river in Bastar district, it offers a spectacular view, especially during and after the monsoon season.",
            bestTime: "August to January (For full flow)",
            tip: "Visit during sunrise or sunset for mesmerizing photography. Boating near the falls is a must-do.",
            highlights: ["Boating", "Camping", "Jagdalpur City Tour"]
        },
        {
            name: "Gangrel Dam",
            distance: "80 km from Bhilai",
            time: "1.5-2 hours drive",
            type: "Leisure & Water Sports",
            icon: Sun,
            desc: "Gangrel Dam (Ravishankar Sagar) is a perfect spot for a quick day trip or an overnight stay. The Chhattisgarh Tourism Board operates a resort here offering water sports like jet-skiing and speed boating.",
            bestTime: "August to February",
            tip: "Book the island cottages for a unique stay experience right in the middle of the reservoir.",
            highlights: ["Jet Skiing", "Island Camping", "Angharn Motim Mata Temple"]
        },
        {
            name: "Mainpat",
            distance: "350 km from Bhilai",
            time: "7-8 hours drive",
            type: "Hill Station",
            icon: Mountain,
            desc: "Known as the 'Shimla of Chhattisgarh', Mainpat is a charming hill station with lush green pastures, waterfalls, and a significant Tibetan settlement. It's famous for its 'Ulta Pani' where water seems to flow upwards.",
            bestTime: "September to March",
            tip: "Don't miss the Tibetan Refugee Camp to buy authentic woolens and try Tibetan food.",
            highlights: ["Tiger Point", "Tibetan Monastery", "Ulta Pani"]
        },
        {
            name: "Sirpur Heritage Site",
            distance: "90 km from Bhilai",
            time: "2 hours drive",
            type: "Historical",
            icon: Camera,
            desc: "A treasure trove for history buffs, Sirpur helps you travel back in time to the 5th-8th century. It houses ancient Buddhist viharas, Hindu temples (Laxman Temple), and Jain monuments showcasing exquisite architecture.",
            bestTime: "November to March",
            tip: "Ideally hire a local guide to understand the rich history of the excavated sites.",
            highlights: ["Laxman Temple", "Buddhist Viharas", "Sirpur Festival (Feb)"]
        },
        {
            name: "Bhoramdeo Temple",
            distance: "130 km from Bhilai",
            time: "3 hours drive",
            type: "Culture & Architecture",
            icon: MapPin,
            desc: "Situated amidst the Satpura ranges, the Bhoramdeo Temple is dedicated to Lord Shiva. Its intricate erotic sculptures have earned it the title 'Khajuraho of Chhattisgarh'. The drive through the Chilpi Ghati is equally scenic.",
            bestTime: "October to March",
            tip: "Combine this trip with a visit to the nearby Saroda Dadar dam for a peaceful sunset.",
            highlights: ["Ancient Architecture", "Chilpi Ghati Drive", "Tribal Culture"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Top Weekend Getaways from Bhilai | Short Trips to Kanha, Chitrakote & More</title>
                <meta name="description" content="Plan your perfect weekend getaway from Bhilai. Explore Kanha National Park, Chitrakote Falls, Mainpat, and Gangrel Dam with Rudraksh Safar. Cab & Hotel booking available." />
                <meta name="keywords" content="weekend getaways from bhilai, kanha tour package from bhilai, chitrakote trip cost, gangrel dam resorts, picnic spots near durg bhilai, hill stations near bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/weekend-getaways-bhilai" />

                <meta property="og:title" content="Best Weekend Getaways from Bhilai | Rudraksh Safar" />
                <meta property="og:description" content="Escape the city! Discover top picnic spots and weekend trips near Bhilai like Kanha, Mainpat & Chitrakote." />
                <meta property="og:image" content="https://rudrakshsafar.com/og-image.png" />
                <meta property="og:url" content="https://rudrakshsafar.com/weekend-getaways-bhilai" />
                <meta name="geo.region" content="IN-CT" />
                <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10" />
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">Explore Chhattisgarh & Beyond</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                                Weekend Getaways from <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground/80">Bhilai</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                                Need a break from the routine? Discover breathtaking waterfalls, serene jungles, and cool hill stations just a drive away from Bhilai & Durg.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild className="text-lg px-8 h-12 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                    <a href="https://wa.me/919406182174?text=Hi, I want to plan a weekend trip from Bhilai" target="_blank" rel="noopener noreferrer">
                                        <Car className="w-5 h-5 mr-2" />
                                        Plan My Trip
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12 hover:bg-muted/50">
                                    <a href="#destinations">View Destinations</a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section id="destinations" className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                        >
                            {destinations.map((dest, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:border-primary/40 group overflow-hidden border-muted">
                                        <CardContent className="p-0 flex-1 flex flex-col">
                                            {/* Icon Header */}
                                            <div className="p-6 pb-0 flex items-start justify-between mb-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <dest.icon className="w-7 h-7 text-primary" />
                                                </div>
                                                <Badge variant="outline" className="font-medium px-3 py-1 text-xs uppercase tracking-wider bg-background/50 backdrop-blur-sm">{dest.type}</Badge>
                                            </div>

                                            <div className="px-6">
                                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                    {dest.name}
                                                </h3>

                                                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-5 bg-muted/30 p-3 rounded-lg border border-muted/50">
                                                    <div className="flex items-center gap-2">
                                                        <Car className="w-4 h-4 text-primary" />
                                                        <span>{dest.distance}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-primary" />
                                                        <span>{dest.time}</span>
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                                    {dest.desc}
                                                </p>
                                            </div>

                                            <div className="mt-auto bg-muted/10 p-6 space-y-4 border-t">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                                        <Calendar className="w-4 h-4 text-primary" />
                                                        Best Time to Visit
                                                    </div>
                                                    <p className="text-sm text-muted-foreground pl-6">{dest.bestTime}</p>
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                                        <Info className="w-4 h-4 text-primary" />
                                                        Local Tip
                                                    </div>
                                                    <p className="text-sm text-muted-foreground pl-6 italic">{dest.tip}</p>
                                                </div>

                                                <div className="pt-4 flex flex-wrap gap-2">
                                                    {dest.highlights.map((tag, i) => (
                                                        <span key={i} className="text-xs bg-background border px-2 py-1 rounded-md text-foreground/80 shadow-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary/5 border-y border-primary/10">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Ready to Hit the Road?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                                Whether you need a <strong>Luxury Cab</strong> for a comfortable drive, a
                                <strong>Resort Booking</strong> at Gangrel, or a complete <strong>Safari Permit</strong> for Kanha
                                – Rudraksh Safar handles it all.
                            </p>
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I need details about weekend trips" target="_blank" rel="noopener noreferrer">
                                    Contact Us for Custom Packages <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Internal Linking */}
                <section className="py-12 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex flex-wrap justify-center gap-3 text-sm font-medium">
                            <Link to="/travel-agent-bhilai" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                Travel Agent in Bhilai
                            </Link>
                            <Link to="/tour-packages-bhilai" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                Tour Packages from Bhilai
                            </Link>
                            <Link to="/domestic-packages" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                India Tour Packages
                            </Link>
                            <Link to="/international-packages" className="px-4 py-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                International Packages
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WeekendGetawaysBhilai;
