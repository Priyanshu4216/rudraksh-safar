import React, { useState, useEffect } from 'react';
import { Banknote, CreditCard, Smartphone, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const currencies = [
  { country: 'UAE (Dubai)', currency: 'Dirham (AED)', symbol: 'د.إ', rate: '~₹22-23', cashTip: 'Widely accepted', cardTip: 'Very good' },
  { country: 'Thailand', currency: 'Thai Baht (THB)', symbol: '฿', rate: '~₹2.3-2.5', cashTip: 'Preferred', cardTip: 'Good in cities' },
  { country: 'Singapore', currency: 'Singapore Dollar (SGD)', symbol: 'S$', rate: '~₹62-65', cashTip: 'Cards preferred', cardTip: 'Excellent' },
  { country: 'Indonesia (Bali)', currency: 'Rupiah (IDR)', symbol: 'Rp', rate: '~₹0.0052', cashTip: 'Essential', cardTip: 'Limited' },
  { country: 'Malaysia', currency: 'Ringgit (MYR)', symbol: 'RM', rate: '~₹18-19', cashTip: 'Useful', cardTip: 'Good' },
  { country: 'Maldives', currency: 'Rufiyaa (MVR)', symbol: 'ރ', rate: '~₹5.4', cashTip: 'USD preferred', cardTip: 'Resorts only' },
  { country: 'Sri Lanka', currency: 'Sri Lankan Rupee (LKR)', symbol: 'Rs', rate: '~₹0.25', cashTip: 'Essential', cardTip: 'Limited' },
  { country: 'Nepal', currency: 'Nepalese Rupee (NPR)', symbol: 'रू', rate: '~₹0.62', cashTip: 'Essential', cardTip: 'Very limited' },
  { country: 'Turkey', currency: 'Turkish Lira (TRY)', symbol: '₺', rate: '~₹2.5', cashTip: 'Mixed with cards', cardTip: 'Good' },
  { country: 'Europe (Schengen)', currency: 'Euro (EUR)', symbol: '€', rate: '~₹90-92', cashTip: 'Cards preferred', cardTip: 'Excellent' },
];

const CurrencyGuide = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="currency" />;
  }

  return (
    <>
      <SEOHead
        title="Currency & Money Guide for Indian Travellers | Forex Tips 2026 | Rudraksh Safar"
        description="Complete currency guide for Indian travellers. Exchange rates, forex tips, card usage, UPI availability, and money management tips for international travel."
        keywords="currency exchange India, forex tips travellers, international travel money, travel card India, foreign currency exchange"
        canonicalUrl="https://rudrakshsafar.com/currency-guide"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Banknote className="w-4 h-4" />
                Money Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Currency & Payment Guide
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about managing money abroad - from forex rates to digital payments and local currency tips.
              </p>
            </div>
          </AnimatedSection>

          {/* Currency Table */}
          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold">Country</th>
                      <th className="text-left p-4 font-semibold">Currency</th>
                      <th className="text-left p-4 font-semibold">Approx Rate (INR)</th>
                      <th className="text-left p-4 font-semibold">Cash Usage</th>
                      <th className="text-left p-4 font-semibold">Card Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies.map((c, index) => (
                      <tr key={c.country} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-4 font-medium">{c.country}</td>
                        <td className="p-4">{c.currency} ({c.symbol})</td>
                        <td className="p-4">{c.rate}</td>
                        <td className="p-4 text-sm">{c.cashTip}</td>
                        <td className="p-4 text-sm">{c.cardTip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mb-8">
              * Exchange rates are approximate and fluctuate daily. Check current rates before travel.
            </p>
          </AnimatedSection>

          {/* Payment Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cash Currency</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exchange before travel from RBI authorized dealers</li>
                  <li>• Carry small denominations for tips and small purchases</li>
                  <li>• USD is accepted worldwide as backup</li>
                  <li>• Keep some cash separate from wallet</li>
                  <li>• Declare if carrying over $5000 equivalent</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cards & Forex Cards</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enable international transactions before travel</li>
                  <li>• Forex cards offer better rates than bank cards</li>
                  <li>• Visa/Mastercard widely accepted</li>
                  <li>• Inform bank about travel dates</li>
                  <li>• Keep backup card from different bank</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Payments</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• UPI now accepted in UAE, Singapore, Bhutan, Nepal</li>
                  <li>• Apple Pay/Google Pay work in developed countries</li>
                  <li>• Download local payment apps (GrabPay, Paytm)</li>
                  <li>• Screenshots of payment confirmations useful</li>
                  <li>• WiFi/data essential for digital payments</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Tips */}
          <AnimatedSection delay={300}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200">Money Safety Tips</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• Never exchange at airports - worst rates</li>
                  <li>• Use ATMs inside banks, not standalone ones</li>
                  <li>• Count money before leaving exchange counter</li>
                  <li>• Keep emergency stash separate from wallet</li>
                </ul>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• Reject worn/torn foreign notes</li>
                  <li>• Take photo of exchange receipts</li>
                  <li>• Limit for bringing foreign currency back: ₹7,500</li>
                  <li>• RBI limit: $3,000 or equivalent per trip for neighbours, $250,000 for others</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="bg-secondary/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Where to Exchange Currency in India
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Recommended</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Thomas Cook / BookMyForex (best online rates)</li>
                    <li>• RBI authorized money changers</li>
                    <li>• Bank forex counters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Avoid</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Airport exchange counters (high fees)</li>
                    <li>• Unauthorized street dealers</li>
                    <li>• Hotel exchange services (poor rates)</li>
                  </ul>
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

export default CurrencyGuide;
