import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const TurkeyVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello Rudraksh Safar, I need expert assistance with my Turkey e-Visa application. Please guide me through the process.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Turkey Visa for Indians 2026 - e-Visa Requirements & Fees | Rudraksh Safar</title>
        <meta name="description" content="Turkey e-Visa guide for Indians. Apply online for 30-day multiple entry visa. Processing in 24-48 hours, fees $60, documents required & entry rules." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/turkey" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇹🇷</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Turkey Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                Easy e-Visa application with quick approval
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
                <p className="font-semibold">24-48 Hours</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold">$60 (~₹5,000)</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Validity</p>
                <p className="font-semibold">180 Days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-green-800 dark:text-green-200">
                Simple Online Application
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Turkey e-Visa can be applied online at evisa.gov.tr. Get approval within 24-48 hours. Multiple entry allowed with 30 days stay per visit.
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
                  <span>Passport with 6+ months validity beyond travel dates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid email address for e-Visa delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Credit/debit card for payment ($60)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Return flight tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking confirmation</span>
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
                <li>• Print e-Visa copy and carry with passport</li>
                <li>• Cash recommendation: $50-100/day</li>
                <li>• Turkish Lira (TRY) is local currency</li>
                <li>• Most places accept cards and USD</li>
                <li>• Dress modestly when visiting mosques</li>
                <li>• Bargaining is common in Grand Bazaar</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Rejection Reasons
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• Passport validity less than 6 months</li>
                <li>• Payment failure</li>
                <li>• Incorrect passport details entered</li>
                <li>• Previous overstay in Turkey</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Turkey</h2>
              <p className="text-muted-foreground mb-4">
                <strong>April to June</strong> and <strong>September to November</strong> are ideal. July-August is peak summer (hot but crowded). December-February is cold but good for skiing.
              </p>
              <p className="text-muted-foreground">
                <strong>Must See:</strong> Cappadocia hot air balloons, Istanbul, Pamukkale, Ephesus ruins.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Disclaimer</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Always apply through the official Turkey e-Visa website to avoid scams.
                  </p>
                  <a
                    href="https://www.evisa.gov.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official Turkey e-Visa Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Turkey Trip</h2>
              <p className="text-muted-foreground mb-6">
                Explore Istanbul, Cappadocia, and more with our curated Turkey packages.
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

export default TurkeyVisa;
