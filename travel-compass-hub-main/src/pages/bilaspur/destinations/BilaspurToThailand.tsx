import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToThailand = () => {
  const price = 25999;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for Thailand packages?",
      answer: "Yes — Rudraksh Safar is based on GE Road in Durg-Bhilai (easily accessible via trains to Durg Junction) and has a genuinely staffed support office in Pattaya, so you get real on-ground help during your trip, not just a phone number back home. Our pricing is 100% transparent and synchronized across all platforms."
    },
    {
      question: "Does this Bilaspur travel agency have an office in Thailand?",
      answer: "Yes — we maintain a support office in Pattaya staffed by our own team. It's a support/coordination office rather than a walk-in storefront, but it means real, direct assistance during your trip if anything comes up."
    },
    {
      question: "Are there direct flights from Raipur or Bilaspur to Thailand?",
      answer: "No, there are no direct flights to Bangkok or Phuket from Chhattisgarh. We book connecting flights for our Bilaspur clients from Swami Vivekananda Airport (Raipur) to Bangkok (BKK/DMK) via Kolkata or New Delhi."
    },
    {
      question: "Do I need a visa for Thailand as an Indian citizen?",
      answer: "Yes, but it is very straightforward. Thailand often offers Visa on Arrival or Visa-free entry for Indian passport holders (subject to current Thai government regulations). Our visa assistance team in Bilaspur will guide you through the latest requirements."
    },
    {
      question: "Is this package suitable for a family vacation?",
      answer: "Yes! While Thailand is famous for its nightlife, places like Safari World in Bangkok and the beaches of Coral Island in Pattaya are perfect for families. We customize the itinerary to make it 100% family-friendly."
    },
    {
      question: "What currency should I carry from Bilaspur?",
      answer: "You should carry Thai Baht (THB). We can assist you in connecting with reliable forex vendors in Bilaspur or Raipur before your departure."
    },
    {
      question: "Does the package price include flights?",
      answer: "The starting price of ₹25,999 is for the comprehensive land package in Thailand (Hotels, Transfers, Breakfast, Sightseeing). International airfare from Raipur/Delhi is extra and varies by travel date."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Thailand Tour Package from Bilaspur | Bangkok & Pattaya"
        description="Book your Thailand tour package from Bilaspur. Explore Bangkok & Pattaya with customized itineraries, coral island tours, and visa assistance. Call now!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/thailand-package"
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
            <span className="text-gray-900 font-medium">Thailand Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&auto=format&fit=crop" 
                alt="Thailand Grand Palace Bangkok" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Thailand Package from Bilaspur</h1>
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
                    Ready for an international getaway? Our <strong>Thailand Tour Package from Bilaspur</strong> is specifically designed to give you a seamless experience from Chhattisgarh to the Land of Smiles. We cover the vibrant city life of Bangkok and the beautiful beaches of Pattaya in one action-packed itinerary.
                  </p>
                  <p className="mt-4">
                    Departing from Bilaspur is easy. Our travel experts will book connecting flights for you from Swami Vivekananda Airport (Raipur) directly to Bangkok. We handle your entire itinerary, including airport transfers in Thailand, hotel bookings in safe and prime locations, and all major sightseeing tours so you don't have to navigate foreign transport alone.
                  </p>
                  <p className="mt-4">
                    From the spectacular Alcazar Cabaret Show in Pattaya to the ornate temples of Bangkok, this 4-night, 5-day package is the perfect blend of culture, shopping, and relaxation.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D Bangkok & Pattaya)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Bangkok & Transfer to Pattaya</h3>
                    <p className="text-gray-600">
                      Upon arrival at Suvarnabhumi Airport (BKK) or Don Mueang (DMK), complete your visa formalities. Our English-speaking driver will meet you at the arrival hall and transfer you to your hotel in Pattaya (approx. 2-hour drive). In the evening, experience the world-famous Alcazar Cabaret Show. Overnight stay in Pattaya.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Coral Island Tour with Lunch</h3>
                    <p className="text-gray-600">
                      After breakfast, take a speedboat ride to the beautiful Coral Island (Koh Larn). Enjoy the pristine white-sand beaches and crystal-clear waters. You can partake in water sports like parasailing and underwater sea walking (extra cost). A delicious Indian buffet lunch is included. Return to Pattaya for a free evening.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Transfer to Bangkok & City Tour</h3>
                    <p className="text-gray-600">
                      Check out from your Pattaya hotel after breakfast and head to Bangkok. En route, enjoy a half-day Bangkok City & Temple Tour. Visit the famous Wat Traimit (Temple of the Golden Buddha) and Wat Benchamabophit (Marble Temple). Check into your Bangkok hotel and spend the evening shopping at Pratunam or MBK Center.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Safari World & Marine Park</h3>
                    <p className="text-gray-600">
                      After breakfast, enjoy a full-day tour to Safari World & Marine Park. Drive through the open zoo to see wild animals in their natural habitat, and enjoy spectacular shows featuring dolphins, sea lions, and orangutans. Lunch is provided at the park. Return to the hotel in the late afternoon.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure back to India</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in Thailand. You have free time for last-minute shopping depending on your flight schedule. Our driver will transfer you to the Bangkok airport for your return flight to Raipur.
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
                  International travel can be daunting, especially when coordinating flights from Raipur and navigating visa rules. Unlike impersonal online booking sites, Rudraksh Safar provides complete hand-holding. You can walk into our main office in Bhilai to discuss your itinerary, hand over your passport for visa checks, and get a clear explanation of forex requirements. We ensure your first international trip is absolutely stress-free.
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
                    <span>Best Time: Nov to Apr</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Bangkok Airport (BKK/DMK)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2N stay in Pattaya (3/4-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2N stay in Bangkok (3/4-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast at hotels</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Coral Island Tour with Lunch</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Bangkok City & Temple Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> All Airport & Inter-city Transfers</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> International Airfare from Raipur/Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Thailand Visa Fees</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> National Park fees at Coral Island</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Personal expenses & Tips</li>
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
