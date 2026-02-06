import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';

const RaipurFAQ = () => {
    const faqs = [
        // GENERAL – LOCAL TRUST & DISCOVERY
        {
            question: "Which is the best travel agency in Raipur?",
            answer: "Rudraksh Safar is one of the most trusted travel agencies serving Raipur and nearby areas, offering complete travel solutions including tour packages, flight booking, train tickets, hotel reservations, visas, and passport services. With a physical office nearby and real human support, travelers from Raipur prefer us for reliability and accountability."
        },
        {
            question: "Is it better to book travel from a local Raipur agent or online websites?",
            answer: "Booking through a local Raipur-based travel agent offers major advantages like personalized planning, real-time support during emergencies, transparent pricing, and face-to-face accountability. Online portals cannot assist you when flights are cancelled or visas are delayed."
        },
        {
            question: "Do travel agencies in Raipur provide complete end-to-end travel support?",
            answer: "Yes, professional travel agencies like Rudraksh Safar handle everything — planning, bookings, documentation, payments, and on-trip support — ensuring stress-free travel from Raipur."
        },
        {
            question: "Can I visit the travel agency office from Raipur?",
            answer: "Yes. Travelers from Raipur can easily visit our nearby office or connect via WhatsApp and phone for instant assistance without relying on chatbots or emails."
        },
        {
            question: "Are travel agents in Raipur trustworthy?",
            answer: "A trustworthy Raipur travel agent will have a physical office, verified contact details, transparent pricing, real customer reviews, and long-term local presence — all of which Rudraksh Safar provides."
        },

        // FLIGHT BOOKING – RAIPUR SPECIFIC
        {
            question: "Do travel agents book flights from Raipur Airport?",
            answer: "Yes. We book domestic and international flights departing from Swami Vivekananda Airport, Raipur, including multi-city, connecting, and international routes via Delhi, Mumbai, or Kolkata."
        },
        {
            question: "Can I get cheaper flight tickets from Raipur through a travel agent?",
            answer: "Often yes. Travel agents can access special fares, flexible routing, and better airline combinations than public portals, especially for international or group bookings."
        },
        {
            question: "What if my flight from Raipur gets cancelled?",
            answer: "Unlike online portals, we provide direct human assistance to rebook, reschedule, or refund your ticket immediately if your Raipur flight is cancelled or delayed."
        },
        {
            question: "Can I book international flights from Raipur with visa assistance?",
            answer: "Yes. We coordinate international flights along with visa timelines, ensuring correct connections and buffer times for travelers flying from Raipur."
        },

        // TRAIN BOOKING – RAIPUR & DURG
        {
            question: "Can I book train tickets from Raipur through an agent?",
            answer: "Yes. We assist with train bookings from Raipur Junction and Durg Junction, including general, Tatkal, senior citizen, and group bookings."
        },
        {
            question: "Do travel agents in Raipur book Tatkal tickets?",
            answer: "Authorized agents can assist with Tatkal bookings after the official IRCTC agent window as per Indian Railways rules."
        },
        {
            question: "What happens if my train ticket from Raipur stays waitlisted?",
            answer: "We track PNR status, advise alternatives, and help you plan backup travel options so you are never stranded."
        },

        // HOTEL BOOKING – LOCAL & DESTINATION
        {
            question: "Can I book hotels through a Raipur travel agency?",
            answer: "Yes. We book hotels across India and abroad, from budget stays to luxury resorts, often at better negotiated rates."
        },
        {
            question: "Is hotel booking through an agent safer than online apps?",
            answer: "Yes. Agents verify hotel quality, location, and reviews, reducing risks like fake listings, poor hygiene, or bad locations."
        },
        {
            question: "Do travel agents help with hotel check-in issues?",
            answer: "Yes. If you face check-in denial or room problems, we coordinate directly with hotels to resolve issues quickly."
        },

        // TOUR PACKAGES – RAIPUR TRAVELERS
        {
            question: "What tour packages are popular from Raipur?",
            answer: "Popular tours from Raipur include Kashmir, Manali, Goa, Char Dham Yatra, Thailand, Dubai, Bali, Singapore, and Maldives."
        },
        {
            question: "Can tour packages from Raipur be customized?",
            answer: "Absolutely. Unlike fixed online packages, we customize itineraries based on budget, travel dates, family size, and preferences."
        },
        {
            question: "Do Raipur tour packages include pickup?",
            answer: "Yes. Pickup from Raipur city, airport, or railway station can be arranged depending on the package."
        },
        {
            question: "Is EMI available for tour packages from Raipur?",
            answer: "Yes. EMI and installment options are available for selected domestic and international packages."
        },

        // CAB & TRANSPORT SERVICES
        {
            question: "Do travel agencies provide cab services from Raipur?",
            answer: "Yes. We arrange airport transfers, outstation cabs, tempo travellers, and sightseeing vehicles from Raipur."
        },
        {
            question: "Can I book a cab from Raipur Airport to another city?",
            answer: "Yes. Airport pickups and drop-offs from Raipur to Bhilai, Durg, Bilaspur, and other cities are available."
        },

        // VISA SERVICES – RAIPUR
        {
            question: "Do travel agents in Raipur provide visa services?",
            answer: "Yes. We provide visa assistance for tourist, business, and visit visas including documentation and appointment guidance."
        },
        {
            question: "Which visas are commonly processed from Raipur?",
            answer: "Popular visas include Dubai, Thailand, Singapore, Malaysia, Sri Lanka, Schengen, UK, and USA."
        },
        {
            question: "Is visa rejection support available?",
            answer: "Yes. We analyze rejection reasons and guide reapplication with corrected documentation."
        },

        // PASSPORT SERVICES
        {
            question: "Can I apply for a passport through a travel agency in Raipur?",
            answer: "Yes. We assist with new passport applications, renewals, Tatkal passports, and documentation guidance."
        },
        {
            question: "How long does passport processing take from Raipur?",
            answer: "Normal passports typically take 20–30 days, while Tatkal passports can be processed faster subject to government rules."
        },

        // CRUISE & INTERNATIONAL EXPERIENCES
        {
            question: "Do Raipur travel agencies book cruise packages?",
            answer: "Yes. International cruise bookings from India and abroad are available with complete planning support."
        },
        {
            question: "Can cruises be booked with flights from Raipur?",
            answer: "Yes. We coordinate flights, hotels, transfers, and cruise boarding for seamless travel from Raipur."
        },

        // PAYMENTS, SAFETY & WEBSITE TRUST
        {
            question: "Is RudrakshSafar.com a safe website?",
            answer: "Yes. The website is secured, transparent, and backed by a real travel agency with physical presence and verified contact details."
        },
        {
            question: "What payment methods are accepted?",
            answer: "Payments include UPI, bank transfer, cards, cash (office visit), and EMI for eligible packages."
        },
        {
            question: "What if I face an emergency during my trip?",
            answer: "You get direct phone and WhatsApp support — not a chatbot or ticket system."
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
                <title>Raipur Travel FAQs | Rudraksh Safar</title>
                <meta name="description" content="Expert answers for Raipur travelers: Flight bookings, train reservations, visa services, and tour packages from Rudraksh Safar - Best Travel Agency in Raipur." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/raipur" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Raipur Support', path: '/faqs/raipur' }
                        ]} />
                        <h1 className="text-4xl font-bold mt-8 mb-4">Raipur Travel Support FAQs</h1>
                        <p className="text-xl text-muted-foreground mb-6">Expert assistance for Raipur residents.</p>

                        {/* Local SEO Boosters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground bg-background p-6 rounded-lg border shadow-sm">
                            <span className="flex items-center gap-2">✅ Travel agency near Raipur Airport</span>
                            <span className="flex items-center gap-2">✅ Best tour operator for Raipur families</span>
                            <span className="flex items-center gap-2">✅ Trusted travel agent near Raipur Railway Station</span>
                            <span className="flex items-center gap-2">✅ International trip planner from Raipur</span>
                            <span className="flex items-center gap-2">✅ Local travel expert for Raipur residents</span>
                        </div>
                    </div>
                </section>
                <FAQsSection faqs={faqs} title="Raipur Traveler Questions" />
            </main>
            <Footer />
        </>
    );
};

export default RaipurFAQ;
