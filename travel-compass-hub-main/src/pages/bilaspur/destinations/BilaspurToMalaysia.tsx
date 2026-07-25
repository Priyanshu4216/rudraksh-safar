import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToMalaysia = () => {
  const price = 32500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Malaysia package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Malaysia from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Malaysia, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach Malaysia from Bilaspur?",
      answer: "We book connecting flights from Raipur (RPR) to Kuala Lumpur International Airport (KUL), typically routing through Delhi or Kolkata."
    },
    {
      question: "Do Indians get Visa on Arrival in Malaysia?",
      answer: "Currently, Indian citizens can enjoy visa-free entry to Malaysia (subject to the latest government announcements) or an easy eNTRI/e-Visa process. We provide the latest updates and handle all necessary MDAC (Malaysia Digital Arrival Card) registrations for you."
    },
    {
      question: "Is Genting Highlands part of the package?",
      answer: "Yes! A full-day excursion to Genting Highlands, including the spectacular Awana SkyWay cable car ride, is a highlight of our standard Malaysia package."
    },
    {
      question: "Can I combine Malaysia with Singapore?",
      answer: "Absolutely. Our Singapore-Malaysia combo package is a favorite among travelers from Bilaspur. We arrange a comfortable luxury coach or a short flight to transfer you between Kuala Lumpur and Singapore."
    },
    {
      question: "What language is spoken in Malaysia?",
      answer: "Bahasa Malaysia is the official language, but English is widely spoken and understood, especially in Kuala Lumpur and tourist areas, so you won't face any communication barriers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Malaysia Tour Package from Bilaspur | Kuala Lumpur & Genting"
        description="Book your Malaysia holiday from Bilaspur. Explore the Petronas Twin Towers, Batu Caves, and Genting Highlands. Includes flights & transfers."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/malaysia-package"
        faqs={faqs}
        price={price}
        packageType="international"
      />
      
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/bilaspur" className="hover:text-blue-600">Bilaspur</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Malaysia Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?w=1200&auto=format&fit=crop" 
                alt="Petronas Twin Towers Kuala Lumpur" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Malaysia Package from Bilaspur</h1>
              </div>
            </div>
            
            <div className="p-8 flex flex-col md:flex-row gap-6 justify-between items-center bg-white">
              <div>
                <p className="text-gray-500 font-medium mb-1 uppercase tracking-wider text-sm">Starting Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gray-900">₹{price.toLocaleString('en-IN')}</span>
                  <span className="text-gray-500">/ person</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://wa.me/919203650311" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl shadow hover:bg-[#128C7E] transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Get Custom Quote
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Overview</h2>
                <div className="prose text-gray-600 leading-relaxed max-w-none">
                  <p>
                    Discover a nation where towering skyscrapers meet lush rainforests with our <strong>Malaysia Tour Package from Bilaspur</strong>. "Truly Asia," Malaysia offers a vibrant mix of Malay, Chinese, and Indian cultures, making it an incredibly welcoming and diverse destination for families and honeymooners.
                  </p>
                  <p className="mt-4">
                    Departing from Raipur, we manage your entire itinerary to ensure a seamless experience. This 4-night, 5-day package focuses on the dazzling capital, Kuala Lumpur, and the cool entertainment capital of Genting Highlands.
                  </p>
                  <p className="mt-4">
                    You'll stand in the shadow of the iconic Petronas Twin Towers, marvel at the giant golden statue of Lord Murugan at the Batu Caves, and ride a glass-bottom cable car through the clouds. With extremely favorable visa regulations for Indians, Malaysia is the perfect hassle-free international getaway.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D Kuala Lumpur)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Kuala Lumpur</h3>
                    <p className="text-gray-600">
                      Arrive at Kuala Lumpur International Airport (KUL). Complete your immigration process (our team will have provided you with your digital arrival cards). Our driver will transfer you to your hotel in the city center. The rest of the day is free for you to relax or explore the nearby Bukit Bintang shopping district.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Kuala Lumpur Half-Day City Tour</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a guided city tour. Visit the King's Palace (Istana Negara), the National Monument, Independence Square (Dataran Merdeka), and the majestic Sultan Abdul Samad Building. The tour concludes with a photo stop at the breathtaking Petronas Twin Towers and a visit to a local chocolate boutique.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Genting Highlands & Batu Caves</h3>
                    <p className="text-gray-600">
                      Today, take a scenic drive to the Genting Highlands. En route, stop at the famous Batu Caves to see the massive 140-foot golden statue of Lord Murugan and climb the colorful 272 steps. Continue to Genting, where you'll take the Awana SkyWay cable car up to the resort. Enjoy the indoor theme parks, casinos, and shopping malls. Return to KL in the evening.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Sunway Lagoon Theme Park</h3>
                    <p className="text-gray-600">
                      Get ready for a day of thrills at the award-winning Sunway Lagoon Theme Park. Your ticket includes access to the Water Park, Amusement Park, Wildlife Park, Extreme Park, Scream Park, and the Nickelodeon Lost Lagoon. It's an unforgettable day for kids and adults alike. Return to the hotel in the late afternoon.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in Malaysia. If time permits, do some last-minute shopping at Suria KLCC or Pavilion KL. Our driver will transfer you to the airport for your flight back to Raipur/India.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-blue-50 p-8 rounded-3xl shadow-sm border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Why book with Rudraksh Safar from Bilaspur?</h3>
                <p className="text-blue-800 leading-relaxed">
                  Booking an international trip online can leave you with hotels located far from public transport or city centers, causing you to spend excessive amounts on local taxis. Our Bilaspur travel experts ensure your hotels are strategically located in areas like Bukit Bintang or KLCC, giving you walking access to the best Indian restaurants, monorails, and shopping malls.
                </p>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Package Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>4 Nights / 5 Days</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Best Time: Year-round</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Kuala Lumpur (KUL)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 4 Nights Accommodation in Kuala Lumpur (3/4 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Buffet Breakfast</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Half-Day KL City Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Genting Highlands Tour with Two-Way Cable Car</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Batu Caves Photo Stop</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Return Airport Transfers (SIC)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare from Raipur/India</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Malaysia Tourism Tax (approx RM10/room/night)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Sunway Lagoon Tickets (Can be added)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches & Dinners</li>
                  </ul>
                </div>

                <a href="tel:9203650311" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors mb-3">
                  Call to Book
                </a>
                <p className="text-xs text-center text-gray-400">Speak to our Bilaspur travel expert</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
