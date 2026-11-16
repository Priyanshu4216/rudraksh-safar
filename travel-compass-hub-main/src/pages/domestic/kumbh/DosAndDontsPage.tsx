import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface DosAndDontsPageProps {
  lang?: 'en' | 'hi';
}

const DosAndDontsPage: React.FC<DosAndDontsPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'क्या करें और क्या न करें' : 'Dos and Donts', url: isHi ? '/hi/kumbh-mela-2027/dos-and-donts' : '/kumbh-mela-2027/dos-and-donts' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/dos-and-donts'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/dos-and-donts';

  const dos = [
    {
      titleEn: "Bathe Inside Designated Railing Chains",
      titleHi: "सुरक्षा जंजीरों के भीतर ही स्नान करें",
      descEn: "Always hold on to the heavy safety chains installed by the administration. The Ganga's current at Haridwar is deceptively swift.",
      descHi: "प्रशासन द्वारा लगाई गई सुरक्षा जंजीरों को पकड़कर ही स्नान करें। हरिद्वार में गंगा का बहाव अत्यंत तीव्र होता है।"
    },
    {
      titleEn: "Follow Traffic Police Signage & One-Way Rules",
      titleHi: "यातायात पुलिस के एकतरफा पैदल नियमों का पालन करें",
      descEn: "Strictly adhere to the designated entry and exit pedestrian routes on bridges to avoid human bottlenecks.",
      descHi: "पुलों और घाटों पर भीड़ के दबाव से बचने के लिए प्रवेश और निकास के निर्धारित एकतरफा मार्गों का ही उपयोग करें।"
    },
    {
      titleEn: "Keep Emergency Contact Details in Pocket",
      titleHi: "आपातकालीन संपर्क पर्ची हमेशा जेब में रखें",
      descEn: "Ensure every family member carries the hotel name, room number, camp address, and driver's mobile number written on paper.",
      descHi: "परिवार के प्रत्येक सदस्य, विशेषकर बुजुर्गों और बच्चों के पास होटल का नाम, कमरा नंबर और मोबाइल नंबर की लिखित पर्ची होनी चाहिए।"
    },
    {
      titleEn: "Dress in Modest, Fast-Drying Attire",
      titleHi: "मर्यादित एवं जल्दी सूखने वाले वस्त्र पहनें",
      descEn: "Wear traditional comfortable clothing and non-slip rubber footwear suitable for extensive walking on wet stone ghats.",
      descHi: "पारंपरिक मर्यादित वस्त्र पहनें और गीले पत्थरों पर फिसलने से बचने के लिए अच्छी ग्रिप वाले रबर के जूते-चप्पल पहनें।"
    }
  ];

  const donts = [
    {
      titleEn: "Do Not Attempt to Cross Into River Main Stream",
      titleHi: "गहरे पानी अथवा मुख्य धारा में आगे न बढ़ें",
      descEn: "Never venture beyond safety barricades or attempt to swim across to mid-river sandbars. Underwater currents are perilous.",
      descHi: "सुरक्षा बैरिकेड्स से आगे न जाएं और न ही नदी तैरकर पार करने का प्रयास करें। गहराई और जल प्रवाह खतरनाक हो सकता है।"
    },
    {
      titleEn: "Do Not Carry Heavy Luggage or Gold Valuables to Ghats",
      titleHi: "घाटों पर कीमती आभूषण और भारी सामान न ले जाएं",
      descEn: "Leave expensive jewelry and bulky suitcases in your hotel room. Only carry essential cash and ID in a cross-body pouch.",
      descHi: "सोने के आभूषण और भारी बैग होटल में ही सुरक्षित रखें। घाट पर केवल आवश्यक नकदी और पहचान पत्र ही ले जाएं।"
    },
    {
      titleEn: "Do Not Obstruct Akhara Royal Processions",
      titleHi: "अखाड़ों की पेशवाई शोभायात्रा में बाधा न डालें",
      descEn: "Maintain respectful distance along designated spectator barricades during Shahi Snan processions. Do not attempt to cross procession lanes.",
      descHi: "शाही स्नान के दौरान अखाड़ों के मार्ग में न आएं। बैरिकेड्स के पीछे रहकर श्रद्धापूर्वक दर्शन करें और अनुशासन बनाए रखें।"
    },
    {
      titleEn: "Do Not Use Soaps or Detergents in Sacred River",
      titleHi: "गंगा जल में साबुन, शैम्पू या डिटर्जेंट का प्रयोग न करें",
      descEn: "Preserve the sacred purity of Mother Ganga. Using soaps, plastic bags, or dumping worship waste into the river is strictly penalized.",
      descHi: "माँ गंगा की पावनता बनाए रखें। नदी में साबुन, डिटर्जेंट का उपयोग अथवा प्लास्टिक फेंकना कानूनी रूप से वर्जित एवं दंडनीय है।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027: क्या करें और क्या न करें (नियम एवं सावधानियां)"
            : "Haridwar Kumbh Mela 2027: Dos and Don'ts (Bathing Rules & Etiquette)"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार अर्ध कुंभ 2027 में सुरक्षित स्नान के आवश्यक नियम। क्या करें, क्या न करें, घाट सुरक्षा, पैकिंग सूची एवं मेला अनुशासन दिशानिर्देश।"
              : "Official safety guidelines and pilgrimage etiquette for Haridwar Ardh Kumbh 2027. Review bathing dos and don'ts, packing advice, and rules."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/dos-and-donts" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/dos-and-donts" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/dos-and-donts" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "कुंभ मेला 2027 क्या करें और क्या न करें" : "Kumbh Mela 2027 Dos and Don'ts"}
        description="Comprehensive safety rules and etiquette guide for pilgrims visiting Haridwar Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ 2027: क्या करें और क्या न करें (नियम एवं शिष्टाचार)" : "Haridwar Kumbh 2027: Dos and Don'ts (Rules & Safety Etiquette)"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "पवित्र गंगा स्नान और कुंभ मेले का अनुभव सुरक्षित व सुखद रहे, इसके लिए प्रशासनिक नियमों और पारंपरिक सावधानियों का पालन अनिवार्य है।"
            : "Observe these core guidelines to ensure your sacred dip at Har Ki Pauri remains safe, reverent, and fulfilling for your entire family."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "कुंभ स्नान के दौरान सबसे महत्वपूर्ण सुरक्षा नियम क्या है?" : "What is the single most important safety rule during Kumbh snan?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "गंगा नदी के तीव्र प्रवाह के कारण हमेशा घाट पर लगी मजबूत लोहे/स्टील की जंजीरों को पकड़कर ही स्नान करें। कभी भी बैरिकेड्स पार कर गहरी मुख्य धारा में न जाएं और बच्चों व बुजुर्गों का हाथ हमेशा थामे रखें।"
            : "Due to the swift river flow of the Ganges at Haridwar, always hold on to the heavy safety iron chains installed along the ghat steps. Never venture past the safety barricades into the deep central channel, and keep elderly relatives within arm's reach at all times."}
        </p>
      </section>

      {/* Grid of Dos and Don'ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {/* DOs */}
        <section className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
          <h2 className="text-xl font-serif font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            {isHi ? "क्या करें (अवश्य पालन करें)" : "DOs (Essential Best Practices)"}
          </h2>
          <div className="space-y-4">
            {dos.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-sm text-foreground mb-1">{isHi ? item.titleHi : item.titleEn}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{isHi ? item.descHi : item.descEn}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DONTs */}
        <section className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/5">
          <h2 className="text-xl font-serif font-bold text-rose-700 dark:text-rose-400 mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            {isHi ? "क्या न करें (सावधानियां)" : "DON'Ts (Strictly Avoid)"}
          </h2>
          <div className="space-y-4">
            {donts.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-sm text-foreground mb-1">{isHi ? item.titleHi : item.titleEn}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{isHi ? item.descHi : item.descEn}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </KumbhLayout>
  );
};

export default DosAndDontsPage;
