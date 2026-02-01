import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, CheckCircle, Clock, Shield, Phone, MapPin } from 'lucide-react';
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
        { type: "Address Proof", list: "Aadhaar Card, Voter ID, Electricity Bill, or Bank Passbook" },
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

    const faqs = [
        { question: "How much time does a New Passport take?", answer: "Normal scheme takes 20-30 days (including police verification). Tatkal scheme takes 3-7 days (verification happens post-dispatch)." },
        { question: "Do you guarantee Passport approval?", answer: "Approval depends on the Ministry of External Affairs. However, our expertise ensures your application is error-free, which maximizes approval chances." },
        { question: "What is the difference between ECR and Non-ECR?", answer: "If you have passed 10th standard, you get Non-ECR (Emigration Check Not Required), which allows easier travel for jobs abroad. We ensure this status is correctly marked." },
        { question: "My address in Aadhaar is different from current address. What to do?", answer: "You need to provide proof for your *current* residence. We can help you identify valid address proofs like a Bank Passbook with photo or specific utility bills." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar - Passport Agent Bhilai",
        "intro": "Professional Passport consultancy for New, Re-issue, and Tatkal passports in Bhilai.",
        "telephone": "+919406182174",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "postalCode": "490021",
            "addressCountry": "IN"
        },
        "priceRange": "₹"
    };

    return (
        <>
            <Helmet>
                <title>Passport Agent in Bhilai | New Passport & Renewal | PSK Raipur Guide</title>
                <meta name="description" content="Expert Passport Agent in Bhilai-Durg. Assistance for New Passport, Renewal, Name Change, and Tatkal Application. Guide for Raipur PSK appointment and police verification." />
                <meta name="keywords" content="passport agent bhilai, passport consultant durg, passport renewal agent bhilai, tatkal passport bhilai, psk raipur appointment agent" />
                <link rel="canonical" href="https://rudrakshsafar.com/passport-agent-bhilai" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-full mb-6">
                                <BookOpen className="w-4 h-4" />
                                <span className="text-sm font-medium">Passport Consultancy Services</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Passport Application <span className="text-indigo-600">Made Simple</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Don't let a small form error reject your passport. We guide you through Documentation, PSK Appointment, and Police Verification.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                                    <a href="https://wa.me/919406182174?text=I need passport assistance" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Book Consultation
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">How We Help You</h2>
                        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                            {steps.map((step, index) => (
                                <div key={index} className="relative text-center">
                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg border border-indigo-200">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Choose Rudraksh for Passport Services?</h2>
                            <p className="text-muted-foreground">We don't just fill forms; we ensure your application gets approved.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="hover:shadow-lg transition-all border-indigo-100 dark:border-indigo-900">
                                <CardHeader>
                                    <CheckCircle className="w-10 h-10 text-indigo-600 mb-2" />
                                    <CardTitle>Zero Rejection Policy</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We pre-verify every single document before submission. 99% of our applications clear in the first go without queries.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-indigo-100 dark:border-indigo-900">
                                <CardHeader>
                                    <Clock className="w-10 h-10 text-indigo-600 mb-2" />
                                    <CardTitle>Fast-Track Appointments</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Struggling to find a date at PSK Raipur? We actively monitor slots to get you the earliest possible appointment.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all border-indigo-100 dark:border-indigo-900">
                                <CardHeader>
                                    <Shield className="w-10 h-10 text-indigo-600 mb-2" />
                                    <CardTitle>Police Verification Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We guide you on how to handle the police verification visit and what documents to show at the Thana.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Documents Table */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Required Documents</h2>
                        <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-indigo-50 dark:bg-indigo-950/20">
                                        <TableHead className="font-bold text-foreground">Document Type</TableHead>
                                        <TableHead className="font-bold text-foreground">Accepted Proofs</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {documents.map((doc, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{doc.type}</TableCell>
                                            <TableCell>{doc.list}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            *Note: Original documents must be carried to the Passport Seva Kendra (PSK).
                        </p>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    title="Frequently Asked Questions on Passports"
                    description="Clear answers to your doubts about New Passports, Renewals, and Tatkaal applications."
                    faqs={[
                        {
                            question: "How to apply for passport in Bhilai?",
                            answer: "To apply for a passport in Bhilai: 1. Visit Rudraksh Safar office with documents. 2. We verify details and fill the online form. 3. We book your appointment at PSK Raipur. 4. You visit PSK for biometrics. 5. Police verification completes the process."
                        },
                        {
                            question: "What documents are needed for a fresh passport?",
                            answer: "For a fresh passport, you strictly need 3 types of proof: 1. Address Proof (Aadhaar, Voter ID, Bank Passbook), 2. Date of Birth Proof (Birth Certificate or Pan Card/Aadhaar/School Certificate), and 3. Non-ECR Proof (10th Marksheet) if you are educated."
                        },
                        {
                            question: "How do I book an appointment at PSK Raipur?",
                            answer: "Appointments at PSK Raipur (Magneto/Ambuja Mall) are booked online after paying the government fee. We handle this entire process for you—finding the earliest available slot, paying the fee securely, and giving you the appointment receipt."
                        },
                        {
                            question: "What is the difference between Normal and Tatkaal passport?",
                            answer: "Processing time! Normal passports take 20-30 days as police verification happens *before* dispatch. Tatkaal passports are dispatched within 3-5 days, and police verification happens *after* you receive the booklet. Tatkaal has higher fees and requires specific verification documents."
                        },
                        {
                            question: "How long does it take to get a passport in Bhilai?",
                            answer: "In the Normal scheme, you can expect your passport in about 25-30 days from the appointment date, depending on how fast the local police (Thana) completes verification. Tatkaal applications usually arrive within a week."
                        },
                        {
                            question: "Do you help with police verification?",
                            answer: "We guide you on the process. When the file reaches your local Thana, you will be called. We tell you exactly which documents to carry (originals + copies) and how to answer questions to ensure a positive report."
                        },
                        {
                            question: "Can I renew my passport before it expires?",
                            answer: "Yes! You can apply for renewal (re-issue) up to 1 year before the expiry date. We recommend applying at least 6 months before expiry to avoid travel issues, as many countries require 6 months validity for visas."
                        },
                        {
                            question: "My passport is damaged, what should I do?",
                            answer: "A damaged passport is not valid for travel. You must apply for a 'Re-issue' under the 'Damaged' category immediately. The process is similar to renewal, but you might need an affidavit explaining the damage."
                        },
                        {
                            question: "Do you handle passport for minors (children)?",
                            answer: "Yes. For minors, parent's passports are crucial documents. The process usually doesn't require police verification if parents have valid passports. We specialize in handling minor applications to ensure smooth processing."
                        },
                        {
                            question: "What if my address in Aadhar is different from current address?",
                            answer: "You must apply with your *current* residential address where police can verify you. If your Aadhaar has an old address, you can use a valid Rent Agreement, Bank Passbook, or Gas Connection bill as current address proof. We help you identify the best accepted document."
                        },
                        {
                            question: "Can I track my passport application status?",
                            answer: "Yes. Once your application is submitted, we provide you with a File Number. You can use this to track exactly where your passport is—whether it's at the PSK, with Police, or Printed and Dispatched."
                        },
                    ]}
                />

                {/* CTA */}
                <section className="py-16 bg-indigo-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Apply for your Passport Today</h2>
                        <p className="text-lg opacity-90 mb-8">Avoid rejections. Get it right the first time with our expert help.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8 text-indigo-700" asChild>
                            <a href="https://wa.me/919406182174?text=Passport appointment enquiry">
                                <Phone className="w-5 h-5 mr-2" /> Start Application
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Legal Disclaimer */}
                <section className="bg-background py-6 border-t">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto opacity-70">
                            <p className="text-xs text-muted-foreground text-center">
                                <strong>Disclaimer:</strong> We are a private consultancy service assisting with passport applications. We are not affiliated with the Ministry of External Affairs. Passport issuance is at the sole discretion of the Government of India.
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
