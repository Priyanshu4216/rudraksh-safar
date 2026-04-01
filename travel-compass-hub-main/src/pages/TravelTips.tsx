import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Shield, Globe, AlertTriangle, CheckCircle, Plane, CreditCard, Clock, BookOpen, Map, Phone, Briefcase, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQsSection from '@/components/FAQsSection';

const faqs = [
  {
    question: "How early should I arrive at the airport for an international flight from India?",
    answer: "For international travel from India, you should arrive at the airport at least 3 to 4 hours before your scheduled departure. Immigration queues, particularly at major hubs like Delhi (DEL) and Mumbai (BOM), can take over an hour during peak night departure windows."
  },
  {
    question: "Do I need to carry US Dollars for international travel?",
    answer: "It is highly recommended to carry a small emergency reserve of US Dollars (around $100-$200) when traveling internationally, even if you have a zero-markup Forex card. USD is universally accepted at airport transit hubs and serves as an excellent emergency backup in case ATM networks fail."
  },
  {
    question: "What is the best way to handle mobile roaming and internet abroad?",
    answer: "Instead of expensive international roaming packs from Indian telecom providers, the most cost-effective solution is purchasing a local tourist SIM card upon arrival or downloading an e-SIM (like Airalo) before you depart. This guarantees cheaper, faster 4G/5G data access for navigation."
  },
  {
    question: "Can I drink tap water while traveling internationally?",
    answer: "This strictly depends on the destination. While tap water is generally safe across major cities in Western Europe, the USA, and Singapore, it is not recommended in Southeast Asia (Thailand, Bali), the Middle East, or Africa. Always stick to sealed bottled water or use water purification tablets."
  },
  {
    question: "What documents do I need to clear airport immigration smoothly?",
    answer: "To ensure seamless immigration clearance, present a valid passport (minimum 6 months validity), your approved visa, a confirmed return or onward flight ticket, confirmed hotel accommodation vouchers, and proof of sufficient funds (cash or Forex statements)."
  },
  {
    question: "Should I exchange Indian Rupees (INR) at the destination or before leaving?",
    answer: "Never exchange Indian Rupees at foreign airports or destination currency desks, as INR conversion rates abroad are notoriously poor. Always load your funds onto a multi-currency Forex card before leaving India, and carry destination currency or USD for immediate cash needs."
  },
  {
    question: "Is travel insurance mandatory for going abroad?",
    answer: "While travel insurance is only legally mandatory for Schengen visa applications and a few specific countries, it is an absolute necessity for all international travel. Medical treatments abroad are exorbitantly expensive, and insurance protects you from financial ruin during emergencies."
  }
];

