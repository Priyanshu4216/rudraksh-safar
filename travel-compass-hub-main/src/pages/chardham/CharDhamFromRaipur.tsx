import { raipurData } from '@/data/chardham/from-raipur-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Plane, Train, MapPin, CheckCircle2, Crown } from 'lucide-react';

const CharDhamFromRaipur = () => {
    const { meta, hero, transport, itinerary, faqs } = raipurData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-from-raipur" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Char Dham from Raipur"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-blue-600 mb-4 hover:bg-blue-700 border-none text-white px-4 py-1">
                            Raipur Exclusive
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]" asChild>
                            <Link to="/chardham-yatra-package">View Luxury Packages</Link>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* 1. TRANSPORT STRATEGY */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">{transport.title}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {transport.options.map((opt, idx) => (
                                <div key={idx} className={`bg-card rounded-2xl p-6 border ${opt.recommended ? 'border-blue-500 ring-2 ring-blue-100 dark:ring-blue-900/20' : 'border-border'} flex flex-col shadow-sm`}>
                                    {opt.recommended && (
                                        <div className="mb-4">
                                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Capital Choice</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-muted rounded-full">
                                            {opt.mode === 'Flight' ? <Plane className="h-6 w-6 text-blue-600" /> : <Train className="h-6 w-6 text-orange-600" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{opt.title}</h3>
                                            <p className="text-sm text-muted-foreground">{opt.route}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-1">
                                        <div>
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
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Estimated Time</p>
                                        <p className="font-mono text-lg">{opt.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. ITINERARY */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-border">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold flex justify-center items-center gap-2">
                                <Crown className="h-6 w-6 text-yellow-500" /> {itinerary.title}
                            </h2>
                            <p className="text-muted-foreground mt-2">Designed for comfort & convenience</p>
                        </div>

                        <div className="relative border-l-2 border-blue-200 dark:border-blue-800 ml-4 md:ml-12 space-y-8">
                            {itinerary.days.map((day, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                        <span className="font-black text-blue-600 text-lg">Day {day.day}</span>
                                        <h3 className="font-bold text-lg text-foreground">{day.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{day.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-center">Raipur Yatri FAQs</h2>
                        <div className="grid gap-4 max-w-3xl mx-auto">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-card p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <MapPin className="h-5 w-5 text-blue-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="text-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Request Flight Inclusive Quote</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamFromRaipur;
