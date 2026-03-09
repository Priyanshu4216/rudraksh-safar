import { cn } from '@/lib/utils';
import CustomerGallery from '../CustomerGallery';
import { TESTIMONIALS } from '@/data/homeRedesignData';
import { Star, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const HappyExplorers = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Review Card Component to avoid duplication
    const ReviewCard = ({ review }: { review: any }) => (
        <div className="bg-white dark:bg-slate-900 md:backdrop-blur-none backdrop-blur-[16px] md:bg-white md:dark:bg-slate-900 bg-white/70 dark:bg-slate-900/80 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 md:border-slate-200 md:dark:border-slate-800 border-white/40 dark:border-white/10 flex flex-col h-full md:shadow-sm shadow-[0_20px_40px_rgba(0,0,0,0.05)] active:scale-[0.98] transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg shadow-inner">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {review.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                            {review.location}
                        </p>
                    </div>
                </div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    className="w-5 h-5 opacity-70"
                />
            </div>

            <div className="flex text-yellow-400 mb-3 text-xs drop-shadow-sm">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                ))}
            </div>

            <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed flex-grow font-serif italic">
                "{review.text}"
            </p>
        </div>
    );

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white font-serif tracking-tight mb-4">
                        Loved by 1000+ Happy Explorers
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Real stories from real travelers. We turn your dream vacations into cherished memories.
                    </p>
                </div>

                {/* Customer Gallery */}
                <div className="mb-20">
                    <CustomerGallery className="py-0" />
                </div>

                {/* Google Reviews Section */}
                <div className="relative">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
                            Verified Google Reviews
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google"
                                className="w-8 h-8"
                            />
                            <div className="text-left">
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-slate-900 dark:text-white text-lg">5.0</span>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 font-medium">Based on 18 Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Review Grid */}
                    {!isMobile ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {TESTIMONIALS.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </div>
                    ) : (
                        /* Mobile 3D Stacked Carousel */
                        <div className="w-[85%] max-w-sm mx-auto my-10 perspective-[1200px]">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Autoplay, Pagination]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                className="!overflow-visible !pb-12"
                            >
                                {TESTIMONIALS.map((review) => (
                                    <SwiperSlide key={review.id} className="!bg-transparent !w-full !rounded-2xl">
                                        <div className="h-full transform-style-3d">
                                            <ReviewCard review={review} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <a
                            href="https://www.google.com/search?q=rudraksh+safar+bhilai#lrd=0x3a28dc76b52d82e08:0x1,1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                        >
                            <MapPin className="w-4 h-4 text-blue-500" />
                            Verify on Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyExplorers;
