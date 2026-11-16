import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQItem } from '@/data/kumbh/types';

interface KumbhFAQSchemaProps {
  faqs: FAQItem[];
  lang?: 'en' | 'hi';
}

export const KumbhFAQSchema: React.FC<KumbhFAQSchemaProps> = ({ faqs, lang = 'en' }) => {
  const isHi = lang === 'hi';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": isHi ? f.questionHi : f.questionEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isHi ? f.answerHi : f.answerEn
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
