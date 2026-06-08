import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { MapPin, Calendar, CheckCircle2, AlertTriangle, Star } from 'lucide-react';

const TravellerStories = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Real Traveller Stories | Verified Reviews from Chhattisgarh"
                description="Read comprehensive travel stories from Raipur, Bhilai, and Durg travelers. Discover their Himalayan highlights and challenges overcome."
                keywords="rudraksh safar reviews, chhattisgarh travel stories"
                canonicalUrl="https://rudrakshsafar.com/stories"
            />
            <Navbar />
            
            <div className="bg-primary/5 py-16">
                <div className="container text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Real Chhattisgarh Travelers. Unfiltered Stories.</h1>
                    <p className="text-lg text-muted-foreground">
                        We don't just post 5-star ratings. We publish detailed post-expedition debriefs from real families and riders.
                    </p>
                </div>
            </div>

            <div className="container py-16 max-w-5xl mx-auto space-y-16">
                
                {/* Standardized Story 1 */}
                <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2 gap-0">
                        <img 
                            src="https://images.unsplash.com/photo-1533568344565-df048037fa9d?auto=format&fit=crop&w=800&q=80" 
                            alt="Vikram's Spiti Bike Trip" 
                            className="w-full h-full object-cover min-h-[300px]"
                        />
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Vikram Rajput</h3>
                                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-1"><MapPin className="w-4 h-4 text-primary"/> Raipur, Chhattisgarh</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary">Spiti Valley Expedition</p>
                                    <p className="text-sm text-muted-foreground flex items-center justify-end gap-1"><Calendar className="w-3 h-3"/> July 2025</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1">Why Rudraksh Safar?</h4>
                                    <p className="text-sm">"I wanted a local agency in Raipur that understood the logistics of getting to Manali with my riding gear. Priyanshu mapped out the entire train/bus connection perfectly."</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4 text-amber-500"/> Challenges Faced</h4>
                                    <p className="text-sm">"I hit a severe patch of black ice near Kunzum Pass. My bike skidded."</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500"/> Highlights & Team Response</h4>
                                    <p className="text-sm">"The backup mechanic was right behind me. He fixed the clutch lever in 15 minutes, and the backup 4x4 gave me oxygen while I recovered from the shock. The team's response was military-grade."</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-border">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Final Recommendation</h4>
                                <p className="text-sm font-medium italic">"Do not do Spiti solo. Go with Rudraksh Safar. Their backup support is the only reason I completed the circuit."</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Standardized Story 2 */}
                <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2 gap-0">
                        <img 
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" 
                            alt="Sharma Family in Kashmir" 
                            className="w-full h-full object-cover min-h-[300px] md:order-last"
                        />
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">The Sharma Family</h3>
                                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-1"><MapPin className="w-4 h-4 text-primary"/> Bhilai, Chhattisgarh</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-primary">Kashmir Family Trip</p>
                                    <p className="text-sm text-muted-foreground flex items-center justify-end gap-1"><Calendar className="w-3 h-3"/> October 2025</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1">Why Rudraksh Safar?</h4>
                                    <p className="text-sm">"We were anxious about traveling to Kashmir with young children. We wanted an agency that had direct contact with local Kashmiri drivers, not just a middleman."</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4 text-amber-500"/> Challenges Faced</h4>
                                    <p className="text-sm">"Our connecting flight from Delhi to Srinagar was delayed by 4 hours, meaning we arrived very late at night."</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500"/> Highlights & Team Response</h4>
                                    <p className="text-sm">"Our driver, Tariq, waited at the airport the entire time. He brought hot Kahwa for us, and the houseboat owner kept dinner hot until 11 PM. The hospitality was incredible."</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-border">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Final Recommendation</h4>
                                <p className="text-sm font-medium italic">"10/10 for families. If you are from Bhilai/Raipur and worried about Kashmir safety, trust Rudraksh Safar. You are in safe hands."</p>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
            
            <Footer />
        </main>
    );
};

export default TravellerStories;
