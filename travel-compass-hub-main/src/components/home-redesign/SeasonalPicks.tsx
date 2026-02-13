import { Link } from 'react-router-dom';
import { SEASONAL_PICKS, POPULAR_DESTINATIONS, VISA_EASY_DESTINATIONS } from '@/data/homeRedesignData';
import SmartImage from '@/components/SmartImage';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CollectionItem {
    id: number | string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
    color?: string; // Optional overlay color if needed
    fontClass?: string;
}

// Reusable Collection Section Component
const CollectionSection = ({ title, items }: { title: string, items: CollectionItem[] }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="mb-16 last:mb-0">
            {/* Header with Navigation */}
            <div className="flex justify-between items-end mb-6 px-4 md:px-0">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-slate-800 dark:text-white">
                    {title}
                </h3>

                {/* Navigation Controls will be effectively placed by the Carousel component's default behavior 
                    or we can hide default and custom place them. 
                    The reference has them top right. The CarouselNext/Prev in standard UI usually go to sides.
                    Let's use custom positioning for the buttons to match reference (Top Right).
                */}
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full group">
                <div className="absolute -top-12 right-4 flex space-x-2 z-10">
                    <CarouselPrevious className="relative translate-y-0 h-9 w-9 border-slate-300 hover:bg-slate-100 dark:border-white/30 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors" />
                    <CarouselNext className="relative translate-y-0 h-9 w-9 border-slate-300 hover:bg-slate-100 dark:border-white/30 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors" />
                </div>

                <CarouselContent className="-ml-4 px-4">
                    {items.map((item) => (
                        <CarouselItem key={item.id} className="pl-4 basis-[85%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <Link
                                to={item.link}
                                className="group/card relative block w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <SmartImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />

                                {/* Gradient Overlay - Reference style: Dark bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity p-6 flex flex-col justify-end">
                                    {/* Text Content - Reference: Subtitle on top of Title, Bottom Left */}
                                    <div className="translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90 mb-1">
                                            {item.subtitle}
                                        </p>
                                        <h4 className={`text-lg md:text-2xl text-white leading-tight ${item.fontClass || 'font-serif font-bold tracking-tight'}`}>
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

const SeasonalPicks = () => {
    // Normalize Data
    const seasonsData: CollectionItem[] = SEASONAL_PICKS.map(item => ({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        image: item.image,
        link: item.link,
        fontClass: item.fontClass
    }));

    const trendingData: CollectionItem[] = POPULAR_DESTINATIONS.slice(0, 6).map(item => ({
        id: item.id,
        title: item.name,
        subtitle: item.tag || "Trending",
        image: item.image,
        link: item.link,
        fontClass: item.fontClass
    }));

    const visaEasyData: CollectionItem[] = VISA_EASY_DESTINATIONS.map(item => ({
        id: item.id || Math.random(),
        title: item.title,
        subtitle: item.subtitle,
        image: item.image,
        link: item.slug.startsWith('/') ? item.slug : `/${item.slug}`, // Handle inconsistent slugs
        fontClass: item.fontClass
    }));

    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto">
                <CollectionSection title="Seasons & Events" items={seasonsData} />
                <CollectionSection title="Trending Destinations" items={trendingData} />
                <CollectionSection title="Visa Free Destinations" items={visaEasyData} />
            </div>
        </section>
    );
};

export default SeasonalPicks;
