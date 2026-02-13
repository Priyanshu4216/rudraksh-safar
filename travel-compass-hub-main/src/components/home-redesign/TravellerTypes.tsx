import { useState } from 'react';
import { TRAVELLER_TYPES } from '@/data/homeRedesignData';
import { ArrowRight, Sparkles } from 'lucide-react';
import TravelPlanner from './TravelPlanner';

const TravellerTypes = () => {
    const [plannerOpen, setPlannerOpen] = useState(false);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleTypeClick = (typeId: string) => {
        setSelectedType(typeId);
        setPlannerOpen(true);
    };

    const getImageClass = (id: string) => {
        // Preserving the alignment logic but softening the transition
        const baseClass = "w-full h-full object-cover object-top transition-transform duration-700";

        switch (id) {
            case 'honeymoon': // Couple
                return `${baseClass} scale-[1.6] translate-y-4 group-hover:scale-[1.7]`;
            case 'family': // Family
                return `${baseClass} scale-[1.65] translate-y-6 group-hover:scale-[1.75]`;
            case 'group': // Friends
                return `${baseClass} scale-[1.7] translate-y-4 group-hover:scale-[1.8]`;
            case 'solo': // Solo
                return `${baseClass} scale-[1.75] translate-y-5 group-hover:scale-[1.85]`;
            case 'senior': // Senior
                return `${baseClass} scale-[1.65] translate-y-24 -translate-x-1 group-hover:scale-[1.75]`;
            default:
                return baseClass;
        }
    };

    return (
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#003323]">
            {/* Background Texture & Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block flex items-center justify-center gap-2 animate-fade-in">
                        <Sparkles className="w-4 h-4" /> Curated Experiences
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-up">
                        Who Are You <span className="text-gradient-gold">Travelling With?</span>
                    </h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed animate-fade-up delay-100">
                        Every journey is unique. Select your travel companions to find the perfect itinerary tailored for you.
                    </p>
                </div>

                {/* Cards Container - Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
                    {TRAVELLER_TYPES.map((type, index) => (
                        <button
                            key={type.id}
                            onClick={() => handleTypeClick(type.id)}
                            className="group relative flex-shrink-0 snap-center w-[85vw] sm:w-[350px] lg:w-full max-w-[280px] h-[380px] mx-auto flex flex-col items-center justify-end rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 outline-none focus:outline-none"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Background - Glass & Gradient */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-gold/30 transition-colors duration-500 rounded-[2rem]"></div>

                            {/* Inner Gradient for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Image Container with Masking for Soft Blend */}
                            <div className="absolute inset-0 mask-image-gradient-b">
                                <img
                                    src={(type as any).image}
                                    alt={type.title}
                                    className={getImageClass(type.id)}
                                />
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 p-6 w-full text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                    {type.title}
                                </h3>

                                <div className="h-[2px] w-12 bg-white/20 mx-auto mb-4 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />

                                <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Select <ArrowRight className="w-4 h-4 text-gold" />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Smart Travel Planner Modal */}
            <TravelPlanner
                isOpen={plannerOpen}
                onClose={() => setPlannerOpen(false)}
                initialType={selectedType}
            />
        </section>
    );
};

export default TravellerTypes;
