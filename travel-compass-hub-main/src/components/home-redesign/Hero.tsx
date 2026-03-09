
import { Search, Phone, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HERO_CONTENT } from '@/data/homeRedesignData';
import posterImage from '@/assets/hero-poster.jpg'; // Using existing poster as fallback or main image
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Plane, MapPin as MapPinIcon, Compass } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    const handleCall = () => {
        window.location.href = `tel:${HERO_CONTENT.phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${HERO_CONTENT.phoneNumber}?text=Hi, I am looking for a tour package from Bhilai.`, '_blank');
    };

    const videoRef = useRef<HTMLVideoElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const floatingIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }

        // --- MOBILE ONLY LUXURY UX ANIMATIONS ---
        if (window.innerWidth <= 768) {
            const tl = gsap.timeline();

            // Background Parallax/Zoom (Ken Burns effect)
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    scale: 1.08,
                    duration: 10,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                });
            }

            // Cinematic Entry Sequence
            tl.fromTo(titleRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
            )
                .fromTo(subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                )
                .fromTo(ctaRef.current,
                    { scale: 0.85, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
                    "-=0.4"
                );

            // 3D Floating Elements Animation (Floating slowly in space)
            if (floatingIconsRef.current) {
                const icons = floatingIconsRef.current.children;
                gsap.to(icons[0], { y: -15, rotationY: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }); // Plane
                gsap.to(icons[1], { y: 15, rotationX: 15, x: 10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 }); // MapPin
                gsap.to(icons[2], { y: -20, rotationZ: 20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 }); // Compass

                // Entrance for floating icons
                gsap.fromTo(floatingIconsRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 1 }
                );
            }
        }
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center perspective-[1000px]">
            {/* Background Video */}
            <div ref={bgRef} className="absolute inset-0 z-0 origin-center">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Mobile-Only 3D Floating Icons */}
            <div ref={floatingIconsRef} className="absolute inset-0 z-15 pointer-events-none md:hidden pt-20">
                <div className="absolute top-[20%] right-[15%] text-white/40 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform-style-3d">
                    <Plane className="w-12 h-12" />
                </div>
                <div className="absolute top-[50%] left-[10%] text-gold/40 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform-style-3d">
                    <MapPinIcon className="w-10 h-10" />
                </div>
                <div className="absolute bottom-[30%] right-[20%] text-white/30 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform-style-3d">
                    <Compass className="w-14 h-14" />
                </div>
            </div>

            <div className="container relative z-20 px-4 text-center">
                <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl font-serif md:animate-fade-in md:opacity-100 opacity-0 md:transform-none transform translate-y-16">
                    {HERO_CONTENT.title}
                </h1>

                <p ref={subtitleRef} className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md md:animate-fade-in md:delay-100 md:opacity-100 opacity-0 md:transform-none transform translate-y-8">
                    {HERO_CONTENT.subtitle}
                </p>


                {/* CTAs */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:animate-fade-in md:delay-300 md:opacity-100 opacity-0 md:transform-none transform scale-90 mb-10">
                    <Button
                        onClick={handleCall}
                        size="lg"
                        className="w-full sm:w-auto h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg hover:shadow-indigo-500/30 transition-all"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        {HERO_CONTENT.primaryCta}
                    </Button>
                    <Button
                        onClick={handleWhatsApp}
                        size="lg"
                        className="w-full sm:w-auto h-14 px-8 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {HERO_CONTENT.secondaryCta}
                    </Button>
                </div>

                <div className="max-w-2xl mx-auto animate-fade-in delay-400">
                    <div className="relative group">
                        <Link to="/search" className="block w-full">
                            <div className="relative flex items-center bg-white/95 rounded-full p-1 pl-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:scale-[1.01]">
                                <Search className="w-5 h-5 text-gray-400 mr-3" />
                                <div className="flex-1 text-left text-gray-500 text-lg font-normal truncate">
                                    {HERO_CONTENT.searchPlaceholder}
                                </div>
                                <Button
                                    className="rounded-full px-6 h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors pointer-events-none"
                                >
                                    Search
                                </Button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Cinematic Bottom Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce pointer-events-none opacity-0 animate-fade-in delay-1000" style={{ animationFillMode: 'forwards' }}>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">Scroll</span>
                <ChevronDown className="w-5 h-5 text-white/70" />
            </div>
        </section >
    );
};

export default Hero;
