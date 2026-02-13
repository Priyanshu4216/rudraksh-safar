
import { TESTIMONIALS } from '@/data/homeRedesignData';
import { Star, Quote } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Loved by Travellers</h2>
                    <div className="flex justify-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-slate-500">Rated 4.9/5 based on 500+ Local Reviews</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {TESTIMONIALS.map((review) => (
                                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl h-full flex flex-col relative border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all">
                                        <Quote className="absolute top-8 right-8 w-8 h-8 text-slate-200 dark:text-slate-800" />

                                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                                            "{review.text}"
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`} />
                                                <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                                                <p className="text-xs text-slate-500">{review.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4 mt-12">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
