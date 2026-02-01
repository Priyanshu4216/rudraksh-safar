import { motion } from 'framer-motion';
import { Plane, MapPin } from 'lucide-react';

const LocationPageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
            <div className="relative w-24 h-24 mb-6">
                {/* Ripple Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-primary/30"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-secondary/30"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                />

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-card rounded-full shadow-xl border border-muted z-10">
                    <MapPin className="w-10 h-10 text-primary fill-primary/10" />
                </div>

                {/* Orbiting Plane */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3">
                        <Plane className="w-6 h-6 text-secondary fill-secondary rotate-90" />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
            >
                <h3 className="text-xl font-bold text-foreground">Rudraksh Safar</h3>
                <motion.p
                    className="text-sm text-muted-foreground mt-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Planning your perfect trip...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LocationPageLoader;
