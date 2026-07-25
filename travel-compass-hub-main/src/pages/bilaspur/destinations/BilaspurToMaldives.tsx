import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToMaldives = () => {
  const price = 65000;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a Maldives package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including Maldives from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in Maldives, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach the Maldives from Bilaspur?",
      answer: "We book your connecting flights from Swami Vivekananda Airport (Raipur) to Velana International Airport (MLE) in Male, typically routing through Bangalore or Mumbai. From Male, you'll take a speedboat or seaplane to your island resort."
    },
    {
      question: "Do Indians need a visa for the Maldives?",
      answer: "No, the Maldives offers a free 30-day Visa on Arrival for Indian citizens. You only need a valid passport, confirmed hotel booking, and return flight tickets—all of which we prepare for you."
    },
    {
      question: "Is it better to stay in a Water Villa or a Beach Villa?",
      answer: "A Beach Villa offers direct access to the white sands, while a Water Villa gives you direct access to the lagoon. Our most popular Bilaspur honeymoon package includes a split stay: 2 nights in a Beach Villa and 2 nights in a Water Villa."
    },
    {
      question: "What does an All-Inclusive package mean?",
      answer: "An all-inclusive resort package covers your room, all three meals (breakfast, lunch, dinner), unlimited alcoholic and non-alcoholic beverages, and often select non-motorized water sports. It's the best way to control your budget."
    },
    {
      question: "Can vegetarians survive in the Maldives?",
      answer: "Absolutely. Most luxury resorts in the Maldives cater heavily to Indian tourists and have dedicated Indian chefs serving pure vegetarian and Jain food at their buffet restaurants."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Maldives Honeymoon Package from Bilaspur | Water Villas"
        description="Book your luxury Maldives honeymoon package from Bilaspur. Includes water villas, all-inclusive meals, and seaplane transfers. Get a custom quote!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/maldives-package"
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
            <span className="text-gray-900 font-medium">Maldives Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&auto=format&fit=crop" 
                alt="Maldives Water Villas Honeymoon" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Maldives from Bilaspur</h1>
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
                    Experience the pinnacle of tropical luxury with our <strong>Maldives Tour Package from Bilaspur</strong>. Famous for its crystal-clear turquoise waters, vibrant coral reefs, and iconic overwater villas, the Maldives is the ultimate destination for honeymooners and couples seeking a romantic escape.
                  </p>
                  <p className="mt-4">
                    Our travel experts in Bilaspur take the guesswork out of booking a Maldives resort. With hundreds of private island resorts available, we handpick the perfect property based on your budget—whether you want a lively family resort with a kid's club or an adults-only sanctuary.
                  </p>
                  <p className="mt-4">
                    This standard 4-night, 5-day package offers a "Split Stay"—giving you the experience of both a lush Beach Villa and a luxurious Water Villa. We ensure all your flights from Raipur and your speedboat or seaplane transfers are seamlessly connected.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D Split Stay)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Male & Transfer to Resort</h3>
                    <p className="text-gray-600">
                      Arrive at Velana International Airport (MLE) in Male. Complete your hassle-free Visa on Arrival process. A resort representative will meet you and escort you to either a speedboat or a seaplane terminal (depending on your chosen resort's distance). Arrive at your private island resort and check into your Beach Villa. Enjoy a welcome drink and a romantic dinner.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Beach Villa Leisure & Water Sports</h3>
                    <p className="text-gray-600">
                      Wake up to the sound of waves. After a lavish buffet breakfast, the day is yours. Step directly from your villa onto the pristine white sand. You can borrow snorkeling gear from the dive center to explore the house reef, or try kayaking and paddleboarding. Enjoy your all-inclusive meals and evening entertainment.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Upgrade to the Iconic Water Villa</h3>
                    <p className="text-gray-600">
                      After breakfast, it's time to change rooms! The resort staff will transfer your luggage as you check into your stunning Overwater Villa (Water Villa). Spend the day lounging on your private sun deck, taking a dip directly into the lagoon from your stairs, or booking a rejuvenating couples spa treatment. 
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Dolphin Cruise or Sunset Fishing</h3>
                    <p className="text-gray-600">
                      Enjoy your final full day in paradise. Many of our packages include a complimentary excursion, such as a sunset dolphin cruise or a sunset fishing trip. Return to the resort for a special romantic dinner (often setup on the beach for honeymooners) to celebrate your last night.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure to India</h3>
                    <p className="text-gray-600">
                      Enjoy your last breakfast overlooking the Indian Ocean. Check out of your villa. Depending on your flight time, you'll be transferred back to Male Airport via speedboat or seaplane for your return flight to Raipur.
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
                  Booking a Maldives resort online can be confusing due to hidden transfer costs (seaplanes can cost $400+ per person if not included) and complex meal plans (Half Board vs Full Board vs All-Inclusive). We sit down with you in Bilaspur, explain exactly what is included, and ensure there are zero surprise bills when you check out of your resort.
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
                    <span>4 Nights / 5 Days</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Best Time: Nov to April</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Male Airport (MLE)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in a Beach Villa</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights in a Water Villa</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> All-Inclusive Meal Plan (All meals + Drinks)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Return Speedboat / Seaplane Transfers</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Free Visa on Arrival Assistance</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Green Tax Included</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare from Raipur/India</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Motorized water sports (e.g., Jet Ski)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Spa Treatments</li>
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
