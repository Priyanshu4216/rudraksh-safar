import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import LazyOptimizedImage from '@/components/LazyOptimizedImage';
import { useRef } from 'react';

// Mock data based on the provided image
const offers = [
    {
        id: 1,
        title: "DO DHAM YATRA OFFER",
        subtitle: "KEDARNATH & BADRINATH",
        oldPrice: "₹14999/pp",
        newPrice: "₹12999/pp",
        discount: "PRE-BOOKING DISCOUNTS UPTO ₹2000!",
        badge: "LIMITED TIME OFFER",
        image: "https://images.unsplash.com/photo-1626014903706-e7e296317be9?q=80&w=2670&auto=format&fit=crop", // Kedarnath like image
        link: "/package/do-dham-yatra",
        buttonText: "BOOK NOW"
    },
    {
        id: 2,
        title: "CHARDHAM YATRA OFFER!",
        subtitle: "Gangotri, Yamunotri, Kedarnath & Badrinath",
        oldPrice: "₹19999/pp",
        newPrice: "₹17999/pp",
        discount: "PRE-BOOKING DISCOUNTS UPTO ₹2000!",
        badge: "LIMITED TIME OFFER",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2670&auto=format&fit=crop", // Chardham like image
        link: "/package/chardham-yatra",
        buttonText: "BOOK NOW"
    },
    {
        id: 3,
        title: "CHAR DHAM YATRA HOTEL BOOKINGS",
        subtitle: "Gangotri, Yamunotri, Kedarnath & Badrinath",
        oldPrice: "",
        newPrice: "",
        discount: "PRE-BOOKING DISCOUNTS UPTO ₹2000!",
        badge: "LIMITED TIME OFFER",
        image: "https://images.unsplash.com/photo-1542314831-c6a4d14db32d?q=80&w=2670&auto=format&fit=crop", // Hotel like image
        link: "/booking/chardham-hotels",
        buttonText: "BOOK NOW"
    },
    {
        id: 4,
        title: "KEDARNATH PRE-BOOKING",
        subtitle: "Special Packages",
        oldPrice: "",
        newPrice: "SPECIAL ₹7999",
        discount: "CLICK TO UNLOCK",
        badge: "HOT DEAL",
        image: "https://images.unsplash.com/photo-1626014903706-e7e296317be9?q=80&w=2670&auto=format&fit=crop",
        link: "/package/kedarnath",
        buttonText: "EXPLORE"
    }
];

const OffersCarousel = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section className="py-10 bg-white overflow-hidden relative">
            <div className="container px-4 mx-auto max-w-7xl">
                {/* Title Badge */}
                <div className="flex justify-center mb-8">
                    <div className="bg-[#EAF3EB] text-[#4F8B53] font-semibold px-6 py-2 rounded-md shadow-sm border border-[#CDE5D0]">
                        Exclusive Offers of the Week
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {offers.map((offer) => (
                            <CarouselItem key={offer.id} className="pl-2 md:pl-4 basis-11/12 md:basis-1/2 lg:basis-1/3">
                                <Link to={offer.link} className="block group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[16/9] border border-gray-100">
                                    {/* Background Image */}
                                    <LazyOptimizedImage
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    
                                    {/* Overlay for readability mimicking the banner style */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#032B52]/90 via-[#032B52]/70 to-transparent mix-blend-multiply"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#032B52] via-transparent to-transparent opacity-80"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col p-4">
                                        
                                        {/* Top Section */}
                                        <div className="w-full relative flex-grow">
                                            {/* Badge */}
                                            <div className="absolute top-0 right-0 z-10">
                                                <div className="bg-[#0A2540] border border-[#FFD700] text-[#FFD700] text-[10px] font-extrabold px-2 py-1 rounded shadow-md whitespace-nowrap">
                                                    {offer.badge}
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-[#FFD700] font-black text-xl md:text-2xl mt-2 leading-tight drop-shadow-md w-3/4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                                {offer.title}
                                            </h3>
                                            <p className="text-white text-xs font-bold drop-shadow-sm uppercase tracking-wide mt-1 w-3/4">
                                                {offer.subtitle}
                                            </p>

                                            {offer.newPrice && (
                                                <div className="mt-3">
                                                    {offer.oldPrice && (
                                                        <span className="text-white/80 line-through text-xs mr-2">{offer.oldPrice}</span>
                                                    )}
                                                    <div className="text-[#FFD700] font-black text-2xl md:text-3xl drop-shadow-md flex items-baseline gap-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                                        {offer.newPrice.replace(' NOW ', '')} <span className="text-sm font-bold text-white">NOW</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="w-full flex flex-col items-center mt-auto z-10 relative">
                                            <div className="bg-gradient-to-r from-[#D35400] to-[#E67E22] text-white text-xs font-bold py-1.5 px-6 rounded-full shadow-lg mb-[-12px] z-20 border border-[#F39C12]/50 whitespace-nowrap">
                                                {offer.discount}
                                            </div>

                                            <div className="bg-[#0B3A64] text-white text-sm font-bold py-2 w-full text-center rounded border border-[#3498DB]/30 shadow-inner group-hover:bg-[#155A9C] transition-colors pt-4">
                                                {offer.buttonText}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white/90 hover:bg-white text-navy-deep border-none shadow-lg h-10 w-10" />
                    <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white/90 hover:bg-white text-navy-deep border-none shadow-lg h-10 w-10" />
                </Carousel>
            </div>
        </section>
    );
};

export default OffersCarousel;
