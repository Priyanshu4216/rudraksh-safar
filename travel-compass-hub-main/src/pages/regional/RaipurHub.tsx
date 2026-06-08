import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Star, Plane, Train } from 'lucide-react';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const RaipurHub = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Tour Packages from Raipur | Rudraksh Safar"
                description="Book the best tour packages from Raipur. Specialized in Spiti, Kashmir, and Ladakh expeditions. Rated 4.9/5 by Chhattisgarh travelers."
                keywords="tour packages from raipur, travel agency in raipur, spiti trip from raipur, kashmir package from raipur, ladakh trip from raipur"
                canonicalUrl="https://rudrakshsafar.com/tour-packages-from-raipur"
            />
            {/* Local Schema Implementation */}
            <LocalBusinessSchema city="Raipur" state="Chhattisgarh" rating="4.9" reviewCount="128" />
            <Navbar />
            
            {/* Revenue Elements Above the Fold (Mobile Optimized) */}
            <div className="bg-primary/5 py-12 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span>4.9/5 Google Rating | 500+ Raipur Travelers Served</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Premium Tour Packages from Raipur</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        The #1 trusted expedition operator for Chhattisgarh. Specializing in high-altitude terrain: Spiti, Kashmir, and Ladakh.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto" onClick={() => window.open('https://rudrakshsafar.com/contact', '_self')}>
                            Get Free Quote
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-green-600 text-green-600 hover:bg-green-50" onClick={() => window.open('https://wa.me/919203650311', '_blank')}>
                            <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Expert
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mini Authority Structure */}
            <div className="container py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Destination 1: Spiti */}
                    <div className="border rounded-xl p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3 border-b pb-2">Spiti Valley from Raipur</h3>
                        <p className="text-muted-foreground mb-4">Direct train connectivity from Raipur Jn to Chandigarh, then guided expedition.</p>
                        <div className="text-sm space-y-2 mb-6">
                            <p className="flex justify-between"><span>Est. Travel Time:</span> <strong>32 Hrs (Train)</strong></p>
                            <p className="flex justify-between"><span>Base Pkg Cost:</span> <strong>₹25,000</strong></p>
                            <p className="flex justify-between"><span>Best Time:</span> <strong>June - Sep</strong></p>
                        </div>
                        <Button asChild className="w-full" variant="secondary">
                            <Link to="/tour-packages-from-raipur/spiti-valley">View Raipur ↔ Spiti Guide</Link>
                        </Button>
                    </div>

                    {/* Destination 2: Kashmir */}
                    <div className="border rounded-xl p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3 border-b pb-2">Kashmir from Raipur</h3>
                        <p className="text-muted-foreground mb-4">Direct flights via Indigo from Swami Vivekananda Airport to Srinagar.</p>
                        <div className="text-sm space-y-2 mb-6">
                            <p className="flex justify-between"><span>Est. Travel Time:</span> <strong>4 Hrs (Flight)</strong></p>
                            <p className="flex justify-between"><span>Base Pkg Cost:</span> <strong>₹35,000</strong></p>
                            <p className="flex justify-between"><span>Best Time:</span> <strong>April - Nov</strong></p>
                        </div>
                        <Button asChild className="w-full" variant="secondary">
                            <Link to="/tour-packages-from-raipur/kashmir">View Raipur ↔ Kashmir Guide</Link>
                        </Button>
                    </div>

                    {/* Destination 3: Ladakh */}
                    <div className="border rounded-xl p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3 border-b pb-2">Ladakh from Raipur</h3>
                        <p className="text-muted-foreground mb-4">Connecting flights from Raipur to Leh via Delhi (T3).</p>
                        <div className="text-sm space-y-2 mb-6">
                            <p className="flex justify-between"><span>Est. Travel Time:</span> <strong>6 Hrs (Flight)</strong></p>
                            <p className="flex justify-between"><span>Base Pkg Cost:</span> <strong>₹45,000</strong></p>
                            <p className="flex justify-between"><span>Best Time:</span> <strong>May - Oct</strong></p>
                        </div>
                        <Button asChild className="w-full" variant="secondary">
                            <Link to="/tour-packages-from-raipur/ladakh">View Raipur ↔ Ladakh Guide</Link>
                        </Button>
                    </div>

                </div>
            </div>

            {/* Why Raipur Travelers Choose Us */}
            <div className="bg-muted/30 py-16">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">Why Travelers From Raipur Choose Us</h2>
                    <div className="grid sm:grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><MapPin className="text-primary"/> Based in Chhattisgarh</h4>
                            <p className="text-muted-foreground">We aren't a faceless OTA. Our headquarters is here in Central India. You can walk into our office and speak directly to your expedition leader.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Plane className="text-primary"/> Localized Logistics</h4>
                            <p className="text-muted-foreground">We calculate your itineraries starting from Raipur Railway Station or Swami Vivekananda Airport, ensuring seamless door-to-door transit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default RaipurHub;
