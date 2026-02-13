
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Send, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Bhilai, Chhattisgarh',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop', // Resort image
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Rudraksh Safar made our honeymoon in Maldives absolutely magical! Every detail was perfect — from the overwater villa to the private dinner on the beach. Truly a dream come true.',
    trip: 'Maldives Honeymoon',
    rating: 5,
    date: '2024-02-15'
  },
  {
    id: 2,
    name: 'Rajesh & Family',
    location: 'Raipur, Chhattisgarh',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop', // Thailand
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'Our family trip to Thailand was seamlessly organized. The kids loved every moment, and we parents could relax knowing everything was taken care of. Highly recommended!',
    trip: 'Thailand Family Adventure',
    rating: 5,
    date: '2023-12-10'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    location: 'Charoda, Chhattisgarh',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop', // Bali
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    text: 'As a solo female traveler, safety was my priority. Rudraksh Safar not only ensured I felt secure throughout my Bali trip but also connected me with amazing local experiences.',
    trip: 'Bali Solo Journey',
    rating: 5,
    date: '2024-01-20'
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    location: 'Khursipar, Bhilai',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop', // Ladakh
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    text: 'The Ladakh adventure was beyond expectations! The team handled all logistics perfectly, letting us focus on the breathtaking landscapes. Already planning our next trip!',
    trip: 'Ladakh Expedition',
    rating: 5,
    date: '2023-11-05'
  },
];

const PHONE_NUMBER = '919406182174';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: '', location: '', message: '' });

  // Schema Generation
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://rudrakshsafar.com/#travelagency",
    "name": "Rudraksh Safar",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name,
        "homeLocation": {
          "@type": "Place",
          "name": t.location
        }
      },
      "datePublished": t.date,
      "reviewBody": t.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleSubmitFeedback = () => {
    const message = `New Feedback from ${feedbackData.name} (${feedbackData.location}): ${feedbackData.message}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setFeedbackData({ name: '', location: '', message: '' });
    setShowFeedbackForm(false);
  };

  return (
    <section className="section-padding bg-depth-1 relative overflow-hidden text-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-navy-light/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Traveler Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Memories <span className="text-secondary italic">We Crafted</span>
          </h2>
        </div>

        {/* Featured Testimonial - Split Layout */}
        <div className="max-w-6xl mx-auto bg-navy-deep/50 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].trip}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60 lg:opacity-0" />

              {/* Navigation Buttons (Over Image on Mobile) */}
              <div className="absolute bottom-4 right-4 flex gap-2 lg:hidden">
                <Button size="icon" variant="secondary" onClick={prevSlide} className="rounded-full h-10 w-10 bg-white/10 backdrop-blur text-white hover:bg-gold hover:text-navy-deep border-none">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary" onClick={nextSlide} className="rounded-full h-10 w-10 bg-white/10 backdrop-blur text-white hover:bg-gold hover:text-navy-deep border-none">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <Quote className="absolute top-10 left-10 text-gold/10 w-24 h-24 -translate-x-1/2 -translate-y-1/2" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-6 text-gold">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-serif leading-relaxed text-white mb-8 relative z-10">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full border-2 border-gold/30 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-white/60 text-sm mb-1">{testimonials[currentIndex].location}</p>
                      <p className="text-gold text-xs font-bold uppercase tracking-wider">{testimonials[currentIndex].trip}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-3 absolute bottom-12 right-12">
                <Button size="icon" variant="outline" onClick={prevSlide} className="rounded-full h-12 w-12 border-white/10 text-white hover:bg-gold hover:text-navy-deep hover:border-gold transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" onClick={nextSlide} className="rounded-full h-12 w-12 border-white/10 text-white hover:bg-gold hover:text-navy-deep hover:border-gold transition-all">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback CTA/Form */}
        <div className="max-w-2xl mx-auto mt-20">
          <div className="text-center">
            {!showFeedbackForm ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <p className="text-white/60 mb-6">Have you traveled with us recently?</p>
                <Button
                  onClick={() => setShowFeedbackForm(true)}
                  className="btn-gold h-14 px-8 text-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Share Your Story
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-navy-light/50 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">Write a Review</h3>
                <div className="space-y-4 text-left">
                  <Input
                    placeholder="Your Name"
                    value={feedbackData.name}
                    onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                    className="bg-navy-deep border-white/10 text-white h-12"
                  />
                  <Input
                    placeholder="Where are you from?"
                    value={feedbackData.location}
                    onChange={(e) => setFeedbackData({ ...feedbackData, location: e.target.value })}
                    className="bg-navy-deep border-white/10 text-white h-12"
                  />
                  <Textarea
                    placeholder="Tell us about your experience..."
                    value={feedbackData.message}
                    onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                    className="bg-navy-deep border-white/10 text-white min-h-[120px]"
                  />
                  <div className="flex gap-4 justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => setShowFeedbackForm(false)}
                      className="text-white/60 hover:text-white"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmitFeedback}
                      className="btn-gold"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
