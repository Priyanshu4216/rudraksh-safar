
import { Link } from 'react-router-dom';
import { PILGRIMAGE_SPECIALS } from '@/data/homeRedesignData';
import { ArrowRight, Sparkles } from 'lucide-react';
import SmartImage from '@/components/SmartImage';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const PilgrimageSpecials = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-navy-deep to-black relative overflow-hidden">
            {/* Sacred Geometry Background (Abstract) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at center, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl animate-fade-up">
                        <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block flex items-center gap-2">
                            <Sparkles className="w-3 h-3" /> Sacred Journeys
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                            Spiritual <span className="text-gradient-gold">Pilgrimages</span>
                        </h2>
                        <p className="text-white/60 text-lg font-light">
                            Embark on a journey of faith and inner peace. We handle the logistics so you can focus on the divine.
                        </p>
                    </div>

                    {/* Desktop Button Removed */}
                </div>

                <div className="relative">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full group">
                        <div className="absolute -top-[5rem] right-0 flex space-x-3 z-10">
                            <CarouselPrevious className="relative translate-y-0 h-12 w-12 border-white/10 bg-white/5 text-white hover:bg-gold hover:border-gold hover:text-black transition-all" aria-label="Previous Slide" />
                            <CarouselNext className="relative translate-y-0 h-12 w-12 border-white/10 bg-white/5 text-white hover:bg-gold hover:border-gold hover:text-black transition-all" aria-label="Next Slide" />
                        </div>

                        <CarouselContent className="-ml-6 px-4 py-8">
                            {PILGRIMAGE_SPECIALS.map((yatra) => (
                                <CarouselItem key={yatra.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Link
                                        to={yatra.link}
                                        className="group relative block h-[450px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
                                    >
                                        <SmartImage
                                            src={yatra.image}
                                            alt={`${yatra.name} Yatra Package`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Top Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-orange-500/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                                Bookings Open
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <h3 className={`text-white text-2xl leading-tight mb-2 group-hover:text-gold transition-colors duration-300 font-serif font-bold`}>
                                                {yatra.name}
                                            </h3>

                                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-4">
                                                <p className="text-white/70 text-sm line-clamp-2">
                                                    Experience the divine aura with our all-inclusive packages designed for your comfort.
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm font-medium text-orange-300 group-hover:text-white transition-colors uppercase tracking-wider">
                                                View Details <ArrowRight className="w-4 h-4" />
                                            </div>

                                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-gold group-hover:w-full transition-all duration-700" />
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Mobile Button Removed */}
            </div>
        </section>
    );
};

export default PilgrimageSpecials;
