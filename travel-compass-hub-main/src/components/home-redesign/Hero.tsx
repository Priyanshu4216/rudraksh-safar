
import { Search, Phone, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HERO_CONTENT } from '@/data/homeRedesignData';
import posterImage from '@/assets/hero-poster.jpg'; // Using existing poster as fallback or main image
import heroVideoFile from '@/assets/hero-video.mp4';
import { useState, type FormEvent, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleCall = () => {
        window.location.href = `tel:${HERO_CONTENT.phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${HERO_CONTENT.phoneNumber}?text=Hi, I am looking for a tour package from Bhilai.`, '_blank');
    };

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideoFile} type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl animate-fade-in font-serif">
                    {HERO_CONTENT.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in delay-100">
                    {HERO_CONTENT.subtitle}
                </p>


                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300 mb-10">
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
