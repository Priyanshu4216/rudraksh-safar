import { useMemo, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';

interface FAQ {
  question: string;
  answer: string | ReactNode;
  answerText?: string; // Plain text fallback for Schema
}

interface FAQsSectionProps {
  faqs?: FAQ[];
  title?: string;
  description?: string;
  showContactInfo?: boolean;
  className?: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: 'Which is the best travel agency in Bhilai for tour packages?',
    answer: 'Rudraksh Safar is rated as the best travel agency in Bhilai, operating since 2015 from GE Road. We specialize in customized domestic and international packages with 24/7 local support, serving 1000+ satisfied travelers from Durg, Bhilai, and Raipur.',
    answerText: 'Rudraksh Safar is rated as the best travel agency in Bhilai, operating since 2015 from GE Road. We specialize in customized domestic and international packages with 24/7 local support.'
  },
  {
    question: 'What are the cheapest tour packages available from Bhilai?',
    answer: 'Our value packages start from ₹9,999. Best-sellers include: Manali Volo Trip (from Durg Station), Goa Group Tour (from Raipur Airport), and budget-friendly Kedarnath Yatra. All packages clearly list inclusions like meals, hotels, and transfers with no hidden costs.',
  },
  {
    question: 'How much does Char Dham Yatra package cost from Bhilai?',
    answer: 'Char Dham Yatra packages from Bhilai start at ₹17,999 (12 Days). Price includes train tickets from Durg Junction, accommodation, meals, and local transfers. We also offer helicopter booking assistance for Kedarnath.',
  },
  {
    question: 'Do you offer international tour packages from Raipur?',
    answer: 'Yes, we manage end-to-end international trips from Raipur (RPR). Popular destinations include Dubai, Thailand, Bali, and Maldives. We handle your Visa, Flight bookings from Swami Vivekananda Airport, and foreign exchange locally.',
  },
  {
    question: 'What is included in your tour packages?',
    answer: 'All packages are comprehensive: Logistics (Flight/Train), Accommodation (Verified Hotels), Meals (Breakfast/Dinner), Sightseeing Cabs, and Travel Insurance. We provide a detailed itinerary before booking so you know exactly what you pay for.',
  },
  {
    question: 'How can I book a tour package with Rudraksh Safar?',
    answer: 'You can book instantly by visiting our office in Bhilai 3 (GE Road) or calling +91-9406182174. We also offer online booking via WhatsApp with secure digital payment options (UPI/NetBanking) and EMI facilities for packages above ₹25,000.',
  },
  {
    question: 'Do you provide pickup from Raipur and Durg?',
    answer: 'Yes, we provide complimentary home pickup/drop for premium packages. For standard groups, we arrange logistics from Durg Railway Station and Raipur Airport to ensure your journey starts smoothly.',
  },
  {
    question: 'Is Rudraksh Safar a trusted and reliable agency?',
    answer: 'Absolutely. Established in 2015, Rudraksh Safar is a registered entity with excellent local reviews. We operate with a strict "No Hidden Charges" policy and provide 24/7 on-trip assistance to ensure your safety and comfort.',
  },
  {
    question: 'Do you provide visa and passport assistance in Bhilai?',
    answer: 'Yes, our Bhilai office processes Tourist Visas for Singapore, Dubai, Thailand, Europe (Schengen), and more. We also assist with Passport applications (New/Renewal) and Tatkaal appointments for residents of Durg and Raipur.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major modes: Cash at Office, UPI (GPay/PhonePe), Bank Transfer, and Credit Cards. We offer flexible payment terms: 25% booking amount, with balance payable before travel.',
  },
];

const FAQsSection = ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions About Travel Packages from Bhilai",
  description = "Expert answers about booking, pricing, and travel planning with Rudraksh Safar - Your trusted local travel partner.",
  showContactInfo = true,
  className = ""
}: FAQsSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = useMemo(() => (showAll ? faqs : faqs.slice(0, 5)), [showAll, faqs]);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerText || (typeof faq.answer === 'string' ? faq.answer : '')
      }
    }))
  };

  return (
    <section id="faqs" className={`py-20 bg-secondary/5 ${className}`} aria-labelledby="faqs-heading">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              Common Questions
            </span>
            <h2 id="faqs-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
              {title}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              {description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger
                  className="text-left text-foreground hover:text-secondary hover:no-underline py-5 text-base md:text-lg font-medium"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {faqs.length > 5 && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? 'Show less' : 'View all FAQs'}
              </Button>
            </div>
          )}
        </AnimatedSection>

        {showContactInfo && (
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12 p-6 bg-gold/10 rounded-2xl border border-gold/20">
              <p className="text-foreground font-medium text-lg">
                Still have specific questions?{' '}
                <a
                  href={`https://wa.me/919406182174`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-bold hover:underline"
                >
                  Chat with an Expert
                </a>{' '}
                or call +91-9406182174.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default FAQsSection;
