import { Helmet } from 'react-helmet-async';

const GlobalSchema = () => {
    const siteUrl = 'https://rudrakshsafar.com';
    const logoUrl = `${siteUrl}/logo-dark.png`;

    const graph = [
        // 1. Organization Schema (The Brand) - GE Road Office
        {
            "@type": "TravelAgency",
            "@id": `${siteUrl}/#organization`,
            "name": "Sanjeev Enterprises (Rudraksh Safar)",
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
            "telephone": "+919203650311",
            "email": "rudrakshsafar@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai-3",
                "addressLocality": "Durg",
                "addressRegion": "Chhattisgarh",
                "postalCode": "490021",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.2120",
                "longitude": "81.3733"
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
                { "@type": "AdministrativeArea", "name": "Bilaspur" },
                { "@type": "Place", "name": "Naya Raipur" },
                { "@type": "Place", "name": "Supela" },
                { "@type": "Place", "name": "Durg-Bhilai" },
                { "@type": "AdministrativeArea", "name": "Chhattisgarh" },
                { "@type": "Country", "name": "India" }
            ],
            "priceRange": "₹₹",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919203650311",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            }
        },

        // Support Office - Uttarakhand
        {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#office-uttarakhand`,
            "name": "Rudraksh Safar (Support Office Uttarakhand)",
            "branchOf": {
                "@id": `${siteUrl}/#organization`
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gate No.4, Main Haridwar-Rishikesh Highway, Bhupatwala",
                "addressLocality": "Haridwar",
                "addressRegion": "Uttarakhand",
                "addressCountry": "IN"
            }
        },

        // Support Office - Thailand
        {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#office-thailand`,
            "name": "Rudraksh Safar (Support Office Thailand)",
            "branchOf": {
                "@id": `${siteUrl}/#organization`
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "34, 42 M1 Chaitaphon Withi 21, Pattaya City, Bang Lamung District",
                "addressLocality": "Pattaya",
                "addressRegion": "Chon Buri",
                "postalCode": "20150",
                "addressCountry": "TH"
            }
        },

        // Support Office - Kashmir
        {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#office-kashmir`,
            "name": "Rudraksh Safar (Support Office Kashmir)",
            "branchOf": {
                "@id": `${siteUrl}/#organization`
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hotel Duke, The Boulevard",
                "addressLocality": "Srinagar",
                "addressRegion": "Kashmir",
                "postalCode": "190001",
                "addressCountry": "IN"
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
