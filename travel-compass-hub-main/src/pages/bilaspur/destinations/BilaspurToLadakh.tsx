import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToLadakh = () => {
  const price = 24500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Ladakh package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Ladakh from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Ladakh, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach Leh-Ladakh from Bilaspur?",
      answer: "The fastest and most common way is to take a flight from Swami Vivekananda Airport (Raipur) to Kushok Bakula Rimpochee Airport (IXL) in Leh, with a layover in Delhi. Alternatively, for adventure enthusiasts, we arrange bike/SUV trips starting from Manali or Srinagar."
    },
    {
      question: "Is Acute Mountain Sickness (AMS) a problem?",
      answer: "Since Ladakh is a high-altitude desert, acclimatization is crucial. Our itineraries strictly mandate that your first day in Leh is reserved entirely for rest to help your body adjust and prevent AMS."
    },
    {
      question: "Are Inner Line Permits (ILP) included in the package?",
      answer: "Yes, our package includes the processing and cost of Inner Line Permits required to visit protected areas like Pangong Tso and Nubra Valley."
    },
    {
      question: "When is the best time to visit Ladakh?",
      answer: "The ideal time to visit is from late May to September when the highways (Manali-Leh and Srinagar-Leh) are open and the weather is pleasant. Winter trips (like the Chadar Trek) are for extreme adventure seekers only."
    },
    {
      question: "Is vegetarian food easily available?",
      answer: "Yes! While Ladakh has its local cuisine, all the hotels and camps we book provide excellent Indian vegetarian meals, keeping in mind the preferences of our clients from Chhattisgarh."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Leh Ladakh Tour Package from Bilaspur | Nubra & Pangong"
        description="Book your Leh-Ladakh expedition from Bilaspur. Includes Pangong Lake, Nubra Valley, Inner Line Permits, and acclimatization stays. Custom packages available."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/ladakh-package"
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
            <span className="text-gray-900 font-medium">Ladakh Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1626601334997-6a4a689b6b72?w=1200&auto=format&fit=crop" 
                alt="Pangong Lake Ladakh" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Ladakh Package from Bilaspur</h1>
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
                    Embark on the adventure of a lifetime to the "Land of High Passes" with our specialized <strong>Leh-Ladakh Package from Bilaspur</strong>. Known for its stark, rugged beauty, ancient Buddhist monasteries, and crystal-clear lakes, Ladakh is a bucket-list destination for thrill-seekers and nature lovers alike.
                  </p>
                  <p className="mt-4">
                    To make the journey from Chhattisgarh as smooth as possible, we recommend flying from Raipur (via Delhi) directly into Leh. Our itinerary is expertly paced to ensure proper altitude acclimatization on Day 1, which is critical for a safe and enjoyable trip. 
                  </p>
                  <p className="mt-4">
                    Over 5 nights and 6 days, you will cross the mighty Khardung La Pass (one of the highest motorable roads in the world), ride a double-humped Bactrian camel in the sand dunes of Nubra Valley, and camp under the stars beside the mesmerizing blue waters of Pangong Tso.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Leh & Acclimatization</h3>
                    <p className="text-gray-600">
                      Arrive at Leh Airport (IXL). Our representative will transfer you to your hotel. Today is strictly reserved for complete rest to acclimatize to the high altitude (11,500 ft). In the late evening, you may take a light, slow walk to the Leh Market. Overnight stay in Leh.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Leh Local Sightseeing</h3>
                    <p className="text-gray-600">
                      After breakfast, explore the local wonders around Leh. Visit the Hall of Fame (a museum maintained by the Indian Army), the mysterious Magnetic Hill where cars defy gravity, and the confluence (Sangam) of the Zanskar and Indus rivers. Visit the Shanti Stupa at sunset for panoramic views of the city.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Leh to Nubra Valley via Khardung La</h3>
                    <p className="text-gray-600">
                      Early morning drive to Nubra Valley, passing over Khardung La (18,380 ft). Stop briefly at the pass for photos. Descend into the beautiful Nubra Valley. Check into your camp in Hunder. In the evening, enjoy a ride on the rare double-humped Bactrian camels amid the high-altitude sand dunes.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Nubra to Pangong Lake via Shyok Route</h3>
                    <p className="text-gray-600">
                      After breakfast, drive directly from Nubra to Pangong Tso via the scenic and rugged Shyok River route. Arrive at the breathtaking Pangong Lake, situated at 14,270 ft, famous for its ever-changing colors. Enjoy a stunning sunset over the lake and spend the night in a lakeside camp.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Pangong to Leh via Chang La</h3>
                    <p className="text-gray-600">
                      Wake up early to witness a mesmerizing sunrise over Pangong Lake. After breakfast, commence your return journey to Leh, crossing the Chang La pass (17,586 ft). En route, visit the famous Thiksey Monastery and the Rancho School (Druk White Lotus School). Reach Leh by evening.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure from Leh</h3>
                    <p className="text-gray-600">
                      After breakfast, our driver will drop you at the Leh Airport for your return flight to Raipur (via Delhi), concluding your epic Himalayan adventure.
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
                  Ladakh is not a standard holiday destination; it requires meticulous planning regarding altitude, permits, and rugged terrain logistics. When you book with Rudraksh Safar in Bilaspur, we handle all the complexities. We arrange your Inner Line Permits beforehand and ensure you have an experienced local Ladakhi driver equipped with oxygen cylinders in the vehicle for emergencies.
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
                    <span>Best Time: May to September</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Leh Airport (IXL)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3N stay in Leh (3-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1N Premium Camp in Nubra Valley</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1N Premium Camp at Pangong Lake</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Breakfast & Dinner (MAP Plan)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private SUV (Innova/Xylo) with local driver</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Inner Line Permits & Environmental Fees</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare from Raipur to Leh</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunch during sightseeing</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Camel Safari charges in Hunder</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monastery / Monument Entry Fees</li>
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
