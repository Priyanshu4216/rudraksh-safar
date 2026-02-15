import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Globe, Plane, Train } from 'lucide-react';

interface RelatedLocalPagesProps {
    currentCity?: 'Bhilai' | 'Raipur' | 'Durg' | 'Other';
}

const RelatedLocalPages: React.FC<RelatedLocalPagesProps> = ({ currentCity = 'Bhilai' }) => {
    const navigate = useNavigate();

    const localLinks = [
        {
            title: 'Travel Agent in Bhilai',
            link: '/travel-agent-bhilai',
            icon: MapPin,
            city: 'Bhilai'
        },
        {
            title: 'Travel Agent in Raipur',
            link: '/travel-agent-raipur',
            icon: MapPin,
            city: 'Raipur'
        },
        {
            title: 'Travel Agent in Durg',
            link: '/travel-agent-durg',
            icon: MapPin,
            city: 'Durg'
        },
        {
            title: 'Flight Booking Bhilai',
            link: '/flight-booking-bhilai',
            icon: Plane,
            city: 'Bhilai'
        },
        {
            title: 'Train Booking Bhilai',
            link: '/train-booking-bhilai',
            icon: Train,
            city: 'Bhilai'
        },
        {
            title: 'Visa Services in Bhilai',
            link: '/visa-agent-bhilai',
            icon: Globe,
            city: 'Bhilai'
        },
        {
            title: 'Passport Agent Bhilai',
            link: '/passport-agent-bhilai',
            icon: Globe,
            city: 'Bhilai'
        },
        {
            title: 'Tour Packages from Raipur',
            link: '/tour-packages-raipur',
            icon: MapPin,
            city: 'Raipur'
        }
    ];

    // Filter out the exact same page if titles match, but here we filter loosely by logic if needed.
    // simpler: just show all relevant ones, maybe highlight current?
    // Let's just shuffle or show top relevant ones.

    // For now, simple list.

    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900/20 border-t border-border mt-12">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-6 font-serif">Explore Local Travel Services in Chhattisgarh</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {localLinks.map((item) => (
                        <Card
                            key={item.link}
                            className="hover:shadow-md transition-all cursor-pointer border-l-4 border-l-primary"
                            onClick={() => navigate(item.link)}
                        >
                            <CardContent className="p-4 flex items-center gap-3">
                                <item.icon className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">{item.title}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-muted-foreground">
                    <a href="/goa-tour-package-from-bhilai" className="hover:text-primary underline">Goa Packages from Bhilai</a>
                    <a href="/dubai-tour-package-from-bhilai" className="hover:text-primary underline">Dubai Trips from Bhilai</a>
                    <a href="/thailand-tour-package-from-raipur" className="hover:text-primary underline">Thailand from Raipur</a>
                    <a href="/kashmir-tour-package-from-bhilai" className="hover:text-primary underline">Kashmir from Bhilai</a>
                </div>
            </div>
        </section>
    );
};

export default RelatedLocalPages;
