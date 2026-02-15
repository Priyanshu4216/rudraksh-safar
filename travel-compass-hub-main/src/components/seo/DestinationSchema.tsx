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
    const siteUrl = 'https://rudrakshsafar.com';
    const logoUrl = `${siteUrl}/logo.png`;
    const fallbackImage = `${siteUrl}/og-image.jpg`;

    // Elite Level: Use @graph for cleaner architecture
    const graph: any[] = [];

    // 1. Organization Schema (Global Authority)
    const orgSchema = {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Rudraksh Safar',
        url: siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: logoUrl
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+919406182174',
            contactType: 'customer service',
            areaServed: 'IN'
        },
        sameAs: [
            "https://www.facebook.com/rudrakshsafar",
            "https://www.instagram.com/rudrakshsafar",
            "https://www.youtube.com/@rudrakshsafar"
        ]
    };
    graph.push(orgSchema);

    // 2. Main Entity: TravelGuide (Better than Article for this context)
    const mainEntitySchema = {
        '@type': 'TravelGuide',
        '@id': canonicalUrl,
        headline: title,
        description: description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl
        },
        author: { '@id': `${siteUrl}/#organization` },
        publisher: { '@id': `${siteUrl}/#organization` },
        image: data?.image || fallbackImage, // Improved logic: prefer specific image or fallback
        datePublished: data?.lastUpdated || '2025-10-01', // Dynamic if available
        dateModified: new Date().toISOString()
    };
    graph.push(mainEntitySchema);

    // 3. BreadcrumbList Schema
    const breadcrumbSchema = {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
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
                name: destinationName,
                item: `${siteUrl}/package/${destinationName.toLowerCase()}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: canonicalUrl
            }
        ]
    };
    graph.push(breadcrumbSchema);

    // 4. FAQPage Schema (Conditional)
    if (data?.faqs && data.faqs.length > 0) {
        graph.push({
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            mainEntity: data.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
        });
    }

    // 5. TouristDestination Schema (For specific pages)
    if (pageSlug === 'travel-guide' || pageSlug === 'places-to-visit') {
        const destSchema: any = {
            '@type': 'TouristDestination',
            '@id': `${canonicalUrl}#destination`,
            name: destinationName,
            description: data?.intro || description,
            touristType: ['AdventureTourism', 'CulturalTourism'],
            image: data?.intro ? undefined : (data?.image || fallbackImage) // Keep logic but ensure image existence
        };

        // Add Geo Coordinates if available (Critical for Travel Queries)
        if (data?.geo) {
            destSchema.geo = {
                '@type': 'GeoCoordinates',
                latitude: data.geo.latitude,
                longitude: data.geo.longitude
            };
        }

        graph.push(destSchema);
    }

    const finalSchema = {
        '@context': 'https://schema.org',
        '@graph': graph
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default DestinationSchema;
