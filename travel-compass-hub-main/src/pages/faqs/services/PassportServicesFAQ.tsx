import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const PassportServicesFAQ = () => {
    const faqs = [
        {
            question: "How long does it take to get a new passport in India?",
            answer: "Under the Normal scheme, it typically takes 30 to 45 days from the date of your Passport Seva Kendra (PSK) appointment to receive your passport. Under the Tatkal scheme, passports are usually dispatched within 1-3 working days post-appointment, subject to clear police verification."
        },
        {
            question: "What documents are required for a fresh passport application?",
            answer: "You generally need a Proof of Address (Aadhaar card, recent utility bill, or bank passbook), a Proof of Date of Birth (Birth certificate, PAN card, or School leaving certificate), and an Annexure if applying under special categories. Aadhaar is highly recommended as it speeds up the process."
        },
        {
            question: "Do you help with Tatkal passport appointments?",
            answer: "Yes, we assist in securing Tatkal appointments at the nearest PSK (e.g., Raipur). Note that Tatkal applications require additional verification and carry higher government fees. You must have a clean background for immediate issuance."
        },
        {
            question: "What happens during police verification?",
            answer: "After your PSK appointment, the local police station will verify your address and criminal record. A police officer will visit your residence. You must be present with your original documents and 2 local references to sign the verification form."
        },
        {
            question: "Can I renew my passport before it expires?",
            answer: "Yes, you can apply for a passport renewal (Re-issue) up to 1 year before its expiry date, or within 3 years after it has expired. If it has been expired for more than 3 years, the process is slightly more stringent."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

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
