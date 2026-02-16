import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckSquare, Shirt, Pill, Smartphone, FileText, ArrowRight, Download } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhPackingList = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ultimate Ladakh Packing List 2026 for Family & Bikers",
        "description": "What to pack for Ladakh trip? Download complete checklist for clothes, medicines, and documents. Essentials for Manali-Leh bike trip.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Valid Ladakh Packing List 2026 | Clothes & Medicines Checklist"
                description="Don't forget these 50 essential items for Ladakh. Detailed packing list for clothes (layers), medicines (Diamox), and electronics. Download PDF checklist."
                keywords="ladakh packing list, clothes for ladakh trip in june, medicines for ladakh trip, ladakh bike trip packing list, what to wear in leh ladakh"
                canonicalUrl="https://rudrakshsafar.com/ladakh-packing-checklist"
                structuredData={structuredData}
            />

            <Navbar />

            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Ultimate Ladakh Packing Checklist</h1>
                    <p className="text-lg text-muted-foreground">
                        Packing for Ladakh is about <strong>Layers</strong>, not bulk. The weather can change from freezing cold at passes to scorching sun in the valleys within hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">

                    {/* Clothing */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Shirt className="w-6 h-6 text-blue-400" /> Clothing (Layering Rule)
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Thermals (Upper & Lower):</span> 2 pairs minimum. Base layer.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Fleece Jacket:</span> Mid-layer for warmth.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Down/Windproof Jacket:</span> Outer shell for high passes.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Woolen Caps & Socks:</span> Cover extremities.</div>
                            </li>
                        </ul>
                    </div>

                    {/* Medicines */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Pill className="w-6 h-6 text-red-400" /> First Aid & Meds
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Diamox:</span> For AMS (Consult doctor).</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Camphor:</span> To sniff for easy breathing.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Painkillers & Bandages:</span> Basic injury kit.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Sunscreen (SPF 50+):</span> High altitude UV is harsh.</div>
                            </li>
                        </ul>
                    </div>

                    {/* Documents */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-yellow-400" /> Very Important Docs
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Postpaid SIM (BSNL/Jio/Airtel):</span> Prepaid does NOT work in Ladakh.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Photo ID (Aadhar/Voter):</span> Original + Photocopies.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Inner Line Permit:</span> Printed copies (We provide this).</div>
                            </li>
                        </ul>
                    </div>

                    {/* Electronics */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Smartphone className="w-6 h-6 text-purple-400" /> Gadgets
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Power Bank (20000mAh):</span> Cold drains batteries fast.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Spare Batteries:</span> For camera/DSLR.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                                <div><span className="font-bold">Downloaded Maps:</span> Google Maps offline area.</div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center mb-16">
                    <Button size="lg" className="bg-gold text-black font-bold gap-2">
                        <Download className="w-5 h-5" /> Download PDF Checklist
                    </Button>
                </div>

                <LadakhFAQ />

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhPackingList;
