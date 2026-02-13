
import { Award, Users, Map, Clock } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        icon: Award,
        value: 8,
        label: "Years of Excellence",
        suffix: "+"
    },
    {
        icon: Users,
        value: 5000,
        label: "Happy Travellers",
        suffix: "+"
    },
    {
        icon: Map,
        value: 40,
        label: "Destinations",
        suffix: "+"
    },
    {
        icon: Clock,
        value: 24,
        label: "Support",
        suffix: "/7"
    }
];

const TrustBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-navy-light/50 backdrop-blur-md border-y border-white/5 relative z-20 mx-auto max-w-7xl rounded-xl shadow-2xl overflow-hidden hidden md:block"
        >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-70" />

            <div className="grid grid-cols-4 divide-x divide-white/5">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="group p-6 flex items-center justify-center gap-4 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
                    >
                        {/* Subtle Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <div className="p-3 rounded-full bg-navy-lighter/50 text-gold group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="w-6 h-6" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white font-serif tracking-tight">
                                <Counter from={0} to={stat.value} duration={2} isVisible={isVisible} />
                                <span className="text-gold text-lg ml-0.5">{stat.suffix}</span>
                            </span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Simple Counter Component
const Counter = ({ from, to, duration, isVisible }: { from: number; to: number; duration: number; isVisible: boolean }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * (to - from) + from));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [from, to, duration, isVisible]);

    return <span>{count.toLocaleString()}</span>;
};

export default TrustBar;
