import { Helmet } from 'react-helmet-async';
import { Sun, ThermometerSun, MapPin, Calendar, Umbrella, UserCheck, Phone, MessageCircle, Info, Mountain, Plane, Palmtree } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SummerHolidayPackages = () => {
    const faqs = [
        {
            question: "When should summer holidays be booked?",
            answer: "We recommend booking at least 30–60 days in advance as summer is peak season and prices rise quickly."
        },
        {
            question: "Are summer tours suitable for kids?",
            answer: "Yes, our summer itineraries are designed to be family-friendly with comfortable pace and kid-friendly activities."
        },
        {
            question: "Do you offer cool hill station packages?",
            answer: "Absolutely. We specialize in trips to Himachal, Kashmir, Uttarakhand, and North East India to escape the heat."
        },
        {
            question: "Can we get customization for large families?",
            answer: "Yes, we can customize the entire tour for large family groups including private transport and specific meal preferences."
        },
        {
            question: "Is visa assistance provided for international summer trips?",
            answer: "Yes, we provide complete visa assistance for destinations like Europe, Bali, Singapore, etc."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Summer Holiday Packages | Beat the Heat - Rudraksh Safar</title>
                <meta name="description" content="Plan your perfect summer escape. Cool hill stations, beach resorts, and international tours for families and couples to beat the summer heat." />
                <meta name="keywords" content="summer holiday packages, summer vacation tours, summer family holidays, summer travel destinations, school vacation tours" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-orange-500 text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                    <div className="container relative z-10 text-center px-4">
                        <Badge className="mb-6 bg-white/20 text-white border-white/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                            Cool Escapes
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Summer Holiday Packages <br />
                            <span className="text-white/90">Beat the Heat with Smart Travel</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            From snowy peaks to breezy beaches, find the perfect getaway for your summer vacation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg h-14 px-8 rounded-full shadow-lg" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, planning a summer trip">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Plan Summer Trip
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 -mt-16 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-orange-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Sun className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Sun className="w-6 h-6 text-orange-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Summer holiday packages are designed to help travellers escape heat and enjoy vacations during school and work holidays. Rudraksh Safar offers summer travel packages covering hill stations, cooler regions, beach destinations, and family-friendly locations.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Why Plan Summer */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why Summer Holidays Need Planning</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Summer is the peak travel season for families due to school vacations. Proper planning is essential to ensure a smooth trip.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3"><Calendar className="text-orange-500 w-5 h-5" /> <strong>Higher Demand:</strong> Hotels & flights book out fast.</li>
                                    <li className="flex items-center gap-3"><ThermometerSun className="text-orange-500 w-5 h-5" /> <strong>Beat the Heat:</strong> We pick destinations with pleasant weather.</li>
                                    <li className="flex items-center gap-3"><Umbrella className="text-orange-500 w-5 h-5" /> <strong>Availability:</strong> Early planning secures better rooms & views.</li>
                                </ul>
                                <p className="text-muted-foreground border-l-4 border-orange-200 pl-4">
                                    Early planning helps secure better hotels, routes, and pricing before the rush begins.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-blue-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <Mountain className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Mountains</div>
                                        <div className="text-sm text-muted-foreground">Cool hill stations suitable for all ages</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-green-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <Palmtree className="w-10 h-10 text-green-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Islands</div>
                                        <div className="text-sm text-muted-foreground">Breezy tropical escapes</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-yellow-50 border-none col-span-2">
                                    <CardContent className="p-6 text-center">
                                        <UserCheck className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Family Focused</div>
                                        <div className="text-sm text-muted-foreground">Safe, comfortable, and engaging for kids</div>
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
                            <h2 className="text-3xl font-bold mb-4">Popular Summer Holiday Destinations</h2>
                            <p className="text-muted-foreground">Top choices to stay cool this summer.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader className="bg-cyan-50 dark:bg-cyan-950/20">
                                    <CardTitle className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                                        <MapPin className="w-6 h-6" /> India Summer Destinations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><span className="text-xl">🏔️</span> Himachal Pradesh (Adventures & Views)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">❄️</span> Kashmir & Ladakh (Snow & Lakes)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🕉️</span> Uttarakhand hill stations (Nainital, Mussoorie)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🌄</span> North-East India (Gangtok, Shillong)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🍃</span> Coorg & Wayanad (Forest Retreats)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader className="bg-indigo-50 dark:bg-indigo-950/20">
                                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                                        <Plane className="w-6 h-6" /> International Summer Escapes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><span className="text-xl">🏰</span> Europe Summer Tours (Swiss, Paris)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🌴</span> Bali & Indonesia (Beach Fun)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🕌</span> Turkey & Georgia (Cultural Cool)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🏞️</span> Sri Lanka Hill Regions (Ella, Nuwara Eliya)</li>
                                        <li className="flex items-center gap-2"><span className="text-xl">🦁</span> Kenya & Africa (Migration Season)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Family Focus */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">For Families</Badge>
                        <h2 className="text-3xl font-bold mb-6">Summer Holidays for Families & Kids</h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Summer packages are ideal for school vacations, family reunions, and long leisure trips. Our itineraries are designed to be comfortable, safe, and balanced.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-orange-50 dark:bg-orange-950/10 rounded-xl border border-orange-100">
                                <h3 className="font-bold text-lg mb-2">School Vacations</h3>
                                <p className="text-sm text-muted-foreground">Educational yet fun trips timed with school breaks.</p>
                            </div>
                            <div className="p-6 bg-orange-50 dark:bg-orange-950/10 rounded-xl border border-orange-100">
                                <h3 className="font-bold text-lg mb-2">Activities Included</h3>
                                <p className="text-sm text-muted-foreground">Camping, parks, and light adventure for kids.</p>
                            </div>
                            <div className="p-6 bg-orange-50 dark:bg-orange-950/10 rounded-xl border border-orange-100">
                                <h3 className="font-bold text-lg mb-2">Relaxed Pace</h3>
                                <p className="text-sm text-muted-foreground">No rushing. Wake up late and enjoy the vibe.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Summer Holiday FAQs</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Don't Miss the Summer Fun</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Book early to get the best deals and rooms. Let's plan your cool escape today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, help me plan a summer holiday">
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

export default SummerHolidayPackages;
