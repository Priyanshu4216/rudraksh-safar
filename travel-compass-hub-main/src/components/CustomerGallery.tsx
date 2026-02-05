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
    // Placeholder images - user will add more later
    const photos = [
        {
            src: "/images/happy-group.png",
            alt: "Happy family group tour with Rudraksh Safar"
        },
        {
            src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
            alt: "Happy Travelers with Rudraksh Safar"
        }
        // Add more photos here later
    ];

    return (
        <div className={cn("w-full py-6", className)}>
            {/* Title/Header - Optional, but adds context */}
            <h3 className="text-xl font-semibold text-center mb-6 text-foreground/90">
                Our Happy Travelers
            </h3>

            {/* Grid for Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-video rounded-xl overflow-hidden shadow-md group"
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                ))}

                {/* Placeholder slots for future photos (Visual styling only, hidden if no photos) */}
                {/* User can duplicate the above photo block when adding real photos */}
            </div>

            {/* Caption as requested */}
            <div className="text-center mt-4">
                <p className="text-sm font-medium text-muted-foreground/80 flex items-center justify-center gap-2">
                    <span>📸</span> {caption}
                </p>
            </div>
        </div>
    );
};

export default CustomerGallery;
