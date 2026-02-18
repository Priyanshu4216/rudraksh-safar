import { ArrowRight, Flame, MapPin, Clock, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SUMMER_PACKAGES } from '@/data/summer2026';

const SummerPackages = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-50/50 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">

            {/* Background Decoration - Sun Flare Effect (Subtle) */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left Column: Title & Intro */}
                    <div className="lg:w-1/3 flex flex-col justify-center text-left">
                        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
                            <span className="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-orange-200 dark:border-orange-800">
                                <Flame className="w-3 h-3 fill-orange-500" /> Hot Season Deals
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight mb-8 drop-shadow-sm">
                            EXCLUSIVE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SUMMER</span><br />
                            PACKAGES
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mb-10">
                            Beat the heat with our handpicked mountain escapes.
                            From the rugged peaks of Ladakh to the lush valleys of Kashmir,
                            experience summer like never before.
                        </p>

                        <div className="hidden lg:block">
                            <Link to="/summer-special-packages">
                                <Button className="h-14 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 text-lg font-bold shadow-xl hover:shadow-2xl transition-all group">
                                    View All Packages
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Packages Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SUMMER_PACKAGES.slice(0, 3).map((pkg, idx) => (
                                <Link to={pkg.slug} key={pkg.id} className="group relative block h-full">
                                    <div className="relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col">

                                        {/* Image Section */}
                                        <div className="relative h-3/5 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opactiy-60" />
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Tag */}
                                            <div className="absolute top-4 right-4 z-20">
                                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {pkg.tag}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-6 flex flex-col justify-between relative bg-white dark:bg-slate-800">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                                                    {pkg.title}
                                                </h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5" /> {pkg.subtitle}
                                                </p>

                                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4">
                                                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded-md">
                                                        <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                                                <div>
                                                    <p className="text-xs text-slate-400 line-through font-medium">
                                                        {pkg.originalPrice}
                                                    </p>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                                                        {pkg.price} <span className="text-xs font-normal text-slate-500 ml-1">/ person</span>
                                                    </p>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile CTA (Visible only on small screens) */}
                        <div className="mt-10 lg:hidden text-center">
                            <Link to="/summer-special-packages">
                                <Button className="w-full h-14 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-lg shadow-lg">
                                    View All Custom Packages
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummerPackages;
