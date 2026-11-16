import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { KumbhLayout } from '@/components/kumbh/KumbhLayout';
import { KumbhArticleSchema } from '@/components/kumbh/seo/KumbhArticleSchema';
import { KUMBH_PACKAGES } from '@/data/kumbh/packages';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { CHHATTISGARH_CITIES } from '@/data/kumbh/cities';
import { Tent, Check, X, ShieldAlert, MessageCircle, Phone, ArrowRight, Clock, Users } from 'lucide-react';

interface PackagesPageProps {
  lang?: 'en' | 'hi';
}

const PackagesPage: React.FC<PackagesPageProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';

  const breadcrumbs = [
    { name: isHi ? 'होम' : 'Home', url: '/' },
    { name: isHi ? 'हरिद्वार कुंभ 2027' : 'Haridwar Kumbh 2027', url: isHi ? '/hi/kumbh-mela-2027' : '/kumbh-mela-2027' },
    { name: isHi ? 'यात्रा पैकेज' : 'Packages & Camps', url: isHi ? '/hi/kumbh-mela-2027/packages' : '/kumbh-mela-2027/packages' }
  ];

  const canonicalUrl = isHi
    ? 'https://rudrakshsafar.com/hi/kumbh-mela-2027/packages'
    : 'https://rudrakshsafar.com/kumbh-mela-2027/packages';

  // State for inquiry form
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Raipur',
    groupSize: '4',
    preferredDate: '',
    hasSeniors: 'yes',
    budget: 'Standard Ashram/Hotel'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Rudraksh Safar, I am inquiring about Haridwar Kumbh 2027 Packages. Name: ${formData.fullName}, Phone: ${formData.phone}, Departure City: ${formData.city}, Group Size: ${formData.groupSize}, Preferred Date: ${formData.preferredDate || 'Flexible'}, Seniors Included: ${formData.hasSeniors}, Package Tier: ${formData.budget}. Please share custom itinerary and price breakdown.`;
    const whatsappUrl = `https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <KumbhLayout breadcrumbs={breadcrumbs} lang={lang}>
      <Helmet>
        <title>
          {isHi
            ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज: लक्जरी टेंट, आश्रम प्रवास एवं परिवार पैकेज"
            : "Haridwar Kumbh 2027 Tour Packages: Luxury Tents & Ashram Stays"}
        </title>
        <meta
          name="description"
          content={
            isHi
              ? "हरिद्वार कुंभ मेला 2027 टूर पैकेज। लक्जरी स्विस टेंट, आश्रम प्रवास, वरिष्ठ नागरिक विशेष व्यवस्था, सात्विक भोजन एवं पारदर्शी रद्दीकरण नियम।"
              : "Verified Haridwar Ardh Kumbh 2027 tour packages. Luxury Swiss Cottage camps, verified ashram stays, sattvic food, and senior citizen pilgrimage care."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://rudrakshsafar.com/kumbh-mela-2027/packages" />
        <link rel="alternate" hrefLang="hi" href="https://rudrakshsafar.com/hi/kumbh-mela-2027/packages" />
        <link rel="alternate" hrefLang="x-default" href="https://rudrakshsafar.com/kumbh-mela-2027/packages" />
      </Helmet>

      <KumbhArticleSchema
        headline={isHi ? "हरिद्वार कुंभ 2027 टूर पैकेज एवं टेंट" : "Haridwar Kumbh 2027 Tour Packages and Camps"}
        description="Verified pilgrimage tour packages and tent stays for Haridwar Ardh Kumbh 2027."
        url={canonicalUrl}
        lang={lang}
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          {isHi ? "हरिद्वार कुंभ मेला 2027: टूर पैकेज एवं लक्जरी टेंट प्रवास" : "Haridwar Kumbh 2027 Tour Packages: Luxury Camps & Ashram Stays"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
          {isHi
            ? "पारदर्शी नियम, शुद्ध सात्विक भोजन, और हरिद्वार में सत्यापित आवास व्यवस्था। जानिए हमारे विभिन्न पैकेज विकल्प और अपनी इच्छानुसार बुकिंग कराएं।"
            : "Ethical pilgrimage management with verified riverside camps, certified ashram stays, sattvic meals, and dedicated senior devotee assistance."}
        </p>
      </header>

      {/* Compliance Advisory */}
      <aside className="my-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs text-amber-950 dark:text-amber-200">
        <strong className="font-semibold block mb-1">
          {isHi ? "महत्वपूर्ण उपभोक्ता सूचना:" : "Mandatory Consumer Advisory:"}
        </strong>
        {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}
      </aside>

      {/* Package Tiers Grid */}
      <div className="space-y-8 my-10">
        {KUMBH_PACKAGES.map((pkg) => (
          <article key={pkg.id} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  {pkg.duration}
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  {isHi ? pkg.titleHi : pkg.titleEn}
                </h2>
              </div>

              <div className="text-right">
                <span className="text-xs text-muted-foreground block">{isHi ? "मूल्य सीमा" : "Price Range"}:</span>
                <span className="text-sm font-semibold text-primary">
                  {isHi ? "पूछताछ पर उपलब्ध (सत्यापन अधीन)" : "On Request (Official Quote)"}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
              {isHi ? pkg.idealForHi : pkg.idealForEn}
            </p>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-muted/20 border border-border/60 text-xs">
              <div>
                <h3 className="font-bold text-foreground mb-3 uppercase tracking-wider flex items-center gap-1.5 text-xs">
                  <Check className="w-4 h-4 text-green-600" />
                  {isHi ? "पैकेज में क्या शामिल है:" : "What is Included:"}
                </h3>
                <ul className="space-y-2">
                  {(isHi ? pkg.inclusionsHi : pkg.inclusionsEn).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3 uppercase tracking-wider flex items-center gap-1.5 text-xs">
                  <X className="w-4 h-4 text-rose-600" />
                  {isHi ? "पैकेज में क्या शामिल नहीं है:" : "What is Excluded:"}
                </h3>
                <ul className="space-y-2">
                  {(isHi ? pkg.exclusionsHi : pkg.exclusionsEn).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <span className="text-[11px] text-muted-foreground italic">
                {isHi ? "रद्दीकरण नीति: लिखित वाउचर में स्पष्ट उल्लेखित" : "Cancellation Terms: Provided in written voucher prior to deposit."}
              </span>

              <a
                href={`https://wa.me/${KUMBH_SITE.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Rudraksh Safar, I am interested in the ${pkg.titleEn} (${pkg.duration}). Please send details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition-transform active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isHi ? "व्हाट्सएप पर पैकेज विवरण लें" : "Enquire on WhatsApp"}</span>
              </a>
            </div>
          </article>
        ))}
      </div>

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
                  <option value="Raipur">Raipur (रायपुर)</option>
                  <option value="Bhilai">Bhilai (भिलाई)</option>
                  <option value="Bilaspur">Bilaspur (बिलासपुर)</option>
                  <option value="Durg">Durg (दुर्ग)</option>
                  <option value="Rajnandgaon">Rajnandgaon (राजनांदगांव)</option>
                  <option value="Delhi">Delhi NCR</option>
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
              <label className="block font-medium mb-1">{isHi ? "पसंदीदा पैकेज श्रेणी" : "Preferred Package Tier"}</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-border bg-background text-foreground"
              >
                <option value="Devotional Snan Stay (Ashram)">Devotional Snan Stay (Ashram/Hotel)</option>
                <option value="Sacred Ganges Luxury Tented Camp">Sacred Ganges Luxury Tented Camp</option>
                <option value="Family & Senior Devotee Care">Family & Senior Devotee Care</option>
                <option value="Chhattisgarh Pilgrims Group Tour">Chhattisgarh Pilgrims Group Tour</option>
              </select>
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
    </KumbhLayout>
  );
};

export default PackagesPage;
