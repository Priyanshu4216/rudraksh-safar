import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from 'lucide-react';
import { allPackages as packages } from '@/data/packages';

interface RelatedDestinationsProps {
    currentRegion: string;
    currentPackageId?: string; // To exclude the current page
}

const RelatedDestinations: React.FC<RelatedDestinationsProps> = ({ currentRegion, currentPackageId }) => {
    const navigate = useNavigate();

    // Filter packages by same region but exclude current one
    // Note: homeRedesignData packages might not have a 'region' field explicitly, 
    // so we might need to rely on ID naming conventions or adding region data.
    // For now, let's filter by substring match if region isn't available, or just show random others.

    // Better strategy: Filter by category matches or specific IDs if we map them.
    // Let's assume we want to show 3 other destinations.

    const relatedPackages = packages
        .filter(pkg => pkg.id !== currentPackageId)
        // Simple logic: If region is "International", show other International. 
        // If "Domestic", show other Domestic.
        // We need to infer this if not present.
        .filter(pkg => {
            if (currentRegion === 'International') return pkg.id.includes('thailand') || pkg.id.includes('dubai') || pkg.id.includes('bali');
            if (currentRegion === 'Domestic') return !pkg.id.includes('thailand') && !pkg.id.includes('dubai') && !pkg.id.includes('bali');
            return true;
        })
        .slice(0, 3);

    if (relatedPackages.length === 0) return null;

    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold font-serif">Explore More {currentRegion} Destinations</h2>
                    <Button variant="ghost" onClick={() => navigate('/international-packages')} className="hidden md:flex">
                        View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {relatedPackages.map((pkg) => (
                        <Card key={pkg.id} className="group cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate(`/package/${pkg.id}`)}>
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    {pkg.duration}
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>{pkg.location}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                    {pkg.title}
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="font-bold text-primary">{pkg.price}</p>
                                    </div>
                                    <Button size="sm" variant="outline">View Plan</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" onClick={() => navigate('/international-packages')}>
                        View All Packages
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default RelatedDestinations;
