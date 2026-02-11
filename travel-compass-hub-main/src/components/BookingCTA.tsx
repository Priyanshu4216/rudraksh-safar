import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BookingCTAProps {
    text?: string;
    subText?: string;
    className?: string;
}

const BookingCTA = ({
    text = "Plan Your Trip Now",
    subText = "Get a customized quote from our travel experts.",
    className
}: BookingCTAProps) => {
    return (
        <div className={cn("bg-indigo-600 rounded-xl p-8 text-center text-white shadow-xl", className)}>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{text}</h3>
            <p className="text-indigo-100 mb-8 text-lg">{subText}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    size="lg"
                    className="bg-white text-indigo-700 hover:bg-gray-100 font-bold h-14 px-8 text-lg"
                    asChild
                >
                    <a href="https://wa.me/919406182174?text=Hi,%20I%20am%20interested%20in%20a%20Goa%20Package" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-5 h-5 mr-2" />
                        Book via WhatsApp
                    </a>
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-indigo-700 bg-transparent h-14 px-8 text-lg"
                    asChild
                >
                    <a href="#contact">
                        <Calendar className="w-5 h-5 mr-2" />
                        Request Callback
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default BookingCTA;
