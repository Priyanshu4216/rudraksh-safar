import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ship } from 'lucide-react';

const CruiseLoader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const waveVariants = {
        animate: {
            x: [0, -100],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "linear",
                },
            },
        },
    };

    const shipVariants = {
        animate: {
            y: [0, -10, 0],
            rotate: [0, 2, 0, -1, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                },
                rotate: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                    ease: "easeInOut",
                }
            },
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-50">
            <div className="relative w-64 h-64 flex items-center justify-center overflow-hidden rounded-full bg-blue-100/50 border-4 border-white shadow-xl">
                {/* Sky */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-blue-100 z-0"></div>

                {/* Sun */}
                <motion.div
                    className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full blur-sm"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Ship */}
                <motion.div
                    className="relative z-20 text-blue-900"
                    variants={shipVariants}
                    animate="animate"
                >
                    <Ship size={64} strokeWidth={1.5} />
                </motion.div>

                {/* Waves Layer 1 */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-blue-400/30 z-30"
                    style={{ width: '200%' }}
                    variants={waveVariants}
                    animate="animate"
                >
                    <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z" fill="currentColor" />
                    </svg>
                </motion.div>

                {/* Waves Layer 2 (Offset) */}
                <motion.div
                    className="absolute bottom-[-5px] left-0 right-0 h-16 bg-blue-500/30 z-40"
                    style={{ width: '200%' }}
                    animate={{ x: [-100, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0 10 Q 25 0 50 10 T 100 10 V 20 H 0 Z" fill="currentColor" />
                    </svg>
                </motion.div>
            </div>

            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-xl font-bold text-blue-900 tracking-widest uppercase mb-1">Setting Sail</h3>
                <p className="text-blue-600 text-sm">Preparing your luxury voyage...</p>
            </motion.div>
        </div>
    );
};

export default CruiseLoader;
