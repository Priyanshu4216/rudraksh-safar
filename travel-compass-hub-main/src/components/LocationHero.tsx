import { MapPin, Phone, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LocationHeroProps {
    city: string;
    title: string;
    subtitle: string;
    bgImage?: string;
    children?: ReactNode;
}

const LocationHero = ({ city, title, subtitle, bgImage, children }: LocationHeroProps) => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90 z-10" />
                <img
                    src={bgImage || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"}
                    alt={`Tour Packages from ${city}`}
                    className="w-full h-full object-cover scale-105 animate-slow-zoom"
                />
            </div>

            <div className="container relative z-20 px-4 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full mb-6 mx-auto">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium tracking-wide">Trusted Travel Agent in {city}</span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {title.split(city)[0]} <span className="text-secondary">{city}</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button size="lg" className="h-14 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-primary rounded-full group" asChild>
                        <a href={`https://wa.me/919406182174?text=${encodeURIComponent(`Hello, I am interested in Tour Packages from ${city}. Please share the best deals and itineraries.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Phone className="w-5 h-5 fill-current" />
                            Get Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10 rounded-full backdrop-blur-sm" asChild>
                        <a href="#packages" className="flex items-center gap-2">
                            Explore Packages
                        </a>
                    </Button>
                </motion.div>

                {/* Optional Children (e.g., Breadcrumbs) */}
                {children && (
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {children}
                    </motion.div>
                )}


                {/* Trust Signals */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {['1000+ Happy Travelers', '4.9/5 Google Rating', '24/7 Local Support'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/90 font-medium">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LocationHero;
