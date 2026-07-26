import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToThailand = () => {
  const price = 12499;
  
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
        title="Thailand - Pattaya 4 Days / 3 Nights Package from Bilaspur"
        description="Book your Pattaya 4 Days / 3 Nights tour package from Bilaspur for ₹12,499. Enjoy Coral Island Tour, Alcazar Cabaret Show, and Pattaya City Tour. Call now!"
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
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Thailand - Pattaya Package</h1>
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
                    Ready for a quick international getaway? Our <strong>Thailand – Pattaya 4 Days / 3 Nights Package</strong> is specifically designed to give you a seamless experience from Chhattisgarh to the vibrant coastal city of Pattaya. 
                  </p>
                  <p className="mt-4">
                    Pattaya offers a perfect blend of relaxation and excitement. Stay at the comfortable 4-Star Hotel SunCity Pattaya, located conveniently near Walking Street and Pattaya Beach.
                  </p>
                  <p className="mt-4">
                    From the spectacular Alcazar Cabaret Show to the stunning white sands of Coral Island, this 3-night, 4-day package is the perfect blend of culture, beach life, and exploration at an unbeatable price.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (3N/4D Pattaya)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Pattaya & Alcazar Show</h3>
                    <p className="text-gray-600">
                      <strong>Arrival: DMK / BKK Airport</strong><br/>
                      Meet & greet upon arrival. Enjoy a private/SIC transfer from Bangkok Airport to your hotel in Pattaya. Check-in at Hotel SunCity Pattaya (4★) and relax. In the evening, witness the world-famous Alcazar Cabaret Show (Standard Ticket Included). Return to the hotel for an overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Coral Island Tour with Lunch</h3>
                    <p className="text-gray-600">
                      <strong>Meals: Breakfast & Lunch</strong><br/>
                      After breakfast, proceed for the exciting Coral Island Tour via speed boat. Enjoy free time to relax on the beach or experience optional water sports (at additional cost). A delicious Indian/Local Lunch is included. Return to Pattaya for an overnight stay at Hotel SunCity.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Pattaya City Tour</h3>
                    <p className="text-gray-600">
                      <strong>Meals: Breakfast</strong><br/>
                      After breakfast, proceed for a Pattaya City Tour (Transfer Only). Explore the city's popular attractions at your own pace. You have free time for shopping, visiting local cafés, and sightseeing. After completion of the tour, return to the hotel for an overnight stay.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Departure</h3>
                    <p className="text-gray-600">
                      <strong>Meals: Breakfast</strong><br/>
                      Check-out from the hotel after breakfast. Transfer from Pattaya back to Bangkok (BKK/DMK Airport) for your onward journey. Tour Ends with Wonderful Memories!
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
                    <span>3 Nights / 4 Days</span>
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
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3N stay in Hotel SunCity Pattaya (4★)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Airport to Pattaya & Return Transfers</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Alcazar Show Standard Ticket</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Coral Island Tour by Speed Boat with Lunch</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Pattaya City Tour (Transfer Only)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare & Visa Charges</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Personal Expenses & Tips</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Water Sports</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Travel Insurance</li>
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
