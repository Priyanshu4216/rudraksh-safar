import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const SingaporeVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I need assistance with Singapore visa application. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Singapore Visa for Indians 2026 - e-Visa Requirements & Fees | Rudraksh Safar</title>
        <meta name="description" content="Singapore visa guide for Indian passport holders. Apply for e-Visa online. Processing time 3-5 days, fees ₹3,000-5,000, documents required & entry rules." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/singapore" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇸🇬</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Singapore Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                e-Visa required for Indian passport holders
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Type</p>
                <p className="font-semibold">e-Visa</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">3-5 Days</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold">₹3,000-5,000</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Validity</p>
                <p className="font-semibold">30 Days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Passport with 6+ months validity and 2 blank pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Recent passport-size photo (white background)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Confirmed return flight tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Bank statement (3 months) - minimum ₹1,50,000 balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Cover letter stating travel purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>For employed: Leave approval letter and salary slips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>For self-employed: ITR (2 years) and business registration</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Immigration & Entry Rules
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Print e-visa approval and carry with passport</li>
                <li>• SG Arrival Card must be filled online before travel</li>
                <li>• Carry proof of funds (SGD 100/day recommended)</li>
                <li>• Chewing gum is banned - don't carry it</li>
                <li>• Strict laws on drugs - severe penalties</li>
                <li>• No smoking in public places - heavy fines</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Rejection Reasons
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• Insufficient bank balance</li>
                <li>• Incomplete documentation</li>
                <li>• Weak travel history</li>
                <li>• Previous visa rejections (any country)</li>
                <li>• Inconsistent information in application</li>
                <li>• No clear purpose of visit</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Singapore</h2>
              <p className="text-muted-foreground mb-4">
                Singapore is a year-round destination with consistent tropical climate (25-32°C). <strong>February to April</strong> is slightly drier. December-January sees festive celebrations.
              </p>
              <p className="text-muted-foreground">
                <strong>Major Events:</strong> Chinese New Year, Singapore Food Festival (July), Formula 1 Grand Prix (September).
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Disclaimer</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Visa requirements change frequently. Always verify on the official ICA Singapore website before applying.
                  </p>
                  <a 
                    href="https://www.ica.gov.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official ICA Singapore <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Need Visa Assistance?</h2>
              <p className="text-muted-foreground mb-6">
                We'll help you with Singapore visa application and complete travel planning.
              </p>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default SingaporeVisa;
