import { Search, MapPin, Calendar, Star, ShieldCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_CONTENT } from '@/data/homeRedesignData';
import posterImage from '@/assets/hero-poster.jpg';
import heroVideoFile from '@/assets/hero-video.mp4';
import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}: HeroSectionProps) => {
  const navigate = useNavigate();

  // Defaults (Homepage Content)
  const displayTitle = title || HERO_CONTENT.title;
  const displaySubtitle = subtitle || HERO_CONTENT.subtitle;
  const linkTarget = ctaLink || "/search";
  const buttonText = ctaText || "Search";

  // Decide if we show video (default) or image (override)
  const showVideo = !backgroundImage;

  return (
    <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0B1220]">
      {/* --- Cinematic Background Layer --- */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-hero z-20 pointer-events-none mix-blend-multiply opacity-80" />
        {/* Soft Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,18,32,0.6)_100%)] z-10 pointer-events-none" />

        {showVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={posterImage}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          >
            <source src={heroVideoFile} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backgroundImage}
            alt={displayTitle}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        )}

        {/* Bottom Fade for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-transparent z-20" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-30 container px-4 flex flex-col items-center justify-center text-center pt-10">

        {/* Brand Label */}
        <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in shadow-lg">
          World Class Travel
        </span>

        {/* Headline - Emotional & Cinematic */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[1.05] drop-shadow-2xl max-w-6xl mx-auto animate-fade-up">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
            {displayTitle}
          </span>
        </h1>

        {/* Subtitle - clean & spaced */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide animate-fade-up delay-100 mix-blend-screen">
          {displaySubtitle}
        </p>

        {/* Luxury Glass Search Bar or CTA Button */}
        <div className="w-full max-w-2xl animate-fade-up delay-200 relative z-40">
          <Link to={linkTarget} className="block relative group cursor-pointer" onClick={(e) => {
            if (linkTarget.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(linkTarget);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-white/10 to-gold/20 rounded-full opacity-50 blur-lg group-hover:opacity-100 transition duration-1000"></div>
            <div
              className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-[1.01]"
            >
              <div className="pl-6 text-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left px-4 h-12 flex items-center text-white/80 text-lg font-light">
                {ctaText ? "Check Packages" : "Where is your dream destination?"}
              </div>
              <Button type="button" className="rounded-full h-12 px-8 bg-gold hover:bg-gold-light text-navy-deep font-bold transition-transform hover:scale-105 shadow-lg pointer-events-none">
                {buttonText}
              </Button>
            </div>
          </Link>
        </div>

        {/* Trust Badges - Text Style */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 animate-fade-in delay-300 opacity-80 hover:opacity-100 transition-opacity duration-300">

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-bold uppercase tracking-wider">4.9/5 Rated</p>
              <p className="text-white/40 text-[10px]">Google Reviews</p>
            </div>
          </div>

          <div className="w-px h-8 bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <ShieldCheck className="w-4 h-4 text-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-bold uppercase tracking-wider">Certified</p>
              <p className="text-white/40 text-[10px]">Govt. Recognized</p>
            </div>
          </div>

          <div className="w-px h-8 bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <Award className="w-4 h-4 text-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-bold uppercase tracking-wider">Premium</p>
              <p className="text-white/40 text-[10px]">Service Quality</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce delay-500 z-30 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
