import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Mountain, Footprints, Clock,
    Info, ShieldCheck, Thermometer,
    Camera, CloudRain, Map as MapIcon,
    ArrowRight, Users, Route
} from 'lucide-react';
import TempleSchema from '@/components/seo/TempleSchema';
import { TemplePageData } from '@/data/chardham/types';

interface TemplePageProps {
    data: TemplePageData;
}

const TemplePage: React.FC<TemplePageProps> = ({ data }) => {
    const {
        meta, overview, history, spiritual, dates,
        reach, trek, darshan, panchKedar, nearby, stay, faqs
    } = data;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href={`https://rudrakshsafar.com/${data.id}-temple`} />
            </Helmet>

            <TempleSchema
                data={{
                    id: data.id,
                    name: overview.title,
                    description: meta.description,
                    image: overview.bgImage,
                    address: {
                        locality: overview.highlights.find(h => h.label === 'District')?.value || 'Uttarakhand',
                        region: 'Uttarakhand',
                        country: 'IN'
                    },
                    geo: {
                        latitude: '30.0', // Placeholder as exact coords aren't in data yet/generic
                        longitude: '79.0'
                    },
                    faqs: faqs,
                    openingHours: `${dates.opening} to ${dates.closing}`
                }}
            />

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* 1. HERO SECTION */}
                <div className="relative h-[70vh] w-full overflow-hidden">
                    <img
                        src={overview.bgImage}
                        alt={overview.title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />

                    <div className="container relative h-full flex flex-col justify-end pb-16 z-10 text-white">
                        <div className="max-w-4xl">
                            <Badge className="bg-orange-600 mb-4 hover:bg-orange-700 border-none text-white">
                                {overview.subtitle}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{overview.title}</h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                {overview.highlights.map((item, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="flex items-center gap-2 text-orange-300 mb-1">
                                            <item.icon className="h-4 w-4" />
                                            <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-12 grid lg:grid-cols-[1fr_300px] gap-12">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <article className="space-y-16">

                        {/* 2. HISTORY */}
                        <section id="history" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><Info className="h-6 w-6" /></span>
                                History & Legend
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
                                <p className="mb-4"><strong className="text-foreground">Origin:</strong> {history.origin}</p>

                                <div className="my-8 bg-muted/50 p-6 rounded-2xl border-l-4 border-orange-500">
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Legends</h3>
                                    <ul className="space-y-4">
                                        {history.legends.map((legend, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-4xl text-orange-200 font-serif leading-none">“</span>
                                                <p className="italic">{legend}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {history.adiShankaracharya && (
                                    <p className="mb-4">
                                        <strong>Adi Shankaracharya's Role:</strong> {history.adiShankaracharya}
                                    </p>
                                )}
                            </div>
                        </section>

                        {/* 3. SPIRITUAL */}
                        <section id="spiritual" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><ShieldCheck className="h-6 w-6" /></span>
                                Spiritual Significance
                            </h2>
                            <div className="bg-orange-50 dark:bg-orange-950/10 p-8 rounded-3xl border border-orange-100 dark:border-orange-900/20">
                                <p className="text-lg mb-6 leading-relaxed">{spiritual.significance}</p>
                                <ul className="space-y-2">
                                    {spiritual.beliefs.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* 4. DATES */}
                        <section id="dates" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><Calendar className="h-6 w-6" /></span>
                                Opening Dates 2026
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Opening Date</p>
                                        <p className="text-xl font-bold text-foreground">{dates.opening}</p>
                                    </div>
                                </div>
                                <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Closing Date</p>
                                        <p className="text-xl font-bold text-foreground">{dates.closing}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WEATHER & CROWD - NEW SECTION */}
                        {(data.weather || data.crowd) && (
                            <section id="weather" className="scroll-mt-24">
                                <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><Thermometer className="h-6 w-6" /></span>
                                    Weather & Best Time
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Weather Card */}
                                    {data.weather && (
                                        <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-800 dark:text-blue-300">
                                                <CloudRain className="h-5 w-5" /> Weather Insights
                                            </h3>
                                            <div className="space-y-2 text-sm">
                                                <p><span className="font-semibold">Best Season:</span> {data.weather.season}</p>
                                                <p><span className="font-semibold">Temperature:</span> {data.weather.temperature}</p>
                                            </div>
                                            <div className="mt-4 p-3 bg-white dark:bg-black/20 rounded-lg text-xs text-muted-foreground">
                                                <span className="font-bold text-blue-600">Travel Tip:</span> {data.weather.tips}
                                            </div>
                                        </div>
                                    )}

                                    {/* Crowd Card */}
                                    {data.crowd && (
                                        <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/30">
                                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-purple-800 dark:text-purple-300">
                                                <Users className="h-5 w-5" /> Crowd Levels
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <p className="font-medium text-purple-900 dark:text-purple-200">Peak Rush</p>
                                                    <p className="text-muted-foreground">{data.crowd.busyDates}</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-green-700 dark:text-green-400">Peaceful Time</p>
                                                    <p className="text-muted-foreground">{data.crowd.peacefulDates}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {/* TREK & REACH */}
                        <section id="reach" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><MapPin className="h-6 w-6" /></span>
                                How to Reach & The Trek
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-secondary/10 p-5 rounded-xl">
                                    <h3 className="font-bold flex items-center gap-2 mb-2"><MapIcon className="h-4 w-4" /> By Road</h3>
                                    <ul className="space-y-2">
                                        {reach.road.map((r, i) => (
                                            <li key={i} className="text-sm">
                                                <span className="font-medium text-foreground">{r.route}</span>
                                                <p className="text-muted-foreground mt-1">{r.description} ({r.distance})</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border border-border rounded-3xl overflow-hidden bg-card">
                                    <div className="bg-slate-900 text-white p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2"><Footprints className="h-5 w-5" /> The Trek</h3>
                                            <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">{trek.difficulty}</Badge>
                                        </div>
                                        <div className="flex justify-between text-sm text-slate-300">
                                            <span>Base Camp: {trek.baseCamp}</span>
                                            <span>Distance: {trek.distance}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ITINERARY - NEW SECTION */}
                        {data.itinerary && (
                            <section id="itinerary" className="scroll-mt-24">
                                <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><Route className="h-6 w-6" /></span>
                                    {data.itinerary.title}
                                </h2>
                                <div className="space-y-8 relative border-l-2 border-orange-200 dark:border-orange-800 ml-3 pl-8 pb-4">
                                    {data.itinerary.days.map((day, idx) => (
                                        <div key={idx} className="relative">
                                            <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold border-4 border-background">
                                                {day.day}
                                            </span>
                                            <h3 className="font-bold text-lg mb-2">{day.title}</h3>
                                            <ul className="space-y-1 text-muted-foreground text-sm">
                                                {day.activities.map((act, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <ArrowRight className="h-4 w-4 shrink-0 text-orange-400 mt-0.5" />
                                                        {act}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* PANCH KEDAR LINKS */}
                        {panchKedar && (
                            <section id="panch-kedar" className="scroll-mt-24">
                                <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                                    <h2 className="text-2xl font-serif font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                                        <Mountain className="h-6 w-6" /> Panch Kedar
                                    </h2>
                                    <p className="mb-4">{panchKedar.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {panchKedar.temples.map((temple, idx) => (
                                            <Link key={idx} to={temple.link} className="block p-4 bg-white rounded-xl border hover:shadow-lg transition-all">
                                                <h3 className="font-bold text-indigo-700">{temple.name}</h3>
                                                <p className="text-xs text-muted-foreground">{temple.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* FAQs */}
                        <section id="faqs" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-card border border-border rounded-xl p-5">
                                        <h3 className="font-bold text-foreground mb-2 flex gap-3">
                                            <span className="text-orange-500">Q.</span> {faq.question}
                                        </h3>
                                        <p className="text-muted-foreground text-sm ml-7 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* AUTHORITATIVE SOURCE - NEW SECTION */}
                        {data.authoritativeSource && (
                            <div className="mt-12 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground border border-border flex flex-col md:flex-row gap-4 items-center justify-between">
                                <p className="italic">"{data.authoritativeSource.text}"</p>
                                <span className="whitespace-nowrap font-medium">Verified: {data.authoritativeSource.lastVerified}</span>
                            </div>
                        )}
                    </article>

                    {/* RIGHT SIDEBAR */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-900 text-center">
                                <h3 className="font-bold text-xl font-serif mb-2">Planning Yatra?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get the best Helicopter & Trekking packages.</p>
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                    <Link to="/chardham-yatra-package">View Packages</Link>
                                </Button>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TemplePage;
