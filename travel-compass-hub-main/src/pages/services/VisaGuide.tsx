import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Globe, Clock, CheckCircle, XCircle, ShieldCheck, Briefcase, UserCheck, AlertTriangle, Phone, Plane, BookOpen, Shield, CreditCard, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQsSection from '@/components/FAQsSection';
import LeadMagnetCTA from '@/components/conversion/LeadMagnetCTA';

const faqs = [
  {
    question: "What is the difference between an e-Visa, Sticker Visa, and Visa on Arrival?",
    answer: "A Sticker Visa requires surrendering your physical passport to an embassy/VFS center for a printed stamp. An e-Visa is applied for digitally, evaluated remotely, and sent as a PDF. Visa on Arrival (VoA) allows you to fly into the destination country without prior approval and procure the physical visa at the airport's immigration counter."
  },
  {
    question: "What does 'Sufficient Financial Proof' mean for visa applications?",
    answer: "Embassy officials heavily scrutinize your bank statements from the previous 6 months. It’s not just about a large closing balance; they demand a consistent 'Average Daily Balance.' High, unexplained cash deposits made merely days before the visa interview will almost certainly trigger immediate visa rejection due to suspected fraud."
  },
  {
    question: "Do I need fully confirmed flights before applying for a Schengen visa?",
    answer: "European consulates strictly require at minimum a verifiable itinerary reservation or PNR block. While heavily subsidized dummy tickets exist, submitting a fraudulent PNR that collapses upon biometric verification guarantees an instant rejection mark pinned directly to your passport number."
  },
  {
    question: "Is travel insurance necessary to apply for an international visa?",
    answer: "For certain jurisdictions, notably the Schengen Zone footprint and Turkey, proof of premium travel insurance showcasing a minimum of €30,000 for medical repatriation is legally non-negotiable for file submission. If you don't attach this certificate, your visa dossier won't even be processed."
  },
  {
    question: "How long prior to my holiday should I apply for my travel visa?",
    answer: "You should initiate application protocols as soon as the respective embassy permits window access. For complex destinations like the USA and Schengen region, apply 60 to 90 days prior to departure. For rapid-return e-Visas like Dubai or Malaysia, a 14-day clearance horizon is usually adequate."
  },
  {
    question: "Can an embassy legally reject my travel visa without stating a reason?",
    answer: "Yes. Consulates retain total sovereign autonomy regarding border access and are not mandated to provide granular legal arguments for refusals. Standardized rejection metrics typically cite 'Failure to prove strong economic ties to home country' or 'Insufficient demonstration of legitimate travel intent.'"
  },
  {
    question: "How do I ensure my cover letter strengthens my visa approval probability?",
    answer: "A proficiently drafted cover letter serves to synthesize your entire data packet. It must lucidly explain the explicit trajectory of your itinerary, justify all financial sponsorships meticulously, address prior global travel history, and guarantee your contractual economic return to India."
  }
];

