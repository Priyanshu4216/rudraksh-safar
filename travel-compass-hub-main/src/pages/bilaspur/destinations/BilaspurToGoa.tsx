import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BilaspurSchema } from '../../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Calendar, Check, X, Clock, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BilaspurToGoa = () => {
  const price = 12999;
  
  const faqs = [
    {
      question: "What is the best way to travel from Bilaspur to Goa?",
      answer: "The fastest and most convenient way is to take a direct or connecting flight from Swami Vivekananda Airport in Raipur to Dabolim Airport (GOI) or Mopa Airport (GOX) in Goa. Alternatively, you can take a train from Bilaspur Junction to Madgaon (MAO) if you prefer a scenic rail journey."
    },
    {
      question: "Is this Goa package suitable for honeymooners from Bilaspur?",
      answer: "Absolutely! We customize this itinerary for honeymooners by including romantic candle-light dinners on the beach, flower-bed decorations, and private transfers from the airport to your resort in North or South Goa."
    },
    {
      question: "Does the package price include flight tickets from Raipur?",
      answer: "The starting price of ₹12,999 is for the land package only (hotel, meals, sightseeing, and local transfers). We can add round-trip flights from Raipur to Goa at the best available rates based on your travel dates."
    },
    {
      question: "What are the best months to visit Goa?",
      answer: "The best time to visit Goa is between mid-November and mid-February when the weather is pleasantly cool and comfortable. However, if you prefer a quiet vacation with lush greenery, the monsoon season (June to September) in South Goa is magical."
    },
    {
      question: "Can I customize the itinerary to stay in South Goa instead of North Goa?",
      answer: "Yes, all our packages are 100% customizable. If you prefer the serene, pristine beaches like Palolem or Agonda, we will book premium resorts in South Goa for your stay."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Goa Package from Bilaspur | Domestic Tour | Rudraksh Safar"
        description="Book the ultimate Goa tour package from Bilaspur. Includes 3N/4D itinerary, beach hopping, water sports, and local transfers. Get a customized quote today!"
        canonicalUrl="https://rudrakshsafar.com/bilaspur/goa-package"
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
            <span className="text-gray-900 font-medium">Goa Package</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop" 
                alt="Goa Beach" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Goa Package from Bilaspur</h1>
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
                    Escape the routine of Bilaspur and immerse yourself in the sun-kissed beaches, vibrant nightlife, and rich Portuguese heritage of Goa. Our exclusive <strong>Goa Package from Bilaspur</strong> is meticulously crafted for travelers from Chhattisgarh who want a hassle-free, premium vacation experience.
                  </p>
                  <p className="mt-4">
                    For your convenience, we recommend departing via a short flight from Swami Vivekananda Airport (Raipur), arriving at Dabolim Airport in Goa within a few hours. Alternatively, if you prefer a leisurely journey, direct trains run from Bilaspur Junction to Madgaon. Once you land, our local representatives will ensure a seamless transfer to your hand-picked resort.
                  </p>
                  <p className="mt-4">
                    Whether you're looking for an action-packed holiday with water sports at Baga Beach, a serene retreat in South Goa's Palolem, or a cultural exploration through Old Goa's majestic churches, Rudraksh Safar ensures every detail is perfect.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary (3N/4D)</h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1: Arrival in Goa & Leisure</h3>
                    <p className="text-gray-600">
                      Upon arrival at Goa airport/railway station, our representative will greet you and transfer you to your pre-booked resort. After checking in and resting, spend the evening exploring the local neighborhood or relaxing by the hotel pool. Enjoy a delicious welcome dinner at the resort.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2: North Goa Sightseeing</h3>
                    <p className="text-gray-600">
                      After a hearty breakfast, embark on a full-day tour of North Goa. Visit the historic Fort Aguada, followed by the lively shores of Calangute, Baga, and Anjuna beaches. Experience thrilling water sports like parasailing and jet-skiing. Return to the hotel for an overnight stay.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3: South Goa & Old Goa</h3>
                    <p className="text-gray-600">
                      Today, discover the serene side of Goa. Visit the UNESCO World Heritage sites in Old Goa, including the Basilica of Bom Jesus and Se Cathedral. In the afternoon, explore the tranquil beaches of Colva or Miramar. End the day with a spectacular sunset cruise on the Mandovi River.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4: Departure to Bilaspur</h3>
                    <p className="text-gray-600">
                      After breakfast, pack your bags with beautiful memories. Check out from the resort and our driver will transfer you to the airport/station for your onward journey back to Chhattisgarh.
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
                  Unlike massive national booking portals, we provide dedicated, local support for travelers from Bilaspur. You can visit our office or call a real human advisor who understands exactly how to plan your connections from Raipur or Bilaspur Junction. We vet every hotel in Goa personally, ensuring you never face unpleasant surprises upon arrival.
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
                    <span>Best Time: Nov to Feb</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pickup: GOI/GOX/MAO</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> 3 Nights stay in 3-star resort</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Daily Breakfast & Dinner</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Private AC Vehicle for transfers</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Mandovi River Cruise ticket</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Airfare / Train fare from Bilaspur</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Water sports charges</li>
                    <li className="flex items-start gap-2 text-sm text-gray-600"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Monument entry fees</li>
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
