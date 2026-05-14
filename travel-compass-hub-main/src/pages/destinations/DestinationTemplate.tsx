import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DestinationHero from '@/components/destinations/DestinationHero';
import QuickFacts, { QuickFact } from '@/components/destinations/QuickFacts';
import StickyNav from '@/components/destinations/StickyNav';

interface DestinationTemplateProps {
    seoTitle: string;
    seoDescription: string;
    canonicalUrl: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImageUrl: string;
    quickFacts: QuickFact[];
    navItems: { id: string; label: string }[];
    children: ReactNode; // LongFormSections, WeatherGuide, FAQs, etc.
}

export default function DestinationTemplate({
    seoTitle,
    seoDescription,
    canonicalUrl,
    heroTitle,
    heroSubtitle,
    heroImageUrl,
    quickFacts,
    navItems,
    children
}: DestinationTemplateProps) {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <Navbar />

            <main>
                <DestinationHero 
                    title={heroTitle}
                    subtitle={heroSubtitle}
                    imageUrl={heroImageUrl}
                    scrollToId="quick-facts"
                />

                <QuickFacts facts={quickFacts} />

                <div className="container max-w-[1400px] mx-auto px-4 py-12 flex flex-col xl:flex-row gap-12 relative items-start">
                    
                    {/* Sticky Table of Contents (Desktop) */}
                    <StickyNav items={navItems} />

                    {/* Main Content Area (5000+ words capacity) */}
                    <article className="flex-1 min-w-0 max-w-4xl pb-24">
                        {children}
                    </article>
                    
                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
