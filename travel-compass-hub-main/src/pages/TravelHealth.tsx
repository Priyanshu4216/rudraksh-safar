import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Syringe, Shield, Phone, Pill, AlertTriangle, CheckCircle, Globe, Stethoscope, FileText, Plane, Briefcase, Map, CreditCard, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQsSection from '@/components/FAQsSection';

const faqs = [
  {
    question: "Is travel insurance necessary for Indian travelers going abroad?",
    answer: "Absolutely. While it is only legally mandatory for Schengen visas and a few specific countries, travel insurance is vital for all international trips. Medical costs in countries like the USA, Europe, or Singapore can easily exceed tens of lakhs for minor emergencies. Insurance shields you from catastrophic financial ruin."
  },
  {
    question: "How can I avoid severe jet lag when traveling across multiple time zones?",
    answer: "To mitigate jet lag, begin adjusting your sleep schedule three days prior to departure. During the flight, stay rigorously hydrated, abstain from heavy alcohol, and synchronize your watch to your destination's time zone immediately upon boarding. Once you land, maximize exposure to natural sunlight to reset your circadian rhythm."
  },
  {
    question: "Do I need the Yellow Fever vaccination to travel internationally?",
    answer: "The Yellow Fever vaccination is generally mandatory if you are traveling to or transiting through specific countries in Africa and South America. If you are returning to India from an endemic zone, immigration authorities will require you to present a valid Yellow Fever certificate; otherwise, you may face mandatory quarantine."
  },
  {
    question: "Is it safe to drink tap water during an international holiday?",
    answer: "Safety varies drastically by region. Tap water is largely considered safe across major cities in Western Europe, the USA, Canada, and Australia. However, when traveling through Southeast Asia, Latin America, or Africa, you should exclusively consume sealed bottled water and avoid ice cubes in your beverages."
  },
  {
    question: "What essential medicines should be included in an international travel medical kit?",
    answer: "A comprehensive travel medical kit should include paracetamol (for fever/pain), anti-diarrheal tablets (like Imodium), antacids, motion sickness pills, oral rehydration salts (ORS), basic band-aids, and a complete course of any personal prescription medications alongside an official doctor's letter."
  },
  {
    question: "What should I do if I experience a medical emergency while abroad?",
    answer: "First, immediately dial the local emergency number (e.g., 911 in the USA, 112 in Europe). Second, contact the 24/7 global emergency hotline provided by your travel insurance company before being admitted to a hospital, as they will direct you to a preferred network facility and initiate the claims process."
  },
  {
    question: "Can I carry Ayurvedic or homeopathic medicines internationally?",
    answer: "Carrying unlabelled powders or mixed herbs can trigger intense scrutiny at foreign customs. If you must carry Ayurvedic or homeopathic treatments, ensure they are in sealed, original commercial packaging with clear English ingredient labels, and accompanied by a formal prescription."
  }
];

