import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import TableOfContents from '@/components/content/TableOfContents';
import ReadingProgress from '@/components/ui/ReadingProgress';
import DecisionHelper from '@/components/content/DecisionHelper';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MapPin, Clock, Wallet, ArrowRight, Car, Plane, Train, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LastUpdated from '@/components/LastUpdated';

const WhereToGoFromBhilai = () => {
    const tocItems = [
        { id: "quick-answer", label: "Quick Answer" },
        { id: "weekend-getaways", label: "Weekend Getaways (1-3 Days)" },
        { id: "long-vacations", label: "Long Vacations (5+ Days)" },
        { id: "budget-trips", label: "Budget Friendly (< ₹10k)" },
        { id: "international", label: "International Options" },
        { id: "planning-tips", label: "Planning Tips 2026" }
    ];

    return (
        <>
            <Helmet>
                <title>Where to Go From Bhilai? Best Travel Destinations 2026</title>
                <meta name="description" content="Confused about where to go from Bhilai or Raipur? Discover best weekend getaways, budget trips, and family vacation spots with travel time and costs." />
                <meta name="keywords" content="places to visit from bhilai, weekend getaways from raipur, tourist places near durg, vacation spots from chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/guides/where-to-go-from-bhilai" />
            </Helmet>

            <ReadingProgress />
            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-16">

                <Breadcrumbs
                    items={[
                        { label: 'Destinations', path: '/domestic-packages' },
                        { label: 'Where to Go From Bhilai', path: '/guides/where-to-go-from-bhilai' }
                    ]}
                />

                {/* Hero */}
                <section className="container mx-auto px-4 mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-4">Travel Guide 2026</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Where Should You Travel From <span className="text-primary">Bhilai & Raipur</span>?
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            A curated list of destinations based on your time, budget, and travel style.
                        </p>
                        <LastUpdated className="justify-center" />
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar TOC */}
                        <aside className="lg:w-1/4 shrink-0 hidden lg:block h-fit sticky top-24">
                            <TableOfContents items={tocItems} title="On This Page" />
                            <div className="mt-8 bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <h3 className="font-bold mb-2">Need a Personal Plan?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Chat with our Bhilai travel experts.</p>
                                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                                    <a href="https://wa.me/919406182174?text=Suggest a destination for me">WhatsApp Us</a>
                                </Button>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:w-3/4">

                            {/* Quick Decision Helper */}
                            <section id="quick-answer" className="mb-16 scroll-mt-24">
                                <DecisionHelper
                                    title="Quick Destination Finder"
                                    options={[
                                        {
                                            label: "I have 2-3 Days",
                                            description: "Kanha, Amarkantak, Chitrakote",
                                            isRecommended: true,
                                            idealFor: ["Quick Weekend Reset"]
                                        },
                                        {
                                            label: "I have 5-7 Days",
                                            description: "Kerala, Goa, Kashmir, Manali",
                                            isRecommended: true,
                                            idealFor: ["Proper Holiday"]
                                        },
                                        {
                                            label: "I want International",
                                            description: "Thailand, Dubai, Vietnam (Direct from Raipur via Hub)",
                                            isRecommended: false,
                                            idealFor: ["Adventure & Shopping"]
                                        }
                                    ]}
                                />
                            </section>

                            {/* Weekend Getaways */}
                            <section id="weekend-getaways" className="mb-16 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Car className="w-8 h-8 text-primary" />
                                    Weekend Getaways (By Car/Train)
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Perfect for a quick recharge without long travel hours. All accessible within 4-8 hours from Bhilai/Durg.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold">Kanha National Park</h3>
                                                <Badge>Wildlife</Badge>
                                            </div>
                                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                                <li className="flex gap-2"><Clock className="w-4 h-4" /> 4-5 Hours Drive</li>
                                                <li className="flex gap-2"><Wallet className="w-4 h-4" /> ₹8,000 - ₹15,000 per couple</li>
                                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Best for Tiger Safari</li>
                                            </ul>
                                            <Button variant="outline" className="w-full" asChild>
                                                <a href="https://wa.me/919406182174?text=Kanha trip enquiry">Check Availability</a>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold">Chitrakote & Bastar</h3>
                                                <Badge>Nature</Badge>
                                            </div>
                                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                                <li className="flex gap-2"><Clock className="w-4 h-4" /> 6-7 Hours Drive</li>
                                                <li className="flex gap-2"><Wallet className="w-4 h-4" /> ₹6,000 - ₹10,000 per couple</li>
                                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> "Niagara of India"</li>
                                            </ul>
                                            <Button variant="outline" className="w-full" asChild>
                                                <a href="https://wa.me/919406182174?text=Chitrakote trip enquiry">Plan Trip</a>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold">Amarkantak</h3>
                                                <Badge>Pilgrimage</Badge>
                                            </div>
                                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                                <li className="flex gap-2"><Clock className="w-4 h-4" /> 5 Hours Drive</li>
                                                <li className="flex gap-2"><Wallet className="w-4 h-4" /> ₹5,000 - ₹8,000 per couple</li>
                                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Source of Narmada</li>
                                            </ul>
                                            <Button variant="outline" className="w-full" asChild>
                                                <a href="https://wa.me/919406182174?text=Amarkantak trip enquiry">Plan Trip</a>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold">Mainpat</h3>
                                                <Badge>Hill Station</Badge>
                                            </div>
                                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                                <li className="flex gap-2"><Clock className="w-4 h-4" /> 7-8 Hours Drive</li>
                                                <li className="flex gap-2"><Wallet className="w-4 h-4" /> ₹7,000 - ₹12,000 per couple</li>
                                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> "Shimla of Chhattisgarh"</li>
                                            </ul>
                                            <Button variant="outline" className="w-full" asChild>
                                                <a href="https://wa.me/919406182174?text=Mainpat trip enquiry">Plan Trip</a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* National Trips */}
                            <section id="long-vacations" className="mb-16 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Plane className="w-8 h-8 text-primary" />
                                    Long Vacations (Flight/Train)
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Looking for a proper holiday? These are the top choices for Bhilai families in 2026.
                                </p>
                                <div className="space-y-6">
                                    <div className="bg-muted/30 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">Goa</h3>
                                            <p className="text-muted-foreground mb-4">Direct flights from Raipur now available. Best for beaches, parties, and relaxation.</p>
                                            <div className="flex flex-wrap gap-4 text-sm font-medium mb-6">
                                                <span className="bg-background px-3 py-1 rounded border">3 Nights / 4 Days</span>
                                                <span className="bg-background px-3 py-1 rounded border">Starts ₹12,999/p</span>
                                            </div>
                                            <Button asChild>
                                                <a href="/domestic-packages">View Packages</a>
                                            </Button>
                                        </div>
                                        <div className="md:w-1/3">
                                            <div className="aspect-video bg-blue-100 rounded-lg overflow-hidden shadow-sm">
                                                <img
                                                    src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800"
                                                    alt="Goa Beach"
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-muted/30 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">Kashmir</h3>
                                            <p className="text-muted-foreground mb-4">Heaven on Earth. Direct flight connections (via Delhi). Best for snow (Jan-Mar) or Greenery (Apr-Jun).</p>
                                            <div className="flex flex-wrap gap-4 text-sm font-medium mb-6">
                                                <span className="bg-background px-3 py-1 rounded border">5 Nights / 6 Days</span>
                                                <span className="bg-background px-3 py-1 rounded border">Starts ₹18,000/p</span>
                                            </div>
                                            <Button asChild>
                                                <a href="/mountain-holiday-packages">View Packages</a>
                                            </Button>
                                        </div>
                                        <div className="md:w-1/3">
                                            <div className="aspect-video bg-blue-100 rounded-lg overflow-hidden shadow-sm">
                                                <img
                                                    src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800"
                                                    alt="Kashmir Valley"
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Budget Trips */}
                            <section id="budget-trips" className="mb-16 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Train className="w-8 h-8 text-primary" />
                                    Strictly Budget (&lt; ₹10k)
                                </h2>
                                <Card>
                                    <CardContent className="p-8">
                                        <p className="text-lg mb-6">
                                            Tight on cash? You can still explore. Here’s how to travel cheap from Durg/Raipur Junction:
                                        </p>
                                        <div className="grid sm:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="font-bold text-xl text-primary mb-1">Puri (Odisha)</div>
                                                <div className="text-sm text-muted-foreground">Direct Train (Overnight)</div>
                                                <div className="text-xs mt-1 text-green-600 font-bold">₹5k - ₹7k per person</div>
                                            </div>
                                            <div className="text-center border-l border-r border-border/50">
                                                <div className="font-bold text-xl text-primary mb-1">Pachmarhi</div>
                                                <div className="text-sm text-muted-foreground">Train to Pipariya + Bus</div>
                                                <div className="text-xs mt-1 text-green-600 font-bold">₹6k - ₹8k per person</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-xl text-primary mb-1">Hyderabad</div>
                                                <div className="text-sm text-muted-foreground">Direct Train</div>
                                                <div className="text-xs mt-1 text-green-600 font-bold">₹7k - ₹9k per person</div>
                                            </div>
                                        </div>
                                        <div className="mt-8 text-center">
                                            <Button variant="secondary" asChild>
                                                <a href="/cheapest-trips-from-bhilai">View Full Budget Guide</a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            {/* International */}
                            <section id="international" className="mb-16 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Globe className="w-8 h-8 text-primary" />
                                    International from Raipur?
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    While Raipur doesn't have direct international flights yet, we offer "One-PNR" connecting flights via Delhi/Mumbai/Kolkata for smooth baggage transfer.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <a href="/visa/thailand" className="block p-6 bg-card border rounded-xl hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-xl mb-2">Thailand</h3>
                                        <p className="text-sm text-muted-foreground">Visa Free Entry! Best for first time international trip.</p>
                                    </a>
                                    <a href="/visa/dubai" className="block p-6 bg-card border rounded-xl hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-xl mb-2">Dubai</h3>
                                        <p className="text-sm text-muted-foreground">Direct connections available. Luxury shopping & desert safari.</p>
                                    </a>
                                    <a href="/visa/vietnam" className="block p-6 bg-card border rounded-xl hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-xl mb-2">Vietnam</h3>
                                        <p className="text-sm text-muted-foreground">Trending in 2026. Cheap & Beautiful.</p>
                                    </a>
                                    <a href="/visa/bali" className="block p-6 bg-card border rounded-xl hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-xl mb-2">Bali</h3>
                                        <p className="text-sm text-muted-foreground">Honeymoon favorite. Visa on arrival.</p>
                                    </a>
                                </div>
                            </section>

                            <section id="planning-tips" className="bg-slate-900 text-white p-8 rounded-3xl text-center">
                                <h2 className="text-2xl font-bold mb-4">Still Confused?</h2>
                                <p className="mb-8 text-slate-300">
                                    Don't waste days scrolling Instagram. Walk into our Bhilai office or call us. We’ll verify your dates, budget, and suggest the perfect trip.
                                </p>
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full" asChild>
                                    <a href="tel:+919406182174">Call Expert: +91 94061 82174</a>
                                </Button>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WhereToGoFromBhilai;
