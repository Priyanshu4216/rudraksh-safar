import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    closeBanner();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    closeBanner();
  };

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon and Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">We Value Your Privacy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                  <button
                    onClick={() => {
                      const footer = document.querySelector('footer');
                      if (footer) {
                        footer.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Cookie Policy
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleReject}
                className="flex-1 md:flex-none border-border hover:bg-muted"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-primary hover:bg-primary/90"
              >
                Accept All
              </Button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
