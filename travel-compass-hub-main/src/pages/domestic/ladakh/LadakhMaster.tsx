import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import DestinationSchema from '@/components/seo/DestinationSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle, CloudSun, Calendar } from 'lucide-react';

const LadakhMaster = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Tour Packages & Road Trip Guide 2026 | Rudraksh Safar"
                description="The ultimate Ladakh authority hub. Check Manali-Leh and Srinagar-Leh road status, view altitude acclimatization guides, and book our top Ladakh packages."
                keywords="ladakh tour packages, ladakh bike trip, leh ladakh packages, manali to leh road status, srinagar to leh road status"
                canonicalUrl="https://rudrakshsafar.com/domestic/ladakh"
            />
            <DestinationSchema destinationName="Ladakh" region="Ladakh" country="India" />
            <Navbar />
            
            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ladakh: The Land of High Passes</h1>
                    <p className="text-lg text-muted-foreground">
                        Your complete authority guide to navigating Ladakh. Real-time road updates, acclimatization protocols, and exclusive expeditions.
                    </p>
                </div>
                
                {/* Seasonal Road Status Cluster */}
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-8 rounded-xl shadow-sm mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-400">2026 Seasonal Road Status</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-background p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-lg mb-2">Srinagar - Leh Highway (NH1)</h3>
                            <p className="text-muted-foreground text-sm mb-3">Expected Opening: <span className="font-bold text-foreground">Late March / Early April 2026</span></p>
                            <p className="text-xs text-muted-foreground">Zoji La pass is currently snowbound. Border Roads Organisation (BRO) snow clearance operations are underway.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-lg mb-2">Manali - Leh Highway</h3>
                            <p className="text-muted-foreground text-sm mb-3">Expected Opening: <span className="font-bold text-foreground">Mid-May 2026</span></p>
                            <p className="text-xs text-muted-foreground">Baralacha La remains closed. Traffic restricted beyond Darcha.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2"><CloudSun className="w-6 h-6"/> Acclimatization Rules</h2>
                        <p className="text-muted-foreground mb-4">
                            Oxygen levels in Leh are 40% lower than sea level. Every Rudraksh Safar package mandates a strict 24-hour rest period upon arrival to prevent AMS (Acute Mountain Sickness).
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2"><Calendar className="w-6 h-6"/> Essential Guides</h2>
                        <div className="flex flex-col gap-3">
                            <Link to="/ladakh/best-time-to-visit-ladakh" className="text-teal-600 hover:underline font-bold">When is the best time to visit Ladakh? →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Leh Ladakh Inner Line Permits Guide →</Link>
                            <Link to="/contact" className="text-teal-600 hover:underline font-bold">Pangong Tso vs Tso Moriri Comparison →</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Featured Ladakh Expeditions</h2>
                    <Button asChild size="lg" className="bg-primary text-white">
                        <Link to="/domestic-tours/ladakh">Explore All Expeditions</Link>
                    </Button>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default LadakhMaster;
