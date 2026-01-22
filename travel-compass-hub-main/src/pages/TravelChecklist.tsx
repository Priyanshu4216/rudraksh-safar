import React, { useState, useEffect } from 'react';
import { CheckSquare, Briefcase, FileText, Pill, Camera, CreditCard, Shirt, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';

const checklistCategories = [
  {
    title: 'Travel Documents',
    icon: FileText,
    items: [
      'Valid passport (6+ months validity)',
      'Visa / e-Visa printout (if required)',
      'Flight tickets (digital + printed copy)',
      'Hotel booking confirmations',
      'Travel insurance documents',
      'Passport size photos (4-6 copies)',
      'Driving license / International permit',
      'ID proof copies (Aadhaar, PAN)',
      'Emergency contact list',
      'Itinerary copy',
    ],
  },
  {
    title: 'Money & Cards',
    icon: CreditCard,
    items: [
      'Foreign currency (small denominations)',
      'International debit/credit card',
      'Forex card (loaded with destination currency)',
      'Indian cash for airport/emergency',
      'Wallet with card slots',
      'Money belt or hidden pouch',
      'Bank customer care numbers noted',
      'Enable international transactions on cards',
    ],
  },
  {
    title: 'Electronics',
    icon: Camera,
    items: [
      'Smartphone + charger',
      'Power bank (allowed capacity)',
      'Universal travel adapter',
      'Camera + extra batteries/memory cards',
      'Laptop/tablet (if needed)',
      'Earphones/headphones',
      'E-book reader',
      'Portable WiFi device (if renting)',
    ],
  },
  {
    title: 'Health & Medicine',
    icon: Pill,
    items: [
      'Prescription medicines (with prescription copy)',
      'Pain relievers (Paracetamol, Ibuprofen)',
      'Anti-allergics',
      'Motion sickness tablets',
      'Digestive medicines',
      'Band-aids and antiseptic cream',
      'Sunscreen SPF 50+',
      'Mosquito repellent',
      'Personal hygiene products',
      'Hand sanitizer',
      'Face masks',
    ],
  },
  {
    title: 'Clothing',
    icon: Shirt,
    items: [
      'Weather-appropriate outfits',
      'Comfortable walking shoes',
      'Flip-flops/sandals',
      'Formal outfit (if needed)',
      'Undergarments (pack extra)',
      'Sleepwear',
      'Swimwear',
      'Light jacket/sweater',
      'Rain jacket/umbrella',
      'Sunglasses and hat',
      'Scarf/shawl for temples',
    ],
  },
  {
    title: 'Toiletries (100ml or less for cabin)',
    icon: Briefcase,
    items: [
      'Toothbrush & toothpaste',
      'Shampoo & conditioner',
      'Body wash/soap',
      'Deodorant',
      'Moisturizer',
      'Lip balm',
      'Razor & shaving cream',
      'Hairbrush/comb',
      'Makeup essentials',
      'Wet wipes',
      'Tissues',
    ],
  },
];

const TravelChecklist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (item: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return <PageLoader type="checklist" />;
  }

  return (
    <>
      <SEOHead
        title="Complete Travel Packing Checklist 2026 | International Trip Essentials | Rudraksh Safar"
        description="Ultimate packing checklist for international travel. Documents, electronics, medicines, clothing - everything you need to pack for your trip abroad."
        keywords="travel packing checklist, international travel checklist, what to pack for trip, travel essentials list India"
        canonicalUrl="https://rudrakshsafar.com/travel-checklist"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <CheckSquare className="w-4 h-4" />
                Packing Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Travel Packing Checklist
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Never forget anything important again! Use this interactive checklist to pack perfectly for your next trip.
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Checked: {checkedItems.size} items
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {checklistCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={100 + index * 50}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold">{category.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => toggleItem(item)}
                          className={`w-full text-left flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-muted/50 ${
                            checkedItems.has(item) ? 'text-muted-foreground line-through' : ''
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center ${
                            checkedItems.has(item) 
                              ? 'bg-secondary border-secondary text-secondary-foreground' 
                              : 'border-border'
                          }`}>
                            {checkedItems.has(item) && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 bg-secondary/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Pro Packing Tips</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Roll, Don't Fold</h4>
                  <p className="text-sm text-muted-foreground">Rolling clothes saves space and prevents wrinkles better than folding.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wear Heavy Items</h4>
                  <p className="text-sm text-muted-foreground">Wear your heaviest shoes and jacket on the flight to save luggage weight.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Essential in Cabin</h4>
                  <p className="text-sm text-muted-foreground">Keep medications, documents, and one change of clothes in cabin bag.</p>
                </div>
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

export default TravelChecklist;
