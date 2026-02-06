import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Ship, MapPin, Plane, HelpCircle, ShieldCheck, FileText, UserCheck } from 'lucide-react';

const CruiseBookingBhilaiFAQ = () => {
    const faqCategories = [
        {
            title: "Bhilai / Local Search Intent (Important)",
            icon: MapPin,
            questions: [
                {
                    question: "Do you provide cruise booking services from Bhilai?",
                    answer: "Yes. We provide complete cruise booking services from Bhilai, including consultation, cruise selection, visa guidance, and travel planning. You can visit our office on GE Road, Bhilai or book via WhatsApp."
                },
                {
                    question: "Can people from Bhilai book international cruises?",
                    answer: "Absolutely. Travelers from Bhilai regularly book Dubai, Singapore, Mediterranean, and European cruises through us. We manage flights from Raipur Airport and all cruise formalities."
                },
                {
                    question: "Is there any cruise that starts directly from Bhilai?",
                    answer: "No cruise starts directly from Bhilai (as we are landlocked), but we arrange complete travel from Bhilai to the cruise departure port (Mumbai, Singapore, Dubai, etc.) including flights and transfers."
                },
                {
                    question: "Which is the nearest airport for cruise travel from Bhilai?",
                    answer: "The nearest airport is Swami Vivekananda Airport, Raipur (RPR). Most international cruise travelers from Bhilai fly via Raipur → Delhi/Mumbai/Singapore/Dubai."
                },
                {
                    question: "Do you provide pickup from Bhilai for cruise trips?",
                    answer: "Yes. We arrange pickup from Bhilai, Durg, Supela, Nehru Nagar, Power House, Risali, and nearby areas for airport or railway station transfers."
                },
                {
                    question: "Is cruise booking expensive for Bhilai travelers?",
                    answer: "Not necessarily. Cruises often cost less than luxury international tours because accommodation, food, and entertainment are bundled together, making them value-for-money."
                },
                {
                    question: "Can middle-class families from Bhilai afford cruises?",
                    answer: "Yes. We offer budget-friendly cruise options, EMI plans, and short-duration cruises (3-4 nights) suitable for families from Bhilai and Durg."
                },
                {
                    question: "Are cruises safe for first-time international travelers from Bhilai?",
                    answer: "Yes. Cruises are one of the safest and easiest international travel options, especially for first-time travelers from Bhilai who want guided experiences."
                }
            ]
        },
        {
            title: "Common Search Queries",
            icon: HelpCircle,
            questions: [
                {
                    question: "What is the cheapest cruise package available from Bhilai?",
                    answer: "Short cruises from Mumbai (Cordelia) or Singapore (Genting Dream) are usually the cheapest options. Prices vary by season, cabin type, and current offers. Contact us for the latest deals."
                },
                {
                    question: "Which cruise is best for honeymoon couples from Bhilai?",
                    answer: "Dubai, Singapore, and Mediterranean cruises are extremely popular among honeymoon couples from Bhilai due to luxury cabins (Balconies), privacy, and romantic sunset experiences."
                },
                {
                    question: "Which cruise is best for senior citizens from Bhilai?",
                    answer: "River cruises and shorter ocean cruises are ideal for senior citizens because of the slow pace, onboard medical support, and easy accessibility (elevators everywhere)."
                },
                {
                    question: "Do cruises provide Indian food for Bhilai travelers?",
                    answer: "Yes! Many international cruise ships (especially those sailing from Singapore/Dubai) provide extensive Indian vegetarian options, and some ships even offer Jain meals on request."
                },
                {
                    question: "Is English spoken on cruise ships?",
                    answer: "Yes. English is the primary language onboard international cruise ships. Staff are very accustomed to Indian travelers."
                },
                {
                    question: "How many days does a cruise trip usually take?",
                    answer: "Cruises range from 2–3 nights (short breaks) to 15+ nights (grand voyages), depending on destination and cruise type."
                },
                {
                    question: "Can students from Bhilai go on cruise trips?",
                    answer: "Yes. Cruises are popular among student groups and young travelers from Bhilai, especially Southeast Asia cruises which act as a great graduation trip."
                }
            ]
        },
        {
            title: "Visa, Documents & Confusion Clearing",
            icon: FileText,
            questions: [
                {
                    question: "Is visa required for cruise travel from Bhilai?",
                    answer: "Visa depends on the cruise destination and ports visited. Some cruises allow visa-free shore access (e.g., some stops in Japan/Korea for cruise pax), while others strictly require visas."
                },
                {
                    question: "Do you help with cruise visa from Bhilai?",
                    answer: "Yes. We provide complete visa assistance including documentation, appointment guidance, and embassy process support specifically for cruise itineraries."
                },
                {
                    question: "How early should Bhilai travelers apply for cruise visa?",
                    answer: "We recommend starting the visa process 45–60 days before departure to avoid delays."
                },
                {
                    question: "Is passport mandatory for cruise travel?",
                    answer: "Yes. A valid passport (with min 6 months validity) is mandatory for international cruises."
                },
                {
                    question: "Is travel insurance required for cruises?",
                    answer: "Strongly recommended and sometimes mandatory depending on the cruise line and specific destination norms."
                }
            ]
        },
        {
            title: "Onboard Experience (Trust + Education)",
            icon: Ship,
            questions: [
                {
                    question: "What is included in cruise packages?",
                    answer: "Typically included: Accommodation (Cabin), All Meals (Breakfast, Lunch, Dinner), Entertainment (Shows, Music), Pools & Activities. Port charges are also often included."
                },
                {
                    question: "What extra expenses should Bhilai travelers expect?",
                    answer: "Extra costs may include: Alcoholic drinks, Shore excursions, Spa services, Internet packages, and Gratuities (Service Charges)."
                },
                {
                    question: "Is seasickness a problem?",
                    answer: "Modern cruise ships are highly stable with advanced stabilizers. Seasickness is rare and easily manageable with medication available onboard."
                },
                {
                    question: "Are medical facilities available on cruise ships?",
                    answer: "Yes. Cruise ships have fully equipped medical centers with doctors and nurses."
                },
                {
                    question: "Is cruise safe for children?",
                    answer: "Yes. Cruises are very safe and provide dedicated Kids' Clubs, pools, and family-friendly activities monitored by staff."
                }
            ]
        },
        {
            title: "Website & Trust Doubt Clearing",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Is Rudraksh Safar a genuine cruise booking agency?",
                    answer: "Yes. Rudraksh Safar is a verified travel agency based in Bhilai, serving travelers since 2015 with transparent pricing and real office presence."
                },
                {
                    question: "Do you have a physical office in Bhilai?",
                    answer: "Yes. Our office is located on GE Road, Bhilai. Customers are welcome to visit us for face-to-face consultation."
                },
                {
                    question: "Is it safe to book cruise packages through your website?",
                    answer: "Yes. Our website is informational, and all bookings are handled personally via verified communication (Phone/WhatsApp/Office), ensuring safety and clarity at every step."
                },
                {
                    question: "Why should Bhilai customers trust your website?",
                    answer: "Because we offer: Local office support, Direct agent communication, No hidden charges, and Real testimonials from past customers in your city."
                },
                {
                    question: "Do you provide after-booking support?",
                    answer: "Yes. We provide 24/7 support before, during, and after the cruise to ensure you are never stuck."
                },
                {
                    question: "What happens if my cruise is delayed or changed?",
                    answer: "We coordinate directly with cruise lines and assist with rescheduling or alternate arrangements."
                },
                {
                    question: "Can I cancel my cruise booking?",
                    answer: "Cancellation depends on the specific cruise line's policy. We explain all rules clearly before you book."
                },
                {
                    question: "Do you offer EMI options for cruise booking?",
                    answer: "Yes. EMI options are available for selected cruise packages through our payment partners."
                },
                {
                    question: "Do you charge hidden fees?",
                    answer: "No. We follow 100% transparent pricing."
                },
                {
                    question: "Can I talk to a real person before booking?",
                    answer: "Yes! You can call, WhatsApp, or visit our Bhilai office anytime during working hours."
                }
            ]
        },
        {
            title: "Booking & Final Questions",
            icon: UserCheck,
            questions: [
                {
                    question: "How do I book a cruise from Bhilai?",
                    answer: "You can: \n1. Call us \n2. WhatsApp us \n3. Visit our Bhilai office \nWe guide you step-by-step through selection and payment."
                },
                {
                    question: "What is the best time to book a cruise?",
                    answer: "3–6 months in advance is ideal for the best pricing and cabin choice."
                },
                {
                    question: "Are cruise prices cheaper if booked early?",
                    answer: "Yes. Cruise pricing is dynamic and almost always increases closer to departure."
                },
                {
                    question: "Do you customize cruise packages?",
                    answer: "Yes. We customize Cabin type, Flights, Pre/Post-cruise stays, and Shore Excursions."
                },
                {
                    question: "Is cruise holiday worth it for Bhilai travelers?",
                    answer: "Yes. Cruises provide Luxury + Multiple Destinations + Stress-free travel, making them one of the best value-for-money international holiday options available."
                },
                {
                    question: "Can you combine cruise with land tours?",
                    answer: "Yes. We can combine a 3-night cruise with a 3-night city tour (e.g., Singapore City + Cruise) into one seamless itinerary."
                },
                {
                    question: "Which cruise destinations are trending among Bhilai travelers?",
                    answer: "Currently trending: \n- Dubai Cruise \n- Singapore Cruise \n- Mediterranean Cruise \n- Cordelia (domestic)."
                },
                {
                    question: "Are cruise trips suitable for first-time international travelers?",
                    answer: "Yes. Cruises are arguably the easiest and safest way to travel internationally for the first time."
                },
                {
                    question: "Do cruises offer vegetarian food options?",
                    answer: "Yes. Vegetarian food is widely available on most cruise ships."
                },
                {
                    question: "Can I get a detailed explanation before booking?",
                    answer: "Absolutely. We explain everything in detail (Visas, Cabins, Gratuities) so you travel with full confidence."
                }
            ]
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(category =>
            category.questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        )
    };

    return (
        <>
            <Helmet>
                <title>Cruise Booking from Bhilai FAQs | Prices, Visa & Local Guide - Rudraksh Safar</title>
                <meta name="description" content="Complete guide for Bhilai travelers planning a cruise. Where to fly from, visa help in Bhilai, cost for families, and best packages explained." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cruise-booking-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative bg-primary/5 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cruise from Bhilai', path: '/faqs/cruise-booking-bhilai' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <MapPin className="w-4 h-4" />
                                <span>Local Bhilai Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Planning a Cruise from <span className="text-primary">Bhilai?</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We answer every question Bhilai travelers ask us—from airport pickups to Indian food onboard.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid gap-12">
                            {faqCategories.map((category, idx) => (
                                <div key={idx} className="scroll-mt-24" id={`category-${idx}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                                    </div>

                                    <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
                                        <Accordion type="single" collapsible className="w-full">
                                            {category.questions.map((item, qIdx) => (
                                                <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="px-6 data-[state=open]:bg-muted/30 transition-colors">
                                                    <AccordionTrigger className="text-left font-medium text-base md:text-lg py-5 hover:text-primary transition-colors">
                                                        {item.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6 whitespace-pre-line">
                                                        {item.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust/CTA Section */}
                <section className="py-20 bg-muted/30 border-t">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Visit Our Bhilai Office</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Prefer talking face-to-face? Come visit us on GE Road. We'll show you deck plans and explain the packages over a cup of chai.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <Ship className="w-5 h-5" />
                                Book Cruise Appointment
                            </Link>
                            <a href="https://wa.me/919406182174" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CruiseBookingBhilaiFAQ;
