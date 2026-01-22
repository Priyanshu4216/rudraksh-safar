import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const DubaiVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I need assistance with Dubai visa application. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Dubai Visa for Indians 2026 - Requirements, Fees & Processing | Rudraksh Safar</title>
        <meta name="description" content="Complete Dubai visa guide for Indian passport holders. Check requirements, fees (₹6,000-15,000), processing time (3-5 days), documents needed & application process." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/dubai" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇦🇪</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Dubai Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                Complete guide to UAE tourist visa requirements, fees, and application process
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Info Cards */}
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
                <p className="font-semibold">₹6,000-15,000</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Validity</p>
                <p className="font-semibold">30-90 Days</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Passport with minimum 6 months validity and 2 blank pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Passport-size photograph (white background, 35x45mm)</span>
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
                  <span>Bank statement (last 3 months) showing ₹1,00,000+ balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Travel insurance (recommended)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Processing Time & Fees */}
          <AnimatedSection delay={300}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-serif font-bold mb-4">Processing Time</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Standard:</strong> 3-5 working days</li>
                  <li><strong>Express:</strong> 24-48 hours (extra fee)</li>
                  <li><strong>Peak Season:</strong> May take 5-7 days</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-serif font-bold mb-4">Visa Fees</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>14-Day Tourist:</strong> ₹6,000-8,000</li>
                  <li><strong>30-Day Tourist:</strong> ₹8,000-10,000</li>
                  <li><strong>90-Day Tourist:</strong> ₹12,000-15,000</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Immigration & Entry Rules */}
          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Immigration & Entry Rules
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Carry printed e-visa copy and return tickets</li>
                <li>• Minimum cash recommended: $500 or equivalent</li>
                <li>• Hotel booking must match visa application</li>
                <li>• Immigration may ask about purpose and duration of stay</li>
                <li>• Prohibited items: pork products, alcohol (beyond duty-free limit), drugs</li>
                <li>• Dress modestly and respect local customs</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Common Rejection Reasons */}
          <AnimatedSection delay={500}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Rejection Reasons
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• Insufficient bank balance or funds</li>
                <li>• Incomplete or incorrect documentation</li>
                <li>• Passport validity less than 6 months</li>
                <li>• Previous visa violations in UAE or GCC countries</li>
                <li>• Unclear travel purpose or itinerary</li>
                <li>• Poor quality passport photo</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Best Time to Visit */}
          <AnimatedSection delay={600}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Dubai</h2>
              <p className="text-muted-foreground mb-4">
                <strong>November to March</strong> is ideal with pleasant weather (20-30°C). Avoid June-August due to extreme heat (40°C+). December-January sees peak tourist season with higher prices.
              </p>
              <p className="text-muted-foreground">
                <strong>Peak Events:</strong> Dubai Shopping Festival (Jan-Feb), Dubai Food Festival (Feb-Mar), Dubai Expo events.
              </p>
            </div>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={700}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Disclaimer</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Visa rules change frequently. This information is for guidance only. Always verify current requirements on the official UAE Embassy website or ICP portal before applying. Rudraksh Safar is not responsible for any visa-related issues.
                  </p>
                  <a 
                    href="https://icp.gov.ae/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official UAE ICP Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* WhatsApp CTA */}
          <AnimatedSection delay={800}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Need Visa Assistance?</h2>
              <p className="text-muted-foreground mb-6">
                Our team can help you with Dubai visa application, documentation, and travel planning.
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

export default DubaiVisa;
