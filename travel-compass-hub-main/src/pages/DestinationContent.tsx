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
  getDestinationData,
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
    const data = getDestinationData(destinationSlug ?? '');

    switch (pageSlug) {
      case 'best-time-to-visit':
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Month-wise overview</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Peak season:</strong> Great weather, vibrant atmosphere, but higher prices.</li>
              <li><strong className="text-foreground">Shoulder season:</strong> Best value with decent weather and fewer crowds.</li>
              <li><strong className="text-foreground">Off-season:</strong> Lowest prices, suitable for budget travelers comfortable with some rain/heat.</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">Quick answer</p>
              <p className="mt-1 text-lg font-semibold text-foreground">Best time to visit {destinationName}: {bestTime}</p>
            </div>
          </>
        );
      case 'trip-cost':
        const cost = data?.tripCost ?? {
          flights: 'Varies by season & origin',
          hotels: 'Budget to Luxury options available',
          transfers: 'Taxis & Public Transport',
          activities: 'Entry fees & guided tours'
        };
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Trip cost breakdown (est.)</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { k: 'Flights', v: cost.flights },
                { k: 'Hotels', v: cost.hotels },
                { k: 'Transfers', v: cost.transfers },
                { k: 'Activities', v: cost.activities },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground">{x.k}</p>
                  <p className="mt-1 font-semibold text-foreground">{x.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              *Prices are approximate estimates. For the exact {destinationName} trip cost for your dates, please contact us for a custom quote.
            </p>
          </>
        );
      case 'nearby-places':
        const places = data?.nearbyPlaces ?? [];
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Nearby places to visit</h2>
            {places.length > 0 ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid grid-cols-3 gap-0 border-b border-border px-4 py-3 text-sm text-muted-foreground bg-muted/30">
                  <span>Place</span>
                  <span>Distance/Mode</span>
                  <span>Travel time</span>
                </div>
                {places.map((place, i) => (
                  <div key={i} className="grid grid-cols-3 gap-0 px-4 py-3 text-sm border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                    <span className="font-medium text-foreground">{place.name}</span>
                    <span className="text-muted-foreground">{place.distance}</span>
                    <span className="text-muted-foreground">{place.time}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-muted-foreground">Explore our integrated tour packages to see all the exciting nearby attractions included in your {destinationName} itinerary.</p>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link to={`/package/${destinationSlug}`}>View Itinerary</Link>
                  </Button>
                </div>
              </div>
            )}
          </>
        );
      case 'faqs':
        const faqs = data?.faqs ?? [
          { question: `What are the top things to do in ${destinationName}?`, answer: `Top attractions include cultural sites, beaches, and local markets. Check our "Things to Do" section for details.` },
          { question: `How many days are enough for ${destinationName}?`, answer: `We typically recommend 5-7 days to fully explore ${destinationName} at a relaxed pace.` },
          { question: `Is ${destinationName} good for families?`, answer: `Yes, ${destinationName} offers many family-friendly activities and safe accommodations.` },
        ];
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-semibold text-foreground">Q: {faq.question}</p>
                  <p className="mt-2 text-muted-foreground">
                    A: {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">{title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Discover the best of {destinationName} with our comprehensive guide. From hidden gems to popular hotspots, we help you plan the perfect trip.
              Explore our curated sections for detailed insights on activities, best times to visit, costs, and more.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold mb-2">Plan Your Trip</h3>
                <p className="text-sm text-muted-foreground">Get expert advice on itineraries, bookings, and visa requirements for {destinationName}.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold mb-2">Local Insights</h3>
                <p className="text-sm text-muted-foreground">Explore food, culture, and offbeat locations recommended by our travel experts.</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/5 p-6">
              <p className="text-sm font-semibold text-secondary mb-2">Ready to explore?</p>
              <p className="text-foreground mb-4">
                Browse our customized tour packages for {destinationName} designed for budget and luxury travelers.
              </p>
              <Button asChild>
                <Link to={`/package/${destinationSlug}`}>View {destinationName} Packages</Link>
              </Button>
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
