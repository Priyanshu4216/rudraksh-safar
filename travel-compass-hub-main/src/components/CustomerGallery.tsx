import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
            src: "/images/Yamini NayakGroupNepal.jpeg",
            destination: "Nepal Tour",
            names: "Yamini Nayak Ji & Group",
            details: "Group Holiday"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.40.49 PM.jpeg",
            destination: "Munsiyari Trip",
            names: "Naman Ji & Group",
            details: "Group Adventure"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.30.49 PM.jpeg",
            destination: "Nepal Group Tour",
            names: "Vijay Agrawal Ji",
            details: "Group Tour"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.30.20 PM.jpeg",
            destination: "Manali Trip",
            names: "Vishal Ji",
            details: "Couple Tour"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.29.41 PM.jpeg",
            destination: "Manali Visit",
            names: "Raju Yadav Ji",
            details: "Family Trip"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.28.53 PM.jpeg",
            destination: "Manali Trip",
            names: "Jayendra Yadav Ji",
            details: "Family Vacation"
        },
        {
            src: "/images/WhatsApp Image 2026-02-05 at 7.27.42 PM (1).jpeg",
            destination: "Kashmir Tour",
            names: "Subhash Ji & Group",
            details: "Group Tour"
        }
    ];

    return (
        <div className={cn("w-full py-6", className)}>
            {/* Title/Header - Optional, but adds context */}
            <h3 className="text-xl font-semibold text-center mb-6 text-foreground/90">
                Our Happy Travelers
            </h3>

            {/* Grid for Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-video w-full overflow-hidden">
                            <img
                                src={photo.src}
                                alt={`${photo.destination} - ${photo.names}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                    </motion.div>
                ))}
            </div>

            {/* Caption as requested */}
            <div className="text-center mt-6">
                <p className="text-sm font-medium text-muted-foreground/80 flex items-center justify-center gap-2">
                    <span>📸</span> {caption}
                </p>
            </div>
        </div>
    );
};

export default CustomerGallery;
