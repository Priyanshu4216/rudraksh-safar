import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToSingapore = () => {
  const price = 48500;
  
  const faqs = [
    {
      question: "How do I travel to Singapore from Bilaspur?",
      answer: "We book your connecting flights from Swami Vivekananda Airport (Raipur) to Changi Airport (SIN) in Singapore. The most common connections are via Kolkata, Chennai, or New Delhi."
    },
    {
      question: "Do Indians need a visa for Singapore?",
      answer: "Yes, an e-Visa is required prior to travel. As your local agent in Bilaspur, we handle the entire Singapore visa application process, ensuring your documents meet the embassy's strict criteria."
    },
    {
      question: "Is Universal Studios included in the package?",
      answer: "Absolutely! Our standard 4N/5D family package includes a full-day pass to Universal Studios Singapore, located on Sentosa Island."
    },
    {
      question: "What currency should I carry?",
      answer: "The local currency is the Singapore Dollar (SGD). Our team in Bilaspur will assist you in procuring SGD or an international forex card before your departure."
    },
    {
      question: "Are Indian vegetarian meals available?",
      answer: "Yes, Singapore has a huge Little India district with countless authentic Indian and pure vegetarian restaurants. We ensure your hotel is located conveniently close to these dining options if requested."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Singapore Tour Package from Bilaspur | Universal Studios"
        description="Book your Singapore family holiday from Bilaspur. Includes Universal Studios, Sentosa Island, Night Safari, and Visa assistance. Get a custom itinerary!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/singapore-package"
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
            <span className="text-gray-900 font-medium">Singapore Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop" 
                alt="Marina Bay Sands Singapore" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Singapore Package from Bilaspur</h1>
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
                    Experience the futuristic marvels and pristine cleanliness of the Lion City with our <strong>Singapore Tour Package from Bilaspur</strong>. Singapore is the ultimate international family destination, offering world-class theme parks, spectacular gardens, and incredible shopping.
                  </p>
                  <p className="mt-4">
                    Our Bilaspur team handles everything from booking your flights out of Raipur to securing your Singapore e-Visa. We ensure your itinerary is perfectly balanced between thrilling activities and relaxed sightseeing.
                  </p>
                  <p className="mt-4">
                    Over 4 nights and 5 days, you will explore the futuristic Supertrees at Gardens by the Bay, enjoy the movie-themed rides at Universal Studios, and take a unique tram ride through the world's first Night Safari. All airport transfers and sightseeing tours are conducted in comfortable, air-conditioned coaches.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (4N/5D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival & Night Safari</h3>
                    <p className="text-gray-600">
                      Arrive at Changi Airport. Our representative will transfer you to your hotel in the city center. In the evening, get ready for the Night Safari—a one-of-a-kind experience where you explore a nocturnal wildlife park on a guided tram ride. Return to the hotel for an overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: City Tour & Gardens by the Bay</h3>
                    <p className="text-gray-600">
                      After breakfast, embark on a half-day city tour. See the Merlion Park, Suntec City, Fountain of Wealth, and Little India. In the late afternoon, visit Gardens by the Bay. Explore the Cloud Forest and Flower Dome conservatories, and watch the mesmerizing Garden Rhapsody light and sound show at the Supertree Grove in the evening.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: Universal Studios Singapore</h3>
                    <p className="text-gray-600">
                      Dedicate the entire day to Universal Studios on Sentosa Island. Experience cutting-edge rides, shows, and attractions based on your favorite blockbuster films like Transformers, Jurassic Park, and The Mummy. Return to your hotel in the evening.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Sentosa Island Tour</h3>
                    <p className="text-gray-600">
                      After a relaxed morning, head back to Sentosa Island in the afternoon. Take the scenic Cable Car ride into the island. Enjoy attractions like the S.E.A. Aquarium (one of the largest in the world) and conclude your day with the spectacular "Wings of Time" laser and fire show by the beach.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5: Departure to India</h3>
                    <p className="text-gray-600">
                      Enjoy your final breakfast in Singapore. If time permits, do some last-minute shopping at Mustafa Centre or Orchard Road. Our driver will transfer you to Changi Airport for your return flight to Raipur. Don't forget to explore the stunning Jewel Changi (indoor waterfall) before you fly!
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
                  Singapore's visa process requires careful documentation and proof of funds. Online portals won't review your documents before submission, leading to high rejection rates. As a physical agency in Bilaspur, we sit with you to verify your bank statements and IT returns, ensuring a smooth, hassle-free visa approval before you spend a single rupee on flights.
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
                    <span>Best Time: Year-round</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: Changi Airport (SIN)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 4 Nights in a 3/4 Star Hotel (e.g., V Hotel Lavender)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Buffet Breakfast</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Return Airport Transfers (SIC)</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Universal Studios Tickets</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Night Safari, Gardens by the Bay, Sentosa</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Flights from Raipur/Kolkata</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Singapore Visa Fee</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Lunches and Dinners</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Personal expenses and tips</li>
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
