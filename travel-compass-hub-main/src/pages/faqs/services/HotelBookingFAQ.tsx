import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const HotelBookingFAQ = () => {
    const faqs = [
        {
            question: "What does 'CP', 'MAP', and 'AP' mean in hotel meal plans?",
            answer: "CP (Continental Plan) includes room and breakfast. MAP (Modified American Plan) includes room, breakfast, and one major meal (usually dinner). AP (American Plan) includes the room and all three major meals (breakfast, lunch, and dinner)."
        },
        {
            question: "Can I get an early check-in or late check-out?",
            answer: "Standard hotel check-in time is usually 2:00 PM and check-out is 11:00 AM. Early check-in or late check-out is strictly subject to room availability at the time of arrival/departure and may incur additional charges levied by the hotel."
        },
        {
            question: "Are unmarried couples allowed to book hotels?",
            answer: "Yes, there are many 'couple-friendly' hotels that welcome unmarried couples with valid local IDs. However, this policy varies by hotel. Please inform us during booking so we can select accommodations with clear policies allowing unmarried couples."
        },
        {
            question: "Do I need a credit card to check in?",
            answer: "While many budget hotels in India do not require a credit card, luxury 4-star and 5-star hotels (especially internationally) often require a credit card at check-in for an incidentals hold/security deposit. This hold is released upon check-out."
        },
        {
            question: "What documents are required for hotel check-in?",
            answer: "For domestic hotels, all adult guests must present a valid government-issued photo ID (Aadhaar, Voter ID, Passport, or Driving License; PAN cards are not accepted). For international hotels, a valid Passport and Visa are mandatory."
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
                <title>Hotel Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="Answers to common questions about hotel bookings, early check-ins, and couple-friendly hotels." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/hotel-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Hotel Booking', path: '/faqs/hotel-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Hotel Booking FAQs</h1>
                        <p className="text-xl text-muted-foreground">Guide to seamless hotel stays.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default HotelBookingFAQ;
