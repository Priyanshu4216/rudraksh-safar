import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Compass,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  MessageCircle,
  Ship,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Waves
} from 'lucide-react';

const KeralaMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/kerala';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Kerala Tour Packages', path: '/domestic-tours/kerala' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Kerala (God\'s Own Country)',
    'description': 'Verified Kerala tour packages from Rudraksh Safar. Munnar tea estates, Thekkady Periyar wildlife, private Alleppey backwater houseboats, and Fort Kochi heritage with dedicated private chauffeur and 24/7 care.',
    'url': canonicalUrl,
    'touristType': ['Family', 'Honeymoon', 'Ayurveda & Wellness', 'Nature & Wildlife']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I reach Kerala from Raipur, Bhilai, or Chhattisgarh?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The fastest route is flying from Raipur (RPR) to Cochin International Airport (COK) via connecting flights through Bangalore or Hyderabad. Alternatively, direct express trains such as the Korba–Kochuveli Superfast Express operate through Durg (DURG) and Raipur stations directly into Kerala.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is an Alleppey houseboat stay private or shared?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All houseboat stays arranged by Rudraksh Safar are 100% private. You have exclusive use of your 1-bedroom, 2-bedroom, or 3-bedroom AC Deluxe houseboat with a dedicated captain, navigator, and personal chef on board.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are North Indian vegetarian and Jain meals available in Kerala?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. All our partner resorts in Munnar and Thekkady, as well as the on-board chefs on our Alleppey houseboats, serve fresh North Indian vegetarian dishes, dal-roti, paneer preparations, and customized Jain meals on prior notice.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the best month to visit Kerala?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'September to March is the peak season with dry, comfortable weather ideal for tea gardens and backwater cruising. June to August is monsoon season, world-renowned for authentic Ayurvedic therapies and lush rainforest scenery.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      <Helmet>
        <title>Kerala Tour Packages 2026-2027: Munnar, Thekkady & Alleppey Houseboat | Rudraksh Safar</title>
        <meta
          name="description"
          content="Handcrafted Kerala tour packages from ₹17,999. Munnar mist tea gardens, Periyar wildlife, private Alleppey backwater houseboats & Kochi heritage. Verified hotels & private chauffeur."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(destinationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full space-y-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-xs font-semibold px-2.5 py-1">
              Verified Domestic Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Private Houseboat Guarantee
            </Badge>
            <Badge variant="outline" className="border-teal-500/30 text-teal-300 text-xs">
              Winter & Summer Best Seller
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Kerala Tour Packages: Munnar, Thekkady & Alleppey Houseboat
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Discover God's Own Country with total peace of mind. Wander through rolling emerald tea gardens in Munnar, encounter wild elephants in Thekkady's Periyar sanctuary, and cruise serene backwaters in your private Alleppey houseboat with meals prepared fresh on deck.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-emerald-400" /> Private Houseboat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">100% Exclusive Boat</div>
              <p className="text-xs text-slate-400 mt-1">AC Deluxe boat with personal crew and private chef on board.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-teal-400" /> Premium Resorts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Tea Valley Stays</div>
              <p className="text-xs text-slate-400 mt-1">4-star verified properties with breathtaking Munnar valley views.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-blue-400" /> Dedicated Chauffeur
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">AC Sedan / Ertiga</div>
              <p className="text-xs text-slate-400 mt-1">Courteous, English & Hindi speaking driver from pickup to drop.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-amber-400" /> Veg & Jain Dining
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Fresh Cooking</div>
              <p className="text-xs text-slate-400 mt-1">Authentic North & South Indian meals cooked fresh to your tastes.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-emerald-400" /> Handcrafted Kerala Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Balanced transit times, scenic stops, and complete meal breakdowns with no rushed schedules.
            </p>
          </div>

          {/* Package 1: 5N/6D Kerala Backwaters & Hill Station Holiday */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-600 text-white font-bold text-xs">Flagship Tour</Badge>
                  <span className="text-xs text-slate-400">Duration: 6 Days / 5 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Kerala Backwaters & Hill Station Holiday (Munnar, Thekkady, Alleppey & Kochi)
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-emerald-400">₹24,999</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Detailed Day-by-Day Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 1: Arrival in Kochi & Scenic Drive to Munnar (130 km / 4 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Cochin International Airport (COK) or Ernakulam Railway Station (ERS). Meet your dedicated private chauffeur and start your uphill drive towards Munnar (altitude 5,200 ft).<br />
                    <strong>En Route:</strong> Stop at the cascading Cheeyappara and Valara Waterfalls nestled amidst dense rainforests. Experience rubber and spice plantations along the Neriamangalam bridge.<br />
                    <strong>Evening:</strong> Arrive in Munnar, check in to your tea-estate resort. Relax in the cool mountain breeze. Dinner and overnight stay in Munnar.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 2: Full Day Munnar Tea Country & Wildlife Sanctuary</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> After a hearty breakfast, visit Eravikulam National Park (Rajamalai), home to the endangered Nilgiri Tahr mountain goat and the highest peak in South India (Anamudi - 8,842 ft).<br />
                    <strong>Midday:</strong> Visit the KDHP Tea Museum and factory to witness orthodox tea manufacturing and sample fresh premium blends. Head to Mattupetty Dam and reservoir for boating, followed by Echo Point and Kundala Arch Dam.<br />
                    <strong>Evening:</strong> Explore Munnar town market for homemade chocolates, eucalyptus oil, and freshly plucked spices. Dinner and overnight stay in Munnar resort.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 3: Munnar to Thekkady — Periyar Wildlife Sanctuary (90 km / 3 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Post breakfast, enjoy a picturesque mountain road winding past Cardamom Hills to Thekkady (Periyar). Check in to your hotel near Periyar forest reserve.<br />
                    <strong>Afternoon:</strong> Embark on an informative guided spice plantation walking tour witnessing live cultivation of green cardamom, cinnamon, black pepper, clove, and vanilla.<br />
                    <strong>Evening:</strong> Attend a traditional Kathakali classical dance performance followed by a high-energy Kalaripayattu martial arts demonstration at the local cultural centre. Dinner and overnight stay in Thekkady.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 4: Thekkady to Alleppey — Private Backwater Houseboat Cruise (140 km / 4 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Optional early morning boat safari on Periyar Lake inside the wildlife sanctuary to spot wild elephants, bison, and exotic birds. After breakfast, drive to Alleppey jetty.<br />
                    <strong>12:30 PM:</strong> Board your exclusive private AC Deluxe Houseboat. Receive a warm traditional tender coconut welcome. Cruise slowly through Vembanad Lake and narrow palm-lined village canals.<br />
                    <strong>Afternoon & Evening:</strong> Relish an authentic Kerala buffet lunch cooked right on board by your personal chef (Karimeen fish / chicken or North Indian vegetarian paneer & dal). Watch local village life and Chinese fishing nets. The boat anchors at dusk. Enjoy evening tea, dinner, and overnight sleep on the tranquil waters.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 5: Alleppey to Kochi & Heritage Exploration (65 km / 1.5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Wake up to sunrise over the backwaters. Savor fresh breakfast on board. Disembark at 9:30 AM and drive to historic Kochi.<br />
                    <strong>Afternoon:</strong> Tour Fort Kochi: witness the iconic 14th-century Chinese Fishing Nets in operation, visit St. Francis Church (India's oldest European church), the vibrant Jew Town with its 450-year-old Paradesi Synagogue, and the Dutch Palace (Mattancherry).<br />
                    <strong>Evening:</strong> Check in to a premium Kochi hotel. Enjoy shopping at Lulu Mall (Asia's premier shopping complex) or seaside marine drive stroll. Dinner and overnight in Kochi.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 6: Authentic Banana Chip Shopping & Kochi Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Visit authentic hot-oil coconut oil banana chip stalls and Kasavu handloom stores for authentic Kerala souvenirs.<br />
                    <strong>Afternoon:</strong> Punctual transfer to Cochin International Airport (COK) or Ernakulam Railway Station for your return trip. Tour concludes with treasured memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Package Inclusions
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• 2 Nights in 4-Star Mountain Resort in Munnar</li>
                  <li>• 1 Night in Premium Deluxe Hotel in Thekkady</li>
                  <li>• 1 Night in Exclusive Private AC Deluxe Houseboat in Alleppey</li>
                  <li>• 1 Night in 4-Star City Hotel in Kochi</li>
                  <li>• Houseboat Meal Plan: All meals included (Lunch, Evening Snacks, Dinner, Breakfast)</li>
                  <li>• Hotel Meal Plan: Daily buffet breakfast included at all resorts</li>
                  <li>• Dedicated Private AC Sedan (Dzire/Etios) or Innova for all 6 days</li>
                  <li>• All toll taxes, interstate permits, parking fees, and driver allowances</li>
                  <li>• 24/7 dedicated trip monitoring and local helpline from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Flight or train fares to and from Kochi</li>
                  <li>• National Park entry tickets (Eravikulam approx. ₹200/person)</li>
                  <li>• Periyar Lake boat safari tickets (approx. ₹255/person)</li>
                  <li>• Kathakali & Kalaripayattu show entry tickets (approx. ₹300/person)</li>
                  <li>• Personal expenses (Ayurvedic massages, water sports)</li>
                  <li>• 5% GST on domestic package tariff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 4N/5D Romantic Hill & Backwater Express */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-teal-600 text-white font-bold text-xs mr-2">Honeymoon Favourite</Badge>
                <span className="text-lg font-bold text-white">4N/5D Kerala Romantic Hill & Houseboat Express</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-emerald-400">₹17,999</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Designed for couples seeking a focused, unhurried getaway: 2 romantic nights in Munnar with floral room decor and candlelight dinner options, 1 night in a private Alleppey houseboat, and 1 night in Kochi. Includes all transfers in a private AC vehicle.
            </p>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" /> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
                <h3 className="font-semibold text-white text-sm">{faq.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CTA */}
        <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-900 p-8 rounded-2xl border border-emerald-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Book Your Dream Kerala Vacation With Confidence</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact Rudraksh Safar to customize your dates, add Varkala cliff beaches, or arrange an authentic Ayurvedic spa treatment. 100% verified resorts and transparent billing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Kerala tour package. Please share details and the best quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Kerala Expert
              </Button>
            </a>
            <a href={`tel:+91${contactPhone}`}>
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                <Phone className="w-4 h-4 mr-2" /> Call +91 9713057086
              </Button>
            </a>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default KeralaMaster;
