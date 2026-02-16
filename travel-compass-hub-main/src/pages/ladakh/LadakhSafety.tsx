import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, HeartPulse, Activity, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhSafety = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ladakh Travel Safety Guide 2026: AMS, Permits & Health Tips",
        "description": "Is Ladakh safe for tourists? Complete guide on Acute Mountain Sickness (AMS), oxygen levels, safe driving tips, and emergency contacts in Leh.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Travel Safety Tips 2026 | AMS & Oxygen Guide"
                description="Essential safety tips for Ladakh trip. Learn how to prevent Acute Mountain Sickness (AMS), oxygen kit requirements, and safe driving on high passes."
                keywords="is ladakh safe, acute mountain sickness ladakh, oxygen level in ladakh, ladakh safety tips, driving in ladakh precautionary measures"
                canonicalUrl="https://rudrakshsafar.com/ladakh-travel-safety-tips"
                structuredData={structuredData}
            />

            <Navbar />

            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Stay Safe in the Himalayas</h1>
                    <p className="text-lg text-muted-foreground">
                        Ladakh is beautiful but demanding. The high altitude requires respect, not fear. Here is everything you need to know to keep your family and yourself safe.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">

                    {/* AMS Section */}
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Activity className="w-6 h-6 text-red-500" />
                            Understanding AMS (Acute Mountain Sickness)
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            As you go above 8,000 ft, oxygen levels drop. Leh is at 11,500 ft. Your body needs time to adjust. Ignoring this can be dangerous.
                        </p>
                        <div className="bg-red-500/10 p-4 rounded-lg mb-6 border border-red-500/20">
                            <h3 className="font-bold text-red-400 mb-2">Common Symptoms</h3>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li>Severe Headache</li>
                                <li>Nausea or Vomiting</li>
                                <li>Dizziness & Fatigue</li>
                                <li>Shortness of breath</li>
                            </ul>
                        </div>
                        <h3 className="font-bold mb-3">How to Prevent AMS?</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> <strong>Golden Rule:</strong> Rest for 48 hours upon arrival in Leh. No heavy activity.</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> <strong>Hydrate:</strong> Drink 3-4 liters of water daily. Avoid alcohol completely.</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> <strong>Medicine:</strong> Consult your doctor about Diamox (Acetazolamide).</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> <strong>Camphor:</strong> Smelling camphor can help open nasal passages.</li>
                        </ul>
                    </div>

                    {/* General Safety */}
                    <div className="space-y-8">

                        <div className="bg-muted/10 p-6 rounded-xl border border-border">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <HeartPulse className="w-5 h-5 text-blue-500" /> Oxygen Availability
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                All Rudraksh Safar vehicles carry a portable oxygen cylinder. Hotels in Leh also provide oxygen if needed. The main hospital in Leh (SNM Hospital) is well-equipped.
                            </p>
                        </div>

                        <div className="bg-muted/10 p-6 rounded-xl border border-border">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" /> Road Safety
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Roads like Khardung La and Chang La can be treacherous with snow and ice.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-yellow-500" /> Use only experienced local drivers.</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-yellow-500" /> Start early to avoid melting snow streams (nalas).</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-yellow-500" /> Do not rush. Let the vehicle climb slowly.</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-8 text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-serif font-bold mb-4">Emergency Contacts in Ladakh</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-background rounded-lg">
                            <p className="text-xs text-muted-foreground">Police Control Room</p>
                            <p className="font-bold text-xl">100</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg">
                            <p className="text-xs text-muted-foreground">Tourist Helpline</p>
                            <p className="font-bold text-xl">1-800-11-1363</p>
                        </div>
                        <div className="p-4 bg-background rounded-lg">
                            <p className="text-xs text-muted-foreground">Rudraksh Safar Support</p>
                            <p className="font-bold text-xl text-gold">+91 94061 82174</p>
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

export default LadakhSafety;
