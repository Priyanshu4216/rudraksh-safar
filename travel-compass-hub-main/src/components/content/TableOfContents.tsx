import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AlignLeft } from 'lucide-react';

interface TOCItem {
    id: string;
    label: string;
}

interface TOCProps {
    items: TOCItem[];
    title?: string;
}

const TableOfContents = ({ items, title = "Table of Contents" }: TOCProps) => {
    const [activeId, setActiveId] = useState<string>('');

    // Intersection Observer to track active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollToSection = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Height of sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="hidden lg:block sticky top-24 self-start max-h-[80vh] overflow-y-auto w-full">
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-indigo-700 dark:text-indigo-300 font-bold uppercase tracking-wider text-xs">
                    <AlignLeft className="w-4 h-4" />
                    {title}
                </div>
                <ul className="space-y-1 relative border-l border-border pl-4">
                    {/* Active Indicator Line */}
                    <div
                        className="absolute left-0 w-0.5 bg-indigo-500 transition-all duration-300 ease-in-out h-full"
                        style={{
                            height: '24px',
                            transform: `translateY(${items.findIndex(i => i.id === activeId) * 28}px)`,
                            opacity: activeId ? 1 : 0
                        }}
                    />

                    {items.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(item.id, e)}
                                className={cn(
                                    "block py-1 text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                                    activeId === item.id
                                        ? "text-indigo-700 dark:text-indigo-300 font-medium"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile "Jump To" (Hidden on Desktop) could go here if needed, but handled by main content usually */}
        </nav>
    );
};

export default TableOfContents;
