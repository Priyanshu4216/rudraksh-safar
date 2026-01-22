import React, { useState, useEffect } from 'react';
import { Lightbulb, Shirt, Camera, Users, ShoppingBag, Utensils, Shield, Globe, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const tipCategories = [
  {
    title: 'Cultural Etiquette',
    icon: Users,
    tips: [
      'Research local customs before visiting - gestures can have different meanings',
      'Dress modestly when visiting temples, mosques, and religious sites',
      'Remove shoes before entering homes and some shops in Asian countries',
      'Learn basic greetings in local language - it goes a long way',
      'Respect photography restrictions at religious and government sites',
      'Tipping customs vary - research before your trip',
    ],
  },
  {
    title: 'Safety & Security',
    icon: Shield,
    tips: [
      'Keep copies of passport and documents in separate bags',
      'Share your itinerary with family back home',
      'Register with Indian Embassy MADAD portal for emergencies',
      'Avoid displaying expensive jewelry or electronics',
      'Use hotel safe for valuables and extra cash',
      'Be wary of too-good-to-be-true offers from strangers',
      'Download offline maps before traveling',
    ],
  },
  {
    title: 'Photography Tips',
    icon: Camera,
    tips: [
      'Always ask permission before photographing people',
      'Avoid taking photos of military installations and airports',
      'Some museums and attractions prohibit photography',
      'Use airplane mode to save battery while shooting',
      'Backup photos to cloud daily',
      'Carry extra memory cards and batteries',
    ],
  },
  {
    title: 'Food & Dining',
    icon: Utensils,
    tips: [
      'Research vegetarian-friendly restaurants beforehand',
      'Look for restaurants with high local turnover',
      'Avoid ice and uncooked foods in certain countries',
      'Carry snacks for long travel days',
      'Learn how to say "no meat" and "vegetarian" in local language',
      'Try local cuisine but start slowly to adjust your stomach',
    ],
  },
  {
    title: 'Shopping Smartly',
    icon: ShoppingBag,
    tips: [
      'Bargaining is expected in many Asian and Middle Eastern markets',
      'Start at 50% of quoted price and negotiate from there',
      'Check duty-free allowances before buying',
      'Keep all receipts for customs and potential returns',
      'Compare prices at multiple shops before buying',
      'Be wary of fake branded goods - heavy customs penalties',
    ],
  },
  {
    title: 'Packing Smart',
    icon: Shirt,
    tips: [
      'Pack versatile clothing that can be mixed and matched',
      'Roll clothes instead of folding to save space',
      'Keep one change of clothes in carry-on bag',
      'Wear heaviest items on the flight to save luggage weight',
      'Use packing cubes for better organization',
      'Check airline baggage allowances before packing',
    ],
  },
];

const generalTips = [
  { tip: 'Book flights on Tuesday/Wednesday for cheaper rates', category: 'Flights' },
  { tip: 'Airport lounges can be accessed via credit cards or Priority Pass', category: 'Airports' },
  { tip: 'Portable WiFi devices often work better than local SIMs', category: 'Connectivity' },
  { tip: 'Travel during shoulder season for best value', category: 'Planning' },
  { tip: 'Always have a VPN app installed for secure browsing', category: 'Security' },
  { tip: 'Download offline content on Netflix/Prime before flights', category: 'Entertainment' },
  { tip: 'Arrive at international airports 3 hours before departure', category: 'Airports' },
  { tip: 'Keep small USD bills for tips and emergencies globally', category: 'Money' },
];

const TravelTips = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="tips" />;
  }

  return (
    <>
      <SEOHead
        title="Essential Travel Tips for Indian Travellers 2026 | Expert Advice | Rudraksh Safar"
        description="Expert travel tips for Indian travellers. Cultural etiquette, safety advice, photography tips, shopping bargaining, and insider secrets for a smooth trip."
        keywords="travel tips India, international travel advice, travel hacks, cultural etiquette abroad, safety tips travellers"
        canonicalUrl="https://rudrakshsafar.com/travel-tips"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                Expert Advice
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Essential Travel Tips
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Insider tips and practical advice to make your international trip smooth, safe, and memorable.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="bg-muted/30 border border-border rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-foreground">Disclaimer</h2>
                  <p className="text-sm text-muted-foreground">
                    Tips here are informational only and not medical, legal, or professional advice. Always follow local laws, official advisories, and professional guidance for your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Tips */}
          <AnimatedSection delay={100}>
            <div className="bg-secondary/10 rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" />
                Quick Travel Hacks
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {generalTips.map((item, index) => (
                  <div key={index} className="bg-background rounded-xl p-3">
                    <span className="text-xs text-secondary font-medium">{item.category}</span>
                    <p className="text-sm mt-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Category Tips */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={150 + index * 50}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Do's and Don'ts */}
          <AnimatedSection delay={500}>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">✓ Travel Do's</h3>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>✓ Carry photocopies of all important documents</li>
                  <li>✓ Inform your bank about travel dates</li>
                  <li>✓ Learn emergency phrases in local language</li>
                  <li>✓ Keep emergency numbers saved offline</li>
                  <li>✓ Respect local customs and traditions</li>
                  <li>✓ Stay hydrated and get adequate rest</li>
                  <li>✓ Keep your phone charged when exploring</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">✗ Travel Don'ts</h3>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>✗ Don't carry all cash/cards in one place</li>
                  <li>✗ Don't leave bags unattended</li>
                  <li>✗ Don't share travel plans with strangers</li>
                  <li>✗ Don't ignore travel advisories</li>
                  <li>✗ Don't exchange currency at airports</li>
                  <li>✗ Don't skip travel insurance</li>
                  <li>✗ Don't overpack - travel light</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelTips;
