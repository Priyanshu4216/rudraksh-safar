import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const DurgFAQ = () => {
    const faqs = [
        {
            question: "How far is your office from Durg?",
            answer: "Our main office is located in Bhilai, which is just a 15-20 minute drive from Durg City. We regularly serve clients from Durg, Padmanabhpur, and surrounding areas."
        },
        {
            question: "Can you arrange pick-up from Durg Railway Station?",
            answer: "Yes! For our domestic tour packages and outstation cab bookings, we offer convenient pick-up directly from Durg Railway Station or your residence in Durg."
        },
        {
            question: "Do you offer Tatkal passport assistance in Durg?",
            answer: "While the Passport Seva Kendra is in Raipur, our team in Bhilai handles all the documentation, online applications, and appointment scheduling for residents of Durg to ensure a smooth process."
        },
        {
            question: "Can I book a tour package without visiting your office?",
            answer: "Absolutely. Many of our Durg clients prefer our online booking system. You can consult with our travel experts via phone or WhatsApp, and we will share customized itineraries and payment links digitally."
        },
        {
            question: "What are the most popular packages booked from Durg?",
            answer: "Our clients from Durg frequently book our economical Himachal Volvo packages, Char Dham Yatra group departures, and affordable Thailand/Dubai international tours."
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
