import React, { useState } from 'react';
import { SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { SnanEntry } from '@/data/kumbh/types';
import { 
    Calendar as CalendarIcon, 
    Download, 
    Sparkles, 
    ShieldCheck, 
    Clock, 
    ArrowRight, 
    MessageCircle,
    X,
    Flame,
    Users,
    MapPin,
    CalendarCheck,
    Check
} from 'lucide-react';

interface SnanCalendarWidgetProps {
    lang?: 'en' | 'hi';
}

type FilterMode = 'all' | 'amrit' | 'seniors';

// Format YYYY-MM-DD into clean "14 Jan 2027"
function formatSnanDisplayDate(dateISO: string): string {
    try {
        const parts = dateISO.split('-');
        if (parts.length === 3) {
            const year = parts[0];
            const monthIdx = parseInt(parts[1], 10) - 1;
            const day = parseInt(parts[2], 10);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${day} ${months[monthIdx]} ${year}`;
        }
    } catch {
        // Fallback
    }
    return dateISO;
}

// Clean occasion title (e.g. "Maha Shivratri (1st Amrit Snan)" -> "Mahashivratri")
function formatOccasionTitle(occasion: string): string {
    return occasion
        .replace(/\(.*?\)/g, '')
        .replace('/ Baisakhi', '')
        .replace('/ Somvati Amavasya', '')
        .trim();
}

export const SnanCalendarWidget: React.FC<SnanCalendarWidgetProps> = ({ lang = 'en' }) => {
    const isHi = lang === 'hi';
    const [filter, setFilter] = useState<FilterMode>('all');
    const [activeMobileSnan, setActiveMobileSnan] = useState<SnanEntry | null>(null);
    const [hoveredSnanId, setHoveredSnanId] = useState<string | null>(null);

    const filteredDates = SNAN_DATES_2027.filter((snan) => {
        if (filter === 'amrit') return snan.type === 'amrit';
        if (filter === 'seniors') return snan.suitableForSeniors;
        return true;
    });

    const createGoogleCalendarLink = (snan: SnanEntry) => {
        const title = encodeURIComponent(`${snan.occasionEn} - Haridwar Kumbh 2027`);
        const dateFormatted = snan.dateISO.replace(/-/g, '');
        const details = encodeURIComponent(
            `Holy bathing festival at Har Ki Pauri, Haridwar.\nType: ${snan.type.toUpperCase()}.\nCrowd Advice: ${snan.crowdNoteEn}\nOfficial Source: Uttarakhand Mela Administration.\nTour Coordinator: Rudraksh Safar (+91 9203650311)`
        );
        const location = encodeURIComponent('Har Ki Pauri, Haridwar, Uttarakhand, India');
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}/${dateFormatted}&details=${details}&location=${location}`;
    };

    const downloadIcs = (snan: SnanEntry) => {
        const dateFormatted = snan.dateISO.replace(/-/g, '');
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Rudraksh Safar//Kumbh 2027 Calendar//EN',
            'BEGIN:VEVENT',
            `UID:${snan.id}-2027@rudrakshsafar.com`,
            `DTSTAMP:${dateFormatted}T000000Z`,
            `DTSTART;VALUE=DATE:${dateFormatted}`,
            `DTEND;VALUE=DATE:${dateFormatted}`,
            `SUMMARY:${snan.occasionEn} - Haridwar Kumbh 2027`,
            `DESCRIPTION:${snan.crowdNoteEn} (Source: Uttarakhand Mela Administration | Rudraksh Safar)`,
            'LOCATION:Har Ki Pauri, Haridwar, Uttarakhand, India',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', `${snan.id}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleWhatsAppInquiry = (snan: SnanEntry) => {
        const phone = "919203650311";
        const message = `*Kumbh 2027 Snan Inquiry* 🕉️✨\n\n` +
            `🚩 *Bathing Date:* ${formatSnanDisplayDate(snan.dateISO)} (${snan.weekday})\n` +
            `🙏 *Festival:* ${snan.occasionEn}\n` +
            `🏷️ *Type:* ${snan.type === 'amrit' ? 'Shahi Amrit Snan' : 'Major Snan'}\n\n` +
            `Please share packages, tent stays, and transport options from Chhattisgarh for this date.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="my-10 md:my-14" id="snan-calendar">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-[#ea580c] font-extrabold text-xs tracking-widest uppercase block mb-1.5 flex items-center gap-1.5">
                                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                                {isHi ? "स्नान कैलेंडर 2027" : "SNAN CALENDAR"}
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                                {isHi ? "कुंभ मेला 2027 मुख्य स्नान तिथियां" : "Kumbh Mela 2027 snan dates"}
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mt-2 leading-relaxed">
                                {isHi
                                    ? "मेला प्रशासन द्वारा घोषित 10 पवित्र स्नान पर्व। अमृत स्नान के दिनों में अखाड़ों की भव्य पेशवाई एवं भारी भीड़ होती है; सामान्य स्नान दिवस पारिवारिक स्नान हेतु अत्यंत शांत हैं।"
                                    : "Ten bathing days announced by the Mela administration. Amrit Snan days have Akhara processions and the heaviest crowds; regular snan days are calmer for families."}
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shrink-0">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    filter === 'all'
                                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {isHi ? "सभी 10 स्नान" : "All 10 Snan Days"}
                            </button>
                            <button
                                onClick={() => setFilter('amrit')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                    filter === 'amrit'
                                        ? 'bg-[#ea580c] text-white shadow-sm'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400'
                                }`}
                            >
                                <Sparkles className="w-3 h-3" />
                                <span>{isHi ? "3 अमृत स्नान" : "3 Amrit Snans"}</span>
                            </button>
                            <button
                                onClick={() => setFilter('seniors')}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                    filter === 'seniors'
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                                }`}
                            >
                                <ShieldCheck className="w-3 h-3" />
                                <span>{isHi ? "परिवार व बुजुर्ग अनुकूल" : "Calmer for Families"}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid of Snan Date Cards (5 columns x 2 rows on large desktop matching reference image) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                    {filteredDates.map((snan) => {
                        const isAmrit = snan.type === 'amrit';
                        const isFinal = snan.type === 'final';
                        const isHovered = hoveredSnanId === snan.id;
                        const displayDate = formatSnanDisplayDate(snan.dateISO);
                        const occasionTitle = isHi ? snan.occasionHi : formatOccasionTitle(snan.occasionEn);

                        return (
                            <div
                                key={snan.id}
                                onMouseEnter={() => setHoveredSnanId(snan.id)}
                                onMouseLeave={() => setHoveredSnanId(null)}
                                onClick={() => setActiveMobileSnan(snan)}
                                className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                                    isAmrit
                                        ? 'border-2 border-orange-400 dark:border-orange-500/80 bg-gradient-to-br from-orange-50/90 via-white to-amber-50/40 dark:from-orange-950/40 dark:via-slate-900 dark:to-slate-900 shadow-sm hover:shadow-xl hover:border-orange-500 hover:-translate-y-1'
                                        : 'border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-lg hover:border-orange-300 dark:hover:border-slate-700 hover:-translate-y-1'
                                }`}
                            >
                                {/* Card Front / Summary */}
                                <div>
                                    {/* Date */}
                                    <div className="flex items-center justify-between gap-1 mb-1.5">
                                        <span className="text-sm font-extrabold text-[#ea580c] tracking-tight">
                                            {displayDate}
                                        </span>
                                        {isAmrit && (
                                            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                                        )}
                                    </div>

                                    {/* Occasion Heading */}
                                    <h3 className="text-base sm:text-[15px] font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {occasionTitle}
                                    </h3>

                                    {/* Weekday Microcopy */}
                                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block mt-1">
                                        {snan.weekday}
                                    </span>
                                </div>

                                {/* Badge */}
                                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                                    <span
                                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                            isAmrit
                                                ? 'bg-[#ea580c] text-white shadow-xs'
                                                : isFinal
                                                ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                        }`}
                                    >
                                        {isAmrit ? 'AMRIT SNAN' : isFinal ? 'FINAL SNAN' : 'SNAN'}
                                    </span>

                                    {snan.suitableForSeniors && (
                                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex items-center gap-1" title="Senior Devotee Friendly">
                                            <ShieldCheck className="w-3 h-3" />
                                            <span className="hidden sm:inline">Calm</span>
                                        </span>
                                    )}
                                </div>

                                {/* DESKTOP HOVER DETAILS OVERLAY (Smooth expansion) */}
                                <div
                                    className={`hidden lg:block absolute inset-0 z-30 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md rounded-2xl p-4 border-2 transition-all duration-300 shadow-2xl flex flex-col justify-between ${
                                        isHovered ? 'opacity-100 visible scale-[1.03] pointer-events-auto' : 'opacity-0 invisible scale-95 pointer-events-none'
                                    } ${isAmrit ? 'border-orange-500' : 'border-slate-300 dark:border-slate-600'}`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                                            <span className="text-xs font-black text-[#ea580c]">
                                                {displayDate}
                                            </span>
                                            <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                                isAmrit ? 'bg-orange-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                                            }`}>
                                                {isAmrit ? 'Shahi Amrit Snan' : 'Major Snan'}
                                            </span>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1.5">
                                            {isHi ? snan.occasionHi : snan.occasionEn}
                                        </h4>

                                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug line-clamp-4">
                                            {isHi ? snan.crowdNoteHi : snan.crowdNoteEn}
                                        </p>
                                    </div>

                                    {/* Action Buttons inside hover */}
                                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleWhatsAppInquiry(snan);
                                            }}
                                            className="w-full py-1.5 px-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5" />
                                            <span>Inquire Stays & Cab</span>
                                        </button>

                                        <div className="flex gap-1.5">
                                            <a
                                                href={createGoogleCalendarLink(snan)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex-1 py-1 px-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[10px] font-semibold text-center transition-colors"
                                            >
                                                + Google Cal
                                            </a>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    downloadIcs(snan);
                                                }}
                                                className="p-1 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] transition-colors"
                                                title="Download .ics event file"
                                            >
                                                <Download className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Helper notice below grid */}
                <div className="mt-5 p-3.5 rounded-2xl bg-orange-50/70 dark:bg-slate-900 border border-orange-100/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-center sm:text-left">
                        <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>
                            <strong>Note on 3 Amrit Snans:</strong> Recognized officially by Uttarakhand Mela Administration on 15 April 2026. Shahi Akharas lead Brahma Kund at Har Ki Pauri.
                        </span>
                    </div>
                    <a
                        href="https://wa.me/919203650311?text=Hi, I want to book Kumbh Mela 2027 tent stay and pilgrimage package."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 shrink-0 flex items-center gap-1"
                    >
                        <span>Book Kumbh Tents & Stays</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>

            </div>

            {/* MOBILE INTERACTIVE MODAL / BOTTOM SHEET (When user taps a date card on mobile) */}
            {activeMobileSnan && (
                <div className="lg:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
                    <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 space-y-4 max-h-[85vh] overflow-y-auto">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                            <div>
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-100 dark:bg-orange-950 text-[#ea580c] mb-1">
                                    {activeMobileSnan.type === 'amrit' ? 'Official Shahi Amrit Snan' : 'Major Kumbh Bathing Day'}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {isHi ? activeMobileSnan.occasionHi : activeMobileSnan.occasionEn}
                                </h3>
                                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mt-0.5">
                                    {formatSnanDisplayDate(activeMobileSnan.dateISO)} ({activeMobileSnan.weekday})
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveMobileSnan(null)}
                                className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Crowd & Ritual Description */}
                        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                                <strong className="block text-slate-900 dark:text-white mb-1">
                                    📜 Bathing Significance & Mela Guidelines:
                                </strong>
                                <p className="leading-relaxed">
                                    {isHi ? activeMobileSnan.crowdNoteHi : activeMobileSnan.crowdNoteEn}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-orange-50/60 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40">
                                    <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Crowd Rush Level</span>
                                    <strong className="text-orange-900 dark:text-orange-300 capitalize text-xs">
                                        {activeMobileSnan.crowdEstimate}
                                    </strong>
                                </div>
                                <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                                    <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Senior Friendly</span>
                                    <strong className="text-emerald-900 dark:text-emerald-300 text-xs">
                                        {activeMobileSnan.suitableForSeniors ? 'Yes (Manageable)' : 'Heavy Akhara Rush'}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <button
                                onClick={() => handleWhatsAppInquiry(activeMobileSnan)}
                                className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Inquire Package / Stays on WhatsApp</span>
                            </button>

                            <div className="flex gap-2">
                                <a
                                    href={createGoogleCalendarLink(activeMobileSnan)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-1.5"
                                >
                                    <CalendarCheck className="w-3.5 h-3.5 text-orange-600" />
                                    <span>Add to Calendar</span>
                                </a>
                                <button
                                    onClick={() => downloadIcs(activeMobileSnan)}
                                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>.ics</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default SnanCalendarWidget;
