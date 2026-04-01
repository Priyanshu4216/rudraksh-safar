import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banknote, CreditCard, Smartphone, AlertTriangle, CheckCircle, ArrowRight, Globe, Wallet, XCircle, Building2, Palmtree, Mountain, ShieldAlert, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQSection from '@/components/seo/FAQSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Button } from '@/components/ui/button';

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
  { country: 'Europe (Schengen)', currency: 'Euro (EUR)', symbol: '€', rate: '~₹90-93', cashTip: 'Cards preferred', cardTip: 'Excellent', upi: 'Select Tourist Spots (Pilot)' },
  { country: 'Japan', currency: 'Japanese Yen (JPY)', symbol: '¥', rate: '~₹0.56', cashTip: 'Still very cash-based', cardTip: 'Improving', upi: '❌ Not available' },
  { country: 'Vietnam', currency: 'Vietnamese Dong (VND)', symbol: '₫', rate: '~₹0.0034', cashTip: 'Essential', cardTip: 'Limited', upi: '❌ Not available' },
];

const faqs = [
  {
    question: "Does the 20% TCS (Tax Collected at Source) apply to International Forex Cards?",
    answer: "Yes, since October 2023, expenditures over ₹7 Lakhs per financial year using Forex cards or international remittance attract a 20% TCS. However, international Credit Card spends currently fall outside this specific 20% LRS limit, though the RBI updates these policies frequently."
  },
  {
    question: "Should I exchange INR for Baht/Dirhams in India or at the destination airport?",
    answer: "NEVER exchange money at airports—the markup rates are usually 5% to 15% worse than market value. Always exchange your INR for your destination's local currency through an RBI-authorized broker (AD-II) in your Indian home city 3-4 days prior to departure."
  },
  {
    question: "What is Dynamic Currency Conversion (DCC) and why should I avoid it?",
    answer: "When sliding your Indian card at a foreign merchant, the machine will often ask, 'Pay in INR or Local Currency?'. Choosing INR triggers DCC. The merchant's bank will apply a terrible exchange rate on the spot. NEVER accept DCC. Always choose to pay in the LOCAL foreign currency."
  },
  {
    question: "Are Niyo Global or Fi Money Forex Cards reliable internationally?",
    answer: "Yes. Zero-markup cards like Niyo, Scapia, and Fi have revolutionized Indian travel. They charge 0% forex markup compared to traditional bank debit cards which charge 3.5% + GST per swipe. We highly recommend carrying one zero-markup card."
  },
  {
    question: "Can I use Indian UPI directly in Dubai and Singapore without extra charges?",
    answer: "You can use UPI safely, but the exchange rate applied includes a marginal banking network markup determined by NPCI/Liquid Group at the time of the transaction. It is marginally higher than raw mid-market rates but significantly cheaper than cash conversion."
  },
  {
    question: "What currency is exactly used in Dubai?",
    answer: "The official currency of Dubai and the UAE is the Emirati Dirham (AED), currently pegged to the US Dollar. One Dirham equals roughly ₹23 to ₹24 INR, making conversion math relatively straightforward for Indian tourists."
  },
  {
    question: "How much minimum cash is physically required for the Thailand Visa on Arrival?",
    answer: "Thai immigration officials often strictly randomly check if tourists hold the mandatory 10,000 THB per person (or 20,000 THB per family) in physical cash upon entering Suvarnabhumi or DMK. It is highly recommended to carry this in Baht or equivalent USD."
  }
];

const upiCountries = [
  { country: 'Singapore', icon: <Building2 className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'All major outlets, hawker centers', notes: 'Scan PayNow/NETS QR' },
  { country: 'UAE', icon: <Building2 className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'Most retail, malls, restaurants', notes: 'Look for NPCI/UPI logo' },
  { country: 'Bhutan', icon: <Mountain className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'Widespread', notes: 'RuPay cards also work' },
  { country: 'Nepal', icon: <Mountain className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'Growing', notes: 'Via Fonepay QR' },
  { country: 'Sri Lanka', icon: <Palmtree className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'Major cities', notes: 'LankaQR integration' },
  { country: 'France', icon: <Globe className="w-8 h-8 text-primary" />, status: 'Pilot (Limited)', merchants: 'Eiffel Tower, select spots', notes: 'Pilot phase active' },
  { country: 'Mauritius', icon: <Palmtree className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'Major tourist areas', notes: 'RuPay cards accepted' },
  { country: 'Malaysia', icon: <Globe className="w-8 h-8 text-primary" />, status: 'Live', merchants: 'PayNet enabled merchants', notes: 'DuitNow linkage live' },
];

