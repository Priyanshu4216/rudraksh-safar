import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const CabBookingFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about cab rentals, outstation trips, and driver allowances."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Cab Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="FAQs about taxi services, outstation cabs, and airport transfers." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cab-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cab Booking', path: '/faqs/cab-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Cab & Taxi FAQs</h1>
                        <p className="text-xl text-muted-foreground">Everything about our road travel services.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default CabBookingFAQ;
