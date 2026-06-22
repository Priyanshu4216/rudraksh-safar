import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Info, ChevronRight, MapPin, 
  PlaneTakeoff, Umbrella, Heart, CloudSun, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import SmartImage from '@/components/SmartImage';

// UI Components
import ReadingProgress from '@/components/ui/ReadingProgress';
import TableOfContents, { TocItem } from '@/components/ui/TableOfContents';

// Modular Data Imports
import { phuketQuickFacts, phuketWhyVisit, phuketHiddenGems } from '@/data/thailand/phuket/overview';
import { phuketAttractions } from '@/data/thailand/phuket/attractions';
import { phuketBeaches } from '@/data/thailand/phuket/beaches';
import { phuketWeather } from '@/data/thailand/phuket/weather';
import { phuketItinerary } from '@/data/thailand/phuket/itinerary';
import { phuketVsKrabiTable, phuketVsBaliTable, phuketVsKrabiText, phuketVsBaliText } from '@/data/thailand/phuket/comparisons';
import { phuketFaqs, phuketMistakes } from '@/data/thailand/phuket/faqs';
import { phuketGalleryImages } from '@/data/thailand/phuket/gallery';

// Theme Config
import { destinationThemes } from '@/config/destinationThemes';

const tocItems: TocItem[] = [
  { id: 'overview', label: 'Overview & Vibe' },
  { id: 'weather', label: 'Month-by-Month Weather' },
  { id: 'attractions', label: 'Top Attractions' },
  { id: 'beaches', label: 'Beaches (Couples & Families)' },
  { id: 'mistakes', label: 'First-Timer Mistakes' },
  { id: 'comparisons', label: 'Phuket vs Krabi/Bali' },
  { id: 'itinerary', label: '4-Day Itinerary' },
  { id: 'faq', label: 'Frequently Asked Questions' }
];

