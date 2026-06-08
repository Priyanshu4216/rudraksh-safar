import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Train, Calendar, MessageSquare, IndianRupee } from 'lucide-react';
import TourPackageSchema from '@/components/seo/TourPackageSchema';

const RaipurSpiti = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Spiti Valley Tour Packages from Raipur | Direct Train & Flight Routes"
                description="Book the ultimate Spiti Valley expedition from Raipur. Includes train schedules from Raipur Jn, flight routes from RPR, and localized cost estimates."
                keywords="spiti trip from raipur, spiti valley package from raipur, chhattisgarh to spiti, train from raipur to spiti"
                canonicalUrl="https://rudrakshsafar.com/tour-packages-from-raipur/spiti-valley"
            />
            <TourPackageSchema 
                name="Spiti Valley Expedition from Raipur"
                description="Complete Spiti Valley tour package departing from Raipur, Chhattisgarh."
                image="https://rudrakshsafar.com/images/spiti-raipur.jpg"
                price="29000"
                url="https://rudrakshsafar.com/tour-packages-from-raipur/spiti-valley"
                destinationName="Spiti Valley"
            />
            <Navbar />
            
            {/* Revenue Elements Above the Fold */}
            <div className="relative bg-slate-900 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Spiti Valley Packages from Raipur</h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Seamlessly travel from Chhattisgarh to the Himalayas. We handle your logistics from Raipur Junction directly to the mountains.
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
                        <p className="text-sm text-slate-200 mb-4">"Rudraksh Safar arranged our entire trip from Raipur. The connection from Delhi was flawless." - Vikram Singh, VIP Road, Raipur.</p>
                        <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                            <div>
                                <p className="text-xs text-slate-400">Total Travel Time</p>
                                <p className="font-bold">~32 Hours (Train)</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Base Cost (from RPR)</p>
                                <p className="font-bold">₹29,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Unique Logistics for Raipur */}
                    <h2 className="text-3xl font-bold mb-8">How to Reach Spiti from Raipur</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="border border-border p-6 rounded-xl bg-card">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600"><Train /> Option 1: By Train (Budget Friendly)</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><strong>Departure:</strong> Raipur Junction (R)</li>
                                <li><strong>Route:</strong> Take the Chhattisgarh Express (18237) or Gondwana Express (12409) to New Delhi (NDLS) / Hazrat Nizamuddin (NZM).</li>
                                <li><strong>Connection:</strong> Board an overnight Volvo bus from Majnu Ka Tila (Delhi) to Manali or Shimla.</li>
                                <li><strong>Estimated Train Cost:</strong> ₹1,500 - ₹2,500 (3AC)</li>
                            </ul>
                        </div>
                        
                        <div className="border border-border p-6 rounded-xl bg-card">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-600"><Plane /> Option 2: By Flight (Time Saving)</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><strong>Departure:</strong> Swami Vivekananda Airport (RPR)</li>
                                <li><strong>Route:</strong> Direct Indigo flight from RPR to Delhi (DEL).</li>
                                <li><strong>Connection:</strong> Fly DEL to Chandigarh (IXC) or take a cab/bus directly to Shimla.</li>
                                <li><strong>Estimated Flight Cost:</strong> ₹5,000 - ₹8,000 (One Way)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Local Pricing Context */}
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-2"><IndianRupee className="w-8 h-8"/> Total Estimated Trip Cost from Raipur</h2>
                    <div className="bg-muted p-8 rounded-xl mb-12">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Rudraksh Safar Spiti Package (7 Days)</span>
                                <strong>₹25,000</strong>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Raipur to Delhi (3AC Train Round Trip)</span>
                                <strong>₹4,000</strong>
                            </div>
                            <div className="flex justify-between border-b border-border pb-2">
                                <span>Delhi to Manali (Volvo Bus Round Trip)</span>
                                <strong>₹2,500</strong>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-2 text-primary">
                                <span>Total Estimated Cost</span>
                                <span>₹31,500 / person</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <h2 className="text-3xl font-bold mb-8">Raipur Traveler FAQs</h2>
                    <div className="space-y-4 mb-12">
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-bold text-lg">Can I find direct flights from Raipur to Kullu/Manali?</h4>
                            <p className="text-muted-foreground">No, there are no direct flights. You must fly from Swami Vivekananda Airport to Delhi (IGI) and then take a connecting flight to Kullu (Bhuntar), or travel by road.</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-bold text-lg">Is it safe for a family traveling from Chhattisgarh?</h4>
                            <p className="text-muted-foreground">Absolutely. We provide dedicated support from the moment you leave Raipur. Our team in Manali/Shimla tracks your arrival to ensure zero friction during transit.</p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default RaipurSpiti;
