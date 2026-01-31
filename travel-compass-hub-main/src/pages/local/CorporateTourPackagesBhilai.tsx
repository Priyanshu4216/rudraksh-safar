import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, CheckCircle, Building2, Plane, Bus, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CorporateTourPackagesBhilai = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Tour Packages Bhilai | MICE & Offsite Trips - Rudraksh Safar</title>
                <meta name="description" content="Best corporate tour operator in Bhilai-Durg for office trips, team building, and MICE events. GST billing available. Packages for Goa, Dubai, Udaipur." />
                <meta name="keywords" content="corporate tour packages bhilai, corporate travel agent bhilai, office trips from bhilai, mice tourism bhilai, corporate outing organizers" />
                <link rel="canonical" href="https://rudrakshsafar.com/corporate-tour-packages-bhilai" />
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
                                        <h4 className="font-bold">GST Billing</h4>
                                        <p className="text-sm text-muted-foreground">Proper tax invoices for Input Tax Credit (ITC).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Dedicated Manager</h4>
                                        <p className="text-sm text-muted-foreground">Single point of contact for your HR/Admin team.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">End-to-End Logistics</h4>
                                        <p className="text-sm text-muted-foreground">Flights, Cabs, Hotels & Gala Event management.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">On-Time Execution</h4>
                                        <p className="text-sm text-muted-foreground">Strict adherence to itinerary without delays.</p>
                                    </div>
                                </li>
                            </ul>
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

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CorporateTourPackagesBhilai;
