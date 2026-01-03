import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Which is the best travel agency in Bhilai for tour packages?',
    answer:
      'Rudraksh Safar is one of the most trusted travel agencies in Bhilai with years of experience and hundreds of satisfied customers. Located on GE Road, Bhilai 3, we offer affordable domestic and international tour packages with personalized support. Call or WhatsApp us at +91 92291 50311.',
  },
  {
    question: 'What are the cheapest tour packages available from Bhilai?',
    answer:
      'Our popular budget-friendly packages from Bhilai include: Manali (starting from ₹9,999), Goa (₹11,999), Kedarnath Yatra (₹14,999), Char Dham Yatra (₹17,999), and Nepal tours (₹24,999). Packages include accommodation, transfers, and sightseeing.',
  },
  {
    question: 'How much does Char Dham Yatra package cost from Bhilai?',
    answer:
      'Char Dham Yatra packages from Bhilai start at ₹17,999 per person for approximately 12 days. The tour covers Yamunotri, Gangotri, Kedarnath, and Badrinath with hotels, meals, transportation, and darshan assistance.',
  },
  {
    question: 'Do you offer international tour packages from Raipur or Bhilai?',
    answer:
      'Yes, Rudraksh Safar offers international tour packages from Bhilai and Raipur including Dubai, Bali, Thailand, Maldives, Nepal, and Sri Lanka. Packages include visa assistance, accommodation, sightseeing, and airport transfers.',
  },
  {
    question: 'What is included in your tour packages?',
    answer:
      'Most packages include hotel accommodation, daily breakfast, AC transportation, sightseeing as per itinerary, and on-trip assistance. International packages also include visa guidance and airport transfers. Inclusions vary by package.',
  },
  {
    question: 'How can I book a tour package with Rudraksh Safar?',
    answer:
      'You can book by contacting us on WhatsApp or phone at +91 92291 50311, visiting our office at GE Road, Bhilai 3, or submitting an inquiry on our website. All itineraries are customizable.',
  },
  {
    question: 'What destinations do you offer travel packages for?',
    answer:
      'We offer packages for popular domestic destinations like Goa, Manali, Kashmir, Kerala, Rajasthan, Char Dham, Kedarnath, and Ladakh. International destinations include Dubai, Bali, Thailand, Maldives, Nepal, Sri Lanka, and more.',
  },
  {
    question: 'Do you provide visa and passport assistance?',
    answer:
      'Yes, we assist with tourist visa documentation and guidance for destinations like Dubai, Thailand, Singapore, Schengen countries, and more. Passport assistance can also be guided where applicable.',
  },
  {
    question: 'How far in advance should I book my trip?',
    answer:
      'We recommend booking 2–4 weeks in advance for domestic trips and 4–8 weeks for international tours. For peak seasons and holidays, earlier booking ensures better availability and pricing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, UPI, bank transfer (NEFT/RTGS/IMPS), debit/credit cards, and partial advance bookings. Full payment is generally required before departure.',
  },
  {
    question: 'Is Rudraksh Safar a trusted travel agency?',
    answer:
      'Yes. Rudraksh Safar focuses on transparent pricing, verified hotels, personalized service, and on-trip support. Customer satisfaction and trust are our top priorities.',
  },
  {
    question: 'Do you provide pickup from Raipur and Durg?',
    answer:
      'Yes, pickup assistance is available from Bhilai, Raipur, and Durg. Airport pickup from Raipur is included in select international packages.',
  },
  {
    question: 'Can I customize my travel package?',
    answer:
      'Absolutely. All our packages are customizable. You can modify hotels, duration, transport, sightseeing, and activities according to your budget and preferences.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer:
      'Cancellation and refund policies depend on hotels, airlines, and service providers. Charges vary based on the time of cancellation. We recommend travel insurance for added protection.',
  },
  {
    question: 'Do you offer group discounts?',
    answer:
      'Yes, special discounts are available for group bookings, family tours, corporate trips, and school or college tours. Contact us for customized group pricing.',
  },
  {
    question: 'What makes Rudraksh Safar different from other travel agencies in Bhilai?',
    answer:
      'We stand out through personalized planning, honest pricing, local expertise, quick support, and a customer-first approach. Every trip is planned with care and transparency.',
  },
];

// FAQ Schema (AEO)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const FAQsSection = () => {
  return (
    <>
      {/* FAQ Schema for SEO & AEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section
        id="faqs"
        className="py-20 bg-secondary/30"
        aria-labelledby="faqs-heading"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Common Questions
              </span>
              <h2
                id="faqs-heading"
                className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
              >
                Frequently Asked Questions – Rudraksh Safar
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Answers to common questions about tour packages, bookings,
                pricing, and travel services from Bhilai and Raipur.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Still have questions?{' '}
                <a
                  href="#contact"
                  className="text-gold hover:text-gold/80 font-medium transition-colors"
                >
                  Contact Rudraksh Safar at +91 92291 50311
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default FAQsSection;
