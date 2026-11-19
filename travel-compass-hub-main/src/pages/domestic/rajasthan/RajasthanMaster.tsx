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
  Castle,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Crown
} from 'lucide-react';

const RajasthanMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/rajasthan';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Domestic Packages', url: '/domestic-packages' },
    { name: 'Rajasthan Tour Packages', url: '/domestic-tours/rajasthan' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Rajasthan (Land of Kings)',
    'description': 'Handcrafted Rajasthan tour packages by Rudraksh Safar. Grand palaces of Jaipur, Mehrangarh Fort in Jodhpur, romantic Lake Pichola in Udaipur, and Pushkar with verified heritage hotels and dedicated private chauffeurs.',
    'url': canonicalUrl,
    'touristType': ['Heritage & Culture', 'Family', 'Royal Honeymoon', 'Photography']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I reach Rajasthan from Chhattisgarh (Raipur/Durg/Bhilai)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Direct express trains like the Durg–Jaipur Special and Bilaspur–Bikaner Express connect Durg, Raipur, and Bilaspur directly to Jaipur and Jodhpur. Alternatively, direct connecting flights fly daily from Raipur (RPR) to Jaipur (JAI) or Udaipur (UDR) via Delhi or Mumbai.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the best season to tour Rajasthan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The winter months from October to March offer pleasant daytime weather (18°C–26°C) and cool evenings, ideal for exploring forts, palaces, and deserts without desert heat.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are heritage haveli hotels included in the package?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We partner with authentic Rajasthani heritage havelis and 4-star properties featuring traditional courtyards, Jharokha balconies, and royal Rajasthani hospitality.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is pure vegetarian and Jain food easily available?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Rajasthan is a vegetarian culinary heaven. All hotels and partner restaurants provide pure vegetarian Rajasthani thalis (Dal Baati Churma, Gatte ki Sabzi, Ker Sangri) and strict Jain preparations without root vegetables.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      <Helmet>
        <title>Rajasthan Tour Packages 2026-2027: Jaipur, Jodhpur & Udaipur | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Rajasthan tour packages from ₹12,999. Jaipur Amber Fort, Jodhpur Mehrangarh, Udaipur Lake Pichola boat ride & Pushkar. Heritage hotels & private AC car."
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
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 text-xs font-semibold px-2.5 py-1">
              Verified Domestic Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Authentic Heritage Havelis
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
              Pure Veg & Jain Friendly
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Rajasthan Tour Packages: Jaipur, Jodhpur & Udaipur Royal Circuit
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Step into the grandeur of maharajas. Explore the pink sandstone courtyards of Jaipur, gaze across the cobalt-blue rooftops of Jodhpur from Mehrangarh Fort, and cruise the shimmering sunset waters of Lake Pichola in the romantic City of Lakes, Udaipur.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-400" /> Royal Heritage Stays
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Traditional Havelis</div>
              <p className="text-xs text-slate-400 mt-1">Authentic 3 & 4-star properties with courtyards and ornate frescoes.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Private AC Chauffeur
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Dedicated Vehicle</div>
              <p className="text-xs text-slate-400 mt-1">Comfortable sedan or Innova for all intercity highway journeys.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Castle className="w-4 h-4 text-rose-400" /> Pichola Boat Ride
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Lake Cruise Included</div>
              <p className="text-xs text-slate-400 mt-1">Sunset motorboat cruise past Jag Mandir Island and City Palace.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-emerald-400" /> Pure Veg & Jain
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Dal Baati Dining</div>
              <p className="text-xs text-slate-400 mt-1">Authentic regional culinary experiences with strict vegetarian options.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" /> Flagship Rajasthan Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Balanced travel distances, verified highway transit times, and full entrance details.
            </p>
          </div>

          {/* Package 1: 5N/6D Royal Rajasthan Circuit */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-600 text-white font-bold text-xs">Royal Circuit</Badge>
                  <span className="text-xs text-slate-400">Duration: 6 Days / 5 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Royal Rajasthan Circuit: Jaipur, Jodhpur & Udaipur
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-amber-400">₹21,999</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 1: Arrival in Jaipur — The Pink City Heritage</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Jaipur Airport (JAI) or Railway Station. Private vehicle pickup and transfer to your heritage hotel. Refresh and start city touring.<br />
                    <strong>Afternoon:</strong> Ascend the majestic hilltop Amber Fort with its mirror-inlaid Sheesh Mahal. Stop for photos at the water palace, Jal Mahal. Visit the royal City Palace complex and the 18th-century astronomical observatory Jantar Mantar (UNESCO World Heritage).<br />
                    <strong>Evening:</strong> View the honeycomb facade of Hawa Mahal (Palace of Winds). Stroll through Johari Bazaar for blue pottery, gemstones, and Bandhani dupattas. Dinner and overnight in Jaipur hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 2: Fortresses of the Aravallis & Cultural Night at Chokhi Dhani</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Visit Jaigarh Fort to witness the world's largest cannon on wheels (Jaivana Cannon). Proceed to Nahargarh Fort perched on the edge of the Aravalli Hills for panoramic views across the entire Pink City.<br />
                    <strong>Evening:</strong> Visit Chokhi Dhani, an authentic ethnic Rajasthani village resort. Experience folk dancers (Ghoomar, Kalbelia), puppet shows, camel rides, and savor a traditional multi-course Rajasthani thali featuring Dal Baati Churma, Ker Sangri, and Bajra Roti with pure ghee. Overnight in Jaipur hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 3: Jaipur to Jodhpur via Ajmer Dargah & Sacred Pushkar (330 km / 5.5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Early breakfast and departure towards Jodhpur. En route, stop at Ajmer to visit the revered Sufi shrine of Khwaja Moinuddin Chishti (Ajmer Sharif Dargah).<br />
                    <strong>Midday:</strong> Drive 14 km across the snake hill to the sacred holy town of Pushkar. Visit the rare 14th-century Lord Brahma Temple and the 52 ghats of sacred Pushkar Lake.<br />
                    <strong>Evening:</strong> Continue drive across the Marwar plains to Jodhpur, the Sun City. Check in to your hotel near the clock tower. Overnight in Jodhpur hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 4: Jodhpur Fortresses & Drive to Udaipur via Ranakpur Jain Temple (250 km / 5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Tour the imposing Mehrangarh Fort rising 400 feet above the blue city, housing palanquins, turbans, and armory galleries. Visit Jaswant Thada, a graceful white marble cenotaph built in memory of Maharaja Jaswant Singh II.<br />
                    <strong>Midday:</strong> Depart for Udaipur. En route, visit the spectacular 15th-century Ranakpur Jain Temple, world-renowned for its intricate architecture supported by 1,444 individually carved marble pillars with zero two pillars identical.<br />
                    <strong>Evening:</strong> Arrive in Udaipur, the City of Lakes. Check in to your hotel overlooking Lake Pichola. Overnight in Udaipur hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 5: Full Day Udaipur — Royal Palaces & Sunset Boat Cruise on Lake Pichola</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Visit Udaipur City Palace, Rajasthan's largest royal palace complex with mirrored courtyards, marble balconies, and the Crystal Gallery. Visit the nearby 17th-century Jagdish Temple.<br />
                    <strong>Afternoon:</strong> Walk through the royal gardens of Saheliyon-ki-Bari (Courtyard of Maidens) with its lotus pools, marble elephants, and fountains.<br />
                    <strong>Evening:</strong> Board an exclusive 1-hour sunset boat cruise on Lake Pichola gliding past the Lake Palace (Jag Niwas) and stopping at Jag Mandir island palace. Attend the evening Dharohar folk dance show at Bagore Ki Haveli on Gangaur Ghat. Overnight in Udaipur hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 6: Miniature Art Shopping & Udaipur Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Visit authentic artisans for Mewar miniature paintings, camel leather footwear (Juttis), and silver jewelry.<br />
                    <strong>Afternoon:</strong> Punctual transfer to Maharana Pratap Airport (UDR) or Udaipur City Railway Station. Tour concludes with royal memories.
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
                  <li>• 2 Nights in Heritage / 3-Star Hotel in Jaipur</li>
                  <li>• 1 Night in Deluxe Heritage Hotel in Jodhpur</li>
                  <li>• 2 Nights in Lake-View Deluxe Hotel in Udaipur</li>
                  <li>• Daily Buffet Breakfast at all hotels</li>
                  <li>• Dedicated Private AC Sedan (Dzire/Etios) or Innova for all 6 days</li>
                  <li>• 1-Hour Sunset Motorboat Cruise on Lake Pichola in Udaipur</li>
                  <li>• All toll taxes, interstate permits, parking fees, and driver allowances</li>
                  <li>• 24/7 dedicated trip support from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Train or flight tickets to Jaipur and from Udaipur</li>
                  <li>• Monument entrance fees and camera charges (approx. ₹800/person total)</li>
                  <li>• Chokhi Dhani entry and dinner passes (approx. ₹900/person)</li>
                  <li>• Elephant / Jeep ride at Amber Fort</li>
                  <li>• Lunch and dinner meals not specified</li>
                  <li>• 5% GST as applicable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 3N/4D Golden Triangle Jaipur Express */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">Short Break</Badge>
                <span className="text-lg font-bold text-white">3N/4D Jaipur Heritage & Fortresses Short Break</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-amber-400">₹12,999</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Ideal for extended weekends from Delhi or Central India. Covers Amber Fort, Nahargarh, City Palace, Hawa Mahal, Jal Mahal, Chokhi Dhani cultural village, and authentic bazaar shopping with private AC vehicle throughout.
            </p>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" /> Frequently Asked Questions
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
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Experience the Splendor of Rajasthan</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Let Rudraksh Safar design your royal vacation with handpicked heritage havelis, reliable chauffeurs, and transparent costs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Rajasthan tour package. Please share itinerary details and quotes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Rajasthan Desk
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

export default RajasthanMaster;
