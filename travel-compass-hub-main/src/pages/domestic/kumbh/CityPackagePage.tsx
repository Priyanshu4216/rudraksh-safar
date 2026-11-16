import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KumbhFAQSchema } from '@/components/kumbh/seo/KumbhFAQSchema';
import { CHHATTISGARH_CITIES, getCityBySlug } from '@/data/kumbh/cities';
import { SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { KUMBH_PACKAGES } from '@/data/kumbh/packages';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { MapPin, Train, Calendar, ShieldCheck, MessageCircle, Phone, ArrowRight, Check, X, Clock, Users } from 'lucide-react';

interface CityPackagePageProps {
  slugProp?: string;
  lang?: 'en' | 'hi';
}

const CityPackagePage: React.FC<CityPackagePageProps> = ({ slugProp, lang = 'en' }) => {
  const params = useParams<{ slug?: string }>();
  const isHi = lang === 'hi';

  const slug = slugProp || params.slug || 'from-raipur';
  const city = getCityBySlug(slug);

  if (!city) {
    return <Navigate to={isHi ? "/hi/kumbh-mela-2027/packages/chhattisgarh" : "/kumbh-mela-2027/packages/chhattisgarh"} replace />;
  }

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'यात्रा पैकेज' : 'Packages', url: isHi ? '/hi/kumbh-mela-2027/packages' : '/kumbh-mela-2027/packages' },
    { name: isHi ? 'छत्तीसगढ़' : 'Chhattisgarh', url: isHi ? '/hi/kumbh-mela-2027/packages/chhattisgarh' : '/kumbh-mela-2027/packages/chhattisgarh' },
    { name: isHi ? city.nameHi : city.nameEn, url: isHi ? `/hi/kumbh-mela-2027/packages/${city.slug}` : `/kumbh-mela-2027/packages/${city.slug}` }
  ];

  const canonicalUrl = isHi
    ? `https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/${city.slug}`
    : `https://rudrakshsafar.com/kumbh-mela-2027/packages/${city.slug}`;

  // Form state
  const [formData, setFormData] = useState({
    groupSize: '4',
    preferredSnan: 'Maha Shivratri Amrit Snan (6 Mar 2027)',
    hasSeniors: 'yes',
    budget: 'Standard Ashram/Hotel'
  });

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = isHi
      ? `नमस्ते रुद्राक्ष सफ़र, मैं ${city.nameHi} से हूँ। मुझे ${city.nameHi} से हरिद्वार कुंभ मेला 2027 के लिए पैकेज विवरण चाहिए। सदस्यों की संख्या: ${formData.groupSize}, पसंदीदा स्नान तिथि: ${formData.preferredSnan}, बुजुर्ग शामिल: ${formData.hasSeniors}।`
      : `Hi Rudraksh Safar, I'm in ${city.nameEn}. I want details for Kumbh Mela 2027 from ${city.nameEn}. Group size: ${formData.groupSize}, Preferred snan date: ${formData.preferredSnan}, Senior citizens: ${formData.hasSeniors}. Please share package and itinerary options.`;

    const url = `https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang} city={city.nameEn}>
      <Helmet>
        <title>
          {isHi
            ? `${city.nameHi} से हरिद्वार कुंभ मेला 2027 पैकेज: स्नान तिथियां, ट्रेन एवं टेंट`
            : `Kumbh Mela 2027 Tour Package from ${city.nameEn} (Haridwar Ardh Kumbh)`}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? `${city.nameHi} से हरिद्वार अर्ध कुंभ 2027 की संपूर्ण यात्रा योजना। ट्रेन प्रस्थान, आश्रम व टेंट आवास, सात्विक भोजन एवं बुजुर्गों हेतु विशेष तीर्थ सहायता।`
              : `Guided Haridwar Ardh Kumbh 2027 tour packages from ${city.nameEn}. Review express rail connectivity, certified ashram stays, sattvic food, and senior care.`
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={`https://rudrakshsafar.com/kumbh-mela-2027/packages/${city.slug}`} />
        <link rel="alternate" hrefLang="hi" href={`https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/${city.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://rudrakshsafar.com/kumbh-mela-2027/packages/${city.slug}`} />
      </Helmet>

      {/* Structured Data */}
      <KumbhFAQSchema faqs={city.faqs} lang={lang} />
      <KumbhArticleSchema
        headline={
          isHi
            ? `${city.nameHi} से हरिद्वार कुंभ मेला 2027 यात्रा पैकेज`
            : `Kumbh Mela 2027 Tour Package from ${city.nameEn} (Haridwar Ardh Kumbh)`
        }
        description={`Official guided pilgrimage travel and accommodation guide from ${city.nameEn} to Haridwar Ardh Kumbh 2027.`}
        url={canonicalUrl}
        lang={lang}
      />

      {/* H1 & Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{isHi ? `${city.nameHi} प्रस्थान केंद्र` : `${city.nameEn} Departure Silo`}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
          {isHi
            ? `${city.nameHi} से हरिद्वार कुंभ मेला 2027 यात्रा पैकेज (अर्ध कुंभ)`
            : `Kumbh Mela 2027 Tour Package from ${city.nameEn} (Haridwar Ardh Kumbh)`}
        </h1>

        {/* 1. Answer Box stating who the trip is for, trip length, how to enquire */}
        <section
          className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8 text-left shadow-sm my-6"
          aria-label="Direct Answer Box"
        >
          <div className="flex items-center justify-between gap-3 mb-2 border-b border-primary/20 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              {isHi ? "त्वरित सारांश" : "Quick Answer Box"}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {isHi ? "अंतिम सत्यापन: 15 नवंबर 2026" : "Last verified: 15 Nov 2026"}
            </span>
          </div>

          <p className="text-sm md:text-base text-foreground leading-relaxed">
            {isHi
              ? `यह विशेष तीर्थ पैकेज ${city.nameHi} एवं आसपास के श्रद्धालुओं, संयुक्त परिवारों और वरिष्ठ नागरिकों के लिए तैयार किया गया है। यात्रा की अवधि 3 दिन/2 रात से लेकर 5 दिन/4 रात तक रहती है, जिसमें ट्रेन समन्वय, आश्रम अथवा स्विस टेंट आवास, और हरिद्वार में मार्गदर्शन सम्मिलित है। पूछताछ हेतु नीचे दिए गए व्हाट्सएप लिंक अथवा फोन कॉल के माध्यम से तत्काल विवरण प्राप्त करें।`
              : `This guided pilgrimage package from ${city.nameEn} is curated specifically for family groups, senior citizens, and devout pilgrims across Chhattisgarh. Trip durations range from 3 Days / 2 Nights to 5 Days / 4 Nights, incorporating synchronized rail transit, certified ashram or luxury Swiss tent accommodation, and dedicated Haridwar assistance. Devotees can enquire directly via our WhatsApp helpdesk or telephonic consultation for customized quotes.`}
          </p>
        </section>
      </header>

      {/* 2. "How to reach Haridwar from {City}" table */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? `${city.nameHi} से हरिद्वार कैसे पहुंचे: यात्रा साधन एवं रूट विवरण`
            : `How to Reach Haridwar from ${city.nameEn}`}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
          {isHi
            ? `${city.nameHi} के यात्रियों के लिए प्रमुख यात्रा माध्यमों की तालिका। सभी ट्रेन व सड़क विवरण आधिकारिक रेलवे व सरकारी पोर्टल से सत्यापित किए जाते हैं:`
            : `Verified transit options connecting ${city.nameEn} to Haridwar. Review primary departure modes and route notes below:`}
        </p>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-muted/60 text-foreground border-b border-border">
              <tr>
                <th className="p-3 font-semibold">{isHi ? "यात्रा माध्यम" : "Transit Mode"}</th>
                <th className="p-3 font-semibold">{isHi ? "मार्ग विवरण एवं दिशा-निर्देश" : "Route Notes & Feasibility"}</th>
                <th className="p-3 font-semibold">{isHi ? "सत्यापन स्थिति" : "Verification Status"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {city.departureLogistics.map((log, i) => (
                <tr key={i} className="hover:bg-muted/10">
                  <td className="p-3 font-semibold text-foreground whitespace-nowrap">{log.mode}</td>
                  <td className="p-3 text-muted-foreground leading-relaxed">{log.text}</td>
                  <td className="p-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {log.status === 'confirmed' ? 'Confirmed Option' : 'Subject to Schedule Notice'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Best Kumbh snan dates for travellers from {City} */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? `${city.nameHi} के तीर्थयात्रियों के लिए सर्वोत्तम स्नान तिथियां`
            : `Best Kumbh Snan Dates for Travellers from ${city.nameEn}`}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
          {isHi
            ? `${city.nameHi} से लंबी दूरी की यात्रा करने वाले परिवारों हेतु शांत तिथियां जैसे 11 फरवरी (बसंत पंचमी) और 7 अप्रैल (नव संवत्सर) सर्वाधिक अनुकूल हैं। तीनों प्रमुख अमृत स्नान तिथियां नीचे अंकित हैं:`
            : `For travellers undertaking the long-distance journey from ${city.nameEn}, calmer dates such as Basant Panchami (11 Feb 2027) and Nav Samvatsar (7 Apr 2027) are strongly advised for senior relatives. The three major Amrit Snan days are highlighted below:`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-orange-500/40 bg-orange-500/5">
            <span className="text-[10px] font-bold text-orange-600 uppercase block mb-1">Amrit Snan 1</span>
            <h3 className="font-bold text-sm text-foreground mb-1">06 Mar 2027 · Maha Shivratri</h3>
            <p className="text-xs text-muted-foreground">
              {isHi ? "प्रथम शाही स्नान; अखाड़ों की भव्य पेशवाई एवं नागा संतों का स्नान।" : "First royal Akhara procession at Har Ki Pauri."}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-orange-500/40 bg-orange-500/5">
            <span className="text-[10px] font-bold text-orange-600 uppercase block mb-1">Amrit Snan 2</span>
            <h3 className="font-bold text-sm text-foreground mb-1">08 Mar 2027 · Somvati Amavasya</h3>
            <p className="text-xs text-muted-foreground">
              {isHi ? "पितृ तर्पण एवं गंगा स्नान का परम पावन दुर्लभ संयोग।" : "Supreme merit for ancestral tarpan and monastic immersion."}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-orange-500/40 bg-orange-500/5">
            <span className="text-[10px] font-bold text-orange-600 uppercase block mb-1">Amrit Snan 3</span>
            <h3 className="font-bold text-sm text-foreground mb-1">14 Apr 2027 · Mesh Sankranti</h3>
            <p className="text-xs text-muted-foreground">
              {isHi ? "मेष संक्रांति / बैसाखी महास्नान; कुंभ का मुख्य अमृत पर्व।" : "Principal royal bath celebrating solar transit into Aries."}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/snan-dates" : "/kumbh-mela-2027/snan-dates"}
            className="text-xs md:text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
          >
            <span>{isHi ? "सभी 10 स्नान पर्वों का संपूर्ण विवरण एवं कैलेंडर देखें →" : "View complete 10-date bathing calendar and download alerts →"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. Package Tiers Relevant to City */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? `${city.nameHi} के श्रद्धालुओं हेतु उपलब्ध पैकेज श्रेणियां`
            : `Available Package Tiers for ${city.nameEn} Pilgrims`}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
          {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KUMBH_PACKAGES.slice(0, 2).map((pkg) => (
            <div key={pkg.id} className="p-6 rounded-2xl border border-border bg-card">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                {pkg.duration}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {isHi ? pkg.titleHi : pkg.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {isHi ? pkg.idealForHi : pkg.idealForEn}
              </p>

              <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                <strong className="text-foreground block">{isHi ? "मुख्य सुविधाएं:" : "Inclusions:"}</strong>
                {(isHi ? pkg.inclusionsHi : pkg.inclusionsEn).map((inc, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground italic">
                  {isHi ? "रद्दीकरण नीति: लिखित वाउचर में स्पष्ट" : "Cancellation Terms: Written policy in voucher"}
                </span>
                <span className="font-semibold text-primary">
                  {isHi ? "पूछताछ पर उपलब्ध" : "Quote on Request"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Group Departure Plan & Pickup Points */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? `${city.nameHi} से समूह प्रस्थान एवं पिकअप योजना`
            : `Group Departure Plan & Pickup Logistics for ${city.nameEn}`}
        </h2>

        <div className="p-6 rounded-2xl border border-border bg-muted/20 space-y-4 text-xs md:text-sm">
          <div>
            <strong className="text-foreground block mb-1">
              {isHi ? "समूह प्रस्थान विकल्प:" : "Scheduled Group Departures:"}
            </strong>
            <ul className="space-y-2 text-muted-foreground">
              {city.groupDepartureOptions.map((dep, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">{dep.dates}</strong> — {isHi ? dep.notesHi : dep.notesEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <strong className="text-foreground block mb-1">
              {isHi ? "स्थानीय पिकअप एवं बोर्डिंग पॉइंट:" : "Local Assembly & Boarding Points:"}
            </strong>
            <p className="text-muted-foreground leading-relaxed">
              {city.localPickupPoints === 'TODO_VERIFY'
                ? isHi
                  ? `प्रमुख पिकअप बिंदु जैसे ${city.nameHi} रेलवे स्टेशन एवं केंद्रीय बस स्टैंड से समन्वित किए जाते हैं। सटीक पिकअप सूची बुकिंग के समय पुष्ट की जाती है।`
                  : `Assembly points are coordinated around ${city.nameEn} Railway Station and designated city pickup points. Exact list confirmed prior to departure.`
                : city.localPickupPoints}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Local Angle Section (Unique 200+ word copy from cities.ts) */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          {isHi
            ? `${city.nameHi} के श्रद्धालुओं के लिए विशेष स्थानीय दृष्टिकोण`
            : `Local Pilgrimage Context: Devotees from ${city.nameEn}`}
        </h2>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>{isHi ? city.localAngleHi : city.localAngleEn}</p>
        </div>
      </section>

      {/* 7. Senior & Family Travel Notes Specific to City Journey */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? `${city.nameHi} से यात्रा करने वाले बुजुर्गों हेतु विशेष सावधानियां`
            : `Senior & Family Travel Notes for the Journey from ${city.nameEn}`}
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-card space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
          <p>
            {isHi
              ? `• ${city.nameHi} से हरिद्वार की रेल यात्रा लंबी होती है। बुजुर्ग परिजनों के लिए लोअर बर्थ का चयन करें और हल्के सूती व गर्म दोनों प्रकार के वस्त्र साथ रखें।`
              : `• The train journey from ${city.nameEn} to Haridwar involves extended hours. Lower berth reservations are strongly recommended for elder family members.`}
          </p>
          <p>
            {isHi
              ? `• ट्रेन में बाहर के अस्वच्छ भोजन से बचें; घर से बना सूखा नाश्ता और पर्याप्त पैकेज्ड पेयजल साथ रखें।`
              : `• Avoid unhygienic platform food during the train transit; carry homemade dry snacks and sealed packaged drinking water.`}
          </p>
          <p>
            {isHi
              ? `• हरिद्वार स्टेशन पर हमारे स्थानीय प्रतिनिधि श्रद्धालुओं का स्वागत करते हैं और सामान सहित सीधे शांत आश्रम तक पहुंचाने में सहायता करते हैं।`
              : `• Upon arrival at Haridwar, our local coordinators receive ${city.nameEn} pilgrims on the platform, providing luggage handling assistance directly to verified accommodations.`}
          </p>
        </div>
      </section>

      {/* 8. 6+ City-Specific FAQs */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          {isHi
            ? `${city.nameHi} कुंभ यात्रा: अक्सर पूछे जाने वाले प्रश्न`
            : `Frequently Asked Questions: Kumbh 2027 from ${city.nameEn}`}
        </h2>

        <div className="space-y-3">
          {city.faqs.map((f) => (
            <details
              key={f.id}
              className="group border border-border/80 rounded-2xl bg-card/60 p-4 md:p-5 transition-all open:bg-card"
            >
              <summary className="font-bold text-sm md:text-base text-foreground cursor-pointer select-none">
                {isHi ? f.questionHi : f.questionEn}
              </summary>
              <div className="mt-3 pt-3 border-t border-border/50 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {isHi ? f.answerHi : f.answerEn}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 9. Sibling-City Links */}
      <section className="my-10 pt-6 border-t border-border/60">
        <h2 className="text-xl font-serif font-bold text-foreground mb-4">
          {isHi ? "अन्य पड़ोसी शहरों से कुंभ यात्रा विकल्प" : "Kumbh Departures from Neighboring Cities"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {city.nearbyCityLinks.map((sibling) => (
            <Link
              key={sibling.slug}
              to={isHi ? `/hi/kumbh-mela-2027/packages/${sibling.slug}` : `/kumbh-mela-2027/packages/${sibling.slug}`}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors block"
            >
              <h3 className="font-bold text-primary mb-1">
                {isHi ? `${sibling.nameHi} से कुंभ यात्रा` : `Kumbh Departure from ${sibling.nameEn}`} →
              </h3>
              <p className="text-muted-foreground">{isHi ? sibling.contextHi : sibling.contextEn}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. CTA: WhatsApp Enquiry Form */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border-2 border-primary/30 bg-card">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2 text-center">
            {isHi ? `${city.nameHi} से कुंभ 2027 यात्रा पूछताछ` : `Enquire for Kumbh 2027 from ${city.nameEn}`}
          </h2>
          <p className="text-xs text-muted-foreground text-center mb-6">
            {isHi
              ? `अपनी तिथि और सदस्यों की संख्या बताएं। हमारी टीम ${KUMBH_SITE.responseCommitmentMinutes} मिनट में विवरण भेजेगी।`
              : `Share your group requirements. Our pilgrimage coordinators reply within ${KUMBH_SITE.responseCommitmentMinutes} minutes.`}
          </p>

          <form onSubmit={handleWhatsAppEnquiry} className="space-y-4 text-xs md:text-sm">
            <div>
              <label className="block font-medium mb-1">{isHi ? "सदस्यों की संख्या" : "Group Size"}</label>
              <input
                type="number"
                min="1"
                max="50"
                value={formData.groupSize}
                onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-border bg-background"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">{isHi ? "पसंदीदा स्नान तिथि" : "Preferred Snan Window"}</label>
              <select
                value={formData.preferredSnan}
                onChange={(e) => setFormData({ ...formData, preferredSnan: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-border bg-background"
              >
                <option value="Maha Shivratri Amrit Snan (6 Mar 2027)">Maha Shivratri Amrit Snan (6 Mar 2027)</option>
                <option value="Somvati Amavasya Amrit Snan (8 Mar 2027)">Somvati Amavasya Amrit Snan (8 Mar 2027)</option>
                <option value="Mesh Sankranti Amrit Snan (14 Apr 2027)">Mesh Sankranti Amrit Snan (14 Apr 2027)</option>
                <option value="Basant Panchami Calmer Snan (11 Feb 2027)">Basant Panchami Calmer Snan (11 Feb 2027)</option>
                <option value="Nav Samvatsar Calmer Snan (7 Apr 2027)">Nav Samvatsar Calmer Snan (7 Apr 2027)</option>
                <option value="Flexible Dates">Flexible Dates</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">{isHi ? "वरिष्ठ परिजन शामिल हैं?" : "Senior Citizens Included?"}</label>
              <select
                value={formData.hasSeniors}
                onChange={(e) => setFormData({ ...formData, hasSeniors: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-border bg-background"
              >
                <option value="yes">{isHi ? "हाँ (Yes)" : "Yes"}</option>
                <option value="no">{isHi ? "नहीं (No)" : "No"}</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isHi ? "व्हाट्सएप पर तत्काल विवरण प्राप्त करें" : `Enquire from ${city.nameEn} on WhatsApp`}</span>
            </button>
          </form>
        </div>
      </section>
    </KumbhLayout>
  );
};

export default CityPackagePage;
