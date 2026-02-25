import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ThailandTravelTips = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>21 Essential Thailand Travel Tips for Indians | Do's and Don'ts</title>
                <meta name="description" content="Important travel tips for Thailand. Currency exchange, SIM cards, scams to avoid, and cultural etiquette for Indian tourists." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-8">Thailand Travel Tips for Indians</h1>
                <ul className="space-y-4 list-disc pl-5 marker:text-primary">
                    <li className="pl-2"><span className="font-bold">Currency Exchange:</span> Do not exchange INR at Bangkok airport (bad rates). Carry USD and exchange at SuperRich booths in the city.</li>
                    <li className="pl-2"><span className="font-bold">SIM Card:</span> Pre-book a SIM on Klook or buy AIS/TrueMove at the airport (approx 300 THB for 8 days unlimited data).</li>
                    <li className="pl-2"><span className="font-bold">Respect Royalty:</span> Never speak ill of the Royal Family. It is a crime in Thailand.</li>
                    <li className="pl-2"><span className="font-bold">Temples:</span> Wear clothes covering shoulders and knees. Remove shoes before entering.</li>
                    <li className="pl-2"><span className="font-bold">Grab App:</span> Download 'Grab' for taxis. It's safe and fixes the price (like Uber).</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};
export default ThailandTravelTips;
