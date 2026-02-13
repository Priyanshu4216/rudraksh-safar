
import { useState } from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';
import CustomerGallery from './CustomerGallery';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useBotProtection } from '@/hooks/useBotProtection';
import { contactFormSchema, sanitizeUrlParam } from '@/lib/validation';
import { motion } from 'framer-motion';

const PHONE_NUMBER = '919406182174';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Lounge',
    details: ['GE Road, In Front of Petrol Pump', 'Bhilai 3, Chhattisgarh 490021'],
  },
  {
    icon: Phone,
    title: 'Talk to an Expert',
    details: ['+91 94061 82174'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['rudrakshsafar@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Personal Consultation',
    details: ['Everyday: 10:00 AM - 9:00 PM'],
  },
];

interface ContactSectionProps {
  showGallery?: boolean;
}

const ContactSection = ({ showGallery = true }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Bot protection hook
  const { honeypotProps, validateSubmission, recordSubmission, isRateLimited } = useBotProtection();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateSubmission()) {
      if (isRateLimited) {
        toast({
          title: 'Too Many Requests',
          description: 'Please wait a moment before submitting again.',
          variant: 'destructive',
        });
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: 'Validation Error',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });
      return;
    }

    recordSubmission();
    await new Promise((resolve) => setTimeout(resolve, 500));

    const sanitizedData = result.data;
    const message = `New Inquiry from Website:\n\nName: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nPhone: ${sanitizedData.phone}\nDestination Interest: ${sanitizedData.destination || 'Not specified'}\n\nMessage: ${sanitizedData.message}`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${sanitizeUrlParam(message)}`, '_blank');

    toast({
      title: 'Inquiry Sent!',
      description: 'We\'ll connect with you shortly via WhatsApp.',
    });

    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsAppDirect = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${sanitizeUrlParam('Hello! I am interested in planning a trip. Please help me with the details.')}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-navy-deep to-black relative overflow-hidden" aria-labelledby="contact-heading">

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-light/10 skew-x-12 pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Start Your Journey
          </span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Let's Plan Your <span className="text-gradient-gold">Dream Escape</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Whether you know exactly where you want to go or need inspiration, our travel designers are here to guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-white mb-6">Connect With Us</h3>
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 mb-6 last:mb-0 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-1">{info.title}</h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-white/60 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
              <h3 className="font-serif font-bold text-white mb-2">Instant Response?</h3>
              <p className="text-white/70 text-sm mb-6">
                Skip the form and chat directly with our priority support team on WhatsApp.
              </p>
              <Button onClick={handleWhatsAppDirect} className="bg-green-600 hover:bg-green-700 text-white w-full gap-2 h-12 shadow-lg hover:shadow-green-500/20 transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-navy-light/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Send an Inquiry
                    </h3>
                    <p className="text-white/50 text-sm mt-1">We typically reply within 30 minutes.</p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-500/80" aria-label="Secure form" />
                </div>

                {/* Honeypot */}
                <input {...honeypotProps} type="text" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gold uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      required
                      maxLength={100}
                      className={`bg-navy-deep/50 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-gold/50 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gold uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      required
                      maxLength={255}
                      className={`bg-navy-deep/50 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-gold/50 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gold uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 91234 56789"
                      required
                      maxLength={15}
                      className={`bg-navy-deep/50 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-gold/50 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-xs font-bold text-gold uppercase tracking-wider mb-2">
                      Destination
                    </label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Where do you want to go?"
                      maxLength={100}
                      className="bg-navy-deep/50 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-gold/50"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-xs font-bold text-gold uppercase tracking-wider mb-2">
                    Your Requirements
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dates, preferences, and any special requests..."
                    rows={5}
                    required
                    maxLength={1000}
                    className={`bg-navy-deep/50 border-white/10 text-white placeholder:text-white/20 min-h-[140px] focus:border-gold/50 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full h-14 text-lg shadow-lg hover:shadow-gold/20"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Plan My Trip
                    </>
                  )}
                </Button>

                <p className="text-xs text-white/30 text-center mt-6">
                  Strictly confidential. We do not share your data.
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Map Embed & Optional Gallery */}
        <div className="mt-20 max-w-5xl mx-auto space-y-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[400px]">
            <GoogleMapEmbed lazyLoad={true} />
          </div>
          {showGallery && (
            <div className="animate-fade-up">
              <CustomerGallery />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

