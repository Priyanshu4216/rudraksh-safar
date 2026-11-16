import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { ShieldCheck, HeartPulse, CheckSquare, AlertCircle, ArrowRight, PhoneCall } from 'lucide-react';

interface SeniorFamilyGuidePageProps {
  lang?: 'en' | 'hi';
}

const SeniorFamilyGuidePage: React.FC<SeniorFamilyGuidePageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'परिवार एवं बुजुर्ग गाइड' : 'Senior & Family Guide', url: isHi ? '/hi/kumbh-mela-2027/senior-family-guide' : '/kumbh-mela-2027/senior-family-guide' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/senior-family-guide'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/senior-family-guide';

  const checklistItems = [
    {
      titleEn: "Choose Calmer Bathing Dates",
      titleHi: "शांत स्नान तिथियों का चयन करें",
      descEn: "Opt for quieter festivals like Basant Panchami (11 Feb 2027) or Nav Samvatsar (7 Apr 2027) instead of extreme crowd Amrit Snan days.",
      descHi: "अत्यधिक भीड़ वाले अमृत स्नान के स्थान पर बसंत पंचमी (11 फरवरी 2027) अथवा नव संवत्सर (7 अप्रैल 2027) जैसी शांत तिथियों का चयन करें।"
    },
    {
      titleEn: "15-Day Medication & Prescription Buffer",
      titleHi: "15 दिनों की दवाइयां एवं पर्ची साथ रखें",
      descEn: "Carry all daily prescription medicines in a water-sealed pouch, along with doctor's prescriptions and recent emergency contact numbers.",
      descHi: "सभी नियमित दवाइयों को वॉटरप्रूफ थैली में रखें, साथ ही डॉक्टर की पर्ची और निकटतम परिजनों के आपातकालीन नंबर अवश्य रखें।"
    },
    {
      titleEn: "Identify Barrier-Free Ghat Enclosures",
      titleHi: "रेलिंग युक्त सुरक्षित घाटों का चयन करें",
      descEn: "Bathe strictly in ghat enclosures fitted with non-slip mats, heavy stainless steel chains, and shallow water flow.",
      descHi: "केवल उन्हीं घाटों पर स्नान करें जहाँ मजबूत सुरक्षा जंजीरें, नॉन-स्लिप मैट और कम गहराई वाला नियंत्रित प्रवाह हो।"
    },
    {
      titleEn: "Pre-Coordinate Wheelchair & Golf-Cart Assistance",
      titleHi: "व्हीलचेयर एवं गोल्फ कार्ट की पूर्व व्यवस्था",
      descEn: "Arrange authorized assistance from parking perimeters in advance to avoid prolonged walking over crowded pedestrian flyovers.",
      descHi: "पैदल पुलों पर लंबी दूरी तय करने से बचने के लिए पार्किंग ड्रॉप पॉइंट से पूर्व-समन्वित सहायता का प्रबंध रखें।"
    },
    {
      titleEn: "Emergency Identification Wristbands for Children",
      titleHi: "बच्चों हेतु पहचान रिस्टबैंड / कार्ड",
      descEn: "Place a laminated card or wristband with parents' names, hotel address, and phone numbers in children's and elder's pockets.",
      descHi: "बच्चों और बुजुर्गों की जेब में माता-पिता/अभिभावक का नाम, होटल का पता और फोन नंबर युक्त लेमिनेटेड कार्ड अवश्य रखें।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "कुंभ मेला 2027 में माता-पिता और परिवार के साथ यात्रा: पूरी तैयारी और सावधानियां"
            : "Kumbh Mela 2027 Senior Citizen & Family Safety Guide"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "बुजुर्ग माता-पिता और बच्चों के साथ हरिद्वार कुंभ 2027 यात्रा की सम्पूर्ण गाइड। शांत स्नान तिथियां, व्हीलचेयर व्यवस्था, दवाइयां एवं भीड़ में सुरक्षा सावधानियां।"
              : "Practical, elder-friendly safety guide for Haridwar Kumbh Mela 2027. Checklist for senior devotees, calm bathing dates, and wheelchair coordination."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/senior-family-guide" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/senior-family-guide" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/senior-family-guide" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "कुंभ मेला 2027 परिवार एवं वरिष्ठ नागरिक गाइड" : "Kumbh Mela 2027 Senior Citizen & Family Safety Guide"}
        description="Comprehensive elder-care and family pilgrimage guidelines for Haridwar Ardh Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "कुंभ मेला 2027 में माता-पिता एवं परिवार के साथ यात्रा: पूरी तैयारी" : "Senior Citizen & Family Pilgrimage Guide for Kumbh Mela 2027"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "कुंभ मेले में करोड़ों श्रद्धालुओं का समागम होता है। बुजुर्गों और बाल-परिवारों के लिए सही तिथि, सुरक्षित घाट और शांतिपूर्ण आवास का चुनाव यात्रा को सुरक्षित एवं आनंददायी बनाता है।"
            : "With millions gathering along the Ganges, strategic planning makes the difference between an exhausting ordeal and an uplifting spiritual pilgrimage for elderly parents and young children."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "बुजुर्गों के साथ कुंभ स्नान के लिए कौन से दिन सबसे अच्छे हैं?" : "Which bathing days are best for elderly devotees?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "11 फरवरी 2027 (बसंत पंचमी) और 7 अप्रैल 2027 (नव संवत्सर) जैसे पर्व बुजुर्गों और परिवारों के लिए सबसे शांत और सुगम रहते हैं। इन तिथियों पर अखाड़ों की विशाल शोभायात्राएं नहीं होतीं, जिससे हर की पौड़ी पर सामान्य श्रद्धालुओं के लिए पर्याप्त स्थान और शांति उपलब्ध रहती है।"
            : "Days such as 11 February 2027 (Basant Panchami) and 7 April 2027 (Nav Samvatsar) are significantly calmer for senior citizens and young families. Unlike the peak Amrit Snan dates, these days do not have full Akhara processions, allowing unhurried access to bathing ghats with manageable foot traffic."}
        </p>
      </section>

      {/* Checklist Grid */}
      <section className="my-10">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          {isHi ? "वरिष्ठ तीर्थयात्री सुरक्षा चेकलिस्ट" : "Essential Senior Devotee Checklist"}
        </h2>

        <div className="space-y-4">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-border bg-card flex items-start gap-4">
              <CheckSquare className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">
                  {isHi ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {isHi ? item.descHi : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rudraksh Safar Senior Care Package CTA */}
      <section className="my-10 p-6 md:p-8 rounded-2xl border-2 border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
            {isHi ? "रुद्राक्ष सफ़र वरिष्ठ नागरिक विशेष सहायता पैकेज" : "Rudraksh Safar Dedicated Family & Senior Care"}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {isHi
              ? "भूतल अथवा लिफ्ट युक्त कमरे, शांत स्नान दिवसों का मार्गदर्शन, और स्टेशन से घाट तक समर्पित तीर्थ सहायक की सुविधा।"
              : "Ground-floor rooms, calm date planning, assistance coordination at vehicle barriers, and pure sattvic dining for a dignified pilgrimage."}
          </p>
        </div>

        <Link
          to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"}
          className="shrink-0 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm shadow-md transition-transform active:scale-95"
        >
          {isHi ? "वरिष्ठ पैकेज विवरण देखें →" : "Explore Senior Package →"}
        </Link>
      </section>
    </KumbhLayout>
  );
};

export default SeniorFamilyGuidePage;
