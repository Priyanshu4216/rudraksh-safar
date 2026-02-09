import { yamunotriData } from '@/data/chardham/yamunotri-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Mountain, Clock,
    Info, ShieldCheck, Thermometer,
    Camera, Flame, Droplets, Map as MapIcon, CloudRain, Footprints
} from 'lucide-react';

import TempleSchema from '@/components/seo/TempleSchema';

const YamunotriTemple = () => {
    const {
        meta, overview, history, spiritual, dates,
        reach, trek, darshan, nearby, stay, faqs
    } = yamunotriData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/yamunotri-temple" />
            </Helmet>

            <TempleSchema
                data={{
                    id: 'yamunotri',
                    name: 'Yamunotri Temple',
                    description: meta.description,
                    image: overview.bgImage,
                    address: {
                        locality: 'Yamunotri',
                        region: 'Uttarakhand',
                        country: 'IN'
                    },
                    geo: {
                        latitude: '31.0140',
                        longitude: '78.4600'
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
                        alt="Yamunotri Temple"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />

                    <div className="container relative h-full flex flex-col justify-end pb-16 z-10 text-white">
                        <div className="max-w-4xl">
                            <Badge className="bg-yellow-400 text-black mb-4 hover:bg-yellow-500 border-none font-bold">
                                {overview.subtitle}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{overview.title}</h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                {overview.highlights.map((item, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="flex items-center gap-2 text-yellow-300 mb-1">
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

                        {/* 2. HISTORY & LEGEND */}
                        <section id="history" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 p-2 rounded-lg"><Info className="h-6 w-6" /></span>
                                History & Legend
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
                                <p className="mb-4"><strong className="text-foreground">Origin:</strong> {history.origin}</p>

                                <div className="my-8 bg-muted/50 p-6 rounded-2xl border-l-4 border-yellow-500">
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Yama & Yamuna</h3>
                                    <ul className="space-y-4">
                                        {history.legends.map((legend, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-4xl text-yellow-400 font-serif leading-none">“</span>
                                                <p className="italic">{legend}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. SPIRITUAL SIGNIFICANCE */}
                        <section id="spiritual" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 p-2 rounded-lg"><ShieldCheck className="h-6 w-6" /></span>
                                Spiritual Significance
                            </h2>
                            <div className="bg-yellow-50 dark:bg-yellow-950/10 p-8 rounded-3xl border border-yellow-100 dark:border-yellow-900/20">
                                <p className="text-lg mb-6 leading-relaxed">{spiritual.significance}</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Core Beliefs</h3>
                                        <ul className="space-y-2">
                                            {spiritual.beliefs.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Daily Rituals</h3>
                                        <ul className="space-y-2">
                                            {spiritual.rituals.map((r, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Surya Kund Feature */}
                        <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                                    <Flame className="h-6 w-6 text-orange-400" /> The Surya Kund Ritual
                                </h3>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    The most unique aspect of Yamunotri is the Surya Kund, a hot water spring where the water reaches <strong>88°C</strong>.
                                    Pilgrims cook rice and potatoes in cloth bags here and take them home as <strong>Prasad</strong>.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                                    <Info className="h-4 w-4 text-orange-300" />
                                    <span>Don't forget to buy a "Potli" (cloth bag) with raw rice from the shops nearby.</span>
                                </div>
                            </div>
                        </section>

                        {/* 5. HOW TO REACH & TREK */}
                        <section id="reach" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 p-2 rounded-lg"><Footprints className="h-6 w-6" /></span>
                                The Trek & Reach
                            </h2>

                            <div className="space-y-8">
                                <div className="grid gap-4">
                                    {/* Transport Options */}
                                    <div className="bg-secondary/10 p-5 rounded-xl">
                                        <h3 className="font-bold flex items-center gap-2 mb-2">🚗 To Jankichatti (Base Camp)</h3>
                                        <ul className="space-y-2">
                                            {reach.road.map((r, i) => (
                                                <li key={i} className="text-sm">
                                                    <span className="font-medium text-foreground">{r.route}</span>
                                                    <p className="text-muted-foreground mt-1">{r.description} ({r.distance})</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Trek Details */}
                                    <div className="border border-border rounded-3xl overflow-hidden bg-card">
                                        <div className="bg-slate-900 text-white p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold flex items-center gap-2"><Footprints className="h-5 w-5" /> The Trek Guide (6 km)</h3>
                                                <Badge variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">{trek.difficulty}</Badge>
                                            </div>
                                            <div className="flex justify-between text-sm text-slate-300">
                                                <span>Base Camp: {trek.baseCamp}</span>
                                                <span>Incline: Steep</span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mt-4 pt-6 md:pt-0 grid sm:grid-cols-2 gap-4">
                                                {trek.alternatives.map((alt, i) => (
                                                    <div key={i} className="text-center p-4 rounded-xl bg-muted/30 border border-border">
                                                        <p className="font-bold text-base block mb-1">{alt.type}</p>
                                                        <p className="text-sm font-medium text-orange-600 mb-2">{alt.cost}</p>
                                                        <p className="text-xs text-muted-foreground leading-tight">{alt.tips}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* 8. DARSHAN PROCESS */}
                        <section id="darshan" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Darshan & Aarti Guide</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-card border border-border p-6 rounded-2xl">
                                    <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-yellow-500" /> Timings</h3>
                                    <ul className="space-y-3">
                                        {darshan.timings.map((t, i) => (
                                            <li key={i} className="flex justify-between text-sm py-2 border-b border-border/50 last:border-0">
                                                <span className="text-muted-foreground">{t.type}</span>
                                                <span className="font-medium">{t.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-card border border-border p-6 rounded-2xl">
                                    <h3 className="font-bold mb-4 flex items-center gap-2 text-yellow-600">🔥 Aarti</h3>
                                    <ul className="space-y-4">
                                        {darshan.aarti.map((a, i) => (
                                            <li key={i}>
                                                <p className="font-semibold text-foreground">{a.name} <span className="text-xs font-normal text-muted-foreground">({a.time})</span></p>
                                                <p className="text-xs text-muted-foreground mt-1">{a.significance}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQs */}
                        <section id="faqs" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-card border border-border rounded-xl p-5">
                                        <h3 className="font-bold text-foreground mb-2 flex gap-3">
                                            <span className="text-yellow-500">Q.</span> {faq.question}
                                        </h3>
                                        <p className="text-muted-foreground text-sm ml-7 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </article>

                    {/* RIGHT SIDEBAR */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">

                            {/* Book Now CTA */}
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-900 text-center">
                                <h3 className="font-bold text-xl font-serif mb-2">Planning Yamunotri?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get the best Deals & Palki assistance.</p>
                                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black" asChild>
                                    <Link to="/chardham-yatra-package">View Packages</Link>
                                </Button>
                            </div>

                            {/* Quick Navigation */}
                            <div className="bg-card p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    {['History', 'Spiritual', 'Reach', 'Darshan', 'FAQs'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="block text-muted-foreground hover:text-yellow-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Nearby Places */}
                            <div className="bg-card p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><Camera className="h-4 w-4" /> Nearby Visits</h3>
                                <ul className="space-y-4">
                                    {nearby.map((place, idx) => (
                                        <li key={idx} className="text-sm">
                                            <span className="block font-medium">{place.name}</span>
                                            <span className="text-xs text-muted-foreground">{place.distance} • {place.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Temperature Widget */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Thermometer className="h-8 w-8 text-blue-500" />
                                    <div>
                                        <p className="text-xs font-bold uppercase text-blue-700 dark:text-blue-300">Weather Today</p>
                                        <p className="font-bold text-lg">12°C</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Yamunotri</p>
                                    <CloudRain className="h-4 w-4 ml-auto text-blue-400" />
                                </div>
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

export default YamunotriTemple;
