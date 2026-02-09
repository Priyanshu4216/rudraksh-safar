import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { thaiCities, thailandFAQs } from '@/data/thailand/master';
import SmartImage from '@/components/SmartImage';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ShoppingBag, Utensils, Music, Waves, ArrowLeft, Plane } from 'lucide-react';
import NotFound from '@/pages/NotFound';

const ThailandCityGuide = () => {
    const { cityId } = useParams<{ cityId: string }>();
    const city = thaiCities.find(c => c.id === cityId);

    if (!city) {
        return <NotFound />;
    }

    // Dynamic icon based on city type
    const getHeroIcon = () => {
        if (city.id === 'bangkok') return <ShoppingBag className="w-6 h-6" />;
        if (city.id === 'pattaya') return <Music className="w-6 h-6" />;
        return <Waves className="w-6 h-6" />;
    };

    return (
        <>
            <Helmet>
                <title>{city.name} Tour Packages from India | Attractions & Nightlife</title>
                <meta name="description" content={`Best ${city.name} tour packages. Explore ${city.highlights.join(', ')}. Complete guide by Rudraksh Safar.`} />
                <link rel="canonical" href={`https://rudrakshsafar.com/thailand-tour-packages/${city.id}`} />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-foreground">

                {/* HERO */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <SmartImage
                            src={city.image}
                            alt={city.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
                    </div>

                    <div className="relative z-10 container text-center text-white">
                        <Link to="/thailand-tour-packages" className="inline-flex items-center text-slate-300 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Thailand Hub
                        </Link>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {city.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light mb-8">
                            {city.alias}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {city.bestFor.map((tag, i) => (
                                <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OVERVIEW & HIGHLIGHTS */}
                <div className="container py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 text-orange-600">Why Visit {city.name}?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {city.description}
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Whether you are looking for {city.bestFor[0].toLowerCase()} or {city.bestFor[1].toLowerCase()},
                                {city.name} offers an unforgettable experience.
                            </p>

                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" /> Top Attractions
                            </h3>
                            <ul className="space-y-3">
                                {city.highlights.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Plan Your {city.name} Trip</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm">
                                        <Plane className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Nearest Airport</p>
                                        <p className="font-medium">{city.id === 'pattaya' ? 'Bangkok (BKK/DMK)' : 'International Airport'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm">
                                        <Utensils className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Food</p>
                                        <p className="font-medium">Indian & Veg Options Available</p>
                                    </div>
                                </div>
                            </div>
                            {city.id === 'pattaya' ? (
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 text-lg" asChild>
                                    <Link to="/package/thailand">View Pattaya Package</Link>
                                </Button>
                            ) : (
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 text-lg" asChild>
                                    <Link to="/plan-your-thailand-trip">Get Customized Quote</Link>
                                </Button>
                            )}
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                100% Customizable Packages from Raipur/Bhilai
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ SHORT */}
                <div className="bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800">
                    <div className="container max-w-3xl">
                        <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
                        <div className="space-y-4">
                            {thailandFAQs.slice(0, 2).map((faq, i) => (
                                <div key={i} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h4 className="font-bold mb-2">{faq.question}</h4>
                                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
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

export default ThailandCityGuide;
