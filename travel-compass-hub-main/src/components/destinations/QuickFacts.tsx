import { motion } from 'framer-motion';

export interface QuickFact {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface QuickFactsProps {
    facts: QuickFact[];
}

export default function QuickFacts({ facts }: QuickFactsProps) {
    return (
        <section id="quick-facts" className="py-12 md:py-20 bg-depth-2">
            <div className="container max-w-6xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
                >
                    {facts.map((fact, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            {fact.icon && (
                                <div className="p-4 rounded-full bg-background/50 border border-border/50 text-primary">
                                    {fact.icon}
                                </div>
                            )}
                            <div>
                                <h4 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-1">
                                    {fact.label}
                                </h4>
                                <p className="text-lg md:text-2xl font-cinematic font-semibold text-foreground">
                                    {fact.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
