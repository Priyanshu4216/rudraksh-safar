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
import { FileText, Globe, ShieldCheck, Clock, AlertTriangle, UserCheck, Scale, Plane } from 'lucide-react';

const VisaServicesFAQ = () => {
    const faqCategories = [
        {
            title: "Visa Basics & Types",
            icon: FileText,
            questions: [
                {
                    question: "What are visa services provided by a travel agency?",
                    answer: "Visa services include end-to-end assistance for applying, documenting, submitting, and tracking visa applications. A travel agency guides you through eligibility checks, document preparation, appointment booking, application submission, and follow-ups until a final decision is received."
                },
                {
                    question: "Why should I apply for a visa through a travel agent instead of applying myself?",
                    answer: "Applying through a travel agent reduces errors, rejections, and delays. Agents understand embassy requirements, documentation formats, and common rejection reasons. They ensure your application is accurate, complete, and professionally presented, which significantly improves approval chances."
                },
                {
                    question: "What types of visas do you assist with?",
                    answer: "We assist with: \n- **Tourist visas** \n- **Business visas** \n- **Student visas** \n- **Transit visas** \n- **Visit / family visas** \n- **Medical visas** \n- **Group tour visas** \nEach visa type has different documentation and processing rules."
                },
                {
                    question: "Which countries’ visas can be applied through visa services?",
                    answer: "Visa services typically cover countries like: \n- **UAE (Dubai)** \n- **Thailand, Singapore, Malaysia, Vietnam, Indonesia (Bali)** \n- **Nepal & Sri Lanka** \n- **Schengen countries (Europe)** \n- **UK, USA, Canada, Australia** (documentation guidance) \nCountry availability depends on embassy rules and applicant profile."
                },
                {
                    question: "What is a Schengen visa?",
                    answer: "A Schengen visa allows travel across **27 European countries** (like France, Swiss, Italy, Germany) with a single visa sticker. It has strict documentation, insurance, and appointment rules. We specialize in handling complex Schengen itineraries."
                },
                {
                    question: "What is a multiple-entry visa?",
                    answer: "A **multiple-entry visa** allows you to enter and exit the country multiple times within its validity period (e.g., US 10-year visa, Singapore 2-year visa). Single-entry visas allow only one entry."
                },
                {
                    question: "What is a transit visa?",
                    answer: "Transit visas allow short stays (usually 24-96 hours) during flight layovers to change airports or wait for connecting flights. Not all nationalities or routes require transit visas; we check this for you."
                }
            ]
        },
        {
            title: "Documents & Financials",
            icon: Scale,
            questions: [
                {
                    question: "What documents are required for a tourist visa?",
                    answer: "Common documents (vary by country): \n1. **Passport** (min 6 months validity) \n2. **Photos** (specific size/bg) \n3. **Flight Itinerary** \n4. **Hotel Booking** \n5. **Bank Statement** (3-6 months) \n6. **Leave Letter / Employment Proof** \n7. **Covering Letter**."
                },
                {
                    question: "How much bank balance is required for a visa?",
                    answer: "Required balance depends on destination and trip duration: \n- **Southeast Asia**: ₹1–2 Lakh per person \n- **Europe (Schengen)**: ₹3–5 Lakh \n- **UK/USA**: Profile-based assessment \nFunds must be genuine, traceable, and in the account for a stable period (not sudden deposits)."
                },
                {
                    question: "What is a cover letter and why is it important?",
                    answer: "A cover letter explains: \n- Purpose of travel \n- Duration & Itinerary \n- Funding source \n- Return intention \nEmbassies use it to judge credibility. Poor or generic cover letters often lead to rejection."
                },
                {
                    question: "Can I apply for a visa without confirmed flight tickets?",
                    answer: "Yes. Most embassies accept **dummy** or **temporary flight itineraries** for visa processing. We provide these to avoid your financial risk of booking non-refundable tickets before approval."
                },
                {
                    question: "Do you provide hotel bookings for visa purposes?",
                    answer: "Yes. We arrange **Visa-Compliant Hotel Bookings** that match Embassy requirements. These are confirmable vouchers necessary for your application file."
                },
                {
                    question: "What is proof of return?",
                    answer: "Proof of return assures the embassy you will come back to India. It includes: \n- **NOC / Leave Letter** from Employer \n- **Business Registration (GST)** \n- **Property/Asset documents** \n- **Family ties** (Marriage/Birth certs)."
                },
                {
                    question: "Is travel insurance mandatory?",
                    answer: "Yes, for **Schengen (Europe)**, **UAE**, and several other countries, Travel Insurance with specific coverage (e.g., 30,000 Euros) is mandatory. It covers medical emergencies and often trip cancellations."
                }
            ]
        },
        {
            title: "Process, Time & Bio-metrics",
            icon: Clock,
            questions: [
                {
                    question: "How long does visa processing take?",
                    answer: "Timelines vary: \n- **UAE**: 3–5 working days \n- **Thailand / Singapore**: 5–7 working days \n- **Schengen**: 10–20 working days \n- **UK / USA**: Depends on appointment availability (can be weeks). \nWe give you realistic timelines based on current embassy load."
                },
                {
                    question: "Is biometric mandatory for all visas?",
                    answer: "Biometric (fingerprint/photo) is mandatory for **Schengen, UK, USA, Canada**. It is generally **NOT** required for UAE, Thailand, or Malaysia e-visas."
                },
                {
                    question: "Do you help with visa appointments?",
                    answer: "Yes. We actively monitor appointment slots and assist in booking dates for VFS/Embassy. Finding slots for Europe/US can be tough; our team keeps a constant watch."
                },
                {
                    question: "Can I apply for visa online?",
                    answer: "Many countries (UAE, Vietnam, Sri Lanka, Singapore, Malaysia, Australia) now offer **E-Visas** which are online. US, UK, Schengen still require physical submission. We manage both processes."
                },
                {
                    question: "Is visa fee refundable if my trip is cancelled?",
                    answer: "No. Embassy visa fees are almost always **non-refundable**, even if you cancel your trip or if the visa is rejected."
                },
                {
                    question: "Do you provide urgent or express visa services?",
                    answer: "Yes, where the Embassy offers an official **Express/Priority** channel (e.g., UK Priority Visa, UAE Express), we can facilitate that for an additional fee."
                }
            ]
        },
        {
            title: "Approvals & Rejections",
            icon: AlertTriangle,
            questions: [
                {
                    question: "Is visa approval guaranteed?",
                    answer: "No. **No one can guarantee a visa.** The final decision lies 100% with the Embassy/Consulate. Any agent guaranteeing a visa is lying. However, a professional application significantly increases your success probability."
                },
                {
                    question: "What is the most common reason for visa rejection?",
                    answer: "Common reasons: \n1. **Insufficient funds** or unexplained deposits. \n2. **Weak travel history**. \n3. **Incomplete/Wrong forms**. \n4. **Unclear purpose** of visit. \n5. **Photo mismatch** specifications."
                },
                {
                    question: "Can I reapply after a visa rejection?",
                    answer: "Yes. You can reapply. However, it is crucial to analyze the **Rejection Letter** (if provided) or the application gaps before re-submitting. We help fix the previous errors."
                },
                {
                    question: "What happens if my visa is rejected?",
                    answer: "If rejected, the visa fee is lost. You get a passport back (sometimes with a rejection note). We review your case to decide if an Appeal or Re-application is the right next step."
                },
                {
                    question: "Why do embassies reject genuine travelers?",
                    answer: "Embassies assess the **Risk of Overstay** (illegal immigration). If your ties to India (Job, Family, Money) look weak on paper, they may reject you even if your intent is genuine. Documentation is key."
                }
            ]
        },
        {
            title: "Eligibility & Special Cases",
            icon: UserCheck,
            questions: [
                {
                    question: "Can I apply for visa if my passport is expiring soon?",
                    answer: "Most countries strictly require **minimum 6 months validity** from your date of return. If your passport expires sooner, you must renew it first."
                },
                {
                    question: "Can homemakers or unemployed people get a visa?",
                    answer: "Yes. They need a **Sponsor** (husband, father, child) who funds the trip. You must attach the Sponsor's financial documents and an affidavit of support."
                },
                {
                    question: "Can senior citizens apply for tourist visas?",
                    answer: "Yes. Senior citizens are welcomed travelers. Proof of Pension, Savings, or Sponsorship from children is usually required."
                },
                {
                    question: "Can couples or families apply together?",
                    answer: "Yes. Group or Family applications are often smoother as the 'primary applicant' (earning member) covers the others financially. We link the applications together."
                },
                {
                    question: "Do you help with visa interview preparation?",
                    answer: "Yes. For **USA / Schengen** interviews, we conduct **Mock Sessions** to prepare you for common questions about your trip, job, and finances so you answer confidently."
                },
                {
                    question: "Can a travel agent influence visa approval?",
                    answer: "No agent has 'influence' inside an embassy. We can only ensure your file is **Perfect**, reducing technical reasons for rejection."
                }
            ]
        },
        {
            title: "Why Choose Us (Local Agent)",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Why choose a local visa agent instead of online portals?",
                    answer: "Online portals lack personalization. We offer: \n- **Profile Assessment**: We tell you upfront if you are risky. \n- **Face-to-Face**: Come to our Bhilai office to discuss papers. \n- **Privacy**: Your documents are safe with us. \n- **Accountability**: We track it daily."
                },
                {
                    question: "Can travel agents fake documents for visa?",
                    answer: "No. **We strictly DO NOT** fake documents (fake bank statements, fake jobs). Using fake documents leads to permanent blacklisting (ban) from that country. We only work with genuine papers."
                },
                {
                    question: "How do I track my visa application?",
                    answer: "You don't need to check portals. We track the status daily via our agent logins and keep you updated on WhatsApp until the passport is ready for collection."
                },
                {
                    question: "How much do visa services cost?",
                    answer: "Costs include: \n1. **Embassy Fee** (Challan) \n2. **VFS/Biometric Charges** \n3. **Our Service Fee** \nWe provide a clear breakup. Cheap agents often hide costs or cut corners on covering letters."
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
                <title>Visa Service FAQs | Approval Chances, Documents & Fees - Rudraksh Safar</title>
                <meta name="description" content="Get answers on Visa Applications for Schengen, US, Dubai, Thailand & more. Learn about documents, rejection reasons, and why expert help improves approval chances." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/visa-services" />
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
                            { label: 'Visa Services', path: '/faqs/visa-services' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <FileText className="w-4 h-4" />
                                <span>Visa Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Visa Application <span className="text-primary">Questions Answered</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Don't let a small mistake reject your dream trip. Understanding the visa process is the first step to a successful approval.
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
                        <h2 className="text-3xl font-bold mb-6">Worried about Visa Rejection?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let our experts review your profile before you apply. A 10-minute consultation can save you thousands in rejected fees.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <ShieldCheck className="w-5 h-5" />
                                Get Visa Assistance
                            </Link>
                            <Link to="/travel-services/visa-assistance" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                Read Visa Guides
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

export default VisaServicesFAQ;
