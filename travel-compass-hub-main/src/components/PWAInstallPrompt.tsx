import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                       (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for beforeinstallprompt event
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt after a delay (not immediately on load)
      const dismissed = localStorage.getItem('pwa-prompt-dismissed');
      const lastDismissed = dismissed ? new Date(dismissed) : null;
      const daysSinceDismissed = lastDismissed 
        ? (Date.now() - lastDismissed.getTime()) / (1000 * 60 * 60 * 24) 
        : Infinity;

      if (daysSinceDismissed > 7) {
        setTimeout(() => setShowPrompt(true), 5000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // For iOS, show custom prompt after delay
    if (iOS && !standalone) {
      const dismissed = localStorage.getItem('pwa-prompt-dismissed');
      const lastDismissed = dismissed ? new Date(dismissed) : null;
      const daysSinceDismissed = lastDismissed 
        ? (Date.now() - lastDismissed.getTime()) / (1000 * 60 * 60 * 24) 
        : Infinity;

      if (daysSinceDismissed > 7) {
        setTimeout(() => setShowPrompt(true), 5000);
      }
    }

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', new Date().toISOString());
  };

  // Don't show if already installed
  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[200] bg-card border border-border rounded-2xl shadow-2xl p-4 overflow-hidden"
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
          
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src="/favicon.png"
                alt="Rudraksh Safar app icon"
                className="w-8 h-8 object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-base">
                Install Rudraksh Safar
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Add to your home screen for quick access to tour packages & travel guides.
              </p>
              
              {isIOS ? (
                <div className="mt-3 p-3 bg-muted/50 rounded-lg text-sm">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Share className="w-4 h-4" />
                    Tap <span className="font-medium text-foreground">Share</span> then 
                    <span className="font-medium text-foreground">"Add to Home Screen"</span>
                  </p>
                </div>
              ) : (
                <div className="flex gap-2 mt-3">
                  <Button 
                    onClick={handleInstall}
                    size="sm"
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Install App
                  </Button>
                  <Button 
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                  >
                    Not now
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
