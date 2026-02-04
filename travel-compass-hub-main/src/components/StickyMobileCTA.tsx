
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyMobileCTAProps {
    price: string;
    onEnquire?: () => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ price, onEnquire }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 transition-transform z-50 md:hidden animate-in slide-in-from-bottom border-t shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] bg-background/80 backdrop-blur-lg">
            <div className="flex items-center gap-3 w-full max-w-md mx-auto">
                <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Starting from</p>
                    <p className="text-xl font-bold text-primary leading-tight">{price}<span className="text-xs font-normal text-muted-foreground">/person</span></p>
                </div>
                <div className="flex gap-2">
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full h-12 w-12 border-primary/20 text-primary hover:bg-primary/5"
                        onClick={() => window.open('tel:+919406182174', '_self')}
                    >
                        <Phone className="h-5 w-5" />
                    </Button>
                    <Button
                        className="rounded-full h-12 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20"
                        onClick={() => window.open('https://wa.me/919406182174?text=Hi, I am interested in this package', '_blank')}
                    >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StickyMobileCTA;
