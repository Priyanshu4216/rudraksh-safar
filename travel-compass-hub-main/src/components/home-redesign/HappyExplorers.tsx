
import { cn } from '@/lib/utils';
import CustomerGallery from '../CustomerGallery';
import { TESTIMONIALS } from '@/data/homeRedesignData';
import { Star } from 'lucide-react';

const HappyExplorers = () => {
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
                    <div className="flex items-center justify-center gap-3 mb-10">
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                                                {review.name}
                                            </h4>
                                            <p className="text-xs text-slate-500">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                        alt="Google"
                                        className="w-5 h-5 opacity-50"
                                    />
                                </div>

                                <div className="flex text-yellow-400 mb-3 text-xs">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                                    "{review.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyExplorers;
