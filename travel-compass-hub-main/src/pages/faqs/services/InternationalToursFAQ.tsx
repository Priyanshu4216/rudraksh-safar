import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const InternationalToursFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about international packages, forex, SIM cards, and travel insurance."
        }
    ];

    return (
        <>
            <Helmet>
                <title>International Tours FAQs | Rudraksh Safar</title>
                <meta name="description" content="Answers about international travel packages, inclusions, and travel guidelines." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/international-tours" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'International Tours', path: '/faqs/international-tours' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">International Tours FAQs</h1>
                        <p className="text-xl text-muted-foreground">Your guide to global exploration.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default InternationalToursFAQ;
