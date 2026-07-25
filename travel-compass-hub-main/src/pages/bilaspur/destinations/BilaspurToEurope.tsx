import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToEurope = () => {
  const price = 145000;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Europe package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Europe from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Europe, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I travel to Europe from Bilaspur?",
      answer: "We book your international flights primarily from New Delhi (DEL) or Mumbai (BOM) to major European hubs like Paris (CDG) or Zurich (ZRH). We also assist with connecting domestic flights from Raipur (RPR)."
    },
    {
      question: "How does the Schengen Visa process work from Bilaspur?",
      answer: "A Schengen Visa allows entry to 27 European countries. The documentation (bank statements, IT returns, NOCs) is incredibly strict. Our Bilaspur office completely handles your file preparation, books your VFS appointment (usually in New Delhi or Kolkata), and guides you through the biometrics process."
    },
    {
      question: "Is this a group tour or a customized private tour?",
      answer: "We offer both. For first-time travelers to Europe from Bilaspur, our Guided Group Tours are highly recommended as they include an Indian tour manager and Indian meals. For experienced travelers or honeymooners, we offer fully customized FIT (Free Independent Traveler) packages."
    },
    {
      question: "Will we get Indian food in Europe?",
      answer: "Yes, our standard group tours include lunches and dinners at Indian restaurants across Europe. If you choose a customized package, we ensure your hotels are centrally located with easy access to Indian dining options."
    },
    {
      question: "Which countries does the Swiss-Paris package cover?",
      answer: "Our most popular introductory 6N/7D package covers France (Paris) and Switzerland (Zurich, Lucerne, Mt. Titlis/Jungfrau). It's the classic European experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Europe Tour Package from Bilaspur | Swiss & Paris"
        description="Book your Europe holiday from Bilaspur. Explore Switzerland and Paris with Indian meals, expert guides, and complete Schengen Visa assistance."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/europe-package"
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
            <span className="text-gray-900 font-medium">Europe Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1522816423403-22879555cb56?w=1200&auto=format&fit=crop" 
                alt="Eiffel Tower Paris Europe Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Europe (Swiss & Paris) from Bilaspur</h1>
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
                    Fulfill your dream of visiting the most romantic and picturesque continent on earth with our <strong>Europe Tour Package from Bilaspur</strong>. This flagship itinerary focuses on the classic combination of France (Paris) and Switzerland, offering the perfect blend of iconic monuments and breathtaking alpine scenery.
                  </p>
                  <p className="mt-4">
                    The biggest hurdle for Indian travelers visiting Europe is the Schengen Visa. With rejection rates high for poorly prepared files, our Bilaspur office provides meticulous, face-to-face visa guidance. We audit your financials, prepare your itinerary, and ensure your file is flawless before your VFS appointment.
                  </p>
                  <p className="mt-4">
                    Over 6 nights and 7 days, you will ascend the Eiffel Tower, cruise the River Seine, ride the TGV high-speed train into Switzerland, and take a rotating cable car up the snow-capped peak of Mt. Titlis. Indian meals are provided throughout the journey to keep you feeling right at home.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (6N/7D Swiss & Paris)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Paris</h3>
                    <p className="text-gray-600">
                      Arrive at Charles de Gaulle Airport (CDG) in Paris. Our tour manager/driver will meet you and transfer you to your hotel. Spend the rest of the day relaxing and recovering from jet lag. In the evening, enjoy a welcome Indian dinner.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Paris City Tour & Eiffel Tower</h3>
                    <p className="text-gray-600">
                      Experience the magic of Paris. Start with a guided city tour covering the Champs-Élysées, Arc de Triomphe, and the Louvre Museum (outside). Later, ascend the iconic Eiffel Tower (2nd level) for sweeping views of the city. Conclude the day with a romantic glass-canopied cruise on the River Seine.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Disneyland Paris OR Versailles</h3>
                    <p className="text-gray-600">
                      Today, you have a choice. Families can opt for a full-day excursion to Disneyland Paris, enjoying thrilling rides and meeting beloved Disney characters. Alternatively, history buffs can visit the opulent Palace of Versailles. Return to Paris for dinner.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Paris to Switzerland (Scenic Drive/Train)</h3>
                    <p className="text-gray-600">
                      Check out early. Travel from France into the pristine landscapes of Switzerland (either via luxury coach or the TGV high-speed train, depending on the package). Watch the scenery transform from flat countryside to majestic mountains. Arrive in Central Switzerland, check in, and enjoy dinner.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Mt. Titlis & Lucerne</h3>
                    <p className="text-gray-600">
                      Get ready for a day of snow! Drive to Engelberg and take the Rotair (the world's first revolving cable car) up to Mt. Titlis (10,000 ft). Walk the spectacular Cliff Walk suspension bridge. In the afternoon, visit the picturesque lakeside city of Lucerne. See the Lion Monument and the historic Chapel Bridge. Enjoy some free time to shop for Swiss watches and chocolates.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Jungfraujoch (Optional) or Interlaken</h3>
                    <p className="text-gray-600">
                      Enjoy a day at leisure in the beautiful town of Interlaken, nestled between two lakes. Alternatively, take the optional (but highly recommended) excursion to Jungfraujoch—the "Top of Europe". Ride the cogwheel train to the highest railway station in Europe and marvel at the Aletsch Glacier. 
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 7: Departure from Zurich</h3>
                    <p className="text-gray-600">
                      After breakfast, depending on your flight time, you may have a brief orientation tour of Zurich, the financial capital of Switzerland. Our coach will transfer you to Zurich Airport (ZRH) for your return flight to India, bringing your European fairy tale to an end.
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
                  Booking Europe online is risky due to the complexities of the Schengen Visa. If your visa is rejected, non-refundable online bookings can cost you lakhs. At Rudraksh Safar in Bilaspur, our expert visa officers personally audit your financial documents. We provide dummy tickets and verifiable hotel vouchers to ensure a near 100% visa success rate before you make any heavy financial commitments.
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
                    <span>Best Time: April to October</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Paris (CDG)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Paris (3/4 Star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights in Central Switzerland</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Indian Dinners</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Eiffel Tower (Level 2) & Seine Cruise</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Mt. Titlis Cable Car Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Premium Schengen Visa Assistance</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> International Airfare</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Schengen Visa Fee (Paid directly at VFS)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Optional Jungfraujoch Tour</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> City Taxes (Paid at hotels)</li>
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
