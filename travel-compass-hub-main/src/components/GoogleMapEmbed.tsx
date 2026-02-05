import { cn } from "@/lib/utils";

interface GoogleMapEmbedProps {
    className?: string;
    lazyLoad?: boolean;
}

const GoogleMapEmbed = ({ className, lazyLoad = true }: GoogleMapEmbedProps) => {
    return (
        <div className={cn("w-full flex flex-col gap-4", className)}>
            {/* Trust Text */}
            <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="font-semibold text-foreground">Rated 5.0</span> by 20+ Happy Travelers on Google
                </p>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[400px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-border bg-muted/50">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.646352908423!2d81.42232697471914!3d21.206203181661394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2923750fe9721d%3A0x3a3bc76b52d82e08!2sRudraksh%20Safar!5e0!3m2!1sen!2sin!4v1770297699909!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading={lazyLoad ? "lazy" : "eager"}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rudraksh Safar Office Location"
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        </div>
    );
};

export default GoogleMapEmbed;
