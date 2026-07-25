import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BilaspurSchemaProps {
  title: string;
  description: string;
  canonicalUrl: string;
  faqs?: { question: string; answer: string }[];
  price?: number;
  packageType?: 'domestic' | 'international';
}

export const BilaspurSchema: React.FC<BilaspurSchemaProps> = ({
  title,
  description,
  canonicalUrl,
  faqs,
  price,
  packageType
}) => {
  // Travel Agency Schema - Hyperlocal to Bilaspur
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar",
    "image": "https://rudrakshsafar.com/logo.png",
    "@id": "https://rudrakshsafar.com/#travelagency",
    "url": "https://rudrakshsafar.com/",
    "telephone": "+91-9203650311",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vyapar Vihar",
      "addressLocality": "Bilaspur",
      "addressRegion": "Chhattisgarh",
      "postalCode": "495001",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Bilaspur" },
      { "@type": "City", "name": "Raipur" },
      { "@type": "City", "name": "Bhilai" },
      { "@type": "City", "name": "Durg" }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.0797,
      "longitude": 82.1409
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  // TouristTrip Schema if price is provided
  const touristTripSchema = price ? {
    "@context": "https://schema.org/",
    "@type": "TouristTrip",
    "name": "Bilaspur Tour Packages",
    "image": "https://rudrakshsafar.com/logo.png",
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Rudraksh Safar"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": price,
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "offeredBy": {
        "@type": "TravelAgency",
        "name": "Rudraksh Safar"
      }
    }
  } : null;

  // FAQ Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rudrakshsafar.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bilaspur Hub",
        "item": "https://rudrakshsafar.com/bilaspur"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(travelAgencySchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