const TravelTips = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="tips" />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="International Travel Tips from India 2026 | Ultimate Guide"
        description="Discover the most crucial international travel tips from India. Learn how to clear immigration, avoid forex scams, and plan an unforgettable overseas trip."
        keywords="international travel tips from India, airport immigration tips, first time international travel, travel hacks for indians, forex card tips"
        canonicalUrl="https://rudrakshsafar.com/travel-tips"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-slate-50">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide uppercase mb-4">
                <Lightbulb className="w-4 h-4" />
                Expert Travel Advice
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                Vital <span className="text-primary">International Travel Tips</span> from India
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Navigating foreign borders, managing multiple currencies, and understanding new cultural landscapes can be daunting. Equip yourself with these expert strategies to travel the globe with absolute confidence.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Block */}
          <AnimatedSection delay={100}>
            <div className="bg-white border-l-4 border-primary rounded-r-2xl shadow-md p-6 lg:p-8 mb-16 max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> What are the most important international travel tips from India?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                When planning an international trip from India, securing a valid passport and the correct visa are the first crucial steps. Beyond basic documents, prioritizing comprehensive travel insurance, carrying a zero-markup Forex card, organizing a flexible itinerary, and understanding airport immigration protocols ensure a secure, hassle-free global experience.
              </p>
            </div>
          </AnimatedSection>

          {/* Table Category */}
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Travel Hacks vs. Common Mistakes</h2>
              <p className="text-slate-600 mb-6 text-lg">Compare amateur pitfalls with seasoned traveler strategies to instantly upgrade your travel efficiency.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b-2 border-slate-200">
                      <th className="p-4 font-bold rounded-tl-xl w-1/3">Common Traveler Mistake</th>
                      <th className="p-4 font-bold text-primary w-2/3">Pro Travel Hack</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-1" /> Exchanging currency at the airport</td>
                      <td className="p-4">Airports offer the worst exchange rates globally. Arrive with a pre-loaded Zero-Markup Forex card and withdraw local currency from international ATM networks instead.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-1" /> Overpacking heavy suitcases</td>
                      <td className="p-4">Utilize the "capsule wardrobe" technique. Pack versatile, neutral-colored layers that mix-and-match effortlessly. Use compressible packing cubes to save 30% space.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-1" /> Relying entirely on Indian debit cards</td>
                      <td className="p-4">Many Indian debits incur a massive 3.5% foreign transaction fee (FX fee). Carry multi-currency Forex cards, and always have emergency USD cash hidden.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-1" /> Ignoring transit visa requirements</td>
                      <td className="p-4">Always verify if your layover airport requires a transit visa. Booking connecting flights on different airlines often requires clearing immigration midway.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-1" /> Assuming mobile networks will work</td>
                      <td className="p-4">International roaming packs are extortionate. Buy an e-SIM (like Airalo) before you board your flight so you have instant 4G data access the moment you land.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 1 */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Mistakes First-Time International Travelers Make
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Stepping out of India for the first time is thrilling, but rookies often fall into operational traps that cost time and money. The most critical error is failing to understand passport validity constraints. Check out our deep dive into the <Link to="/travel-services/passport-assistance" className="text-primary font-semibold hover:underline">Indian Passport 6-month validity rule</Link> to ensure you aren't denied boarding.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Another devastating error is assuming that a printed itinerary is merely optional. In the digital age, phones die and airport WiFi gateways often require SMS verification that you cannot receive without a working network. Always carry a physical dossier containing your return flights, approved visa documents (check our <Link to="/travel-services/visa-assistance" className="text-primary font-semibold hover:underline">Visa Application Guide</Link>), and hotel confirmations. This physical folder is your ultimate fallback.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Finally, never underestimate weather disparities. If you are flying to <Link to="/international-tours/europe" className="text-primary font-semibold hover:underline">Europe</Link> in November, the sudden temperature shock compared to Indian climates can be brutal. Layered clothing is essential.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 2 */}
          <AnimatedSection delay={250}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Plane className="w-8 h-8 text-secondary" />
                Airport Immigration Tips & Security Protocols
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The airport immigration counter is where your vacation officially begins—or effectively ends. Border Control Officers possess ultimate authority. When approaching the counter, remove your sunglasses, hat, and earphones. Greet the officer politely and hand over your passport alongside your boarding pass. Do not produce additional documents until explicitly requested.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Immigration officers look for "intent." If you are traveling on a tourist visa to locales like <Link to="/international-tours/thailand" className="text-secondary font-semibold hover:underline">Thailand</Link> or <Link to="/international-tours/bali" className="text-secondary font-semibold hover:underline">Bali</Link>, they want to guarantee you will return to India. Be prepared to succinctly state your purpose of visit: "I am here for a 7-day holiday." Immediately have your confirmed return ticket and accommodation vouchers visibly ready.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-6">
                  <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Immigration Red Flags
                  </h4>
                  <p className="text-amber-800 text-base leading-relaxed">
                    Stuttering over basic itinerary questions, lacking proof of sufficient daily funds, or attempting to joke with border officials are strict red flags. Answer questions with absolute directness: "Yes," "No," or "I am staying at the Marriott."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 3 */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-emerald-600" />
                Forex & Financial Management Abroad
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-emerald-800">The Forex Card Advantage</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Multi-currency Forex cards lock in conversion rates, shielding you from currency market volatility during your trip. Unlike standard Indian credit cards, they avoid the steep 3.5% foreign markup fee. If you are analyzing conversion rates, explore our complete <Link to="/currency-guide" className="text-emerald-600 font-semibold hover:underline">International Currency Guide</Link> for detailed metrics.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-emerald-800">Dynamic Currency Conversion (DCC)</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    When swiping your card at a restaurant in <Link to="/international-tours/dubai" className="text-emerald-600 font-semibold hover:underline">Dubai (UAE)</Link>, the merchant terminal may ask if you want to pay in AED or INR. <strong>Always choose the local currency (AED).</strong> Choosing INR triggers "Dynamic Currency Conversion", resulting in massive hidden conversion penalties.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Safety & Packing */}
          <AnimatedSection delay={350}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-purple-600" />
                Strategic Luggage & Safety Preparations
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Proper packing directly impacts your mobility and safety. Airlines strictly enforce cabin baggage limits (usually 7kg) and liquid constraints (max 100ml per bottle inside a clear zip-lock bag). Never pack lithium-ion batteries or power banks in your check-in luggage; they must remain in your cabin bag due to fire risks. For an exhaustive itemized breakdown, download our <Link to="/travel-checklist" className="text-purple-600 font-semibold hover:underline">Complete Packing Checklist</Link>.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Regarding safety, pickpocketing is a genuine threat in heavily touristed European squares and crowded Asian markets. Invest in a discrete anti-theft money belt worn under your clothing to safeguard your passport and emergency credit cards. Keep digital scans of your passport securely backed up on Google Drive or iCloud so that, in the event of theft, you can rapidly expedite an emergency certificate from the <Link to="/travel-safety" className="text-purple-600 font-semibold hover:underline">Indian Embassy</Link>.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  If engaging in high-risk activities like scuba diving in the <Link to="/international-tours/maldives" className="text-purple-600 font-semibold hover:underline">Maldives</Link> or snow sports anywhere, ensure your medical coverage is bulletproof. Review our <Link to="/travel-health" className="text-purple-600 font-semibold hover:underline">Travel Health & Insurance Guide</Link> to understand evacuation policies and pre-existing condition clauses.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={400}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Frequently Asked Questions</h2>
              <FAQsSection faqs={faqs} title="" />
            </div>
          </AnimatedSection>

          {/* Helpful Travel Guides */}
          <AnimatedSection delay={450}>
            <div className="bg-slate-100 rounded-3xl p-8 mb-16 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Helpful Travel Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/best-time-to-visit" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Best Time to Visit <Plane className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/visa-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Global Visa Guide <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Currency Exchange Guide <CreditCard className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-checklist" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Packing Checklist <Briefcase className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-health" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Travel Health & Insurance <Shield className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/passport-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-primary border border-slate-100 flex items-center justify-between">
                  Indian Passport Rules <Map className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Conversion Layer */}
          <AnimatedSection delay={500}>
            <div className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Plan Your Trip With Rudraksh Safar</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Skip the stress of independent planning. Let our destination experts curate your itinerary, handle all visa complexities, and secure premium international hotel blocks at unbeatable rates.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="https://wa.me/919203650311" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                    <Phone className="w-5 h-5" /> Free Trip Consultation
                  </a>
                  <Link to="/international-tours" className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white transition-all flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" /> Explore Tour Packages
                  </Link>
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

export default TravelTips;
