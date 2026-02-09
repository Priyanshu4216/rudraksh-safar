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
    };
}

const TempleSchema = ({ data }: TempleSchemaProps) => {
    const siteUrl = 'https://rudrakshsafar.com';
    const pageUrl = `${siteUrl}/${data.id}-temple`;

    // 1. PlaceOfWorship (The core entity)
    const placeSchema = {
        '@context': 'https://schema.org',
        '@type': ['Place', 'PlaceOfWorship', 'TouristAttraction'],
        '@id': `${pageUrl}#temple`,
        name: data.name,
        description: data.description,
        image: data.image,
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
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            description: data.openingHours || 'Seasonal Opening (May-Nov)'
        },
        publicAccess: true,
        isAccessibleForFree: true
    };

    // 2. FAQPage (For AEO)
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

    // 4. Article (For the content body)
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: data.name,
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
                url: `${siteUrl}/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
        }
    };

    // Combine all into a graph
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [placeSchema, faqSchema, breadcrumbSchema, articleSchema]
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
};

export default TempleSchema;
