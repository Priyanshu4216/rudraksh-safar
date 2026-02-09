import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DubaiVisaGuide = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Visa for Indians (2026): Price, US Visa Rules & Rejections</title>
                <meta name="description" content="Complete guide to Dubai Visa for Indian citizens. Visa on Arrival (for US Visa holders), 30/60 day E-Visa costs, and photo requirements. Apply with Rudraksh Safar." />
                <meta name="keywords" content="dubai visa for indians price, dubai visa on arrival for indian with us visa, dubai visa rejection reasons 2026, uae visa cost" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-visa-for-indians" />
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
                <div className="bg-blue-900 text-white py-16 px-4">
                    <div className="container max-w-4xl text-center space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold font-serif">Dubai Visa Guide for Indians 🇮🇳</h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Navigate the rules, avoid rejections, and understand the "Visa on Arrival" loophole.
                        </p>
                    </div>
                </div>

                <div className="container max-w-4xl mx-auto px-4 -mt-8 relative z-10 space-y-12">

                    {/* 1. VISA ON ARRIVAL (The Loophole) */}
                    <Card className="shadow-lg border-l-4 border-l-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <ShieldCheck className="w-6 h-6 text-green-600" /> Visa on Arrival (The Loophole)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Did you know? Many Indians <strong>DO NOT need to apply</strong> for a visa beforehand.
                            </p>
                            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100">
                                <h4 className="font-bold text-green-800 dark:text-green-400 mb-2">You are eligible for Visa on Arrival if:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-green-800/80 dark:text-green-300">
                                    <li>You have a valid <strong>US Visa</strong> (Tourist/Student/H1B) valid for min 6 months.</li>
                                    <li>You have a <strong>Green Card</strong> (US Permanent Resident).</li>
                                    <li>You have a residence visa from <strong>UK / EU</strong>.</li>
                                </ul>
                            </div>
                            <p className="text-sm font-medium">
                                <span className="text-muted-foreground">Cost:</span> AED 120 (approx ₹2,800) paid at Dubai Airport immigration.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 2. E-VISA TYPES & COST */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">UAE E-Visa Types & Costs (2026)</h2>
                        <div className="border rounded-lg overflow-hidden bg-white dark:bg-slate-900">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-100 dark:bg-slate-800">
                                        <TableHead>Visa Type</TableHead>
                                        <TableHead>Validity</TableHead>
                                        <TableHead>Approx Cost (INR)</TableHead>
                                        <TableHead>Best For</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-bold">48-Hour Transit</TableCell>
                                        <TableCell>48 Hours</TableCell>
                                        <TableCell>₹1,800</TableCell>
                                        <TableCell>Stopovers</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">30 Days Tourist</TableCell>
                                        <TableCell>30 Days (Single Entry)</TableCell>
                                        <TableCell>₹6,200</TableCell>
                                        <TableCell>Standard Holidays</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">60 Days Tourist</TableCell>
                                        <TableCell>60 Days (Single Entry)</TableCell>
                                        <TableCell>₹10,500</TableCell>
                                        <TableCell>Looking for Jobs / Long Stay</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Multiple Entry</TableCell>
                                        <TableCell>30/60 Days</TableCell>
                                        <TableCell>₹14,000+</TableCell>
                                        <TableCell>Business / Freelancers</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* 3. DOCUMENTS REQUIRED */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-blue-600" /> Documents Needed
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Passport Front & Back Scan (Color)",
                                    "Passport Photo (White Background, Matt Finish)",
                                    "PAN Card (For Payment/LRS compliance)",
                                    "Confirmed Return Flight Tickets (Recommended)",
                                    "Hotel Booking Vouchers (Optional but safe)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100">
                            <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Top Rejection Reasons
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-orange-800/80 dark:text-orange-300">
                                <li>Blurred or cropped passport scans.</li>
                                <li>Name on passport doesn't match name on application (spelling errors).</li>
                                <li>Previous overstay in UAE.</li>
                                <li><strong>Unclear profession:</strong> 'Unemployed' or 'Housewife' for young solo female travelers often triggers deeper scrutiny.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. CTA */}
                    <div className="bg-slate-900 text-white rounded-xl p-8 text-center space-y-6">
                        <h2 className="text-2xl font-bold">Don't risk a rejection.</h2>
                        <p className="text-slate-300">
                            Our team checks your documents manually before submission. 99.8% Approval Rate.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full md:w-auto" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I need help with Dubai Visa application." target="_blank" rel="noopener noreferrer">
                                    Apply via WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiVisaGuide;
