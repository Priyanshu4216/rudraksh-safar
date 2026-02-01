import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Cloud } from 'lucide-react';

const HotelLoader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const cloudVariants = {
        animate: {
            x: [100, -100],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 8,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50">
            <div className="relative w-64 h-64 flex items-center justify-center overflow-hidden rounded-full bg-blue-100/50 border-4 border-white shadow-xl">
                {/* Sky */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-blue-50 z-0"></div>

                {/* Sun */}
                <motion.div
                    className="absolute top-10 right-10 w-10 h-10 bg-amber-400 rounded-full blur-[2px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Clouds */}
                <motion.div
                    className="absolute top-16 right-0 text-white/80 z-10"
                    variants={cloudVariants}
                    animate="animate"
                >
                    <Cloud size={32} fill="currentColor" strokeWidth={0} />
                </motion.div>
                <motion.div
                    className="absolute top-24 right-10 text-white/60 z-10"
                    animate={{ x: [100, -100] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                >
                    <Cloud size={24} fill="currentColor" strokeWidth={0} />
                </motion.div>


                {/* Hotel Building */}
                <motion.div
                    className="relative z-20 text-slate-800"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Building2 size={80} strokeWidth={1.5} />
                </motion.div>

                {/* Ground */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-emerald-500/20 z-10"></div>
            </div>

            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-xl font-bold text-slate-900 tracking-widest uppercase mb-1">Checking Availability</h3>
                <p className="text-slate-500 text-sm">Finding best rates for you...</p>
            </motion.div>
        </div>
    );
};

export default HotelLoader;
