import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, CheckCircle, Clock, Shield, Phone, MapPin, AlertCircle, Info, HelpCircle, Calendar, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FAQsSection from '@/components/FAQsSection';

const PassportAgentBhilai = () => {
    const documents = [
        { type: "Address Proof", list: "Aadhaar Card, Voter ID, Electricity Bill, or Bank Passbook (with photo)" },
        { type: "Date of Birth Proof", list: "Birth Certificate, Pan Card, or School Leaving/Transfer Certificate" },
        { type: "ECR / Non-ECR", list: "10th Marksheet (for Non-ECR/ECNR category)" },
    ];

    const steps = [
        { title: "1. Document Check", desc: "Visit our office. We verify if your documents (Aadhaar, Marksheets) name spellings match perfectly." },
        { title: "2. Online Application", desc: "We fill the complex online form on the Passport Seva portal to avoid rejection errors." },
        { title: "3. Appointment", desc: "We book your slot at PSK Raipur (Magneto Mall / Ambuja Mall) as per your convenient date." },
        { title: "4. Visiting PSK", desc: "You visit the Raipur PSK for photo & biometrics. (We guide you on what to carry)." },
        { title: "5. Police Verification", desc: "Verification comes to your local Thana. We guide you on handling this step smoothly." },
    ];

    const costTimeline = [
        { service: "Fresh Passport (Normal)", time: "25 - 30 Days", note: "Police Verification before dispatch" },
        { service: "Fresh Passport (Tatkal)", time: "3 - 7 Days", note: "Police Verification after dispatch" },
        { service: "Renewal / Re-issue", time: "20 - 25 Days", note: "Depends on police verification requirement" },
        { service: "PCC (Police Clearance)", time: "15 - 20 Days", note: "Required for job/study abroad" },
    ];

    return (
        <>
            <Helmet>
                <title>Passport Agent in Bhilai | New Passport, Renewal & Tatkal Services</title>
                <meta name="description" content="Trusted Passport Agent in Bhilai & Durg. We assist with New Passport, Renewal, Name Change, and Tatkal applications using expert documentation guidance." />
                <meta name="keywords" content="passport agent bhilai, passport assistance bhilai, passport help in bhilai, passport renewal bhilai, tatkal passport agent" />
                <link rel="canonical" href="https://rudrakshsafar.com/passport-agent-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Rudraksh Safar - Passport Agent Bhilai",
                        "image": "https://rudrakshsafar.com/logo.png",
                        "telephone": "+919406182174",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Shop No 14, Khursipar Gate",
                            "addressLocality": "Bhilai",
                            "addressRegion": "Chhattisgarh",
                            "postalCode": "490011",
                            "addressCountry": "IN"
                        },
                        "priceRange": "₹₹",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            "opens": "10:30",
                            "closes": "20:30"
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-full mb-6">
                                <BookOpen className="w-4 h-4" />
                                <span className="text-sm font-medium">Complete Passport Assistance</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Passport Services in <span className="text-indigo-600">Bhilai & Durg</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Expert guidance for New Passports, Renewals, Name Changes, and Tatkal applications. We handle the paperwork so you travel stress-free.
                            </p>

                            {/* TL;DR Summary Block */}
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-left mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Passport Assistance at a Glance</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            A passport agent helps individuals in Bhilai, Durg & Raipur navigate the passport application, renewal, and documentation process.
                                            <strong>Rudraksh Safar</strong> assists with form filling, document verification, appointment scheduling at PSK Raipur, and clarifying queries to avoid rejection.
                                            Ideal for <strong>First-time applicants</strong>, <strong>Senior Citizens</strong>, and <strong>Urgent Tatkal cases</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                                    <a href="https://wa.me/919406182174?text=I need passport assistance" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Book Consultation
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Is & Why Need */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Why Do You Need a Passport Agent?</h2>
                                <p className="text-muted-foreground mb-4">
                                    Applying for a passport involves strict documentation, online form submissions, and specific appointment procedures. A small spelling mismatch or wrong document can lead to application rejection at the PSK.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    A knowledgeable agent acts as your guide to:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span><strong>Prevent Rejections:</strong> Pre-verify documents before you visit the passport office.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span><strong>Simplify Forms:</strong> We fill complex online forms correctly.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span><strong>Urgent Support:</strong> Guidance for Tatkal and emergency travel.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <UserCheck className="w-6 h-6 text-indigo-600" />
                                    Who We Assist
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">1</div>
                                        <div>
                                            <p className="font-medium">First-Time Applicants</p>
                                            <p className="text-xs text-muted-foreground">Confused about address proofs and ECR status.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">2</div>
                                        <div>
                                            <p className="font-medium">Passport Renewal</p>
                                            <p className="text-xs text-muted-foreground">For expired passports or those expiring within 1 year.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">3</div>
                                        <div>
                                            <p className="font-medium">Changes & Corrections</p>
                                            <p className="text-xs text-muted-foreground">Name change (marriage/divorce) or address updates.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">4</div>
                                        <div>
                                            <p className="font-medium">Minors & Infants</p>
                                            <p className="text-xs text-muted-foreground">Documentation for children below 18 years.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Core Passport Services</h2>
                            <p className="text-muted-foreground">We focus on clarity, accuracy, and ease of process.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <FileText className="w-10 h-10 text-blue-600 mb-2" />
                                    <CardTitle>Application Filling</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">Accurate filling of online forms on the official Passport Seva portal. We ensure all personal details match your documents exactly.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Calendar className="w-10 h-10 text-orange-600 mb-2" />
                                    <CardTitle>Appointment Booking</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">We monitor slots at PSK Raipur (Magneto/Ambuja Mall) to book your appointment at the earliest convenient date.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Shield className="w-10 h-10 text-green-600 mb-2" />
                                    <CardTitle>Document Review</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">A pre-visit audit of your original docs. We tell you exactly what to carry (Originals + Copies) to the PSK.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Clock className="w-10 h-10 text-red-600 mb-2" />
                                    <CardTitle>Tatkal Assistance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">Urgent travel? We explain the Tatkal process, higher fees, and specific verification proofs needed regarding Annexure F.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <AlertCircle className="w-10 h-10 text-purple-600 mb-2" />
                                    <CardTitle>Re-issue/Damaged</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">Lost or damaged passport? We guide you on the necessary affidavits (Annexure F/L) and police reports required.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <MapPin className="w-10 h-10 text-cyan-600 mb-2" />
                                    <CardTitle>PSK Guidance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">First time at PSK? We brief you on the arrival time, token process, and what happens at Counters A, B, and C.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Docs, Timeline & Cost */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Documents */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Required Documents Checklist</h3>
                                <div className="bg-background rounded-xl border overflow-hidden">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-muted">
                                                <TableHead>Document Type</TableHead>
                                                <TableHead>Accepted Proofs</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {documents.map((doc, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{doc.type}</TableCell>
                                                    <TableCell className="text-sm text-muted-foreground">{doc.list}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 italic">* Documents must be original and clear.</p>
                            </div>

                            {/* Timeline */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Cost & Timeline Estimates</h3>
                                <p className="text-sm text-muted-foreground mb-4">While Govt fees are fixed, timelines vary based on Police Verification.</p>
                                <div className="bg-background rounded-xl border overflow-hidden">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-muted">
                                                <TableHead>Service</TableHead>
                                                <TableHead>Timeline</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {costTimeline.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">
                                                        {item.service}
                                                        <span className="block text-xs text-muted-foreground">{item.note}</span>
                                                    </TableCell>
                                                    <TableCell>{item.time}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    title="Passport Assistance FAQs"
                    description="Common questions about New Passports, Renewals, and Tatkal services."
                    faqs={[
                        {
                            question: "What documents are required for a new passport application?",
                            answer: "For a fresh passport, typical documents include Proof of Identity (Aadhaar/Voter ID), Proof of Address (Bank Passbook/Electricity Bill), Date of Birth Proof (Birth Certificate/Pan Card), and 10th Marksheet (for ECNR). Originals are mandatory at PSK."
                        },
                        {
                            question: "How long does passport processing take?",
                            answer: "Standard processing is about 25-30 days, as police verification happens before printing. Tatkal processing expedites this to 3-7 days, with verification happening after the passport is dispatched."
                        },
                        {
                            question: "Can I apply for a passport without visiting PSK?",
                            answer: "No. You must visit the Passport Seva Kendra (PSK) in person for biometrics (fingerprints/eye scan) and physical document verification. We can only assist with the pre-visit process."
                        },
                        {
                            question: "Can passport agents guarantee approval?",
                            answer: "No. Passport approval is the sole discretion of the Ministry of External Affairs and Police authorities. We assist with correct documentation to minimize rejection risk, but we cannot guarantee the outcome."
                        },
                        {
                            question: "What is the difference between Normal and Tatkal?",
                            answer: "Tatkal is for urgent travel. It requires higher government fees and usually needs specific documents (like 3 out of 13 specified proofs). It skips the pre-police verification step for faster dispatch."
                        },
                        {
                            question: "What if my address in Aadhaar matches my old city?",
                            answer: "You must provide proof of your *current* residence where you stick physically (for the past 1 year). If Aadhaar has an old address, provide a Bank Passbook, Gas Connection, or Rent Agreement for your current address."
                        }
                    ]}
                />

                {/* CTA */}
                <section className="py-16 bg-indigo-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Start Your Application Today</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Avoid confusion and delays. Get professional help for your passport application in Bhilai.
                        </p>
                        <Button size="lg" variant="secondary" className="text-lg px-8 text-indigo-700 font-bold" asChild>
                            <a href="https://wa.me/919406182174?text=Passport appointment enquiry">
                                <Phone className="w-5 h-5 mr-2" /> WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-background py-8 border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto p-4 bg-muted/20 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" /> Important Information
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Rudraksh Safar provides guidance and consultancy for passport application filing and appointment booking. All final decisions, approvals, and rejections are made by the Government of India through authorized Passport Seva authorities. We do not guarantee approval, but we help reduce errors in the application process. We are a private service provider.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default PassportAgentBhilai;
