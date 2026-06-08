import React from 'react';
import { Helmet } from 'react-helmet-async';

interface TourPackageSchemaProps {
    name: string;
    description: string;
    image: string;
    price: string;
    currency?: string;
    url: string;
    durationDays?: number;
    destinationName?: string;
}

const TourPackageSchema: React.FC<TourPackageSchemaProps> = ({
    name,
    description,
    image,
    price,
    currency = "INR",
    url,
    durationDays,
    destinationName
}) => {
    // We combine Product (for pricing rich snippets) and TouristTrip (for itinerary)
    const schema = {
        "@context": "https://schema.org",
        "@type": ["Product", "TouristTrip"],
        "name": name,
        "description": description,
        "image": image,
        "offers": {
            "@type": "Offer",
            "priceCurrency": currency,
            "price": price.replace(/[^0-9]/g, ''),
            "availability": "https://schema.org/InStock",
            "url": url,
            "seller": {
                "@type": "TravelAgency",
                "name": "Rudraksh Safar"
            }
        },
        ...(durationDays && {
            "touristType": [
                "Family",
                "Adventure"
            ],
            "itinerary": {
                "@type": "ItemList",
                "numberOfItems": durationDays
            }
        }),
        ...(destinationName && {
            "itineraryDestination": {
                "@type": "City",
                "name": destinationName
            }
        })
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default TourPackageSchema;
