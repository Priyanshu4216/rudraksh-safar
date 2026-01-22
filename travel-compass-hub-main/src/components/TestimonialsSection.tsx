import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Bhilai, Chhattisgarh',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Rudraksh Safar made our honeymoon in Maldives absolutely magical! Every detail was perfect — from the overwater villa to the private dinner on the beach. Truly a dream come true.',
    trip: 'Maldives Honeymoon',
  },
  {
    id: 2,
    name: 'Rajesh & Family',
    location: 'Raipur, Chhattisgarh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'Our family trip to Thailand was seamlessly organized. The kids loved every moment, and we parents could relax knowing everything was taken care of. Highly recommended!',
    trip: 'Thailand Family Adventure',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    location: 'Charoda, Chhattisgarh',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    text: 'As a solo female traveler, safety was my priority. Rudraksh Safar not only ensured I felt secure throughout my Bali trip but also connected me with amazing local experiences.',
    trip: 'Bali Solo Journey',
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    location: 'Khursipar, Bhilai',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    text: 'The Ladakh adventure was beyond expectations! The team handled all logistics perfectly, letting us focus on the breathtaking landscapes. Already planning our next trip!',
    trip: 'Ladakh Expedition',
  },
];

const PHONE_NUMBER = '919406182174';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: '', location: '', message: '' });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-[200px] font-serif">"</div>
        <div className="absolute bottom-20 right-20 text-[200px] font-serif rotate-180">"</div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Real stories from real travelers who trusted us with their dream vacations.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="glass-card bg-background/10 p-8 md:p-12 text-center">
              {/* Quote */}
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-primary-foreground">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Trip Badge */}
              <div className="inline-block bg-secondary/20 px-4 py-2 rounded-full text-sm font-medium text-secondary mb-6">
                {testimonials[currentIndex].trip}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                />
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-background/10 backdrop-blur flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-background/10 backdrop-blur flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-secondary w-8'
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Submit Feedback Section */}
        <div className="max-w-2xl mx-auto mt-16">
          {!showFeedbackForm ? (
            <div className="text-center">
              <Button
                onClick={() => setShowFeedbackForm(true)}
                className="btn-gold gap-2"
              >
                <Send className="w-4 h-4" />
                Share Your Experience
              </Button>
            </div>
          ) : (
            <div className="glass-card bg-background/10 p-6 md:p-8">
              <h3 className="text-xl font-serif font-bold text-center mb-6">Share Your Feedback</h3>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={feedbackData.name}
                  onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                  className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Input
                  placeholder="Your Location (e.g., Bhilai, Raipur)"
                  value={feedbackData.location}
                  onChange={(e) => setFeedbackData({ ...feedbackData, location: e.target.value })}
                  className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Textarea
                  placeholder="Tell us about your travel experience..."
                  value={feedbackData.message}
                  onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                  className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-[120px]"
                />
                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowFeedbackForm(false)}
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitFeedback}
                    className="btn-gold"
                    disabled={!feedbackData.name || !feedbackData.message}
                  >
                    Submit Feedback
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
