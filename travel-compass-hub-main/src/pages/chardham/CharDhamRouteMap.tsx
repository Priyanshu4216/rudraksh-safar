import { routeData } from '@/data/chardham/route-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    MapPin, Navigation, Coffee, Bed, Mountain,
    ArrowDown, Car, Calendar, Info
} from 'lucide-react';

import FAQSection from '@/components/seo/FAQSection';

const CharDhamRouteMap = () => {
    const { meta, overview, segments } = routeData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-route-map" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO HEADER */}
                <div className="bg-slate-900 text-white py-16">
                    <div className="container text-center max-w-4xl">
                        <Badge className="bg-blue-600 mb-4 hover:bg-blue-700 border-none text-white">
                            Interactive Guide
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">{overview.title}</h1>
                        <p className="text-slate-300 text-lg mb-8">{overview.subtitle}</p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                            <div className="flex items-center gap-2">
                                <Navigation className="h-5 w-5 text-blue-400" />
                                <span className="font-bold">{overview.totalDistance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-blue-400" />
                                <span className="font-bold">{overview.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-12 max-w-4xl">

                    <div className="space-y-12">
                        {segments.map((segment, segIdx) => (
                            <div key={segIdx} className="relative pl-8 md:pl-0">

                                {/* Segment Header */}
                                <div className="bg-muted p-6 rounded-2xl border border-border mb-8 sticky top-24 z-20 shadow-sm">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-foreground">{segment.title}</h2>
                                            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                <Car className="h-4 w-4" /> {segment.totalDistance} • {segment.driveTime}
                                            </p>
                                        </div>
                                        <div className="text-xs font-mono bg-background px-3 py-1 rounded border border-border">
                                            {segment.from} ➔ {segment.to}
                                        </div>
                                    </div>
                                </div>

                                {/* Vertical Timeline */}
                                <div className="space-y-8 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-[-16px] md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 to-transparent md:block hidden" />

                                    {segment.stops.map((stop, stopIdx) => (
                                        <div key={stopIdx} className="relative flex flex-col md:flex-row gap-6 md:pl-20 group">

                                            {/* Timeline Dot (Desktop) */}
                                            <div className={`
                         hidden md:flex absolute left-6 top-1 transform -translate-x-1/2 
                         h-4 w-4 rounded-full border-2 border-background z-10
                         ${stop.type === 'Major Halt' ? 'bg-blue-600 h-6 w-6' : 'bg-slate-400'}
                         ${stop.type === 'Temple' ? 'bg-orange-500 h-8 w-8 ring-4 ring-orange-200' : ''}
                       `} />

                                            {/* Content Card */}
                                            <div className="flex-1 bg-card border border-border p-5 rounded-xl hover:border-blue-400 transition-colors">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-bold text-lg flex items-center gap-2">
                                                        {stop.type === 'Temple' && <span className="text-xl">🛕</span>}
                                                        {stop.name}
                                                    </h3>
                                                    <Badge variant="outline" className="text-xs">{stop.altitude}</Badge>
                                                </div>

                                                <p className="text-sm text-muted-foreground mb-4">{stop.description}</p>

                                                {stop.highlight && (
                                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-3 py-2 rounded-lg mb-4 inline-block font-medium">
                                                        ★ {stop.highlight}
                                                    </div>
                                                )}

                                                <div className="flex flex-wrap gap-2">
                                                    {stop.facilities.map((fac, i) => (
                                                        <span key={i} className="text-[10px] uppercase tracking-wider bg-secondary px-2 py-1 rounded text-secondary-foreground">
                                                            {fac}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Distance Marker */}
                                            <div className="md:w-24 shrink-0 text-right md:text-left pt-2 md:pt-0">
                                                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 md:justify-end">
                                                    <ArrowDown className="h-3 w-3" /> {stop.distanceFromPrev}
                                                </span>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* FAQs */}
                    <section id="faqs" className="mt-16 mb-12">
                        <FAQSection title="Char Dham Route FAQs" faqs={routeData.faqs} />
                    </section>

                    {/* --- DEEP SEO CONTENT BLOCKS --- */}
                    <section id="deep-seo" className="py-16 bg-muted/20 mt-12 mb-12 rounded-3xl">
                        <div className="container mx-auto px-4 max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Mastering the Char Dham Yatra Route</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The Char Dham Yatra is one of the most revered and physically demanding road trips in India. Covering over 1,600 kilometers of challenging Himalayan terrain, it tests both driving skill and physical endurance. The traditional circuit begins at the spiritual twin-cities of Haridwar and Rishikesh, serving as the gateway to the Garhwal mountains.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The journey inherently follows the Hindu parikrama (circumambulation) logic, moving from West to East. You begin by tracing the Yamuna river up to Yamunotri, cross over into the Bhagirathi valley for Gangotri, ascend into the Mandakini valley to Kedarnath, and finally follow the Alaknanda river to the holy shrine of Badrinath. Understanding this river-valley geography is crucial for anticipating the steep ascents and descents between each Dham.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Vital Driving & Safety Tips</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Self-driving the Char Dham route is not recommended for novice drivers. The roads are prone to sudden landslides, sharp hairpin bends, and steep gradients without protective crash barriers. If you must drive, observe these rules:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                    <li><strong>Vehicle Readiness:</strong> Ensure your vehicle has high ground clearance, freshly serviced brakes, and a robust cooling system. Carry spare tires and a tow rope.</li>
                                    <li><strong>Altitude Awareness:</strong> The route rapidly ascends from 300 meters (Haridwar) to over 3,000 meters (Gangotri/Badrinath). Ascend slowly to prevent Acute Mountain Sickness (AMS).</li>
                                    <li><strong>Time Management:</strong> Start driving by 6:00 AM and reach your destination by 4:00 PM. Mountain weather changes unpredictably after noon, bringing sudden rain or fog.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link to="/chardham/KedarnathTemple" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Kedarnath Guide</Link>
                                    <Link to="/chardham/CharDhamRegistration" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Yatra Registration</Link>
                                    <Link to="/chardham-yatra-package" className="bg-white border text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 font-medium tracking-wide">Explore Tour Packages</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Footer */}
                    <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                        <h2 className="text-2xl font-bold mb-4">Ready for the Journey?</h2>
                        <p className="text-muted-foreground mb-6">We arrange the best hotels and transport for this entire route.</p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">View Full Itinerary</Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamRouteMap;
