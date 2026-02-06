import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const BhilaiFAQ = () => {
    const faqs = [
        // GENERAL — DISCOVERY, TRUST & LOCAL INTENT
        {
            question: "Which is the best travel agency in Bhilai?",
            answer: "Rudraksh Safar is among the most trusted travel agencies serving Bhilai, known for complete travel services including tour packages, flight booking, train tickets, hotels, visas, passport assistance, and cruise bookings. Customers prefer local agencies in Bhilai for transparency, accountability, and real human support."
        },
        {
            question: "Is it better to book travel from a local Bhilai agent or online websites?",
            answer: "Booking through a Bhilai-based travel agent offers major advantages such as personalized planning, local accountability, emergency support, and clear communication. Online portals cannot provide real-time assistance if flights are cancelled, visas are delayed, or hotels create issues."
        },
        {
            question: "Do travel agencies in Bhilai have physical offices?",
            answer: "Yes. Reliable travel agencies in Bhilai operate from physical offices, allowing customers to visit, discuss itineraries face-to-face, make secure payments, and build trust — something online-only portals cannot offer."
        },
        {
            question: "Are travel agencies in Bhilai trustworthy?",
            answer: "A trustworthy Bhilai travel agency has a real office address, transparent pricing, verified contact details, long-term local presence, and genuine customer reviews. Always avoid agents who operate only through social media or WhatsApp without a physical base."
        },
        {
            question: "Can I walk into a travel agency in Bhilai without an appointment?",
            answer: "Yes. Most local travel agencies in Bhilai welcome walk-in customers during working hours and also assist instantly via phone or WhatsApp."
        },

        // FLIGHT BOOKING — BHILAI & RAIPUR AIRPORT
        {
            question: "Do Bhilai travel agents book flights?",
            answer: "Yes. Travel agencies in Bhilai book both domestic and international flights, including departures from Raipur Airport with complete fare comparison and routing guidance."
        },
        {
            question: "Are flight tickets cheaper when booked through a Bhilai agent?",
            answer: "In many cases, yes. Local agents can access negotiated fares, better airline combinations, and flexible options not always visible on public booking websites."
        },
        {
            question: "What happens if my flight gets cancelled?",
            answer: "Unlike online portals, Bhilai-based travel agents provide direct support to rebook, reschedule, or process refunds quickly if flights are cancelled or delayed."
        },
        {
            question: "Can I book international flights from Bhilai with visa support?",
            answer: "Yes. Agents coordinate flights according to visa timelines and documentation, reducing rejection or rescheduling risks."
        },

        // TRAIN BOOKING — BHILAI & DURG JUNCTION
        {
            question: "Can I book train tickets from Bhilai through an agent?",
            answer: "Yes. Travel agents assist with train bookings from Durg Junction and nearby stations, including general, Tatkal, senior citizen, and group bookings."
        },
        {
            question: "Do Bhilai travel agents book Tatkal tickets?",
            answer: "Authorized agents can assist with Tatkal bookings after the official IRCTC agent booking window, strictly following Indian Railways rules."
        },
        {
            question: "What if my train ticket remains waitlisted?",
            answer: "Agents track PNR status, advise confirmation chances, and suggest alternative travel options so passengers don’t get stranded."
        },

        // HOTEL BOOKING — INDIA & INTERNATIONAL
        {
            question: "Can I book hotels through a Bhilai travel agency?",
            answer: "Yes. Travel agencies in Bhilai book hotels across India and abroad, including budget hotels, resorts, and luxury properties."
        },
        {
            question: "Is hotel booking through a Bhilai agent safer?",
            answer: "Yes. Agents verify hotel quality, location, safety, and reviews, helping travelers avoid fake listings or poor accommodations."
        },
        {
            question: "What if I face hotel check-in issues?",
            answer: "Your agent coordinates directly with the hotel to resolve check-in delays, room category issues, or overbooking problems."
        },

        // TOUR PACKAGES — BHILAI TRAVELERS
        {
            question: "What tour packages are popular from Bhilai?",
            answer: "Popular tour packages from Bhilai include Kashmir, Manali & Shimla, Goa, Char Dham Yatra, Thailand, Dubai, Bali, Singapore, and Maldives."
        },
        {
            question: "Can tour packages from Bhilai be customized?",
            answer: "Yes. Local travel agencies customize itineraries based on travel dates, budget, family size, and personal preferences."
        },
        {
            question: "Are group and family packages available from Bhilai?",
            answer: "Yes. Special packages are available for families, honeymoon couples, senior citizens, students, and large groups."
        },
        {
            question: "Is EMI available for tour packages from Bhilai?",
            answer: "Yes. EMI and part-payment options are available on select domestic and international packages."
        },

        // CAB & LOCAL TRANSPORT SERVICES
        {
            question: "Do Bhilai travel agencies provide cab services?",
            answer: "Yes. Cab services include airport transfers, outstation travel, tempo travellers, and sightseeing vehicles."
        },
        {
            question: "Can I book a cab from Bhilai to Raipur Airport?",
            answer: "Yes. Airport pickups and drops between Bhilai and Raipur Airport are commonly arranged."
        },

        // VISA SERVICES — BHILAI
        {
            question: "Do travel agents in Bhilai provide visa services?",
            answer: "Yes. Agents assist with tourist, business, and visit visas including documentation and appointment guidance."
        },
        {
            question: "Which visas are commonly processed from Bhilai?",
            answer: "Popular visas include Dubai, Thailand, Singapore, Malaysia, Sri Lanka, Schengen, UK, and USA."
        },
        {
            question: "What if my visa gets rejected?",
            answer: "Agents analyze rejection reasons and guide you through reapplication with corrected documents."
        },

        // PASSPORT SERVICES — BHILAI
        {
            question: "Can I apply for a passport through a Bhilai travel agency?",
            answer: "Yes. Agencies assist with new passports, renewals, Tatkal passports, and documentation guidance."
        },
        {
            question: "How long does passport processing take?",
            answer: "Normal passport processing usually takes 20–30 days, while Tatkal passports are processed faster as per government rules."
        },

        // CRUISE & INTERNATIONAL EXPERIENCES
        {
            question: "Do Bhilai travel agents book cruise packages?",
            answer: "Yes. International cruise packages with flights, hotels, and transfers are available."
        },
        {
            question: "Can cruise trips be planned from Bhilai?",
            answer: "Yes. Agents manage the entire journey including flights from Raipur and cruise boarding logistics."
        },

        // WEBSITE, PAYMENTS & TRUST QUESTIONS
        {
            question: "Is RudrakshSafar.com a genuine website?",
            answer: "Yes. The website represents a real travel agency with physical presence, verified contact details, and transparent services."
        },
        {
            question: "What payment methods are accepted?",
            answer: "Payments include UPI, bank transfer, cards, cash at office, and EMI for eligible packages."
        },
        {
            question: "What if I face an emergency during my trip?",
            answer: "You get direct phone and WhatsApp support from real agents — not chatbots or ticket systems."
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
                <title>Bhilai Travel FAQs | Rudraksh Safar</title>
                <meta name="description" content="Expert answers for Bhilai travelers: Flight bookings, train tickets, visas, and holiday packages from the most trusted travel agency in Bhilai - Rudraksh Safar." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/bhilai" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Bhilai Support', path: '/faqs/bhilai' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Bhilai Travel Support FAQs</h1>
                        <p className="text-xl text-muted-foreground mb-6">Local assistance for Bhilai & Durg residents.</p>

                        {/* Local SEO Boosters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground bg-background p-6 rounded-lg border shadow-sm">
                            <span className="flex items-center gap-2">✅ Best travel agency in Bhilai</span>
                            <span className="flex items-center gap-2">✅ Travel agent near me in Bhilai</span>
                            <span className="flex items-center gap-2">✅ Trusted tour operator Bhilai</span>
                            <span className="flex items-center gap-2">✅ International trip planner Bhilai</span>
                            <span className="flex items-center gap-2">✅ Visa agent in Bhilai</span>
                            <span className="flex items-center gap-2">✅ Flight booking agent Bhilai</span>
                            <span className="flex items-center gap-2">✅ Train ticket agent near Bhilai</span>
                        </div>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Bhilai Traveler Questions" />
            </main>
            <Footer />
        </>
    );
};

export default BhilaiFAQ;
