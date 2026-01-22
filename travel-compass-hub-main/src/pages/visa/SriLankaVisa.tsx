import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const SriLankaVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I want to plan a Sri Lanka trip. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Sri Lanka Visa for Indians 2026 - FREE ETA & Requirements | Rudraksh Safar</title>
        <meta name="description" content="Sri Lanka visa guide for Indians. Get FREE ETA (Electronic Travel Authorization) online. 30-day stay, simple process, documents required & travel tips." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/sri-lanka" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇱🇰</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Sri Lanka Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                FREE ETA for Indian passport holders
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Type</p>
                <p className="font-semibold">FREE ETA</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">24-48 Hours</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold text-green-600">FREE</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stay Duration</p>
                <p className="font-semibold">30 Days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-green-800 dark:text-green-200">
                🎉 FREE Visa for Indians!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Sri Lanka offers FREE ETA (Electronic Travel Authorization) for Indian passport holders. Apply online and get approval within 24-48 hours. Valid for 30 days, can be extended.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid passport with 6+ months validity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Return flight ticket</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>ETA approval (apply at eta.gov.lk)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Entry Rules & Tips
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Print ETA approval and carry with passport</li>
                <li>• Sri Lankan Rupee (LKR) is local currency</li>
                <li>• USD widely accepted at tourist places</li>
                <li>• SIM cards available at airport</li>
                <li>• Dress modestly at temples (cover shoulders & knees)</li>
                <li>• Remove shoes and hats at religious sites</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Sri Lanka</h2>
              <p className="text-muted-foreground mb-4">
                <strong>December to March</strong> for west/south coast. <strong>May to September</strong> for east coast. Sri Lanka has two monsoon seasons affecting different regions.
              </p>
              <p className="text-muted-foreground">
                <strong>Must Visit:</strong> Sigiriya Rock, Kandy, Ella, Galle Fort, Yala National Park.
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
                    Always apply through the official Sri Lanka ETA website to avoid scams.
                  </p>
                  <a 
                    href="https://eta.gov.lk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official Sri Lanka ETA Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Sri Lanka Trip</h2>
              <p className="text-muted-foreground mb-6">
                Explore beautiful beaches, ancient temples, and wildlife with our Sri Lanka packages.
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

export default SriLankaVisa;
