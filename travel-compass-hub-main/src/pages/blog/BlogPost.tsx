import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, CheckCircle, ArrowRight, MapPin, Tag, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getPostBySlug, getCategoryBySlug } from './BlogData';
import BreathingHeadline from './components/BreathingHeadline'; // Local component


const BlogPost = () => {
    const { category, slug } = useParams();
    const post = getPostBySlug(category || '', slug || '');
    const categoryData = getCategoryBySlug(category || '');

    // --- GUARDRAIL: 404 for Invalid Posts ---
    if (!post || !categoryData) {
        return <Navigate to="/404" replace />;
    }

    // --- GUARDRAIL: NoIndex Logic ---
    const robotsTag = post.isIndexable
        ? "index, follow, max-image-preview:large"
        : "noindex, follow";

    // --- SCHEMA GENERATION (Top-1%) ---
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "url": `https://rudrakshsafar.com/authors/${post.author.slug}` // Dynamic Author Link
        },
        "publisher": {
            "@type": "Organization",
            "name": "Rudraksh Safar",
            "logo": {
                "@type": "ImageObject",
                "url": "https://rudrakshsafar.com/logo.png"
            }
        },
        // Trust Signal: Reviewed By
        ...(post.reviewedBy && {
            "reviewedBy": {
                "@type": "Person",
                "name": post.reviewedBy.name,
                "jobTitle": post.reviewedBy.role
            }
        }),
        "datePublished": post.publishedDate,
        "dateModified": post.modifiedDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://rudrakshsafar.com/blog/${category}/${slug}`
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rudrakshsafar.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://rudrakshsafar.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": categoryData.title,
                "item": `https://rudrakshsafar.com/blog/${category}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": post.title,
                "item": `https://rudrakshsafar.com/blog/${category}/${slug}`
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{post.metaTitle || post.title} | Rudraksh Safar Blog</title>
                <meta name="description" content={post.description} />
                <meta name="robots" content={robotsTag} />
                <link rel="canonical" href={`https://rudrakshsafar.com/blog/${category}/${slug}`} />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.publishedDate} />
                <meta property="article:modified_time" content={post.modifiedDate} />

                {/* Schema Injection */}
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
                {post.faqs.length > 0 && (
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                )}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-16">
                {/* 1. Header Section */}
                <article className="container mx-auto px-4 max-w-4xl">
                    {/* Breadcrumbs (Visual) */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <span>/</span>
                        <Link to={`/blog/${category}`} className="hover:text-primary transition-colors">{categoryData.title}</Link>
                    </nav>

                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary uppercase tracking-widest text-xs px-3 py-1">
                        {categoryData.title}
                    </Badge>

                    <BreathingHeadline className="text-3xl md:text-5xl lg:text-5xl leading-tight mb-6">
                        {post.title}
                    </BreathingHeadline>

                    {/* Author & Trust Meta */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-border/40 py-6 mb-10">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-primary/10">
                                <AvatarImage src={post.author.image} alt={post.author.name} />
                                <AvatarFallback><User className="h-6 w-6 text-muted-foreground" /></AvatarFallback>
                            </Avatar>
                            <div>
                                <Link to={`/authors/${post.author.slug}`} className="font-bold text-foreground text-sm hover:underline">{post.author.name}</Link>
                                <p className="text-xs text-muted-foreground">{post.author.role} • {post.author.experience}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <span>Updated: {new Date(post.modifiedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>8 min read</span>
                            </div>
                            {post.reviewedBy && (
                                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Reviewed by {post.reviewedBy.name}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 1.5 Experience Signal (Behavioral SEO) */}
                    {post.experienceNote && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4" />
                                Why Trust This Guide?
                            </h3>
                            <p className="text-foreground/90 italic">
                                "{post.experienceNote}"
                            </p>
                        </div>
                    )}

                    {/* 1.6 Table of Contents (Behavioral SEO) */}
                    <div className="bg-muted/30 p-6 rounded-xl mb-10 border border-border/50">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            In This Guide
                        </h3>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            {/* Basic static TOC for now - easily dynamic in future */}
                            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                                <ArrowRight className="h-3 w-3" /> Introduction
                            </a>
                            {post.faqs.length > 0 && (
                                <a href="#faq-heading" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <ArrowRight className="h-3 w-3" /> Common Questions
                                </a>
                            )}
                        </nav>
                    </div>

                    {/* 2. Content Body */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                prose-h3:text-xl prose-h3:mt-8
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-li:text-muted-foreground
                prose-strong:text-foreground prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* 3. Recommended Services (The "Link Up" Strategy) */}
                    <div className="my-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-primary" />
                            Planned specifically for you?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Based on this guide, here are the most relevant services we offer at Rudraksh Safar:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {post.relatedServices.map((service, idx) => (
                                <Link
                                    key={idx}
                                    to={service.path}
                                    className="flex items-center justify-between p-4 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                                >
                                    <span className="font-medium group-hover:text-primary transition-colors">{service.name}</span>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 4. AEO-Optimized FAQ Section */}
                    {post.faqs.length > 0 && (
                        <section className="my-16" aria-labelledby="faq-heading">
                            <h2 id="faq-heading" className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {post.faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                        <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    )}

                    {/* 4.5 Search Helpfulness Micro-Interaction */}
                    <div className="my-12 py-8 border-y border-border/40 text-center">
                        <h4 className="font-bold mb-4">Was this guide helpful?</h4>
                        <div className="flex justify-center gap-4">
                            <Button variant="outline" size="sm" className="gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200">
                                <CheckCircle className="h-4 w-4" /> Yes, it helped
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                                No, I need more info
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            Your feedback helps us improve our Bhilai & Raipur travel guides.
                        </p>
                    </div>

                    {/* 5. Author Signature / CTA */}
                    <div className="mt-16 border-t pt-10">
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-muted/30 p-8 rounded-2xl">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <CheckCircle className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl font-bold mb-2">Need Personalized Help?</h3>
                                <p className="text-muted-foreground text-sm mb-0">
                                    Our team in Bhilai is ready to assist you. Whether it's a quick question or a full itinerary plan, we are just a WhatsApp message away.
                                </p>
                            </div>
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                                <a href="https://wa.me/919406182174" target="_blank" rel="noopener noreferrer">
                                    <span className="mr-2 font-bold">WhatsApp Expert</span>
                                    <Clock className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BlogPost;
