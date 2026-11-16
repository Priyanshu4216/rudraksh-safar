import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { SnanCalendarWidget } from '@/components/kumbh/SnanCalendarWidget';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KumbhFAQSchema } from '@/components/kumbh/seo/KumbhFAQSchema';
import { HARIDWAR_KUMBH_FACTS, SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { Calendar, Download, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface SnanDatesPageProps {
  lang?: 'en' | 'hi';
}

const SnanDatesPage: React.FC<SnanDatesPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'स्नान तिथियां' : 'Snan Dates & Calendar', url: isHi ? '/hi/kumbh-mela-2027/snan-dates' : '/kumbh-mela-2027/snan-dates' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/snan-dates'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/snan-dates';

  const downloadAllIcs = () => {
    let icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rudraksh Safar//Kumbh 2027 Complete Calendar//EN'
    ];

    SNAN_DATES_2027.forEach((snan) => {
      const dateFormatted = snan.dateISO.replace(/-/g, '');
      icsContent.push(
        'BEGIN:VEVENT',
        `UID:${snan.id}-full@rudrakshsafar.com`,
        `DTSTAMP:${dateFormatted}T000000Z`,
        `DTSTART;VALUE=DATE:${dateFormatted}`,
        `DTEND;VALUE=DATE:${dateFormatted}`,
        `SUMMARY:${snan.occasionEn} - Haridwar Kumbh 2027`,
        `DESCRIPTION:${snan.crowdNoteEn} (Source: Uttarakhand Mela Administration)`,
        'LOCATION:Har Ki Pauri, Haridwar, Uttarakhand, India',
        'END:VEVENT'
      );
    });

    icsContent.push('END:VCALENDAR');

    const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'haridwar-kumbh-2027-snan-calendar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const datesFaqs = [
    {
      id: "faq-dates-1",
      questionEn: "What are the official Amrit Snan (Shahi Snan) dates for Haridwar Kumbh 2027?",
      questionHi: "हरिद्वार कुंभ 2027 में अमृत स्नान (शाही स्नान) की आधिकारिक तिथियां क्या हैं?",
      answerEn: "The three official Amrit Snan dates announced by the Mela Administration are 6 March 2027 (Maha Shivratri), 8 March 2027 (Phalguna Amavasya), and 14 April 2027 (Mesh Sankranti). On these days, the 13 Akharas take their ceremonial royal holy dip at Har Ki Pauri.",
      answerHi: "मेला प्रशासन द्वारा घोषित 3 आधिकारिक अमृत स्नान हैं: 6 मार्च 2027 (महाशिवरात्रि), 8 मार्च 2027 (फाल्गुन / सोमवती अमावस्या), और 14 अप्रैल 2027 (मेष संक्रांति)। इन तिथियों पर 13 अखाड़ों के साधु-संत हर की पौड़ी पर शाही स्नान करते हैं।"
    },
    {
      id: "faq-dates-2",
      questionEn: "Why do some websites claim there are four Amrit Snans?",
      questionHi: "कुछ वेबसाइटों पर चार अमृत स्नान होने का दावा क्यों किया गया है?",
      answerEn: "Certain private travel portals mistakenly list Chaitra Purnima (20 April 2027) as a fourth Amrit Snan. However, official government notifications from Mela Officer Sonika Singh confirm exactly three Amrit Snans, with 20 April designated as the concluding major snan festival.",
      answerHi: "कुछ निजी यात्रा पोर्टल चैत्र पूर्णिमा (20 अप्रैल 2027) को चौथा अमृत स्नान बताते हैं। जबकि मेला अधिकारी द्वारा जारी आधिकारिक अधिसूचना में स्पष्ट रूप से केवल 3 अमृत स्नान घोषित हैं और 20 अप्रैल मेले का समापन स्नान पर्व है।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ 2027 स्नान तिथियां: 10 स्नान पर्व एवं 3 अमृत स्नान कैलेंडर"
            : "Haridwar Kumbh 2027 Snan Dates: Full 10 Bathing Festivals Calendar"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार अर्ध कुंभ 2027 की आधिकारिक स्नान तिथियां। 14 जनवरी मकर संक्रांति से 20 अप्रैल तक के 10 स्नान, 3 अमृत स्नान, कैलेंडर डाउनलोड एवं भीड़ अनुमान।"
              : "Complete Haridwar Ardh Kumbh 2027 snan dates calendar. See all 10 bathing days, 3 official Amrit Snans, crowd planning estimates, and download iCal."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/snan-dates" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/snan-dates" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/snan-dates" />
      </Helmet>

      <KumbhFAQSchema faqs={datesFaqs} lang={lang} />
      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार कुंभ 2027 स्नान तिथियां एवं कैलेंडर" : "Haridwar Kumbh 2027 Snan Dates & Bathing Calendar"}
        description="Comprehensive official calendar of all 10 Haridwar Ardh Kumbh 2027 bathing dates."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ 2027 स्नान तिथियां एवं आधिकारिक कैलेंडर" : "Haridwar Kumbh 2027 Snan Dates & Bathing Calendar"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "उत्तराखंड मेला प्रशासन द्वारा सत्यापित सभी 10 स्नान पर्वों की सूची। जानिए कौन से दिन अमृत स्नान हैं और कौन से दिन बुजुर्गों व बाल-परिवारों के लिए शांत स्नान हेतु उपयुक्त हैं।"
            : "The single verified schedule of all 10 bathing dates for Haridwar Ardh Kumbh 2027. Filter by Amrit Snans or calmer days for seniors, and download calendar alerts."}
        </p>

        {/* Global iCal Download CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={downloadAllIcs}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:opacity-90 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{isHi ? "संपूर्ण 10 स्नान कैलेंडर (.ics) डाउनलोड करें" : "Download Complete 10-Date Calendar (.ics)"}</span>
          </button>
        </div>
      </header>

      {/* Interactive Snan Calendar Widget */}
      <SnanCalendarWidget lang={lang} />

      {/* Semantic Full Bathing Table for Crawler Accessibility */}
      <section className="my-12 pt-8 border-t border-border/60">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "संपूर्ण स्नान तिथि तालिका (प्रशासनिक घोषणा)" : "Complete Bathing Schedule Table (Official Schedule)"}
        </h2>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-muted/60 text-foreground border-b border-border">
              <tr>
                <th className="p-3 font-semibold">#</th>
                <th className="p-3 font-semibold">{isHi ? "दिनांक" : "Date"}</th>
                <th className="p-3 font-semibold">{isHi ? "वार" : "Day"}</th>
                <th className="p-3 font-semibold">{isHi ? "स्नान पर्व" : "Occasion"}</th>
                <th className="p-3 font-semibold">{isHi ? "वर्गीकरण" : "Type"}</th>
                <th className="p-3 font-semibold">{isHi ? "नियोजन अनुमान" : "Planning Estimate"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SNAN_DATES_2027.map((snan, index) => (
                <tr key={snan.id} className={snan.type === 'amrit' ? 'bg-orange-500/5 font-medium' : ''}>
                  <td className="p-3 text-muted-foreground">{index + 1}</td>
                  <td className="p-3 font-mono font-bold text-foreground whitespace-nowrap">{snan.dateISO}</td>
                  <td className="p-3 text-muted-foreground">{snan.weekday}</td>
                  <td className="p-3 font-semibold text-primary">{isHi ? snan.occasionHi : snan.occasionEn}</td>
                  <td className="p-3 uppercase text-[11px] font-bold">
                    {snan.type === 'amrit' ? (
                      <span className="text-orange-600 dark:text-orange-400">★ Amrit Snan</span>
                    ) : snan.type === 'final' ? (
                      <span className="text-purple-600">Final Snan</span>
                    ) : (
                      <span className="text-muted-foreground">Major Snan</span>
                    )}
                  </td>
                  <td className="p-3 capitalize text-xs text-muted-foreground">{snan.crowdEstimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Internal Navigation Links */}
      <nav className="my-8 p-6 rounded-2xl bg-muted/20 border border-border flex flex-wrap gap-4 text-xs font-semibold">
        <Link to={isHi ? "/hi/kumbh-mela-2027" : "/kumbh-mela-2027"} className="text-primary hover:underline flex items-center gap-1">
          <span>{isHi ? "← कुंभ 2027 मुख्य पृष्ठ" : "← Haridwar Kumbh 2027 Hub"}</span>
        </Link>
        <Link to={isHi ? "/hi/kumbh-mela-2027/stay" : "/kumbh-mela-2027/stay"} className="text-primary hover:underline flex items-center gap-1">
          <span>{isHi ? "ठहरने के क्षेत्र व होटल गाइड →" : "Haridwar Stay & Camp Guide →"}</span>
        </Link>
        <Link to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"} className="text-primary hover:underline flex items-center gap-1">
          <span>{isHi ? "यात्रा पैकेज एवं टेंट बुकिंग →" : "View Packages & Camps →"}</span>
        </Link>
      </nav>
    </KumbhLayout>
  );
};

export default SnanDatesPage;
