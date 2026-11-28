import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhCityLinksSection } from '@/components/kumbh/KumbhCityLinksSection';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KUMBH_PACKAGES } from '@/data/kumbh/packages';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { CHHATTISGARH_CITIES } from '@/data/kumbh/cities';
import {
  Calendar,
  MapPin,
  Hotel,
  Utensils,
  Download,
  MessageCircle,
  Heart,
  Sparkles,
  ShieldAlert,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface PackagesPageProps {
  lang?: 'en' | 'hi';
}

const PackagesPage: React.FC<PackagesPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';
  const navigate = useNavigate();

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'कुंभ यात्रा पैकेज' : 'Tour Packages', url: isHi ? '/hi/kumbh-mela-2027/packages' : '/kumbh-mela-2027/packages' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/packages'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/packages';

  // State for saved favorites (UI interaction)
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // State for inquiry form
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Delhi',
    groupSize: '4',
    preferredPackage: 'Haridwar Kumbh Darshan (1N / 2D)',
    preferredDate: '',
    hasSeniors: 'yes'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = isHi
      ? `नमस्ते रुद्राक्ष सफ़र, मैं हरिद्वार कुंभ मेला 2027 पैकेज की जानकारी हेतु संपर्क कर रहा हूँ।\nनाम: ${formData.fullName}\nमोबाइल: ${formData.phone}\nप्रस्थान शहर: ${formData.city}\nसदस्य: ${formData.groupSize}\nपसंदीदा पैकेज: ${formData.preferredPackage}\nयात्रा तिथि: ${formData.preferredDate || 'लचीली'}\nबुजुर्ग शामिल: ${formData.hasSeniors}। कृपया विस्तृत कोटेशन भेजें।`
      : `Hi Rudraksh Safar, I am inquiring about Haridwar Kumbh 2027 Packages.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nDeparture City: ${formData.city}\nGroup Size: ${formData.groupSize}\nPreferred Package: ${formData.preferredPackage}\nTravel Date: ${formData.preferredDate || 'Flexible'}\nSeniors Included: ${formData.hasSeniors}.\nPlease share custom itinerary and price breakdown.`;

    const whatsappUrl = `https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज: 1N/2D से 4N/5D आधिकारिक यात्रा कार्यक्रम | रुद्राक्ष सफ़र"
            : "Haridwar Kumbh Mela 2027 Tour Packages: 1N/2D to 4N/5D Itineraries | Rudraksh Safar"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार कुंभ मेला 2027 के 9 सत्यापित यात्रा पैकेज: 1N/2D कुंभ दर्शन ₹4,199 से, सीनियर सिटीजन स्पेशल, ऋषिकेश, नीम करोली कैंची धाम नैनीताल, मसूरी, देवप्रयाग एवं नीलकंठ महादेव। विस्तृत कार्यक्रम व पीडीएफ।"
              : "Explore 9 verified Haridwar Kumbh Mela 2027 tour packages: 1N/2D starting ₹4,199, Senior Citizen Special, Rishikesh, Neem Karoli Kainchi Dham Nainital, Mussoorie, Devprayag & Neelkanth Mahadev. PDF itineraries & booking."
          }
        />
        <meta
          name="keywords"
          content="Haridwar Kumbh Mela 2027 tour packages, Kumbh 2027 packages, Haridwar Kumbh Darshan 1N 2D, Haridwar Kumbh Mela 2N 3D, Kumbh Devprayag package, Kumbh Mussoorie package, Kumbh Neelkanth Mahadev tour, Har Ki Pauri Ganga Aarti tour, holy Ganga snan package, Rudraksh Safar Kumbh packages"
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/packages" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/packages" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/packages" />
        <meta property="og:title" content={isHi ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज | रुद्राक्ष सफ़र" : "Haridwar Kumbh Mela 2027 Tour Packages | Rudraksh Safar"} />
        <meta
          property="og:description"
          content={
            isHi
              ? "हरिद्वार कुंभ 2027 के 9 विशेष टूर पैकेज। पवित्र गंगा स्नान, हर की पौड़ी गंगा आरती, नीम करोली कैंची धाम, ऋषिकेश व सात्विक भोजन व्यवस्था।"
              : "9 official Haridwar Kumbh 2027 pilgrimage packages: Senior citizen, Rishikesh, Neem Karoli Kainchi Dham, Devprayag & Mussoorie with holy Ganga snan."
          }
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज एवं यात्रा कार्यक्रम" : "Haridwar Kumbh Mela 2027 Tour Packages & Itineraries"}
        description="Official verified pilgrimage tour packages for Haridwar Ardh Kumbh 2027 featuring 1N/2D to 4N/5D itineraries with Rishikesh, Neem Karoli Kainchi Dham Nainital, Mussoorie, Devprayag, and Neelkanth Mahadev."
        url={canonicalUrl}
        lang={lang}
      />

      {/* Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isHi ? "आधिकारिक कुंभ 2027 यात्रा कार्यक्रम" : "Official Kumbh 2027 Itineraries"}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज" : "Haridwar Kumbh Mela 2027 Tour Packages"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "माँ गंगा के पावन सानिध्य में आस्था की डुबकी लगाएं। हमने श्रद्धालुओं की सुविधा अनुसार 1 रात्रि / 2 दिन से लेकर 4 रात्रि / 5 दिन तक के 9 विशेष यात्रा पैकेज तैयार किए हैं, जिनमें होटल प्रवास, सात्विक भोजन, हर की पौड़ी गंगा आरती और गंगा स्नान समन्वित हैं।"
            : "Immerse in the sacred waters of Mother Ganga during Haridwar Ardh Kumbh 2027. We offer 9 meticulously structured packages ranging from 1 Night / 2 Days to 4 Nights / 5 Days, featuring Hotel Balaji Haridwar, MAP sattvic meals, Har Ki Pauri Ganga Aarti, and holy Ganga Snan."}
        </p>
      </header>

      {/* Compliance Advisory */}
      <aside className="my-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-950 dark:text-amber-200">
        <strong className="font-semibold block mb-1">
          {isHi ? "महत्वपूर्ण उपभोक्ता एवं तीर्थ सूचना:" : "Mandatory Consumer & Pilgrim Advisory:"}
        </strong>
        {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
      </aside>

      {/* Modern Package Cards Grid (Inspired by Modern Travel UI) */}
      <section className="my-10" aria-label="Kumbh Tour Packages Cards">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KUMBH_PACKAGES.map((pkg) => {
            const detailUrl = isHi
              ? `/hi/kumbh-mela-2027/packages/${pkg.slug}`
              : `/kumbh-mela-2027/packages/${pkg.slug}`;
            const isFav = !!favorites[pkg.id];

            return (
              <article
                key={pkg.id}
                onClick={() => navigate(detailUrl)}
                className="cursor-pointer rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Top Image Banner */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-muted">
                  <img
                    src={pkg.imageUrl}
                    alt={isHi ? pkg.titleHi : pkg.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="pointer-events-auto px-3.5 py-1 rounded-full bg-white/95 dark:bg-card/95 text-orange-600 dark:text-orange-400 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur">
                      {isHi ? pkg.badgeTextHi || "प्रमाणित 2027" : pkg.badgeTextEn || "CERTIFIED 2027"}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(pkg.id); }}
                      aria-label="Wishlist"
                      className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur shadow flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-muted-foreground hover:text-rose-500"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-rose-500 text-rose-500' : 'fill-none'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Title & Route Overlaid at Bottom of Image */}
                  <div className="absolute bottom-4 inset-x-4">
                    <h3 className="font-serif font-bold text-white text-lg md:text-xl leading-snug drop-shadow-sm mb-1.5 line-clamp-2">
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
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Duration row & Pilgrimage Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span>{pkg.duration}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-600/20 text-[10px] font-bold uppercase tracking-wider">
                        {isHi ? pkg.categoryTagHi || "पावन तीर्थ" : pkg.categoryTagEn || "TAILOR-MADE"}
                      </span>
                    </div>

                    {/* Hotel & Meals Pills */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/50 mb-4">
                      <div className="truncate flex items-center gap-1" title={pkg.hotelProposedEn}>
                        <Hotel className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{isHi ? pkg.hotelProposedHi : pkg.hotelProposedEn}</span>
                      </div>
                      <div className="truncate flex items-center gap-1" title={pkg.mealsEn}>
                        <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{isHi ? pkg.mealsHi : pkg.mealsEn}</span>
                      </div>
                    </div>

                    {/* Dashed divider */}
                    <div className="border-b border-dashed border-border/80 my-3" />

                    {/* Price & View Details Row */}
                    <div className="flex items-end justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[11px] text-muted-foreground block font-medium">
                          {isHi ? "शुरुआती कीमत (Starting from)" : "Starting from"}
                        </span>
                        <p className="text-2xl font-bold font-serif text-foreground leading-none mt-1">
                          {pkg.priceStarting}
                        </p>
                      </div>

                      <Link
                        to={detailUrl}
                        className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold text-xs transition-colors shrink-0"
                      >
                        {isHi ? "विवरण देखें" : "View details"}
                      </Link>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="space-y-2.5 pt-2">
                    {/* Primary Book Now Button */}
                    <Link
                      to={detailUrl}
                      className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isHi ? "अभी बुक करें / पूरा कार्यक्रम" : "Book Now"}</span>
                    </Link>

                    {/* Two-Column Action Bar: Download PDF & Talk to Executive */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={pkg.pdfCleanUrl || pkg.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="py-2.5 px-2 rounded-xl bg-muted/60 hover:bg-muted text-foreground font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-border/60"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isHi ? "डाउनलोड PDF" : "Download PDF"}</span>
                      </a>

                      <a
                        href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(
                          `Hi Rudraksh Safar, I want to talk to an executive regarding ${pkg.titleEn} (${pkg.duration}). Please connect with me.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="py-2.5 px-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 border border-emerald-500/20"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{isHi ? "सलाहकार" : "Talk to Executive"}</span>
                      </a>
                    </div>

                    {/* Subtle Footer Note */}
                    <p className="text-[10px] text-center text-muted-foreground/80 mt-1">
                      {isHi ? "अंतिम समावेशन एवं दरें पूछताछ के उपरांत पुष्ट की जाती हैं।" : "Final inclusions and price are confirmed after enquiry."}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Chhattisgarh City Silo Showcase */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border-2 border-orange-500/30 bg-orange-500/5">
        <div className="space-y-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider">
            {isHi ? "छत्तीसगढ़ तीर्थ प्रस्थान" : "State Pilgrimage Silo"}
          </span>
          <h2 className="text-2xl font-serif font-bold text-foreground">
            {isHi ? "छत्तीसगढ़ के शहरों से हरिद्वार कुंभ पैकेज" : "Haridwar Kumbh Tour Packages from Chhattisgarh"}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {isHi
              ? "रायपुर, भिलाई, बिलासपुर, दुर्ग एवं राजनांदगांव के श्रद्धालुओं के लिए विशेष प्रस्थान योजनाएं एवं स्थानीय भाषा सहायता।"
              : "Discover city-specific departure schedules, rail timings, and pickup points across Chhattisgarh:"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {CHHATTISGARH_CITIES.map((city) => (
            <Link
              key={city.slug}
              to={isHi ? `/hi/kumbh-mela-2027/packages/${city.slug}` : `/kumbh-mela-2027/packages/${city.slug}`}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 text-center transition-all group"
            >
              <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {isHi ? city.nameHi : city.nameEn}
              </h3>
              <span className="text-[11px] text-muted-foreground block mt-1">
                {isHi ? "पैकेज देखें →" : "View Package →"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp First Lead Generation Form */}
      <section className="my-12 p-6 md:p-8 rounded-2xl border border-border bg-card">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            {isHi ? "कुंभ यात्रा पूछताछ एवं निशुल्क परामर्श" : "Request Custom Itinerary & Free Consultation"}
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-6">
            {isHi
              ? `अपनी यात्रा तिथि और समूह का आकार बताएं। हमारी हरिद्वार टीम ${KUMBH_SITE.responseCommitmentMinutes} मिनट में विवरण भेजेगी।`
              : `Share your dates and group size. Our pilgrimage desk replies within ${KUMBH_SITE.responseCommitmentMinutes} minutes.`}
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">{isHi ? "पूरा नाम" : "Full Name"}</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                  placeholder={isHi ? "आपका नाम" : "Enter your name"}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">{isHi ? "मोबाइल नंबर (WhatsApp)" : "Mobile / WhatsApp"}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                  placeholder={isHi ? "10 अंकों का मोबाइल नंबर" : "10-digit phone number"}
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
                  <option value="Delhi">Delhi NCR</option>
                  <option value="Raipur">Raipur (रायपुर)</option>
                  <option value="Bhilai">Bhilai (भिलाई)</option>
                  <option value="Bilaspur">Bilaspur (बिलासपुर)</option>
                  <option value="Durg">Durg (दुर्ग)</option>
                  <option value="Rajnandgaon">Rajnandgaon (राजनांदगांव)</option>
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
                <label className="block font-medium mb-1">{isHi ? "बुजुर्ग परिजन शामिल हैं?" : "Senior Citizens Included?"}</label>
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
              <label className="block font-medium mb-1">{isHi ? "पसंदीदा पैकेज" : "Preferred Package"}</label>
              <select
                value={formData.preferredPackage}
                onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-border bg-background text-foreground"
              >
                {KUMBH_PACKAGES.map((p) => (
                  <option key={p.id} value={p.titleEn}>
                    {p.titleEn} ({p.duration})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">{isHi ? "यात्रा तिथि" : "Travel Date / Snan Festival"}</label>
              <input
                type="text"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-foreground"
                placeholder={isHi ? "उदा. महाशिवरात्रि अथवा अन्य तिथि" : "e.g. Maha Shivratri or flexible dates"}
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isHi ? "व्हाट्सएप पर तत्काल विवरण प्राप्त करें" : "Receive Instant Quote on WhatsApp"}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Top 100 Cities Regional SEO Silo */}
      <KumbhCityLinksSection lang={lang} />
    </KumbhLayout>
  );
};

export default PackagesPage;
