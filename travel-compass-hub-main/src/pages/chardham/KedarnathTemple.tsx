import { kedarnathData } from '@/data/chardham/kedarnath-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Mountain, Footprints, Clock,
    Info, AlertTriangle, ShieldCheck, Thermometer,
    ChevronRight, Camera, ArrowRight, CloudRain, Map as MapIcon
} from 'lucide-react';

import TempleSchema from '@/components/seo/TempleSchema';
import KedarnathGallery from '@/components/KedarnathGallery';

const KedarnathTemple = () => {
    const {
        meta, overview, history, spiritual, dates,
        reach, trek, darshan, panchKedar, nearby, stay, faqs, gallery
    } = kedarnathData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/kedarnath-temple" />
            </Helmet>

            <TempleSchema
                data={{
                    id: 'kedarnath',
                    name: 'Kedarnath Temple',
                    description: meta.description,
                    image: overview.bgImage,
                    address: {
                        locality: 'Kedarnath',
                        region: 'Uttarakhand',
                        country: 'IN'
                    },
                    geo: {
                        latitude: '30.7352',
                        longitude: '79.0669'
                    },
                    faqs: faqs,
                    openingHours: `${dates.opening} to ${dates.closing}`
                }}
            />

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* 1. HERO SECTION - ENTITY OWNERSHIP */}
                <div className="relative h-[70vh] w-full overflow-hidden">
                    <img
                        src={overview.bgImage}
                        alt="Kedarnath Temple"
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

                        {/* 2. HISTORY & LEGEND (EEAT GOLD) */}
                        <section id="history" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><Info className="h-6 w-6" /></span>
                                History & Legend
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
                                <p className="mb-4"><strong className="text-foreground">Origin:</strong> {history.origin}</p>

                                <div className="my-8 bg-muted/50 p-6 rounded-2xl border-l-4 border-orange-500">
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-serif">The Legend of the Bull</h3>
                                    <ul className="space-y-4">
                                        {history.legends.map((legend, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-4xl text-orange-200 font-serif leading-none">“</span>
                                                <p className="italic">{legend}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="mb-4">
                                    <strong>Adi Shankaracharya's Role:</strong> {history.adiShankaracharya}
                                </p>

                                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                                    {history.timeline.map((t, idx) => (
                                        <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center">
                                            <span className="block text-2xl font-bold text-orange-600 mb-1">{t.year}</span>
                                            <span className="text-sm text-muted-foreground">{t.event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. SPIRITUAL SIGNIFICANCE */}
                        <section id="spiritual" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><ShieldCheck className="h-6 w-6" /></span>
                                Spiritual Significance
                            </h2>
                            <div className="bg-orange-50 dark:bg-orange-950/10 p-8 rounded-3xl border border-orange-100 dark:border-orange-900/20">
                                <p className="text-lg mb-6 leading-relaxed">{spiritual.significance}</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">Beliefs</h3>
                                        <ul className="space-y-2">
                                            {spiritual.beliefs.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">Daily Rituals</h3>
                                        <ul className="space-y-2">
                                            {spiritual.rituals.map((r, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. DATES (SEASONAL INTENT) */}
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
                            <p className="mt-4 text-sm text-muted-foreground italic flex items-center gap-2">
                                <Info className="h-4 w-4" />
                                During winter, the Utsav Murti of Lord Kedarnath is worshipped at {dates.winterSeat}.
                            </p>
                        </section>

                        {/* 5. HOW TO REACH & 6. TREK MAP */}
                        <section id="reach" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg"><MapPin className="h-6 w-6" /></span>
                                How to Reach & The Trek
                            </h2>

                            <div className="space-y-8">
                                {/* Transport Options */}
                                <div className="grid gap-4">
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
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-secondary/10 p-5 rounded-xl">
                                            <h3 className="font-bold flex items-center gap-2 mb-2">🚄 By Train</h3>
                                            <p className="text-sm text-muted-foreground">Nearest Station: <span className="text-foreground font-medium">{reach.train.station}</span></p>
                                        </div>
                                        <div className="bg-secondary/10 p-5 rounded-xl">
                                            <h3 className="font-bold flex items-center gap-2 mb-2">✈️ By Air</h3>
                                            <p className="text-sm text-muted-foreground">Nearest Airport: <span className="text-foreground font-medium">{reach.air.airport}</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trek Details */}
                                <div className="border border-border rounded-3xl overflow-hidden bg-card">
                                    <div className="bg-slate-900 text-white p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2"><Footprints className="h-5 w-5" /> The Trek Guide</h3>
                                            <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">{trek.difficulty}</Badge>
                                        </div>
                                        <div className="flex justify-between text-sm text-slate-300">
                                            <span>Base Camp: {trek.baseCamp}</span>
                                            <span>Distance: {trek.distance}</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="relative pl-8 border-l-2 border-dashed border-muted space-y-8">
                                            {trek.stops.map((stop, idx) => (
                                                <div key={idx} className="relative">
                                                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center text-[10px] font-bold text-orange-700">
                                                        {idx + 1}
                                                    </span>
                                                    <h4 className="font-bold text-foreground">{stop.name} <span className="text-xs font-normal text-muted-foreground ml-2">({stop.altitude})</span></h4>
                                                    <p className="text-xs text-muted-foreground">{stop.facilities}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-3 gap-4">
                                            {trek.alternatives.map((alt, i) => (
                                                <div key={i} className="text-center p-3 rounded-lg bg-muted/30">
                                                    <p className="font-bold text-sm block mb-1">{alt.type}</p>
                                                    <p className="text-xs font-medium text-orange-600 mb-1">{alt.cost}</p>
                                                    <p className="text-[10px] text-muted-foreground leading-tight">{alt.tips}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 7. PANCH KEDAR (MANDATORY LINKING) */}
                        {panchKedar && (
                            <section id="panch-kedar" className="scroll-mt-24">
                                <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                                    <h2 className="text-2xl font-serif font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                                        <Mountain className="h-6 w-6" /> Panch Kedar: The 5 Forms of Shiva
                                    </h2>
                                    <p className="text-indigo-800 dark:text-indigo-300 mb-6 leading-relaxed">
                                        {panchKedar.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {panchKedar.temples.map((temple, idx) => (
                                            <Link
                                                key={idx}
                                                to={temple.link}
                                                className="group bg-white dark:bg-slate-900 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50 hover:shadow-lg transition-all"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-indigo-700 dark:text-indigo-400 group-hover:underline decoration-2 underline-offset-4">
                                                        {temple.name}
                                                    </h3>
                                                    <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">{temple.altitude}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground">{temple.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* 8. DARSHAN PROCESS */}
                        <section id="darshan" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Darshan & Aarti Guide</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-card border border-border p-6 rounded-2xl">
                                    <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-orange-500" /> Timings</h3>
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
                                    <h3 className="font-bold mb-4 flex items-center gap-2 text-orange-600">🔥 Aarti</h3>
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
                            <div className="mt-4 bg-muted/30 p-4 rounded-lg text-sm text-muted-foreground">
                                <strong>VIP Darshan:</strong> {darshan.vipOptions}
                            </div>
                        </section>

                        {/* 8.5. GALLERY */}
                        {gallery && <KedarnathGallery images={gallery} />}

                        {/* 9. FAQs (AEO) */}
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

                    </article>

                    {/* RIGHT SIDEBAR - STICKY */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">

                            {/* Book Now CTA */}
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-900 text-center">
                                <h3 className="font-bold text-xl font-serif mb-2">Planning Kedarnath?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get the best Helicopter & Trekking packages.</p>
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                    <Link to="/chardham-yatra-package">View Packages</Link>
                                </Button>
                            </div>

                            {/* Quick Navigation */}
                            <div className="bg-card p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    {['History', 'Spiritual', 'Dates', 'Reach', 'Trek', 'Panch Kedar', 'Darshan', 'FAQs'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="block text-muted-foreground hover:text-orange-600 transition-colors"
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

                            {/* Temperature Widget (Static for now) */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Thermometer className="h-8 w-8 text-blue-500" />
                                    <div>
                                        <p className="text-xs font-bold uppercase text-blue-700 dark:text-blue-300">Weather Today</p>
                                        <p className="font-bold text-lg">5°C</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Kedarnath</p>
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

export default KedarnathTemple;
