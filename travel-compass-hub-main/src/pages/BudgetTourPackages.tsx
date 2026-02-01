import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PiggyBank, MapPin, CheckCircle, HelpCircle, ArrowRight, Train, Hotel, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BudgetTourPackages = () => {
    const budgetDestinations = [
        { name: "Manali: Snow & Adventure", price: "₹8,000", days: "5 Days", desc: "Volvo tickets from Delhi, cozy hotel stay, breakfast & dinner included." },
        { name: "Goa: Sun & Sand", price: "₹6,500", days: "4 Days", desc: "Stay near Calangute beach with scooter rental assistance for freedom." },
        { name: "Thailand: Global Gateway", price: "₹18,999", days: "5 Days", desc: "Bangkok & Pattaya city tour. Includes airport transfers & daily breakfast." },
    ];

    const faqs = [
        { question: "Which is the cheapest travel agency in Bhilai?", answer: "Rudraksh Safar is known as the cheapest travel agency in Bhilai, offering value-for-money domestic and international tour packages with transparent pricing and no hidden costs." },
        { question: "Do you offer low budget family tours from Bhilai?", answer: "Yes, we specialize in low budget family tour packages from Bhilai to destinations like Goa, Manali, and Puri. We optimize hotels and transport to fit your budget without compromising comfort." },
        { question: "What are the cheapest international trips from Bhilai?", answer: "The cheapest international trips from Bhilai include Nepal (starting ₹18k), Thailand (starting ₹29k), and Vietnam. We provide budget-friendly flight combinations from Raipur." },
        { question: "Are budget tours safe for families?", answer: "Yes, absolutely. We only partner with verified 3-star hotels that have good safety ratings. We do not compromise on safety to cut costs." },
        { question: "Can I get an affordable honeymoon package from Bhilai?", answer: "Yes, we offer affordable honeymoon packages starting from ₹15,000 for couples. Popular budget destinations include Goa, Manali, and Kerala with special romantic inclusions." },
    ];

    return (
        <>
            <Helmet>
                <title>Cheapest Travel Agency in Bhilai | Budget Tour Packages Starting ₹4,999</title>
                <meta name="description" content="Looking for the cheapest tour packages from Bhilai? Rudraksh Safar offers low cost holiday packages to Goa, Manali, Thailand & Dubai. Best budget travel agency near you." />
                <meta name="keywords" content="cheapest travel agency in Bhilai, budget tour packages from Bhilai, low cost tour packages, cheap holiday packages from Bhilai, affordable travel agency near me, budget trips from Bhilai, cheapest international trip from Bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/budget-tour-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-yellow-50 dark:bg-yellow-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <Badge variant="outline" className="mb-4 border-yellow-600 text-yellow-700 bg-yellow-50">Cheapest & Best</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                            Cheapest Tour Packages <span className="text-yellow-600">From Bhilai</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Rudraksh Safar is the best budget travel agency in Bhilai. Explore low cost holiday packages for family, couples, and friends starting @ ₹4,999/-.
                        </p>
                        <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
                            <a href="#deals">View Budget Deals</a>
                        </Button>
                    </div>
                </section>

                {/* Budget Slabs */}
                <section className="py-12 border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-background rounded-xl shadow-sm border hover:border-yellow-500 transition-colors">
                                <PiggyBank className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">Under ₹10,000</h3>
                                <p className="text-sm text-muted-foreground">Manali, Pachmarhi, Rishikesh</p>
                            </div>
                            <div className="p-6 bg-background rounded-xl shadow-sm border hover:border-blue-500 transition-colors">
                                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">₹10,000 - ₹20,000</h3>
                                <p className="text-sm text-muted-foreground">Goa, Kerala, Nepal</p>
                            </div>
                            <div className="p-6 bg-background rounded-xl shadow-sm border hover:border-green-500 transition-colors">
                                <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                                <h3 className="font-bold text-lg">₹20,000 - ₹30,000</h3>
                                <p className="text-sm text-muted-foreground">Thailand, Kashmir, Andaman</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Deals Grid */}
                <section id="deals" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10">Unbeatable Budget Deals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {budgetDestinations.map((trip, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                                    <div className="h-48 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 relative flex items-center justify-center p-6">
                                        <MapPin className="w-12 h-12 text-yellow-600/40" />
                                        <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">{trip.days}</Badge>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg">{trip.name}</h3>
                                            <span className="font-bold text-green-600">{trip.price}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-4">{trip.desc}</p>
                                        <Button variant="secondary" size="sm" className="w-full" asChild>
                                            <a href={`https://wa.me/919406182174?text=Enquiry for ${trip.name} budget package`}>Get Itinerary</a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Inclusions */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold mb-4">Value for Money Promise</h2>
                            <p className="text-muted-foreground">We cut costs, not experience.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><Hotel className="text-primary w-6 h-6" /></div>
                                <h3 className="font-bold">Clean & Safe Stay</h3>
                                <p className="text-sm text-muted-foreground">Checked & verified budget hotels/homestays.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><Train className="text-primary w-6 h-6" /></div>
                                <h3 className="font-bold">Smart Travel</h3>
                                <p className="text-sm text-muted-foreground">Sleeper Bus / Train combinations to save flight costs.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><Utensils className="text-primary w-6 h-6" /></div>
                                <h3 className="font-bold">Meals Included</h3>
                                <p className="text-sm text-muted-foreground">Breakfast & Dinner included to save daily expense.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center gap-2 justify-center mb-8">
                                <HelpCircle className="w-8 h-8 text-muted-foreground" />
                                <h2 className="text-3xl font-bold">Common Questions</h2>
                            </div>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`}>
                                        <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BudgetTourPackages;
