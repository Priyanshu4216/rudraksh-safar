import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToManali = () => {
  const price = 11500;
  
  const faqs = [
    {
      question: "What is the best way to travel from Bilaspur to Manali?",
      answer: "The most popular route for travelers from Bilaspur is to take a train to Delhi (New Delhi Railway Station) or Chandigarh, and then board an overnight Volvo bus to Manali. Alternatively, you can fly from Raipur to Delhi or Chandigarh and take a cab or bus from there."
    },
    {
      question: "Are Volvo bus tickets included in this Manali package?",
      answer: "Yes, our standard 5N/6D Manali Volvo package includes semi-sleeper AC Volvo bus tickets from Delhi or Chandigarh to Manali and back."
    },
    {
      question: "Do you provide customized honeymoon packages for Manali?",
      answer: "Absolutely. We specialize in Manali honeymoon packages from Bilaspur. These include romantic room decorations, a candlelight dinner, honeymoon cake, and a private cab for sightseeing."
    },
    {
      question: "Is Rohtang Pass visit included in the package?",
      answer: "A visit to Solang Valley is included. However, trips to Rohtang Pass or Atal Tunnel depend on weather conditions, NGT permits, and are usually arranged at an additional cost on-site."
    },
    {
      question: "Is Manali safe for a family trip in winter?",
      answer: "Yes, Manali is a fantastic winter destination. Just ensure you carry heavy woolens. Our drivers are highly experienced in navigating snow-covered mountain roads."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Manali Tour Package from Bilaspur | Volvo & Cab Packages"
        description="Book the best Manali tour package from Bilaspur, Chhattisgarh. Enjoy snowy mountains, Solang Valley, and comfortable stays. Custom honeymoon and family trips."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/manali-package"
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
            <span className="text-gray-900 font-medium">Manali Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop" 
                alt="Manali Snow Mountains" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Manali Package from Bilaspur</h1>
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
                    Trade the heat of Chhattisgarh for the cool, crisp mountain air of Himachal Pradesh. Our <strong>Manali Tour Package from Bilaspur</strong> is the perfect getaway for families, couples, and thrill-seekers looking to experience snow-capped peaks, gushing rivers, and serene pine forests.
                  </p>
                  <p className="mt-4">
                    For Bilaspur residents, we highly recommend taking a train (like the Chhattisgarh Express or Rajdhani) to New Delhi, from where our package takes over with a comfortable, overnight AC Volvo bus ride directly to Manali. Alternatively, fly from Raipur to Delhi or Chandigarh. 
                  </p>
                  <p className="mt-4">
                    This comprehensive package covers the best of Manali, including the adventurous Solang Valley, the historic Hadimba Temple, and day excursions to Kullu and Naggar Castle. Relax knowing that Rudraksh Safar has managed all your logistics, hotels, and sightseeing.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D Volvo Package)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Delhi to Manali (Overnight Volvo)</h3>
                    <p className="text-gray-600">
                      Arrive in Delhi from Bilaspur (via train/flight). In the evening around 5:30 PM, report at the designated Volvo boarding point in Delhi. Board your AC Semi-Sleeper Volvo for an overnight journey to Manali.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Arrival in Manali & Local Sightseeing</h3>
                    <p className="text-gray-600">
                      Arrive in Manali in the morning. Our driver will pick you up from the bus stand and transfer you to your hotel. After freshening up, proceed for a half-day local city tour. Visit Hadimba Devi Temple, Vashisht Village (Hot Springs), Club House, and the Tibetan Monastery. Spend the evening strolling on the Mall Road.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Solang Valley Excursion</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a full-day excursion to the spectacular Solang Valley. Enjoy thrilling adventure activities like paragliding, zorbing, and ATV rides (activities at your own cost). <i>Note: Rohtang Pass or Atal Tunnel visit is subject to NGT permits and weather, payable directly.</i>
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Kullu & Naggar Castle Tour</h3>
                    <p className="text-gray-600">
                      Today, head towards Kullu. Visit the famous Shawl Factories and Vaishno Mata Temple. If you love adventure, you can try River Rafting in the Beas River. Later, visit the historic Naggar Castle and the Nicholas Roerich Art Gallery. Return to Manali for dinner.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Manali to Delhi (Overnight Volvo)</h3>
                    <p className="text-gray-600">
                      Enjoy a relaxed breakfast. Check out of the hotel by 11:00 AM (you can leave your luggage at the reception). Spend the day shopping for souvenirs on Mall Road. In the evening at 4:30 PM, board your Volvo bus back to Delhi.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Arrival in Delhi & Return to Bilaspur</h3>
                    <p className="text-gray-600">
                      Arrive in Delhi early morning around 7:00 AM. From here, continue your onward journey back to Bilaspur via train or flight.
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
                  Booking a Manali package from a massive online aggregator often leaves you stranded if your train from Bilaspur to Delhi is delayed and you miss your Volvo. With Rudraksh Safar, our local team is actively monitoring your journey. We provide a safety net, 24/7 assistance, and ensure the hotels we book for you in Manali actually match the pictures we show you in our Bilaspur office.
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
                    <span>5 Nights / 6 Days (Inc. Travel)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Best Time: Mar-Jun, Oct-Feb</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Delhi / Chandigarh</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Delhi-Manali-Delhi AC Volvo Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights Hotel Stay in Manali</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private Cab for all sightseeing</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Volvo Bus stand pickup & drop</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Train/Flight from Bilaspur to Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Rohtang Pass / Atal Tunnel permits</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Adventure sports (Rafting, Paragliding)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monument Entry Fees</li>
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
