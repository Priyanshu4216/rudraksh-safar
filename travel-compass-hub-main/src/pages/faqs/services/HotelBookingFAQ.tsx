import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const HotelBookingFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about hotel reservations, check-in policies, and meal plans."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Hotel Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="Answers to common questions about hotel bookings, early check-ins, and couple-friendly hotels." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/hotel-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Hotel Booking', path: '/faqs/hotel-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Hotel Booking FAQs</h1>
                        <p className="text-xl text-muted-foreground">Guide to seamless hotel stays.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default HotelBookingFAQ;
