import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToDarjeeling = () => {
  const price = 21500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Darjeeling package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Darjeeling from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Darjeeling, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach Darjeeling from Bilaspur?",
      answer: "The most convenient way is to take a direct train from Bilaspur Junction to New Jalpaiguri (NJP) station, or fly from Raipur (RPR) to Bagdogra Airport (IXB) via Kolkata. We arrange your pickup from either point."
    },
    {
      question: "What is the best time to visit Darjeeling and Sikkim?",
      answer: "March to May (Spring) and October to mid-December (Autumn) offer the clearest views of the Kanchenjunga and pleasant weather, making it ideal for families from Chhattisgarh looking to escape the heat."
    },
    {
      question: "Are Nathula Pass permits included in the package?",
      answer: "Yes, if your itinerary includes Gangtok (Sikkim), we handle the complex permit process for Nathula Pass, Tsomgo Lake, and Baba Mandir on your behalf. Just provide your IDs to our Bilaspur office in advance."
    },
    {
      question: "Is Darjeeling suitable for senior citizens?",
      answer: "Yes, but it involves some walking on inclines. We can customize the tour with easily accessible hotels and minimal walking for elderly travelers. Our private cabs drop you as close to the viewpoints as permitted."
    },
    {
      question: "Can I combine Darjeeling with Gangtok?",
      answer: "Absolutely. Our most popular North East package for Bilaspur residents is the 5N/6D Darjeeling and Gangtok combo, offering the perfect blend of tea gardens and high-altitude Himalayan lakes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Darjeeling & Sikkim Tour Package from Bilaspur | Best Price"
        description="Book your Darjeeling and Gangtok holiday from Bilaspur. Includes Tiger Hill sunrise, tea gardens, and Nathula Pass permits. Custom itineraries available!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/darjeeling-package"
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
            <span className="text-gray-900 font-medium">Darjeeling Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1200&auto=format&fit=crop" 
                alt="Darjeeling Tea Gardens and Kanchenjunga" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Darjeeling & Gangtok from Bilaspur</h1>
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
                    Escape the heat of Central India and journey to the "Queen of the Hills" with our specially curated <strong>Darjeeling and Sikkim Tour Package from Bilaspur</strong>. This region offers a magical combination of emerald green tea estates, colonial-era toy trains, and the majestic snow-capped peaks of the Himalayas.
                  </p>
                  <p className="mt-4">
                    Our team at Rudraksh Safar ensures a seamless journey starting right from Bilaspur. Whether you choose to travel by train to NJP or fly from Raipur to Bagdogra, our dedicated private cabs will be waiting to transport you through the winding mountain roads. 
                  </p>
                  <p className="mt-4">
                    This 5-night, 6-day itinerary covers the best of Darjeeling and the capital of Sikkim, Gangtok. From the breathtaking sunrise over Mt. Kanchenjunga at Tiger Hill to the pristine, high-altitude Tsomgo Lake near the Indo-China border, every detail and permit is handled by our experts.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival at NJP / Bagdogra & Transfer to Gangtok</h3>
                    <p className="text-gray-600">
                      Arrive at NJP Railway Station or Bagdogra Airport. Our local representative will welcome you and drive you to Gangtok (approx. 4-5 hours), the vibrant capital of Sikkim. Check in to your hotel and spend the evening strolling along the famous MG Marg, enjoying the cool mountain air.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Tsomgo Lake & Baba Mandir Excursion</h3>
                    <p className="text-gray-600">
                      After an early breakfast, embark on an excursion to the beautiful, glacially-fed Tsomgo Lake (12,400 ft) and the sacred Baba Mandir (13,200 ft). (Optional: Nathula Pass tour can be arranged subject to permit availability). Return to Gangtok in the late afternoon.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Gangtok Half-Day Tour & Transfer to Darjeeling</h3>
                    <p className="text-gray-600">
                      Enjoy a half-day sightseeing tour of Gangtok covering the Do Drul Chorten, Namgyal Institute of Tibetology, and the Ropeway. After lunch, begin your scenic drive to Darjeeling (approx. 4 hours), winding through lush tea gardens. Check in to your Darjeeling hotel.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Darjeeling Sunrise & City Tour</h3>
                    <p className="text-gray-600">
                      Wake up at 4:00 AM and drive to Tiger Hill to witness a spectacular sunrise over Mt. Kanchenjunga (the world's third highest peak). On the way back, visit the Ghoom Monastery and Batasia Loop. Post breakfast, visit the Himalayan Mountaineering Institute, PNZ Zoological Park, and the Japanese Temple.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Mirik Excursion</h3>
                    <p className="text-gray-600">
                      Take a day trip to Mirik, a serene town nestled near the Nepal border. Enjoy boating on the picturesque Sumendu Lake, surrounded by pine forests. Stop at the Nepal Border (Pashupati Market) for some unique shopping. Return to Darjeeling for your final night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Departure</h3>
                    <p className="text-gray-600">
                      After breakfast, savor your last cup of authentic Darjeeling tea. Our driver will transfer you down the hills back to NJP Railway Station or Bagdogra Airport for your onward journey back to Bilaspur/Raipur.
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
                  Travel in Sikkim requires strict adherence to inner-line permits, and navigating local taxi syndicates (where outside vehicles aren't allowed at certain points) can be stressful if booked online unguided. As a local agency in Bilaspur, we handle all permit logistics in advance and provide you with verified, polite local drivers who understand the terrain, ensuring a safe and hassle-free family trip.
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
                    <span>Best Time: Mar-May, Oct-Dec</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Bagdogra (IXB) / NJP</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in Gangtok (3 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Darjeeling (3 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner (MAP)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private Non-AC Cab (Xylo/Innova) for sightseeing</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Tsomgo Lake & Baba Mandir Permits</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Tiger Hill Sunrise Tour</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Train/Flight tickets from Bilaspur/Raipur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Nathula Pass Permit (Subject to availability)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Entry fees to monuments/parks</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches</li>
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
