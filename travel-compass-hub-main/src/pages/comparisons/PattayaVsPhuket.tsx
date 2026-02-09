import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Minus, MapPin, Moon, Sun, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PattayaVsPhuket = () => {
    return (
        <>
            <Helmet>
                <title>Pattaya vs Phuket: Which is Better for Your Trip? (2026 Guide)</title>
                <meta
                    name="description"
                    content="Confused between Pattaya and Phuket? We compare nightlife, beaches, cost, and vibe to help you decide. Expert guide for bachelors, couples, and families."
                />
                <meta
                    name="keywords"
                    content="pattaya vs phuket, phuket or pattaya for bachelors, pattaya vs phuket nightlife, thailand trip planning, best beaches thailand"
                />
                <meta property="og:title" content="Pattaya vs Phuket: The Ultimate Comparison" />
                <meta property="og:description" content="Detailed breakdown of Cost, Vibe, Nightlife, and Beaches. Find out which Thai destination suits your travel style." />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-28 pb-10">
                <div className="container px-4 md:px-6">

                    {/* Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <Badge variant="secondary" className="mb-4">Thailand Face-off</Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Pattaya vs Phuket
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Two of Thailand's most famous destinations, but completely different vibes.
                            Which one should you choose for your next holiday?
                        </p>
                    </div>

                    {/* Quick Verdict Card */}
                    <Card className="mb-12 border-primary/20 bg-primary/5">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-serif mb-6 text-center">The Quick Verdict</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Choose Pattaya If...</h3>
                                            <ul className="mt-2 space-y-2 text-muted-foreground text-sm">
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You want intense nightlife & parties.</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You are on a tighter budget.</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You want quick access from Bangkok.</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You are a solo traveler or bachelor group.</li>
                                            </ul>
                                            <Button asChild className="mt-4 w-full md:w-auto" variant="outline">
                                                <Link to="/package/thailand">View Pattaya Packages</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                                            <Sun className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Choose Phuket If...</h3>
                                            <ul className="mt-2 space-y-2 text-muted-foreground text-sm">
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You want beautiful, clean beaches.</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You love island hopping (Phi Phi, James Bond).</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You are a couple or family.</li>
                                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> You want a mix of relaxation and fun.</li>
                                            </ul>
                                            <Button asChild className="mt-4 w-full md:w-auto" variant="outline">
                                                <Link to="/package/phuket">View Phuket Packages</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Comparison Table */}
                    <div className="mb-16 overflow-x-auto">
                        <h2 className="text-2xl font-bold font-serif mb-6">Head-to-Head Comparison</h2>
                        <div className="min-w-[600px] rounded-xl border border-border">
                            <div className="grid grid-cols-3 bg-muted/50 p-4 font-bold text-foreground">
                                <div>Feature</div>
                                <div className="text-center text-blue-600">Pattaya</div>
                                <div className="text-center text-green-600">Phuket</div>
                            </div>

                            {[
                                {
                                    feature: 'Beaches',
                                    pattaya: 'Average (Brown sand)',
                                    phuket: 'Excellent (White sand, clear water)',
                                    winner: 'Phuket'
                                },
                                {
                                    feature: 'Nightlife',
                                    pattaya: 'Wild, Intense, Adult-oriented',
                                    phuket: 'Vibrant, Diverse (Party + Chill)',
                                    winner: 'Tie (Depends on taste)'
                                },
                                {
                                    feature: 'Cost',
                                    pattaya: 'Budget Friendly ($)',
                                    phuket: 'Moderate to Expensive ($$$)',
                                    winner: 'Pattaya'
                                },
                                {
                                    feature: 'Day Trips',
                                    pattaya: 'Coral Island, Sanctuary of Truth',
                                    phuket: 'Phi Phi, Similan, James Bond Islands',
                                    winner: 'Phuket'
                                },
                                {
                                    feature: 'Vibe',
                                    pattaya: 'Busy City by the Beach',
                                    phuket: 'Tropical Island Paradise',
                                    winner: 'Phuket'
                                },
                                {
                                    feature: 'Accessibility',
                                    pattaya: '2 hrs taxi from Bangkok',
                                    phuket: 'Direct Flight or 1 hr flight from BKK',
                                    winner: 'Pattaya'
                                },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 p-4 border-t border-border items-center">
                                    <div className="font-medium text-sm text-foreground">{row.feature}</div>
                                    <div className="text-center text-sm text-muted-foreground">{row.pattaya}</div>
                                    <div className="text-center text-sm text-muted-foreground">{row.phuket}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">

                        {/* Round 1: Beaches */}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                Round 1: Beaches <Sun className="h-5 w-5 text-orange-500" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Phuket</strong> is the clear winner here. With over 30 beaches, including Patong, Kata, Karon, and Nai Harn, the water is clearer, and the sand is whiter.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Pattaya's</strong> main beach is narrow and often crowded with boats. You usually need to take a boat to Coral Island (Koh Larn) to find clear water suitable for swimming.
                            </p>
                            <div className="mt-4 p-3 bg-secondary/10 rounded-lg text-sm font-semibold">
                                🏆 Winner: Phuket
                            </div>
                        </div>

                        {/* Round 2: Nightlife */}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                Round 2: Nightlife <Moon className="h-5 w-5 text-purple-500" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Pattaya</strong> is world-famous (or infamous) for Walking Street. It's intense, loud, and unapologetic. It's strictly for those who want to party hard.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Phuket</strong> (specifically Bangla Road) offers a similar party vibe but feels a bit more "holiday-like" and diverse. You can find chill beach clubs, family markets, and crazy clubs all in one island.
                            </p>
                            <div className="mt-4 p-3 bg-secondary/10 rounded-lg text-sm font-semibold">
                                🤝 Winner: Tie (Depends on preference)
                            </div>
                        </div>

                        {/* Round 3: Cost */}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                Round 3: Cost <DollarSign className="h-5 w-5 text-green-500" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Pattaya</strong> is significantly cheaper. Hotels, food, and transport cost about 20-30% less than in Phuket. A 5-star hotel in Pattaya might cost the same as a 3-star in Phuket.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Phuket</strong> has higher taxi mafia prices and generally more expensive dining, especially in tourist hubs.
                            </p>
                            <div className="mt-4 p-3 bg-secondary/10 rounded-lg text-sm font-semibold">
                                🏆 Winner: Pattaya
                            </div>
                        </div>

                        {/* Round 4: Family Friendliness */}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                Round 4: Families <Users className="h-5 w-5 text-blue-500" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Phuket</strong> is excellent for families with resorts offering kids' clubs, water parks, and cleaner environments.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Pattaya</strong> has improved with attractions like Columbia Pictures Aquaverse and Nong Nooch Garden, but the "adult" nature of the city can be overwhelming for families in the evenings.
                            </p>
                            <div className="mt-4 p-3 bg-secondary/10 rounded-lg text-sm font-semibold">
                                🏆 Winner: Phuket
                            </div>
                        </div>

                    </div>

                    {/* CTA Section */}
                    <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground">
                        <h2 className="text-2xl font-bold font-serif mb-4">Still Undecided?</h2>
                        <p className="mb-6 opacity-90">
                            Why not do both? We have packages that cover Bangkok + Pattaya + Phuket.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild variant="secondary" size="lg">
                                <Link to="/package/thailand">View All Thailand Packages</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                                <a href="https://wa.me/919406182174" target="_blank" rel="noopener noreferrer">Chat with an Expert</a>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default PattayaVsPhuket;
