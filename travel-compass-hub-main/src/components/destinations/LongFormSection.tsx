import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LongFormSectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function LongFormSection({ id, title, subtitle, children, className = '' }: LongFormSectionProps) {
    return (
        <section id={id} className={`scroll-mt-32 py-16 ${className}`}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-cinematic-h2 mb-4 text-foreground">{title}</h2>
                {subtitle && (
                    <p className="text-xl text-muted-foreground font-light tracking-wide">{subtitle}</p>
                )}
                <div className="w-24 h-1 bg-primary/40 mt-8 rounded-full" />
            </motion.div>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-cinematic prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-editorial-body max-w-none">
                {children}
            </div>
        </section>
    );
}
