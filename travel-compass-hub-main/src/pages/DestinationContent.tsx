import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import {
  DESTINATION_PAGE_ORDER,
  getDestinationBestTime,
  getDestinationData,
  getDestinationDisplayName,
  getPageConfig,
  HONEYMOON_DESTINATIONS,
  isValidDestinationPage,
  LUXURY_DESTINATIONS,
  PACKAGE_SLUGS,
  type DestinationPageSlug,
} from '@/lib/destinationContent';
import DestinationSchema from '@/components/seo/DestinationSchema';
import DestinationContentBody from '@/components/destination-pages/DestinationContentBody';

const DestinationContent = () => {
  const { destinationSlug, pageSlug } = useParams();

  if (!destinationSlug || !pageSlug || !isValidDestinationPage(pageSlug)) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex" />
          <title>Page Not Found | Rudraksh Safar</title>
        </Helmet>
        <Navbar />
        <main className="min-h-screen bg-background pt-28">
          <div className="container">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Page not found</h1>
              <p className="mt-2 text-muted-foreground">
                This destination page doesn’t exist yet. Use the homepage or packages to continue.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/">Go to Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/international-packages">International Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  const destinationName = getDestinationDisplayName(destinationSlug);
  const cfg = getPageConfig(pageSlug as DestinationPageSlug);
  const bestTime = getDestinationBestTime(destinationSlug);
  const data = getDestinationData(destinationSlug ?? '', pageSlug);

  const hasPackage = PACKAGE_SLUGS.has(destinationSlug);
  const showHoneymoon = HONEYMOON_DESTINATIONS.has(destinationSlug);
  const showLuxury = LUXURY_DESTINATIONS.has(destinationSlug);

  const title = cfg.title(destinationName);
  const description = cfg.description(destinationName);
  const canonicalUrl = `https://rudrakshsafar.com/${destinationSlug}/${pageSlug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: canonicalUrl,
    author: { '@type': 'Organization', name: 'Rudraksh Safar' },
    publisher: { '@type': 'Organization', name: 'Rudraksh Safar' },
  };

  /* Refactored Logic moved to DestinationContentBody */

  return (
    <>
      <Helmet>
        <title>{title} | Rudraksh Safar</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`${title}, ${destinationName} travel guide, ${destinationName} trip planning, best time to visit ${destinationName}, things to do in ${destinationName}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <DestinationSchema
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        data={getDestinationData(destinationSlug ?? '', pageSlug)}
        destinationName={destinationName}
        pageSlug={pageSlug}
      />

      <Navbar />
      <main className="min-h-screen bg-background">
        <header className="pt-28 pb-10 border-b border-border/60">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Destination</Badge>
              <Badge variant="outline">Best time: {bestTime}</Badge>
              {data?.lastUpdated && (
                <span className="text-xs text-muted-foreground ml-2">Updated: {data.lastUpdated}</span>
              )}
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-foreground">{title}</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>

            {/* EEAT Signals */}
            {(data?.author || data?.reviewer) && (
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground border-l-2 border-primary/20 pl-4">
                {data.author && (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold overflow-hidden">
                      {data.author.image ? <img src={data.author.image} alt={data.author.name} /> : "✍️"}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{data.author.name}</p>
                      <p className="text-xs">{data.author.role}</p>
                    </div>
                  </div>
                )}
                {data.reviewer && (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-green-700 dark:text-green-400">Reviewed by {data.reviewer.name}</p>
                      <p className="text-xs">{data.reviewer.role}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Smart internal links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {hasPackage && (
                <Button asChild>
                  <Link to={`/package/${destinationSlug}`}>View {destinationName} Package</Link>
                </Button>
              )}
              {showHoneymoon && (
                <Button asChild variant="outline">
                  <Link to="/honeymoon-packages">Honeymoon Packages</Link>
                </Button>
              )}
              {showLuxury && (
                <Button asChild variant="outline">
                  <Link to="/luxury-packages">Luxury Packages</Link>
                </Button>
              )}
            </div>
          </div>
        </header>

        <section className="py-10">
          <div className="container grid gap-8 lg:grid-cols-12">
            {/* Sidebar nav */}
            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-5 sticky top-24">
                <p className="text-sm font-semibold text-foreground">More {destinationName} pages</p>
                <nav className="mt-4 space-y-2" aria-label={`${destinationName} guide navigation`}>
                  {DESTINATION_PAGE_ORDER.map((p) => {
                    const active = p.slug === pageSlug;
                    return (
                      <Link
                        key={p.slug}
                        to={`/${destinationSlug}/${p.slug}`}
                        className={`block rounded-xl px-3 py-2 text-sm transition-colors border border-transparent ${active
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                          }`}
                      >
                        {p.title(destinationName)}
                      </Link>
                    );
                  })}
                </nav>

                {/* Internal Linking for Comparisons */}
                {(destinationSlug === 'pattaya' || destinationSlug === 'phuket') && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Popular Comparisons</p>
                    <Link
                      to="/comparisons/pattaya-vs-phuket"
                      className="block text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Pattaya vs Phuket: Which is better?
                    </Link>
                  </div>
                )}
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-8">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <DestinationContentBody destinationSlug={destinationSlug ?? ''} pageSlug={pageSlug ?? ''} />
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default DestinationContent;
