import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banknote, CreditCard, Smartphone, AlertTriangle, CheckCircle, ArrowRight, Globe, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const currencies = [
  { country: 'UAE (Dubai)', currency: 'Dirham (AED)', symbol: 'د.إ', rate: '~₹23-24', cashTip: 'Widely accepted', cardTip: 'Excellent', upi: '✅ Available' },
  { country: 'Thailand', currency: 'Thai Baht (THB)', symbol: '฿', rate: '~₹2.4-2.6', cashTip: 'Preferred', cardTip: 'Good in cities', upi: '✅ Available' },
  { country: 'Singapore', currency: 'Singapore Dollar (SGD)', symbol: 'S$', rate: '~₹63-65', cashTip: 'Cards preferred', cardTip: 'Excellent', upi: '✅ Available' },
  { country: 'Indonesia (Bali)', currency: 'Rupiah (IDR)', symbol: 'Rp', rate: '~₹0.0054', cashTip: 'Essential', cardTip: 'Limited outside resorts', upi: '❌ Not available' },
  { country: 'Malaysia', currency: 'Ringgit (MYR)', symbol: 'RM', rate: '~₹19-20', cashTip: 'Useful', cardTip: 'Good', upi: '✅ Available' },
  { country: 'Maldives', currency: 'Rufiyaa (MVR)', symbol: 'ރ', rate: '~₹5.4', cashTip: 'USD preferred at resorts', cardTip: 'Resorts only', upi: '❌ Not available' },
  { country: 'Sri Lanka', currency: 'Sri Lankan Rupee (LKR)', symbol: 'Rs', rate: '~₹0.26', cashTip: 'Essential', cardTip: 'Limited', upi: '✅ Available' },
  { country: 'Nepal', currency: 'Nepalese Rupee (NPR)', symbol: 'रू', rate: '~₹0.62', cashTip: 'Essential (INR accepted)', cardTip: 'Very limited', upi: '✅ Available' },
  { country: 'Turkey', currency: 'Turkish Lira (TRY)', symbol: '₺', rate: '~₹2.4', cashTip: 'Mixed with cards', cardTip: 'Good', upi: '❌ Not available' },
  { country: 'Europe (Schengen)', currency: 'Euro (EUR)', symbol: '€', rate: '~₹90-93', cashTip: 'Cards preferred', cardTip: 'Excellent', upi: '✅ Available (Select)' },
  { country: 'Japan', currency: 'Japanese Yen (JPY)', symbol: '¥', rate: '~₹0.56', cashTip: 'Still very cash-based', cardTip: 'Improving', upi: '❌ Not available' },
  { country: 'Vietnam', currency: 'Vietnamese Dong (VND)', symbol: '₫', rate: '~₹0.0034', cashTip: 'Essential', cardTip: 'Limited', upi: '❌ Not available' },
];

const upiCountries = [
  { country: 'Singapore', icon: '🇸🇬', status: 'Live', merchants: 'All major outlets, hawker centers', notes: 'Scan PayNow/NETS QR' },
  { country: 'UAE', icon: '🇦🇪', status: 'Live', merchants: 'Most retail, malls, restaurants', notes: 'Look for NPCI/UPI logo' },
  { country: 'Bhutan', icon: '🇧🇹', status: 'Live', merchants: 'Widespread', notes: 'RuPay cards also work' },
  { country: 'Nepal', icon: '🇳🇵', status: 'Live', merchants: 'Growing', notes: 'Via Fonepay QR' },
  { country: 'Sri Lanka', icon: '🇱🇰', status: 'Live', merchants: 'Major cities', notes: 'LankaQR integration' },
  { country: 'France', icon: '🇫🇷', status: 'Live', merchants: 'Eiffel Tower, major tourist spots', notes: 'Pilot phase active' },
  { country: 'Mauritius', icon: '🇲🇺', status: 'Live', merchants: 'Major tourist areas', notes: 'RuPay cards accepted' },
  { country: 'Malaysia', icon: '🇲🇾', status: 'Live', merchants: 'PayNet enabled merchants', notes: 'DuitNow linkage live' },
];

