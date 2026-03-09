import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Plane, AlertTriangle, CheckCircle, Globe, Shield, Clock, FileText, Smartphone, Backpack, BookOpen, Map, Phone, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQsSection from '@/components/FAQsSection';

const faqs = [
  {
    question: "Do I need to carry physical printouts of my tickets and hotel bookings?",
    answer: "Absolutely. While digital copies on your smartphone are convenient, immigration officers at airports often demand hard copies of your return flights, hotel vouchers, and visa approvals. If your phone battery dies or airport WiFi fails, physical documents are your only safety net."
  },
  {
    question: "What are the rules for carrying liquids in my cabin luggage?",
    answer: "International aviation security strictly enforces the 100ml rule. Any liquid, gel, aerosol, or paste in your carry-on luggage must be in containers of 100ml or less. These containers must all fit comfortably into a single, transparent, resealable one-liter plastic bag."
  },
  {
    question: "Should I pack power banks in check-in luggage or cabin bags?",
    answer: "Power banks and all loose lithium-ion batteries must strictly be packed in your CABIN (hand) luggage. Placing power banks in checked luggage is a massive fire hazard and will result in your bag being detained and the item confiscated by security scanners."
  },
  {
    question: "How can I pack strategically to avoid airline overweight baggage fees?",
    answer: "Purchase a digital luggage scale to weigh your bags at home. Employ the 'capsule wardrobe' strategy by packing neutral, mix-and-match layers. Wear your heaviest boots and bulky jackets on the airplane, and utilize vacuum-compression packing cubes to maximize internal suitcase volume."
  },
  {
    question: "Is it necessary to carry universal power adapters globally?",
    answer: "Yes. Electrical outlet shapes and voltages vary wildly across the globe. For example, India uses Type C/D, the UK and Dubai use Type G, the USA uses Type A/B, and Europe uses Type C/F/E. A high-quality universal travel adapter with multiple USB ports is an absolute non-negotiable."
  },
  {
    question: "What items must I absolutely keep in my carry-on bag?",
    answer: "Your carry-on must contain all irreplaceable items: your passport, physical printed itinerary, Forex cards, cash, all prescription medications, laptops, cameras, a portable power bank, and one clean change of clothing in case your checked luggage is delayed or lost."
  },
  {
    question: "What over-the-counter medicines should I pack for international travel?",
    answer: "Always pack a foundational first-aid grid: paracetamol for fever, anti-diarrheal tablets (loperamide), antacids, motion sickness pills, antihistamines for allergies, and branded Oral Rehydration Salts (ORS). Do not rely on finding these easily in foreign pharmacies."
  }
];

