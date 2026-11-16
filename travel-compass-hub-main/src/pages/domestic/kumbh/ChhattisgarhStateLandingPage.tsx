import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { CHHATTISGARH_CITIES } from '@/data/kumbh/cities';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { MapPin, Train, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

interface ChhattisgarhStateLandingPageProps {
  lang?: 'en' | 'hi';
}

const ChhattisgarhStateLandingPage: React.FC<ChhattisgarhStateLandingPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'यात्रा पैकेज' : 'Packages', url: isHi ? '/hi/kumbh-mela-2027/packages' : '/kumbh-mela-2027/packages' },
    { name: isHi ? 'छत्तीसगढ़ प्रस्थान' : 'Chhattisgarh Departures', url: isHi ? '/hi/kumbh-mela-2027/packages/chhattisgarh' : '/kumbh-mela-2027/packages/chhattisgarh' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/chhattisgarh'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/packages/chhattisgarh';

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "छत्तीसगढ़ से हरिद्वार कुंभ मेला 2027 यात्रा पैकेज: रायपुर, भिलाई, बिलासपुर"
            : "Haridwar Kumbh Mela 2027 Packages from Chhattisgarh: Raipur, Bhilai, Bilaspur"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "छत्तीसगढ़ से हरिद्वार अर्ध कुंभ 2027 यात्रा पैकेज। रायपुर, भिलाई, बिलासपुर, दुर्ग एवं राजनांदगांव से सीधी ट्रेन, लक्जरी टेंट, सात्विक भोजन एवं समूह प्रस्थान।"
              : "Official Haridwar Ardh Kumbh 2027 pilgrimage departures from Chhattisgarh. Explore guided tour packages from Raipur, Bhilai, Bilaspur, Durg, and Rajnandgaon."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/packages/chhattisgarh" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/chhattisgarh" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/packages/chhattisgarh" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "छत्तीसगढ़ से हरिद्वार कुंभ 2027 यात्रा पैकेज" : "Haridwar Kumbh 2027 Packages from Chhattisgarh"}
        description="Comprehensive pilgrimage departure portal connecting Chhattisgarh cities to Haridwar Ardh Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{isHi ? "छत्तीसगढ़ तीर्थ प्रस्थान केंद्र" : "Chhattisgarh Regional Pilgrimage Hub"}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi
            ? "छत्तीसगढ़ से हरिद्वार अर्ध कुंभ 2027: संपूर्ण यात्रा पैकेज एवं प्रस्थान योजना"
            : "Haridwar Ardh Kumbh 2027 Tour Packages from Chhattisgarh"}
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "रुद्राक्ष सफ़र छत्तीसगढ़ के श्रद्धालुओं को हरिद्वार अर्ध कुंभ 2027 हेतु विशेष समूह प्रस्थान, सुरक्षित आवास, सात्विक भोजन और स्थानीय भाषा समन्वय प्रदान करता है।"
            : "Rudraksh Safar coordinates dedicated pilgrimage departures from Chhattisgarh's primary commercial, railway, and cultural hubs, delivering end-to-end comfort for family and senior devotees."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "छत्तीसगढ़ से हरिद्वार कुंभ यात्रा की योजना कैसे बनाएं?" : "How do pilgrims from Chhattisgarh plan their Haridwar Kumbh trip?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "छत्तीसगढ़ के तीर्थयात्री रायपुर जंक्शन, बिलासपुर जंक्शन, दुर्ग जंक्शन अथवा राजनांदगांव से चलने वाली सुपरफास्ट ट्रेनों अथवा रायपुर एयरपोर्ट से कनेक्टिंग उड़ानों द्वारा हरिद्वार पहुंच सकते हैं। रुद्राक्ष सफ़र सभी 5 प्रमुख शहरों से पूर्व-समन्वित समूह यात्राएं और भिलाई कार्यालय में व्यक्तिगत परामर्श सुविधा उपलब्ध कराता है।"
            : "Pilgrims from Chhattisgarh travel conveniently via direct long-distance trains originating from Durg, Raipur, and Bilaspur Junctions, or via scheduled flights from Raipur Airport. Rudraksh Safar provides scheduled group departures, verified ashram/tent accommodation in Haridwar, and in-person consultations at our Bhilai head office."}
        </p>
      </section>

      {/* City Departure Cards */}
      <section className="my-10">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          {isHi ? "अपने शहर के अनुसार कुंभ पैकेज चुनें" : "Select Your Departure City"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHHATTISGARH_CITIES.map((city) => (
            <article key={city.slug} className="p-6 rounded-2xl border border-border bg-card flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    {isHi ? city.nameHi : city.nameEn}
                  </h3>
                  {city.hasOffice && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-green-600/10 text-green-700 dark:text-green-400 border border-green-600/30">
                      {isHi ? "मुख्य कार्यालय" : "Head Office"}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                  <p>
                    <strong className="text-foreground">{isHi ? "मुख्य स्टेशन" : "Primary Rail Station"}:</strong> {city.railStations.join(', ')}
                  </p>
                  <p>
                    <strong className="text-foreground">{isHi ? "कैचमेंट क्षेत्र" : "Catchment Towns"}:</strong> {(isHi ? city.catchmentAreasHi : city.catchmentAreasEn).slice(0, 4).join(', ')}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {isHi ? city.localAngleHi : city.localAngleEn}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                <Link
                  to={isHi ? `/hi/kumbh-mela-2027/packages/${city.slug}` : `/kumbh-mela-2027/packages/${city.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>{isHi ? `${city.nameHi} पैकेज देखें` : `View ${city.nameEn} Package`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Rudraksh Safar, I am inquiring about Kumbh 2027 packages from ${city.nameEn}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-600/10 hover:bg-green-600/20 text-green-700 dark:text-green-400 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="my-12 pt-8 border-t border-border/60">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "छत्तीसगढ़ प्रस्थान शहर तुलना तालिका" : "Chhattisgarh City Departure Comparison"}
        </h2>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-muted/60 text-foreground border-b border-border">
              <tr>
                <th className="p-3 font-semibold">{isHi ? "प्रस्थान शहर" : "Departure City"}</th>
                <th className="p-3 font-semibold">{isHi ? "निकटतम प्रमुख स्टेशन" : "Primary Boarding Station"}</th>
                <th className="p-3 font-semibold">{isHi ? "मार्ग विशेषताएं" : "Transit Feature"}</th>
                <th className="p-3 font-semibold">{isHi ? "परामर्श" : "Consultation"}</th>
                <th className="p-3 font-semibold">{isHi ? "कार्यवाही" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CHHATTISGARH_CITIES.map((city) => (
                <tr key={city.slug} className="hover:bg-muted/20">
                  <td className="p-3 font-bold text-foreground">{isHi ? city.nameHi : city.nameEn}</td>
                  <td className="p-3 text-muted-foreground">{city.railStations[0]}</td>
                  <td className="p-3 text-muted-foreground">
                    {city.slug === 'from-raipur' ? 'Air & Express Rail' :
                     city.slug === 'from-bhilai' ? 'Retiree Township Coordination' :
                     city.slug === 'from-bilaspur' ? 'SECR Zonal Rail Network' :
                     city.slug === 'from-durg' ? 'Major Originating Terminal' : 'Howrah-Mumbai Trunk Route'}
                  </td>
                  <td className="p-3">
                    {city.hasOffice ? (
                      <span className="text-green-600 font-semibold">{isHi ? "सुपेला कार्यालय में" : "Head Office Walk-in"}</span>
                    ) : (
                      <span className="text-muted-foreground">{isHi ? "फोन / व्हाट्सएप" : "Phone / WhatsApp Desk"}</span>
                    )}
                  </td>
                  <td className="p-3">
                    <Link
                      to={isHi ? `/hi/kumbh-mela-2027/packages/${city.slug}` : `/kumbh-mela-2027/packages/${city.slug}`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{isHi ? "विवरण →" : "Details →"}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </KumbhLayout>
  );
};

export default ChhattisgarhStateLandingPage;
