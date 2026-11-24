import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  VISA_COUNTRIES, 
  CountryVisa, 
  VISA_PHONE_NUMBER, 
  createVisaWhatsAppUrl,
  COUNTRY_VISA_TYPES,
  COUNTRY_PHOTO_SPECS,
  PORT_OF_ENTRY_GUIDE,
  COMMON_REJECTION_MISTAKES
} from '@/data/visaCountriesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { 
  Check, 
  ExternalLink, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Clock,
  Building2,
  Calendar,
  HelpCircle,
  Camera,
  CreditCard,
  Plane,
  BadgeCheck,
  ChevronDown,
  Info,
  DollarSign,
  UserCheck
} from 'lucide-react';

const ALIASES: Record<string, string> = {
  'dubai': 'uae',
  'bali': 'indonesia',
  'schengen': 'europe'
};

export const CountryVisaPage: React.FC = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();

  const rawSlug = (countrySlug || '').toLowerCase();
  const slug = ALIASES[rawSlug] || rawSlug;

  const country = VISA_COUNTRIES.find(c => c.slug === slug);

  // Active Tab for Profile-based documents
  const [profileTab, setProfileTab] = useState<'salaried' | 'business' | 'student' | 'retired' | 'minor'>('salaried');

  // Accordion state (first FAQ open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countrySlug]);

  if (!country) {
    return <Navigate to="/visa" replace />;
  }

  const isFree = country.entryType === 'Visa-free or on arrival';
  const isEvisa = country.entryType === 'e-Visa';

  const speedBadge = 
    country.slug === 'vietnam'
      ? { big: 'Under 60 min*', note: 'Working days, office hours, complete documents.' }
      : country.slug === 'uae'
      ? { big: 'About 4 hours*', note: 'Working days, office hours, complete documents.' }
      : { big: 'Quote on chat', note: 'We confirm fee and timeline before you pay.' };

  const speedDesc =
    country.slug === 'vietnam'
      ? 'Under 60 minutes on working days during office hours (10:00 - 19:00 IST) with complete documents.'
      : country.slug === 'uae'
      ? 'About 4 hours on working days during office hours with complete documents.'
      : 'Timelines depend on the authority and season. We confirm the expected time on chat before you pay.';

  const shortAnswer = isFree
    ? `Not always. ${country.route}. Stay: ${country.stay}. Entry rules change, so we confirm them before you travel.`
    : isEvisa
    ? `Yes, you need an online authorisation before you travel: ${country.route}.`
    : `Yes. ${country.route}.`;

  // Specific visa types comparison table data
  const visaTypes = COUNTRY_VISA_TYPES[country.slug] || [
    {
      name: `Standard Tourist Visa (${country.name})`,
      validity: 'As per embassy grant',
      stayDuration: country.stay,
      entryType: 'Single Entry' as const,
      govtFeeApprox: country.governmentFee,
      processingTime: 'Confirmed in written quote',
      idealFor: 'Standard leisure holidays, sightseeing & visiting friends'
    }
  ];

  // Tailored photo specs
  const photoSpec = COUNTRY_PHOTO_SPECS[country.slug] || {
    dimension: '35 x 45 mm or 2 x 2 inches',
    faceCoverage: '70% - 80% face visibility',
    background: 'Plain white background',
    clothing: 'Dark collared shirt (avoid white attire)',
    specs: 'Recent photograph (under 6 months), neutral expression, no glare, clear forehead and ears.'
  };

  // Port of Entry Immigration information
  const portOfEntryInfo = PORT_OF_ENTRY_GUIDE[country.slug] || {
    mandatoryDocuments: [
      'Original Indian Passport valid for at least 6 months from arrival date with 2 blank pages',
      'Approved e-Visa printout or official Sticker Visa stamp',
      'Confirmed return or onward flight ticket within permitted duration of stay',
      'Confirmed hotel bookings or host invitation address with contact details',
      'Proof of overseas travel medical insurance'
    ],
    airportQuestions: [
      `What is the purpose of your visit to ${country.name}?`,
      'How long do you plan to stay?',
      'Can I see your confirmed return ticket and hotel accommodation voucher?',
      'How are you funding your travel expenses?'
    ],
    fundsRequirement: 'Proof of sufficient living expenses (approx. ₹50,000 to ₹1,00,000 per person in forex, cash or international card limit).'
  };

  // Specific rejection mistakes
  const countryMistakes = COMMON_REJECTION_MISTAKES[country.slug] || [
    'Hotel and return flight dates do not match the requested visa validity period.',
    'Blurry or cropped scans of the passport bio page that hide the MRZ lines at the bottom.',
    'Name spelt differently across the passport, application forms, and ticket bookings.',
    'Inadequate proof of financial means or sudden unverified cash deposits in bank accounts.',
    'Booking non-refundable tickets prior to receiving the final approved visa document.'
  ];

  // Profile-specific documents
  const profileDocs = {
    salaried: [
      'Original employment letter / NOC on company letterhead mentioning designation, joining date & sanctioned leave dates',
      'Salary slips for the last 3 to 6 months stamped by the employer',
      'Personal bank account statement for the last 6 months with official bank seal and sign (consistent balance)',
      'Income Tax Returns (ITR-V) or Form 16 for the last 2 assessment years'
    ],
    business: [
      'Business Registration Proof: GST Certificate, Certificate of Incorporation or Partnership Deed',
      'Company Memorandum of Association (MOA) / Trade License',
      'Current Account bank statement of the enterprise for the last 6 months with official bank seal',
      'Personal and Company Income Tax Returns (ITR) for the past 2 to 3 assessment years'
    ],
    student: [
      'Student Identity Card copy & Bonafide Certificate from School / College / University',
      'Sponsorship Letter / Declaration of Financial Support from Parents / Legal Guardian',
      'Sponsor\'s 6-month bank statement with official bank stamp and minimum balance proof',
      'Sponsor\'s Government ID Proof (Aadhaar / Passport) and Income Tax Returns'
    ],
    retired: [
      'Pension Payment Order (PPO) copy or retirement certificate from the organization',
      'Pension account bank statements for the last 6 months showing regular pension credits',
      'Fixed Deposit Certificates (FDs) or mutual fund investment portfolios demonstrating financial stability',
      'Property ownership documents (optional, strengthens ties to India)'
    ],
    minor: [
      'Original Birth Certificate displaying both parents\' names in English (or certified translation)',
      'Passport copies (bio pages) of both parents with signature verification',
      'Notarized NOC / Consent Letter on ₹100 stamp paper if travelling alone or with one parent',
      'School NOC letter confirming authorized leave if travelling during academic semester'
    ]
  };

  const countryFaqs = [
    {
      q: `Do Indians need a visa for ${country.name}?`,
      a: shortAnswer
    },
    {
      q: `How do I get a ${country.name} visa from India?`,
      a: `Send your documents on WhatsApp (+91 ${VISA_PHONE_NUMBER}) or email. We prepare the application, check every detail, file it and keep you updated until it is ready.`
    },
    {
      q: `What documents are required for a ${country.name} visa from India?`,
      a: `Typically: ${country.documents.slice(0, 5).join('; ')}. The full checklist is on this page, and we confirm the final list before you pay.`
    },
    {
      q: `How long does a ${country.name} visa take?`,
      a: speedDesc
    },
    {
      q: `How much is the ${country.name} visa fee for Indians?`,
      a: `Government fee: ${country.governmentFee}. Our service fee is quoted on WhatsApp before you pay, with government fees listed separately.`
    },
    {
      q: `Can you provide hotel and flight reservations for ${country.name}?`,
      a: 'Yes. We arrange genuine, verifiable itinerary reservations (often called dummy tickets) for visa filing only. They must match your real plans.'
    },
    {
      q: `What is the best time to visit ${country.name}?`,
      a: `${country.bestTime}. Popular places: ${country.popularPlaces}.`
    },
    {
      q: `Do I need to attend anything in person for ${country.name}?`,
      a: country.attendance || 'Not for the standard route. You share documents and we handle the rest.'
    },
    {
      q: `What is the minimum bank balance required for a ${country.name} visa?`,
      a: isFree || isEvisa
        ? 'For online e-visas and visa-free entries, a formal bank statement is often not uploaded during filing, but immigration officers at the port of entry may ask to see proof of funds (₹50,000 to ₹1,00,000 per person in bank/cards/cash).'
        : 'For embassy-style and sticker visas (like Schengen, USA, UK, Canada, Japan), consulates look for a consistent average balance of ₹2,50,000 to ₹4,00,000 over 6 months with verified bank seals. Sudden large cash deposits without justification will trigger rejection.'
    },
    {
      q: `What are the top reasons for ${country.name} visa rejection?`,
      a: countryMistakes.slice(0, 3).join(' ') + ' We conduct a 100% compliance audit on every file before submission to eliminate these errors.'
    },
    {
      q: `Can I extend my ${country.name} tourist visa once I arrive?`,
      a: `Permitted stay is ${country.stay}. Extension policies depend strictly on foreign immigration authorities. Overstaying incurs severe daily fines, detention, or deportation. Contact our visa desk before your visa expires to review legal extension pathways.`
    }
  ];

  const stepsData = [
    {
      num: 1,
      title: 'Send documents',
      desc: 'Share your passport, photo and basic details on WhatsApp or email. We flag anything missing right away.'
    },
    {
      num: 2,
      title: 'We prepare and check',
      desc: 'We fill the forms, prepare itinerary reservations if needed and check every detail against the rules.'
    },
    {
      num: 3,
      title: 'Receive and travel',
      desc: 'Your approval arrives on WhatsApp and email. Print it and carry it for the airport.'
    }
  ];

  const officialHost = country.officialUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '');
  const otherDestinations = VISA_COUNTRIES.filter(c => c.slug !== country.slug).slice(0, 10);
  const applyMessage = `Hi, I need a ${country.name} visa. Please guide me.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        'name': `${country.name} Visa from India 2026: Documents, Fees & Fast Filing`,
        'description': `${country.name} visa for Indian passport holders: ${country.summary} Full checklist, fees, stay limit, and WhatsApp filing.`,
        'url': `https://rudrakshsafar.com/visa/${country.slug}`,
        'inLanguage': 'en-IN'
      },
      {
        '@type': 'Service',
        'name': `${country.name} Visa Assistance for Indians`,
        'serviceType': 'Visa Processing Service',
        'provider': {
          '@type': 'TravelAgency',
          'name': 'Rudraksh Safar',
          'telephone': `+91-${VISA_PHONE_NUMBER}`,
          'url': 'https://rudrakshsafar.com/'
        },
        'areaServed': 'IN',
        'description': country.summary
      },
      {
        '@type': 'HowTo',
        'name': `How to Apply for a ${country.name} Visa from India`,
        'step': stepsData.map((s) => ({
          '@type': 'HowToStep',
          'position': s.num,
          'name': s.title,
          'text': s.desc
        }))
      },
      {
        '@type': 'FAQPage',
        'mainEntity': countryFaqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0B1B33] font-sans antialiased selection:bg-[#EAF1FF] selection:text-[#1F4BFF]">
      <SEOHead
        title={`${country.name} Visa from India 2026: Documents, Fees & Fast Filing | Rudraksh Safar`}
        description={`${country.name} visa from India: ${country.route}. Complete 2026 document checklist, fees (${country.governmentFee}), stay (${country.stay}), photo specs, and fast filing on WhatsApp with Rudraksh Safar.`}
        keywords={`${country.name.toLowerCase()} visa from india, ${country.name.toLowerCase()} visa requirements, ${country.name.toLowerCase()} visa fee, indian passport ${country.name.toLowerCase()} visa, apply for ${country.name.toLowerCase()} visa`}
        canonicalUrl={`https://rudrakshsafar.com/visa/${country.slug}`}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="pt-24 pb-20">
        
        {/* ======================================================== */}
        {/* HERO HEADER SECTION (LIGHT THEME MATCHING SCREENSHOT 1)   */}
        {/* ======================================================== */}
        <section className="pt-4 pb-12 sm:pb-16 bg-gradient-to-b from-[#EBF2FF]/70 via-[#F7FAFF] to-[#F7FAFF] border-b border-[#D8E3F5]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-[#4A5B73] font-medium mb-6 flex items-center gap-2 flex-wrap">
              <Link to="/" className="text-[#1F4BFF] hover:underline">Home</Link>
              <span>/</span>
              <Link to="/visa" className="text-[#1F4BFF] hover:underline">Visa</Link>
              <span>/</span>
              <span className="text-[#0B1B33] font-semibold">{country.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading, Subtitle & Direct Answer */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Entry Badge */}
                <div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    isFree
                      ? 'bg-[#DDF4E6] text-[#0B5A2A]'
                      : isEvisa
                      ? 'bg-[#E1EAFF] text-[#1737B8]'
                      : 'bg-[#FFE9CC] text-[#7A4300]'
                  }`}>
                    {country.entryType}
                  </span>
                </div>

                {/* Big Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B33] tracking-tight leading-[1.15]">
                  {country.name} visa from India: documents, requirements and fast filing
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#4A5B73] leading-relaxed max-w-2xl font-normal">
                  {country.summary} Send documents on WhatsApp. We prepare and file the rest.
                </p>

                {/* Direct Answer Box (AEO & AI Search Citation Optimized) */}
                <div className="bg-white border border-[#D8E3F5] border-l-4 border-l-[#1F4BFF] rounded-xl p-4 text-sm sm:text-base text-[#0B1B33] shadow-xs">
                  <b className="font-bold">Short answer:</b> {shortAnswer}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={createVisaWhatsAppUrl(applyMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#12823F] hover:bg-[#0e6e34] text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Apply for {country.name} visa</span>
                  </a>

                  <Link
                    to="/visa"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-[#EAF1FF] border-2 border-[#0B1B33] text-[#0B1B33] font-bold text-sm transition-colors"
                  >
                    All countries
                  </Link>
                </div>
              </div>

              {/* Right Column: Speed Meter Card (Navy Blue Card with Coral Speed Text matching screenshot 1) */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-[#12163A] text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#0B1B33]/20 border border-[#1d255c] transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-[#FF7A59] tracking-tight mb-2">
                    {speedBadge.big}
                  </div>
                  <h2 className="text-base font-bold text-white mb-1">
                    {country.name} visa speed
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0">
                    {speedBadge.note}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SUB-NAVIGATION JUMP PILLS (MOBILE TOUCH-FRIENDLY)        */}
        {/* ======================================================== */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#D8E3F5] py-2.5 px-4 overflow-x-auto no-scrollbar shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
            <a href="#overview" className="px-3 py-1.5 rounded-full bg-[#EAF1FF] text-[#1F4BFF] hover:bg-[#1F4BFF] hover:text-white transition-colors">Overview</a>
            <a href="#visatypes" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">Visa Options & Fees</a>
            <a href="#documents" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">Documents Required</a>
            <a href="#travellertype" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">By Traveller Profile</a>
            <a href="#photospecs" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">Photo Specs</a>
            <a href="#steps" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">How We File</a>
            <a href="#bordercheck" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">Port of Entry & Airport</a>
            <a href="#mistakes" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">Avoid Mistakes</a>
            <a href="#faqs" className="px-3 py-1.5 rounded-full bg-slate-100 text-[#4A5B73] hover:bg-[#1F4BFF] hover:text-white transition-colors">11 FAQs</a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: ENTRY REQUIREMENTS MATRIX (SCREENSHOT 2)      */}
        {/* ======================================================== */}
        <section id="overview" className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight mb-6">
              {country.name} entry requirements at a glance
            </h2>

            <div className="overflow-x-auto bg-white rounded-2xl border border-[#D8E3F5] shadow-xs">
              <table className="w-full text-left text-sm border-collapse min-w-[540px]">
                <tbody className="divide-y divide-[#D8E3F5]">
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73] w-1/3">Entry route</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-medium">{country.route}</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73]">Permitted stay</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-medium">{country.stay}</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73]">Applicant attendance</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-medium">
                      {country.attendance || 'Documents only. No office visit needed for the standard route.'}
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73]">Government fee</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-bold text-[#12823F]">{country.governmentFee}</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73]">Best time to visit</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-medium">{country.bestTime}</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#4A5B73]">Last checked</td>
                    <td className="py-3.5 px-6 text-[#0B1B33] font-medium">{country.checked}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-[#4A5B73]">
              <a href="#documents" className="text-[#1F4BFF] hover:underline font-medium">Documents</a> ·{' '}
              <a href="#visatypes" className="text-[#1F4BFF] hover:underline font-medium">Fees</a> ·{' '}
              <a href="#photospecs" className="text-[#1F4BFF] hover:underline font-medium">Photo specs</a> ·{' '}
              <a href="#travellertype" className="text-[#1F4BFF] hover:underline font-medium">Documents by profile</a> ·{' '}
              <a href="#bordercheck" className="text-[#1F4BFF] hover:underline font-medium">Border clearance</a>
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* NEW SECTION 2: AVAILABLE VISA TYPES & FEES MATRIX        */}
        {/* ======================================================== */}
        <section id="visatypes" className="py-12 sm:py-16 bg-[#EEF0FF] border-y border-[#D8E3F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4BFF] block mb-1">
                Transparent Fee Breakdown
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                {country.name} Visa Types, Stay Durations & Pricing
              </h2>
              <p className="text-sm text-[#4A5B73] mt-2">
                Choose the visa category that best aligns with your travel duration and entry frequency. Government fees are paid directly to foreign immigration portals.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-[#D8E3F5] shadow-xs">
              <table className="w-full text-left text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#0B1B33] text-white">
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Visa Category</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Validity</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Permitted Stay</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Entry</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Approx Govt Fee</th>
                    <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8E3F5]">
                  {visaTypes.map((type, idx) => (
                    <tr key={idx} className="hover:bg-[#F7FAFF] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#0B1B33]">
                        {type.name}
                        <span className="block text-xs font-normal text-[#4A5B73] mt-0.5">{type.idealFor}</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#4A5B73]">{type.validity}</td>
                      <td className="py-3.5 px-4 font-medium text-[#0B1B33]">{type.stayDuration}</td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#E1EAFF] text-[#1737B8]">
                          {type.entryType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-[#12823F]">{type.govtFeeApprox}</td>
                      <td className="py-3.5 px-4 text-xs text-[#4A5B73]">{type.processingTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-white border border-[#D8E3F5] text-xs text-[#4A5B73] flex items-center justify-between flex-wrap gap-3">
              <span>
                💡 <b>No hidden charges:</b> Our nominal service fee is quoted separately on WhatsApp before you pay. All fees checked {country.checked}.
              </span>
              <a 
                href={createVisaWhatsAppUrl(`Hi, I want a quote for ${country.name} visa.`)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#12823F] font-bold hover:underline inline-flex items-center gap-1"
              >
                Get exact fee quote on WhatsApp (+91 {VISA_PHONE_NUMBER}) →
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: DOCUMENTS REQUIRED & COST CARDS (SCREENSHOT 3) */}
        {/* ======================================================== */}
        <section id="documents" className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Document Checklist */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                  Documents required for {country.name}
                </h2>
                <p className="text-sm text-[#4A5B73] leading-relaxed">
                  Indicative checklist for Indian passport holders. Your profile and visa type can change it, so we confirm your exact list before you pay.
                </p>

                <div className="space-y-2.5 pt-2">
                  {country.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#D8E3F5] text-sm text-[#0B1B33] shadow-xs">
                      <span className="text-[#12823F] font-black text-base flex-shrink-0 mt-0.5">✓</span>
                      <span className="leading-relaxed font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 3 White Cards (Matching screenshot 3) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Card 1: Good to know */}
                {country.notes && country.notes.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-[#D8E3F5] shadow-xs space-y-3">
                    <h3 className="font-bold text-base text-[#0B1B33]">Good to know</h3>
                    <div className="space-y-2">
                      {country.notes.map((note, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5B73]">
                          <span className="text-[#12823F] font-black text-sm flex-shrink-0">✓</span>
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card 2: What it costs */}
                <div id="costs" className="bg-white rounded-2xl p-6 border border-[#D8E3F5] shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-[#0B1B33]">What it costs</h3>
                  <p className="text-sm text-[#0B1B33] font-bold">
                    Government fee: <span className="text-[#12823F]">{country.governmentFee}</span>
                  </p>

                  {country.feeDetails && country.feeDetails.length > 0 ? (
                    <div className="space-y-1.5 pt-1">
                      {country.feeDetails.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#4A5B73]">
                          <span className="text-[#12823F] font-black text-sm flex-shrink-0">✓</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#4A5B73]">
                      The government fee changes often and depends on your visa type and age, so we confirm the exact amount in your written quote.
                    </p>
                  )}

                  <p className="text-xs text-[#4A5B73] pt-2 border-t border-[#D8E3F5] m-0">
                    <b>Our service fee:</b> quoted on WhatsApp before you pay, listed separately. Fees checked {country.checked}.
                  </p>
                </div>

                {/* Card 3: Official website */}
                <div className="bg-white rounded-2xl p-6 border border-[#D8E3F5] shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-[#0B1B33]">Official website</h3>
                  <p className="text-xs text-[#4A5B73]">
                    Verify the rules on the official {country.name} source.
                  </p>
                  <div>
                    <a
                      href={country.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F7FAFF] border-2 border-[#0B1B33] text-[#0B1B33] font-bold text-xs transition-colors"
                    >
                      <span>{officialHost}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#4A5B73] leading-relaxed pt-1 m-0">
                    Indicative guide checked on {country.checked}. Rules change without notice and approval is decided only by the authority. This is not legal advice. See <Link to="/visa#legal" className="text-[#1F4BFF] hover:underline">legal and consumer protection</Link>.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: DOCUMENTS BY TRAVELLER PROFILE (DEEP CONTENT)  */}
        {/* ======================================================== */}
        <section id="travellertype" className="py-12 sm:py-16 bg-[#EEF0FF] border-y border-[#D8E3F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4BFF] block mb-1">
                Profile-Specific Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                Additional Documents by Traveller Profile
              </h2>
              <p className="text-sm text-[#4A5B73] mt-2">
                Foreign consulates evaluate economic stability differently for salaried, business, and student applicants. Select your profile below:
              </p>
            </div>

            {/* Profile Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: 'salaried', label: 'Salaried Professional' },
                { id: 'business', label: 'Self-Employed / Business' },
                { id: 'student', label: 'Student / Dependent' },
                { id: 'retired', label: 'Retired Senior' },
                { id: 'minor', label: 'Minor (Under 18)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setProfileTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    profileTab === tab.id
                      ? 'bg-[#0B1B33] text-white shadow-sm'
                      : 'bg-white border border-[#D8E3F5] text-[#4A5B73] hover:text-[#0B1B33] hover:bg-[#F7FAFF]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Profile Requirements Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8E3F5] shadow-xs space-y-4">
              <h3 className="font-bold text-base sm:text-lg text-[#0B1B33] flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#12823F]" />
                Mandatory Dossier for {profileTab.toUpperCase()} Applicants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {profileDocs[profileTab].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F7FAFF] border border-[#D8E3F5]/80 text-xs sm:text-sm text-[#0B1B33]">
                    <span className="text-[#12823F] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: PHOTO & SCAN SPECIFICATIONS (DEEP CONTENT)    */}
        {/* ======================================================== */}
        <section id="photospecs" className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4BFF] block mb-1">
                Biometric Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                Photograph & Passport Scan Specifications for {country.name}
              </h2>
              <p className="text-sm text-[#4A5B73] mt-2">
                Over 28% of visa rejections and delays occur due to non-compliant photo dimensions, shadows, or cropped passport corners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#D8E3F5] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#E1EAFF] text-[#1F4BFF] flex items-center justify-center font-bold text-xs mb-2">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#0B1B33]">Photo Dimensions</h4>
                <p className="text-xs text-[#4A5B73] leading-relaxed">{photoSpec.dimension}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D8E3F5] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#DDF4E6] text-[#0B5A2A] flex items-center justify-center font-bold text-xs mb-2">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#0B1B33]">Face Coverage</h4>
                <p className="text-xs text-[#4A5B73] leading-relaxed">{photoSpec.faceCoverage}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D8E3F5] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE9CC] text-[#7A4300] flex items-center justify-center font-bold text-xs mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#0B1B33]">Background Standard</h4>
                <p className="text-xs text-[#4A5B73] leading-relaxed">{photoSpec.background}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#D8E3F5] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#F7FAFF] text-[#0B1B33] border border-[#D8E3F5] flex items-center justify-center font-bold text-xs mb-2">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#0B1B33]">Clothing & Scan Rules</h4>
                <p className="text-xs text-[#4A5B73] leading-relaxed">
                  {photoSpec.clothing}. All 4 passport corners visible, no finger shadows, 300 DPI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6: HOW WE FILE YOUR VISA (SCREENSHOT 4)          */}
        {/* ======================================================== */}
        <section id="steps" className="py-12 sm:py-16 bg-[#EEF0FF] border-y border-[#D8E3F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight mb-8">
              How we file your {country.name} visa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stepsData.map((s) => (
                <div key={s.num} className="bg-white rounded-2xl p-6 border border-[#D8E3F5] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#FF7A59] text-white font-black text-sm flex items-center justify-center mb-4">
                      {s.num}
                    </div>
                    <h3 className="font-bold text-base text-[#0B1B33] mb-2">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4A5B73] leading-relaxed m-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 7: PORT OF ENTRY & AIRPORT CLEARANCE CHECKLIST   */}
        {/* ======================================================== */}
        <section id="bordercheck" className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F4BFF] block">
                  Airport Arrival Protocol
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                  Port of Entry & Immigration Check for {country.name}
                </h2>
                <p className="text-sm text-[#4A5B73] leading-relaxed">
                  Holding an approved visa is not a 100% guarantee of entry — border immigration officers inspect documents upon landing. Carry these mandatory physical printouts:
                </p>

                <div className="space-y-2 pt-2">
                  {portOfEntryInfo.mandatoryDocuments.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#D8E3F5] text-xs sm:text-sm text-[#0B1B33] shadow-xs">
                      <span className="text-[#12823F] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#F7FAFF] border border-[#D8E3F5] text-xs text-[#4A5B73] space-y-1 mt-4">
                  <p><b>Funds Requirement:</b> {portOfEntryInfo.fundsRequirement}</p>
                  {portOfEntryInfo.arrivalFormName && (
                    <p><b>Digital Arrival Card:</b> {portOfEntryInfo.arrivalFormName}</p>
                  )}
                </div>
              </div>

              {/* Questions Immigration Officers Ask */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#D8E3F5] shadow-xs space-y-4">
                <h3 className="font-bold text-base sm:text-lg text-[#0B1B33] flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#1F4BFF]" />
                  Questions Asked by Immigration Officers
                </h3>
                <p className="text-xs text-[#4A5B73]">
                  Common questions posed to Indian passport holders at the port of entry:
                </p>
                
                <div className="space-y-2.5 pt-1">
                  {portOfEntryInfo.airportQuestions.map((q, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#F7FAFF] border border-[#D8E3F5] text-xs sm:text-sm text-[#0B1B33] font-medium">
                      “{q}”
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#4A5B73] pt-2 border-t border-[#D8E3F5] m-0">
                  Tip: Keep answers crisp, calm and fully consistent with your hotel and flight vouchers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 8: MISTAKES TO AVOID                             */}
        {/* ======================================================== */}
        <section id="mistakes" className="py-12 sm:py-16 bg-[#EEF0FF] border-y border-[#D8E3F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight">
                  Plan your {country.name} trip
                </h2>
                <p className="text-sm text-[#4A5B73] leading-relaxed">
                  <b>Popular places:</b> {country.popularPlaces}.
                </p>
                <p className="text-sm text-[#4A5B73] leading-relaxed">
                  <b>Best time:</b> {country.bestTime}.
                </p>
                <p className="text-sm text-[#4A5B73] leading-relaxed">
                  Tourist, visitor, group and student files are all handled. Tell us your purpose and we pick the right route.
                </p>
                <div className="pt-2">
                  <a
                    href={createVisaWhatsAppUrl(`Hi, I'm planning a trip to ${country.name}. Please guide me on visa requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12823F] hover:bg-[#0e6e34] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Talk to a {country.name} visa specialist</span>
                  </a>
                </div>
              </div>

              {/* Mistakes Card (Matching screenshot 4) */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-[#D8E3F5] shadow-xs space-y-3">
                <h3 className="font-bold text-base sm:text-lg text-[#0B1B33]">
                  Mistakes to avoid for {country.name}
                </h3>
                <div className="space-y-2">
                  {countryMistakes.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5B73]">
                      <span className="text-[#12823F] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 9: ACCORDION FAQ (11 QUESTIONS MATCHING SCREENSHOT 5) */}
        {/* ======================================================== */}
        <section id="faqs" className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight mb-6">
              {country.name} visa questions
            </h2>

            <div className="space-y-2.5">
              {countryFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-[#D8E3F5] px-5 py-0 overflow-hidden shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4 text-left font-bold text-sm sm:text-base text-[#0B1B33] flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-xl font-light text-[#4A5B73] flex-shrink-0">
                        {isOpen ? '×' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-xs sm:text-sm text-[#4A5B73] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-[#4A5B73]">
              * Working days, office hours, complete documents. Approval rests with the authority.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 10: OTHER DESTINATIONS CHIPS & WHATSAPP BUTTON   */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-16 bg-[#EEF0FF] border-t border-[#D8E3F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] tracking-tight mb-4">
              Other destinations
            </h2>

            {/* Destination Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {otherDestinations.map((d) => (
                <Link
                  key={d.slug}
                  to={`/visa/${d.slug}`}
                  className="px-3.5 py-2 rounded-full bg-white hover:border-[#1F4BFF] border border-[#D8E3F5] text-xs sm:text-sm font-semibold text-[#0B1B33] transition-colors shadow-2xs"
                >
                  {d.name} visa
                </Link>
              ))}
              <Link
                to="/visa"
                className="px-3.5 py-2 rounded-full bg-white hover:border-[#1F4BFF] border border-[#D8E3F5] text-xs sm:text-sm font-bold text-[#1F4BFF] transition-colors shadow-2xs"
              >
                All countries
              </Link>
            </div>

            {/* Bottom Primary WhatsApp Action Button */}
            <div>
              <a
                href={createVisaWhatsAppUrl(applyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#12823F] hover:bg-[#0e6e34] text-white font-bold text-sm sm:text-base shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Start your {country.name} visa on WhatsApp (+91 {VISA_PHONE_NUMBER})</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* MOBILE STICKY BOTTOM WHATSAPP BAR (1-TAP CONVERSION)     */}
      {/* ======================================================== */}
      <div className="fixed sm:hidden bottom-3 left-3 right-3 z-40">
        <a
          href={createVisaWhatsAppUrl(applyMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-4 rounded-full bg-[#12823F] hover:bg-[#0e6e34] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp (+91 {VISA_PHONE_NUMBER})</span>
        </a>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default CountryVisaPage;
