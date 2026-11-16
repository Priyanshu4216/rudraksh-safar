import React, { useState } from 'react';
import { SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { SnanEntry } from '@/data/kumbh/types';
import { Calendar as CalendarIcon, Download, Sparkles, ShieldCheck, AlertCircle, Clock } from 'lucide-react';

interface SnanCalendarWidgetProps {
  lang?: 'en' | 'hi';
}

type FilterMode = 'all' | 'amrit' | 'seniors';

export const SnanCalendarWidget: React.FC<SnanCalendarWidgetProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';
  const [filter, setFilter] = useState<FilterMode>('all');

  const filteredDates = SNAN_DATES_2027.filter((snan) => {
    if (filter === 'amrit') return snan.type === 'amrit';
    if (filter === 'seniors') return snan.suitableForSeniors;
    return true;
  });

  // Generates Google Calendar Event link
  const createGoogleCalendarLink = (snan: SnanEntry) => {
    const title = encodeURIComponent(`${snan.occasionEn} - Haridwar Ardh Kumbh 2027`);
    const dateFormatted = snan.dateISO.replace(/-/g, '');
    const details = encodeURIComponent(
      `Holy bathing festival at Har Ki Pauri, Haridwar. Event Type: ${snan.type.toUpperCase()}.\nCrowd planning note: ${snan.crowdNoteEn}\nOfficial Source: Uttarakhand Mela Administration.`
    );
    const location = encodeURIComponent('Har Ki Pauri, Haridwar, Uttarakhand, India');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}/${dateFormatted}&details=${details}&location=${location}`;
  };

  // Generates and downloads single iCal file (.ics)
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
      `DESCRIPTION:${snan.crowdNoteEn} (Source: Uttarakhand Mela Administration)`,
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

  return (
    <section className="my-8 md:my-12" id="snan-calendar">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {isHi ? "आधिकारिक स्नान कैलेंडर 2027" : "Official Bathing Calendar 2027"}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            {isHi
              ? "उत्तराखंड मेला प्रशासन द्वारा घोषित 10 प्रमुख स्नान एवं 3 अमृत स्नान।"
              : "10 major bathing festivals and 3 Amrit Snans announced by the Mela Administration."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/50 border border-border">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isHi ? "सभी 10 स्नान" : "All 10 Snan Days"}
          </button>
          <button
            onClick={() => setFilter('amrit')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filter === 'amrit'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            {isHi ? "केवल अमृत स्नान (3)" : "Amrit Snan (3)"}
          </button>
          <button
            onClick={() => setFilter('seniors')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filter === 'seniors'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            {isHi ? "बुजुर्गों हेतु शांत दिन" : "Calmer for Seniors"}
          </button>
        </div>
      </div>

      {/* Grid of Snan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredDates.map((snan) => {
          const isAmrit = snan.type === 'amrit';
          const isConcluding = snan.type === 'final';

          return (
            <article
              key={snan.id}
              className={`relative rounded-2xl p-5 border transition-all hover:shadow-lg flex flex-col justify-between ${
                isAmrit
                  ? 'border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-background to-background'
                  : 'border-border/70 bg-card/60 hover:border-border'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      isAmrit
                        ? 'bg-orange-600 text-white'
                        : isConcluding
                        ? 'bg-purple-600 text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {isAmrit ? (
                      <>
                        <Sparkles className="w-3 h-3" />
                        {isHi ? "शाही अमृत स्नान" : "Amrit Shahi Snan"}
                      </>
                    ) : isConcluding ? (
                      isHi ? "पूर्णाहुति स्नान" : "Concluding Snan"
                    ) : (
                      isHi ? "प्रमुख स्नान पर्व" : "Major Snan"
                    )}
                  </span>

                  {/* Crowd Label */}
                  <span className="text-[11px] text-muted-foreground bg-muted/40 px-2 py-0.5 rounded">
                    {isHi ? "नियोजन अनुमान: " : "Planning estimate: "}
                    <strong className="text-foreground font-semibold capitalize">
                      {snan.crowdEstimate}
                    </strong>
                  </span>
                </div>

                {/* Date & Weekday */}
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground">
                    {snan.dateISO}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium">({snan.weekday})</span>
                </div>

                {/* Occasion */}
                <h4 className="text-base font-semibold text-primary mb-2">
                  {isHi ? snan.occasionHi : snan.occasionEn}
                </h4>

                {/* Crowd Note */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {isHi ? snan.crowdNoteHi : snan.crowdNoteEn}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-2 text-xs">
                {snan.suitableForSeniors && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {isHi ? "बुजुर्गों हेतु अनुकूल" : "Senior Friendly"}
                  </span>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={() => downloadIcs(snan)}
                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    title={isHi ? ".ics डाउनलोड करें" : "Download .ics"}
                    aria-label={isHi ? `${snan.occasionHi} .ics कैलेंडर फाइल डाउनलोड करें` : `Download .ics for ${snan.occasionEn}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={createGoogleCalendarLink(snan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-[11px] transition-colors"
                  >
                    <CalendarIcon className="w-3 h-3" />
                    <span>{isHi ? "कैलेंडर जोड़ें" : "+ Google Cal"}</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