const forexTips = [
  { title: 'Best Rates', desc: 'Authorized forex dealers & online portals offer 2-3% better rates than airport counters' },
  { title: 'RBI Limits', desc: '$250,000 per year under LRS. Carry up to $3,000 cash for neighbor countries' },
  { title: 'Forex Cards', desc: 'Zero-markup forex cards are best for shopping. Use credit cards for hotel deposits.' },
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
        title="Currency & Money Guide for Indian Travellers (UPI, Forex & Cards) | Rudraksh Safar"
        description="The definitive money guide for Indian international travellers. Learn how to carry money (Cash vs Card vs UPI), avoid forex markups, and plan your travel budget."
        keywords="currency exchange guide india, upi abroad list 2026, best forex card for indian travellers, how much cash to carry abroad, currency planning guide"
        canonicalUrl="https://rudrakshsafar.com/currency-guide mb-4"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HowTo",
              "name": "How to Carry Money for International Travel",
              "step": [
                { "@type": "HowToStep", "name": "Step 1: Calculate Budget", "text": "Estimate daily expenses including food, travel, and shopping." },
                { "@type": "HowToStep", "name": "Step 2: Split Your Funds", "text": "Carry 60-70% in Forex Card, 15-20% in Cash, and rest as backup in Credit Card/UPI." },
                { "@type": "HowToStep", "name": "Step 3: Enable International Usage", "text": "Activate international transactions on your cards and UPI apps 24 hours before travel." },
                { "@type": "HowToStep", "name": "Step 4: Keep Backup", "text": "Always carry one backup card from a different bank." }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does UPI work internationally?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, UPI works in UAE, Singapore, Bhutan, Nepal, Sri Lanka, and select pilots in France/Mauritius. Ensure 'International UPI' is enabled." }
                },
                {
                  "@type": "Question",
                  "name": "Should I exchange currency at the airport?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. Airport exchange rates have high markups (5-10%). Exchange currency at authorized city dealers before reaching the airport." }
                }
              ]
            }
          ]
        }}
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Currency Guide', path: '/currency-guide' }]} />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Banknote className="w-4 h-4" />
                Money Planning Guide
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                Currency & Money Guide <br />
                <span className="text-primary">for Indian Travellers</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                (UPI, Forex & Cards)
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 mb-8">
                The definitive guide to managing money abroad. We help you choose the right mix of Cash, Cards, and UPI to save money and stay safe.
              </p>
            </div>

            {/* Featured Snippet Definition */}
            <div className="mb-12 max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2 text-foreground">What is the best way to carry money internationally?</h2>
                  <p className="text-secondary-foreground leading-relaxed">
                    The most financially efficient way for Indians to carry money internationally is a hybrid approach. You should load <strong>60-70%</strong> of your budget onto a zero-markup Forex card for primary spending, carry <strong>15-20%</strong> in physical cash (preferably USD or local currency) for tips and street food, and keep the remaining <strong>10-15%</strong> available via International UPI or a backup Credit Card for absolute emergencies.
                  </p>
                </div>
              </div>
            </div>

            {/* WHO THIS IS FOR */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl text-center">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-1">🛫 First-Time Travellers</h3>
                <p className="text-xs text-muted-foreground">Avoid airport scams & carry the right cash mix.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl text-center">
                <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-1">👨‍👩‍👧 Families & Honeymooners</h3>
                <p className="text-xs text-muted-foreground">Safe payment methods & backup plans.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl text-center">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-300 mb-1">💼 Business Travellers</h3>
                <p className="text-xs text-muted-foreground">Expense tracking & corporate card usage.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* HOW TO CARRY MONEY STEP-BY-STEP */}
          <AnimatedSection delay={60}>
            <div className="bg-white dark:bg-card border-none shadow-lg rounded-2xl p-8 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-full opacity-50"></div>
              <h2 className="text-2xl font-serif font-bold mb-6">How Indians Should Carry Money Abroad</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg">60-70% in Forex Card</h3>
                    <p className="text-sm text-muted-foreground">Load heavily on a zero-markup Forex Card. It's safe, locks in rates, and works like a debit card.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg">15-20% in Cash (USD or Local)</h3>
                    <p className="text-sm text-muted-foreground">Essential for taxis, tips, and small shops. Carry USD for easy exchange anywhere.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg">10-15% via UPI / Credit Card (Backup)</h3>
                    <p className="text-sm text-muted-foreground">Use UPI where available (Scan & Pay). Keep one Credit Card for hotel deposits or emergencies.</p>
                  </div>
                </div>
              </div>
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
                        <td className="p-4 text-sm">
                          {c.upi.includes('Available') ? (
                            <div className="flex items-center gap-1 text-green-600 font-medium">
                              <CheckCircle className="w-4 h-4" /> Available
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <XCircle className="w-4 h-4" /> Not available
                            </div>
                          )}
                        </td>
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
                <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200">Common Money Mistakes Indians Make</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Airport Exchange:</strong> Never exchange INR at airports (5-10% loss).</li>
                  <li>• <strong>DCC Trap:</strong> If a machine asks "Pay in INR or USD?", ALWAYS choose USD/Local. Paying in INR adds 3-5% markup.</li>
                  <li>• <strong>Single Card:</strong> Relying on just one card. If it gets blocked, you are stuck.</li>
                </ul>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Disabled International Usage:</strong> Forgetting to enable global transactions on your app.</li>
                  <li>• <strong>Torn Notes:</strong> Foreign exchanges reject notes with writing or tears. Check carefully.</li>
                  <li>• <strong>Too Much Cash:</strong> Carrying riskily large amounts. Use cards instead.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Market vs Mall Dynamics */}
          <AnimatedSection delay={305}>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Palmtree className="text-primary w-6 h-6" /> Street Markets vs. Luxury Malls</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Knowing <em>where</em> you will spend dictates <em>how</em> you should pack money. For instance, if your itinerary is heavily focused on shopping at the massive Chatuchak Weekend Market in Thailand or haggling in the Gold Souk in Dubai, physical cash is absolutely non-negotiable. Smaller merchants will refuse cards or penalize you with a 3% swipe fee.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Conversely, if you are dining at fine restaurants overlooking the Burj Khalifa or paying for entrance tickets at Marina Bay Sands in Singapore, using your zero-markup Forex card or international credit card is far safer and more universally accepted than fumbling with thousands of local notes. Always balance your cash withdrawals based on your daily itinerary.
              </p>
            </div>
          </AnimatedSection>

          {/* Deep Economics Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={310}>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-2xl p-8 h-full">
                <ShieldAlert className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-4">The Airport Exchange Scam</h3>
                <p className="text-sm text-red-800/80 dark:text-red-300/80 leading-relaxed mb-4">
                  Exchanging your Indian Rupees for foreign currency directly at massive international airport transit zones (such as Changi (SIN), Suvarnabhumi (BKK), or Dubai (DXB)) guarantees your financial ruin for the trip. These counters operate as absolute monopolies in terminal buildings targeting unprepared tourists.
                </p>
                <p className="text-sm text-red-800/80 dark:text-red-300/80 leading-relaxed font-bold">
                  If the real Google rate for 1 USD is ₹84, an airport counter will sell it to you at ₹89 and buy your leftover dollars back at ₹78. That is an outright 10% theft. Always pre-buy currency via an AD-II dealer before taking your flight.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={320}>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-8 h-full">
                <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4">Dynamic Currency Conversion (DCC)</h3>
                <p className="text-sm text-amber-800/80 dark:text-amber-300/80 leading-relaxed mb-4">
                  When you insert your forex/credit card into a terminal in Dubai or Singapore, the LCD screen will confusingly ask: "Pay in INR or Pay in AED?".
                </p>
                <p className="text-sm text-amber-800/80 dark:text-amber-300/80 leading-relaxed font-bold">
                  NEVER SELECT INR. Selecting INR allows the foreign merchant's POS machine to define the exchange rate, which includes a secretive 4-6% conversion markup. ALWAYS select exactly the local currency (AED/THB/SGD).
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={350}>
            <div className="bg-secondary/10 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Where to Exchange Currency in India
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Recommended Channels</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• <strong>Forex Consultation by Rudraksh Safar</strong> (We guide on best rates)</li>
                    <li>• Authorized Dealer (AD-II) license holders</li>
                    <li>• Bank Forex Counters (Reliable)</li>
                    <li>• Online Forex Marketplaces (For comparison)</li>
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

          {/* Detailed FAQs with Schema Inside */}
          <section className="py-12 border-t border-border mb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-center mb-8">Forex Legalities & Travel FAQs</h2>
              <FAQSection title="" faqs={faqs} />
            </div>
          </section>

          {/* Helpful Travel Guides */}
          <section id="helpful-guides" className="py-12 bg-white/50 border-y max-w-5xl mx-auto mt-12 mb-12">
            <div className="px-4">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Helpful Travel Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/international/thailand/guides" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🇹🇭 Thailand Travel Guide
                </Link>
                <Link to="/international/dubai/DubaiMaster" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🌆 Dubai Travel Guide
                </Link>
                <Link to="/budget-tour-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  💰 Budget Travel Tips
                </Link>
                <Link to="/beach-holiday-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🏖️ Best Beach Holidays
                </Link>
              </div>
            </div>
          </section>

          {/* Commercial CTA */}
          <section className="mt-12 py-16 text-center bg-primary text-primary-foreground rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="relative z-10 px-4">
              <h2 className="text-4xl font-bold mb-6">Plan Your Trip With Rudraksh Safar</h2>
              <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
                Tired of worrying about currency conversions and budget planning? Let our travel experts design a fully prepaid, hassle-free international holiday tailored precisely to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold h-14 px-8 rounded-full shadow-lg text-lg" asChild>
                  <a href="https://wa.me/919203650311?text=Hi, I want to plan an international trip and need assistance with package pricing.">
                    Consult an Expert via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 font-bold h-14 px-8 rounded-full shadow-lg text-lg" asChild>
                  <Link to="/contact">Request a Callback</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default CurrencyGuide;
