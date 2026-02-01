import { Calendar, CheckCircle2, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface LogisticsSectionProps {
    bestTimeData: {
        destination: string;
        months: string;
    }[];
}

const LogisticsSection = ({ bestTimeData }: LogisticsSectionProps) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Best Time to Visit - Mini Calendar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Calendar className="w-6 h-6 text-primary" /> Best Time to Visit
                        </h2>
                        <div className="gap-4 grid">
                            {bestTimeData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
                                    <span className="font-bold text-foreground">{item.destination}</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400">
                                        {item.months}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Travel Logistics */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6 text-primary" /> Important Travel Logistics
                        </h2>
                        <Card className="border-l-4 border-l-secondary">
                            <CardHeader>
                                <CardTitle className="text-lg">Smooth Travel Promise</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "Nearest Airport: Swami Vivekananda Airport (Raipur)",
                                    "Visa Assistance provided for all international trips",
                                    "Pickup & Drop available from Bhilai, Durg & Raipur",
                                    "Verified hotels with family-friendly amenities",
                                    "24/7 on-trip support via WhatsApp/Call"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{text}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LogisticsSection;
