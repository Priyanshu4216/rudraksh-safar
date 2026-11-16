import React from 'react';
import { Helmet } from 'react-helmet-async';
import { KUMBH_SITE } from '@/data/kumbh/site';

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

interface KumbhBreadcrumbSchemaProps {
  items: BreadcrumbCrumb[];
}

export const KumbhBreadcrumbSchema: React.FC<KumbhBreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${KUMBH_SITE.canonicalBase}${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface KumbhArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  lang?: 'en' | 'hi';
}

export const KumbhArticleSchema: React.FC<KumbhArticleSchemaProps> = ({
  headline,
  description,
  url,
  datePublished = '2026-11-15',
  dateModified = '2026-11-15',
  lang = 'en'
}) => {
  const isHi = lang === 'hi';
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url.startsWith('http') ? url : `${KUMBH_SITE.canonicalBase}${url}`,
    "inLanguage": isHi ? "hi" : "en",
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": isHi ? KUMBH_SITE.author.nameHi : KUMBH_SITE.author.name,
      "url": KUMBH_SITE.canonicalBase
    },
    "publisher": {
      "@type": "Organization",
      "name": KUMBH_SITE.brandName,
      "url": KUMBH_SITE.canonicalBase,
      "logo": {
        "@type": "ImageObject",
        "url": `${KUMBH_SITE.canonicalBase}/assets/dark_mode_web_logo_crop-removebg-preview.png`
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
