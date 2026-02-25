import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ThailandBudgetGuide = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Thailand Budget Travel Guide for Indians | Save Money Tips</title>
                <meta name="description" content="How to travel Thailand on a budget? Tips on cheap street food, using Songthaews, affordable hostels, and free attractions in Bangkok and Pattaya." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-6">Thailand on a Budget</h1>
                <p className="text-lg text-muted-foreground mb-8">Travel smart, save more. Thailand is one of the most wallet-friendly destinations if you know where to look.</p>
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-primary">1. Eat Local (Street Food)</h2>
                        <p>Pad Thai, Som Tum, and Mango Sticky Rice from street vendors cost only 50-100 THB (₹120-₹240). Avoid tourist-trap restaurants.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-primary">2. Use Public Transport</h2>
                        <p>In Pattaya, use "Songthaews" (Blue Baht Buses) for just 10-20 THB. In Bangkok, use the BTS Skytrain to avoid traffic and save taxi fares.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-primary">3. 7-Eleven is your Friend</h2>
                        <p>Buy water, beer, SIM cards, and snacks from 7-Eleven. Prices are fixed and cheap.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ThailandBudgetGuide;
