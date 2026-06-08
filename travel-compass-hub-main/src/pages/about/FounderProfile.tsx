import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ShieldCheck, Mountain, Users, HeartPulse, History, AlertTriangle } from 'lucide-react';

const FounderProfile = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Priyanshu Safar - Founder & Himalayan Expedition Expert"
                description="Read the real story behind Rudraksh Safar. Discover our safety philosophy, lessons learned from 15 years of Himalayan travel, and commitment to Central India."
                keywords="rudraksh safar founder, priyanshu safar, himalayan safety expert"
                canonicalUrl="https://rudrakshsafar.com/about/founder"
            />
            <Navbar />
            
            <div className="container py-16 lg:py-24 max-w-4xl mx-auto">
                
                {/* Real Travel Photos & Header */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
                    <div className="w-full md:w-1/3">
                        <img 
                            src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=400&q=80" 
                            alt="Priyanshu operating a backup 4x4 near Kunzum Pass" 
                            className="w-full h-auto rounded-xl shadow-lg border-4 border-white mb-4"
                        />
                        <p className="text-xs text-muted-foreground text-center italic">Operating the backup 4x4 near Kunzum Pass (2024)</p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Himalayan Travel Expert</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Priyanshu</h1>
                        <p className="text-xl text-primary font-medium mb-4">Founder, Rudraksh Safar</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            "I don't sell holidays. I engineer expeditions. My priority is ensuring that every family and rider from Chhattisgarh can experience the Himalayas with absolute safety."
                        </p>
                    </div>
                </div>

                <div className="space-y-16">
                    
                    {/* Why Rudraksh Safar Exists */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><Mountain className="text-primary"/> Why Rudraksh Safar Exists</h2>
                        <div className="prose dark:prose-invert">
                            <p>For years, I watched massive OTAs sell "Spiti Packages" like they were selling trips to Goa. Travelers from Central India—people used to near-zero elevation—were being sent straight to Kaza (12,500 ft) without proper acclimatization protocols. The result? Ruined trips and severe Acute Mountain Sickness (AMS).</p>
                            <p>Rudraksh Safar exists to fix this. We are the only agency specifically engineering high-altitude logistics for the Central India demographic.</p>
                        </div>
                    </section>

                    {/* Personal Travel Experience */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><History className="text-primary"/> Personal Travel Experience</h2>
                        <div className="bg-muted p-6 rounded-xl grid sm:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-1">15+ Years</h3>
                                <p className="text-sm">Of Himalayan Exploration</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-1">50+</h3>
                                <p className="text-sm">Spiti Circuits Completed</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-1">100+</h3>
                                <p className="text-sm">Ladakh Expeditions Led</p>
                            </div>
                        </div>
                    </section>

                    {/* Lessons Learned */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><AlertTriangle className="text-primary"/> Lessons Learned From The Himalayas</h2>
                        <ul className="space-y-4">
                            <li className="border-l-4 border-amber-500 pl-4">
                                <strong className="block text-lg">The Mountain Dictates The Schedule</strong>
                                <span className="text-muted-foreground">In 2018, a landslide blocked the Manali-Leh highway. We learned that inflexible itineraries are dangerous. Now, every Rudraksh Safar trip includes buffer days and dynamic rerouting capabilities.</span>
                            </li>
                            <li className="border-l-4 border-amber-500 pl-4">
                                <strong className="block text-lg">Acclimatization Cannot Be Rushed</strong>
                                <span className="text-muted-foreground">You cannot fly from Raipur to Leh and immediately start touring. Our non-negotiable 24-hour rest mandate was born from witnessing severe AMS cases handled by other agencies.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Safety Philosophy */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><HeartPulse className="text-primary"/> Safety Philosophy</h2>
                        <p className="text-lg mb-4 text-muted-foreground">"Return is mandatory. The summit is optional."</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-bold mb-2">Oxygen Protocols</h4>
                                <p className="text-sm text-muted-foreground">Every group departure to Spiti and Ladakh carries medical-grade oxygen cylinders, not just portable cans.</p>
                            </div>
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-bold mb-2">Evacuation Ready</h4>
                                <p className="text-sm text-muted-foreground">We maintain a verified network of local 4x4 drivers capable of immediate medical evacuation from remote zones.</p>
                            </div>
                        </div>
                    </section>

                    {/* Commitment to Central India */}
                    <section className="bg-primary/5 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><Users className="text-primary"/> Commitment To Central India Travellers</h2>
                        <p className="text-lg mb-4">We are headquartered in Chhattisgarh because we serve Chhattisgarh.</p>
                        <p className="text-muted-foreground">When you book with us, you aren't calling a call center in Delhi. You are speaking directly with expedition leaders in Raipur and Bhilai. We understand your flight connections from Swami Vivekananda Airport, we understand your train routes, and we understand your climate adaptations.</p>
                    </section>

                </div>
            </div>
            
            <Footer />
        </main>
    );
};

export default FounderProfile;
