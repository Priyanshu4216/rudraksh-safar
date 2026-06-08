import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import DestinationSchema from '@/components/seo/DestinationSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpitiMaster = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Spiti Valley Tour Packages & Travel Guide 2026 | Rudraksh Safar"
                description="The ultimate Spiti Valley authority hub. Book tour packages, check live road status, review costs, and read our complete Spiti travel guide."
                keywords="spiti valley tour packages, spiti road trip, best time to visit spiti, spiti valley weather, spiti from raipur"
                canonicalUrl="https://rudrakshsafar.com/domestic/spiti"
            />
            <DestinationSchema destinationName="Spiti Valley" region="Himachal Pradesh" country="India" />
            <Navbar />
            
            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Spiti Valley: The Middle Land</h1>
                    <p className="text-lg text-muted-foreground">
                        Your complete authority guide to exploring Spiti. From live road updates to exclusive packages originating from Central India.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Road Status */}
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Live Road Status</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><strong>Shimla - Kaza Route:</strong> <span className="text-green-600 font-bold">Open Year Round</span></li>
                            <li><strong>Manali - Kaza Route:</strong> <span className="text-red-500 font-bold">Closed (Opens Mid-May)</span></li>
                            <li><strong>Kunzum Pass:</strong> <span className="text-red-500 font-bold">Closed</span></li>
                        </ul>
                    </div>

                    {/* Quick Guides */}
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Essential Guides</h2>
                        <div className="flex flex-col gap-3">
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Best Time to Visit & Weather Matrix →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Spiti Trip Cost Calculator →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Complete Altitude Packing List →</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Popular Spiti Packages</h2>
                    <Button asChild size="lg" className="bg-primary text-white">
                        <Link to="/domestic-tours/himachal-pradesh">View All Packages</Link>
                    </Button>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default SpitiMaster;
