import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToUttarakhand = () => {
  const price = 16500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for Uttarakhand packages?",
      answer: "Yes — Rudraksh Safar is based on GE Road in Durg-Bhilai (easily accessible via trains to Durg Junction) and has a genuinely staffed support office in Haridwar, so you get real on-ground help during your trip, not just a phone number back home. Our pricing is 100% transparent and synchronized across all platforms."
    },
    {
      question: "Does this Bilaspur travel agency have an office in Uttarakhand?",
      answer: "Yes — we maintain a support office in Haridwar staffed by our own team. It's a support/coordination office rather than a walk-in storefront, but it means real, direct assistance during your trip if anything comes up."
    },
    {
      question: "How do I reach Uttarakhand from Bilaspur?",
      answer: "The easiest way is to take a direct train from Bilaspur Junction to New Delhi (NDLS) or Hazrat Nizamuddin (NZM). From Delhi, we provide a private cab that takes you directly to Nainital or Mussoorie."
    },
    {
      question: "Is this package suitable for families with kids?",
      answer: "Yes, this Nainital and Jim Corbett itinerary is perfectly designed for families. The distances between locations are short, and the Jungle Safari in Corbett is a huge hit with children."
    },
    {
      question: "Are Jim Corbett Safari tickets included?",
      answer: "We arrange the Jungle Safari permits (Jeep/Canter) for you, but they must be booked well in advance (at least 30-45 days) as they are issued by the Forest Department and sell out quickly."
    },
    {
      question: "Does this package cover the Char Dham Yatra?",
      answer: "No, this is a leisure package focusing on Nainital, Ranikhet, and Jim Corbett. If you are looking for the spiritual Char Dham Yatra from Bilaspur, please check our dedicated Char Dham packages."
    },
    {
      question: "What kind of vehicle is provided for the tour?",
      answer: "We provide well-maintained, private AC vehicles like Swift Dzire, Toyota Etios, or Toyota Innova depending on your family size. The vehicle stays with you from Delhi pickup to Delhi drop-off."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Uttarakhand Tour Package from Bilaspur | Nainital & Corbett"
        description="Book your Nainital and Jim Corbett family holiday from Bilaspur. Includes private cab from Delhi, hotel stays, and sightseeing. Get a free quote today!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/uttarakhand-package"
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
            <span className="text-gray-900 font-medium">Uttarakhand Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1585255474641-628d689623e5?w=1200&auto=format&fit=crop" 
                alt="Nainital Naini Lake Uttarakhand" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Uttarakhand from Bilaspur</h1>
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
                    Experience the ultimate family getaway with our <strong>Uttarakhand Tour Package from Bilaspur</strong>. Known as "Devbhoomi" (Land of the Gods), Uttarakhand offers pristine lakes, lush Kumaon hills, and thrilling wildlife experiences that are perfect for a refreshing holiday.
                  </p>
                  <p className="mt-4">
                    For Bilaspur residents, the logistics are incredibly straightforward. Take a comfortable overnight train (like the Chhattisgarh Express or Rajdhani) to Delhi. From the moment you step out of the station/airport in Delhi, our private AC cab takes over, ensuring a smooth drive to the hills.
                  </p>
                  <p className="mt-4">
                    This 5-night, 6-day leisure itinerary covers the beautiful "Lake District" of Nainital, the serene pine-covered hills of Ranikhet, and the thrilling Jim Corbett National Park—India's oldest national park famous for the majestic Bengal Tiger. 
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D Nainital & Corbett)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Delhi & Drive to Nainital</h3>
                    <p className="text-gray-600">
                      Arrive at Delhi Railway Station / Airport from Bilaspur. Our driver will meet you and commence the scenic drive to Nainital (approx. 7-8 hours). Upon arrival, check in to your hotel. In the evening, take a leisurely stroll along the famous Mall Road.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Nainital Local Sightseeing</h3>
                    <p className="text-gray-600">
                      After breakfast, head out to explore Nainital. Visit the Naina Devi Temple, take a serene boat ride on the Naini Lake, and ride the aerial ropeway to Snow View Point for panoramic views of the Himalayas. Later, visit the Eco Cave Gardens and Tiffin Top.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Lake Tour (Bhimtal, Sattal, Naukuchiatal)</h3>
                    <p className="text-gray-600">
                      Dedicate this day to exploring the beautiful lakes surrounding Nainital. Visit Bhimtal (known for its island in the middle of the lake), Sattal (a cluster of seven interconnected freshwater lakes), and Naukuchiatal (the lake with nine corners). Return to Nainital for the night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Nainital to Jim Corbett via Ranikhet</h3>
                    <p className="text-gray-600">
                      Check out from your hotel and drive towards Jim Corbett National Park. En route, make a stop at the beautiful cantonment town of Ranikhet to see the Chaubatia Gardens and the Golf Course. Arrive at your jungle resort in Corbett by evening and relax by the pool.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Jungle Safari in Jim Corbett</h3>
                    <p className="text-gray-600">
                      Wake up early for a thrilling morning Jeep Safari inside the Corbett National Park (subject to advance booking and permits). Look out for tigers, elephants, deer, and exotic bird species. Return to the resort for breakfast. Spend the rest of the day at leisure or visit the Garjiya Devi Temple.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure to Delhi</h3>
                    <p className="text-gray-600">
                      After breakfast, check out from the resort and begin your return journey to Delhi (approx. 5-6 hours). Our driver will drop you at the New Delhi Railway Station or Airport for your onward journey back to Bilaspur.
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
                  Booking hill station cabs online from afar can be risky, with frequent last-minute cancellations or hidden "AC-off in hills" charges. We guarantee a dedicated, well-maintained vehicle with a verified hill-expert driver who stays with your family from Delhi pickup to drop-off. We also pre-book your Jim Corbett safari permits locally, which are notoriously difficult to secure online during peak season.
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
                    <span>Best Time: Oct to June</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Delhi (NDLS / IGI)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Nainital (3 Star Hotel)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in Jim Corbett (Jungle Resort)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Vehicle (Delhi to Delhi)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> All Tolls, Taxes, and Driver Allowances</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Train tickets from Bilaspur to Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Jim Corbett Safari Ticket (Billed at actuals)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Boating charges in Nainital</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches and personal expenses</li>
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
