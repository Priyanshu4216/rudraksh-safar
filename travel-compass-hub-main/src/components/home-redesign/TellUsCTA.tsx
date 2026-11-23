import React from 'react';
import { MessageCircle, Phone, Sparkles, ShieldCheck } from 'lucide-react';

const TellUsCTA: React.FC = () => {
  return (
    <section className="py-14 bg-[#fffbf5] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#ff7a1a] via-[#e84232] to-[#8c1d2f] text-white shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs font-bold uppercase tracking-wider border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Zero Booking Fees · Free Quotation</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight drop-shadow">
                Tell us the place. <br />
                We'll plan the rest.
              </h2>

              <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed">
                Share your budget, travel dates, and group size. Our local experts will craft 2 to 3 tailored options with confirmed hotel availability within 10 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%2C%20I%20want%20a%20free%20trip%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#8c1d2f] font-bold text-sm sm:text-base shadow-xl hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Us Now</span>
              </a>

              <a
                href="tel:+919203650311"
                className="w-full sm:w-auto px-7 py-4 rounded-full border-2 border-white/80 hover:bg-white/15 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 92036 50311</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TellUsCTA;
