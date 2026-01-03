import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PHONE_NUMBER = '919229150311';
const EMAIL = 'rudrakshsafar@gmail.com';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Packages', href: '#packages' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', id: 'privacy' },
  { name: 'Terms & Conditions', id: 'terms' },
  { name: 'Cookie Policy', id: 'cookies' },
  { name: 'Disclaimer', id: 'disclaimer' },
  { name: 'Refund Policy', id: 'refund' },
];

const supportLinks = [
  { name: 'Cancellation Policy', id: 'cancellation' },
  { name: 'Booking Policy', id: 'booking' },
  { name: 'FAQs', id: 'faqs' },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/rudrakshsafar',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61585671645370',
    label: 'Facebook',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@RudrakshSafar',
    label: 'YouTube',
  },
];

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p><strong>Effective Date:</strong> January 1, 2024</p>

      <p>
        <strong>Rudraksh Safar</strong>, located at GE Road, In Front of Petrol Pump,
        Bhilai 3, Chhattisgarh 490021, India, is committed to protecting your privacy.
      </p>

      <h3>Information We Collect</h3>
      <ul>
        <li>Name, phone number, email address</li>
        <li>Travel preferences and inquiry details</li>
        <li>Communication via WhatsApp, phone, or email</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <ul>
        <li>Respond to travel inquiries and bookings</li>
        <li>Provide itinerary updates and confirmations</li>
        <li>Improve customer experience</li>
      </ul>

      <h3>Data Protection</h3>
      <p>
        We do not sell or rent personal data. Reasonable security practices
        are used to protect customer information.
      </p>

      <h3>Grievance Officer</h3>
      <p>
        <strong>Name:</strong> Sanjeev Kumar Chaudhary<br/>
        <strong>Address:</strong> Bhilai, Chhattisgarh, India
      </p>
    `,
  },

  terms: {
    title: 'Terms & Conditions',
    content: `
      <p>
        By accessing or booking through <strong>Rudraksh Safar</strong>,
        you agree to comply with these Terms & Conditions.
      </p>

      <h3>Service Role</h3>
      <p>
        Rudraksh Safar acts as a travel facilitator between customers and
        third-party service providers such as airlines, hotels, and tour operators.
      </p>

      <h3>Payments & Bookings</h3>
      <p>
        Bookings are confirmed only after payment and written confirmation.
        Prices are subject to availability and season.
      </p>

      <h3>Jurisdiction</h3>
      <p>
        All disputes are subject to courts of Durg, Chhattisgarh, India.
      </p>
    `,
  },

  cookies: {
    title: 'Cookie Policy',
    content: `
      <p>
        This website uses cookies only for basic functionality and analytics.
        No personal tracking cookies are used.
      </p>
    `,
  },

  disclaimer: {
    title: 'Disclaimer',
    content: `
      <p>
        Information provided is for general purposes only.
        Rudraksh Safar is not responsible for changes by third-party providers.
      </p>
    `,
  },

  refund: {
    title: 'Refund Policy',
    content: `
      <p>
        Refunds depend on airline, hotel, and service provider policies.
        Rudraksh Safar assists customers but does not guarantee refunds.
      </p>
    `,
  },

  cancellation: {
    title: 'Cancellation Policy',
    content: `
      <p>
        Cancellation charges depend on service provider rules and timing.
        Please contact us for assistance.
      </p>
    `,
  },

  booking: {
    title: 'Booking Policy',
    content: `
      <p>
        Bookings are confirmed only after payment and written confirmation.
      </p>
    `,
  },

  faqs: {
    title: 'Frequently Asked Questions',
    content: `
      <h4>How do I book?</h4>
      <p>Via website inquiry, WhatsApp, phone call, or email.</p>

      <h4>Do you offer customized trips?</h4>
      <p>Yes, all trips are fully customizable.</p>
    `,
  },
};

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] =
    useState<keyof typeof legalContent | null>(null);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (id: keyof typeof legalContent) => {
    setActiveModal(id);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-foreground text-primary-foreground">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold">
              Rudraksh <span className="text-secondary">Safar</span>
            </h2>
            <p className="text-primary-foreground/70 mt-4 text-sm">
              Your trusted travel partner for domestic & international journeys.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                GE Road, Bhilai 3, Chhattisgarh
              </p>
              <p className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                +91 92291 50311
              </p>
              <p className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                {EMAIL}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-secondary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() =>
                      openModal(link.id as keyof typeof legalContent)
                    }
                    className="text-primary-foreground/70 hover:text-secondary"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Rudraksh Safar. All rights reserved.
        </div>
      </footer>

      {/* Legal Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {activeModal && legalContent[activeModal].title}
            </DialogTitle>
          </DialogHeader>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: activeModal ? legalContent[activeModal].content : '',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
