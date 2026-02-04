import { Check, X, ShieldAlert, BadgeCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DosAndDontsProps {
    title?: string;
    pros: string[];
    cons: string[];
}

const DosAndDonts = ({
    title = "Good vs Bad Travel Choices",
    pros,
    cons
}: DosAndDontsProps) => {
    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {/* DOs */}
                <Card className="border-t-4 border-t-green-500 shadow-sm overflow-hidden">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 border-b border-green-100 dark:border-green-900/30 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-green-800 dark:text-green-300">Smart Choices (Do This)</h4>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3">
                            {pros.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>

                {/* DON'Ts */}
                <Card className="border-t-4 border-t-red-500 shadow-sm overflow-hidden">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 border-b border-red-100 dark:border-red-900/30 flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-red-600" />
                        <h4 className="font-bold text-red-800 dark:text-red-300">Risky Mistakes (Avoid This)</h4>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3">
                            {cons.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DosAndDonts;
