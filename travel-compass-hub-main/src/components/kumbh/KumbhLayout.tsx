import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbCrumb, KumbhBreadcrumbSchema } from './seo/KumbhBreadcrumbSchema';
import { KumbhStickyMobileCTA } from './KumbhStickyMobileCTA';
import { KUMBH_DISCLAIMERS } from '@/data/kumbh/disclaimers';
import { OFFICIAL_SOURCES, HARIDWAR_KUMBH_FACTS } from '@/data/kumbh/kumbh2027';
import { KUMBH_SITE } from '@/data/kumbh/site';
import { Calendar, CheckCircle2, ChevronRight, Globe, ShieldAlert, BookOpen, ExternalLink } from 'lucide-react';

interface KumbhLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbCrumb[];
  lang?: 'en' | 'hi';
  city?: string;
  preferredSnan?: string;
}

export const KumbhLayout: React.FC<KumbhLayoutProps> = ({
  children,
  breadcrumbs,
  lang = 'en',
  city,
  preferredSnan
}) => {
  const location = useLocation();
  const isHi = lang === 'hi';

  // Toggle path between /hi/... and English
  const getLanguageToggleUrl = (): string => {
    if (isHi) {
      return location.pathname.replace(/^\/hi/, '') || '/';
    } else {
      return `/hi${location.pathname}`;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-950 dark:selection:text-orange-200">
      <Navbar />

      {/* Structured Breadcrumbs Schema */}
      <KumbhBreadcrumbSchema items={breadcrumbs} />

      <main className="flex-1 pt-20 md:pt-24 pb-20 md:pb-12">
        {/* Top Operational Status & Language Switcher Bar */}
        <section className="bg-muted/40 border-b border-border/60 py-2.5 text-xs md:text-sm">
          <div className="container mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                {isHi ? "सत्यापित सूचना" : "Verified Guide"}:
              </span>
              <span>
                {isHi
                  ? `अंतिम सत्यापन: 15 नवंबर 2026 · स्रोत: उत्तराखंड मेला प्रशासन`
                  : `Last verified: 15 Nov 2026 · Source: Uttarakhand Mela Administration`}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to={getLanguageToggleUrl()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border hover:border-primary/50 text-foreground font-medium transition-colors text-xs"
                title={isHi ? "Switch to English" : "हिंदी में पढ़ें"}
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>{isHi ? "English Version" : "हिंदी में पढ़ें"}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Breadcrumb Navigation */}
        <nav
          className="container mx-auto px-4 sm:px-6 py-3 border-b border-border/30 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap"
          aria-label="Breadcrumbs"
        >
          <ol className="flex items-center gap-1.5">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.url} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3 h-3 text-muted-foreground/60" />}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="font-semibold text-foreground truncate max-w-[240px] md:max-w-none" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link to={crumb.url} className="hover:text-primary transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Mandatory Mela Administration Compliance Disclaimer Banner */}
        <aside className="container mx-auto px-4 sm:px-6 mt-4" aria-label="Official Compliance Disclaimer">
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold">{isHi ? "आधिकारिक सूचना: " : "Official Advisory: "}</strong>
              {isHi ? KUMBH_DISCLAIMERS.melaAccessHi : KUMBH_DISCLAIMERS.melaAccess}{" "}
              {isHi ? KUMBH_DISCLAIMERS.independentPublisherHi : KUMBH_DISCLAIMERS.independentPublisher}
            </p>
          </div>
        </aside>

        {/* Main Page Content */}
        <div className="container mx-auto px-4 sm:px-6 mt-6 md:mt-8">
          {children}
        </div>

        {/* Author, Reviewer & Sourced Citation Block */}
        <section className="container mx-auto px-4 sm:px-6 mt-16 pt-8 border-t border-border/70 text-xs text-muted-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1.5 p-4 rounded-xl bg-muted/20 border border-border/40">
              <h4 className="font-semibold text-foreground flex items-center gap-1.5 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                {isHi ? "प्रकाशन एवं समीक्षा" : "Editorial & Review Team"}
              </h4>
              <p>
                <strong>{isHi ? "प्रकाशक" : "Publisher"}:</strong> {KUMBH_SITE.brandName}
              </p>
              <p>
                <strong>{isHi ? "संपादकीय डेस्क" : "Editorial Desk"}:</strong> {isHi ? KUMBH_SITE.author.nameHi : KUMBH_SITE.author.name}
              </p>
              <p>
                <strong>{isHi ? "धार्मिक परामर्श" : "Tradition Verification"}:</strong> {isHi ? KUMBH_SITE.reviewer.nameHi : KUMBH_SITE.reviewer.name}
              </p>
              <p className="text-[11px] text-muted-foreground/80">
                {isHi ? "संशोधन तिथि: 15 नवंबर 2026" : "Content Last Updated: 15 November 2026"}
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-muted/20 border border-border/40 md:col-span-1 lg:col-span-2">
              <h4 className="font-semibold text-foreground flex items-center gap-1.5 text-sm">
                <ExternalLink className="w-4 h-4 text-primary" />
                {isHi ? "सत्यापित आधिकारिक स्रोत" : "Official Citations & Sources"}
              </h4>
              <ul className="space-y-1.5">
                {OFFICIAL_SOURCES.map((src, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">{src.name}</strong> ({isHi ? "पहुंच तिथि" : "Accessed"}: {src.accessedOn}) — {src.details}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Sticky WhatsApp / Call Bar */}
      <KumbhStickyMobileCTA lang={lang} city={city} preferredSnan={preferredSnan} />
    </div>
  );
};
