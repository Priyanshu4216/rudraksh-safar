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
      title: 'Visa Guide – Document Checklist',
      icon: FileCheck,
      color: 'from-blue-500 to-indigo-600',
      description: 'Complete visa requirements for Indian travellers',
      sections: [
        {
          title: 'Visa Types',
          content: 'Tourist visas are issued for leisure travel and sightseeing and usually allow stays between 14 and 90 days depending on the country. Transit visas are required when changing flights in certain countries even if you do not leave the airport. Visa-on-arrival allows Indians to obtain entry permission at the destination airport, while eVisas are applied online before travel and approved electronically. Always confirm visa type before booking flights, as rules differ by passport and destination.'
        },
        {
          title: 'Documents Required',
          content: 'Indian travellers generally need a passport with at least 6 months validity, recent photographs, confirmed flight tickets, hotel bookings, bank statements for the last 3–6 months, travel insurance, and sometimes an invitation letter. Some countries may also ask for employment proof or income documents. Missing or inconsistent documents are one of the most common reasons for visa delays or rejection.'
        },
        {
          title: 'Processing Time',
          content: 'Visa processing times vary widely. eVisas may be approved within 24–72 hours, while embassy visas can take 5–15 working days or longer during peak seasons. Appointment-based visas (such as Schengen) require advance scheduling, so applications should ideally be started 4–6 weeks before travel.'
        },
        {
          title: 'Visa-Free Countries for Indians',
          content: 'Indian passport holders can enter certain countries without a pre-approved visa or obtain a visa on arrival. These typically include neighbouring countries and selected island or tourist destinations. Entry conditions may still require return tickets, hotel bookings, and sufficient funds, so visa-free does not mean document-free.'
        }
      ]
    },
    {
      id: 'passport',
      title: 'Passport Rules – Validity & Requirements',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      description: 'Check your passport before booking',
      sections: [
        {
          title: 'Minimum Validity',
          content: 'Most countries require passports to remain valid for at least six months beyond the return date. Even if your trip is short, airlines and immigration officers may deny boarding or entry if this rule is not met. Renew your passport early to avoid last-minute issues.'
        },
        {
          title: 'Blank Pages',
          content: 'Immigration stamps and visas require blank pages. A minimum of two blank pages is standard, but some destinations require blank pages facing each other. If your passport is nearly full, renewal is strongly recommended before international travel.'
        },
        {
          title: 'Damaged Passport',
          content: 'Passports with torn pages, water damage, loose binding, or unclear photographs can be rejected at immigration. Even minor damage can cause denial of boarding. If your passport condition is questionable, apply for a replacement before travel.'
        },
        {
          title: 'Name Mismatch',
          content: 'The name on your passport must exactly match your flight tickets and visa. Differences in spelling, initials, or surname order can result in airline refusal or immigration questioning. Always book tickets strictly as per passport.'
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
          content: 'Many countries require travellers to fill arrival or customs declaration forms. These must be completed honestly and accurately. Declare cash above permitted limits, restricted items, or valuable goods. False declarations can lead to fines or detention.'
        },
        {
          title: 'Customs Limits',
          content: 'Each country sets limits on alcohol, cigarettes, electronics, and gifts. Exceeding these limits can result in duties or confiscation. Always check country-specific customs allowances before packing.'
        },
        {
          title: 'Prohibited Items',
          content: 'Drugs, weapons, counterfeit goods, wildlife products, and certain food items are strictly prohibited worldwide. Even medicines legal in India may be restricted elsewhere. Carry prescriptions for all medications.'
        },
        {
          title: 'Interview Tips',
          content: 'Immigration officers may ask about your stay, accommodation, return plans, or finances. Answer calmly and confidently. Keep documents accessible and avoid unnecessary explanations. Confidence and clarity reduce suspicion.'
        }
      ]
    },
    {
      id: 'currency',
      title: 'Currency & Payments – How to pay abroad',
      icon: CreditCard,
      color: 'from-yellow-500 to-amber-600',
      description: 'Smart money management tips',
      sections: [
        {
          title: 'Forex Tips',
          content: 'Carry a combination of cash and cards. Exchange a small amount before departure for immediate expenses. Avoid airport exchange counters due to poor rates. Plan currency based on destination cost levels and length of stay.'
        },
        {
          title: 'Cards vs Cash',
          content: 'International debit and credit cards are widely accepted in cities, but cash is still essential in smaller towns and markets. Inform your bank about international travel to prevent card blocks. Carry at least two cards as backup.'
        },
        {
          title: 'UPI Abroad',
          content: 'UPI acceptance is expanding internationally, but availability varies by country and merchant. Always carry alternative payment options, as UPI cannot be relied upon everywhere.'
        },
        {
          title: 'ATM Usage',
          content: 'Use ATMs located inside banks rather than standalone machines. Always decline currency conversion offers at ATMs and pay in local currency to avoid high conversion charges.'
        }
      ]
    },
    {
      id: 'connectivity',
      title: 'SIM & Connectivity – Stay Online',
      icon: Smartphone,
      color: 'from-purple-500 to-violet-600',
      description: 'Data and calling options',
      sections: [
        {
          title: 'Tourist SIMs',
          content: 'Tourist SIM cards are easily available at airports in most destinations. They typically include data, local calling, and limited validity. Passport verification is mandatory.'
        },
        {
          title: 'eSIM Options',
          content: 'eSIMs allow travellers to activate mobile data without a physical SIM. They are ideal for short trips and dual-SIM phones. Activation should be completed before departure.'
        },
        {
          title: 'WiFi Tips',
          content: 'Free WiFi is common in hotels and cafes, but public networks are insecure. Avoid accessing banking apps on public WiFi and consider using secure networks for sensitive activity.'
        },
        {
          title: 'Roaming Plans',
          content: 'Indian telecom providers offer international roaming packs that may be economical for short stays. Compare costs with local SIMs before deciding.'
        }
      ]
    },
    {
      id: 'transport',
      title: 'Transport Safety – Getting around',
      icon: Bus,
      color: 'from-cyan-500 to-teal-600',
      description: 'Safe commuting advice',
      sections: [
        {
          title: 'Verified Rides',
          content: 'Use official taxi stands or licensed ride-hailing apps. Avoid soliciting drivers at airport arrivals to prevent scams.'
        },
        {
          title: 'Public Transport',
          content: 'Metro and buses are often the safest and cheapest way to travel. Buying a day-pass is cost-effective in major cities.'
        },
        {
          title: 'Ride-Hailing Apps',
          content: 'Global ride apps work in many countries. Always verify the car license plate and driver name before entering the vehicle.'
        },
        {
          title: 'Travel Cards',
          content: 'Prepaid travel cards (like Octopus, Oyster, Suica) save time and money on public transport networks.'
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
          content: 'Tourists are often targeted through fake guides, overcharging taxis, ATM skimming, and misleading booking emails. Always verify services through official sources.'
        },
        {
          title: 'How to Stay Safe',
          content: 'Avoid sharing personal details with strangers. Use hotel safes, avoid isolated areas at night, and remain alert in crowded places. Situational awareness is your best protection.'
        },
        {
          title: 'Safety Zones',
          content: 'Research safe areas before arrival. Tourist zones are generally safer. Ask hotel staff for advice on neighbourhoods to avoid.'
        },
        {
          title: 'Emergency Numbers',
          content: 'Save local emergency numbers and embassy contacts before travel. Share your itinerary with family and enable emergency location sharing when possible.'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food & Dining – Eat Safe',
      icon: Utensils,
      color: 'from-pink-500 to-rose-600',
      description: 'Dietary and hygiene tips',
      sections: [
        {
          title: 'Vegetarian Options',
          content: 'Indian restaurants are available globally. Use specialized apps to find veg-friendly and vegan dining spots nearby.'
        },
        {
          title: 'Street Food Caution',
          content: 'Eat at busy stalls where food is cooked fresh in front of you. Avoid raw salads, cut fruits, and ice in street beverages.'
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
          content: 'Travel insurance protects against unexpected medical costs, cancellations, delays, and baggage loss. In many countries, insurance is mandatory for entry.'
        },
        {
          title: 'Situations Where Insurance Helps',
          content: 'Insurance is useful during medical emergencies, accidents, hospitalisation, evacuation, flight disruptions, or theft. Without insurance, expenses can be extremely high.'
        },
        {
          title: 'Using Insurance Helplines',
          content: 'Contact the insurer before hospital admission whenever possible. Follow instructions for cashless claims and keep all bills and reports.'
        },
        {
          title: 'Vaccinations & Medical Kit',
          content: 'Some destinations require specific vaccinations. Carry basic medicines, prescriptions, and personal hygiene supplies. Always check health advisories before travel.'
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
          content: 'Avoid carrying excessive cash. Use hotel safes. Split cash in different bags. Use zero-markup forex cards for best rates.'
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
      title: 'Digital Tools – Essential Apps',
      icon: AppWindow,
      color: 'from-violet-500 to-purple-600',
      description: 'Must-have digital tools',
      sections: [
        {
          title: 'Navigation & Maps',
          content: 'Download offline maps (Google Maps) before travel. Essential for finding hotels and attractions without using data.'
        },
        {
          title: 'Currency & Translation',
          content: 'Use currency conversion apps to understand local prices. Translation apps with camera features help read menus and signs.'
        },
        {
          title: 'Travel Management',
          content: 'Keep digital copies of tickets and itineraries. Expense tracking apps help manage group spending and stay on budget.'
        },
        {
          title: 'Why Use Digital Tools',
          content: 'They improve safety, efficiency, and convenience. Ensure your phone is charged and has connectivity capabilities.'
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Travel Guide for Indian Tourists",
            "description": "A comprehensive travel companion covering visa rules, passport validity, safety tips, currency, and packing checklists for Indian travellers.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Visa Guide", "url": "https://rudrakshsafar.com/visa-guide" },
                { "@type": "ListItem", "position": 2, "name": "Passport Rules", "url": "https://rudrakshsafar.com/passport-guide" },
                { "@type": "ListItem", "position": 3, "name": "Travel Health & Insurance" },
                { "@type": "ListItem", "position": 4, "name": "Currency & Payments" },
                { "@type": "ListItem", "position": 5, "name": "Safety & Scams" },
                { "@type": "ListItem", "position": 6, "name": "Packing Checklist" }
              ]
            }
          })}
        </script>
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
                The definitive pre-travel guide for Indian citizens. From visa rules to money planning, we clarify everything so you can travel abroad with confidence.
              </p>

              {/* WHO THIS GUIDE IS FOR */}
              <div className="mb-12 bg-white/50 dark:bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 text-left">
                <h2 className="text-xl font-serif font-bold mb-4 text-center md:text-left text-foreground">Who This Travel Guide Is For</h2>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>First-time International Travellers</strong> planning their first trip abroad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>Families & Seniors</strong> who need safety and comfort assurances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>Budget Travellers</strong> looking to save on forex and avoid scams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>Anyone confused</strong> about visas, passport rules, and currency.</span>
                  </li>
                </ul>
              </div>

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
                      <h3 className="text-lg font-bold text-foreground mb-2">Quick Answer for Travellers</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This page helps Indian travellers understand visa rules, passport validity, money management, safety, insurance, packing, and cultural tips so they can travel confidently without last-minute issues. It acts as a complete pre-travel checklist to prevent common mistakes like carrying invalid documents or paying high forex fees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Common Mistakes Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    Common Mistakes Indians Make Abroad
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-100 dark:border-red-900">
                      <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Financial Mistakes</h4>
                      <ul className="text-sm space-y-2 text-red-600/80 dark:text-red-300">
                        <li>• Exchanging money at airports (High fees)</li>
                        <li>• Paying in INR on machines (DCC Trap)</li>
                        <li>• Relying on a single card</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-100 dark:border-red-900">
                      <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Documentation Errors</h4>
                      <ul className="text-sm space-y-2 text-red-600/80 dark:text-red-300">
                        <li>• Traveling with &lt;6 months passport validity</li>
                        <li>• Name mismatch in flight vs passport</li>
                        <li>• Forgetting printed visa copies</li>
                      </ul>
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
