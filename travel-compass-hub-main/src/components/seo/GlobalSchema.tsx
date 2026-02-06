import { Helmet } from 'react-helmet-async';

const GlobalSchema = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://rudrakshsafar.com/#travelagency",
        "name": "Rudraksh Safar",
        "image": "https://rudrakshsafar.com/logo-dark.png",
        "url": "https://rudrakshsafar.com",
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
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
        },
        "sameAs": [
            "https://www.facebook.com/rudrakshsafar",
            "https://www.instagram.com/rudrakshsafar"
        ],
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "Bhilai" },
            { "@type": "AdministrativeArea", "name": "Durg" },
            { "@type": "AdministrativeArea", "name": "Raipur" },
            { "@type": "AdministrativeArea", "name": "Chhattisgarh" },
            { "@type": "Country", "name": "India" }
        ],
        "priceRange": "₹₹"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default GlobalSchema;
