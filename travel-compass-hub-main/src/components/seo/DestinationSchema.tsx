import { Helmet } from 'react-helmet-async';
import { DestinationContentData } from '@/data/destinations/types';

interface DestinationSchemaProps {
    title: string;
    description: string;
    canonicalUrl: string;
    data?: DestinationContentData;
    destinationName: string;
    pageSlug: string;
}

const DestinationSchema = ({
    title,
    description,
    canonicalUrl,
    data,
    destinationName,
    pageSlug
}: DestinationSchemaProps) => {
    const schemas = [];

    // 1. Article / WebPage Schema (Base)
    schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        mainEntityOfPage: canonicalUrl,
        author: { '@type': 'Organization', name: 'Rudraksh Safar' },
        publisher: { '@type': 'Organization', name: 'Rudraksh Safar' },
        image: data?.intro ? undefined : 'https://rudrakshsafar.com/og-image.jpg', // Fallback
        datePublished: '2025-10-01', // Ideally dynamic
        dateModified: new Date().toISOString().split('T')[0],
    });

    // 2. BreadcrumbList Schema
    schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://rudrakshsafar.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: destinationName,
                item: `https://rudrakshsafar.com/package/${destinationName.toLowerCase()}`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: canonicalUrl,
            },
        ],
    });

    // 3. FAQPage Schema (Only if FAQs exist)
    if (data?.faqs && data.faqs.length > 0) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        });
    }

    // 4. TouristDestination Schema (For main guides or intro pages)
    if (pageSlug === 'travel-guide' || pageSlug === 'places-to-visit') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: destinationName,
            description: data?.intro || description,
            touristType: ['AdventureTourism', 'CulturalTourism'],
        });
    }

    return (
        <Helmet>
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default DestinationSchema;
