import { Helmet } from 'react-helmet-async';

// Comprehensive package data for AI/Search engines
const allPackages = {
  domestic: [
    {
      name: "Char Dham Yatra",
      description: "Complete 12-day pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath temples in Uttarakhand. Includes comfortable accommodation, all meals, transportation, and expert guides.",
      price: 17999,
      duration: "12 Days / 11 Nights",
      location: "Uttarakhand, India",
      highlights: ["Yamunotri Temple", "Gangotri Temple", "Kedarnath Temple", "Badrinath Temple", "Rishikesh", "Haridwar"],
      includes: ["3-star hotels", "All meals", "AC transportation", "Temple darshan assistance", "Travel insurance"],
      bestTime: "May to June, September to October",
      difficulty: "Moderate - suitable for all ages with basic fitness"
    },
    {
      name: "Kedarnath Yatra",
      description: "Sacred 6-day pilgrimage to Kedarnath Temple, one of the 12 Jyotirlingas. Trek through stunning Himalayan landscapes with professional guides and comfortable stays.",
      price: 14999,
      duration: "6 Days / 5 Nights",
      location: "Uttarakhand, India",
      highlights: ["Kedarnath Temple", "Sonprayag", "Gaurikund", "Himalayan Trek", "Rudraprayag"],
      includes: ["Hotels", "Meals", "Pony/Palki optional", "Guide", "Trek permits"],
      bestTime: "May to June, September to November",
      difficulty: "Moderate to Challenging - 16km trek involved"
    },
    {
      name: "Ladakh Adventure",
      description: "Thrilling 8-day adventure through the land of high passes. Experience Pangong Lake, Nubra Valley, monasteries, and the world's highest motorable roads.",
      price: 24999,
      duration: "8 Days / 7 Nights",
      location: "Leh-Ladakh, India",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Thiksey Monastery", "Magnetic Hill", "Shanti Stupa"],
      includes: ["Boutique hotels", "Breakfast & dinner", "Innova/Tempo Traveller", "Permits", "Oxygen cylinder"],
      bestTime: "May to September",
      difficulty: "Moderate - high altitude acclimatization required"
    },
    {
      name: "Goa Getaway",
      description: "Relaxing 4-day beach vacation in India's party capital. Enjoy pristine beaches, water sports, nightlife, and Portuguese heritage.",
      price: 11999,
      duration: "4 Days / 3 Nights",
      location: "Goa, India",
      highlights: ["Baga Beach", "Calangute Beach", "Basilica of Bom Jesus", "Fort Aguada", "Dudhsagar Falls", "Cruise"],
      includes: ["Beach resort", "Breakfast", "Airport transfers", "Sightseeing", "Water sports"],
      bestTime: "October to March",
      difficulty: "Easy - suitable for all"
    },
    {
      name: "Manali Adventure",
      description: "Perfect 5-day hill station escape in the Himalayas. Snow activities, adventure sports, scenic valleys, and charming cafes await.",
      price: 9999,
      duration: "5 Days / 4 Nights",
      location: "Himachal Pradesh, India",
      highlights: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Mall Road", "Old Manali", "Vashisht Temple"],
      includes: ["Deluxe hotel", "Breakfast", "Volvo bus/cab", "Sightseeing", "Snow activities"],
      bestTime: "October to February for snow, March to June for pleasant weather",
      difficulty: "Easy - family friendly"
    },
    {
      name: "Kashmir Paradise",
      description: "7-day tour of India's crown jewel. Houseboats, Mughal gardens, gondola rides, and breathtaking valleys.",
      price: 29999,
      duration: "7 Days / 6 Nights",
      location: "Jammu & Kashmir, India",
      highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam", "Mughal Gardens", "Sonmarg", "Shankaracharya Temple"],
      includes: ["Houseboat + hotel", "All meals", "Shikara ride", "Gondola tickets", "Private cab"],
      bestTime: "March to October",
      difficulty: "Easy - suitable for all ages"
    }
  ],
  international: [
    {
      name: "Dubai Extravaganza",
      description: "Luxurious 5-day tour of the UAE's glittering city. Desert safari, Burj Khalifa, Dubai Mall, and world-class entertainment.",
      price: 54999,
      duration: "5 Days / 4 Nights",
      location: "Dubai, UAE",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah", "Dubai Marina", "Global Village"],
      includes: ["4-star hotel", "Breakfast", "Airport transfers", "Desert safari with dinner", "City tour"],
      visa: "Visa on arrival for Indians (14 days)",
      bestTime: "November to March",
      difficulty: "Easy - luxury travel"
    },
    {
      name: "Bali Paradise",
      description: "6-day tropical escape to Indonesia's island paradise. Temples, rice terraces, beaches, and vibrant culture.",
      price: 64999,
      duration: "6 Days / 5 Nights",
      location: "Bali, Indonesia",
      highlights: ["Tanah Lot Temple", "Ubud Rice Terraces", "Kuta Beach", "Uluwatu Temple", "Mount Batur", "Tegallalang"],
      includes: ["Pool villa", "Breakfast", "Private transfers", "Temple tours", "Spa session"],
      visa: "Visa on arrival (30 days free)",
      bestTime: "April to October",
      difficulty: "Easy - beach & culture"
    },
    {
      name: "Thailand Explorer",
      description: "7-day adventure through the Land of Smiles. Bangkok's temples, Pattaya's beaches, and Thai cuisine.",
      price: 38999,
      duration: "7 Days / 6 Nights",
      location: "Thailand",
      highlights: ["Grand Palace", "Pattaya Beach", "Coral Island", "Floating Market", "Safari World", "Alcazar Show"],
      includes: ["3-star hotels", "Breakfast", "Transfers", "All tours", "Thai massage"],
      visa: "Visa on arrival (15 days) or e-Visa",
      bestTime: "November to February",
      difficulty: "Easy - tourist friendly"
    },
    {
      name: "Maldives Luxury",
      description: "5-day luxury escape to the world's most exclusive island destination. Overwater villas, pristine beaches, and underwater wonders.",
      price: 85999,
      duration: "5 Days / 4 Nights",
      location: "Maldives",
      highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise", "Underwater Restaurant", "Spa", "Dolphin Watching"],
      includes: ["5-star resort", "Full board meals", "Speedboat transfers", "Water activities", "Couple spa"],
      visa: "Visa on arrival (30 days free)",
      bestTime: "November to April",
      difficulty: "Easy - luxury relaxation"
    },
    {
      name: "Nepal Himalayan Trek",
      description: "7-day cultural and trekking experience in the lap of Himalayas. Temples, mountains, and warm Nepali hospitality.",
      price: 24999,
      duration: "7 Days / 6 Nights",
      location: "Nepal",
      highlights: ["Pashupatinath Temple", "Boudhanath Stupa", "Pokhara", "Phewa Lake", "Sarangkot Sunrise", "Chitwan Safari"],
      includes: ["Boutique hotels", "Breakfast & dinner", "All transfers", "Safari", "Guide"],
      visa: "Visa on arrival at Kathmandu",
      bestTime: "October to December, March to May",
      difficulty: "Easy to Moderate"
    },
    {
      name: "Sri Lanka Heritage",
      description: "6-day tour of the teardrop island. Ancient temples, tea plantations, wildlife safari, and golden beaches.",
      price: 35999,
      duration: "6 Days / 5 Nights",
      location: "Sri Lanka",
      highlights: ["Sigiriya Rock", "Temple of Tooth", "Nuwara Eliya Tea", "Yala Safari", "Galle Fort", "Colombo"],
      includes: ["Heritage hotels", "Breakfast & dinner", "Private driver", "Safari", "All entrance fees"],
      visa: "ETA required (can be applied online)",
      bestTime: "December to March",
      difficulty: "Easy - cultural tour"
    }
  ]
};

