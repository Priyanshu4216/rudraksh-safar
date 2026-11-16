import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { TRADITIONAL_AKHARAS } from '@/data/kumbh/akharas';
import { BookOpen, Sparkles, Compass, ArrowRight } from 'lucide-react';

interface ArdhKumbhExplainedPageProps {
  lang?: 'en' | 'hi';
}

const ArdhKumbhExplainedPage: React.FC<ArdhKumbhExplainedPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'अर्ध कुंभ परंपरा एवं इतिहास' : 'Ardh Kumbh Explained', url: isHi ? '/hi/kumbh-mela-2027/ardh-kumbh-explained' : '/kumbh-mela-2027/ardh-kumbh-explained' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/ardh-kumbh-explained'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/ardh-kumbh-explained';

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "अर्ध कुंभ क्या है: पूर्ण कुंभ से अंतर, 13 अखाड़े एवं पेशवाई परंपरा"
            : "What is Ardh Kumbh: Meaning, Difference from Purna Kumbh & 13 Akharas"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "अर्ध कुंभ मेले का आध्यात्मिक अर्थ, समुद्र मंथन की पौराणिक कथा, चार कुंभ स्थल, 13 अखाड़ों का इतिहास एवं पेशवाई शाही स्नान की सम्पूर्ण जानकारी।"
              : "Definitive spiritual explainer on Haridwar Ardh Kumbh 2027. Learn the difference between Ardh and Purna Kumbh, Samudra Manthan legend, and 13 Akharas."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/ardh-kumbh-explained" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/ardh-kumbh-explained" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/ardh-kumbh-explained" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "अर्ध कुंभ क्या है: परंपरा एवं इतिहास" : "What is Ardh Kumbh: Meaning and Traditions"}
        description="Comprehensive theological and historical explainer of the Haridwar Ardh Kumbh Mela and monastic Akharas."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "अर्ध कुंभ क्या है: पूर्ण कुंभ से अंतर, समुद्र मंथन एवं 13 अखाड़े" : "What is Ardh Kumbh: Significance, Samudra Manthan & 13 Akharas"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "सनातन धर्म के सबसे बड़े आध्यात्मिक समागम की वैदिक पृष्ठभूमि, ज्योतिषीय गणना, और अखाड़ा परंपरा की आधिकारिक व्याख्या।"
            : "Explore the astronomical alignments, Vedic origins of the divine nectar, and ancient monastic lineage of the 13 Akharas at Haridwar."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "अर्ध कुंभ और पूर्ण कुंभ में क्या अंतर है?" : "What is the difference between Ardh Kumbh and Purna Kumbh?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "पूर्ण कुंभ प्रत्येक 12 वर्ष में बृहस्पति और सूर्य के विशेष राशि संयोग पर आयोजित होता है, जबकि अर्ध कुंभ ठीक 6 वर्ष के अंतराल पर मध्यवर्ती काल में आयोजित किया जाता है। भारत में अर्ध कुंभ का आयोजन केवल दो पवित्र तीर्थों—हरिद्वार (गंगा तट) और प्रयागराज (त्रिवेणी संगम)—में ही होता है।"
            : "A Purna Kumbh occurs every twelve years based on specific astrological transits of Jupiter and the Sun, whereas an Ardh Kumbh takes place halfway through the cycle at the six-year mark. In India, Ardh Kumbh festivals are celebrated exclusively at two sacred river shrines: Haridwar on the Ganges and Prayagraj at the Triveni Sangam."}
        </p>
      </section>

      {/* Samudra Manthan Legend */}
      <section className="my-10 space-y-4">
        <h2 className="text-2xl font-serif font-bold text-foreground">
          {isHi ? "समुद्र मंथन और अमृत कुंभ की पौराणिक कथा" : "The Samudra Manthan Legend & The Four Sacred Sites"}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "श्रीमद्भागवत एवं स्कंद पुराण के अनुसार, देवों और असुरों द्वारा क्षीरसागर के मंथन से अमृत कुंभ प्रकट हुआ। अमृत कलश को असुरों से सुरक्षित रखने के लिए भगवान विष्णु के वाहन गरुड़ जी ने 12 दिव्य दिनों (मानव काल के 12 वर्ष) तक उसका संरक्षण किया। इस यात्रा के दौरान पृथ्वी पर चार स्थानों पर अमृत की बूंदें छलकी थीं: प्रयागराज, हरिद्वार, नासिक और उज्जैन।"
            : "According to the Skanda Purana and Srimad Bhagavatam, the celestial churning of the cosmic ocean (Samudra Manthan) yielded the Kumbha (urn) of immortality nectar (Amrita). To protect the sacred urn from demonic forces, Lord Vishnu's divine carrier Garuda flew with the pot for twelve celestial days. Drops of divine nectar fell at four sanctified geographic points: Haridwar, Prayagraj, Nashik, and Ujjain."}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "हरिद्वार में जिस स्थान पर अमृत छलका, उसे 'ब्रह्मकुंड' कहा जाता है, जो आज हर की पौड़ी का मुख्य घाट है। मान्यता है कि कुंभ पर्व के दौरान इस जल में स्नान करने से जन्म-जन्मांतर के पापों का क्षय और मोक्ष की प्राप्ति होती है।"
            : "In Haridwar, the exact spot blessed by the nectar is revered as Brahma Kund, situated at the core of Har Ki Pauri. Bathing here during auspicious Kumbh tithis is believed in Hindu theology to confer supreme spiritual purification and liberation from the cycle of rebirth."}
        </p>
      </section>

      {/* The 13 Akharas Detail */}
      <section className="my-10 pt-8 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "13 पारंपरिक अखाड़े एवं उनकी शाखाएं" : "The 13 Traditional Akharas & Monastic Lineages"}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {isHi
            ? "अखाड़े प्राचीन संन्यासी व्यवस्था के प्रमुख स्तंभ हैं जिनकी स्थापना सनातन धर्म, संस्कृति और पवित्र तीर्थों की रक्षा हेतु आदि शंकराचार्य एवं परवर्ती आचार्यों द्वारा की गई थी।"
            : "The 13 Akharas are sovereign monastic orders established by Adi Shankaracharya and subsequent spiritual reformers to uphold Sanatan Dharma and protect sacred pilgrimage sanctuaries."}
        </p>

        <div className="space-y-4">
          {TRADITIONAL_AKHARAS.map((a) => (
            <div key={a.id} className="p-4 rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-base text-foreground">
                  {a.order}. {isHi ? a.nameHi : a.nameEn}
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {a.category}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isHi ? a.descriptionHi : a.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </section>
    </KumbhLayout>
  );
};

export default ArdhKumbhExplainedPage;
