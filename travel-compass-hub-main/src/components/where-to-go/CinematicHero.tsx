import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CinematicHeroProps {
    title: string;
    subtitle: string;
    videoUrl?: string;
    imageUrl?: string;
    scrollToId?: string;
}

export default function CinematicHero({ title, subtitle, videoUrl, imageUrl, scrollToId }: CinematicHeroProps) {
    const handleScroll = () => {
        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {videoUrl ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 dark:opacity-60"
                        poster={imageUrl}
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={imageUrl}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-80 dark:opacity-60 animate-slow-zoom"
                    />
                )}
                
                {/* Gradient Overlays for Depth and Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            </div>

            {/* Content Layer */}
            <div className="container relative z-20 mx-auto px-4 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>Curated Destinations</span>
                    </div>
                    
                    <h1 className="text-cinematic-hero text-white drop-shadow-2xl">
                        {title}
                    </h1>
                    
                    <p className="text-editorial-body text-slate-200 drop-shadow-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {scrollToId && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="pt-12"
                        >
                            <Button
                                onClick={handleScroll}
                                variant="ghost"
                                className="text-white hover:bg-white/10 hover:text-white rounded-full p-6 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-xs tracking-widest uppercase opacity-70">Begin Exploration</span>
                                    <ArrowDown className="w-5 h-5 animate-bounce" />
                                </div>
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
