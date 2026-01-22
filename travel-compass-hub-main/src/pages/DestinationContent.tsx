import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DESTINATION_PAGE_ORDER,
  getDestinationBestTime,
  getDestinationDisplayName,
  getPageConfig,
  HONEYMOON_DESTINATIONS,
  isValidDestinationPage,
  LUXURY_DESTINATIONS,
  PACKAGE_SLUGS,
  type DestinationPageSlug,
} from '@/lib/destinationContent';

const DestinationContent = () => {
  const { destinationSlug, pageSlug } = useParams();

  if (!destinationSlug || !pageSlug || !isValidDestinationPage(pageSlug)) {
    return (
      <>
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

  const renderBody = () => {
    switch (pageSlug) {
      case 'best-time-to-visit':
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Month-wise overview</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Peak season:</strong> Great weather, higher prices, more crowds.</li>
              <li><strong className="text-foreground">Shoulder season:</strong> Best value + decent weather for most travellers.</li>
              <li><strong className="text-foreground">Budget season:</strong> Lower prices, some rain/heat depending on destination.</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">Quick answer</p>
              <p className="mt-1 text-lg font-semibold text-foreground">Best time to visit {destinationName}: {bestTime}</p>
            </div>
          </>
        );
      case 'trip-cost':
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Trip cost breakdown (est.)</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { k: 'Flights', v: 'Varies by month + origin city' },
                { k: 'Hotels', v: 'Budget / Mid / Premium options' },
                { k: 'Transfers', v: 'Airport + local sightseeing' },
                { k: 'Activities', v: 'Island tours / tickets / experiences' },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground">{x.k}</p>
                  <p className="mt-1 font-semibold text-foreground">{x.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              For the exact {destinationName} trip cost for your dates, share your travel month and number of people—we’ll suggest the best value options.
            </p>
          </>
        );
      case 'nearby-places':
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Nearby places (ideas)</h2>
            <p className="mt-2 text-muted-foreground">Clean template you can expand per destination with exact distance + time.</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid grid-cols-3 gap-0 border-b border-border px-4 py-3 text-sm text-muted-foreground">
                <span>Place</span>
                <span>Distance</span>
                <span>Travel time</span>
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-0 px-4 py-3 text-sm">
                  <span className="font-medium text-foreground">Nearby spot #{i}</span>
                  <span className="text-muted-foreground">— km</span>
                  <span className="text-muted-foreground">— mins</span>
                </div>
              ))}
            </div>
          </>
        );
      case 'faqs':
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">FAQs</h2>
            <div className="mt-4 space-y-4">
              {[
                `What are the top things to do in ${destinationName}?`,
                `How many days are enough for ${destinationName}?`,
                `What is the best time to visit ${destinationName}?`,
                `Is ${destinationName} good for family / honeymoon?`,
                `How much budget is needed for a ${destinationName} trip?`,
              ].map((q) => (
                <div key={q} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-semibold text-foreground">Q: {q}</p>
                  <p className="mt-2 text-muted-foreground">
                    A: This is a starter answer block—tell us your travel month and budget, and we’ll share the most suitable plan and package options.
                  </p>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">What you’ll find here</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>Clean, SEO-friendly headings and lists (easy to expand for each destination)</li>
              <li>Scannable sections (Google/AI can parse it well)</li>
              <li>Internal links back to packages to strengthen conversions</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">Tip</p>
              <p className="mt-1 text-foreground">
                Want this page to rank faster? Add 8–12 specific place names, prices, and 1–2 mini itineraries.
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={`${title}, ${destinationName} travel guide, ${destinationName} trip planning, best time to visit ${destinationName}, things to do in ${destinationName}`}
        canonicalUrl={canonicalUrl}
        ogType="article"
        structuredData={structuredData}
      />

      <Navbar />
      <main className="min-h-screen bg-background">
        <header className="pt-28 pb-10 border-b border-border/60">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Destination</Badge>
              <Badge variant="outline">Best time: {bestTime}</Badge>
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-foreground">{title}</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>

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
                        className={`block rounded-xl px-3 py-2 text-sm transition-colors border border-transparent ${
                          active
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                        }`}
                      >
                        {p.title(destinationName)}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-8">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                {renderBody()}
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
