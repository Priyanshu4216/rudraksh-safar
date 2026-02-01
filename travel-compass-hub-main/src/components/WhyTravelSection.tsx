import { Plane, Train, MapPin, Car, ShieldCheck, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface WhyTravelProps {
    city: 'Bhilai' | 'Raipur';
}

const WhyTravelSection = ({ city }: WhyTravelProps) => {
    const airport = "Swami Vivekananda Airport (Raipur)";
    const railway = city === 'Bhilai' ? "Durg Junction (Just 15 mins away)" : "Raipur Junction";

    const features = [
        {
            icon: Plane,
            title: "Nearest Airport",
            desc: airport,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: Train,
            title: "Best Railway Station",
            desc: railway,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            icon: Car,
            title: "Home Pickup",
            desc: `Available from anywhere in ${city}`,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            icon: UserCheck,
            title: "Local Support",
            desc: "Face-to-face meet with our agents",
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ];

    return (
        <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Travel From <span className="text-primary">{city}</span>?
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We make your journey seamless with local connectivity and ground support right from your doorstep.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-lg transition-all h-full border-t-4 border-t-primary/20">
                                <CardContent className="p-6 text-center">
                                    <div className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTravelSection;
