import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, CheckCircle2 } from 'lucide-react';
import { internationalPackages } from '@/pages/InternationalPackages';
import { domesticPackages } from '@/pages/DomesticPackages';

// Programmatic Content Logic
const generateGeoContent = (origin: string, destinationName: string) => {
    const originCapitalized = origin.charAt(0).toUpperCase() + origin.slice(1);
    const isChhattisgarh = ['bhilai', 'raipur', 'durg', 'bilaspur', 'korba', 'rajnandgaon'].includes(origin.toLowerCase());

    let flightInfo = "";
    if (['raipur', 'bhilai', 'durg'].includes(origin.toLowerCase())) {
        flightInfo = `Direct flights or easy connections are available from Swami Vivekananda Airport (RPR) in Raipur to ${destinationName}.`;
    } else {
        flightInfo = `Convenient flight options are available from major nearby airports connecting ${originCapitalized} to ${destinationName}.`;
    }

    let localContext = "";
    if (isChhattisgarh) {
        localContext = `As Chhattisgarh's premium travel agency based in Bhilai, Rudraksh Safar ensures personalized 24/7 support for our travelers from ${originCapitalized}. Our team understands local dietary preferences (like Jain or pure veg food availability) and travel styles, ensuring a seamless journey from your doorstep to ${destinationName}.`;
    } else {
        localContext = `Rudraksh Safar brings premium travel experiences to travelers from ${originCapitalized}, offering 24/7 dedicated support throughout your ${destinationName} journey.`;
    }

    const whyChooseUs = [
        `Dedicated travel manager for ${originCapitalized} residents.`,
        `Customizable itineraries tailored to your dates.`,
        `Transparent pricing with no hidden costs.`,
        `Assistance with visa (if applicable) and flight bookings.`
    ];

    return { originCapitalized, flightInfo, localContext, whyChooseUs };
};

const ProgrammaticPackage = () => {
    const { origin, destination } = useParams<{ origin: string; destination: string }>();

    if (!origin || !destination) {
        return <Navigate to="/" replace />;
    }

    // Find the base package data (case-insensitive)
    const allPackages = [...internationalPackages, ...domesticPackages];
    const matchedPackage = allPackages.find(pkg =>
        pkg.title.toLowerCase().includes(destination.toLowerCase().replace(/-/g, ' ')) ||
        pkg.location.toLowerCase().includes(destination.toLowerCase().replace(/-/g, ' '))
    );

    if (!matchedPackage) {
        return <Navigate to="/destinations" replace />; // Graceful fallback if destination doesn't exist
    }

    const destName = matchedPackage.location || destination;
    const { originCapitalized, flightInfo, localContext, whyChooseUs } = generateGeoContent(origin, destName);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={`${destName} Tour Packages from ${originCapitalized} | Rudraksh Safar`}
                description={`Book exclusive ${destName} tour packages starting from ${originCapitalized}. Features ${flightInfo} Get a custom quote today!`}
                keywords={`${destName} package from ${originCapitalized}, ${destName} tour from ${originCapitalized}, travel agent in ${originCapitalized} for ${destName}`}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={matchedPackage.image}
                        alt={`${destName} from ${originCapitalized}`}
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <span className="bg-gold/90 text-navy-deep px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                        Customizable Package
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                        {destName} Tour Packages from {originCapitalized}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-md">
                        Seamless travel, expertly crafted for you.
                    </p>
                </div>
            </section>

            {/* Geo-Specific Content Block (Crucial against doorway pages) */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container px-4 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-navy-deep mb-6">
                                Why Travel from {originCapitalized} to {destName} with Us?
                            </h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <p>{localContext}</p>
                                <div className="flex items-start gap-4 my-6 bg-navy-light/5 p-4 rounded-xl border border-navy-light/10">
                                    <Plane className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                                    <p className="m-0 text-sm">{flightInfo}</p>
                                </div>
                                <ul className="space-y-3 mt-6">
                                    {whyChooseUs.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-navy-deep">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Quick Inquiry Sticky Box */}
                        <div className="bg-navy-deep text-white p-8 rounded-2xl shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-gold text-navy-deep w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg rotate-12 shadow-lg z-10">
                                Top Rated
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Get a Free Quote</h3>
                            <p className="text-white/80 mb-6 font-light">
                                Prices for {destName} from {originCapitalized} vary by date. Ask us for today's best deal!
                            </p>

                            <div className="space-y-4 mb-8 border-t border-white/20 pt-6">
                                <div className="flex justify-between items-center text-sm font-light">
                                    <span>Base Duration:</span>
                                    <span className="font-bold">{matchedPackage.duration}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-light">
                                    <span>Starting Price:</span>
                                    <span className="font-bold text-gold text-xl">{matchedPackage.price}</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => window.open(`https://wa.me/919203650311?text=Hi, I want to book a trip to ${destName} starting from ${originCapitalized}. Please provide a quote.`, '_blank')}
                                className="w-full bg-gold hover:bg-gold-light text-navy-deep font-bold py-6 text-lg rounded-xl transition-all hover:scale-105"
                            >
                                Get Itinerary on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Linking Block (Safe scale) */}
            <section className="py-16 bg-navy-light/5">
                <div className="container px-4 max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl font-serif font-bold text-navy-deep mb-8">Popular Routes</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#quote" className="px-6 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:border-gold transition-colors">
                            {destName} from Raipur
                        </a>
                        <a href="#quote" className="px-6 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:border-gold transition-colors">
                            {destName} from Bhilai
                        </a>
                        <a href="#quote" className="px-6 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:border-gold transition-colors">
                            {destName} Packages
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default ProgrammaticPackage;
