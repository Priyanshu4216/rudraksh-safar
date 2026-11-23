import React from 'react';
import { MessageCircle, CheckCheck, Clock, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'Discover Your Trip', desc: 'Pick by destination, travel mood, month or your departure city.' },
  { num: '02', title: 'Chat Directly With a Real Planner', desc: 'No robotic ticket queues. Talk on WhatsApp or phone with local experts.' },
  { num: '03', title: 'Personalize Stays & Pace', desc: 'Customize hotels, sightseeing pace, vehicles, and meal plans to your taste.' },
  { num: '04', title: 'Transparent Quote & Easy EMI', desc: 'Clear itemized pricing with zero hidden surcharges and flexible payment options.' },
  { num: '05', title: 'Travel With 24x7 Ground Concierge', desc: 'Our team stays on standby throughout your yatra and vacation.' }
];

const WhatsAppChatFlow: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#fffbf5] dark:bg-slate-950 border-t border-amber-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 5 Steps */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a1a]">
              From Idea to Itinerary
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 dark:text-white leading-[1.1]">
              Skip the forms. <br />
              <span className="text-[#8c1d2f] dark:text-amber-400">Just chat.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Planning a vacation shouldn't feel like filling tax documents. Share your dates and wishlist, and our certified destination planners deliver a full PDF itinerary with verified hotels in minutes.
            </p>

            <div className="space-y-4 pt-2">
              {STEPS.map((s) => (
                <div key={s.num} className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 dark:bg-slate-800 text-[#8c1d2f] dark:text-amber-400 text-xs font-black shrink-0 mt-0.5 border border-amber-300/60">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%2C%20I%20would%20like%20to%20plan%20a%20trip.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Right: WhatsApp Mockup Simulation */}
          <div className="hidden md:block lg:col-span-6">
            <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-[#e5ddd5] dark:bg-slate-900">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-serif font-black text-amber-200">
                    RS
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-tight">Rudraksh Safar Holidays</div>
                    <div className="text-[11px] text-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified Travel Agency · Online</span>
                    </div>
                  </div>
                </div>
                <PhoneCall className="w-4 h-4 text-white/80" />
              </div>

              {/* Chat Message Stream */}
              <div className="p-4 space-y-3.5 text-xs font-sans">
                {/* User Message */}
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] space-y-1">
                    <p>Namaste! We are a family of 4 from Raipur. Looking for a Ladakh trip in June. What options do you have?</p>
                    <span className="text-[9px] text-slate-400 block text-right">10:14 AM</span>
                  </div>
                </div>

                {/* Agent Reply 1 */}
                <div className="flex justify-end">
                  <div className="bg-[#dcf8c6] dark:bg-emerald-950 text-slate-900 dark:text-slate-100 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] space-y-1">
                    <p>Namaste! Great season choice. We have a 7-day acclimatized circuit covering Leh, Nubra Valley sand dunes, and Pangong Lake with oxygen-equipped Innova Crysta.</p>
                    <span className="text-[9px] text-emerald-800 dark:text-emerald-400 block text-right flex items-center justify-end gap-1">
                      <span>10:15 AM</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </span>
                  </div>
                </div>

                {/* Agent Reply 2 with PDF */}
                <div className="flex justify-end">
                  <div className="bg-[#dcf8c6] dark:bg-emerald-950 text-slate-900 dark:text-slate-100 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] space-y-1">
                    <div className="flex items-center gap-2 p-2 bg-white/70 dark:bg-black/30 rounded-xl">
                      <span className="text-red-500 font-bold text-lg">📄</span>
                      <div>
                        <div className="font-bold text-[11px]">Ladakh_7D_Raipur_Quote.pdf</div>
                        <div className="text-[9px] text-slate-500">Day-wise Hotels + Inclusions + Pricing</div>
                      </div>
                    </div>
                    <p className="pt-1">Itinerary + No Cost EMI options ready. Would you like me to book the hotel category you prefer?</p>
                    <span className="text-[9px] text-emerald-800 dark:text-emerald-400 block text-right flex items-center justify-end gap-1">
                      <span>10:17 AM</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </span>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] space-y-1">
                    <p>Perfect! The itinerary is clear and pricing is reasonable. Let's confirm!</p>
                    <span className="text-[9px] text-slate-400 block text-right">10:19 AM</span>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="p-2.5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  placeholder="Type your message on WhatsApp..."
                  className="w-full bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2 text-xs text-slate-500"
                />
                <div className="w-8 h-8 rounded-full bg-[#128c7e] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChatFlow;
