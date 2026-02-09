import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Users, Hotel, ChevronRight, CheckCircle2,
    Calculator, RefreshCcw, PhoneCall, Info
} from 'lucide-react';
import {
    wizardSteps, dhamOptions, hotelOptions, calculateEstimate, packageBuilderSEO
} from '@/data/chardham/package-builder-data';

const CharDhamPackageBuilder = () => {
    const { meta, hero, seoContent } = packageBuilderSEO;

    // WIZARD STATE
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        departure: '',
        dham: '',
        date: '',
        pax: 2,
        hotel: ''
    });
    const [quote, setQuote] = useState<number | null>(null);

    const handleNext = () => setStep(prev => Math.min(prev + 1, 5)); // Updated max steps to 5
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
    const handleSelect = (key: string, value: any) => {
        setSelections(prev => ({ ...prev, [key]: value }));
    };

    const generateQuote = () => {
        const amt = calculateEstimate(selections.dham, selections.hotel, selections.pax);
        setQuote(amt);
        // We don't increment step here, we just show result which is conditioned on quote !== null
    };

    // PROGRESS BAR
    const progress = (step / 5) * 100; // Updated divisor

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/plan-your-yatra" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "Char Dham Yatra Cost Calculator",
                        "url": "https://rudrakshsafar.com/plan-your-yatra",
                        "applicationCategory": "TravelApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "description": "Custom Yatra Packages"
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground pb-20">

                {/* HERO */}
                <div className="relative h-[40vh] bg-slate-900 flex items-center justify-center text-center px-4">
                    <div className="absolute inset-0 opacity-40">
                        <img src={hero.image} alt="Plan Yatra" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 max-w-2xl">
                        <Badge className="bg-indigo-500 mb-4 hover:bg-indigo-600">Free Estimator</Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">{hero.title}</h1>
                        <p className="text-indigo-100 text-lg">{hero.subtitle}</p>
                    </div>
                </div>

                <div className="container -mt-16 relative z-20">
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

                        {/* LEFT: THE INTERACTIVE WIZARD */}
                        <div>
                            <Card className="p-6 md:p-8 shadow-xl border-indigo-100 dark:border-indigo-900 bg-card">

                                {quote === null ? (
                                    // FORM STEPS
                                    <>
                                        {/* Progress */}
                                        <div className="mb-8">
                                            <div className="flex justify-between items-end mb-2">
                                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                                    {wizardSteps[step - 1].icon && (
                                                        (() => {
                                                            const Icon = wizardSteps[step - 1].icon;
                                                            return <Icon className="h-6 w-6 text-indigo-600" />;
                                                        })()
                                                    )}
                                                    {wizardSteps[step - 1].title}
                                                </h2>
                                                <span className="text-sm text-muted-foreground">Step {step} of 5</span>
                                            </div>
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                            <p className="mt-2 text-muted-foreground">{wizardSteps[step - 1].subtitle}</p>
                                        </div>

                                        {/* Steps Content */}
                                        <div className="min-h-[300px]">

                                            {/* STEP 1: DEPARTURE (NEW) */}
                                            {step === 1 && (
                                                <div className="grid gap-4">
                                                    {['delhi', 'haridwar', 'mumbai', 'raipur', 'other'].map((cityId) => {
                                                        const isRaipurInfo = cityId === 'raipur';
                                                        const label = cityId === 'raipur' ? 'Raipur / Bhilai / Durg' :
                                                            cityId === 'delhi' ? 'Delhi (NCR)' :
                                                                cityId === 'haridwar' ? 'Haridwar / Rishikesh' :
                                                                    cityId === 'mumbai' ? 'Mumbai / Pune' : 'Other City';

                                                        return (
                                                            <div
                                                                key={cityId}
                                                                onClick={() => handleSelect('departure', cityId)}
                                                                className={cn(
                                                                    "p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-muted/50 flex items-center justify-between",
                                                                    selections.departure === cityId ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-border"
                                                                )}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className={cn("p-2 rounded-full", isRaipurInfo ? "bg-orange-100 text-orange-600" : "bg-muted")}>
                                                                        <MapPin className="h-5 w-5" />
                                                                    </div>
                                                                    <div>
                                                                        <h3 className="font-bold text-lg">{label}</h3>
                                                                        {isRaipurInfo && <span className="text-xs text-orange-600 font-bold">✨ Local Office Support Available</span>}
                                                                    </div>
                                                                </div>
                                                                {selections.departure === cityId && <CheckCircle2 className="h-6 w-6 text-indigo-600" />}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* STEP 2: DHAM */}
                                            {step === 2 && (
                                                <div className="grid gap-4">
                                                    {dhamOptions.map((opt) => (
                                                        <div
                                                            key={opt.id}
                                                            onClick={() => handleSelect('dham', opt.id)}
                                                            className={cn(
                                                                "p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-muted/50 flex items-center justify-between",
                                                                selections.dham === opt.id ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-border"
                                                            )}
                                                        >
                                                            <div>
                                                                <h3 className="font-bold text-lg">{opt.title}</h3>
                                                                <p className="text-sm text-muted-foreground">{opt.description}</p>
                                                            </div>
                                                            {selections.dham === opt.id && <CheckCircle2 className="h-6 w-6 text-indigo-600" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* STEP 3: DATES */}
                                            {step === 3 && (
                                                <div className="space-y-6">
                                                    <div className="grid gap-4 sm:grid-cols-2">
                                                        {['May', 'June', 'September', 'October'].map((month) => (
                                                            <Button
                                                                key={month}
                                                                variant={selections.date === month ? 'default' : 'outline'}
                                                                className={cn("h-16 text-lg", selections.date === month && "bg-indigo-600 hover:bg-indigo-700")}
                                                                onClick={() => handleSelect('date', month)}
                                                            >
                                                                {month} 2026
                                                            </Button>
                                                        ))}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground flex items-center gap-2 bg-secondary/50 p-3 rounded-lg">
                                                        <Info className="h-4 w-4" /> Best time for crisp views. Avoids monsoon rains.
                                                    </p>
                                                </div>
                                            )}

                                            {/* STEP 4: PAX */}
                                            {step === 4 && (
                                                <div className="space-y-8">
                                                    <div className="text-center py-8">
                                                        <span className="text-6xl font-bold text-indigo-600">{selections.pax}</span>
                                                        <p className="text-muted-foreground mt-2">Travellers</p>
                                                    </div>
                                                    <Slider
                                                        defaultValue={[2]}
                                                        max={20}
                                                        min={1}
                                                        step={1}
                                                        onValueChange={(val) => handleSelect('pax', val[0])}
                                                        className="py-4"
                                                    />
                                                    {selections.pax > 4 && (
                                                        <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm text-center font-medium">
                                                            🎉 Group Discount Applied (10%)
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* STEP 5: HOTEL */}
                                            {step === 5 && (
                                                <div className="grid gap-4">
                                                    {hotelOptions.map((opt) => (
                                                        <div
                                                            key={opt.id}
                                                            onClick={() => handleSelect('hotel', opt.id)}
                                                            className={cn(
                                                                "p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-muted/50 flex items-center justify-between",
                                                                selections.hotel === opt.id ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-border"
                                                            )}
                                                        >
                                                            <div>
                                                                <h3 className="font-bold text-lg">{opt.title}</h3>
                                                                <p className="text-sm text-muted-foreground">{opt.description}</p>
                                                            </div>
                                                            {selections.hotel === opt.id && <CheckCircle2 className="h-6 w-6 text-indigo-600" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Navigation */}
                                        <div className="flex justify-between mt-8 pt-4 border-t border-border">
                                            <Button variant="ghost" onClick={handleBack} disabled={step === 1}>Back</Button>

                                            {step < 5 ? (
                                                <Button
                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                                    onClick={handleNext}
                                                    disabled={
                                                        (step === 1 && !selections.departure) ||
                                                        (step === 2 && !selections.dham) ||
                                                        (step === 3 && !selections.date) ||
                                                        (step === 5 && !selections.hotel)
                                                    }
                                                >
                                                    Next Step <ChevronRight className="h-4 w-4 ml-2" />
                                                </Button>
                                            ) : (
                                                <Button
                                                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                                                    onClick={generateQuote}
                                                    disabled={!selections.hotel}
                                                >
                                                    <Calculator className="h-4 w-4 mr-2" /> Calculate Price
                                                </Button>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    // RESULT CARD
                                    <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                            <CheckCircle2 className="h-10 w-10" />
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2">Estimated Trip Cost</h2>
                                        <p className="text-muted-foreground mb-8">For {selections.pax} Travellers • {selections.hotel} Stay</p>

                                        {/* LOCAL AGENT BADGE */}
                                        {selections.departure === 'raipur' && (
                                            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6 max-w-sm mx-auto">
                                                <p className="text-orange-800 font-bold flex items-center justify-center gap-2">
                                                    <MapPin className="h-4 w-4" /> Local Office: Bhilai, CG
                                                </p>
                                                <p className="text-xs text-orange-700 mt-1">
                                                    Since you are from Chhattisgarh, we can arrange a home visit for booking!
                                                </p>
                                            </div>
                                        )}

                                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl mb-8 border border-border">
                                            <span className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Total Estimate</span>
                                            <div className="text-5xl font-black text-indigo-600 my-2">
                                                ₹{quote.toLocaleString()}
                                            </div>
                                            <p className="text-xs text-muted-foreground">*Excludes Helicopter & Personal Expenses</p>
                                        </div>

                                        <div className="flex flex-col gap-3 max-w-sm mx-auto">
                                            <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                                <Link to="/contact">Book This Package</Link>
                                            </Button>
                                            <Button variant="outline" onClick={() => { setQuote(null); setStep(1); }}>
                                                <RefreshCcw className="mr-2 h-4 w-4" /> Start Over
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        </div>

                        {/* RIGHT: SEO CONTENT (CRAWLABLE TEXT) */}
                        <div className="space-y-8">
                            {/* Why Use This */}
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="font-bold text-xl mb-4 text-indigo-600 font-serif">{seoContent.intro.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {seoContent.intro.text}
                                </p>
                                <ul className="space-y-3">
                                    {seoContent.benefits.map((b, i) => (
                                        <li key={i} className="flex gap-2 text-sm font-medium">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-xl border border-orange-100 dark:border-orange-900 text-center">
                                <PhoneCall className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">Talk to an Expert?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get a custom itinerary made just for you.</p>
                                <Button variant="outline" className="w-full border-orange-200 hover:bg-orange-100 hover:text-orange-700">
                                    +91 12345 67890
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* SEO FAQs SECTION (BELOW FOLD) */}
                    <div className="mt-20 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-center mb-8">Frequently Asked Questions</h2>
                        <div className="grid gap-4">
                            {seoContent.faqs.map((faq, i) => (
                                <div key={i} className="bg-card p-6 rounded-xl border border-border">
                                    <h3 className="font-bold text-lg mb-2 text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamPackageBuilder;
