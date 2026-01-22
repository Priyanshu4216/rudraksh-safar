import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const BaliVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I need assistance with Bali/Indonesia visa. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Bali Visa for Indians 2026 - Visa on Arrival & Free Entry | Rudraksh Safar</title>
        <meta name="description" content="Bali Indonesia visa guide for Indians. Visa on Arrival available for 30 days. Check requirements, fees ($35), documents needed & entry rules for Bali trip." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/bali" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇮🇩</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Bali Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                Visa on Arrival available for Indian travellers
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Type</p>
                <p className="font-semibold">VOA</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">On Arrival</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold">$35 (~₹2,900)</p>
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
                Easy Visa on Arrival!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Indians can get Visa on Arrival (VOA) at Bali airport. Pay $35, get 30-day stamp. Can be extended once for another 30 days within Indonesia.
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
                  <span>Passport with 6+ months validity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Return/onward flight ticket</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>VOA fee: $35 (USD cash or card accepted)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking (may be asked)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Immigration & Entry Rules
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• VOA counter is separate from regular immigration</li>
                <li>• Pay $35 fee, then proceed to immigration</li>
                <li>• Cash (USD) preferred, cards accepted at some counters</li>
                <li>• Carry proof of funds (~$100/day recommended)</li>
                <li>• Dress modestly when visiting temples</li>
                <li>• Strict drug laws - severe penalties including death</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Issues at Immigration
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• No return ticket - may be denied entry</li>
                <li>• Passport validity less than 6 months</li>
                <li>• Not carrying enough cash for fee</li>
                <li>• Previous overstay in Indonesia</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Bali</h2>
              <p className="text-muted-foreground mb-4">
                <strong>April to October</strong> is dry season - ideal for beaches and outdoor activities. November-March is rainy season with afternoon showers.
              </p>
              <p className="text-muted-foreground">
                <strong>Peak Season:</strong> July-August, Christmas-New Year (book early, prices high).
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
                    Visa rules may change. Always verify on the official Indonesian Immigration website before travel.
                  </p>
                  <a 
                    href="https://www.imigrasi.go.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official Indonesian Immigration <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Bali Trip</h2>
              <p className="text-muted-foreground mb-6">
                Get the best Bali packages with flights, hotels, and activities included.
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

export default BaliVisa;
