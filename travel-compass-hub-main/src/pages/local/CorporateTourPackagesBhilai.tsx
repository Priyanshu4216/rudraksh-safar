import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, CheckCircle, Building2, Plane, Bus, FileText, Info, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RelatedServices from '@/components/RelatedServices';

const CorporateTourPackagesBhilai = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Tour Packages Bhilai | MICE & Offsite Trips - Rudraksh Safar</title>
                <meta name="description" content="Best corporate tour operator in Bhilai-Durg for office trips, team building, and MICE events. GST billing available. Packages for Goa, Dubai, Udaipur." />
                <meta name="keywords" content="corporate tour packages bhilai, corporate travel agent bhilai, office trips from bhilai, mice tourism bhilai, corporate outing organizers" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/corporate-tours" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://loremflickr.com/1600/900/corporate,meeting')] bg-cover bg-center opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge variant="outline" className="mb-4 text-slate-300 border-slate-500">B2B Travel Solutions</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Corporate Tour Experts in <span className="text-blue-400">Bhilai</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                            Seamless planning for Offsites, Conferences, and Team Building events. Trusted by top companies in Bhilai & Raipur.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <a href="https://wa.me/919406182174?text=We need corporate tour quote">Get Corporate Quote</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-blue-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-blue-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Corporate tour packages are organized travel plans designed for companies, startups, and organizations to manage meetings, offsites, conferences, training programs, and team outings efficiently. We assist with corporate travel planning, hotel and venue selection, logistics coordination, and group accommodation management to ensure smooth and productive business travel experiences.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Detailed Info Sections */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">
                            {/* What Are Corporate Packages */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Are Corporate Tour Packages?</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Corporate tour packages are professionally planned travel arrangements created for business teams and organizations. These packages focus on efficiency, coordination, comfort, and cost control.
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Team outings and bonding trips</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Corporate offsite meetings</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Conferences and seminars</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Training programs and workshops</li>
                                </ul>
                            </div>

                            {/* Planning Made Simple */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900">
                                <h2 className="text-3xl font-bold mb-6">Corporate Travel Planning Made Simple</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Planning corporate travel involves multiple variables such as schedules, accommodation capacity, meeting spaces, transportation, and budget approvals. We assist organizations by handling these complexities.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-background p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold flex items-center gap-2 mb-2"><Plane className="w-5 h-5 text-blue-600" /> Logistics Handling</h3>
                                        <p className="text-sm text-muted-foreground">Ensuring smooth check-ins, transfers, and transport coordination.</p>
                                    </div>
                                    <div className="bg-background p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold flex items-center gap-2 mb-2"><Building2 className="w-5 h-5 text-blue-600" /> Venue Selection</h3>
                                        <p className="text-sm text-muted-foreground">Identifying hotels with conference halls, banquet spaces, and business amenities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Tailored for Business Needs</h2>
                            <p className="text-muted-foreground">We understand that corporate travel requires precision, punctuality, and professionalism.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">Annual Offsites</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Reward your team with a relaxing getaway to Goa or Thailand. We handle everything from flights to gala dinners.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">Team Building</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Adventure camps in Rishikesh or leadership workshops in Udaipur resorts with professional trainers.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">MICE & Conferences</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Large scale event capability for dealer meets and conferences in Raipur or Metro cities.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Top Destinations */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Popular Corporate Destinations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://loremflickr.com/800/600/goa,beach" alt="Goa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Goa</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://loremflickr.com/800/600/udaipur,palace" alt="Udaipur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Udaipur</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://loremflickr.com/800/600/dubai,skyline" alt="Dubai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Dubai</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://loremflickr.com/800/600/lonavala,mountains" alt="Lonavala" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Lonavala</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Corporate Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-inner">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">B2B Service Promise</h2>
                            <ul className="grid md:grid-cols-2 gap-6">
                                <li className="flex items-start gap-3">
                                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">MICE Travel Services</h4>
                                        <p className="text-sm text-muted-foreground">Expert handling of Meetings, Incentives, Conferences, and Exhibitions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Incentive Travel Programs</h4>
                                        <p className="text-sm text-muted-foreground">Motivate your team with curated luxury travel experiences and rewards.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Employee Travel Management</h4>
                                        <p className="text-sm text-muted-foreground">Complete logistics support: Flights, Cabs, Hotels & Gala Event management.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Company Offsite Tour Planner</h4>
                                        <p className="text-sm text-muted-foreground">We design itineraries that balance work sessions with team bonding fun.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Corporate Travel FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium text-lg">Do corporate tour packages include meeting halls?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Yes, assistance is provided to book hotels with suitable meeting and conference facilities, projecters, and sound systems.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium text-lg">Can corporate tours be customized?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Yes, itineraries can be fully customized based on company requirements, team size, and focused activities.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-medium text-lg">Are group discounts available?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        Group pricing depends on hotel policies, dates, and availability, but we always negotiate the best bulk rates for our clients.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <p className="mt-8 text-sm text-center text-muted-foreground">
                                <strong>Important Information:</strong> Corporate tour services involve coordination with independent hotels, transport providers, and venues. Availability, pricing, and inclusions are subject to supplier terms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Plan Your Next Company Event</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Trusted by leading businesses in Bhilai & Raipur. Let's make your team trip memorable.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-blue-800">
                            <a href="https://wa.me/919406182174?text=Hi, I am looking for corporate tour packages">
                                Request Proposal
                            </a>
                        </Button>
                    </div>
                </section>

                <RelatedServices mode="packages" />

            </main >
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CorporateTourPackagesBhilai;
