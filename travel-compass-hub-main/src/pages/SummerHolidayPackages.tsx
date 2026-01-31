import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sun, Snowflake, Calendar, Mountain, Users, Heart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SummerHolidayPackages = () => {
    return (
        <>
            <Helmet>
                <title>Summer Holiday Packages 2026 | Beat the Heat Trips - Rudraksh Safar</title>
                <meta name="description" content="Plan your perfect summer vacation. Cool destinations like Manali, Kashmir, Ladakh & Spiti. Best family & couple packages for March, April, May & June." />
                <meta name="keywords" content="summer holiday packages, summer vacation india, manali tour package, kashmir summer trip, ladakh road trip package" />
                <link rel="canonical" href="https://rudrakshsafar.com/summer-holiday-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-sky-100 dark:bg-sky-950/30 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
                            Coolest <span className="text-blue-600">Summer Holidays</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Escape the scorching heat. Snow-capped mountains and chilly valleys are waiting for you.
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <a href="#destinations">Find Cool Places</a>
                        </Button>
                    </div>
                </section>

                {/* Month Organizer */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10">Plan by Month</h2>
                        <Tabs defaultValue="may" className="max-w-4xl mx-auto">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="march">March</TabsTrigger>
                                <TabsTrigger value="april">April</TabsTrigger>
                                <TabsTrigger value="may">May</TabsTrigger>
                                <TabsTrigger value="june">June</TabsTrigger>
                            </TabsList>
                            <div className="mt-8 text-center p-6 border rounded-xl bg-card">
                                <TabsContent value="march" className="animate-in fade-in-50">
                                    <h3 className="text-2xl font-bold mb-2">Early Summer Escape</h3>
                                    <p className="text-muted-foreground mb-4">Perfect for: <strong>Kashmir (Tulip Festival)</strong> & <strong>Sikkim</strong>.</p>
                                    <p className="text-sm">Crowds are less, and you might still find fresh snow in lower altitudes.</p>
                                </TabsContent>
                                <TabsContent value="april" className="animate-in fade-in-50">
                                    <h3 className="text-2xl font-bold mb-2">School Breaks Begin</h3>
                                    <p className="text-muted-foreground mb-4">Perfect for: <strong>Manali</strong> & <strong>Darjeeling</strong>.</p>
                                    <p className="text-sm">Ideal for families. Prices start rising, so pre-booking is recommended.</p>
                                </TabsContent>
                                <TabsContent value="may" className="animate-in fade-in-50">
                                    <h3 className="text-2xl font-bold mb-2">Peak Summer</h3>
                                    <p className="text-muted-foreground mb-4">Perfect for: <strong>Ladakh</strong> & <strong>Spiti Valley</strong>.</p>
                                    <p className="text-sm">High altitude passes open up. The only way to truly beat the 45°C heat.</p>
                                </TabsContent>
                                <TabsContent value="june" className="animate-in fade-in-50">
                                    <h3 className="text-2xl font-bold mb-2">Pre-Monsoon Clouds</h3>
                                    <p className="text-muted-foreground mb-4">Perfect for: <strong>Ooty/Kodaikanal</strong> & <strong>Nainital</strong>.</p>
                                    <p className="text-sm">Pleasant weather before the heavy rains hit. Great for couples.</p>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Top Destinations */}
                <section id="destinations" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Top Summer Destinations</h2>
                                <p className="text-muted-foreground">Places where AC is not needed!</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="hover:shadow-lg transition-all">
                                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-slate-800 flex items-center justify-center rounded-t-xl">
                                    <Snowflake className="w-16 h-16 text-blue-500/50" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg flex items-center gap-2"><Snowflake className="w-4 h-4 text-blue-400" /> Manali</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Rohtang Pass snow & Solang Valley adventure.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-amber-900 dark:to-orange-950 flex items-center justify-center rounded-t-xl">
                                    <Mountain className="w-16 h-16 text-amber-500/50" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg flex items-center gap-2"><Mountain className="w-4 h-4 text-blue-400" /> Ladakh</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Pangong Lake & Khardung La bike trip.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-indigo-900 dark:to-purple-950 flex items-center justify-center rounded-t-xl">
                                    <Mountain className="w-16 h-16 text-indigo-500/50" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg flex items-center gap-2"><Mountain className="w-4 h-4 text-blue-400" /> Spiti Valley</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Raw nature, Key Monastery & Chandratal.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-rose-900 dark:to-pink-950 flex items-center justify-center rounded-t-xl">
                                    <Snowflake className="w-16 h-16 text-rose-500/50" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg flex items-center gap-2"><Snowflake className="w-4 h-4 text-blue-400" /> Kashmir</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Tulip garden (April only) & Gulmarg Gondola.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Family vs Couple */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                            <div className="p-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl text-center">
                                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Summer Family Fun</h3>
                                <p className="text-muted-foreground mb-6">Kids friendly hotels with activities. Easy pace itineraries.</p>
                                <Button variant="outline" asChild><Link to="/family-packages">View Family Deals</Link></Button>
                            </div>
                            <div className="p-8 bg-pink-50 dark:bg-pink-950/20 rounded-2xl text-center">
                                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-700">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Cool Honeymoons</h3>
                                <p className="text-muted-foreground mb-6">Secluded mountain resorts. Cozy campfires and star gazing.</p>
                                <Button variant="outline" asChild><Link to="/honeymoon-packages">View Couple Deals</Link></Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-sky-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Don't Wait for Prices to Hike</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Summer is peak season. Book 60 days in advance to get best flight rates.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-sky-800">
                            <a href="https://wa.me/919406182174?text=Plan my summer holiday">
                                Check Summer Availability
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

export default SummerHolidayPackages;
