import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Briefcase, Tag, Bus, Mic, TrendingDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GroupTourPackages = () => {
    return (
        <>
            <Helmet>
                <title>Group Tour Packages | Friends, College & Corporate Trips - Rudraksh Safar</title>
                <meta name="description" content="Organize perfect group trips with best rates. Packages for College Industrial Visits, Friends getaways, and Corporate Offices. Bulk booking discounts available." />
                <meta name="keywords" content="group tour packages, college trip organizers, corporate group tours, friends trip planner, bulk booking discounts" />
                <link rel="canonical" href="https://rudrakshsafar.com/group-tour-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Herro */}
                <section className="relative py-20 bg-indigo-50 dark:bg-indigo-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <Badge variant="outline" className="mb-4 border-indigo-600 text-indigo-700">More People = Less Price</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Ultimate <span className="text-indigo-600">Group Adventures</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            From college industrial visits to office offsites and bachelor parties. We handle the logistics; you handle the fun.
                        </p>
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                            <a href="https://wa.me/919406182174?text=We are a group of X people, need quote">Get Group Quote</a>
                        </Button>
                    </div>
                </section>

                {/* Types of Groups */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="hover:border-indigo-500 transition-colors text-center p-6">
                                <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">College / Students</h3>
                                <p className="text-muted-foreground mb-4">Industrial Visits (IV) & Excursions. Budget friendly accommodation and bus travel.</p>
                                <Badge variant="secondary">Goa • Manali • Pondicherry</Badge>
                            </Card>
                            <Card className="hover:border-indigo-500 transition-colors text-center p-6">
                                <div className="border rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900">
                                    <Users className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Friends / Batches</h3>
                                <p className="text-muted-foreground mb-4">Reunions and Bachelor trips. Adventure activities and nightlife included.</p>
                                <Badge variant="secondary">Goa • Thailand • Rishikesh</Badge>
                            </Card>
                            <Card className="hover:border-indigo-500 transition-colors text-center p-6">
                                <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Corporate Teams</h3>
                                <p className="text-muted-foreground mb-4">Team building, Conferences & Offsites. Premium resorts with conference halls.</p>
                                <Badge variant="secondary">Lonavala • Udaipur • Dubai</Badge>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Group Benefits */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Book as a Group?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center p-4">
                                <TrendingDown className="w-10 h-10 text-green-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2">Massive Discounts</h3>
                                <p className="text-sm text-muted-foreground">Save up to 30% per person compared to individual bookings.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <Mic className="w-10 h-10 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2">Dedicated Tour Manager</h3>
                                <p className="text-sm text-muted-foreground">An expert accompanies you to handle logistics and issues.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <Bus className="w-10 h-10 text-blue-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2">Private Transport</h3>
                                <p className="text-sm text-muted-foreground">Private Bus/Tempo traveler just for your group. Stop where you want.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <Tag className="w-10 h-10 text-purple-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2">Custom Itinerary</h3>
                                <p className="text-sm text-muted-foreground">Designed exactly how you want. Party hard or Relax - your choice.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Group Size Slabs */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-10">We Handle All Sizes</h2>
                        <div className="inline-flex flex-wrap justify-center gap-4">
                            <div className="px-8 py-4 bg-muted rounded-xl border">
                                <span className="block text-2xl font-bold">Small</span>
                                <span className="text-muted-foreground">6-12 People</span>
                            </div>
                            <div className="px-8 py-4 bg-muted rounded-xl border border-indigo-200 bg-indigo-50/50">
                                <span className="block text-2xl font-bold text-indigo-700">Medium</span>
                                <span className="text-muted-foreground">12-30 People</span>
                                <Badge className="ml-2 bg-indigo-600">Most Popular</Badge>
                            </div>
                            <div className="px-8 py-4 bg-muted rounded-xl border">
                                <span className="block text-2xl font-bold">Large</span>
                                <span className="text-muted-foreground">30-100+ People</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-indigo-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Planning a Big Trip?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Get a customized itinerary and quotation within 24 hours.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-indigo-800">
                            <a href="https://wa.me/919406182174?text=Hi, I need to plan a group trip">
                                Get Group Quotation
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

export default GroupTourPackages;
