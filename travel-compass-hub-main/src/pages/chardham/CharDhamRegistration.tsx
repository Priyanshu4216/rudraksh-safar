import { registrationData } from '@/data/chardham/registration-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    Smartphone, Monitor, Map as MapIcon, QrCode, FileCheck, ShieldCheck, AlertTriangle,
    CheckCircle2, Globe, ExternalLink
} from 'lucide-react';

const CharDhamRegistration = () => {
    const { meta, hero, whyRegister, methods, documents, faqs } = registrationData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-registration-process" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Char Dham Registration"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-blue-600 mb-4 hover:bg-blue-700 border-none text-white px-4 py-1">
                            Official Process Guide
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]" asChild>
                            <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener noreferrer">
                                Visit Official Portal <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* WHY REGISTER? */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-border">
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">{whyRegister.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {whyRegister.reasons.map((reason, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="mx-auto bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                        <reason.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                                    <p className="text-sm text-muted-foreground">{reason.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* HOW TO REGISTER (METHODS) */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">3 Ways to Register</h2>
                        <div className="space-y-12">
                            {methods.map((method, idx) => (
                                <div key={idx} className={`bg-card border ${method.recommended ? 'border-green-500 ring-1 ring-green-100' : 'border-border'} rounded-2xl p-6 md:p-8`}>
                                    <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-6">
                                        <div>
                                            {method.recommended && <Badge className="bg-green-600 mb-2">Recommended</Badge>}
                                            <h3 className="text-2xl font-bold">{method.title}</h3>
                                        </div>
                                        <div className="flex gap-2 text-sm">
                                            {method.pros.map((pro, i) => (
                                                <Badge key={i} variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                                                    <CheckCircle2 className="h-3 w-3 mr-1" /> {pro}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-4 gap-6">
                                        {method.steps.map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-foreground font-bold mb-3 border border-border">
                                                    {i + 1}
                                                </div>
                                                <h4 className="font-semibold mb-1">{step.title}</h4>
                                                <p className="text-xs text-muted-foreground">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DOCUMENTS REQUIRED */}
                    <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileCheck className="h-6 w-6 text-blue-600" /> Required Documents
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {documents.map((doc, i) => (
                                <div key={i} className="bg-white dark:bg-blue-950/40 p-4 rounded-xl border border-blue-200 dark:border-blue-900 flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                                    <span className="font-medium text-sm">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-center">Registration FAQs</h2>
                        <div className="grid gap-4 max-w-3xl mx-auto">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-card p-5 rounded-xl border border-border">
                                    <h3 className="font-bold mb-2 flex gap-2">
                                        <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0" /> {faq.question}
                                    </h3>
                                    <p className="text-sm text-muted-foreground ml-7">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">Need help with registration? We include it in our package.</p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Book Package & Get Free Registration</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamRegistration;
