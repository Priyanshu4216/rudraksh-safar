import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ContentSectionProps {
    title?: string;
    className?: string;
    children: ReactNode;
    id?: string;
}

const ContentSection = ({ title, className, children, id }: ContentSectionProps) => {
    return (
        <section id={id} className={cn("py-12 md:py-16", className)}>
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
