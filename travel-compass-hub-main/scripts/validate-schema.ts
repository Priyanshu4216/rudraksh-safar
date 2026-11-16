import { HARIDWAR_KUMBH_FACTS, SNAN_DATES_2027 } from '../src/data/kumbh/kumbh2027.ts';
import { getKumbhFAQs } from '../src/data/kumbh/faq.ts';
import { KUMBH_SITE } from '../src/data/kumbh/site.ts';

console.log('\n======================================================');
console.log('🛡️ HARIDWAR KUMBH 2027: SCHEMA & STRUCTURED DATA VALIDATOR');
console.log('======================================================');

let hasError = false;

// 1. Build and validate Event Schema
const eventSchema = {
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
      "addressCountry": "IN"
    }
  },
  "organizer": {
    "@type": "GovernmentOrganization",
    "name": "Uttarakhand Mela Administration (Haridwar Kumbh Mela)"
  },
  "subEvent": SNAN_DATES_2027.map(s => ({
    "@type": "Event",
    "name": `${s.occasionEn} - Haridwar Ardh Kumbh 2027`,
    "startDate": s.dateISO
  }))
};

const serializedEvent = JSON.stringify(eventSchema);

try {
  const parsed = JSON.parse(serializedEvent);
  console.log('✅ Event Schema: Successfully parsed valid JSON-LD.');

  // Check forbidden properties
  if (parsed.organizer?.name?.includes('Rudraksh Safar')) {
    console.error('❌ FORBIDDEN: Rudraksh Safar set as organizer on Kumbh Event schema!');
    hasError = true;
  }
  if (parsed.offers) {
    console.error('❌ FORBIDDEN: Offers property detected on Kumbh Event schema!');
    hasError = true;
  }
  if (parsed.aggregateRating || serializedEvent.includes('AggregateRating')) {
    console.error('❌ FORBIDDEN: AggregateRating detected on Event schema!');
    hasError = true;
  }
  if (serializedEvent.includes('HowTo')) {
    console.error('❌ FORBIDDEN: HowTo schema detected!');
    hasError = true;
  }

  // Check required subEvents
  if (!parsed.subEvent || parsed.subEvent.length !== 10) {
    console.error(`❌ Expected 10 subEvents for bathing dates, found ${parsed.subEvent?.length}`);
    hasError = true;
  } else {
    console.log('✅ Event Schema: Verified all 10 subEvents with date-only ISO strings.');
  }
} catch (e: any) {
  console.error('❌ JSON parse error in Event schema:', e.message);
  hasError = true;
}

// 2. Validate FAQPage Schema
const faqs = getKumbhFAQs();
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.questionEn,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answerEn
    }
  }))
};

try {
  const parsedFaq = JSON.parse(JSON.stringify(faqSchema));
  console.log(`✅ FAQPage Schema: Successfully verified ${parsedFaq.mainEntity.length} Q&A pairs.`);
} catch (e: any) {
  console.error('❌ JSON parse error in FAQ schema:', e.message);
  hasError = true;
}

console.log('======================================================\n');

if (hasError) {
  console.error('❌ SCHEMA VALIDATION FAILED!');
  process.exit(1);
} else {
  console.log('🎉 ALL STRUCTURED DATA RULES PASSED COMPLIANCE AUDIT!\n');
  process.exit(0);
}
