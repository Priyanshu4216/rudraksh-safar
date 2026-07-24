import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToKashmir = () => {
  const price = 16500;
  
  const faqs = [
    {
      question: "How do I reach Kashmir from Bilaspur?",
      answer: "The most convenient route is to take a flight from Swami Vivekananda Airport (Raipur) to Srinagar International Airport (SXR), usually with a layover in Delhi. Alternatively, you can take a train from Bilaspur Junction to Jammu Tawi, followed by a scenic road trip to Srinagar."
    },
    {
      question: "Is Kashmir safe for families traveling from Chhattisgarh?",
      answer: "Yes, Kashmir is incredibly safe and welcoming for tourists. Thousands of families and honeymooners from Bilaspur and Raipur visit Kashmir annually without any issues. Our local guides ensure your safety and comfort throughout the trip."
    },
    {
      question: "Does the package include a stay in a houseboat?",
      answer: "Yes! Our standard 4N/5D Kashmir package includes 1 night in a premium houseboat on Dal Lake or Nigeen Lake, complete with a complimentary Shikara ride."
    },
    {
      question: "What type of clothing should I pack for Kashmir?",
      answer: "If you are traveling in summer (May-August), light woolens are sufficient for the evenings. For winter (November-March) trips to Gulmarg or Pahalgam, heavy woolens, thermal innerwear, and snow boots are essential."
    },
    {
      question: "Are gondola ride tickets included in the package?",
      answer: "The Gulmarg Gondola ride tickets are generally excluded from the base package because they are subject to weather and availability. However, our Bilaspur office can pre-book Phase 1 and Phase 2 tickets for you upon request."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Kashmir Package from Bilaspur | Honeymoon & Family Tours"
        description="Explore the paradise on earth with our Kashmir tour package from Bilaspur. Includes Srinagar houseboat, Gulmarg, Pahalgam, and local guides. Book now!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/kashmir-package"
        faqs={faqs}
        price={price}
        packageType="domestic"
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
            <span className="text-gray-900 font-medium">Kashmir Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1598091383021-1437651cfa36?w=1200&auto=format&fit=crop" 
                alt="Kashmir Valley" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Kashmir Package from Bilaspur</h1>
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
                    Experience the unparalleled beauty of the "Paradise on Earth" with our specialized <strong>Kashmir Package from Bilaspur</strong>. Whether you are seeking a romantic honeymoon amidst the snow-capped peaks of Gulmarg or a serene family vacation in the valleys of Pahalgam, Rudraksh Safar provides a meticulously planned journey from Chhattisgarh to Kashmir.
                  </p>
                  <p className="mt-4">
                    Your journey begins with a flight from Raipur to Srinagar (or a train journey from Bilaspur to Jammu Tawi). Upon arrival, our local Kashmiri team will take over, ensuring you experience the warmth of Kashmiri hospitality. From staying in a traditional wooden houseboat on Dal Lake to wandering through the Mughal Gardens, every moment is designed to be memorable.
                  </p>
                  <p className="mt-4">
                    Our itineraries are flexible. Want to spend an extra day skiing in Gulmarg? Or perhaps you wish to visit Sonamarg, the Meadow of Gold? Our local experts in Bilaspur will customize the perfect itinerary for you.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Srinagar & Houseboat Stay</h3>
                    <p className="text-gray-600">
                      Arrive at Srinagar Airport where our representative will welcome you. Transfer directly to a premium Houseboat on Dal Lake. In the late afternoon, enjoy a complimentary 1-hour Shikara ride, floating past floating gardens and local markets. Enjoy a traditional dinner on the houseboat.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Srinagar Local Sightseeing</h3>
                    <p className="text-gray-600">
                      After breakfast, check out from the houseboat and move to a hotel in Srinagar. Spend the day visiting the famous Mughal Gardens: Nishat Bagh (The Garden of Pleasure) and Shalimar Bagh (Abode of Love). Visit the Shankaracharya Temple for panoramic views of the city.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Day Excursion to Gulmarg</h3>
                    <p className="text-gray-600">
                      Drive to Gulmarg (Meadow of Flowers), one of the most beautiful summer resorts in the valley and a premier ski destination in winter. Enjoy the world's highest cable car ride, the Gulmarg Gondola (tickets extra). Return to Srinagar in the evening.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Day Excursion to Pahalgam</h3>
                    <p className="text-gray-600">
                      Take a scenic drive to Pahalgam (Valley of Shepherds), passing through saffron fields in Pampore and apple orchards. Visit Betaab Valley, Aru Valley, or Chandanwari (local union taxi required, cost extra). Return to Srinagar for dinner and overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure to Bilaspur</h3>
                    <p className="text-gray-600">
                      After breakfast, transfer to Srinagar Airport for your return flight to Raipur. Take back wonderful memories of your Kashmir trip with Rudraksh Safar.
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
                  Booking a trip to Kashmir requires reliable local logistics. We bridge the gap between Bilaspur and Srinagar by providing transparent, trusted services. Unlike online portals where you talk to a different customer care agent every time, you get a dedicated travel expert in Bilaspur who ensures your Kashmir trip is flawless from start to finish.
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
                    <span>Best Time: Apr-Oct (Summer), Dec-Mar (Snow)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Srinagar Airport</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights Hotel Stay in Srinagar</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1 Night stay in Premium Houseboat</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Breakfast & Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1-Hour Shikara Ride on Dal Lake</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private Non-AC/AC Cab for sightseeing</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare / Train fare from Bilaspur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Gulmarg Gondola Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Local Union Taxis in Pahalgam/Gulmarg</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monument Entry Fees & Tips</li>
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
