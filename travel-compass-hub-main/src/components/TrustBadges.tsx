import { ShieldCheck, Star, MapPin, Users } from 'lucide-react';

const TrustBadges = () => {
    const badges = [
        {
            icon: ShieldCheck,
            text: "Verified Local Agency (10+ Years)",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: Star,
            text: "5.0⭐ Google Rating (20+ Reviews)",
            color: "text-yellow-500",
            bg: "bg-yellow-50"
        },
        {
            icon: MapPin,
            text: "Serving Bhilai, Raipur & Nearby",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Users,
            text: "Real Human Support (Call/WhatsApp)",
            color: "text-purple-600",
            bg: "bg-purple-50"
        }
    ];

    return (
        <div className="py-8 bg-background border-y border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">Why Trust Rudraksh Safar?</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {badges.map((badge, index) => (
                        <div key={index} className={`flex items-center gap-3 p-4 rounded-lg border border-border/50 ${badge.bg} transition-all hover:shadow-sm`}>
                            <badge.icon className={`h-6 w-6 flex-shrink-0 ${badge.color}`} />
                            <span className="font-medium text-sm md:text-base text-foreground/90">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
