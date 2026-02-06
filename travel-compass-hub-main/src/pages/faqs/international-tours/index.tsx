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
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Globe, Plane, FileText, Wallet, Phone, Utensils, ShieldCheck, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternationalToursFAQ = () => {
    const faqCategories = [
        {
            title: "Visa & Documentation",
            icon: FileText,
            questions: [
                {
                    question: "Do I need a visa for every international destination?",
                    answer: "Not necessarily. Many popular destinations for Indian travelers offer **Visa on Arrival (VoA)** or **Visa Free** entry. Countries like Thailand, Malaysia, Sri Lanka, and Maldives often have visa-free or easy e-visa options. For countries like Singapore, Dubai (UAE), and Europe (Schengen), you must apply for a visa in advance. At Rudraksh Safar, we handle the entire visa process for you, including documentation and submissions from our Bhilai office."
                },
                {
                    question: "What documents do I generally need travel abroad?",
                    answer: "The absolute must-haves are: \n1. **Original Passport** (valid for at least 6 months from your return date). \n2. **Visa** (E-visa copy or sticker on passport). \n3. **Confirmed Return Flight Tickets**. \n4. **Hotel Booking Vouchers**. \n5. **Travel Insurance** (Mandatory for Europe, highly recommended for everywhere else). \n6. **Passport-sized Photos** (White background). \nWe provide a specific checklist based on your destination."
                },
                {
                    question: "What if my visa gets rejected? Do I get a refund?",
                    answer: "Visa fees paid to embassies are **non-refundable** in almost all cases, regardless of approval. However, rejection is rare if your documentation is correct. Common reasons for rejection include insufficient bank balance, blurry photos, or unmatched signatures. Our team verifies every single document before submission to minimize this risk to near zero."
                },
                {
                    question: "Can I travel if my passport expires in 5 months?",
                    answer: "No. Most countries strictly require your passport to be valid for **at least 6 months** beyond your intended date of return. If your passport is expiring soon, you must renew it before booking your trip. We can assist with Tatkal Passport renewals in Bhilai if you're in a hurry."
                },
                {
                    question: "Do you help with travel insurance?",
                    answer: "Yes, absolutely. Travel insurance is crucial for covering medical emergencies, lost baggage, or flight cancellations. For Schengen (Europe) visas, it is mandatory. We include comprehensive travel insurance in most of our international packages to ensure you travel worry-free."
                }
            ]
        },
        {
            title: "Flights & Connectivity from Raipur",
            icon: Plane,
            questions: [
                {
                    question: "Are there direct international flights from Raipur (RPR)?",
                    answer: "Currently, **Swami Vivekananda Airport (RPR)** does not have direct international commercial flights. You will typically fly **Raipur → Delhi (DEL)** or **Raipur → Mumbai (BOM)** or **Raipur → Kolkata (CCU)**, and then connect to your international flight. We structure your itinerary with sufficient layover time (minimum 3-4 hours) to ensure you comfortably clear immigration and customs at the hub airport."
                },
                {
                    question: "Will my luggage go straight to the international destination?",
                    answer: "If you are booked on a single PNR (connected ticket), your luggage will usually be checked through to your final destination (e.g., Raipur → Delhi → Dubai). However, immigration is always cleared at your **first point of exit** from India (e.g., Delhi). On your return (e.g., Dubai → Delhi → Raipur), you often have to collect bags in Delhi, clear customs, and re-check them. We clarify this specific to your airline before you fly."
                },
                {
                    question: "What is the best time to book international flights for cheap rates?",
                    answer: "For international travel, the 'sweet spot' is usually **3 to 4 months in advance**. Last-minute international bookings can be extremely expensive. If you are planning for peak seasons like Diwali, Christmas, or Summer Holidays (May-June), we recommend blocking seats even earlier (5-6 months prior) to get the best airfare."
                },
                {
                    question: "Can I manage my own flights and just book the land package?",
                    answer: "Yes, you can! This is called a **'Land-Only Package'**. If you have miles or want to book your own flights, we will arrange everything else: airport pickups, hotels, sightseeing, meals, and visas. Just share your flight timings with us so we can align the transfers."
                },
                {
                    question: "What happens if my connecting flight from Raipur is delayed?",
                    answer: "If you book a single connected ticket (e.g., Air India or Indigo all the way), the airline is responsible for putting you on the next available flight. If you book separate tickets (e.g., Indigo to Delhi, Emirates to Dubai) to save money, **you bear the risk**. We always recommend keeping a safe buffer of 5+ hours if booking separate tickets, or just letting us book a protected connection for peace of mind."
                }
            ]
        },
        {
            title: "Forex & Money",
            icon: Wallet,
            questions: [
                {
                    question: "Where can I exchange currency in Bhilai?",
                    answer: "You don't need to hunt for forex dealers. We assist with currency exchange at competitive rates through authorized partners right here in Bhilai. We can arrange for **foreign currency cash** and **multi-currency forex cards** (which are safer and offer better rates than cash) to be delivered to you before your trip."
                },
                {
                    question: "Should I carry cash or use my Indian Debit/Credit card?",
                    answer: "Using a standard Indian Debit/Credit card abroad attracts a **3.5% to 4% markup fee** plus GST on every transaction. It represents a huge waste of money. We recommend a **Forex Card** (zero markup) for 70% of your expenses and efficient **Cash** (Dollars or local currency) for small expenses like taxis and street food. Avoid exchanging money at airports where rates are worst."
                },
                {
                    question: "How much cash am I allowed to carry?",
                    answer: "As per RBI's LRS (Liberalised Remittance Scheme), you can carry up to **$3,000 USD** (or equivalent) in cash per trip. For amounts larger than that, a Forex Card or Wire Transfer is mandatory. Practically, for a week-long trip, carrying $300-$500 in cash per person is usually sufficient for petty expenses."
                },
                {
                    question: "What is TCS on international travel?",
                    answer: "The government collects **Tax Collected at Source (TCS)** on foreign remittances. For tour packages, if the cost is below ₹7 Lakhs in a financial year, TCS is **5%**. Above ₹7 Lakhs, it is **20%**. This is **NOT a cost**—it is deposited against your PAN card and you can claim it back as a refund when you file your Income Tax Return (ITR). We provide the certificate for your records."
                },
                {
                    question: "Do I need to carry US Dollars for all countries?",
                    answer: "US Dollars (USD) are universally accepted and easy to exchange. For countries like Thailand, Vietnam, or Bali, it's often better to carry USD and convert to local currency there (better rates than buying Baht/Dong in India). For Europe, carry Euros. For Dubai, carry Dirhams. We will advise the best currency strategy for your specific destination."
                }
            ]
        },
        {
            title: "Food, SIM & Comfort",
            icon: Utensils,
            questions: [
                {
                    question: "I am vegetarian/Jain. Will I get food abroad?",
                    answer: "Absolutely. Destinations like Dubai, Thailand, Singapore, Bali, and Europe have excellent Indian restaurants. For our group tours, we specifically ensure **Indian Buffet meals** with designated Veg and Jain options. If you are a strict Jain traveler, please inform us at the time of booking so we can alert the hotels and chefs in advance."
                },
                {
                    question: "Will my Indian SIM card work abroad?",
                    answer: "It will work only if you activate an **International Roaming Pack**, which can be very expensive (e.g., ₹3000-₹4000 for limited data). A cheaper and better option is to buy a **Local SIM** on arrival (e.g., ₹800-₹1000 for unlimited data) or use a **Matrix Card**. We will guide you on the cheapest connectivity option for your specific country."
                },
                {
                    question: "Are hotels abroad similar to hotels in India?",
                    answer: "Hotel standards vary. In places like Europe or Singapore, hotel rooms are generally **smaller** than Indian hotel rooms due to space constraints. In Dubai or Bali, rooms are spacious. Also, many international hotels do not provide dental kits or slippers by default. We always share actual photos and reviews of the hotels we propose so you know exactly what to expect."
                },
                {
                    question: "Can I drink tap water abroad?",
                    answer: "In countries like Singapore, Switzerland, UK, and most of Europe, tap water is drinkable and high quality. In Thailand, Bali, Dubai, or Vietnam, you strictly **cannot drink tap water**—you must buy bottled water. Our coaches usually provide complimentary water bottles during sightseeing days."
                },
                {
                    question: "Is English spoken everywhere?",
                    answer: "In most tourist destinations (Thailand, Dubai, Europe, Singapore), English is widely spoken in hotels and shops. In countries like Vietnam or parts of Europe (France/Italy), there might be a language barrier, but Google Translate works wonders. Our local guides and tour managers are there to handle all communication for you."
                }
            ]
        },
        {
            title: "Safety & Support",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Who do I contact if I have an emergency abroad?",
                    answer: "You are never alone with Rudraksh Safar. You will have: \n1. **24/7 WhatsApp Support** from our Bhilai control room. \n2. Landline/Mobile number of the **Local Tour Guide** in that country. \n3. Emergency contact of the **Indian Embassy**. \nWe create a dedicated WhatsApp group for your trip where you, your family, and our team are connected."
                },
                {
                    question: "Is it safe for solo female travelers?",
                    answer: "Yes, provided you choose the right destination and plan well. Places like Singapore, Dubai, and most of Europe are incredibly safe. We curate **safety-first itineraries** for solo women, choosing hotels in busy central areas and ensuring only trusted, verified drivers are used for transfers."
                },
                {
                    question: "What happens if I lose my passport?",
                    answer: "Don't panic. First, file a police report immediately. Then, contact the nearest Indian Embassy/Consulate. We will assist you by emailing copies of your documents (which we keep on file) to the embassy to speed up the issue of an **Emergency Certificate** for your return travel. This is why having a local agent back home is a huge advantage over impersonal online portals."
                },
                {
                    question: "Are there any hidden costs in international packages?",
                    answer: "We pride ourselves on **zero hidden costs**. Our quotes clearly split 'Inclusions' and 'Exclusions'. Typically, personal expenses (shopping, tips), Lunch (unless specified), and City Taxes (Tourism Dirham, hotel tax paid locally) are exclusions. We will give you an estimate of these 'on-ground' costs so you can budget accurately."
                }
            ]
        },
        {
            title: "Booking & Trust",
            icon: Info,
            questions: [
                {
                    question: "Why should I book with Rudraksh Safar instead of online apps?",
                    answer: "Online apps (OTAs) are great for simple flight bookings, but for international holidays, they lack **accountability**. If your flight cancels, you are stuck on a generic helpline. If a hotel denies check-in, you have no immediate backup. With us: \n1. You have a **human face** to talk to in Bhilai. \n2. We handle complex **Visa & Forex** paperwork. \n3. We provide **on-trip support**. \n4. We have **personal experience** with these destinations."
                },
                {
                    question: "How do I pay? Can I pay in installments?",
                    answer: "Yes, you can pay in comfortable installments. \n- **Booking Amount**: Defined token (e.g., ₹10,000 - ₹20,000) to block rates. \n- **Payment 2**: Flight cost & Visa fees. \n- **Final Payment**: Remaining balance 15-20 days before departure. \nWe accept Bank Transfer, Cheque, UPI, and Credit Cards (EMI options available depending on your bank)."
                },
                {
                    question: "Do you offer group tours with Indian food?",
                    answer: "Yes, our **'Fixed Departure' Group Tours** are perfect for those who want a guided experience, Indian meals, and the company of other families. These are very popular for Europe, Dubai, and Thailand. A tour manager accompanies the group from India to handle everything."
                },
                {
                    question: "Can you customize a trip just for my family?",
                    answer: "Absolutely. 80% of our business is **Customized Private Tours (FIT)**. You choose the dates, the hotels, the pace, and the sightseeing. Whether you want a relaxed honeymoon in Maldives or an adventure trip in New Zealand, we stick to your budget and preferences."
                },
                {
                    question: "Where is your office? Can we visit?",
                    answer: "We are located at **Shop No. 27, Second Floor, Khichariya Complex, Near Durg-Bhilai Road**. We strongly encourage you to visit us for a face-to-face consultation. Sitting across a table helps us better understand your dream holiday than a phone call ever could."
                }
            ]
        }
    ];

    // Schema for FAQPage
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
                <title>International Tour FAQs | Visa, Flights, Forex & Safety Guide - Rudraksh Safar</title>
                <meta name="description" content="Common questions about international travel from Bhilai/Raipur. Expert answers on Visas, VoA, Flights connectivity, Forex, Food, and Safety for destinations like Dubai, Thailand, Europe." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/international-tours" />
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
                            { label: 'International Tours', path: '/faqs/international-tours' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <Globe className="w-4 h-4" />
                                <span>Global Travel Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                International Travel <span className="text-primary">Questions Answered</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Planning your first trip abroad or your next global adventure? Get expert answers on visas, connectivity from Raipur, forex, and safety—straight from Bhilai's trusted travel partners.
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
                        <h2 className="text-3xl font-bold mb-6">Still have doubts about visiting abroad?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            International travel rules change frequently. Don't rely on outdated internet forums. Talk to real humans who book these trips every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <Phone className="w-5 h-5" />
                                Speak to a Travel Expert
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                Visit Our Bhilai Office
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default InternationalToursFAQ;
