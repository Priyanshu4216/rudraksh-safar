import { charDhamData } from '@/data/chardham/chardham';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Activity, AlertTriangle, ShieldCheck, Mountain } from 'lucide-react';

const CharDhamPillar = () => {
    return (
        <>
            <Helmet>
                <title>Char Dham Yatra 2026: Complete Guide, Packages & Registration | Rudraksh Safar</title>
                <meta
                    name="description"
                    content="The ultimate guide to Char Dham Yatra 2026. Get official opening dates, helicopter & road packages, medical safety tips, and route maps for Kedarnath, Badrinath, Gangotri & Yamunotri."
                />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-package" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?q=80&w=2692&auto=format&fit=crop"
                            alt="Himalayas Char Dham"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                    </div>

                    <div className="container relative z-10 text-center text-white">
                        <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 border-none text-white px-4 py-1 text-sm font-medium tracking-wide">
                            YATRA 2026 REGISTRATIONS OPEN
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            The Sacred <br /> <span className="text-orange-400">Char Dham Yatra</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-light">
                            Experience the divine journey to Yamunotri, Gangotri, Kedarnath, and Badrinath with Rudraksh Safar—Uttarakhand's most trusted pilgrimage partner.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px] h-14 text-lg">
                                View Packages
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm min-w-[200px] h-14 text-lg" asChild>
                                <Link to="/chardham-yatra-route-map">Interactive Map</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* ESSENTIAL TOOLS GRID (NEW) */}
                <section className="py-12 bg-white dark:bg-slate-950 border-b border-border">
                    <div className="container">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/chardham-yatra-route-map" className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-orange-500 transition-colors flex items-center gap-4">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-full group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Route Map</h3>
                                    <p className="text-sm text-muted-foreground">Distances & Pitstops</p>
                                </div>
                            </Link>
                            <Link to="/is-chardham-yatra-safe" className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-red-500 transition-colors flex items-center gap-4">
                                <div className="bg-red-100 text-red-600 p-3 rounded-full group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Safety Guide</h3>
                                    <p className="text-sm text-muted-foreground">Medical & Weather</p>
                                </div>
                            </Link>
                            <Link to="/chardham-yatra-price" className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-green-500 transition-colors flex items-center gap-4">
                                <div className="bg-green-100 text-green-600 p-3 rounded-full group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Official Prices</h3>
                                    <p className="text-sm text-muted-foreground">Pony, Heli & Taxi Rates</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Introduction & Legitimacy */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                                    Why is Char Dham the Ultimate Pilgrimage?
                                </h2>
                                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Nestled in the Garhwal Himalayas, the Char Dham Yatra is not just a trip; it is a quest for <strong>Moksha (Salvation)</strong>.
                                        From the source of the holy rivers Yamuna and Ganga to the abode of Lord Shiva at Kedarnath and Lord Vishnu at Badrinath,
                                        this journey cleanses the soul.
                                    </p>
                                    <p>
                                        At Rudraksh Safar, we understand the spiritual gravity and the physical challenge of this yatra.
                                        Whether you choose a <span className="text-foreground font-semibold">helicopter for comfort</span> or the <span className="text-foreground font-semibold">traditional road route for devotion</span>,
                                        we ensure your safety, comfort, and darshan priority.
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Authorized Partner', icon: ShieldCheck },
                                        { label: 'Medical Assistance', icon: Activity },
                                        { label: 'VIP Darshan', icon: MapPin },
                                        { label: 'Best Price Guarantee', icon: Mountain },
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40">
                                            <feature.icon className="h-5 w-5 text-orange-600" />
                                            <span className="font-medium text-foreground">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-600/10 rounded-3xl transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000&auto=format&fit=crop"
                                    alt="Gangotri Temple Scenic View"
                                    className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 4 Temples Grid */}
                <section id="temples" className="py-16 bg-muted/30">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">The Divine Circuit</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">The Four Abodes of God</h2>
                            <p className="mt-4 text-muted-foreground">The Yatra traditionally proceeds West to East: Yamunotri → Gangotri → Kedarnath → Badrinath.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.values(charDhamData.temples).map((temple) => (
                                <div key={temple.id} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={temple.image}
                                            alt={temple.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <h3 className="text-2xl font-serif font-bold mb-1">{temple.name}</h3>
                                            <p className="text-orange-300 text-sm font-medium mb-3">{temple.altitude}</p>

                                            <div className="space-y-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 mb-4">
                                                <p>{temple.deity}</p>
                                                <p>Opens: {temple.openingDate}</p>
                                            </div>

                                            <Link
                                                to={`/${temple.slug}`}
                                                className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                                            >
                                                Explore Temple <MapPin className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Route Map & Logistics (The 1% Content) */}
                <section className="py-16 md:py-24">
                    <div className="container">
                        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <Badge className="bg-orange-600 mb-4">Logistics Masterclass</Badge>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Planning Your Route</h2>
                                    <p className="text-slate-300 mb-8 text-lg">
                                        The Char Dham route is approx. 1,600 km round trip from Haridwar.
                                        It challenges you with narrow mountain roads, steep treks, and changing weather.
                                    </p>

                                    <div className="space-y-6">
                                        {charDhamData.routes.map((route, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-sm border border-orange-500/30">
                                                        {idx + 1}
                                                    </div>
                                                    {idx !== charDhamData.routes.length - 1 && (
                                                        <div className="w-0.5 h-full bg-slate-700 my-1" />
                                                    )}
                                                </div>
                                                <div className="pb-8">
                                                    <h4 className="text-lg font-bold text-white mb-1">{route.from} ➝ {route.to}</h4>
                                                    <div className="flex gap-4 text-sm text-slate-400 mb-2">
                                                        <span>{route.distanceKm} km</span>
                                                        <span>•</span>
                                                        <span>{route.timeHours} drive</span>
                                                    </div>
                                                    <p className="text-sm text-slate-400">{route.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="mt-4 bg-white text-slate-900 hover:bg-slate-200" asChild>
                                        <Link to="/chardham-yatra-route-map">View Interactive Map</Link>
                                    </Button>
                                </div>

                                {/* Safety Card */}
                                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm self-start sticky top-24">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                                        <h3 className="text-xl font-bold">Safety First</h3>
                                    </div>

                                    <div className="space-y-5">
                                        {charDhamData.safetyTips.map((tip, idx) => (
                                            <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-semibold text-orange-200">{tip.title}</h4>
                                                    {tip.severity === 'Critical' && (
                                                        <Badge variant="destructive" className="text-[10px] h-5">CRITICAL</Badge>
                                                    )}
                                                </div>
                                                <p className="text-sm text-slate-400 leading-relaxed">{tip.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-700">
                                        <p className="text-sm text-slate-400 text-center mb-4">
                                            All Rudraksh Safar packages include <span className="text-white font-semibold">Oxygen Cylinders</span> and <span className="text-white font-semibold">24/7 Medical Support</span>.
                                        </p>
                                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                                            <Link to="/is-chardham-yatra-safe">Read Safety Guide</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Packages Section */}
                <section className="py-16 md:py-24 bg-muted/30">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Choose Your Yatra</h2>
                            <p className="mt-4 text-muted-foreground text-lg mb-6">Transparency is our core value.</p>
                            <Button variant="link" className="text-blue-600 font-bold" asChild>
                                <Link to="/chardham-yatra-price">View Official 2026 Price List & Hidden Costs &rarr;</Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {charDhamData.packages.map((pkg, idx) => (
                                <div key={idx} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <div className="mb-4">
                                        <Badge variant={pkg.type === 'Helicopter' ? 'default' : 'outline'} className="mb-4">
                                            {pkg.type} Package
                                        </Badge>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                                        <p className="text-muted-foreground text-sm flex items-center gap-2">
                                            <Calendar className="h-4 w-4" /> {pkg.duration}
                                        </p>
                                    </div>
                                    <div className="my-6 border-t border-b border-border py-4">
                                        <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                                        <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {pkg.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className="w-full" size="lg" asChild>
                                        <Link to={pkg.link}>View Details</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-background">
                    <div className="container max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-center mb-12">Yatra FAQs</h2>
                        <div className="grid gap-6">
                            {charDhamData.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                                        <span className="text-orange-600 bg-orange-100 dark:bg-orange-900/30 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">Q</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground ml-9 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamPillar;