const forexTips = [
  { title: 'Best Rates', desc: 'BookMyForex, Thomas Cook online portals offer 2-3% better rates than airport counters' },
  { title: 'RBI Limits', desc: '$250,000 per year under LRS. Carry up to $3,000 cash for neighbor countries' },
  { title: 'Forex Cards', desc: 'Niyo, Fi, BookMyForex cards offer zero forex markup and locked-in rates' },
  { title: 'Airport Exchange', desc: 'Avoid! Rates are 5-10% worse than market. Only for emergency cash' },
  { title: 'Dynamic Currency Conversion', desc: 'Always decline DCC at ATMs/shops. Pay in local currency for better rates' },
  { title: 'ATM Withdrawals', desc: 'Use bank ATMs, not standalone ones. Expect ₹200-500 fee per withdrawal' },
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
        description="Complete currency guide for Indian travellers. UPI abroad, exchange rates, forex tips, card usage, and money management tips for 12+ international destinations."
        keywords="currency exchange India, forex tips travellers, UPI abroad countries, international travel money, forex card India, UPI in Singapore Dubai"
        canonicalUrl="https://rudrakshsafar.com/currency-guide"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-6xl">
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
                Everything you need to know about managing money abroad - from forex rates to UPI availability, digital payments and local currency tips for 12+ destinations.
              </p>
            </div>
          </AnimatedSection>

          {/* UPI Abroad Section - NEW */}
          <AnimatedSection delay={80}>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <div>
                  <h2 className="text-2xl font-serif font-bold text-purple-800 dark:text-purple-200">UPI Abroad - Pay with BHIM/GPay/PhonePe</h2>
                  <p className="text-sm text-purple-600 dark:text-purple-300">Indians can now use UPI in 8+ countries!</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upiCountries.map((item) => (
                  <div key={item.country} className="bg-white/80 dark:bg-background/50 rounded-xl p-4 border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-semibold">{item.country}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Live'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                      }`}>
                      {item.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2">{item.merchants}</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">{item.notes}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                💡 Tip: Make sure you have international transactions enabled in your UPI app settings before travel
              </p>
            </div>
          </AnimatedSection>

          {/* Currency Table */}
          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
              <div className="p-4 bg-muted">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Currency Comparison Table
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Country</th>
                      <th className="text-left p-4 font-semibold">Currency</th>
                      <th className="text-left p-4 font-semibold">Rate (INR)</th>
                      <th className="text-left p-4 font-semibold">Cash</th>
                      <th className="text-left p-4 font-semibold">Cards</th>
                      <th className="text-left p-4 font-semibold">UPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies.map((c, index) => (
                      <tr key={c.country} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-4 font-medium">{c.country}</td>
                        <td className="p-4">{c.currency} ({c.symbol})</td>
                        <td className="p-4 font-semibold text-secondary">{c.rate}</td>
                        <td className="p-4 text-sm">{c.cashTip}</td>
                        <td className="p-4 text-sm">{c.cardTip}</td>
                        <td className="p-4 text-sm">{c.upi}</td>
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
                  <li>• USD is accepted worldwide as backup currency</li>
                  <li>• Keep some cash separate from wallet for safety</li>
                  <li>• Declare if carrying over $5000 equivalent</li>
                  <li>• For neighbors (Nepal, Bhutan): INR ₹25,000 limit</li>
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
                  <li>• Forex cards: Niyo, Fi, BookMyForex (zero markup)</li>
                  <li>• Credit cards: HDFC Regalia, Infinia (low forex markup)</li>
                  <li>• Visa/Mastercard accepted globally, Amex limited</li>
                  <li>• Inform bank about travel dates to avoid blocks</li>
                  <li>• Keep backup card from different bank/network</li>
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
                  <li>• <strong>UPI:</strong> Works in UAE, Singapore, Nepal, Bhutan, Sri Lanka</li>
                  <li>• Enable international UPI in app settings first</li>
                  <li>• Apple Pay/Google Pay work in developed countries</li>
                  <li>• Download local apps: GrabPay (SEA), Alipay (China)</li>
                  <li>• Screenshots of payment confirmations useful</li>
                  <li>• WiFi/data essential for digital payments</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Forex Tips Grid */}
          <AnimatedSection delay={280}>
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <Wallet className="w-6 h-6 text-secondary" />
                Forex Tips & Tricks
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {forexTips.map((tip, index) => (
                  <div key={index} className="bg-background rounded-xl p-4 border border-border">
                    <h4 className="font-semibold text-secondary mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Money Safety Tips */}
          <AnimatedSection delay={300}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200">Money Safety Tips</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• Never exchange at airports - worst rates (5-10% loss)</li>
                  <li>• Use ATMs inside banks, not standalone ones</li>
                  <li>• Count money before leaving exchange counter</li>
                  <li>• Keep emergency stash separate from wallet</li>
                </ul>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• Reject worn/torn foreign notes - may not be accepted</li>
                  <li>• Take photo of exchange receipts for records</li>
                  <li>• Limit for bringing foreign currency back: ₹7,500</li>
                  <li>• Report lost cards immediately to block</li>
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
                  <h4 className="font-medium mb-2 text-green-600">✓ Recommended</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• BookMyForex.com (best online rates, doorstep delivery)</li>
                    <li>• Thomas Cook / ExTravelMoney</li>
                    <li>• RBI authorized money changers</li>
                    <li>• Bank forex counters (reliable but slightly higher rates)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">✗ Avoid</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Airport exchange counters (5-10% markup)</li>
                    <li>• Unauthorized street dealers (illegal + fake notes)</li>
                    <li>• Hotel exchange services (poor rates)</li>
                    <li>• Random money changers in tourist areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">More Travel Resources</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/travel-checklist" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Packing Checklist <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/visa-guide" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Visa Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/international-packages" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  International Packages <ArrowRight className="w-4 h-4" />
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

export default CurrencyGuide;
