import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const DomesticToursFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about domestic tour packages, group departures, and transport options."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Domestic Tours FAQs | Rudraksh Safar</title>
                <meta name="description" content="FAQs for domestic holidays. Kashmir, Kerala, Goa and Himachal tour queries answered." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/domestic-tours" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Domestic Tours', path: '/faqs/domestic-tours' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Domestic Tours FAQs</h1>
                        <p className="text-xl text-muted-foreground">Everything about traveling within Incredible India.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default DomesticToursFAQ;
