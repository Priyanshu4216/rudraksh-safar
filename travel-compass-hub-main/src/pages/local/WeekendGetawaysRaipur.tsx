import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Calendar, Car, Smile, UserCheck, Phone, MessageCircle, Info, Mountain, TreePine, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import Breadcrumbs from '@/components/seo/Breadcrumbs';

const WeekendGetawaysRaipur = () => {
    const faqs = [
        {
            question: "How far should a weekend destination be?",
            answer: "Ideally within 300 km or 6–7 hours travel to ensure you spend more time enjoying the destination than travelling."
        },
        {
            question: "Can weekend trips be budget-friendly?",
            answer: "Yes, weekend trips are usually economical due to shorter stays and nearby destinations."
        },
        {
            question: "Do you arrange transport for weekend trips?",
            answer: "Yes, we can arrange private cabs, tempo travellers, or bus bookings for your weekend getaway."
        },
        {
            question: "What are the best places near Raipur for 2 days?",
            answer: "Kanha National Park, Amarkantak, Sirpur, and Mainpat are excellent options for a 2-day trip."
        },
        {
            question: "Is it safe for couples?",
            answer: "Yes, we select safe and verified hotels and resorts suitable for couples and families."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Weekend Getaways from Raipur | Short Trips & Nearby Destinations</title>
                <meta name="description" content="Plan the perfect weekend getaway from Raipur. Explore nearby hill stations, wildlife sanctuaries, and heritage sites with our short trip packages." />
                <meta name="keywords" content="weekend getaways from raipur, short trips from raipur, 2 day trips near raipur, quick weekend vacation, nearby holiday destinations" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-raipur/weekend-getaways" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950 text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900"></div>
                    <div className="absolute inset-0 bg-muted/10"></div>
                    <div className="container relative z-10 text-center px-4">
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Raipur Packages', path: '/tour-packages-from-raipur' }, { label: 'Weekend Getaways', path: '/tour-packages-from-raipur/weekend-getaways' }]} />
                        </div>
                        <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                            Refresh & Recharge
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Weekend Getaways <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Short Trips from Raipur</span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Escape the routine with quick 2-3 day trips to nature, heritage, and wildlife destinations near you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg h-14 px-8 rounded-full shadow-lg" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, suggest me a weekend trip from Raipur">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Plan My Weekend
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 -mt-16 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-emerald-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-emerald-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Weekend getaways are short trips designed for 2–3 days, ideal for quick breaks from routine life. Rudraksh Safar helps plan weekend getaways from Raipur with nearby destinations, easy travel options, and short, well-planned itineraries.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Why Weekend Getaways */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why Weekend Getaways Are Perfect</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Weekend trips are the easiest way to travel frequently without disrupting your work or school schedule.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3"><Clock className="text-emerald-500 w-5 h-5" /> No long leave required</li>
                                    <li className="flex items-center gap-3"><Smile className="text-emerald-500 w-5 h-5" /> Quick mental refresh</li>
                                    <li className="flex items-center gap-3"><Calendar className="text-emerald-500 w-5 h-5" /> Low budget & easy planning</li>
                                    <li className="flex items-center gap-3"><UserCheck className="text-emerald-500 w-5 h-5" /> Ideal for families, couples & friends</li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-emerald-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <TreePine className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Nature</div>
                                        <div className="text-sm text-muted-foreground">Reconnect with outdoors</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-lime-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <Car className="w-10 h-10 text-lime-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Road Trips</div>
                                        <div className="text-sm text-muted-foreground">Scenic drives nearby</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-green-50 border-none col-span-2">
                                    <CardContent className="p-6 text-center">
                                        <Heart className="w-10 h-10 text-green-600 mx-auto mb-4" />
                                        <div className="font-bold text-lg mb-1">Quality Time</div>
                                        <div className="text-sm text-muted-foreground">Bond with your loved ones away from screens</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Best Weekend Getaway Destinations from Raipur</h2>
                            <p className="text-muted-foreground">Destinations carefully chosen for short travel time and maximum relaxation.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Kanha & Wildlife", icon: "🐅", desc: "Jungle safaris and forest resorts." },
                                { title: "Amarkantak", icon: "🏔️", desc: "Hill station and spiritual retreat." },
                                { title: "Sirpur Heritage", icon: "🏛️", desc: "Ancient temples and history." },
                                { title: "Gangrel Dam", icon: "🌊", desc: "Water sports and island camping." },
                                { title: "Mainpat", icon: "❄️", desc: "Shimla of Chhattisgarh - Tibetan culture." },
                                { title: "Chitrakote", icon: "🌊", desc: "Niagara of India - Waterfalls." }
                            ].map((place, i) => (
                                <Card key={i} className="hover:shadow-lg transition-all border-none shadow-md">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4">{place.icon}</div>
                                        <h3 className="font-bold text-xl mb-2">{place.title}</h3>
                                        <p className="text-muted-foreground">{place.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Types of Getaways & Inclusions */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Types of Weekend Getaways</h2>
                                <ul className="space-y-4">
                                    <li className="p-4 bg-muted rounded-xl flex items-center gap-4">
                                        <span className="text-2xl">🌿</span>
                                        <div>
                                            <h4 className="font-bold">Nature & Eco Retreats</h4>
                                            <p className="text-sm text-muted-foreground">Disconnect in bamboo cottages and forests.</p>
                                        </div>
                                    </li>
                                    <li className="p-4 bg-muted rounded-xl flex items-center gap-4">
                                        <span className="text-2xl">🛕</span>
                                        <div>
                                            <h4 className="font-bold">Spiritual Tours</h4>
                                            <p className="text-sm text-muted-foreground">Visit Dongargarh, Rajim, or Amarkantak.</p>
                                        </div>
                                    </li>
                                    <li className="p-4 bg-muted rounded-xl flex items-center gap-4">
                                        <span className="text-2xl">💑</span>
                                        <div>
                                            <h4 className="font-bold">Romantic Escapes</h4>
                                            <p className="text-sm text-muted-foreground">Privacy and luxury for couples.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">What We Include</h2>
                                <Card>
                                    <CardContent className="p-8 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <Car className="w-8 h-8 text-emerald-600" />
                                            <div>
                                                <h4 className="font-bold">Transport Planning</h4>
                                                <p className="text-sm text-muted-foreground">Private Cab or AC Bus</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <MapPin className="w-8 h-8 text-emerald-600" />
                                            <div>
                                                <h4 className="font-bold">Comfortable Stay</h4>
                                                <p className="text-sm text-muted-foreground">Select hotels/resorts for 1-2 nights</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Calendar className="w-8 h-8 text-emerald-600" />
                                            <div>
                                                <h4 className="font-bold">Flexible Timings</h4>
                                                <p className="text-sm text-muted-foreground">Departure as per your office hours</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Weekend Getaway FAQs</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Need a Quick Break?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let us plan a refreshing weekend trip for you. Just pack your bags and go!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, need weekend trip options">
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

export default WeekendGetawaysRaipur;
