import { Helmet } from 'react-helmet-async';

interface TempleSchemaProps {
    data: {
        id: string;
        name: string;
        description: string;
        image: string;
        address: {
            locality: string;
            region: string;
            country: string;
        };
        geo: {
            latitude: string;
            longitude: string;
        };
        faqs: { question: string; answer: string }[];
        openingHours?: string;
        sameAs?: string[]; // New field for authority links
    };
}

const TempleSchema = ({ data }: TempleSchemaProps) => {
    const siteUrl = 'https://rudrakshsafar.com';
    const pageUrl = `${siteUrl}/${data.id}-temple`;

    // 1. PlaceOfWorship (The core entity)
    const placeSchema = {
        '@context': 'https://schema.org',
        '@type': ['Place', 'PlaceOfWorship', 'TouristAttraction', 'HinduTemple'],
        '@id': `${pageUrl}#temple`,
        name: data.name,
        description: data.description,
        image: data.image,
        publicAccess: true,
        isAccessibleForFree: true,
        religion: "Hinduism", // High relevance signal
        address: {
            '@type': 'PostalAddress',
            addressLocality: data.address.locality,
            addressRegion: data.address.region,
            addressCountry: data.address.country
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: data.geo.latitude,
            longitude: data.geo.longitude
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "04:00",
                closes: "21:00"
            }
        ],
        // Powerful Topical Authority Link
        isPartOf: {
            "@type": "TouristTrip",
            "name": "Char Dham Yatra",
            "description": "The sacred pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath",
            "provider": {
                "@type": "Organization",
                "name": "Rudraksh Safar",
                "url": siteUrl
            }
        },
        sameAs: data.sameAs || [] // External authority links (Wikipedia, Official Sites)
    };

    // 2. TravelGuide (Better than Article)
    const guideSchema = {
        '@context': 'https://schema.org',
        '@type': 'TravelGuide',
        '@id': `${pageUrl}#guide`,
        headline: `Complete Guide to ${data.name}`,
        description: data.description,
        image: data.image,
        author: {
            '@type': 'Organization',
            name: 'Rudraksh Safar',
            url: siteUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'Rudraksh Safar',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo-dark.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
        },
        about: {
            '@id': `${pageUrl}#temple`
        }
    };

    // 3. BreadcrumbList (For Navigation Signals)
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Char Dham Yatra',
                item: `${siteUrl}/chardham-yatra-package`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: data.name,
                item: pageUrl
            }
        ]
    };

    // 4. FAQPage (For AEO)
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: data.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    // Combine all into a graph
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [placeSchema, guideSchema, breadcrumbSchema, faqSchema]
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
};

export default TempleSchema;
