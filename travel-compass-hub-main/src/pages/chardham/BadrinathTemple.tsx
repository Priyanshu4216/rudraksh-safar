import { badrinathData } from '@/data/chardham/badrinath-data';
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
    Camera, ArrowRight, Droplets, BookOpen, Map as MapIcon, CloudRain
} from 'lucide-react';

import TempleSchema from '@/components/seo/TempleSchema';
import FAQSection from '@/components/seo/FAQSection';

const BadrinathTemple = () => {
    const {
        meta, overview, history, spiritual, dates,
        reach, trek, darshan, nearby, stay, faqs
    } = badrinathData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/badrinath-temple" />
            </Helmet>

            <TempleSchema
                data={{
                    id: 'badrinath',
                    name: 'Badrinath Temple',
                    description: meta.description,
                    image: overview.bgImage,
                    address: {
                        locality: 'Badrinath',
                        region: 'Uttarakhand',
                        country: 'IN'
                    },
                    geo: {
                        latitude: '30.7433',
                        longitude: '79.4938'
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
                        alt="Badrinath Temple"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />

                    <div className="container relative h-full flex flex-col justify-end pb-16 z-10 text-white">
                        <div className="max-w-4xl">
                            <Badge className="bg-yellow-500 mb-4 hover:bg-yellow-600 border-none text-black font-bold">
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
                                    <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Legend of the Badri Tree</h3>
                                    <ul className="space-y-4">
                                        {history.legends.map((legend, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-4xl text-yellow-500 font-serif leading-none">“</span>
                                                <p className="italic">{legend}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                                    {history.timeline.map((t, idx) => (
                                        <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center">
                                            <span className="block text-2xl font-bold text-yellow-600 mb-1">{t.year}</span>
                                            <span className="text-sm text-muted-foreground">{t.event}</span>
                                        </div>
                                    ))}
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

                        {/* Tapt Kund Feature */}
                        <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                                    <Droplets className="h-6 w-6 text-blue-400" /> The Miracle of Tapt Kund
                                </h3>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Just below the temple lies the Tapt Kund, a natural hot water spring.
                                    Despite the freezing surroundings, the water remains at a steaming <strong>45°C</strong> year-round.
                                    It is rich in sulfur and believed to cure skin diseases.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                                    <Info className="h-4 w-4 text-yellow-400" />
                                    <span>Mandatory Ritual: Pilgrims must take a dip here before entering the main temple.</span>
                                </div>
                            </div>
                        </section>

                        {/* 5. HOW TO REACH */}
                        <section id="reach" className="scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 p-2 rounded-lg"><MapIcon className="h-6 w-6" /></span>
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

                        {/* 6. MANA VILLAGE (CLUSTER) */}
                        <section id="mana" className="scroll-mt-24">
                            <div className="border border-border rounded-3xl p-8 bg-card">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-serif font-bold mb-3 flex items-center gap-2">
                                            <BookOpen className="h-6 w-6 text-yellow-600" /> Mana Village (3 km away)
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            Previously known as the "Last Indian Village", now proudly called the
                                            <strong> "First Indian Village"</strong>.
                                            It is steeped in Mahabharata legends.
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-2 text-sm font-medium">
                                                <ArrowRight className="h-4 w-4 text-yellow-500 mt-0.5" />
                                                <span><strong>Vyas Gufa:</strong> Where Sage Vyasa composed the Mahabharata.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm font-medium">
                                                <ArrowRight className="h-4 w-4 text-yellow-500 mt-0.5" />
                                                <span><strong>Bhim Pul:</strong> A massive rock bridge placed by Bhima over the Saraswati river.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm font-medium">
                                                <ArrowRight className="h-4 w-4 text-yellow-500 mt-0.5" />
                                                <span><strong>Saraswati River:</strong> The only place where this mystical river is visible.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-muted rounded-xl bg-[url('https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=800')] bg-cover bg-center shadow-lg transform rotate-2 hover:rotate-0 transition-all" />
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

                        <section className="mb-12">
                            <FAQSection title="Frequently Asked Questions" faqs={faqs} />
                        </section>

                    </article>

                    {/* RIGHT SIDEBAR */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">

                            {/* Book Now CTA */}
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-900 text-center">
                                <h3 className="font-bold text-xl font-serif mb-2">Planning Badrinath?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Explore our Do Dham & Char Dham packages.</p>
                                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black" asChild>
                                    <Link to="/chardham-yatra-package">View Packages</Link>
                                </Button>
                            </div>

                            {/* Quick Navigation */}
                            <div className="bg-card p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    {['History', 'Spiritual', 'Reach', 'Mana', 'Darshan', 'FAQs'].map((item) => (
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

                            {/* Key Dates (Consistency Fix) */}
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-900">
                                <h3 className="font-bold mb-4 flex items-center gap-2"><Calendar className="h-4 w-4 text-yellow-600" /> 2026 Yatra Dates</h3>
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
                                        <p className="font-bold text-lg">8°C</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Badrinath</p>
                                    <CloudRain className="h-4 w-4 ml-auto text-blue-400" />
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </main>

            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">The Significance of Badrinath Temple</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Perched at an elevation of 3,133 meters (10,279 feet) along the banks of the Alaknanda River, the **Badrinath Temple** is one of the most universally revered shrines in the Hindu religion. Unlike the arduous trek required for Kedarnath, Badrinath is easily accessible by motorable roads, making it a prominent focal point for elders and families completing the Char Dham Yatra.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            According to the Puranas, Lord Vishnu meditated here for thousands of years. To protect him from the harsh Himalayan weather, Goddess Lakshmi took the form of a Badri tree (jujube tree), spreading her branches over him—giving the location its name, "Badri-nath" (Lord of the Badri tree). Architecturally, the temple features a distinct, brightly painted facade with a conical roof topped by a small cupola, shining against the backdrop of the imposing Neelkanth peak.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Key Rituals and Darshan Information</h2>
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Maha Abhishek Pooja</h3>
                                <p className="text-muted-foreground">The most sacred ritual performed at Badrinath. Devotees must book in advance. The ritual involves the holy bathing of the Shaligram-stone idol of Lord Badrinarayan with milk, ghee, and local herbs.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Tapt Kund (Hot Sulphur Spring)</h3>
                                <p className="text-muted-foreground">Located just below the temple, taking a holy dip in the natural thermal springs of Tapt Kund is customary before entering the temple for Darshan. The water is naturally heated to around 45°C despite the freezing temperatures outside.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Mana Village Sightseeing</h3>
                                <p className="text-muted-foreground">Situated just 3 km from the Badrinath temple, Mana is the "Last Indian Village" before the Tibet border. Key attractions include Vyas Gufa (where sage Vyasa dictated the Mahabharata), Ganesh Gufa, and the roaring Saraswati river originating at Bhim Pul.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">How to Reach Badrinath</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Badrinath features excellent road connectivity compared to the other Dham shrines.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>By Air:</strong> The nearest airport is Jolly Grant Airport in Dehradun (314 km away). Pawan Hans offers helicopter flights connecting Dehradun and Phata to the Badrinath helipad.</li>
                            <li><strong>By Train:</strong> Rishikesh is the nearest major railhead (295 km away). From there, National Highway 7 connects directly to Badrinath via Devprayag, Rudraprayag, Karnaprayag, and Joshimath.</li>
                            <li><strong>By Road:</strong> Taxis and regular state buses ply from Haridwar and Rishikesh. The final stretch from Joshimath to Badrinath involves restricted gate timings to regulate mountain traffic.</li>
                        </ul>
                    </div>


                    <div className="mt-12 border-t pt-12 border-border/50">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Link to="/chardham/KedarnathTemple" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium tracking-wide">Kedarnath Guide</Link>
                                <Link to="/chardham/GangotriTemple" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium tracking-wide">Gangotri Guide</Link>
                                <Link to="/chardham/YamunotriTemple" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium tracking-wide">Yamunotri Guide</Link>
                                <Link to="/chardham/CharDhamRegistration" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium tracking-wide">Yatra Registration</Link>
                                <Link to="/chardham-yatra-package" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium tracking-wide">Explore Tour Packages</Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-4">Badrinath Travel Tips & Pilgrim Guidance</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-orange-600 mb-3">Best Time to Visit Badrinath</h3>
                                <p className="text-muted-foreground mb-3">
                                    Badrinath remains accessible for only six months a year. The ideal visiting windows are May to June (peak summer) and September to late October (post-monsoon).
                                </p>
                                <p className="text-muted-foreground">
                                    During the winter months (November to April), heavy snow renders the town inaccessible. The presiding deity is temporarily relocated to Pandukeshwar for winter worship.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-blue-600 mb-3">Road Access & Altitude</h3>
                                <p className="text-muted-foreground mb-3">
                                    Altitude: 3,133 meters (10,279 ft). While lower than Kedarnath, the air is still thin. Acclimatization is essential.
                                </p>
                                <p className="text-muted-foreground">
                                    The town is highly accessible by motorable road right up to the temple perimeter. However, the route features strict traffic gating operations between Joshimath and Badrinath to manage mountain traffic safely.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Accommodation & Food</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Because Badrinath is fully motorable, it boasts a much wider spectrum of hotels compared to Kedarnath—ranging from budget Dharamshalas and GMVN guest houses to premium luxury hotels. Traditional Indian vegetarian food (Sattvic diet) without onion and garlic is strictly adhered to in and around the sanctuary area.
                        </p>

                        {/* Conversion Layer */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                            <h3 className="text-3xl font-bold mb-4">Plan Your Badrinath Yatra</h3>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Want to visit Badrinath temple with the comfort of a private Tempo Traveller and pre-booked premium hotels? Contact our Yatra experts today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://wa.me/919203650311?text=I%20want%20to%20plan%20Badrinath%20Yatra" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                    Enquire on WhatsApp
                                </a>
                                <Link to="/chardham-yatra-package" className="bg-white text-orange-600 font-bold border-2 border-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition">
                                    View Char Dham Packages
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BadrinathTemple;
