import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUMMER_PACKAGES, OTHER_SUMMER_DESTINATIONS } from '@/data/summer2026';

const SummerSpecialPackages = () => {
    const [filter, setFilter] = useState('All');

    const allPackages = [...SUMMER_PACKAGES, ...OTHER_SUMMER_DESTINATIONS.map(p => ({
        ...p,
        subtitle: "Summer Special",
        duration: "Flexible",
        originalPrice: "",
        tag: "Trending",
        features: [],
        highlights: [],
        overview: "",
        itinerary: [],
        inclusions: [],
        exclusions: [],
        faqs: []
    }))];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-orange-100 selection:text-orange-900">
            <Helmet>
                <title>Exclusive Summer Tour Packages 2026 | Rudraksh Safar</title>
                <meta name="description" content="Book exclusive summer tour packages for Ladakh, Kashmir, Manali, Spiti & Sikkim. Limited seats available for 2026 season. Departure from Raipur & Bhilai." />
            </Helmet>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
                            alt="Summer Mountains"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 px-4 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 backdrop-blur border border-orange-500/30 text-orange-200 text-sm font-bold uppercase tracking-widest mb-4 animate-fade-in">
                            Summer 2026 Collection
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg animate-fade-up">
                            Escape to the Mountains
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 animate-fade-up delay-100">
                            Curated expeditions to the Himalayas. Experience the thrill of Ladakh, the serenity of Kashmir, and the charm of Manali.
                        </p>
                    </div>
                </section>

                {/* Packages Grid */}
                <section className="py-20 container mx-auto px-4">

                    {/* Filters (Visual Only for now) */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {['All', 'Adventure', 'Family', 'Couples', 'Budget'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${filter === f
                                        ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPackages.map((pkg) => (
                            <Link to={pkg.slug} key={pkg.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-white/90 dark:bg-black/80 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {pkg.title === "Ladakh Expedition" ? "Elite Choice" : "Open"}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h3 className="text-2xl font-bold leading-tight">{pkg.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                                        <div className="flex items-center gap-1.5 ">
                                            <Calendar className="w-4 h-4" /> {pkg.duration}
                                        </div>
                                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" /> {pkg.subtitle}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-end justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Starting From</p>
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                                                {pkg.price}
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>


                </section>

                <Footer />
            </main>
            <FloatingWhatsApp />
        </div>
    );
};

export default SummerSpecialPackages;
