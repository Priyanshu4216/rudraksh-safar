import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Palmtree, Sun, Umbrella, Anchor, Plane, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/seo/FAQSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const faqs = [
    {
        question: "What is the best time to visit beach destinations in India and Asia?",
        answer: "The ideal time for a beach holiday in India, Maldives, or Thailand is from October to March. During these months, the weather is pleasant, rainfall is minimal, and the sea is calm, making it perfect for water sports and sunbathing."
    },
    {
        question: "Which is cheaper: Goa, Andaman, or Bali?",
        answer: "Goa is the most budget-friendly domestic beach destination, ideal for short trips. Bali offers excellent value for international travel due to affordable luxury resorts. Andaman sits in the middle, having higher domestic flight costs but offering pristine, secluded beach experiences."
    },
    {
        question: "Do I need a passport for Lakshadweep or Andaman?",
        answer: "Indian citizens do not need a passport for Andaman or Lakshadweep as they are Indian territories. However, visiting Lakshadweep requires a special entry permit from the local administration, whereas Andaman requires no special permits for Indians."
    },
    {
        question: "What are the best beaches for scuba diving?",
        answer: "Havelock Island (Andaman) and the Maldives are renowned for world-class scuba diving. They offer crystal clear waters, vibrant coral reefs, and certified PADI dive centers suitable for both beginners and advanced divers."
    },
    {
        question: "Is Thailand good for a family beach vacation?",
        answer: "Yes, Thailand is excellent for families. Destinations like Phuket and Krabi offer kid-friendly resorts, safe swimming beaches, ethical elephant sanctuaries, and exciting island-hopping tours that appeal to all age groups."
    }
];

