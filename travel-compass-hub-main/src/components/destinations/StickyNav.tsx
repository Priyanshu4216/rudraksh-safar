import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
    id: string;
    label: string;
}

interface StickyNavProps {
    items: NavItem[];
}

export default function StickyNav({ items }: StickyNavProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const offsets = items.map(item => {
                const el = document.getElementById(item.id);
                if (!el) return { id: item.id, offset: -Infinity };
                return {
                    id: item.id,
                    offset: el.getBoundingClientRect().top
                };
            });

            // Find the last element that is past the top threshold (e.g. 150px from top)
            const passedElements = offsets.filter(item => item.offset <= 150);
            if (passedElements.length > 0) {
                setActiveId(passedElements[passedElements.length - 1].id);
            } else if (offsets.length > 0) {
                setActiveId(offsets[0].id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="sticky top-32 hidden xl:block w-64 shrink-0 h-fit"
        >
            <div className="bg-depth-2/50 backdrop-blur-md rounded-2xl p-6 border border-border/50">
                <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground/80">
                    On This Page
                </h4>
                <ul className="space-y-3 relative border-l border-border">
                    {items.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <li key={item.id} className="relative">
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavLine"
                                        className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-primary rounded-full"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`pl-4 text-sm w-full text-left transition-all duration-300 ${
                                        isActive 
                                            ? 'text-primary font-medium translate-x-1' 
                                            : 'text-muted-foreground hover:text-foreground hover:translate-x-1'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
}
