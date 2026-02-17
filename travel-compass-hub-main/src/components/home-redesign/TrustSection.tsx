
import { TRUST_POINTS } from '@/data/homeRedesignData';
import { Star, ShieldCheck, Award, MapPin, UserCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* 1. Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                        Experience & Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Your Trusted Advisors <span className="text-indigo-600 dark:text-indigo-400 italic">in Travel</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        Rudraksh Safar isn't just a booking portal; we are your local travel partners.
                        With over <span className="font-bold text-slate-900 dark:text-white">8+ years of experience</span> and
                        <span className="font-bold text-slate-900 dark:text-white"> 5,000+ happy travelers</span>,
                        we bridge the gap between online convenience and personalized human care.
                    </p>
                </div>

                {/* 2. Trust Metrics Grid (Existing) */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
                    {TRUST_POINTS.map((point, idx) => (
                        <div key={idx} className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                <point.icon className="w-7 h-7 stroke-[1.5]" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{point.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. About Us / Founder / Authority Split Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

                    {/* Left: Authority & Stats */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-32 h-32 text-indigo-900" />
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                                <Award className="w-8 h-8 text-gold" />
                                Government Authorized
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Registered MSME Travel Agency",
                                    "Authorized IRCTC Ticket Booking Agent",
                                    "Certified Tourism Partner for Chhattisgarh",
                                    "Verified Agents for Cordelia Cruises"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Headquarters</p>
                                    <p className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-indigo-500" /> Bhilai, Chhattisgarh
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Support</p>
                                    <p className="font-bold text-slate-900 dark:text-white">24/7 Local Assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Founder's Message / Personal Touch */}
                    <div className="relative">
                        <div className="absolute -left-10 -top-10 text-[12rem] font-serif text-indigo-50 dark:text-indigo-900/20 leading-none select-none z-0">
                            "
                        </div>
                        <div className="relative z-10 pl-6">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
                                Building Relationships, Not Just Itineraries.
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                                "At Rudraksh Safar, we understand that travel is personal. Whether it's a honeymoon, a pilgrimage, or a yearly family vacation, every trip holds a special place in your heart. That's why we don't use bots – we use real travel experts to craft your journey."
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                                Being a Bhilai-based agency, we pride ourselves on face-to-face trust. You know where to find us, and you know we'll be there for you before, during, and after your trip.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-xl border-2 border-white shadow-md">
                                    PC
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-lg">Priyanshu Chaudhary</p>
                                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">Founder, Rudraksh Safar</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link to="/contact" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group">
                                    Visit Our Office <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Social Proof Strip (Enhanced) */}
                <div className="max-w-5xl mx-auto bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="flex items-center gap-1">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">4.9</span>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="text-[10px] text-slate-500">on Google Reviews</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-10 w-px bg-slate-200 dark:bg-slate-700 hidden md:block" />

                    <div className="text-center md:text-left">
                        <p className="text-slate-800 dark:text-slate-200 font-medium italic">
                            “Best travel agency in Bhilai. Very transparent pricing and excellent hotel choices.”
                        </p>
                        <p className="text-xs font-bold text-slate-500 mt-1">
                            — Rahul Dewangan, Durg
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <Link to="/reviews" className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full hover:bg-green-200 transition-colors">
                            Read All Reviews
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustSection;


