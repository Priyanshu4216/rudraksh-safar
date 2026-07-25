import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToVietnam = () => {
  const price = 35500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Vietnam package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Vietnam from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Vietnam, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach Vietnam from Bilaspur?",
      answer: "The best route is to fly from Swami Vivekananda Airport (Raipur) to Kolkata (CCU) or New Delhi (DEL), and then take a direct flight (e.g., VietJet) to Hanoi (HAN) or Ho Chi Minh City (SGN)."
    },
    {
      question: "Do Indians need a visa for Vietnam?",
      answer: "Yes, Indian citizens require an e-Visa to enter Vietnam. Our Bilaspur office will process your e-Visa application, which typically takes 3-5 working days, ensuring a smooth entry."
    },
    {
      question: "Is the Halong Bay cruise included?",
      answer: "Yes, our classic Northern Vietnam itinerary includes a mesmerizing day-cruise (or optional overnight cruise) through the emerald waters and limestone islands of Halong Bay, complete with seafood lunch."
    },
    {
      question: "What is the food situation for vegetarians in Vietnam?",
      answer: "While Vietnamese cuisine is heavily meat and seafood-based, major cities like Hanoi and Da Nang have seen a surge in excellent Indian restaurants. We will guide you on where to find pure vegetarian/Jain food during your trip."
    },
    {
      question: "Which parts of Vietnam does this package cover?",
      answer: "Our standard 5N/6D package covers Northern Vietnam (Hanoi, Ninh Binh, Halong Bay). We also offer customizable Central (Da Nang, Hoi An) and Southern (Ho Chi Minh City, Mekong Delta) itineraries based on your preference."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Vietnam Tour Package from Bilaspur | Hanoi & Halong Bay"
        description="Book your Vietnam holiday package from Bilaspur. Explore Hanoi, cruise Halong Bay, and visit Ninh Binh. Includes e-Visa assistance and flights guidance."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/vietnam-package"
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
            <span className="text-gray-900 font-medium">Vietnam Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&auto=format&fit=crop" 
                alt="Halong Bay Vietnam Cruise" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Vietnam Package from Bilaspur</h1>
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
                    Vietnam is rapidly becoming the most sought-after international destination for Indian travelers, offering an unbeatable combination of rich history, stunning natural landscapes, and incredible affordability. With our <strong>Vietnam Tour Package from Bilaspur</strong>, you can explore Southeast Asia's rising star with zero hassle.
                  </p>
                  <p className="mt-4">
                    Our Bilaspur team maps out the most efficient flight routes from Raipur (connecting via Kolkata or Delhi) and secures your Vietnamese e-Visa well in advance. This 5-night, 6-day itinerary focuses on the majestic North.
                  </p>
                  <p className="mt-4">
                    You will explore the French-colonial architecture and bustling Old Quarter of Hanoi, take a traditional sampan boat ride through the limestone caves of Trang An (Ninh Binh), and embark on an unforgettable luxury cruise through the UNESCO World Heritage site of Halong Bay.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D Northern Vietnam)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Hanoi</h3>
                    <p className="text-gray-600">
                      Arrive at Noi Bai International Airport (HAN) in Hanoi. Our English-speaking driver will welcome you and transfer you to your hotel in the city center. Spend the evening exploring the vibrant streets of the Old Quarter or taking a relaxing walk around Hoan Kiem Lake.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Hanoi City Tour</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a full-day tour of Vietnam's capital. Visit the Ho Chi Minh Mausoleum complex, the unique One Pillar Pagoda, and the Temple of Literature (Vietnam's first university). In the afternoon, visit the Ethnology Museum and enjoy a traditional Water Puppet Show in the evening.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Day Trip to Ninh Binh (Hoa Lu & Trang An)</h3>
                    <p className="text-gray-600">
                      Drive to Ninh Binh province (approx. 2.5 hours), often called "Halong Bay on land." Visit Hoa Lu, the ancient capital of Vietnam. After lunch, enjoy a spectacular 2-hour sampan boat ride through the Trang An Grottoes, passing through river caves and majestic limestone karst peaks. Return to Hanoi in the late afternoon.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Hanoi to Halong Bay Cruise</h3>
                    <p className="text-gray-600">
                      Check out from your Hanoi hotel and take a scenic drive to Halong Bay. Board your premium cruise ship around noon. Enjoy a welcome drink and a seafood/vegetarian lunch as you cruise past thousands of limestone islands. In the afternoon, visit Surprise Cave (Hang Sung Sot) or go kayaking. Enjoy dinner on board and spend the night on the cruise.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Halong Bay to Hanoi</h3>
                    <p className="text-gray-600">
                      Start your day early with a Tai Chi session on the sundeck as the sun rises over the bay. Visit Titov Island for panoramic views. Enjoy brunch on the cruise as it slowly heads back to the harbor. Disembark around noon and transfer back to Hanoi for your final night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure</h3>
                    <p className="text-gray-600">
                      Enjoy breakfast at your hotel. You have free time for last-minute shopping at Dong Xuan Market. Our driver will transfer you to the Hanoi airport for your return flight to India, bringing your Vietnamese adventure to a close.
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
                  Vietnam has emerged as a major destination, but the language barrier and dietary concerns (especially for vegetarians) can be challenging if you travel unguided. By booking through Rudraksh Safar in Bilaspur, we pre-arrange English-speaking local guides, ensure your Halong Bay cruise understands your dietary needs, and provide 24/7 WhatsApp support throughout your journey.
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
                    <span>Best Time: Oct to April</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Hanoi (HAN)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 4 Nights Hotel in Hanoi (3/4 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1 Night on Premium Halong Bay Cruise</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & all meals on Cruise</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Full day Hanoi City Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Full day Ninh Binh (Trang An) Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> English-speaking guides & AC transfers</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare from Raipur/Kolkata/Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Vietnam e-Visa fee (approx $25)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches & Dinners in Hanoi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tips for drivers and guides</li>
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
