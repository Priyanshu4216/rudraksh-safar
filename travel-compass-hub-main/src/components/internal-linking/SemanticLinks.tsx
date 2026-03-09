import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HOME_CITY } from '@/lib/travelMeta';

interface SemanticLinksProps {
    tag: string;
    type?: 'package' | 'blog' | 'destination';
}

const SemanticLinks = ({ tag, type = 'package' }: SemanticLinksProps) => {
    // Database of SEO-rich semantic links grouped by region/tag
    const semanticDB: Record<string, { url: string; anchor: string; description: string }[]> = {
        'Dubai': [
            { url: '/dubai-all-packages', anchor: `Dubai Tour Packages from ${HOME_CITY}`, description: 'Explore our handpicked itineraries for Dubai.' },
            { url: '/travel-services/visa-assistance', anchor: 'Dubai Visa Guide for Indians', description: 'Everything you need to know about UAE tourist visas.' },
            { url: '/dubai/best-time-to-visit', anchor: 'Best Time to Visit Dubai', description: 'Plan your trip during the ideal weather window.' },
            { url: '/case-studies/dubai-corporate-tour', anchor: 'Dubai Corporate Tour Case Study', description: 'See how we managed a 50-person corporate offsite in Dubai.' }
        ],
        'Thailand': [
            { url: '/international-packages', anchor: `Thailand Tour Packages from ${HOME_CITY}`, description: 'Curated Phuket, Krabi, and Bangkok trips.' },
            { url: '/case-studies/thailand-honeymoon', anchor: 'Luxury Thailand Honeymoon', description: 'Read about our exclusive honeymoon planning in Phuket.' },
            { url: '/travel-services/visa-assistance', anchor: 'Thailand Visa on Arrival Guide', description: 'Document checklist and fees for Indian travelers.' }
        ],
        'Spiritual': [
            { url: '/domestic-packages', anchor: 'Chardham Yatra Packages 2026', description: 'Safe and comfortable VIP Darshan tours.' },
            { url: '/case-studies/chardham-vip-yatra', anchor: 'Chardham Yatra for Senior Citizens', description: 'How we plan safe travel for elderly pilgrims.' },
            { url: '/travel-services/hotel-booking', anchor: 'Kedarnath Helicopter Booking Assistance', description: 'Bypass the trek with reliable shuttle bookings.' }
        ],
        'Goa': [
            { url: '/domestic-packages', anchor: `Goa Tour Packages from ${HOME_CITY}`, description: 'Beach holidays for families and couples.' }
        ]
    };

    // Fallback links if tag is not specifically mapped
    const fallbackLinks = [
        { url: '/domestic-packages', anchor: 'Explore Our Best Domestic Tour Packages', description: 'Trending holidays across India.' },
        { url: '/international-packages', anchor: `International Trips from ${HOME_CITY}`, description: 'Hassle-free global travel with local support.' },
        { url: '/travel-services/visa-assistance', anchor: 'Expert Tourist Visa Assistance', description: 'Get your travel documents sorted.' }
    ];

    const linksToDisplay = semanticDB[tag] || fallbackLinks;

    return (
        <div className="bg-navy-light/5 border border-navy-light/10 rounded-2xl p-6 lg:p-8 mt-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-deep">
                    Related Content for Your Strategy
                </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {linksToDisplay.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.url}
                        className="group block p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-navy-deep group-hover:text-gold-dark transition-colors mb-1">
                                    {link.anchor}
                                </h4>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {link.description}
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SemanticLinks;
