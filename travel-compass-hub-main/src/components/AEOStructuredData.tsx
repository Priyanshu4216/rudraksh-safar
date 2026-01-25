import { Helmet } from 'react-helmet-async';

// Comprehensive package data for AI/Search engines
const allPackages = {
  domestic: [
    { name: "Andaman Beach Holiday", description: "6-day tropical beach vacation to pristine Andaman Islands with scuba diving, snorkeling, and Cellular Jail visit.", price: 32999, duration: "6 Days / 5 Nights", location: "Andaman Islands, India", highlights: ["Radhanagar Beach", "Havelock Island", "Scuba Diving", "Cellular Jail"], includes: ["Beach resort", "All meals", "Ferry transfers", "Water sports"], bestTime: "October to May", difficulty: "Easy - beach holiday" },
    { name: "Kashmir Paradise", description: "6-day romantic getaway to Kashmir with Dal Lake houseboat stay, Gulmarg gondola, and Mughal gardens.", price: 22999, duration: "6 Days / 5 Nights", location: "Jammu & Kashmir, India", highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Mughal Gardens"], includes: ["Houseboat + hotel", "All meals", "Shikara ride", "Gondola tickets"], bestTime: "March to October", difficulty: "Easy - romantic" },
    { name: "Udaipur Royal Escape", description: "4-day heritage tour of Udaipur - City of Lakes with palace visits, boat rides, and Rajasthani culture.", price: 14999, duration: "4 Days / 3 Nights", location: "Rajasthan, India", highlights: ["City Palace", "Lake Pichola", "Jag Mandir", "Kumbhalgarh"], includes: ["Heritage hotel", "Breakfast", "Boat rides", "Sightseeing"], bestTime: "October to March", difficulty: "Easy - cultural" },
    
    { name: "Shimla Manali Adventure", description: "7-day adventure tour covering two of India's most popular hill stations with snow activities and paragliding.", price: 15999, duration: "7 Days / 6 Nights", location: "Himachal Pradesh, India", highlights: ["Mall Road Shimla", "Solang Valley", "Rohtang Pass", "Hadimba Temple"], includes: ["Hotels", "Breakfast", "Volvo/cab", "Sightseeing"], bestTime: "October to February for snow", difficulty: "Easy to Moderate" },
    { name: "Kodaikanal Retreat", description: "4-day nature retreat to Princess of Hill Stations with lakes, waterfalls, and pine forests.", price: 13999, duration: "4 Days / 3 Nights", location: "Tamil Nadu, India", highlights: ["Kodaikanal Lake", "Coaker's Walk", "Pillar Rocks", "Silver Cascade"], includes: ["Hotel", "Breakfast", "Transfers", "Sightseeing"], bestTime: "April to June, September to October", difficulty: "Easy - nature retreat" },
    { name: "Char Dham Yatra", description: "Complete 12-day pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath temples.", price: 17999, duration: "12 Days / 11 Nights", location: "Uttarakhand, India", highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"], includes: ["Hotels", "All meals", "Transportation", "Temple assistance"], bestTime: "May to June, September to October", difficulty: "Moderate - pilgrimage" },
    { name: "Ladakh Expedition", description: "8-day adventure through land of high passes with Pangong Lake and Nubra Valley.", price: 24999, duration: "8 Days / 7 Nights", location: "Leh-Ladakh, India", highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"], includes: ["Hotels", "Meals", "Permits", "Oxygen"], bestTime: "May to September", difficulty: "Moderate - high altitude" },
    { name: "Goa Getaway", description: "4-day beach vacation with water sports, nightlife, and Portuguese heritage.", price: 11999, duration: "4 Days / 3 Nights", location: "Goa, India", highlights: ["Baga Beach", "Basilica Bom Jesus", "Fort Aguada", "Water Sports"], includes: ["Beach resort", "Breakfast", "Transfers"], bestTime: "October to March", difficulty: "Easy - beach party" }
  ],
  international: [
    { name: "Phuket Beach Paradise", description: "5-day Thai beach holiday with Phi Phi Islands, Big Buddha, and vibrant nightlife.", price: 42999, duration: "5 Days / 4 Nights", location: "Phuket, Thailand", highlights: ["Phi Phi Islands", "Patong Beach", "Big Buddha", "Phang Nga Bay"], includes: ["4-star hotel", "Breakfast", "Island tours", "Transfers"], visa: "On Arrival", bestTime: "November to February", difficulty: "Easy - beach escape" },
    { name: "Singapore City Explorer", description: "5-day city tour with Universal Studios, Gardens by the Bay, and Night Safari.", price: 58999, duration: "5 Days / 4 Nights", location: "Singapore", highlights: ["Marina Bay Sands", "Universal Studios", "Gardens by the Bay", "Sentosa"], includes: ["4-star hotel", "Breakfast", "Theme park tickets", "Transfers"], visa: "e-Visa", bestTime: "Year-round", difficulty: "Easy - city break" },
    { name: "Dubai Extravaganza", description: "5-day luxury tour with Burj Khalifa, desert safari, and world-class shopping.", price: 54999, duration: "5 Days / 4 Nights", location: "Dubai, UAE", highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"], includes: ["4-star hotel", "Breakfast", "Desert safari", "City tour"], visa: "e-Visa", bestTime: "November to March", difficulty: "Easy - luxury" },
    { name: "Bali Paradise", description: "6-day tropical escape with temples, rice terraces, and beach clubs.", price: 64999, duration: "6 Days / 5 Nights", location: "Bali, Indonesia", highlights: ["Ubud", "Tanah Lot", "Uluwatu", "Seminyak"], includes: ["Pool villa", "Breakfast", "Temple tours", "Spa"], visa: "On Arrival", bestTime: "April to October", difficulty: "Easy - beach & culture" },
    { name: "Thailand Explorer", description: "6-day tour covering Bangkok temples and Phuket beaches.", price: 38999, duration: "6 Days / 5 Nights", location: "Thailand", highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market", "Patong"], includes: ["Hotels", "Breakfast", "Tours", "Thai massage"], visa: "On Arrival", bestTime: "November to February", difficulty: "Easy" },
    { name: "Maldives Paradise", description: "4-day luxury island escape with overwater villa and water activities.", price: 85999, duration: "4 Days / 3 Nights", location: "Maldives", highlights: ["Overwater Villa", "Snorkeling", "Dolphin Cruise", "Spa"], includes: ["5-star resort", "Full board", "Water activities"], visa: "On Arrival", bestTime: "November to April", difficulty: "Easy - luxury" }
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(packageListSchema)}
      </script>
    </Helmet>
  );
};

// Export package data for use in other components
export { allPackages };
export default AEOStructuredData;