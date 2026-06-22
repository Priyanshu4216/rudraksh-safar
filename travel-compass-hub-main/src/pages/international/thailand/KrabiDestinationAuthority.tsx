import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { 
  ArrowRight, Info, CheckCircle2, ChevronRight, MapPin, 
  Sun, Ship, TreePine, PlaneTakeoff, Umbrella, Mountain, 
  Heart, ShoppingBag, Utensils, IndianRupee, ShieldCheck, Star
} from 'lucide-react';
import { 
  krabiQuickFacts, krabiAttractions, krabiItinerary, 
  krabiVsPhuket, krabiBudget, krabiFaqs 
} from '@/data/thailand/krabiAuthorityData';
import SmartImage from '@/components/SmartImage';

const KrabiDestinationAuthority = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const generateSchema = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://rudrakshsafar.com/international-tours/thailand/krabi/#webpage",
          "url": "https://rudrakshsafar.com/international-tours/thailand/krabi",
          "name": "Krabi Destination Guide | Rudraksh Safar",
          "description": "Discover dramatic limestone cliffs, turquoise waters, hidden lagoons, island adventures and unforgettable sunsets in Krabi, Thailand."
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "International Packages", "item": "https://rudrakshsafar.com/international-packages" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/international-tours/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Krabi", "item": "https://rudrakshsafar.com/international-tours/thailand/krabi" }
          ]
        },
        {
          "@type": "TouristDestination",
          "name": "Krabi",
          "description": "Krabi is a scenic coastal province in southern Thailand known for its dramatic limestone karsts, pristine beaches, and island-hopping.",
          "containedInPlace": { "@type": "Country", "name": "Thailand" },
          "touristType": ["Nature Lovers", "Honeymooners", "Families", "Adventure Seekers"]
        },
        {
          "@type": "FAQPage",
          "mainEntity": krabiFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        }
      ]
    };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const galleryImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/960px-Railay_Beach_5.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg/960px-Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG/960px-Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Poda_island_beach.jpg/960px-Poda_island_beach.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Navann_was_born_at_the_park_Oct_2012.jpg/960px-Navann_was_born_at_the_park_Oct_2012.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wat_Tham_Sua_18.jpg/960px-Wat_Tham_Sua_18.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg/960px-Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/960px-KohPhiPhi.JPG"
  ];

  return (
    <div className="min-h-screen bg-background font-sans relative">
      <Helmet>
        <title>Krabi Destination Authority Guide | Best Places & Packages</title>
        <meta name="description" content="Discover dramatic limestone cliffs, turquoise waters, hidden lagoons, and island adventures in Krabi. The ultimate Krabi travel guide by Rudraksh Safar." />
        <meta property="og:title" content="Krabi Destination Guide - Rudraksh Safar" />
        <meta property="og:description" content="The ultimate guide to planning a trip to Krabi, Thailand." />
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/1200px-Railay_Beach_5.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(generateSchema())}</script>
      </Helmet>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />

      <Navbar />

      {/* SECTION 1: ENHANCED HERO */}
      <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/1920px-Railay_Beach_5.jpg" 
            alt="Krabi Limestone Cliffs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950/90" />
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Breadcrumbs 
              items={[
                  { label: 'Home', path: '/' },
                  { label: 'Thailand', path: '/international-tours/thailand' },
                  { label: 'Krabi', path: '/international-tours/thailand/krabi' }
              ]} 
              className="text-white/80 hover:text-white justify-center mb-6 hidden md:flex"
          />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex gap-2 mb-6">
            <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider shadow-lg backdrop-blur-md">NATURE & SERENITY</span>
            <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider shadow-lg backdrop-blur-md">HONEYMOON PARADISE</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-xl text-gradient-gold">
            The Magic of Krabi
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover dramatic limestone cliffs, turquoise waters, hidden lagoons, island adventures and unforgettable sunsets in Thailand's most scenic coastal paradise.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 bg-orange-600 hover:bg-orange-700 shadow-xl shadow-orange-600/20" asChild>
                <Link to="/plan-your-thailand-trip">Customize Krabi Package</Link>
            </Button>
          </motion.div>
        </div>

        {/* Animated Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent pt-32 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
                    <div className="px-4">
                        <div className="text-3xl font-bold text-white mb-1">150+</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Islands Nearby</div>
                    </div>
                    <div className="px-4">
                        <div className="text-3xl font-bold text-white mb-1">KBV</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Int'l Airport</div>
                    </div>
                    <div className="px-4">
                        <div className="text-3xl font-bold text-white mb-1">Top 10</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">For Couples</div>
                    </div>
                    <div className="px-4">
                        <div className="text-3xl font-bold text-white mb-1">4-6</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Days Ideal</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <main className="bg-slate-50 dark:bg-slate-950 text-foreground">
        
        {/* SECTION 2: KRABI IN PICTURES (Masonry Mini) */}
        <section className="py-16 container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, idx) => (
                <motion.div key={idx} variants={fadeInUp} className={`rounded-2xl overflow-hidden shadow-md aspect-square ${idx === 0 || idx === 3 ? 'md:aspect-[3/4]' : 'md:aspect-square'}`}>
                    <SmartImage src={img} alt={`Krabi scenery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 3: QUICK FACTS */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Object.entries(krabiQuickFacts).map(([key, value], idx) => (
                        <div key={key} className="bg-slate-50 dark:bg-slate-950/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg transition-shadow">
                            <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            <p className="font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION 4: WHY VISIT KRABI */}
        <section className="py-20 container">
            <div className="max-w-4xl mx-auto">
                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
                    Why Visit <span className="text-orange-600">Krabi?</span>
                </motion.h2>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                    <p className="lead text-xl text-slate-800 dark:text-slate-200 font-medium">
                        Krabi is not just a destination; it is a visual masterpiece. Unlike the highly urbanized and commercialized streets of Phuket, Krabi has preserved its natural, wild charm. It is the epitome of the quintessential Thai island experience.
                    </p>
                    <p>
                        The province is dominated by dramatic limestone karsts that jut vertically out of the emerald-green Andaman Sea. These spectacular geological formations provide not only a stunning backdrop for photography but also some of the world's most premier rock-climbing routes, specifically around the secluded Railay Beach.
                    </p>
                    <p>
                        For travelers seeking island hopping, Krabi serves as an unparalleled gateway. With over 150 islands dotting its coastline, including the famous Phi Phi Islands and the serene Hong Islands, visitors can spend weeks exploring hidden lagoons, hidden caves, and pristine coral reefs. The iconic Four Islands tour allows you to literally walk across the ocean during low tide via a miraculous sandbar connecting the islands.
                    </p>
                    <p>
                        Beyond the coast, Krabi’s inland territory is incredibly lush. The Thung Teao Forest Natural Park shelters the Emerald Pool—a surreal natural hot spring with vivid green waters—and the therapeutic Klong Thom Hot Springs. For the spiritually inclined and physically adventurous, the Tiger Cave Temple offers an exhausting 1,260-step climb that rewards climbers with a sweeping, panoramic vista of the entire province.
                    </p>
                    <p>
                        Ultimately, Krabi appeals to a diverse range of travelers. Its peaceful, uncrowded resorts are a magnet for honeymooners seeking privacy. Its safe, shallow beaches and lack of a chaotic red-light district make it highly appealing to families. And its sheer geographical diversity ensures that adventure enthusiasts will never experience a dull moment.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* SECTION 5: TOP ATTRACTIONS */}
        <section className="py-24 bg-slate-100 dark:bg-slate-900">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Top Attractions in Krabi</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the incredible natural wonders and cultural sites that make Krabi unique.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {krabiAttractions.map((attraction, idx) => (
                        <motion.div key={attraction.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row group">
                            <div className="md:w-2/5 relative overflow-hidden">
                                <SmartImage src={attraction.image} alt={attraction.name} className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl md:hidden">{attraction.name}</h3>
                            </div>
                            <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 hidden md:block text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">{attraction.name}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">{attraction.description}</p>
                                
                                <div className="mt-auto space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex gap-2">
                                        <Star className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-700 dark:text-slate-300"><span className="font-semibold">Why Visit:</span> {attraction.whyVisit}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-700 dark:text-slate-300"><span className="font-semibold">Tip:</span> {attraction.travelTips}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION 6: BEST TIME TO VISIT */}
        <section className="py-20 container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">Best Time to Visit Krabi</h2>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left border-collapse bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="p-5 font-bold">Season</th>
                            <th className="p-5 font-bold">Months</th>
                            <th className="p-5 font-bold">Weather</th>
                            <th className="p-5 font-bold">Crowds & Prices</th>
                            <th className="p-5 font-bold">Ideal For</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                            <td className="p-5 font-semibold text-green-600">Peak (Dry) Season</td>
                            <td className="p-5">Nov - Feb</td>
                            <td className="p-5">Sunny, cool breeze, 28°C</td>
                            <td className="p-5">Highest crowds, Peak prices</td>
                            <td className="p-5">Island hopping, Scuba, Honeymoons</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                            <td className="p-5 font-semibold text-orange-500">Shoulder (Hot) Season</td>
                            <td className="p-5">Mar - May</td>
                            <td className="p-5">Very hot, 32°C - 35°C</td>
                            <td className="p-5">Moderate crowds, Dropping prices</td>
                            <td className="p-5">Water sports, Budget travelers</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                            <td className="p-5 font-semibold text-blue-500">Monsoon Season</td>
                            <td className="p-5">Jun - Oct</td>
                            <td className="p-5">Heavy rain, rough seas</td>
                            <td className="p-5">Low crowds, Lowest prices</td>
                            <td className="p-5">Inland tours, Spa retreats</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* SECTIONS 7-9: AUDIENCE SPECIFIC GUIDES */}
        <section className="py-20 bg-slate-950 text-white">
            <div className="container">
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Honeymoon */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                        <Heart className="w-12 h-12 text-pink-500 mb-6" />
                        <h3 className="text-2xl font-serif font-bold mb-4">Krabi for Honeymoons</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Krabi is the undisputed king of romantic Thai destinations. Unlike Phuket's massive mega-resorts, Krabi specializes in secluded boutique properties located on private bays. Areas like Tubkaak Beach and Klong Muang offer unmatched sunset views without the crowds. Couples can charter private luxury long-tail boats to the Hong Islands, avoiding group tours completely. Indulge in sunset beachfront dinners, couple's spa treatments at world-class wellness centers, and bioluminescent plankton swimming at night.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Private Pool Villas</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Sunset Dinner Cruises</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Secluded Beaches</li>
                        </ul>
                    </div>

                    {/* Families */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                        <Umbrella className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-serif font-bold mb-4">Krabi for Families</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Krabi is remarkably safe and extremely family-friendly. The waters at Ao Nang and Noppharat Thara are shallow and calm, perfect for young swimmers. The sheer lack of a chaotic red-light district makes walking around the town in the evening relaxing and wholesome. Families can enjoy ethical elephant encounters at the Krabi Elephant Sanctuary, kayaking through dense mangrove forests, and discovering the wildlife at the Khao Phanom Bencha National Park. Indian vegetarian food is highly accessible.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Safe, shallow waters</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Ethical animal sanctuaries</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Indian veg/Jain food available</li>
                        </ul>
                    </div>

                    {/* Adventure */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                        <Mountain className="w-12 h-12 text-orange-500 mb-6" />
                        <h3 className="text-2xl font-serif font-bold mb-4">Krabi for Adventure</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Krabi’s dramatic geography makes it a massive playground for adrenaline seekers. Railay Beach is recognized globally as a premier rock-climbing destination, offering routes for absolute beginners to seasoned pros directly over the ocean. Kayaking through the sheer canyons of Ao Thalane provides close encounters with monkeys and monitor lizards. The region also boasts incredible scuba diving sites near Koh Lanta and Phi Phi, alongside ATV rides through the dense tropical jungle.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> World-class Rock Climbing</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Scuba Diving & Snorkeling</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Mangrove Kayaking</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        {/* SECTION 10: KRABI VS PHUKET */}
        <section className="py-24 container">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-6 text-center">Krabi vs Phuket: Which is Better?</h2>
                <p className="text-center text-muted-foreground mb-12 text-lg">The ultimate dilemma for Indian travelers visiting Southern Thailand.</p>
                
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden mb-12">
                    <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-950 p-6 border-b border-slate-200 dark:border-slate-800 font-bold text-lg">
                        <div>Feature</div>
                        <div className="text-orange-600">Krabi</div>
                        <div className="text-blue-600">Phuket</div>
                    </div>
                    {krabiVsPhuket.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-6 border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{item.feature}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 pr-4">{item.krabi}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{item.phuket}</div>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                    <p>
                        <strong>The Verdict:</strong> Choose <strong>Krabi</strong> if you prioritize natural beauty, dramatic scenery, romantic privacy, and a laid-back vibe. It is significantly better for honeymooners seeking quiet luxury and families wanting a safe, uncrowded environment. 
                    </p>
                    <p>
                        Choose <strong>Phuket</strong> if you want massive beach clubs, world-class nightlife (Bangla Road), luxury shopping malls, and a highly energetic atmosphere.
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 11: HOW TO REACH */}
        <section className="py-20 bg-orange-50 dark:bg-orange-950/10">
            <div className="container max-w-5xl">
                <h2 className="text-3xl font-serif font-bold mb-10 text-center">How to Reach Krabi from India</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <PlaneTakeoff className="w-8 h-8 text-orange-600 mb-4" />
                        <h3 className="text-xl font-bold mb-4">By Air (Via Bangkok)</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            There are currently no direct flights from major Indian cities (Delhi, Mumbai, Bangalore) to Krabi. The most efficient route is to fly directly to Bangkok (Suvarnabhumi BKK or Don Mueang DMK) and take a short 1.5-hour domestic flight to Krabi International Airport (KBV).
                        </p>
                        <p className="text-sm font-semibold">Total Travel Time: Approx 7-9 Hours.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <MapPin className="w-8 h-8 text-orange-600 mb-4" />
                        <h3 className="text-xl font-bold mb-4">By Road / Ferry (From Phuket)</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            Many travelers fly into Phuket International Airport (HKT), spend a few days there, and then travel to Krabi. You can take a scenic speedboat/ferry ride across the Andaman Sea (approx 2 hours) or hire a private taxi to drive the beautiful coastal highway (approx 2.5 - 3 hours).
                        </p>
                        <p className="text-sm font-semibold">Cost: ₹1,500 - ₹3,000 depending on transport type.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 12: 4 DAY ITINERARY */}
        <section className="py-24 container">
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Perfect 4-Day Krabi Itinerary</h2>
            <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-orange-200 dark:border-orange-900/50 ml-6 md:ml-12 space-y-12 pb-8">
                    {krabiItinerary.map((day, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-3.5 top-0 w-7 h-7 bg-orange-600 rounded-full border-4 border-white dark:border-slate-950 shadow-sm" />
                            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800">
                                <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-2 block">{day.day}</span>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{day.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{day.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTIONS 13 & 14: FOOD AND SHOPPING */}
        <section className="py-20 bg-slate-100 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
            <div className="container max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Food */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center text-orange-600">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold">Food Guide</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Ao Nang is a fantastic culinary hub. For Indian travelers, restaurants like <strong>Taj Palace</strong>, <strong>Ali Baba</strong>, and <strong>Bombay Palace</strong> offer exceptional North Indian, South Indian, and Jain vegetarian cuisine. For local flavors, explore the Ao Nang Night Market for authentic Pad Thai, Mango Sticky Rice, and fresh grilled seafood at incredible prices. Halal food is incredibly common due to Krabi's large local Muslim population.
                        </p>
                    </div>

                    {/* Shopping */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold">Shopping Guide</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Krabi is not a luxury shopping destination like Bangkok, but it excels in local markets. The <strong>Krabi Town Walking Street</strong> (open Friday-Sunday evenings) is the best place for authentic Thai souvenirs, handmade jewelry, and street art. The <strong>Ao Nang Walking Street</strong> offers beachwear, generic souvenirs, and electronics. Remember to bargain politely but firmly at the street stalls!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 15: TRAVEL COST GUIDE */}
        <section className="py-24 container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Krabi Travel Cost Guide</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Estimated daily budget per person (excluding flights) to help you plan effectively.</p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {krabiBudget.map((budget, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-orange-500 transition-colors">
                        <div className={`absolute top-0 left-0 w-full h-1 ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-orange-500' : 'bg-purple-500'}`} />
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <IndianRupee className="w-5 h-5" /> {budget.category}
                        </h3>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <div>
                                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Hotel</span>
                                {budget.hotel}
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Food</span>
                                {budget.food}
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Transport</span>
                                {budget.transport}
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Activities</span>
                                {budget.activities}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 16: WHY BOOK KRABI WITH RUDRAKSH SAFAR */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-orange-600/10 blur-3xl rounded-full" />
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <ShieldCheck className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-serif font-bold mb-6">Why Book Krabi with Rudraksh Safar?</h2>
                    <p className="text-lg text-slate-300">We are Central India's leading experts on Thailand travel. From Bhilai and Raipur, we design immaculate Krabi itineraries customized entirely to your preferences.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Pure Veg & Jain Food</h3>
                        <p className="text-sm text-slate-400">We exclusively partner with resorts and restaurants that guarantee authentic Indian dietary requirements.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Zero Visa Stress</h3>
                        <p className="text-sm text-slate-400">Our dedicated visa team handles all documentation, ensuring smooth immigration at Bangkok or Phuket.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Private Transfers</h3>
                        <p className="text-sm text-slate-400">Skip the crowded shared vans. We provide comfortable, private AC vehicles for all your local movements.</p>
                    </div>
                </div>

                <div className="text-center">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-14 px-10 text-lg shadow-xl shadow-orange-600/20" asChild>
                        <Link to="/plan-your-thailand-trip">Get Free Quote Today</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* SECTION 17: IMAGE GALLERY */}
        <section className="py-20 container">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Krabi Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden aspect-square shadow-sm">
                        <SmartImage src={img} alt={`Krabi Visual ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 18: FAQ SECTION */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Frequently Asked Questions</h2>
                <p className="text-center text-muted-foreground mb-12">Everything you need to know before visiting Krabi.</p>
                
                <div className="space-y-4">
                    {krabiFaqs.map((faq, idx) => (
                        <details key={idx} className="group bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 dark:text-white text-lg">
                                {faq.question}
                                <ChevronRight className="w-5 h-5 text-orange-600 group-open:rotate-90 transition-transform" />
                            </summary>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-100 dark:border-slate-800 pt-4">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default KrabiDestinationAuthority;
