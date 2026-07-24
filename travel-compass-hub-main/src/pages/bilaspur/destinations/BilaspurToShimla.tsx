import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToShimla = () => {
  const price = 10500;
  
  const faqs = [
    {
      question: "How do I reach Shimla from Bilaspur?",
      answer: "We recommend taking a train from Bilaspur to New Delhi, and then boarding an overnight AC Volvo bus to Shimla. Alternatively, you can take a train to Kalka and experience the famous Kalka-Shimla Toy Train ride."
    },
    {
      question: "Is the Kalka-Shimla Toy Train included in the package?",
      answer: "The toy train is an optional add-on. Since tickets sell out months in advance, we recommend booking early. If you wish to include it, our team will secure the tickets for you."
    },
    {
      question: "What is the best time to visit Shimla from Chhattisgarh?",
      answer: "Summer (March to June) is ideal for escaping the heat of Chhattisgarh. However, if you want to experience snowfall in Kufri, plan your trip between December and February."
    },
    {
      question: "Can this package be combined with Manali?",
      answer: "Yes, our Shimla-Manali combo is one of our most popular packages. We provide a private cab transfer from Shimla to Manali, covering Kullu and Manikaran along the way."
    },
    {
      question: "Is Shimla suitable for senior citizens?",
      answer: "Yes, though the Mall Road involves some walking. We ensure hotels booked for senior citizens have elevator access and minimal stairs, providing a comfortable stay."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Shimla Tour Package from Bilaspur | Volvo & Cab Packages"
        description="Book your Shimla holiday package from Bilaspur, Chhattisgarh. Enjoy Mall Road, Kufri snow point, and comfortable Volvo transfers. Get a custom quote!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/shimla-package"
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
            <span className="text-gray-900 font-medium">Shimla Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1626245353132-094d2d46e379?w=1200&auto=format&fit=crop" 
                alt="Shimla Ridge Snow" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Shimla Package from Bilaspur</h1>
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
                    Experience the timeless charm of the "Queen of Hills" with our <strong>Shimla Tour Package from Bilaspur</strong>. This package is ideal for families and couples seeking a relaxing retreat away from the humid plains of Chhattisgarh.
                  </p>
                  <p className="mt-4">
                    Your journey begins with a train or flight to New Delhi. From there, we arrange a comfortable overnight AC Volvo bus that takes you directly to Shimla. You'll wake up to crisp mountain air and panoramic views of the Himalayas. For train enthusiasts, we can customize your itinerary to include the UNESCO heritage Kalka-Shimla toy train ride.
                  </p>
                  <p className="mt-4">
                    Our 3-night stay covers the colonial heritage of Mall Road, the spiritual tranquility of Jakhu Temple, and a thrilling day trip to Kufri, famous for its yak rides and winter sports. We ensure pre-booked, quality hotels so your mountain vacation is entirely stress-free.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (3N/4D Volvo Package)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Delhi to Shimla (Overnight Volvo)</h3>
                    <p className="text-gray-600">
                      Board your AC Volvo bus from Delhi in the evening (usually around 8:00 PM). Get comfortable as you begin your overnight journey to the beautiful hills of Himachal Pradesh.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Arrival in Shimla & Local Sightseeing</h3>
                    <p className="text-gray-600">
                      Arrive in Shimla in the morning. Our local driver will transfer you to your pre-booked hotel. After resting, embark on a half-day local tour. Visit the Vice Regal Lodge (Indian Institute of Advanced Study) and Sankat Mochan Temple. In the evening, stroll along the famous Mall Road, visit The Ridge, and see the Christ Church.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Excursion to Kufri & Jakhu Temple</h3>
                    <p className="text-gray-600">
                      After breakfast, drive to Kufri, a picturesque hill station known for its snow activities (in winter) and Himalayan nature park. Enjoy a horse or yak ride to Mahasu Peak. On the way back to Shimla, take the ropeway (tickets extra) to the highest point in Shimla to visit the Jakhu Temple, dedicated to Lord Hanuman. 
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Departure to Delhi</h3>
                    <p className="text-gray-600">
                      Enjoy a relaxed breakfast and check out of your hotel by 11:00 AM. You can spend a few more hours shopping on Mall Road for Himachali shawls and handicrafts. In the evening (around 8:00 PM), board your Volvo bus back to Delhi.
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
                  Shimla can get extremely crowded during peak seasons, and many budget hotels lack proper heating or are located far from the city center, requiring steep walks. Our Bilaspur travel experts personally vet the hotels we offer. We ensure you get properties with excellent views, proper amenities, and easy access, preventing any unpleasant surprises during your trip.
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
                    <span>Best Time: Mar-Jun, Dec-Feb</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Delhi ISBT/Majnu Ka Tilla</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Delhi-Shimla-Delhi AC Volvo Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights Hotel Stay in Shimla</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private Cab for Kufri & Local Sightseeing</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Volvo Stand Pickup & Drop</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Train/Flight from Bilaspur to Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Kufri Horse/Yak rides</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Jakhu Temple Ropeway tickets</li>
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
