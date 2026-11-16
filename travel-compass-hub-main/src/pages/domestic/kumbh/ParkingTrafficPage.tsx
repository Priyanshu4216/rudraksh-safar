import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { Car, AlertTriangle, ShieldCheck, MapPin, Navigation, Info } from 'lucide-react';

interface ParkingTrafficPageProps {
  lang?: 'en' | 'hi';
}

const ParkingTrafficPage: React.FC<ParkingTrafficPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'पार्किंग एवं यातायात नियम' : 'Parking & Traffic Rules', url: isHi ? '/hi/kumbh-mela-2027/parking-and-traffic' : '/kumbh-mela-2027/parking-and-traffic' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/parking-and-traffic'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/parking-and-traffic';

  const parkingZones = [
    {
      nameEn: "Bairagi Camp Satellite Parking",
      nameHi: "बैरागी कैंप सैटेलाइट पार्किंग",
      locationEn: "Near Laksar Road bypass",
      capacity: "Large vehicles, tourist buses & personal cars",
      notesEn: "Primary parking hub for vehicles arriving from Delhi / Western UP on non-peak and major snan days.",
      notesHi: "दिल्ली/पश्चिमी यूपी की ओर से आने वाले वाहनों एवं बसों के लिए मुख्य पार्किंग क्षेत्र।"
    },
    {
      nameEn: "Gauri Shankar & Doodhadhari Parking",
      nameHi: "गौरी शंकर एवं दूधाधारी पार्किंग",
      locationEn: "Northern bypass near Motichur / Bhoopatwala",
      capacity: "Light motor vehicles & tourist cabs",
      notesEn: "Closest parking access for devotees accommodated in Bhoopatwala ashrams or travelling from Dehradun/Rishikesh.",
      notesHi: "भूपतवाला और ऋषिकेश मार्ग से आने वाले वाहनों के लिए सबसे सुविधाजनक पार्किंग।"
    },
    {
      nameEn: "Rishikul Ground Parking",
      nameHi: "ऋषिकुल मैदान पार्किंग",
      locationEn: "Central Haridwar city boundary",
      capacity: "Regulated administrative & pass-holder parking",
      notesEn: "Used as transit depot during regular days; closed to private traffic on Amrit Snan dates.",
      notesHi: "सामान्य दिनों में सुलभ; अमृत स्नान की तिथियों पर निजी वाहनों हेतु प्रतिबंधित।"
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ 2027 पार्किंग एवं यातायात नियम: वाहन प्रतिबंध एवं रूट मैप"
            : "Haridwar Kumbh 2027 Parking & Traffic Rules: Vehicle Restrictions"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार कुंभ मेला 2027 के आधिकारिक यातायात नियम। सैटेलाइट पार्किंग स्थल, हर की पौड़ी पर वाहन प्रतिबंध, शटल सेवा एवं रूट डायवर्जन गाइड।"
              : "Official parking zones, highway diversions, and pedestrian restrictions for Haridwar Kumbh 2027. Plan where to park your car safely."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/parking-and-traffic" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/parking-and-traffic" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/parking-and-traffic" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "कुंभ 2027 पार्किंग एवं यातायात नियम" : "Kumbh 2027 Parking and Traffic Rules"}
        description="Comprehensive vehicle diversion, satellite parking, and traffic rules guide for Haridwar Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ 2027: पार्किंग एवं यातायात नियम (वाहन प्रतिबंध गाइड)" : "Haridwar Kumbh 2027: Parking & Traffic Rules Guide"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "कुंभ मेले के दौरान हरिद्वार में वाहनों का आवागमन पुलिस प्रशासन द्वारा सख्त रूप से नियंत्रित रहता है। जानिए अपनी गाड़ी कहाँ पार्क करें और शटल सेवाओं का उपयोग कैसे करें।"
            : "Vehicle access in Haridwar is strictly regulated by the Uttarakhand Traffic Police during the Ardh Kumbh Mela. Review satellite parking depots and pedestrian cordons below."}
        </p>
      </header>

      {/* Answer Box */}
      <section className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10">
        <h2 className="font-bold text-base md:text-lg text-foreground mb-2">
          {isHi ? "क्या अपनी निजी कार से हर की पौड़ी तक जा सकते हैं?" : "Can you drive a private car to Har Ki Pauri during Kumbh 2027?"}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {isHi
            ? "नहीं, कुंभ मेले के मुख्य दिनों और विशेषकर अमृत स्नान की तिथियों पर हर की पौड़ी के 3 से 5 किमी के दायरे में सभी निजी वाहनों का प्रवेश पूर्णतः प्रतिबंधित रहता है। सभी गाड़ियों को हाईवे के बाहरी सैटेलाइट पार्किंग स्थलों पर पार्क करना अनिवार्य होता है।"
            : "No, private vehicles are strictly prohibited within a 3 to 5 km radius of Har Ki Pauri during all major bathing and Amrit Snan days. All incoming passenger cars and private tourist buses are diverted to designated satellite parking zones located along highway bypasses."}
        </p>
      </section>

      {/* Parking Depots */}
      <section className="my-10">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "प्रमुख सैटेलाइट पार्किंग स्थल" : "Designated Satellite Parking Zones"}
        </h2>
        <div className="space-y-4">
          {parkingZones.map((pz, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-bold text-base text-foreground flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {isHi ? pz.nameHi : pz.nameEn}
                </h3>
                <span className="text-xs text-muted-foreground font-medium">{pz.locationEn}</span>
              </div>
              <p className="text-xs text-primary font-semibold mb-2">{pz.capacity}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {isHi ? pz.notesHi : pz.notesEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Advisory */}
      <aside className="my-8 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-950 dark:text-amber-200">
        <strong className="font-semibold block mb-1">
          {isHi ? "प्रशासनिक सूचना:" : "Administrative Notice:"}
        </strong>
        {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
      </aside>
    </KumbhLayout>
  );
};

export default ParkingTrafficPage;
