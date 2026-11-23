import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
    label?: string;
    path?: string;
    name?: string;
    url?: string;
    title?: string;
    href?: string;
}

export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    // Top-1% Rule: Don't render broken or empty breadcrumbs
    if (!items || items.length === 0) return null;

    // Normalize item fields (support label/path, name/url, title/href)
    const normalizedItems = items
        .map(item => ({
            label: item.label || item.name || item.title || '',
            path: item.path || item.url || item.href || ''
        }))
        .filter(item => Boolean(item.label && item.path));

    // Filter out 'Home' if it was explicitly passed to prevent duplication
    const cleanItems = normalizedItems.filter(
        item => item.path !== '/' && item.label.toLowerCase() !== 'home'
    );

    // If there were only Home items, don't render a breadcrumb trail to just Home
    if (cleanItems.length === 0) return null;

    // Helper to ensure valid absolute URLs (prevent double slashes)
    const getAbsoluteUrl = (path: string) => {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        let baseUrl = import.meta.env.VITE_SITE_URL || 'https://rudrakshsafar.com';
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        return `${baseUrl}${cleanPath}`;
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://rudrakshsafar.com/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rudrakshsafar.com/"
            },
            ...cleanItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": getAbsoluteUrl(item.path)
            }))
        ]
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Sticky Breadcrumb Wrapper */}
            <div className="sticky top-[4.5rem] z-40 w-full bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 py-3">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/" className="flex items-center hover:text-primary transition-colors">
                                    <Home className="w-4 h-4" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </li>
                            {cleanItems.map((item, index) => (
                                <li key={item.path} className="flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                    {index === cleanItems.length - 1 ? (
                                        <span className="font-medium text-foreground" aria-current="page">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link to={item.path} className="hover:text-primary transition-colors">
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Breadcrumbs;
