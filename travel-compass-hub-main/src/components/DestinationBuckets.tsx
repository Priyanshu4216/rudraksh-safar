import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Destination {
    name: string;
    image: string;
    price: string;
    duration: string;
    link: string;
    tag?: string;
    rating?: string;
}

interface DestinationBucketsProps {
    title: string;
    description: string;
    destinations: Destination[];
}

const DestinationBuckets = ({ title, description, destinations }: DestinationBucketsProps) => {
    return (
        <section className="py-20" id="packages">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                        <p className="text-muted-foreground text-lg">{description}</p>
                    </div>
                    {/* <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All Packages <ArrowRight className="w-4 h-4" />
          </Button> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link to={dest.link} className="block h-full group">
                                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-primary/50">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                            <span className="text-white font-bold text-lg drop-shadow-md">{dest.name}</span>
                                            {dest.rating && (
                                                <div className="flex items-center gap-1 text-orange-300 bg-black/30 backdrop-blur-md px-2 py-0.5 rounded-full text-xs font-bold">
                                                    <Star className="w-3 h-3 fill-current" /> {dest.rating}
                                                </div>
                                            )}
                                        </div>
                                        {dest.tag && (
                                            <Badge className="absolute top-3 right-3 bg-secondary text-primary font-bold hover:bg-secondary">
                                                {dest.tag}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                                {dest.duration}
                                            </span>
                                            <span className="text-lg font-bold text-primary">{dest.price}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationBuckets;
