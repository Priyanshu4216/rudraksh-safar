import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const DomesticToursFAQ = () => {
    const faqs = [
        {
            question: "Do your domestic packages include flight or train tickets?",
            answer: "Our standard domestic packages usually start from the destination airport or railway station (e.g., 'Ex-Delhi' or 'Ex-Srinagar'). However, we can customize any package to include flight or train tickets from your home city like Raipur or Nagpur."
        },
        {
            question: "What is a group departure package?",
            answer: "A group departure (or fixed departure) package is a pre-planned tour where a group of travelers depart on a specific date. You travel together in a shared coach or tempo traveler. These are significantly cheaper than private tours and great for solo travelers or couples."
        },
        {
            question: "Are meals included in the tour packages?",
            answer: "Most of our domestic packages operate on a MAP (Modified American Plan) basis, which includes daily breakfast and dinner at the hotel. Lunch is usually excluded so you have the flexibility to try local cuisine while sightseeing."
        },
        {
            question: "Can I customize the itinerary of a domestic package?",
            answer: "Absolutely! Unless it is a fixed group departure, all our private domestic tour packages can be 100% customized. You can upgrade hotels, add extra days, or change the sightseeing spots based on your preferences."
        },
        {
            question: "Is there a guide included in domestic tours?",
            answer: "For most domestic trips, your driver acts as a basic guide for major routes. However, professional certified local guides at historical monuments or specific sites (like Taj Mahal or Khajuraho) can be arranged upon request for an additional fee."
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
