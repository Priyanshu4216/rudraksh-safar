import { Helmet } from 'react-helmet-async';
import CinematicHero from '@/components/where-to-go/CinematicHero';
import CategoryCarousel from '@/components/where-to-go/CategoryCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';

const ADVENTURE_DESTINATIONS = [
    {
        id: 'umling-la',
        title: 'Umling La',
        location: 'Ladakh, India',
        imageUrl: '/images/ladakh/ladakh-img-5.webp',
        linkUrl: '/destinations/umling-la',
        description: 'The highest motorable road in the world at 19,024 feet. A true ultimate challenge.'
    },
    {
        id: 'hanle',
        title: 'Hanle',
        location: 'Ladakh, India',
        imageUrl: '/images/ladakh/ladakh-img-1.webp',
        linkUrl: '/destinations/hanle',
        description: 'Home to the Indian Astronomical Observatory and pristine dark skies.'
    },
    {
        id: 'spiti-valley',
        title: 'Spiti Valley',
        location: 'Himachal Pradesh',
        imageUrl: '/images/ladakh/ladakh-img-6.webp',
        linkUrl: '/destinations/spiti-valley',
        description: 'Navigate treacherous cliff-hanger roads and ancient Tibetan monasteries.'
    },
    {
        id: 'chadar-trek',
        title: 'Chadar Trek',
        location: 'Zanskar, Ladakh',
        imageUrl: '/images/ladakh/ladakh-img-3.webp',
        linkUrl: '/destinations/chadar-trek',
        description: 'Trek across the frozen Zanskar river in sub-zero extreme conditions.'
    }
];

export default function AdventureSpots() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>Adventure Spots & Extreme Expeditions | Rudraksh Safar</title>
                <meta name="description" content="Discover extreme adventure destinations in India. Conquer Umling La, Hanle, Spiti Valley, and the Chadar Trek with our expert expedition guides." />
                <link rel="canonical" href="https://rudrakshsafar.com/where-to-go/adventure-spots" />
            </Helmet>

            <Navbar />

            <main>
                <CinematicHero 
                    title="Where Roads End."
                    subtitle="Push your limits. Conquer the highest passes, navigate treacherous cliff-hangers, and trek across frozen rivers in the heart of the Himalayas."
                    imageUrl="/images/ladakh/ladakh-img-1.webp"
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
                            The Pursuit of the Extreme
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-editorial-body text-left md:text-center"
                        >
                            <p>
                                Adventure is not just an activity; it is a profound test of human resilience. The destinations curated here are not for the faint of heart. They require preparation, acclimatization, and a spirit willing to endure the unforgiving yet breathtaking beauty of extreme altitudes.
                            </p>
                            <p>
                                From riding a motorcycle to the 19,024-foot summit of Umling La, to surviving the biting cold of the Chadar Trek, these expeditions will redefine your understanding of limits.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div id="destinations">
                    <CategoryCarousel 
                        title="Top Adventure Destinations"
                        subtitle="The most formidable challenges in the Indian subcontinent."
                        items={ADVENTURE_DESTINATIONS}
                    />
                </div>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
