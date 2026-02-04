import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TLDRSectionProps {
    title?: string;
    summary: string;
    className?: string;
    areasServed?: string[]; // Optional areas list
}

const TLDRSection: React.FC<TLDRSectionProps> = ({
    title = "Quick Summary (TL;DR)",
    summary,
    className,
    areasServed
}) => {
    return (
        <section className={cn("my-8", className)} aria-label="Page Summary">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-primary shrink-0 mt-0.5 fill-primary/20" />
                    <div className="space-y-3">
                        <h2 className="font-bold text-lg text-foreground flex items-center gap-2">
                            {title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-base">
                            {summary}
                        </p>
                        {areasServed && areasServed.length > 0 && (
                            <div className="pt-2 flex flex-wrap gap-2 items-center">
                                <span className="text-sm font-medium text-foreground">Serving:</span>
                                {areasServed.map((area, index) => (
                                    <span key={index} className="px-2 py-1 bg-background rounded-md border text-xs font-medium text-muted-foreground">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TLDRSection;
