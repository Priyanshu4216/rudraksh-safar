import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToDubai = () => {
  const price = 32500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Dubai package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Dubai from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Dubai, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I book a flight from Bilaspur to Dubai?",
      answer: "The easiest way is to fly from Swami Vivekananda Airport (Raipur) to Dubai International Airport (DXB), usually connecting via Mumbai or Delhi. Our team in Bilaspur handles all the flight bookings for you."
    },
    {
      question: "Is Dubai visa assistance provided in Bilaspur?",
      answer: "Yes, we provide end-to-end Dubai (UAE) tourist visa assistance right from our Bilaspur office. We'll tell you exactly what documents you need and process the application on your behalf."
    },
    {
      question: "What is included in the Desert Safari tour?",
      answer: "Our premium Desert Safari includes 4x4 dune bashing, camel riding, henna painting, a traditional BBQ buffet dinner, and live entertainment like belly dancing and Tanoura shows."
    },
    {
      question: "Can I customize this package for a family with children?",
      answer: "Absolutely. Dubai is incredibly family-friendly. We can easily add tickets for the Dubai Aquarium, KidZania, or Ferrari World in Abu Dhabi to your itinerary."
    },
    {
      question: "Does the package include Burj Khalifa tickets?",
      answer: "Yes, our standard package includes standard admission tickets to the 124th and 125th floors of the Burj Khalifa."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Dubai Tour Package from Bilaspur | Visa & Flights Included"
        description="Experience luxury with our Dubai tour package from Bilaspur. Includes Burj Khalifa, Desert Safari, Marina Dhow Cruise, and complete visa assistance."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/dubai-package"
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
            <span className="text-gray-900 font-medium">Dubai Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1512453979436-5a5330114972?w=1200&auto=format&fit=crop" 
                alt="Dubai Skyline Burj Khalifa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Dubai Package from Bilaspur</h1>
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
                    Experience the ultimate luxury, towering skyscrapers, and golden dunes with our <strong>Dubai Tour Package from Bilaspur</strong>. Whether you are planning a grand family holiday, an anniversary trip, or a shopping getaway, Rudraksh Safar takes care of everything from visa processing in Chhattisgarh to your hotel stay in the UAE.
                  </p>
                  <p className="mt-4">
                    For our clients in Bilaspur, we arrange seamless connecting flights from Raipur to Dubai. Forget the stress of planning an international trip—our 4-night, 5-day itinerary covers all the must-see attractions in Dubai, including the iconic Burj Khalifa, a thrilling Desert Safari, and a luxurious Dhow Cruise dinner along the Marina.
                  </p>
                  <p className="mt-4">
                    We also offer customized add-ons for day trips to Abu Dhabi to visit the magnificent Sheikh Zayed Grand Mosque or the thrilling Ferrari World.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Dubai & Marina Dhow Cruise</h3>
                    <p className="text-gray-600">
                      Upon arrival at Dubai International Airport (DXB), our representative will transfer you to your hotel. After relaxing, head out in the evening for a magical Dhow Cruise along the Dubai Marina. Enjoy a lavish buffet dinner with live music as you sail past the illuminated skyscrapers. Return to the hotel for an overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Half-Day City Tour & Burj Khalifa</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a half-day guided city tour. Visit the Dubai Museum, Jumeirah Mosque, and take photos at the iconic Burj Al Arab and Atlantis The Palm. In the evening, visit the Dubai Mall and head to the observation deck of the Burj Khalifa (124th floor). Watch the spectacular Dubai Fountain show before returning to your hotel.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Desert Safari with BBQ Dinner</h3>
                    <p className="text-gray-600">
                      Enjoy a relaxed morning for shopping at the Gold Souk or Mall of the Emirates. In the mid-afternoon, our 4x4 Land Cruiser will pick you up for the thrilling Desert Safari. Enjoy dune bashing, camel riding, and sandboarding. The evening concludes at a desert camp with a BBQ buffet dinner and traditional Tanoura and Belly Dance performances.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Leisure Day or Abu Dhabi City Tour</h3>
                    <p className="text-gray-600">
                      After breakfast, the day is yours to explore at leisure. We highly recommend booking an optional full-day excursion to Abu Dhabi to visit the stunning Sheikh Zayed Grand Mosque and Ferrari World. Alternatively, spend the day enjoying water parks like Aquaventure or shopping in Dubai's massive malls.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure back to India</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in Dubai. Complete your check-out process. Based on your flight schedule, our driver will transfer you to Dubai International Airport for your connecting flight back to Raipur/Bilaspur.
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
                  Booking an international trip to Dubai involves handling strict visa procedures and complex flight connections from Raipur. As a local travel agency in Bilaspur, we handle all the documentation for you. We provide transparent pricing in INR and offer physical consultations at our office so you can travel with complete peace of mind, knowing your local agent is just a phone call away.
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
                    <span>Best Time: Oct to Mar</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Dubai Airport (DXB)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 4 Nights stay in 3/4-star Dubai Hotel</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast at the hotel</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Half-Day Dubai City Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Desert Safari with BBQ Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Dhow Cruise Dinner (Marina)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Burj Khalifa 124th Floor Tickets</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> International Flights from Raipur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> UAE Tourist Visa Fee</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tourism Dirham Tax (payable at hotel)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Optional Abu Dhabi Tour</li>
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
