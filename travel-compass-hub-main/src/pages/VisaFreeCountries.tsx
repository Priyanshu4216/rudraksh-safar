import React, { useState, useEffect } from 'react';
import { Globe, Plane, MapPin, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const visaFreeDestinations = [
  { name: 'Maldives', flag: '🇲🇻', stay: '30 days', notes: 'Free 30-day tourist visa on arrival' },
  { name: 'Nepal', flag: '🇳🇵', stay: '150 days', notes: 'Free visa on arrival for Indians' },
  { name: 'Bhutan', flag: '🇧🇹', stay: 'Unlimited', notes: 'Permit required, no visa fee for Indians' },
  { name: 'Thailand', flag: '🇹🇭', stay: '60 days', notes: 'Visa on arrival / Visa exemption' },
  { name: 'Indonesia (Bali)', flag: '🇮🇩', stay: '30 days', notes: 'Visa on arrival free' },
  { name: 'Sri Lanka', flag: '🇱🇰', stay: '30 days', notes: 'ETA required (free for Indians)' },
  { name: 'Mauritius', flag: '🇲🇺', stay: '90 days', notes: 'Visa on arrival for tourism' },
  { name: 'Seychelles', flag: '🇸🇨', stay: '30 days', notes: 'Free visitor permit on arrival' },
  { name: 'Fiji', flag: '🇫🇯', stay: '120 days', notes: 'Visa on arrival for Indians' },
  { name: 'Jamaica', flag: '🇯🇲', stay: '30 days', notes: 'Visa on arrival' },
  { name: 'Qatar', flag: '🇶🇦', stay: '30 days', notes: 'Free visa waiver on arrival' },
  { name: 'Oman', flag: '🇴🇲', stay: '14 days', notes: 'e-Visa simple process' },
];

const visaOnArrivalDestinations = [
  { name: 'Thailand', flag: '🇹🇭', fee: '₹1,500', stay: '15-60 days' },
  { name: 'Indonesia', flag: '🇮🇩', fee: 'Free', stay: '30 days' },
  { name: 'Cambodia', flag: '🇰🇭', fee: '$30', stay: '30 days' },
  { name: 'Laos', flag: '🇱🇦', fee: '$40', stay: '30 days' },
  { name: 'Jordan', flag: '🇯🇴', fee: '$60', stay: '30 days' },
  { name: 'Kenya', flag: '🇰🇪', fee: '$51', stay: '90 days' },
  { name: 'Tanzania', flag: '🇹🇿', fee: '$50', stay: '90 days' },
  { name: 'Madagascar', flag: '🇲🇬', fee: 'Free', stay: '90 days' },
  { name: 'Ethiopia', flag: '🇪🇹', fee: '$82', stay: '30 days' },
  { name: 'Mozambique', flag: '🇲🇿', fee: '$50', stay: '30 days' },
];

const VisaFreeCountries = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        description="Complete list of visa-free countries for Indian passport holders in 2026. Discover destinations with visa on arrival, e-visa, and visa exemption for Indians."
        keywords="visa free countries for Indians, visa on arrival India, Indian passport visa free, travel without visa India"
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
                Travel hassle-free to these amazing destinations that offer visa on arrival, visa exemption, or simple e-visa process for Indian passport holders.
              </p>
            </div>
          </AnimatedSection>

          {/* Visa Free / Easy Entry */}
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
                  <p className="text-sm text-muted-foreground">{country.notes}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Visa on Arrival */}
          <AnimatedSection delay={200}>
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
                    </tr>
                  </thead>
                  <tbody>
                    {visaOnArrivalDestinations.map((country, index) => (
                      <tr key={country.name} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-4 flex items-center gap-2">
                          <span className="text-xl">{country.flag}</span>
                          {country.name}
                        </td>
                        <td className="p-4">{country.fee}</td>
                        <td className="p-4">{country.stay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Tips */}
          <AnimatedSection delay={300}>
            <div className="bg-secondary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Important Tips</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Carry Cash</h4>
                    <p className="text-sm text-muted-foreground">Many visa on arrival counters accept only cash (USD). Carry $100-200 in small denominations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Return Ticket</h4>
                    <p className="text-sm text-muted-foreground">Always carry a confirmed return or onward journey ticket as proof.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hotel Booking</h4>
                    <p className="text-sm text-muted-foreground">Have confirmed hotel bookings for at least the first few nights of your stay.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Passport Photos</h4>
                    <p className="text-sm text-muted-foreground">Carry 2-4 passport size photos as many visa on arrival counters require them.</p>
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

export default VisaFreeCountries;
