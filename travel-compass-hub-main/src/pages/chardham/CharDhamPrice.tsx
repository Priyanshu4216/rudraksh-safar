import { priceData } from '@/data/chardham/price-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    HandCoins, TrendingUp, AlertTriangle, ShieldCheck,
    CheckCircle, XCircle, Info, Calculator
} from 'lucide-react';

const CharDhamPrice = () => {
    const { meta, overview, packages, ponyRates, helicopter, hiddenCosts, faqs } = priceData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-price" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO SECTION */}
                <div className="bg-slate-900 text-white py-16">
                    <div className="container text-center max-w-4xl">
                        <Badge className="bg-green-600 mb-4 hover:bg-green-700 border-none text-white">
                            <Calculator className="h-3 w-3 mr-1" /> Cost Guide 2026
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{overview.title}</h1>
                        <p className="text-slate-300 text-lg mb-8">{overview.subtitle}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">Last Updated: {overview.lastUpdated}</p>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* 1. SCAM ALERT (Critical Trust Builder) */}
                    <section className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full shrink-0">
                            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Critical Warning: Helicopter Tickets</h2>
                            <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed mb-4">
                                {helicopter.warning}
                            </p>
                            <div className="text-xs font-mono bg-white dark:bg-black/20 p-2 rounded inline-block">
                                Official Site: heliyatra.irctc.co.in
                            </div>
                        </div>
                    </section>

                    {/* 2. PACKAGE COMPARISON */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                            <TrendingUp className="h-8 w-8 text-blue-600" /> Package Cost Estimator
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {packages.map((pkg, idx) => (
                                <div key={idx} className={`
                   relative p-6 rounded-2xl border 
                   ${pkg.category === 'Standard' ? 'border-blue-500 ring-4 ring-blue-50 dark:ring-blue-900/20 shadow-xl scale-105 z-10 bg-card' : 'border-border bg-card/50'}
                 `}>
                                    {pkg.category === 'Standard' && (
                                        <div className="absolute top-0 right-0 left-0 -mt-3 text-center">
                                            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-2 text-center">{pkg.category}</h3>
                                    <div className="text-2xl font-bold text-center text-blue-600 mb-6">{pkg.perPerson} <span className="text-xs text-muted-foreground font-normal">/ person</span></div>

                                    <div className="space-y-4 text-sm">
                                        <div className="space-y-2">
                                            <p className="font-semibold text-xs uppercase text-muted-foreground">Includes:</p>
                                            <ul className="space-y-1">
                                                {pkg.inclusions.map((inc, i) => (
                                                    <li key={i} className="flex gap-2 text-foreground/80">
                                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> {inc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-semibold text-xs uppercase text-muted-foreground">Excludes:</p>
                                            <ul className="space-y-1">
                                                {pkg.exclusions.map((exc, i) => (
                                                    <li key={i} className="flex gap-2 text-muted-foreground">
                                                        <XCircle className="h-4 w-4 text-red-400 shrink-0" /> {exc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. OFFICIAL RATES GRID */}
                    <section className="grid md:grid-cols-2 gap-12">

                        {/* Pony Rates */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <HandCoins className="h-6 w-6 text-orange-500" /> {ponyRates.title}
                            </h2>
                            <div className="bg-card border border-border rounded-xl overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted text-muted-foreground">
                                        <tr>
                                            <th className="p-4 font-medium">Service</th>
                                            <th className="p-4 font-medium">Rate Area</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {ponyRates.rates.map((rate, i) => (
                                            <tr key={i} className="hover:bg-muted/50">
                                                <td className="p-4 font-medium">{rate.service}</td>
                                                <td className="p-4">
                                                    <div className="font-bold text-foreground">{rate.price}</div>
                                                    <div className="text-xs text-muted-foreground">{rate.note}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Helicopter Rates */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <TrendingUp className="h-6 w-6 text-blue-500" /> {helicopter.title}
                            </h2>
                            <div className="bg-card border border-border rounded-xl overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted text-muted-foreground">
                                        <tr>
                                            <th className="p-4 font-medium">Route</th>
                                            <th className="p-4 font-medium">Est. Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {helicopter.routes.map((rate, i) => (
                                            <tr key={i} className="hover:bg-muted/50">
                                                <td className="p-4 font-medium">{rate.service}</td>
                                                <td className="p-4">
                                                    <div className="font-bold text-foreground">{rate.price}</div>
                                                    <div className="text-xs text-muted-foreground">{rate.note}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </section>

                    {/* 4. HIDDEN COSTS (Trust Builder) */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Info className="h-6 w-6 text-purple-500" /> {hiddenCosts.title}
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {hiddenCosts.items.map((item, idx) => (
                                <div key={idx} className="bg-card p-5 rounded-xl border border-border hover:border-purple-500 transition-colors">
                                    <h3 className="font-bold text-foreground mb-1">{item.item}</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-bold text-lg mb-2">{item.cost}</p>
                                    <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. FAQs */}
                    <section className="bg-muted/30 p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-background p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="text-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Get a Custom Quote</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamPrice;
