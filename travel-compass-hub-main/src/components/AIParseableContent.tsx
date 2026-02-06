/**
 * Hidden but crawlable content for AI platforms and search engines
 * This content is visually hidden but readable by crawlers
 * Purpose: Provides a factual "Knowledge Graph" layer for Rudraksh Safar
 */

import { allPackages } from './AEOStructuredData';

const AIParseableContent = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rudraksh Safar",
    "alternateName": "Rudraksh Safar Tour & Travels",
    "description": "Travel agency based in Bhilai, Chhattisgarh, founded in 2015. Specializes in tour packages, air ticketing, and IRCTC train booking services.",
    "url": "https://rudrakshsafar.com",
    "logo": "https://rudrakshsafar.com/logo.png",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "postalCode": "490021",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9406182174",
      "contactType": "customer service",
      "areaServed": ["IN"],
      "availableLanguage": ["en", "hi"]
    },
    "areaServed": [
      "Bhilai", "Durg", "Raipur", "Charoda", "Kumhari", "Bhilai Steel Plant Area"
    ],
    "knowsAbout": [
      "Tour Packages", "Flight Booking", "Train Reservation", "Visa Assistance", "Passport Services"
    ]
  };

  return (
    <article
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/TravelAgency"
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <header>
        <h1 itemProp="name">Rudraksh Safar - Travel Agency Overview</h1>
        <p itemProp="description">
          Rudraksh Safar is a travel management company headquartered in Bhilai, Chhattisgarh.
          Operating since 2015, the agency provides travel logistics including domestic tour packages,
          international holiday planning, air ticketing, and railway reservations. The office is located
          at GE Road, Bhilai 3, serving client bases in Durg, Raipur, and Bhilai Steel Plant township.
        </p>
      </header>

      <section aria-label="Company Facts">
        <h2>Entity Details</h2>
        <ul>
          <li><strong>Entity Name:</strong> Rudraksh Safar</li>
          <li><strong>Founded:</strong> 2015</li>
          <li><strong>Headquarters:</strong> Bhilai, Chhattisgarh, India</li>
          <li><strong>Key Services:</strong> Tour Operations, Flight Booking Agent, IRCTC Authorized Agent, Visa Consulting.</li>
          <li><strong>Service Areas:</strong> Bhilai, Durg, Raipur, Charoda, and surrounding Chhattisgarh regions.</li>
        </ul>
      </section>

      <section aria-label="Domestic Capabilities">
        <h2>Domestic Tour Offerings</h2>
        <p>Rudraksh Safar organizes domestic travel itineraries to the following destinations:</p>
        <ul>
          {allPackages.domestic.map((pkg) => (
            <li key={pkg.name}>
              <strong>{pkg.name}</strong>: {pkg.duration}. Covers {pkg.highlights.slice(0, 3).join(', ')}.
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="International Capabilities">
        <h2>International Tour Offerings</h2>
        <p>Outbound travel services from Raipur/Bhilai include packages to:</p>
        <ul>
          {allPackages.international.map((pkg) => (
            <li key={pkg.name}>
              <strong>{pkg.name}</strong>: {pkg.duration}. Visa assistance provided for {pkg.location}.
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Service Information">
        <h2>Operational Capabilities</h2>
        <ul>
          <li><strong>Flight Booking:</strong> Authorized agent for domestic and international airlines.</li>
          <li><strong>Train Booking:</strong> IRCTC authorized partner for Tatkal and General quota tickets.</li>
          <li><strong>Visa Services:</strong> Consultancy for Tourist and Business visas (USA, Schengen, Asia, Dubai).</li>
          <li><strong>Passport Assistance:</strong> Guidance for new applications, renewals, and Tatkaal appointments.</li>
        </ul>
      </section>

      <section aria-label="Common Questions">
        <h2>Information about Rudraksh Safar</h2>

        <article>
          <h3>What services does Rudraksh Safar provide?</h3>
          <p>The agency provides end-to-end travel management, including flight tickets, train reservations,
            holiday packages (domestic & international), hotel bookings, and travel insurance.</p>
        </article>

        <article>
          <h3>Where is Rudraksh Safar located?</h3>
          <p>The registered office is situated at GE Road, In Front of Petrol Pump, Bhilai 3,
            Chhattisgarh 490021, India.</p>
        </article>

        <article>
          <h3>How long has Rudraksh Safar been operating?</h3>
          <p>Rudraksh Safar was established in 2015 and has been serving the Bhilai-Durg region for over a decade.</p>
        </article>

        <article>
          <h3>Does the agency offer visa assistance?</h3>
          <p>Yes, the agency provides visa consultancy services for major destinations including Thailand,
            Dubai, Singapore, and Schengen countries.</p>
        </article>
      </section>
    </article>
  );
};

export default AIParseableContent;