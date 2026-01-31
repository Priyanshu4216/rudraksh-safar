import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Anchor, MapPin, Calendar, Star, Info, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CruiseLoader from '@/components/CruiseLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CruiseBooking = () => {
    const [loading, setLoading] = useState(true);

    const partners = [
        { name: "Cordelia Cruises" },
        { name: "Holland America Line" },
        { name: "MSC Cruises" },
        { name: "Norwegian Cruise Line" },
        { name: "Disney Cruise Line" },
        { name: "Genting Dream" },
    ];

    const experiences = [
        {
            title: "Goa Dinner Cruise",
            location: "Goa, India",
            desc: "Experience the vibrant nightlife of Goa on a luxury dinner cruise. Live music, dance, and buffet dinner on the Mandovi River.",
            tags: ["Dinner", "Party", "Couples"]
        },
        {
            title: "Luxury Yacht Charter",
            location: "Pattaya, Thailand",
            desc: "Private yacht parties in Pattaya. Island hopping, snorkeling, and sunset views with premium hospitality.",
            tags: ["Private", "Luxury", "Snorkeling"]
        }
    ];

    return (
        <>
            <AnimatePresence>
                {loading && <CruiseLoader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Helmet>
                        <title>Luxury Cruise Booking | Cordelia, Disney, MSC & Yacht Parties</title>
                        <meta name="description" content="Book premium cruise holidays with Cordelia, Holland America, Disney & more. Exclusive Goa dinner cruises and Pattaya private yacht charters available." />
                        <meta name="keywords" content="cruise booking, cordelia cruise, goa dinner cruise, pattaya yacht party, disney cruise india, luxury cruise holidays" />
                        <link rel="canonical" href="https://rudrakshsafar.com/cruise-booking" />
                    </Helmet>

                    <Navbar />

                    <main className="min-h-screen bg-background">
                        {/* Hero Section */}
                        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-blue-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

                            <div className="container relative z-10 text-center px-4">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-white/20 text-lg py-1 px-6 rounded-full">
                                        <Ship className="w-4 h-4 mr-2" />
                                        Premium Ocean Voyages
                                    </Badge>
                                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                                        Sail Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Luxury</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                        Discover the world's most breathtaking destinations aboard the finest liners. From the Arabian Sea to the Caribbean.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-xl py-8 px-10 rounded-full shadow-xl hover:shadow-white/20 transition-all font-bold" asChild>
                                            <a href="https://wa.me/919406182174?text=I want to book a cruise">Start Planning</a>
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        {/* Our Partners */}
                        <section className="py-20 bg-muted/30">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-serif font-bold mb-4">Official Booking Partners</h2>
                                    <p className="text-muted-foreground">We are authorized booking agents for the world's leading cruise lines.</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
                                    {partners.map((partner, index) => (
                                        <div key={index} className="flex items-center justify-center p-4 w-full text-center font-bold text-lg text-muted-foreground hover:text-primary transition-all duration-300 bg-background/50 rounded-lg border border-border/50">
                                            {partner.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Special Experiences */}
                        <section className="py-24">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                                    <div>
                                        <Badge variant="outline" className="mb-2 border-blue-500 text-blue-500">Exclusive Experiences</Badge>
                                        <h2 className="text-4xl font-bold font-serif">Curated Ocean Adventures</h2>
                                    </div>
                                    <p className="text-muted-foreground max-w-md text-right md:text-left">
                                        Beyond standard packages. We offer exclusive yacht charters and party cruises for special occasions.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                        >
                                            <Card className="group overflow-hidden border-none shadow-lg bg-card h-full flex flex-col">
                                                <CardContent className="p-8 flex-1 flex flex-col">
                                                    <div className="flex gap-2 mb-4">
                                                        {exp.tags.map(tag => (
                                                            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="inline-flex items-center gap-1 text-sm font-bold text-muted-foreground">
                                                            <MapPin className="w-3 h-3" /> {exp.location}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-3 font-serif">{exp.title}</h3>
                                                    <p className="text-muted-foreground mb-6">{exp.desc}</p>
                                                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white mt-auto" asChild>
                                                        <a href={`https://wa.me/919406182174?text=Enquiry for ${exp.title}`}>Check Availability</a>
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Coming Soon / Call to Action */}
                        <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                            <div className="container relative z-10 mx-auto px-4 text-center">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Anchor className="w-16 h-16 mx-auto text-blue-400 mb-6 opacity-80" />
                                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">More Horizons Unveiling Soon</h2>
                                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                                        We are constantly adding new luxury liners and exotic routes to our portfolio.
                                        Stay tuned for exclusive launches in the Mediterranean and Alaska.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 min-w-[200px] border border-white/10">
                                            <Phone className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Contact Us</p>
                                            <p className="text-xl font-bold">+91 94061 82174</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 min-w-[200px] border border-white/10">
                                            <Info className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Status</p>
                                            <p className="text-xl font-bold">New Routes Added Weekly</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    </main>

                    <Footer />
                    <FloatingWhatsApp />
                </motion.div>
            )}
        </>
    );
};

export default CruiseBooking;
