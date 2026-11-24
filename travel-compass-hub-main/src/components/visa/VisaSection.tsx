import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  VISA_COUNTRIES, 
  CountryVisa, 
  ENTRY_RULE_UPDATES_2026, 
  VISA_FAQS, 
  VISA_LEGAL_POINTS, 
  VISA_PHONE_NUMBER, 
  createVisaWhatsAppUrl 
} from '@/data/visaCountriesData';
import VisaGlobe from './VisaGlobe';
import { 
  Search, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Briefcase, 
  ChevronRight, 
  ChevronDown, 
  Check, 
  MessageCircle, 
  ExternalLink, 
  HelpCircle, 
  Building2, 
  AlertTriangle, 
  Plane, 
  ArrowRight,
  Filter
} from 'lucide-react';

export const VisaSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openLegalIndex, setOpenLegalIndex] = useState<number | null>(0);

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [visaTypeInput, setVisaTypeInput] = useState('Tourist');
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Filtered Countries
  const filteredCountries = useMemo(() => {
    return VISA_COUNTRIES.filter(country => {
      const matchesSearch = 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.summary.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (filterType === 'free') {
        return country.entryType === 'Visa-free or on arrival';
      }
      if (filterType === 'evisa') {
        return country.entryType === 'e-Visa';
      }
      if (filterType === 'required') {
        return country.entryType === 'Visa required';
      }
      return true;
    });
  }, [searchQuery, filterType]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAgreed) {
      alert('Please confirm that your documents will be genuine.');
      return;
    }
    const message = `Hi Rudraksh Safar, I am ${applicantName || 'a traveler'}. I need a ${visaTypeInput} visa for ${destinationInput}. Please share required documents checklist, transparent government + service fee quote, and expected timeline.`;
    window.open(createVisaWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* 1. Timely Announcement / Alert Banner */}
      <aside aria-label="Visa regulations notice" className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-orange-500/15 border-b border-amber-500/20 py-2.5 px-4 text-center text-xs sm:text-sm font-medium text-amber-900 dark:text-amber-200">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 uppercase tracking-wide">
            2026 Alert
          </span>
          <span>Malaysia’s visa-free entry for Indian passport holders is reported to conclude on 31 Dec 2026.</span>
          <Link 
            to="/visa/malaysia"
            className="font-bold underline text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-white ml-1 cursor-pointer"
          >
            See Malaysia Entry Rules →
          </Link>
        </div>
      </aside>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Search & Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Zero Form Filling · Direct WhatsApp Filing</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Visa for 150+ Countries.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 dark:from-blue-400 dark:via-indigo-300 dark:to-emerald-400">
                  No forms. Just WhatsApp.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Search your destination, send your passport scans and photo on WhatsApp, and our visa specialists fill, verify, and file the entire application.
              </p>

              {/* Real-time Search Box */}
              <div className="relative max-w-xl">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Where are you going? Try Dubai, Bali, Schengen, Vietnam..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-blue-500 shadow-xl shadow-blue-900/5 dark:shadow-none text-slate-900 dark:text-white text-base placeholder:text-slate-400 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Popular Quick Destination Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Popular:</span>
                  {[
                    { name: 'Vietnam', slug: 'vietnam' },
                    { name: 'Dubai', slug: 'uae' },
                    { name: 'Bali', slug: 'indonesia' },
                    { name: 'Thailand', slug: 'thailand' },
                    { name: 'Schengen', slug: 'europe' },
                    { name: 'USA', slug: 'usa' }
                  ].map(chip => (
                    <Link
                      key={chip.slug}
                      to={`/visa/${chip.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-700 dark:text-slate-300 font-semibold transition-colors cursor-pointer shadow-sm hover:shadow"
                    >
                      {chip.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Speed Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span><b>Vietnam</b> in under 60 minutes*</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span><b>UAE / Dubai</b> in 4 hours*</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                * Working days during office hours (10:00 to 19:00 IST) with complete valid documents. In-person interviews/biometrics are attended in person where mandated.
              </p>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={createVisaWhatsAppUrl('Hi Rudraksh Safar, I need assistance with an international visa. Please guide me.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp (+91 {VISA_PHONE_NUMBER})</span>
                </a>
                <a
                  href="#visa-countries"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Explore 27+ Countries</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive 3D Globe */}
            <div className="lg:col-span-5 flex justify-center">
              <VisaGlobe onSelectCountry={(c) => navigate(`/visa/${c.slug}`)} />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Stats Strip */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400">150+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Countries Covered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400">&lt; 60 min*</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Vietnam e-Visa</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-400">4 Hours*</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">UAE / Dubai Visa</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-400">B2B Desk</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">For Agents & Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visa by Country Directory */}
      <section id="visa-countries" className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Visa by Country for Indian Travellers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
              Select any destination to view complete checklist, documents required, and verified government fees.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-2xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'free', label: 'Visa-free / VoA' },
              { id: 'evisa', label: 'e-Visa' },
              { id: 'required', label: 'Visa Required' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Countries Grid (Direct Links to Dedicated Country Pages) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCountries.map(country => (
            <Link
              key={country.slug}
              to={`/visa/${country.slug}`}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-extrabold text-sm flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    {country.code}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                    country.entryType === 'Visa-free or on arrival'
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : country.entryType === 'e-Visa'
                      ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                      : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                  }`}>
                    {country.entryType}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {country.name} Visa
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {country.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Govt Fee</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[150px] block">
                    {country.governmentFee}
                  </span>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  View Page →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No matching country found for &quot;{searchQuery}&quot;.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              We process tourist, business and student visas for 150+ countries worldwide.
            </p>
            <a
              href={createVisaWhatsAppUrl(`Hi Rudraksh Safar, I need a visa for ${searchQuery}. Please advise.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask about &quot;{searchQuery}&quot; on WhatsApp</span>
            </a>
          </div>
        )}
      </section>

      {/* 5. Government Visa Fees at a Glance (Table) */}
      <section id="visa-fees" className="py-16 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Government Visa Fees at a Glance
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Official government fees for Indian passport holders (checked 24 Nov 2026). Our nominal service fee is quoted separately in writing before payment.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 font-semibold">Destination</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Entry Route</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Government Fee</th>
                  <th scope="col" className="py-4 px-6 font-semibold text-right">Dedicated Page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {VISA_COUNTRIES.map(country => (
                  <tr key={country.slug} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                        {country.code}
                      </span>
                      <Link to={`/visa/${country.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                        {country.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        country.entryType === 'Visa-free or on arrival'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                          : country.entryType === 'e-Visa'
                          ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                          : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                      }`}>
                        {country.entryType}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-800 dark:text-slate-200">
                      {country.governmentFee}
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <Link
                        to={`/visa/${country.slug}`}
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Page</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic">
            Note: Government fees are set by foreign ministries and subject to currency fluctuation and policy revisions. Our transparent service fee is confirmed on WhatsApp before filing.
          </p>
        </div>
      </section>

      {/* 6. Visas on a Deadline (Fast Visas Spotlight) */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Urgent Clearance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Visas on a Tight Deadline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Flying this week? We offer priority accelerated filing with direct sponsor and expedited portal pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vietnam Fast Visa Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-emerald-950/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                &lt; 60 Min*
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
                Vietnam Tourist e-Visa Fast Track
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Send your passport bio scan and passport photograph directly on WhatsApp. We format specifications, upload to the official portal, and deliver your approval letter within an hour.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Valid up to 90 days, multiple entry options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Phu Quoc direct flights: Visa-free up to 30 days</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createVisaWhatsAppUrl('Hi Rudraksh Safar, I need an URGENT Vietnam e-Visa (< 60 min fast track). Please guide me immediately.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Urgent Vietnam Visa</span>
              </a>
              <Link
                to="/visa/vietnam"
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs text-center transition-colors"
              >
                Full Checklist →
              </Link>
            </div>
          </div>

          {/* UAE 4 Hours Fast Visa Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-950/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="text-4xl sm:text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                4 Hours*
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
                UAE / Dubai Tourist e-Visa Same Day
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Flying to Dubai or Abu Dhabi on short notice? Processed through our authorized UAE licensed sponsors with same working day issuance directly to your WhatsApp.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-500" />
                  <span>30-day, 60-day single and multiple entry options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-500" />
                  <span>Includes COVID / Travel Medical Insurance cover</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createVisaWhatsAppUrl('Hi Rudraksh Safar, I need an URGENT Dubai / UAE visa (4 hours same day service). Please guide me immediately.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Urgent UAE Visa</span>
              </a>
              <Link
                to="/visa/uae"
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs text-center transition-colors"
              >
                Full Checklist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works (3 Steps) + Visa Categories */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Visa Filing Works with Us
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              No complicated government portals or confusing dropdowns. 3 simple steps on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-black text-base flex items-center justify-center mb-4 shadow">
                1
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Send Documents</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Share your passport bio page scan, photo, and travel dates on WhatsApp or email. Our team checks passport validity and resolution immediately.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center mb-4 shadow">
                2
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">We Prepare & File</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                We fill out the complex embassy forms, arrange verifiable itinerary reservations (flight blocks & hotel proof), and file the application accurately.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4 shadow">
                3
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Get Your Visa</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Your approved e-Visa or sticker confirmation is delivered directly to WhatsApp and email. Simply print and carry it for boarding!
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tourist Visas</h4>
              <p className="text-xs text-slate-500 mt-1">Holidays, honeymoons & solo exploration.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Visitor Visas</h4>
              <p className="text-xs text-slate-500 mt-1">Visiting family, friends and attending ceremonies.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Group & Corporate</h4>
              <p className="text-xs text-slate-500 mt-1">Corporate MICE, weddings, tours & delegations.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Student Support</h4>
              <p className="text-xs text-slate-500 mt-1">University admission filing & VFS appointments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Travellers Pick Us (Modern Bento Grid) */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Travellers Trust Rudraksh Safar
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Eliminating bureaucratic friction with genuine filings, transparent pricing, and relentless follow-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Card 1: Zero Forms */}
          <div className="md:col-span-3 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-7 rounded-3xl border border-indigo-900/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-300 mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Zero Forms. Zero Portals.</h3>
              <p className="text-sm text-indigo-200/90 mt-2 leading-relaxed">
                Never wrestle with crashing government portals or foreign currency payment gateway declines. Send documents on chat, and we execute the filing.
              </p>
            </div>
            <div className="mt-6 text-xs text-indigo-300 font-medium">
              You only attend in person if fingerprints or an interview is required.
            </div>
          </div>

          {/* Card 2: Fast Track */}
          <div className="md:col-span-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 p-7 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">&lt; 60 Min*</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">Vietnam & UAE Speed</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Industry-leading fast-track turnaround for urgent departures and spontaneous getaways.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Verified sponsor channels · Working days & hours
            </div>
          </div>

          {/* Card 3: 150+ Countries */}
          <div className="md:col-span-2 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/40 p-6 rounded-3xl">
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">150+</div>
            <h3 className="font-bold text-slate-900 dark:text-white mt-1">Global Countries</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">From Schengen and USA to Japan and Georgia.</p>
          </div>

          {/* Card 4: Genuine Itinerary Reservations */}
          <div className="md:col-span-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 p-6 rounded-3xl">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center mb-2 font-bold">
              ✓
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Verifiable Bookings</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Genuine flight reservations and confirmed hotel vouchers for visa proof.</p>
          </div>

          {/* Card 5: B2B Desk */}
          <div className="md:col-span-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-2 font-bold">
              B2B
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Agent & Corporate Desk</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Dedicated account manager for sub-agents, corporate files, and group bookings.</p>
          </div>
        </div>
      </section>

      {/* 9. Entry Rules That Changed in 2026 (Table) */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Immigration Watch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
              Entry Rules That Changed in 2026
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Immigration laws change rapidly. Here is the verified status for Indian passport holders as of late 2026.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 font-semibold">Destination</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Latest Regulatory Update</th>
                  <th scope="col" className="py-4 px-6 font-semibold">What You Must Carry / Complete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ENTRY_RULE_UPDATES_2026.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      <Link
                        to={`/visa/${item.slug}`}
                        className="hover:underline text-left cursor-pointer"
                      >
                        {item.destination}
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">
                      {item.latestUpdate}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {item.whatYouNeed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. Travel Agent or Company Desk (B2B) */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-blue-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-300">
              For Travel Agents & Corporates
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Partner with Our Dedicated B2B Visa Desk
            </h3>
            <p className="text-sm text-indigo-200">
              Priority processing, GST invoice compliance, multi-applicant tracking, and a single point of contact for tour operators and corporates across India.
            </p>
          </div>

          <a
            href={createVisaWhatsAppUrl('Hi Rudraksh Safar, I am a travel agent / company partner and want to coordinate visas with your B2B desk.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm flex items-center gap-2 shadow-lg flex-shrink-0 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Talk to the B2B Team (+91 {VISA_PHONE_NUMBER})</span>
          </a>
        </div>
      </section>

      {/* 11. Visa Questions, Answered (Accordion FAQ) */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Visa Questions, Answered
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Everything you need to know about processing, biometric appointments, and travel compliance.
            </p>
          </div>

          <div className="space-y-3">
            {VISA_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400 font-mono text-lg flex-shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Legal, Consumer Protection & Transparency Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Legal & Consumer Protection
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Complete transparency. We stand for 100% genuine documentation and honest consumer guidance.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              We Never Forge Documents
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Genuine files only, always. We decline any false documentation requests that could compromise your passport.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              No False Approval Promises
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sovereign consulate authorities decide border access. We ensure flawless filing to maximize your approval rate.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-500" />
              Your Data, Handled With Care
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Compliant with the Digital Personal Data Protection Act, 2023. Used solely for visa filing purposes.
            </p>
          </div>
        </div>

        {/* Legal Accordion & Agency Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            {VISA_LEGAL_POINTS.map((item, idx) => {
              const isOpen = openLegalIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenLegalIndex(isOpen ? null : idx)}
                    className="w-full py-3.5 px-5 text-left font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{item.title}</span>
                    <span className="text-slate-400 font-mono text-sm">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
            <h3 className="font-bold text-base text-white mb-4">Agency Details</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Trade Name</span>
                <span className="font-semibold text-slate-200">Rudraksh Safar</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Registered City</span>
                <span className="font-semibold text-slate-200">Bhilai & Mumbai, India</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Direct WhatsApp</span>
                <span className="font-semibold text-emerald-400">+91 {VISA_PHONE_NUMBER}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Operating Hours</span>
                <span className="font-semibold text-slate-200">Mon - Sat, 10:00 - 19:00 IST</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Data Compliance</span>
                <span className="font-semibold text-slate-200">DPDP Act, 2023 Compliant</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
              Rudraksh Safar is an independent premium travel and visa consultancy and is not affiliated with any foreign embassy or consulate.
            </p>
          </div>
        </div>
      </section>

      {/* 13. Interactive WhatsApp Visa Filing Form */}
      <section className="py-16 bg-gradient-to-b from-blue-50/60 to-indigo-50/40 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Fast Response
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Tell Us Where You&apos;re Going
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                We review requirements and reply immediately on WhatsApp with document checklists, fees, and timelines.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-xl mx-auto">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="e.g. Priyanshu Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Destination Country
                </label>
                <input
                  type="text"
                  required
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="e.g. Vietnam, Dubai, Schengen, Bali..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Visa Category
                </label>
                <select
                  value={visaTypeInput}
                  onChange={(e) => setVisaTypeInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="Tourist">Tourist Visa (Holiday / Honeymoon)</option>
                  <option value="Visitor">Visitor Visa (Family & Friends)</option>
                  <option value="Group / Corporate">Group / Corporate Delegations</option>
                  <option value="Student">Student Visa Assistance</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    required
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span>
                    I agree to the terms and privacy policy and confirm all submitted documents and travel dates will be authentic and genuine.
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send on WhatsApp (+91 {VISA_PHONE_NUMBER})</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisaSection;
