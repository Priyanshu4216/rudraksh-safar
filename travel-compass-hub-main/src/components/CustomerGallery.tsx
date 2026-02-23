
import { cn } from "@/lib/utils";
import AutoScroll from "embla-carousel-auto-scroll";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

interface CustomerGalleryProps {
    className?: string;
    caption?: string;
}

const CustomerGallery = ({
    className,
    caption = "Serving travelers from Bhilai, Raipur & nearby cities"
}: CustomerGalleryProps) => {
    const photos = [
        {
            src: "/images/happy-group.jpeg",
            destination: "Chardham Yatra",
            names: "Palesh Ji, Suresh Ji, Ishwar Ji & Ashwani Ji",
            details: "With Rudraksh Safar Team"
        },
        {
            src: "/images/Yamini-NayakGroupNepal.jpeg",
            destination: "Nepal Tour",
            names: "Yamini Nayak Ji & Group",
            details: "Group Holiday"
        },
        {
            src: "/images/naman-in-musiyari.jpeg",
            destination: "Munsiyari Trip",
            names: "Naman Ji & Group",
            details: "Group Adventure"
        },
        {
            src: "/images/Vijay-in-nepal.jpeg",
            destination: "Nepal Group Tour",
            names: "Vijay Agrawal Ji",
            details: "Group Tour"
        },
        {
            src: "/images/vishal-in-manali.jpeg",
            destination: "Manali Trip",
            names: "Vishal Ji",
            details: "Couple Tour"
        },
        {
            src: "/images/WhatsApp-Image-2026-02-05-at-7.29.41-PM.jpeg", // Raju Yadav
            destination: "Manali Visit",
            names: "Raju Yadav Ji",
            details: "Family Trip"
        },
        {
            src: "/images/WhatsApp-Image-2026-02-05-at-7.28.53-PM.jpeg", // Jayendra Yadav
            destination: "Manali Trip",
            names: "Jayendra Yadav Ji",
            details: "Family Vacation"
        },
        {
            src: "/images/WhatsApp-Image-2026-02-05-at-7.27.42-PM-(1).jpeg", // Subhash Ji
            destination: "Kashmir Tour",
            names: "Subhash Ji & Group",
            details: "Group Tour"
        }
    ];

    const plugin = useRef(
        AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    );

    return (
        <div className={cn("w-full py-6", className)}>
            {/* Title/Header - Optional, but adds context */}
            <h3 className="text-xl font-semibold text-center mb-6 text-foreground/90">
                Our Happy Travelers
            </h3>

            {/* Carousel for Photos */}
            <div className="container mx-auto px-4 relative">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {photos.map((photo, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                                <div className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] flex flex-col h-full border border-slate-800">
                                    {/* Image Section */}
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <img
                                            src={photo.src}
                                            alt={`${photo.destination} - ${photo.names}`}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>

                                    {/* Text Section (Solid Background) */}
                                    <div className="p-4 flex flex-col gap-0.5 flex-grow">
                                        {/* Line 1: Destination */}
                                        <p className="text-white font-bold text-base md:text-lg leading-tight">
                                            {photo.destination}
                                        </p>

                                        {/* Line 2: Names */}
                                        <p className="text-gray-200 font-medium text-sm md:text-base leading-snug">
                                            {photo.names}
                                        </p>

                                        {/* Line 3: Details */}
                                        <p className="text-gray-400 font-normal text-xs md:text-sm leading-snug mt-1">
                                            {photo.details}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons are hidden for pure auto-scroll look, can be re-enabled if needed */}
                    {/* <CarouselPrevious className="left-0 md:-left-12 opacity-0 hover:opacity-100 transition-opacity" />
                    <CarouselNext className="right-0 md:-right-12 opacity-0 hover:opacity-100 transition-opacity" /> */}
                </Carousel>
            </div>

            {/* Caption as requested */}
            <div className="text-center mt-8">
                <p className="text-sm font-medium text-muted-foreground/80 flex items-center justify-center gap-2">
                    <span>📸</span> {caption}
                </p>
            </div>
        </div>
    );
};

export default CustomerGallery;
