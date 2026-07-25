import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BilaspurSchema } from '../../components/seo/BilaspurSchema';
import { MapPin, Phone, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topDestinations = [
  { name: 'Goa', slug: '../domestic-tours/goa-from-bilaspur', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop' },
  { name: 'Kashmir', slug: '../domestic-tours/kashmir-from-bilaspur', img: 'https://images.unsplash.com/photo-1598091383021-1437651cfa36?w=800&auto=format&fit=crop' },
  { name: 'Manali', slug: '../domestic-tours/manali-from-bilaspur', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop' },
  { name: 'Thailand', slug: '../international-tours/thailand-from-bilaspur', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop' },
  { name: 'Dubai', slug: '../international-tours/dubai-from-bilaspur', img: 'https://images.unsplash.com/photo-1512453979436-5a5330114972?w=800&auto=format&fit=crop' },
  { name: 'Kerala', slug: '../domestic-tours/kerala-from-bilaspur', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop' },
  { name: 'Andaman', slug: '../domestic-tours/andaman-from-bilaspur', img: 'https://images.unsplash.com/photo-1582236528760-449e79391ab6?w=800&auto=format&fit=crop' },
  { name: 'Bali', slug: '../international-tours/bali-from-bilaspur', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop' },
  { name: 'Shimla', slug: '../domestic-tours/shimla-from-bilaspur', img: 'https://images.unsplash.com/photo-1626245353132-094d2d46e379?w=800&auto=format&fit=crop' },
  { name: 'Ladakh', slug: '../domestic-tours/ladakh-from-bilaspur', img: 'https://images.unsplash.com/photo-1626601334997-6a4a689b6b72?w=800&auto=format&fit=crop' },
  { name: 'Rajasthan', slug: '../domestic-tours/rajasthan-from-bilaspur', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop' },
  { name: 'Singapore', slug: '../international-tours/singapore-from-bilaspur', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop' },
  { name: 'Malaysia', slug: '../international-tours/malaysia-from-bilaspur', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?w=800&auto=format&fit=crop' },
  { name: 'Vietnam', slug: '../international-tours/vietnam-from-bilaspur', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop' },
  { name: 'Darjeeling', slug: '../domestic-tours/darjeeling-from-bilaspur', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800&auto=format&fit=crop' },
  { name: 'Uttarakhand', slug: '../domestic-tours/uttarakhand-from-bilaspur', img: 'https://images.unsplash.com/photo-1585255474641-628d689623e5?w=800&auto=format&fit=crop' },
  { name: 'Meghalaya', slug: '../domestic-tours/meghalaya-from-bilaspur', img: 'https://images.unsplash.com/photo-1596700057053-4318728d7a12?w=800&auto=format&fit=crop' },
  { name: 'Maldives', slug: '../international-tours/maldives-from-bilaspur', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop' },
  { name: 'Europe', slug: '../international-tours/europe-from-bilaspur', img: 'https://images.unsplash.com/photo-1522816423403-22879555cb56?w=800&auto=format&fit=crop' },
  { name: 'Sri Lanka', slug: '../international-tours/srilanka-from-bilaspur', img: 'https://images.unsplash.com/photo-1588614959060-4d144f28b2ea?w=800&auto=format&fit=crop' },
];


export const BilaspurHub = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <BilaspurSchema 
        title="Travel Agency in Bilaspur | Best Tour Operator | Rudraksh Safar"
        description="Looking for the best travel agency in Bilaspur? Rudraksh Safar offers customized domestic and international tour packages, flight bookings, and visa assistance."
        canonicalUrl="https://rudrakshsafar.com/bilaspur"
        faqs={[
          {
            question: "Where is Rudraksh Safar located in Bilaspur?",
            answer: "We are a premier travel agency serving Bilaspur, Chhattisgarh. Our local travel experts specialize in crafting customized tour packages for residents of Bilaspur, Bhilai, Durg, and Raipur."
          },
          {
            question: "What types of tour packages do you offer from Bilaspur?",
            answer: "We offer a wide range of packages including honeymoon, family, adventure, pilgrimage, and group tours to destinations like Goa, Kashmir, Dubai, Thailand, and Bali."
          }
        ]}
      />
      
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl overflow-hidden shadow-2xl mb-16 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 px-8 py-16 md:py-24 md:px-16 text-white max-w-4xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold tracking-wider uppercase mb-6">
                Serving Bilaspur, Chhattisgarh
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Your Trusted Travel Agency in Bilaspur
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                From romantic honeymoons in Bali to family adventures in Kashmir, we craft perfect itineraries for Bilaspur residents with transparent local pricing and real human support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:9203650311" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call: 9203650311
                </a>
                <a href="https://wa.me/919203650311" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#128C7E] transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hyper-Local Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand flight connections from Raipur (Swami Vivekananda Airport) and train routes from Bilaspur Junction better than generic national portals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Itineraries</h3>
              <p className="text-gray-600 leading-relaxed">
                No cookie-cutter trips. We tailor every hotel, transfer, and sightseeing tour to your family's specific needs and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Human Agents</h3>
              <p className="text-gray-600 leading-relaxed">
                Skip the chatbots and call centers. When you book with Rudraksh Safar, you get a dedicated local expert available 24/7 during your trip.
              </p>
            </div>
          </div>

          {/* Top Packages from Bilaspur */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Top Tour Packages from Bilaspur</h2>
            <p className="text-gray-500 mb-8 text-lg">Curated domestic and international trips with departures optimized for Chhattisgarh residents.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topDestinations.map(dest => (
                <Link to={`/bilaspur/${dest.slug}`} key={dest.slug} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block">
                  <div className="aspect-[4/5] w-full">
                    <img src={dest.img} alt={`${dest.name} Tour Package from Bilaspur`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                    <p className="text-blue-200 text-sm font-medium flex items-center gap-1 group-hover:text-white transition-colors">
                      View Packages <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
