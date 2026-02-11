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
            src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
            destination: "Chardham Yatra",
            names: "Palesh Ji, Suresh Ji, Ishwar Ji & Ashwani Ji",
            details: "With Rudraksh Safar Team"
        },
        {
            src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
            destination: "Nepal Tour",
            names: "Yamini Nayak Ji & Group",
            details: "Group Holiday"
        },
        {
            src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
            destination: "Munsiyari Trip",
            names: "Naman Ji & Group",
            details: "Group Adventure"
        },
        {
            src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
            destination: "Nepal Group Tour",
            names: "Vijay Agrawal Ji",
            details: "Group Tour"
        },
        {
            src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
            destination: "Manali Trip",
            names: "Vishal Ji",
            details: "Couple Tour"
        },
        {
            src: "https://images.unsplash.com/photo-1526772662000-3f88f107f911?auto=format&fit=crop&q=80&w=800",
            destination: "Manali Visit",
            names: "Raju Yadav Ji",
            details: "Family Trip"
        },
        {
            src: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
            destination: "Manali Trip",
            names: "Jayendra Yadav Ji",
            details: "Family Vacation"
        },
        {
            src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
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