const TravelChecklist = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="checklist" />;
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
        title="Ultimate International Travel Checklist 2026 | Packing Guide"
        description="The definitive international travel checklist for Indians. A deep dive into cabin liquid rules, smart electronics packing, and customs constraints for flawless travel logistics."
        keywords="international travel checklist, travel packing checklist, carry on liquid rules, what to pack for international flight, travel essentials list India"
        canonicalUrl="https://rudrakshsafar.com/travel-checklist"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-slate-50">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold tracking-wide uppercase text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                Strategic Packing Logistics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                The Ultimate <span className="text-emerald-600">International Travel Checklist</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Packing is not merely throwing clothes into a suitcase; it is a tactical exercise in risk mitigation. A masterfully packed bag accelerates your airport security process, shields you from exorbitant airline fees, and ensures zero emergency supply runs abroad.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Block */}
          <AnimatedSection delay={100}>
            <div className="bg-white border-l-4 border-emerald-600 rounded-r-2xl shadow-md p-6 lg:p-8 mb-16 max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" /> What is an international travel checklist?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                An international travel checklist is a strategic inventory framework that categorizes essential travel items to prevent oversight. It guarantees that critical components—such as a 6-month valid passport, hard-copy visas, Forex cards, universal adapters, compliant cabin-liquid bags, and vital prescription medicines—are consolidated safely before departure.
              </p>
            </div>
          </AnimatedSection>

          {/* Information Table Section */}
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Backpack className="w-8 h-8 text-primary" />
                Categorized Packing Fundamentals
              </h2>
              <p className="text-slate-600 mb-6 text-lg tracking-wide">
                Break down your packing strategy into non-negotiable layers. If an item is on the left, you cannot leave India without it.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b-2 border-slate-200">
                      <th className="p-4 font-bold rounded-tl-xl w-1/4">Category</th>
                      <th className="p-4 font-bold w-1/3">Essential Checklist Item</th>
                      <th className="p-4 font-bold rounded-tr-xl w-5/12">Why It Is Absolutely Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Core Documents</td>
                      <td className="p-4 font-medium"><Link to="/travel-services/passport-assistance" className="text-emerald-600 hover:underline">Passport</Link> & Physical Visa Prints</td>
                      <td className="p-4">Digital copies fail. Airport immigration officers globally demand printed hotel bookings, return flights, and hard-copy visas for entry clearance.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Financial Assets</td>
                      <td className="p-4 font-medium"><Link to="/currency-guide" className="text-emerald-600 hover:underline">Forex Card</Link> + Small USD Cash</td>
                      <td className="p-4">Zero-markup Forex cards beat Indian credit cards on heavy FX conversion fees. USD is the ultimate backup currency during grid failures.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Electronics (Cabin)</td>
                      <td className="p-4 font-medium">Power Bank & Universal Adapter</td>
                      <td className="p-4">Lithium batteries are strictly banned in check-in luggage. Different countries use different plug sockets; a universal adapter guarantees connectivity.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Health Security</td>
                      <td className="p-4 font-medium">First-Aid & <Link to="/travel-health" className="text-emerald-600 hover:underline">Travel Insurance</Link></td>
                      <td className="p-4">Finding basic anti-diarrheals in foreign pharmacies can be impossible due to language barriers. Insurance serves as financial shielding against emergencies.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">Liquid Toiletries</td>
                      <td className="p-4 font-medium">Clear Zip-Lock Bag (Max 100ml)</td>
                      <td className="p-4">Aviation security (TSA rules) mandates that all liquids in carry-on bags be under 100ml. Anything larger will be confiscated at the security scanner.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 1: Baggage Optimization */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Plane className="w-8 h-8 text-amber-500" />
                Dominating Airline Baggage Weight Limits
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The fastest way to ruin your mood before a grand vacation to <Link to="/international-tours/europe" className="text-amber-600 font-semibold hover:underline">Europe</Link> is getting hit with a $150 excess baggage fee at the check-in counter. Budget airlines are utterly unforgiving. Invest in a digital luggage scale and weigh your bags at home. Keep your check-in luggage 1.5kg below the maximum airline limit to account for calibration discrepancies at the airport scale.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Adopt the "Capsule Wardrobe" methodology. Don't pack massive, single-use outfits. Instead, pack neutral-colored, lightweight layers that can be aggressively mixed and matched. <strong>Pro Tip:</strong> Always wear your heaviest layers—jackets, trench coats, and heavy boots—onto the airplane to artificially bypass the luggage scale entirely. Use vacuum-seal packing cubes to structurally compress your apparel, granting you 30% more cubic volume. Read our full <Link to="/travel-tips" className="text-amber-600 font-semibold hover:underline">travel hacks guide</Link> for more spatial advantages.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 2: TSA Liquids & Cabin Logic */}
          <AnimatedSection delay={250}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                Cabin Liquid Constraints & Security Checkpoints
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The "100ml Liquid Rule" is universally enforced globally. If you attempt to carry a 200ml bottle of premium cologne or a 150ml tube of face wash in your cabin bag—even if the bottle is half empty—<strong>security will confiscate and destroy it immediately.</strong> All pastes, gels, aerosols, and liquids must be in containers of 100ml or less, and collectively, they must all fit into a transparent, quart-sized zip-lock bag for rapid scanning.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When approaching the X-Ray scanner, extreme efficiency is required. Keep your laptop and liquid bag at the very top of your carry-on because you must pull them out entirely and place them into a separate plastic tray. If these are buried beneath socks and chargers, you will bottleneck the queue.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 3: Electronics & Customs */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-blue-600" />
                Smart Electronics Packing & Customs Declarations
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Electronics are the lifelines of modern travel. Every country utilizes different plug configurations (Type A, C, G). Do not assume your Indian two-pin charger will plug securely into a socket in <Link to="/international-tours/dubai" className="text-blue-600 font-semibold hover:underline">Dubai</Link> or the <Link to="/international-tours/thailand" className="text-blue-600 font-semibold hover:underline">Thailand</Link> islands. A high-grade universal travel adapter featuring multiple USB-C ports is critical for centralizing your charging grid in the hotel room.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" /> Customs Declaration Warning
                  </h4>
                  <p className="text-blue-800 text-base leading-relaxed">
                    Be cautious with high-value electronics and drone cameras. Certain countries strictly prohibit drone flights without prior aviation clearances. Furthermore, if you are leaving India with extremely expensive camera lenses or laptops, declare them at the Indian customs desk before flying out. This secures an export certificate, ensuring you are not slapped with heavy import duties upon your return to India.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={350}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Packing & Luggage FAQs</h2>
              <FAQsSection faqs={faqs} title="" />
            </div>
          </AnimatedSection>

          {/* Helpful Travel Guides */}
          <AnimatedSection delay={400}>
            <div className="bg-slate-100 rounded-3xl p-8 mb-16 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                Helpful Travel Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/travel-tips" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  Expert Travel Hacks <Globe className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-health" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  Travel Health & Safety <Shield className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/visa-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  Visa Document Prep <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  Managing Travel Funds <CreditCard className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/best-time-to-visit" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  When To Travel <Clock className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/passport-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-emerald-600 border border-slate-100 flex items-center justify-between">
                  Passport Regulations <Map className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Conversion Layer */}
          <AnimatedSection delay={450}>
            <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Plan Your Trip With Rudraksh Safar</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Once your bags are securely packed, let us handle the rest. We craft precision-engineered itineraries to Dubai, Thailand, and Bali, integrating flights, vetted hotels, and guaranteed sightseeing grids.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="https://wa.me/919406182174" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                    <Phone className="w-5 h-5" /> Trip Consultation
                  </a>
                  <Link to="/international-tours" className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white transition-all flex items-center justify-center gap-2">
                    <Plane className="w-5 h-5" /> View International Packages
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

export default TravelChecklist;
