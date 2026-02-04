import { Wallet, Train, Hotel, Map, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CostBreakdown {
    category: string;
    cost: string;
    icon: any;
}

interface BudgetEstimatorProps {
    destination: string;
    baseLocation?: string;
    duration: string;
    costs: CostBreakdown[];
    total: string;
    note?: string;
}

const BudgetEstimator = ({
    destination,
    baseLocation = "Bhilai/Raipur",
    duration,
    costs,
    total,
    note
}: BudgetEstimatorProps) => {
    return (
        <Card className="border-l-4 border-l-emerald-500 shadow-sm bg-gradient-to-br from-white to-emerald-50/20 dark:from-slate-900 dark:to-emerald-900/10">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <Badge variant="outline" className="mb-2 text-emerald-600 border-emerald-200 bg-emerald-50">
                            💰 Realistic Budget Check
                        </Badge>
                        <CardTitle className="text-xl md:text-2xl font-bold">
                            How much will a {destination} trip cost?
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                            Estimated per person cost from {baseLocation} for {duration}
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Breakdown Items */}
                    <div className="grid gap-3">
                        {costs.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-muted text-muted-foreground">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">{item.category}</span>
                                </div>
                                <span className="font-semibold text-sm">{item.cost}</span>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="pt-4 border-t border-dashed border-emerald-200 dark:border-emerald-800">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Estimated Total</span>
                            <span className="font-bold text-xl text-emerald-600 dark:text-emerald-400">{total}</span>
                        </div>
                        {note && (
                            <p className="text-xs text-muted-foreground mt-2 italic">
                                * {note}
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BudgetEstimator;
