import { gangotriData } from '@/data/chardham/gangotri-data';
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
    Camera, ArrowRight, Droplets, Wind, Map as MapIcon, CloudRain
} from 'lucide-react';

import TempleSchema from '@/components/seo/TempleSchema';
import FAQSection from '@/components/seo/FAQSection';

const GangotriTemple = () => {
    const {
        meta, overview, history, spiritual, dates,
        reach, darshan, nearby, stay, faqs
    } = gangotriData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/gangotri-temple" />
            </Helmet>

            <TempleSchema
                data={{
                    id: 'gangotri',
                    name: 'Gangotri Temple',
                    description: meta.description,
                    image: overview.bgImage,
                    address: {
                        locality: 'Gangotri',
                        region: 'Uttarakhand',
                        country: 'IN'
                    },
                    geo: {
                        latitude: '30.9947',
                        longitude: '78.9398'
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
                        alt="Gangotri Temple"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />

                    <div className="container relative h-full flex flex-col justify-end pb-16 z-10 text-white">
                        <div className="max-w-4xl">
                            <Badge className="bg-blue-600 mb-4 hover:bg-blue-700 border-none text-white">
                                {overview.subtitle}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{overview.title}</h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                {overview.highlights.map((item, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="flex items-center gap-2 text-blue-300 mb-1">
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
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-lg"><Info className="h-6 w-6" /></span>
                                History & Legend
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
                                <p className="mb-4"><strong className="text-foreground">Origin:</strong> {history.origin}</p>

                                <div className="my-8 bg-muted/50 p-6 rounded-2xl border-l-4 border-blue-500">
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Legend of Bhagirath</h3>
                                    <ul className="space-y-4">
                                        {history.legends.map((legend, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-4xl text-blue-300 font-serif leading-none">“</span>
                                                <p className="italic">{legend}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                                    {history.timeline.map((t, idx) => (
                                        <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center">
                                            <span className="block text-2xl font-bold text-blue-600 mb-1">{t.year}</span>
                                            <span className="text-sm text-muted-foreground">{t.event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. SPIRITUAL SIGNIFICANCE */}
                        <section id="spiritual" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-lg"><ShieldCheck className="h-6 w-6" /></span>
                                Spiritual Significance
                            </h2>
                            <div className="bg-blue-50 dark:bg-blue-950/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/20">
                                <p className="text-lg mb-6 leading-relaxed">{spiritual.significance}</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Core Beliefs</h3>
                                        <ul className="space-y-2">
                                            {spiritual.beliefs.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Daily Rituals</h3>
                                        <ul className="space-y-2">
                                            {spiritual.rituals.map((r, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gaumukh Feature */}
                        <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                                    <Mountain className="h-6 w-6 text-white" /> The Gaumukh Glacier Trek
                                </h3>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    For the adventurous soul, the true source of the Ganga lies 19 km further up at Gaumukh.
                                    The trek passes through the stunning Bhojbasa (Birch forests).
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                                    <Info className="h-4 w-4 text-blue-300" />
                                    <span>Requires a permit from the Forest Department (Apply Online).</span>
                                </div>
                            </div>
                        </section>

                        {/* 5. HOW TO REACH */}
                        <section id="reach" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-lg"><MapIcon className="h-6 w-6" /></span>
                                How to Reach
                            </h2>

                            <div className="space-y-8">
                                <div className="grid gap-4">
                                    <div className="bg-secondary/10 p-5 rounded-xl">
                                        <h3 className="font-bold flex items-center gap-2 mb-2">🚗 By Road</h3>
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
                            </div>
                        </section>

                        {/* 8. DARSHAN PROCESS */}
                        <section id="darshan" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Darshan & Aarti Guide</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-card border border-border p-6 rounded-2xl">
                                    <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-blue-500" /> Timings</h3>
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
                                    <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-600">🔥 Ganga Aarti</h3>
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
                        <section id="faqs" className="scroll-mt-24 mb-12">
                            <FAQSection title="Frequently Asked Questions" faqs={faqs} />
                        </section>

                        {/* --- DEEP SEO CONTENT BLOCKS --- */}
                        <section id="deep-seo" className="py-16 bg-muted/20 mt-12 mb-12 rounded-3xl">
                            <div className="container mx-auto px-4 max-w-4xl space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">The Ultimate Gangotri Pilgrimage Guide</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                        Perched at an altitude of 3,100 meters amidst the towering Garhwal Himalayas, Gangotri is the spiritual source of India's most sacred river, the Ganges. The white granite temple, built in the 18th century by Amar Singh Thapa, stands on the banks of the Bhagirathi river (as the Ganges is known before Devprayag). For millions of devotees, a pilgrimage to Gangotri represents the washing away of ancestral sins and the ultimate quest for purity.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                        According to legend, King Bhagirath meditated here intensely for a thousand years to bring the cosmic river Ganges down to Earth to grant salvation to his ancestors. Lord Shiva caught the mighty river in his matted locks to save the Earth from its destructive force. The sheer mythological weight of this location makes it the most revered Dham for ritual bathing and collecting the holy Gangajal.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Travel Logistics & The Route to Gangotri</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                        Unlike Kedarnath or Yamunotri, Gangotri boasts excellent road connectivity right up to the temple precinct. The mesmerizing drive from Uttarkashi to Gangotri takes you through the lush, dense deodar forests of the Gangotri National Park, crossing the breathtaking bridge at Lanka and the apple orchards of Harsil.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                        <li><strong>The Harsil Advantage:</strong> Many pilgrims experiencing high-altitude sickness prefer to stay in the picturesque cantonment town of Harsil (70 km before Gangotri) and make a day trip to the temple.</li>
                                        <li><strong>Gomukh Trek (Advanced):</strong> The actual physical origin of the river is the Gomukh Glacier, an arduous 18-km uphill trek from the temple. This requires special permits from the forest department and is only recommended for seasoned trekkers.</li>
                                        <li><strong>Acclimatization at Uttarkashi:</strong> We strongly advise spending a night in Uttarkashi (1,158m) before proceeding to the 3,100m elevation of Gangotri to prevent Acute Mountain Sickness (AMS).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <Link to="/chardham/KedarnathTemple" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Kedarnath Guide</Link>
                                        <Link to="/chardham/BadrinathTemple" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Badrinath Guide</Link>
                                        <Link to="/chardham/YamunotriTemple" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Yamunotri Guide</Link>
                                        <Link to="/chardham/CharDhamRegistration" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Yatra Registration</Link>
                                        <Link to="/chardham/CharDhamRouteMap" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Char Dham Route</Link>
                                        <Link to="/chardham-yatra-package" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Explore Tour Packages</Link>
                                    </div>
                                </div>

                                {/* Conversion Layer */}
                                <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl border-2 border-blue-500 text-center my-10">
                                    <h3 className="text-3xl font-bold mb-4">Plan Your Gangotri & Do-Dham Yatra</h3>
                                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                        Experience the divinity of the Ganges with our all-inclusive packages. We provide premium tempo travelers, exceptional hotel stays in Harsil, and expert local guidance.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <a href="https://wa.me/919203650311?text=Gangotri%20Yatra%20Enquiry" target="_blank" className="bg-blue-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-blue-700 transition">
                                            WhatsApp Enquiry
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* RIGHT SIDEBAR */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">

                            {/* Book Now CTA */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-900 text-center">
                                <h3 className="font-bold text-xl font-serif mb-2">Planning Gangotri?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Book your Chota Char Dham Yatra today.</p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
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
                                            className="block text-muted-foreground hover:text-blue-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Key Dates */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-900">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-600" /> 2026 Yatra Dates</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Opening</span>
                                        <p className="font-medium text-sm">{dates.opening}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Closing</span>
                                        <p className="font-medium text-sm">{dates.closing}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Winter Seat</span>
                                        <p className="font-medium text-sm">{dates.winterSeat}</p>
                                    </div>
                                </div>
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
                                        <p className="font-bold text-lg">10°C</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Gangotri</p>
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

export default GangotriTemple;
