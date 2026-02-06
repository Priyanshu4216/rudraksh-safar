
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { User, MapPin, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getAuthorBySlug, getPostsByAuthor } from './BlogData';

const AuthorPage = () => {
    const { slug } = useParams();
    const author = getAuthorBySlug(slug || '');

    // Guardrail
    if (!author) return <Navigate to="/404" replace />;

    const authorPosts = getPostsByAuthor(author.id).filter(p => p.isIndexable);

    // Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.role,
            "description": author.bio,
            "url": `https://rudrakshsafar.com/authors/${author.slug}`,
            "worksFor": {
                "@type": "TravelAgency",
                "name": "Rudraksh Safar"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>{author.name} - Travel Expert | Rudraksh Safar</title>
                <meta name="description" content={`Meet ${author.name}, ${author.role} at Rudraksh Safar. Read their latest travel guides and tips.`} />
                <link rel="canonical" href={`https://rudrakshsafar.com/authors/${author.slug}`} />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-16">

                {/* Profile Header */}
                <section className="container mx-auto px-4 mb-16">
                    <div className="max-w-4xl mx-auto bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
                        <div className="relative">
                            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-xl">
                                <AvatarImage src={author.image} alt={author.name} />
                                <AvatarFallback className="text-4xl"><User /></AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-2 rounded-full border-4 border-background" title="Verified Expert">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">{author.name}</h1>
                            <p className="text-primary font-medium text-lg mb-4">{author.role}</p>
                            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                                {author.bio}
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-full shadow-sm border">
                                    <Clock className="h-4 w-4 text-primary" />
                                    {author.experience}
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-full shadow-sm border">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    Based in Bhilai
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Author's Posts */}
                <section className="container mx-auto px-4 max-w-5xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-8 w-1 bg-primary rounded-full"></div>
                        <h2 className="text-2xl font-bold">Guides by {author.name.split(' ')[0]}</h2>
                    </div>

                    {authorPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {authorPosts.map(post => (
                                <Link key={post.id} to={`/blog/${post.category}/${post.slug}`} className="group block">
                                    <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="p-6 flex-1">
                                            <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">
                                                {post.category}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                                {post.description}
                                            </p>
                                        </div>
                                        <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(post.publishedDate).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1 font-medium text-primary group-hover:translate-x-1 transition-transform">
                                                Read Guide <ArrowRight className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-muted-foreground/20">
                            <p className="text-muted-foreground">No guides published yet.</p>
                        </div>
                    )}
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default AuthorPage;
