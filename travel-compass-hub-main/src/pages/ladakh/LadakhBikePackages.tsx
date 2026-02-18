import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bike, Shield, Map, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhBikePackages = () => {
    const heroImage = "/images/ladakh/ladakh-img-6.jpeg"; // Bike trip specific

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Ladakh Bike Trip Package 2026",
        "description": "Ultimate Ladakh Bike Trip. Rental included (Himalayan/Royal Enfield). Mechanic support, fuel, and camping. Manali to Leh bike tours available.",
        "brand": {
            "@type": "Brand",
            "name": "Rudraksh Safar"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "120"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Bike Trip Packages 2026 | Rent & Own Bike Options"
                description="Book the best Ladakh bike trip. Packages with Royal Enfield/Himalayan rentals, backup vehicle, and mechanic. Delhi to Ladakh bike tours starting ₹35,000."
                keywords="ladakh bike trip packages, leh ladakh bike tour, manali to leh bike trip cost, ladakh bike rental, ladakh motorcycle expedition"
                canonicalUrl="https://rudrakshsafar.com/ladakh-bike-trip-packages"
                ogImage={heroImage}
                structuredData={structuredData}
            />

            <Navbar />

            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Ladakh Bike Trip" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-medium text-sm mb-6 backdrop-blur-sm">
                        The Holy Grail of Indian Biking
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Ladakh Bike Expeditions 2026
                    </h1>
                    <p className="text-xl text-white/90 font-medium">Ride the Highest Motorable Roads in the World</p>
                </div>
            </div>


            <div className="container py-12 lg:py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <p className="text-lg text-muted-foreground">
                        Riding a Royal Enfield through the barren landscapes of Ladakh is a dream for every biker. At <strong>Rudraksh Safar</strong>, we turn this dream into a safe reality. We provide well-maintained bikes, experienced road captains, mechanics, and a backup vehicle for your luggage.
                    </p>
                </div>

                {/* Package Types - Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">

                    {/* Own Bike */}
                    <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all">
                        <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                            <Settings className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">By Own Bike/Car</h3>
                        <p className="text-muted-foreground mb-6">
                            Bring your own beast! We take care of accommodation, permits, food, and route guidance. You just focus on the ride.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /> Route Planning & Maps</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /> Hotel/Camp Bookings</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /> Inner Line Permits</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" /> Emergency Support</li>
                        </ul>
                        <Button variant="outline" className="w-full h-12">Get Own Bike Quote</Button>
                    </div>

                    {/* Rental Bike */}
                    <div className="bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30 rounded-2xl p-8 shadow-xl">
                        <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                            <Bike className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Rental Bike Package</h3>
                        <p className="text-muted-foreground mb-6">
                            Don't have a bike? No problem. We provide 350cc/500cc Royal Enfields or Himalayans straight from Manali or Leh.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-gold" /> <strong>Best Bikes:</strong> 2023-24 Models</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-gold" /> <strong>Full Support:</strong> Mechanic & Spares</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-gold" /> <strong>Backup Vehicle:</strong> For bags/pillion</li>
                            <li className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-gold" /> <strong>Fuel Included:</strong> Optional</li>
                        </ul>
                        <Button className="w-full bg-gold text-black font-bold h-12">View Rental Packages</Button>
                    </div>

                </div>

                {/* Route Options for Bikers */}
                <section className="mb-16">
                    <h2 className="text-3xl font-serif font-bold mb-8">Choose Your Adventure Route</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link to="/ladakh-tour-via-manali" className="group bg-muted/20 p-6 rounded-xl border border-white/5 hover:bg-muted/40 transition-all flex items-center gap-6">
                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <img src="/images/ladakh/ladakh-img-10.jpeg" className="w-full h-full object-cover" alt="Manali" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">Manali to Leh</h3>
                                <p className="text-sm text-muted-foreground mt-1">The classic biker's challenge. Atal Tunnel & high passes.</p>
                            </div>
                            <ArrowRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-gold transition-colors" />
                        </Link>

                        <Link to="/ladakh-tour-via-srinagar" className="group bg-muted/20 p-6 rounded-xl border border-white/5 hover:bg-muted/40 transition-all flex items-center gap-6">
                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <img src="/images/ladakh/ladakh-img-9.jpeg" className="w-full h-full object-cover" alt="Srinagar" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">Srinagar to Leh</h3>
                                <p className="text-sm text-muted-foreground mt-1">Scenic ride through Zoji La. Great for acclimatization.</p>
                            </div>
                            <ArrowRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-gold transition-colors" />
                        </Link>
                    </div>
                </section>

                {/* Essential Gear List (Mini) */}
                <section className="bg-muted/10 p-8 rounded-xl border border-white/5 mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-serif font-bold mb-4">Required Riding Gear</h2>
                            <p className="text-muted-foreground mb-6">
                                Safety is non-negotiable. Whether you rent or bring your own bike, ensure you have these essentials.
                            </p>
                            <ul className="grid grid-cols-2 gap-3 mb-6">
                                <li className="flex gap-2 text-sm"><Shield className="w-4 h-4 text-gold" /> Full Face Helmet</li>
                                <li className="flex gap-2 text-sm"><Shield className="w-4 h-4 text-gold" /> Riding Jacket (Level 2)</li>
                                <li className="flex gap-2 text-sm"><Shield className="w-4 h-4 text-gold" /> Riding Gloves</li>
                                <li className="flex gap-2 text-sm"><Shield className="w-4 h-4 text-gold" /> Knee & Elbow Guards</li>
                            </ul>
                            <Link to="/ladakh-packing-list" className="text-gold font-medium hover:underline flex items-center gap-2">
                                Download Complete Packing Checklist <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="md:w-1/2 rounded-xl overflow-hidden">
                            <img src="/images/ladakh/ladakh-img-1.jpeg" alt="Biker Gear" className="w-full object-cover h-64 hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </section>

                <LadakhFAQ />

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhBikePackages;
