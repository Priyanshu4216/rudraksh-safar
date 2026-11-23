import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: 'How do I book a holiday or pilgrimage package with Rudraksh Safar?',
    a: 'It starts with a simple WhatsApp message or call. Share your travel dates, destination wishlist, and number of passengers. Our certified trip planner creates a customized day-wise itinerary with transparent pricing options. Once you approve, you can confirm with our flexible advance payment and EMI options.'
  },
  {
    q: 'Do you operate both private customized trips and fixed group departures?',
    a: 'Yes, absolutely. We offer both private itineraries tailored exclusively for couples, families, and corporate groups (with private cabs and selected hotels) as well as fixed budget-friendly group departures like our popular Manali-Kasol Strangers Trip and Char Dham Yatra group coaches.'
  },
  {
    q: 'Can you help with flight tickets, IRCTC train tickets, visas and travel insurance too?',
    a: 'Yes! Our all-in-one travel desk provides verified corporate flight booking, authorized IRCTC train reservations (including Tatkal support), express tourist visas for 50+ countries (including Thailand, Dubai, Bali, Singapore, Schengen), and comprehensive overseas travel insurance.'
  },
  {
    q: 'Where are your physical branch offices located?',
    a: 'Our main office is located in Bhilai, Chhattisgarh, with regional branches and dedicated ground concierge teams in Durg, Raipur, Haridwar, Kashmir, and Thailand. You can visit us in person or complete everything online through WhatsApp.'
  },
  {
    q: 'What is your payment security and cancellation policy?',
    a: 'We provide itemized GST invoices, verified corporate bank accounts, and zero hidden charges. We also offer travel insurance and flexible postponement terms so your money is always safe.'
  }
];

const HomeFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
            Everything You Need To Know
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white mt-1">
            Questions before you book
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Clear answers to help you plan your journey with total confidence
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-amber-200/90 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#8c1d2f]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans border-t border-amber-100 dark:border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-900/80 rounded-2xl border border-amber-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Have a question that is not listed here?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our travel specialists in Bhilai & Raipur are available 7 days a week.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+919203650311"
              className="px-4 py-2 rounded-full border border-[#8c1d2f] text-[#8c1d2f] text-xs font-bold hover:bg-[#8c1d2f] hover:text-white transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919203650311?text=Hi%2C%20I%20have%20a%20question%20before%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
