import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, FileText, Clock, DollarSign, AlertCircle } from 'lucide-react';
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

  return (
    <>
      <SEOHead
        title="Visa Guide for Indians 2026 - Requirements, Fees & E-Visa Process | Rudraksh Safar"
        description="Comprehensive visa guide for Indian citizens. detailed requirements for Dubai, Thailand, Schengen, and Singapore visas. Learn about E-Visa application, visa-on-arrival fees, and processing times."
        keywords="visa for Indians 2026, Indian passport visa requirements, Dubai e-visa price, Thailand visa on arrival for Indians, Schengen visa appointment, Singapore visa processing time, visa documents checklist"
        canonicalUrl="https://rudrakshsafar.com/visa-guide"
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
                Visa Requirements for Indian Citizens
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Navigating visa rules can be complex. We simplify the process with up-to-date information on documents, fees, and photo specifications for top destinations. Select a country to start your application journey.
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

          {/* General Tips */}
          <AnimatedSection delay={300}>
            <div className="mt-16 bg-muted/50 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">General Visa Application Tips</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Passport Validity</h4>
                    <p className="text-sm text-muted-foreground">Ensure your passport is valid for at least 6 months from your travel date with minimum 2 blank pages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Apply Early</h4>
                    <p className="text-sm text-muted-foreground">Apply at least 4-6 weeks before travel for Schengen and appointment-based visas to avoid last-minute issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Financial Proof</h4>
                    <p className="text-sm text-muted-foreground">Keep bank statements for last 3-6 months showing sufficient funds for your trip duration.</p>
                  </div>
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
