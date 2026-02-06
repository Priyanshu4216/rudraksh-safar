import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, MapPin, Plane, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { getAllCategories, BLOG_CATEGORIES } from './BlogData';
import BreathingHeadline from './components/BreathingHeadline';

const BlogIndex = () => {
    const categories = getAllCategories();

    // Group categories for cleaner UI
    const locationSilos = categories.filter(c => ['bhilai', 'raipur', 'chhattisgarh'].includes(c.slug));
    const serviceSilos = categories.filter(c => c.slug.includes('booking') || c.slug.includes('visa') || c.slug.includes('passport') || c.slug.includes('packages'));
    const guideSilos = categories.filter(c => !locationSilos.includes(c) && !serviceSilos.includes(c));

    return (
        <>
            <Helmet>
                <title>Travel Compass Blog | Expert Travel Guides from Bhilai & Raipur</title>
                <meta name="description" content="The ultimate travel resource for Chhattisgarh. Expert guides, visa tips, tour package reviews, and local travel advice from Rudraksh Safar." />
                <link rel="canonical" href="https://rudrakshsafar.com/blog" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-20">
                {/* Hero */}
                <section className="container mx-auto px-4 mb-20 text-center max-w-4xl">
                    <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/30 text-primary text-sm uppercase tracking-wider">
                        Travel Compass
                    </Badge>
                    <BreathingHeadline className="text-5xl md:text-7xl mb-8 tracking-tight">
                        Explore the World, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Starting from Chhattisgarh.
                        </span>
                    </BreathingHeadline>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        In-depth guides, honest reviews, and expert tips for finding the perfect trip. Curated by locals, for locals.
                    </p>

                    {/* Search Bar (Visual Only for now) */}
                    <div className="relative max-w-lg mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search guides (e.g., 'Thailand Visa', 'Goa Trip')..."
                            className="pl-12 h-14 rounded-full text-lg shadow-sm border-muted-foreground/20 focus-visible:ring-primary"
                        />
                    </div>
                </section>

                {/* 1. Location Silos (Priority) */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold">Local Travel Guides</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {locationSilos.map(cat => (
                            <Link key={cat.id} to={`/blog/${cat.slug}`} className="group">
                                <Card className="h-full hover:shadow-lg transition-all border-muted hover:border-primary/50">
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                                            {cat.title}
                                            <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                        </CardTitle>
                                        <CardDescription>{cat.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 2. Service Silos */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Plane className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold">Booking & Service Guides</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceSilos.map(cat => (
                            <Link key={cat.id} to={`/blog/${cat.slug}`} className="group">
                                <Card className="h-full hover:shadow-md transition-all border-muted hover:border-blue-400/50 bg-gradient-to-br from-background to-blue-50/10 dark:to-blue-900/10">
                                    <CardHeader>
                                        <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {cat.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">{cat.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 3. Guide Silos */}
                <section className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold">Tips & Inspiration</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {guideSilos.map(cat => (
                            <Link key={cat.id} to={`/blog/${cat.slug}`} className="group">
                                <Card className="h-full hover:shadow-md transition-all border-muted bg-muted/20">
                                    <CardHeader>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {cat.title}
                                        </CardTitle>
                                        <CardDescription>{cat.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BlogIndex;
