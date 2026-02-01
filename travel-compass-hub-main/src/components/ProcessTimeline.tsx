import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ProcessTimelineProps {
    steps: TimelineStep[];
    title?: string;
    description?: string;
}

const ProcessTimeline = ({ steps, title, description }: ProcessTimelineProps) => {
    return (
        <div className="py-12">
            {/* Header */}
            {(title || description) && (
                <div className="text-center mb-16">
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Icon Bubble */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary/20 z-10 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                    <step.icon className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                                }`}>
                                <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                        }`}>
                                        <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                            Step {step.id}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for opposite side */}
                            <div className="hidden md:block md:w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessTimeline;
