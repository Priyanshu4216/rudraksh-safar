import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Wallet, CheckCircle, ArrowRight, TrendingDown } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';

const LadakhTripCost = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ladakh Trip Cost 2026: Budget vs Luxury Price Breakdown",
        "description": "How much does a Ladakh trip cost? Complete breakdown of flight, bike rental, hotel, and food prices for 2026. Plan your budget from ₹15k to ₹50k.",
        "author": {
            "@type": "Organization",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Trip Cost 2026 | Price Breakdown per Person"
                description="Calculate your Ladakh trip budget. Detailed cost guide for flights, bike rentals, permits, and food. Packages starting from ₹18,500."
                keywords="ladakh trip cost, ladakh tour price, leh ladakh budget trip, ladakh bike trip cost, ladakh package price from delhi"
                canonicalUrl="https://rudrakshsafar.com/ladakh-trip-cost"
                structuredData={structuredData}
            />

            <Navbar />

            <div className="container py-12 lg:py-20">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">How Much Does a Ladakh Trip Really Cost? (2026 Guide)</h1>
                    <p className="text-lg text-muted-foreground">
                        Planning a budget? The cost of a Ladakh trip depends heavily on your mode of transport (Flight vs Bike) and accommodation choice. Here is a transparent breakdown to help you plan.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Budget Option */}
                    <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-gold/30 transition-all">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Saver Choice</div>
                        <h3 className="text-2xl font-bold mb-2">Budget Solo/Group</h3>
                        <p className="text-3xl font-bold text-gold mb-6">₹18,000 - ₹25,000</p>
                        <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Shared Taxis / Tempo Traveller</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Standard Homestays/Guest Houses</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Basic Food (Dhabas)</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Off-season Travel</li>
                        </ul>
                        <Button variant="outline" className="w-full">View Budget Packages</Button>
                    </div>

                    {/* Standard Option */}
                    <div className="bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30 rounded-xl p-6 relative overflow-hidden transform md:-translate-y-4 shadow-xl">
                        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
                        <h3 className="text-2xl font-bold mb-2">Standard Bike Trip</h3>
                        <p className="text-3xl font-bold text-gold mb-6">₹32,000 - ₹40,000</p>
                        <ul className="space-y-3 mb-8 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Royal Enfield 350cc Rental</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> 3-Star Hotels & Camps</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Mechanic & Backup Vehicle</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Buffet Meals (MAP Plan)</li>
                        </ul>
                        <Button className="w-full bg-gold text-black font-bold">View Bike Packages</Button>
                    </div>

                    {/* Luxury Option */}
                    <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-gold/30 transition-all">
                        <h3 className="text-2xl font-bold mb-2">Luxury Comfort</h3>
                        <p className="text-3xl font-bold text-gold mb-6">₹55,000+</p>
                        <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Private Innova Crysta</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold" /> 4/5 Star Hotels & Glamping</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Private Guide</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Airport Transfers</li>
                        </ul>
                        <Button variant="outline" className="w-full">View Luxury Packages</Button>
                    </div>
                </div>

                <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
                    <h2 className="font-serif font-bold">Detailed Cost Component Breakdown (2026 Estimates)</h2>
                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                        <div className="bg-muted/10 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Wallet className="w-5 h-5 text-gold" /> Major Expenses</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Flights (Delhi-Leh Return)</span>
                                    <span className="font-bold">₹8,000 - ₹15,000</span>
                                </li>
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Bike Rental (Per Day)</span>
                                    <span className="font-bold">₹1,500 - ₹2,500</span>
                                </li>
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Fuel (Approx for Circuit)</span>
                                    <span className="font-bold">₹8,000 - ₹10,000</span>
                                </li>
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Inner Line Permits</span>
                                    <span className="font-bold">₹800 - ₹1,000</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-4">How to Save Money?</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2"><TrendingDown className="w-5 h-5 text-green-500 shrink-0" /> <strong>Book in Advance:</strong> Flights are 30% cheaper if booked 3 months prior.</li>
                                <li className="flex gap-2"><TrendingDown className="w-5 h-5 text-green-500 shrink-0" /> <strong>Travel in Group:</strong> Sharing taxi costs brings per-head cost down massively.</li>
                                <li className="flex gap-2"><TrendingDown className="w-5 h-5 text-green-500 shrink-0" /> <strong>Choose Homestays:</strong> Experience local culture and save on expensive hotels.</li>
                            </ul>
                            <div className="mt-6">
                                <Link to="/budget-ladakh-trip" className="text-gold font-medium hover:underline flex items-center gap-2">
                                    Read Full Budget Ladakh Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <LadakhFAQ />

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhTripCost;
