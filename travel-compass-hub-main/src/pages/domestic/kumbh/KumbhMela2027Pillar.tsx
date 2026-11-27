import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { SnanCalendarWidget } from '@/components/kumbh/SnanCalendarWidget';
import { NextSnanCountdown } from '@/components/kumbh/NextSnanCountdown';
import { KumbhEventSchema } from '@/components/kumbh/seo/KumbhEventSchema';
import { KumbhFAQSchema } from '@/components/kumbh/seo/KumbhFAQSchema';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { HARIDWAR_KUMBH_FACTS, SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { TRADITIONAL_AKHARAS } from '@/data/kumbh/akharas';
import { getKumbhFAQs } from '@/data/kumbh/faq';
import { HOW_TO_REACH_ROUTES } from '@/data/kumbh/routes';
import { KUMBH_PACKAGES } from '@/data/kumbh/packages';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { MapPin, Calendar, ShieldCheck, ArrowRight, Compass, Users, Tent, ChevronDown, Download, MessageCircle } from 'lucide-react';

interface KumbhPillarPageProps {
  lang?: 'en' | 'hi';
}

const KumbhMela2027Pillar: React.FC<KumbhPillarPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';
  const navigate = useNavigate();
  const faqs = getKumbhFAQs();

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'घरेलू यात्रा पैकेज' : 'Domestic Packages', url: '/domestic-packages' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027'
    : 'https://rudrakshsafar.com/kumbh-mela-2027';

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      {/* Per-Route Head Management */}
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027: स्नान तिथियां, शाही स्नान, आवास एवं संपूर्ण यात्रा गाइड"
            : "Haridwar Kumbh Mela 2027: Dates, Amrit Snan, Stay & Travel Guide"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार अर्ध कुंभ 2027 जनवरी से अप्रैल तक आयोजित होगा। सभी 10 स्नान पर्व, 3 अमृत स्नान, हर की पौड़ी पहुंचने के मार्ग, लक्जरी टेंट एवं बुजुर्गों हेतु विशेष सावधानियां।"
              : "Haridwar Ardh Kumbh 2027 runs Jan–Apr. See all 10 snan dates, 3 Amrit Snans, how to reach, where to stay, luxury swiss tents, and senior-friendly tips."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Haridwar Kumbh Mela 2027: Dates, Amrit Snan & Travel Guide" />
        <meta property="og:description" content="Official schedule of 10 major bathing festivals and 3 Amrit Snans announced by the Uttarakhand Mela Administration." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Structured Data: Event, Article, FAQ */}
      <KumbhEventSchema />
      <KumbhFAQSchema faqs={faqs} lang={lang} />
      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार अर्ध कुंभ मेला 2027: संपूर्ण मार्गदर्शिका" : "Haridwar Ardh Kumbh Mela 2027: Complete Guide"}
        description="Comprehensive official guide to Haridwar Ardh Kumbh Mela 2027 covering 10 bathing festivals, 3 Amrit Snans, Akharas, and pilgrimage travel logistics."
        url={canonicalUrl}
        lang={lang}
      />

      {/* ========================================================
          HERO & ANSWER BOX SECTION (AEO Pattern)
          ======================================================== */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{isHi ? "14 जनवरी 2027 – 20 अप्रैल 2027 · हरिद्वार" : "14 Jan 2027 – 20 Apr 2027 · Haridwar, Uttarakhand"}</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-4">
          {isHi ? "हरिद्वार अर्ध कुंभ मेला 2027: संपूर्ण गाइड" : "Haridwar Ardh Kumbh Mela 2027: Complete Guide"}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          {isHi
            ? "उत्तराखंड मेला प्रशासन द्वारा घोषित 10 पावन स्नान तिथियां, 3 अमृत स्नान (शाही स्नान), 13 अखाड़ों की परंपरा, ठहरने के विकल्प एवं छत्तीसगढ़ से सीधी यात्रा योजनाएं।"
            : "Official schedule of 10 major bathing festivals, 3 Amrit Snans (Shahi Snans), 13 monastic Akharas, luxury riverside camps, and guided pilgrimage logistics."}
        </p>

        {/* ========================================================
            DIRECT ANSWER BOX (Optimized for AI Overviews / Snippets)
            ======================================================== */}
        <section
          className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8 text-left shadow-sm mb-8"
          aria-label="Direct Fact Summary"
        >
          <div className="flex items-center justify-between gap-3 mb-4 border-b border-primary/20 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              {isHi ? "त्वरित तथ्य सारांश (आधिकारिक घोषणा)" : "Quick Answer Box (Official Administration Facts)"}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {isHi ? "अंतिम सत्यापन: 15 नवंबर 2026" : "Last verified: 15 Nov 2026"}
            </span>
          </div>

          <div className="space-y-4 text-foreground text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="font-bold text-base md:text-lg text-foreground mb-1">
                {isHi ? "हरिद्वार कुंभ मेला 2027 कब है?" : "When is the Haridwar Kumbh Mela 2027?"}
              </h2>
              <p className="text-muted-foreground">
                {isHi
                  ? "हरिद्वार अर्ध कुंभ मेला 2027 का आयोजन जनवरी से अप्रैल 2027 तक होगा। यह 14 जनवरी 2027 को मकर संक्रांति के दिन प्रारंभ होगा और 20 अप्रैल 2027 को चैत्र पूर्णिमा पर संपन्न होगा, जिसके बीच कुल 10 प्रमुख स्नान पर्व होंगे।"
                  : "The Haridwar Ardh Kumbh Mela 2027 runs from January to April 2027. It opens on Makar Sankranti, 14 January 2027, and concludes on Chaitra Purnima, 20 April 2027, with ten major bathing festivals scheduled across Haridwar's sacred Ganga ghats."}
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base md:text-lg text-foreground mb-1">
                {isHi ? "हरिद्वार कुंभ 2027 में अमृत स्नान (शाही स्नान) की तिथियां क्या हैं?" : "What are the Amrit Snan dates in Haridwar 2027?"}
              </h2>
              <p className="text-muted-foreground">
                {isHi
                  ? "हरिद्वार कुंभ 2027 में तीन आधिकारिक अमृत स्नान हैं: 6 मार्च 2027 (महाशिवरात्रि), 8 मार्च 2027 (फाल्गुन / सोमवती अमावस्या), और 14 अप्रैल 2027 (मेष संक्रांति)। इन तीन पवित्र दिवसों पर सभी 13 अखाड़ों के साधु-संतों की भव्य पेशवाई और शाही स्नान होता है।"
                  : "The three Amrit Snan dates are 6 March 2027 (Mahashivratri), 8 March 2027 (Phalguna Amavasya), and 14 April 2027 (Mesh Sankranti), as announced by the Mela Administration. These are the days of the 13 Akharas' royal processions and ceremonial sacred baths."}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Countdown */}
        <NextSnanCountdown lang={lang} />

        {/* Quick Spoke Directory Navigation */}
        <nav className="my-8 p-5 md:p-6 rounded-2xl border border-border bg-card/60" aria-label="Kumbh 2027 Topic Guides">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
            {isHi ? "कुंभ मेला 2027 संपूर्ण गाइड अनुभाग:" : "Explore Kumbh 2027 Official Guides:"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 text-xs font-semibold">
            <Link to={isHi ? "/hi/kumbh-mela-2027/snan-dates" : "/kumbh-mela-2027/snan-dates"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              📅 {isHi ? "स्नान कैलेंडर 2027" : "Snan Calendar 2027"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/live-updates" : "/kumbh-mela-2027/live-updates"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              🔔 {isHi ? "ताज़ा अपडेट्स" : "Live Snan Updates"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/how-to-reach" : "/kumbh-mela-2027/how-to-reach"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              🚆 {isHi ? "कैसे पहुंचे" : "How to Reach"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/stay" : "/kumbh-mela-2027/stay"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              ⛺ {isHi ? "होटल व टेंट" : "Hotels & Camps"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/parking-and-traffic" : "/kumbh-mela-2027/parking-and-traffic"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              🚗 {isHi ? "पार्किंग नियम" : "Parking Rules"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/senior-family-guide" : "/kumbh-mela-2027/senior-family-guide"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              👵 {isHi ? "बुजुर्ग व परिवार" : "Senior Devotee Guide"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/ardh-kumbh-explained" : "/kumbh-mela-2027/ardh-kumbh-explained"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              📖 {isHi ? "अर्ध कुंभ परंपरा" : "Ardh Kumbh Explained"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/dos-and-donts" : "/kumbh-mela-2027/dos-and-donts"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              ⚖️ {isHi ? "क्या करें-क्या न करें" : "Dos and Don'ts"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              🧳 {isHi ? "यात्रा पैकेज" : "Tour Packages"}
            </Link>
            <Link to={isHi ? "/hi/kumbh-mela-2027/packages/chhattisgarh" : "/kumbh-mela-2027/packages/chhattisgarh"} className="p-2.5 rounded-xl border border-border bg-background hover:border-primary/50 text-foreground hover:text-primary transition-colors">
              🚩 {isHi ? "छत्तीसगढ़ प्रस्थान" : "Chhattisgarh Silo"}
            </Link>
          </div>
        </nav>
      </header>

      {/* ========================================================
          SNAN CALENDAR COMPONENT
          ======================================================== */}
      <SnanCalendarWidget lang={lang} />

      {/* Discrepancy Note Box */}
      <aside className="my-6 p-4 rounded-xl bg-muted/40 border border-border/80 text-xs text-muted-foreground leading-relaxed">
        <strong className="text-foreground font-semibold">
          {isHi ? "अमृत स्नान संख्या पर आधिकारिक स्पष्टीकरण: " : "Official Note on Bathing Classifications: "}
        </strong>
        {isHi ? HARIDWAR_KUMBH_FACTS.discrepancyNoteHi : HARIDWAR_KUMBH_FACTS.discrepancyNoteEn}
      </aside>

      {/* ========================================================
          SECTION 3: ARDH KUMBH EXPLAINED
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="ardh-vs-purna">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "क्या 2027 का हरिद्वार कुंभ अर्ध कुंभ है या पूर्ण कुंभ?"
            : "Is the 2027 Haridwar Kumbh an Ardh Kumbh or a Purna Kumbh?"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
          {isHi
            ? "2027 का हरिद्वार आयोजन एक अर्ध कुंभ मेला है, जो दो पूर्ण कुंभ मेलों के बीच 6 वर्ष के अंतराल पर आयोजित होता है। हरिद्वार में पिछला पूर्ण कुंभ 2021 में संपन्न हुआ था। शासन ने इस 2027 अर्ध कुंभ को भी पूर्ण कुंभ स्तर की भव्यता के साथ आयोजित किया है।"
            : "The 2027 Haridwar event is an Ardh Kumbh, held halfway through the 12-year cycle between two Purna Kumbh Melas. The last Purna Kumbh took place in 2021, and the state administration has organized this 2027 Ardh Kumbh on the grand scale of a Purna Kumbh."}
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {isHi
            ? "सनातन मान्यता के अनुसार, समुद्र मंथन के दौरान अमृत कुंभ से चार स्थानों पर दिव्य बूंदें छलकी थीं: प्रयागराज (संगम), हरिद्वार (गंगा), नासिक (गोदावरी), और उज्जैन (शिप्रा)। हरिद्वार में ब्रह्मकुंड, जो हर की पौड़ी का केंद्र है, वही पवित्र स्थल है जहाँ अमृत बूंदें गिरी थीं।"
            : "According to ancient Vedic scriptures, drops of immortality nectar spilled across four holy riverbanks during the Samudra Manthan: Prayagraj, Haridwar, Nashik, and Ujjain. In Haridwar, Brahma Kund at Har Ki Pauri represents the exact sacred focal point where devotees attain spiritual merit through river immersion."}
        </p>

        <div className="mt-4">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/ardh-kumbh-explained" : "/kumbh-mela-2027/ardh-kumbh-explained"}
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
          >
            <span>{isHi ? "अर्ध कुंभ एवं समुद्र मंथन इतिहास की विस्तृत जानकारी पढ़ें" : "Read in-depth explainer on Ardh Kumbh traditions & Samudra Manthan"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: THE 13 AKHARAS & PESHWAIS
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="akharas">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "13 अखाड़े कौन से हैं और पेशवाई शाही शोभायात्रा क्या है?"
            : "What are the 13 traditional Akharas and the Peshwai procession?"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {isHi
            ? "13 अखाड़े सनातन धर्म के प्राचीन संन्यासी संगठन हैं जिनमें शैव, वैष्णव, उदासीन और निर्मल संप्रदाय शामिल हैं। पेशवाई वह पारंपरिक शाही शोभायात्रा है जिसमें अखाड़ों के आचार्य, महामंडलेश्वर और नागा संत हाथी, घोड़ों और धर्म ध्वजा के साथ कुंभ छावनी में प्रवेश करते हैं।"
            : "The 13 traditional Akharas represent ancient monastic orders of Shaiva, Vaishnava, Udasin, and Nirmal ascetics. Peshwai is the ceremonial royal procession where decorated mahants, sadhus, and Naga warriors march with horses, elephants, and traditional emblems towards their assigned mela camps."}
        </p>

        {/* Semantic HTML List for Crawlers & AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Shaiva (7) */}
          <div className="p-4 rounded-xl border border-border bg-card/40">
            <h3 className="font-bold text-primary mb-2 text-sm flex items-center gap-1">
              <Compass className="w-4 h-4" />
              Shaiva Akharas (7)
            </h3>
            <ul className="text-xs space-y-1.5 text-muted-foreground">
              {TRADITIONAL_AKHARAS.filter(a => a.category === 'Shaiva').map(a => (
                <li key={a.id} className="font-medium text-foreground">• {isHi ? a.nameHi : a.nameEn}</li>
              ))}
            </ul>
          </div>

          {/* Vaishnava / Bairagi (3) */}
          <div className="p-4 rounded-xl border border-border bg-card/40">
            <h3 className="font-bold text-primary mb-2 text-sm flex items-center gap-1">
              <Compass className="w-4 h-4" />
              Vaishnava / Bairagi (3)
            </h3>
            <ul className="text-xs space-y-1.5 text-muted-foreground">
              {TRADITIONAL_AKHARAS.filter(a => a.category === 'Vaishnava').map(a => (
                <li key={a.id} className="font-medium text-foreground">• {isHi ? a.nameHi : a.nameEn}</li>
              ))}
            </ul>
          </div>

          {/* Udasin (2) */}
          <div className="p-4 rounded-xl border border-border bg-card/40">
            <h3 className="font-bold text-primary mb-2 text-sm flex items-center gap-1">
              <Compass className="w-4 h-4" />
              Udasin Akharas (2)
            </h3>
            <ul className="text-xs space-y-1.5 text-muted-foreground">
              {TRADITIONAL_AKHARAS.filter(a => a.category === 'Udasin').map(a => (
                <li key={a.id} className="font-medium text-foreground">• {isHi ? a.nameHi : a.nameEn}</li>
              ))}
            </ul>
          </div>

          {/* Nirmal (1) */}
          <div className="p-4 rounded-xl border border-border bg-card/40">
            <h3 className="font-bold text-primary mb-2 text-sm flex items-center gap-1">
              <Compass className="w-4 h-4" />
              Nirmal Akhara (1)
            </h3>
            <ul className="text-xs space-y-1.5 text-muted-foreground">
              {TRADITIONAL_AKHARAS.filter(a => a.category === 'Nirmal').map(a => (
                <li key={a.id} className="font-medium text-foreground">• {isHi ? a.nameHi : a.nameEn}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: HOW TO REACH (Semantic Table)
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="how-to-reach">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "हरिद्वार कुंभ मेला 2027 कैसे पहुंचे: प्रमुख शहरों से मार्ग"
            : "How to Reach Haridwar Kumbh Mela 2027: Transit Routes"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {isHi
            ? "हरिद्वार राष्ट्रीय राजधानी दिल्ली से लगभग 220 किमी की दूरी पर स्थित है और देश के प्रमुख महानगरों से ट्रेन, सड़क एवं देहरादून हवाई अड्डे के माध्यम से जुड़ा हुआ है।"
            : "Haridwar is located approximately 220 km north of New Delhi and connects directly to major Indian metropolitan transit hubs via express trains, national expressways, and Dehradun Jolly Grant Airport."}
        </p>

        {/* Real HTML Table for Crawlers */}
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-muted/60 text-foreground border-b border-border">
              <tr>
                <th className="p-3 font-semibold">{isHi ? "प्रस्थान केंद्र" : "Origin Hub"}</th>
                <th className="p-3 font-semibold">{isHi ? "सर्वोत्तम यात्रा विकल्प" : "Recommended Mode"}</th>
                <th className="p-3 font-semibold">{isHi ? "मार्ग विवरण" : "Route Notes"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {HOW_TO_REACH_ROUTES.map((route) => (
                <tr key={route.originId} className="hover:bg-muted/20">
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">
                    {isHi ? route.originHi : route.originEn}
                  </td>
                  <td className="p-3 text-primary">
                    {isHi ? route.bestOptionHi : route.bestOptionEn}
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {route.routes[0]?.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/how-to-reach" : "/kumbh-mela-2027/how-to-reach"}
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            <span>{isHi ? "सभी शहरों के विस्तृत ट्रेन व सड़क मार्ग देखें" : "View comprehensive origin-wise transit guide"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/parking-and-traffic" : "/kumbh-mela-2027/parking-and-traffic"}
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            <span>{isHi ? "वाहन प्रतिबंध एवं सैटेलाइट पार्किंग नियम देखें" : "View vehicle restrictions & parking guide"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: WHERE TO STAY & ZONES
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="stay-zones">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "हरिद्वार कुंभ 2027 में कहाँ ठहरें: क्षेत्र तुलना मैट्रिक्स"
            : "Where to Stay in Haridwar for Kumbh 2027: Zone Comparison"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {isHi
            ? "शांति और आसान आवागमन चाहने वाले परिवारों के लिए भूपतवाला के आश्रम और ऋषिकेश मार्ग के लक्जरी कैंप सबसे उपयुक्त हैं। हर की पौड़ी के समीप के होटलों में पैदल दूरी का लाभ तो है, परंतु स्नान दिवसों पर भारी सुरक्षा घेरा और वाहन निषेध रहता है।"
            : "Families seeking tranquility and vehicle mobility should consider ashrams in Bhoopatwala or riverside luxury camps along the Rishikesh corridor. The Har Ki Pauri market area offers immediate walking ghat access but faces strict pedestrian lockdowns and continuous loudspeaker activity on snan days."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-border bg-card/60">
            <h3 className="text-lg font-bold text-foreground mb-2">Bhoopatwala & Shantikunj</h3>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Quiet northern zone housing historic ashrams, charitable dharmashalas, and riverside access. Vehicle mobility is comparatively easier than central market areas.
            </p>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              ✓ Recommended for Families & Seniors
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-border bg-card/60">
            <h3 className="text-lg font-bold text-foreground mb-2">Rishikesh Bypass Luxury Camps</h3>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Curated Swiss Cottage tents featuring ensuite western washrooms, Vedic kitchens, and serene hillside settings safely outside congested city perimeters.
            </p>
            <span className="text-[11px] font-semibold text-primary">
              ✓ Recommended for Luxury Stays & Spiritual Peace
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-border bg-card/60">
            <h3 className="text-lg font-bold text-foreground mb-2">Har Ki Pauri Core Area</h3>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Immediate walking proximity to Brahma Kund and evening Ganga Aarti. However, vehicles are strictly banned and loud continuous announcements occur throughout the night.
            </p>
            <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
              ⚠ High Foot Traffic & Pedestrian Only
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/stay" : "/kumbh-mela-2027/stay"}
            className="text-primary font-semibold text-xs md:text-sm hover:underline inline-flex items-center gap-1"
          >
            <span>{isHi ? "होटल, आश्रम एवं स्विस टेंट का विस्तृत क्षेत्र विश्लेषण पढ़ें" : "View complete zone comparison & accommodation guide"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: SENIOR & FAMILY SAFETY
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="senior-safety">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          {isHi
            ? "बुजुर्गों और परिवार के साथ कुंभ यात्रा: सुरक्षा एवं सावधानियां"
            : "Senior Citizen & Family Safety Guide for Kumbh Mela 2027"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {isHi
            ? "वरिष्ठ नागरिकों के लिए घाटों पर रैंप व्यवस्था, अधिकृत क्षेत्रों में बैटरी चालित गोल्फ कार्ट्स, प्राथमिक चिकित्सा शिविर और शांत स्नान तिथियों की विशेष योजना उपलब्ध कराई जाती है।"
            : "Senior citizen assistance includes barrier-free ghat ramps, battery-operated golf cart shuttle zones where permitted, dedicated medical first-aid posts with ORS booths, and specialized family escort itineraries scheduled on quieter non-peak bathing days."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-border bg-muted/20">
            <h4 className="font-bold text-foreground mb-1">Calm Date Selection</h4>
            <p className="text-muted-foreground">Select dates like Basant Panchami or Nav Samvatsar for unhurried bathing.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-muted/20">
            <h4 className="font-bold text-foreground mb-1">Wheelchair Access</h4>
            <p className="text-muted-foreground">Pre-arrange wheelchair transfers from authorized vehicle drop cordons.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-muted/20">
            <h4 className="font-bold text-foreground mb-1">Medical Readiness</h4>
            <p className="text-muted-foreground">Carry 15-day supply of personal medications and verified emergency contact slips.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-muted/20">
            <h4 className="font-bold text-foreground mb-1">Safe Ghat Chains</h4>
            <p className="text-muted-foreground">Bathe strictly within secured chain enclosures with assisting family members.</p>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/senior-family-guide" : "/kumbh-mela-2027/senior-family-guide"}
            className="text-primary font-semibold text-xs md:text-sm hover:underline inline-flex items-center gap-1"
          >
            <span>{isHi ? "वरिष्ठ नागरिकों हेतु सम्पूर्ण चेकलिस्ट पढ़ें" : "View comprehensive Senior & Family Care Guide"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: PACKAGES & CHHATTISGARH SILO TEASER
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="packages">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              {isHi ? "कुंभ मेला 2027 टूर पैकेज एवं आवास व्यवस्था" : "Kumbh Mela 2027 Tour Packages & Camp Stays"}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {isHi
                ? "पारदर्शी रद्दीकरण नियम, शुद्ध सात्विक भोजन एवं प्रमाणित आश्रम व्यवस्था।"
                : "Transparent cancellation terms, sattvic dining, and verified pilgrim accommodations."}
            </p>
          </div>

          <Link
            to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"}
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            <span>{isHi ? "सभी पैकेज विवरण देखें" : "View all package tiers"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Package Tiers Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KUMBH_PACKAGES.map((pkg) => {
            const detailUrl = isHi
              ? `/hi/kumbh-mela-2027/packages/${pkg.slug}`
              : `/kumbh-mela-2027/packages/${pkg.slug}`;

            return (
              <div
                key={pkg.id}
                className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col group"
              >
                {/* Top Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <img
                    src={pkg.imageUrl}
                    alt={isHi ? pkg.titleHi : pkg.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-card/95 text-orange-600 dark:text-orange-400 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur">
                      {isHi ? pkg.badgeTextHi || "प्रमाणित 2027" : pkg.badgeTextEn || "CERTIFIED 2027"}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur text-white text-[10px] font-medium border border-white/20">
                      Haridwar 2027
                    </span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4">
                    <h3 className="font-serif font-bold text-white text-lg leading-snug drop-shadow-sm mb-1 line-clamp-2">
                      <Link to={detailUrl} className="hover:underline">
                        {isHi ? pkg.titleHi : pkg.titleEn}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-orange-200">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate font-medium">{isHi ? pkg.routeHi || pkg.routeEn : pkg.routeEn}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span>{pkg.duration}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-600/20 text-[10px] font-bold uppercase tracking-wider">
                        {isHi ? pkg.categoryTagHi || "पावन तीर्थ" : pkg.categoryTagEn || "TAILOR-MADE"}
                      </span>
                    </div>

                    <div className="border-b border-dashed border-border/80 my-3" />

                    <div className="flex items-end justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[11px] text-muted-foreground block font-medium">
                          {isHi ? "व्यक्तिगत कोटेशन" : "Personal quotation"}
                        </span>
                        <p className="text-xl font-bold font-serif text-foreground leading-none mt-1">
                          {pkg.priceStarting}
                        </p>
                      </div>

                      <Link
                        to={detailUrl}
                        className="px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold text-xs transition-colors shrink-0"
                      >
                        {isHi ? "विवरण देखें" : "View details"}
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link
                      to={detailUrl}
                      className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{isHi ? "अभी बुक करें" : "Book Now"}</span>
                    </Link>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={pkg.pdfCleanUrl || pkg.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 rounded-xl bg-muted/60 hover:bg-muted text-foreground font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-border/60"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </a>

                      <a
                        href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(
                          `Hi Rudraksh Safar, I want to talk to an executive regarding ${pkg.titleEn} (${pkg.duration}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-emerald-500/20"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{isHi ? "सलाहकार" : "Executive"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Converting Chhattisgarh Silo Banner */}
        <div className="mt-8 rounded-2xl border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/10 via-background to-orange-500/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider">
              {isHi ? "छत्तीसगढ़ विशेष तीर्थ यात्रा" : "Dedicated Chhattisgarh Pilgrimage Silo"}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              {isHi
                ? "रायपुर, भिलाई, बिलासपुर, दुर्ग एवं राजनांदगांव से सीधी यात्रा योजनाएं"
                : "Haridwar Kumbh 2027 Tour Packages from Chhattisgarh Cities"}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {isHi
                ? "छत्तीसगढ़ के श्रद्धालुओं के लिए विशेष समूह प्रस्थान, स्थानीय भाषा समन्वयक, और भिलाई मुख्य कार्यालय में व्यक्तिगत परामर्श की सुविधा।"
                : "Dedicated departures connecting Raipur, Bhilai, Bilaspur, Durg, and Rajnandgaon with experienced regional tour coordinators and local pickup points."}
            </p>
          </div>

          <Link
            to={isHi ? "/hi/kumbh-mela-2027/packages/chhattisgarh" : "/kumbh-mela-2027/packages/chhattisgarh"}
            className="shrink-0 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 text-center"
          >
            {isHi ? "छत्तीसगढ़ शहर प्रस्थान देखें" : "Explore Chhattisgarh Silo"}
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: COMPREHENSIVE FAQ SECTION
          ======================================================== */}
      <section className="my-12 pt-8 border-t border-border/60" id="faqs">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {isHi ? "अक्सर पूछे जाने वाले प्रश्न (FAQ)" : "Frequently Asked Questions (FAQ)"}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            {isHi
              ? "हरिद्वार कुंभ 2027 की तिथियों, स्नान नियमों, आवास और परिवहन पर आधिकारिक उत्तर।"
              : "Direct, factual answers regarding Haridwar Kumbh 2027 dates, royal baths, and logistics."}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-border/80 rounded-2xl bg-card/60 p-4 md:p-5 transition-all open:bg-card open:shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-sm md:text-base text-foreground cursor-pointer select-none">
                <span>{isHi ? faq.questionHi : faq.questionEn}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <div className="mt-3 pt-3 border-t border-border/50 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {isHi ? faq.answerHi : faq.answerEn}
              </div>
            </details>
          ))}
        </div>
      </section>
    </KumbhLayout>
  );
};

export default KumbhMela2027Pillar;
