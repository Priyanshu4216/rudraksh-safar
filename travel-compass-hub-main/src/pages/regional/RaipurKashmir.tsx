import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, MessageSquare, IndianRupee } from 'lucide-react';
import TourPackageSchema from '@/components/seo/TourPackageSchema';

const RaipurKashmir = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Kashmir Tour Packages from Raipur | Direct Flight Options"
                description="Book luxury Kashmir tour packages from Raipur. Specialized family tours, houseboat stays, and honeymoon packages with direct flights from RPR to Srinagar."
                keywords="kashmir tour packages from raipur, raipur to srinagar flights, kashmir family trip from chhattisgarh, honeymoon in kashmir from raipur"
                canonicalUrl="https://rudrakshsafar.com/tour-packages-from-raipur/kashmir"
            />
            <TourPackageSchema 
                name="Kashmir Luxury Tour from Raipur"
                description="Complete Kashmir family and honeymoon tour packages departing from Raipur, Chhattisgarh."
                image="https://rudrakshsafar.com/images/kashmir-raipur.jpg"
                price="38000"
                url="https://rudrakshsafar.com/tour-packages-from-raipur/kashmir"
                destinationName="Kashmir"
            />
            <Navbar />
            
            <div className="relative bg-emerald-950 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Kashmir Packages from Raipur</h1>
                        <p className="text-xl text-emerald-100 mb-8">
                            Experience Paradise on Earth. We provide end-to-end luxury travel from Swami Vivekananda Airport straight to your Srinagar Houseboat.
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
                        <p className="text-sm text-emerald-100 mb-4">"The flight coordination from Raipur was perfect, and the houseboat in Dal Lake was breathtaking. Highly recommended for Chhattisgarh families." - Ritu Sharma, Shankar Nagar, Raipur.</p>
                        <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                            <div>
                                <p className="text-xs text-emerald-300">Total Travel Time</p>
                                <p className="font-bold">~4 Hours (Flight)</p>
                            </div>
                            <div>
                                <p className="text-xs text-emerald-300">Base Cost (from RPR)</p>
                                <p className="font-bold">₹38,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Unique Logistics for Raipur */}
                    <h2 className="text-3xl font-bold mb-8">How to Reach Kashmir from Raipur</h2>
                    
                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="border border-border p-6 rounded-xl bg-card">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-600"><Plane /> Flight Information (Recommended)</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><strong>Departure:</strong> Swami Vivekananda Airport (RPR)</li>
                                <li><strong>Arrival:</strong> Sheikh ul-Alam International Airport, Srinagar (SXR)</li>
                                <li><strong>Airlines:</strong> IndiGo operates excellent connecting flights via Delhi (DEL) with minimal layover times.</li>
                                <li><strong>Average Flight Duration:</strong> 4h 30m (including layover)</li>
                                <li><strong>Estimated Flight Cost:</strong> ₹7,500 - ₹12,000 (One Way, Book 30 days ahead)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Local Pricing Context */}
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-2"><IndianRupee className="w-8 h-8"/> Total Estimated Trip Cost from Raipur</h2>
                    <div className="bg-muted p-8 rounded-xl mb-12">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Rudraksh Safar Kashmir Package (5N/6D)</span>
                                <strong>₹25,000</strong>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Raipur (RPR) to Srinagar (SXR) Flights (Round Trip)</span>
                                <strong>₹13,000</strong>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-2 text-primary">
                                <span>Total Estimated Cost</span>
                                <span>₹38,000 / person</span>
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

export default RaipurKashmir;
