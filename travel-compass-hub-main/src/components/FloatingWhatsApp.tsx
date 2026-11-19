import React, { forwardRef } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface FloatingWhatsAppProps {
  packageName?: string;
  destination?: string;
  customMessage?: string;
}

const FloatingWhatsApp = forwardRef<HTMLButtonElement, FloatingWhatsAppProps>(({
  packageName,
  destination,
  customMessage
}, ref) => {
  const location = useLocation();
  const contactPhone = '9713057086';

  const getContextMessage = () => {
    if (customMessage) return customMessage;
    if (packageName) {
      return `Hello Rudraksh Safar, I am inquiring about the ${packageName} package. Please share itinerary details and best price quote.`;
    }
    if (destination) {
      return `Hello Rudraksh Safar, I am planning a trip to ${destination}. Please share tour package options and quotes.`;
    }

    const path = location.pathname.toLowerCase();
    if (path.includes('manali-kasol-strangers-trip')) {
      return "Hello Rudraksh Safar, I want to book the Manali Kasol Group Trip (₹5,999). Please confirm available weekend batch dates.";
    }
    if (path.includes('kumbh-mela-2027')) {
      return "Hello Rudraksh Safar, I am inquiring about Haridwar Ardh Kumbh Mela 2027 snan packages and tent camps.";
    }
    if (path.includes('canton-fair')) {
      return "Hello Rudraksh Safar, I am interested in the Canton Fair 2027 China B2B business tour delegation. Please share phase packages.";
    }
    if (path.includes('kashmir')) {
      return "Hello Rudraksh Safar, I am inquiring about Kashmir tour packages (Srinagar, Gulmarg Gondola & Dal Lake houseboat).";
    }
    if (path.includes('kerala')) {
      return "Hello Rudraksh Safar, I am inquiring about Kerala tour packages (Munnar tea gardens & private Alleppey houseboat).";
    }
    if (path.includes('bali')) {
      return "Hello Rudraksh Safar, I am inquiring about Bali tour packages with private pool villas and Nusa Penida.";
    }
    if (path.includes('dubai')) {
      return "Hello Rudraksh Safar, I am inquiring about Dubai tour packages (Burj Khalifa, Desert Safari & Abu Dhabi).";
    }
    if (path.includes('vietnam')) {
      return "Hello Rudraksh Safar, I am inquiring about Vietnam tour packages (Halong Bay cruise & Ba Na Hills Golden Bridge).";
    }
    if (path.includes('rajasthan')) {
      return "Hello Rudraksh Safar, I am inquiring about Rajasthan royal circuit packages (Jaipur, Jodhpur, Udaipur).";
    }
    if (path.includes('puri')) {
      return "Hello Rudraksh Safar, I am inquiring about Puri Jagannath Dham & Konark spiritual tour packages.";
    }
    if (path.includes('almaty')) {
      return "Hello Rudraksh Safar, I am inquiring about Almaty Kazakhstan snow & mountain packages (14-day visa-free).";
    }
    if (path.includes('chardham')) {
      return "Hello Rudraksh Safar, I am inquiring about the sacred Char Dham Yatra package.";
    }
    if (path.includes('senior-citizen')) {
      return "Hello Rudraksh Safar, I am looking for senior-citizen friendly tour packages for my parents. Please guide me.";
    }
    if (path.includes('insurance')) {
      return "Hello Rudraksh Safar, I need an international travel insurance policy for my upcoming trip.";
    }

    return "Hello Rudraksh Safar, I visited your website and would like to inquire about your holiday packages. Please share details.";
  };

  const handleWhatsAppClick = () => {
    const message = getContextMessage();
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: location.pathname,
        value: 1
      });
    }
    window.open(`https://wa.me/91${contactPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        event_category: 'engagement',
        event_label: location.pathname,
        value: 1
      });
    }
    window.open(`tel:+91${contactPhone}`, '_self');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Bubble (Hidden on mobile) */}
      <button
        ref={ref}
        onClick={handleWhatsAppClick}
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-110 transition-all duration-300 items-center justify-center group"
        aria-label="Chat on WhatsApp with Rudraksh Safar"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-slate-700">
          Chat with Travel Specialist
        </span>
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
      </button>

      {/* Mobile Sticky Bottom Conversion Bar (< 768px) */}
      <aside
        aria-label="Mobile booking contact bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            onClick={handleCallClick}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm border border-slate-700 transition active:scale-95"
            aria-label="Call Rudraksh Safar directly"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Now</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition active:scale-95"
            aria-label="WhatsApp Rudraksh Safar"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </button>
        </div>
      </aside>
    </>
  );
});

FloatingWhatsApp.displayName = 'FloatingWhatsApp';

export default FloatingWhatsApp;
