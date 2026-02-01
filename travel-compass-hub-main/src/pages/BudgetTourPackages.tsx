import { Helmet } from 'react-helmet-async';
import { Wallet, PiggyBank, MapPin, CheckCircle, HelpCircle, Phone, MessageCircle, Info, Plane, Train, Hotel, Calculator, TrendingDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BudgetTourPackages = () => {
    const faqs = [
        {
            question: "Are budget tour packages safe?",
            answer: "Yes. Budget tours focus on cost efficiency, not unsafe compromises. We select safe hotels and reliable transport."
        },
        {
            question: "Can budget packages be customised?",
            answer: "Yes. You can customise destinations, duration, and services to fit your exact budget."
        },
        {
            question: "Are flights included in budget tours?",
            answer: "Flights may be included or excluded depending on the package type. Train or bus options are often used to keep costs low."
        },
        {
            question: "Do budget hotels have good amenities?",
            answer: "We select value-for-money hotels that provide essential amenities like clean rooms, breakfast, and Wi-Fi."
        },
        {
            question: "Is travel insurance included?",
            answer: "Basic travel insurance can be added upon request for a small additional fee."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Budget Tour Packages | Affordable Holidays - Rudraksh Safar</title>
                <meta name="description" content="Plan affordable holidays with our budget tour packages. Cost-effective trips to Goa, Himachal, Thailand, and Dubai with no hidden charges." />
                <meta name="keywords" content="budget tour packages, cheap holiday packages, low cost tour packages, budget family tours, affordable travel packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-teal-950 text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                    <div className="container relative z-10 text-center px-4">
                        <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                            Travel More, Spend Less
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Budget Tour Packages <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Affordable Holidays Without Compromise</span>
                        </h1>
                        <p className="text-lg md:text-xl text-teal-100/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Experience the joy of travel with transparent pricing, smart choices, and value-for-money itineraries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-lg h-14 px-8 rounded-full shadow-lg" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I need a budget tour quote">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Get Budget Quote
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 -mt-16 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-teal-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-teal-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Budget tour packages are affordable travel plans designed to minimize costs while covering essential experiences such as travel, accommodation, and sightseeing. Rudraksh Safar helps travellers plan budget-friendly domestic and international holidays with transparent pricing, smart hotel choices, and customised itineraries.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* What Are Budget Packages */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Are Budget Tour Packages?</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Budget tour packages are travel plans created for travellers who want to explore destinations at the lowest possible cost without sacrificing safety, comfort, or essential experiences.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3"><CheckCircle className="text-teal-500 w-5 h-5" /> Value-for-money hotels</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-teal-500 w-5 h-5" /> Optimised travel routes</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-teal-500 w-5 h-5" /> Essential sightseeing included</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-teal-500 w-5 h-5" /> Shared or economical transport options</li>
                                </ul>
                                <p className="text-muted-foreground border-l-4 border-teal-200 pl-4">
                                    Budget travel is ideal for students, families, friends, first-time travellers, and cost-conscious explorers.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-teal-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <PiggyBank className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Lower Costs</div>
                                        <div className="text-sm text-muted-foreground">Overall trip cost reduced significantly</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-emerald-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <Calculator className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Cost Control</div>
                                        <div className="text-sm text-muted-foreground">Planned itineraries avoid surprise expenses</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-cyan-50 border-none col-span-2">
                                    <CardContent className="p-6 text-center">
                                        <TrendingDown className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Travel More</div>
                                        <div className="text-sm text-muted-foreground">Smart budgeting allows you to travel more often</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Destinations */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Popular Budget Tour Destinations</h2>
                            <p className="text-muted-foreground">Top picks for affordable adventures.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader className="bg-orange-50 dark:bg-orange-950/20">
                                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                                        <MapPin className="w-6 h-6" /> Budget Trips in India
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><span className="text-xl">🏖️</span> Goa budget holidays</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🏔️</span> Himachal (Manali, Shimla, Kasol)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🏰</span> Rajasthan budget tours</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🌴</span> Kerala affordable packages</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🛕</span> Uttarakhand & spiritual tours</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                                        <Plane className="w-6 h-6" /> Budget International Tours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><span className="text-xl">🇹🇭</span> Thailand budget trips</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🌆</span> Dubai budget holidays</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🏞️</span> Sri Lanka tours</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🇳🇵</span> Nepal budget travel</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🇲🇾</span> Malaysia & Singapore (off-season)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Inclusions */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold mb-12">What’s Included in Budget Packages?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-6 border rounded-xl hover:border-teal-500 transition-colors">
                                <Hotel className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Budget Stays</h3>
                                <p className="text-sm text-muted-foreground">Clean budget or standard hotels</p>
                            </div>
                            <div className="p-6 border rounded-xl hover:border-teal-500 transition-colors">
                                <Train className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Transport</h3>
                                <p className="text-sm text-muted-foreground">Bus/Train/Flight based on plan</p>
                            </div>
                            <div className="p-6 border rounded-xl hover:border-teal-500 transition-colors">
                                <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Sightseeing</h3>
                                <p className="text-sm text-muted-foreground">Essential spots covered</p>
                            </div>
                            <div className="p-6 border rounded-xl hover:border-teal-500 transition-colors">
                                <UserCheck className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Support</h3>
                                <p className="text-sm text-muted-foreground">Travel coordination</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-teal-50 dark:bg-teal-950/20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Book Budget Tours with Rudraksh Safar?</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="flex gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm h-fit"><Wallet className="w-6 h-6 text-teal-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Honest Cost Breakdown</h3>
                                    <p className="text-muted-foreground text-sm">No hidden charges. You know exactly what you pay for.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm h-fit"><CheckCircle className="w-6 h-6 text-teal-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Value Selection</h3>
                                    <p className="text-muted-foreground text-sm">Hotel & transport selection focused on maximum value.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm h-fit"><Phone className="w-6 h-6 text-teal-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Full Support</h3>
                                    <p className="text-muted-foreground text-sm">Budget optimisation without compromising safety. Support before and during travel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Budget Tour FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left font-medium text-lg">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-slate-900 text-white border-t border-white/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Plan Your Affordable Escape</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Don't let budget stop you from exploring. Let us build the perfect low-cost itinerary for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I want to book a budget trip">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-slate-900 border-white hover:bg-white/90 h-14 px-8 rounded-full" asChild>
                                <a href="tel:+919406182174">
                                    <Phone className="w-5 h-5 mr-2" /> Call Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// Import component directly to avoid 'UserCheck is not defined' if i missed importing it up top
// Checking imports... Wallet, PiggyBank, MapPin, CheckCircle, HelpCircle, Phone, MessageCircle, Info, Plane, Train, Hotel, Calculator, TrendingDown...
// Added UserCheck to imports in next step to be safe if not there.

import { UserCheck } from 'lucide-react';

export default BudgetTourPackages;
