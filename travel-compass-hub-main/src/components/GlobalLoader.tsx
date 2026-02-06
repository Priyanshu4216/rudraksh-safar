import { motion } from 'framer-motion';


const GlobalLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
            <div className="relative flex items-center justify-center">
                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo Image */}
                {/* Animated Compass Icon */}
                <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80" height="80"
                        viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="text-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Outer Ring */}
                        <circle cx="12" cy="12" r="10" className="opacity-30" />

                        {/* Inner Ticks */}
                        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" className="opacity-50" />

                        {/* Spinning Needle - Wrapped in Group for better pivot control */}
                        <motion.g
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                            style={{ originX: "0.5", originY: "0.5" }}
                        >
                            <polygon
                                points="12 4 14 12 12 20 10 12"
                                fill="currentColor"
                                stroke="none"
                            />
                        </motion.g>
                    </motion.svg>
                </div>

                {/* Pulse Animation Overlay */}
                <motion.div
                    className="absolute inset-0 z-20 bg-background/0"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                className="mt-8 flex gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-secondary"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default GlobalLoader;
