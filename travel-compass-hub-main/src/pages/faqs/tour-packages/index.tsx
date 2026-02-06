import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const TourPackageFAQ = () => {
    const faqs = [
        // SECTION A: GENERAL TOUR PACKAGE QUESTIONS (FOUNDATIONAL)
        {
            question: "What is included in a tour package?",
            answer: "A tour package typically includes accommodation, transportation, sightseeing, and basic assistance during the trip. Some packages also include meals, entry tickets, permits, and local transfers. Always ask for a written inclusion–exclusion list before booking."
        },
        {
            question: "What is not included in a tour package?",
            answer: "Common exclusions are personal expenses, shopping, optional activities, tips, porter charges, and meals not mentioned in the itinerary. Flights and visas may or may not be included depending on the package type."
        },
        {
            question: "Is booking a tour package better than planning on my own?",
            answer: "For most travelers, yes. Tour packages save time, reduce risk, and often cost less due to bulk hotel and transport rates. Self-planning works well only if you already understand destinations, timings, and logistics."
        },
        {
            question: "Are tour packages cheaper than online booking websites?",
            answer: "In many cases, yes. Local travel agencies often get B2B hotel rates and negotiated transport pricing that are not available on public booking portals."
        },
        {
            question: "Can I customize a tour package?",
            answer: "Yes. A good travel agency customizes the itinerary based on your travel style, budget, dates, and comfort level. Avoid agencies that only sell fixed packages."
        },

        // SECTION B: PRICING, PAYMENTS & TRANSPARENCY
        {
            question: "Why do tour package prices vary so much?",
            answer: "Prices vary due to season, hotel category, transport type, flight availability, and number of travelers. Peak-season packages can cost 30–50% more than off-season trips."
        },
        {
            question: "Are there any hidden charges in tour packages?",
            answer: "There should not be. Reputed travel agencies clearly explain all costs in advance. Always ask for a final payable amount in writing to avoid surprises."
        },
        {
            question: "Can I pay in installments or EMI for tour packages?",
            answer: "Yes. Many agencies offer EMI options or staged payments—typically an advance at booking and balance before departure."
        },
        {
            question: "Is GST included in tour package prices?",
            answer: "Sometimes yes, sometimes no. Always confirm whether GST is included in the quoted price or charged separately."
        },
        {
            question: "What happens if the tour price increases after booking?",
            answer: "Once booked and confirmed, prices should not increase unless flights or hotels were not locked. Always ask whether the package is price-protected."
        },

        // SECTION C: BOOKING, CONFIRMATION & DOCUMENTS
        {
            question: "How early should I book a tour package?",
            answer: "Domestic trips: 30–45 days in advance. International trips: 60–90 days in advance. Peak season and visa destinations require earlier booking."
        },
        {
            question: "What documents are required to book a tour package?",
            answer: "Usually name, age, contact details, and ID proof. For international travel, passport and visa documents are required."
        },
        {
            question: "Will I get a written itinerary and confirmation?",
            answer: "Yes. You should receive a detailed itinerary, hotel details, transport plan, and payment receipt before travel."
        },
        {
            question: "Can I make changes after booking?",
            answer: "Minor changes may be possible depending on hotel and transport policies. Major changes may involve additional charges."
        },
        {
            question: "Is travel insurance included in the package?",
            answer: "Some packages include it; others don’t. For international travel, travel insurance is strongly recommended and sometimes mandatory."
        },

        // SECTION D: HOTELS, TRANSPORT & COMFORT
        {
            question: "What type of hotels are provided in tour packages?",
            answer: "Hotels range from budget to luxury depending on the package selected. Always ask for hotel names or categories before confirming."
        },
        {
            question: "Can I upgrade hotels or transport?",
            answer: "Yes. Most agencies allow upgrades to better hotels, private vehicles, or premium transport at extra cost."
        },
        {
            question: "Are sightseeing entry tickets included?",
            answer: "Some packages include them, others don’t. Clarify this upfront to avoid paying again at destinations."
        },
        {
            question: "Will I get private transport or shared transport?",
            answer: "This depends on the package type. Honeymoon and family packages usually offer private transport; group tours may be shared."
        },
        {
            question: "Are meals included in tour packages?",
            answer: "Many packages include breakfast, some include breakfast + dinner. Lunch is usually not included unless specified."
        },

        // SECTION E: SAFETY, SUPPORT & EMERGENCIES
        {
            question: "What support do I get during the tour?",
            answer: "A good travel agency provides 24/7 support via phone or WhatsApp for emergencies, delays, or changes during your trip."
        },
        {
            question: "What happens if my flight or train is delayed?",
            answer: "The agency coordinates with hotels and drivers to adjust pickups and check-ins wherever possible."
        },
        {
            question: "What if something goes wrong during the trip?",
            answer: "You contact the agency directly. This is why booking through a real local agency is safer than faceless apps."
        },
        {
            question: "Is it safe to travel with a tour package?",
            answer: "Yes, especially when booked through a registered and experienced travel agency that provides verified hotels and drivers."
        },
        {
            question: "Who is responsible if a service fails?",
            answer: "The travel agency acts as the coordinator and helps resolve issues, though airlines, hotels, and transport providers operate under their own policies."
        },

        // SECTION F: CANCELLATION, REFUNDS & POLICIES
        {
            question: "What is the cancellation policy for tour packages?",
            answer: "Cancellation charges depend on hotel, transport, and flight rules. Early cancellations usually have lower charges."
        },
        {
            question: "Will I get a refund if I cancel my trip?",
            answer: "Refunds depend on supplier policies. The agency helps process refunds but cannot override airline or hotel rules."
        },
        {
            question: "What if my visa gets rejected?",
            answer: "Some agencies deduct service charges and refund the rest. Always ask for visa rejection terms in writing."
        },
        {
            question: "Can I transfer my package to someone else?",
            answer: "In some cases yes, especially for domestic trips. Flights and visas may not be transferable."
        },
        {
            question: "What happens if the trip is cancelled due to natural disasters or government rules?",
            answer: "Agencies assist with rescheduling or refunds as per supplier policies, but force majeure conditions apply."
        },

        // SECTION G: LOCAL & TRUST-BASED QUESTIONS
        {
            question: "Is it better to book from a local travel agency?",
            answer: "Yes. Local agencies provide accountability, personal assistance, and real-time problem solving that online platforms cannot."
        },
        {
            question: "How do I know if a travel agency is trustworthy?",
            answer: "Check office address, years of experience, Google reviews, clear documentation, and direct communication access."
        },
        {
            question: "Why should I avoid extremely cheap tour packages?",
            answer: "Very cheap packages often cut corners on hotels, transport, or support, leading to poor travel experiences."
        },
        {
            question: "Can I visit the travel agency office before booking?",
            answer: "Yes, and you should. Face-to-face discussions build trust and help clarify expectations."
        },
        {
            question: "How do I choose the right tour package for my family?",
            answer: "Consider travel pace, hotel comfort, medical needs, meal preferences, and emergency support—not just price."
        }
    ];

    // Schema Generation
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
                <title>Tour Package FAQs | Holiday Booking Questions Answered Bhilai</title>
                <meta name="description" content="Common questions about tour packages, inclusions, cancellations, and safety. Expert guide by Rudraksh Safar, Bhilai's trusted travel agent." />
                <meta name="keywords" content="tour package faqs, travel agency questions, holiday package inclusions, tour booking help bhilai, rudraksh safar faqs" />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/tour-packages" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative bg-primary/5 py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Tour Packages', path: '/faqs/tour-packages' }
                        ]} />
                        <div className="mt-8 max-w-4xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                                Tour Package <span className="text-secondary">FAQs</span>
                            </h1>

                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                <p>
                                    Booking a holiday package is the best way to ensure a stress-free vacation, but we understand you have questions. From understanding "inclusions" to knowing your cancellation rights, transparency is key to a good trip.
                                </p>
                                <p>
                                    At Rudraksh Safar, we believe an informed traveler is a happy traveler. Whether you are planning a family trip to Goa, a honeymoon in Maldives, or a pilgrimage to Char Dham, this guide answers everything you need to know about booking tour packages with a local expert in Bhilai.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="space-y-12">
                            {faqs.map((faq, index) => (
                                <div key={index} id={`faq-${index}`} className="group border-b border-border/40 pb-8 last:border-0 scroll-mt-24">
                                    <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-start gap-3">
                                        <span className="text-secondary text-xl mt-1">#</span>
                                        {faq.question}
                                    </h2>
                                    <div className="text-muted-foreground leading-relaxed text-lg pl-8">
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
                            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Perfect Trip?</h3>
                            <p className="text-muted-foreground mb-6">
                                Custom itineraries, transparent pricing, and 24/7 support.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                                    Contact Us
                                </Link>
                                <Link to="/tour-packages-from-bhilai" className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors">
                                    View Packages
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default TourPackageFAQ;
