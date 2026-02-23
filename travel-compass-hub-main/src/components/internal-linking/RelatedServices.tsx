import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Plane, FileText, Train, Car, Ship, ShieldCheck } from 'lucide-react';

interface RelatedServicesProps {
    serviceType?: 'Booking' | 'Documentation' | 'All';
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ serviceType = 'All' }) => {
    const navigate = useNavigate();

    const services = [
        {
            id: 'visa',
            title: 'Visa Assistance',
            icon: FileText,
            desc: '99% Success Rate',
            link: '/travel-services/visa-assistance',
            type: 'Documentation',
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            id: 'flight',
            title: 'Flight Booking',
            icon: Plane,
            desc: 'Cheaper than Online',
            link: '/flight-booking-bhilai',
            type: 'Booking',
            color: 'text-sky-600',
            bg: 'bg-sky-50 dark:bg-sky-900/20'
        },
        {
            id: 'train',
            title: 'Train Tickets',
            icon: Train,
            desc: 'Tatkal Specialists',
            link: '/train-booking-bhilai',
            type: 'Booking',
            color: 'text-orange-600',
            bg: 'bg-orange-50 dark:bg-orange-900/20'
        },
        {
            id: 'cab',
            title: 'Cab Rental',
            icon: Car,
            desc: 'Airport Drops & Local',
            link: '/travel-services/cab-rental',
            type: 'Booking',
            color: 'text-yellow-600',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20'
        },
        {
            id: 'insurance',
            title: 'Travel Safety',
            icon: ShieldCheck,
            desc: 'Insurance & Tips',
            link: '/travel-safety',
            type: 'Documentation',
            color: 'text-green-600',
            bg: 'bg-green-50 dark:bg-green-900/20'
        },
        {
            id: 'cruise',
            title: 'Cruise Booking',
            icon: Ship,
            desc: 'Luxury Sea Travel',
            link: '/travel-services/cruise-booking',
            type: 'Booking',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 dark:bg-indigo-900/20'
        }
    ];

    const filteredServices = serviceType === 'All'
        ? services
        : services.filter(s => s.type === serviceType || s.type === 'All'); // Keep generics if any

    return (
        <section className="py-10 border-t border-border">
            <div className="container mx-auto px-4">
                <h3 className="text-xl font-bold mb-6">Essential Services for Your Trip</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {filteredServices.map((service) => (
                        <Card
                            key={service.id}
                            className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-1 border border-border"
                            onClick={() => navigate(service.link)}
                        >
                            <CardContent className="p-4 flex flex-col items-center text-center">
                                <div className={`w-10 h-10 rounded-full ${service.bg} flex items-center justify-center mb-3`}>
                                    <service.icon className={`w-5 h-5 ${service.color}`} />
                                </div>
                                <h4 className="font-bold text-sm mb-1">{service.title}</h4>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">{service.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedServices;
