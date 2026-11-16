import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HARIDWAR_KUMBH_FACTS, SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';

export const KumbhEventSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": HARIDWAR_KUMBH_FACTS.eventNameEn,
    "startDate": HARIDWAR_KUMBH_FACTS.startDateISO,
    "endDate": HARIDWAR_KUMBH_FACTS.endDateISO,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Har Ki Pauri, Haridwar",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Haridwar",
        "addressRegion": "Uttarakhand",
        "postalCode": "249401",
        "addressCountry": "IN"
      }
    },
    "description": "Haridwar Ardh Kumbh Mela 2027 official pilgrimage schedule featuring ten major bathing festivals and three royal Akhara Amrit Snans along the River Ganga.",
    "organizer": {
      "@type": "GovernmentOrganization",
      "name": "Uttarakhand Mela Administration (Haridwar Kumbh Mela)"
    },
    "subEvent": SNAN_DATES_2027.map((snan) => ({
      "@type": "Event",
      "name": `${snan.occasionEn} - Haridwar Ardh Kumbh 2027`,
      "startDate": snan.dateISO, // Date-only values as mandated by prompt
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Har Ki Pauri, Haridwar, Uttarakhand, IN"
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
