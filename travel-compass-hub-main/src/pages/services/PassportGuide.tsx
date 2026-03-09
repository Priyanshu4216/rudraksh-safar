import React, { useState, useEffect } from 'react';
import { FileCheck, AlertTriangle, Clock, CheckCircle, XCircle, Info, FileText, Briefcase, Phone, BookOpen, Globe, Shield, Plane, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';

const faqs = [
  {
    question: "Do I need Police Verification for passport renewal?",
    answer: "Yes, Police Verification (PV) is generally mandatory for Indian passport renewals. However, under the Post-Police Verification scheme, a renewed passport may be dispatched before verification if your previous passport was clean, undamaged, and there are no criminal records associated with your file."
  },
  {
    question: "Can I travel to Dubai if my passport expires in 5 months?",
    answer: "Strictly no. Dubai (UAE) immigration mandates a minimum of 6 months validity on your passport from the date of entry. Airlines at Indian airports will deny you a boarding pass if your passport falls even one day short of this 6-month threshold."
  },
  {
    question: "What is the difference between Tatkaal and Normal passport dispatch?",
    answer: "Under the Normal scheme, passport printing and dispatch typically occur within 15-30 days, pending police verification. The Tatkaal scheme significantly accelerates this process, often dispatching the passport within 1-3 working days without awaiting prior police verification, though it costs more."
  },
  {
    question: "My passport has a minor water stain. Will it be rejected for visa stamping?",
    answer: "If the water stain obscures your photograph, the Machine Readable Zone (MRZ) barcode, or any personal core details, the passport is legally void and will be rejected for any visa processing. Even if the stain is on a blank page, foreign border control may exercise their right to deny entry. Apply for immediate reissue."
  },
  {
    question: "Is the ECNR stamp required for international tourist travel?",
    answer: "Emigration Check Not Required (ECNR) status is automatically granted to applicants possessing a 10th-grade matriculation certificate or higher, or those who have stayed abroad for over 3 years. ECNR is vital for Indian passport holders traveling to specific Middle Eastern countries for employment, but tourist visas rarely require ECNR checks."
  },
  {
    question: "How do I correct a mismatched name on my airline ticket vs my passport?",
    answer: "Your airline ticket name must exactly mirror your passport's Given Name and Surname parameters. You cannot legally change your passport name quickly before a flight. You must urgently contact the airline's customer support and submit your passport scan to manually amend the ticket name before check-in closes."
  },
  {
    question: "Does a newborn baby require a separate Indian passport?",
    answer: "Yes, absolutely. India does not endorse children on their parents' passports. Every citizen, heavily including infants and newborns, must possess their own distinct physical passport booklet for any degree of international traversal."
  }
];

const PassportGuide = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="passport" />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Passport Application Guide India 2026 | Rules & Restrictions"
        description="Comprehensive passport application guide India. Learn about issuance timelines, damage rules, ECNR requirements, and why passports are rejected."
        keywords="passport application guide India, indian passport rules 2026, 6-month validity rule, damaged passport reissue, tatkaal passport processing time"
        canonicalUrl="https://rudrakshsafar.com/travel-services/passport-assistance"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-slate-50">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Passport Guide', path: '/travel-services/passport-assistance' }]} />
              <span className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-indigo-100 text-indigo-700 font-bold tracking-wide uppercase text-sm mb-4">
                <FileCheck className="w-4 h-4" />
                Legal Documents Framework
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                Vital <span className="text-indigo-600">Passport Application Guide</span> for India
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A passport is not just a booklet; it is a federal instrument of identity that controls your ability to cross international borders. Securing a flawlessly formatted, undamaged Indian passport is the definitive first step toward any global journey.
              </p>
              <div className="flex justify-center mt-6">
                <LastUpdated />
              </div>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Block */}
          <AnimatedSection delay={100}>
            <div className="bg-white border-l-4 border-indigo-600 rounded-r-2xl shadow-md p-6 lg:p-8 mb-16 max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-indigo-600" /> What is the ultimate passport application guide in India?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                The ultimate passport application guide dictates that Indian citizens must apply online via the official Passport Seva portal, booking appointments at the nearest Passport Seva Kendra (PSK). Valid applications mandate high-resolution address and age proofs, biometric capture during the PSK appointment, subsequent local police verification, and strict adherence to the critical 6-month international travel validity rule.
              </p>
            </div>
          </AnimatedSection>

          {/* Information Table Section */}
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Clock className="w-8 h-8 text-secondary" />
                Passport Application Fee & Processing Timeline Comparison
              </h2>
              <p className="text-slate-600 mb-6 text-lg tracking-wide">
                Understanding the logistical disparities between standard routing protocols and Tatkaal emergency dispatch structures is crucial when facing imminent departure deadlines.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b-2 border-slate-200">
                      <th className="p-4 font-bold rounded-tl-xl w-1/4">Application Route</th>
                      <th className="p-4 font-bold w-1/3">Standard Printing Matrix (Pages)</th>
                      <th className="p-4 font-bold w-1/4">Estimated Dispatch Timeline</th>
                      <th className="p-4 font-bold rounded-tr-xl w-1/6">Verification Tier</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Normal Application</td>
                      <td className="p-4 font-medium">36 Pages / 60 Pages</td>
                      <td className="p-4">15 – 30 Working Days</td>
                      <td className="p-4 text-emerald-600">Pre-Police Verification Mandatory in most cases.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Tatkaal Emergency</td>
                      <td className="p-4 font-medium">36 Pages / 60 Pages</td>
                      <td className="p-4 font-semibold text-red-600">1 – 3 Working Days</td>
                      <td className="p-4">Post-Police Verification. Passport arrives before PV.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Renewal (Expired)</td>
                      <td className="p-4 font-medium">Standard 36/60 reissue</td>
                      <td className="p-4">10 – 20 Working Days</td>
                      <td className="p-4">Usually Post-Police Verification if address unbroken.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Damaged Reissue</td>
                      <td className="p-4 font-medium">Requires comprehensive review</td>
                      <td className="p-4 text-amber-600">Heavy Delays (30+ Days)</td>
                      <td className="p-4">Strict investigation and detailed PV required.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 1: Validity and Visas */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                The Invincible 6-Month Validity Law
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The supreme law of international boundary crossing is the 6-Month Validity Rule. Even if you possess a confirmed <Link to="/travel-services/visa-assistance" className="text-blue-600 font-semibold hover:underline">tourist visa</Link> and non-refundable flights to <Link to="/international-tours/thailand" className="text-blue-600 font-semibold hover:underline">Thailand</Link>, if your Indian passport expires exactly 5 months and 29 days from the moment you scan it at the immigration desk—you will be barred from boarding the aircraft.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Additionally, high-tier sovereign mandates like the Schengen zone enforce complex blank page limits. European consulates universally demand at least two totally blank visa pages inside the booklet to stamp their large sticker visas and subsequent entry/exit seals. If you are a <Link to="/travel-tips" className="text-blue-600 font-semibold hover:underline">frequent traveler</Link> whose 36-page booklet is utterly exhausted of space, you must immediately apply for a "Jumbo" 60-page booklet renewal.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 2: Rejections and Damage */}
          <AnimatedSection delay={250}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-500" />
                Common Passport Rejection & Damage Metrics
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Applying for a fresh passport doesn't guarantee instantaneous issuance. Major bottlenecks occur during PSK Document Verification where residential proof data misaligns with core identity proof. The name structure (First Name vs. Surname) printed on your Aadhaar Card must surgically match the format you submit in the Passport online lattice.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                    <h3 className="font-bold text-red-900 text-xl mb-3">The Damage Clause</h3>
                    <p className="text-red-800 leading-relaxed">
                      A damaged passport fundamentally destroys your travel capabilities. If the lamination peels vertically across your facial biometric photograph or the Machine Readable Zone (MRZ barcode) detaches from the lower rim of the data page, foreign <Link to="/travel-checklist" className="text-red-900 font-semibold hover:underline">airport security checks</Link> will identify the document as critically compromised.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 text-xl mb-3">Police Verification (PV) Failures</h3>
                    <p className="text-slate-700 leading-relaxed">
                      "Adverse" police verification reports instantly halt passport issuance. If an applicant has resided at their current address for less than one fiscal year, they must legally declare their preceding localized addresses across India. Omission of this tracking protocol guarantees rejection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 3: Name Discrepancies */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-amber-500" />
                Navigating Complex Name Discrepancies
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Flight ticketing algorithms demand mathematical precision regarding syntax matching. If an individual is printed as "Rajesh Kumar Sharma" on their passport's Machine Readable architecture, their airline itinerary matrix simply cannot be registered as "R K Sharma." This seemingly minor abbreviation is treated as a high-security discrepancy under global transport laws.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Post-marital name transitions also generate tremendous friction. Women altering their primary surnames must completely reissue their passports, providing formally notarized affidavits or valid wedding certificates. Neglecting this crucial update while <Link to="/international-tours/maldives" className="text-amber-600 font-semibold hover:underline">booking international honeymoons</Link> has resulted in hundreds of denied boarding scenarios annually across Indian departure hubs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={350}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Passport Processing FAQs</h2>
              <FAQsSection faqs={faqs} title="" />
            </div>
          </AnimatedSection>

          {/* Helpful Travel Guides */}
          <AnimatedSection delay={400}>
            <div className="bg-slate-100 rounded-3xl p-8 mb-16 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                Helpful Travel Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/travel-services/visa-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Visa Frameworks <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-checklist" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Pre-Departure Checklist <Briefcase className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-tips" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Immigration Preparation <Globe className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-health" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Medical Evacuation Rules <Shield className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Travel Funds Setup <Map className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/best-time-to-visit" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-indigo-600 border border-slate-100 flex items-center justify-between">
                  Routing Timelines <Plane className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Conversion Layer */}
          <AnimatedSection delay={450}>
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Stamp Your Passport?</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  If your passport boasts a pristine 6-month validity parameter, its time to start plotting. Our destination architects construct luxury and budget timelines across dynamic Asian circuits and European enclaves.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="https://wa.me/919406182174" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                    <Phone className="w-5 h-5" /> Travel Counsel
                  </a>
                  <Link to="/international-tours" className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white transition-all flex items-center justify-center gap-2">
                    <Plane className="w-5 h-5" /> Unlock Global Packages
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default PassportGuide;
