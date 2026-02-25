import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const BestTimeToVisitThailand = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Best Time to Visit Thailand from India | Month-by-Month Guide</title>
                <meta name="description" content="When is the best time to visit Thailand? November to February is cool and dry. April is Songkran festival. Detailed weather guide for Bangkok and Phuket." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-6">Best Time to Visit Thailand</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-card border p-6 rounded-xl text-center">
                        <h3 className="font-bold text-xl mb-2 text-green-600">Peak Season</h3>
                        <p className="font-bold">Nov - Feb</p>
                        <p className="text-sm text-muted-foreground mt-2">Cool & Dry. Perfect for beaches.</p>
                    </div>
                    <div className="bg-card border p-6 rounded-xl text-center">
                        <h3 className="font-bold text-xl mb-2 text-orange-600">Shoulder Season</h3>
                        <p className="font-bold">Mar - May</p>
                        <p className="text-sm text-muted-foreground mt-2">Hot! Great for Songkran (April).</p>
                    </div>
                    <div className="bg-card border p-6 rounded-xl text-center">
                        <h3 className="font-bold text-xl mb-2 text-blue-600">Rainy Season</h3>
                        <p className="font-bold">Jun - Oct</p>
                        <p className="text-sm text-muted-foreground mt-2">Cheaper hotels. Short showers.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default BestTimeToVisitThailand;
