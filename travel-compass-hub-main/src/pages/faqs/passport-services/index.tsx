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
import { FileText, Clock, AlertTriangle, UserCheck, ShieldCheck, Layers, BookOpen } from 'lucide-react';

const PassportServicesFAQ = () => {
    const faqCategories = [
        {
            title: "Passport Basics & Types",
            icon: BookOpen,
            questions: [
                {
                    question: "What are passport services provided by a travel agency?",
                    answer: "Passport services include expert guidance for new passport applications, renewals, corrections, Tatkal passports, lost/damaged passports, appointment booking, document preparation, and application tracking until passport delivery."
                },
                {
                    question: "Who is eligible to apply for a new passport?",
                    answer: "Any Indian citizen who: \n- Does not already hold a valid passport. \n- Has valid identity & address proof. \n- Is above or below 18 years (minor passport available). \nIdeally, you should have an Aadhaar Card for the smoothest process."
                },
                {
                    question: "What types of passport services do you provide?",
                    answer: "We assist with: \n1. **New Passport** (Fresh Application) \n2. **Passport Renewal** (Re-issue) \n3. **Tatkal Passport** (Urgent) \n4. **Correction** (Name, Address, Spouse Name) \n5. **Lost or Damaged Passport** \n6. **Minor (Child) Passport**."
                },
                {
                    question: "What is the difference between Normal and Tatkal passport?",
                    answer: "**Normal**: Standard processing time (15-30 days), lower fee, police verification usually before issuance. \n**Tatkal**: Urgent processing (1-3 days dispatch), higher fee, police verification often done after issuance. Tatkal requires specific verification documents."
                },
                {
                    question: "How long is a passport valid?",
                    answer: "For adults (above 18), a standard passport is valid for **10 years**. For minors (below 18), it is usually valid for **5 years** or until they turn 18, whichever is earlier."
                }
            ]
        },
        {
            title: "Documents & Eligibility",
            icon: FileText,
            questions: [
                {
                    question: "What documents are required for a new passport?",
                    answer: "For a standard Fresh Passport, you typically need: \n1. **Aadhaar Card** (Address & DOB proof) \n2. **PAN Card** (Identity proof) \n3. **10th Marksheet** (ECR/Non-ECR proof) \n4. **Bank Passbook** (optional secondary address proof). \nOriginals must be carried to the PSK appointment."
                },
                {
                    question: "What documents are required for passport renewal?",
                    answer: "For Renewal (Re-issue), you generally need: \n1. **Old Passport** (Original) \n2. **Aadhaar Card** (if address is same/changed) \n3. **Appointment Receipt**. \nIf you need to change details (like address or spouse name), relevant proofs are required."
                },
                {
                    question: "Can passport be applied without Aadhaar?",
                    answer: "Yes, Aadhaar is preferred but not strictly mandatory if you have other valid documents like **Voter ID**, **Driving License**, **Electricity Bill**, or **Rent Agreement** (Registered) that match exactly."
                },
                {
                    question: "Can I apply for a passport if I live in a rented house?",
                    answer: "Yes. You will need a **Registered Rent Agreement** (should be valid for more than 1 year) and usually a utility bill or bank passbook with the rented address. Police verification will happen at this rented address."
                },
                {
                    question: "Can I apply passport if my documents have different names?",
                    answer: "Minor spelling differences can cause rejection. You may need an **Affidavit** or to update your Aadhaar first to ensure all documents have the exact same name sequence."
                },
                {
                    question: "What is Non-ECR vs ECR category?",
                    answer: "**Non-ECR** (Emigration Check Not Required) is given to applicants who have passed **10th Standard** (Matriculation) or have paid taxes for 3 years. It allows easier travel for employment. **ECR** is for those without 10th certificates."
                }
            ]
        },
        {
            title: "Tatkal & Timelines",
            icon: Clock,
            questions: [
                {
                    question: "How long does it take to get a normal passport?",
                    answer: "Timeline breakdown: \n- **Appointment**: 1–2 weeks (depends on slot availability) \n- **Police Verification**: 10–15 days \n- **Dispatch**: 3–5 days after verification. \nTotal: Approx **20-30 days**."
                },
                {
                    question: "What is Tatkal passport and how fast is it?",
                    answer: "Tatkal is for urgent needs. \n- **Appointment** slots are separate. \n- **Passport Dispatch**: Often within **1–3 working days** *before* police verification (in some cases). \n- Extra Govt Fee: ₹2,000 (approx)."
                },
                {
                    question: "Is Tatkal passport guaranteed?",
                    answer: "No. Tatkal is subject to **Passport Officer's discretion** and clear documentation. If the officer feels verification is needed first, they can convert application to Normal mode."
                },
                {
                    question: "How early should I apply for passport before travel?",
                    answer: "We recommend applying at least **2–3 months** before your planned travel, especially if you also need to apply for visas afterwards."
                },
                {
                    question: "Can I travel while passport renewal is in process?",
                    answer: "No. You cannot travel internationally without a valid passport in hand. Your old passport gets cancelled upon applying for renewal."
                },
                {
                    question: "How to track passport application status?",
                    answer: "We track it for you using the **Application Reference Number (ARN)** on the Passport Seva portal and update you on SMS/WhatsApp."
                }
            ]
        },
        {
            title: "Police Verification & RPO",
            icon: ShieldCheck,
            questions: [
                {
                    question: "What is police verification in passport process?",
                    answer: "A Local Police Officer visits your quoted address to verify: \n1. **You actually live there**. \n2. **You have no criminal record**. \n3. **Your identity matches**."
                },
                {
                    question: "Can passport be issued without police verification?",
                    answer: "In some **Renewal** cases (where address is unchanged and police report is clear in system), verification *might* be waived. For all New passports, it is mandatory."
                },
                {
                    question: "What happens during PSK appointment?",
                    answer: "At the Passport Seva Kendra (PSK): \n1. **Document Verification** (Token Issuance). \n2. **Biometrics** (Photo, Fingerprints). \n3. **Granting Officer Interview**. \n4. **Exit**. \nAgents cannot enter the PSK; you must go inside yourself."
                },
                {
                    question: "Can passport be rejected?",
                    answer: "Yes. Common reasons: \n- **Address Mismatch** during police visit. \n- **Adverse Police Report** (Criminal case). \n- **Fake Documents**."
                },
                {
                    question: "Can passport be applied if I have a criminal case?",
                    answer: "It is complex. You must verify details with a lawyer. Generally, you need **Court Permission** (NOC) to get a passport if criminal proceedings are pending."
                }
            ]
        },
        {
            title: "Minors, Renewals & Corrections",
            icon: Layers,
            questions: [
                {
                    question: "How to apply passport for a minor (child)?",
                    answer: "Required: \n- Child's **Birth Certificate**. \n- Parents' **Passports** (Original). \n- Parents' **Consent** (Annexure D). \n- Address proof (Parent's Aadhaar)."
                },
                {
                    question: "Can a single parent apply for child’s passport?",
                    answer: "Yes. Separated or single parents can apply, but specific **Declarations/Affidavits** are needed depending on custody status. We assist in drafting these correctly."
                },
                {
                    question: "How to correct name or spelling in passport?",
                    answer: "Minor spelling correction needs document proof (Aadhaar/School Cert). Major name change usually requires a **Gazette Notification** and newspaper advertisements before applying."
                },
                {
                    question: "Can surname be added or removed?",
                    answer: "Yes. Often done after marriage. Requires **Marriage Certificate** (for addition) or Divorce Decree/Affidavit (for removal/reversion)."
                },
                {
                    question: "Can I change address in passport?",
                    answer: "Yes. This is treated as a **Re-issue** application. You just need valid proof of the new address (Aadhaar, Bank Passbook, etc.)."
                },
                {
                    question: "What if my passport is lost or damaged?",
                    answer: "- **Lost**: Needs FIR copy + Affidavit + Old Details. \n- **Damaged**: Needs Explanation Letter + Annexure F. \nBoth require applying for a fresh booklet (Re-issue)."
                }
            ]
        },
        {
            title: "Agent Benefits",
            icon: UserCheck,
            questions: [
                {
                    question: "Why should I use a passport agent instead of applying myself?",
                    answer: "A passport agent: \n- **Prevents Errors** in form filling (crucial!). \n- **Checks Documents** pre-appointment. \n- **Books Appointments** (saves time). \n- **Guides on Police Verification**. \nThis reduces rejection risk significantly."
                },
                {
                    question: "Do you provide Tatkal appointment assistance?",
                    answer: "Yes. We monitor slots and help you book the earliest available **Tatkal appointment**, which can otherwise be tricky to find."
                },
                {
                    question: "How much does passport service cost?",
                    answer: "Costs include: \n1. **Govt Fee** (e.g., ₹1500 for Normal, ₹3500 for Tatkal). \n2. **Our Service Charge**. \nWe provide a transparent total cost upfront."
                },
                {
                    question: "Do passport agents guarantee approval?",
                    answer: "No agent can 'guarantee' approval as it is a government process. However, our **error-free filing** and document verification maximize your success chances to nearly 100% for genuine cases."
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
                <title>Passport Services FAQs | New, Renewal & Tatkal Help - Rudraksh Safar</title>
                <meta name="description" content="Expert answers on Passport Applications. Tatkal timings, documents for fresh passports, renewal process, and police verification guidance in Bhilai/Raipur." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/passport-services" />
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
                            { label: 'Passport Services', path: '/faqs/passport-services' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <BookOpen className="w-4 h-4" />
                                <span>Passport Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Passport Application <span className="text-primary">Questions Answered</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Applying for a fresh passport or need a quick renewal? We simplify the complex documentation and police verification rules for you.
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
                        <h2 className="text-3xl font-bold mb-6">Don't risk a Passport rejection.</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            One small mistake in the form can lead to months of delay. Let our experts handle the paperwork while you plan your trip.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <UserCheck className="w-5 h-5" />
                                Apply for Passport
                            </Link>
                            <a href="tel:919406182174" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                Call for Documents Check
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

export default PassportServicesFAQ;
