import { registrationData } from '@/data/chardham/registration-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    Smartphone, Monitor, Map as MapIcon, QrCode, FileCheck, ShieldCheck, AlertTriangle,
    CheckCircle2, Globe, ExternalLink
} from 'lucide-react';

const CharDhamRegistration = () => {
    const { meta, hero, whyRegister, methods, documents, faqs } = registrationData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-registration-process" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Char Dham Registration"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-blue-600 mb-4 hover:bg-blue-700 border-none text-white px-4 py-1">
                            Official Process Guide
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]" asChild>
                            <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener noreferrer">
                                Visit Official Portal <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* WHY REGISTER? */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-border">
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">{whyRegister.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {whyRegister.reasons.map((reason, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="mx-auto bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                        <reason.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                                    <p className="text-sm text-muted-foreground">{reason.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* HOW TO REGISTER (METHODS) */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">3 Ways to Register</h2>
                        <div className="space-y-12">
                            {methods.map((method, idx) => (
                                <div key={idx} className={`bg-card border ${method.recommended ? 'border-green-500 ring-1 ring-green-100' : 'border-border'} rounded-2xl p-6 md:p-8`}>
                                    <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-6">
                                        <div>
                                            {method.recommended && <Badge className="bg-green-600 mb-2">Recommended</Badge>}
                                            <h3 className="text-2xl font-bold">{method.title}</h3>
                                        </div>
                                        <div className="flex gap-2 text-sm">
                                            {method.pros.map((pro, i) => (
                                                <Badge key={i} variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                                                    <CheckCircle2 className="h-3 w-3 mr-1" /> {pro}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-4 gap-6">
                                        {method.steps.map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-foreground font-bold mb-3 border border-border">
                                                    {i + 1}
                                                </div>
                                                <h4 className="font-semibold mb-1">{step.title}</h4>
                                                <p className="text-xs text-muted-foreground">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DOCUMENTS REQUIRED */}
                    <section className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileCheck className="h-6 w-6 text-blue-600" /> Required Documents
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {documents.map((doc, i) => (
                                <div key={i} className="bg-white dark:bg-blue-950/40 p-4 rounded-xl border border-blue-200 dark:border-blue-900 flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                                    <span className="font-medium text-sm">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQs */}
                    
                    <section className="mb-12">
                        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
                    </section>

                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">Need help with registration? We include it in our package.</p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Book Package & Get Free Registration</Link>
                        </Button>
                    </div>

                </div>
            </main>
            
            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Why is Char Dham Yatra Registration Mandatory?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The **Char Dham Yatra Registration**, also widely known as the Yatra E-Pass or Photo Registration, is a mandatory governmental protocol enforced by the Uttarakhand Tourism Development Board. Following the tragic 2013 floods, the administration implemented strict tracking systems to effectively manage crowd capacities, ensure public safety, and quickly identify pilgrims during natural emergencies or medical evacuations.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Without a valid Yatra Registration document (either digital or printed), you will be denied entry at the physical checkpoints erected near Barkot, Uttarkashi, Sonprayag (for Kedarnath), and Joshimath (for Badrinath). Moreover, booking helicopter tickets to Kedarnath requires validating your Registration ID.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">How to Register for Char Dham Yatra 2026?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The government provides three highly accessible methods for pilgrims. At Rudraksh Safar, we facilitate this entirely for users who book packages with us. However, if you are registering independently, here are the steps:
                        </p>
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">1. Through the Official Web Portal</h3>
                                <p className="text-muted-foreground">Visit the official Uttarakhand Tourist Care website (registrationandtouristcare.uk.gov.in). Create an account using your mobile number, fill in passenger details, upload a government-approved ID (Aadhar Card/Voter ID), and select the respective shrine travel dates. Once verified, download the PDF Yatri pass.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-green-600 mb-2">2. Through the "Tourist Care Uttarakhand" Mobile App</h3>
                                <p className="text-muted-foreground">Available on Android and iOS. The app allows users to simply scan their Aadhar card, auto-fill the forms, and store the digital QR-coded pass locally on their smartphone. This is highly recommended as internet connectivity can be sparse in the upper Himalayas.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-purple-600 mb-2">3. Via WhatsApp Automated Bot</h3>
                                <p className="text-muted-foreground">The government introduced a WhatsApp bot. Save the number +91-8394833833, send "Yatra", and interact with the prompts. It will ask for details and issue the registration directly to your chat inbox.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">4. Offline Verification Centers (Physical)</h3>
                                <p className="text-muted-foreground">If digital access fails, you can physically register by showing your original ID proof at centers situated in Haridwar (Rahi Hotel), Rishikesh (ISBT), Barkot, or Sonprayag. Note: Relying on offline centers can result in hours of waiting queues during peak season.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Essential Documents Needed</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>Primary ID Proof:</strong> Aadhar Card, Voter ID Card, PAN Card, Driving License, or Passport.</li>
                            <li><strong>Recent Photograph:</strong> A passport-size photo (soft copy for digital registration).</li>
                            <li><strong>Medical Certificate:</strong> While not strictly mandatory for registration, travelers above 50 must fill out health declarations, particularly screening for heart and blood pressure anomalies.</li>
                        </ul>
                    </div>
                

                    <div className="mt-12 border-t pt-12 border-border/50">
                        <h2 className="text-3xl font-bold mb-4">Step-by-Step Registration & Common Mistakes</h2>
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-foreground mb-3">The Registration Process Workflow</h3>
                            <ol className="list-decimal pl-6 space-y-3 text-lg text-muted-foreground">
                                <li><strong>Sign Up:</strong> Create an account on the official Tourist Care Uttarakhand portal using your mobile number and email.</li>
                                <li><strong>Create Yatra Plan:</strong> Add tour type (Char Dham/Do Dham), select tour mode (road/heli), and add exact dates.</li>
                                <li><strong>Add Pilgrims:</strong> Input personal details for every individual in the group. Upload high-res passport photos and Aadhar.</li>
                                <li><strong>Generate Yatra Letter:</strong> Confirm submission and download the unique barcode-enabled Yatra Registration Pass PDF to your phone.</li>
                            </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200">
                                <h3 className="text-xl font-bold text-red-600 mb-3">Top Mistakes to Avoid</h3>
                                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                    <li>Mismatch between Aadhar name and Registration form.</li>
                                    <li>Attempting to book helicopter tickets without a valid Yatri ID.</li>
                                    <li>Waiting until the arrival in Haridwar to register (offline queues are massive).</li>
                                    <li>Booking a non-approved medical certificate format for seniors.</li>
                                </ul>
                            </div>
                            
                            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200">
                                <h3 className="text-xl font-bold text-green-600 mb-3">Helicopter Booking Rules</h3>
                                <p className="text-muted-foreground mb-3">
                                    The IRCTC portal is the <strong>ONLY</strong> authorized agency to sell Kedarnath helicopter tickets.
                                </p>
                                <p className="text-muted-foreground">
                                    Do not fall for black-market scams. A valid Yatra Registration Number is mandated by the IRCTC interface before it allows you to even check seat availability.
                                </p>
                            </div>
                        </div>

                        {/* Conversion Layer */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                            <h3 className="text-3xl font-bold mb-4">Let Us Handle the Red Tape</h3>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Skip the stress of server crashes and registration forms. Book an all-inclusive Char Dham Yatra package and our backend team will secure all your permits, priority Darshan passes, and helicopter tickets.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://wa.me/919406182174?text=CharDham%20Enquiry" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                    Speak to Our Tour Experts
                                </a>
                                <Link to="/chardham-yatra-package" className="bg-white text-orange-600 font-bold border-2 border-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition">
                                    Explore Packages
                                </Link>
                            </div>
                        </div>
                    </div>

</div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamRegistration;
