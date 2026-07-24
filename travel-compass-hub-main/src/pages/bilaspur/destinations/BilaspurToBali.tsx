import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToBali = () => {
  const price = 34500;
  
  const faqs = [
    {
      question: "How do I travel from Bilaspur to Bali?",
      answer: "We book connecting flights from Swami Vivekananda Airport in Raipur (RPR) to Ngurah Rai International Airport in Bali (DPS). Connections are usually through Kuala Lumpur, Singapore, or Bangkok depending on the airline."
    },
    {
      question: "Is visa on arrival available for Bali?",
      answer: "Yes, Indian passport holders can easily obtain a Visa on Arrival (VoA) for Indonesia. Our team in Bilaspur will assist you with the necessary documentation and e-Customs declaration before you fly."
    },
    {
      question: "Is this package suitable for a honeymoon?",
      answer: "Bali is arguably the most romantic destination in Asia. We customize this package for honeymooners by including private pool villas in Ubud, floating breakfasts, and romantic couple spa treatments."
    },
    {
      question: "What is the Nusa Penida island tour?",
      answer: "Nusa Penida is a stunning island off the coast of Bali. The tour includes a speedboat ride from Sanur to Nusa Penida, where you will visit iconic spots like Kelingking Beach (the T-Rex shaped cliff) and Broken Beach."
    },
    {
      question: "What currency should I use in Bali?",
      answer: "The local currency is Indonesian Rupiah (IDR). We advise carrying US Dollars from Bilaspur/Raipur and exchanging them for IDR at authorized money changers once you arrive in Bali."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Bali Tour Package from Bilaspur | Ubud & Kuta Honeymoon"
        description="Plan your Bali vacation from Bilaspur. Explore the temples of Ubud, beaches of Kuta, and stunning Nusa Penida. Customized honeymoon & family packages."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/bali-package"
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
            <span className="text-gray-900 font-medium">Bali Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop" 
                alt="Bali Gates of Heaven" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Bali Package from Bilaspur</h1>
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
                    Discover the "Island of the Gods" with our exclusive <strong>Bali Tour Package from Bilaspur</strong>. Whether you're looking for a romantic honeymoon amidst the lush rice terraces of Ubud or a fun-filled family vacation on the beaches of Kuta, we curate the perfect Indonesian escape.
                  </p>
                  <p className="mt-4">
                    Our Bilaspur-based team handles your entire itinerary, starting from connecting flight options out of Raipur. This 5-night, 6-day package is a balanced mix of culture, adventure, and relaxation.
                  </p>
                  <p className="mt-4">
                    You'll experience the spiritual tranquility of Tanah Lot temple at sunset, witness an authentic Barong Dance, and take a thrilling speedboat ride to explore the breathtaking cliffs of Nusa Penida. With pre-booked private transfers and verified 4-star hotels, your Bali trip will be absolutely seamless.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D Ubud & Kuta)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Bali & Transfer to Ubud</h3>
                    <p className="text-gray-600">
                      Upon arrival at Ngurah Rai International Airport (DPS) in Denpasar, complete your Visa on Arrival process. Our English-speaking driver will welcome you and transfer you to your hotel/villa in the cultural heart of Bali, Ubud. Rest and recover from your flight.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Kintamani Volcano & Ubud Tour</h3>
                    <p className="text-gray-600">
                      After breakfast, head out for a full-day tour. Watch the traditional Barong and Keris dance. Visit the art villages of Celuk (silversmiths) and Mas (wood carving). Proceed to Kintamani to enjoy panoramic views of Mount Batur volcano and its crater lake. On the way back, visit the sacred Tirta Empul water temple and the Tegalalang Rice Terraces.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Transfer to Kuta/Seminyak & Tanah Lot Sunset</h3>
                    <p className="text-gray-600">
                      Check out from your Ubud hotel and transfer to the vibrant beach town of Kuta or Seminyak. In the late afternoon, drive to the iconic Tanah Lot Temple, perched on a rock formation in the sea. Experience one of Bali's most famous sunsets. Return to your hotel and explore Kuta's nightlife.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: West Nusa Penida Island Tour</h3>
                    <p className="text-gray-600">
                      Early morning transfer to Sanur harbor for a speedboat ride to Nusa Penida. Visit the incredibly photogenic Kelingking Beach, Broken Beach, and Angel's Billabong. Enjoy a local Indonesian lunch. Return to mainland Bali by speedboat in the late afternoon.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Water Sports at Tanjung Benoa & Uluwatu</h3>
                    <p className="text-gray-600">
                      Head to Tanjung Benoa beach for thrilling water sports. A complimentary Banana Boat ride is included. In the afternoon, visit the clifftop Uluwatu Temple. Enjoy the mesmerizing Kecak Fire Dance performance as the sun sets over the Indian Ocean.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure back to India</h3>
                    <p className="text-gray-600">
                      Enjoy breakfast and relax. Depending on your flight time, our driver will transfer you to the Denpasar airport for your return journey to Raipur, bringing an end to a magical Balinese holiday.
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
                  International travel should be relaxing, not a logistics nightmare. When you book your Bali package through Rudraksh Safar in Bilaspur, we handle the forex guidance, visa documentation, and connecting flight coordination from Raipur. You get a dedicated local contact number, ensuring you have reliable support from someone in your own city throughout your trip.
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
                    <span>Best Time: Apr to Oct</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Bali Airport (DPS)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in Ubud (4-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Kuta/Seminyak (4-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Full day Kintamani & Ubud Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Nusa Penida Island Tour with Lunch</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Vehicle & English speaking driver</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> International Airfare from Raipur/Delhi</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Indonesia Visa on Arrival Fee</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Bali Tourist Tax (Payable locally)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Additional water sports at Tanjung Benoa</li>
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
