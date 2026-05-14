import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const VisaServicesFAQ = () => {
    const faqs = [
        {
            question: "Do Indians need a visa for Thailand?",
            answer: "Currently, Thailand offers a visa-free entry for Indian citizens (often extended on a temporary basis) or Visa on Arrival, allowing a stay of up to 30 days for tourism purposes. It is recommended to carry proof of hotel booking, return flight tickets, and sufficient funds (at least 10,000 THB per person)."
        },
        {
            question: "How long does a Dubai (UAE) visa take?",
            answer: "A standard Dubai tourist visa (e-visa) typically takes 3 to 4 working days to process. We offer express visa services that can procure a UAE visa within 24 to 48 hours for an additional fee."
        },
        {
            question: "What is a Schengen Visa and how do I get it?",
            answer: "A Schengen Visa allows you to travel freely across 27 European countries (like France, Germany, Switzerland). You must apply at the embassy/VFS of the country you will spend the most days in, or the country of first entry. It requires extensive documentation including flight itineraries, hotel bookings, travel insurance, and financial proofs. We assist end-to-end with this complex process."
        },
        {
            question: "Do you guarantee visa approval?",
            answer: "No travel agency or consultant can guarantee visa approval. The decision rests entirely with the respective country's embassy or consulate. However, our rigorous document checking significantly minimizes the chances of rejection due to incomplete or incorrect paperwork."
        },
        {
            question: "What is the difference between an e-Visa and a sticker Visa?",
            answer: "An e-Visa is applied for online and you receive a digital copy via email to print and carry. A sticker visa requires you to submit your physical passport to an embassy (often via VFS Global), where a physical visa sticker is pasted onto one of your passport pages."
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
                <title>Visa Assistance FAQs | Rudraksh Safar</title>
                <meta name="description" content="Answers to your visa questions. Documents, processing times, and fees for international countries." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/visa-services" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Visa Services', path: '/faqs/visa-services' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Visa Services FAQs</h1>
                        <p className="text-xl text-muted-foreground">Expert guidance on global visa rules.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default VisaServicesFAQ;
