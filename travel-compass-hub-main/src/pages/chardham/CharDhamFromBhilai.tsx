import { bhilaiData } from '@/data/chardham/from-bhilai-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Train, Plane, MapPin, Calendar, CheckCircle2, ArrowRight, TrainFront } from 'lucide-react';

const CharDhamFromBhilai = () => {
    const { meta, hero, transport, itinerary, faqs } = bhilaiData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-from-bhilai" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Char Dham from Bhilai"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-orange-600 mb-4 hover:bg-orange-700 border-none text-white px-4 py-1">
                            Bhilai / Durg / Raipur Special
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px]" asChild>
                            <Link to="/chardham-yatra-package">View Packages</Link>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* 1. TRANSPORT STRATEGY */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Logistics: Reaching the Himalayas</h2>

                        {/* ALERT */}
                        {bhilaiData.bookingTips && (
                            <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-8">
                                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">📢 Important Booking Tip</h3>
                                <ul className="list-disc pl-5 text-sm text-red-700 dark:text-red-400 space-y-1">
                                    {bhilaiData.bookingTips.map((tip, i) => (
                                        <li key={i}>{tip.replace(/\*\*/g, '')}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {transport.options.map((opt, idx) => (
                                <div key={idx} className={`bg-card rounded-2xl p-6 border ${opt.recommended ? 'border-orange-500 ring-2 ring-orange-100 dark:ring-orange-900/20' : 'border-border'} flex flex-col`}>
                                    {opt.recommended && (
                                        <div className="mb-4">
                                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Recommended for Families</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-muted rounded-full">
                                            {opt.mode === 'Train' ? <TrainFront className="h-6 w-6 text-blue-600" /> : <Plane className="h-6 w-6 text-sky-500" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{opt.title}</h3>
                                            <p className="text-sm text-muted-foreground">{opt.route}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <p className="text-sm font-semibold mb-2">Pros:</p>
                                            <ul className="grid gap-1">
                                                {opt.pros.map((p, i) => (
                                                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-border">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</p>
                                        <p className="font-mono text-lg">{opt.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TRAIN TABLE */}
                        {bhilaiData.trainTable && (
                            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-slate-100 dark:bg-slate-900 px-6 py-4 border-b border-border">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Train className="h-5 w-5 text-orange-600" />
                                        Recommended Trains from Durg/Raipur
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                                            <tr>
                                                <th className="px-6 py-3">Train</th>
                                                <th className="px-6 py-3">Departs (Durg)</th>
                                                <th className="px-6 py-3">Arrives</th>
                                                <th className="px-6 py-3">Frequency</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bhilaiData.trainTable.map((train, i) => (
                                                <tr key={i} className="border-b border-border last:border-none hover:bg-muted/20">
                                                    <td className="px-6 py-4 font-medium">
                                                        {train.trainNo} - {train.name}
                                                    </td>
                                                    <td className="px-6 py-4">{train.departure}</td>
                                                    <td className="px-6 py-4">{train.arrival}</td>
                                                    <td className="px-6 py-4 text-muted-foreground">{train.days}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* KEDARNATH SPECIFIC CTA */}
                        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2 text-orange-800 dark:text-orange-400">
                                    <MapPin className="h-6 w-6" /> Planning only for Kedarnath?
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                                    Check our dedicated guide for Bhilai to Kedarnath Yatra 2026. Includes detailed itinerary, helicopter booking, and exclusive packages.
                                </p>
                            </div>
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white shrink-0" asChild>
                                <Link to="/bhilai-to-kedarnath-yatra-package-2026">View Kedarnath Guide</Link>
                            </Button>
                        </div>

                    </section>

                    {/* 2. ITINERARY */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-border">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold">{itinerary.title}</h2>
                            <p className="text-muted-foreground mt-2">Designed for travellers from Chhattisgarh</p>
                        </div>

                        <div className="relative border-l-2 border-orange-200 dark:border-orange-800 ml-4 md:ml-12 space-y-8">
                            {itinerary.days.map((day, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-orange-500 border-4 border-white dark:border-slate-900" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                        <span className="font-black text-orange-600 text-lg">Day {day.day}</span>
                                        <h3 className="font-bold text-lg text-foreground">{day.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{day.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-center">Bhilai Traveller FAQs</h2>
                        <div className="grid gap-4 max-w-3xl mx-auto">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-card p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <MapPin className="h-5 w-5 text-orange-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="text-center">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Get Quote from Durg/Raipur</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamFromBhilai;
