import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, MessageSquare, IndianRupee } from 'lucide-react';
import TourPackageSchema from '@/components/seo/TourPackageSchema';

const RaipurLadakh = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Tour Packages from Raipur | Premium Bike & SUV Expeditions"
                description="Book your Leh Ladakh bike trip or SUV family package from Raipur. Includes flights from RPR to Leh, acclimatization guides, and total cost breakdown."
                keywords="ladakh tour packages from raipur, ladakh bike trip from chhattisgarh, raipur to leh flights, leh ladakh package from raipur"
                canonicalUrl="https://rudrakshsafar.com/tour-packages-from-raipur/ladakh"
            />
            <TourPackageSchema 
                name="Ladakh Premium Expedition from Raipur"
                description="Complete Leh Ladakh expedition packages departing from Raipur, Chhattisgarh."
                image="https://rudrakshsafar.com/images/ladakh-raipur.jpg"
                price="45000"
                url="https://rudrakshsafar.com/tour-packages-from-raipur/ladakh"
                destinationName="Ladakh"
            />
            <Navbar />
            
            <div className="relative bg-orange-950 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ladakh Expeditions from Raipur</h1>
                        <p className="text-xl text-orange-100 mb-8">
                            Conquer the Land of High Passes. Seamless flight connections from Raipur to Leh, with guaranteed acclimatization support upon arrival.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8" onClick={() => window.open('https://rudrakshsafar.com/contact', '_self')}>
                                Get Free Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" onClick={() => window.open('https://wa.me/919203650311', '_blank')}>
                                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Expert
                            </Button>
                        </div>
                    </div>
                    {/* EEAT Proof */}
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="text-primary"/> Local Expertise</h3>
                        <p className="text-sm text-orange-100 mb-4">"The team met us right outside Kushok Bakula Rimpochee Airport. As travelers from Raipur, the 24-hour mandatory rest in Leh saved our trip from altitude sickness." - Amit Verma, Naya Raipur.</p>
                        <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                            <div>
                                <p className="text-xs text-orange-300">Total Travel Time</p>
                                <p className="font-bold">~6 Hours (Flight)</p>
                            </div>
                            <div>
                                <p className="text-xs text-orange-300">Base Cost (from RPR)</p>
                                <p className="font-bold">₹45,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Unique Logistics for Raipur */}
                    <h2 className="text-3xl font-bold mb-8">How to Reach Ladakh from Raipur</h2>
                    
                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="border border-border p-6 rounded-xl bg-card">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-600"><Plane /> Flight Information (Mandatory)</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><strong>Departure:</strong> Swami Vivekananda Airport (RPR)</li>
                                <li><strong>Arrival:</strong> Kushok Bakula Rimpochee Airport, Leh (IXL)</li>
                                <li><strong>Airlines:</strong> Vistara and IndiGo offer connecting flights via Delhi (DEL) Terminal 3.</li>
                                <li><strong>Warning:</strong> Flights to Leh operate primarily in the early morning. An overnight layover in Delhi may be required depending on your Raipur departure time.</li>
                                <li><strong>Estimated Flight Cost:</strong> ₹12,000 - ₹18,000 (One Way, Book 45+ days ahead)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Local Pricing Context */}
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-2"><IndianRupee className="w-8 h-8"/> Total Estimated Trip Cost from Raipur</h2>
                    <div className="bg-muted p-8 rounded-xl mb-12">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Rudraksh Safar Ladakh SUV Expedition (6N/7D)</span>
                                <strong>₹25,000</strong>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Raipur (RPR) to Leh (IXL) Flights (Round Trip)</span>
                                <strong>₹20,000</strong>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-2 text-primary">
                                <span>Total Estimated Cost</span>
                                <span>₹45,000 / person</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default RaipurLadakh;
