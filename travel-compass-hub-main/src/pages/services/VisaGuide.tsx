import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Globe, Clock, CheckCircle, ShieldCheck, Briefcase, Phone, Plane, BookOpen, Shield, CreditCard, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import VisaSection from '@/components/visa/VisaSection';
import { VISA_PHONE_NUMBER, createVisaWhatsAppUrl, VISA_FAQS } from '@/data/visaCountriesData';

const VisaGuide: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": VISA_FAQS.map(faq => ({
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
        title="Visa for 150+ Countries from India: Documents, Fees & Fast Filing | Rudraksh Safar"
        description="Apply for USA, UAE, Bali, Thailand, Vietnam, Schengen and 150+ visas from India with zero forms. Send documents on WhatsApp. Vietnam visa in under 60 minutes*, UAE in 4 hours*."
        keywords="travel visa from india, fast visa processing, vietnam visa under 60 minutes, dubai visa 4 hours, schengen visa assistance, usa b1 b2 visa, bhilai travel agent visa"
        canonicalUrl="https://rudrakshsafar.com/travel-services/visa-assistance"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-20 bg-slate-50 dark:bg-slate-950">
        {/* Master Interactive Visa Section */}
        <VisaSection />

        {/* Helpful Travel Guides & Resources */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <AnimatedSection delay={200}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 mb-12 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Helpful Travel & Immigration Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/travel-services/passport-assistance" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Passport Logistics</span> <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-health" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Global Travel Insurance</span> <Shield className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-tips" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Immigration Border Tactics</span> <Globe className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-checklist" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Carry-On & Bag Rules</span> <Briefcase className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Forex Card & Currency</span> <CreditCard className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/best-time-to-visit" className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl shadow-xs hover:shadow-md transition-all font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Global Climate Mapping</span> <Map className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom Conversion Banner */}
          <AnimatedSection delay={300}>
            <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-indigo-800/40">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                  Avoid Costly Visa Rejection Stamps
                </h2>
                <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed font-light">
                  A rejection mark stays on consular records. Rely on Rudraksh Safar to meticulously structure your financial proofs, verify itinerary reservations, and file with pinpoint precision.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={createVisaWhatsAppUrl('Hi Rudraksh Safar, I want an expert visa consultation.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp Visa Desk (+91 {VISA_PHONE_NUMBER})</span>
                  </a>
                  <Link
                    to="/international-tours"
                    className="bg-transparent border border-white/40 hover:border-white hover:bg-white/10 px-8 py-3.5 rounded-2xl font-bold text-base text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Plane className="w-5 h-5" />
                    <span>Explore Tour Packages</span>
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
