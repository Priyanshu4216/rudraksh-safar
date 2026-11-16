import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { MapPin, Tent, Building2, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

interface StayAndTentsPageProps {
  lang?: 'en' | 'hi';
}

const StayAndTentsPage: React.FC<StayAndTentsPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'ठहरने की जगह व टेंट' : 'Stay & Tents Guide', url: isHi ? '/hi/kumbh-mela-2027/stay' : '/kumbh-mela-2027/stay' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/stay'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/stay';

  const stayZones = [
    {
      id: "zone-bhoopatwala",
      nameEn: "Bhoopatwala & Motichur Zone",
      nameHi: "भूपतवाला एवं मोतीचूर क्षेत्र",
      type: "Ashrams & Pilgrimage Hotels",
      walkingHarKiPauri: "3.5 – 5.0 km (E-rickshaw / Shuttle)",
      vehicleAccessSnan: "Regulated up to outer checkpoints",
      seniorSuitability: "Highly Suitable",
      seniorColor: "text-emerald-600",
      descriptionEn: "Tranquil northern belt housing renowned ashrams like Shantikunj, Pawan Dham, and established charitable dharamshalas. Best choice for peaceful environment, clean vegetarian food, and elder mobility.",
      descriptionHi: "हरिद्वार का शांत उत्तरी क्षेत्र जहाँ शांतिकुंज, पवन धाम और प्रतिष्ठित आश्रम स्थित हैं। शांतिपूर्ण वातावरण, सात्विक भोजन और बुजुर्गों की सुविधा के लिए सबसे उत्तम क्षेत्र।"
    },
    {
      id: "zone-rishikesh-bypass",
      nameEn: "Rishikesh Road & Chila Luxury Camps",
      nameHi: "ऋषिकेश मार्ग एवं चीला लक्जरी टेंट",
      type: "Luxury Swiss Cottage Camps",
      walkingHarKiPauri: "8.0 – 15.0 km (Designated Pre-booked Coach)",
      vehicleAccessSnan: "Clear vehicular transit via bypass corridor",
      seniorSuitability: "Very Good (with escorted transfers)",
      seniorColor: "text-emerald-600",
      descriptionEn: "Riverside Swiss Cottage luxury camps offering modern ensuite bathrooms, heating, Vedic food halls, and spiritual satsang lawns safely outside city traffic jams.",
      descriptionHi: "गंगा तट पर स्थापित लक्जरी स्विस कॉटेज टेंट जहाँ अटैच्ड वेस्टर्न वॉशरूम, हीटिंग, सात्विक रसोई और खुली हरियाली उपलब्ध रहती है। भीड़भाड़ से दूर एकांत प्रवास।"
    },
    {
      id: "zone-kankhal",
      nameEn: "Historic Kankhal Zone",
      nameHi: "ऐतिहासिक कनखल क्षेत्र",
      type: "Heritage Ashrams & Dharamshalas",
      walkingHarKiPauri: "3.5 – 4.5 km",
      vehicleAccessSnan: "Limited / Diverted on peak days",
      seniorSuitability: "Moderate",
      seniorColor: "text-amber-600",
      descriptionEn: "Ancient spiritual center housing the Daksheshwar Mahadev Temple and monastic ashrams. Offers rich cultural heritage and serene bathing at Sati Kund.",
      descriptionHi: "दक्षेश्वर महादेव मंदिर और प्राचीन अखाड़ों का पावन केंद्र। आध्यात्मिक धरोहर और शांत वातावरण।"
    },
    {
      id: "zone-harki-pauri",
      nameEn: "Har Ki Pauri & Upper Road Market",
      nameHi: "हर की पौड़ी एवं अपर रोड बाजार",
      type: "Budget Hotels & Traditional Guest Houses",
      walkingHarKiPauri: "0.1 – 0.8 km (Walking distance)",
      vehicleAccessSnan: "Strictly Zero Vehicles (Pedestrian Lockdown)",
      seniorSuitability: "Challenging (due to noise & stairs)",
      seniorColor: "text-rose-600",
      descriptionEn: "Closest to Brahma Kund for instant morning dips and evening Aarti darshan. However, steep steps, narrow crowded lanes, continuous loudspeakers, and strict walking rules make it challenging for mobility-impaired elders.",
      descriptionHi: "ब्रह्मकुंड और गंगा आरती के ठीक सामने। परंतु वाहनों का पूर्ण निषेध, संकरी सीढ़ियां, भीड़ और निरंतर लाउडस्पीकर के कारण बुजुर्गों के लिए कठिन।"
    },
    {
      id: "zone-jwalapur",
      nameEn: "Jwalapur & Ranipur Commercial Zone",
      nameHi: "ज्वालापुर एवं रानीपुर क्षेत्र",
      type: "Modern Commercial Hotels",
      walkingHarKiPauri: "5.0 – 8.0 km",
      vehicleAccessSnan: "Good connectivity to bypass highways",
      seniorSuitability: "Good",
      seniorColor: "text-emerald-600",
      descriptionEn: "Contemporary urban hotel stays with lift amenities and broad roads. Suitable for corporate groups and travelers arriving via Delhi-Haridwar Highway.",
      descriptionHi: "आधुनिक शहरी होटल जहाँ लिफ्ट, पार्किंग और चौड़ी सड़कें उपलब्ध हैं। हाईवे से सीधे जुड़े होने के कारण आवागमन सुगम रहता है।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ 2027 में कहाँ ठहरें: होटल, आश्रम एवं लक्जरी टेंट गाइड"
            : "Where to Stay in Haridwar for Kumbh 2027: Hotels, Ashrams & Tents"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार कुंभ 2027 में ठहरने के प्रमुख क्षेत्र। भूपतवाला आश्रम, हर की पौड़ी होटल, ऋषिकेश लक्जरी स्विस टेंट एवं बुजुर्गों हेतु उपयुक्त आवास तुलना।"
              : "Complete Haridwar Ardh Kumbh 2027 accommodation guide. Compare Bhoopatwala ashrams, luxury Swiss tents, and walking distance to Har Ki Pauri."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/stay" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/stay" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/stay" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार कुंभ 2027 ठहरने की जगह व टेंट" : "Where to Stay in Haridwar for Kumbh 2027"}
        description="Comprehensive zone matrix comparing hotels, ashrams, and luxury tents in Haridwar for Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ 2027: होटल, आश्रम एवं लक्जरी टेंट संपूर्ण गाइड" : "Where to Stay in Haridwar for Kumbh 2027: Complete Accommodation Guide"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "कुंभ मेले के दौरान सही क्षेत्र का चुनाव आपकी यात्रा की सफलता तय करता है। यहाँ पैदल दूरी, वाहन नियमों और वरिष्ठ नागरिकों की सुविधा के आधार पर 5 प्रमुख क्षेत्रों की निष्पक्ष तुलना की गई है।"
            : "Choosing the correct accommodation zone dictates your entire Kumbh experience. Review our comprehensive evaluation of walking distances, snan-day vehicular access, and elder suitability across five key zones."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "परिवार और बुजुर्गों के साथ कुंभ 2027 में कहाँ ठहरना सर्वोत्तम है?" : "Where is the best area to stay for families with senior citizens?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "बुजुर्गों और पारिवारिक श्रद्धालुओं के लिए भूपतवाला के आश्रम अथवा ऋषिकेश मार्ग पर स्थित लक्जरी स्विस कॉटेज टेंट सर्वोत्तम हैं। इन क्षेत्रों में वाहनों का प्रवेश अपेक्षाकृत सुगम रहता है, भोजन सात्विक होता है, और वे हर की पौड़ी के भीड़भाड़ व लाउडस्पीकर के कोलाहल से सुरक्षित दूरी पर स्थित हैं।"
            : "For family pilgrims and senior citizens, ashrams in Bhoopatwala or luxury tented villages along the Rishikesh corridor are strongly recommended. These zones provide regulated vehicular accessibility, sattvic food options, and avoid the continuous noise, narrow stairs, and pedestrian blockades of the Har Ki Pauri core."}
        </p>
      </section>

      {/* Zone Comparison Cards */}
      <div className="space-y-6">
        {stayZones.map((zone) => (
          <article key={zone.id} className="p-6 rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                {isHi ? zone.nameHi : zone.nameEn}
              </h2>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-foreground">
                {zone.type}
              </span>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
              {isHi ? zone.descriptionHi : zone.descriptionEn}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-muted/30 border border-border/60 text-xs">
              <div>
                <span className="text-muted-foreground block text-[11px]">{isHi ? "हर की पौड़ी से दूरी" : "Distance to Har Ki Pauri"}:</span>
                <strong className="text-foreground">{zone.walkingHarKiPauri}</strong>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">{isHi ? "स्नान दिवस वाहन नियम" : "Snan Day Vehicle Access"}:</span>
                <strong className="text-foreground">{zone.vehicleAccessSnan}</strong>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">{isHi ? "बुजुर्गों हेतु अनुकूलता" : "Senior Devotee Suitability"}:</span>
                <strong className={zone.seniorColor}>{zone.seniorSuitability}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Compliance Disclaimer */}
      <aside className="my-10 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-950 dark:text-amber-200">
        <h3 className="font-bold mb-1 flex items-center gap-1.5 text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          {isHi ? "आवंटन एवं मेला प्रशासन नियम" : "Official Mela Administration Allocation Rule"}
        </h3>
        <p className="leading-relaxed">
          {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
        </p>
      </aside>

      <div className="flex flex-wrap gap-4 text-xs font-semibold">
        <Link to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"} className="text-primary hover:underline inline-flex items-center gap-1">
          <span>{isHi ? "रुद्राक्ष सफ़र के टेंट व आश्रम पैकेज देखें →" : "Explore verified Rudraksh Safar stay packages →"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </KumbhLayout>
  );
};

export default StayAndTentsPage;
