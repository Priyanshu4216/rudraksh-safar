import React from 'react';
import { CountryVisa, createVisaWhatsAppUrl, VISA_PHONE_NUMBER } from '@/data/visaCountriesData';
import { X, CheckCircle2, AlertCircle, ExternalLink, Calendar, MapPin, Clock, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';

interface CountryDetailModalProps {
  country: CountryVisa | null;
  onClose: () => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({ country, onClose }) => {
  if (!country) return null;

  const whatsappMessage = `Hi Rudraksh Safar, I am planning to travel to ${country.name}. Please guide me with the ${country.entryType} requirements, documents checklist, service fee, and filing timeline.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col text-slate-800 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md">
              {country.code}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {country.name} Visa
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  country.entryType === 'Visa-free or on arrival'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : country.entryType === 'e-Visa'
                    ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                }`}>
                  {country.entryType}
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Indian passport checklist · Last verified: {country.checked}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {country.summary}
            </p>
            {country.attendance && (
              <div className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{country.attendance}</span>
              </div>
            )}
          </div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Entry Route</span>
              <p className="font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{country.route}</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Permitted Stay</span>
              <p className="font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{country.stay}</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Government Fee</span>
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{country.governmentFee}</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Best Time To Visit</span>
              <p className="font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{country.bestTime}</p>
            </div>
          </div>

          {/* Documents Required */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Documents Checklist for Indian Passport Holders
            </h4>
            <div className="grid grid-cols-1 gap-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              {country.documents.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes & Tips */}
          {(country.notes?.length > 0 || country.tips?.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {country.notes?.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                  <h5 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Crucial Requirements
                  </h5>
                  <ul className="text-xs text-amber-900/90 dark:text-amber-200/80 space-y-1.5 list-disc list-inside">
                    {country.notes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {country.tips?.length > 0 && (
                <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                  <h5 className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Pro Tips For Approval
                  </h5>
                  <ul className="text-xs text-blue-900/90 dark:text-blue-200/80 space-y-1.5 list-disc list-inside">
                    {country.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Official Website Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 gap-3">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Official Government Portal</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Always verify or apply through official sovereign channels to avoid inflated broker fees.
              </p>
            </div>
            <a
              href={country.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0"
            >
              <span>{country.officialUrl.replace(/^https?:\/\/(www\.)?/, '')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="sticky bottom-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Fast assistance on WhatsApp: </span>
            <b className="text-slate-800 dark:text-slate-200">+91 {VISA_PHONE_NUMBER}</b>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs transition-colors cursor-pointer w-1/3 sm:w-auto"
            >
              Close
            </button>
            <a
              href={createVisaWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Apply for {country.name} Visa on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailModal;
