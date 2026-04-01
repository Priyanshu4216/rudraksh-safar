import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Phone, MessageCircle, Briefcase, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppShell() {
    const [isMobile, setIsMobile] = useState(false);

    // Check if on mobile initially and on resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Mobile Action Dock Entrance Animation
    useEffect(() => {
        if (isMobile) {
            gsap.fromTo('.mobile-dock',
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)", delay: 0.5 }
            );

            // Floating Light Particles
            const particles = document.querySelectorAll('.light-particle');
            particles.forEach((particle) => {
                gsap.to(particle, {
                    y: "random(-100, 100)",
                    x: "random(-50, 50)",
                    opacity: "random(0.2, 0.8)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Global Mobile Section GSAP Reveals & Parallax Depth
            // Parity Check: Ensure dom has loaded its main tags.
            setTimeout(() => {
                const sections = document.querySelectorAll('main > section');
                sections.forEach((sec, i) => {
                    // Skip hero section since we manually animate it
                    if (i === 0) return;

                    // Apply Slide-up Fade Entrance
                    gsap.fromTo(sec,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: sec,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            }
                        }
                    );
                });

                // Set up Button Micro-interactions (Figma Style)
                const buttons = document.querySelectorAll('button, .group.relative.block');
                buttons.forEach(btn => {
                    btn.addEventListener('touchstart', () => {
                        gsap.to(btn, { scale: 0.96, duration: 0.15, ease: 'power1.out' });
                    });
                    btn.addEventListener('touchend', () => {
                        gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.out' });
                    });
                });
            }, 100);
        }

        return () => {
            // Clean up to prevent memory leaks if component unmounts
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [isMobile]);

    if (!isMobile) return null;

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary origin-left z-[100] shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                style={{ scaleX }}
            />

            {/* Subtle Floating Light Particles Container */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="light-particle absolute w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Mobile Action Dock */}
            <div className="mobile-dock fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] z-[90]">
                <div className="relative group">
                    {/* Glow effect back */}
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />

                    <div className="relative flex items-center justify-between px-6 py-3 bg-slate-900/80 dark:bg-white/10 backdrop-blur-[16px] border border-slate-700/50 dark:border-white/20 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                        <a href="tel:+919203650311" className="flex flex-col items-center gap-1 active:scale-90 transition-transform text-slate-300 hover:text-white dark:text-white/90 dark:hover:text-white">
                            <span className="p-2 rounded-full bg-indigo-500/20 text-indigo-300">
                                <Phone className="w-5 h-5" />
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-wider">Call</span>
                        </a>

                        <a href="https://wa.me/919203650311?text=Hi, I am looking for a tour package." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 active:scale-90 transition-transform text-slate-300 hover:text-white dark:text-white/90 dark:hover:text-white">
                            <span className="p-2 rounded-full bg-emerald-500/20 text-emerald-300 relative">
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <MessageCircle className="w-5 h-5" />
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-wider">Chat</span>
                        </a>

                        <Link to="/search" className="flex flex-col items-center gap-1 active:scale-90 transition-transform text-slate-300 hover:text-white dark:text-white/90 dark:hover:text-white">
                            <span className="p-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                <Briefcase className="w-5 h-5" />
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-400">Packs</span>
                        </Link>

                        <Link to="/destinations" className="flex flex-col items-center gap-1 active:scale-90 transition-transform text-slate-300 hover:text-white dark:text-white/90 dark:hover:text-white">
                            <span className="p-2 rounded-full bg-cyan-500/20 text-cyan-300">
                                <Compass className="w-5 h-5" />
                            </span>
                            <span className="text-[9px] font-semibold uppercase tracking-wider">Exp</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
