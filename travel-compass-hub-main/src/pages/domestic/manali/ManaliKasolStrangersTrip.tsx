import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  Star,
  ChevronDown,
  ArrowRight,
  Train,
  Plane,
  Luggage,
  Coffee,
  Check,
  Compass,
  FileText,
  HelpCircle,
  Share2
} from 'lucide-react';

const ManaliKasolStrangersTrip = () => {
  const [selectedBatch, setSelectedBatch] = useState('Weekend Batch 1');
  const [activeCityTab, setActiveCityTab] = useState<'bhilai' | 'raipur' | 'durg'>('bhilai');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bhilai',
    travelers: '1',
    batch: 'Upcoming Friday Departure',
    notes: ''
  });

  const officialPdfUrl = '/Pdf/Rudraksh_Safar_Manali_Kasol_5999.pdf';
  const contactPhone = '9713057086';
  const whatsappUrl = (customMsg?: string) => {
    const text = customMsg || `Hello Rudraksh Safar, I am interested in the Manali × Kasol Strangers Trip (₹5,999). I am traveling from ${activeCityTab.toUpperCase()}. Please share upcoming batch dates and seat availability.`;
    return `https://wa.me/91${contactPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Enquiry: Manali × Kasol Strangers Trip (₹5,999)*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *City:* ${formData.city}\n` +
      `• *Batch:* ${formData.batch}\n` +
      `• *No. of Travellers:* ${formData.travelers}\n` +
      (formData.notes ? `• *Note:* ${formData.notes}\n` : '') +
      `Please confirm seat availability.`;
    window.open(`https://wa.me/91${contactPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setBookingModalOpen(false);
  };

  const itinerary = [
    {
      day: 'Day 1',
      title: 'Delhi Departure | The Great Escape Begins',
      tagline: 'Meet strangers, turn on the music & hit the highway!',
      highlights: [
        'Assemble at the designated Delhi departure point (Evening 6:00 PM – 7:30 PM).',
        'Meet fellow travellers and get introduced to your travel squad & trip lead.',
        'Begin your overnight journey towards Manali in a comfortable AC Tempo Traveller.',
        'Enjoy icebreaker games, road-trip Antakshari, and travel playlists during the scenic journey through Himachal foothills.'
      ],
      stay: 'Overnight journey in AC Tempo Traveller',
      meals: 'Not included (Dhaba dinner stop en route)',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800'
    },
    {
      day: 'Day 2',
      title: 'Arrival in Manali | Local Sightseeing & Cafe Vibes',
      tagline: 'Crisp mountain air, ancient cedar forests & Mall Road vibes',
      highlights: [
        'Arrive in picturesque Manali town in the morning and check into the hotel.',
        'Freshen up and enjoy a warm welcome drink with mountain views.',
        'Visit the famous Hadimba Devi Temple, set amidst towering deodar trees.',
        'Explore Club House with river views and recreational activities.',
        'Enjoy shopping, street food, and mountain cafes at the buzzing Mall Road.',
        'Visit serene Van Vihar and the colourful Tibetan Monastery.',
        'Return to the hotel for a delicious buffet dinner with your squad.'
      ],
      stay: 'Manali Hotel (Quad Sharing)',
      meals: 'Dinner included',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1620630739999-5285741f2219?q=80&w=800'
    },
    {
      day: 'Day 3',
      title: 'Solang Valley | Adventure Day & Himalayan Panorama',
      tagline: 'Snow-capped peaks, adrenaline rushes & valley vistas',
      highlights: [
        'Energizing breakfast at the hotel to kick off adventure day.',
        'Proceed towards the majestic Solang Valley (famed Himalayan snow valley).',
        'Experience breathtaking views of glacier peaks and snow-clad slopes.',
        'Enjoy leisure time and optional high-adrenaline adventure activities:',
        '• Paragliding over alpine meadows',
        '• Thrilling ATV / Quad Bike ride',
        '• Zorbing down grassy hills',
        '• Solang Ropeway cable car ride',
        '• Skiing (Seasonal snow conditions)',
        'Return to hotel in the evening for bonding, stories, dinner and overnight stay.'
      ],
      stay: 'Manali Hotel (Quad Sharing)',
      meals: 'Breakfast and Dinner included',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1589314486665-276c2438847c?q=80&w=800'
    },
    {
      day: 'Day 4',
      title: 'Manali to Kullu to Kasol | River & Bonfire Night',
      tagline: 'White water rapids, Parvati Valley & starry riverside camp',
      highlights: [
        'Hearty breakfast at the hotel followed by check-out.',
        'Scenic drive along the Beas River towards Kullu Valley.',
        'Explore Kullu handicraft markets & world-famous Kullu shawl emporiums.',
        'Optional River Rafting in Kullu on the gushing Beas River (Extra cost).',
        'Drive into the magical Parvati Valley towards mystical Kasol.',
        'Check into the riverside alpine campsite nestled beneath pine trees.',
        'Gather around an evening bonfire with acoustic songs, squad games & stargazing.',
        'Warm buffet dinner served at the riverside campsite.'
      ],
      stay: 'Kasol Riverside Camp (Quad Sharing)',
      meals: 'Breakfast and Dinner included',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800'
    },
    {
      day: 'Day 5',
      title: 'Manikaran Sahib | Explore & Return Journey to Delhi',
      tagline: 'Sacred hot springs, holy langar & hippie Kasol lanes',
      highlights: [
        'Wake up to the soothing sounds of the Parvati River and enjoy camp breakfast.',
        'Check out from the camp and drive to the revered Manikaran Sahib Gurudwara.',
        'Take a dip in the natural hot sulphur springs renowned for healing properties.',
        'Visit the ancient historic Shiv Temple adjacent to the gurudwara.',
        'Free leisure time in Kasol market: explore bohemian cafes, German bakeries & souvenir shops.',
        'Board the AC Tempo Traveller in the late afternoon / evening for the overnight journey to Delhi.'
      ],
      stay: 'Overnight journey in AC Tempo Traveller',
      meals: 'Breakfast included',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800'
    },
    {
      day: 'Day 6',
      title: 'Arrival in Delhi | Trip Ends, Friendship Begins',
      tagline: 'Memories created, squad unlocked, travel blues guaranteed!',
      highlights: [
        'Reach Delhi early in the morning (around 7:00 AM – 9:00 AM).',
        'Say emotional goodbyes to your new squad and exchange photos & contacts.',
        'Head back home with unforgettable mountain memories, social media reels, and a squad that stays for life!'
      ],
      stay: 'Trip concludes in Delhi',
      meals: 'Not included (Breakfast on arrival by choice)',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800'
    }
  ];

  const batches = [
    { name: 'Batch 1 (Next Weekend)', dates: 'Upcoming Friday Departure', seatsLeft: 4, status: 'Fast Filling' },
    { name: 'Batch 2 (Mid Month)', dates: 'Next Friday Departure', seatsLeft: 7, status: 'Available' },
    { name: 'Batch 3 (Month-End Special)', dates: 'Fourth Friday Departure', seatsLeft: 9, status: 'Open' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': 'https://rudrakshsafar.com/manali-kasol-strangers-trip#trip',
        'name': 'Manali × Kasol – The Strangers Trip | 5N/6D Social Group Tour',
        'description': 'Join our 5 Nights / 6 Days social group backpacking trip covering Manali, Solang Valley, Kullu, Kasol and Manikaran Sahib. AC Tempo Traveller from Delhi, riverside camp in Kasol, hotel in Manali, bonfire, meals & squad adventures.',
        'touristType': [
          'Solo Travellers',
          'Young Professionals',
          'Couples',
          'College Students',
          'Backpackers'
        ],
        'offers': {
          '@type': 'Offer',
          'price': '5999',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'validFrom': '2026-01-01',
          'url': 'https://rudrakshsafar.com/manali-kasol-strangers-trip'
        },
        'provider': {
          '@type': 'TravelAgency',
          'name': 'Rudraksh Safar',
          'telephone': '+919713057086',
          'url': 'https://rudrakshsafar.com',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'GE Road, Bhilai 3',
            'addressLocality': 'Bhilai',
            'addressRegion': 'Chhattisgarh',
            'postalCode': '490021',
            'addressCountry': 'IN'
          }
        },
        'itinerary': itinerary.map((item, idx) => ({
          '@type': 'TouristTrip',
          'name': `${item.day}: ${item.title}`,
          'description': item.highlights.join(' ')
        }))
      },
      {
        '@type': 'Product',
        '@id': 'https://rudrakshsafar.com/manali-kasol-strangers-trip#product',
        'name': 'Manali Kasol Strangers Group Trip 5N/6D',
        'image': 'https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200',
        'description': 'Social backpacking group tour to Manali and Kasol for solo travellers, couples and friends at ₹5,999.',
        'brand': {
          '@type': 'Brand',
          'name': 'Rudraksh Safar'
        },
        'offers': {
          '@type': 'Offer',
          'price': '5999',
          'priceCurrency': 'INR',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock',
          'url': 'https://rudrakshsafar.com/manali-kasol-strangers-trip'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '148',
          'bestRating': '5'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://rudrakshsafar.com/manali-kasol-strangers-trip#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Can I join the trip solo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! This trip is specially designed for solo travellers. You can join independently and meet fellow travellers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is this trip suitable for couples?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, couples and friends are welcome to join the group.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the package price?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The package starts at ₹5,999 per person on quad-sharing basis.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do travellers from Bhilai, Raipur, and Durg connect to this trip?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Rudraksh Safar provides complete transit coordination. Travellers from Bhilai, Raipur, and Durg can take direct overnight Superfast trains (such as Chhattisgarh Express or Gondwana Express) or morning flights from Raipur Airport to Delhi, reaching comfortably before our evening Tempo Traveller departure.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are adventure activities included?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Activities such as rafting, paragliding, ATV rides, skiing and ropeway are optional and payable separately.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are meals included?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. The package includes 3 breakfasts and 3 dinners. Lunches are not included.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What type of accommodation is provided?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The package includes 2 nights in a Manali hotel and 1 night in a Kasol riverside camp on quad-sharing basis.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Where does the trip start?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The trip starts and ends in Delhi. Exact departure and reporting details are shared with confirmed travellers through WhatsApp.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can the itinerary change?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Weather conditions, road closures, local regulations and operational requirements may affect the itinerary.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is this a party trip?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. It is a social group travel experience focused on meeting people, exploring destinations and enjoying group activities.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What documents should I carry?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Every traveller must carry a valid government-issued photo ID.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://rudrakshsafar.com/manali-kasol-strangers-trip#breadcrumb',
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
            'name': 'Domestic Packages',
            'item': 'https://rudrakshsafar.com/domestic-packages'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Manali Kasol Strangers Trip',
            'item': 'https://rudrakshsafar.com/manali-kasol-strangers-trip'
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Helmet>
        <title>Manali × Kasol The Strangers Trip ₹5,999 | 5N/6D Social Group Tour | Rudraksh Safar</title>
        <meta
          name="description"
          content="Come Solo. Meet Your Squad. Book 5N/6D Manali × Kasol Strangers Trip for ₹5,999 with AC Tempo Traveller, Kasol riverside camp, Solang Valley & bonfire. Special transit assistance from Bhilai, Raipur & Durg! Call 9713057086."
        />
        <meta
          name="keywords"
          content="Manali Kasol strangers trip, cheapest Manali Kasol tour package 5999, budget Manali tour for college students, Manali trip under 6000, Kasol riverside camping, Solang Valley package, Manali tour package from Bhilai, Manali tour package from Raipur, Manali tour package from Durg, Manali package from Bilaspur, Manali package from Rajnandgaon, budget backpacking Himachal trip, Himachal tour for youngsters, cheap solo travel packages India, Delhi to Manali Kasol tempo traveller group trip"
        />
        <link rel="canonical" href="https://rudrakshsafar.com/manali-kasol-strangers-trip" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Manali × Kasol – The Strangers Trip | ₹5,999 | Rudraksh Safar" />
        <meta
          property="og:description"
          content="No friends available? No problem. Your next travel squad is waiting! 5N/6D Manali, Solang, Kullu, Kasol & Manikaran group tour at ₹5,999. Dedicated departure support from Bhilai, Raipur & Durg."
        />
        <meta property="og:url" content="https://rudrakshsafar.com/manali-kasol-strangers-trip" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manali × Kasol The Strangers Trip ₹5,999 | Rudraksh Safar" />
        <meta name="twitter:description" content="Come Solo. Meet Your Squad. Join our 5N/6D social group trip to Manali & Kasol. Special booking assistance from Bhilai, Raipur & Durg. Call 9713057086." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1200" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Raipur, Durg, Chhattisgarh" />
        <meta name="geo.position" content="21.2094;81.4285" />
        <meta name="ICBM" content="21.2094, 81.4285" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      {/* TOP NOTIFICATION / PROMO TICKER */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-sm flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Upcoming Batch
        </span>
        <span>Delhi Departures Every Friday | Dedicated Transit Sync for Travellers from <strong>Bhilai</strong>, <strong>Raipur</strong> &amp; <strong>Durg</strong>!</span>
        <a href={`tel:${contactPhone}`} className="underline font-bold hover:text-amber-100 ml-1 inline-flex items-center gap-1">
          <Phone className="w-3 h-3 inline" /> Call 9713057086
        </a>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=1920"
            alt="Scenic Himalayan valley in Manali and Kasol with snow peaks and pine forests"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Home', path: '/' },
                { label: 'Domestic Packages', path: '/domestic-packages' },
                { label: 'Manali × Kasol The Strangers Trip', path: '/manali-kasol-strangers-trip' }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1 text-xs sm:text-sm tracking-wide">
                  ⭐ THE STRANGERS TRIP 2026
                </Badge>
                <Badge variant="outline" className="border-emerald-400 text-emerald-300 bg-emerald-950/40 px-3 py-1 text-xs">
                  5 Nights / 6 Days
                </Badge>
                <Badge variant="outline" className="border-sky-400 text-sky-300 bg-sky-950/40 px-3 py-1 text-xs">
                  Delhi to Delhi Expedition
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-300 bg-purple-950/40 px-3 py-1 text-xs">
                  Solo Friendly
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Manali × Kasol <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                  The Strangers Trip
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-amber-200/90 italic">
                “No Friends Available? No Problem. Your Next Travel Squad Is Waiting.”
              </p>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Experience the mountains, make genuine friends and create unforgettable memories with <strong>Rudraksh Safar</strong>. 
                Whether you're travelling solo, with your partner or with a friend, this trip brings strangers together through mountain adventures, 
                music, Antakshari, riverside bonfire nights and shared Himalayan sunrises.
              </p>

              <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-sm max-w-2xl flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Come as strangers. Leave as a squad!</strong> Over 60% of travellers join solo and leave with lifelong road-trip besties.
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-6 text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Your Seat – ₹5,999
                </Button>

                <a
                  href={officialPdfUrl}
                  download="Rudraksh_Safar_Manali_Kasol_5999.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition-colors shadow-sm"
                >
                  <Download className="w-5 h-5 text-amber-400" />
                  <span>Download PDF Brochure</span>
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Squad Lead</span>
                </a>
              </div>
            </div>

            {/* Right Price & Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-6 shadow-2xl text-white relative">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md animate-pulse">
                  Unbeatable Price
                </div>

                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Special Group Package</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-amber-400">₹5,999</span>
                    <span className="text-slate-400 text-sm font-medium">/ person</span>
                  </div>
                  <p className="text-xs text-emerald-400 mt-1 font-medium">✓ Quad Sharing Basis | All Inclusions Covered</p>
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
                      <Bus className="w-4 h-4 text-amber-400" /> Vehicle
                    </span>
                    <span className="font-semibold text-slate-100">AC Tempo Traveller</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Bed className="w-4 h-4 text-amber-400" /> Stays
                    </span>
                    <span className="font-semibold text-slate-100">2N Hotel + 1N Camp</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-amber-400" /> Meals
                    </span>
                    <span className="font-semibold text-slate-100">3 Breakfasts + 3 Dinners</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-amber-400" /> Special
                    </span>
                    <span className="font-semibold text-slate-100">Bonfire & Music Night</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400" /> Pickup / Drop
                    </span>
                    <span className="font-semibold text-slate-100">Delhi (Overnight Transit)</span>
                  </div>
                </div>

                {/* Direct Call Widget */}
                <div className="mt-4 pt-2 text-center">
                  <p className="text-xs text-slate-400 mb-2">Need assistance with transit or customized seats?</p>
                  <a
                    href={`tel:${contactPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-2.5 px-4 rounded-lg border border-slate-700 transition text-sm"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    Call Us: 9713057086
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK STATS STRIP */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-sm relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Duration</span>
              <strong className="text-base text-slate-800">5N / 6D</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Starting From</span>
              <strong className="text-base text-slate-800">Delhi</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Destinations</span>
              <strong className="text-base text-slate-800">Manali &amp; Kasol</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Stays</span>
              <strong className="text-base text-slate-800">Hotel + Camp</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Group Type</span>
              <strong className="text-base text-slate-800">Social Strangers</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-xs uppercase font-semibold text-slate-500">Price Per Person</span>
              <strong className="text-base text-amber-600 font-bold">₹5,999 Only</strong>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTIONS FOR CHHATTISGARH TRAVELLERS (BHILAI, RAIPUR, DURG) */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-100 via-amber-50/40 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Direct Travel Support For Chhattisgarh Explorers
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Departing From Chhattisgarh? We've Got You Covered!
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              While our official mountain road expedition kicks off in Delhi, <strong>Rudraksh Safar</strong> provides complete 
              end-to-end travel guidance, train ticket bookings, flight recommendations and squad syncing for travellers joining from 
              <strong> Bhilai</strong>, <strong>Raipur</strong>, and <strong>Durg</strong>.
            </p>
          </div>

          {/* Interactive City Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300">
              <button
                type="button"
                onClick={() => setActiveCityTab('bhilai')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCityTab === 'bhilai'
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-300/60'
                }`}
              >
                📍 From Bhilai
              </button>
              <button
                type="button"
                onClick={() => setActiveCityTab('raipur')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCityTab === 'raipur'
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-300/60'
                }`}
              >
                ✈️ From Raipur
              </button>
              <button
                type="button"
                onClick={() => setActiveCityTab('durg')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCityTab === 'durg'
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-300/60'
                }`}
              >
                🚆 From Durg
              </button>
            </div>
          </div>

          {/* City Content Showcase */}
                    {/* Silo Hub Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            <Link
              to="/manali-kasol-strangers-trip/from-bhilai"
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-center"
            >
              <span className="text-2xl block mb-1">📍</span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-amber-600 block">From Bhilai</strong>
              <span className="text-[11px] text-slate-500">Train & Flight Sync →</span>
            </Link>
            <Link
              to="/manali-kasol-strangers-trip/from-raipur"
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-center"
            >
              <span className="text-2xl block mb-1">✈️</span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-amber-600 block">From Raipur</strong>
              <span className="text-[11px] text-slate-500">Nonstop Flights & Rajdhani →</span>
            </Link>
            <Link
              to="/manali-kasol-strangers-trip/from-durg"
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-center"
            >
              <span className="text-2xl block mb-1">🚆</span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-amber-600 block">From Durg</strong>
              <span className="text-[11px] text-slate-500">Originating Superfasts →</span>
            </Link>
            <Link
              to="/manali-kasol-strangers-trip/from-bilaspur"
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-center"
            >
              <span className="text-2xl block mb-1">🚂</span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-amber-600 block">From Bilaspur</strong>
              <span className="text-[11px] text-slate-500">SECR Direct Rajdhani →</span>
            </Link>
            <Link
              to="/manali-kasol-strangers-trip/from-rajnandgaon"
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-center"
            >
              <span className="text-2xl block mb-1">🏔️</span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-amber-600 block">From Rajnandgaon</strong>
              <span className="text-[11px] text-slate-500">RJN & Durg Transit →</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
            {activeCityTab === 'bhilai' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-amber-500" />
                      Joining From Bhilai (Twin Cities Region)
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Bhilai Steel City, Nehru Nagar, Civic Centre, Bhilai-3 &amp; Smriti Nagar travellers
                    </p>
                  </div>
                  <Badge className="self-start md:self-auto bg-amber-50 text-amber-800 border-amber-300 px-3 py-1 font-semibold text-xs">
                    Local Office in Bhilai-3, GE Road
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      <Train className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Direct Train Routes</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Board convenient trains from <strong>Bhilai Power House (BPH)</strong> or nearby <strong>Durg Junction</strong>:
                      Chhattisgarh Express (18237), Gondwana SF Express (12409), or Bilaspur Rajdhani (12441) with morning arrival in Delhi.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Plane className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Swift Flight Connection</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Only a <strong>45-minute cab ride</strong> from Bhilai to Swami Vivekananda Airport Raipur (RPR). 
                      Catch morning flights (IndiGo, Air India) reaching New Delhi (DEL) by noon, leaving ample time to rest before evening reporting!
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Bhilai Squad Sync</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We connect travellers joining from Bhilai in a private group before departure. 
                      You can travel to Delhi together on the same train or flight, split airport cabs, and start bonding on Day 0!
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-800 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
                    <span>
                      <strong>Want us to book your train or flight from Bhilai to Delhi?</strong> Our Bhilai team assists with full ticket booking bundles.
                    </span>
                  </div>
                  <a
                    href={whatsappUrl('Hello Rudraksh Safar, I am from Bhilai and want to join the Manali Kasol Strangers Trip. Please guide me on train/flight ticket booking to Delhi.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-lg text-xs"
                  >
                    <MessageCircle className="w-4 h-4" /> Connect from Bhilai
                  </a>
                </div>
              </div>
            )}

            {activeCityTab === 'raipur' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <Plane className="w-6 h-6 text-sky-500" />
                      Joining From Raipur (State Capital Transit Hub)
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Raipur Junction, Telibandha, Shankar Nagar, Pandri &amp; Naya Raipur travellers
                    </p>
                  </div>
                  <Badge className="self-start md:self-auto bg-sky-50 text-sky-800 border-sky-300 px-3 py-1 font-semibold text-xs">
                    Air &amp; Superfast Rail Advantage
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Plane className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Direct Nonstop Flights</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Frequent morning flights take only <strong>1 hr 45 mins</strong> from Swami Vivekananda Airport (RPR) to Delhi IGI Airport (DEL). 
                      Arrive early, explore Delhi cafes or relax before our evening 6:00 PM tempo traveller pickup.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      <Train className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Premier Superfast Trains</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Direct departures from <strong>Raipur Junction (R)</strong>: Bilaspur-New Delhi Rajdhani Express (12441), 
                      Gondwana Express (12409), Samta Express (12807) and Chhattisgarh Express with direct drop at Hazrat Nizamuddin / New Delhi.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <Luggage className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Luggage &amp; Reporting Support</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our trip lead shares exact location coordinates, cloakroom tips, and metro route guidance from Delhi Airport / Railway station 
                      directly to our Majnu Ka Tila / Kashmiri Gate departure hub.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-slate-800 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-sky-600 shrink-0" />
                    <span>
                      <strong>Traveling from Raipur?</strong> Join solo or with colleagues — our travel desk coordinates your flight/train sync smoothly!
                    </span>
                  </div>
                  <a
                    href={whatsappUrl('Hello Rudraksh Safar, I am located in Raipur and want to book the Manali Kasol Strangers Trip. Please share batch dates & flight coordination.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-lg text-xs"
                  >
                    <MessageCircle className="w-4 h-4" /> Connect from Raipur
                  </a>
                </div>
              </div>
            )}

            {activeCityTab === 'durg' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <Train className="w-6 h-6 text-emerald-500" />
                      Joining From Durg (Primary Railway Junction)
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Durg Junction, Mohan Nagar, Padmanabhpur, CSVTU &amp; BIT Durg student travellers
                    </p>
                  </div>
                  <Badge className="self-start md:self-auto bg-emerald-50 text-emerald-800 border-emerald-300 px-3 py-1 font-semibold text-xs">
                    Direct Originating Express Hub
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Train className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Direct Originating Trains</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Durg Junction (DURG)</strong> is the originating point for major North-bound trains: 
                      Chhattisgarh Express (18237), Durg-Hazrat Nizamuddin Humsafar Express (22867), and Chhattisgarh Sampark Kranti (12823). 
                      Easy seat boarding without rush!
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">College &amp; Youth Favorite</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Highly popular with students and alumni from <strong>BIT Durg, CSVTU, Rungta, and Shankaracharya</strong> colleges. 
                      No need to wait for a 10-person college friend group to agree — just sign up solo and join young explorers!
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">Physical Consultation Available</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Travelers from Durg can also easily visit our Bhilai-3 operations office along GE Road for in-person consultation, 
                      cash/UPI booking verification, and printed itinerary collection.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>
                      <strong>College student or solo explorer from Durg?</strong> We make your first group backpacking trip 100% comfortable &amp; verified.
                    </span>
                  </div>
                  <a
                    href={whatsappUrl('Hello Rudraksh Safar, I am from Durg and want to book the Manali Kasol Strangers Trip. Please share upcoming batch dates & booking process.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs"
                  >
                    <MessageCircle className="w-4 h-4" /> Connect from Durg
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AEO KNOWLEDGE GRAPH & DIRECT ANSWER FACTS */}
<AEOManaliKasolBox />

{/* WHY THIS TRIP? (THE SOCIAL STRANGERS DIFFERENTIATOR) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-purple-100 text-purple-900 border-purple-300 mb-2 font-semibold text-xs">
              Beyond Ordinary Tourism
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why It's Called "The Strangers Trip"
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Most travel plans fail because friends cancel last-minute. Here, we solve that forever. 
              Join independently and meet curated, fun-loving travellers who love the mountains just as much as you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">Come Solo, Leave a Squad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  More than half of our travellers join solo. Our trip leads run fun icebreakers so all awkwardness disappears within the first 2 hours of the journey!
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-3">
                  <Flame className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">Riverside Bonfire in Kasol</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Experience cold Parvati Valley nights warmed by crackling bonfires, acoustic guitar jams, group storytelling, and starry mountain skies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <Music className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">Road-Trip Antakshari &amp; Vibes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  No boring bus rides. Our AC Tempo Traveller journeys are legendary for road-trip playlists, games, midnight chai stops, and endless laughter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">Safe, Verified &amp; Respectful</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every traveller is ID-verified. We maintain a zero-tolerance policy against misconduct, ensuring complete comfort for solo female travellers &amp; couples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DESTINATION HIGHLIGHTS WITH RICH VISUALS */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-amber-400 text-slate-950 font-bold mb-2 text-xs">
              The Mountain Circuit
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              5 Legendary Destinations in 1 Epic Journey
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              From snow-covered peaks and cedar woods in Manali to holy sulphur springs and riverside alpine camps in Parvati Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manali */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=800"
                  alt="Scenic view of Manali town surrounded by pine forests and cedar trees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Manali Town &amp; Mall Road
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Hadimba Temple &amp; Old Manali</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Explore ancient wooden pagoda architecture surrounded by giant cedar trees, Van Vihar, and vibrant Mall Road street shopping.
                  </p>
                </div>
              </div>
            </div>

            {/* Solang Valley */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589314486665-276c2438847c?q=80&w=800"
                  alt="Solang Valley snow adventures and paragliding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Solang Valley
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Adventure Capital of Himachal</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Breathtaking alpine vistas with opportunities for paragliding, ATV rides, zorbing, ropeway cable rides and seasonal winter skiing.
                  </p>
                </div>
              </div>
            </div>

            {/* Kullu Valley */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800"
                  alt="Beas River white water rafting in Kullu valley"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Kullu Valley
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Beas River Rafting &amp; Shawls</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Ride white water rapids along the Beas River, explore traditional wooden handicraft emporiums, and pick up world-famous Kullu shawls.
                  </p>
                </div>
              </div>
            </div>

            {/* Kasol Riverside Camp */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800"
                  alt="Riverside camping in Kasol by the Parvati River"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Kasol Riverside
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Parvati Riverside Camping</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Camp right beside the roaring turquoise Parvati River under towering pine mountains with bonfire, acoustic music, and starry night skies.
                  </p>
                </div>
              </div>
            </div>

            {/* Manikaran Sahib */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800"
                  alt="Manikaran Sahib Gurudwara and holy hot springs in Himachal Pradesh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Manikaran Sahib
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Sacred Hot Springs &amp; Gurudwara</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Spiritual solace at Manikaran Sahib Gurudwara and the historic Shiv Temple. Witness natural boiling water springs and relish blessed langar.
                  </p>
                </div>
              </div>
            </div>

            {/* Squad Road Trip */}
            <div className="group rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800"
                  alt="Young travellers enjoying mountain trek and squad memories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-300 font-bold text-xs px-2.5 py-1 rounded">
                  Squad Moments
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Bohemian Cafes &amp; Memories</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Stroll through Kasol's hipster cafes, taste Israeli shakshuka, fresh apple pies, buy hand-knit woolens and create lifelong squad stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAY-WISE DETAILED ITINERARY */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Complete Travel Blueprint
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Day-Wise Itinerary (5N / 6D)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed according to the official Rudraksh Safar Manali Kasol 5999 tour blueprint. 
              Balanced pace, breathtaking sights, and maximum squad bonding.
            </p>
          </div>

          <div className="space-y-6">
            {itinerary.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Left Day Badge / Image */}
                    <div className="md:col-span-4 relative min-h-[180px] md:min-h-full">
                      <img
                        src={item.image}
                        alt={`${item.day} - ${item.title}`}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-sm shadow-md flex items-center gap-1.5">
                          <IconComponent className="w-4 h-4" /> {item.day}
                        </span>
                      </div>
                    </div>

                    {/* Right Content */}
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

      {/* INCLUSIONS & EXCLUSIONS (SIDE BY SIDE) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-emerald-100 text-emerald-900 border-emerald-300 mb-2 font-semibold text-xs">
              100% Honest Transparency
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What's Included in ₹5,999?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              No hidden fees, no surprise check-in charges. We clearly state what is provided and what is optional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions Card */}
            <div className="rounded-2xl bg-emerald-50/50 border-2 border-emerald-300 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Package Inclusions</h3>
                  <p className="text-xs text-emerald-700 font-medium">Covered in your ₹5,999 booking</p>
                </div>
              </div>

              <div className="space-y-3.5 text-slate-800 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Transportation</span>
                  <span className="font-bold text-slate-900 text-right">Delhi – Manali – Kasol – Delhi</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Dedicated Vehicle</span>
                  <span className="font-bold text-slate-900 text-right">AC Tempo Traveller</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Manali Stay</span>
                  <span className="font-bold text-slate-900 text-right">2 Nights Hotel (Quad Sharing)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Kasol Stay</span>
                  <span className="font-bold text-slate-900 text-right">1 Night Riverside Camp</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Meals Included</span>
                  <span className="font-bold text-slate-900 text-right">3 Breakfasts + 3 Dinners</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Special Experience</span>
                  <span className="font-bold text-slate-900 text-right">Riverside Bonfire Night</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Group Activities</span>
                  <span className="font-bold text-slate-900 text-right">Icebreakers &amp; Group Games</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                  <span className="font-semibold text-slate-600">Sightseeing Tours</span>
                  <span className="font-bold text-slate-900 text-right">Manali, Solang, Kullu, Kasol, Manikaran</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600">Room Sharing</span>
                  <span className="font-bold text-slate-900 text-right">Quad Sharing Basis</span>
                </div>
              </div>
            </div>

            {/* Exclusions Card */}
            <div className="rounded-2xl bg-red-50/40 border-2 border-red-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Package Exclusions</h3>
                  <p className="text-xs text-red-600 font-medium">To avoid any customer disputes</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Lunches throughout the entire 6-day trip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>River rafting charges in Kullu (optional, paid on spot).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Paragliding charges in Solang Valley (optional).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>ATV rides, zorbing, ropeway tickets, skiing &amp; adventure activities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Monument entry tickets and camera fees wherever applicable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Pony rides and room heater charges in hotel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Personal expenses, laundry, extra snacks &amp; beverages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Transit between home state (Chhattisgarh) to Delhi pickup point.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Anything not explicitly listed under package inclusions.</span>
                </li>
              </ul>

              <div className="mt-4 p-3 rounded-lg bg-red-100/60 border border-red-200 text-xs text-red-900">
                <strong>Important:</strong> All optional adventure activities are payable directly by travellers and depend on weather, operator availability and local valley conditions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGET & YOUTH VALUE BREAKDOWN */}
<BudgetYouthValueSection cityName='Bhilai, Raipur, Durg, Bilaspur & Rajnandgaon' onOpenBookingModal={() => setBookingModalOpen(true)} />

{/* TRIP INFORMATION CARD & WHO CAN JOIN */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Important Trip Information Card */}
            <div className="lg:col-span-6">
              <Card className="border-slate-200 shadow-md">
                <CardHeader className="bg-slate-900 text-white rounded-t-xl py-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    Important Trip Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="px-5 py-3 font-semibold text-slate-500">Duration</td>
                        <td className="px-5 py-3 font-bold text-slate-900">5 Nights / 6 Days</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="px-5 py-3 font-semibold text-slate-500">Package Cost</td>
                        <td className="px-5 py-3 font-black text-amber-600">₹5,999 Per Person</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="px-5 py-3 font-semibold text-slate-500">Departure &amp; Arrival</td>
                        <td className="px-5 py-3 font-bold text-slate-900">Delhi (Overnight Transit)</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="px-5 py-3 font-semibold text-slate-500">Accommodation</td>
                        <td className="px-5 py-3 font-bold text-slate-900">Quad Sharing</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="px-5 py-3 font-semibold text-slate-500">Manali Stay</td>
                        <td className="px-5 py-3 text-slate-900">2 Nights Hotel</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="px-5 py-3 font-semibold text-slate-500">Kasol Stay</td>
                        <td className="px-5 py-3 text-slate-900">1 Night Riverside Camp</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="px-5 py-3 font-semibold text-slate-500">Overnight Travel</td>
                        <td className="px-5 py-3 text-slate-900">2 Nights (Delhi-Manali &amp; Kasol-Delhi)</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="px-5 py-3 font-semibold text-slate-500">Meals</td>
                        <td className="px-5 py-3 text-slate-900">3 Breakfasts + 3 Dinners</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-white">
                        <td className="px-5 py-3 font-semibold text-slate-500">Transportation</td>
                        <td className="px-5 py-3 text-slate-900">AC Tempo Traveller</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-5 py-3 font-semibold text-slate-500">Trip Category</td>
                        <td className="px-5 py-3 font-bold text-emerald-700">Social Group / Backpacking Experience</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            {/* Who Can Join? */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md">
                <Badge className="bg-purple-100 text-purple-900 border-purple-300 mb-2 font-semibold text-xs">
                  Join Without Hesitation
                </Badge>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Who Can Join This Trip?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  You don't need to arrange your own friend group. Join individually and meet other travellers who share your love for travelling.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">01</span>
                    <strong className="text-slate-800">Solo Travellers</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-pink-100 text-pink-800 flex items-center justify-center font-bold text-xs">02</span>
                    <strong className="text-slate-800">Couples</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs">03</span>
                    <strong className="text-slate-800">Friend Duos</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">04</span>
                    <strong className="text-slate-800">College Students</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">05</span>
                    <strong className="text-slate-800">Young Working Pros</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">06</span>
                    <strong className="text-slate-800">First-Time Travellers</strong>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-800 text-xs sm:text-sm">
                  <strong>Room Allocation Note:</strong> Male/Female sharing rooms are allocated thoughtfully. Solo female travellers are paired exclusively with fellow female travellers for complete peace of mind.
                </div>
              </div>

              {/* DOWNLOAD PDF CALLOUT */}
              <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8 shadow-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded text-xs">
                    <FileText className="w-3.5 h-3.5" /> PDF Itinerary Available
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold">Download Official PDF Brochure</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Get day-by-day timing, campsite details, packing advice and terms in one portable PDF.
                  </p>
                </div>
                <a
                  href={officialPdfUrl}
                  download="Rudraksh_Safar_Manali_Kasol_5999.pdf"
                  className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm"
                >
                  <Download className="w-4 h-4" /> Download PDF (2.8 MB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING BATCHES & SEATS AVAILABILITY */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-red-100 text-red-900 border-red-300 mb-2 font-semibold text-xs">
              Live Seat Status
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Upcoming Batches &amp; Seat Availability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Batches depart every Friday from Delhi. Seats are limited to 12 travellers per Tempo Traveller to ensure comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {batches.map((batch, bIdx) => (
              <div
                key={bIdx}
                className="rounded-2xl border-2 border-slate-200 p-6 bg-slate-50/50 hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {batch.name}
                    </span>
                    <Badge
                      className={
                        batch.seatsLeft <= 5
                          ? 'bg-red-500 text-white'
                          : 'bg-emerald-500 text-white'
                      }
                    >
                      {batch.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{batch.dates}</h3>
                  <p className="text-xs text-slate-600">Reporting Time: 6:00 PM at Delhi Pickup Point</p>

                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-xs text-slate-500 block">Remaining Availability</span>
                    <div className="flex items-center justify-between mt-1">
                      <strong className="text-base text-red-600">{batch.seatsLeft} Seats Left</strong>
                      <span className="text-xs font-semibold text-slate-500">Max 12 / Traveller</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <Button
                    onClick={() => {
                      setFormData({ ...formData, batch: `${batch.name} (${batch.dates})` });
                      setBookingModalOpen(true);
                    }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm py-2.5"
                  >
                    Reserve This Batch
                  </Button>
                  <a
                    href={whatsappUrl(`Hi Rudraksh Safar, I want to reserve a seat for ${batch.name} (${batch.dates}) for the Manali Kasol trip.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 py-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Quick Check on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKING CHECKLIST FOR MOUNTAINS */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-sky-100 text-sky-900 border-sky-300 mb-2 font-semibold text-xs">
              Travel Preparation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What To Pack For Manali &amp; Kasol
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mountain weather changes fast. Here is a curated packing checklist so you stay cozy and ready for the squad journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                🧥 Warm Clothing
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                1 heavy fleece jacket, 2 sets of thermal inners, woolen cap, gloves and cozy socks for chilly Kasol riverside nights.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                👟 Footwear
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sturdy sneakers or trekking shoes with good grip for Solang slopes and rocky Parvati river trails, plus 1 casual slip-on.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                🔌 Electronics &amp; Power
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-capacity power bank (10,000–20,000 mAh), earphones/headphones, fast mobile charger and camera for reels.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                🪪 Documents &amp; Meds
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Original Govt Photo ID (Aadhaar / Voter ID / Passport), basic motion sickness pills, lip balm, sunglasses, and sunscreen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 mb-2 font-semibold text-xs">
              Clear Doubts Instantly
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything you need to know about joining our Manali × Kasol Strangers Trip from Delhi or travelling from Chhattisgarh.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-1" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Can I join the trip solo?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes! This trip is specially designed for solo travellers. You can join independently and meet fellow travellers. In fact, over 60% of our group members start as individual solo travellers!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                How can travellers from Bhilai, Raipur, or Durg join this trip?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Rudraksh Safar coordinates everything! You can board direct Superfast trains like the Chhattisgarh Express (18237), Gondwana Express (12409), or Bilaspur Rajdhani from Durg, Bhilai Power House, or Raipur Junction to reach Delhi in the morning. Alternatively, take a quick 1 hr 45 min flight from Raipur Airport to Delhi. We even connect all travellers from Chhattisgarh in a private group beforehand so you travel together to the Delhi reporting point!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Is this trip suitable for couples?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes, couples and friend duos are warmly welcome to join the group. If you wish to upgrade from quad sharing to a private double-occupancy room for extra privacy, you can request an upgrade at a nominal additional charge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                What is the package price and what does it cover?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                The package starts at ₹5,999 per person on a quad-sharing basis. It covers Delhi–Manali–Kasol–Delhi AC Tempo Traveller transit, 2 nights Manali hotel stay, 1 night Kasol riverside camp stay, 3 breakfasts + 3 dinners, evening bonfire, group games, and all local sightseeing in Manali, Solang, Kullu, Kasol and Manikaran.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Are adventure activities included?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                No. Activities such as white-water river rafting in Kullu, paragliding in Solang Valley, ATV rides, skiing, and cable car ropeways are optional and payable separately directly to local certified operators.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Are meals included?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes. The package includes 3 breakfasts and 3 dinners (buffet style at hotel and camp). Lunches are not included, giving you full freedom to try local Himachali Siddu, Mall Road street food, and Kasol's famous Israeli cafes!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                What type of accommodation is provided?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                The package includes 2 nights in a well-rated Manali hotel and 1 night in a Kasol riverside alpine camp on quad-sharing basis. All accommodations are clean, safe, and equipped with attached washrooms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Where does the trip start and end?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                The trip starts and ends in Delhi (common reporting hubs like Kashmiri Gate / Majnu Ka Tila). Exact departure points and reporting timings are shared with confirmed travellers through WhatsApp 24 hours prior to departure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Can the itinerary change?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Yes. Mountain weather conditions, sudden landslides, road closures, local administration directives or operational requirements may require route adjustments for traveller safety.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                Is this a party trip?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                No. It is a social group travel experience focused on meeting new people, exploring majestic mountain destinations, enjoying group activities, and bonding around bonfires in a respectful atmosphere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-11" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50">
              <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline">
                What documents should I carry?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Every traveller must carry a valid government-issued photo ID card (Aadhaar Card, Voter ID, Driving Licence, or Passport). The details provided at booking must match your physical ID.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* BOOKING & CANCELLATION POLICY (TERMS & CONDITIONS) */}
      <section className="py-16 px-4 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              Booking &amp; Cancellation Policy (Terms &amp; Conditions)
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>• <strong>Full Seat Confirmation:</strong> Full payment or stipulated advance booking token is required to confirm your seat in the batch.</p>
              <p>• <strong>ID Verification:</strong> Traveller details submitted during registration must strictly match their government-issued ID card.</p>
              <p>• <strong>Reporting Point:</strong> Reporting must be completed at the designated Delhi departure point at the communicated time. Late arrivals resulting in missed departures may be treated as no-shows without refund.</p>
              <p>• <strong>Non-Refundable Policy:</strong> Confirmed promotional seats at ₹5,999 are non-cancellable, non-transferable, and non-refundable as specified under the discounted group package terms.</p>
              <p>• <strong>Camp &amp; Hotel Rules:</strong> Travellers must follow campsite decorum and maintain respectful behaviour toward fellow squad members and staff. Any damage to camp/hotel property will be chargeable to the individual.</p>
              <p>• <strong>Luggage &amp; Belongings:</strong> Personal belongings, mobile phones, and valuables remain the sole responsibility of individual travellers.</p>
              <p>• <strong>Route &amp; Operational Contingencies:</strong> Route sequence, vehicle type, and sightseeing order may be altered due to heavy snowfall, landslides, road repairs, or local administrative guidelines beyond operational control.</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span>Rudraksh Safar • Registered Travel Agency • GST: 22AGBPC7350G1ZZ</span>
              <a href={`tel:${contactPhone}`} className="text-amber-600 font-bold hover:underline">
                Direct Helpdesk: 9713057086
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white text-center relative overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-3xl space-y-6">
          <Badge className="bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
            Your Squad Is Waiting
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready To Meet Your Next Mountain Squad?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Stop waiting for hesitant friends. Join the <strong>Manali × Kasol Strangers Trip</strong> starting at just ₹5,999. 
            Whether you are boarding from <strong>Bhilai</strong>, <strong>Raipur</strong>, <strong>Durg</strong>, or Delhi — your seat is ready!
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => setBookingModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-base px-8 py-6 shadow-xl hover:scale-105 transition-all"
            >
              Book Your Seat – ₹5,999
            </Button>

            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-lg border border-slate-600 transition"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              Call 9713057086
            </a>

            <a
              href={officialPdfUrl}
              download="Rudraksh_Safar_Manali_Kasol_5999.pdf"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-lg border border-white/20 transition"
            >
              <Download className="w-5 h-5 text-amber-300" />
              Download PDF Brochure
            </a>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM BAR FOR MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <span className="text-[10px] uppercase font-bold text-amber-400 block">Strangers Trip</span>
          <strong className="text-lg font-black text-white">₹5,999</strong>
          <span className="text-[10px] text-slate-400"> / Person</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contactPhone}`}
            className="p-2.5 rounded-lg bg-slate-800 text-amber-400 border border-slate-700"
            aria-label="Call Rudraksh Safar"
          >
            <Phone className="w-4 h-4" />
          </a>
          <Button
            size="sm"
            onClick={() => setBookingModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2"
          >
            Book Seat
          </Button>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-emerald-600 text-white"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

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
                ₹5,999 / Person
              </Badge>
              <h3 className="text-xl font-bold text-slate-900">Reserve Your Spot</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill this quick form and our lead coordinator will confirm batch availability via WhatsApp/Call.
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
                  placeholder="e.g. 9713057086"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Joining From</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Bhilai">Bhilai</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Durg">Durg</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">No. of Travellers</label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
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
                  className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
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
                <MessageCircle className="w-4 h-4" /> Send Booking Request via WhatsApp
              </Button>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  Prefer direct phone conversation? <br />
                  <a href={`tel:${contactPhone}`} className="text-amber-600 font-bold hover:underline">
                    Call 9713057086 directly
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
};

export default ManaliKasolStrangersTrip;
