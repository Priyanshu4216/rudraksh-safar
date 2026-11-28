import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_KUMBH_CITIES } from '@/data/kumbh/cities';

interface KumbhCityLinksSectionProps {
  lang?: 'en' | 'hi';
  currentCitySlug?: string;
}

export const KumbhCityLinksSection: React.FC<KumbhCityLinksSectionProps> = ({
  lang = 'en',
  currentCitySlug
}) => {
  const isHi = lang === 'hi';
  const [isOpen, setIsOpen] = useState(true);

  const cities = ALL_KUMBH_CITIES;

  return (
    <section
      className="my-10"
      aria-label={isHi ? "आपके शहर से कुंभ मेला 2027 पैकेज" : "Kumbh Mela 2027 packages from your city"}
    >
      <h2 className="sr-only">
        {isHi ? "भारत के प्रमुख 100 शहरों से कुंभ मेला 2027 टूर पैकेज" : "Haridwar Kumbh Mela 2027 Tour Packages from Top 100 Indian Cities"}
      </h2>
      {/* Collapsible Header Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/15 text-orange-700 dark:text-orange-400 font-bold text-xs sm:text-sm transition-colors shadow-xs"
      >
        <span>
          {isHi
            ? `आपके शहर से कुंभ मेला 2027 पैकेज (${cities.length})`
            : `Kumbh Mela 2027 packages from your city (${cities.length})`}
        </span>
        <span className="text-base leading-none font-bold">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Expandable 100 Cities Pill Grid */}
      {isOpen && (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {cities.map((city) => {
            const toUrl = isHi
              ? `/hi/kumbh-mela-2027/packages/${city.slug}`
              : `/kumbh-mela-2027/packages/${city.slug}`;
            const isActive = currentCitySlug === city.slug;

            return (
              <Link
                key={city.slug}
                to={toUrl}
                title={isHi ? `${city.nameHi} से हरिद्वार कुंभ मेला 2027 टूर पैकेज - ₹4,199 से शुरू` : `Kumbh Mela 2027 Tour Package from ${city.nameEn} - Starting ₹4,199`}
                className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'border-orange-600 bg-orange-600 text-white shadow-sm'
                    : 'border-border/90 bg-card text-foreground/90 hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-600 dark:hover:text-orange-400 shadow-xs'
                }`}
              >
                {isHi ? `${city.nameHi} से` : `From ${city.nameEn}`}
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
