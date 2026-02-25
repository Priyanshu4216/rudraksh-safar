import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ThailandPackingGuide = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Thailand Packing List for Indians | What to Carry?</title>
                <meta name="description" content="Ultimate packing list for Thailand trip. Clothes, medicines, electronics, and documents checklist for Indian travelers." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-8">Thailand Packing Guide</h1>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Documents</h3>
                        <p>Passport (6 months validity), Flight Tickets, Hotel Vouchers, Travel Insurance, 2 Passport Photos.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Clothing</h3>
                        <p>Light cotton clothes (for humidity), Swimwear (for beaches), One modest outfit (for temples), Comfortable walking shoes.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Medicines</h3>
                        <p>Paracetamol, ORS, Anti-allergy, Motion sickness pills (for speedboats), Band-aids.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Extras</h3>
                        <p>Universal Travel Adapter (Type A/B/C), Power Bank, Sunscreen, Waterproof phone cover.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ThailandPackingGuide;
