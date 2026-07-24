import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToKerala = () => {
  const price = 18500;
  
  const faqs = [
    {
      question: "What is the best way to travel from Bilaspur to Kerala?",
      answer: "The fastest option is to take a flight from Raipur (RPR) to Kochi (COK). Alternatively, if you have time, there are direct trains from Bilaspur Junction (BSP) to Ernakulam Junction (ERS), which takes about 35-40 hours."
    },
    {
      question: "Does the package include a stay in a houseboat in Alleppey?",
      answer: "Yes, our standard 5N/6D Kerala package includes a memorable overnight stay in a traditional premium houseboat in Alleppey, complete with all meals prepared on board."
    },
    {
      question: "Is Munnar included in this package?",
      answer: "Absolutely. The itinerary covers 2 nights in the lush green tea gardens of Munnar, 1 night in the wildlife sanctuary of Thekkady, and 1 night on an Alleppey houseboat."
    },
    {
      question: "Is this package good for honeymooners from Chhattisgarh?",
      answer: "Kerala is one of the top honeymoon destinations. For honeymooners from Bilaspur, we customize this package by adding a candlelight dinner on the houseboat, flower bed decoration in Munnar, and a romantic couple's spa session."
    },
    {
      question: "What language do the local drivers speak?",
      answer: "We provide experienced drivers who can communicate in basic Hindi and fluent English to ensure you face no language barrier during your trip in Kerala."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Kerala Tour Package from Bilaspur | Munnar & Houseboat"
        description="Book your magical Kerala tour package from Bilaspur. Explore Munnar's tea gardens, Thekkady wildlife, and Alleppey houseboats. Custom itineraries available."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/kerala-package"
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
            <span className="text-gray-900 font-medium">Kerala Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop" 
                alt="Kerala Backwaters Houseboat" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Kerala Package from Bilaspur</h1>
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
                    Leave behind the hustle of Chhattisgarh and step into "God's Own Country." Our <strong>Kerala Tour Package from Bilaspur</strong> is carefully curated to give you the perfect blend of misty hill stations, lush wildlife sanctuaries, and serene backwaters.
                  </p>
                  <p className="mt-4">
                    For a comfortable journey, we recommend flying from Raipur to Kochi, though direct trains from Bilaspur to Ernakulam are also available for those who enjoy train travel. Upon arrival in Kochi, our dedicated private cab and driver will be waiting to take you on a breathtaking road trip through the Western Ghats.
                  </p>
                  <p className="mt-4">
                    This 5-night, 6-day itinerary covers the sprawling tea gardens of Munnar, the elephant reserves in Thekkady, and a magical overnight stay on a traditional houseboat in the backwaters of Alleppey.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Kochi & Transfer to Munnar</h3>
                    <p className="text-gray-600">
                      Arrive at Cochin International Airport (COK) or Ernakulam Railway Station. Our driver will greet you and commence your scenic 4-hour drive to Munnar. En route, stop at the beautiful Cheeyappara and Valara Waterfalls. Check in to your resort in Munnar and relax for the evening.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Munnar Local Sightseeing</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a full-day sightseeing tour of Munnar. Visit the Eravikulam National Park (home to the endangered Nilgiri Tahr), the Tea Museum, Mattupetty Dam, and Echo Point. Enjoy the sprawling green tea estates and return to your resort for a peaceful overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Munnar to Thekkady</h3>
                    <p className="text-gray-600">
                      Check out from Munnar and drive to Thekkady (approx 3.5 hours). In the afternoon, enjoy a boat ride on Periyar Lake, where you can spot wild elephants and diverse birdlife. In the evening, you can optionally attend a traditional Kathakali dance performance or Kalaripayattu martial arts show.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Thekkady to Alleppey (Houseboat Stay)</h3>
                    <p className="text-gray-600">
                      After breakfast, drive to Alleppey to board your private premium houseboat at 12:00 PM. Cruise through the tranquil backwaters, palm-fringed canals, and paddy fields. All meals (lunch, dinner, and breakfast) will be freshly prepared and served on board by the houseboat crew. Spend the night on the houseboat.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Alleppey to Kochi & Departure</h3>
                    <p className="text-gray-600">
                      Enjoy breakfast on the houseboat and check out by 9:00 AM. Drive back to Kochi. Depending on your flight/train schedule, you can take a brief half-day tour of Fort Kochi, visiting the Chinese Fishing Nets and Jewish Synagogue, before our driver drops you at the airport/station for your journey back to Chhattisgarh.
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
                  Booking a trip to South India requires ensuring reliable ground transport. We bridge the distance by partnering with the most trusted cab operators in Kerala. When you book from our Bilaspur office, you aren't dealing with an anonymous online form—you have a local agent who guarantees your driver will be waiting for you in Kochi, ensuring your family's safety and comfort every step of the way.
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
                    <span>Best Time: Sep to Mar</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Kochi (COK/ERS)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights stay in Munnar (3-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1 Night stay in Thekkady (3-star)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 1 Night Premium AC Houseboat in Alleppey</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> All meals on Houseboat (Lunch, Dinner, Breakfast)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Sedan/Innova for all transfers</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Train/Flight from Bilaspur/Raipur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Eravikulam National Park Entry Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Periyar Boating Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monument Entry Fees & Tips</li>
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
