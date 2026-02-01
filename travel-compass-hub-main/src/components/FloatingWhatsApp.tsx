import React, { forwardRef } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = forwardRef<HTMLButtonElement>((_, ref) => {
  const handleClick = () => {
    const message = "Hello Rudraksh Safar, I visited your website and would like to inquire about your travel packages. Please share the details.";
    window.open(
      `https://wa.me/919406182174?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-foreground text-primary-foreground text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Chat with us!
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </button>
  );
});

FloatingWhatsApp.displayName = 'FloatingWhatsApp';

export default FloatingWhatsApp;
