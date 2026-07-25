import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToRajasthan = () => {
  const price = 17500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Rajasthan package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Rajasthan from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Rajasthan, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How to travel to Rajasthan from Bilaspur?",
      answer: "The most convenient way is to take a direct train from Bilaspur Junction to Jaipur (e.g., Durg Jaipur Express or Bikaner Express). Alternatively, you can fly from Raipur to Jaipur Airport (JAI), often with a short layover in Delhi or Mumbai."
    },
    {
      question: "Which cities are covered in this Rajasthan package?",
      answer: "Our classic 6N/7D Rajasthan itinerary covers the Golden Triangle of Rajasthan: Jaipur (The Pink City), Jodhpur (The Blue City), and Udaipur (The City of Lakes)."
    },
    {
      question: "Is this package suitable for a family vacation in winter?",
      answer: "Yes, Rajasthan is one of the best winter destinations for families in India. The weather is pleasant during the day and cool at night, perfect for exploring forts and palaces."
    },
    {
      question: "Does the package include a desert camp stay?",
      answer: "While this specific itinerary focuses on Jaipur, Jodhpur, and Udaipur, we can easily customize your trip to include a night in a luxury desert camp in Jaisalmer, complete with a camel safari."
    },
    {
      question: "Are monument entry fees included?",
      answer: "No, monument entry fees (like Amer Fort, City Palace, or Mehrangarh Fort) are excluded from the base package as they vary for Indian and foreign nationals. Your driver will assist you with ticketing at the venues."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Rajasthan Tour Package from Bilaspur | Jaipur, Jodhpur, Udaipur"
        description="Book your Rajasthan royal tour package from Bilaspur. Explore the forts of Jaipur, palaces of Udaipur, and the blue city of Jodhpur. Customized itineraries."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/rajasthan-package"
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
            <span className="text-gray-900 font-medium">Rajasthan Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop" 
                alt="Hawa Mahal Jaipur Rajasthan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Rajasthan Package from Bilaspur</h1>
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
                    Step into the land of Kings with our <strong>Rajasthan Tour Package from Bilaspur</strong>. This carefully curated itinerary takes you through the most iconic cities of India's largest state, showcasing centuries of Rajputana history, vibrant culture, and magnificent architecture.
                  </p>
                  <p className="mt-4">
                    Getting to Rajasthan from Chhattisgarh is incredibly straightforward. You can board a direct train from Bilaspur Junction to Jaipur, or take a quick flight from Raipur. Once you arrive, a dedicated private vehicle will be at your disposal for the entire week, allowing you to explore at your own pace.
                  </p>
                  <p className="mt-4">
                    Over 6 nights and 7 days, you will witness the architectural grandeur of Jaipur's Amber Fort, the imposing blue cityscape beneath Jodhpur's Mehrangarh Fort, and the romantic, shimmering lakes of Udaipur. This package is the ultimate heritage experience for families and couples alike.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (6N/7D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Jaipur</h3>
                    <p className="text-gray-600">
                      Arrive at Jaipur Airport (JAI) or Jaipur Railway Station. Our driver will greet you and transfer you to your hotel. After freshening up, spend the evening visiting the iconic Hawa Mahal (Palace of Winds) for photos, and explore the bustling Johari Bazaar. Return to your hotel for an overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Jaipur Local Sightseeing</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a full day of sightseeing in the Pink City. Start with a visit to the majestic Amer Fort (Amber Fort), enjoying a jeep ride up to the entrance. Later, visit the Jal Mahal (Water Palace), the sprawling City Palace, and Jantar Mantar (the astronomical observatory).
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Jaipur to Jodhpur via Ajmer</h3>
                    <p className="text-gray-600">
                      Check out from your Jaipur hotel and commence your drive to Jodhpur. En route, make a brief stop in Ajmer to visit the Ajmer Sharif Dargah, and Pushkar to see the holy Pushkar Lake and the rare Brahma Temple. Continue your drive to Jodhpur and check into your hotel for the night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Jodhpur Sightseeing & Drive to Udaipur</h3>
                    <p className="text-gray-600">
                      After breakfast, visit the imposing Mehrangarh Fort, one of the largest forts in India, offering spectacular views of the Blue City. Visit Jaswant Thada, the marble cenotaph nearby. In the afternoon, begin your scenic drive to Udaipur. Arrive by evening, check in, and relax.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Udaipur City Tour</h3>
                    <p className="text-gray-600">
                      Explore the "City of Lakes." After breakfast, visit the magnificent City Palace towering over Lake Pichola, the intricately carved Jagdish Temple, and Saheliyon Ki Bari (Garden of the Maidens). In the evening, enjoy a serene boat ride on Lake Pichola, viewing the Jag Mandir and Taj Lake Palace.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Kumbhalgarh Fort Excursion</h3>
                    <p className="text-gray-600">
                      Take a day trip to the mighty Kumbhalgarh Fort, a UNESCO World Heritage site featuring the second longest wall in the world after the Great Wall of China. The drive through the Aravalli hills is breathtaking. Return to Udaipur by late afternoon for some last-minute shopping.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 7: Departure from Udaipur</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in Rajasthan. Based on your departure schedule, our driver will drop you at the Udaipur Airport (UDR) or Railway Station for your journey back to Chhattisgarh.
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
                  A Rajasthan trip involves extensive road travel between cities. It is vital to have a reliable, comfortable vehicle and an experienced driver who knows the highway routes and local restaurants. As your local agent in Bilaspur, we guarantee premium sedans/SUVs and verified drivers, ensuring your family's safety during the 500+ kilometers of inter-city travel on this trip.
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
                    <span>6 Nights / 7 Days</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Best Time: Oct to March</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Jaipur (JAI)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2N Jaipur, 1N Jodhpur, 3N Udaipur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast at 3/4-star Heritage Hotels</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Sedan/SUV for the entire trip</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Toll taxes, parking, and driver allowances</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Pickup at Jaipur & Drop at Udaipur</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Flight/Train tickets from Bilaspur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monument Entry Fees & Guide Charges</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Boat ride tickets in Udaipur</li>
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
