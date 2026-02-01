import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { ShieldCheck, PhoneCall, Heart, Plane, Users, Baby, Clock, DollarSign } from 'lucide-react';

const TravelSafety = () => {
    return (
        <>
            <Helmet>
                <title>Safe Travel with Family | 24/7 Support | Rudraksh Safar</title>
                <meta name="description" content="Worried about travel safety? Rudraksh Safar provides 24/7 emergency support, family-friendly hotels, and secure bookings. Travel without anxiety." />
                <meta name="keywords" content="is it safe to travel with family, who helps during travel emergency, safe tour packages for seniors, travel agency responsibility, best travel agent support" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-safety" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-rose-50 dark:bg-rose-950/20 overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <ShieldCheck className="w-16 h-16 text-rose-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            Travel with <span className="text-rose-600">Confidence</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We know that traveling to a new country can be scary. That is why we don't just book tickets; we act as your local guardian away from home.
                        </p>
                    </div>
                </section>

                {/* Triple Shield of Safety */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">The Rudraksh Safety Promise</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Feature 1 */}
                            <div className="bg-card border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <PhoneCall className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">24/7 Human Emergency Line</h3>
                                <p className="text-muted-foreground">
                                    No chatbots. No "press 1 for service". You get a direct mobile number of a senior agent. Flight cancelled? Medical issue? Lost passport? We pick up on the first ring.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-card border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Family & Senior Friendly</h3>
                                <p className="text-muted-foreground">
                                    We handpick hotels that are safe for families and couples. No shady locations. For seniors, we arrange wheelchair assistance and ground-floor rooms upon request.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-card border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Plane className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Disruption Management</h3>
                                <p className="text-muted-foreground">
                                    If an airline cancels a flight, we don't leave you stranded. We immediately work on rebooking or finding alternative transport. We fight for your refunds while you relax.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety Questions */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-12">Answering Your Fears</h2>
                        <div className="space-y-6">
                            <div className="bg-background rounded-xl p-6 border shadow-sm">
                                <div className="flex gap-4 items-start">
                                    <Heart className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Is it safe to travel with small kids?</h3>
                                        <p className="text-muted-foreground">Yes! We ensure itineraries are "kid-paced" - not too rushed. We book hotels with 24-hour medical help on call and providest private cabs so you can stop whenever needed.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background rounded-xl p-6 border shadow-sm">
                                <div className="flex gap-4 items-start">
                                    <Clock className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">What if I get sick abroad?</h3>
                                        <p className="text-muted-foreground">We strongly recommend travel insurance (which we assist with). In an emergency, we help locate the nearest reputed hospital and can translate/communicate with doctors if language is a barrier.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background rounded-xl p-6 border shadow-sm">
                                <div className="flex gap-4 items-start">
                                    <Baby className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Is the food safe?</h3>
                                        <p className="text-muted-foreground">For international trips (like Thailand/Bali), we guide you to trusted Indian restaurants if you prefer. We advise on water safety and hygiene standards of every destination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border-l-4 border-l-primary p-6 mt-10 rounded-r-xl shadow-md">
                            <h3 className="font-bold text-lg mb-2">Our Responsibility</h3>
                            <p className="text-muted-foreground">
                                "When you book with Rudraksh Safar, you aren't just a booking reference number. You are our responsibility until you return safely to your doorstep in Bhilai/Raipur."
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Button variant="default" asChild>
                                    <a href="tel:+919406182174">Speak to a Safety Expert</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TravelSafety;
