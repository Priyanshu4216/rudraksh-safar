import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TripCostFromIndia = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Trip Cost to Thailand from India (2025) | Detailed Breakdown</title>
                <meta name="description" content="Calculate your Thailand trip cost from India. Flight prices from Delhi/Mumbai/Raipur, visa fees, hotel rates, and daily food budget for Indian travelers." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-6">Thailand Trip Cost from India</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Planning a budget? Here is a realistic breakdown of costs for a 7-day trip to Thailand for an Indian traveler.
                </p>

                <div className="bg-card border rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Cost Breakdown (Per Person)</h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between border-b pb-2">
                            <span><strong>Flights (Round Trip)</strong><br /><span className="text-sm text-muted-foreground">Ex. Raipur/Delhi/Kolkata</span></span>
                            <span className="font-bold">₹22,000 - ₹30,000</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span><strong>Visa</strong><br /><span className="text-sm text-muted-foreground">Currently Visa Free (Check updates)</span></span>
                            <span className="font-bold">₹0 (Free)</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span><strong>Accommodation (6 Nights)</strong><br /><span className="text-sm text-muted-foreground">3-4 Star Hotels</span></span>
                            <span className="font-bold">₹12,000 - ₹18,000</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span><strong>Food & Transport</strong><br /><span className="text-sm text-muted-foreground">Street food & Public transport</span></span>
                            <span className="font-bold">₹10,000 - ₹15,000</span>
                        </li>
                        <li className="flex justify-between pt-2 text-xl text-primary font-bold">
                            <span>Total Estimated Cost</span>
                            <span>₹44,000 - ₹63,000</span>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <Link to="/international-tours/thailand">
                        <Button size="lg">View Packages</Button>
                    </Link>
                    <Link to="/destinations/thailand/budget-guide">
                        <Button size="lg" variant="outline">Read Budget Tips</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default TripCostFromIndia;
