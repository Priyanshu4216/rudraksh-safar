import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, FileText, HelpCircle, Layers } from 'lucide-react';
import { getCategoryBySlug, getPostsByCategory } from './BlogData';
import BreathingHeadline from './components/BreathingHeadline';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryData = getCategoryBySlug(category || '');

    if (!categoryData) {
        return <Navigate to="/blog" replace />; // Fallback to blog index instead of 404 for UX
    }

    const posts = getPostsByCategory(category || '');
    const indexablePosts = posts.filter(p => p.isIndexable);

    // --- SCHEMA: CollectionPage + FAQPage (Hub) ---
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": categoryData.title,
        "description": categoryData.description,
        "url": `https://rudrakshsafar.com/blog/${category}`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": indexablePosts.map((post, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://rudrakshsafar.com/blog/${category}/${post.slug}`,
                "name": post.title
            }))
        }
    };

    const hubFaqSchema = categoryData.faqs && categoryData.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": categoryData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <>
            <Helmet>
                <title>{categoryData.title} | Rudraksh Safar Blog</title>
                <meta name="description" content={categoryData.description} />
                <link rel="canonical" href={`https://rudrakshsafar.com/blog/${category}`} />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                {hubFaqSchema && <script type="application/ld+json">{JSON.stringify(hubFaqSchema)}</script>}
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-20">
                {/* Header */}
                <section className="container mx-auto px-4 mb-16">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-foreground">{categoryData.title}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="px-3 py-1">Topic Hub</Badge>
                            <span className="text-sm text-muted-foreground">{posts.length} Guides Available</span>
                        </div>
                        <BreathingHeadline className="text-4xl md:text-6xl mb-6">
                            {categoryData.title}
                        </BreathingHeadline>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {categoryData.description}
                        </p>
                    </div>
                </section>

                {/* Content Grid */}
                <section className="container mx-auto px-4 mb-20">
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <Link key={post.id} to={`/blog/${category}/${post.slug}`} className="group h-full">
                                    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-muted group-hover:border-primary/50 overflow-hidden">
                                        {!post.isIndexable && (
                                            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs py-1 px-3 text-center font-medium">
                                                Coming Soon (Draft)
                                            </div>
                                        )}
                                        <CardHeader className="flex-1">
                                            <div className="flex gap-2 mb-3">
                                                <Badge variant="outline" className="font-normal text-xs">{post.author.name}</Badge>
                                            </div>
                                            <CardTitle className="leading-snug text-xl group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2 line-clamp-3">
                                                {post.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="mt-auto pt-0 pb-6">
                                            <div className="flex items-center text-sm font-medium text-primary">
                                                Read Guide <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-muted-foreground/20">
                            <Layers className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Guides Coming Soon</h3>
                            <p className="text-muted-foreground">Our editors are currently curating content for this section.</p>
                        </div>
                    )}
                </section>

                {/* Category Level FAQs (Hub) */}
                {categoryData.faqs && categoryData.faqs.length > 0 && (
                    <section className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-muted/10 rounded-2xl p-8 md:p-12 border border-border/50">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <HelpCircle className="h-8 w-8 text-primary" />
                                Common Questions
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-background rounded-xl px-4 shadow-sm">
                                {categoryData.faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`cat-faq-${index}`} className="border-b last:border-0">
                                        <AccordionTrigger className="text-left font-medium text-lg py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-base">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CategoryPage;
