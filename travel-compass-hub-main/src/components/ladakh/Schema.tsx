import { Helmet } from 'react-helmet-async';

export const Schema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Ladakh Opening Date 2026: Official Road Status & Best Time to Visit",
        "description": "Comprehensive guide on Leh Ladakh opening dates for 2026, including Manali-Leh and Srinagar-Leh highway statuses, predictions, and travel tips.",
        "author": {
          "@type": "Organization",
          "name": "Rudraksh Safar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Rudraksh Safar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.rudrakshsafar.com/images/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.rudrakshsafar.com/ladakh-opening-date-2026"
        },
        "dateModified": "2026-06-09T00:00:00+05:30",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.rudrakshsafar.com/images/ladakh-opening-date-2026-hero-snow-walls.jpg"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When does the Leh Ladakh road open in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Srinagar-Leh road is expected to open by late March 2026, while the Manali-Leh road usually opens by late April to early May 2026."
            }
          },
          {
            "@type": "Question",
            "name": "Is Ladakh open in May 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, by May, both major highways and internal routes to Pangong and Nubra are generally open to tourists."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.rudrakshsafar.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ladakh Guide",
            "item": "https://www.rudrakshsafar.com/ladakh-tours"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ladakh Opening Date 2026"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.rudrakshsafar.com/ladakh-opening-date-2026",
        "url": "https://www.rudrakshsafar.com/ladakh-opening-date-2026",
        "name": "Ladakh Opening Date 2026: Official Road Status & Best Time to Visit",
        "description": "Comprehensive guide on Leh Ladakh opening dates for 2026, including Manali-Leh and Srinagar-Leh highway statuses, predictions, and travel tips."
      },
      {
        "@type": "Organization",
        "@id": "https://www.rudrakshsafar.com/#organization",
        "name": "Rudraksh Safar",
        "url": "https://www.rudrakshsafar.com/",
        "logo": "https://www.rudrakshsafar.com/images/logo.png"
      }
    ]
  };

  return (
    <Helmet>
      <title>Ladakh Opening Date 2026: Official Road Status & Best Time to Visit</title>
      <meta name="description" content="Planning a trip to Leh Ladakh in 2026? Get the official Ladakh opening dates, Manali-Leh & Srinagar-Leh highway road status, and expert travel advice." />
      <link rel="canonical" href="https://www.rudrakshsafar.com/ladakh-opening-date-2026" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Ladakh Opening Date 2026: Official Road Status & Best Time to Visit" />
      <meta property="og:description" content="The ultimate guide to Leh Ladakh road opening dates for 2026. Includes historical data, BRO updates, weather predictions, and expert travel tips." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.rudrakshsafar.com/ladakh-opening-date-2026" />
      <meta property="og:image" content="https://www.rudrakshsafar.com/images/ladakh-opening-date-2026-hero-snow-walls.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="🛣️ Ladakh Opening Date 2026: Official Road Status & Updates" />
      <meta name="twitter:description" content="Will the Manali-Leh or Srinagar-Leh highway open early in 2026? Check the latest road status, predictions, and travel tips from Rudraksh Safar! #Ladakh2026" />
      <meta name="twitter:image" content="https://www.rudrakshsafar.com/images/ladakh-opening-date-2026-hero-snow-walls.jpg" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