const PhuketDestinationAuthority = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const theme = destinationThemes['phuket'];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Intersection Observer for TOC
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    tocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ['0%', '30%']);

  const generateSchema = () => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rudrakshsafar.com/international-tours/thailand/phuket",
        "url": "https://rudrakshsafar.com/international-tours/thailand/phuket",
        "name": "Phuket Travel Guide & Packages | Rudraksh Safar",
        "description": "The ultimate comprehensive guide to Phuket, Thailand. Discover beaches, nightlife, itineraries, and expert travel tips."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
          { "@type": "ListItem", "position": 2, "name": "Thailand Hub", "item": "https://rudrakshsafar.com/destinations/thailand" },
          { "@type": "ListItem", "position": 3, "name": "Phuket", "item": "https://rudrakshsafar.com/international-tours/thailand/phuket" }
        ]
      },
      {
        "@type": "TouristDestination",
        "name": "Phuket",
        "description": "Thailand's largest and most popular island destination known for luxury resorts, massive nightlife, and island-hopping.",
        "image": phuketGalleryImages[0],
        "url": "https://rudrakshsafar.com/international-tours/thailand/phuket"
      },
      {
        "@type": "TravelGuide",
        "name": "Phuket Travel Authority Hub",
        "author": { "@type": "Organization", "name": "Rudraksh Safar" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": phuketFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200">
      <Helmet>
        <title>Phuket Travel Guide | Best Packages & Places to Visit | Rudraksh Safar</title>
        <meta name="description" content="Discover crystal-clear beaches, vibrant nightlife, luxury resorts, and island-hopping adventures in Phuket. The ultimate Phuket travel guide by Rudraksh Safar." />
        <meta property="og:title" content="Phuket Destination Guide - Rudraksh Safar" />
        <meta property="og:image" content={phuketGalleryImages[0]} />
        <script type="application/ld+json">{JSON.stringify(generateSchema())}</script>
      </Helmet>
      
      <Navbar />
      <ReadingProgress colorClass="bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6]" />

      <main className="overflow-hidden">
        {/* HERO */}
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <SmartImage 
              src={phuketGalleryImages[1]} 
              alt="Phuket Luxury View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-sky-900/40 dark:from-slate-950 dark:via-slate-950/80 dark:to-[#0EA5E9]/20" />
          </motion.div>
          
          <div className="container relative z-10 px-4 mt-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex justify-center">
                <Breadcrumbs 
                  items={[
                    { label: 'Home', path: '/' },
                    { label: 'Thailand Hub', path: '/destinations/thailand' },
                    { label: 'Phuket', path: '/international-tours/thailand/phuket' }
                  ]} 
                  className="text-white/80 hover:text-white"
                />
              </motion.div>
              
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-6 shadow-xl text-xs md:text-sm">
                  Thailand's Crown Jewel
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 text-white drop-shadow-2xl">
                  {theme.name}
                </h1>
                <p className="text-xl md:text-2xl text-sky-50 dark:text-sky-100/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                  The ultimate travel authority hub. Discover beaches, nightlife, luxury resorts, and island-hopping adventures.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* QUICK FACTS (No TOC) */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-20">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {phuketQuickFacts.map((fact, i) => (
                <div key={i} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg p-6 rounded-2xl border border-white dark:border-slate-700 shadow-sm text-center">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">{fact.title}</h4>
                  <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN LAYOUT WITH SIDEBAR */}
        <div className="container px-4 py-16 lg:py-24 mx-auto flex flex-col lg:flex-row gap-12 relative">
          
          <TableOfContents items={tocItems} activeId={activeSection} />

          <div className="flex-1 lg:max-w-[800px] xl:max-w-[900px] w-full min-w-0 space-y-32 pb-32">
            
            {/* OVERVIEW */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8">Why Visit Phuket?</h2>
              <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed mb-12">
                {phuketWhyVisit}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                If you seek nature and quiet rather than infrastructure, strongly consider exploring our guide on <Link to="/international-tours/thailand/krabi" className={`${theme.primaryColor} underline`}>Krabi</Link>.
              </p>

              <h3 className="text-2xl font-serif font-bold mb-6 text-[#F97316]">Phuket's Hidden Gems</h3>
              <div className="space-y-6">
                {phuketHiddenGems.map((gem, idx) => (
                  <div key={idx} className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                    <h4 className="font-bold text-lg mb-2">{gem.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{gem.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* WEATHER */}
            <section id="weather" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8 flex items-center gap-4">
                <CloudSun className={theme.primaryColor} /> Month-by-Month Weather
              </h2>
              <div className="space-y-4">
                {phuketWeather.map((w, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                      <h3 className="text-xl font-bold">{w.month}</h3>
                      <span className={`px-4 py-1 rounded-full text-sm font-bold bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400`}>
                        {w.condition} ({w.temp})
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{w.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ATTRACTIONS */}
            <section id="attractions" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8">Top Attractions in Phuket</h2>
              <div className="space-y-8">
                {phuketAttractions.map((attraction, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row">
                    <div className="w-full sm:w-2/5 h-64 sm:h-auto relative">
                      <SmartImage src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 w-full sm:w-3/5 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-3">{attraction.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{attraction.description}</p>
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl text-sm border border-slate-100 dark:border-slate-700">
                        <p className="mb-2"><span className="font-bold">Best Time:</span> {attraction.bestTime}</p>
                        <p><span className="font-bold text-[#F97316]">Pro Tip:</span> {attraction.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* BEACHES */}
            <section id="beaches" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-6">Best Beaches in Phuket</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">{phuketBeaches.intro}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-pink-500 flex items-center gap-2"><Heart /> For Couples</h3>
                  <div className="space-y-6">
                    {phuketBeaches.couples.map((beach, idx) => (
                      <div key={idx} className="bg-pink-50 dark:bg-pink-950/20 p-6 rounded-2xl border border-pink-100 dark:border-pink-900/30">
                        <h4 className="font-bold text-lg mb-2">{beach.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{beach.description}</p>
                        <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">Ideal for: {beach.idealFor}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-[#14B8A6] flex items-center gap-2"><Umbrella /> For Families</h3>
                  <div className="space-y-6">
                    {phuketBeaches.families.map((beach, idx) => (
                      <div key={idx} className="bg-teal-50 dark:bg-teal-950/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-900/30">
                        <h4 className="font-bold text-lg mb-2">{beach.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{beach.description}</p>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Ideal for: {beach.idealFor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FIRST TIMER MISTAKES */}
            <section id="mistakes" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8 flex items-center gap-4 text-red-500">
                <AlertTriangle /> Common First-Timer Mistakes
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {phuketMistakes.map((mistake, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30 border-l-4 border-l-red-500">
                    <h3 className="font-bold text-lg mb-3">{mistake.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{mistake.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* COMPARISONS */}
            <section id="comparisons" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8">Destination Showdowns</h2>
              
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">Phuket vs Krabi</h3>
                <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                          <th className="p-4 font-bold text-slate-500 text-sm">Feature</th>
                          <th className="p-4 font-bold text-[#0EA5E9]">Phuket</th>
                          <th className="p-4 font-bold text-[#10B981]">Krabi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phuketVsKrabiTable.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100 dark:border-slate-800">
                            <td className="p-4 font-semibold text-sm">{row.category}</td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.phuket}</td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.krabi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 whitespace-pre-line">{phuketVsKrabiText}</div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Phuket vs Bali</h3>
                <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                          <th className="p-4 font-bold text-slate-500 text-sm">Feature</th>
                          <th className="p-4 font-bold text-[#0EA5E9]">Phuket</th>
                          <th className="p-4 font-bold text-[#16A34A]">Bali</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phuketVsBaliTable.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100 dark:border-slate-800">
                            <td className="p-4 font-semibold text-sm">{row.category}</td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.phuket}</td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.bali}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 whitespace-pre-line">{phuketVsBaliText}</div>
              </div>
            </section>

            {/* ITINERARY */}
            <section id="itinerary" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-12">The Ultimate 4-Day Itinerary</h2>
              <div className="space-y-8">
                {phuketItinerary.map((day, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${theme.primaryColor.replace('text-', 'bg-')} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
                        {idx + 1}
                      </div>
                      {idx !== phuketItinerary.length - 1 && <div className="w-1 h-full bg-slate-200 dark:bg-slate-800 mt-4 -mb-8" />}
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl flex-1 shadow-sm border border-slate-200 dark:border-slate-800">
                      <h3 className="text-sm font-bold text-[#F97316] uppercase tracking-wider mb-2">{day.day}</h3>
                      <h4 className="text-2xl font-bold mb-4">{day.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-32">
              <h2 className="text-4xl font-serif font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {phuketFaqs.map((faq, idx) => (
                  <details key={idx} className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg">
                      {faq.question}
                      <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* CTA */}
        <section className={`py-24 ${theme.primaryColor.replace('text-', 'bg-')} text-white text-center`}>
          <div className="container px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 flex justify-center items-center gap-4"><ShieldCheck className="w-12 h-12" /> Book with Confidence</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Ready to explore Phuket without the stress? Let Rudraksh Safar handle the logistics, transfers, and exclusive hotel rates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/package/phuket">
                <Button size="lg" className={`w-full sm:w-auto font-bold rounded-full text-lg px-10 h-14 bg-white ${theme.primaryColor} hover:bg-slate-100`}>
                  View Verified Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PhuketDestinationAuthority;
