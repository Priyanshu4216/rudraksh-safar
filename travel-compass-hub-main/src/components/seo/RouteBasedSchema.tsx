import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPrice } from '@/utils/getPrice';

const RouteBasedSchema = () => {
    const location = useLocation();
    const path = location.pathname;
    const siteUrl = 'https://rudrakshsafar.com';
    const currentUrl = `${siteUrl}${path}`;

    let schema: any = null;

    // 1. LocalBusiness / TravelAgency for City Hubs
    if (path.includes('-bhilai') || path.includes('-raipur') || path.includes('-durg') || path.includes('/bilaspur')) {
        let city = 'Bhilai';
        if (path.includes('raipur')) city = 'Raipur';
        if (path.includes('durg')) city = 'Durg';
        if (path.includes('bilaspur')) city = 'Bilaspur';

        schema = {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": `Rudraksh Safar ${city}`,
            "url": currentUrl,
            "telephone": "+919203650311",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            },
            "priceRange": "₹₹"
        };
    }

    // 2. Product / TouristTrip for Destination Packages
    const destinations = [
        { pathStr: 'thailand', name: 'Thailand', type: 'International' },
        { pathStr: 'dubai', name: 'Dubai', type: 'International' },
        { pathStr: 'singapore', name: 'Singapore', type: 'International' },
        { pathStr: 'bali', name: 'Bali', type: 'International' },
        { pathStr: 'srilanka', name: 'Sri Lanka', type: 'International' },
        { pathStr: 'sri-lanka', name: 'Sri Lanka', type: 'International' },
        { pathStr: 'kashmir', name: 'Kashmir', type: 'Domestic' },
        { pathStr: 'ladakh', name: 'Ladakh', type: 'Domestic' },
        { pathStr: 'manali', name: 'Manali', type: 'Domestic' },
        { pathStr: 'goa', name: 'Goa', type: 'Domestic' },
        { pathStr: 'kerala', name: 'Kerala', type: 'Domestic' },
        { pathStr: 'andaman', name: 'Andaman', type: 'Domestic' },
        { pathStr: 'chardham', name: 'Char Dham', type: 'Domestic' }
    ];

    const matchedDest = destinations.find(d => path.includes(d.pathStr));

    if (matchedDest && !path.includes('faqs') && !schema) {
        const price = getPrice(matchedDest.name);
        // Only output if a valid price is found to avoid schema errors
        if (price !== "Price on Request") {
            const numericPrice = price.replace(/[^0-9]/g, '');
            schema = {
                "@context": "https://schema.org",
                "@type": "TouristTrip",
                "name": `${matchedDest.name} Tour Package`,
                "description": `Book the best ${matchedDest.name} tour package with Rudraksh Safar.`,
                "url": currentUrl,
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": numericPrice,
                    "availability": "https://schema.org/InStock",
                    "url": currentUrl,
                    "offeredBy": {
                        "@type": "TravelAgency",
                        "name": "Rudraksh Safar"
                    }
                }
            };
        }
    }

    // 3. BreadcrumbList Schema (applied globally based on path segments)
    const segments = path.split('/').filter(p => p);
    let breadcrumbSchema = null;
    
    if (segments.length > 0) {
        const itemListElement = [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
        }];

        let currentPath = '';
        segments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            // Convert slug to readable name
            const name = segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            itemListElement.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": name,
                "item": `${siteUrl}${currentPath}`
            });
        });

        breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": itemListElement
        };
    }

    // Prepare graph for Helmet
    const graph = [];
    if (schema) graph.push(schema);
    if (breadcrumbSchema) graph.push(breadcrumbSchema);

    if (graph.length === 0) return null;

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

export default RouteBasedSchema;
