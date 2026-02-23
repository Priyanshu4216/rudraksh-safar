import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Train, Bus, Hotel, FileText, Stamp, MapPin, Briefcase, Palmtree, Ship } from 'lucide-react';

type SiloMode = 'booking' | 'local' | 'packages';

interface RelatedServicesProps {
    mode: SiloMode;
}

const allServices = [
    {
        id: 'flight',
        icon: Plane,
        title: 'Flight Booking',
        desc: 'Cheapest air tickets from Raipur',
        link: '/flight-booking-bhilai',
        silo: 'booking'
    },
    {
        id: 'train',
        icon: Train,
        title: 'Train Tickets',
        desc: 'Confirmed Tatkal & Sleeper tickets',
        link: '/train-booking-bhilai',
        silo: 'booking'
    },
    {
        id: 'bus',
        icon: Bus,
        title: 'Bus Booking',
        desc: 'AC Sleeper buses to Hyderabad/Pune',
        link: '/bus-booking-bhilai',
        silo: 'booking'
    },
    {
        id: 'cab',
        icon: Bus, // Using Bus icon as fallback or specific Car icon if available
        title: 'Cab Rental',
        desc: 'Airport drops & outstation taxis',
        link: '/travel-services/cab-rental',
        silo: 'booking'
    },
    {
        id: 'hotel',
        icon: Hotel,
        title: 'Hotel Booking',
        desc: 'Budget to Luxury stays',
        link: '/travel-services/hotel-booking',
        silo: 'booking'
    },
    {
        id: 'visa',
        icon: FileText,
        title: 'Visa Assistance',
        desc: 'Tourist & Business visas',
        link: '/visa-agent-bhilai',
        silo: 'booking'
    },
    {
        id: 'passport',
        icon: Stamp,
        title: 'Passport Agent',
        desc: 'New passport & renewal services',
        link: '/passport-agent-bhilai',
        silo: 'booking'
    },
    {
        id: 'cruise',
        icon: Ship,
        title: 'Cruise Booking',
        desc: 'Luxury ocean holidays',
        link: '/travel-services/cruise-booking',
        silo: 'booking'
    },
    {
        id: 'weekend',
        icon: MapPin,
        title: 'Weekend Getaways',
        desc: 'Short trips near Bhilai/Raipur',
        link: '/weekend-getaways-from-bhilai',
        silo: 'local'
    },
    {
        id: 'picnic',
        icon: Palmtree,
        title: 'Picnic Spots',
        desc: 'One day outing spots nearby',
        link: '/one-day-trip-near-bhilai', // Redirects to PicnicSpotsBhilai effectively
        silo: 'local'
    },
    {
        id: 'packages',
        icon: Briefcase,
        title: 'Tour Packages',
        desc: 'Domestic & International tours',
        link: '/budget-tour-packages',
        silo: 'packages'
    }
];

const RelatedServices = ({ mode }: RelatedServicesProps) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Logic to select related items based on silo
    // If we are in 'booking', show other booking services (cross-sell)
    // If we are in 'local', show booking services + packages (upsell)
    // If we are in 'packages', show booking services (utility)

    // For now, let's implement a simple logic:
    // Booking -> Show widely used other booking services (Train, Flight, Cab, Hotel) + Visa if international
    // Local -> Show Cab, Bus (transport) + Weekend/Packages

    const getRelatedItems = () => {
        switch (mode) {
            case 'booking':
                // Show a mix of other utilities. 
                // We shuffle or pick a static set that aren't the CURRENT page? 
                // For simplicity, we show a curated list of "More Services".
                return allServices.filter(s => ['flight', 'train', 'visa', 'cab'].includes(s.id));
            case 'local':
                return allServices.filter(s => ['cab', 'bus', 'packages', 'hotel'].includes(s.id));
            case 'packages':
                return allServices.filter(s => ['flight', 'visa', 'cab', 'passport'].includes(s.id));
            default:
                return allServices.slice(0, 4);
        }
    };

    const displayItems = getRelatedItems();

    return (
        <section ref={sectionRef} className="py-16 bg-muted/20 border-t">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold mb-2">You Might Also Need</h2>
                    <p className="text-muted-foreground">Complete your travel planning with our other services</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={item.link} className="block group">
                                <div className="bg-background border rounded-xl p-6 h-full hover:shadow-md transition-all hover:border-primary/50 text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedServices;
