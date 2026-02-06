import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const CruiseBookingFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about cruise packages, boarding processes, and onboard activities."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Cruise Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="Questions about cruise holidays. Cordelia Cruises, international liners, and sea travel tips." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cruise-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cruise Booking', path: '/faqs/cruise-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Cruise Booking FAQs</h1>
                        <p className="text-xl text-muted-foreground">All your questions about holidays at sea.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default CruiseBookingFAQ;
