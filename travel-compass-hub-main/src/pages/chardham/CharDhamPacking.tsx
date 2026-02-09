import { packingData } from '@/data/chardham/packing-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shirt, Pill, FileText, Zap, Umbrella, Ban, CheckCircle2, AlertTriangle, Download } from 'lucide-react';

const CharDhamPacking = () => {
    const { meta, hero, categories, dontPack, faqs } = packingData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/what-to-pack-for-chardham-yatra" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Packing for Char Dham"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-indigo-600 mb-4 hover:bg-indigo-700 border-none text-white px-4 py-1">
                            Expert Checklist
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 min-w-[200px]" onClick={() => window.print()}>
                            <Download className="mr-2 h-4 w-4" /> Print Checklist
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-4xl space-y-16">

                    {/* INTRODUCTION ALERT */}
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 flex gap-4 items-start">
                        <AlertTriangle className="h-6 w-6 text-indigo-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">Pack Light, Pack Smart</h3>
                            <p className="text-sm text-indigo-800 dark:text-indigo-200">
                                Remember, for Kedarnath and Yamunotri, every extra gram counts. Stick to this list.
                                Carry a 40-50L Backpack (Waterproof) and a small 10L Daypack for essentials.
                            </p>
                        </div>
                    </div>

                    {/* CHECKLIST CATEGORIES */}
                    <div className="space-y-12">
                        {categories.map((cat, idx) => (
                            <section key={idx} className="scroll-mt-20" id={cat.id}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600">
                                        {/* Rendering Icon dynamically */}
                                        <cat.icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{cat.title}</h2>
                                </div>

                                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                                    <div className="p-6 grid gap-4">
                                        {cat.items.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                                                <Checkbox id={`${cat.id}-${i}`} className="mt-1" />
                                                <label
                                                    htmlFor={`${cat.id}-${i}`}
                                                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                                                >
                                                    {item}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    {cat.tips.length > 0 && (
                                        <div className="bg-muted/50 p-4 text-sm text-muted-foreground border-t border-border">
                                            <span className="font-bold text-foreground">Pro Tip: </span>
                                            {cat.tips[0]}
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* DON'T PACK */}
                    <section className="bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl border border-red-100 dark:border-red-900">
                        <h2 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400 flex items-center gap-2">
                            <Ban className="h-6 w-6" /> What NOT to Pack (Strict No)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {dontPack.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-900/50">
                                    <Ban className="h-4 w-4 text-red-500 shrink-0" />
                                    <span className="font-medium text-sm text-red-900 dark:text-red-100">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-center">Packing FAQs</h2>
                        <div className="grid gap-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-card p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="text-center pt-8">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Ready to Go? Book Your Trip</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamPacking;
