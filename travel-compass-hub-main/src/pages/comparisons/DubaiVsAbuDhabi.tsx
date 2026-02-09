import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Scale, Building2, Palmtree, Wallet, Users, Moon, Sun, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DubaiVsAbuDhabi = () => {
    return (
        <>
            <Helmet>
                <title>Dubai vs Abu Dhabi (2026): Which is Better for Your Holiday?</title>
                <meta name="description" content="Detailed comparison: Dubai vs Abu Dhabi. Cost, nightlife, family attractions, and strictness. Find out which UAE city suits your travel style." />
                <meta name="keywords" content="dubai vs abu dhabi for tourists, is abu dhabi cheaper than dubai, dubai vs abu dhabi strictness, dubai vs abu dhabi nightlife" />
                <link rel="canonical" href="https://rudrakshsafar.com/comparisons/dubai-vs-abu-dhabi" />
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO */}
                <div className="relative h-[50vh] flex items-center justify-center text-center text-white bg-slate-900">
                    <div className="absolute inset-0 grid grid-cols-2 opacity-40">
                        <img src="/images/dubai/burj-khalifa-hero.jpg" alt="Dubai" className="w-full h-full object-cover" />
                        <img src="/images/uae/mosque-hero.jpg" alt="Abu Dhabi" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

                    <div className="relative container max-w-4xl px-4 space-y-6">
                        <Badge className="bg-purple-600 text-white uppercase tracking-wider mb-4">
                            The Great UAE Debate
                        </Badge>
                        <h1 className="text-3xl md:text-6xl font-bold font-serif leading-tight">
                            Dubai vs Abu Dhabi
                        </h1>
                        <p className="text-xl text-slate-300">
                            Glitz & Glamour vs. Culture & Luxury. Which one should you pick?
                        </p>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-16 space-y-20">

                    {/* 1. THE VERDICT (Answer First) */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 text-center space-y-6">
                        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                            <Scale className="w-8 h-8 text-orange-500" /> The Short Answer
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50">
                                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Choose Dubai If...</h3>
                                <ul className="space-y-2 text-sm md:text-base">
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> You want world records (Tallest building, Deepest pool).</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> You love Nightlife, Parties, and Shopping.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> You are a first-time visitor to UAE.</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Choose Abu Dhabi If...</h3>
                                <ul className="space-y-2 text-sm md:text-base">
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> You prefer Culture, Art (Louvre), and Grandeur.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> You are a Ferrari / F1 Fan.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> You want a cleaner, quieter, more relaxed luxury.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-6">
                            <p className="font-bold text-lg mb-4">Our Recommendation?</p>
                            <Badge variant="outline" className="text-lg px-4 py-2 border-orange-500 text-orange-600 bg-orange-50">
                                Do Both! They are only 90 minutes apart.
                            </Badge>
                        </div>
                    </div>

                    {/* 2. DETAILED COMPARISON TABLE */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center">Head-to-Head Comparison</h2>
                        <div className="overflow-x-auto border rounded-xl shadow-sm bg-white dark:bg-slate-900">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                        <th className="p-4 border-b">Feature</th>
                                        <th className="p-4 border-b text-blue-600 font-bold w-1/3">Dubai 🏙️</th>
                                        <th className="p-4 border-b text-emerald-600 font-bold w-1/3">Abu Dhabi 🕌</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-sm md:text-base">
                                    <tr>
                                        <td className="p-4 font-bold flex items-center gap-2"><Wallet className="w-4 h-4" /> Cost</td>
                                        <td className="p-4">$$$ - Expensive (Taxis, Alcohol, Entry fees)</td>
                                        <td className="p-4">$$ - Moderate (Hotels are often cheaper)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold flex items-center gap-2"><Moon className="w-4 h-4" /> Nightlife</td>
                                        <td className="p-4">World-Class. Clubs, rooftops, beach parties.</td>
                                        <td className="p-4">Limited. Mostly inside conservative 5-star hotels.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold flex items-center gap-2"><Users className="w-4 h-4" /> Crowd</td>
                                        <td className="p-4">Busy, Fast-paced, Tourist-heavy.</td>
                                        <td className="p-4">Relaxed, Family-oriented, Expats.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold flex items-center gap-2"><Building2 className="w-4 h-4" /> Strictness</td>
                                        <td className="p-4">Liberal. Shorts/Skirts common everywhere.</td>
                                        <td className="p-4">Conservative. Modest dress expected in public.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold flex items-center gap-2"><Palmtree className="w-4 h-4" /> Must-Dos</td>
                                        <td className="p-4">
                                            <Link to="/uae/burj-khalifa" className="underline text-blue-600">Burj Khalifa</Link>, Desert Safari, Palm Jumeirah.
                                        </td>
                                        <td className="p-4">
                                            <Link to="/uae/sheikh-zayed-mosque" className="underline text-emerald-600">Grand Mosque</Link>, <Link to="/uae/ferrari-world" className="underline text-emerald-600">Ferrari World</Link>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 3. COMBINATION GUIDE */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">How to plan both?</h2>
                            <p className="text-muted-foreground text-lg">
                                Since they are so close, we recommend spending <strong>4 Nights in Dubai</strong> and doing a <strong>Day Trip to Abu Dhabi</strong>.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <p className="text-sm">Stay in Dubai (Marina or Downtown) for the full trip comparison.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <p className="text-sm">Hire a private cab for Abu Dhabi Day Trip (start 9 AM, return 9 PM).</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <p className="text-sm">Cover Grand Mosque in morning, Ferrari World in afternoon.</p>
                                </div>
                            </div>
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                <Link to="/dubai-5-day-itinerary">View 5-Day Combo Itinerary</Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <img src="/images/dubai/dubai-abudhabi-map.jpg" alt="Dubai to Abu Dhabi Map" className="rounded-xl shadow-lg border" />
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl border">
                                <p className="font-bold text-lg">90 Minutes</p>
                                <p className="text-xs text-muted-foreground">Drive time via Sheikh Zayed Rd</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. CTA */}
                    <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">Can't decide?</h2>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                            Speak to our UAE expert in Bhilai. We will custom build an itinerary that balances both cities perfectly.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I am confused between Dubai and Abu Dhabi." target="_blank" rel="noopener noreferrer">
                                    Chat with Expert
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiVsAbuDhabi;
