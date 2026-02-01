import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotel, MapPin, DollarSign, Star, CheckCircle, Info, Phone, MessageCircle, Building, Briefcase, Users, Coffee, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import HotelLoader from '@/components/HotelLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HotelBooking = () => {
    const [loading, setLoading] = useState(true);
    const brands = [
        "Taj Hotels", "The Oberoi Group", "ITC Hotels", "Marriott", "JW Marriott", "Radisson Blu",
        "Club Mahindra", "Sterling Holidays", "Vivanta", "Mayfair Hotels", "Holiday Inn",
        "Lemon Tree Hotels", "Ginger Hotels", "Ibis Hotels", "Treebo Hotels", "FabHotels",
        "Red Fox Hotels", "The Hosteller"
    ];

    const faqs = [
        {
            question: "Is booking hotels through a travel agency better than online apps?",
            answer: "A travel agency helps you understand hotel policies, location suitability, and inclusions clearly, reducing chances of surprises during your stay."
        },
        {
            question: "Can I book budget hotels through you?",
            answer: "Yes. We assist with booking budget, standard, premium, and luxury hotels based on your requirements."
        },
        {
            question: "Are hotel prices fixed?",
            answer: "No. Hotel prices vary based on availability, season, and demand. Final pricing is confirmed at the time of booking."
        },
        {
            question: "Do you help with hotel bookings for tour packages?",
            answer: "Yes. Hotel bookings can be coordinated with tour packages for seamless travel planning."
        },
        {
            question: "What documents are required for hotel check-in?",
            answer: "Most hotels require a valid government-issued ID. Specific requirements depend on hotel policy."
        },
        {
            question: "Can hotel bookings be cancelled or modified?",
            answer: "Cancellation and modification depend on hotel rules and booking terms, which are explained clearly before confirmation."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Hotel Booking & Reservation Services | Rudraksh Safar</title>
                <meta name="description" content="Book budget, business, and luxury hotels with Rudraksh Safar. Personalised recommendations and booking assistance for stays across India and abroad." />
            </Helmet>

            <AnimatePresence>
                {loading && <HotelLoader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                    <main className="min-h-screen bg-background">
                        {/* Hero Section */}
                        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                            <div className="absolute inset-0 bg-[url('/images/hotel-hero.jpg')] bg-cover bg-center opacity-40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                            <div className="container relative z-10 text-center px-4">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="max-w-4xl mx-auto"
                                >
                                    <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                                        Best Rates Guaranteed
                                    </Badge>
                                    <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-tight">
                                        Find Your Perfect <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Stay Anywhere</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        From luxury resorts to budget-friendly stays, we get you the best deals on hotels worldwide.
                                    </p>

                                    {/* Search Bar Visual */}
                                    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 flex items-center gap-2 mb-8 shadow-2xl">
                                        <div className="hidden md:flex items-center gap-2 pl-4 text-slate-300">
                                            <MapPin className="w-5 h-5 text-blue-400" />
                                            <span>Where to?</span>
                                        </div>
                                        <div className="flex-1 px-4 text-white/50 text-lg flex items-center">
                                            Enter City, Hotel, or Destination
                                        </div>
                                        <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-8">
                                            <Search className="w-5 h-5 mr-2" /> Search
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-400">
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Free Cancellation</span>
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> No Hidden Fees</span>
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> 24/7 Support</span>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        {/* Brand Carousel */}
                        <section className="bg-slate-950 border-b border-white/5 overflow-hidden py-8 group">
                            <div className="flex flex-col gap-8 mb-4">
                                {/* Row 1 */}
                                <div className="relative w-full overflow-hidden">
                                    <div className="flex w-max animate-marquee gap-12 px-4 group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
                                        {[...brands.slice(0, 9), ...brands.slice(0, 9)].map((brand, i) => (
                                            <span key={`r1-${i}`} className="text-xl md:text-2xl font-serif text-slate-400/70 whitespace-nowrap hover:text-slate-200 transition-colors">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="relative w-full overflow-hidden">
                                    <div className="flex w-max animate-marquee gap-12 px-4 group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
                                        {[...brands.slice(9), ...brands.slice(9)].map((brand, i) => (
                                            <span key={`r2-${i}`} className="text-xl md:text-2xl font-serif text-slate-400/70 whitespace-nowrap hover:text-slate-200 transition-colors">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="py-20 bg-muted/20">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Simplifying Hotel Bookings</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                    Why scroll through endless websites? We offer <strong>consolidated hotel booking services</strong>.
                                    Whether you need a budget stay, a 5-star experience, or a bulk booking for weddings, we handle it all with
                                    <strong> unmatched offline rates</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Categories */}
                        <section className="py-20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4">Hotel Categories We Assist With</h2>
                                    <p className="text-muted-foreground">Suited for every travel style.</p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                    {[
                                        { title: "Budget Hotels", icon: DollarSign, color: "text-green-500", desc: "Clean, comfortable stays ideal for short trips and cost-conscious travellers." },
                                        { title: "Standard & Premium", icon: Building, color: "text-blue-500", desc: "Well-located hotels with modern amenities and dining facilities." },
                                        { title: "Luxury Resorts", icon: Star, color: "text-yellow-500", desc: "High-end properties with spas, fine dining, and curated experiences." },
                                        { title: "Family Friendly", icon: Users, color: "text-orange-500", desc: "Spacious rooms and safe surroundings for families with kids or elders." },
                                        { title: "Business Hotels", icon: Briefcase, color: "text-slate-500", desc: "Near airports and commercial hubs, designed for productivity." },
                                        { title: "Honeymoon Specials", icon: Coffee, color: "text-pink-500", desc: "Romantic getaways with special inclusions for couples." }
                                    ].map((cat, index) => (
                                        <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-slate-800 border-none shadow-md">
                                            <CardContent className="p-6">
                                                <cat.icon className={`w-10 h-10 ${cat.color} mb-4`} />
                                                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                                                <p className="text-muted-foreground">{cat.desc}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Specialized Services */}
                        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
                            <div className="container mx-auto px-4 relative z-10">
                                <div className="text-center mb-16">
                                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 mb-4">bulk & corporate</Badge>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Hotel Services</h2>
                                    <p className="text-blue-200/80 max-w-2xl mx-auto">
                                        Beyond individual stays, we provide end-to-end coordination for large groups, events, and business needs.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    {/* Corporate */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-blue-500/20 rounded-xl">
                                                <Briefcase className="w-8 h-8 text-blue-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Corporate & Meetings</h3>
                                        </div>
                                        <ul className="space-y-3 text-blue-100/80 mb-6">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /> Corporate meetings & boardroom bookings</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /> Conferences & seminars</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /> Annual meets & offsite events</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /> Business travel accommodation</li>
                                        </ul>
                                    </div>

                                    {/* Weddings */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-pink-500/20 rounded-xl">
                                                <Star className="w-8 h-8 text-pink-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Destination Weddings</h3>
                                        </div>
                                        <ul className="space-y-3 text-blue-100/80 mb-6">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" /> Selecting wedding resorts or hotels</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" /> Bulk room bookings for guests</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" /> Coordinating stay with events</li>
                                        </ul>
                                    </div>

                                    {/* Groups */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-green-500/20 rounded-xl">
                                                <Users className="w-8 h-8 text-green-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Group Reservations</h3>
                                        </div>
                                        <ul className="space-y-3 text-blue-100/80 mb-6">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" /> Family group tours</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" /> Student & educational groups</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" /> Religious or pilgrimage groups</li>
                                        </ul>
                                    </div>

                                    {/* Events */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-orange-500/20 rounded-xl">
                                                <Coffee className="w-8 h-8 text-orange-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Events & Functions</h3>
                                        </div>
                                        <ul className="space-y-3 text-blue-100/80 mb-6">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" /> Social events & private functions</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" /> Anniversary & celebration stays</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" /> Cultural & festive gatherings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQs */}
                        <section className="py-20 bg-muted/20">
                            <div className="container mx-auto px-4">
                                <div className="max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-8 text-center">Hotel Booking FAQs</h2>
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
                        <section className="py-20 bg-primary/5">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Need Help Booking a Hotel?</h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Whether you are planning a budget stay, family vacation, or luxury holiday, we help you choose suitable hotels with clarity.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full" asChild>
                                        <a href="https://wa.me/919406182174?text=Hi, I want to book a hotel">
                                            <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-full" asChild>
                                        <a href="tel:+919406182174">
                                            <Phone className="w-5 h-5 mr-2" /> Call Expert
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                    <FloatingWhatsApp />
                </motion.div>
            )}
        </>
    );
};

export default HotelBooking;
