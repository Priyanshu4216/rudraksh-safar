import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Sparkles, Utensils, Camera, Map, ArrowRight, Banknote, Plane, HelpCircle, Shield, Clock, CheckCircle, X as UtilityX } from 'lucide-react';
import pattayaHero from "@/assets/hot-deals-pattaya-hero.jpg";
import coralIslandImg from "@/assets/hot-deals-coral-island.jpg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import { getBestTimeToVisit, getVisaGuidePath, HOME_CITY } from '@/lib/travelMeta';

const PHONE_NUMBER = '919406182174';

// Generate dynamic FAQs based on package type and details
const generatePackageFAQs = (pkg: typeof allPackages[0]) => {
  // If specific AEO FAQs are provided in the package data, use them partially or fully
  // For this implementation, we will prioritize AEO FAQs if they exist, and append generic ones if needed, 
  // but the user request implies replacing them for these specific pages to match the "Answer Engine" strategy.
  // Let's prepend them to ensure they appear first and are picked up by Schema.

  const isDomestic = pkg.type === 'domestic';
  const isSpiritual = pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage';
  const isBeach = pkg.tag === 'Beach Escape' || pkg.tag === 'Romantic' || pkg.tag === 'Beach & Culture';
  const isAdventure = pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking';

  const genericFaqs = [
    {
      question: `What is included in the ${pkg.title} package?`,
      answer: `Our ${pkg.title} package (${pkg.duration}) includes comfortable accommodation, all transfers and sightseeing as per itinerary, experienced tour guide, ${isDomestic ? 'all meals on MAP plan' : 'breakfast at hotels'}, and 24/7 on-trip support. Visit ${pkg.famousPlaces.slice(0, 3).join(', ')} and more iconic destinations.`
    },
    {
      question: `What is the best time to visit ${pkg.location}?`,
      answer: isSpiritual
        ? `The best time for ${pkg.title} is April to June and September to November when weather is pleasant for pilgrimage. Avoid monsoon season (July-August) due to landslides and road closures.`
        : isBeach
          ? `${pkg.location} is best visited from October to March when the weather is pleasant with clear skies, perfect for beach activities and sightseeing. Avoid monsoon months for the best experience.`
          : isAdventure
            ? `The ideal time for ${pkg.title} is May to October when roads are open and weather is suitable for adventure activities. Winter months offer snow experiences but some routes may be closed.`
            : `${pkg.location} is best visited year-round, but October to March offers the most pleasant weather. Check seasonal festivals and local events for a richer experience.`
    },
    {
      question: `How do I book this ${pkg.location} tour from Bhilai?`,
      answer: `Booking is simple! Contact Rudraksh Safar at +91-9406182174 via WhatsApp or call. We serve travelers from Bhilai, Raipur, Durg, and all of Chhattisgarh. We handle all arrangements from your doorstep including pickup, flights, hotels, and complete tour management.`
    },
    {
      question: `Can I customize the ${pkg.title} itinerary?`,
      answer: `Absolutely! All our packages are 100% customizable. Want to add extra days, change hotels, include specific activities like ${pkg.attractions[0]} or ${pkg.attractions[1]}? Just tell us your preferences and we'll create a tailor-made itinerary just for you.`
    },
    {
      question: `What documents are required for this trip?`,
      answer: isDomestic
        ? `For ${pkg.title}, you'll need a valid government ID (Aadhaar/Voter ID/Passport). ${isSpiritual ? 'We also assist with any temple registration or permits required. Medical fitness certificate recommended for high-altitude treks.' : ''}`
        : `For international travel to ${pkg.location}, you need a valid passport (6+ months validity), ${pkg.visa} visa (we provide complete visa assistance), travel insurance, and flight tickets. Our team handles all visa documentation.`
    },
    {
      question: `Is this package suitable for ${isSpiritual ? 'senior citizens' : isAdventure ? 'beginners' : 'families'}?`,
      answer: isSpiritual
        ? `Yes, we offer special arrangements for senior citizens including helicopter services, pony/doli for treks, and comfortable accommodations. Our guides are trained to assist elderly travelers throughout the journey.`
        : isAdventure
          ? `Our ${pkg.title} is designed for all fitness levels. We provide proper acclimatization time, experienced guides, and alternative options for challenging activities. Beginners are welcome!`
          : `Absolutely! ${pkg.title} is perfect for families with customizable activities for all ages. We arrange child-friendly accommodations, safe transport, and engaging activities for the whole family.`
    },
    {
      question: `What is the payment and cancellation policy?`,
      answer: `We require 30% advance to confirm booking. Balance is due 7 days before departure. Free cancellation up to 15 days before travel. 50% refund for cancellations 7-14 days prior. Our transparent pricing has no hidden charges - what you see is what you pay!`
    },
    {
      question: `Why choose Rudraksh Safar for ${pkg.location} tour?`,
      answer: `With 10+ years of experience, 500+ happy travelers, and being Bhilai's trusted travel partner, we offer the best value packages. Our highlights: 24/7 support, local expertise, ${isDomestic ? 'home pickup from Chhattisgarh' : 'complete visa assistance'}, and personalized service. We're not just a travel agency - we're your travel family!`
    }
  ];

  // If AEO FAQs exist, use EXCLUSIVELY specific questions if requested, or prepend them.
  // The user request suggests specific Q&A for SEO. Let's return the AEO FAQs if present, 
  // but maybe keep 1-2 generic ones if they don't overlap. 
  // Simpler approach: If 'aeoFaqs' is present, return it. If not, return generic.
  if ((pkg as any).aeoFaqs) {
    return (pkg as any).aeoFaqs;
  }

  return genericFaqs;
};

