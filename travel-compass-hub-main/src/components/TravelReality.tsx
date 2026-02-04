import { Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface RealityItem {
    type: 'positive' | 'negative' | 'neutral';
    text: string;
}

interface TravelRealityProps {
    title?: string;
    items: RealityItem[];
}

const TravelReality = ({
    title = "Travel Reality Check",
    items
}: TravelRealityProps) => {
    return (
        <div className="my-8 rounded-xl border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-900/50 overflow-hidden">
            <div className="bg-amber-100/80 dark:bg-amber-900/30 p-4 border-b border-amber-200 dark:border-amber-900/50 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                <h3 className="font-bold text-amber-900 dark:text-amber-100">{title}</h3>
                <span className="ml-auto text-xs font-medium px-2 py-0.5 bg-white dark:bg-amber-950 rounded-full text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    Local Truth
                </span>
            </div>
            <div className="p-6">
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            {item.type === 'positive' && <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />}
                            {item.type === 'negative' && <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />}
                            {item.type === 'neutral' && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2.5 ml-1.5" />}
                            <span className="text-sm md:text-base text-foreground/80 leading-relaxed">
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TravelReality;
