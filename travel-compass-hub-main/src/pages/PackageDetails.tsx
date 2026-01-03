import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Star, Sparkles, Utensils, Camera, Map, ArrowRight, Banknote, Plane, HelpCircle, Shield, Clock, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';

const PHONE_NUMBER = '919229150311';

// Generate dynamic FAQs based on package type and details
const generatePackageFAQs = (pkg: typeof allPackages[0]) => {
  const isDomestic = pkg.type === 'domestic';
  const isSpiritual = pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage';
  const isBeach = pkg.tag === 'Beach Escape' || pkg.tag === 'Romantic' || pkg.tag === 'Beach & Culture';
  const isAdventure = pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking';
  
  const faqs = [
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
      answer: `Booking is simple! Contact Rudraksha Safar at +91-9229150311 via WhatsApp or call. We serve travelers from Bhilai, Raipur, Durg, and all of Chhattisgarh. We handle all arrangements from your doorstep including pickup, flights, hotels, and complete tour management.`
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
      question: `Why choose Rudraksha Safar for ${pkg.location} tour?`,
      answer: `With 10+ years of experience, 500+ happy travelers, and being Bhilai's trusted travel partner, we offer the best value packages. Our highlights: 24/7 support, local expertise, ${isDomestic ? 'home pickup from Chhattisgarh' : 'complete visa assistance'}, and personalized service. We're not just a travel agency - we're your travel family!`
    }
  ];
  
  return faqs;
};

const allPackages = [
  // International Packages
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
    title: 'Thailand Explorer',
    location: 'Thailand',
    duration: '6 Days / 5 Nights',
    price: '₹38,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Beach & Culture',
    type: 'international',
    visa: 'On Arrival',
    currency: 'Thai Baht (THB)',
    famousPlaces: ['Grand Palace Bangkok', 'Phi Phi Islands', 'Phuket Old Town', 'Wat Arun', 'Patong Beach'],
    whatToEat: ['Pad Thai', 'Tom Yum Soup', 'Green Curry', 'Mango Sticky Rice', 'Som Tam'],
    attractions: ['Island Hopping', 'Floating Markets', 'Muay Thai Show', 'Night Markets', 'Thai Massage'],
    itinerary: [
      'Day 1: Arrive at Suvarnabhumi Airport Bangkok, transfer to hotel. Evening Chao Phraya River cruise dinner with temple views.',
      'Day 2: Full day Bangkok temples tour - Grand Palace, Wat Pho (Reclining Buddha), Wat Arun. Evening at Asiatique night market.',
      'Day 3: Morning at Damnoen Saduak Floating Market, fly to Phuket in afternoon. Evening at Patong Beach and Bangla Road.',
      'Day 4: Full day Phi Phi Island tour by speedboat - Maya Bay, snorkeling at Monkey Beach, Viking Cave, lunch on Phi Phi Don.',
      'Day 5: Morning at leisure on Phuket beach, afternoon Phuket Old Town walking tour, evening Thai cooking class.',
      'Day 6: Last beach time, visit Big Buddha, airport transfer for departure.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2086&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?q=80&w=2070&auto=format&fit=crop',
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
    gallery: [
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593181520415-e693cc7b2f29?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596627116790-af6f46dddbf6?q=80&w=2070&auto=format&fit=crop',
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
];

const PackageDetails = () => {
  const { packageId } = useParams();
  const pkg = allPackages.find((p) => p.id === packageId);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Get related packages for internal linking
  const relatedPackages = allPackages
    .filter(p => p.id !== pkg.id && p.type === pkg.type)
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
      "numberOfItems": pkg.itinerary.length,
      "itemListElement": pkg.itinerary.map((day, index) => ({
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
        "name": " Rudraksha Safar",
        "telephone": "+91-9229150311",
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
      "name": "Rudraksha Safar",
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
      "name": "Rudraksha Safar"
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": " Travels"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5"
    }
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
  const getBestTime = () => {
    if (pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage') return 'April to June, September to November';
    if (pkg.tag === 'Beach Escape' || pkg.tag === 'Beach & Culture' || pkg.tag === 'Romantic') return 'October to March';
    if (pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking') return 'May to October';
    return 'Year-round, October to March preferred';
  };

  const getIdealFor = () => {
    if (pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage') return 'Families, Senior Citizens, Devotees';
    if (pkg.tag === 'Romantic') return 'Couples, Honeymoon';
    if (pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking') return 'Adventure Seekers, Youth Groups, Friends';
    if (pkg.tag === 'Beach Escape' || pkg.tag === 'Beach & Culture') return 'Couples, Families, Honeymoon';
    if (pkg.tag === 'Luxury') return 'Couples, Families, Business Travelers';
    return 'Families, Couples, Friends, Solo Travelers';
  };

  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title={`${pkg.title} ${pkg.duration} | ${pkg.price} | Bhilai`}
        description={`Book ${pkg.title} tour from Bhilai at ${pkg.price} for ${pkg.duration}. Visit ${pkg.famousPlaces.slice(0, 3).join(', ')}. Best time: ${getBestTime()}. Call +91-9229150311.`}
        keywords={`${pkg.title} package, ${pkg.location} tour from Bhilai, ${pkg.title} ${pkg.duration}, ${pkg.tag} tour Raipur, ${pkg.famousPlaces.slice(0, 4).join(', ')}, ${pkg.type} tour Chhattisgarh`}
        canonicalUrl={`https://rudrakshsafar.com/package/${pkg.id}`}
        ogImage={pkg.image}
        ogType="product"
        structuredData={structuredData}
      />
      
      {/* Additional Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="drop-shadow-md">Back to Home</span>
            </Link>

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
              {pkg.title}
            </h1>
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
              {/* Quick Summary Box - AI Friendly */}
              <AnimatedSection animation="fade-up">
                <div className="glass-card p-6 border-l-4 border-secondary">
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
                      <p className="font-semibold text-foreground">{getBestTime()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ideal For</p>
                      <p className="font-semibold text-foreground">{getIdealFor()}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

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
                <div className="glass-card p-6">
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
                <div className="glass-card p-6">
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
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-secondary" />
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
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Map className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Detailed Itinerary</h2>
                  </div>
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
                </div>
              </AnimatedSection>

              {/* Gallery */}
              <AnimatedSection animation="fade-up" delay={500}>
                <div className="glass-card p-6">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {pkg.gallery.map((img, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img src={img} alt={`${pkg.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Package FAQs */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="glass-card p-6">
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
                      <Star className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
                            alt={rPkg.title}
                            className="w-16 h-16 rounded-lg object-cover"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
                              {rPkg.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{rPkg.duration} • {rPkg.price}</p>
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
    </main>
  );
};

export default PackageDetails;