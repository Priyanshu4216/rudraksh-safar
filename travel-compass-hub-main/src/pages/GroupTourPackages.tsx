import { Helmet } from 'react-helmet-async';
import { Users, GraduationCap, Briefcase, UserCheck, Heart, MapPin, CheckCircle, HelpCircle, Phone, MessageCircle, Info, Plane, Train, Hotel, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GroupTourPackages = () => {
    const faqs = [
        {
            question: "What is a group tour package?",
            answer: "A group tour package is a travel plan organized for a group of people travelling together under a coordinated itinerary."
        },
        {
            question: "How many people make a group?",
            answer: "Generally 6 or more travellers define a group. Discounts often start from this number."
        },
        {
            question: "Can we customize a group tour?",
            answer: "Yes. You can customize group tours based on budget, dates, and preference."
        },
        {
            question: "Do group tours cost less than individual travel?",
            answer: "Usually yes, because group rates on hotels and transports reduce overall costs."
        },
        {
            question: "Will we have a tour coordinator?",
            answer: "Yes, every group gets a dedicated coordinator for itinerary, logistics, and support."
        },
        {
            question: "What documents are required for group travel?",
            answer: "ID proofs of all travellers and travel documents (passport for international tours) are required as per destination."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Group Tour Packages | Friends, Family, Corporate & College Trips</title>
                <meta name="description" content="Discover the best group tour packages for family, friends, corporate teams, and students. Affordable, customized, and managed group trips from India." />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-indigo-950 text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                    <div className="container relative z-10 text-center px-4">
                        <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/50 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-wider">
                            Best Rates for Groups
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Group Tour Packages <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Discover the Best Group Trips</span>
                        </h1>
                        <p className="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Comfortable, Affordable & Customized. From family reunions to corporate offsites, we handle it all.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg h-14 px-8 rounded-full shadow-lg" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I need a group tour quote">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Get Group Quote
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 -mt-16 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-indigo-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-indigo-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Group tour packages are shared or private travel plans designed for families, friends, corporate teams, student groups, and special interest groups. Rudraksh Safar crafts tailored group tours with comfortable logistics, budget-friendly options, flexible itineraries, and safe travel support from booking to return.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* What Are Group Tour Packages */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Are Group Tour Packages?</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Group tour packages are travel plans where two or more people travel together under a coordinated itinerary with shared bookings for:
                                </p>
                                <ul className="grid grid-cols-2 gap-4 mb-8">
                                    <li className="flex items-center gap-2"><div className="p-2 bg-indigo-100 rounded-lg"><Bus className="w-5 h-5 text-indigo-600" /></div> Transportation</li>
                                    <li className="flex items-center gap-2"><div className="p-2 bg-indigo-100 rounded-lg"><Hotel className="w-5 h-5 text-indigo-600" /></div> Hotels & Meals</li>
                                    <li className="flex items-center gap-2"><div className="p-2 bg-indigo-100 rounded-lg"><MapPin className="w-5 h-5 text-indigo-600" /></div> Sightseeing</li>
                                    <li className="flex items-center gap-2"><div className="p-2 bg-indigo-100 rounded-lg"><UserCheck className="w-5 h-5 text-indigo-600" /></div> Local Guides</li>
                                </ul>
                                <p className="text-muted-foreground">
                                    Whether you’re planning a family reunion, a friends’ trip, a corporate outing, or a batch trip, group tours make travel cheaper, safer, and more fun.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-indigo-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-3xl font-bold text-indigo-600 mb-2">30%</div>
                                        <div className="text-sm font-medium">Average cost saving</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-purple-50 border-none">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                                        <div className="text-sm font-medium">Trip Support</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-green-50 border-none col-span-2">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-lg font-bold text-green-700 mb-1">Customizable</div>
                                        <div className="text-sm text-green-600">Tailored to your budget and dates</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Why Choose Group Tour Packages?</h2>
                            <p className="text-muted-foreground">Benefits that make group travel the best choice.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all dark:bg-slate-800">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
                                    <CardTitle>Easier Planning</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">No need to organize everything sitting with dozens of tabs — we handle logistics.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all dark:bg-slate-800">
                                <CardHeader>
                                    <DollarSign className="w-10 h-10 text-blue-500 mb-2" />
                                    <CardTitle>Better Costs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Group rates often come with significant discounts on hotels, transport, and activities.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all dark:bg-slate-800">
                                <CardHeader>
                                    <UserCheck className="w-10 h-10 text-purple-500 mb-2" />
                                    <CardTitle>Enhanced Safety</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">One contact person helps guide the entire journey for seamless coordination.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Who Can Book */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Who Can Book Group Tours?</h2>
                            <p className="text-muted-foreground">We curate experiences for every type of group.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            <Card className="border-l-4 border-l-blue-500 shadow-md">
                                <CardContent className="p-6">
                                    <Users className="w-8 h-8 text-blue-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Family Groups</h3>
                                    <p className="text-sm text-muted-foreground">Big family holiday with grandparents, children, and cousins.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-orange-500 shadow-md">
                                <CardContent className="p-6">
                                    <GraduationCap className="w-8 h-8 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">College & Student Groups</h3>
                                    <p className="text-sm text-muted-foreground">Budget-friendly group travel with safe itineraries and fun activities.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-slate-700 shadow-md">
                                <CardContent className="p-6">
                                    <Briefcase className="w-8 h-8 text-slate-700 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Corporate Teams</h3>
                                    <p className="text-sm text-muted-foreground">Team building, annual meets, and offsite events.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-pink-500 shadow-md">
                                <CardContent className="p-6">
                                    <Heart className="w-8 h-8 text-pink-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Friends Groups</h3>
                                    <p className="text-sm text-muted-foreground">Long weekend plans or multi-city journeys with your squad.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-yellow-500 shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-lg">🛕</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Pilgrimage Groups</h3>
                                    <p className="text-sm text-muted-foreground">Char Dham, Vaishno Devi, Golden Temple trips for religious groups.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-green-500 shadow-md">
                                <CardContent className="p-6">
                                    <MapPin className="w-8 h-8 text-green-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Custom Groups</h3>
                                    <p className="text-sm text-muted-foreground">Any specific interest group or customized requirement.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Popular Destinations */}
                <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Popular Group Tour Destinations</h2>
                            <p className="text-indigo-200">Top-rated locations for group adventures.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><MapPin className="text-orange-400" /> Domestic India</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏖️</span> Goa Beach & Party Tours</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏔️</span> Himachal Hills (Manali, Shimla)</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">❄️</span> Kashmir & Ladakh</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏰</span> Rajasthan Heritage Tours</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🌴</span> Kerala Backwaters</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Plane className="text-blue-400" /> International Favorites</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🌆</span> Dubai & Abu Dhabi</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏙️</span> Singapore & Malaysia</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🌴</span> Thailand & Bali</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏞️</span> Sri Lanka Heritage Trails</li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"><span className="text-xl">🏰</span> Europe Multi-City Routes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inclusions & Pricing */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">What’s Included</h2>
                                <Card>
                                    <CardContent className="p-6">
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Transportation (AC bus / train / flights)</li>
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Hotel stays (2★ to 5★)</li>
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Daily breakfast</li>
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Sightseeing as per itinerary</li>
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Local transfers & guide support</li>
                                            <li className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> Dedicated tour coordinator</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Group Pricing Factors</h2>
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="mb-4 text-muted-foreground">Group tours are priced based on:</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <Badge variant="outline">Number of travellers</Badge>
                                            <Badge variant="outline">Travel dates & season</Badge>
                                            <Badge variant="outline">Destination</Badge>
                                            <Badge variant="outline">Hotel Category</Badge>
                                            <Badge variant="outline">Transport Choice</Badge>
                                        </div>
                                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
                                            <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                                                📌 Note: Group discounts are available for bigger groups (10+). Final prices are confirmed after itinerary confirmation.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Book */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">How to Book a Group Tour</h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                            <div className="relative">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 mx-auto mb-4">1</div>
                                <h3 className="font-bold mb-2">Tell us Details</h3>
                                <p className="text-sm text-muted-foreground">Share size, dates & budget.</p>
                            </div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 mx-auto mb-4">2</div>
                                <h3 className="font-bold mb-2">Get Options</h3>
                                <p className="text-sm text-muted-foreground">Receive itinerary & pricing.</p>
                            </div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 mx-auto mb-4">3</div>
                                <h3 className="font-bold mb-2">Confirm & Pay</h3>
                                <p className="text-sm text-muted-foreground">Choose plan & pay advance.</p>
                            </div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4">4</div>
                                <h3 className="font-bold mb-2">Start Journey</h3>
                                <p className="text-sm text-muted-foreground">Get details & enjoy!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Group Travel FAQs</h2>
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

                {/* Footer CTA */}
                <section className="py-20 bg-slate-900 text-white border-t border-white/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Start Planning Your Group Tour Today</h2>
                        <div className="flex flex-wrap justify-center gap-4 text-slate-300 mb-8 font-medium">
                            <span className="flex items-center gap-2"><span className="text-2xl">🏖️</span> Friends Trip</span>
                            <span className="flex items-center gap-2"><span className="text-2xl">👨‍👩‍👧</span> Family Holiday</span>
                            <span className="flex items-center gap-2"><span className="text-2xl">👔</span> Corporate Offsite</span>
                            <span className="flex items-center gap-2"><span className="text-2xl">🛕</span> Pilgrimage</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I need help with group booking">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-slate-900 border-white hover:bg-white/90 h-14 px-8 rounded-full" asChild>
                                <a href="tel:+919406182174">
                                    <Phone className="w-5 h-5 mr-2" /> Call Now
                                </a>
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-slate-500 max-w-3xl mx-auto border-t border-white/10 pt-8">
                            Important: Rudraksh Safar provides group tour planning and booking assistance. Actual services such as transport, accommodation, guides, and activities are provided by third-party suppliers and are subject to their terms and availability.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default GroupTourPackages;
