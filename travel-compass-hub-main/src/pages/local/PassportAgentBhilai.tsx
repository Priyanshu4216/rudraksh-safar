import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, CheckCircle2, Clock, Shield, Phone, MapPin, AlertCircle, Info, HelpCircle, Calendar, UserCheck, ChevronRight, Siren, FileCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import FAQsSection from '@/components/FAQsSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BookingCTA from '@/components/BookingCTA';
import TLDRSection from '@/components/TLDRSection';
import RelatedServices from '@/components/RelatedServices';

const PassportAgentBhilai = () => {
    const documents = [
        { type: "Address Proof", list: "Aadhaar Card, Voter ID, Electricity Bill, or Bank Passbook (with photo)" },
        { type: "Date of Birth Proof", list: "Birth Certificate, Pan Card, or School Leaving/Transfer Certificate" },
        { type: "ECR / Non-ECR", list: "10th Marksheet (for Non-ECR/ECNR category)" },
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
                <title>Passport Agent in Bhilai (PSK Raipur Guide) | New & Tatkal Services</title>
                <meta name="description" content="Expert Passport Consultant in Bhilai. Guide for PSK Raipur appointments, Durg Police Verification, and Tatkal applications. We handle complex cases like Name Change & Lost Passports." />
                <meta name="keywords" content="passport agent bhilai, passport office raipur appointment, durg police verification passport, tatkal passport fees chhattisgarh, passport renewal agent near me" />
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

            <main className="min-h-screen bg-slate-50">
                {/* HERO SECTION */}
                <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974')] bg-cover bg-center"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Passport Agent', path: '/passport-agent-bhilai' }]} />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-blue-800 border border-blue-700 px-4 py-1.5 rounded-full mb-6">
                            <BookOpen className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-medium">Bhilai's Trusted Passport Experts</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Passport Services Simplified <br /><span className="text-blue-300">Fast. Accurate. Stress-Free.</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            From online filing to PSK Raipur appointments, we guide you at every step. Avoid rejection due to document errors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold h-14 px-8 text-lg" asChild>
                                <a href="https://wa.me/919406182174?text=Passport appointment enquiry">
                                    <Phone className="w-5 h-5 mr-2" /> Book Appointment
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="py-2">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
                                <FileCheck className="w-5 h-5 text-green-600" /> 100% Error Free
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">We double-check spellings & dates.</p>
                        </div>
                        <div className="py-2">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
                                <Clock className="w-5 h-5 text-orange-600" /> Tatkal Experts
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">Passport in 3-7 days.</p>
                        </div>
                        <div className="py-2">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
                                <Siren className="w-5 h-5 text-blue-600" /> Police Verification
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">Guidance for Durg/Bhilai Thanas.</p>
                        </div>
                    </div>
                </div>

                {/* Restored TLDR Section */}
                <div className="container mx-auto px-4 mt-8">
                    <TLDRSection
                        title="Quick Answer: Passport Services"
                        summary="A passport agent helps individuals in Bhilai, Durg & Raipur navigate the passport application, renewal, and documentation process. Rudraksh Safar assists with form filling, document verification, appointment scheduling at PSK Raipur (Magneto Mall / Ambuja Mall), and clarifying queries to avoid rejection. Ideal for First-time applicants, Senior Citizens, and Urgent Tatkal cases."
                        areasServed={["Bhilai", "Durg", "Raipur", "Chhattisgarh"]}
                    />
                </div>

                {/* THE REALITY CHECK SECTION */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10">Why Hire an Agent for an Online Process?</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <Card className="border-red-100 bg-red-50/50">
                                <CardHeader>
                                    <CardTitle className="text-red-800 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> The DIY Risks</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> One spelling mistake in the form = <strong>Application Rejected</strong> at PSK.</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> Choosing ECR instead of Non-ECR = <strong>Emigration Check problems</strong> later.</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> Missing a single supportive doc (like marriage certificate) = <strong>Sent back home</strong> from Raipur.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-green-100 bg-green-50/50">
                                <CardHeader>
                                    <CardTitle className="text-green-800 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> The Rudraksh Advantage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" /> <strong>Pre-Audit:</strong> We verify your Aadhaar, Pan, and Marksheets match perfectly.</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" /> <strong>Slot Monitoring:</strong> We check PSK Raipur slots daily to get you the earliest date.</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" /> <strong>Annexure Guidance:</strong> We draft the required Affidavits for complex cases.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* PSK RAIPUR GUIDE (AUTHORITY CONTENT) */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold">PSK Raipur Survival Guide</h2>
                                <p className="text-slate-500">Know exactly what happens on your appointment day.</p>
                            </div>
                            <Badge variant="outline" className="hidden md:flex gap-1"><MapPin className="w-3 h-3" /> Magneto / Ambuja Mall</Badge>
                        </div>

                        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-10 space-y-10">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                                <h4 className="font-bold text-lg text-indigo-900">Step 1: Entry & Token (15 Mins early)</h4>
                                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                                    Reach the PSK (usually Magneto Mall, 3rd Floor) 15 mins before your slot. Show your SMS/Printout to the guard.
                                    <strong> Warning:</strong> Laptops/iPads are often not allowed inside.
                                </p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                                <h4 className="font-bold text-lg text-indigo-900">Step 2: Counter A (TCS Staff)</h4>
                                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                                    Document scanning and Photo taking happens here. Smile! This photo will be on your passport for 10 years. You will pay any SMS fees here (Cash/Card).
                                </p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                                <h4 className="font-bold text-lg text-indigo-900">Step 3: Counter B (Verification Officer)</h4>
                                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                                    Govt officer verifies your originals. They check if details match your application 100%. Stay confident.
                                </p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                                <h4 className="font-bold text-lg text-indigo-900">Step 4: Counter C (Granting Officer)</h4>
                                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                                    Final approval. They might ask basic questions ("Where do you work?", "Why are you traveling?"). Once they say "Granted", you are done!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TATKAL VS NORMAL SECTION */}
                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10">Fresh Passport: Normal vs Tatkal</h2>
                        <Card className="max-w-4xl mx-auto overflow-hidden">
                            <Table>
                                <TableHeader className="bg-slate-100">
                                    <TableRow>
                                        <TableHead className="w-[150px] font-bold">Feature</TableHead>
                                        <TableHead className="font-bold text-blue-800">Normal Application</TableHead>
                                        <TableHead className="font-bold text-orange-800">Tatkal Application</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Govt Fee</TableCell>
                                        <TableCell>₹1,500</TableCell>
                                        <TableCell>₹3,500</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Timeline</TableCell>
                                        <TableCell>25-45 Days</TableCell>
                                        <TableCell className="font-bold text-green-600">3-7 Days</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Verification</TableCell>
                                        <TableCell>Police Verification <span className="underline">Before</span> Issue</TableCell>
                                        <TableCell>Verification <span className="underline">After</span> Issue</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Documents</TableCell>
                                        <TableCell>Basic (Aadhaar + Pan)</TableCell>
                                        <TableCell>Strict (Need 3 specific docs from Annexure list)</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-center text-sm text-slate-500 mt-4 italic">
                            * Our consultation fee is additional to the Govt fees shown above.
                        </p>
                    </div>
                </section>

                {/* Docs, Timeline & Cost (Restored from Original) */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Documents */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">What documents are required for a passport?</h3>
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
                                <h3 className="text-2xl font-bold mb-6">How long does it take?</h3>
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

                {/* POLICE VERIFICATION GUIDE */}
                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                                <Siren className="w-6 h-6" /> Police Verification in Bhilai/Durg
                            </h2>
                            <p className="text-orange-900/80 mb-6 max-w-3xl">
                                This is where most people get stuck. The file moves from SP Office Durg to your local Thana (e.g., Supela, Bhatti, Durg Kotwali).
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold mb-2">Documents Ready?</h4>
                                    <ul className="text-sm list-disc ml-4 space-y-1 text-slate-600">
                                        <li>2 Passport Size Photos</li>
                                        <li>Original Aadhaar + Pan</li>
                                        <li>Two Neighbors as Witnesses (with their Aadhaar)</li>
                                        <li>Patwari Attested Address proofs (sometimes asked)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold mb-2">Our Advice</h4>
                                    <p className="text-sm text-slate-600">
                                        Be polite. Do not offer bribes. If there is a delay at the Thana level, let us know – we can guide you on how to follow up with the Durg SP Office.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    faqs={[
                        { question: "Can I apply if my Aadhaar has my old address?", answer: "Passport must have your CURRENT address. If Aadhaar is old, you need another proof like Passbook (with photo & current address), Gas Bill, or Rent Agreement. We will check your docs and advise the best combo." },
                        { question: "What is ECR vs Non-ECR?", answer: "Non-ECR means you don't need clearance to work abroad. If you have passed Class 10th, you get Non-ECR. You MUST bring your 10th Marksheet to get this. Otherwise, you get an ECR passport (limiting for jobs)." },
                        { question: "I lost my passport. What now?", answer: "This is a complex case. You need to file an FIR (Lost Report) at your local Thana immediately. Then apply for 'Re-issue' with Lost Passport Affidavit. We handle this entire documentation for you." },
                        { question: "Can I walk into PSK without appointment?", answer: "No. Walk-ins are strictly not allowed. You must have a pre-booked appointment slip with a specific batch number and time." },
                        { question: "Do you help with children's passports?", answer: "Yes, for minors (below 18), both parents' documents are needed. If one parent is abroad, specific declarations are required. We guide you on the complete Annexure file for minors." }
                    ]}
                />

                <RelatedServices mode="booking" />

                <BookingCTA
                    text="Fix Your Passport Appointment"
                    subText="Don't risk rejection. Get expert help for ₹500 only."
                />

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
