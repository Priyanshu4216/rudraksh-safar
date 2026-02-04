import { Check, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DecisionOption {
    label: string;
    description: string;
    idealFor: string[];
    isRecommended?: boolean;
}

interface DecisionHelperProps {
    title?: string;
    options: DecisionOption[];
}

const DecisionHelper = ({ title = "Which Option is Right For You?", options }: DecisionHelperProps) => {
    return (
        <div className="my-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {options.map((option, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "relative overflow-hidden transition-all duration-300 hover:shadow-md",
                            option.isRecommended ? "border-indigo-500 shadow-indigo-100 dark:shadow-none ring-1 ring-indigo-500/20" : "border-border"
                        )}
                    >
                        {option.isRecommended && (
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                Editor's Choice
                            </div>
                        )}
                        <CardContent className="p-6">
                            <h4 className="text-xl font-bold mb-2 text-foreground">{option.label}</h4>
                            <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">
                                {option.description}
                            </p>

                            <div className="bg-muted/50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    <User className="w-3 h-3" /> Best For:
                                </div>
                                <ul className="space-y-1.5">
                                    {option.idealFor.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                            <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DecisionHelper;