const BeachHolidayPackages = () => {
    const destinations = [
        { name: "Andaman Islands", tag: "Exotic", desc: "Renowned for its crystal-clear turquoise waters and pristine white sands, the Andaman Islands offer an unparalleled tropical escape. Havelock Island’s Radhanagar Beach is globally acclaimed, while Neil Island provides incredible scuba diving opportunities. Explore our detailed Andaman travel guide to plan your perfect island retreat, whether for adventure or a romantic honeymoon.", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=webp&q=80&w=800", link: "/domestic-tours/andaman" },
        { name: "Maldives", tag: "Luxury", desc: "Synonymous with ultra-luxury, the Maldives is the ultimate destination for romantic getaways. Featuring iconic overwater villas, private island resorts, and vibrant coral reefs, it promises an exclusive experience. With Visa on Arrival for Indians, booking a stunning Maldives beach package is seamless and hassle-free for couples seeking luxury.", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=webp&q=80&w=800", link: "/international-tours/maldives" },
        { name: "Goa", tag: "Party", desc: "As India's beach capital, Goa caters to every traveler. North Goa is famous for its vibrant nightlife, water sports, and beach shacks at Baga and Calangute. In contrast, South Goa offers tranquil, palm-fringed shores perfect for relaxation. Read our comprehensive Best Time to Visit Goa guide to plan your ideal coastal getaway.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=webp&q=80&w=800", link: "/domestic-tours/goa" },
        { name: "Bali", tag: "Culture", desc: "Bali seamlessly blends breathtaking beaches with rich cultural heritage. From surfing in Kuta to exploring ancient sea temples like Tanah Lot, Bali offers affordable luxury for all. Our Bali honeymoon and family packages highlight the island’s unique combination of coastal beauty, lush rice terraces, and vibrant local traditions.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=webp&q=80&w=800", link: "/international-tours/bali" },
        { name: "Thailand", tag: "Fun", desc: "Thailand is a premier beach destination offering diverse experiences. Enjoy exhilarating island-hopping tours across Phuket, Krabi, and the Phi Phi Islands. Beyond the stunning limestone karsts and vibrant marine life, our Thailand Island Hopping Guide details the best night markets, beach clubs, and snorkeling spots for an unforgettable vacation.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=webp&q=80&w=800", link: "/international-tours/thailand" },
        { name: "Lakshadweep", tag: "Trending", desc: "Emerging as India's hidden gem, Lakshadweep features untouched coral reefs, bioluminescent beaches, and serene lagoons. It is the perfect destination for eco-tourism and secluded relaxation. Often called India's very own Maldives, this archipelago guarantees a pristine and tranquil beach holiday away from commercial crowds.", image: "https://images.unsplash.com/photo-1629859546021-9d80d2165215?auto=format&fit=webp&q=80&w=800", link: "#" },
    ];

    return (
        <>
            <Helmet>
                <title>Beach Holiday Packages from India | Best Beach Trips</title>
                <meta name="description" content="Explore the best beach holiday packages including Goa, Maldives, Thailand, and Andaman. Compare destinations, prices, and travel tips." />
                <link rel="canonical" href="https://rudrakshsafar.com/BeachHolidayPackages" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Beach Holiday Packages from India",
                        "description": "Explore the best beach holiday packages including Goa, Maldives, Thailand, and Andaman. Compare destinations, prices, and travel tips.",
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": destinations.map((dest, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "name": dest.name,
                                "description": dest.desc,
                                "image": dest.image,
                                "url": `https://rudrakshsafar.com${dest.link}`
                            }))
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative py-24 bg-cyan-100 dark:bg-cyan-950/30 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Beach Packages', path: '/beach-holiday-packages' }]} />
                        </div>
                        <Palmtree className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
                            Best <span className="text-cyan-600">Beach Holiday Packages</span> from India
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                            Discover ultimate relaxation and thrilling water sports with our curated beach vacations. From the party shores of Goa to the luxurious water villas of the Maldives.
                        </p>
                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg text-lg h-14 px-8" asChild>
                            <a href="#destinations">Explore Destinations</a>
                        </Button>
                    </div>
                </section>

                {/* FEATURED SNIPPET & USER INTENT SECTION */}
                <section className="py-8 bg-background border-b border-border">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-cyan-50 dark:bg-cyan-950/30 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-900/50">
                                <h2 className="text-xl font-bold text-foreground mb-3">What are beach holiday packages?</h2>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Beach holiday packages are pre-planned travel itineraries that include accommodation near the coast, airport transfers, and organized sightseeing or water sports. These packages cater to couples, families, and solo travelers seeking a relaxing seaside getaway.
                                </p>
                            </div>
                            <div className="bg-muted/20 p-6 rounded-2xl border border-border flex flex-col justify-center">
                                <h2 className="text-xl font-bold text-foreground mb-3">Best Beach Holidays From India in Winter</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Winter (October to March) is the peak season for tropical escapes like <Link to="/domestic-tours/goa" className="text-cyan-600 hover:underline inline-block">Goa</Link>, <Link to="/international-tours/maldives" className="text-cyan-600 hover:underline inline-block">Maldives</Link>, and <Link to="/domestic-tours/andaman" className="text-cyan-600 hover:underline inline-block">Andaman</Link>. Escape the cold and enjoy pristine weather, calm seas, and vibrant nightlife.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Table of Contents */}
                <section className="py-12 bg-muted/10 border-b">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto bg-card rounded-xl border shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-cyan-600" />
                                Table of Contents
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground font-medium">
                                <li><a href="#destinations" className="hover:text-cyan-600 transition-colors">1. Top Handpicked Beach Paradises</a></li>
                                <li><a href="#packages" className="hover:text-cyan-600 transition-colors">2. Popular Beach Packages</a></li>
                                <li><a href="#comparison" className="hover:text-cyan-600 transition-colors">3. Destination Comparison: Goa vs Andaman vs Maldives</a></li>
                                <li><a href="#best-time" className="hover:text-cyan-600 transition-colors">4. Best Time to Visit</a></li>
                                <li><a href="#packing" className="hover:text-cyan-600 transition-colors">5. The Ultimate Beach Packing List</a></li>
                                <li><a href="#faqs" className="hover:text-cyan-600 transition-colors">6. Frequently Asked Questions (FAQs)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section id="destinations" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Handpicked Beach Paradises</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group border-muted">
                                    <div className="h-48 relative overflow-hidden bg-muted">
                                        <img
                                            src={dest.image}
                                            alt={`${dest.name} beach holiday packages`}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <Badge className="absolute top-4 right-4 bg-white/90 text-black shadow-sm backdrop-blur-sm">{dest.tag}</Badge>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                                        <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">{dest.desc}</p>
                                        <div className="flex gap-4">
                                            <Button className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors" variant="outline" asChild>
                                                <Link to={dest.link !== "#" ? dest.link : "/Contact"}>View Packages</Link>
                                            </Button>
                                            <Button variant="ghost" size="icon" className="shrink-0 text-green-600 hover:bg-green-50" asChild>
                                                <a href={`https://wa.me/919406182174?text=Quote for ${dest.name} beach package`} aria-label="WhatsApp Inquiry">
                                                    <ArrowRight className="w-5 h-5" />
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Packages Grid */}
                <section id="packages" className="py-16 bg-muted/30 border-t border-border">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Popular Beach Packages</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <Link to="/domestic-tours/andaman" className="group block bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all">
                                <div className="h-40 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=webp&w=600&q=80" alt="Andaman Islands Scuba Diving Package" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">Andaman 5-Day Escape</h3>
                                    <p className="text-muted-foreground text-sm">Havelock & Neil Island</p>
                                </div>
                            </Link>

                            <Link to="/domestic-tours/goa" className="group block bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all">
                                <div className="h-40 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=webp&w=600&q=80" alt="Goa Honeymoon Trip North and South Goa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">Goa Honeymoon Trip</h3>
                                    <p className="text-muted-foreground text-sm">North & South Goa</p>
                                </div>
                            </Link>

                            <Link to="/international-tours/maldives" className="group block bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all">
                                <div className="h-40 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=webp&w=600&q=80" alt="Maldives Overwater Luxury Resort Retreat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">Maldives Luxury Retreat</h3>
                                    <p className="text-muted-foreground text-sm">Overwater Villas & Spa</p>
                                </div>
                            </Link>

                            <Link to="/international-tours/thailand" className="group block bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all">
                                <div className="h-40 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=webp&w=600&q=80" alt="Thailand Island Tour Phuket and Phi Phi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-600 transition-colors">Thailand Island Hopping</h3>
                                    <p className="text-muted-foreground text-sm">Phuket & Phi Phi Islands</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Deep Content Sections for SEO */}
                <section className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Comparison Table */}
                            <div id="comparison" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Goa vs Andaman vs Maldives: Which is Right for You?</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Choosing the right coastal destination depends on your travel intent. Are you seeking heart-pumping water sports, serene isolation, vibrant nightlife, or ultra-luxurious overwater villas? Here is a quick breakdown to help you decide.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm text-left">
                                        <thead className="bg-muted">
                                            <tr>
                                                <th className="p-4 border-b">Feature</th>
                                                <th className="p-4 border-b">Goa, India</th>
                                                <th className="p-4 border-b">Andaman Islands</th>
                                                <th className="p-4 border-b">The Maldives</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Primary Vibe</td>
                                                <td className="p-4">Nightlife, Culture, Budget</td>
                                                <td className="p-4">Seclusion, Scuba, Nature</td>
                                                <td className="p-4">Ultra-Luxury, Romance, Private</td>
                                            </tr>
                                            <tr className="border-b hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Best For</td>
                                                <td className="p-4">Friends, Solo Backpackers</td>
                                                <td className="p-4">Adventure Seekers, Families</td>
                                                <td className="p-4">Honeymooners, Couples</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Budget Guide</td>
                                                <td className="p-4">Low - Medium</td>
                                                <td className="p-4">Medium - High</td>
                                                <td className="p-4">Very High</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold mt-12 mb-4">Focus: Goa Beach Holidays</h3>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Goa remains the undisputed king of Indian beaches. With easy access via Dabolim Airport and Manohar International Airport (MOPA), <Link to="/domestic-tours/goa" className="text-cyan-600 hover:underline">Goa beach holidays</Link> offer a dual experience. North Goa boasts legendary nightlife and water sports, while South Goa offers secluded golden sands.
                                </p>

                                <h3 className="text-2xl font-bold mt-8 mb-4">Focus: Andaman Island Tours</h3>
                                <p className="text-lg text-muted-foreground mb-4">
                                    For pristine, untouched beauty, <Link to="/domestic-tours/andaman" className="text-cyan-600 hover:underline">Andaman island tours</Link> are unmatched. Famous for Radhanagar Beach on Havelock Island and supreme scuba diving points, Andaman is perfect for adventure seekers.
                                </p>

                                <h3 className="text-2xl font-bold mt-8 mb-4">Focus: Maldives Beach Packages</h3>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Synonymous with luxury, <Link to="/international-tours/maldives" className="text-cyan-600 hover:underline">Maldives beach packages</Link> feature private islands, overwater bungalows, and world-class dining. Landing at Malé International Airport immediately transports you to paradise.
                                </p>

                                <h3 className="text-2xl font-bold mt-8 mb-4">Focus: Thailand Island Tours</h3>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Thailand combines stunning coastlines with rich culture. <Link to="/international-tours/thailand" className="text-cyan-600 hover:underline">Thailand island tours</Link> center around Phuket, Krabi, and the Phi Phi Islands. Expect dramatic limestone karsts, ethical elephant sanctuaries, and bustling night markets.
                                </p>
                            </div>

                            {/* Best Time to Visit - Snippet Optimized */}
                            <div id="best-time" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">What is the best time to visit beach destinations?</h2>
                                <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-8">
                                    <p className="text-lg text-foreground font-medium">
                                        The ideal time to visit tropical beach destinations in India and Southeast Asia is between **October and March**. During this winter season, the weather is remarkably pleasant, humidity is low, and the clear skies provide perfect conditions for scuba diving, snorkeling, and beach hopping.
                                    </p>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    If you travel during the monsoon months (June to September), expect heavy rainfall and choppy seas which often lead to cancelled ferry rides and restricted water sporting activities. However, for those seeking lush greenery and huge discounts on luxury stays, the shoulder season (April and May) can offer excellent deals. For detailed climate tracking, check our guide on the <Link to="/destinations/thailand/guides/BestTimeToVisitThailand" className="text-cyan-600 hover:underline">best time to visit Thailand</Link>.
                                </p>
                            </div>

                            {/* Packing List */}
                            <div id="packing" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">The Ultimate Beach Packing List</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Packing smartly ensures you stay comfortable under the tropical sun. Whether you are exploring the party scene in North Goa or staying at a remote water villa in the Maldives, these essentials are non-negotiable.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            <span><strong>Reef-Safe Sunscreen:</strong> Protect your skin and the local coral reefs (SPF 50+ recommended).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            <span><strong>Quick-Dry Microfiber Towel:</strong> Takes up zero space and dries instantly.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            <span><strong>Waterproof Dry Bag:</strong> Essential for protecting your phone and camera during boat rides.</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            <span><strong>Comfortable Footwear:</strong> Durable flip-flops for the sand and aqua-shoes for rocky areas.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            <span><strong>First Aid & Meds:</strong> Motion sickness pills (for ferries) and aloe vera gel for sunburns.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ Block */}
                <section id="faqs" className="py-20 bg-background border-t">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <FAQSection title="Frequently Asked Questions about Beach Holidays" faqs={[
                            ...faqs,
                            {
                                question: "How much does a Maldives trip cost from India?",
                                answer: "A budget-friendly Maldives package starts around ₹50,000 to ₹60,000 per person for a 3-night stay in a standard resort. Luxury packages with overwater villas and seaplane transfers typically start from ₹1,00,000+ per person."
                            },
                            {
                                question: "What is the best beach holiday in December?",
                                answer: "Goa is legendary in December due to the Sunburn Festival and Christmas/New Year parties. For international trips, Thailand (Phuket) and the Maldives offer perfect, dry weather in December."
                            }
                        ]} />
                    </div>
                </section>

                {/* Helpful Travel Guides */}
                <section className="py-12 bg-muted/10 border-t">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Helpful Travel Guides</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/best-time-to-visit-goa" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-cyan-50 hover:border-cyan-200 transition-all font-medium text-muted-foreground hover:text-cyan-700 shadow-sm">
                                🌴 Best Time to Visit Goa
                            </Link>
                            <Link to="/domestic-tours/andaman" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-cyan-50 hover:border-cyan-200 transition-all font-medium text-muted-foreground hover:text-cyan-700 shadow-sm">
                                🤿 Andaman Travel Guide
                            </Link>
                            <Link to="/destinations/thailand/guides" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-cyan-50 hover:border-cyan-200 transition-all font-medium text-muted-foreground hover:text-cyan-700 shadow-sm">
                                🚤 Thailand Island Hopping Guide
                            </Link>
                            <Link to="/budget-tour-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-cyan-50 hover:border-cyan-200 transition-all font-medium text-muted-foreground hover:text-cyan-700 shadow-sm">
                                💰 Budget Travel Tips
                            </Link>
                        </div>
                    </div>
                </section>

                {/* INTERNAL HUB LINKS (PHASE 2C) */}
                <section className="py-12 bg-muted/20 border-y">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Explore More Thematic Packages</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/domestic-packages" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                🇮🇳 All Domestic Escapes
                            </Link>
                            <Link to="/budget-tour-packages" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                🎒 Budget Beach Trips
                            </Link>
                            <Link to="/international-packages" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                🌴 View International Beaches
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Commercial CTA Block */}
                <section className="py-24 bg-cyan-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Dream Beach Vacation?</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Whether you're looking for <Link to="/domestic-tours/goa" className="underline hover:text-cyan-200">Goa tour packages</Link>, exotic <Link to="/international-tours/bali" className="underline hover:text-cyan-200">Bali honeymoons</Link>, or serene Andaman retreats, our travel experts will customize the perfect itinerary for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 text-cyan-900 shadow-xl" asChild>
                                <a href="https://wa.me/919406182174?text=Hi, I want to plan a custom beach holiday package.">
                                    Plan Your Trip via WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-cyan-900 shadow-xl" asChild>
                                <Link to="/Contact">
                                    Request a Callback
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BeachHolidayPackages;
