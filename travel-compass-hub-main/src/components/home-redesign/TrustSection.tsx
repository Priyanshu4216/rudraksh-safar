
import { TRUST_POINTS } from '@/data/homeRedesignData';
import { Star } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="container mx-auto px-4">

                {/* Section Title & Center Highlight */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                        Why Choose Rudraksh Safar?
                    </h2>

                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-semibold text-sm md:text-base border border-indigo-200 dark:border-indigo-800 shadow-sm">
                        🏆 Trusted Travel Partner for Bhilai & Chhattisgarh Since 2015
                    </div>
                </div>

                {/* Trust Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
                    {TRUST_POINTS.map((point, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                                <point.icon className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{point.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Social Proof Strip */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">5.0</span>
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                        </div>
                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
                        <span className="text-sm font-medium text-slate-500">Google Rating</span>
                    </div>

                    <div className="flex-1 md:px-8 border-l border-transparent md:border-slate-200 dark:md:border-slate-800">
                        <p className="text-slate-600 dark:text-slate-300 italic text-center md:text-left">
                            “Smooth Char Dham Yatra arrangement. Highly recommended.”
                        </p>
                        <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 text-center md:text-left">
                            — Amit Verma, Bhilai
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <div className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            Verified Reviews
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustSection;
