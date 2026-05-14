import { Helmet } from 'react-helmet-async';
import CinematicHero from '@/components/where-to-go/CinematicHero';
import CategoryCarousel from '@/components/where-to-go/CategoryCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';

const HILL_DESTINATIONS = [
    {
        id: 'spiti-valley',
        title: 'Spiti Valley',
        location: 'Himachal Pradesh',
        imageUrl: '/images/ladakh/ladakh-img-6.webp',
        linkUrl: '/destinations/spiti-valley',
        description: 'A cold desert mountain valley located high in the Himalayas.'
    },
    {
        id: 'manali',
        title: 'Manali',
        location: 'Himachal Pradesh',
        imageUrl: '/images/ladakh/ladakh-img-11.webp',
        linkUrl: '/destinations/manali',
        description: 'The evergreen valley of the gods, perfect for both adventurers and peace-seekers.'
    },
    {
        id: 'gulmarg',
        title: 'Gulmarg',
        location: 'Kashmir',
        imageUrl: '/images/ladakh/ladakh-img-12.webp',
        linkUrl: '/destinations/gulmarg',
        description: 'The ultimate winter wonderland. Ride the highest gondola and ski pristine powder.'
    }
];

export default function HillsAndMountains() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>Hills & Mountains Destinations | Rudraksh Safar</title>
                <meta name="description" content="Explore the most stunning hill stations and mountain valleys in India. Curated travel guides for Spiti, Manali, Gulmarg, and more." />
                <link rel="canonical" href="https://rudrakshsafar.com/where-to-go/hills-and-mountains" />
            </Helmet>

            <Navbar />

            <main>
                <CinematicHero 
                    title="The Altitude of Serenity."
                    subtitle="Immerse yourself in the grandeur of snow-capped peaks, deep resonant valleys, and the timeless silence of the Himalayas."
                    imageUrl="/images/ladakh/ladakh-img-3.webp"
                    scrollToId="destinations"
                />

                <section className="py-24 bg-background">
                    <div className="container max-w-4xl mx-auto px-4 text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-cinematic-h2 mb-8"
                        >
                            Elevate Your Journey
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-editorial-body text-left md:text-center"
                        >
                            <p>
                                The mountains are not merely a destination; they are a calling. For centuries, the high Himalayas have drawn seekers, adventurers, and poets alike, offering a profound sense of scale that puts the world into perspective.
                            </p>
                            <p>
                                From the vibrant apple orchards of Kinnaur to the stark, lunar landscapes of the Spiti Valley, our curated mountain destinations are designed to help you disconnect from the noise and reconnect with nature.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div id="destinations">
                    <CategoryCarousel 
                        title="Top Mountain Escapes"
                        subtitle="The most majestic valleys and peaks across the subcontinent."
                        items={HILL_DESTINATIONS}
                    />
                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
