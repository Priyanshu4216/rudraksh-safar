import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Calendar, Map, CloudRain, AlertTriangle, ShieldCheck, Home, BookOpen, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpeditionReports = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Himalayan Expedition Field Reports | Rudraksh Safar"
                description="Read our highly detailed post-expedition field reports. Real route data, weather analysis, and safety challenge breakdowns from our Spiti and Ladakh trips."
                keywords="spiti trip report, ladakh route status, himalayan expedition report"
                canonicalUrl="https://rudrakshsafar.com/reports"
            />
            <Navbar />
            
            <div className="bg-slate-900 text-white py-16">
                <div className="container text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expedition Field Reports</h1>
                    <p className="text-lg text-slate-300">
                        Total operational transparency. These reports document the exact realities of high-altitude travel, proving our capability to execute safe expeditions.
                    </p>
                </div>
            </div>

            <div className="container py-16 max-w-5xl mx-auto space-y-16">
                
                {/* Standardized Report 1 */}
                <article className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                    <div className="bg-primary/10 p-6 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Spiti Valley Circuit</span>
                            <h2 className="text-2xl font-bold">June 2025: Central India Riders Expedition</h2>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                                <Calendar className="w-4 h-4" /> Departure: 15 June 2025 | Group: 14 Riders
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold">Expedition Expert</p>
                            <Link to="/about/founder" className="text-primary hover:underline">Priyanshu (Spiti Expert)</Link>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <img 
                            src="https://images.unsplash.com/photo-1533568344565-df048037fa9d?auto=format&fit=crop&w=1000&q=80" 
                            alt="Convoy crossing Kunzum Pass" 
                            className="w-full h-64 object-cover rounded-xl mb-8"
                        />

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Map className="w-5 h-5 text-indigo-500"/> Route Taken</h3>
                                    <p className="text-sm text-muted-foreground">Shimla → Sangla → Kalpa → Nako → Kaza → Chandratal → Manali. The complete circuit was accessible.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><CloudRain className="w-5 h-5 text-blue-500"/> Weather Conditions</h3>
                                    <p className="text-sm text-muted-foreground">Clear skies until Kaza. Unseasonal snowfall at Chandratal dropped temperatures to -2°C overnight.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Truck className="w-5 h-5 text-slate-500"/> Road Conditions</h3>
                                    <p className="text-sm text-muted-foreground">Tarmac up to Kalpa. Kaza to Manali stretch was entirely off-road. High water levels at Pagal Nala crossing near Batal.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Home className="w-5 h-5 text-emerald-500"/> Accommodation Used</h3>
                                    <p className="text-sm text-muted-foreground">Premium homestays in Kalpa. Spiti Sarai in Kaza. Swiss Tents at Chandratal with heavy winter bedding.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6 bg-muted p-6 rounded-xl">
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500"/> Safety Challenges</h3>
                                    <p className="text-sm text-muted-foreground">The water crossing at Pagal Nala was aggressively high due to glacier melt. Two Himalayan 411 bikes stalled mid-crossing.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500"/> Team Response</h3>
                                    <p className="text-sm text-muted-foreground">The backup 4x4 immediately deployed tow straps. Both bikes were pulled out within 5 minutes. The onboard mechanic drained the exhaust and had the bikes running 20 minutes later.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary"/> Key Learnings</h3>
                                    <p className="text-sm text-muted-foreground italic">"Never attempt Pagal Nala after 2 PM during June. We will adjust future departure times from Kaza to 5:00 AM to ensure we cross Batal before the glacier melt peaks."</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>

            </div>
            
            <Footer />
        </main>
    );
};

export default ExpeditionReports;
