import { seniorData } from '@/data/chardham/senior-citizen-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    HeartPulse, UserCheck, Clock, MapPin, Stethoscope,
    ThumbsUp, ThumbsDown, Accessibility, Mountain, Thermometer, BriefcaseMedical, CheckCircle2
} from 'lucide-react';

const CharDhamSeniors = () => {
    const { meta, hero, challenges, palkiVsHeli, medicalSafety, slowItinerary, packingList, faqs } = seniorData;

    const getIcon = (iconName: any) => {
        // Mapping icons manually if needed or passing component directly
        // In data file we passed the component reference, so we can use it directly if it's a valid React component
        return iconName;
    };

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-for-seniors" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO SECTION */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Senior Citizens at Char Dham"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-emerald-600 mb-4 hover:bg-emerald-700 border-none text-white px-4 py-1">
                            Geriatric Care Specialist
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[200px]" asChild>
                            <Link to="/chardham-yatra-package">Plan a Safe Yatra</Link>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* 1. THE CHALLENGE (Empathy) */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Understanding the Risk</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {challenges.items.map((item, idx) => (
                                <div key={idx} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                                    <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-full flex items-center justify-center text-red-600 mb-4">
                                        {/* Ideally render dynamic icon, fallback for now */}
                                        <HeartPulse className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. THE STRATEGY (Solution - Slow Itinerary) */}
                    <section className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <Badge className="bg-emerald-600 mb-4">Recommended Strategy</Badge>
                                <h2 className="text-3xl font-serif font-bold mb-4">{slowItinerary.title}</h2>
                                <p className="text-emerald-900 dark:text-emerald-100 text-lg mb-6">{slowItinerary.description}</p>

                                <div className="bg-white dark:bg-emerald-950/40 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center gap-2">
                                        <Clock className="h-5 w-5" /> The Difference
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-xs uppercase text-red-500 font-bold mb-2">Standard (9 Days) - RUSHED</p>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {slowItinerary.difference.standard.map((step, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-red-400">×</span> {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase text-emerald-600 font-bold mb-2">Senior Friendly (12 Days) - RELAXED</p>
                                            <ul className="space-y-2 text-sm text-foreground">
                                                {slowItinerary.difference.seniorFriendly.map((step, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. PALKI VS HELI (Decision Framework) */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center flex items-center justify-center gap-3">
                            <Accessibility className="h-8 w-8 text-blue-600" /> Palki or Helicopter?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {palkiVsHeli.comparison.map((mode, idx) => (
                                <div key={idx} className="bg-card rounded-2xl p-6 border border-border flex flex-col">
                                    <h3 className="text-2xl font-bold mb-4 text-center">{mode.mode}</h3>

                                    <div className="space-y-6 flex-1">
                                        <div>
                                            <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                                                <ThumbsUp className="h-4 w-4" /> Pros
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                                {mode.pros.map((p, i) => <li key={i}>{p}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                                                <ThumbsDown className="h-4 w-4" /> Cons
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                                {mode.cons.map((c, i) => <li key={i}>{c}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-muted p-4 rounded-xl text-sm font-medium border-l-4 border-blue-500">
                                        {mode.recommendation}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. MEDICAL SAFETY & PACKING */}
                    <section className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <BriefcaseMedical className="h-6 w-6 text-red-500" /> {medicalSafety.title}
                            </h2>
                            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">Key Checkpoints</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {medicalSafety.checkpoints.map((cp, i) => (
                                            <Badge key={i} variant="secondary">{cp}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">doctor's Orders</h4>
                                    <ul className="space-y-3">
                                        {medicalSafety.tips.map((tip, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-foreground">
                                                <Stethoscope className="h-5 w-5 text-blue-500 shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <BriefcaseMedical className="h-6 w-6 text-orange-500" /> Essential Packing
                            </h2>
                            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900 rounded-xl p-6">
                                <ul className="grid gap-3">
                                    {packingList.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-white dark:bg-black/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
                                            <div className="h-2 w-2 rounded-full bg-orange-500" />
                                            <span className="font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 5. FAQs */}
                    <section className="bg-muted/30 p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-6 text-center">Senior Citizen FAQs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-background p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <UserCheck className="h-5 w-5 text-emerald-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamSeniors;
