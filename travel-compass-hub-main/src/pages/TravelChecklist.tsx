import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Briefcase, FileText, Pill, Camera, CreditCard, Shirt, Download, Printer, ArrowRight, Plane, Baby, Mountain } from 'lucide-react';
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
    essential: true,
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
    essential: true,
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
    essential: false,
    items: [
      'Smartphone + charger',
      'Power bank (max 20000mAh for flights)',
      'Universal travel adapter',
      'Camera + extra batteries/memory cards',
      'Laptop/tablet (if needed)',
      'Earphones/headphones',
      'E-book reader',
      'Portable WiFi device (if renting)',
      'USB cables (Type-C, Lightning)',
      'Extension cord with USB ports',
    ],
  },
  {
    title: 'Health & Medicine',
    icon: Pill,
    essential: true,
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
      'ORS sachets',
    ],
  },
  {
    title: 'Clothing',
    icon: Shirt,
    essential: false,
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
      'Compression socks (long flights)',
    ],
  },
  {
    title: 'Toiletries (100ml or less for cabin)',
    icon: Briefcase,
    essential: false,
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
      'Feminine hygiene products',
    ],
  },
];

const additionalLists = [
  {
    title: 'Beach Holiday Extras',
    icon: '🏖️',
    items: ['Reef-safe sunscreen', 'Beach towel', 'Snorkeling gear', 'Waterproof phone pouch', 'Beach bag', 'After-sun lotion'],
  },
  {
    title: 'Adventure Trip Extras',
    icon: '🏔️',
    items: ['Hiking boots', 'Trekking poles', 'Headlamp', 'First aid kit', 'Dry bags', 'Quick-dry towel', 'Energy bars'],
  },
  {
    title: 'Business Travel Extras',
    icon: '💼',
    items: ['Formal shoes', 'Iron/steamer', 'Business cards', 'Laptop + charger', 'Presentation materials', 'Tie/accessories'],
  },
  {
    title: 'Traveling with Kids',
    icon: '👶',
    items: ['Diapers & wipes', 'Baby food/formula', 'Toys/entertainment', 'Child medicine', 'Stroller', 'Car seat', 'Snacks'],
  },
];

const TravelChecklist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    // Load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('travelChecklist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const [showEssentialsOnly, setShowEssentialsOnly] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem('travelChecklist', JSON.stringify([...checkedItems]));
  }, [checkedItems]);

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

  const clearAll = () => {
    setCheckedItems(new Set());
    localStorage.removeItem('travelChecklist');
  };

  const filteredCategories = useMemo(() => {
    if (showEssentialsOnly) {
      return checklistCategories.filter(c => c.essential);
    }
    return checklistCategories;
  }, [showEssentialsOnly]);

  const totalItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const checkedCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => {
      return acc + cat.items.filter(item => checkedItems.has(item)).length;
    }, 0);
  }, [filteredCategories, checkedItems]);

  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  if (isLoading) {
    return <PageLoader type="checklist" />;
  }

  return (
    <>
      <SEOHead
        title="Complete Travel Packing Checklist 2026 | International Trip Essentials | Rudraksh Safar"
        description="Ultimate packing checklist for international travel. Documents, electronics, medicines, clothing - interactive checklist with progress tracking. Beach, adventure, business trip extras included."
        keywords="travel packing checklist, international travel checklist, what to pack for trip, travel essentials list India, packing list pdf"
        canonicalUrl="https://rudrakshsafar.com/travel-checklist"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <CheckSquare className="w-4 h-4" />
                Packing Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Travel Packing Checklist
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Never forget anything important again! Use this interactive checklist to pack perfectly for your next trip. Progress is saved automatically.
              </p>
            </div>
          </AnimatedSection>

          {/* Progress Bar & Controls */}
          <AnimatedSection delay={50}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">{progress}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{checkedCount}/{totalItems}</div>
                    <div className="text-sm text-muted-foreground">Items packed</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={showEssentialsOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowEssentialsOnly(!showEssentialsOnly)}
                  >
                    {showEssentialsOnly ? "Show All" : "Essentials Only"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearAll}>
                    Reset All
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.print()}>
                    <Printer className="w-4 h-4 mr-1" />
                    Print
                  </Button>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-secondary to-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {progress === 100 && (
                <div className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">
                  🎉 You're all packed and ready to go!
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Main Checklist */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filteredCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={100 + index * 30}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h2 className="text-xl font-serif font-bold">{category.title}</h2>
                    </div>
                    {category.essential && (
                      <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded-full">
                        Essential
                      </span>
                    )}
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
                          <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center mt-0.5 ${
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

          {/* Additional Lists */}
          <AnimatedSection delay={350}>
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Trip-Specific Extras</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalLists.map((list) => (
                  <div key={list.title} className="bg-background rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{list.icon}</span>
                      <h3 className="font-semibold text-sm">{list.title}</h3>
                    </div>
                    <ul className="space-y-1">
                      {list.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-secondary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Pro Tips */}
          <AnimatedSection delay={400}>
            <div className="bg-secondary/10 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Pro Packing Tips</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">🎒 Roll, Don't Fold</h4>
                  <p className="text-sm text-muted-foreground">Rolling clothes saves up to 30% space and prevents wrinkles better than folding.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">👟 Wear Heavy Items</h4>
                  <p className="text-sm text-muted-foreground">Wear your heaviest shoes and jacket on the flight to save luggage weight and space.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💊 Essential in Cabin</h4>
                  <p className="text-sm text-muted-foreground">Keep medications, documents, valuables, and one change of clothes in cabin bag.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📦 Use Packing Cubes</h4>
                  <p className="text-sm text-muted-foreground">Organize by category or day. Makes unpacking and repacking much faster.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">⚖️ Weigh Before Leaving</h4>
                  <p className="text-sm text-muted-foreground">Use bathroom scale or luggage scale to avoid overweight charges at airport.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📸 Photo Your Bag</h4>
                  <p className="text-sm text-muted-foreground">Take a photo of packed bag contents for insurance claims if luggage is lost.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection delay={450}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">Continue Planning</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/travel-services/visa-assistance" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  <FileText className="w-4 h-4" />
                  Visa Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/currency-guide" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  <CreditCard className="w-4 h-4" />
                  Currency Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/travel-health" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  <Pill className="w-4 h-4" />
                  Health Guide <ArrowRight className="w-4 h-4" />
                </Link>
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
