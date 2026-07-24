import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToAndaman = () => {
  const price = 22500;
  
  const faqs = [
    {
      question: "Are there direct flights to Andaman from Bilaspur?",
      answer: "No, there are no direct flights. You will need to take a connecting flight from Raipur (RPR) to Port Blair (IXZ), usually with a layover in Kolkata, Chennai, or Delhi."
    },
    {
      question: "Are ferry tickets between islands included?",
      answer: "Yes, our package includes tickets for premium private ferries (like Makruzz, Green Ocean, or Nautika) for transfers between Port Blair, Havelock, and Neil Island."
    },
    {
      question: "Is scuba diving included in the package?",
      answer: "Scuba diving is generally not included in the base package as it is an optional activity. However, our team in Bilaspur can pre-book your scuba diving slots at Elephant Beach (Havelock) at a discounted rate."
    },
    {
      question: "Do I need a passport for Andaman?",
      answer: "No, Indian citizens traveling from Bilaspur (or anywhere in India) to the Andaman Islands do not need a passport or visa. A valid government ID (like Aadhar or Voter ID) is sufficient."
    },
    {
      question: "Is the cellular jail light and sound show included?",
      answer: "Yes, our standard 5N/6D Andaman package includes the entry ticket to the historic Cellular Jail as well as the evening Light and Sound show."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Andaman Tour Package from Bilaspur | Port Blair & Havelock"
        description="Book your Andaman Islands package from Bilaspur. Includes Port Blair, Havelock Island, Radhanagar Beach, private ferry tickets, and Cellular Jail tour."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/andaman-package"
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
            <span className="text-gray-900 font-medium">Andaman Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1582236528760-449e79391ab6?w=1200&auto=format&fit=crop" 
                alt="Andaman Islands Radhanagar Beach" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Andaman Package from Bilaspur</h1>
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
                    Leave the landlocked plains of Chhattisgarh behind and dive into the crystal-clear waters of the Bay of Bengal. Our <strong>Andaman Tour Package from Bilaspur</strong> offers an exotic island escape without the need for a passport.
                  </p>
                  <p className="mt-4">
                    Your journey starts with a flight from Swami Vivekananda Airport (Raipur) to Veer Savarkar International Airport in Port Blair. The Andaman Islands require meticulous planning—especially coordinating private ferries between islands. When you book with Rudraksh Safar in Bilaspur, we guarantee that all your inter-island ferry tickets (Makruzz/Green Ocean) are pre-booked so you don't face any last-minute unavailability.
                  </p>
                  <p className="mt-4">
                    This 5-night, 6-day itinerary covers the historic Cellular Jail in Port Blair, the world-famous Radhanagar Beach in Havelock, and the serene coral reefs of Neil Island. 
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Port Blair & Cellular Jail</h3>
                    <p className="text-gray-600">
                      Arrive at Port Blair airport. Our representative will receive you and transfer you to your hotel. After lunch, visit the historic Cellular Jail to learn about India's freedom struggle. In the evening, watch the moving Light and Sound Show within the jail premises. Return to the hotel for dinner.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Transfer to Havelock & Radhanagar Beach</h3>
                    <p className="text-gray-600">
                      Early morning departure by private ferry (Makruzz or similar) to Swaraj Dweep (Havelock Island). After checking into your beach resort, head out to the spectacular Radhanagar Beach, often ranked as Asia's best beach. Enjoy the white sands and an incredible sunset.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Elephant Beach Excursion</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a speedboat journey to Elephant Beach. This spot is famous for its vibrant coral reefs. Enjoy complimentary snorkeling (subject to weather). You can also opt for scuba diving, sea walking, or glass-bottom boat rides here (extra cost).
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Transfer to Neil Island</h3>
                    <p className="text-gray-600">
                      Check out from Havelock and board the ferry to Shaheed Dweep (Neil Island). This island is known for its quiet, rustic vibe. Visit Bharatpur Beach (great for water sports), Laxmanpur Beach (stunning sunsets), and the Natural Coral Bridge formation. Overnight stay in Neil Island.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Return to Port Blair</h3>
                    <p className="text-gray-600">
                      Take the morning ferry back to Port Blair. After checking into your hotel, spend the afternoon visiting the Anthropological Museum and the Samudrika Naval Marine Museum. In the evening, you can shop for local shell souvenirs at the Aberdeen Bazaar.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in the islands. Our driver will drop you at the Port Blair airport for your return flight to Raipur/Bilaspur, carrying memories of a lifetime.
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
                  A trip to Andaman requires booking flights, hotels across three different islands, and multiple private ferries. If a ferry is cancelled due to weather, online portals leave you stranded. As your local agent in Bilaspur, we have direct tie-ups with ground operators in Port Blair. If schedules change, we re-route your itinerary and re-book your hotels immediately at no extra stress to you.
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
                    <span>5 Nights / 6 Days</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Best Time: Oct to May</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Port Blair (IXZ)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2N Port Blair, 2N Havelock, 1N Neil (3-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast at all hotels</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Cabs for sightseeing & transfers</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Premium Private Ferry Tickets (Makruzz/Similar)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Cellular Jail Entry & Light/Sound Show</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Flights from Raipur/Bilaspur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Scuba Diving & Water Sports</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunch and Dinner</li>
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
