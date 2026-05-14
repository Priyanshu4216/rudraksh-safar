import { motion } from 'framer-motion';

export interface WeatherMonth {
    month: string;
    temp: string;
    condition: 'Sunny' | 'Snow' | 'Rain' | 'Cloudy' | 'Pleasant';
    description: string;
    isBest?: boolean;
}

interface WeatherGuideProps {
    data: WeatherMonth[];
}

export default function WeatherGuide({ data }: WeatherGuideProps) {
    const getConditionColor = (condition: string) => {
        switch (condition) {
            case 'Sunny': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
            case 'Snow': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
            case 'Rain': return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
            case 'Pleasant': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
            default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
        }
    };

    return (
        <section id="weather" className="scroll-mt-32 py-16">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-cinematic-h2 mb-4 text-foreground">Monthly Weather Guide</h2>
                <div className="w-24 h-1 bg-primary/40 mt-8 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <motion.div 
                        key={item.month}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-6 rounded-2xl border ${item.isBest ? 'border-primary shadow-glow bg-primary/5' : 'border-border bg-card'} relative overflow-hidden`}
                    >
                        {item.isBest && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">
                                Best Time
                            </div>
                        )}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-cinematic font-bold text-foreground">{item.month}</h3>
                                <p className="text-xl font-medium text-muted-foreground mt-1">{item.temp}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${getConditionColor(item.condition)}`}>
                                {item.condition}
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
