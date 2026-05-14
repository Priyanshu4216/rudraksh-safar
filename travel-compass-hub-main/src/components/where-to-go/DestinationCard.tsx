import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyOptimizedImage from '@/components/LazyOptimizedImage';

interface DestinationCardProps {
    title: string;
    location: string;
    imageUrl: string;
    linkUrl: string;
    description?: string;
    delay?: number;
    size?: 'small' | 'medium' | 'large';
}

export default function DestinationCard({ 
    title, 
    location, 
    imageUrl, 
    linkUrl, 
    description, 
    delay = 0,
    size = 'medium'
}: DestinationCardProps) {
    
    const heightClass = {
        small: 'h-[300px]',
        medium: 'h-[400px]',
        large: 'h-[500px] md:h-[600px]'
    }[size];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
            className="group relative block w-full rounded-2xl overflow-hidden hover-cinematic"
        >
            <Link to={linkUrl} className={`block w-full ${heightClass}`}>
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={imageUrl} 
                        alt={`${title} in ${location}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium tracking-wider uppercase mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{location}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-cinematic font-bold text-white mb-2 leading-tight">
                        {title}
                    </h3>

                    {description && (
                        <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {description}
                        </p>
                    )}

                    <div className="flex items-center gap-2 text-primary font-medium text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
