
import { Link } from 'react-router-dom';
import { VISA_EASY_DESTINATIONS } from '@/data/homeRedesignData';
import { BadgeCheck } from 'lucide-react';
// import SmartImage from '@/components/SmartImage'; // Uncomment if using SmartImage for thumbnails

const VisaEasy = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        Easy Visa Destinations
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Hassle-free entry for Indian passport holders with our assistance
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {VISA_EASY_DESTINATIONS.map((dest) => (
                        <Link
                            key={dest.id}
                            to={dest.slug.startsWith('/') ? dest.slug : `/visa/${dest.slug}`}
                            className="group flex flex-col items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-green-900/5 border border-slate-100 hover:border-green-100 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {/* Flag or Icon */}
                                <span className="text-lg font-bold">{dest.title.substring(0, 2).toUpperCase()}</span>
                            </div>
                            <h3 className={`text-slate-800 dark:text-slate-200 mb-1 ${dest.fontClass || 'font-semibold'}`}>
                                {dest.title}
                            </h3>
                            <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider text-green-600/80 bg-green-50 px-2 py-1 rounded-sm">
                                <BadgeCheck className="w-3 h-3 mr-1" /> Visa Ready
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaEasy;
