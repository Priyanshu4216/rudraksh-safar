
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const travelStyles = [
    {
        title: "Family Holidays",
        description: "Create timeless memories with your loved ones.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop",
        link: "/packages/family"
    },
    {
        title: "Romantic Getaways",
        description: "Intimate escapes for couples in love.",
        image: "https://images.unsplash.com/photo-1515966306802-e028b3df9dc2?q=80&w=2669&auto=format&fit=crop",
        link: "/packages/honeymoon"
    },
    {
        title: "Group Expeditions",
        description: "Adventures designed for friends and communities.",
        image: "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2670&auto=format&fit=crop",
        link: "/packages/group"
    },
    {
        title: "Solo Adventures",
        description: "Find yourself in the beauty of the world.",
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop",
        link: "/packages/solo"
    },
    {
        title: "Spiritual Yatra",
        description: "Sacred journeys to find inner peace.",
        image: "https://images.unsplash.com/photo-1564198879220-63f2734f7cec?q=80&w=2689&auto=format&fit=crop",
        link: "/spiritual-packages"
    },
    {
        title: "Luxury Retreats",
        description: "Indulge in the finest experiences tailored for you.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
        link: "/packages/luxury"
    }
];

const TravelStyle = () => {
    return (
        <section className="py-24 bg-depth-1 relative overflow-hidden" id="travel-styles">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="container px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block flex items-center justify-center gap-2 animate-fade-in">
                        <Compass className="w-4 h-4" /> Curated Collections
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-up">
                        Choose Your <span className="text-gradient-gold">Travel Style</span>
                    </h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed animate-fade-up delay-100">
                        We don't just sell packages; we craft experiences. Select a travel style to begin your journey.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {travelStyles.map((style, index) => (
                        <div
                            key={index}
                            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-gold/20 transition-shadow duration-500 animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image with Zoom */}
                            <div className="absolute inset-0 image-zoom-container">
                                <img
                                    src={style.image}
                                    alt={style.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay Gradient - Cinematic Look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content - Bottom Aligned */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                                {/* Gold Accent Line */}
                                <div className="w-12 h-1 bg-gold mb-6 transition-all duration-300 group-hover:w-24"></div>

                                <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                    {style.title}
                                </h3>

                                <p className="text-white/80 text-lg mb-6 leading-relaxed opacity-90 font-light">
                                    {style.description}
                                </p>

                                <div className="flex items-center text-white text-sm font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    Explore <ArrowRight className="ml-2 w-4 h-4 text-gold" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-16 text-center animate-fade-in delay-500">
                    <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold rounded-full px-10 py-6 text-lg tracking-wide transition-all duration-300">
                        View All Collections
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TravelStyle;
