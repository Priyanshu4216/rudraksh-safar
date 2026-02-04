import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
    label: string;
    path: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rudrakshsafar.com/"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://rudrakshsafar.com${item.path}`
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
                                </Link>
                            </li>
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                    {index === items.length - 1 ? (
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
