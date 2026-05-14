import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselItem {
    id: string;
    title: string;
    location: string;
    imageUrl: string;
    linkUrl: string;
    description?: string;
}

interface CategoryCarouselProps {
    title: string;
    subtitle?: string;
    items: CarouselItem[];
}

export default function CategoryCarousel({ title, subtitle, items }: CategoryCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 mb-10 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-cinematic-h2 text-foreground mb-4"
                        >
                            {title}
                        </motion.h2>
                        {subtitle && (
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-editorial-body"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4 hidden md:flex">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full border-border/50 hover:bg-muted"
                            onClick={() => scroll('left')}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full border-border/50 hover:bg-muted"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 px-4 md:px-8 xl:px-[calc((100vw-1400px)/2+2rem)]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <div key={item.id} className="min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] snap-center">
                        <DestinationCard
                            title={item.title}
                            location={item.location}
                            imageUrl={item.imageUrl}
                            linkUrl={item.linkUrl}
                            description={item.description}
                            delay={index * 0.1}
                            size="medium"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