const VisaGuide = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="visa" />;
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
        title="How to Apply for Travel Visa | Indian Passport Holders Guide"
        description="Learn how to apply for travel visa as an Indian citizen. Master the financial proof requirements, avoid Schengen visa rejections, and secure global entry."
        keywords="how to apply for travel visa, schengen visa from india, dubai visa application, bank statement for visa, biometric visa interview"
        canonicalUrl="https://rudrakshsafar.com/travel-services/visa-assistance"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-slate-50">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-blue-100 text-blue-700 font-bold tracking-wide uppercase text-sm mb-4">
                <Globe className="w-4 h-4" />
                Global Border Clearance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                <span className="text-blue-600">How to Apply for Travel Visa</span> Programs Worldwide
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Applying for foreign tourist visas doesn't involve mere paperwork; it involves mathematically convincing consulate officers of your socioeconomic stability. Master the framework of international visas to ensure a flawless approval pipeline.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Block */}
          <AnimatedSection delay={100}>
            <div className="bg-white border-l-4 border-blue-600 rounded-r-2xl shadow-md p-6 lg:p-8 mb-16 max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" /> How to apply for travel visa efficiently?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                To apply for a travel visa efficiently as an Indian citizen, first identify if the destination requires a Sticker Visa, E-Visa, or offers Visa on Arrival. Next, compile a robust dossier featuring 6 months of healthy bank statements, verified income tax returns (ITR), comprehensive travel insurance, and a strategically structured cover letter emphasizing strong economic ties to your home country.
              </p>
            </div>
          </AnimatedSection>

          {/* Information Table Section */}
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                Destination Visa Matrix & Logistics
              </h2>
              <p className="text-slate-600 mb-6 text-lg tracking-wide">
                Examine processing tolerances and mandatory document layers across primary overseas transit hubs.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b-2 border-slate-200">
                      <th className="p-4 font-bold rounded-tl-xl w-1/4">Origin / Country</th>
                      <th className="p-4 font-bold w-1/5">Visa Topology</th>
                      <th className="p-4 font-bold w-1/5">Processing Pipeline</th>
                      <th className="p-4 font-bold rounded-tr-xl w-1/3">Crucial Documents Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900"><Link to="/international-tours/dubai" className="text-blue-600 hover:underline">Dubai (UAE)</Link></td>
                      <td className="p-4 font-medium">Remote e-Visa</td>
                      <td className="p-4">3 - 6 Working Days</td>
                      <td className="p-4">Passports Scans, White-BG Photo, Return Flight Ticket.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900"><Link to="/international-tours/europe" className="text-blue-600 hover:underline">Schengen Bloc</Link></td>
                      <td className="p-4 font-medium">Biometric Sticker</td>
                      <td className="p-4 font-semibold text-amber-600">15 - 30 Working Days</td>
                      <td className="p-4">Income Tax Returns (3 YRS), Stamped Bank Audits, Cover Letter.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900"><Link to="/international-tours/thailand" className="text-blue-600 hover:underline">Thailand</Link></td>
                      <td className="p-4 font-medium">Visa on Arrival</td>
                      <td className="p-4 text-emerald-600">Instant upon arrival</td>
                      <td className="p-4">Confirmed Return Flights, Hotel Vouchers, Cash Validation (THB).</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900"><Link to="/international-tours/singapore" className="text-blue-600 hover:underline">Singapore</Link></td>
                      <td className="p-4 font-medium">Authorized e-Visa</td>
                      <td className="p-4">4 - 7 Working Days</td>
                      <td className="p-4">Agent Cover Letter, Bank Thresholds, Strict Headshot Parameters.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900"><Link to="/international-tours/bali" className="text-blue-600 hover:underline">Bali (Indonesia)</Link></td>
                      <td className="p-4 font-medium">e-VOA / Arrival</td>
                      <td className="p-4 text-emerald-600">Instant / 2 Days</td>
                      <td className="p-4">Valid Passport, Custom Integration forms, Simple Return Flight.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 1: Avoiding Rejections */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-500" />
                Deciphering Visa Rejection Algorithms
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  A visa rejection stamp does not merely disrupt your current holiday; it injects a highly carcinogenic mark into your global passport profile. Western consulates orchestrate complex geopolitical safety nets. Their primary algorithm executes on one rule: <strong>"Will this applicant illegally migrate and vanish into our workforce economy?"</strong>
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-6">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> The False Itinerary Trap
                  </h4>
                  <p className="text-red-800 text-base leading-relaxed">
                    A catastrophic mistake made by rookie travelers involves supplying an incredibly generic, unresearched 20-day itinerary while maintaining a bank account balance that mathematically couldn't fund a 5-day trip. If your stated travel budget radically fractures your actual fiscal capacity, the consulate instantly terminates the application for logic inconsistencies. Ensure your logistical <Link to="/travel-checklist" className="text-red-900 font-semibold hover:underline">travel planning</Link> is financially grounded.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 2: Financials */}
          <AnimatedSection delay={250}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                Maintaining Healthy Bank Statements
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  To a Visa Officer stationed in New Delhi or Mumbai, your bank account is the absolute translation of your morality. If your bank statement reveals that you subsisted on dangerously low balances for five and a half months, followed by a shocking Rs 5.0 Lakh deposit mere hours before extracting the visa PDF—they label this "Fund Parking."
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your banking matrix must communicate stability. Your salary credits must align with your employer documentation. High trajectory <Link to="/currency-guide" className="text-emerald-600 font-semibold hover:underline">Forex utilization</Link> plans should be supplemented by mutual fund asset valuations or property certificates. Ensure that the bank statements you attach feature the official signature mechanism or rubber seal originating from your physical branch.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 3: VFS & Biometrics */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-indigo-500" />
                VFS Global & Biometric Extraction
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  VFS Global operates as an intermediary document courier for sovereign missions. During sophisticated operations involving the UK or European blocs, you physically cannot bypass the VFS appointment architecture.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When you arrive at the VFS Center, officials capture a highly controlled sequence of digital fingerprints alongside high-resolution facial geometry nodes. Dress appropriately for these appointments. Be incredibly mindful that your <Link to="/travel-services/passport-assistance" className="text-indigo-600 font-semibold hover:underline">Indian Passport booklet</Link> features perfectly intact lamination formats before you surrender it into their holding patterns for the duration of the processing cycle.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Lead Magnet */}
          <AnimatedSection delay={350}>
            <LeadMagnetCTA
              title="Acquire the Ultimate Visa Approval Checklist"
              description="A granular, proprietary spreadsheet highlighting exactly how to frame your cover letters and format your asset documentation to eliminate rejection threats."
              buttonText="Receive Checklist on WhatsApp"
              magnetType="checklist"
            />
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={400}>
            <div className="mb-16 mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Visa Application Processing FAQs</h2>
              <FAQsSection faqs={faqs} title="" />
            </div>
          </AnimatedSection>

          {/* Helpful Travel Guides */}
          <AnimatedSection delay={450}>
            <div className="bg-slate-100 rounded-3xl p-8 mb-16 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Helpful Travel Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/travel-services/passport-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  Passport Logistics <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-health" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  Global Travel Health <Shield className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-tips" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  Immigration Tactics <Globe className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-checklist" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  TSA Bag Guidelines <Briefcase className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  Forex Card Conversion <CreditCard className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/best-time-to-visit" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-blue-600 border border-slate-100 flex items-center justify-between">
                  Climate Mapping <Map className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Conversion Layer */}
          <AnimatedSection delay={500}>
            <div className="bg-gradient-to-br from-blue-900 via-sky-900 to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Don't Risk A Visa Refusal</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  A rejection stamp follows you globally. Rely on Rudraksh Safar’s elite operational teams to meticulously structure your financial proofs, deploy highly targeted cover narratives, and secure your international visa approvals flawlessly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="https://wa.me/919406182174" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                    <Phone className="w-5 h-5" /> Visa Consultation
                  </a>
                  <Link to="/international-tours" className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white transition-all flex items-center justify-center gap-2">
                    <Plane className="w-5 h-5" /> See Approved Packages
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

export default VisaGuide;
