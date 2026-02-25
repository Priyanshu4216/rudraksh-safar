import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const Destinations = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const destinations = [
        {
            id: 'thailand',
            name: 'Thailand',
            flag: '🇹🇭',
            tagline: 'The Land of Smiles',
            description: 'Experience the magic of golden temples, turquoise beaches, and vibrant street life. The ultimate destination for Indian travelers.',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop', // Wat Arun/Temple
            link: '/destinations/thailand',
            stats: {
                visitors: 'No.1 Choice',
                visa: 'Visa Free*',
                flight: '4 hrs from India'
            }
        },
        // Future destinations can be added here (Dubai, Bali, etc.)
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Destinations | Rudraksh Safar - Explore the World</title>
                <meta name="description" content="Explore top international destinations with Rudraksh Safar. Planned for Indian travelers, featuring Thailand, Dubai, and more." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="World Travel"
                        className="w-full h-full object-cover opacity-40 dark:opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500"
                    >
                        Explore the World
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Curated international experiences designed specifically for Indian families, couples, and explorers.
                    </motion.p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="container mx-auto px-4 pb-24 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 aspect-[4/5] md:aspect-[3/4]"
                        >
                            <Link to={dest.link} className="block w-full h-full">
                                {/* Background Image with Zoom Effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-bold mb-3 shadow-lg backdrop-blur-sm">
                                            MOST POPULAR
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                                            {dest.name} <span className="text-3xl">{dest.flag}</span>
                                        </h2>
                                        <p className="text-gray-200 text-sm md:text-base font-medium mb-1 opacity-90">
                                            {dest.tagline}
                                        </p>
                                    </div>

                                    {/* Hidden details that slide up on hover (Desktop) / Always visible (Mobile) */}
                                    <div className="space-y-4 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-none">
                                            {dest.description}
                                        </p>

                                        {/* Quick Stats Grid */}
                                        <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/10">
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Popularity</span>
                                                <span className="block text-sm font-bold text-white">{dest.stats.visitors}</span>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Visa</span>
                                                <span className="block text-white text-sm font-bold">{dest.stats.visa}</span>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Flight</span>
                                                <span className="block text-white text-sm font-bold">{dest.stats.flight}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold bg-white/10 backdrop-blur-md p-3 rounded-xl justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span>Explore {dest.name}</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Coming Soon Card (Placeholder) */}
                    <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-muted flex flex-col items-center justify-center aspect-[4/5] md:aspect-[3/4] bg-muted/20">
                        <div className="text-center p-6">
                            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-serif font-bold text-muted-foreground">More Destinations</h3>
                            <p className="text-sm text-muted-foreground mt-2">Coming Soon: Dubai, Bali, Singapore</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Destinations;
