import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationHeroProps {
    title: string;
    subtitle: string;
    imageUrl: string;
    scrollToId?: string;
}

export default function DestinationHero({ title, subtitle, imageUrl, scrollToId = 'overview' }: DestinationHeroProps) {
    const handleScroll = () => {
        const el = document.getElementById(scrollToId);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 dark:opacity-70 animate-slow-zoom"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            </div>

            <div className="container relative z-20 mx-auto px-4 text-center mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
                    className="max-w-5xl mx-auto space-y-6"
                >
                    <h1 className="text-cinematic-hero text-white drop-shadow-2xl">
                        {title}
                    </h1>
                    
                    <p className="text-editorial-body text-slate-200 drop-shadow-lg max-w-3xl mx-auto text-xl md:text-2xl font-light">
                        {subtitle}
                    </p>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="pt-16 absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    >
                        <Button
                            onClick={handleScroll}
                            variant="ghost"
                            className="text-white hover:bg-white/10 hover:text-white rounded-full p-8 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium">Explore Details</span>
                                <ArrowDown className="w-5 h-5 animate-bounce opacity-80" />
                            </div>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
