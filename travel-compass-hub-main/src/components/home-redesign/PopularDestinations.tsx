
import { Link } from 'react-router-dom';
import { POPULAR_DESTINATIONS } from '@/data/homeRedesignData';
import { ArrowRight } from 'lucide-react';
import SmartImage from '@/components/SmartImage';

const PopularDestinations = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                            Most Booked from Bhilai
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Our community's favorite destinations this month
                        </p>
                    </div>
                    <Link to="/tour-packages-from-bhilai" className="hidden md:flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                        View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {POPULAR_DESTINATIONS.map((dest) => (
                        <Link
                            key={dest.id}
                            to={dest.link}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gray-100">
                                <SmartImage
                                    src={dest.image}
                                    alt={`${dest.name} tour package from Bhilai`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute top-4 left-4">
                                {/* Premium subtle tag */}
                                <span className="px-3 py-1 text-xs font-semibold bg-white/95 backdrop-blur-md text-slate-800 rounded-full shadow-sm tracking-wide">
                                    {dest.tag}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className={`text-xl text-white mb-1 drop-shadow-sm group-hover:text-white transition-colors ${dest.fontClass || 'font-bold'}`}>{dest.name}</h3>
                                <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
                                    <span className="text-white/90 text-sm font-medium flex items-center">
                                        Explore <ArrowRight className="w-3 h-3 ml-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link to="/tour-packages-from-bhilai" className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-bold rounded-xl text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                        View All Packages
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
