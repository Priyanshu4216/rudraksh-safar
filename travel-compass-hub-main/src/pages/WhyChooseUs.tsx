import { Helmet } from 'react-helmet-async';
import { Shield, Clock, Award, Users, Heart, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
    const reasons = [
        { icon: Users, title: "Local Presence", desc: "We are not a faceless website. Our office is in Bhilai (GE Road) and we have specialized agents for Raipur. We are your neighbors." },
        { icon: Shield, title: "100% Transparency", desc: "No hidden costs. No 'Conditions Apply' shocks. We explain every inclusion and exclusion before you pay." },
        { icon: Clock, title: "24/7 Support", desc: "Our job doesn't end at booking. We support you throughout your trip - if your flight is delayed or you need a doctor, we are one call away." },
        { icon: Award, title: "Best Rate Guarantee", desc: "We negotiate bulk rates with hotels and vehicle providers to give you prices better than online portals." },
        { icon: Heart, title: "Personalized Care", desc: "We don't sell 'fixed' holidays. We customize every hour of your trip based on your taste and comfort." },
    ];

    return (
        <>
            <Helmet>
                <title>Why Choose Rudraksh Safar? | Trusted Travel Agent in Chhattisgarh</title>
                <meta name="description" content="Discover why 5000+ travelers in Bhilai & Raipur trust Rudraksh Safar. We offer local support, transparent pricing, and 24/7 assistance for all your trips." />
                <meta name="keywords" content="why choose rudraksh safar, trusted travel agent bhilai, best tour operator raipur, reliable travel agency chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/why-choose-us" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-emerald-50 dark:bg-emerald-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Peace of Mind <span className="text-emerald-600">Guaranteed</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Your holiday is precious. Don't risk it with unknown online portals. Trust the local experts.
                        </p>
                    </div>
                </section>

                {/* Reasons Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reasons.map((reason, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all border-emerald-100 dark:border-emerald-900">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <reason.icon className="w-7 h-7 text-emerald-600" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3">{reason.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table - Top 1% Strategy */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Local Travel Agent vs Online Booking</h2>
                            <p className="text-muted-foreground">Why 5000+ travelers chose our <strong>hassle-free tour packages</strong> over Faceless Apps.</p>
                        </div>
                        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border overflow-hidden">
                            <div className="grid grid-cols-3 text-center border-b bg-muted p-4 font-bold text-lg">
                                <div className="text-left pl-4">Feature</div>
                                <div className="text-emerald-600">Rudraksh Safar (Personalized)</div>
                                <div className="text-muted-foreground">Online Portals (Generic)</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">End-to-End Assistance</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Door-to-Door Care</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> DIY (Do It Yourself)</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">Itinerary Planning</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Customized Packages</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> Rigid Fixed Plans</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">Emergency Support</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Direct Agent Mobile</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> IVR / Chatbot</div>
                            </div>
                            <div className="grid grid-cols-3 text-center p-4 items-center">
                                <div className="text-left pl-4 font-medium">Trust Factor</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Verified Agent</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> Virtual Brand</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promise */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto border-2 border-dashed border-emerald-300 rounded-2xl p-10 bg-emerald-50/50 dark:bg-emerald-950/10">
                            <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
                            <blockquote className="text-xl italic text-muted-foreground mb-8">
                                "We treat every trip as if it were our own family's vacation. We earn not just money, but relationships. If you are not happy, we are not successful."
                            </blockquote>
                            <div className="font-bold flex flex-col items-center">
                                <span className="text-lg">Team Rudraksh Safar</span>
                                <span className="text-sm text-muted-foreground">Serving Since 2010</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-emerald-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Give us a chance to plan your next trip. You won't go back to generic booking sites.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-emerald-800">
                                <a href="https://wa.me/919406182174?text=I want to experience Rudraksh Safar service">
                                    Start Planning
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Bhilai Agent - SEO Content Block */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Why Book from a Bhilai-Based Agent?</h2>
                            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                                <p className="mb-6">
                                    When you search for <strong>"travel agency near me advantages"</strong>, you aren't just looking for a shop; you are looking for accountability.
                                    Booking a tour package from a local Bhilai agent like Rudraksh Safar gives you something no online app can provide: <strong>Peace of Mind</strong>.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Accountability</h3>
                                        <p>We live here. Our office is on GE Road. You know exactly where to find us if something goes wrong. Try finding the "office" of a faceless website when you are stuck at an airport.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Face-to-Face Trust</h3>
                                        <p>Sit with us, drink a cup of coffee, and plan your itinerary. We explain visa rules, flight timings, and hotel locations personally, eliminating all confusion.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Easy Cash/Local Payments</h3>
                                        <p>Don't want to risky large online transactions? We accept cash, cheques, and local bank transfers at our office. Your money is safe with a known local entity.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Chhattisgarh Specific Knowledge</h3>
                                        <p>We know the flight connections from Raipur better than anyone. We know which train from Durg is best for your connecting tour. Local expertise matters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Common Questions About Local Booking</h2>
                        <div className="space-y-4">
                            <Card className="p-0 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Is it cheaper to book with a local agent vs online?</h3>
                                    <p className="text-muted-foreground">Often, yes! We have B2B rates with hotels and transporters that are lower than public online prices. Plus, you save on hidden convenience fees.</p>
                                </CardContent>
                            </Card>
                            <Card className="p-0 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">What if I face an emergency during my trip?</h3>
                                    <p className="text-muted-foreground">This is our biggest advantage. You call our personal mobile number (24/7), not a toll-free call center. We solve issues immediately.</p>
                                </CardContent>
                            </Card>
                            <Card className="p-0 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2">Can I customize my package?</h3>
                                    <p className="text-muted-foreground">100%. Unlike rigid online combos, we build your trip from scratch. Add a day, change a hotel, upgrade a car - it's all your choice.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WhyChooseUs;
