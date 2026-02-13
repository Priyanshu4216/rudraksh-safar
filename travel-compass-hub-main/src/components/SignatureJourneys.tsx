
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const SignatureJourneys = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-navy-deep">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }} />

            <div className="container px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
                    <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                        Rudraksh Safar Exclusives
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Signature <span className="text-gradient-gold">Journeys</span>
                    </h2>
                    <p className="text-white/70 text-lg font-light leading-relaxed">
                        Handcrafted experiences that go beyond the ordinary. Discover the world's most breathtaking destinations in unparalleled comfort and style.
                    </p>
                </div>

                {/* Signature Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">
                    {/* Featured Journey (Large Left) */}
                    <div className="relative group rounded-3xl overflow-hidden h-[500px] lg:h-full cursor-pointer shadow-2xl">
                        <div className="absolute top-6 left-6 z-20 bg-gold text-navy-deep px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Most Popular
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop"
                            alt="The Himalayan Odyssey"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <Star className="w-4 h-4 text-gold fill-gold" />
                                <span className="text-gold text-sm font-medium">12 Days • All Inclusive</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">The Himalayan Odyssey</h3>
                            <p className="text-white/80 text-lg mb-8 line-clamp-3 lg:line-clamp-none max-w-xl opacity-90 group-hover:opacity-100">
                                Traverse the mystical landscapes of Ladakh and Kashmir. Experience luxury camping under the stars, private monastery tours, and gourmet mountain dining.
                            </p>
                            <Button className="btn-gold rounded-full px-8 py-6 text-lg group-hover:scale-105 transition-transform">
                                View Itinerary <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Secondary Journeys (Right Column) */}
                    <div className="flex flex-col gap-8 h-full">
                        {/* Journey 2 */}
                        <div className="relative group rounded-3xl overflow-hidden h-[300px] lg:h-1/2 cursor-pointer shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop"
                                alt="Parisian Romance"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">Parisian Romance</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-white/80 text-sm">7 Days • France</span>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold group-hover:text-navy-deep transition-all duration-300">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Journey 3 */}
                        <div className="relative group rounded-3xl overflow-hidden h-[300px] lg:h-1/2 cursor-pointer shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1512453979798-5ea904ac22ee?q=80&w=2670&auto=format&fit=crop"
                                alt="Dubai Luxury"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">Dubai Elite</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-white/80 text-sm">5 Days • UAE</span>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold group-hover:text-navy-deep transition-all duration-300">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignatureJourneys;
