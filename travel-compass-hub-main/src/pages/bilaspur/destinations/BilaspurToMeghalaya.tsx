import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToMeghalaya = () => {
  const price = 24500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Meghalaya package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Meghalaya from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Meghalaya, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I travel to Meghalaya from Bilaspur?",
      answer: "The fastest route is to fly from Raipur (RPR) to Guwahati (GAU) in Assam. From Guwahati airport, our local representative will pick you up and drive you up into the hills of Meghalaya."
    },
    {
      question: "What is the best time to visit Meghalaya?",
      answer: "October to May is the best time. The post-monsoon months offer lush green landscapes and full waterfalls, while winter provides clear skies. We generally advise avoiding the heavy monsoon season (June to August)."
    },
    {
      question: "Is the trek to the Double Decker Living Root Bridge difficult?",
      answer: "Yes, the trek down to the Double Decker Root Bridge in Nongriat involves descending (and later ascending) around 3,500 steep steps. It requires a good level of fitness. If you prefer, we can include easier single root bridges in your itinerary instead."
    },
    {
      question: "What kind of food is available in Meghalaya?",
      answer: "While local Khasi cuisine is predominantly non-vegetarian, Shillong and Cherrapunji now have excellent North Indian and vegetarian restaurants. We ensure your hotels have good vegetarian options if requested."
    },
    {
      question: "Is this package customizable?",
      answer: "Absolutely! If you want to extend your trip to visit Kaziranga National Park in Assam or explore the crystal clear waters of Dawki in more depth, our Bilaspur office can customize the itinerary perfectly for you."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Meghalaya Tour Package from Bilaspur | Shillong & Dawki"
        description="Book your Meghalaya holiday from Bilaspur. Explore Shillong, Cherrapunji waterfalls, and the crystal clear Dawki river. Custom itineraries available!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/meghalaya-package"
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
            <span className="text-gray-900 font-medium">Meghalaya Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1596700057053-4318728d7a12?w=1200&auto=format&fit=crop" 
                alt="Meghalaya Dawki River Boat" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Meghalaya from Bilaspur</h1>
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
                    Embark on an unforgettable journey to the "Abode of Clouds" with our <strong>Meghalaya Tour Package from Bilaspur</strong>. North East India is fast becoming the top choice for travelers from Chhattisgarh seeking pristine, untouched natural beauty away from crowded tourist circuits.
                  </p>
                  <p className="mt-4">
                    Our team handles your flights from Raipur to Guwahati, where a dedicated local expert driver will meet you for the drive up to Shillong. This 5-night, 6-day adventure covers the musical capital of Shillong, the breathtaking waterfalls of Cherrapunji, and the incredibly clear waters of the Umngot River in Dawki.
                  </p>
                  <p className="mt-4">
                    Experience the magic of the Living Root Bridges—bio-engineering marvels grown by indigenous tribes over decades—and stand at the cleanest village in Asia, Mawlynnong. 
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Guwahati & Drive to Shillong</h3>
                    <p className="text-gray-600">
                      Arrive at Guwahati Airport. Our driver will welcome you and begin the scenic drive to Shillong (approx. 3-4 hours). En route, stop at the beautiful Umiam Lake (Barapani) for a quick boat ride or photo session. Arrive in Shillong, check into your hotel, and spend the evening exploring Police Bazar.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Laitlum Canyons & Shillong Local Tour</h3>
                    <p className="text-gray-600">
                      After breakfast, drive to the breathtaking Laitlum Canyons for panoramic views of the green valleys below. Return to Shillong for local sightseeing: visit the Don Bosco Museum (a fantastic showcase of indigenous cultures), Ward's Lake, and the impressive Elephant Falls.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Shillong to Cherrapunji</h3>
                    <p className="text-gray-600">
                      Check out and drive to Cherrapunji (Sohra), known for being one of the wettest places on earth. The drive is spectacular. Visit the majestic Nohkalikai Falls (India's tallest plunge waterfall), Seven Sisters Falls, and explore the fascinating Mawsmai Cave with its limestone formations. Overnight in Cherrapunji.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Living Root Bridge Trek</h3>
                    <p className="text-gray-600">
                      Today is dedicated to the famous Living Root Bridges. Depending on your fitness level, you can visit the single root bridge (easier access) or take the challenging full-day trek down to the Double Decker Root Bridge in Nongriat village. Return to your hotel in Cherrapunji in the evening to rest.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Mawlynnong & Dawki, then back to Shillong</h3>
                    <p className="text-gray-600">
                      Check out early and drive to Mawlynnong, awarded the title of 'Cleanest Village in Asia'. Walk through the pristine village lanes. Later, drive to Dawki, a town on the India-Bangladesh border. Enjoy a boat ride on the Umngot River, famously known for its crystal clear water where boats appear to float in mid-air. Drive back to Shillong for the night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure via Kamakhya Temple</h3>
                    <p className="text-gray-600">
                      After breakfast, begin your drive down to Guwahati. If time permits before your flight, visit the highly revered Kamakhya Temple atop Nilachal Hill. Transfer to Guwahati airport for your return flight to Raipur.
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
                  Navigating the North East requires experienced local drivers who know the winding hill roads and changing weather patterns. By booking through our Bilaspur office, you get the assurance of a pre-vetted local guide/driver, guaranteed hotel quality in remote areas like Cherrapunji, and 24/7 support from a local team you can trust.
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
                    <span>Best Time: Oct - May</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Guwahati (GAU)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Shillong (3 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in Cherrapunji (3 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private Non-AC Cab (Innova/Xylo) for all transfers</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Dawki River Boat Ride</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Flight tickets from Raipur/Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Entry fees to museums/parks/caves</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Guide charges for Root Bridge trek</li>
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
