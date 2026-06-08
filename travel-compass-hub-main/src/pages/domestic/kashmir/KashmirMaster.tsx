import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import DestinationSchema from '@/components/seo/DestinationSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const KashmirMaster = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Kashmir Tour Packages & Family Travel Guide 2026 | Rudraksh Safar"
                description="The complete Kashmir authority hub. Book family packages, luxury houseboats, and honeymoon tours. Safe, verified, and expertly planned."
                keywords="kashmir tour packages, kashmir family trip, kashmir honeymoon, best time to visit kashmir, srinagar houseboats"
                canonicalUrl="https://rudrakshsafar.com/domestic/kashmir"
            />
            <DestinationSchema destinationName="Kashmir" region="Jammu and Kashmir" country="India" />
            <Navbar />
            
            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Kashmir: Paradise on Earth</h1>
                    <p className="text-lg text-muted-foreground">
                        Your complete authority guide to experiencing Kashmir safely and luxuriously. Handcrafted family and honeymoon packages.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Safety & Trust */}
                    <div className="bg-green-50/50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">Family Safety First</h2>
                        <p className="text-muted-foreground mb-4">
                            We understand your concerns. All our Kashmir tours are operated by our verified local partners. You will have a dedicated local driver and 24/7 support throughout your journey in Srinagar, Gulmarg, and Pahalgam.
                        </p>
                        <p className="font-bold text-green-700 dark:text-green-400">✓ 100% Verified Local Guides</p>
                    </div>

                    {/* Quick Guides */}
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Essential Guides</h2>
                        <div className="flex flex-col gap-3">
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Tulip Season vs Winter Snow Guide →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">How to book a Luxury Houseboat →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Pahalgam vs Gulmarg: Which is better? →</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Popular Kashmir Packages</h2>
                    <Button asChild size="lg" className="bg-primary text-white">
                        <Link to="/domestic-tours/kashmir">View All Packages</Link>
                    </Button>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default KashmirMaster;
