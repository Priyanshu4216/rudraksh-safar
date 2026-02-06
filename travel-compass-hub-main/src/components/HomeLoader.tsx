import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomeLoader = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false); // Session logic could be added here

    useEffect(() => {
        // Check session storage first
        const hasSeen = sessionStorage.getItem('hasSeenIntro');

        // Only trigger on Home Page AND if not already played in this session
        if (pathname === '/' && !hasSeen) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                setHasPlayed(true);
                sessionStorage.setItem('hasSeenIntro', 'true'); // Mark as seen
            }, 4500); // 4.5 seconds play time
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            >
                <video
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                >
                    <source src="/videos/logo-animation-video.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </AnimatePresence>
    );
};

export default HomeLoader;
