import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { KUMBH_SITE } from '@/data/kumbh/site';

interface KumbhStickyMobileCTAProps {
  lang?: 'en' | 'hi';
  city?: string;
  preferredSnan?: string;
}

export const KumbhStickyMobileCTA: React.FC<KumbhStickyMobileCTAProps> = ({
  lang = 'en',
  city,
  preferredSnan
}) => {
  const isHi = lang === 'hi';
  const whatsappNumber = KUMBH_SITE.whatsappNumber;
  const phoneNumber = KUMBH_SITE.phoneNumber;

  const defaultMsgEn = city
    ? `Hi Rudraksh Safar, I am in ${city}. I want details for Haridwar Kumbh Mela 2027 from ${city}. Group size: __, Preferred snan date: ${preferredSnan || '__'}.`
    : `Hi Rudraksh Safar, I want details and planning advice for Haridwar Ardh Kumbh Mela 2027. Preferred snan date: ${preferredSnan || '__'}.`;

  const defaultMsgHi = city
    ? `नमस्ते रुद्राक्ष सफ़र, मैं ${city} से हूँ। मुझे हरिद्वार कुंभ मेला 2027 के लिए पैकेज विवरण चाहिए। सदस्यों की संख्या: __, स्नान तिथि: ${preferredSnan || '__'}।`
    : `नमस्ते रुद्राक्ष सफ़र, मुझे हरिद्वार अर्ध कुंभ 2027 की यात्रा एवं आश्रम/टेंट विवरण चाहिए। स्नान तिथि: ${preferredSnan || '__'}।`;

  const message = isHi ? defaultMsgHi : defaultMsgEn;

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'Kumbh 2027 CTA',
        event_label: city || 'Haridwar Hub'
      });
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        event_category: 'Kumbh 2027 CTA',
        event_label: city || 'Haridwar Hub'
      });
    }
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      role="region"
      aria-label="Kumbh 2027 Mobile Helpline"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-2 h-12 min-h-[44px] rounded-xl border border-primary/30 bg-primary/10 text-primary font-semibold text-sm active:scale-95 transition-transform"
          aria-label={isHi ? "कुंभ हेल्पलाइन पर कॉल करें" : "Call Kumbh Helpline"}
        >
          <Phone className="w-4 h-4 text-primary" />
          <span>{isHi ? "कॉल करें" : "Call Desk"}</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 h-12 min-h-[44px] rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md active:scale-95 transition-transform"
          aria-label={isHi ? "व्हाट्सएप पर जानकारी लें" : "Enquire on WhatsApp"}
        >
          <MessageCircle className="w-4 h-4" />
          <span>{isHi ? "व्हाट्सएप पूछताछ" : "WhatsApp Desk"}</span>
        </button>
      </div>
    </div>
  );
};
