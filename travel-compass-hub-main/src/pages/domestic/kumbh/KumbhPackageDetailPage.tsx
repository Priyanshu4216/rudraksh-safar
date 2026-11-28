import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KumbhFAQSchema } from '@/components/kumbh/seo/KumbhFAQSchema';
import { KUMBH_PACKAGES, getPackageBySlug } from '@/data/kumbh/packages';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { KUMBH_SITE } from '@/data/kumbh/site';
import {
  Calendar,
  Clock,
  MapPin,
  Hotel,
  Utensils,
  Download,
  MessageCircle,
  Phone,
  Check,
  CheckCircle2,
  X,
  ShieldAlert,
  ArrowRight,
  FileText,
  Share2,
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';

interface KumbhPackageDetailPageProps {
  slug?: string;
  lang?: 'en' | 'hi';
}

const KumbhPackageDetailPage: React.FC<KumbhPackageDetailPageProps> = ({ slug: propSlug, lang = 'en' }) => {
  const params = useParams<{ slug?: string }>();
  const isHi = lang === 'hi';
  const slug = propSlug || params.slug || '';

  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return <Navigate to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"} replace />;
  }

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'यात्रा पैकेज' : 'Packages', url: isHi ? '/hi/kumbh-mela-2027/packages' : '/kumbh-mela-2027/packages' },
    { name: isHi ? pkg.titleHi : pkg.titleEn, url: isHi ? `/hi/kumbh-mela-2027/packages/${pkg.slug}` : `/kumbh-mela-2027/packages/${pkg.slug}` }
  ];

  const canonicalUrl = isHi
    ? `https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/${pkg.slug}`
    : `https://rudrakshsafar.com/kumbh-mela-2027/packages/${pkg.slug}`;

  // Other packages in the silo
  const siblingPackages = KUMBH_PACKAGES.filter(p => p.slug !== pkg.slug);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    travelDate: '',
    groupSize: '4',
    city: 'Delhi',
    hasSeniors: 'yes'
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = isHi
      ? `नमस्ते रुद्राक्ष सफ़र, मैं "${pkg.titleHi} (${pkg.duration})" पैकेज की बुकिंग एवं कोटेशन हेतु संपर्क कर रहा हूँ।\nनाम: ${formData.fullName}\nमोबाइल: ${formData.phone}\nप्रस्थान शहर: ${formData.city}\nसदस्यों की संख्या: ${formData.groupSize}\nयात्रा तिथि: ${formData.travelDate || 'लचीली'}\nबुजुर्ग शामिल: ${formData.hasSeniors}\nकृपया विस्तृत कार्यक्रम व आधिकारिक दरें साझा करें।`
      : `Hi Rudraksh Safar, I am inquiring about the "${pkg.titleEn} (${pkg.duration})" package for Haridwar Kumbh 2027.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nDeparture City: ${formData.city}\nGroup Size: ${formData.groupSize}\nTravel Date: ${formData.travelDate || 'Flexible'}\nSenior Citizens: ${formData.hasSeniors}\nPlease share the detailed quotation and payment voucher details.`;

    const whatsappUrl = `https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Structured TouristTrip Schema
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": isHi ? pkg.titleHi : pkg.titleEn,
    "description": isHi ? pkg.metaDescriptionHi : pkg.metaDescriptionEn,
    "url": canonicalUrl,
    "touristType": ["Pilgrims", "Spiritual Seekers", "Families"],
    "provider": {
      "@type": "TravelAgency",
      "name": KUMBH_SITE.brandName,
      "url": KUMBH_SITE.canonicalBase,
      "telephone": KUMBH_SITE.phoneNumber,
      "email": KUMBH_SITE.supportEmail
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": pkg.priceStarting?.replace(/[^0-9]/g, '') || "4299",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-11-15",
      "url": canonicalUrl
    },
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": pkg.itinerary?.length || 2,
      "itemListElement": pkg.itinerary?.map((day, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": `Day ${day.day}: ${isHi ? day.titleHi : day.titleEn}`,
          "description": isHi ? day.descHi : day.descEn
        }
      }))
    }
  };

  const packageFaqs = [
    {
      id: `faq-${pkg.slug}-1`,
      questionEn: `What is included in the ${pkg.titleEn} package?`,
      questionHi: `${pkg.titleHi} पैकेज में क्या-क्या सुविधाएं शामिल हैं?`,
      answerEn: `The package includes comfortable hotel accommodation (${pkg.hotelProposedEn}) on quad-sharing basis, daily pure vegetarian MAP breakfast and dinner, verified driver allowance, fuel, toll, parking where quoted, assisted Ganga Aarti viewing, and 24/7 pilgrimage guidance from Rudraksh Safar.`,
      answerHi: `इस पैकेज में होटल बालाजी/समकक्ष में क्वाड-शेयरिंग आवास, प्रतिदिन शुद्ध सात्विक नाश्ता एवं रात्रि भोजन (MAP), वाहन ईंधन, टोल एवं पार्किंग, हर की पौड़ी गंगा आरती दर्शन सहायता एवं रुद्राक्ष सफ़र का 24/7 तीर्थ सहयोग शामिल है।`
    },
    {
      id: `faq-${pkg.slug}-2`,
      questionEn: `Can the pickup be arranged from Delhi or Haridwar?`,
      questionHi: `क्या पिकअप दिल्ली अथवा हरिद्वार दोनों स्थानों से उपलब्ध है?`,
      answerEn: `Yes, departures and vehicle coordination can be customized Ex Delhi (Airport / Railway Station) or Ex Haridwar Junction depending on your group preference and travel bookings.`,
      answerHi: `हाँ, आपके समूह की सुविधानुसार प्रस्थान एवं पिकअप दिल्ली (एयरपोर्ट / रेलवे स्टेशन) अथवा सीधे हरिद्वार जंक्शन से व्यवस्थित किया जा सकता है।`
    },
    {
      id: `faq-${pkg.slug}-3`,
      questionEn: `Is this Kumbh Mela package suitable for senior citizens?`,
      questionHi: `क्या यह कुंभ पैकेज वरिष्ठ नागरिकों (बुजुर्गों) के लिए सुविधाजनक है?`,
      answerEn: `Yes, our itineraries are structured with moderate pacing, comfortable hotel stays, and verified drop points. For elderly family members, wheelchair coordination at permissible checkpoints can also be arranged with prior notice.`,
      answerHi: `हाँ, यह यात्रा कार्यक्रम संतुलित गति, सुविधाजनक होटल प्रवास एवं सुगम ड्रॉप पॉइंट्स के साथ तैयार किया गया है। वरिष्ठ परिजनों हेतु पूर्व सूचना पर व्हीलचेयर सहायता भी समन्वित की जाती है।`
    },
    {
      id: `faq-${pkg.slug}-4`,
      questionEn: `How can I confirm my booking and what are the payment terms?`,
      questionHi: `बुकिंग कैसे कन्फर्म करें और भुगतान के क्या नियम हैं?`,
      answerEn: `Booking is confirmed upon paying the advance token amount via official Bank NEFT / RTGS or UPI to Rudraksh Safar. A written confirmation voucher with hotel details and itinerary will be issued immediately.`,
      answerHi: `बुकिंग टोकन अग्रिम राशि बैंक ट्रांसफर अथवा आधिकारिक UPI द्वारा जमा करने पर कन्फर्म होती है। भुगतान के उपरांत रुद्राक्ष सफ़र द्वारा लिखित पुष्टि वाउचर जारी किया जाता है।`
    }
  ];

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>{isHi ? pkg.metaTitleHi || pkg.titleHi : pkg.metaTitleEn || pkg.titleEn}</title>
        <meta name="description" content={isHi ? pkg.metaDescriptionHi || pkg.idealForHi : pkg.metaDescriptionEn || pkg.idealForEn} />
        {pkg.keywords && <meta name="keywords" content={pkg.keywords.join(', ')} />}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={`https://rudrakshsafar.com/kumbh-mela-2027/packages/${pkg.slug}`} />
        <link rel="alternate" hrefLang="hi" href={`https://rudrakshsafar.com/hi/kumbh-mela-2027/packages/${pkg.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://rudrakshsafar.com/kumbh-mela-2027/packages/${pkg.slug}`} />
        <meta property="og:title" content={isHi ? pkg.titleHi : pkg.titleEn} />
        <meta property="og:description" content={isHi ? pkg.metaDescriptionHi : pkg.metaDescriptionEn} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(tripSchema)}
        </script>
      </Helmet>

      <KumbhFAQSchema faqs={packageFaqs} lang={lang} />
      <KumbhArticleSchema
        headline={isHi ? pkg.titleHi : pkg.titleEn}
        description={isHi ? pkg.idealForHi : pkg.idealForEn}
        url={canonicalUrl}
        lang={lang}
      />

      {/* Hero Banner with Inspiration Layout */}
      <section className="mb-10">
        <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-lg mb-8 bg-muted">
          <img
            src={pkg.imageUrl}
            alt={isHi ? pkg.titleHi : pkg.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

          {/* Badges on Top */}
          <div className="absolute top-5 inset-x-5 flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full bg-white/95 dark:bg-card/95 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur">
              {isHi ? pkg.badgeTextHi || "प्रमाणित 2027" : pkg.badgeTextEn || "CERTIFIED 2027"}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white text-xs font-medium">
              Haridwar Ardh Kumbh 2027
            </span>
          </div>

          {/* Overlaid Title & Meta on Image */}
          <div className="absolute bottom-5 inset-x-5 md:inset-x-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-md bg-orange-600 text-white text-xs font-bold uppercase tracking-wider">
                {pkg.duration}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 text-white text-xs backdrop-blur font-medium">
                {pkg.departure}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                {isHi ? pkg.categoryTagHi : pkg.categoryTagEn}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-md">
              {isHi ? pkg.titleHi : pkg.titleEn}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-orange-200">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{isHi ? pkg.routeHi || pkg.routeEn : pkg.routeEn}</span>
            </div>
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-6">
          {isHi ? pkg.idealForHi : pkg.idealForEn}
        </p>

        {/* Quick Specs Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-xl border border-border bg-card">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              {isHi ? "यात्रा मार्ग (Route)" : "Route"}
            </span>
            <p className="font-semibold text-sm text-foreground">
              {isHi ? pkg.routeHi || pkg.routeEn : pkg.routeEn}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Hotel className="w-3.5 h-3.5 text-blue-600" />
              {isHi ? "होटल / प्रवास" : "Proposed Stay"}
            </span>
            <p className="font-semibold text-sm text-foreground">
              {isHi ? pkg.hotelProposedHi || pkg.hotelProposedEn : pkg.hotelProposedEn}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" />
              {isHi ? "भोजन व्यवस्था" : "Meal Plan"}
            </span>
            <p className="font-semibold text-sm text-foreground">
              {isHi ? pkg.mealsHi || pkg.mealsEn : pkg.mealsEn}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5">
            <span className="text-[11px] font-medium text-orange-700 dark:text-orange-300 uppercase tracking-wider block mb-1">
              {isHi ? "पैकेज मूल्य" : "Starting Price"}
            </span>
            <p className="font-bold text-lg text-primary">
              {pkg.priceStarting}
            </p>
            <span className="text-[10px] text-muted-foreground block">
              {isHi ? pkg.priceNoteHi : pkg.priceNoteEn}
            </span>
          </div>
        </div>

        {/* Primary CTA Action Bar */}
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-muted/40 border border-border/80">
          <a
            href={pkg.pdfCleanUrl || pkg.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm shadow hover:bg-primary/90 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{isHi ? "आधिकारिक पीडीएफ ब्रोशर डाउनलोड करें" : "Download Official PDF Brochure"}</span>
          </a>

          <a
            href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(
              `Hi Rudraksh Safar, I would like to book or inquire about the ${pkg.titleEn} (${pkg.duration}). Please share custom rates.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs md:text-sm shadow transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isHi ? "व्हाट्सएप पर तुरंत कोटेशन पाएं" : "Enquire on WhatsApp"}</span>
          </a>

          <a
            href={`tel:${KUMBH_SITE.phoneNumber}`}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-medium text-xs md:text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>9713057086 / 9203650311</span>
          </a>
        </div>
      </section>

      {/* Mandatory Advisory Notice */}
      <aside className="my-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-950 dark:text-amber-200">
        <strong className="font-semibold block mb-1 flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          {isHi ? "महत्वपूर्ण उपभोक्ता एवं तीर्थ सूचना:" : "Official Pilgrim & Compliance Advisory:"}
        </strong>
        {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
      </aside>

      {/* Key Highlights */}
      {pkg.highlightsEn && (
        <section className="my-10 p-6 rounded-2xl border border-border bg-card">
          <h2 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            {isHi ? "यात्रा के मुख्य आकर्षण (Package Highlights)" : "Package Highlights & Spiritual Significance"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(isHi ? pkg.highlightsHi || pkg.highlightsEn : pkg.highlightsEn).map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/50 text-xs md:text-sm">
                <span className="w-5 h-5 rounded-full bg-orange-600/10 text-orange-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-foreground leading-relaxed">{hl}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Detailed Day-Wise Travel Plan */}
      <section className="my-12">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
            {isHi ? "दिन-प्रतिदिन यात्रा विवरण" : "Day-by-Day Detailed Itinerary"}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {isHi ? `${pkg.titleHi} का विस्तृत यात्रा कार्यक्रम` : `Day-Wise Travel Plan: ${pkg.titleEn}`}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            {isHi
              ? "सभी दर्शन, गंगा स्नान एवं सड़क आवागमन स्थानीय प्रशासन के नियमों एवं सुरक्षा व्यवस्था के अधीन हैं।"
              : "All travel, bathing access, temple visits, and road movements are subject to local administration and operational restrictions."}
          </p>
        </div>

        <div className="space-y-6">
          {pkg.itinerary?.map((day) => (
            <article
              key={day.day}
              className="p-6 md:p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                    {isHi ? `दिन ${day.day}` : `DAY ${day.day}`}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">
                    {isHi ? day.titleHi : day.titleEn}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {day.meals && (
                    <span className="px-2.5 py-1 rounded-md bg-muted font-medium">
                      🍽️ {day.meals}
                    </span>
                  )}
                  {day.stay && (
                    <span className="px-2.5 py-1 rounded-md bg-muted font-medium hidden sm:inline-block">
                      🏨 {day.stay}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                {isHi ? day.descHi : day.descEn}
              </p>

              {/* Point-by-point easy breakdown */}
              {((isHi ? day.pointsHi : day.pointsEn) || day.activities) && (
                <div className="mt-4 pt-4 border-t border-border/60 bg-muted/20 p-4 sm:p-5 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isHi ? "दैनिक मुख्य बिंदु (सरल व स्पष्ट कार्यक्रम):" : "Step-by-Step Points & Highlights:"}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {((isHi ? day.pointsHi : day.pointsEn) || day.activities)?.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="my-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          {isHi ? "पैकेज में क्या शामिल है एवं क्या नहीं" : "Package Inclusions & Exclusions"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inclusions */}
          <div className="p-6 rounded-2xl border border-green-500/30 bg-green-500/5">
            <h3 className="font-bold text-base text-foreground mb-4 uppercase tracking-wider flex items-center gap-2 text-green-700 dark:text-green-400">
              <Check className="w-5 h-5 text-green-600" />
              {isHi ? "पैकेज में शामिल (Inclusions):" : "Package Inclusions:"}
            </h3>
            <ul className="space-y-3 text-xs md:text-sm">
              {(isHi ? pkg.inclusionsHi : pkg.inclusionsEn).map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-foreground leading-relaxed">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/5">
            <h3 className="font-bold text-base text-foreground mb-4 uppercase tracking-wider flex items-center gap-2 text-rose-700 dark:text-rose-400">
              <X className="w-5 h-5 text-rose-600" />
              {isHi ? "पैकेज में शामिल नहीं (Exclusions):" : "Package Exclusions:"}
            </h3>
            <ul className="space-y-3 text-xs md:text-sm">
              {(isHi ? pkg.exclusionsHi : pkg.exclusionsEn).map((exc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-foreground leading-relaxed">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">•</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking & Travel Conditions */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border border-border bg-card">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "बुकिंग एवं यात्रा नियम व शर्तें" : "Booking & Travel Conditions"}
        </h2>
        <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
          {(isHi ? pkg.bookingConditionsHi || [] : pkg.bookingConditionsEn || []).map((cond, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">•</span>
              <span>{cond}</span>
            </li>
          ))}
        </ul>

        {/* High Demand Warning Callout */}
        <div className="mt-6 p-4 rounded-xl border border-orange-500/30 bg-orange-500/10 text-xs md:text-sm text-orange-950 dark:text-orange-200">
          <strong className="font-bold block mb-1">
            {isHi ? "महत्वपूर्ण चेतावनी: कुंभ मेला उच्च मांग अवधि है" : "Kumbh Mela High-Demand Period Notice:"}
          </strong>
          {isHi
            ? "कुंभ मेला अत्यधिक मांग वाली अवधि है। होटल और परिवहन बहुत तेजी से भर जाते हैं, इसलिए हम सर्वोत्तम कमरों और वाहनों की उपलब्धता सुनिश्चित करने के लिए शीघ्र बुकिंग की अनुशंसा करते हैं।"
            : "Kumbh Mela is a high-demand period. Hotels and transport fill up fast, so we recommend confirming your booking early to secure the best rooms and availability."}
        </div>
      </section>

      {/* Payment & Cancellation Policy */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border border-border bg-card">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          {isHi ? "भुगतान एवं रद्दीकरण नीति" : "Payment & Cancellation Policy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
          <div>
            <h3 className="font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
              {isHi ? "भुगतान की शर्तें:" : "Payment Terms:"}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {(isHi ? pkg.paymentPolicyHi || [] : pkg.paymentPolicyEn || []).map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
              {isHi ? "रद्दीकरण एवं रिफंड नीति:" : "Cancellation Policy:"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isHi ? pkg.cancellationPolicyHi : pkg.cancellationPolicyEn}
            </p>
            <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 text-[11px] text-muted-foreground">
              <strong>{isHi ? "भुगतान माध्यम: " : "Official Payment Modes: "}</strong>
              {isHi
                ? "बैंक ट्रांसफर (NEFT / RTGS) अथवा अधिकृत UPI। केवल रुद्राक्ष सफ़र के आधिकारिक बैंक खाते में ही भुगतान करें।"
                : "Payments accepted through Bank Transfer (NEFT / RTGS) or official UPI. Remit exclusively to verified Rudraksh Safar accounts."}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Protection & Disclaimer */}
      <section className="my-12 p-6 rounded-2xl border border-border/60 bg-muted/20 text-xs text-muted-foreground">
        <h2 className="text-base font-bold text-foreground mb-3 uppercase tracking-wider">
          {isHi ? "कानूनी संरक्षण एवं अस्वीकरण (Legal Protection & Disclaimer)" : "Legal Protection & Facilitator Disclaimer"}
        </h2>
        <ul className="space-y-2">
          {(isHi ? pkg.legalDisclaimerHi || [] : pkg.legalDisclaimerEn || []).map((disc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-muted-foreground font-bold">•</span>
              <span>{disc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Official PDF Download Box */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border-2 border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>{isHi ? "आधिकारिक प्रिंट-रेडी यात्रा दस्तावेज" : "Print-Ready Official Itinerary Document"}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-foreground">
            {isHi ? `${pkg.titleHi} का ब्रोशर डाउनलोड करें` : `Download ${pkg.titleEn} Official Brochure`}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
            {isHi
              ? "दैनिक यात्रा योजना, होटल विवरण, नियम, रद्दीकरण नीति एवं संपर्क विवरण युक्त अधिकृत पीडीएफ फाइल।"
              : "Includes detailed day-wise schedules, hotelBalaji/resort proposals, exclusions, inclusions, and operator helpline contacts."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={pkg.pdfCleanUrl || pkg.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:bg-primary/90 transition-transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{isHi ? "पीडीएफ डाउनलोड करें" : "Download PDF (Free)"}</span>
          </a>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border border-border bg-card">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              {isHi ? "तत्काल बुकिंग पूछताछ" : "Quick Booking Inquiry"}
            </span>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              {isHi ? "यात्रा परामर्श एवं विशेष समूह कोटेशन" : "Request Group Quote & Custom Itinerary"}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {isHi
                ? "विवरण सबमिट करें, हमारी हरिद्वार तीर्थ डेस्क 30 मिनट में लिखित कोटेशन के साथ संपर्क करेगी।"
                : "Submit your travel dates. Our Haridwar pilgrimage desk responds on WhatsApp within 30 minutes."}
            </p>
          </div>

          <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">{isHi ? "पूरा नाम" : "Full Name"}</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={isHi ? "उदा. रमेश शर्मा" : "e.g. Ramesh Sharma"}
                  className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">{isHi ? "मोबाइल नंबर (WhatsApp)" : "WhatsApp Phone Number"}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={isHi ? "10 अंकों का मोबाइल नंबर" : "10-digit mobile number"}
                  className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">{isHi ? "प्रस्थान शहर" : "Departure City"}</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl border border-border bg-background text-foreground"
                >
                  <option value="Delhi">Delhi / NCR</option>
                  <option value="Raipur">Raipur (रायपुर)</option>
                  <option value="Bhilai">Bhilai (भिलाई)</option>
                  <option value="Bilaspur">Bilaspur (बिलासपुर)</option>
                  <option value="Durg">Durg (दुर्ग)</option>
                  <option value="Rajnandgaon">Rajnandgaon (राजनांदगांव)</option>
                  <option value="Haridwar Direct">Haridwar Direct (सीधे हरिद्वार)</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">{isHi ? "सदस्यों की संख्या" : "Group Size"}</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">{isHi ? "वरिष्ठ परिजन शामिल हैं?" : "Seniors Included?"}</label>
                <select
                  value={formData.hasSeniors}
                  onChange={(e) => setFormData({ ...formData, hasSeniors: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl border border-border bg-background text-foreground"
                >
                  <option value="yes">{isHi ? "हाँ (Yes)" : "Yes"}</option>
                  <option value="no">{isHi ? "नहीं (No)" : "No"}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">{isHi ? "संभावित यात्रा तिथि / स्नान पर्व" : "Preferred Travel Date / Snan Festival"}</label>
              <input
                type="text"
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                placeholder={isHi ? "उदा. महाशिवरात्रि (6 मार्च 2027) अथवा कोई अन्य तिथि" : "e.g. Maha Shivratri (6 Mar 2027) or specific dates"}
                className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isHi ? "व्हाट्सएप पर तुरंत आधिकारिक कोटेशन लें" : "Receive Official Itinerary on WhatsApp"}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Silo Cross-Linking: Explore Other 4 Packages */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border border-border bg-muted/20">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
              {isHi ? "संबंधित कुंभ पैकेज" : "More Kumbh 2027 Itineraries"}
            </span>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              {isHi ? "अन्य हरिद्वार कुंभ 2027 पैकेज विकल्प" : "Explore Other Haridwar Kumbh 2027 Packages"}
            </h2>
          </div>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/packages" : "/kumbh-mela-2027/packages"}
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            <span>{isHi ? "सभी 5 पैकेज देखें" : "View All 5 Packages"}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siblingPackages.map((sPkg) => (
            <Link
              key={sPkg.id}
              to={isHi ? `/hi/kumbh-mela-2027/packages/${sPkg.slug}` : `/kumbh-mela-2027/packages/${sPkg.slug}`}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                  {sPkg.duration}
                </span>
                <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {isHi ? sPkg.titleHi : sPkg.titleEn}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {isHi ? sPkg.routeHi || sPkg.routeEn : sPkg.routeEn}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-bold text-primary">{sPkg.priceStarting}</span>
                <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Silo Navigation Hub Links */}
      <nav className="my-10 p-6 rounded-2xl border border-border bg-card text-xs md:text-sm">
        <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-4">
          {isHi ? "हरिद्वार अर्ध कुंभ 2027 संबंधित गाइड" : "Haridwar Kumbh 2027 Essential Silo Links"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/snan-dates" : "/kumbh-mela-2027/snan-dates"}
            className="p-3 rounded-xl bg-muted/30 hover:bg-muted text-center transition-colors font-medium text-foreground"
          >
            {isHi ? "10 शाही स्नान तिथियां" : "10 Snan Dates"}
          </Link>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/how-to-reach" : "/kumbh-mela-2027/how-to-reach"}
            className="p-3 rounded-xl bg-muted/30 hover:bg-muted text-center transition-colors font-medium text-foreground"
          >
            {isHi ? "हरिद्वार कैसे पहुंचें" : "How to Reach"}
          </Link>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/stay" : "/kumbh-mela-2027/stay"}
            className="p-3 rounded-xl bg-muted/30 hover:bg-muted text-center transition-colors font-medium text-foreground"
          >
            {isHi ? "आश्रम व लक्जरी टेंट" : "Hotels & Tents"}
          </Link>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027/senior-family-guide" : "/kumbh-mela-2027/senior-family-guide"}
            className="p-3 rounded-xl bg-muted/30 hover:bg-muted text-center transition-colors font-medium text-foreground"
          >
            {isHi ? "वरिष्ठ परिजन गाइड" : "Senior Devotee Guide"}
          </Link>
          <Link
            to={isHi ? "/hi/kumbh-mela-2027" : "/kumbh-mela-2027"}
            className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-center transition-colors font-semibold text-primary"
          >
            {isHi ? "मुख्य कुंभ हब" : "Main Kumbh Hub"}
          </Link>
        </div>
      </nav>
    </KumbhLayout>
  );
};

export default KumbhPackageDetailPage;
