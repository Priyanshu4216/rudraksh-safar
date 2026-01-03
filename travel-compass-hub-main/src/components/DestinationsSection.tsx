import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 'bali',
    name: 'Bali',
    description: 'Tropical paradise & ancient temples',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    description: 'Crystal waters & overwater villas',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    description: 'Sacred temple in the Himalayas',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    description: 'Land of high passes & lakes',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Luxury meets desert adventure',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    size: 'medium',
  },
];

const DestinationCard = ({ destination }: { destination: typeof destinations[0] }) => {
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2 h-80 md:h-full',
    medium: 'h-64 md:h-80',
    small: 'h-64',
  };

  return (
<Link
      to={`/package/${destination.id}`}
      onClick={() => window.scrollTo(0, 0)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer block ${sizeClasses[destination.size as keyof typeof sizeClasses]}`}
    >
      <img
        src={destination.image}
        alt={`${destination.name} - ${destination.description} travel destination`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">
            {destination.name}
          </h3>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {destination.description}
          </p>
        </div>
        
        {/* Arrow Button */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="w-6 h-6 text-secondary-foreground" />
        </div>
      </div>
    </Link>
  );
};

const DestinationsSection = () => {
  return (
    <section id="destinations" className="section-padding bg-muted/30" aria-labelledby="destinations-heading">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Destinations
          </span>
          <h2 id="destinations-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Dream Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            From tropical paradises to sacred pilgrimages, discover places that inspire wanderlust 
            and create unforgettable memories.
          </p>
        </div>

        {/* Destinations Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
