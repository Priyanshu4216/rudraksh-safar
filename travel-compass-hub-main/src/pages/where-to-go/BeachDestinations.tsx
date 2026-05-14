import { Helmet } from 'react-helmet-async';
import CinematicHero from '@/components/where-to-go/CinematicHero';
import CategoryCarousel from '@/components/where-to-go/CategoryCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';

const BEACH_DESTINATIONS = [
    {
        id: 'andaman',
        title: 'Andaman Islands',
        location: 'Bay of Bengal',
        imageUrl: '/images/Thailand/Pattaya/pattaya-thailand-featured.webp',
        linkUrl: '/destinations/andaman',
        description: 'Pristine white sand beaches and bioluminescent waters.'
    },
    {
        id: 'gokarna',
        title: 'Gokarna',
        location: 'Karnataka',
        imageUrl: '/images/Discover/Thailand/Pattaya/coral island.webp',
        linkUrl: '/destinations/gokarna',
        description: 'A secluded temple town with pristine, hidden beaches perfect for soul searching.'
    },
    {
        id: 'lakshadweep',
        title: 'Lakshadweep',
        location: 'Arabian Sea',
        imageUrl: '/images/Discover/Thailand/Pattaya/underwaterworld.jpg',
        linkUrl: '/destinations/lakshadweep',
        description: 'An archipelago of isolated coral reefs and crystal clear lagoons.'
    }
];

export default function BeachDestinations() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>Premium Beach Destinations | Rudraksh Safar</title>
                <meta name="description" content="Discover the most pristine and luxurious beach escapes in India, from the white sands of Andaman to the hidden coves of Gokarna." />
                <link rel="canonical" href="https://rudrakshsafar.com/where-to-go/beach-destinations" />
            </Helmet>

            <Navbar />

            <main>
                <CinematicHero 
                    title="The Edge of the Ocean."
                    subtitle="Escape to untouched coastlines, bioluminescent waters, and secluded coral reefs where time stands still."
                    imageUrl="/images/Thailand/Pattaya/pattaya-thailand-featured.webp"
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
                            Coastal Solitude
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-editorial-body text-left md:text-center"
                        >
                            <p>
                                The rhythm of the tide has a way of resetting the human spirit. Our coastal collection looks past the crowded tourist shores to find genuine tranquility.
                            </p>
                            <p>
                                Whether you're diving into the rich coral reefs of Lakshadweep or seeking out the hidden, rocky coves of Gokarna, these destinations offer a premium, unhurried coastal experience.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div id="destinations">
                    <CategoryCarousel 
                        title="Coastal Escapes"
                        subtitle="Pristine shores across the Indian Ocean."
                        items={BEACH_DESTINATIONS}
                    />
                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
