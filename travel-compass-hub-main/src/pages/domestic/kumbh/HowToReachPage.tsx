import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { HOW_TO_REACH_ROUTES } from '@/data/kumbh/routes';
import { CHHATTISGARH_CITIES } from '@/data/kumbh/cities';
import { Train, Plane, Car, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface HowToReachPageProps {
  lang?: 'en' | 'hi';
}

const HowToReachPage: React.FC<HowToReachPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'कैसे पहुंचे' : 'How to Reach', url: isHi ? '/hi/kumbh-mela-2027/how-to-reach' : '/kumbh-mela-2027/how-to-reach' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/how-to-reach'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/how-to-reach';

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027 कैसे पहुंचे: ट्रेन, सड़क एवं उड़ान मार्ग"
            : "How to Reach Haridwar Kumbh Mela 2027: Train, Road & Flight Routes"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार कुंभ 2027 पहुंचने के संपूर्ण मार्ग। दिल्ली, देहरादून, मुंबई, जयपुर, लखनऊ एवं छत्तीसगढ़ (रायपुर, भिलाई, बिलासपुर) से ट्रेन, बस और हवाई यात्रा विकल्प।"
              : "Comprehensive transit guide for Haridwar Kumbh Mela 2027. Review route options from Delhi, Dehradun, Mumbai, Jaipur, Lucknow, and Chhattisgarh cities."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/how-to-reach" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/how-to-reach" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/how-to-reach" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार कुंभ मेला 2027 कैसे पहुंचे" : "How to Reach Haridwar Kumbh Mela 2027"}
        description="Detailed origin-wise travel guide for pilgrims travelling to Haridwar Ardh Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ मेला 2027 कैसे पहुंचे: संपूर्ण मार्गदर्शिका" : "How to Reach Haridwar Kumbh Mela 2027: Complete Transit Guide"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "हरिद्वार राष्ट्रीय राजधानी क्षेत्र और देश के विभिन्न राज्यों से रेल, राष्ट्रीय राजमार्ग एवं हवाई सेवाओं से जुड़ा है। यहाँ प्रमुख प्रस्थान केंद्रों से सटीक मार्ग विवरण दिया गया है।"
            : "Haridwar is accessible via direct express trains, national expressways, and flights into Dehradun Jolly Grant Airport. Review origin-specific routes and planning advice below."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "हरिद्वार पहुंचने का सबसे सुगम माध्यम कौन सा है?" : "What is the best way to reach Haridwar for Kumbh 2027?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "अधिकांश श्रद्धालुओं के लिए नई दिल्ली अथवा प्रमुख राज्य केंद्रों से सीधी सुपरफास्ट ट्रेन (जैसे वंदे भारत या जन शताब्दी) हरिद्वार जंक्शन (HW) तक सबसे सुविधाजनक विकल्प है। हवाई यात्रा करने वाले श्रद्धालु देहरादून के जौलीग्रांट हवाई अड्डे पर उतरकर 40-45 किमी की सड़क यात्रा से हरिद्वार पहुंच सकते हैं।"
            : "For most domestic pilgrims, direct express trains like the Vande Bharat or Shatabdi from New Delhi directly to Haridwar Junction (HW) provide the most relaxed transit. Air travelers land at Dehradun's Jolly Grant Airport (DED) and complete the remaining 40 km via pre-booked highway cab."}
        </p>
      </section>

      {/* Origin Tables */}
      <div className="space-y-8">
        {HOW_TO_REACH_ROUTES.map((origin) => (
          <article key={origin.originId} className="p-6 rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {isHi ? origin.originHi : origin.originEn}
              </h2>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {isHi ? origin.bestOptionHi : origin.bestOptionEn}
              </span>
            </div>

            <div className="overflow-x-auto mt-4 border border-border/80 rounded-xl">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-muted/60 text-foreground border-b border-border">
                  <tr>
                    <th className="p-3 font-semibold">{isHi ? "माध्यम" : "Mode"}</th>
                    <th className="p-3 font-semibold">{isHi ? "मार्ग विवरण एवं दिशा-निर्देश" : "Route Notes & Advisories"}</th>
                    <th className="p-3 font-semibold">{isHi ? "आधिकारिक स्रोत" : "Official Source"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {origin.routes.map((r, idx) => (
                    <tr key={idx} className="hover:bg-muted/10">
                      <td className="p-3 font-semibold text-foreground whitespace-nowrap">{r.mode}</td>
                      <td className="p-3 text-muted-foreground leading-relaxed">{r.notes}</td>
                      <td className="p-3 text-xs text-primary whitespace-nowrap">
                        <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Verified Official Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>

      {/* Chhattisgarh Silo Navigation Block */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border-2 border-orange-500/30 bg-orange-500/5">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "छत्तीसगढ़ के शहरों से हरिद्वार कुंभ यात्रा योजनाएं"
            : "Haridwar Kumbh 2027 Packages from Chhattisgarh Cities"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
          {isHi
            ? "छत्तीसगढ़ के विभिन्न जिलों से हरिद्वार कुंभ के लिए विशेष ट्रेन व समूह यात्राएं संचालित की जा रही हैं। अपने निकटतम शहर का चयन करें:"
            : "Dedicated departures and localized coordination connecting five major cities across Chhattisgarh directly to Haridwar:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {CHHATTISGARH_CITIES.map((city) => (
            <Link
              key={city.slug}
              to={isHi ? `/hi/kumbh-mela-2027/packages/${city.slug}` : `/kumbh-mela-2027/packages/${city.slug}`}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all text-center group"
            >
              <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {isHi ? city.nameHi : city.nameEn}
              </h3>
              <span className="text-[11px] text-muted-foreground block mt-1">
                {isHi ? "यात्रा पैकेज देखें →" : "View Package →"}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </KumbhLayout>
  );
};

export default HowToReachPage;