const TravelHealth = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="health" />;
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
        title="Travel Health Tips for International Travel | Indian Travelers Guide 2026"
        description="Crucial travel health tips for international travel. Learn about vaccinations, how to avoid food poisoning, and the critical importance of travel insurance coverage."
        keywords="travel health tips for international travel, healthy travel guide, travel insurance for indians, food poisoning abroad, international travel vaccinations"
        canonicalUrl="https://rudrakshsafar.com/travel-health"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-slate-50">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-bold tracking-wide uppercase text-sm mb-4">
                <Heart className="w-4 h-4" />
                Global Health & Safety
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                Vital <span className="text-red-600">Travel Health Tips</span> for International Travel
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A medical emergency in a foreign country can be physically devastating and financially ruinous. By adhering to preventative health protocols and securing robust insurance, you can explore the globe with absolute peace of mind.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Block */}
          <AnimatedSection delay={100}>
            <div className="bg-white border-l-4 border-red-600 rounded-r-2xl shadow-md p-6 lg:p-8 mb-16 max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-red-600" /> Why are travel health tips for international travel important?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                Prioritizing travel health ensures your international journey is safe and uninterrupted. Essential travel health tips include consulting a doctor for destination-specific vaccinations (like Yellow Fever), packing a comprehensive first-aid kit, staying hydrated, verifying food safety protocols, and carrying robust travel insurance for medical emergencies abroad.
              </p>
            </div>
          </AnimatedSection>

          {/* Information Table Section */}
          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 mb-16 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                Regional Health & Insurance Requirements
              </h2>
              <p className="text-slate-600 mb-6 text-lg tracking-wide">
                Below is a high-level summary of the health and insurance mandates across popular transit and destination hubs for Indian citizens.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 border-b-2 border-slate-200">
                      <th className="p-4 font-bold rounded-tl-xl w-1/4">Destination Country</th>
                      <th className="p-4 font-bold w-1/3">Recommended / Required Vaccines</th>
                      <th className="p-4 font-bold rounded-tr-xl w-5/12">Travel Insurance Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium"><Link to="/international-tours/europe" className="text-primary hover:underline">Schengen Area (Europe)</Link></td>
                      <td className="p-4">Standard routine vaccinations.</td>
                      <td className="p-4 font-semibold text-red-600">Strictly Mandatory (Min €30,000 coverage required for visa approval).</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium"><Link to="/international-tours/thailand" className="text-primary hover:underline">Thailand</Link> & Southeast Asia</td>
                      <td className="p-4">Hepatitis A, Typhoid, Tetanus.</td>
                      <td className="p-4 text-emerald-600">Highly Recommended due to high rates of scooter accidents and foodborne illnesses.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium"><Link to="/international-tours/dubai" className="text-primary hover:underline">UAE (Dubai, Abu Dhabi)</Link></td>
                      <td className="p-4">Standard routine vaccinations.</td>
                      <td className="p-4 text-emerald-600">Highly Recommended. Private healthcare in the UAE is exceptionally expensive.</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium">South Africa / Kenya</td>
                      <td className="p-4 font-semibold">Yellow Fever & Malaria Prophylaxis.</td>
                      <td className="p-4 text-emerald-600">Crucial due to rural safari logistics and potential medical evacuation needs.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium"><Link to="/international-tours/singapore" className="text-primary hover:underline">Singapore</Link></td>
                      <td className="p-4">Routine vaccines. Be wary of Dengue.</td>
                      <td className="p-4 text-emerald-600">Highly Recommended to cover world-class, expensive private hospital fees.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 1: Food & Water */}
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                How to Defend Against Food Poisoning Abroad
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  "Traveler's Diarrhea" is the most prevalent malady afflicting tourists globally. A severe case of food poisoning will not only confine you to your hotel room but can completely decimate your carefully planned <Link to="/travel-checklist" className="text-amber-600 font-semibold hover:underline">travel itinerary</Link>. The golden rule of international culinary exploration is: <strong>"Boil it, cook it, peel it, or forget it."</strong>
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When journeying through vibrant street food capitals like <Link to="/destinations/thailand/bangkok" className="text-amber-600 font-semibold hover:underline">Bangkok</Link> or local markets in <Link to="/international-tours/bali" className="text-amber-600 font-semibold hover:underline">Bali</Link>, prioritize vendors with massive queues of local residents, as high turnover guarantees fresh ingredients. Strictly avoid buffet trays that have been sitting at room temperature, unpasteurized dairy, and salads washed in local tap water. Most critically, <strong>avoid ice cubes</strong> in your beverages, as ice is frequently manufactured from unfiltered communal water systems.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <span className="text-amber-900 font-medium">Always carry branded Oral Rehydration Salts (ORS).</span>
                  </li>
                  <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <span className="text-amber-900 font-medium">Rely exclusively on sealed, bottled water for hydration and brushing teeth.</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 2: Travel Insurance */}
          <AnimatedSection delay={250}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Demystifying Travel Insurance Basics
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Neglecting to purchase comprehensive outbound travel insurance before flying from India is a monumental risk. In the United States, an ambulance ride alone can trigger a $2,000 invoice. If you fall severely ill on a cruise ship or while trekking in <Link to="/international-tours/nepal" className="text-blue-600 font-semibold hover:underline">Nepal</Link>, the cost of a helicopter medical evacuation can exceed $50,000. Your standard Indian health insurance policy will <strong>not</strong> cover international incidents.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                    <h3 className="font-bold text-blue-900 text-xl mb-3">Crucial Policy Clauses</h3>
                    <ul className="space-y-3 text-blue-800">
                      <li className="flex gap-2"><CheckCircle className="w-5 h-5 shrink-0" /> Ensure minimum coverage limits of $100,000 for medical emergencies.</li>
                      <li className="flex gap-2"><CheckCircle className="w-5 h-5 shrink-0" /> Verify explicit coverage for "Medical Evacuation & Repatriation".</li>
                      <li className="flex gap-2"><CheckCircle className="w-5 h-5 shrink-0" /> Check for trip cancellation and luggage delay compensation.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 text-xl mb-3">The Pre-Existing Trap</h3>
                    <p className="text-slate-700 leading-relaxed">
                      If you suffer from diabetes, heart conditions, or asthma, you must declare these pre-existing conditions during policy purchase. Attempting to hide them will void your entire policy instantly during the claims investigation process if an emergency occurs. Note that getting robust insurance is just as important as successfully securing your <Link to="/travel-services/visa-assistance" className="text-primary hover:underline">travel visa</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Traveler Intent Section 3: Deep Vein Thrombosis & Jet Lag */}
          <AnimatedSection delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Plane className="w-8 h-8 text-indigo-500" />
                Surviving Long-Haul Flight Stress
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Sitting immobile for 12+ hours on long-haul segments to Europe or the Americas dramatically increases your risk of Deep Vein Thrombosis (DVT), a potentially fatal blood clot. Combat DVT by wearing medical-grade compression socks, performing systematic calf stretches in your seat, and walking the aircraft aisles every two hours. Never rely on sleeping pills to knock you out for the entire flight.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Additionally, the extremely low humidity inside an aircraft cabin severely dehydrates your system. Compensate by drinking water continuously and bypassing diuretics like caffeine and alcohol. This high-level hydration protocol combined with our <Link to="/travel-tips" className="text-indigo-600 font-semibold hover:underline">international travel hacks</Link> will drastically improve your physical resilience upon arrival, cutting your jet lag recovery time in half.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={350}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Health & Insurance FAQs</h2>
              <FAQsSection faqs={faqs} title="" />
            </div>
          </AnimatedSection>

          {/* Helpful Travel Guides */}
          <AnimatedSection delay={400}>
            <div className="bg-slate-100 rounded-3xl p-8 mb-16 border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-red-600" />
                Helpful Travel Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/travel-tips" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  100+ Travel Hacks <Globe className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/visa-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  Global Visa Framework <FileText className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/currency-guide" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  Forex vs Credit Cards <CreditCard className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-checklist" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  Luggage & Packing <Briefcase className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/best-time-to-visit" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  Weather & Seasons <Plane className="w-4 h-4 opacity-50" />
                </Link>
                <Link to="/travel-services/passport-assistance" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-slate-800 hover:text-red-600 border border-slate-100 flex items-center justify-between">
                  Passport Renewals <Map className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Conversion Layer */}
          <AnimatedSection delay={450}>
            <div className="bg-gradient-to-br from-red-900 via-rose-900 to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Plan Your Trip With Rudraksh Safar</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Avoid the stress of solo planning. Have our destination specialists curate your entire trip, including securing robust travel insurance and validating local health protocols.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="https://wa.me/919203650311" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                    <Phone className="w-5 h-5" /> Speak to an Expert
                  </a>
                  <Link to="/international-tours" className="bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-white transition-all flex items-center justify-center gap-2">
                    <Plane className="w-5 h-5" /> View Tour Packages
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

export default TravelHealth;
