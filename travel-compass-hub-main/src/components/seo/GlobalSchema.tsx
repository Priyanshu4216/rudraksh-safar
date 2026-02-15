import { Helmet } from 'react-helmet-async';

const GlobalSchema = () => {
    const siteUrl = 'https://rudrakshsafar.com';
    const logoUrl = `${siteUrl}/logo-dark.png`;

    const graph = [
        // 1. Organization Schema (The Brand)
        {
            "@type": "TravelAgency",
            "@id": `${siteUrl}/#organization`,
            "name": "Rudraksh Safar",
            "url": siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": logoUrl,
                "width": 512,
                "height": 512
            },
            "image": {
                "@type": "ImageObject",
                "url": logoUrl
            },
            "telephone": "+919406182174",
            "email": "rudrakshsafar@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 182/2, GE Road, Bhilai 3",
                "addressLocality": "Bhilai",
                "addressRegion": "Chhattisgarh",
                "postalCode": "490021",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.2094",
                "longitude": "81.4285"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "21:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/rudrakshsafar",
                "https://www.instagram.com/rudrakshsafar",
                "https://www.youtube.com/@rudrakshsafar"
            ],
            "areaServed": [
                { "@type": "AdministrativeArea", "name": "Bhilai" },
                { "@type": "AdministrativeArea", "name": "Durg" },
                { "@type": "AdministrativeArea", "name": "Raipur" },
                { "@type": "AdministrativeArea", "name": "Chhattisgarh" },
                { "@type": "Country", "name": "India" }
            ],
            "priceRange": "₹₹",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919406182174",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            }
        },

        // 2. WebSite Schema (For Sitelinks Search Box)
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": "Rudraksh Safar",
            "description": "Best Travel Agent in Bhilai & Raipur for Chardham, Dubai, Thailand & Goa Tours.",
            "publisher": {
                "@id": `${siteUrl}/#organization`
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        }
    ];

    const finalSchema = {
        "@context": "https://schema.org",
        "@graph": graph
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default GlobalSchema;