const allPackages = [
  // International Packages
  {
    id: 'phuket',
    title: 'Phuket Beach Paradise',
    location: 'Phuket, Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹42,999',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop',
    tag: 'Beach Escape',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Patong Beach', 'Phi Phi Islands', 'Big Buddha', 'Old Phuket Town', 'James Bond Island'],
    whatToEat: ['Pad Thai', 'Tom Yum Soup', 'Fresh Seafood', 'Mango Sticky Rice', 'Massaman Curry'],
    attractions: ['Phi Phi Island Tour', 'Snorkeling & Diving', 'Thai Massage', 'Bangla Road Nightlife', 'Phang Nga Bay'],
    itinerary: [
      'Day 1: Arrive at Phuket International Airport, transfer to Patong Beach hotel. Evening explore vibrant Bangla Road and enjoy authentic Thai seafood dinner.',
      'Day 2: Full day Phi Phi Islands tour by speedboat - visit Maya Bay (famous from "The Beach" movie), snorkeling at Monkey Beach, lunch on Phi Phi Don island, swimming at Bamboo Island.',
      'Day 3: Morning visit to iconic Big Buddha temple for panoramic views. Explore colorful Old Phuket Town with its Sino-Portuguese architecture. Afternoon at Kata or Karon beach with water sports.',
      'Day 4: Phang Nga Bay excursion - visit James Bond Island, kayaking through limestone caves, visit floating village, sea cave exploration. Evening Thai cooking class.',
      'Day 5: Morning leisure at beach, last-minute shopping at Jungceylon Mall, spa session, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'singapore',
    title: 'Singapore City Explorer',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹58,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop',
    tag: 'City Break',
    type: 'international',
    visa: 'e-Visa',
    currency: 'Singapore Dollar (SGD)',
    famousPlaces: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Orchard Road', 'Merlion Park'],
    whatToEat: ['Chilli Crab', 'Hainanese Chicken Rice', 'Laksa', 'Kaya Toast', 'Satay'],
    attractions: ['Universal Studios', 'Singapore Zoo', 'Night Safari', 'Clarke Quay', 'S.E.A. Aquarium'],
    itinerary: [
      'Day 1: Arrive at Changi Airport (one of world\'s best airports). Transfer to Marina Bay area hotel. Evening Marina Bay Sands light show and Merlion Park visit.',
      'Day 2: Full day Sentosa Island adventure - Universal Studios Singapore with Hollywood rides, S.E.A. Aquarium, Madame Tussauds, beach activities at Siloso.',
      'Day 3: Morning at Gardens by the Bay - Supertree Grove, Cloud Forest & Flower Dome. Afternoon shopping at Orchard Road. Evening Singapore Flyer and Clarke Quay dinner.',
      'Day 4: Morning Singapore Zoo visit (world\'s best rainforest zoo). Afternoon Chinatown and Little India exploration for cultural immersion. Evening Night Safari - world\'s first nocturnal zoo.',
      'Day 5: Leisure morning, last-minute shopping at Bugis Street and Mustafa Centre, enjoy farewell Chilli Crab lunch, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'bali',
    title: 'Bali Paradise',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹64,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Beach Escape',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Indonesian Rupiah (IDR)',
    famousPlaces: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Uluwatu Temple', 'Seminyak Beach', 'Tegallalang Rice Terrace'],
    whatToEat: ['Nasi Goreng', 'Babi Guling', 'Satay', 'Bebek Betutu', 'Lawar'],
    attractions: ['Monkey Forest', 'Mount Batur Sunrise', 'Water Temples', 'Beach Clubs', 'Snorkeling'],
    itinerary: [
      'Day 1: Arrive at Ngurah Rai Airport, transfer to hotel in Seminyak. Evening beach walk and welcome dinner at a beachfront restaurant.',
      'Day 2: Full day Ubud Cultural Tour - visit Sacred Monkey Forest, Ubud Royal Palace, local art galleries, and the famous Tegallalang Rice Terraces.',
      'Day 3: Morning visit to Tanah Lot Temple for stunning photos, afternoon at Taman Ayun Temple, evening sunset dinner.',
      'Day 4: Beach day at Nusa Dua - water sports including parasailing, jet ski, and banana boat. Afternoon spa treatment.',
      'Day 5: Visit Uluwatu Temple perched on cliffs, witness the magical Kecak Fire Dance at sunset with ocean backdrop.',
      'Day 6: Leisure morning for shopping at local markets, airport transfer for departure.',
    ],
    aeoFaqs: [
      { question: "Can Bali tour packages be booked from Bhilai?", answer: "Yes, Bali tour packages can be booked from Bhilai with complete support including flights, hotels, sightseeing, airport transfers, and visa guidance through Rudraksh Safar." },
      { question: "Is visa required for Bali from India?", answer: "Yes, Indian travelers require a visa for Bali. Rudraksh Safar assists with visa application guidance and documentation to ensure a smooth process." },
      { question: "What is included in a Bali tour package?", answer: "Bali tour packages usually include hotel stays, airport transfers, island tours, temple visits, beach experiences, and optional water sports." },
      { question: "What is the best time to visit Bali?", answer: "The best time to visit Bali is from April to October when the weather is dry and ideal for sightseeing, beaches, and outdoor activities." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2069&auto=format&fit=crop',
    ],
  },
  {
    id: 'maldives',
    title: 'Maldives Paradise',
    location: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: '₹85,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Romantic',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Maldivian Rufiyaa (MVR)',
    famousPlaces: ['Male City', 'Maafushi Island', 'Veligandu Island', 'Banana Reef', 'Hulhumale'],
    whatToEat: ['Garudhiya', 'Mas Huni', 'Fihunu Mas', 'Fresh Seafood', 'Reef Fish'],
    attractions: ['Snorkeling with Mantas', 'Sunset Dolphin Cruise', 'Underwater Restaurant', 'Water Villa Stay', 'Scuba Diving'],
    itinerary: [
      'Day 1: Arrive at Velana International Airport Male, scenic speedboat transfer to your luxury resort. Check into overwater villa, evening welcome cocktails and beach dinner.',
      'Day 2: Morning snorkeling at house reef to see colorful fish and sea turtles. Afternoon couple spa treatment. Evening sunset dolphin cruise with champagne.',
      'Day 3: Full day island hopping adventure - visit local islands, sandbank picnic lunch, snorkeling at Banana Reef to swim with manta rays.',
      'Day 4: Leisure breakfast in villa, final beach time, speedboat transfer to airport for departure with unforgettable memories.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?q=80&w=2033&auto=format&fit=crop',
    ],
  },
  {
    id: 'dubai',
    title: 'Dubai Extravaganza',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'international',
    visa: 'e-Visa',
    currency: 'UAE Dirham (AED)',
    famousPlaces: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina', 'Dubai Frame'],
    whatToEat: ['Shawarma', 'Al Harees', 'Luqaimat', 'Machboos', 'Arabic Coffee'],
    attractions: ['Desert Safari', 'Dhow Cruise', 'Ski Dubai', 'Gold Souk Shopping', 'Atlantis Aquaventure'],
    itinerary: [
      'Day 1: Arrive at Dubai International Airport, hotel check-in at Dubai Marina. Evening city tour covering Dubai Frame and Jumeirah Beach.',
      'Day 2: Morning visit to Burj Khalifa observation deck (124th floor), explore Dubai Mall, Dubai Aquarium, and dancing fountains show.',
      'Day 3: Full day Desert Safari - dune bashing in 4x4, camel riding, sandboarding, BBQ dinner with belly dance and tanoura show.',
      'Day 4: Palm Jumeirah and Atlantis tour, Dubai Marina yacht cruise, afternoon at JBR beach, evening at Global Village.',
      'Day 5: Morning shopping at Gold Souk and Spice Souk in Old Dubai, visit Al Fahidi Historical District, airport transfer.',
    ],
    aeoFaqs: [
      { question: "Can Dubai tour packages be booked from Bhilai?", answer: "Yes, Dubai tour packages can be booked directly from Bhilai through Rudraksh Safar, including flights, hotels, sightseeing, visa assistance, and airport transfers." },
      { question: "What documents are required for a Dubai tour from India?", answer: "Indian travelers require a valid passport, visa, photographs, and travel documents. Rudraksh Safar provides complete Dubai visa guidance and documentation support." },
      { question: "How much does a Dubai trip from Bhilai cost?", answer: "The cost of a Dubai trip from Bhilai depends on hotel category, travel duration, flight prices, and sightseeing inclusions such as desert safari, Burj Khalifa, and city tours." },
      { question: "What is the best time to visit Dubai?", answer: "The best time to visit Dubai is from November to March when the weather is ideal for sightseeing, shopping festivals, and outdoor activitiy" }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2087&auto=format&fit=crop',
    ],
  },
  {
    id: 'nepal',
    title: 'Nepal Himalayan Trek',
    location: 'Nepal',
    duration: '7 Days / 6 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
    tag: 'Trekking',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Nepalese Rupee (NPR)',
    famousPlaces: ['Kathmandu Durbar Square', 'Swayambhunath (Monkey Temple)', 'Pokhara Lake', 'Bhaktapur', 'Pashupatinath'],
    whatToEat: ['Dal Bhat', 'Momos', 'Newari Khaja Set', 'Sel Roti', 'Chatamari'],
    attractions: ['Annapurna Base Camp View', 'Pashupatinath Temple', 'Boudhanath Stupa', 'Paragliding in Pokhara', 'Sunrise at Sarangkot'],
    itinerary: [
      'Day 1: Arrive at Tribhuvan Airport Kathmandu, transfer to Thamel hotel. Evening walk through vibrant Thamel streets and welcome dinner.',
      'Day 2: Full day Kathmandu Valley Tour - Swayambhunath Temple, Kathmandu Durbar Square, Pashupatinath Temple evening aarti.',
      'Day 3: Early morning scenic drive to Pokhara (6 hours) through beautiful mountain highways. Evening lakeside walk at Phewa Lake.',
      'Day 4: Pre-dawn drive to Sarangkot for spectacular sunrise over Annapurna range. Day tour including World Peace Pagoda and Davis Falls.',
      'Day 5: Adventure day in Pokhara - optional paragliding over Phewa Lake, boating, and visit to International Mountain Museum.',
      'Day 6: Drive back to Kathmandu, visit Bhaktapur Durbar Square and Boudhanath Stupa, farewell dinner with cultural show.',
      'Day 7: Morning visit to Patan Durbar Square, last-minute shopping, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558799401-1dcba79f0632?q=80&w=2067&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565073624497-7144969d0a07?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'thailand',
    title: 'Thailand Explorer (Pattaya)',
    location: 'Thailand',
    duration: '4 Days / 3 Nights',
    price: '₹22,999',
    image: pattayaHero,
    tag: 'Beach & Culture',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Coral Island', 'Pattaya Beach', 'Gems Gallery', 'Alcazar Show', 'Walking Street'],
    whatToEat: ['Pad Thai', 'Tom Yum Soup', 'Green Curry', 'Mango Sticky Rice', 'Som Tam'],
    attractions: ['Speedboat Ride', 'Cultural Show', 'Nightlife', 'Shopping', 'Thai Massage'],
    itinerary: [
      'Day 1: Arrival in Bangkok, Transfer to Pattaya. Evening free for leisure or beach walk.',
      'Day 2: Coral Island Tour by Speedboat with Lunch. Evening free.',
      'Day 3: Pattaya City Tour (Big Buddha, View Point, Gems Gallery). Evening Alcazar Show.',
      'Day 4: Transfer to Bangkok Airport for Departure.',
    ],
    structuredItinerary: [
      {
        day: "Day 1 – Arrival in Bangkok → Pattaya",
        points: [
          "Arrival at DMK/BKK Airport, Bangkok",
          "Transfer to Pattaya by private vehicle",
          "Hotel check-in (Standard check-in time)",
          "Lunch at Indian restaurant",
          "Evening free for leisure / beach walk",
          "Dinner at Indian restaurant",
          "Overnight stay in Pattaya",
        ],
      },
      {
        day: "Day 2 – Coral Island Tour",
        points: [
          "Breakfast at hotel",
          "Speedboat tour to Coral Island (Koh Larn)",
          "Free time at beach & optional water sports (own cost)",
          "Lunch after Coral Island tour",
          "Visit Pattaya View Point",
          "Return to hotel",
          "Dinner at Indian restaurant",
          "Overnight stay in Pattaya",
        ],
      },
      {
        day: "Day 3 – Pattaya City Tour + Alcazar Show",
        points: [
          "Breakfast at hotel",
          "Pattaya City Tour including:",
          "• Big Buddha Hill",
          "• Pattaya Beach Road",
          "• Gems Gallery World’s Biggest Jewellery Store",
          "Lunch at Indian restaurant",
          "Evening Alcazar Show (Cabaret)",
          "Dinner at Indian restaurant",
          "Overnight stay in Pattaya",
        ],
      },
      {
        day: "Day 4 – Pattaya → Bangkok → Departure",
        points: [
          "Breakfast at hotel",
          "Check-out and Transfer to Bangkok",
          "Free time for shopping (if time permits)",
          "Drop at Bangkok Airport",
          "Tour ends with wonderful memories",
        ],
      },
    ],
    inclusions: [
      "3 Nights Accommodation in 4★ Pattaya Hotel",
      "Daily Breakfast at Hotel",
      "Indian Lunch & Dinner (Verified Restaurants)",
      "Coral Island Tour with Speedboat & Lunch",
      "Alcazar Show Tickets",
      "Pattaya City Tour",
      "Private Airport Transfers",
      "All Sightseeing Transfers on Private Basis",
      "Hindi/English Speaking Guide Support",
      "Rudraksh Safar 24/7 On-Trip Assistance"
    ],
    exclusions: [
      "International Flight Tickets",
      "Thailand Visa Fees (Visa on Arrival/E-Visa)",
      "Travel Insurance",
      "Water Sports (Parasailing, Jet Ski, etc.)",
      "Personal Expenses (Shopping, Laundry, Tips)",
      "Any extra meals or drinks not mentioned",
      "Peak Season Surcharges (if applicable)"
    ],
    gallery: [
      pattayaHero,
      coralIslandImg,
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    ],
  },
  {
    id: 'srilanka',
    title: 'Sri Lanka Heritage',
    location: 'Sri Lanka',
    duration: '6 Days / 5 Nights',
    price: '₹35,999',
    image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=2070&auto=format&fit=crop',
    tag: 'Cultural',
    type: 'international',
    visa: 'ETA Online',
    currency: 'Sri Lankan Rupee (LKR)',
    famousPlaces: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Galle Fort', 'Nuwara Eliya', 'Nine Arch Bridge'],
    whatToEat: ['Rice & Curry', 'Kottu Roti', 'Hoppers', 'Ceylon Tea', 'String Hoppers'],
    attractions: ['Whale Watching', 'Train to Ella', 'Tea Plantation Tours', 'Safari at Yala', 'Dutch Fort'],
    itinerary: [
      'Day 1: Arrive at Bandaranaike Airport Colombo, drive to Negombo. Evening beach walk and seafood dinner.',
      'Day 2: Early drive to Sigiriya, climb the ancient Sigiriya Rock Fortress (UNESCO site). Visit Dambulla Cave Temple, overnight Sigiriya.',
      'Day 3: Drive to Kandy via spice garden visit. Evening Temple of the Tooth visit and traditional Kandyan dance show.',
      'Day 4: Scenic train journey from Kandy to Nuwara Eliya through tea plantations. Visit tea factory and tea tasting. Walk around Little England town.',
      'Day 5: Morning at Nuwara Eliya, drive to Galle. Evening walk through historic Galle Fort (UNESCO site), sunset from ramparts.',
      'Day 6: Morning leisure at Galle beach, drive to Colombo airport for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588598198321-9735fd52ed5a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546708770-599a1a205a83?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  // Domestic Packages
  {
    id: 'andaman',
    title: 'Andaman Beach Holiday',
    location: 'Andaman Islands, India',
    duration: '6 Days / 5 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    tag: 'Beach',
    type: 'domestic',
    famousPlaces: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island', 'Neil Island', 'Ross Island'],
    whatToEat: ['Fresh Seafood', 'Grilled Fish', 'Coconut Curry', 'Lobster', 'Prawn Masala'],
    attractions: ['Scuba Diving', 'Snorkeling', 'Glass Bottom Boat', 'Light & Sound Show', 'Sea Walking'],
    itinerary: [
      'Day 1: Arrive at Port Blair airport, transfer to hotel. Afternoon visit Cellular Jail - a national memorial. Evening witness the moving Light & Sound Show depicting India\'s freedom struggle.',
      'Day 2: Morning ferry to Ross Island (British-era ruins in jungle) and North Bay Island (water sports). Return to Port Blair for Corbyn\'s Cove Beach visit.',
      'Day 3: Morning cruise to Havelock Island (2 hrs) - the crown jewel of Andaman. Check into beach resort. Evening at Radhanagar Beach - Asia\'s best beach with stunning sunset.',
      'Day 4: Full day Havelock adventure - scuba diving/snorkeling at Elephant Beach to see coral reefs and colorful marine life. Optional sea walking experience. Evening at beach shack.',
      'Day 5: Morning ferry to Neil Island (natural coral bridge). Visit Laxmanpur Beach and Bharatpur Beach. Return to Port Blair by evening.',
      'Day 6: Morning leisure, visit Samudrika Marine Museum and Anthropological Museum. Shopping for shells and pearls. Airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kashmir',
    title: 'Kashmir Paradise',
    location: 'Jammu & Kashmir, India',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    tag: 'Romantic',
    type: 'domestic',
    famousPlaces: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Mughal Gardens', 'Sonmarg'],
    whatToEat: ['Rogan Josh', 'Yakhni', 'Dum Aloo', 'Gushtaba', 'Kahwa'],
    attractions: ['Shikara Ride', 'Gondola Ride', 'Houseboat Stay', 'Mughal Gardens', 'Pony Ride'],
    itinerary: [
      'Day 1: Arrive at Srinagar airport, transfer to iconic Dal Lake houseboat. Afternoon Shikara ride through floating gardens and lotus blooms. Evening enjoy Kahwa tea on deck.',
      'Day 2: Full day Gulmarg excursion - ride the famous Gondola cable car (world\'s highest at 13,400 ft). Snow activities in winter, golf course in summer. Stunning Himalayan views.',
      'Day 3: Drive to Pahalgam (90 km) - the Valley of Shepherds. Visit Betaab Valley (Bollywood famous), Aru Valley, and Chandanwari. Optional pony ride to Baisaran Valley.',
      'Day 4: Sonmarg day trip - Meadow of Gold with Thajiwas Glacier. Stunning landscape of snow-capped peaks and flower meadows. Return to Srinagar.',
      'Day 5: Visit famous Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Afternoon at Shankaracharya Temple for panoramic views. Evening shopping at local markets for Pashmina.',
      'Day 6: Morning leisure at houseboat, last Shikara ride. Transfer to Srinagar airport for departure.',
    ],
    aeoFaqs: [
      { question: "How to plan a Kashmir trip from Bhilai?", answer: "A Kashmir trip from Bhilai is usually planned via flight or train to Delhi, followed by a flight to Srinagar. Rudraksh Safar assists with complete planning, hotel bookings, sightseeing, transfers, and on-ground support." },
      { question: "What is included in a Kashmir tour package from Bhilai?", answer: "Kashmir tour packages generally include hotels, meals, local sightseeing, airport transfers, and visits to Srinagar, Gulmarg, Pahalgam, and Sonmarg." },
      { question: "Is Kashmir safe for tourists?", answer: "Yes, Kashmir is safe for tourists when trips are planned through authorized travel agencies. Rudraksh Safar ensures safe hotels, verified transport, and guided sightseeing." },
      { question: "What is the best time to visit Kashmir?", answer: "The best time to visit Kashmir is from April to October for greenery and sightseeing, and December to February for snowfall and winter experiences." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593181520415-c20261bcad6e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'udaipur',
    title: 'Udaipur Royal Escape',
    location: 'Rajasthan, India',
    duration: '4 Days / 3 Nights',
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heritage',
    type: 'domestic',
    famousPlaces: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon Ki Bari', 'Jagdish Temple'],
    whatToEat: ['Dal Baati Churma', 'Gatte Ki Sabzi', 'Laal Maas', 'Ghevar', 'Rajasthani Thali'],
    attractions: ['Boat Ride', 'Palace Tour', 'Cultural Show', 'Puppet Show', 'Vintage Car Museum'],
    itinerary: [
      'Day 1: Arrive at Udaipur airport/station, transfer to heritage hotel. Afternoon visit iconic City Palace - largest palace complex in Rajasthan with panoramic lake views. Evening boat ride on Lake Pichola to Jag Mandir island.',
      'Day 2: Morning visit Saheliyon Ki Bari (Garden of Maidens), Fateh Sagar Lake, and Moti Magri (Maharana Pratap Memorial). Afternoon explore Vintage Car Museum. Evening Dharohar folk dance show at Bagore Ki Haveli.',
      'Day 3: Day trip to Kumbhalgarh Fort (80 km) - second longest wall in the world after Great Wall of China. Visit Ranakpur Jain Temples with 1444 uniquely carved pillars. Return to Udaipur.',
      'Day 4: Morning visit Jagdish Temple, stroll through old city lanes. Shopping for miniature paintings, silver jewelry, and handicrafts. Transfer to airport/station for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'shimla-manali',
    title: 'Shimla Manali Adventure',
    location: 'Himachal Pradesh, India',
    duration: '7 Days / 6 Nights',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'domestic',
    famousPlaces: ['Mall Road Shimla', 'Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Kufri'],
    whatToEat: ['Siddu', 'Dham', 'Chana Madra', 'Tudkiya Bhath', 'Aktori'],
    attractions: ['Skiing', 'Paragliding', 'River Rafting', 'Toy Train', 'Snow Activities'],
    itinerary: [
      'Day 1: Arrive Chandigarh/Delhi, drive to Shimla (7 hrs). Evening walk at Mall Road - the heart of Shimla with colonial architecture. View Christ Church illuminated at night.',
      'Day 2: Full day Shimla exploration - visit Kufri for horse riding and adventure activities, Jakhoo Temple (highest point in Shimla), and The Ridge. Optional: Toy Train joy ride (UNESCO Heritage).',
      'Day 3: Drive Shimla to Manali (8 hrs) via Kullu Valley. Stop at Vaishno Devi Temple Kullu. Evening explore Old Manali cafes and vibrant hippie culture.',
      'Day 4: Full day Solang Valley adventure - paragliding (world-famous), zorbing, rope way ride. Winter visitors enjoy skiing and snow activities. Evening at Vashisht Hot Springs.',
      'Day 5: Rohtang Pass excursion (subject to weather/permits) - snow activities at 13,050 ft, stunning views of Lahaul Valley. Alternative: Atal Tunnel to Sissu for breathtaking landscapes.',
      'Day 6: Visit Hadimba Temple (ancient wooden temple), Manu Temple, Tibetan Monastery, and Van Vihar. Afternoon river rafting on Beas River (seasonal). Evening local market shopping.',
      'Day 7: Morning visit Naggar Castle and Roerich Art Gallery. Drive to Chandigarh for departure or continue to Delhi.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582971454436-02d4d221e4d5?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kodaikanal',
    title: 'Kodaikanal Retreat',
    location: 'Tamil Nadu, India',
    duration: '4 Days / 3 Nights',
    price: '₹13,999',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature',
    type: 'domestic',
    famousPlaces: ['Kodaikanal Lake', 'Coaker\'s Walk', 'Pillar Rocks', 'Bryant Park', 'Silver Cascade Falls'],
    whatToEat: ['Home-made Chocolates', 'Fresh Cheese', 'Filter Coffee', 'Dosa', 'Mushroom dishes'],
    attractions: ['Boating', 'Cycling', 'Pine Forest Walk', 'Waterfall Visit', 'Star Gazing'],
    itinerary: [
      'Day 1: Arrive Madurai airport (120 km) or Kodaikanal Road railway station, scenic drive up the ghats to Kodaikanal - Princess of Hill Stations. Evening at Kodaikanal Lake - boating and cycling around the star-shaped lake.',
      'Day 2: Morning walk at Coaker\'s Walk - a 1 km path on the edge of steep slopes with panoramic valley views. Visit Bryant Park (botanical garden) and Pillar Rocks (trio of vertical rock pillars). Afternoon at Pine Forest for nature walks.',
      'Day 3: Early morning visit to Dolphin\'s Nose viewpoint for sunrise. Explore Silver Cascade Falls and Bear Shola Falls. Afternoon visit Green Valley View (suicide point) and Guna Caves. Evening chocolate and cheese shopping - Kodaikanal specialties.',
      'Day 4: Morning visit Berijam Lake (if permit available) - pristine forest lake. Shopping for eucalyptus oil, spices, and handmade chocolates. Drive to Madurai for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596627116790-af6f46dddbf6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582540730343-eb6c0f76d2b1?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'chardham',
    title: 'Char Dham Yatra',
    location: 'Uttarakhand, India',
    duration: '12 Days / 11 Nights',
    price: '₹17,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Spiritual',
    type: 'domestic',
    famousPlaces: ['Yamunotri Temple', 'Gangotri Temple', 'Kedarnath Temple', 'Badrinath Temple', 'Rishikesh'],
    whatToEat: ['Aloo Ke Gutke', 'Kafuli', 'Phaanu', 'Mandua Ki Roti', 'Jhangora Kheer'],
    attractions: ['Ganga Aarti at Rishikesh', 'Hot Springs', 'Valley of Flowers', 'Himalayan Views', 'River Ganga'],
    itinerary: [
      'Day 1: Arrive Delhi, drive to Haridwar (6 hrs). Evening Ganga Aarti at Har Ki Pauri, overnight Haridwar.',
      'Day 2: Drive Haridwar to Barkot (7 hrs) via Dehradun and Mussoorie. Scenic mountain drive, overnight Barkot.',
      'Day 3: Trek to Yamunotri Temple (6 km) or pony ride. Darshan at temple, dip in Surya Kund hot springs. Return to Barkot.',
      'Day 4: Drive Barkot to Uttarkashi (4 hrs). Visit Vishwanath Temple. Overnight Uttarkashi.',
      'Day 5: Drive to Gangotri (4 hrs). Darshan at Gangotri Temple, origin of holy Ganga. Return to Uttarkashi.',
      'Day 6: Drive Uttarkashi to Guptkashi (8 hrs) via Tehri Dam. Overnight Guptkashi.',
      'Day 7: Early drive to Sonprayag, trek or helicopter to Kedarnath (16 km). Evening aarti at Kedarnath Temple.',
      'Day 8: Morning darshan at Kedarnath, trek back to Sonprayag. Drive to Guptkashi, overnight.',
      'Day 9: Drive Guptkashi to Badrinath (6 hrs) via Joshimath. Evening darshan at Badrinath Temple.',
      'Day 10: Morning Mana Village visit (last Indian village), Vyas Gufa, Bhim Pul. Afternoon darshan, drive to Rudraprayag.',
      'Day 11: Drive Rudraprayag to Rishikesh (5 hrs). Evening Triveni Ghat aarti. Overnight Rishikesh.',
      'Day 12: Morning yoga session, visit Ram Jhula and Laxman Jhula. Drive to Delhi for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590123714498-a88eb3ea62ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601188067649-f6edfea57a63?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kedarnath',
    title: 'Kedarnath Yatra',
    location: 'Uttarakhand, India',
    duration: '5 Days / 4 Nights',
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Pilgrimage',
    type: 'domestic',
    famousPlaces: ['Kedarnath Temple', 'Gaurikund', 'Chorabari Glacier', 'Shankaracharya Samadhi', 'Bhairavnath Temple'],
    whatToEat: ['Aloo Ke Gutke', 'Kafuli', 'Phaanu', 'Mandua Ki Roti', 'Jhangora Ki Kheer'],
    attractions: ['Trek to Kedarnath', 'Hot Springs at Gaurikund', 'Helicopter Darshan', 'Himalayan Views', 'River Mandakini'],
    itinerary: [
      'Day 1: Arrive Haridwar/Rishikesh, drive to Guptkashi (7 hrs) via scenic route along Alaknanda River. Evening visit Ardh Narishwar Temple. Overnight Guptkashi.',
      'Day 2: Early drive to Sonprayag (30 km), jeep to Gaurikund. Begin 16 km trek to Kedarnath through beautiful Himalayan trails. Pony/Doli available. Reach by evening, overnight Kedarnath.',
      'Day 3: Early morning darshan at Kedarnath Temple (one of 12 Jyotirlingas). Visit Bhairavnath Temple, Shankaracharya Samadhi, view Chorabari Glacier. Evening aarti. Overnight Kedarnath.',
      'Day 4: Morning darshan, begin trek back to Gaurikund. Drive to Guptkashi. Visit Triyuginarayan Temple where Lord Shiva married Parvati. Overnight Guptkashi.',
      'Day 5: Drive to Haridwar/Rishikesh (7 hrs). Optional Ganga Aarti if time permits. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590123714498-a88eb3ea62ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601188067649-f6edfea57a63?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'ladakh-bike',
    title: 'Ladakh & Spiti Bike Expedition',
    location: 'Leh-Ladakh & Spiti Valley',
    duration: '12 Days / 11 Nights',
    price: '₹34,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'domestic',
    famousPlaces: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Chandratal', 'Rohtang Pass'],
    whatToEat: ['Thukpa', 'Momos', 'Butter Tea', 'Maggie', 'Skyu'],
    attractions: ['Bike Ride', 'Camping', 'Stargazing', 'Bonfire', 'Monastery Visit'],
    itinerary: [
      'Day 1: Arrive Manali, bike allocation and test ride. Acclimatization and briefing session. Overnight Manali.',
      'Day 2: Manali to Jispa via Atal Tunnel. Ride through Lahaul Valley. Overnight camping in Jispa.',
      'Day 3: Jispa to Sarchu via Baralacha La (16,040 ft). Stunning landscapes and challenging terrain. Overnight Sarchu.',
      'Day 4: Sarchu to Leh via Gata Loops and Tanglang La (17,480 ft). Arrive Leh, rest. Overnight Leh.',
      'Day 5: Leh local sightseeing - Shanti Stupa, Magnetic Hill, Hall of Fame. Permit arrangement. Overnight Leh.',
      'Day 6: Leh to Nubra Valley via Khardung La (World\'s highest motorable road). Camel safari at Hunder. Overnight Nubra.',
      'Day 7: Nubra to Pangong Lake via Shyok river route. Camping at Pangong. Overnight Pangong.',
      'Day 8: Pangong to Leh via Chang La. Evening shopping in Leh market. Overnight Leh.',
      'Day 9: Leh to Sarchu/Pang. Ride back towards Manali. Overnight camping.',
      'Day 10: Sarchu to Manali via Rohtang Pass. Bike handover and celebration dinner. Overnight Manali.',
      'Day 11: Free day in Manali/Departure.',
      'Day 12: Buffer day/Trip End.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626015365107-aa76a7f48d0e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582236531952-192a549d4361?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'ladakh',
    title: 'Ladakh Expedition',
    location: 'Leh-Ladakh, India',
    duration: '8 Days / 7 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Expedition',
    type: 'domestic',
    famousPlaces: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Leh Palace', 'Magnetic Hill'],
    whatToEat: ['Thukpa', 'Momos', 'Skyu', 'Butter Tea', 'Chhang'],
    attractions: ['Magnetic Hill', 'Shanti Stupa', 'Hemis Monastery', 'Camel Safari', 'River Rafting'],
    itinerary: [
      'Day 1: Arrive Leh by flight (stunning aerial views of Himalayas). Complete rest for acclimatization. Light walk around Leh Market in evening. Overnight Leh.',
      'Day 2: Acclimatization day - visit Shanti Stupa for panoramic views, Leh Palace, and local markets. Stay hydrated and rest well. Overnight Leh.',
      'Day 3: Drive to Nubra Valley via Khardung La (18,380 ft - world\'s highest motorable pass). Visit Diskit Monastery and 106 ft Maitreya Buddha statue. Evening camel safari on sand dunes. Overnight Hunder.',
      'Day 4: Explore Nubra - visit Sumur village and Samstanling Monastery. Drive back to Leh via different route. Overnight Leh.',
      'Day 5: Early departure for Pangong Lake (5 hrs) via Chang La pass. Spend day at the magical blue lake (14,270 ft), made famous by 3 Idiots film. Overnight in lakeside camps.',
      'Day 6: Sunrise at Pangong, drive back to Leh via different route through Shey and Thiksey. Visit Thiksey Monastery (mini Potala Palace). Overnight Leh.',
      'Day 7: Local sightseeing - Magnetic Hill, Sangam (confluence of Indus and Zanskar), Pathar Sahib Gurudwara, Hall of Fame museum. Farewell dinner. Overnight Leh.',
      'Day 8: Morning flight departure from Leh with memories of a lifetime.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626015365107-aa76a7f48d0e?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'manali',
    title: 'Manali Adventure',
    location: 'Himachal Pradesh, India',
    duration: '5 Days / 4 Nights',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'domestic',
    famousPlaces: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Mall Road', 'Old Manali'],
    whatToEat: ['Siddu', 'Dham', 'Tudkiya Bhath', 'Trout Fish', 'Madra'],
    attractions: ['Paragliding', 'River Rafting', 'Skiing', 'Hot Springs at Vashisht', 'Trekking'],
    itinerary: [
      'Day 1: Arrive Manali by Volvo/flight to Kullu. Check into hotel, evening stroll at Mall Road. Try local street food and shop for Kullu shawls. Overnight Manali.',
      'Day 2: Full day Solang Valley adventure - paragliding (optional, extra cost), zorbing, rope way ride. Winter visitors can enjoy skiing. Evening visit Old Manali cafes. Overnight Manali.',
      'Day 3: Excursion to Rohtang Pass (subject to permit and weather) - snow activities, stunning views of Lahaul Valley. Alternative: Atal Tunnel to Sissu. Return by evening. Overnight Manali.',
      'Day 4: Visit Hadimba Devi Temple (ancient wooden temple), Manu Temple, Vashisht Hot Springs for natural thermal bath. Afternoon river rafting on Beas River (seasonal). Overnight Manali.',
      'Day 5: Morning visit to Naggar Castle and Roerich Art Gallery. Drive to Kullu for departure or shopping at Kullu markets.',
    ],
    aeoFaqs: [
      { question: "How to reach Manali from Bhilai?", answer: "Travelers from Bhilai usually reach Manali by train or flight to Chandigarh or Delhi, followed by a road journey. Rudraksh Safar assists with route planning, transfers, and hotel bookings." },
      { question: "What is included in a Manali tour package from Bhilai?", answer: "Manali tour packages generally include hotel accommodation, local sightseeing, meals, and transfers. Popular attractions include Solang Valley, Rohtang Pass, Hidimba Temple, and Old Manali." },
      { question: "Is Manali good for honeymoon couples?", answer: "Yes, Manali is one of the most popular honeymoon destinations from Bhilai due to its snowfall views, cozy hotels, scenic valleys, and romantic weather." },
      { question: "What is the best season to visit Manali?", answer: "The best season to visit Manali is from March to June for pleasant weather and December to February for snowfall experiences." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582971454436-02d4d221e4d5?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'goa',
    title: 'Goa Getaway',
    location: 'Goa, India',
    duration: '4 Days / 3 Nights',
    price: '₹11,999',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop',
    tag: 'Beach',
    type: 'domestic',
    famousPlaces: ['Calangute Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls', 'Anjuna Beach'],
    whatToEat: ['Fish Curry Rice', 'Bebinca', 'Prawn Balchao', 'Feni', 'Xacuti'],
    attractions: ['Water Sports', 'Cruise Parties', 'Flea Markets', 'Portuguese Architecture', 'Nightlife'],
    itinerary: [
      'Day 1: Arrive Goa airport/railway station, transfer to North Goa hotel. Evening at Calangute/Baga Beach - enjoy sunset, beach shacks, and vibrant nightlife. Overnight North Goa.',
      'Day 2: North Goa exploration - Fort Aguada, Chapora Fort (Dil Chahta Hai fame), Anjuna Flea Market. Water sports at Baga - parasailing, jet ski, banana ride. Evening casino cruise or beach party. Overnight North Goa.',
      'Day 3: South Goa heritage tour - Basilica of Bom Jesus (UNESCO), Se Cathedral, Church of St. Francis. Drive to Palolem Beach for serene experience. Optional: Dudhsagar Falls excursion. Overnight South Goa.',
      'Day 4: Morning beach leisure, last-minute shopping for cashews, feni, and souvenirs at local markets. Transfer to airport/station for departure.',
    ],
    aeoFaqs: [
      { question: "How to plan a Goa trip from Bhilai?", answer: "A Goa trip from Bhilai can be planned by booking flights or trains via Raipur, selecting hotels near beaches, and choosing sightseeing options like North Goa, South Goa, and water sports. Rudraksh Safar helps with complete planning, bookings, and local assistance." },
      { question: "What is the cost of a Goa tour package from Bhilai?", answer: "The cost of a Goa tour package from Bhilai depends on travel duration, hotel category, and season. Packages are available in budget, standard, and premium options, with prices varying based on inclusions like flights and activities." },
      { question: "What is the best time to visit Goa from Bhilai?", answer: "The best time to visit Goa from Bhilai is from October to March when the weather is pleasant for beaches, sightseeing, and nightlife. Monsoon months are suitable for budget travelers and peaceful stays." },
      { question: "Is Goa suitable for family and honeymoon trips?", answer: "Yes, Goa is suitable for both family vacations and honeymoon trips. Families prefer South Goa for peaceful beaches, while honeymoon couples enjoy beach resorts, cruises, and nightlife experiences." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'spiti',
    title: 'Spiti Valley',
    location: 'Himachal Pradesh, India',
    duration: '9 Days / 8 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Remote',
    type: 'domestic',
    famousPlaces: ['Key Monastery', 'Chandratal Lake', 'Pin Valley', 'Tabo Monastery', 'Dhankar Monastery'],
    whatToEat: ['Thentuk', 'Chhang', 'Tingmo', 'Yak Cheese', 'Butter Tea'],
    attractions: ['Stargazing', 'Fossil Hunting', 'River Rafting', 'Buddhist Culture', 'World\'s Highest Post Office'],
    itinerary: [
      'Day 1: Arrive Shimla, explore Mall Road and Ridge. Evening at Christ Church. Overnight Shimla.',
      'Day 2: Drive Shimla to Sangla (8 hrs) via Rampur and Karcham. Scenic route along Sutlej River. Overnight Sangla.',
      'Day 3: Explore Sangla Valley - Kamru Fort, Chitkul (last Indian village on Indo-Tibet border). Return to Sangla. Overnight Sangla.',
      'Day 4: Drive to Nako (5 hrs) via Khab Sangam confluence. Visit Nako Lake and Monastery. Overnight Nako.',
      'Day 5: Drive to Tabo (2 hrs), visit 1000-year-old Tabo Monastery (Ajanta of Himalayas). Continue to Kaza. Overnight Kaza.',
      'Day 6: Kaza exploration - Key Monastery (iconic Spiti landmark), Kibber village, Chicham Bridge (highest bridge in Asia), Langza for Buddha statue. Overnight Kaza.',
      'Day 7: Excursion to Pin Valley National Park for wildlife spotting. Visit Dhankar Monastery perched on cliff. Overnight Kaza.',
      'Day 8: Early drive to Chandratal Lake (4 hrs) via Kunzum Pass. Camp by the mesmerizing moon lake. Stargazing. Overnight Chandratal.',
      'Day 9: Drive to Manali (8 hrs) via Rohtang Pass. Departure from Manali.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590123714498-a88eb3ea62ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601188067649-f6edfea57a63?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'munnar',
    title: 'Munnar Tea Trails',
    location: 'Kerala, India',
    duration: '4 Days / 3 Nights',
    price: '₹19,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature',
    type: 'domestic',
    famousPlaces: ['Tea Museum', 'Eravikulam National Park', 'Mattupetty Dam', 'Top Station', 'Echo Point'],
    whatToEat: ['Appam & Stew', 'Kerala Parotta', 'Fish Molee', 'Payasam', 'Banana Chips'],
    attractions: ['Tea Plantation Walk', 'Neelakurinji Flowers', 'Elephant Safari', 'Spice Gardens', 'Trekking'],
    itinerary: [
      'Day 1: Arrive Cochin airport, drive to Munnar (4 hrs) through scenic Western Ghats with waterfalls enroute (Cheeyappara, Valara). Check into tea estate resort. Evening walk through tea gardens. Overnight Munnar.',
      'Day 2: Morning visit to Eravikulam National Park (home of Nilgiri Tahr). Drive to Mattupetty Dam for boating, Echo Point for its natural echo phenomenon. Evening visit Tea Museum to learn tea processing. Overnight Munnar.',
      'Day 3: Early morning trip to Top Station (highest point in Munnar) for sunrise and views of Tamil Nadu. Visit Kundala Lake for shikara boating. Afternoon at spice plantation - see cardamom, pepper, cinnamon. Ayurvedic massage in evening. Overnight Munnar.',
      'Day 4: Morning leisure, visit Blossom Park and Rose Garden. Buy fresh tea and spices. Drive to Cochin for departure.',
    ],
    aeoFaqs: [
      { question: "How to reach Kerala from Bhilai?", answer: "Travelers from Bhilai usually reach Kerala via flights from Raipur to Kochi or Trivandrum. Rudraksh Safar helps with flight bookings, transfers, and hotel planning." },
      { question: "What destinations are covered in Kerala tour packages?", answer: "Kerala tour packages commonly cover Munnar, Alleppey houseboats, Thekkady, Kochi, and Kovalam beaches depending on trip duration." },
      { question: "Is Kerala suitable for family trips?", answer: "Yes, Kerala is ideal for family trips due to its peaceful hill stations, houseboat stays, wildlife sanctuaries, and relaxed environment." },
      { question: "What is the best time to visit Kerala?", answer: "The best time to visit Kerala is from October to March for pleasant weather. Monsoon season is preferred for Ayurveda treatments and budget travel." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop',
    ],
  },
  {
    id: 'haridwar-rishikesh',
    title: 'Haridwar Rishikesh',
    location: 'Uttarakhand, India',
    duration: '3 Days / 2 Nights',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Spiritual',
    type: 'domestic',
    famousPlaces: ['Har Ki Pauri', 'Laxman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Beatles Ashram'],
    whatToEat: ['Chole Bhature', 'Aloo Puri', 'Lassi', 'Street Chaat', 'Thali'],
    attractions: ['Ganga Aarti', 'River Rafting', 'Bungee Jumping', 'Yoga & Meditation', 'Ashram Visit'],
    itinerary: [
      'Day 1: Arrive Haridwar by train/drive. Visit Mansa Devi Temple by ropeway, Chandi Devi Temple. Evening witness the spectacular Ganga Aarti at Har Ki Pauri - a spiritual experience of floating diyas and chanting. Overnight Haridwar.',
      'Day 2: Morning holy dip in Ganga at Har Ki Pauri. Drive to Rishikesh (30 mins). Cross iconic Laxman Jhula and Ram Jhula suspension bridges. Visit Beatles Ashram (Maharishi Mahesh Yogi Ashram) with its graffiti art. Afternoon river rafting on Ganga (16 km Marine to NIM). Evening Triveni Ghat aarti. Overnight Rishikesh.',
      'Day 3: Early morning yoga session at ashram. Visit Neelkanth Mahadev Temple (32 km, scenic forest drive). Optional: bungee jumping or cliff jumping at Jumpin Heights. Return via Shivpuri for lunch. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590123714498-a88eb3ea62ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2074&auto=format&fit=crop',
    ],
  },
  {
    id: 'gangtok-darjeeling',
    title: 'Gangtok Darjeeling',
    location: 'Sikkim & West Bengal, India',
    duration: '7 Days / 6 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
    tag: 'Hill Station',
    type: 'domestic',
    famousPlaces: ['Tsomgo Lake', 'Nathula Pass', 'Tiger Hill', 'Batasia Loop', 'MG Marg'],
    whatToEat: ['Momos', 'Thukpa', 'Darjeeling Tea', 'Churpi', 'Sel Roti'],
    attractions: ['Toy Train Ride', 'Ropeway', 'Monasteries', 'Tea Garden Tours', 'Kanchenjunga View'],
    itinerary: [
      'Day 1: Arrive Bagdogra airport/NJP station, drive to Gangtok (4 hrs). Evening stroll at MG Marg - the vibrant pedestrian street. Overnight Gangtok.',
      'Day 2: Full day Tsomgo Lake and Baba Harbhajan Singh Temple excursion. Visit the sacred frozen lake at 12,400 ft. Yak ride available. Overnight Gangtok.',
      'Day 3: Nathula Pass excursion (India-China border, requires permit - not available for foreigners). See Indian Army post and border. Alternative: Visit Rumtek Monastery and Ganesh Tok. Overnight Gangtok.',
      'Day 4: Drive Gangtok to Darjeeling (4 hrs) via Teesta River viewpoint. Evening at Chowrasta Mall, Glenary\'s bakery for pastries. Overnight Darjeeling.',
      'Day 5: Early 4 AM drive to Tiger Hill for spectacular sunrise over Kanchenjunga range (weather permitting). Visit Batasia Loop war memorial, Ghoom Monastery, Himalayan Mountaineering Institute. Joy ride on UNESCO Toy Train from Ghoom to Darjeeling. Overnight Darjeeling.',
      'Day 6: Visit Happy Valley Tea Estate for tea plucking and tasting. Padmaja Naidu Himalayan Zoological Park for red pandas and snow leopards. Ropeway ride for valley views. Japanese Peace Pagoda. Overnight Darjeeling.',
      'Day 7: Morning leisure, shopping for Darjeeling tea. Drive to Bagdogra for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558799401-1dcba79f0632?q=80&w=2067&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622308644420-4a7853485ce2?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'darjeeling',
    title: 'Darjeeling Escape',
    location: 'West Bengal, India',
    duration: '4 Days / 3 Nights',
    price: '₹16,999',
    image: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2066&auto=format&fit=crop',
    tag: 'Heritage',
    type: 'domestic',
    famousPlaces: ['Tiger Hill', 'Batasia Loop', 'Peace Pagoda', 'Himalayan Railway', 'Tea Gardens'],
    whatToEat: ['Darjeeling Tea', 'Momos', 'Thukpa', 'Sel Roti', 'Churpi'],
    attractions: ['Toy Train Ride', 'Tea Estate Tours', 'Sunrise View', 'Zoo Visit', 'Ropeway'],
    itinerary: [
      'Day 1: Arrive Bagdogra airport/NJP station, scenic drive to Darjeeling (3 hrs) through winding mountain roads. Check into heritage hotel. Evening walk at Chowrasta Mall, hot chocolate at Glenary\'s. Overnight Darjeeling.',
      'Day 2: Pre-dawn 4 AM departure for Tiger Hill (11 km) to witness sunrise over Mt. Kanchenjunga - the golden rays lighting up the snow peaks. On return, stop at Batasia Loop with its spiral railway track and war memorial. Visit Ghoom Monastery (oldest in region). UNESCO Toy Train joy ride from Ghoom. Overnight Darjeeling.',
      'Day 3: Morning visit Happy Valley Tea Estate - walk through tea gardens, see tea processing, taste fresh brews. Padmaja Naidu Zoo for endangered red pandas and snow leopards. Himalayan Mountaineering Institute museum. Evening ropeway ride for aerial valley views. Visit Japanese Peace Pagoda. Overnight Darjeeling.',
      'Day 4: Leisurely morning, shop for world-famous Darjeeling tea, wooden crafts, and Tibetan souvenirs at local markets. Visit Tenzing Rock and Gombu Rock. Drive to Bagdogra for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2066&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622308644420-4a7853485ce2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558799401-1dcba79f0632?q=80&w=2067&auto=format&fit=crop',
    ],
  },
  // Honeymoon Packages
  {
    id: 'manali-honeymoon',
    title: 'Manali Romantic Escape',
    location: 'Himachal Pradesh, India',
    duration: '5 Days / 4 Nights',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    famousPlaces: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Old Manali', 'Mall Road'],
    whatToEat: ['Siddu', 'Trout Fish', 'Dham', 'Babru', 'Tibetan Momos'],
    attractions: ['Candlelight Dinner', 'Couple Spa', 'Snow Activities', 'River Rafting', 'Paragliding'],
    itinerary: [
      'Day 1: Arrive in Manali, check into romantic mountain resort. Evening candlelight dinner with mountain views.',
      'Day 2: Visit Solang Valley for snow activities, paragliding together. Romantic sunset at Gulaba.',
      'Day 3: Explore Hadimba Temple, Old Manali cafes. Couple spa session at resort.',
      'Day 4: Day trip to Rohtang Pass (subject to permit). Enjoy snow together, photography session.',
      'Day 5: Leisure morning, Mall Road shopping, departure with beautiful memories.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kashmir-honeymoon',
    title: 'Kashmir Paradise',
    location: 'Jammu & Kashmir, India',
    duration: '6 Days / 5 Nights',
    price: '₹26,999',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    famousPlaces: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Mughal Gardens'],
    whatToEat: ['Rogan Josh', 'Yakhni', 'Gushtaba', 'Kashmiri Pulao', 'Kahwa Tea'],
    attractions: ['Shikara Ride', 'Houseboat Stay', 'Gondola Ride', 'Garden Walks', 'Snow Activities'],
    itinerary: [
      'Day 1: Arrive Srinagar, check into luxury houseboat on Dal Lake. Evening Shikara ride at sunset.',
      'Day 2: Visit Mughal Gardens - Nishat, Shalimar. Romantic dinner on houseboat.',
      'Day 3: Full day Gulmarg excursion, Gondola ride to snow point, skiing/sledging.',
      'Day 4: Drive to Pahalgam - the valley of shepherds. Betaab Valley visit, horse riding.',
      'Day 5: Sonmarg day trip - meadow of gold. Thajiwas Glacier visit.',
      'Day 6: Morning leisure, local shopping for pashmina shawls, saffron. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'udaipur-honeymoon',
    title: 'Udaipur Royal Romance',
    location: 'Rajasthan, India',
    duration: '4 Days / 3 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    famousPlaces: ['Lake Pichola', 'City Palace', 'Jag Mandir', 'Fateh Sagar', 'Monsoon Palace'],
    whatToEat: ['Dal Baati Churma', 'Laal Maas', 'Gatte Ki Sabzi', 'Ghewar', 'Mawa Kachori'],
    attractions: ['Lake Palace Dinner', 'Boat Ride', 'Heritage Walk', 'Sunset Point', 'Folk Dance'],
    itinerary: [
      'Day 1: Arrive Udaipur, check into lake-view hotel. Evening boat ride on Lake Pichola, romantic dinner.',
      'Day 2: Visit City Palace, Jagdish Temple. Afternoon at Fateh Sagar Lake. Sunset at Monsoon Palace.',
      'Day 3: Jag Mandir island visit. Couple spa. Evening Rajasthani folk dance and dinner.',
      'Day 4: Leisure morning, local shopping for handicrafts, miniature paintings. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kerala-honeymoon',
    title: 'Kerala Backwater Romance',
    location: 'Kerala, India',
    duration: '5 Days / 4 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    famousPlaces: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Kovalam Beach', 'Kumarakom', 'Thekkady'],
    whatToEat: ['Appam with Stew', 'Karimeen Pollichathu', 'Banana Chips', 'Payasam', 'Kerala Sadya'],
    attractions: ['Houseboat Stay', 'Couple Spa', 'Tea Plantation Walk', 'Beach Sunset', 'Kathakali Show'],
    itinerary: [
      'Day 1: Arrive Cochin, drive to Munnar. Check into romantic tea estate resort. Evening nature walk.',
      'Day 2: Visit tea plantations, Eravikulam National Park. Couple spa at resort.',
      'Day 3: Drive to Alleppey. Board private houseboat for overnight cruise through backwaters.',
      'Day 4: Disembark, drive to Kovalam beach. Beach time, sunset together, seafood dinner.',
      'Day 5: Leisure morning at beach, Ayurvedic massage. Transfer to Trivandrum for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'bali-honeymoon',
    title: 'Bali Island Romance',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    visa: 'On Arrival',
    currency: 'Indonesian Rupiah (IDR)',
    famousPlaces: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Uluwatu', 'Nusa Dua'],
    whatToEat: ['Nasi Goreng', 'Babi Guling', 'Satay', 'Smoothie Bowls', 'Seafood BBQ'],
    attractions: ['Private Villa', 'Couple Spa', 'Sunset Dinner', 'Snorkeling', 'Rice Terrace Walk'],
    itinerary: [
      'Day 1: Arrive Bali, transfer to private pool villa in Seminyak. Romantic beachfront dinner.',
      'Day 2: Ubud cultural tour - Monkey Forest, Tegallalang Rice Terraces. Couple Balinese massage.',
      'Day 3: Beach day at Nusa Dua. Water sports, floating breakfast experience.',
      'Day 4: Tanah Lot sunset tour. Romantic cliff-top dinner at Uluwatu.',
      'Day 5: Leisure at villa pool. Shopping at Seminyak. Farewell dinner cruise.',
      'Day 6: Leisure morning, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    ],
  },
  {
    id: 'maldives-honeymoon',
    title: 'Maldives Water Villa',
    location: 'Maldives',
    duration: '5 Days / 4 Nights',
    price: '₹89,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    visa: 'On Arrival',
    currency: 'Maldivian Rufiyaa (MVR)',
    famousPlaces: ['Male', 'Overwater Villas', 'Coral Reefs', 'Sandbanks', 'Underwater Restaurant'],
    whatToEat: ['Mas Huni', 'Garudhiya', 'Grilled Seafood', 'Tropical Fruits', 'International Cuisine'],
    attractions: ['Overwater Villa', 'Snorkeling', 'Sunset Cruise', 'Underwater Dining', 'Spa'],
    itinerary: [
      'Day 1: Arrive Male, speedboat transfer to resort. Check into overwater villa. Sunset champagne.',
      'Day 2: Snorkeling at house reef, dolphin cruise at sunset. Romantic beach dinner.',
      'Day 3: Full day at leisure - water sports, spa treatments, sandbank picnic.',
      'Day 4: Underwater restaurant experience. Couple photoshoot. Stargazing dinner.',
      'Day 5: Floating breakfast, leisure, transfer to Male for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    ],
  },
  {
    id: 'paris-honeymoon',
    title: 'Paris City of Love',
    location: 'Paris, France',
    duration: '7 Days / 6 Nights',
    price: '₹1,49,999',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    visa: 'Schengen Visa',
    currency: 'Euro (EUR)',
    famousPlaces: ['Eiffel Tower', 'Louvre Museum', 'Champs-Élysées', 'Montmartre', 'Seine River'],
    whatToEat: ['Croissants', 'French Macarons', 'Coq au Vin', 'Crème Brûlée', 'Fine Wine'],
    attractions: ['Eiffel Dinner', 'Seine Cruise', 'Versailles', 'Wine Tasting', 'Cabaret Show'],
    itinerary: [
      'Day 1: Arrive Paris CDG, transfer to boutique hotel near Champs-Élysées. Evening Seine River cruise.',
      'Day 2: Eiffel Tower visit, lunch at Champ de Mars. Afternoon Louvre Museum. Evening Moulin Rouge show.',
      'Day 3: Day trip to Palace of Versailles. Gardens walk. Evening dinner cruise on Seine.',
      'Day 4: Montmartre exploration, Sacré-Cœur. Artist square. Romantic dinner with Eiffel view.',
      'Day 5: Shopping at Champs-Élysées, Galeries Lafayette. Afternoon at Luxembourg Gardens.',
      'Day 6: Day trip to Champagne region for wine tasting. Farewell dinner at Michelin restaurant.',
      'Day 7: Leisure morning, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    ],
  },
  {
    id: 'switzerland-honeymoon',
    title: 'Switzerland Alps Romance',
    location: 'Switzerland',
    duration: '8 Days / 7 Nights',
    price: '₹1,79,999',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    visa: 'Schengen Visa',
    currency: 'Swiss Franc (CHF)',
    famousPlaces: ['Interlaken', 'Lucerne', 'Zurich', 'Jungfrau', 'Zermatt'],
    whatToEat: ['Swiss Chocolate', 'Fondue', 'Raclette', 'Rösti', 'Swiss Cheese'],
    attractions: ['Jungfraujoch', 'Lake Cruise', 'Glacier Express', 'Cable Cars', 'Chocolate Factory'],
    itinerary: [
      'Day 1: Arrive Zurich, city tour. Transfer to Lucerne. Chapel Bridge evening walk.',
      'Day 2: Mount Pilatus golden round trip. Lake Lucerne cruise. Romantic dinner.',
      'Day 3: Transfer to Interlaken. Paragliding together (optional). Evening leisure.',
      'Day 4: Jungfraujoch - Top of Europe excursion. Snow activities at Sphinx Observatory.',
      'Day 5: Scenic train to Zermatt. Matterhorn views. Glacier Paradise cable car.',
      'Day 6: Leisure in Zermatt. Spa day. Fondue dinner with mountain views.',
      'Day 7: Glacier Express scenic train to Zurich. Chocolate factory visit.',
      'Day 8: Zurich shopping, departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'europe-honeymoon',
    title: 'Europe Romantic Trail',
    location: 'Multi-Country Europe',
    duration: '12 Days / 11 Nights',
    price: '₹2,49,999',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
    tag: 'Honeymoon',
    type: 'honeymoon',
    visa: 'Schengen Visa',
    currency: 'Euro (EUR)',
    famousPlaces: ['Paris', 'Venice', 'Swiss Alps', 'Rome', 'Barcelona'],
    whatToEat: ['French Cuisine', 'Italian Pasta', 'Swiss Chocolate', 'Spanish Tapas', 'Fine Wine'],
    attractions: ['Eiffel Tower', 'Gondola Ride', 'Jungfraujoch', 'Colosseum', 'Sagrada Familia'],
    itinerary: [
      'Day 1-3: Paris - Eiffel Tower, Louvre, Seine cruise, Versailles, Moulin Rouge.',
      'Day 4-5: Train to Switzerland - Interlaken, Jungfraujoch, mountain activities.',
      'Day 6-7: Venice - Gondola ride, St. Marks Square, Murano island, romantic dinner.',
      'Day 8-9: Rome - Colosseum, Vatican, Trevi Fountain, Roman Forum.',
      'Day 10-11: Barcelona - Sagrada Familia, Park Güell, La Rambla, beach time.',
      'Day 12: Departure from Barcelona.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
    ],
  },
  // Family Packages
  {
    id: 'shimla-manali-family',
    title: 'Shimla Manali Family Tour',
    location: 'Himachal Pradesh, India',
    duration: '7 Days / 6 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    famousPlaces: ['Mall Road Shimla', 'Kufri', 'Solang Valley', 'Rohtang Pass', 'Hadimba Temple'],
    whatToEat: ['Siddu', 'Dham', 'Madra', 'Tudkiya Bhath', 'Himachali Sweets'],
    attractions: ['Toy Train', 'Snow Activities', 'Yak Ride', 'Nature Walks', 'Adventure Sports'],
    itinerary: [
      'Day 1: Arrive Chandigarh/Delhi, scenic drive to Shimla. Check into family-friendly hotel. Evening Mall Road walk.',
      'Day 2: Kufri excursion - pony rides for kids, Himalayan Nature Park. Toy train ride. Shopping at Mall Road.',
      'Day 3: Drive to Manali via Kullu. River rafting at Kullu (family-friendly rapids). Check into Manali resort.',
      'Day 4: Solang Valley full day - snow activities, zorbing, paragliding. Kids play area. Evening bonfire.',
      'Day 5: Rohtang Pass excursion (permit based) - snow point for whole family. Photography, snow play.',
      'Day 6: Hadimba Temple visit, Manu Temple. Old Manali cafes. Mall Road shopping. Van Vihar park for kids.',
      'Day 7: Leisure morning, departure to Chandigarh/Delhi.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'kerala-family',
    title: 'Kerala Family Vacation',
    location: 'Kerala, India',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    famousPlaces: ['Munnar', 'Alleppey', 'Thekkady', 'Kovalam', 'Cochin'],
    whatToEat: ['Kerala Sadya', 'Appam', 'Fish Curry', 'Banana Chips', 'Payasam'],
    attractions: ['Houseboat', 'Wildlife Safari', 'Tea Gardens', 'Beach Fun', 'Kathakali Show'],
    itinerary: [
      'Day 1: Arrive Cochin, explore Fort Kochi - Chinese fishing nets, St. Francis Church. Kid-friendly dinner cruise.',
      'Day 2: Drive to Munnar. Tea museum visit, plantation walk. Echo Point for kids. Comfortable resort stay.',
      'Day 3: Eravikulam National Park - spot Nilgiri Tahr. Mattupetty Dam boating. Rose Garden visit.',
      'Day 4: Drive to Thekkady. Periyar Wildlife Sanctuary boat safari - spot elephants, deer. Spice plantation tour.',
      'Day 5: Drive to Alleppey. Board family houseboat. Backwater cruise, village sights. Overnight on houseboat.',
      'Day 6: Disembark, transfer to Cochin airport. Departure with happy memories.',
    ],
    aeoFaqs: [
      { question: "How to reach Kerala from Bhilai?", answer: "Travelers from Bhilai usually reach Kerala via flights from Raipur to Kochi or Trivandrum. Rudraksh Safar helps with flight bookings, transfers, and hotel planning." },
      { question: "What destinations are covered in Kerala tour packages?", answer: "Kerala tour packages commonly cover Munnar, Alleppey houseboats, Thekkady, Kochi, and Kovalam beaches depending on trip duration." },
      { question: "Is Kerala suitable for family trips?", answer: "Yes, Kerala is ideal for family trips due to its peaceful hill stations, houseboat stays, wildlife sanctuaries, and relaxed environment." },
      { question: "What is the best time to visit Kerala?", answer: "The best time to visit Kerala is from October to March for pleasant weather. Monsoon season is preferred for Ayurveda treatments and budget travel." }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'rajasthan-family',
    title: 'Rajasthan Heritage Tour',
    location: 'Rajasthan, India',
    duration: '8 Days / 7 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    famousPlaces: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Amber Fort'],
    whatToEat: ['Dal Baati Churma', 'Laal Maas', 'Ghewar', 'Pyaaz Kachori', 'Mawa Sweets'],
    attractions: ['Forts & Palaces', 'Camel Safari', 'Cultural Shows', 'Lake Boat Rides', 'Elephant Ride'],
    itinerary: [
      'Day 1: Arrive Jaipur. City tour - Hawa Mahal, City Palace, Jantar Mantar. Evening puppet show for kids.',
      'Day 2: Amber Fort with elephant ride. Nahargarh Fort for panoramic views. Chokhi Dhani cultural dinner.',
      'Day 3: Drive to Jodhpur. Mehrangarh Fort exploration. Blue City walk. Traditional Rajasthani dinner.',
      'Day 4: Drive to Jaisalmer. Golden Fort. Evening camel safari in Sam dunes. Desert camp overnight with cultural program.',
      'Day 5: Jaisalmer Havelis tour. Gadsisar Lake. Drive to Jodhpur. Night train/drive to Udaipur.',
      'Day 6: Udaipur - City Palace, boat ride on Lake Pichola. Jag Mandir island visit.',
      'Day 7: Jagdish Temple, Saheliyon ki Bari garden (great for kids). Local craft shopping.',
      'Day 8: Leisure morning, departure from Udaipur.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'singapore-family',
    title: 'Singapore Family Fun',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹69,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2152&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    visa: 'e-Visa',
    currency: 'Singapore Dollar (SGD)',
    famousPlaces: ['Universal Studios', 'Sentosa', 'Gardens by the Bay', 'Singapore Zoo', 'Marina Bay Sands'],
    whatToEat: ['Chilli Crab', 'Chicken Rice', 'Satay', 'Laksa', 'Ice Kachang'],
    attractions: ['Theme Parks', 'Night Safari', 'Aquarium', 'Cable Car', 'Light Shows'],
    itinerary: [
      'Day 1: Arrive Changi Airport. Transfer to family hotel. Evening Marina Bay Sands light show, Merlion Park.',
      'Day 2: Full day Universal Studios Singapore - Hollywood rides, shows, character meets. Sentosa beach evening.',
      'Day 3: S.E.A. Aquarium (kids love it!), Adventure Cove Waterpark. Cable car ride. Wings of Time night show.',
      'Day 4: Morning Singapore Zoo - breakfast with orangutans. Gardens by the Bay - Cloud Forest, Flower Dome. Evening Night Safari.',
      'Day 5: Leisure shopping at Orchard Road, Jewel Changi. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2152&auto=format&fit=crop',
    ],
  },
  {
    id: 'dubai-family',
    title: 'Dubai Family Adventure',
    location: 'Dubai, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹74,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    visa: 'e-Visa',
    currency: 'UAE Dirham (AED)',
    famousPlaces: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina', 'Desert Safari'],
    whatToEat: ['Shawarma', 'Falafel', 'Hummus', 'Al Machboos', 'Luqaimat'],
    attractions: ['Theme Parks', 'Aquarium', 'Desert Safari', 'Beach Fun', 'Fountains Show'],
    itinerary: [
      'Day 1: Arrive Dubai, transfer to family hotel. Evening Dubai Mall - Aquarium, Dubai Fountain show.',
      'Day 2: Burj Khalifa - At The Top observation. Dubai Frame. Afternoon Global Village (seasonal).',
      'Day 3: Full day at any theme park - IMG Worlds, Legoland, or Motiongate. Evening Dhow cruise dinner.',
      'Day 4: Morning beach time at JBR. Afternoon Desert Safari - dune bashing, camel ride, BBQ dinner, belly dance.',
      'Day 5: Atlantis Aquaventure Waterpark full day. Lost Chambers Aquarium. Palm Jumeirah Monorail.',
      'Day 6: Morning leisure, Dubai souks shopping (Gold, Spice). Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'thailand-family',
    title: 'Thailand Family Holiday',
    location: 'Thailand',
    duration: '7 Days / 6 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Family',
    type: 'family',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Bangkok', 'Phuket', 'Pattaya', 'Phi Phi Islands', 'Coral Island'],
    whatToEat: ['Pad Thai', 'Tom Yum', 'Mango Sticky Rice', 'Thai Fried Rice', 'Fresh Fruits'],
    attractions: ['Temples', 'Beach Fun', 'Island Hopping', 'Safari World', 'Water Parks'],
    itinerary: [
      'Day 1 – Arrival in Bangkok → Pattaya: Arrival at DMK Airport, Bangkok. Private transfer to Pattaya. Hotel check-in (as per hotel timing). Indian lunch. Evening free for leisure / beach walk. Indian dinner. Overnight stay in Pattaya.',
      'Day 2 – Coral Island Tour: Breakfast at hotel. Speedboat to Coral Island. Free time at the beach & optional water sports (own cost). Indian lunch after the tour. Visit Pattaya View Point. Return to hotel. Indian dinner. Overnight stay in Pattaya.',
      'Day 3 – Pattaya City Tour + Alcazar Show: Breakfast at hotel. Pattaya city tour (transfers only) including Big Buddha Hill, Pattaya Beach Road, Gems Gallery, Floating Market area, local market (Tiger Park optional). Indian lunch. Rest at hotel. Evening Alcazar Show. Indian dinner. Overnight stay in Pattaya.',
      'Day 4 – Pattaya → Bangkok → Departure: Early morning check-out. Transfer to Bangkok. Free time for shopping/leisure (subject to time & traffic). Drop at DMK Airport. Tour ends with wonderful memories.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    ],
  },
  // Adventure Packages
  {
    id: 'ladakh-bike-tour',
    title: 'Ladakh & Spiti Bike Tour',
    location: 'Leh-Ladakh & Spiti Valley',
    duration: '12 Days / 11 Nights',
    price: '₹34,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    famousPlaces: ['Khardung La', 'Pangong Lake', 'Nubra Valley', 'Spiti Valley', 'Chandratal'],
    whatToEat: ['Thukpa', 'Momos', 'Butter Tea', 'Tingmo', 'Skyu'],
    attractions: ['Highest Motorable Roads', 'Monasteries', 'Camping', 'Star Gazing', 'River Crossings'],
    itinerary: [
      'Day 1: Arrive Manali, bike inspection, briefing. Rest and acclimatization.',
      'Day 2: Manali to Jispa (140 km) - Rohtang Pass, Keylong. First high altitude ride.',
      'Day 3: Jispa to Sarchu (85 km) - Baralacha La Pass (16,040 ft). Tent camp at Sarchu.',
      'Day 4: Sarchu to Leh (260 km) - Nakee La, Lachulung La, Tanglang La (17,582 ft - second highest pass).',
      'Day 5: Leh local sightseeing - Shanti Stupa, Leh Palace, markets. Rest day.',
      'Day 6: Leh to Nubra (120 km) via Khardung La (18,380 ft - highest motorable road). Hunder sand dunes, Bactrian camels.',
      'Day 7: Nubra to Pangong Lake (160 km) via Shyok route. Iconic blue lake camping.',
      'Day 8: Pangong to Leh (150 km) via Chang La (17,590 ft). Hemis Monastery visit.',
      'Day 9: Leh to Kaza, Spiti (400 km). Long epic ride through Himalayas.',
      'Day 10: Kaza local - Key Monastery, Kibber village, Chicham bridge.',
      'Day 11: Kaza to Chandratal Lake camping. Moonlit lake experience.',
      'Day 12: Chandratal to Manali (120 km) via Kunzum Pass, Rohtang. Trip ends.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'rishikesh-rafting',
    title: 'Rishikesh Rafting Adventure',
    location: 'Rishikesh, Uttarakhand',
    duration: '3 Days / 2 Nights',
    price: '₹6,999',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    famousPlaces: ['Laxman Jhula', 'Ram Jhula', 'Shivpuri', 'Marine Drive', 'The Beatles Ashram'],
    whatToEat: ['Aloo Puri', 'Chole Bhature', 'Fresh Juices', 'Israeli Food', 'Cafe Food'],
    attractions: ['White Water Rafting', 'Bungee Jumping', 'Cliff Jumping', 'Camping', 'Yoga'],
    itinerary: [
      'Day 1: Arrive Rishikesh, check into adventure camp at Shivpuri. Evening Ganga Aarti at Triveni Ghat. Bonfire, music.',
      'Day 2: Morning 16 km rafting from Shivpuri to Rishikesh - Grade 3-4 rapids (Roller Coaster, Golf Course, Club House). Cliff jumping. Afternoon bungee jumping (83m) or Giant Swing. Evening leisure at camps.',
      'Day 3: Morning yoga session. Beatles Ashram visit. Laxman Jhula, Ram Jhula walk. Shopping for spiritual items. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'andaman-scuba',
    title: 'Andaman Scuba Diving',
    location: 'Andaman Islands',
    duration: '5 Days / 4 Nights',
    price: '₹38,999',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    famousPlaces: ['Havelock Island', 'Neil Island', 'Radhanagar Beach', 'Elephant Beach', 'Port Blair'],
    whatToEat: ['Seafood', 'Coconut Curry', 'Fish Fry', 'Lobster', 'Crab Masala'],
    attractions: ['Scuba Diving', 'Snorkeling', 'Sea Walking', 'Glass Bottom Boat', 'Kayaking'],
    itinerary: [
      'Day 1: Arrive Port Blair. Cellular Jail visit, Light & Sound show. Corbyn\'s Cove Beach.',
      'Day 2: Ferry to Havelock Island. Radhanagar Beach (Asia\'s best beach) sunset. Beach resort stay.',
      'Day 3: Full day diving - PADI certified scuba diving at Elephant Beach. See coral reefs, colorful fish, sea turtles. Snorkeling session.',
      'Day 4: Neil Island day trip - Laxmanpur Beach, Natural Bridge. Kayaking. Glass bottom boat ride. Return to Havelock.',
      'Day 5: Morning leisure at beach. Ferry to Port Blair, flight departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'nepal-trekking',
    title: 'Nepal Everest Base Camp',
    location: 'Nepal',
    duration: '14 Days / 13 Nights',
    price: '₹49,999',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    visa: 'On Arrival',
    currency: 'Nepalese Rupee (NPR)',
    famousPlaces: ['Lukla', 'Namche Bazaar', 'Tengboche', 'Everest Base Camp', 'Kala Patthar'],
    whatToEat: ['Dal Bhat', 'Momos', 'Thukpa', 'Sherpa Stew', 'Tibetan Bread'],
    attractions: ['High Altitude Trekking', 'Monastery Visits', 'Sherpa Culture', 'Mountain Views', 'Glacier Walking'],
    itinerary: [
      'Day 1: Arrive Kathmandu. Trek briefing, permit arrangements, gear check.',
      'Day 2: Fly to Lukla (2,840m) - world\'s most dangerous airport. Trek to Phakding (2,610m).',
      'Day 3: Trek to Namche Bazaar (3,440m) - Sherpa capital. First Everest views.',
      'Day 4: Acclimatization day at Namche. Hike to Everest View Hotel for sunrise panorama.',
      'Day 5: Trek to Tengboche (3,870m). Visit famous monastery with Everest backdrop.',
      'Day 6: Trek to Dingboche (4,410m). Entering high altitude zone.',
      'Day 7: Acclimatization at Dingboche. Hike to Nagarjun Hill.',
      'Day 8: Trek to Lobuche (4,940m). Khumbu Glacier views.',
      'Day 9: Trek to Gorak Shep (5,170m), then to Everest Base Camp (5,364m). Achievement unlocked!',
      'Day 10: Early morning Kala Patthar (5,545m) sunrise for best Everest views. Descend to Pheriche.',
      'Day 11-13: Return trek via Namche to Lukla.',
      'Day 14: Fly Lukla to Kathmandu. Celebration dinner. Departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'thailand-island-hopping',
    title: 'Thailand Island Hopping',
    location: 'Phuket & Phi Phi Islands',
    duration: '6 Days / 5 Nights',
    price: '₹44,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Phi Phi Islands', 'James Bond Island', 'Maya Bay', 'Krabi', 'Railay Beach'],
    whatToEat: ['Fresh Seafood', 'Pad Thai', 'Green Curry', 'Mango Sticky Rice', 'Beach BBQ'],
    attractions: ['Island Hopping', 'Snorkeling', 'Kayaking', 'Cliff Jumping', 'Beach Parties'],
    itinerary: [
      'Day 1: Arrive Phuket. Transfer to Patong. Evening Bangla Road exploration, beach party vibes.',
      'Day 2: Phi Phi Islands full day - speedboat to Maya Bay (The Beach movie location), snorkeling at Shark Point, Monkey Beach, cliff jumping at Viking Cave.',
      'Day 3: James Bond Island & Phang Nga Bay - kayaking through limestone caves, sea cave exploration, floating village visit.',
      'Day 4: Krabi day trip - Railay Beach (rock climbing mecca), kayaking at Ao Thalane, cliff jumping, beach chill.',
      'Day 5: Full day at Similan Islands - pristine waters, scuba diving/snorkeling with marine life, underwater photography.',
      'Day 6: Morning Thai boxing class or cooking class. Last beach time, departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    ],
  },
  {
    id: 'dubai-desert-safari',
    title: 'Dubai Desert Safari',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹59,999',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=2074&auto=format&fit=crop',
    tag: 'Adventure',
    type: 'adventure',
    visa: 'e-Visa',
    currency: 'UAE Dirham (AED)',
    famousPlaces: ['Dubai Desert', 'Burj Khalifa', 'Palm Jumeirah', 'Dubai Marina', 'Hatta Mountains'],
    whatToEat: ['Arabic Mezze', 'Shawarma', 'Grilled Meats', 'Dates', 'Karak Tea'],
    attractions: ['Dune Bashing', 'Sandboarding', 'Quad Biking', 'Skydiving', 'Jet Ski'],
    itinerary: [
      'Day 1: Arrive Dubai. Transfer to Marina hotel. Evening speedboat tour of Dubai Marina skyline.',
      'Day 2: Morning skydiving over Palm Jumeirah (for adrenaline junkies!). Afternoon jet ski at JBR beach. Evening Dhow cruise.',
      'Day 3: Full day desert adventure - dune bashing in Land Cruiser, quad biking, sandboarding, camel riding. Overnight desert camp with BBQ, belly dance, stargazing.',
      'Day 4: Morning at desert camp. Return to Dubai. Burj Khalifa + Dubai Mall. Evening at Top Golf or indoor skydiving.',
      'Day 5: Hatta Mountains day trip - kayaking, mountain biking, hiking trails. Return to Dubai, departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=2074&auto=format&fit=crop',
    ],
  },
  // Luxury Packages
  {
    id: 'udaipur-palace',
    title: 'Udaipur Palace Stay',
    location: 'Rajasthan, India',
    duration: '4 Days / 3 Nights',
    price: '₹89,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'luxury',
    famousPlaces: ['Lake Palace', 'City Palace', 'Jag Mandir', 'Monsoon Palace', 'Fateh Sagar'],
    whatToEat: ['Royal Rajasthani Thali', 'Fine Dining', 'Lakeside Dinner', 'High Tea', 'Fusion Cuisine'],
    attractions: ['Palace Stay', 'Private Butler', 'Spa Treatments', 'Private Boat', 'Heritage Walk'],
    itinerary: [
      'Day 1: Airport pickup in luxury car. Boat transfer to Taj Lake Palace (or similar 5-star). Welcome drink, palace tour. Private dinner at Sheesh Mahal.',
      'Day 2: Royal breakfast. Private guided City Palace tour. Lunch at Jag Mandir island. Afternoon Ayurvedic spa. Sunset at Monsoon Palace in private car. Rooftop dinner.',
      'Day 3: Morning Yoga session. Private shikara ride. High tea at Oberoi Udaivilas. Evening cultural performance with traditional Rajasthani dinner. Private butler service.',
      'Day 4: Leisurely breakfast. Shopping with personal guide for handicrafts, paintings. Luxury transfer to airport.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'maldives-villa',
    title: 'Maldives Water Villa',
    location: 'Maldives',
    duration: '5 Days / 4 Nights',
    price: '₹1,99,999',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'luxury',
    visa: 'On Arrival',
    currency: 'Maldivian Rufiyaa (MVR)',
    famousPlaces: ['Private Island', 'Overwater Villa', 'Coral Reefs', 'Private Sandbank', 'Underwater Restaurant'],
    whatToEat: ['Fresh Seafood', 'Lobster', 'Fine Dining', 'Private Beach BBQ', 'Champagne Breakfast'],
    attractions: ['Private Villa', 'Private Pool', 'Spa Island', 'Sunset Cruise', 'Underwater Dining'],
    itinerary: [
      'Day 1: VIP airport meet. Seaplane transfer to private island resort. Check into overwater villa with private pool. Champagne sunset on deck.',
      'Day 2: Floating breakfast in pool. Morning spa - couples massage over water. Private snorkeling tour with marine biologist. Underwater restaurant dinner.',
      'Day 3: Private yacht excursion - dolphin watching, private sandbank picnic with butler service. Sunset cocktails. Night fishing experience.',
      'Day 4: Full day relaxation - villa, beach, pool. Private beach BBQ dinner under stars. Personal chef prepares custom menu.',
      'Day 5: Sunrise yoga. Champagne breakfast. Seaplane transfer, departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    ],
  },
  {
    id: 'dubai-yacht',
    title: 'Dubai Yacht Experience',
    location: 'Dubai, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹2,49,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'luxury',
    visa: 'e-Visa',
    currency: 'UAE Dirham (AED)',
    famousPlaces: ['Burj Al Arab', 'Palm Jumeirah', 'Dubai Marina', 'The World Islands', 'Atlantis'],
    whatToEat: ['Burj Al Arab Dining', 'Nobu', 'Michelin Restaurants', 'Private Chef', 'Yacht Dining'],
    attractions: ['Private Yacht', 'Helicopter Tour', 'Burj Al Arab', 'Desert Glamping', 'Spa Day'],
    itinerary: [
      'Day 1: Rolls Royce airport pickup. Check into Atlantis Royal or Burj Al Arab suite. Evening private yacht dinner cruise around Palm Jumeirah.',
      'Day 2: Helicopter tour of Dubai skyline. Burj Khalifa At The Top SKY (highest floor). Lunch at At.mosphere (world\'s highest restaurant). Spa at Talise Fitness.',
      'Day 3: Full day on private luxury yacht - sail to World Islands, swimming, jet ski, gourmet lunch onboard. Sunset back at Marina.',
      'Day 4: Luxury desert experience - private helicopter to desert camp. Exclusive glamping, gourmet dinner under stars, falcon show, private dune bashing.',
      'Day 5: Morning at Burj Al Arab beach. Shopping at Mall of Emirates with personal shopper. High tea at Burj Al Arab. Farewell dinner at Nobu.',
      'Day 6: Leisurely breakfast, Rolls Royce transfer to airport. VIP departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'switzerland-alps',
    title: 'Swiss Alps Retreat',
    location: 'Switzerland',
    duration: '7 Days / 6 Nights',
    price: '₹2,99,999',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'luxury',
    visa: 'Schengen Visa',
    currency: 'Swiss Franc (CHF)',
    famousPlaces: ['Zermatt', 'St. Moritz', 'Lucerne', 'Jungfraujoch', 'Matterhorn'],
    whatToEat: ['Swiss Fondue', 'Fine Dining', 'Michelin Cuisine', 'Swiss Chocolate', 'Alpine Specialties'],
    attractions: ['Mountain Chalet', 'First Class Train', 'Private Ski', 'Spa Resort', 'Helicopter Tour'],
    itinerary: [
      'Day 1: Private transfer from Zurich to Lucerne. 5-star lakeside hotel. Evening lake cruise on private yacht.',
      'Day 2: First class Glacier Express experience (world\'s most scenic train). Arrive Zermatt. Check into exclusive mountain chalet.',
      'Day 3: Private guided Matterhorn tour. Helicopter ride over Alps. Gourmet lunch at altitude restaurant. Evening spa.',
      'Day 4: Private ski/snowboard session with instructor (winter) or guided hiking (summer). Hot springs visit. Fondue dinner.',
      'Day 5: Transfer to St. Moritz by private car. World\'s most luxurious ski resort. Stay at Badrutt\'s Palace Hotel.',
      'Day 6: Bernina Express first class to Tirano (Italy). Wine tasting. Return to St. Moritz. Farewell Michelin dinner.',
      'Day 7: Private transfer to Zurich. Shopping at Bahnhofstrasse. VIP airport transfer.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    id: 'bali-private-villa',
    title: 'Bali Private Villa',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: '₹1,49,999',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    tag: 'Luxury',
    type: 'luxury',
    visa: 'On Arrival',
    currency: 'Indonesian Rupiah (IDR)',
    famousPlaces: ['Ubud', 'Seminyak', 'Uluwatu', 'Nusa Dua', 'Private Beaches'],
    whatToEat: ['Private Chef Cuisine', 'Fine Dining', 'Beachfront Restaurants', 'Ubud Organic', 'Sunset Bars'],
    attractions: ['Private Villa', 'Infinity Pool', 'Personal Chef', 'Spa Treatments', 'Cultural Experiences'],
    itinerary: [
      'Day 1: VIP airport greeting. Private car to exclusive villa in Ubud with infinity pool overlooking rice terraces. Welcome massage. Chef-prepared dinner.',
      'Day 2: Private yoga session at dawn. Guided Ubud cultural tour - temples, artisan workshops. Afternoon spa journey (3 hours). Romantic candlelit dinner at villa.',
      'Day 3: Transfer to beachfront villa in Seminyak. Morning at beach club (Potato Head or similar). Sunset at Tanah Lot temple. Fine dining dinner.',
      'Day 4: Private boat to Nusa Lembongan - snorkeling, manta ray spotting. Beach lunch. Return for cliffside dinner at Uluwatu.',
      'Day 5: Full day leisure at villa - private pool, chef services, spa. Sunset at beach bar. Farewell seafood feast on beach.',
      'Day 6: Floating breakfast experience. Leisurely departure to airport.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    ],
  },
];

interface PackageDetailsProps {
  packageIdOverride?: string;
}

const PackageDetails = ({ packageIdOverride }: PackageDetailsProps = {}) => {
  const params = useParams();
  const packageId = packageIdOverride || params.packageId;
  const pkg = allPackages.find((p) => p.id === packageId);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  // Redirect to 404 if package not found
  if (!pkg) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsApp = () => {
    const message = `Hello Rudraksh Safar, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share the detailed itinerary and inclusions.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Get related packages for internal linking
  const relatedPackages = allPackages
    .filter(p => p && p.id !== pkg.id && p.type === pkg.type)
    .slice(0, 3);

  // Generate clean URL-friendly slug
  const packageSlug = pkg.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Enhanced structured data for AI/Search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${pkg.title} Tour Package from Bhilai`,
    "description": `Book ${pkg.title} - ${pkg.duration} tour starting at ${pkg.price}. Visit ${pkg.famousPlaces.slice(0, 4).join(', ')}. Includes accommodation, transfers, sightseeing. Best travel agency Bhilai.`,
    "touristType": ["Family", "Couples", "Solo Travelers", "Groups"],
    "url": `https://rudrakshsafar.com/package/${pkg.id}`,
    "image": pkg.image,
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": (pkg as any).structuredItinerary ? (pkg as any).structuredItinerary.length : pkg.itinerary.length,
      "itemListElement": (pkg as any).structuredItinerary
        ? (pkg as any).structuredItinerary.map((day: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": day.day,
          "description": day.points.join('. ')
        }))
        : pkg.itinerary.map((day, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `Day ${index + 1}`,
          "description": day
        }))
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "TravelAgency",
        "name": "Rudraksh Safar",
        "telephone": "+91-9406182174",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
          "addressLocality": "Bhilai",
          "addressRegion": "Chhattisgarh",
          "postalCode": "490021",
          "addressCountry": "IN"
        }
      }
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Rudraksh Safar",
      "url": "https://rudrakshsafar.com"
    }
  };

  // Product schema for e-commerce signals
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${pkg.title} Tour Package`,
    "description": `${pkg.duration} ${pkg.title} tour from Bhilai. Visit ${pkg.famousPlaces.slice(0, 3).join(', ')}. Book with Rudraksh Safar.`,
    "image": pkg.gallery,
    "brand": {
      "@type": "Brand",
      "name": "Rudraksh Safar"
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rudraksh Safar"
      }
    },
  };

  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generatePackageFAQs(pkg).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rudrakshsafar.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pkg.type === 'domestic' ? "Domestic Packages" : "International Packages",
        "item": `https://rudrakshsafar.com/${pkg.type}-packages`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pkg.title,
        "item": `https://rudrakshsafar.com/package/${pkg.id}`
      }
    ]
  };

  // Best time and ideal for info
  const bestTime = getBestTimeToVisit({ tag: pkg.tag, location: pkg.location });
  const visaGuidePath = getVisaGuidePath(pkg.location);
  const pickupText = 'Pickup available from Bhilai, Raipur & Durg (Chhattisgarh).';

  const extraSeoKeywords =
    pkg.id === 'phuket'
      ? [
        'cheap Phuket packages from India',
        'family Phuket tour package',
        'Phuket honeymoon itinerary',
        'Phuket trip cost 2026',
        'Phuket tour packages from Bhilai',
        'Phuket tour packages from Raipur',
      ].join(', ')
      : '';

  const getIdealFor = () => {
    if (pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage') return 'Families, Senior Citizens, Devotees';
    if (pkg.tag === 'Romantic') return 'Couples, Honeymoon';
    if (pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking') return 'Adventure Seekers, Youth Groups, Friends';
    if (pkg.tag === 'Beach Escape' || pkg.tag === 'Beach & Culture') return 'Couples, Families, Honeymoon';
    if (pkg.tag === 'Luxury') return 'Couples, Families, Business Travelers';
    return 'Families, Couples, Friends, Solo Travelers';
  };

  const destinationSlug = pkg.id;
  const heroH1 = pkg.id === 'phuket' ? 'Phuket Tour Package from India' : pkg.title;
  const heroIntro =
    pkg.id === 'phuket'
      ? 'Phuket tour package from India with island tours, beaches, and a flexible itinerary.'
      : `Explore ${pkg.location} with a curated ${pkg.duration} itinerary.`;

  const seoTitle = pkg.id === 'phuket' ? 'Phuket Tour Package from India' : `${pkg.title} Tour Package from ${HOME_CITY}`;
  const seoDescription =
    pkg.id === 'phuket'
      ? `Phuket tour package from India (${pkg.duration}) starting ${pkg.price}. Cheapest price guarantee. Best time to visit: ${bestTime}. View itinerary, inclusions, and FAQs. WhatsApp +91-9406182174.`
      : `${pkg.title} tour package from ${HOME_CITY} (${pkg.duration}) starting ${pkg.price}. Lowest price budget deal. ${pickupText} Places: ${pkg.famousPlaces.slice(0, 3).join(', ')}. Best time to visit: ${bestTime}. WhatsApp +91-9406182174.`;

  const budgetKeywords = `cheapest ${pkg.title} package from Bhilai, budget ${pkg.location} trip, low cost ${pkg.title} tour, affordable holiday in ${pkg.location}`;

  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={`${pkg.title} tour package, ${pkg.title} tour packages from ${HOME_CITY}, ${pkg.location} tour from ${HOME_CITY}, ${pkg.tag} tour package, ${budgetKeywords}, best time to visit ${pkg.location}, ${pkg.famousPlaces.slice(0, 4).join(', ')}${extraSeoKeywords ? `, ${extraSeoKeywords}` : ''}`}
        canonicalUrl={`https://rudrakshsafar.com/package/${pkg.id}`}
        ogImage={pkg.image}
        ogType="product"
        structuredData={structuredData}
      />

      {/* Additional Schema Markup - Product and Breadcrumb only, FAQ removed to prevent duplicate schema errors */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.title} tour package in ${pkg.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container">
            {pkg.id === 'dubai' ? (
              <Link
                to="/dubai-all-packages"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="drop-shadow-md">View All Dubai Packages</span>
              </Link>
            ) : (
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="drop-shadow-md">Back</span>
              </button>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-secondary px-4 py-1.5 rounded-full text-sm font-bold text-secondary-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {pkg.tag}
              </span>
              {pkg.visa && (
                <span className="bg-primary/90 px-4 py-1.5 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  {pkg.visa}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg mb-4">
              {heroH1}
            </h1>
            <p className="max-w-3xl text-white/85 text-base md:text-lg drop-shadow-md">
              {heroIntro}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="drop-shadow-md">{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="drop-shadow-md">{pkg.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Table of contents (quick jump) */}
              <AnimatedSection animation="fade-up">
                <div className="glass-card p-6">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">On this page</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'summary', label: 'Summary' },
                      { id: 'places', label: 'Famous places' },
                      { id: 'cuisine', label: 'Food' },
                      { id: 'attractions', label: 'Attractions' },
                      { id: 'itinerary', label: 'Itinerary' },
                      { id: 'gallery', label: 'Gallery' },
                      { id: 'faqs', label: 'FAQs' },
                    ].map((x) => (
                      <a
                        key={x.id}
                        href={`#${x.id}`}
                        className="px-3 py-1.5 rounded-full bg-muted text-foreground text-sm hover:bg-muted/70 transition-colors"
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Summary Box - AI Friendly */}
              <AnimatedSection animation="fade-up">
                <div id="summary" className="glass-card p-6 border-l-4 border-secondary scroll-mt-28">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Quick Summary</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{pkg.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price Range</p>
                      <p className="font-semibold text-secondary">{pkg.price} onwards</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Best Time</p>
                      <p className="font-semibold text-foreground">{bestTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ideal For</p>
                      <p className="font-semibold text-foreground">{getIdealFor()}</p>
                    </div>
                  </div>

                  {/* Internal links */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link to="/best-time-to-visit">Read full Best Time guide</Link>
                    </Button>
                    {visaGuidePath && (
                      <Button asChild variant="outline">
                        <Link to={visaGuidePath} target="_blank" rel="noopener noreferrer">
                          Visa guide for {pkg.location}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Internal links box (destination content system) */}
              <AnimatedSection animation="fade-up" delay={60}>
                <div className="glass-card p-6">
                  <h2 className="text-xl font-serif font-bold text-foreground">Explore {pkg.location}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Helpful guides to match search intent (things to do, best time, trip cost, FAQs).
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { slug: 'things-to-do', label: 'Things to do' },
                      { slug: 'best-time-to-visit', label: 'Best time' },
                      { slug: 'itinerary-5-days', label: '5-day itinerary' },
                      { slug: 'trip-cost', label: 'Trip cost' },
                      { slug: 'faqs', label: 'FAQs' },
                    ].map((l) => (
                      <Link
                        key={l.slug}
                        to={`/${destinationSlug}/${l.slug}`}
                        className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/15 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* (Removed) Phuket-specific long-tail content block from top area as requested */}

              {/* Currency Info (International) */}
              {pkg.currency && (
                <AnimatedSection animation="fade-up">
                  <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Local Currency</p>
                      <p className="text-lg font-semibold text-foreground">{pkg.currency}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Famous Places */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div id="places" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Famous Places</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.famousPlaces.map((place) => (
                      <span key={place} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Local Cuisine */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div id="cuisine" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Local Cuisine</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.whatToEat.map((food) => (
                      <span key={food} className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Attractions */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div id="attractions" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Popular Attractions</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.attractions.map((attraction) => (
                      <span key={attraction} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Itinerary */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div id="itinerary" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Map className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Detailed Itinerary</h2>
                  </div>

                  {(pkg as any).structuredItinerary ? (
                    <div className="space-y-4">
                      {((pkg as any).structuredItinerary).map((day: any, i: number) => (
                        <div key={i} className="bg-muted/30 rounded-lg overflow-hidden border border-border/50">
                          <div className="p-4 bg-muted/50 font-medium flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-secondary">
                              {i + 1}
                            </div>
                            <span className="text-foreground">{day.day}</span>
                          </div>
                          <div className="p-4 pt-2">
                            <ul className="space-y-2">
                              {day.points.map((point: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                  {point.startsWith('•') ? (
                                    <span className="pl-4 font-medium text-foreground">{point}</span>
                                  ) : (
                                    <>
                                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                                      <span>{point}</span>
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pkg.itinerary.map((day, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-secondary">
                            {i + 1}
                          </div>
                          <p className="text-foreground leading-relaxed">{day}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>

              {/* Inclusions & Exclusions */}
              {((pkg as any).inclusions || (pkg as any).exclusions) && (
                <AnimatedSection animation="fade-up" delay={450}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(pkg as any).inclusions && (
                      <div className="glass-card p-6 border-l-4 border-green-500/50">
                        <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Inclusions
                        </h3>
                        <ul className="space-y-2">
                          {(pkg as any).inclusions.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(pkg as any).exclusions && (
                      <div className="glass-card p-6 border-l-4 border-red-500/50">
                        <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                          <UtilityX className="w-5 h-5 text-red-600" />
                          Exclusions
                        </h3>
                        <ul className="space-y-2">
                          {(pkg as any).exclusions.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )}

              {/* Gallery */}
              <AnimatedSection animation="fade-up" delay={500}>
                <div id="gallery" className="glass-card p-6 scroll-mt-28">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {pkg.gallery.map((img, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${pkg.title} tour package photo ${i + 1} - ${pkg.location}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Package FAQs */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div id="faqs" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
                      <p className="text-sm text-muted-foreground">Everything you need to know about this trip</p>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {generatePackageFAQs(pkg).map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                        <AccordionTrigger className="text-left text-foreground hover:text-secondary hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AnimatedSection>

              {/* Why Book With Us */}
              <AnimatedSection animation="fade-up" delay={700}>
                <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-6 text-center">Why Book {pkg.title} With Rudraksh Safar?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Best Price Guarantee</p>
                        <p className="text-xs text-muted-foreground">Lowest prices in Bhilai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">100% Safe Travel</p>
                        <p className="text-xs text-muted-foreground">Verified hotels & transport</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">24/7 Support</p>
                        <p className="text-xs text-muted-foreground">Always here for you</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">10+ Years Experience</p>
                        <p className="text-xs text-muted-foreground">500+ happy travelers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Packages - Internal Linking */}
              {relatedPackages.length > 0 && (
                <AnimatedSection animation="fade-up" delay={800}>
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                      Explore More {pkg.type === 'domestic' ? 'Domestic' : 'International'} Packages
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      You might also like these {pkg.type === 'domestic' ? 'domestic' : 'international'} tour packages from Bhilai:
                    </p>
                    <div className="grid gap-3">
                      {relatedPackages.map((rPkg) => (
                        <Link
                          key={rPkg.id}
                          to={`/package/${rPkg.id}`}
                          className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted transition-colors group"
                        >
                          <img
                            src={rPkg.image}
                            alt={`${rPkg.title} tour package - ${rPkg.location}`}
                            className="w-16 h-16 rounded-lg object-cover"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
                              {rPkg.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {rPkg.duration} • {rPkg.price} • Best time: {getBestTimeToVisit({ tag: rPkg.tag, location: rPkg.location })}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <Link
                        to={pkg.type === 'domestic' ? '/domestic-packages' : '/international-packages'}
                        className="text-secondary hover:underline text-sm font-medium flex items-center gap-2"
                      >
                        View all {pkg.type === 'domestic' ? 'Domestic' : 'International'} Packages
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection animation="fade-up">
                  <div className="glass-card p-6">
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-4xl font-serif font-bold text-secondary">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>

                    {/* (Removed) Local pickup/office block from the page UI as requested */}

                    <Button onClick={handleWhatsApp} className="w-full btn-gold text-base py-6 mb-4">
                      Book Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Click to chat with us on WhatsApp for instant booking
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main >
  );
};

export default PackageDetails;