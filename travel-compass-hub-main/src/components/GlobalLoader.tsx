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
                <motion.img
                    src="/images/loader-logo.png"
                    alt="Loading..."
                    className="relative z-10 w-48 h-auto object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

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
