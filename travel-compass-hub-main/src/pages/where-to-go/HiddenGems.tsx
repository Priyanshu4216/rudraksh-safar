import { Helmet } from 'react-helmet-async';
import CinematicHero from '@/components/where-to-go/CinematicHero';
import CategoryCarousel from '@/components/where-to-go/CategoryCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';

const HIDDEN_GEMS = [
    {
        id: 'gurez-valley',
        title: 'Gurez Valley',
        location: 'Kashmir, India',
        imageUrl: '/images/ladakh/ladakh-img-7.webp',
        linkUrl: '/destinations/gurez-valley',
        description: 'A deeply hidden valley in the high Himalayas, once part of the ancient Silk Route. Untouched, pristine, and guarded by the Habba Khatoon peak.'
    },
    {
        id: 'chitkul',
        title: 'Chitkul',
        location: 'Kinnaur, Himachal',
        imageUrl: '/images/ladakh/ladakh-img-8.webp',
        linkUrl: '/destinations/chitkul',
        description: 'The last inhabited village near the Indo-China border. Famous for its wooden houses, Baspa river, and unpolluted air.'
    },
    {
        id: 'kalpa',
        title: 'Kalpa',
        location: 'Kinnaur, Himachal',
        imageUrl: '/images/ladakh/ladakh-img-9.webp',
        linkUrl: '/destinations/kalpa',
        description: 'Offering the most majestic, unobstructed views of the Kinner Kailash range. A spiritual and visual masterpiece.'
    },
    {
        id: 'jibhi',
        title: 'Jibhi',
        location: 'Tirthan Valley, Himachal',
        imageUrl: '/images/ladakh/ladakh-img-10.webp',
        linkUrl: '/destinations/jibhi',
        description: 'A mesmerizing hamlet surrounded by lush pine forests, tranquil freshwater lakes, and untouched nature.'
    }
];

export default function HiddenGems() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>Hidden Gems & Offbeat Destinations | Rudraksh Safar</title>
                <meta name="description" content="Discover the best hidden gems in India. Explore untouched valleys like Gurez, Chitkul, Kalpa, and Jibhi, far away from commercial tourism." />
                <link rel="canonical" href="https://rudrakshsafar.com/where-to-go/hidden-gems" />
            </Helmet>

            <Navbar />

            <main>
                <CinematicHero 
                    title="Beyond the Map."
                    subtitle="Discover pristine valleys, ancient border villages, and offbeat retreats that remain untouched by commercial tourism."
                    imageUrl="/images/ladakh/ladakh-img-2.webp"
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
                            The Luxury of Isolation
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-editorial-body text-left md:text-center"
                        >
                            <p>
                                In an era where every destination is heavily documented, finding true isolation is the ultimate luxury. The hidden gems curated here offer more than just a getaway; they offer a return to raw, unedited nature.
                            </p>
                            <p>
                                From the remote frontiers of the Gurez Valley in Kashmir to the last inhabited villages of the Kinnaur district, these destinations promise silence, authentic cultural encounters, and landscapes that feel entirely your own.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div id="destinations">
                    <CategoryCarousel 
                        title="Offbeat Himalayan Retreats"
                        subtitle="The most beautiful, undiscovered corners of the mountains."
                        items={HIDDEN_GEMS}
                    />
                </div>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
