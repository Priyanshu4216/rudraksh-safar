import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToSriLanka = () => {
  const price = 29500;
  
  const faqs = [
    {
      question: "Is there a trusted travel agency in Bilaspur for a SriLanka package?",
      answer: "Yes — Rudraksh Safar has been arranging domestic and international packages including SriLanka from Bilaspur for years, with transparent pricing and direct phone/WhatsApp support throughout your trip. We don't have a local office in SriLanka, but our team (easily accessible via trains to Durg Junction) coordinates your itinerary, hotel, and transport in advance and stays reachable during your trip."
    },
    {
      question: "How do I reach Sri Lanka from Bilaspur?",
      answer: "We book your flights from Swami Vivekananda Airport (Raipur) to Bandaranaike International Airport (CMB) in Colombo, usually connecting through Chennai, Bangalore, or New Delhi."
    },
    {
      question: "Do Indians need a visa for Sri Lanka?",
      answer: "Yes, Indian citizens require an Electronic Travel Authorization (ETA) to enter Sri Lanka. The process is entirely online, and our Bilaspur office processes this for you within 24-48 hours prior to your departure."
    },
    {
      question: "Does the package include the Ramayana Trail?",
      answer: "Yes, our classic 5N/6D package includes key sites from the Ramayana Trail, such as the Seetha Amman Temple in Nuwara Eliya and the Ramboda Hanuman Temple."
    },
    {
      question: "Is Indian vegetarian food available?",
      answer: "Absolutely. Sri Lankan cuisine is very similar to South Indian food, and finding pure vegetarian meals is very easy, especially in Kandy and Nuwara Eliya. We can also pre-book hotels that serve Indian buffets."
    },
    {
      question: "What currency is used in Sri Lanka?",
      answer: "The local currency is the Sri Lankan Rupee (LKR). We recommend carrying US Dollars from India and exchanging them for LKR upon arrival at Colombo airport for the best exchange rates."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Sri Lanka Tour Package from Bilaspur | Ramayana Trail"
        description="Book your Sri Lanka holiday from Bilaspur. Explore Kandy, Nuwara Eliya, and Bentota beaches. Includes ETA visa assistance and custom itineraries."
        canonicalUrl="https://rudrakshsafar.com/bilaspur/srilanka-package"
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
            <span className="text-gray-900 font-medium">Sri Lanka Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1588614959060-4d144f28b2ea?w=1200&auto=format&fit=crop" 
                alt="Sri Lanka Kandy Train Nuwara Eliya" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Sri Lanka from Bilaspur</h1>
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
                    Discover the "Pearl of the Indian Ocean" with our expertly crafted <strong>Sri Lanka Tour Package from Bilaspur</strong>. Sri Lanka offers an incredible diversity of experiences—from sacred Buddhist temples and ancient ruins to misty tea plantations and golden sandy beaches—all within a compact, easily navigable island.
                  </p>
                  <p className="mt-4">
                    For our Bilaspur clients, we handle the entire process from flight bookings out of Raipur to securing your Sri Lankan ETA (Electronic Travel Authorization). You will have a dedicated, English-speaking Sri Lankan chauffeur-guide who stays with you from the moment you land in Colombo.
                  </p>
                  <p className="mt-4">
                    This 5-night, 6-day itinerary is our most popular route, taking you through the cultural capital of Kandy, the cool climate of "Little England" (Nuwara Eliya) which is deeply tied to the Ramayana epic, and ending with relaxation on the southern beaches of Bentota.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (5N/6D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Colombo & Transfer to Kandy</h3>
                    <p className="text-gray-600">
                      Arrive at Bandaranaike International Airport. Your private chauffeur-guide will welcome you and immediately drive you to Kandy (approx. 3.5 hours). En route, stop at the Pinnawala Elephant Orphanage to see baby elephants being bottle-fed and bathing in the river. Arrive in Kandy, check in, and relax.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: Kandy City Tour & Temple of the Tooth</h3>
                    <p className="text-gray-600">
                      Explore the UNESCO World Heritage city of Kandy. Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa), followed by a walk through the beautiful Royal Botanical Gardens in Peradeniya. In the evening, witness a vibrant cultural show featuring traditional Sri Lankan fire and drum dances.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Scenic Drive to Nuwara Eliya</h3>
                    <p className="text-gray-600">
                      After breakfast, begin the scenic, winding drive into the hill country of Nuwara Eliya (Little England). Stop at a tea plantation and factory to taste pure Ceylon tea. Visit the Ramboda Falls and the Shri Bhakta Hanuman Temple. Check into your hotel in Nuwara Eliya and enjoy the cool, misty climate.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Seetha Amman Temple & Transfer to Bentota</h3>
                    <p className="text-gray-600">
                      Visit the Seetha Amman Temple, believed to be the site of Ashok Vatika where Sita was held captive. Later, drive down from the hills towards the tropical coast of Bentota. Arrive by evening, check into your beach resort, and watch the sunset over the Indian Ocean.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Bentota Beach & Madu River Safari</h3>
                    <p className="text-gray-600">
                      Enjoy a relaxed morning on Bentota's golden beaches. Later, take a boat safari on the Madu River, cruising through dense mangrove forests and stopping at a small cinnamon island. Visit a Kosgoda Turtle Hatchery to see baby sea turtles. Return to your resort for your final night.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6: Colombo City Tour & Departure</h3>
                    <p className="text-gray-600">
                      Check out and drive to Colombo (approx. 2 hours). Enjoy a brief city tour covering Galle Face Green, the Independence Memorial Hall, and the Gangaramaya Temple. Do some last-minute shopping before your chauffeur transfers you to the airport for your flight back to Raipur/India.
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
                  In Sri Lanka, your driver acts as your guide for the entire trip. Booking online often means getting a random taxi driver who may not speak good English or understand Indian tourist preferences. Our Bilaspur agency guarantees you an experienced, English-speaking Chauffeur-Guide who understands the significance of the Ramayana sites and knows exactly where to find good vegetarian food.
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
                    <span>Best Time: Dec to April</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Colombo (CMB)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 2 Nights Kandy, 1 Night Nuwara Eliya, 2 Nights Bentota (4-Star Hotels)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner (MAP Plan)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Dedicated Private AC Car with Chauffeur-Guide</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Sri Lanka ETA Visa Processing</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Local SIM card on arrival</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare from Raipur/India</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Entrance Fees to Monuments/Parks (Approx $70-$100 pp)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tips for the Chauffeur-Guide</li>
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
