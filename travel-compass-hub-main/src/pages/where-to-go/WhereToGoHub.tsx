import { Helmet } from 'react-helmet-async';
import CinematicHero from '@/components/where-to-go/CinematicHero';
import CategoryCarousel from '@/components/where-to-go/CategoryCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORIES = [
    {
        id: 'adventure-spots',
        title: 'Adventure Spots',
        location: 'High Altitudes & Trails',
        imageUrl: '/images/ladakh/ladakh-img-1.webp',
        linkUrl: '/where-to-go/adventure-spots',
        description: 'Conquer the highest motorable roads and raw Himalayan terrain. For the thrill-seekers and expeditionists.'
    },
    {
        id: 'hidden-gems',
        title: 'Hidden Gems',
        location: 'Offbeat Escapes',
        imageUrl: '/images/ladakh/ladakh-img-2.webp',
        linkUrl: '/where-to-go/hidden-gems',
        description: 'Untouched hamlets, secret valleys, and locations far away from commercial tourism.'
    },
    {
        id: 'hills-and-mountains',
        title: 'Hills & Mountains',
        location: 'Himalayas & Western Ghats',
        imageUrl: '/images/ladakh/ladakh-img-3.webp',
        linkUrl: '/where-to-go/hills-and-mountains',
        description: 'Immerse yourself in the grandeur of snow-capped peaks and deep, resonant valleys.'
    },
    {
        id: 'beach-destinations',
        title: 'Beach Destinations',
        location: 'Coastal Escapes',
        imageUrl: '/images/ladakh/ladakh-img-4.webp',
        linkUrl: '/where-to-go/beach-destinations',
        description: 'From the bioluminescent shores of Maldives to the pristine hidden beaches of Gokarna.'
    }
];

const TRENDING = [
    {
        id: 'umling-la',
        title: 'Umling La',
        location: 'Ladakh, India',
        imageUrl: '/images/ladakh/ladakh-img-5.webp',
        linkUrl: '/destinations/umling-la',
        description: 'The world\'s highest motorable road. A true test of machine and human endurance.'
    },
    {
        id: 'spiti-valley',
        title: 'Spiti Valley',
        location: 'Himachal Pradesh',
        imageUrl: '/images/ladakh/ladakh-img-6.webp',
        linkUrl: '/destinations/spiti-valley',
        description: 'A cold desert mountain valley located high in the Himalayas.'
    },
    {
        id: 'gurez-valley',
        title: 'Gurez Valley',
        location: 'Kashmir',
        imageUrl: '/images/ladakh/ladakh-img-7.webp',
        linkUrl: '/destinations/gurez-valley',
        description: 'A deeply hidden valley in the high Himalayas, once part of the ancient Silk Route.'
    }
];

export default function WhereToGoHub() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>Where To Go | Cinematic Travel Discovery Engine</title>
                <meta name="description" content="Discover premium Himalayan expeditions, hidden gems, and luxury travel destinations. The ultimate travel discovery engine by Rudraksh Safar." />
                <link rel="canonical" href="https://rudrakshsafar.com/where-to-go" />
            </Helmet>

            <Navbar />

            <main>
                <CinematicHero 
                    title="Discover the Extraordinary."
                    subtitle="Immersive expeditions. Untouched Himalayan valleys. Premium coastal escapes. Where will your next story begin?"
                    imageUrl="/images/ladakh/ladakh-img-3.webp"
                    scrollToId="discovery-grid"
                />

                <div id="discovery-grid">
                    <CategoryCarousel 
                        title="Explore by Category"
                        subtitle="Venture into distinct travel styles tailored for the cinematic explorer."
                        items={CATEGORIES}
                    />
                </div>

                <div className="bg-depth-2">
                    <CategoryCarousel 
                        title="Trending Expeditions"
                        subtitle="The most sought-after extreme journeys and high-altitude conquests right now."
                        items={TRENDING}
                    />
                </div>

                {/* Editorial Section / Semantic Body */}
                <section className="py-24 bg-background">
                    <div className="container max-w-4xl mx-auto px-4 text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-cinematic-h2 mb-8"
                        >
                            The Rudraksh Safar Philosophy
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-editorial-body text-left md:text-center"
                        >
                            <p>
                                We believe that true travel is not about ticking boxes on a generic itinerary. It is about the visceral feeling of the wind at 19,000 feet, the profound silence of a hidden Himalayan valley, and the untold stories waiting at the end of unmarked roads.
                            </p>
                            <p>
                                Our discovery engine is designed to inspire the expeditionist in you. Whether you are seeking the ultimate high-altitude challenge at Umling La, or a secluded, pristine beach in the Andaman archipelago, we guide you to destinations that resonate with your soul.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
