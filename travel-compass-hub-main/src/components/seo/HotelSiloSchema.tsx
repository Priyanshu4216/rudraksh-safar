import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HOTEL_NAP, HotelFAQ } from '../../data/hotelSiloData';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ItemListEntry {
  name: string;
  url?: string;
  price?: number;
  priceCurrency?: string;
}

interface HotelSiloSchemaProps {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  breadcrumbs: BreadcrumbItem[];
  faqs?: HotelFAQ[];
  itemList?: {
    name: string;
    items: ItemListEntry[];
  };
  includeTravelAgency?: boolean;
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

export const HotelSiloSchema: React.FC<HotelSiloSchemaProps> = ({
  title,
  description,
  canonicalPath,
  noindex = false,
  breadcrumbs,
  faqs = [],
  itemList,
  includeTravelAgency = false,
}) => {
  const siteUrl = HOTEL_NAP.website;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const robotsValue = noindex ? 'noindex, follow' : 'index, follow';

  const graph: any[] = [];

  if (includeTravelAgency) {
    graph.push({
      '@type': 'TravelAgency',
      '@id': `${siteUrl}/#organization`,
      name: HOTEL_NAP.legalName,
      url: siteUrl,
      telephone: HOTEL_NAP.phoneFormatted,
      email: HOTEL_NAP.email,
      taxID: HOTEL_NAP.gstin,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'GE Road, In Front of Petrol Pump, Bhilai-3',
        addressLocality: 'Durg',
        addressRegion: 'Chhattisgarh',
        postalCode: '490021',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.facebook.com/rudrakshsafar',
        'https://www.instagram.com/rudrakshsafar',
        'https://www.youtube.com/@rudrakshsafar',
      ],
    });
  }

  if (breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${siteUrl}${b.url}`,
      })),
    });
  }

  if (itemList && itemList.items.length > 0) {
    graph.push({
      '@type': 'ItemList',
      name: itemList.name,
      numberOfItems: itemList.items.length,
      itemListElement: itemList.items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        ...(item.url ? { url: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}` } : {}),
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  // Ensure head tags are reliably mutated in both live SPA and Puppeteer prerender
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robotsValue });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', canonicalUrl, { hreflang: 'en-IN' });
  }, [title, description, canonicalUrl, robotsValue]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
        <meta name="robots" content={robotsValue} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
    </>
  );
};
