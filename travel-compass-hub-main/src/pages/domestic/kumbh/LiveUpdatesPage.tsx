import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { NextSnanCountdown } from '@/components/kumbh/NextSnanCountdown';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { Bell, Clock, Calendar, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface LiveUpdatesPageProps {
  lang?: 'en' | 'hi';
}

const LiveUpdatesPage: React.FC<LiveUpdatesPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'ताज़ा समाचार एवं सूचनाएं' : 'Live Updates & Notices', url: isHi ? '/hi/kumbh-mela-2027/live-updates' : '/kumbh-mela-2027/live-updates' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/live-updates'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/live-updates';

  const notices = [
    {
      date: "15 Apr 2026",
      source: "Uttarakhand Mela Administration (PTI)",
      titleEn: "Official Notification of 10 Bathing Dates and 3 Amrit Snans",
      titleHi: "10 स्नान पर्वों एवं 3 अमृत स्नान की आधिकारिक अधिसूचना जारी",
      textEn: "Mela Officer Sonika Singh announced the certified schedule of 10 major snan dates, affirming Makar Sankranti (14 Jan 2027) as opening day and 3 official Amrit Snans on 6 Mar, 8 Mar, and 14 Apr 2027.",
      textHi: "मेला अधिकारी सोनिका सिंह ने 10 प्रमुख स्नान तिथियों के आधिकारिक कार्यक्रम की घोषणा की, जिसमें 14 जनवरी 2027 मकर संक्रांति को उद्घाटन और 6 मार्च, 8 मार्च व 14 अप्रैल को 3 आधिकारिक अमृत स्नान निर्धारित किए गए।"
    },
    {
      date: "28 Nov 2025",
      source: "Uttarakhand Chief Minister Secretariat",
      titleEn: "Cabinet Directive on Haridwar Ardh Kumbh Infrastructure Preparations",
      titleHi: "हरिद्वार अर्ध कुंभ बुनियादी ढांचा तैयारी हेतु कैबिनेट दिशा-निर्देश",
      textEn: "Chief Minister Pushkar Singh Dhami declared that the 2027 Ardh Kumbh will be celebrated with grand spiritual scale comparable to a Purna Kumbh, mandating riverbank ghat reinforcements and new bridge construction.",
      textHi: "मुख्यमंत्री पुष्कर सिंह धामी ने निर्देश दिया कि 2027 का अर्ध कुंभ पूर्ण कुंभ स्तर की भव्यता के साथ मनाया जाएगा, जिसके अंतर्गत नए घाटों, पुलों और यात्री सुविधाओं का निर्माण युद्धस्तर पर प्रारंभ किया गया।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027 ताज़ा अपडेट्स: आगामी स्नान उलटी गिनती एवं प्रशासनिक सूचनाएं"
            : "Haridwar Kumbh 2027 Live Updates: Bathing Countdown & Official Notices"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार अर्ध कुंभ 2027 के ताज़ा समाचार, अगले स्नान की उलटी गिनती, प्रशासनिक नोटिस, और यात्रा सलाह। जानिए आज का मेला अपडेट।"
              : "Live updates and official notices for Haridwar Ardh Kumbh 2027. Real-time countdown to the next snan date, police traffic notices, and changelog."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/live-updates" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/live-updates" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/live-updates" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "कुंभ 2027 ताज़ा अपडेट्स एवं सूचनाएं" : "Kumbh 2027 Live Updates & Notices"}
        description="Live notifications, official gazette notices, and countdowns for Haridwar Ardh Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ 2027: ताज़ा समाचार, सूचनाएं एवं उलटी गिनती" : "Haridwar Kumbh 2027: Live Updates, Notices & Snan Countdown"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "आगामी स्नान की वास्तविक समय पर उलटी गिनती, प्रशासन द्वारा जारी नवीनतम नियम एवं आधिकारिक परिवर्तनों का विस्तृत विवरण।"
            : "Track real-time countdowns to upcoming bathing festivals and read official administrative gazette announcements as they are released."}
        </p>
      </header>

      {/* Dynamic Countdown */}
      <NextSnanCountdown lang={lang} />

      {/* Sourced Notices Feed */}
      <section className="my-10">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          {isHi ? "आधिकारिक सूचनाएं एवं आदेश तालिका" : "Official Gazette & Administrative Notices"}
        </h2>

        <div className="space-y-4">
          {notices.map((n, i) => (
            <article key={i} className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-primary font-mono">{n.date}</span>
                <span className="text-[11px] text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                  {isHi ? "स्रोत: " : "Source: "}{n.source}
                </span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">
                {isHi ? n.titleHi : n.titleEn}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {isHi ? n.textHi : n.textEn}
              </p>
            </article>
          ))}
        </div>
      </section>
    </KumbhLayout>
  );
};

export default LiveUpdatesPage;
