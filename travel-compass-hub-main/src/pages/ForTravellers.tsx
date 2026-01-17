import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
  ChevronDown,
  ChevronRight,
  MapPin,
  Plane
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ForTravellers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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
          title: 'Airport Transfers',
          content: 'Pre-book transfers for peace of mind. Options: hotel shuttle, taxi, train/metro, private car. Compare prices on Rome2Rio.'
        },
        {
          title: 'Public Transport',
          content: 'Metro/subway is cheapest in most cities. Buy day passes for unlimited travel. Google Maps works for public transport in most countries.'
        },
        {
          title: 'Ride Apps',
          content: 'Uber works globally. Regional apps: Grab (SEA), Bolt (Europe), Careem (Middle East), Ola (India, UK, Australia).'
        },
        {
          title: 'Transport Cards',
          content: 'Octopus (Hong Kong), Oyster (London), Suica (Japan), EZ-Link (Singapore) - buy at airports, saves time and money.'
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
          title: 'Common Scams',
          content: 'Taxi meter fraud, fake tour guides, friendship bracelet scam, bird poop scam, petition signers, broken camera trick, overpriced restaurants near attractions.'
        },
        {
          title: 'Safety Zones',
          content: 'Research neighborhoods before booking. Avoid deserted areas at night. Keep valuables in hotel safe. Use hotel taxi service after dark.'
        },
        {
          title: 'Emergency Numbers',
          content: 'Save local emergency numbers. Register with Indian Embassy. Share itinerary with family. Keep embassy contact handy.'
        },
        {
          title: 'Travel Insurance',
          content: 'Always buy comprehensive travel insurance. Covers medical emergencies, trip cancellation, lost baggage, theft.'
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
          title: 'Vaccinations',
          content: 'Yellow fever required for some African/South American countries. Check CDC/WHO recommendations 6-8 weeks before travel.'
        },
        {
          title: 'Travel Insurance',
          content: 'Buy policy covering: Medical emergency, evacuation, trip cancellation, baggage loss. Cost: ₹500-2000 for 7-day trip.'
        },
        {
          title: 'Medical Kit',
          content: 'Carry: Prescription medicines (with doctor letter), antacids, pain relievers, band-aids, antiseptic, motion sickness pills.'
        },
        {
          title: 'Emergency Healthcare',
          content: 'Know nearest hospital location. Save insurance helpline. Keep medical documents accessible. Carry blood group card.'
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
          title: 'Essential Phrases',
          content: 'Learn: Hello, Thank you, Please, Sorry, Help, How much?, Where is...?, I don\'t understand. Locals appreciate the effort.'
        },
        {
          title: 'Translation Apps',
          content: 'Google Translate: Download offline language packs. Camera translation for menus/signs. Voice translation for conversations.'
        },
        {
          title: 'English Usage',
          content: 'High in Singapore, UAE, Europe. Moderate in Thailand, Vietnam. Low in Japan, China, Korea - carry translation apps.'
        },
        {
          title: 'Non-Verbal Communication',
          content: 'Learn culturally appropriate gestures. Some gestures offensive in certain countries. When in doubt, smile and be polite.'
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
          title: 'Plug Types',
          content: 'India uses Type C, D, M. USA/Japan: Type A, B. UK/Singapore: Type G. Europe: Type C, F. Australia: Type I. Carry universal adapter.'
        },
        {
          title: 'Voltage',
          content: 'India: 230V. USA/Japan: 110V. Most electronics are dual voltage (100-240V). Check device label before use.'
        },
        {
          title: 'Converters',
          content: 'Needed only if device isn\'t dual voltage. Most phone chargers, laptops are dual voltage. Hair dryers, curling irons may need converters.'
        },
        {
          title: 'Recommended Gear',
          content: 'Universal travel adapter, power bank (10000mAh+), multi-USB charger, cable organizer.'
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
          title: 'Budget Destinations',
          content: 'Southeast Asia: ₹3000-5000/day. Nepal, Sri Lanka: ₹2500-4000/day. Europe budget: ₹8000-12000/day. Middle East: ₹6000-10000/day.'
        },
        {
          title: 'Hidden Costs',
          content: 'Visa fees, airport transfers, tips, city taxes, tourist taxes, luggage fees, roaming charges, travel insurance.'
        },
        {
          title: 'Money-Saving Tips',
          content: 'Book flights 6-8 weeks early. Travel shoulder season. Use public transport. Eat where locals eat. Book combo tickets for attractions.'
        },
        {
          title: 'Budget Tracking',
          content: 'Use apps like Trail Wallet, Splitwise. Set daily budget. Track expenses in local and home currency.'
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
          title: 'Navigation',
          content: 'Google Maps (download offline), Maps.me (offline maps), Citymapper (public transport), Waze (driving).'
        },
        {
          title: 'Translation',
          content: 'Google Translate (offline packs), iTranslate, Microsoft Translator. Download languages before travel.'
        },
        {
          title: 'Transport',
          content: 'Uber, Grab (SEA), Bolt (Europe), Rome2Rio (route planning), Skyscanner, Google Flights.'
        },
        {
          title: 'Utilities',
          content: 'XE Currency, VPN (ExpressVPN, NordVPN), TripIt (itinerary), PackPoint (packing), HappyCow (veg food).'
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
          title: 'Universal Emergency',
          content: '112 works in most countries (EU, India, many others). USA/Canada: 911. UK: 999. Japan: 110 (Police), 119 (Fire/Ambulance).'
        },
        {
          title: 'Indian Embassy',
          content: 'Register on MADAD portal before travel. Save embassy number and address. Contact for passport loss, legal issues, emergencies.'
        },
        {
          title: 'Insurance Helpline',
          content: 'Save 24/7 insurance helpline. Keep policy number accessible. Know claim procedure for medical emergencies.'
        },
        {
          title: 'Family Contact',
          content: 'Share complete itinerary with family. Schedule regular check-ins. Have emergency contact card in wallet.'
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
          title: "Do's",
          content: "Research before you go. Respect local customs. Learn basic phrases. Keep copies of documents. Stay hydrated. Try local food. Be open-minded."
        },
        {
          title: "Don'ts",
          content: "Don't disrespect religious sites. Avoid political discussions. Don't carry all cash together. Never leave bags unattended. Don't overshare on social media."
        },
        {
          title: 'Cultural Sensitivity',
          content: 'Dress modestly at religious sites. Remove shoes where required. Ask before photographing people. Follow local customs around food and drink.'
        },
        {
          title: 'Photo Etiquette',
          content: 'No photos at some religious sites, military areas. Ask permission for portraits. Be aware of drone restrictions. Respect privacy.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Visa Guide', href: '#visa', icon: FileCheck },
    { title: 'Country Guides', href: '#transport', icon: Globe },
    { title: 'Travel Tips', href: '#safety', icon: CheckCircle },
    { title: 'Emergency Info', href: '#emergency', icon: Phone },
  ];

  if (isLoading) {
    return <PageLoader type="traveller" />;
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
                Everything you need to know before your international trip. Visa guides, safety tips, 
                cultural insights, and practical advice from experienced travellers.
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/10 hover:border-secondary transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-secondary" />
                    {link.title}
                  </a>
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
                    {travelGuideCategories.map((category) => (
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
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-12">
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
