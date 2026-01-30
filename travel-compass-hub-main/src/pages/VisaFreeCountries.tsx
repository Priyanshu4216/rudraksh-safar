import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Plane, MapPin, CheckCircle, FileCheck, ArrowRight, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const visaFreeDestinations = [
  { name: 'Maldives', flag: '🇲🇻', stay: '30 days', notes: 'Free 30-day tourist visa on arrival', region: 'Asia' },
  { name: 'Nepal', flag: '🇳🇵', stay: '150 days', notes: 'Free visa on arrival for Indians', region: 'Asia' },
  { name: 'Bhutan', flag: '🇧🇹', stay: 'Unlimited', notes: 'Permit required, no visa fee for Indians', region: 'Asia' },
  { name: 'Thailand', flag: '🇹🇭', stay: '60 days', notes: 'Visa exemption until Nov 2025, extendable', region: 'Asia' },
  { name: 'Indonesia (Bali)', flag: '🇮🇩', stay: '30 days', notes: 'Visa on arrival free for tourism', region: 'Asia' },
  { name: 'Sri Lanka', flag: '🇱🇰', stay: '30 days', notes: 'Free ETA for Indians (launched 2024)', region: 'Asia' },
  { name: 'Mauritius', flag: '🇲🇺', stay: '90 days', notes: 'Visa on arrival for tourism', region: 'Africa' },
  { name: 'Seychelles', flag: '🇸🇨', stay: '30 days', notes: 'Free visitor permit on arrival', region: 'Africa' },
  { name: 'Fiji', flag: '🇫🇯', stay: '120 days', notes: 'Visa on arrival for Indians', region: 'Oceania' },
  { name: 'Jamaica', flag: '🇯🇲', stay: '30 days', notes: 'Visa on arrival', region: 'Caribbean' },
  { name: 'Qatar', flag: '🇶🇦', stay: '30 days', notes: 'Free visa waiver on arrival', region: 'Middle East' },
  { name: 'Oman', flag: '🇴🇲', stay: '14 days', notes: 'Free visa waiver on arrival', region: 'Middle East' },
  { name: 'Iran', flag: '🇮🇷', stay: '30 days', notes: 'Visa on arrival at Tehran airport', region: 'Middle East' },
  { name: 'Kazakhstan', flag: '🇰🇿', stay: '30 days', notes: 'Visa-free for Indian passport holders', region: 'Asia' },
  { name: 'Rwanda', flag: '🇷🇼', stay: '30 days', notes: 'Visa on arrival', region: 'Africa' },
  { name: 'Tunisia', flag: '🇹🇳', stay: '90 days', notes: 'Visa-free for Indians', region: 'Africa' },
];

const visaOnArrivalDestinations = [
  { name: 'Thailand', flag: '🇹🇭', fee: 'Free', stay: '60 days', notes: 'Valid until Nov 2025' },
  { name: 'Indonesia', flag: '🇮🇩', fee: '$35', stay: '30 days', notes: 'Extendable once' },
  { name: 'Cambodia', flag: '🇰🇭', fee: '$30', stay: '30 days', notes: 'Tourist visa' },
  { name: 'Laos', flag: '🇱🇦', fee: '$40', stay: '30 days', notes: 'At all major borders' },
  { name: 'Jordan', flag: '🇯🇴', fee: '$60', stay: '30 days', notes: 'Free with Jordan Pass' },
  { name: 'Kenya', flag: '🇰🇪', fee: '$51', stay: '90 days', notes: 'eVisa recommended' },
  { name: 'Tanzania', flag: '🇹🇿', fee: '$50', stay: '90 days', notes: 'Safari paradise' },
  { name: 'Madagascar', flag: '🇲🇬', fee: 'Free', stay: '90 days', notes: 'Under 30 days' },
  { name: 'Ethiopia', flag: '🇪🇹', fee: '$82', stay: '30 days', notes: 'Only at Addis Ababa' },
  { name: 'Mozambique', flag: '🇲🇿', fee: '$50', stay: '30 days', notes: 'Beach destination' },
  { name: 'Bolivia', flag: '🇧🇴', fee: '$160', stay: '90 days', notes: 'Multiple entry' },
  { name: 'Comoros', flag: '🇰🇲', fee: '$50', stay: '45 days', notes: 'Island paradise' },
];

const eVisaCountries = [
  { name: 'Dubai (UAE)', flag: '🇦🇪', processing: '3-5 days', fee: '₹5,000-8,000', validity: '30 days' },
  { name: 'Turkey', flag: '🇹🇷', processing: '24-48 hrs', fee: '$50', validity: '30 days' },
  { name: 'Vietnam', flag: '🇻🇳', processing: '3 days', fee: '$25', validity: '30 days' },
  { name: 'Malaysia', flag: '🇲🇾', processing: '24-72 hrs', fee: 'Free (eNTRI)', validity: '15 days' },
  { name: 'Singapore', flag: '🇸🇬', processing: '3-5 days', fee: '$20', validity: '30 days' },
  { name: 'Australia', flag: '🇦🇺', processing: '1-4 weeks', fee: 'A$150', validity: '12 months' },
  { name: 'New Zealand', flag: '🇳🇿', processing: '2-4 weeks', fee: 'NZ$211', validity: '9 months' },
  { name: 'Egypt', flag: '🇪🇬', processing: '3-5 days', fee: '$25', validity: '30 days' },
  { name: 'Morocco', flag: '🇲🇦', processing: 'Varies', fee: 'Free*', validity: '90 days' },
  { name: 'Myanmar', flag: '🇲🇲', processing: '3 days', fee: '$50', validity: '28 days' },
  { name: 'South Korea', flag: '🇰🇷', processing: '3-5 days', fee: '$35', validity: '90 days' },
  { name: 'Sri Lanka', flag: '🇱🇰', processing: '24-48 hrs', fee: 'Free (Indians)', validity: '30 days' },
];

const VisaFreeCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'free' | 'arrival' | 'evisa'>('free');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="visaFree" />;
  }

  return (
    <>
      <SEOHead
        title="Visa-Free Countries for Indian Passport 2026 | Complete List | Rudraksh Safar"
        description="Complete list of 40+ visa-free countries for Indian passport holders in 2026. Discover destinations with visa on arrival, e-visa, and visa exemption."
        keywords="visa free countries for Indians 2026, visa on arrival India, Indian passport visa free, e-visa countries, travel without visa India"
        canonicalUrl="https://rudrakshsafar.com/visa-free-countries"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                Easy Travel Destinations
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Visa-Free Countries for Indians
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Travel hassle-free to 40+ amazing destinations that offer visa on arrival, visa exemption, or simple e-visa process for Indian passport holders in 2026.
              </p>
            </div>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={50}>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('free')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'free'
                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-2" />
                Visa-Free ({visaFreeDestinations.length})
              </button>
              <button
                onClick={() => setActiveTab('arrival')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'arrival'
                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Plane className="w-4 h-4 inline mr-2" />
                Visa on Arrival ({visaOnArrivalDestinations.length})
              </button>
              <button
                onClick={() => setActiveTab('evisa')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'evisa'
                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <FileCheck className="w-4 h-4 inline mr-2" />
                e-Visa ({eVisaCountries.length})
              </button>
            </div>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={80}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Visa policies change frequently. Always verify current requirements with the official embassy or consulate before booking travel. Information updated for 2026.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Visa Free / Easy Entry */}
          {activeTab === 'free' && (
            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Visa-Free & Easy Entry Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                {visaFreeDestinations.map((country) => (
                  <div
                    key={country.name}
                    className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <h3 className="font-semibold">{country.name}</h3>
                        <span className="text-sm text-secondary font-medium">{country.stay}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{country.notes}</p>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{country.region}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Visa on Arrival */}
          {activeTab === 'arrival' && (
            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-secondary" />
                Visa on Arrival Countries
              </h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Country</th>
                        <th className="text-left p-4 font-semibold">Visa Fee</th>
                        <th className="text-left p-4 font-semibold">Duration</th>
                        <th className="text-left p-4 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visaOnArrivalDestinations.map((country, index) => (
                        <tr key={country.name} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 flex items-center gap-2">
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.name}</span>
                          </td>
                          <td className="p-4 font-semibold text-secondary">{country.fee}</td>
                          <td className="p-4">{country.stay}</td>
                          <td className="p-4 text-sm text-muted-foreground">{country.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* e-Visa Countries */}
          {activeTab === 'evisa' && (
            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-secondary" />
                e-Visa Countries (Quick Online Process)
              </h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Country</th>
                        <th className="text-left p-4 font-semibold">Processing</th>
                        <th className="text-left p-4 font-semibold">Fee</th>
                        <th className="text-left p-4 font-semibold">Validity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eVisaCountries.map((country, index) => (
                        <tr key={country.name} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="p-4 flex items-center gap-2">
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.name}</span>
                          </td>
                          <td className="p-4">{country.processing}</td>
                          <td className="p-4 font-semibold text-secondary">{country.fee}</td>
                          <td className="p-4">{country.validity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Tips */}
          <AnimatedSection delay={300}>
            <div className="bg-secondary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Important Tips for Visa-Free Travel</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Carry Cash</h4>
                    <p className="text-sm text-muted-foreground">Many visa on arrival counters accept only cash (USD). Carry $100-200 in small denominations for fees and initial expenses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Return Ticket</h4>
                    <p className="text-sm text-muted-foreground">Always carry a confirmed return or onward journey ticket as proof. Immigration may deny entry without it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hotel Booking</h4>
                    <p className="text-sm text-muted-foreground">Have confirmed hotel bookings for at least the first few nights of your stay. Printout recommended.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Passport Photos</h4>
                    <p className="text-sm text-muted-foreground">Carry 2-4 passport size photos as many visa on arrival counters require them for the application form.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Passport Validity</h4>
                    <p className="text-sm text-muted-foreground">Ensure 6+ months passport validity from date of travel. Some countries require 2 blank pages minimum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Travel Insurance</h4>
                    <p className="text-sm text-muted-foreground">Some countries require proof of travel insurance. Always recommended for medical emergencies abroad.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Plan Your Trip</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/visa-guide" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Detailed Visa Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/passport-guide" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Passport Rules <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/international-packages" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Book a Package <ArrowRight className="w-4 h-4" />
                </Link>
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

export default VisaFreeCountries;
