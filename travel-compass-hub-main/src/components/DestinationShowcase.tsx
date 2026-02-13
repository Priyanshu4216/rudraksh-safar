
import { useState } from 'react';
import { ArrowRight, Star, Plane, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categories = ["Trending Now", "Visa Free", "Easy Visa", "Domestic Gems"];

const destinations = {
    "Trending Now": [
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2639&auto=format&fit=crop", days: "5-7 Days", price: "Starting ₹25,000", rating: 4.8, link: "/thailand-tour-packages" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127220198-3498b6eb06ba?q=80&w=2070&auto=format&fit=crop", days: "6-8 Days", price: "Starting ₹32,999", rating: 4.9, link: "/package/vietnam" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop", days: "6 Days", price: "Starting ₹40,000", rating: 4.7, link: "/package/bali" },
        { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop", days: "5 Days", price: "Starting ₹28,999", rating: 4.6, link: "/package/malaysia" },
    ],
    "Visa Free": [
        { name: "Thailand", image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop", days: "5-7 Days", price: "Starting ₹25,000", rating: 4.8, link: "/thailand-tour-packages" },
        { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop", days: "5 Days", price: "Starting ₹28,999", rating: 4.6, link: "/package/malaysia" },
        { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2639&auto=format&fit=crop", days: "6 Days", price: "Starting ₹28,000", rating: 4.7, link: "/package/srilanka" },
        { name: "Mauritius", image: "https://images.unsplash.com/photo-1555547432-8411a7686567?q=80&w=2070&auto=format&fit=crop", days: "7 Days", price: "Starting ₹65,999", rating: 4.9, link: "/package/mauritius" },
    ],
    "Easy Visa": [
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop", days: "4-5 Days", price: "Starting ₹45,000", rating: 4.9, link: "/package/singapore" },
        { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac22ee?q=80&w=2670&auto=format&fit=crop", days: "5 Days", price: "Starting ₹55,000", rating: 4.8, link: "/dubai-tour-packages" },
        { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127220198-3498b6eb06ba?q=80&w=2070&auto=format&fit=crop", days: "6-8 Days", price: "Starting ₹32,999", rating: 4.9, link: "/package/vietnam" },
        { name: "Azerbaijan", image: "https://images.unsplash.com/photo-1628105574888-9d8213612d7c?q=80&w=2670&auto=format&fit=crop", days: "5 Days", price: "Starting ₹42,000", rating: 4.5, link: "/international-packages" },
    ],
    "Domestic Gems": [
        { name: "Kashmir", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2670&auto=format&fit=crop", days: "5-7 Days", price: "Starting ₹18,000", rating: 4.9, link: "/package/kashmir" },
        { name: "Kerala", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2669&auto=format&fit=crop", days: "6 Days", price: "Starting ₹22,000", rating: 4.8, link: "/package/munnar" },
        { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2574&auto=format&fit=crop", days: "4 Days", price: "Starting ₹15,000", rating: 4.7, link: "/goa-tour-package-from-bhilai" },
        { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2670&auto=format&fit=crop", days: "6 Days", price: "Starting ₹35,000", rating: 4.8, link: "/package/andaman" },
    ]
};

const DestinationShowcase = () => {
    const [activeCategory, setActiveCategory] = useState("Trending Now");

    return (
        <section className="section-padding bg-background relative">
            <div className="container px-4">
                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="text-left animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-deep mb-4">
                            Explore by <span className="text-gold italic">Category</span>
                        </h2>
                        <p className="text-muted-foreground text-lg font-light">
                            Curated lists to help you choose your next adventure.
                        </p>
                    </div>

                    {/* Premium Tabs */}
                    <div className="flex flex-wrap items-center gap-2 p-1.5 bg-navy-light/5 rounded-full border border-navy-light/10 animate-fade-up delay-100">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-navy-deep text-white shadow-lg'
                                    : 'text-muted-foreground hover:text-navy-deep hover:bg-white/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Magazine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations[activeCategory as keyof typeof destinations].map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-[350px] md:h-[420px]"
                        >
                            <Link to={dest.link} className="group relative block h-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-deep flex items-center gap-1 shadow-sm">
                                    <Star className="w-3 h-3 text-gold fill-gold" /> {dest.rating}
                                </div>

                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="bg-gold/20 text-gold border border-gold/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
                                        {dest.days}
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{dest.name}</h3>
                                    <p className="text-white/70 text-sm mb-4">{dest.price} per person</p>

                                    <div className="border-t border-white/10 pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs text-white/60 font-medium">View Packages</span>
                                        <div className="w-8 h-8 rounded-full bg-white text-navy-deep flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-fade-in delay-200">
                    <Link to="/international-packages">
                        <Button variant="outline" className="rounded-full px-8 py-6 border-navy-deep/20 text-navy-deep hover:bg-navy-deep hover:text-white transition-all text-lg">
                            View Complete Destination List
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DestinationShowcase;
