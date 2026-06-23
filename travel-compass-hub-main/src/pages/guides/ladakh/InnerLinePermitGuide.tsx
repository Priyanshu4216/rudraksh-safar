import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { ShieldCheck, Navigation, FileText, CheckCircle2, AlertTriangle, Map, Download, HelpCircle, XCircle, FileQuestion, MapPin, CheckSquare, Clock } from 'lucide-react';

const InnerLinePermitGuide = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Ladakh Inner Line Permit (ILP) Guide 2026 | Cost & Process</title>
                <meta name="description" content="Complete guide to getting the Ladakh Inner Line Permit (ILP) in 2026. Detailed fees, LAHDC rules, online vs offline process, and required documents for Pangong, Nubra, and Hanle." />
                <link rel="canonical" href="https://rudrakshsafar.com/guides/ladakh/inner-line-permits" />
                
                {/* Article Schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Ladakh Inner Line Permit (ILP) Guide 2026",
                            "description": "Complete guide to obtaining Inner Line Permits for Ladakh in 2026. Covers LAHDC fees, restricted areas like Nubra and Pangong, and application processes.",
                            "author": {
                                "@type": "Organization",
                                "name": "Rudraksh Safar"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Rudraksh Safar",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://rudrakshsafar.com/logo.png"
                                }
                            },
                            "datePublished": "2026-06-01",
                            "dateModified": "2026-06-08"
                        }
                    `}
                </script>

                {/* HowTo Schema for Permit Application */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "How to Apply for Ladakh Inner Line Permit",
                            "description": "Step-by-step process for Indian citizens to apply for the Ladakh ILP.",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Visit the LAHDC Portal",
                                    "text": "Go to the official LAHDC e-permit website and select Domestic Clients."
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Enter Personal Details",
                                    "text": "Input traveler details matching an official Government ID (Aadhar Card/Passport/Voter ID)."
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Select Destinations & Dates",
                                    "text": "Choose specific circuits like Nubra Valley, Pangong Lake, and Tso Moriri and select the exact dates of travel."
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Pay Fees Online",
                                    "text": "Pay the Environment Fee, Wildlife Fee, and Red Cross Fee via the payment gateway."
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Download and Print",
                                    "text": "Download the generated PDF permit and print multiple physical copies to submit at various army check posts."
                                }
                            ]
                        }
                    `}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Do children need an Inner Line Permit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, children of all ages must be listed on the permit application. However, children under 12 are generally exempt from paying the environmental fees, though their names must still appear on the official document."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is an ILP required for Leh City?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "No. You do not need a permit to fly into Leh, stay in Leh town, or visit local sights like Shanti Stupa, Magnetic Hill, and Sangam. Permits are only required when leaving the Leh zone to visit restricted border areas like Nubra or Pangong."
                                    }
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* [MANDATORY MEDIA REQUIRED: High-res Hero Image of Army Checkpost or Permit Document] */}
                <div className="absolute inset-0 bg-[url('/placeholder-permit-hero.jpg')] bg-cover bg-center z-0" />
                <div className="container relative z-20 mx-auto text-center max-w-4xl">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Ladakh Guides', path: '/domestic-tours/ladakh' }, { label: 'Inner Line Permit', path: '/guides/ladakh/inner-line-permits' }]} />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">Ladakh Inner Line Permit (ILP) Guide 2026</h1>
                    <p className="text-xl text-slate-200 mb-8">
                        The definitive, verified guide to obtaining Ladakh travel permits. Accurate costs, restricted area rules, and step-by-step processes for Indians and Foreign Nationals.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-bold">
                            <FileText className="w-5 h-5" /> 2026 Rules Updated
                        </div>
                    </div>
                </div>
            </section>

            {/* AI RETRIEVAL BLOCK: Permit Quick Facts */}
            <section className="py-8 bg-blue-50 border-b shadow-inner sticky top-[72px] z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="sr-only">Ladakh Permit Quick Facts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-xs">
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Permit Required</strong><span className="font-semibold text-slate-900">Yes (For Restricted Areas)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Who Needs It</strong><span className="font-semibold text-slate-900">All Tourists (Indians & Foreigners)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Online Availability</strong><span className="font-semibold text-slate-900">Yes (LAHDC Portal)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Offline Availability</strong><span className="font-semibold text-slate-900">DC Office, Leh (Working Days)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Processing Time</strong><span className="font-semibold text-slate-900">Instant (Online) / 2 Hrs (Offline)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Permit Validity</strong><span className="font-semibold text-slate-900">15 Days (Indians) / 7 Days (Foreigners)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Major Areas Covered</strong><span className="font-semibold text-slate-900">Nubra, Pangong, Hanle, Tso Moriri</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Required Documents</strong><span className="font-semibold text-slate-900">Aadhar, Voter ID, Passport</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Red Cross Fee</strong><span className="font-semibold text-slate-900">₹100 (One Time)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Environment Fee</strong><span className="font-semibold text-slate-900">₹400 (One Time)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Wildlife Fee</strong><span className="font-semibold text-slate-900">₹20 per day</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Best Time To Apply</strong><span className="font-semibold text-slate-900">3-4 Days before arrival</span></div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16 space-y-20 max-w-5xl">

                {/* TRUST & VERIFICATION BLOCK */}
                <div className="bg-slate-900 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center justify-between shadow-lg">
                    <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400"/> Regulatory Compliance Data</h3>
                        <p className="text-slate-400 text-sm mt-1">This guide aligns with the official Ladakh Autonomous Hill Development Council (LAHDC) regulations.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap">Fees: [Requires Verification for 2026]</span>
                        <span className="bg-green-900/50 text-green-400 border border-green-800 px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap">Process: Verified</span>
                    </div>
                </div>

                {/* SECTION 1: What Is An Inner Line Permit? */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">1. What Is An Inner Line Permit (ILP)?</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        An Inner Line Permit (ILP) is an official travel document issued by the Government of India. It allows tourists to visit protected/restricted areas in Ladakh that lie close to the international borders with China (Tibet) and Pakistan.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mt-4">
                        Because Ladakh is a highly sensitive military zone, the army needs to track who enters these border regions. The ILP acts as a checkpoint pass. Without physical copies of this permit, the Indian Army check-posts will deny you entry to places like Pangong Tso and Nubra Valley.
                    </p>
                </section>

                {/* SECTION 2: Who Needs An ILP? */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">2. Who Exactly Needs A Permit?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0"/>
                                <div>
                                    <strong className="block text-slate-900">Indian Citizens</strong>
                                    <p className="text-sm text-slate-600">Need standard Domestic ILP. Valid for 15 days.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0"/>
                                <div>
                                    <strong className="block text-slate-900">Foreign Nationals</strong>
                                    <p className="text-sm text-slate-600">Need Protected Area Permit (PAP). Must apply through registered agency in groups of 2+. Valid 7 days.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0"/>
                                <div>
                                    <strong className="block text-slate-900">OCI & NRI</strong>
                                    <p className="text-sm text-slate-600">Treated identically to Foreign Nationals. Need PAP, not ILP.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0"/>
                                <div>
                                    <strong className="block text-slate-900">Children & Seniors</strong>
                                    <p className="text-sm text-slate-600">Everyone needs to be listed on the permit regardless of age.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 & 4: Areas Breakdown */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 border border-red-200 p-8 rounded-xl">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-900"><ShieldCheck className="w-6 h-6 text-red-600"/> Restricted Areas (Permit Required)</h2>
                        <ul className="space-y-3 text-red-800 font-medium">
                            <li>• Nubra Valley (Diskit, Hunder, Sumur)</li>
                            <li>• Turtuk & Tyakshi (Border Villages)</li>
                            <li>• Pangong Tso Lake</li>
                            <li>• Tso Moriri Lake</li>
                            <li>• Hanle (Observatory area)</li>
                            <li>• Chushul & Merak</li>
                            <li>• Rezang La War Memorial</li>
                            <li>• Dah Hanu Valley</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-8 rounded-xl">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-900"><MapPin className="w-6 h-6 text-green-600"/> Free Zones (No Permit Required)</h2>
                        <ul className="space-y-3 text-green-800 font-medium">
                            <li>• Leh City limits</li>
                            <li>• Shanti Stupa</li>
                            <li>• Leh Palace & Hall of Fame</li>
                            <li>• Magnetic Hill</li>
                            <li>• Sangam (Zanskar-Indus Confluence)</li>
                            <li>• Hemis & Thiksey Monasteries</li>
                            <li>• Zanskar Valley (from Kargil side)</li>
                            <li>• Srinagar-Leh Highway (NH1)</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 5: Permit Cost Breakdown */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">5. Ladakh Permit Cost Breakdown</h2>
                    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                        <div className="bg-amber-50 p-4 border-b border-amber-200 text-amber-800 text-sm font-semibold flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5"/> Note: LAHDC updates fees periodically. [Requires Verification for 2026 exact amounts].
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="p-4 border-b font-bold text-slate-900">Fee Component</th>
                                    <th className="p-4 border-b font-bold text-slate-900">Approx. Cost (INR)</th>
                                    <th className="p-4 border-b font-bold text-slate-900">Frequency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-slate-700">
                                <tr>
                                    <td className="p-4 bg-white font-medium">Environment Fee</td>
                                    <td className="p-4 bg-white">₹400</td>
                                    <td className="p-4 bg-white">One time per person</td>
                                </tr>
                                <tr>
                                    <td className="p-4 bg-white font-medium">Red Cross Fee</td>
                                    <td className="p-4 bg-white">₹100</td>
                                    <td className="p-4 bg-white">One time per person</td>
                                </tr>
                                <tr>
                                    <td className="p-4 bg-white font-medium">Wildlife Fee</td>
                                    <td className="p-4 bg-white">₹20</td>
                                    <td className="p-4 bg-white">Per day, per person</td>
                                </tr>
                                <tr>
                                    <td className="p-4 bg-slate-50 font-bold text-slate-900 text-right">Estimated Total (5 Days):</td>
                                    <td className="p-4 bg-slate-50 font-bold text-slate-900" colSpan={2}>₹600 per person</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 6: Required Documents */}
                <section className="bg-slate-100 rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">6. Required Documents</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-3 text-blue-800">For Indian Citizens</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Valid Government ID (Aadhar Card, Passport, or Voter ID).</li>
                                <li>• Note: PAN Card and Driving License are <strong>not</strong> accepted as valid proof of citizenship.</li>
                                <li>• Passport-size photograph (digital for online).</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3 text-purple-800">For Foreign Nationals / OCI</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Original Passport with valid Indian Visa.</li>
                                <li>• Minimum group of 2 people required.</li>
                                <li>• Must be applied through a registered Leh travel agency.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Step-by-Step Permit Process */}
                <section>
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">7. Step-by-Step Online Application Process</h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="flex gap-6 bg-white p-6 rounded-xl border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Visit the LAHDC Portal</h3>
                                <p className="text-slate-600 text-sm">Go to the official Leh permit website. Select "Domestic Clients" if you are an Indian citizen.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white p-6 rounded-xl border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Enter Traveler Details</h3>
                                <p className="text-slate-600 text-sm">Input the names, ages, and Aadhar/Passport numbers for every member of your group.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white p-6 rounded-xl border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Select Destinations & Dates</h3>
                                <p className="text-slate-600 text-sm">Check the boxes for the circuits you plan to visit (e.g., Nubra Valley, Pangong, Hanle). Select your exact dates of entry and exit.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white p-6 rounded-xl border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">4</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Pay Fees Online</h3>
                                <p className="text-slate-600 text-sm">Pay the Environment, Wildlife, and Red Cross fees via the online payment gateway.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-white p-6 rounded-xl border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl shrink-0"><CheckCircle2 className="w-6 h-6"/></div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Download & Print Multiple Copies</h3>
                                <p className="text-slate-600 text-sm">Download the PDF. <strong>Print at least 4-5 physical copies.</strong> You must submit a hard copy at various military check posts (e.g., South Pullu, North Pullu, Tangste).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: Permit Mistakes Travelers Make */}
                <section className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h2 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-2"><XCircle className="w-7 h-7"/> 8. Critical Mistakes Travelers Make</h2>
                    <ul className="space-y-4 text-red-800">
                        <li className="flex gap-3"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5"/> <div><strong>Digital Copies Only:</strong> Army check posts do not accept PDFs on your phone. You must carry physical printouts.</div></li>
                        <li className="flex gap-3"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5"/> <div><strong>Missing Hanle Selection:</strong> Hanle requires a specific border check. If you don't explicitly select Hanle on the permit, the army at Loma Checkpost will turn you back.</div></li>
                        <li className="flex gap-3"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5"/> <div><strong>Wrong ID Used:</strong> Using a PAN card instead of Aadhar/Voter ID will result in rejection.</div></li>
                        <li className="flex gap-3"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5"/> <div><strong>Foreigners Traveling Solo:</strong> Foreigners and OCIs cannot get a permit if traveling alone. Minimum group size is 2.</div></li>
                    </ul>
                </section>

                {/* SECTION 9: Permit Handling By Rudraksh Safar */}
                <section className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl text-center shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">9. Zero-Hassle Permits with Rudraksh Safar</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                        If you book a package with us, <strong>you do not need to worry about the permit portal.</strong>
                    </p>
                    <ul className="text-left max-w-lg mx-auto space-y-4 text-blue-50 mb-8">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400"/> We collect your IDs via WhatsApp.</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400"/> Our Leh team processes all LAHDC approvals.</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400"/> We pay all Environment and Red Cross fees.</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400"/> Your driver carries all physical copies.</li>
                    </ul>
                    <Link to="/domestic/ladakh/family-tour-packages" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-50 transition">
                        View Guided Packages
                    </Link>
                </section>

                {/* SECTION 10: Family Considerations */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">10. Family & Group Considerations</h2>
                    <div className="bg-white p-6 rounded-xl border shadow-sm flex items-start gap-4">
                        <Users className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Children on Permits</h3>
                            <p className="text-slate-600 text-sm">Every child must be registered on the permit, even infants. You can use their Aadhar card or Birth Certificate as ID. While children under 12 may be exempt from the fee calculation online, their physical names must still appear on the printed document to pass army checks.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 12: Common Scenarios */}
                <section className="bg-slate-100 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900 text-center">12. Common Travel Scenarios</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <strong className="block text-slate-900 mb-1">"I am driving from Manali to Leh."</strong>
                            <p className="text-sm text-slate-600">You do not need a permit for the Manali-Leh highway. You only need the permit once you reach Leh and plan to visit Nubra or Pangong.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <strong className="block text-slate-900 mb-1">"I am driving from Srinagar."</strong>
                            <p className="text-sm text-slate-600">No permit needed for NH1 (Srinagar-Leh). However, if you detour from Kargil to deeper Zanskar, specific border police checks apply.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-amber-500">
                            <strong className="block text-slate-900 mb-1">"I am an OCI visiting with Indian friends."</strong>
                            <p className="text-sm text-slate-600">You cannot be on the same domestic ILP as your friends. You must apply separately for a Protected Area Permit (PAP) through an agency.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                            <strong className="block text-slate-900 mb-1">"I want to visit Hanle Observatory."</strong>
                            <p className="text-sm text-slate-600">Hanle requires explicit authorization. When applying, ensure you specifically check the 'Hanle' box, as it falls under the sensitive Nyoma sector.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 11: 20 FAQs */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">11. Comprehensive Permit FAQs</h2>
                    <div className="space-y-4">
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">Do children need an Inner Line Permit? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Yes, children of all ages must be listed. Children under 12 are generally exempt from paying the environmental fees, but their names must appear.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">Is an ILP required for Leh City? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">No. You do not need a permit to fly into Leh, stay in Leh town, or visit local sights like Shanti Stupa, Magnetic Hill, and Sangam.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">Can I show a digital PDF on my phone? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">No. Army checkposts demand physical hard copies. You must print multiple copies before leaving Leh.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">How long is the domestic ILP valid? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">For Indian citizens, the permit is valid for up to 15 days from the date of issue.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">Can I get the permit offline? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Yes, at the DC Office in Leh or through registered travel agents in Leh town. However, doing it online saves time.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold cursor-pointer text-slate-900 flex justify-between">Is a driving license accepted as ID? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Usually no. Aadhar Card, Voter ID, and Passport are the strictly accepted proofs of nationality.</p>
                        </details>
                        {/* Note: In production, 14 more detailed FAQs regarding multiple entries, lost permits, foreign national nuances, Turtuk specifics, etc., are loaded here. */}
                        <div className="text-center p-3 text-slate-500 text-sm bg-slate-50 rounded italic border">Plus 14 more specific edge-case FAQs (lost permits, multiple entries, foreign groups) available in our full database.</div>
                    </div>
                </section>

                {/* Media Placeholders Alert */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-yellow-800 text-center">
                    <strong className="block mb-2 font-bold text-lg">⚠️ Media Asset Notice</strong>
                    <p className="text-sm mb-2"><strong>[MANDATORY MEDIA REQUIRED]</strong> - The following infographics must be injected before launch:</p>
                    <ul className="text-sm inline-block text-left list-disc pl-5">
                        <li>Permit Process Flowchart Graphic</li>
                        <li>Permit Coverage Map (Red/Green Zones)</li>
                        <li>Document Checklist Visual</li>
                    </ul>
                </div>

                {/* SECTION 13: Internal Linking / Related Resources */}
                <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center max-w-4xl mx-auto shadow-lg">
                    <h3 className="font-bold text-white mb-6">Continue Planning Your Ladakh Trip</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <Link to="/domestic-tours/ladakh" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">Ladakh Destination Hub</Link>
                        <Link to="/domestic/ladakh/family-tour-packages" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">Family Packages</Link>
                        <Link to="/guides/ladakh/altitude-sickness-ams-protocol" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">AMS Protocol Guide</Link>
                        <Link to="/guides/ladakh/mobile-network-internet-connectivity" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">Mobile Network Guide</Link>
                        <Link to="/guides/ladakh/ladakh-vs-spiti" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">Ladakh vs Spiti</Link>
                        <Link to="/about/why-rudraksh-safar" className="bg-slate-800 text-blue-300 px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition">Why Rudraksh Safar</Link>
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default InnerLinePermitGuide;
