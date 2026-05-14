import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GuideTemplateProps {
    seoTitle: string;
    seoDescription: string;
    canonicalUrl: string;
    title: string;
    subtitle: string;
    author?: string;
    publishDate?: string;
    heroImageUrl: string;
    parentDestinationUrl: string;
    parentDestinationName: string;
    children: ReactNode;
}

export default function GuideTemplate({
    seoTitle,
    seoDescription,
    canonicalUrl,
    title,
    subtitle,
    author = "Rudraksh Safar Expeditions",
    publishDate,
    heroImageUrl,
    parentDestinationUrl,
    parentDestinationName,
    children
}: GuideTemplateProps) {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="article" />
            </Helmet>

            <Navbar />

            <main className="pt-24 pb-16">
                <article className="container max-w-4xl mx-auto px-4">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link 
                            to={parentDestinationUrl} 
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to {parentDestinationName}
                        </Link>
                    </div>

                    {/* Guide Header */}
                    <motion.header 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="mb-12 space-y-6 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinematic font-bold leading-tight text-foreground">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                            {subtitle}
                        </p>
                        
                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-muted-foreground pt-4 border-t border-border/50">
                            <span>By {author}</span>
                            {publishDate && (
                                <>
                                    <span>•</span>
                                    <span>{publishDate}</span>
                                </>
                            )}
                        </div>
                    </motion.header>

                    {/* Hero Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl"
                    >
                        <img 
                            src={heroImageUrl} 
                            alt={title} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content Body */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-cinematic prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-editorial-body max-w-none prose-img:rounded-2xl"
                    >
                        {children}
                    </motion.div>
                </article>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
