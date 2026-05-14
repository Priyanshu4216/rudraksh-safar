import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const CabBookingFAQ = () => {
    const faqs = [
        {
            question: "What is included in the outstation cab fare?",
            answer: "Our outstation cab fares typically include the base per-kilometer charge, fuel costs, and driver allowance. Toll taxes, state border taxes, and parking fees are usually extra and paid directly by the customer during the trip unless explicitly stated as an 'All-Inclusive' package."
        },
        {
            question: "What happens if the driver drives at night?",
            answer: "If you require the cab to be driven between 10:00 PM and 6:00 AM, a standard night allowance for the driver will be applicable. We generally recommend avoiding late-night driving in hilly areas for safety reasons."
        },
        {
            question: "How is the per-kilometer distance calculated?",
            answer: "The distance is calculated from our garage to your pickup point, through your entire journey, and back to our garage (Garage-to-Garage billing). We maintain absolute transparency with starting and ending odometer readings."
        },
        {
            question: "Can I choose the type of vehicle?",
            answer: "Yes, you can choose from Hatchbacks (Swift), Sedans (Dzire, Etios), SUVs (Innova Crysta, Ertiga), or Tempo Travelers depending on your group size and comfort preference."
        },
        {
            question: "Is advance payment required for cab booking?",
            answer: "Yes, a token advance amount is required to confirm the booking and block the vehicle for your dates. The remaining balance can be paid directly to the driver during the trip."
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
                <title>Cab Booking FAQs | Rudraksh Safar</title>
                <meta name="description" content="FAQs about taxi services, outstation cabs, and airport transfers." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cab-booking" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cab Booking', path: '/faqs/cab-booking' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Cab & Taxi FAQs</h1>
                        <p className="text-xl text-muted-foreground">Everything about our road travel services.</p>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Common Questions" />
            </main>
            <Footer />
        </>
    );
};

export default CabBookingFAQ;
