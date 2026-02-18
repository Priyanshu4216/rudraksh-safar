import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ContentSectionProps {
    title?: string;
    className?: string;
    children: ReactNode;
    id?: string;
}

const ContentSection = ({ title, className, children, id }: ContentSectionProps) => {
    // Auto-inject dark mode classes for common light-only backgrounds
    // This is a global fix for all Local SEO pages using this component
    const adjustedClassName = className
        ?.replace(/\bbg-white\b/g, 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800')
        .replace(/\bbg-slate-50\b/g, 'bg-slate-50 dark:bg-slate-950')
        .replace(/\bbg-indigo-50\b/g, 'bg-indigo-50 dark:bg-indigo-950/30')
        .replace(/\bbg-red-50\b/g, 'bg-red-50 dark:bg-red-950/30')
        .replace(/\bbg-green-50\b/g, 'bg-green-50 dark:bg-green-950/30')
        .replace(/\bbg-blue-50\b/g, 'bg-blue-50 dark:bg-blue-950/30')
        .replace(/\bbg-yellow-50\b/g, 'bg-yellow-50 dark:bg-yellow-950/30')
        .replace(/\bbg-orange-50\b/g, 'bg-orange-50 dark:bg-orange-950/30');

    return (
        <section id={id} className={cn("py-12 md:py-16 transition-colors duration-300", adjustedClassName)}>
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center md:text-left">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default ContentSection;
