import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const PassportServicesFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about new passports, renewals, Tatkal schemes, and police verification."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Passport Services FAQs | Rudraksh Safar</title>
                <meta name="description" content="FAQs regarding passport application, renewal, and Tatkal services in Bhilai & Raipur." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/passport-services" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Passport Services', path: '/faqs/passport-services' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Passport Services FAQs</h1>
                        <p className="text-xl text-muted-foreground">Navigating official documentation with ease.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default PassportServicesFAQ;
