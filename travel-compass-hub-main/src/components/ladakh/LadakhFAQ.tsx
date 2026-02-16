import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';

// Extensive FAQ Data with Stable IDs
const ladakhFaqs = [
    {
        category: "Planning & Best Time",
        id: "planning",
        questions: [
            { id: "best-time", q: "What is the best time to visit Ladakh?", a: "The best time to visit Ladakh is from May to September. July and August are peak season. September is great for fewer crowds and stunning colors." },
            { id: "duration", q: "How many days are needed for a Ladakh trip?", a: "A minimum of 7-9 days is recommended to allow for acclimatization and travel between Leh, Nubra, and Pangong." },
            { id: "winter", q: "Can we visit Ladakh in winter?", a: "Yes, but it's very cold (-20°C). Only flights operate. You can do the Chadar Trek or snow leopard expeditions." }
        ]
    },
    {
        category: "Routes & Travel",
        id: "routes",
        questions: [
            { id: "route-choice", q: "Which route is better: Manali or Srinagar?", a: "Srinagar-Leh is more gradual for acclimatization and scenic (greenery). Manali-Leh is more adventurous, higher altitude, and rugged." },
            { id: "highway-status", q: "Is the Manali-Leh highway open in May?", a: "Usually, it opens by late May or early June. Srinagar-Leh often opens earlier, by late April or May." },
            { id: "permits", q: "Do I need a special permit for roaming in Ladakh?", a: "Yes, an Inner Line Permit (ILP) is required for domestic tourists to visit Nubra, Pangong, Tso Moriri, etc. Foreigners need a PAP." }
        ]
    },
    {
        category: "Health & Safety",
        id: "safety",
        questions: [
            { id: "ams-prevention", q: "What is AMS and how to prevent it?", a: "AMS (Acute Mountain Sickness) is caused by low oxygen. Symptoms: headache, nausea. Prevention: Acclimatize for 2 days in Leh, drink water, avoid alcohol." },
            { id: "family-safety", q: "Is Ladakh safe for children and elderly?", a: "Yes, but consult a doctor first. Acclimatization is crucial. Oxygen cylinders are recommended for backup." },
            { id: "solo-female", q: "Is it safe for solo female travelers?", a: "Ladakh is one of the safest places in India. People are friendly and helpful. Standard travel precautions apply." }
        ]
    },
    {
        category: "Bike & Adventure",
        id: "adventure",
        questions: [
            { id: "bike-rental", q: "Can I rent a bike in Leh?", a: "Yes, Royal Enfields and Himalayan bikes are available for rent in Leh. You need a valid driving license." },
            { id: "fuel", q: "Is fuel available everywhere?", a: "Fuel is available in Leh, Karu, Diskit (Nubra). Carry spare fuel for Pangong and Tso Moriri routes." },
            { id: "clothing", q: "What clothes should I pack?", a: "Layers are key. Thermals, fleece, down jacket, windproof/waterproof outer shell, good boots, gloves, and sunglasses." }
        ]
    }
];

const LadakhFAQ = () => {
    // Generate FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ladakhFaqs.flatMap(section =>
            section.questions.map(q => ({
                "@type": "Question",
                "name": q.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.a
                }
            }))
        )
    };

    return (
        <section className="py-12 bg-muted/20 rounded-xl border border-border p-6" aria-labelledby="faq-heading">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <h2 id="faq-heading" className="text-3xl font-serif font-bold text-center mb-8">Ladakh Travel FAQs</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {ladakhFaqs.map((section) => (
                    <section key={section.id} aria-labelledby={`cat-${section.id}`}>
                        <h3 id={`cat-${section.id}`} className="font-bold text-xl text-gold mb-4 border-b border-border pb-2">
                            {section.category}
                        </h3>

                        <Accordion type="single" collapsible className="w-full">
                            {section.questions.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border-b-0 mb-4 bg-background/50 rounded-lg px-4 border border-border">
                                    <AccordionTrigger className="text-left font-medium hover:text-gold hover:no-underline py-3">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                ))}
            </div>
        </section>
    );
};

// Memoize for performance optimization
export default React.memo(LadakhFAQ);
