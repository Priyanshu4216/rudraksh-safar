import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const InternationalToursFAQ = () => {
    const faqs = [
        {
            question: "Is airfare included in international tour packages?",
            answer: "Most of our base international tour packages do not include airfare because flight prices fluctuate daily based on your departure city. However, our travel experts will help you find and book the cheapest available flights to add to your package."
        },
        {
            question: "Do I need travel insurance for international trips?",
            answer: "While it is not mandatory for all countries, we strongly highly recommend comprehensive travel insurance. For Schengen countries and a few others, travel insurance covering at least €30,000 for medical emergencies is strictly mandatory for visa approval."
        },
        {
            question: "How much foreign currency should I carry?",
            answer: "We recommend carrying 20% to 30% of your expected daily expenses in physical local currency (or USD) and keeping the rest on a zero-markup Forex travel card. This ensures you have cash for street food and small vendors while keeping your bulk money safe."
        },
        {
            question: "How do I use my phone abroad?",
            answer: "You have three options: 1) Activate international roaming on your Indian SIM (convenient but expensive), 2) Buy a local tourist SIM card at the destination airport, or 3) Use an eSIM app like Airalo if your phone supports it (most cost-effective and convenient)."
        },
        {
            question: "What if I face an emergency in a foreign country?",
            answer: "Rudraksh Safar provides 24/7 WhatsApp support for all our international travelers. In case of a severe emergency, we will immediately connect you with local authorities or the nearest Indian Embassy/Consulate."
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
