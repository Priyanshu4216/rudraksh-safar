import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const DurgFAQ = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqs = [
        {
            question: "Questions Coming Soon",
            answer: "We are compiling FAQs about trusted booking support near Durg Railway Station."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Durg Travel FAQs | Rudraksh Safar</title>
                <meta name="description" content="Questions for Durg travelers. Finding the best agent near Durg station and travel help." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/durg" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Durg Support', path: '/faqs/durg' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Durg Travel Support FAQs</h1>
                        <p className="text-xl text-muted-foreground">Trusted guidance for Durg City residents.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default DurgFAQ;
