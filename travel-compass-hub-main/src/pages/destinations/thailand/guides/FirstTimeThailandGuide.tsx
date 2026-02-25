import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const FirstTimeThailandGuide = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>First Time in Thailand? Complete Guide for Indians</title>
                <meta name="description" content="A comprehensive guide for first-time Indian travelers to Thailand. Visa, Language, Food, and Safety tips." />
            </Helmet>
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
                <h1 className="text-4xl font-serif font-bold mb-8">First Time in Thailand? Read This.</h1>
                <p className="text-lg leading-relaxed mb-6">
                    Visiting Thailand for the first time is exciting! Use this guide to navigate your first international trip with confidence.
                </p>

                <h2 className="text-2xl font-bold mb-4">Visa on Arrival</h2>
                <p className="mb-6">Currently, Thailand offers Visa Exemption for Indians (Subject to change, verify before flying). If VOA returns, carry 2200 THB in cash.</p>

                <h2 className="text-2xl font-bold mb-4">Language</h2>
                <p className="mb-6">English is widely spoken in tourist areas. Learn 'Sawasdee Khrup/Ka' (Hello) and 'Khob Khun Khrup/Ka' (Thank you).</p>

                <h2 className="text-2xl font-bold mb-4">Food</h2>
                <p className="mb-6">Vegetarian food is available but clarify 'No Fish Sauce'. 7-Eleven has toasties which are lifesavers.</p>
            </div>
            <Footer />
        </div>
    );
};
export default FirstTimeThailandGuide;
