import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SimpleHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText?: string;
    ctaLink?: string;
}

const SimpleHero = ({ title, subtitle, backgroundImage, ctaText = "Plan My Trip", ctaLink = "#contact" }: SimpleHeroProps) => {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-up">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
                    {subtitle}
                </p>
                <Button size="lg" className="btn-gold text-lg h-14 px-8 rounded-full animate-fade-up delay-200" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </section>
    );
};

export default SimpleHero;