const AEOStructuredData = () => {
  // Generate comprehensive ItemList schema for all packages
  const packageListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tour Packages from Bhilai & Raipur - Rudraksh Safar",
    "description": "Complete list of domestic and international tour packages available from Rudraksh Safar, Bhilai. Cheapest prices guaranteed with pickup from Bhilai, Raipur, and Durg.",
    "numberOfItems": allPackages.domestic.length + allPackages.international.length,
    "itemListElement": [
      ...allPackages.domestic.map((pkg, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristTrip",
          "name": pkg.name,
          "description": pkg.description,
          "touristType": "Family, Couples, Solo Travelers, Groups",
          "itinerary": {
            "@type": "ItemList",
            "itemListElement": pkg.highlights.map((h, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": h
            }))
          },
          "offers": {
            "@type": "Offer",
            "price": pkg.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@type": "TravelAgency",
              "name": "Rudraksh Safar"
            }
          }
        }
      })),
      ...allPackages.international.map((pkg, index) => ({
        "@type": "ListItem",
        "position": allPackages.domestic.length + index + 1,
        "item": {
          "@type": "TouristTrip",
          "name": pkg.name,
          "description": pkg.description,
          "touristType": "Family, Couples, Honeymoon, Groups",
          "itinerary": {
            "@type": "ItemList",
            "itemListElement": pkg.highlights.map((h, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": h
            }))
          },
          "offers": {
            "@type": "Offer",
            "price": pkg.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "TravelAgency",
              "name": "Rudraksh Safar"
            }
          }
        }
      }))
    ]
  };

  // Speakable schema for voice search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rudraksh Safar - Best Travel Agency Bhilai",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#about-heading", "#packages-heading", "#services-heading", "#contact-heading", "#faqs-heading"]
    },
    "url": "https://rudrakshsafar.com"
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Travel Agency Services",
    "provider": {
      "@type": "TravelAgency",
      "name": "Rudraksh Safar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
        "addressLocality": "Bhilai",
        "addressRegion": "Chhattisgarh",
        "postalCode": "490021",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Bhilai", "Raipur", "Durg", "Chhattisgarh", "India"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Services",
      "itemListElement": [
        {"@type": "OfferCatalog", "name": "Flight Booking", "description": "Domestic and international flight tickets at best prices"},
        {"@type": "OfferCatalog", "name": "Train Booking", "description": "Hassle-free train reservations across India"},
        {"@type": "OfferCatalog", "name": "Hotel Booking", "description": "Premium hotels and resorts worldwide"},
        {"@type": "OfferCatalog", "name": "Visa Assistance", "description": "Complete visa consultancy for all countries"},
        {"@type": "OfferCatalog", "name": "Passport Services", "description": "New passport and renewal assistance"},
        {"@type": "OfferCatalog", "name": "Cruise Booking", "description": "Luxury cruise packages worldwide"},
        {"@type": "OfferCatalog", "name": "Travel Insurance", "description": "Comprehensive travel insurance coverage"}
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(packageListSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

// Export package data for use in other components
export { allPackages };
export default AEOStructuredData;