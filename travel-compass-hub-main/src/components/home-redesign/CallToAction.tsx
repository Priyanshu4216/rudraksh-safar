
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { HERO_CONTENT } from '@/data/homeRedesignData';

const CallToAction = () => {
    const handleCall = () => {
        window.location.href = `tel:${HERO_CONTENT.phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${HERO_CONTENT.phoneNumber}?text=Hi, can you help me plan a trip?`, '_blank');
    };

    return (
        <>
            {/* Desktop/Tablet Static CTA */}
            <section className="py-12 bg-indigo-600 text-white relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Not sure where to go?</h2>
                    <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Our travel experts are here to help you plan the perfect customized itinerary fitting your budget and preferences.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={handleCall}
                            size="lg"
                            variant="secondary"
                            className="font-bold text-indigo-700 hover:text-indigo-800"
                        >
                            <Phone className="w-5 h-5 mr-2" /> Call Expert Now
                        </Button>
                        <Button
                            onClick={handleWhatsApp}
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50 md:hidden animate-bounce-in">
                <Button
                    onClick={handleWhatsApp}
                    className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center p-0"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-8 h-8 text-white" />
                </Button>
            </div>
        </>
    );
};

export default CallToAction;
