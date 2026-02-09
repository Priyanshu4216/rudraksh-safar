import {
    AlertTriangle,
    CheckCircle,
    Info,
    ShieldAlert,
    ThumbsUp,
    ThumbsDown,
    Users,
    Wallet,
    Clock,
    Globe,
    Ticket,
    Lightbulb
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DecisionGuide, ExperienceSignal, HonestNegative, IndianContext } from '@/data/destinations/types';

export const DecisionGuideSection = ({ data }: { data: DecisionGuide }) => {
    if (!data) return null;
    return (
        <div className="my-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold font-serif text-foreground">
                <Users className="h-5 w-5 text-primary" />
                Who is this for?
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="rounded-xl bg-green-50/50 p-4 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                        <p className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                            <ThumbsUp className="h-4 w-4" /> Perfect For
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {data.bestFor.map((item, i) => (
                                <Badge key={i} variant="outline" className="bg-background/80 text-green-700 border-green-200">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl bg-red-50/50 p-4 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                        <p className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
                            <ThumbsDown className="h-4 w-4" /> Maybe Skip If
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {data.notFor.map((item, i) => (
                                <Badge key={i} variant="outline" className="bg-background/80 text-red-700 border-red-200">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                            <Wallet className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Budget Score</p>
                            <p className="leading-relaxed">{data.budgetVsLuxury}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                            <Clock className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Ideal Duration</p>
                            <p className="leading-relaxed">{data.idealDuration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HonestNegativesSection = ({ items }: { items: HonestNegative[] }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="my-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                <ShieldAlert className="h-5 w-5 text-orange-500" />
                Honest Constraints (real talk)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, i) => {
                    const isWarning = item.severity === 'warning';
                    return (
                        <div
                            key={i}
                            className={`rounded-xl border p-4 ${isWarning
                                ? 'border-orange-200 bg-orange-50/50 dark:border-orange-900/20 dark:bg-orange-900/10'
                                : 'border-blue-200 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-900/10'
                                }`}
                        >
                            <h4 className={`font-semibold mb-2 flex items-center gap-2 ${isWarning ? 'text-orange-800 dark:text-orange-400' : 'text-blue-800 dark:text-blue-400'}`}>
                                {isWarning ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
                                {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const IndianContextSection = ({ data }: { data: IndianContext }) => {
    if (!data) return null;
    return (
        <Card className="my-8 border-orange-200/50 bg-gradient-to-r from-orange-50/30 to-background dark:from-orange-900/10 shadow-sm">
            <CardHeader className="pb-3 border-b border-border/50">
                <CardTitle className="text-lg flex items-center gap-2 text-orange-700 dark:text-orange-400">
                    <Globe className="h-5 w-5" />
                    For Indian Travelers
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 pt-4 text-sm sm:grid-cols-2">
                <div>
                    <span className="font-semibold block mb-1 text-foreground">Visa Policy</span>
                    <span className="text-muted-foreground">{data.visaPolicy}</span>
                </div>
                <div>
                    <span className="font-semibold block mb-1 text-foreground">Food</span>
                    <span className="text-muted-foreground">{data.foodAvailability}</span>
                </div>
                <div>
                    <span className="font-semibold block mb-1 text-foreground">Currency</span>
                    <span className="text-muted-foreground">{data.currencyTips}</span>
                </div>
                <div>
                    <span className="font-semibold block mb-1 text-foreground">Connectivity</span>
                    <span className="text-muted-foreground">{data.simCard}</span>
                </div>
            </CardContent>
        </Card>
    );
};


export const ExperienceSignalsSection = ({ items }: { items: ExperienceSignal[] }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="my-8 space-y-4">
            {items.map((item, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                    <div className="absolute top-0 right-0 h-32 w-32 translate-x-12 translate-y-[-12px] rotate-12 bg-primary/10 blur-3xl" />
                    <h4 className="relative font-serif text-lg font-bold text-primary mb-2 flex items-center gap-2">
                        <Info className="h-5 w-5" />
                        {item.title}
                    </h4>
                    <p className="relative text-foreground/90 italic leading-relaxed">
                        "{item.description}"
                    </p>
                    <div className="relative mt-3 flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">RS</div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {item.author}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

import { Hotel, Beach, PlaceToVisit, NightlifeVenue } from '@/data/destinations/types';
import { Star, MapPin, ExternalLink, Waves, Umbrella, Music, Martini } from 'lucide-react';

export const HotelsSection = ({ items }: { items: Hotel[] }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-8">
            <h3 className="mb-6 text-2xl font-serif font-bold text-foreground">Top Recommended Hotels</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((hotel, i) => (
                    <Card key={i} className="overflow-hidden border-border transition-all hover:shadow-md">
                        <div className="aspect-video w-full bg-muted relative">
                            {/* Placeholder for real image or generic hotel icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                <span className="text-4xl">🏨</span>
                            </div>
                            <Badge className="absolute top-2 right-2 bg-background/80 text-foreground hover:bg-background/90 backdrop-blur-sm">
                                {hotel.rating} <Star className="ml-1 h-3 w-3 fill-primary text-primary" />
                            </Badge>
                        </div>
                        <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg font-bold line-clamp-1">{hotel.name}</CardTitle>
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {hotel.location}
                            </p>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <div className="mb-3 flex flex-wrap gap-1">
                                {hotel.bestFor.map((tag, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 h-5">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {hotel.description}
                            </p>
                            <div className="text-sm font-semibold text-primary mb-3">
                                {hotel.priceRange}
                            </div>
                            {hotel.link && (
                                <a
                                    href={hotel.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                                >
                                    View Details <ExternalLink className="h-3 w-3" />
                                </a>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export const BeachesSection = ({ items }: { items: Beach[] }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-8">
            <h3 className="mb-6 text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                <Waves className="h-6 w-6 text-blue-500" />
                Best Beaches to Visit
            </h3>
            <div className="space-y-6">
                {items.map((beach, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 rounded-2xl border border-border bg-card p-5 transition-all hover:bg-accent/5">
                        <div className="h-48 w-full md:w-64 shrink-0 rounded-xl bg-muted/50 overflow-hidden relative">
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                <Waves className="h-12 w-12" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <h4 className="text-xl font-bold text-foreground">{beach.name}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {beach.bestFor.map((tag, idx) => (
                                        <Badge key={idx} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/50">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4 flex-1">
                                {beach.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
                                        <Waves className="h-3 w-3" /> Activities
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground text-xs">
                                        {beach.activities.slice(0, 3).map((act, idx) => (
                                            <li key={idx}>{act}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
                                        <Umbrella className="h-3 w-3" /> Facilities
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground text-xs">
                                        {beach.facilities.slice(0, 3).map((fac, idx) => (
                                            <li key={idx}>{fac}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PlacesToVisitSection = ({ items }: { items: PlaceToVisit[] }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-8">
            <h3 className="mb-6 text-2xl font-serif font-bold text-foreground">Must-Visit Places</h3>
            <div className="space-y-6">
                {items.map((place, i) => (
                    <Card key={i} className="overflow-hidden border-border transition-all hover:shadow-md">
                        <div className="grid md:grid-cols-3 gap-0">
                            <div className="h-48 md:h-full bg-muted relative">
                                {/* Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                    <span className="text-4xl">📸</span>
                                </div>
                            </div>
                            <div className="col-span-2 p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-foreground">{place.name}</h4>
                                    <div className="flex gap-2">
                                        {place.bestFor.slice(0, 2).map((tag, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-[10px]">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {place.description}
                                </p>

                                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm mb-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span className="text-foreground font-medium">{place.openingHours}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Ticket className="h-4 w-4 text-primary" />
                                        <span className="text-foreground font-medium">{place.ticketPrice}</span>
                                    </div>
                                    <div className="flex items-center gap-2 col-span-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{place.location}</span>
                                    </div>
                                </div>

                                {place.tips && (
                                    <div className="rounded-lg bg-yellow-50/50 p-3 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 text-xs">
                                        <p className="font-semibold text-yellow-800 dark:text-yellow-500 mb-1 flex items-center gap-1">
                                            <Lightbulb className="h-3 w-3" /> Pro Tip
                                        </p>
                                        <p className="text-muted-foreground">{place.tips}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export const NightlifeSection = ({ items }: { items: NightlifeVenue[] }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-8">
            <h3 className="mb-6 text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                <Martini className="h-6 w-6 text-purple-500" />
                Nightlife & Entertainment
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((venue, i) => (
                    <Card key={i} className="overflow-hidden border-purple-200/50 dark:border-purple-900/50 bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-900/10 hover:shadow-md transition-all">
                        <div className="h-40 bg-muted relative overflow-hidden">
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 bg-purple-900/5">
                                <Music className="h-10 w-10 text-purple-400/50" />
                            </div>
                            <div className="absolute top-2 right-2">
                                <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-none">
                                    {venue.type}
                                </Badge>
                            </div>
                        </div>
                        <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg font-bold">{venue.name}</CardTitle>
                                <span className="text-sm font-semibold text-muted-foreground">{venue.priceLevel}</span>
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {venue.location}
                            </p>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <div className="mb-3 flex flex-wrap gap-1">
                                {venue.bestFor.map((tag, idx) => (
                                    <Badge key={idx} variant="outline" className="text-[10px] border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {venue.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                <Clock className="h-3 w-3" />
                                <span>{venue.openingHours}</span>
                            </div>
                            {venue.tips && (
                                <div className="rounded-lg bg-purple-100/50 p-2 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-xs text-purple-800 dark:text-purple-300">
                                    <strong>⭐ Tip:</strong> {venue.tips}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
