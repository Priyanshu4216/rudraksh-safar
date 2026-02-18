import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import { raipurFlights, thailandMeta } from '@/data/thailand/master';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plane, Clock, Wallet, CheckCircle2, MapPin, Calendar, Phone } from 'lucide-react';
import SmartImage from '../../../components/SmartImage';

const ThailandTourPackageFromRaipur = () => {
    return (
        <>
            <Helmet>
                <title>Thailand Tour Packages from Raipur (2026) | Flights Included</title>
                <meta name="description" content="Best Thailand tour packages from Raipur with flight details (via Kolkata/Delhi). 5D/4N Bangkok-Pattaya itineraries starting ₹35,000. visa-free entry." />
                <meta name="keywords" content="Thailand tour package from Raipur, Raipur to Bangkok flight time, Thailand trip cost from Chhattisgarh, Rudraksh Safar Thailand" />
                <link rel="canonical" href="https://rudrakshsafar.com/thailand-tour-packages-from-raipur" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-foreground">

                {/* HYPER LOCAL HERO */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <SmartImage
                            src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2070&auto=format&fit=crop"
                            alt="Bangkok Cityscape"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 container text-white">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 backdrop-blur-md px-3 py-1 rounded-full text-orange-300 text-sm font-bold mb-4">
                                <MapPin className="w-4 h-4" /> Raipur Special
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                                Thailand from Raipur <br />
                                <span className="text-orange-500">Simplified.</span>
                            </h1>
                            <p className="text-xl text-slate-200 mb-8 font-light">
                                Forget complex connecting flights. We handle your entire journey from Swami Vivekananda Airport (RPR) to Suvarnabhumi (BKK).
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 px-8" asChild>
                                    <Link to="/plan-your-thailand-trip">Get Quote for Raipur Departure</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full h-12 px-8" asChild>
                                    <a href="tel:+919406182174"> <Phone className="w-4 h-4 mr-2" /> Call Expense Manager</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLIGHT SECTION */}
                <div className="container py-16">
                    <h2 className="text-3xl font-bold text-center mb-10 font-serif">Raipur to Bangkok Flight Options</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {raipurFlights.map((flight, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    Option {index + 1}
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600">
                                        <Plane className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{flight.from} to Bangkok</h3>
                                        <p className="text-sm text-muted-foreground">via {flight.via.join(', ')}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                                        <span className="flex items-center text-muted-foreground"><Clock className="w-4 h-4 mr-2" /> Duration</span>
                                        <span className="font-medium">{flight.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                                        <span className="flex items-center text-muted-foreground"><Plane className="w-4 h-4 mr-2" /> Airlines</span>
                                        <span className="font-medium">{flight.airline.join(', ')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm pt-1">
                                        <span className="flex items-center text-muted-foreground"><Wallet className="w-4 h-4 mr-2" /> Est. Cost</span>
                                        <span className="font-bold text-green-600">{flight.priceRange}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl p-6 mt-8 max-w-3xl mx-auto text-center">
                        <p className="text-sm text-orange-800 dark:text-orange-200 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <strong>Pro Tip:</strong> Flights via Kolkata are usually cheaper and shorter duration compared to Delhi.
                        </p>
                    </div>
                </div>

                {/* ITINERARY PREVIEW */}
                <div className="bg-slate-100 dark:bg-slate-900 py-16">
                    <div className="container text-center">
                        <h2 className="text-3xl font-bold mb-4 font-serif">Popular 5 Day Itinerary from Raipur</h2>
                        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Designed to maximize your time. We schedule your pickup from Raipur home to ensure you reach the airport on time.
                        </p>

                        <div className="grid md:grid-cols-5 gap-4">
                            {[
                                { day: 1, title: 'Raipur to Pattaya', desc: 'Flight to BKK, Transfer to Pattaya Hotel.' },
                                { day: 2, title: 'Coral Island', desc: 'Speedboat tour, Indian Lunch, Alcazar Show.' },
                                { day: 3, title: 'Pattaya to Bangkok', desc: 'City Tour, Gems Gallery, Hotel Check-in.' },
                                { day: 4, title: 'Bangkok Shopping', desc: 'Safari World or MBK/Indra Market shopping.' },
                                { day: 5, title: 'Return to Raipur', desc: 'Airport drop. Flight back to RPR.' },
                            ].map((item) => (
                                <div key={item.day} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                    <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                                        {item.day}
                                    </div>
                                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="py-20 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for your Thai Adventure?</h2>
                    <p className="text-muted-foreground mb-8">Visit our office in Bhilai or call us for a home visit in Raipur.</p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
                            <a href="https://wa.me/919406182174">WhatsApp Us</a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full" asChild>
                            <Link to="/contact">Office Location</Link>
                        </Button>
                    </div>
                </div>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default ThailandTourPackageFromRaipur;
