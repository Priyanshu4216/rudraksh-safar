import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  Sparkles,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Camera,
  ShieldCheck,
  TrendingUp,
  Percent,
  Phone,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

interface BudgetYouthValueSectionProps {
  cityName?: string;
  onOpenBookingModal?: () => void;
}

export const BudgetYouthValueSection: React.FC<BudgetYouthValueSectionProps> = ({
  cityName = 'Bhilai, Raipur & Durg',
  onOpenBookingModal
}) => {
  const comparisonData = [
    {
      item: 'Delhi–Manali–Kasol–Delhi Transport',
      diyPrice: '₹3,500 (Volvo / Bus tickets)',
      packagePrice: 'Included (AC Pushback Tempo)',
      savings: '₹3,500'
    },
    {
      item: '2 Nights Hotel in Manali',
      diyPrice: '₹2,600 (Decent room sharing)',
      packagePrice: 'Included (Verified Hotel)',
      savings: '₹2,600'
    },
    {
      item: '1 Night Kasol Riverside Camp + Bonfire',
      diyPrice: '₹2,400 (Alpine tent + wood fire)',
      packagePrice: 'Included (Parvati Riverside Camp)',
      savings: '₹2,400'
    },
    {
      item: '6 Meals (3 Breakfasts + 3 Dinners)',
      diyPrice: '₹2,800 (Cafe / Dhaba bills)',
      packagePrice: 'Included (Buffet Meals)',
      savings: '₹2,800'
    },
    {
      item: 'Local Cabs (Solang, Kullu, Manikaran)',
      diyPrice: '₹3,200 (Cab rentals & tolls)',
      packagePrice: 'Included (Dedicated Sightseeing)',
      savings: '₹3,200'
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold px-3 py-1 mb-3 text-xs tracking-wide uppercase">
            💰 Unmatched Price-to-Value Ratio
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            How Can We Offer 6 Days at Just <span className="text-amber-400">₹5,999</span>?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered specially for <strong>college students, solo backpackers, and budget-conscious explorers</strong> across {cityName}. 
            Because we book hotels, camps, and fleets in bulk, you get luxury squad travel at hostel backpacking rates!
          </p>
        </div>

        {/* DIY TRIP VS RUDRAKSH SAFAR PACKAGE COMPARISON TABLE */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Transparent Cost Breakdown</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                DIY Private Trip vs. Rudraksh Safar Package
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs font-semibold">
              <TrendingUp className="w-4 h-4" /> You Save Over ₹8,500 Per Person
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-3">Expense Category</th>
                  <th className="py-3 px-3 text-red-400">If You Plan Alone (DIY)</th>
                  <th className="py-3 px-3 text-emerald-400">Rudraksh Safar Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3.5 px-3 font-medium text-slate-300">{row.item}</td>
                    <td className="py-3.5 px-3 text-red-300 font-mono flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>{row.diyPrice}</span>
                    </td>
                    <td className="py-3.5 px-3 text-emerald-300 font-mono font-bold">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {row.packagePrice}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-slate-900/80 font-bold text-sm sm:text-base border-t-2 border-slate-700">
                  <td className="py-4 px-3 text-white uppercase text-xs sm:text-sm">Total 6-Day Estimate</td>
                  <td className="py-4 px-3 text-red-400 font-mono line-through">₹14,500+</td>
                  <td className="py-4 px-3 text-amber-400 font-mono text-lg sm:text-xl font-black">
                    ₹5,999 Only <span className="text-xs text-slate-400 font-normal">/ person</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>*Based on average standalone hotel tariffs, taxi union rates, and individual dining in Himachal.</span>
            <span className="text-emerald-400 font-bold">No Hidden Charges • GST Invoiced</span>
          </div>
        </div>

        {/* 4 YOUTH & STUDENT POWER PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-5 space-y-3 hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Token Advance Booking</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Don't wait for your next pocket money or salary cycle! Confirm your seat with a nominal booking advance and pay the balance before departure.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-5 space-y-3 hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">College Squad Friendly</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Huge hit among students from <strong>BIT Durg, CSVTU, NIT Raipur, AIIMS, GGU, Rungta, and Shankara</strong>. 
              Bring your college ID for extra squad surprise credits!
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-5 space-y-3 hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Curated Instagram &amp; Reel Spots</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every location has handpicked aesthetic photography spots: Solang paragliding ridges, Kasol turquoise pebble shores, deodar forest trails &amp; cafe aesthetics.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-5 space-y-3 hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Safe Solo Traveler Protocols</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Budget doesn't mean compromising safety. Mandatory government ID checks, strictly separate male/female room allocations, and 24/7 road coordinator.
            </p>
          </div>
        </div>

        {/* DIRECT AEO PROMPT ANSWER SNIPPET */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              ⚡ Quick AI Answer for Budget Travellers
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Is ₹5,999 Really The Full Package Price?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              <strong>Yes.</strong> The ₹5,999 rate is all-inclusive for transportation (Delhi-Manali-Kasol-Delhi AC Tempo Traveller), 
              hotel stay, riverside camp, 6 buffet meals (3 Breakfasts + 3 Dinners), bonfire, and all sightseeing. 
              The only non-included items are personal snacks, lunches, and optional adventure sports (like rafting/paragliding).
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onOpenBookingModal}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 text-sm shadow-lg shadow-amber-500/20"
            >
              Book At ₹5,999
            </Button>
            <a
              href="tel:9713057086"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-lg border border-slate-700 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call 9713057086
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetYouthValueSection;
