import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import {
  FileCheck,
  CreditCard,
  Smartphone,
  Bus,
  Shield,
  Utensils,
  Cloud,
  Heart,
  ShoppingBag,
  Languages,
  Coins,
  Plug,
  Calendar,
  AppWindow,
  Phone,
  CheckCircle,
  FileText,
  AlertTriangle,
  Globe,
  MapPin,
  Plane,
  ArrowRight,
  Lightbulb,
  Stethoscope,
  CheckSquare,
  Sparkles
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Guide pages with links
const guidePages = [
  {
    title: 'Visa Guide',
    description: 'Complete visa requirements for popular destinations',
    icon: FileCheck,
    href: '/visa-guide',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Passport Rules',
    description: 'Validity, blank pages & documentation requirements',
    icon: FileText,
    href: '/passport-guide',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Visa-Free Countries',
    description: 'Destinations with easy entry for Indians',
    icon: Globe,
    href: '/visa-free-countries',
    color: 'from-purple-500 to-violet-600',
  },
  {
    title: 'Packing Checklist',
    description: 'Interactive checklist for your trip essentials',
    icon: CheckSquare,
    href: '/travel-checklist',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Currency Guide',
    description: 'Forex tips, cards & money management abroad',
    icon: CreditCard,
    href: '/currency-guide',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    title: 'Best Time to Visit',
    description: 'Weather, seasons & festivals for destinations',
    icon: Cloud,
    href: '/best-time-to-visit',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    title: 'Travel Health',
    description: 'Vaccinations, insurance & medical kit essentials',
    icon: Stethoscope,
    href: '/travel-health',
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Travel Tips',
    description: 'Expert tips for a smooth travel experience',
    icon: Lightbulb,
    href: '/travel-tips',
    color: 'from-indigo-500 to-purple-600',
  },
];

const ForTravellers = () => {
  const [isLoading, setIsLoading] = useState(true);

  const quickNavExcludedIds = new Set(['visa', 'passport', 'health', 'currency', 'weather']);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const travelGuideCategories = [
    {
      id: 'visa',
      title: 'Visa Guide',
      icon: FileCheck,
      color: 'from-blue-500 to-indigo-600',
      description: 'Complete visa requirements for Indian travellers',
      sections: [
        {
          title: 'Visa Types',
          content: 'Tourist visa, Transit visa, On-arrival visa, eVisa - each country has different requirements. Tourist visas are most common for leisure travel and typically valid for 30-90 days.'
        },
        {
          title: 'Documents Required',
          content: 'Valid passport (6+ months validity), passport-size photos, bank statements (3-6 months), flight tickets, hotel bookings, travel insurance, invitation letter (if applicable).'
        },
        {
          title: 'Processing Time',
          content: 'Standard processing: 5-15 working days. Express processing: 2-5 days (additional fees apply). Some countries offer visa on arrival or eVisa within 24-72 hours.'
        },
        {
          title: 'Visa-Free Countries for Indians',
          content: 'Bhutan, Nepal, Maldives, Thailand (on arrival), Indonesia (on arrival), Mauritius, Seychelles, and several Caribbean nations offer visa-free or visa-on-arrival access.'
        }
      ]
    },
    {
      id: 'passport',
      title: 'Passport Rules',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      description: 'Passport requirements and validity rules',
      sections: [
        {
          title: 'Minimum Validity',
          content: 'Most countries require 6 months passport validity beyond your travel dates. Some require validity for the entire trip duration plus 3 months.'
        },
        {
          title: 'Blank Pages',
          content: 'Minimum 2 blank pages required for entry stamps. Some countries like USA, UK require blank pages facing each other.'
        },
        {
          title: 'Damaged Passport',
          content: 'Torn, water-damaged, or heavily worn passports may be rejected at immigration. Get a replacement before travel if your passport shows wear.'
        },
        {
          title: 'Name Mismatch',
          content: 'Passport name must exactly match flight tickets and visa. Minor spelling variations can cause issues at immigration.'
        }
      ]
    },
    {
      id: 'immigration',
      title: 'Immigration Rules',
      icon: Shield,
      color: 'from-red-500 to-rose-600',
      description: 'Customs and immigration guidelines',
      sections: [
        {
          title: 'Arrival Declaration',
          content: 'Fill arrival cards completely and accurately. Declare cash over $10,000 (or equivalent), gifts above duty-free limits, and any restricted items.'
        },
        {
          title: 'Customs Limits',
          content: 'Typically: 200 cigarettes, 1-2 liters alcohol, personal electronics, gifts up to $500. Limits vary by country - check specific rules.'
        },
        {
          title: 'Prohibited Items',
          content: 'Drugs, weapons, counterfeit goods, certain food items (meat, dairy, fruits), wildlife products are universally prohibited.'
        },
        {
          title: 'Interview Tips',
          content: 'Be polite and confident. Have hotel bookings and return tickets ready. Know your travel itinerary. Answer questions directly without over-explaining.'
        }
      ]
    },
    {
      id: 'currency',
      title: 'Currency & Payments',
      icon: CreditCard,
      color: 'from-yellow-500 to-amber-600',
      description: 'Money matters and payment options abroad',
      sections: [
        {
          title: 'Forex Tips',
          content: 'Exchange some currency before departure for immediate expenses. Airport forex has poor rates. Use authorized dealers or bank forex cards for better rates.'
        },
        {
          title: 'Cards vs Cash',
          content: 'Carry mix of cash and cards. International debit/credit cards work in most countries. Inform your bank about travel dates to avoid card blocks.'
        },
        {
          title: 'UPI Abroad',
          content: 'UPI works in Singapore, UAE, Nepal, Bhutan, and expanding to more countries. Check BHIM UPI app for supported destinations.'
        },
        {
          title: 'ATM Usage',
          content: 'Use bank ATMs over standalone machines. Decline currency conversion offers (dynamic currency conversion) - always pay in local currency.'
        }
      ]
    },
    {
      id: 'connectivity',
      title: 'SIM & Internet',
      icon: Smartphone,
      color: 'from-purple-500 to-violet-600',
      description: 'Stay connected while travelling',
      sections: [
        {
          title: 'Tourist SIMs',
          content: 'Available at airports in most countries. Pricing: $10-30 for 7-15 days with data. Carry passport for registration.'
        },
        {
          title: 'eSIM Options',
          content: 'Works on newer phones. Services like Airalo, Holafly offer international eSIMs. Activate before travel for seamless connectivity.'
        },
        {
          title: 'WiFi Tips',
          content: 'Most hotels, cafes offer free WiFi. Use VPN on public networks for security. Download offline maps before travel.'
        },
        {
          title: 'Roaming Plans',
          content: 'Check Airtel, Jio, Vi international roaming packs. Often cheaper than buying local SIMs for short trips.'
        }
      ]
    },
    {
      id: 'transport',
      title: 'Transport Guide',
      icon: Bus,
      color: 'from-cyan-500 to-teal-600',
      description: 'Getting around at your destination',
      sections: [
        {
          title: 'Choosing Safe Transport Options',
          content: 'Prefer licensed taxis and ride-hailing apps like Uber/Grab. Avoid unofficial transport offers at airports. Always verify routes and fares before starting the journey.'
        },
        {
          title: 'Public Transport Tips',
          content: 'Learn basic routes in advance using maps. Avoid peak rush hours with luggage. Keep belongings secure in crowded trains or buses. Buy day passes for cost savings.'
        },
        {
          title: 'Ride Apps',
          content: 'Uber works globally. Regional apps: Grab (SEA), Bolt (Europe), Careem (Middle East), Ola (India, UK). Always check the car number plate before entering.'
        },
        {
          title: 'Transport Cards',
          content: 'Octopus (Hong Kong), Oyster (London), Suica (Japan), EZ-Link (Singapore) - buy at airports. They are cheaper and convenient for all public transport.'
        }
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Scams',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600',
      description: 'Stay safe and avoid tourist scams',
      sections: [
        {
          title: 'Common Travel Scams',
          content: 'Be aware of fake tour guides, overcharging taxis, friend-making scams, fake hotel booking emails, and ATM skimming. Always use official service providers.'
        },
        {
          title: 'How to Stay Safe',
          content: 'Use verified services only. Avoid sharing personal details with strangers. Keep valuables secure (use hotel safe). Stay aware of your surroundings.'
        },
        {
          title: 'Safety Zones',
          content: 'Research safe neighborhoods. Avoid unlit or deserted areas at night. Stick to main tourist areas if unsure. Ask hotel staff for advice on areas to avoid.'
        },
        {
          title: 'Emergency Numbers',
          content: 'Save local emergency numbers (Police/Ambulance). Register with Indian Embassy (MADAD). Share your live location/itinerary with family.'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food Guide',
      icon: Utensils,
      color: 'from-pink-500 to-rose-600',
      description: 'Eating well while travelling',
      sections: [
        {
          title: 'Dietary Options',
          content: 'Most tourist destinations have vegetarian options. Look for Indian restaurants for familiar food. Use HappyCow app for veg/vegan options.'
        },
        {
          title: 'Street Food Safety',
          content: 'Choose busy stalls with high turnover. Avoid raw foods and ice. Carry hand sanitizer. Watch food being cooked fresh.'
        },
        {
          title: 'Water Safety',
          content: 'Drink bottled water only. Avoid ice in drinks. Brush teeth with bottled water in developing countries. Carry water purification tablets.'
        },
        {
          title: 'Food Allergies',
          content: 'Learn allergy-related phrases in local language. Carry allergy cards translated. Research common allergens in local cuisine.'
        }
      ]
    },
    {
      id: 'weather',
      title: 'Weather & Best Time',
      icon: Cloud,
      color: 'from-sky-500 to-blue-600',
      description: 'Plan around seasons and weather',
      sections: [
        {
          title: 'Peak vs Off-Season',
          content: 'Peak season: Best weather, highest prices. Shoulder season: Good weather, moderate prices. Off-season: Lower prices, possible weather issues.'
        },
        {
          title: 'Monsoon Considerations',
          content: 'Avoid Southeast Asia June-September for beach destinations. Some destinations like Kerala are beautiful during monsoon.'
        },
        {
          title: 'Packing for Weather',
          content: 'Check 10-day forecast before packing. Layer for variable weather. Carry compact umbrella and rain jacket.'
        },
        {
          title: 'Festival Seasons',
          content: 'Festivals mean crowds but unique experiences. Book accommodation months in advance. Research local festivals for cultural immersion.'
        }
      ]
    },
    {
      id: 'health',
      title: 'Health & Insurance',
      icon: Heart,
      color: 'from-emerald-500 to-green-600',
      description: 'Stay healthy while travelling',
      sections: [
        {
          title: 'Why Travel Insurance Is Essential',
          content: 'Protects against unexpected expenses like medical emergencies, cancellations, baggage loss, and accidents. Mandatory for entry in many countries.'
        },
        {
          title: 'Situations Where Insurance Is Useful',
          content: 'Medical treatment/hospitalization, emergency evacuation, flight delays/cancellations, lost/stolen baggage, and accidental injury.'
        },
        {
          title: 'How to Use Insurance Helpline',
          content: 'Keep policy number accessible. Call the helpline BEFORE hospital admission if possible. Follow insurer instructions for cashless claims. Retain all bills.'
        },
        {
          title: 'Vaccinations & Medical Kit',
          content: 'Check required vaccines 6-8 weeks prior. Carry prescription meds with doctor\'s note, first-aid basics, and personal hygiene items.'
        }
      ]
    },
    {
      id: 'shopping',
      title: 'Shopping Guide',
      icon: ShoppingBag,
      color: 'from-fuchsia-500 to-pink-600',
      description: 'Smart shopping while travelling',
      sections: [
        {
          title: 'Famous Souvenirs',
          content: 'Research authentic local products. Avoid tourist trap shops near attractions. Visit local markets for genuine items at better prices.'
        },
        {
          title: 'Duty-Free Rules',
          content: 'Indian duty-free limit: ₹50,000 (general) + ₹15,000 (gifts). Declare purchases above limits. Keep receipts for customs.'
        },
        {
          title: 'Bargaining Tips',
          content: 'Expected in markets, not in malls. Start at 40-50% of asking price. Walk away tactic works. Be respectful while negotiating.'
        },
        {
          title: 'Tax Refunds',
          content: 'Many countries offer VAT refund for tourists. Ask for tax-free forms. Claim at airport before departure. Minimum purchase usually required.'
        }
      ]
    },
    {
      id: 'language',
      title: 'Language Basics',
      icon: Languages,
      color: 'from-indigo-500 to-purple-600',
      description: 'Communicate effectively abroad',
      sections: [
        {
          title: 'Why Language Basics Help',
          content: 'Knowing basic phrases makes navigation easier, improves local interaction, and reduces misunderstandings. Locals appreciate the effort.'
        },
        {
          title: 'Essential Phrases to Learn',
          content: 'Hello, Thank you, Please, Sorry, Help, How much?, Where is...?, I don\'t understand. Numbers 1-10 are also very useful.'
        },
        {
          title: 'Translation Apps',
          content: 'Google Translate (offline mode), Camera translation for signs/menus. Voice translation for conversations is very effective.'
        },
        {
          title: 'Non-Verbal Communication',
          content: 'Be aware of body language. A smile is universal. Learn culturally appropriate gestures (e.g., bowing in Japan, namaste in India/Nepal).'
        }
      ]
    },
    {
      id: 'tipping',
      title: 'Tipping Culture',
      icon: Coins,
      color: 'from-amber-500 to-yellow-600',
      description: 'Tipping etiquette around the world',
      sections: [
        {
          title: 'Restaurants',
          content: 'USA/Canada: 15-20% standard. Europe: 5-10% or round up. Asia: Not expected, service charge often included. Check bill for included gratuity.'
        },
        {
          title: 'Hotels',
          content: 'Housekeeping: $1-5/day. Bellboy: $1-2/bag. Concierge: $5-20 for special requests. Room service: Check if tip included.'
        },
        {
          title: 'Tour Guides & Drivers',
          content: 'Day tour guide: $10-20. Multi-day guide: $20-50/day. Drivers: $5-10/day. Group tours: Split tip among travelers.'
        },
        {
          title: 'Spa & Services',
          content: 'Spa: 10-20% of service cost. Hairdresser: 10-15%. Taxi: Round up or 5-10%. Delivery: $2-5.'
        }
      ]
    },
    {
      id: 'electrical',
      title: 'Plug & Voltage',
      icon: Plug,
      color: 'from-gray-500 to-slate-600',
      description: 'Electrical compatibility abroad',
      sections: [
        {
          title: 'Power & Charging Information',
          content: 'Check voltage compatibility (110V vs 230V). Most modern phone/laptop chargers are dual voltage, but hair dryers may need a converter.'
        },
        {
          title: 'Plug Types & Adapters',
          content: 'Carry a universal travel adapter to fit different socket types (Type A, G, C, etc.). It’s the most essential tech accessory.'
        },
        {
          title: 'Device Safety',
          content: 'Use surge protectors if possible. Avoid using public charging stations (USB ports) due to data theft risks—use your own power bank instead.'
        },
        {
          title: 'Power Banks',
          content: 'Carry a 10000mAh+ power bank. Must be in cabin baggage (carry-on), not check-in luggage, per airline safety rules.'
        }
      ]
    },
    {
      id: 'holidays',
      title: 'Holidays & Festivals',
      icon: Calendar,
      color: 'from-rose-500 to-red-600',
      description: 'Plan around local events',
      sections: [
        {
          title: 'Major Festivals',
          content: 'Research destination festivals. Book early for popular events. Expect crowds and higher prices during festivals.'
        },
        {
          title: 'Public Holidays',
          content: 'Banks, offices, attractions may close. Transport runs on holiday schedule. Plan accordingly and check opening hours.'
        },
        {
          title: 'Travel Impact',
          content: 'Avoid travel during local holiday weeks (Chinese New Year, Eid, Christmas). Higher prices, sold-out accommodations common.'
        },
        {
          title: 'Cultural Events',
          content: 'Participate respectfully in local celebrations. Follow dress codes at religious sites. Ask before photographing ceremonies.'
        }
      ]
    },
    {
      id: 'budget',
      title: 'Travel Budget',
      icon: CreditCard,
      color: 'from-teal-500 to-cyan-600',
      description: 'Plan your travel expenses',
      sections: [
        {
          title: 'Smart Budgeting Tips',
          content: 'Keep mixed payment options (Cash + Cards). Inform your bank before international travel to avoid card blocking. Track daily expenses.'
        },
        {
          title: 'Money Management',
          content: 'Avoid carrying excessive cash. Use hotel safes. Split cash in different bags. Use low-markup forex cards (like Niyoman, BookMyForex).'
        },
        {
          title: 'Hidden Costs',
          content: 'Watch out for city taxes, exorbitant roaming charges, foreign transaction fees on cards, and dynamic currency conversion at ATMs.'
        },
        {
          title: 'Money-Saving',
          content: 'Eat local, use public transport, book attractions online in advance, and travel during shoulder seasons for better rates.'
        }
      ]
    },
    {
      id: 'apps',
      title: 'Essential Apps',
      icon: AppWindow,
      color: 'from-violet-500 to-purple-600',
      description: 'Must-have apps for travellers',
      sections: [
        {
          title: 'Recommended App Categories',
          content: 'Maps (Google Maps/Citymapper), Currency (XE), Rides (Uber/Grab), Translation (Google Translate), Emergency (local apps).'
        },
        {
          title: 'Map & Navigation',
          content: 'Download offline maps on Google Maps. Use Waze for driving info. Citymapper is excellent for public transport in major cities.'
        },
        {
          title: 'Utilities',
          content: 'TripIt for itinerary management. Splitwise for group expenses. VPN for secure browsing. PackPoint for packing lists.'
        },
        {
          title: 'Why Use Apps',
          content: 'They improve safety, efficiency, and convenience. Ensure you have roaming data or WiFi to use them effectively.'
        }
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Contacts',
      icon: Phone,
      color: 'from-red-600 to-rose-700',
      description: 'Important numbers to save',
      sections: [
        {
          title: 'Indian Embassy & Consular Support',
          content: 'Primary contact for Indian citizens. Contact for: Passport loss/theft, legal issues, arrest, death, or major emergencies. Always save embassy details.'
        },
        {
          title: 'Family & Emergency Contact Planning',
          content: 'Share itinerary with family. Save local emergency numbers (Police, Ambulance). Set up international roaming. Use location sharing for long trips.'
        },
        {
          title: 'Recommended Contacts',
          content: 'Family members, Insurance provider (24/7 Helpline), Local emergency services, Indian Embassy/Consulate. Keep both digital and physical copies.'
        },
        {
          title: 'Universal Emergency',
          content: '112 is the common emergency number in many countries (EU, India). Know the specific numbers for your destination (e.g., 911 for USA).'
        }
      ]
    },
    {
      id: 'dos-donts',
      title: "Do's & Don'ts",
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-700',
      description: 'Quick reference travel tips',
      sections: [
        {
          title: 'Travel Do\'s',
          content: 'Respect local laws and customs. Carry valid ID. Stay aware of surroundings. Follow safety advisories. Keep emergency cash. Register with embassy for long stays.'
        },
        {
          title: 'Travel Don\'ts',
          content: 'Avoid unsafe areas at night. Do not engage in illegal activities. Avoid unverified transport. Do not ignore local regulations. Don\'t leave drinks unattended.'
        },
        {
          title: 'Cultural Sensitivity & Etiquette',
          content: 'Dress modestly where required (temples, conservative countries). Follow religious norms. Be polite and patient. Avoid sensitive political discussions.'
        },
        {
          title: 'Photography & Privacy',
          content: 'Ask permission before photographing people. Avoid restricted/military areas. Respect rules at religious sites. Follow drone regulations strictly.'
        }
      ]
    }
  ];

  if (isLoading) {
    return <PageLoader type="hub" />;
  }

  return (
    <>
      <Helmet>
        <title>Travel Guide for Indian Tourists | Visa, Safety, Tips | Rudraksh Safar</title>
        <meta name="description" content="Complete travel guide for Indian travellers. Visa requirements, safety tips, currency exchange, packing checklist, emergency contacts and more. Your trusted travel companion from Bhilai." />
        <meta name="keywords" content="travel guide India, visa for Indians, travel tips, currency exchange abroad, travel safety, packing list, Indian embassy contacts" />
        <link rel="canonical" href="https://rudrakshsafar.com/for-travellers" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Plane className="w-4 h-4" />
                For Travellers
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Your Complete Travel Companion
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know before your international trip. Click on any guide below to explore detailed information.
              </p>

              {/* Guide Pages Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {guidePages.map((guide, index) => (
                  <Link
                    key={guide.title}
                    to={guide.href}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${guide.color} p-4 h-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <guide.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-sm leading-tight">{guide.title}</h3>
                        <p className="text-xs text-white/80 line-clamp-2">{guide.description}</p>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border border-border rounded-2xl p-4 shadow-lg">
                  <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
                  <nav className="space-y-1">
                    {travelGuideCategories
                      .filter((category) => !quickNavExcludedIds.has(category.id))
                      .map((category) => (
                        <a
                          key={category.id}
                          href={`#${category.id}`}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/10 transition-colors"
                        >
                          <category.icon className="w-4 h-4" />
                          {category.title}
                        </a>
                      ))}
                  </nav>

                  {/* Dedicated Pages Links */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3">Detailed Guides</h4>
                    <nav className="space-y-1">
                      {guidePages.slice(0, 4).map((guide) => (
                        <Link
                          key={guide.title}
                          to={guide.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
                        >
                          <guide.icon className="w-4 h-4" />
                          {guide.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* AI Summary Block */}
                <div className="mb-12 bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Travel Safety & Essentials Guide</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This page provides essential travel safety information, emergency contacts, cultural guidelines, insurance awareness, and practical tips to help travellers stay informed, safe, and prepared during domestic and international journeys.
                      </p>
                    </div>
                  </div>
                </div>
                {travelGuideCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    id={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                  >
                    <Card className="border-border shadow-lg overflow-hidden">
                      <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            <category.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                            <CardDescription className="text-white/80">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          {category.sections.map((section, sIndex) => (
                            <AccordionItem key={sIndex} value={`item-${sIndex}`}>
                              <AccordionTrigger className="text-foreground hover:text-secondary">
                                {section.title}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {section.content}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Packing Checklist */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                  id="packing"
                >
                  <Card className="border-border shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <CheckCircle className="w-6 h-6" />
                        Packing Checklist
                      </CardTitle>
                      <CardDescription className="text-secondary-foreground/80">
                        Don't forget these essentials
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Documents</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Passport (6+ months validity)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Visa / eVisa printout
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Flight tickets
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Hotel bookings
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Travel insurance
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Photocopies of all documents
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Electronics</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Universal travel adapter
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Power bank (10000mAh+)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Phone charger & cables
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Camera & memory cards
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Earphones
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Health & Safety</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Prescription medicines
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              First aid kit
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Hand sanitizer
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Sunscreen
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Insect repellent
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Money & Cards</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Forex card
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              International debit/credit cards
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Some local currency cash
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Emergency USD cash
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default ForTravellers;
