import { safetyData } from '@/data/chardham/safety-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    ShieldAlert, HeartPulse, CloudLightning, Stethoscope,
    Phone, AlertTriangle, CheckCircle, Info
} from 'lucide-react';

const IsCharDhamSafe = () => {
    const { meta, hero, realityCheck, medical, weather, emergency } = safetyData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/is-chardham-yatra-safe" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO SECTION */}
                <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                    <img
                        src={hero.bgImage}
                        alt="Char Dham Safety"
                        className="absolute inset-0 h-full w-full object-cover filter brightness-[0.4]"
                    />
                    <div className="relative z-10 text-center max-w-4xl px-4">
                        <div className="inline-block bg-red-600/20 text-red-200 border border-red-500/50 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                            ⚠️ Safety First
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{hero.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light mb-10">{hero.subtitle}</p>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 text-white">
                            {hero.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
                                    <stat.icon className="h-6 w-6 mb-2 text-red-400" />
                                    <span className="font-bold text-lg">{stat.value}</span>
                                    <span className="text-xs text-slate-300 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container py-16 max-w-5xl space-y-20">

                    {/* 1. REALITY CHECK */}
                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                                <ShieldAlert className="h-8 w-8 text-red-600" /> {realityCheck.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{realityCheck.description}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {realityCheck.risks.map((risk, idx) => (
                                <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 text-red-600">
                                        <risk.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg">{risk.title}</h3>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${risk.severity === 'High' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
                                            {risk.severity} Risk
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{risk.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. MEDICAL PREP */}
                    <section className="bg-blue-50 dark:bg-blue-950/20 p-8 md:p-12 rounded-3xl border border-blue-100 dark:border-blue-900/50">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-900 dark:text-blue-100">
                                    <Stethoscope className="h-8 w-8 text-blue-500" /> {medical.title}
                                </h2>
                                <ul className="space-y-4">
                                    {medical.tips.map((tip, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <div className="h-6 w-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center shrink-0 text-sm font-bold">
                                                {idx + 1}
                                            </div>
                                            <p className="text-blue-800 dark:text-blue-200 leading-snug">{tip}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                                    <Link to="/domestic-packages">View Easy-Pace Packages</Link>
                                </Button>
                            </div>

                            <div className="bg-white dark:bg-black/40 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" /> Essential Packing List
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {medical.checklist.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                                            <input type="checkbox" className="h-4 w-4 accent-blue-600" defaultChecked />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. WEATHER ZONES */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <CloudLightning className="h-8 w-8 text-yellow-600" /> {weather.title}
                        </h2>
                        <div className="grid gap-4">
                            {weather.zones.map((zone, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-l-4 border-l-yellow-500 bg-card">
                                    <div className="min-w-[200px]">
                                        <h4 className="font-bold text-lg">{zone.name}</h4>
                                        <span className="text-xs font-bold text-red-500 uppercase">{zone.risk}</span>
                                    </div>
                                    <div className="flex-1 flex items-center text-sm text-muted-foreground border-t md:border-t-0 md:border-l border-border md:pl-4 pt-2 md:pt-0">
                                        <p>{zone.advice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. EMERGENCY GRID */}
                    <section className="bg-red-900 text-white p-8 md:p-12 rounded-3xl text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                                    <Phone className="h-8 w-8" /> {emergency.title}
                                </h2>
                                <p className="text-red-200 mb-8">Save these numbers before you lose network coverage.</p>
                                <div className="grid gap-4">
                                    {emergency.contacts.map((contact, idx) => (
                                        <div key={idx} className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
                                            <span className="font-medium">{contact.label}</span>
                                            <span className="text-xl font-bold tracking-widest font-mono">{contact.number}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-center text-center">
                                <h3 className="font-bold text-xl mb-4">🚁 Helicopter Evacuation?</h3>
                                <p className="text-sm text-red-200 mb-6">
                                    Helipads are available at major points. In case of extreme emergency, contact the local administration immediately.
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {emergency.helipads.map((pad, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-black/30 rounded-full">{pad}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default IsCharDhamSafe;
