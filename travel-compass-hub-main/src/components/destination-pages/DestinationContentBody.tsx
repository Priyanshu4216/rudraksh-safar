import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getDestinationData, getDestinationDisplayName, getPageConfig, DestinationPageSlug } from '@/lib/destinationContent';
import {
    DecisionGuideSection,
    ExperienceSignalsSection,
    HonestNegativesSection,
    IndianContextSection,
    HotelsSection,
    BeachesSection,
    PlacesToVisitSection,
    NightlifeSection
} from '@/components/DestinationRichContent';

interface DestinationContentBodyProps {
    destinationSlug: string;
    pageSlug: string;
}

const DestinationContentBody = ({ destinationSlug, pageSlug }: DestinationContentBodyProps) => {
    const destinationName = getDestinationDisplayName(destinationSlug);
    const data = getDestinationData(destinationSlug ?? '', pageSlug);
    const cfg = getPageConfig(pageSlug as DestinationPageSlug);
    const title = cfg.title(destinationName);

    // Common Rich Content Wrappers
    const RichContentWrapper = ({ children }: { children: React.ReactNode }) => (
        <>
            {data?.intro && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{data.intro}</p>
            )}

            {data?.decisionGuide && <DecisionGuideSection data={data.decisionGuide} />}

            {children}

            {data?.hotels && <HotelsSection items={data.hotels} />}
            {data?.beaches && <BeachesSection items={data.beaches} />}
            {data?.placesToVisit && <PlacesToVisitSection items={data.placesToVisit} />}
            {data?.nightlifeVenues && <NightlifeSection items={data.nightlifeVenues} />}

            {data?.experienceSignals && <ExperienceSignalsSection items={data.experienceSignals} />}
            {data?.honestNegatives && <HonestNegativesSection items={data.honestNegatives} />}
            {data?.indianContext && <IndianContextSection data={data.indianContext} />}
        </>
    );

    switch (pageSlug) {
        case 'nightlife':
            return (
                <RichContentWrapper>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Nightlife Guide</h2>
                    <p className="mt-4 text-muted-foreground">
                        Discover the best spots for a night out in {destinationName}, from family-friendly markets to high-energy clubs.
                    </p>
                </RichContentWrapper>
            );
        case 'places-to-visit':
            return (
                <RichContentWrapper>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Top Places to Visit</h2>
                    <p className="mt-4 text-muted-foreground">
                        Don't miss these iconic attractions in {destinationName}. From cultural landmarks to natural wonders, here are the must-visit spots.
                    </p>
                </RichContentWrapper>
            );
        case 'best-time-to-visit':
            return (
                <RichContentWrapper>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">Month-wise overview</h2>
                    <ul className="mt-3 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Peak season:</strong> Great weather, vibrant atmosphere, but higher prices.</li>
                        <li><strong className="text-foreground">Shoulder season:</strong> Best value with decent weather and fewer crowds.</li>
                        <li><strong className="text-foreground">Off-season:</strong> Lowest prices, suitable for budget travelers comfortable with some rain/heat.</li>
                    </ul>
                    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Quick answer</p>
                        {data?.bestTime && <p className="mt-2 text-muted-foreground">{data.bestTime}</p>}
                        {data?.weather && <p className="mt-1 text-sm text-muted-foreground">{data.weather}</p>}
                    </div>
                </RichContentWrapper>
            );
        case 'trip-cost':
            const cost = data?.tripCost ?? {
                flights: 'Varies by season & origin',
                hotels: 'Budget to Luxury options available',
                transfers: 'Local taxis, Grab, or public transport',
                activities: 'Entry fees vary by attraction',
            };
            return (
                <RichContentWrapper>
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
                </RichContentWrapper>
            );
        case 'nearby-places':
            const places = data?.nearbyPlaces ?? [];
            return (
                <RichContentWrapper>
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
                </RichContentWrapper>
            );
        case 'faqs':
            const faqs = data?.faqs ?? [
                { question: `What are the top things to do in ${destinationName}?`, answer: `Top attractions include cultural sites, beaches, and local markets. Check our "Things to Do" section for details.` },
                { question: `How many days are enough for ${destinationName}?`, answer: `We typically recommend 5-7 days to fully explore ${destinationName} at a relaxed pace.` },
                { question: `Is ${destinationName} good for families?`, answer: `Yes, ${destinationName} offers many family-friendly activities and safe accommodations.` },
            ];
            return (
                <RichContentWrapper>
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
                </RichContentWrapper>
            );
        default:
            return (
                <RichContentWrapper>
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
                </RichContentWrapper>
            );
    }
};

export default DestinationContentBody;
