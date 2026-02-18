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
import TLDRSection from '@/components/TLDRSection';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import SEOHead from '@/components/SEOHead';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const HotelBooking = () => {
    const [loading, setLoading] = useState(() => !sessionStorage.getItem('rudraksh_hotel_loader_shown'));
    const brands = [
        "Taj Hotels", "The Oberoi Group", "ITC Hotels", "Marriott", "JW Marriott", "Radisson Blu",
        "Club Mahindra", "Sterling Holidays", "Vivanta", "Mayfair Hotels", "Holiday Inn",
        "Lemon Tree Hotels", "Ginger Hotels", "Ibis Hotels", "Treebo Hotels", "FabHotels",
        "Red Fox Hotels", "The Hosteller"
    ];

    const faqs = [
        {
            question: "Can travel agents get cheaper hotel rates than apps?",
            answer: "Yes. We have offline contracted rates (B2B prices) with many hotels that are not visible on public apps like Agoda or Booking.com."
        },
        {
            question: "Do you provide GST invoices for hotel booking?",
            answer: "Absolutely. Unlike some international booking apps, we provide 100% compliant Indian GST invoices, which allows businesses to claim input credit."
        },
        {
            question: "Who supports us if the hotel denies check-in?",
            answer: "We do. If you book via an app, you talk to a bot. If you book with us, you call our personal support number, and we resolve issues instantly with the hotel management."
        },
        {
            question: "Is it cheaper to book hotels through a travel agent?",
            answer: "Often yes. Besides lower room rates, we save you money by advising on location (transport costs), hidden fees, and avoiding 'bad' hotels that look good in photos."
        },
        {
            question: "Can you handle bulk bookings for weddings or corporate?",
            answer: "Yes, this is our specialty. We negotiate group rates, handle room allocations, and coordinate with the hotel for events, meals, and check-ins."
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Hotel Booking Services in India",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Rudraksh Safar",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bhilai",
                        "addressRegion": "Chhattisgarh",
                        "addressCountry": "IN"
                    }
                },
                "serviceType": "Hotel Reservation",
                "areaServed": ["Bhilai", "Raipur", "Durg", "India", "International"],
                "description": "Expert hotel booking assistance for business, families, and groups. Offline rates, GST invoices, and 24/7 human support."
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <SEOHead
                title="Hotel Booking Services in India – Budget, Business & Luxury Stays"
                description="Expert hotel booking assistance with better offline rates, GST invoices, and human support. Book safe stays in Bhilai, Raipur, India & Abroad."
                keywords="hotel booking agent, business hotel booking with gst, corporate hotel booking india, hotel reservation service bhilai, group booking travel agency"
                canonicalUrl="https://rudrakshsafar.com/hotel-booking"
                structuredData={structuredData}
            />

            <AnimatePresence>
                {loading && <HotelLoader onComplete={() => {
                    setLoading(false);
                    sessionStorage.setItem('rudraksh_hotel_loader_shown', 'true');
                }} />}
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
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                            <div className="container relative z-10 text-center px-4">
                                <div className="flex justify-center mb-6">
                                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Hotel Booking', path: '/hotel-booking' }]} />
                                </div>
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="max-w-4xl mx-auto"
                                >
                                    <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                                        Best Rates Guaranteed
                                    </Badge>
                                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                                        Hotel Booking Services <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">in India & Abroad</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                        Expert booking assistance with <strong>better offline rates</strong>, <strong>GST invoices</strong>, and <strong>human support</strong>.
                                        Don't just book a room; ensure a safe stay.
                                    </p>



                                    <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-400">
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Free Cancellation</span>
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> No Hidden Fees</span>
                                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> 24/7 Support</span>
                                    </div>
                                </motion.div>
                            </div>
                        </section>



                        {/* WHO IS THIS FOR SECTION */}
                        <section className="py-16 bg-background">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Who Should Use Our Hotel Booking Service?</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Online apps are great for quick solo trips. But for everything else, you need an expert.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <h3 className="font-bold text-xl mb-3 text-blue-600">🏢 Business Travelers</h3>
                                        <p className="text-sm text-muted-foreground">Get <strong>GST Invoices</strong> for input credit. We ensure your hotel allows flexible check-in and provides reliable WiFi.</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <h3 className="font-bold text-xl mb-3 text-pink-600">👨‍👩‍👧 Families & Couples</h3>
                                        <p className="text-sm text-muted-foreground">Avoid "couple-unfriendly" hotels. We verify safety, hygiene, and child-friendliness before you pay.</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <h3 className="font-bold text-xl mb-3 text-green-600">🚌 Groups & Weddings</h3>
                                        <p className="text-sm text-muted-foreground">Need 10+ rooms? Apps limit you. We negotiate <strong>bulk discounts</strong> and coordinate food/events.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* HOW IT WORKS */}
                        <section className="py-16 bg-blue-50/50 dark:bg-blue-950/20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">How Our Booking Process Works</h2>
                                    <p className="text-muted-foreground">Simple, transparent, and human-led.</p>
                                </div>
                                <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                                    {[
                                        { step: "1", title: "Share Details", desc: "Dates, Location, Budget." },
                                        { step: "2", title: "We Shortlist", desc: "Best options sent to WhatsApp." },
                                        { step: "3", title: "Comparisons", desc: "Price & amenity breakdown." },
                                        { step: "4", title: "Support", desc: "We manage check-in & issues." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="relative p-6 bg-background rounded-xl border shadow-sm text-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">
                                                {item.step}
                                            </div>
                                            <h3 className="font-bold mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* WHY BOOK WITH US COMPARISON */}
                        <section className="py-16 bg-background">
                            <div className="container mx-auto px-4 max-w-4xl">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold mb-4">Why Book via Rudraksh Safar?</h2>
                                    <p className="text-muted-foreground">Travel Agent vs Online Apps</p>
                                </div>
                                <div className="overflow-hidden rounded-xl border">
                                    <Table>
                                        <TableHeader className="bg-slate-100 dark:bg-slate-800">
                                            <TableRow>
                                                <TableHead className="w-[40%]">Feature</TableHead>
                                                <TableHead className="text-center text-red-500 font-bold">Online Apps (OTAs)</TableHead>
                                                <TableHead className="text-center text-green-600 font-bold bg-green-50 dark:bg-green-900/20">Rudraksh Safar</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Support</TableCell>
                                                <TableCell className="text-center text-muted-foreground">Chatbots / Email</TableCell>
                                                <TableCell className="text-center font-bold text-green-700 bg-green-50 dark:bg-green-900/20">Direct Call (24/7)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Pricing</TableCell>
                                                <TableCell className="text-center text-muted-foreground">Dynamic (High demand = High price)</TableCell>
                                                <TableCell className="text-center font-bold text-green-700 bg-green-50 dark:bg-green-900/20">Fixed / Negotiated Rates</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">GST Invoice</TableCell>
                                                <TableCell className="text-center text-muted-foreground">Often Missing / Complicated</TableCell>
                                                <TableCell className="text-center font-bold text-green-700 bg-green-50 dark:bg-green-900/20">100% Guaranteed</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Check-in Issues</TableCell>
                                                <TableCell className="text-center text-muted-foreground">"Contact Hotel"</TableCell>
                                                <TableCell className="text-center font-bold text-green-700 bg-green-50 dark:bg-green-900/20">We Resolve Instantly</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="py-20 bg-muted/20">
                            <div className="container mx-auto px-4">
                                <LastUpdated className="mb-6 justify-center" />
                                <div className="max-w-4xl mx-auto">
                                    <TLDRSection
                                        title="Quick Answer: Hotel Booking Services"
                                        summary="We offer consolidated hotel booking services for budget, luxury, and corporate stays. Rudraksh Safar provides unmatched offline rates, gst invoices for business travel, and coordination for large groups and weddings in Bhilai, Raipur, and across India."
                                        areasServed={["Bhilai", "Raipur", "Durg", "Pan India"]}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Categories */}
                        <section className="py-20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4">What types of hotels do we book?</h2>
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
                            <div className="absolute inset-0 bg-muted/5"></div>
                            <div className="container mx-auto px-4 relative z-10">
                                <div className="text-center mb-16">
                                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 mb-4">bulk & corporate</Badge>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Do we handle corporate and bulk bookings?</h2>
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

                        <FAQsSection
                            title="Frequently Asked Questions about Hotel Booking"
                            description="Common questions about booking hotels with Rudraksh Safar."
                            faqs={faqs}
                        />

                        <RelatedServices mode="booking" />

                        {/* CTA */}
                        <section className="py-20 bg-primary/5">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">How to get started with booking?</h2>
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
