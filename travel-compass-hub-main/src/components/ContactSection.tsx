import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useBotProtection } from '@/hooks/useBotProtection';
import { contactFormSchema, sanitizeUrlParam } from '@/lib/validation';

const PHONE_NUMBER = '919229150311';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['GE Road, In Front of Petrol Pump', 'Bhilai 3, Chhattisgarh 490021'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 92291 50311'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['rudrakshsafar@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 4:00 PM'],
  },
];

const ContactSection = () => {
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot protection check
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

    // Validate form data with zod
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

    // Record submission for rate limiting
    recordSubmission();

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Create sanitized WhatsApp message
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
    <section id="contact" className="section-padding bg-muted/30" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Start Planning Your Dream Trip
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to explore? Reach out to us and let's craft your perfect travel experience together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="glass-card p-6 flex items-start gap-4 hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick WhatsApp CTA */}
            <div className="glass-card p-6 bg-secondary/5 border-secondary/20">
              <h3 className="font-semibold text-foreground mb-2">Need Instant Assistance?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Chat directly with our travel experts on WhatsApp for quick responses.
              </p>
              <Button onClick={handleWhatsAppDirect} className="btn-gold w-full gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Send Us an Inquiry
                </h3>
                <ShieldCheck className="w-5 h-5 text-green-500" aria-label="Secure form" />
              </div>

              {/* Honeypot field - hidden from humans, traps bots */}
              <input {...honeypotProps} type="text" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className={`bg-background/50 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    maxLength={255}
                    className={`bg-background/50 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 92291 50311"
                    required
                    maxLength={15}
                    className={`bg-background/50 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                    Interested Destination
                  </label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Bali, Switzerland"
                    maxLength={100}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel preferences, dates, and any special requirements..."
                  rows={5}
                  required
                  maxLength={1000}
                  className={`bg-background/50 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-ocean w-full gap-2 py-6"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                By submitting, you agree to our{' '}
                <a href="#privacy" className="text-secondary hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#terms" className="text-secondary hover:underline">
                  Terms of Service
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
