import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AEOManaliKasolBox from '@/components/seo/AEOManaliKasolBox';
import BudgetYouthValueSection from '@/components/content/BudgetYouthValueSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  Heart,
  Sparkles,
  CheckCircle2,
  XCircle,
  Download,
  Phone,
  MessageCircle,
  AlertCircle,
  Mountain,
  Flame,
  Music,
  Utensils,
  Bus,
  Bed,
  Train,
  Plane,
  Luggage,
  Compass,
  FileText,
  Check,
  ArrowRight
} from 'lucide-react';
import { MANALI_KASOL_SILO_DATA, CitySiloData } from '@/data/manaliKasolSiloData';

interface ManaliKasolCitySiloProps {
  forcedCityKey?: 'bhilai' | 'raipur' | 'durg' | 'bilaspur' | 'rajnandgaon';
}

const ManaliKasolCitySilo: React.FC<ManaliKasolCitySiloProps> = ({ forcedCityKey }) => {
  const { cityParam } = useParams<{ cityParam?: string }>();
  
  // Resolve city data
  let resolvedKey: 'bhilai' | 'raipur' | 'durg' | 'bilaspur' | 'rajnandgaon' = 'bhilai';
  if (forcedCityKey) {
    resolvedKey = forcedCityKey;
  } else if (cityParam) {
    const cleanKey = cityParam.replace('from-', '').toLowerCase() as any;
    if (MANALI_KASOL_SILO_DATA[cleanKey]) {
      resolvedKey = cleanKey;
    }
  }

  const city: CitySiloData = MANALI_KASOL_SILO_DATA[resolvedKey] || MANALI_KASOL_SILO_DATA.bhilai;
  const officialPdfUrl = '/Pdf/Rudraksh_Safar_Manali_Kasol_5999.pdf';
  const contactPhone = '9713057086';

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: city.cityName,
    travelers: '1',
    batch: 'Upcoming Friday Departure',
    notes: ''
  });

  const whatsappUrl = (customMsg?: string) => {
    const text = customMsg || `Hello Rudraksh Safar, I am from ${city.cityName} and interested in the Manali × Kasol Strangers Trip (₹5,999). Please share train/flight transit guidance and batch availability.`;
    return `https://wa.me/91${contactPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Enquiry: Manali × Kasol Strangers Trip from ${city.cityName} (₹5,999)*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Origin City:* ${formData.city}\n` +
      `• *Batch:* ${formData.batch}\n` +
      `• *No. of Travellers:* ${formData.travelers}\n` +
      (formData.notes ? `• *Note:* ${formData.notes}\n` : '') +
      `Please confirm seat & transit coordination.`;
    window.open(`https://wa.me/91${contactPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setBookingModalOpen(false);
  };

  const itinerary = [
    {
      day: 'Day 1',
      title: 'Delhi Departure | The Great Escape Begins',
      tagline: 'Meet strangers, turn on the music & hit the highway!',
      highlights: [
        'Assemble at designated Delhi departure point (Evening 6:00 PM – 7:30 PM).',
        `Meet fellow travellers and squad members joining from ${city.cityName} and other cities.`,
        'Overnight journey towards Manali in an AC Tempo Traveller with pushback seats.',
        'Road-trip Antakshari, icebreaker games and travel playlists through Himachal foothills.'
      ],
      stay: 'Overnight journey in AC Tempo Traveller',
      meals: 'Not included (Dhaba dinner stop en route)',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800'
    },
    {
      day: 'Day 2',
      title: 'Arrival in Manali | Local Sightseeing & Mall Road',
      tagline: 'Cedar forests, Hadimba Temple & cafe vibes',
      highlights: [
        'Morning arrival in Manali and hotel check-in with a warm welcome drink.',
        'Visit ancient Hadimba Devi Temple surrounded by towering cedar trees.',
        'Explore Club House along the river with recreational games.',
        'Stroll through Mall Road for Himachali street food, shawls and souvenirs.',
        'Visit peaceful Van Vihar and the Tibetan Monastery.',
        'Delicious buffet dinner at hotel with your squad.'
      ],
      stay: 'Manali Hotel (Quad Sharing)',
      meals: 'Dinner included',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1620630739999-5285741f2219?q=80&w=800'
    },
    {
      day: 'Day 3',
      title: 'Solang Valley | Adventure Day & Snow Peaks',
      tagline: 'Snow-capped peaks, paragliding & Himalayan panorama',
      highlights: [
        'Breakfast at hotel followed by a scenic drive to Solang Valley.',
        'Breathtaking Himalayan mountain vistas and snow-capped glaciers.',
        'Optional adventure thrills: Paragliding, ATV rides, Zorbing, Ropeway cable cars & seasonal skiing.',
        'Evening return to hotel for bonding games, stories, dinner and overnight stay.'
      ],
      stay: 'Manali Hotel (Quad Sharing)',
      meals: 'Breakfast and Dinner included',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1589314486665-276c2438847c?q=80&w=800'
    },
    {
      day: 'Day 4',
      title: 'Manali to Kullu to Kasol | River & Bonfire Night',
      tagline: 'White water rapids, Parvati Valley & riverside camp',
      highlights: [
        'Breakfast at hotel and checkout.',
        'Scenic drive through Kullu Valley along the roaring Beas River.',
        'Explore Kullu handicraft markets and shawl emporiums; optional river rafting.',
        'Drive into magical Parvati Valley and check into Kasol riverside alpine camp.',
        'Evening bonfire with acoustic guitar songs, squad interactions, and stargazing.',
        'Buffet dinner served at the riverside campsite.'
      ],
      stay: 'Kasol Riverside Camp (Quad Sharing)',
      meals: 'Breakfast and Dinner included',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800'
    },
    {
      day: 'Day 5',
      title: 'Manikaran Sahib | Explore & Return Journey',
      tagline: 'Sacred hot springs, holy langar & bohemian Kasol cafes',
      highlights: [
        'Wake up to the sounds of Parvati River and enjoy camp breakfast.',
        'Check out and visit revered Manikaran Sahib Gurudwara & hot sulphur springs.',
        'Visit the ancient historic Shiv Temple adjacent to the gurudwara.',
        'Leisure time in Kasol market: explore cafes, German bakeries & souvenir shops.',
        'Board the AC Tempo Traveller in the late afternoon/evening for return journey to Delhi.'
      ],
      stay: 'Overnight journey in AC Tempo Traveller',
      meals: 'Breakfast included',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800'
    },
    {
      day: 'Day 6',
      title: 'Arrival in Delhi | Trip Concludes, Friendships Stay',
      tagline: 'Memories created, squad unlocked, lifetime travel besties!',
      highlights: [
        'Reach Delhi early morning (around 7:00 AM – 9:00 AM).',
        `Bid farewell to your squad and board your scheduled return train or flight back to ${city.cityName}.`,
        'Return home with lifelong road-trip memories and an unforgettable squad experience!'
      ],
      stay: 'Trip concludes in Delhi',
      meals: 'Not included',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800'
    }
  ];

  const batches = [
    { name: 'Batch 1 (Next Weekend)', dates: 'Upcoming Friday Departure', seatsLeft: 4, status: 'Fast Filling' },
    { name: 'Batch 2 (Mid Month)', dates: 'Next Friday Departure', seatsLeft: 7, status: 'Available' },
    { name: 'Batch 3 (Month-End Special)', dates: 'Fourth Friday Departure', seatsLeft: 9, status: 'Open' }
  ];

  const canonicalUrl = `https://rudrakshsafar.com${city.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': `${canonicalUrl}#trip`,
        'name': `${city.cityTitle} | 5N/6D Social Group Tour`,
        'description': city.metaDescription,
        'touristType': ['Solo Travellers', 'Young Professionals', 'Couples', 'College Students'],
        'offers': {
          '@type': 'Offer',
          'price': '5999',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'url': canonicalUrl
        },
        'provider': {
          '@type': 'TravelAgency',
          'name': 'Rudraksh Safar',
          'telephone': `+91${contactPhone}`,
          'url': 'https://rudrakshsafar.com',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'GE Road, Bhilai 3',
            'addressLocality': city.cityName,
            'addressRegion': 'Chhattisgarh',
            'addressCountry': 'IN'
          }
        }
      },
      {
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        'name': `${city.cityTitle} - 5N/6D Package`,
        'image': 'https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200',
        'description': `Social group trip to Manali & Kasol originating with transit coordination from ${city.cityName} to Delhi at ₹5,999.`,
        'offers': {
          '@type': 'Offer',
          'price': '5999',
          'priceCurrency': 'INR',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock',
          'url': canonicalUrl
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '142',
          'bestRating': '5'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': [
          ...city.localFaqs.map(f => ({
            '@type': 'Question',
            'name': f.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': f.answer
            }
          })),
          {
            '@type': 'Question',
            'name': 'Can I join this trip solo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! This trip is specially crafted for solo travellers. Over 60% of people join individually and become a squad.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the package price?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The package starts at ₹5,999 per person on a quad-sharing basis, covering Delhi-Manali-Kasol-Delhi transit, stays, meals, bonfire and sightseeing.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://rudrakshsafar.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Manali Kasol Strangers Trip',
            'item': 'https://rudrakshsafar.com/manali-kasol-strangers-trip'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `From ${city.cityName}`,
            'item': canonicalUrl
          }
        ]
      }
    ]
  };

  const allCities: { key: string; name: string; slug: string }[] = [
    { key: 'bhilai', name: 'Bhilai', slug: '/manali-kasol-strangers-trip/from-bhilai' },
    { key: 'raipur', name: 'Raipur', slug: '/manali-kasol-strangers-trip/from-raipur' },
    { key: 'durg', name: 'Durg', slug: '/manali-kasol-strangers-trip/from-durg' },
    { key: 'bilaspur', name: 'Bilaspur', slug: '/manali-kasol-strangers-trip/from-bilaspur' },
    { key: 'rajnandgaon', name: 'Rajnandgaon', slug: '/manali-kasol-strangers-trip/from-rajnandgaon' }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Helmet>
        <title>{`${city.metaTitle} | Rudraksh Safar`}</title>
        <meta name="description" content={city.metaDescription} />
        <meta name="keywords" content={city.metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Geo Tags */}
        <meta name="geo.region" content={city.geo.region} />
        <meta name="geo.placename" content={city.geo.placename} />
        <meta name="geo.position" content={city.geo.position} />
        <meta name="ICBM" content={city.geo.icbm} />

        {/* OpenGraph */}
        <meta property="og:title" content={`${city.cityTitle} | ₹5,999 | Rudraksh Safar`} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${city.cityTitle} | Rudraksh Safar`} />
        <meta name="twitter:description" content={city.metaDescription} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-sm flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> {city.cityName} Special Batch
        </span>
        <span>Delhi Departures Every Friday • Pre-Trip Train &amp; Flight Sync from {city.cityName}!</span>
        <a href={`tel:${contactPhone}`} className="underline font-bold hover:text-amber-100 ml-1 inline-flex items-center gap-1">
          <Phone className="w-3 h-3 inline" /> Call {contactPhone}
        </a>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1920"
            alt={`Manali Kasol tour package from ${city.cityName} snow peaks`}
            className="w-full h-full object-cover object-center opacity-40 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Home', path: '/' },
                { label: 'Domestic Packages', path: '/domestic-packages' },
                { label: 'Manali Kasol Strangers Trip', path: '/manali-kasol-strangers-trip' },
                { label: `From ${city.cityName}`, path: city.slug }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-500 text-slate-950 font-bold px-3 py-1 text-xs sm:text-sm">
                  📍 FROM {city.cityName.toUpperCase()}
                </Badge>
                <Badge variant="outline" className="border-emerald-400 text-emerald-300 bg-emerald-950/40 px-3 py-1 text-xs">
                  5 Nights / 6 Days
                </Badge>
                <Badge variant="outline" className="border-sky-400 text-sky-300 bg-sky-950/40 px-3 py-1 text-xs">
                  Train &amp; Flight Sync
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-950/40 px-3 py-1 text-xs">
                  Solo Friendly
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Manali × Kasol <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                  The Strangers Trip from {city.cityName}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-amber-200/90 italic">
                “No Friends Available in {city.cityName}? No Problem. Your Next Mountain Squad Is Waiting.”
              </p>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                {city.localHubDescription}
              </p>

              <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-sm max-w-2xl flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Come as strangers. Leave as a squad!</strong> We connect all travellers joining from {city.cityName} in a private pre-trip WhatsApp squad so you travel to Delhi together.
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-6 text-base shadow-lg shadow-amber-500/25"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book From {city.cityName} – ₹5,999
                </Button>

                <a
                  href={officialPdfUrl}
                  download="Rudraksh_Safar_Manali_Kasol_5999.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition"
                >
                  <Download className="w-5 h-5 text-amber-400" />
                  <span>Download PDF Brochure</span>
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp {city.cityName} Lead</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-6 shadow-2xl text-white">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Special Package Cost</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-amber-400">₹5,999</span>
                    <span className="text-slate-400 text-sm font-medium">/ person</span>
                  </div>
                  <p className="text-xs text-emerald-400 mt-1 font-medium">✓ Quad Sharing Basis • Delhi to Delhi Expedition</p>
                </div>

                <div className="space-y-3 py-4 border-y border-slate-800 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" /> Duration
                    </span>
                    <span className="font-semibold text-slate-100">5 Nights / 6 Days</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Train className="w-4 h-4 text-amber-400" /> Rail from {city.cityName}
                    </span>
                    <span className="font-semibold text-slate-100">{city.transitTimeRail}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Plane className="w-4 h-4 text-amber-400" /> Air Option
                    </span>
                    <span className="font-semibold text-slate-100">{city.transitTimeAir}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Bus className="w-4 h-4 text-amber-400" /> Expedition Bus
                    </span>
                    <span className="font-semibold text-slate-100">AC Tempo Traveller</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Bed className="w-4 h-4 text-amber-400" /> Accommodation
                    </span>
                    <span className="font-semibold text-slate-100">2N Hotel + 1N Camp</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-amber-400" /> Food Included
                    </span>
                    <span className="font-semibold text-slate-100">3B + 3D Dinners</span>
                  </div>
                </div>

                <div className="mt-4 pt-2 text-center">
                  <a
                    href={`tel:${contactPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-2.5 px-4 rounded-lg border border-slate-700 text-sm"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    Call Us: {contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LOCAL TRANSIT INTELLIGENCE FOR THIS CITY */}
      <section className="py-16 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Transit Guide From {city.cityName}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How To Connect From {city.cityName} to Delhi
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              We make the journey effortless. Here are the exact train numbers, flight choices and timing secrets for reaching the Friday 6:00 PM Delhi pickup on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rail Transit Card */}
            <Card className="border-slate-200 shadow-md">
              <CardHeader className="bg-slate-900 text-white rounded-t-xl py-4">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Train className="w-5 h-5 text-amber-400" />
                  Recommended Trains from {city.railTransit.stationName}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  {city.railTransit.trains.map((t, tIdx) => (
                    <div key={tIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 text-sm">{t.name}</strong>
                        <Badge variant="outline" className="border-slate-400 font-mono text-xs">#{t.number}</Badge>
                      </div>
                      <p className="text-xs text-amber-700 font-semibold mt-1">{t.timing}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{t.note}</p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>💡 Coordinator Tip:</strong> {city.railTransit.insiderTip}
                </div>
              </CardContent>
            </Card>

            {/* Flight Transit Card */}
            <Card className="border-slate-200 shadow-md">
              <CardHeader className="bg-slate-900 text-white rounded-t-xl py-4">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Plane className="w-5 h-5 text-sky-400" />
                  Air Transit Option via {city.airTransit.airportName}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Drive Time to Airport</span>
                    <strong className="text-slate-900">{city.airTransit.driveTimeToAirport}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Nonstop Flight Time</span>
                    <strong className="text-slate-900">{city.airTransit.flightDuration}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Airlines Operating</span>
                    <strong className="text-slate-900">{city.airTransit.airlines}</strong>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900">
                  <strong>✈️ Airport Metro Link:</strong> {city.airTransit.insiderTip}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                    {city.communityVibe.title}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {city.communityVibe.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {city.communityVibe.audience.map((a, aIdx) => (
                      <span key={aIdx} className="bg-white border border-slate-200 px-2.5 py-0.5 rounded text-[11px] text-slate-700 font-medium">
                        ✓ {a}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AEO KNOWLEDGE GRAPH & VERIFIED FACTS FOR THIS CITY */}
<AEOManaliKasolBox cityName={city.cityName} citySlug={city.slug} />

{/* FULL DAY-WISE ITINERARY */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Complete Day-By-Day Plan
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Nights / 6 Days Itinerary Breakdown
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follows the official Rudraksh Safar Manali Kasol 5999 tour blueprint.
            </p>
          </div>

          <div className="space-y-6">
            {itinerary.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 relative min-h-[170px] md:min-h-full">
                      <img
                        src={item.image}
                        alt={`${item.day} - ${item.title}`}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-sm shadow flex items-center gap-1.5">
                          <IconComp className="w-4 h-4" /> {item.day}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-8 p-6 space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block">
                          {item.tagline}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                          {item.title}
                        </h3>
                      </div>

                      <ul className="space-y-2 text-slate-700 text-xs sm:text-sm">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                          <Bed className="w-3.5 h-3.5 text-amber-600" />
                          <span>Stay: <strong>{item.stay}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                          <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Meals: <strong>{item.meals}</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INCLUSIONS & EXCLUSIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-emerald-50/50 border-2 border-emerald-300 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">What's Included in ₹5,999?</h3>
                  <p className="text-xs text-emerald-700 font-medium">All essential expedition costs covered</p>
                </div>
              </div>

              <div className="space-y-3 text-slate-800 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Transportation</span>
                  <span className="font-bold text-slate-900">Delhi – Manali – Kasol – Delhi</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Dedicated Vehicle</span>
                  <span className="font-bold text-slate-900">AC Tempo Traveller</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Manali Hotel</span>
                  <span className="font-bold text-slate-900">2 Nights Stay (Quad Sharing)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Kasol Riverside Camp</span>
                  <span className="font-bold text-slate-900">1 Night Riverside Alpine Camp</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Meals</span>
                  <span className="font-bold text-slate-900">3 Breakfasts + 3 Dinners</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Bonfire &amp; Music</span>
                  <span className="font-bold text-slate-900">Riverside Bonfire Night in Kasol</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Sightseeing</span>
                  <span className="font-bold text-slate-900">Manali, Solang, Kullu, Kasol, Manikaran</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600">Sharing Basis</span>
                  <span className="font-bold text-slate-900">Quad Sharing Rooms</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-red-50/40 border-2 border-red-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Package Exclusions</h3>
                  <p className="text-xs text-red-600 font-medium">Clear &amp; transparent policy</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Lunches throughout the 6-day trip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Optional adventure sports: River rafting in Kullu, Paragliding, ATV ride in Solang.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Train/flight tickets from {city.cityName} to Delhi (we assist in booking separately).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Monument entry tickets, pony rides, room heaters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Personal expenses, laundry, extra snacks and cold drinks.</span>
                </li>
              </ul>

              <div className="mt-4 p-3 rounded-lg bg-red-100/60 border border-red-200 text-xs text-red-900">
                <strong>Notice:</strong> All adventure activities are payable directly on spot to certified valley operators.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGET & YOUTH VALUE BREAKDOWN FOR THIS CITY */}
<BudgetYouthValueSection cityName={city.cityName} onOpenBookingModal={() => setBookingModalOpen(true)} />

{/* UPCOMING BATCHES & DOWNLOAD PDF */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-red-100 text-red-900 border-red-300 mb-2 font-semibold text-xs">
              Batch Availability
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Join Upcoming Batches from {city.cityName}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every Friday Delhi departure. Maximum 12 travellers per Tempo Traveller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {batches.map((b, bIdx) => (
              <div
                key={bIdx}
                className="rounded-2xl border-2 border-slate-200 p-6 bg-white shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{b.name}</span>
                    <Badge className={b.seatsLeft <= 5 ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'}>
                      {b.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{b.dates}</h3>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 block">Available Seats</span>
                    <strong className="text-base text-red-600">{b.seatsLeft} Seats Remaining</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <Button
                    onClick={() => {
                      setFormData({ ...formData, batch: `${b.name} (${b.dates})` });
                      setBookingModalOpen(true);
                    }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm py-2.5"
                  >
                    Reserve Spot
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Box */}
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8 shadow-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded text-xs">
                <FileText className="w-3.5 h-3.5" /> Official Itinerary Document
              </span>
              <h3 className="text-xl font-bold">Download Manali × Kasol Brochure PDF</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Detailed day-to-day schedule, camping gear guidelines, reporting addresses and terms.
              </p>
            </div>
            <a
              href={officialPdfUrl}
              download="Rudraksh_Safar_Manali_Kasol_5999.pdf"
              className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg transition text-sm"
            >
              <Download className="w-4 h-4" /> Download PDF (2.8 MB)
            </a>
          </div>
        </div>
      </section>

      {/* FAQS (LOCAL CITY + CORE) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Questions &amp; Answers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (from {city.cityName})
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear answers regarding departure coordination from {city.cityName}, train tickets, solo safety, and mountain camping.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {city.localFaqs.map((f, fIdx) => (
              <AccordionItem key={fIdx} value={`city-faq-${fIdx}`} className="border border-slate-200 rounded-xl px-4 bg-amber-50/30">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="core-faq-1" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Can I join the trip solo from {city.cityName}?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes! This trip is specially designed for solo travellers. You can join independently and meet fellow travellers from Chhattisgarh and across India. Over 60% of our travellers join as solo explorers!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="core-faq-2" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Is this trip suitable for couples or friends?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes, couples and friend duos are welcome. If you want double sharing (private room) instead of quad sharing, you can request an upgrade at a nominal extra cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="core-faq-3" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Where exactly in Delhi does the trip depart from?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                The trip departs from common Delhi hubs like Kashmiri Gate Metro Station or Majnu Ka Tila. Exact GPS location, trip leader phone number, and Tempo Traveller vehicle number are shared on WhatsApp 24 hours prior.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="core-faq-4" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                What documents do I need to carry?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Every traveller must carry a valid government-issued photo ID (Aadhaar Card, Voter ID, Driving Licence, or Passport).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CROSS-SILO NAVIGATION (CHHATTISGARH HUBS) */}
      <section className="py-12 px-4 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block mb-2">
            Explore Departures From Other Chhattisgarh Cities
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Connecting All Major Hubs of Chhattisgarh
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allCities.map((c) => (
              <Link
                key={c.key}
                to={c.slug}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  c.key === city.cityKey
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-slate-950'
                }`}
              >
                📍 From {c.name}
              </Link>
            ))}
            <Link
              to="/manali-kasol-strangers-trip"
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white border border-slate-800 hover:bg-slate-800"
            >
              ⭐ Main Package Page
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-slate-950 text-white text-center">
        <div className="container mx-auto max-w-3xl space-y-5">
          <h2 className="text-3xl sm:text-4xl font-black">
            Depart From {city.cityName} To The Snow Peaks
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Call our direct travel desk at <strong className="text-amber-400">{contactPhone}</strong> or book online. 
            Come solo, leave as a squad!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Button
              size="lg"
              onClick={() => setBookingModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-6 text-base shadow-lg"
            >
              Book Your Spot – ₹5,999
            </Button>
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {contactPhone}
            </a>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-xl p-1"
            >
              ✕
            </button>

            <div className="mb-4">
              <Badge className="bg-amber-100 text-amber-900 border-amber-300 text-xs mb-1">
                From {city.cityName} • ₹5,999
              </Badge>
              <h3 className="text-xl font-bold text-slate-900">Reserve Your Spot</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill this form and our lead coordinator will confirm batch &amp; transit availability.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder={`e.g. ${contactPhone}`}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Origin City</label>
                  <input
                    type="text"
                    readOnly
                    value={city.cityName}
                    className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-100 font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">No. of Travellers</label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="1">1 (Solo Traveller)</option>
                    <option value="2">2 Travellers</option>
                    <option value="3">3 Travellers</option>
                    <option value="4+">4+ Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Batch</label>
                <select
                  value={formData.batch}
                  onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                  className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Upcoming Friday Departure">Batch 1: Upcoming Friday Departure</option>
                  <option value="Next Friday Departure">Batch 2: Next Friday Departure</option>
                  <option value="Fourth Friday Departure">Batch 3: Fourth Friday Departure</option>
                  <option value="Flexible Dates">Flexible on dates</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Send Request via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      )}

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
};

export default ManaliKasolCitySilo;
