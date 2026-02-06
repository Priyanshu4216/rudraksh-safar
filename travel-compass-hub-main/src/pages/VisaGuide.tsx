import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, FileText, Clock, DollarSign, AlertCircle, CheckCircle, XCircle, ShieldCheck, HelpCircle, Briefcase, UserCheck, MapPin, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const visaCountries = [
  { id: 'dubai', name: 'Dubai (UAE)', flag: '🇦🇪', type: 'e-Visa', processing: '3-5 days' },
  { id: 'thailand', name: 'Thailand', flag: '🇹🇭', type: 'Visa on Arrival', processing: 'On arrival' },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬', type: 'e-Visa', processing: '3-5 days' },
  { id: 'bali', name: 'Bali (Indonesia)', flag: '🇮🇩', type: 'Visa on Arrival', processing: 'On arrival' },
  { id: 'maldives', name: 'Maldives', flag: '🇲🇻', type: 'Visa on Arrival', processing: 'On arrival' },
  { id: 'turkey', name: 'Turkey', flag: '🇹🇷', type: 'e-Visa', processing: '24-48 hours' },
  { id: 'schengen', name: 'Schengen (Europe)', flag: '🇪🇺', type: 'Appointment', processing: '15-30 days' },
  { id: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰', type: 'ETA Online', processing: '24-48 hours' },
  { id: 'nepal', name: 'Nepal', flag: '🇳🇵', type: 'Visa on Arrival', processing: 'On arrival' },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', type: 'eNTRI/e-Visa', processing: '24-72 hours' },
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
    "@type": "HowTo",
    "name": "How to Apply for a Visa (Indian Citizens)",
    "description": "Step-by-step guide for Indian passport holders to apply for tourist visas. Includes document checklist, financial proof requirements, and tips to avoid rejection.",
    "step": [
      { "@type": "HowToStep", "name": "Choose Visa Type", "text": "Determine if you need an E-Visa, Sticker Visa, or Visa on Arrival based on your destination." },
      { "@type": "HowToStep", "name": "Prepare Documents", "text": "Gather passport, photos (white background), flight tickets, and hotel bookings." },
      { "@type": "HowToStep", "name": "Financial Proof", "text": "Ensure 6-month bank statements show sufficient closing balance as per country requirement." },
      { "@type": "HowToStep", "name": "Submit Application", "text": "Apply via official portal or authorized agent like Rudraksh Safar regarding biometrics." }
    ],
    "about": {
      "@type": "Thing",
      "name": "Visa Consultation",
      "description": "Professional visa assistance for Indian citizens preventing rejections and ensuring correct documentation."
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Rudraksh Safar",
      "image": "https://rudrakshsafar.com/logo.png"
    }
  };

  return (
    <>
      <SEOHead
        title="Visa Guide for Indian Passport Holders (2026): Step-by-Step Process"
        description="Complete visa guide for Indians. detailed requirements for Dubai, Schengen, Thailand. Learn how to avoid rejection, financial proof rules & documentation."
        keywords="visa guide for indians, how to avoid visa rejection, schengen visa for indians, dubai e-visa process, thailand visa on arrival, bank statement for visa"
        canonicalUrl="https://rudrakshsafar.com/visa-guide"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                Global Access
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Visa Guide for Indian <span className="text-secondary">Passport Holders</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Don't let a rejected visa ruin your travel plans. We provide <strong>expert guidance, document verification, and end-to-end support</strong> to ensure your application is approved on the first try.
              </p>
            </div>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={100}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Disclaimer</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Visa regulations change frequently. This information is for general guidance only and is not legal/immigration advice. Always verify current requirements on the official embassy or consulate website before applying. Rudraksh Safar is not liable for any visa-related issues.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Country Cards */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visaCountries.map((country) => (
                <Link
                  key={country.id}
                  to={`/visa/${country.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="text-6xl">{country.flag}</div>
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-black/10">
                      {country.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors">
                      {country.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{country.processing}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-secondary text-sm font-medium">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* STEP-BY-STEP PROCESS */}
          <AnimatedSection delay={300}>
            <div className="mt-16 mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold mb-4">Step-by-Step Visa Process for Indians</h2>
                <p className="text-muted-foreground">Follow this 4-step protocol to ensure a hassle-free approval.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-background border border-border p-6 rounded-xl relative">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
                  <h3 className="font-bold text-lg mb-2 mt-2">Identify Visa Type</h3>
                  <p className="text-sm text-muted-foreground">E-Visa, Sticker, or On-Arrival? Knowing this first prevents form errors. Check validity requirements (usually 6 months).</p>
                </div>
                <div className="bg-background border border-border p-6 rounded-xl relative">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
                  <h3 className="font-bold text-lg mb-2 mt-2">Document Prep</h3>
                  <p className="text-sm text-muted-foreground"><strong>Bank Statements:</strong> Must be stamped/signed. <strong>Photos:</strong> 80% face, white background. <strong>ITR:</strong> Last 2-3 years.</p>
                </div>
                <div className="bg-background border border-border p-6 rounded-xl relative">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
                  <h3 className="font-bold text-lg mb-2 mt-2">Financial Proof</h3>
                  <p className="text-sm text-muted-foreground">Do not transfer large sums just before applying. Officers look for consistent balance vs sudden deposits.</p>
                </div>
                <div className="bg-background border border-border p-6 rounded-xl relative">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">4</span>
                  <h3 className="font-bold text-lg mb-2 mt-2">Apply & Track</h3>
                  <p className="text-sm text-muted-foreground">Submit via official VFS/Embassy portal. Keep a copy of all submitted docs. Track status weekly.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* REJECTION PREVENTION GUIDE */}
          <AnimatedSection delay={400}>
            <div className="bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h2 className="text-2xl font-serif font-bold text-red-900 dark:text-red-200">Avoid Visa Rejection</h2>
                  </div>
                  <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">
                    Rejections stay on your passport record and affect future travel. Most rejections happen due to simple, avoidable mistakes.
                  </p>
                </div>
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-1 text-red-700"><XCircle className="w-4 h-4" /> Unclear Purpose</h4>
                    <p className="text-xs text-muted-foreground">Itinerary must match bookings. Don't book dummy tickets that get cancelled before visa approval.</p>
                  </div>
                  <div className="bg-white dark:bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-1 text-red-700"><XCircle className="w-4 h-4" /> Insufficient Funds</h4>
                    <p className="text-xs text-muted-foreground">Closing balance is less important than average balance. Show maintaining funds for 3+ months.</p>
                  </div>
                  <div className="bg-white dark:bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-1 text-red-700"><XCircle className="w-4 h-4" /> Photo Errors</h4>
                    <p className="text-xs text-muted-foreground">Using old photos, glamorous selfies, or wrong dimensions (e.g., US vs Schengen sizes differ).</p>
                  </div>
                  <div className="bg-white dark:bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-1 text-red-700"><XCircle className="w-4 h-4" /> Mismatched Dates</h4>
                    <p className="text-xs text-muted-foreground">Flight dates don't match leave letter or hotel booking dates. Officers check this first.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* WHO NEEDS EXPERT HELP & WHY US */}
          <AnimatedSection delay={500}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Who Needs Expert Visa Assistance?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <UserCheck className="w-6 h-6 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-bold">First-Time Travelers</h4>
                      <p className="text-sm text-muted-foreground">Fresh passports have higher scrutiny. We help build a strong cover letter profile.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-bold">Self-Employed / Freelancers</h4>
                      <p className="text-sm text-muted-foreground">You lack a standard salary slip. We help you format ITR and business proof correctly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-bold">Previous Refusals</h4>
                      <p className="text-sm text-muted-foreground">If you've been rejected before, you need a professional explanation letter to re-apply.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold mb-4">Why Apply With Rudraksh Safar?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Document Pre-Check (Zero Error Policy)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Form Filling by Experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Justified Cover Letters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">End-to-End Tracking</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact">
                    <button className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                      Start Your Visa Application
                    </button>
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
