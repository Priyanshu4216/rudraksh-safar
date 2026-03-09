import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs }: { title?: string, faqs: FAQItem[] }) {
    if (!faqs || faqs.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="w-full">
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <h2 className="text-3xl font-bold mb-8 text-foreground" dangerouslySetInnerHTML={{ __html: title }} />
            <Accordion type="single" collapsible className="w-full bg-card rounded-xl border shadow-sm px-6 py-2">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0 border-border/50">
                        <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors py-4">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
