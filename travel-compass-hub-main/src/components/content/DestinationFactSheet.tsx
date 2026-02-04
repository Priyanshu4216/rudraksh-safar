import { Calendar, MapPin, Clock, Wallet, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FactProps {
    destination: string;
    startCity: string;
    duration: string;
    mode: string;
    budget: string;
    crowdLevel: 'Low' | 'Medium' | 'High';
    priceTrend: 'Low' | 'Average' | 'High';
    bestSeason: string;
}

const DestinationFactSheet = ({
    destination,
    startCity = "Raipur/Bhilai",
    duration,
    mode,
    budget,
    crowdLevel,
    priceTrend,
    bestSeason
}: FactProps) => {

    const getCrowdColor = (level: string) => {
        switch (level) {
            case 'Low': return 'bg-green-100 text-green-700';
            case 'Medium': return 'bg-yellow-100 text-yellow-700';
            case 'High': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100';
        }
    };

    const getPriceIcon = (trend: string) => {
        if (trend === 'Low') return '↓';
        if (trend === 'High') return '↑';
        return '→';
    };

    return (
        <Card className="border-indigo-100 shadow-sm my-8 overflow-hidden">
            <CardHeader className="bg-indigo-50/50 pb-4">
                <CardTitle className="text-lg flex items-center gap-2 text-indigo-900">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    Quick Facts: {destination} via {startCity}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Machine Readable Fact Blocks */}
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Typical Duration</span>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-500" /> {duration}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Travel Mode</span>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            <Wallet className="w-4 h-4 text-indigo-500" /> {mode}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Est. Budget</span>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            <span className="text-indigo-500 font-bold">₹</span> {budget}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Best Season</span>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-indigo-500" /> {bestSeason}
                        </div>
                    </div>
                </div>

                {/* AI / Prediction Block */}
                <div className="mt-6 pt-6 border-t border-dashed border-indigo-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium">Expected Crowd Level</span>
                        </div>
                        <Badge variant="secondary" className={getCrowdColor(crowdLevel)}>
                            {crowdLevel}
                        </Badge>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium">Current Price Trend</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-sm">
                            {priceTrend} <span className="text-xs bg-slate-200 px-1.5 rounded">{getPriceIcon(priceTrend)}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DestinationFactSheet;
