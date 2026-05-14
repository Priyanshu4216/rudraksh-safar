import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const CruiseBookingFAQ = () => {
    const faqs = [
        {
            question: "Do I need a passport for a cruise?",
            answer: "For domestic cruises (e.g., Mumbai to Goa or Lakshadweep), Indian citizens only need a valid government-issued ID like an Aadhaar card or Voter ID. For international cruises (e.g., from Singapore or Dubai), a passport with at least 6 months validity from the end date of the cruise is strictly required."
        },
        {
            question: "Is food included in the cruise package?",
            answer: "Yes! Most cruise packages (like Cordelia Cruises) are all-inclusive regarding meals. They include breakfast, lunch, high tea, and dinner at designated buffet and dining rooms. Specialty restaurants on board may charge an extra fee."
        },
        {
            question: "What activities are available on board?",
            answer: "Cruises are floating resorts. You can expect swimming pools, Broadway-style theater shows, casinos (on international waters), rock climbing, fitness centers, kids' clubs, live music, and themed parties."
        },
        {
            question: "Will I get seasick?",
            answer: "Modern cruise ships are enormous and equipped with advanced underwater stabilizers that significantly reduce the rolling motion of the ship. Most passengers do not feel any motion at all. However, it's always wise to pack some anti-nausea medication just in case."
        },
        {
            question: "What is the baggage allowance for a cruise?",
            answer: "Cruise lines generally allow up to 20kg to 25kg of luggage per person, depending on the operator. It's similar to airline baggage policies. Please ensure you do not carry restricted items like drones, heating appliances, or weapons."
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
                <title>Cruise Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="Questions about cruise holidays. Cordelia Cruises, international liners, and sea travel tips." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cruise-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cruise Booking', path: '/faqs/cruise-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Cruise Booking FAQs</h1>
                        <p className="text-xl text-muted-foreground">All your questions about holidays at sea.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default CruiseBookingFAQ;
