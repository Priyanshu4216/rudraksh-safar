import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Thermometer, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const PangongLake = () => {
    const heroImage = "https://images.unsplash.com/photo-1623568853683-5c74384ebdb8?q=80&w=2070";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "Pangong Tso Lake",
        "description": "World's highest saltwater lake known for changing colors. Famous 3 Idiots movie shooting location in Ladakh. Requires Inner Line Permit.",
        "location": {
            "@type": "Place",
            "name": "Ladakh, India",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.7275",
                "longitude": "78.5375"
            }
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Pangong Lake Ladakh 2026 | Permit, Stay & Temperature"
                description="Complete guide to Pangong Tso Lake. Best time to visit, temperature in May/June, permit requirements, and best camps to stay near the lake."
                keywords="pangong lake ladakh, pangong tso weather, 3 idiots point ladakh, pangong lake permit, camping at pangong lake price"
                canonicalUrl="https://rudrakshsafar.com/places-to-visit-in-ladakh/pangong-lake"
                ogImage={heroImage}
                structuredData={structuredData}
            />

            <Navbar />

            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Pangong Lake Blue Water" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Pangong Tso Lake
                    </h1>
                    <p className="text-xl text-white/90 font-medium">The Jewel of Ladakh</p>
                </div>
            </div>

            <div className="container py-12 lg:py-20">

                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <p>
                                Famous for the "3 Idiots" movie climax, <strong>Pangong Tso</strong> sits at a staggering height of 13,862 ft. Extending from India to China, this endorheic lake is known for changing colors from shades of blue to green to red.
                            </p>
                            <h3>Key Highlights</h3>
                            <ul>
                                <li><strong>Changing Colors:</strong> Witness the lake change colors with the position of the sun.</li>
                                <li><strong>The "3 Idiots" Point:</strong> Take photos with the yellow scooter prop.</li>
                                <li><strong>Frozen Lake:</strong> In winter, the lake freezes completely, allowing you to walk on it.</li>
                            </ul>
                        </section>

                        <div className="bg-muted/10 p-6 rounded-xl border border-white/5">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /> Travel Info</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Distance from Leh</p>
                                    <p className="font-bold">225 km (5-6 Hours)</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Best Time</p>
                                    <p className="font-bold">May to September</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Permit Required?</p>
                                    <p className="font-bold text-green-500">Yes (ILP)</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Stay Options</p>
                                    <p className="font-bold">Camps & Homestays (Lukung/Spangmik)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-lg mb-4">Plan a Visit</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Most people visit Pangong as a day trip or 1-night stay from Leh via Chang La pass.
                            </p>
                            <Button asChild className="w-full bg-gold text-black font-bold mb-3">
                                <Link to="/ladakh-tour-packages-from-delhi">View Packages</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full">
                                <Link to="/contact">Book Cab Only</Link>
                            </Button>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="font-bold text-lg mb-2 text-blue-400 flex items-center gap-2"><Thermometer className="w-5 h-5" /> Temperature</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Summer (Day)</span>
                                    <span className="font-bold">15°C to 20°C</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Summer (Night)</span>
                                    <span className="font-bold">-2°C to 5°C</span>
                                </div>
                                <div className="flex justify-between text-blue-300">
                                    <span>Winter</span>
                                    <span className="font-bold">-25°C (Frozen)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LadakhFAQ />

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default PangongLake;
