import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Which is the best travel agency in Bhilai for tour packages?',
    answer: 'Rudraksh Safar is the best travel agency in Bhilai with 10+ years of experience and 500+ satisfied customers. Located on GE Road, we offer the cheapest domestic and international tour packages with 24/7 customer support. Contact us at +91-9406182174 for instant booking.',
  },
  {
    question: 'What are the cheapest tour packages available from Bhilai?',
    answer: 'Our cheapest packages from Bhilai include: Manali Adventure (₹9,999 for 5 Days), Goa Getaway (₹11,999 for 4 Days), Kedarnath Yatra (₹14,999 for 6 Days), Char Dham Yatra (₹17,999 for 12 Days), and Nepal (₹24,999 for 7 Days). All prices include accommodation, transfers, and sightseeing with best price guarantee.',
  },
  {
    question: 'How much does Char Dham Yatra package cost from Bhilai?',
    answer: 'Char Dham Yatra package from Bhilai starts at ₹17,999 per person for 12 Days / 11 Nights. This comprehensive package covers all four sacred dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath. Includes comfortable hotels, all meals, AC transportation, and temple darshan assistance.',
  },
  {
    question: 'Do you offer international tour packages from Raipur?',
    answer: 'Yes! We offer complete international packages from Raipur/Bhilai: Dubai (₹54,999 for 5 Days), Bali (₹64,999 for 6 Days), Thailand (₹38,999 for 7 Days), Maldives (₹85,999 for 5 Days), Nepal (₹24,999 for 7 Days), and Sri Lanka (₹35,999 for 6 Days). All packages include visa assistance and airport transfers.',
  },
  {
    question: 'What is included in your tour packages?',
    answer: 'Our packages typically include accommodation (3-5 star hotels based on package), daily breakfast, AC transportation, sightseeing as per itinerary, travel insurance, and 24/7 tour support. International packages also include visa assistance and airport transfers. Specific inclusions vary by package.',
  },
  {
    question: 'How can I book a tour package with Rudraksh Safar?',
    answer: 'Booking is simple! Contact us via WhatsApp at +91-9406182174, call our office, or visit us at GE Road, Bhilai 3. We offer instant booking confirmation, EMI options on packages above ₹25,000, and fully customizable itineraries. Home pickup available across Chhattisgarh.',
  },
  {
    question: 'What destinations do you offer packages for?',
    answer: 'We offer 50+ destinations! Domestic: Char Dham, Kedarnath, Ladakh, Kashmir, Goa, Manali, Kerala, Rajasthan, and more. International: Dubai, Bali, Thailand, Maldives, Nepal, Sri Lanka, Singapore, Malaysia, Europe, and more. Custom packages available for any destination.',
  },
  {
    question: 'Do you provide visa and passport assistance?',
    answer: 'Yes! We offer complete visa consultancy for all countries including USA, UK, Schengen, Canada, Australia, Dubai, Thailand, and Singapore. We also assist with new passport applications, renewals, and Tatkaal passport services. Our team handles documentation and appointment scheduling.',
  },
  {
    question: 'How far in advance should I book my trip?',
    answer: 'We recommend booking 2-4 weeks in advance for domestic trips and 4-8 weeks for international travel to get best prices and availability. For peak seasons (summer holidays, Diwali, New Year), book 1-2 months early. However, we can accommodate last-minute bookings based on availability.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, UPI (GPay, PhonePe, Paytm), Bank Transfer (NEFT/RTGS/IMPS), Credit/Debit Cards, and EMI options for packages above ₹25,000. Advance booking with 25-50% deposit secures your package. Full payment is required 7-15 days before departure.',
  },
  {
    question: 'Is Rudraksh Safar a trusted and reliable agency?',
    answer: 'Absolutely! Rudraksh Safar has been operating since 2015 with 500+ happy customers. We offer transparent pricing with no hidden charges, 24/7 customer support during travel, and our satisfaction guarantee ensures your peace of mind.',
  },
  {
    question: 'Do you provide pickup from Raipur and Durg?',
    answer: 'Yes! We provide complimentary pickup from Bhilai, Raipur, and Durg for all tour packages. Airport pickup from Swami Vivekananda Airport Raipur is included for international tours. We also serve Korba, Bilaspur, Rajnandgaon, and other Chhattisgarh cities.',
  },
  {
    question: 'Can I customize my travel package?',
    answer: 'Absolutely! We specialize in creating personalized travel experiences. Share your preferences, budget, number of travelers, and travel dates, and we will design a custom itinerary. Whether it\'s adding extra days, upgrading hotels, or including special activities - we tailor everything to your needs.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'Cancellation charges vary based on the service providers and timing. Generally: 30+ days before departure: 10-20% charges, 15-30 days: 30-50% charges, 7-14 days: 50-75% charges, Less than 7 days: 75-100% charges. We recommend travel insurance for comprehensive coverage.',
  },
  {
    question: 'Do you offer group discounts for tours?',
    answer: 'Yes! We offer special discounts for group bookings. Groups of 5-10 people get 5-10% off, groups of 10-20 get 10-15% off, and larger groups can negotiate custom rates. We also organize corporate trips, school/college tours, and family reunion packages with special pricing.',
  },
  {
    question: 'What makes Rudraksh Safar different from other travel agencies in Bhilai?',
    answer: 'We stand out with: Best price guarantee, 10+ years local expertise, 24/7 support, personalized service, no hidden charges, verified partner hotels, experienced tour guides, and our commitment to creating memorable experiences. We treat every traveler like family.',
  },
];

// Extended FAQ schema for comprehensive AEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = useMemo(() => (showAll ? faqs : faqs.slice(0, 4)), [showAll]);

  return (
    <>
      {/* Inject FAQ Schema for AEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section id="faqs" className="py-20 bg-secondary/30" aria-labelledby="faqs-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Common Questions
              </span>
              <h2 id="faqs-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Frequently Asked Questions About Travel Packages from Bhilai
              </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get answers about our tour packages, booking process, prices, and services. 
              Rudraksh Safar - Best Travel Agency in Bhilai, Chhattisgarh.
            </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {visibleFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger 
                    className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium"
                    itemProp="name"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? 'Show less' : 'See more FAQs'}
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Still have questions?{' '}
                <a
                  href="#contact"
                  className="text-gold hover:text-gold/80 font-medium transition-colors"
                >
                  Contact us at +91-9406182174
                </a>{' '}
                and we'll be happy to help!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default FAQsSection;
