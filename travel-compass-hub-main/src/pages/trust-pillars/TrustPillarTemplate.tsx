import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { CheckCircle2, Award, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrustPillarProps {
    title: string;
    subtitle: string;
    heroImage: string;
    theChallenge: string;
    ourSolution: string[];
    theResult: string;
    clientName: string;
    clientLocation: string;
}

const TrustPillarTemplate = ({
    title,
    subtitle,
    heroImage,
    theChallenge,
    ourSolution,
    theResult,
    clientName,
    clientLocation
}: TrustPillarProps) => {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={`${title} - Rudraksh Safar Case Study`}
                description={`Read our travel case study about ${title}. Discover why Rudraksh Safar is the most trusted travel agent in Chhattisgarh.`}
            />
            <Navbar />

            {/* Hero */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover brightness-50" />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <span className="bg-gold/90 text-navy-deep px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block shadow-lg">
                        Client Success Story
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-md">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container px-4 max-w-4xl mx-auto">

                    <div className="flex flex-wrap items-center justify-between mb-12 p-6 bg-navy-light/5 border border-navy-light/10 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Award className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Client</p>
                                <p className="font-bold text-navy-deep">{clientName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <MapPin className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Location</p>
                                <p className="font-bold text-navy-deep">{clientLocation}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-12">

                            <div>
                                <h2 className="text-3xl font-serif font-bold text-navy-deep mb-4 border-b-2 border-gold/30 pb-2 inline-block">The Challenge</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light">{theChallenge}</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif font-bold text-navy-deep mb-6 border-b-2 border-gold/30 pb-2 inline-block">Our Expert Solution</h2>
                                <ul className="space-y-4">
                                    {ourSolution.map((sol, idx) => (
                                        <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 leading-relaxed">{sol}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-navy-deep text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 opacity-10">
                                    <ShieldCheck className="w-40 h-40" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold mb-4 relative z-10 text-gold">The Result</h2>
                                <p className="text-lg text-white/90 leading-relaxed font-light relative z-10">{theResult}</p>
                            </div>

                        </div>

                        {/* Sticky Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-navy-deep mb-4">Want similar results?</h3>
                                <p className="text-sm text-gray-600 mb-6">Let our local travel experts properly craft your next international holiday.</p>
                                <Button
                                    onClick={() => window.open('https://wa.me/919406182174', '_blank')}
                                    className="w-full bg-gold hover:bg-gold-light text-navy-deep font-bold py-6 rounded-xl transition-all shadow-md"
                                >
                                    Consult with Us
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TrustPillarTemplate;
