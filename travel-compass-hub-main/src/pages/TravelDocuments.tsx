import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, AlertTriangle, HelpCircle, CheckCircle2, ChevronRight, Globe, FileText } from 'lucide-react';

const TravelDocuments = () => {
    return (
        <>
            <Helmet>
                <title>Travel Documents Checklist & Visa Guide | Rudraksh Safar</title>
                <meta name="description" content="Confused about travel documents? Get the complete list of documents required for international travel, visa rejection reasons, and passport validity rules." />
                <meta name="keywords" content="documents required for tour booking, passport validity for international travel, visa rejection reasons, what documents travel agent needs, travel checklist verification" />
                <link rel="canonical" href="https://rudrakshsafar.com/travel-documents" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="py-20 bg-blue-50 dark:bg-blue-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <FileCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Travel Documents <span className="text-blue-600">Simplified</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Don't let paperwork ruin your holiday. Here is exactly what you need for a smooth journey.
                        </p>
                    </div>
                </section>

                {/* The "Golden Rule" - Passport Validity */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center">
                            <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                                <AlertTriangle className="w-8 h-8 text-amber-600" />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-400 mb-2">The 6-Month Passport Rule</h2>
                                <p className="text-amber-900/80 dark:text-amber-200/80">
                                    <strong>Crucial:</strong> For almost all international travel, your passport must be valid for at least <strong>6 months beyond your date of return</strong>. If your passport expires in less than 6 months, airlines will deny you boarding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documents Checklist */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Universal Travel Documents Checklist</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-primary" /> International
                                    </h3>
                                    <ul className="space-y-3">
                                        {["Passport (6+ months validity)", "Visa (E-visa or Sticker)", "Return Flight Tickets", "Hotel Booking Vouchers", "Travel Insurance Policy", "Forex / International Card"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-orange-500" /> Domestic (India)
                                    </h3>
                                    <ul className="space-y-3">
                                        {["Original Government ID (Aadhar/Voter ID)", "Flight/Train Tickets", "Hotel Confirmation", "Emergency Contact Numbers"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow bg-muted/50">
                                <CardContent className="p-6 flex flex-col justify-center h-full">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-purple-500" /> Need Help?
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        Not sure if your documents are correct? Send us a photo on WhatsApp and we will verify them for free.
                                    </p>
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href="https://wa.me/919406182174?text=Can you check my travel documents?">Verify via WhatsApp</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Visa Rejection Section */}
                <section className="py-20 bg-red-50 dark:bg-red-950/10">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Visas Get Rejected?</h2>
                            <p className="text-muted-foreground">Avoid these 5 common mistakes that lead to visa refusal.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: "Insufficient Funds", desc: "Bank statement doesn't show enough balance as per country requirement." },
                                { title: "Unclear Travel Purpose", desc: "Itinerary is vague or hotel bookings are cancellable/fake." },
                                { title: "Damaged Passport", desc: "Torn pages or water damage can lead to instant rejection." },
                                { title: "Photo Mismatch", desc: "Photo spec (white background, size) not followed strictly." },
                                { title: "Previous Overstay", desc: "Hiding past travel history or visa rejections." }
                            ].map((reason, idx) => (
                                <div key={idx} className="bg-background p-4 rounded-xl border flex gap-4 items-start">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full shrink-0 mt-1">
                                        <XCircleIcon className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{reason.title}</h3>
                                        <p className="text-muted-foreground">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-8">Detailed Guides</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="outline" size="lg" asChild className="h-auto py-6 px-8 flex flex-col gap-1">
                                <Link to="/visa-guide">
                                    <span className="font-bold text-lg">Visa Guide</span>
                                    <span className="text-xs font-normal text-muted-foreground">Types & Process</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="h-auto py-6 px-8 flex flex-col gap-1">
                                <Link to="/passport-guide">
                                    <span className="font-bold text-lg">Passport Guide</span>
                                    <span className="text-xs font-normal text-muted-foreground">Application & Renewal</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="h-auto py-6 px-8 flex flex-col gap-1">
                                <Link to="/visa-free-countries">
                                    <span className="font-bold text-lg">Visa Free Countries</span>
                                    <span className="text-xs font-normal text-muted-foreground">For Indian Citizens</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

// Helper Icon
const XCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
);

export default TravelDocuments;
