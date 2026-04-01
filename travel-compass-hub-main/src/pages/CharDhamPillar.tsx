import { charDhamData } from '@/data/chardham/chardham';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Activity, AlertTriangle, ShieldCheck, Mountain, Navigation, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import FAQSection from '@/components/seo/FAQSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const CharDhamPillar = () => {
    // Generate FAQ Schema internally if needed, or rely on FAQSection
    return (
        <>
            <Helmet>
                <title>Char Dham Yatra 2026: Complete Guide, Packages & Registration | Rudraksh Safar</title>
                <meta
                    name="description"
                    content="The ultimate guide to Char Dham Yatra 2026. Get official opening dates, helicopter & road packages, medical safety tips, and route maps for Kedarnath, Badrinath, Gangotri & Yamunotri."
                />
                <meta name="keywords" content="char dham yatra 2026, kedarnath yatra packages, badrinath tour, char dham helicopter booking, yamunotri gangotri tour, uttarakhand pilgrimage" />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-package" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "Char Dham Yatra 2026",
                        "startDate": "2026-05-10",
                        "endDate": "2026-11-05",
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                        "eventStatus": "https://schema.org/EventScheduled",
                        "location": {
                            "@type": "Place",
                            "name": "Uttarakhand, India",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Uttarakhand",
                                "addressCountry": "IN"
                            }
                        },
                        "image": [
                            "https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000&auto=format&fit=crop"
                        ],
                        "description": "Annual Hindu pilgrimage to the four sacred shrines in the Himalayas: Kedarnath, Badrinath, Gangotri, and Yamunotri.",
                        "offers": {
                            "@type": "AggregateOffer",
                            "url": "https://rudrakshsafar.com/chardham-yatra-package",
                            "priceCurrency": "INR",
                            "lowPrice": "18000",
                            "offerCount": "5"
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "Rudraksh Safar",
                            "url": "https://rudrakshsafar.com"
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?q=80&w=2692&auto=format&fit=crop"
                            alt="Himalayas Char Dham Mountains in Uttarakhand"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/40" />
                    </div>

                    <div className="container relative z-10 text-center text-white mt-12">
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Domestic Packages', path: '/domestic-packages' }, { label: 'Char Dham Yatra', path: '/chardham-yatra-package' }]} />
                        </div>
                        <Badge className="mb-6 bg-orange-600 hover:bg-orange-500 border-none text-white px-5 py-2 text-sm md:text-base font-bold tracking-widest uppercase shadow-lg">
                            Yatra 2026 Registrations Open
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-xl">
                            The Sacred <br /> <span className="text-orange-400">Char Dham Yatra</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 font-medium drop-shadow-md leading-relaxed">
                            Experience the ultimate journey to Moksha. Travel safely to Yamunotri, Gangotri, Kedarnath, and Badrinath with Rudraksh Safar—Uttarakhand's most trusted pilgrimage operator.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white min-w-[220px] h-14 text-lg font-bold shadow-xl transition-transform hover:scale-105" asChild>
                                <a href="#packages">View Yatra Packages</a>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-md min-w-[220px] h-14 text-lg font-bold shadow-xl transition-transform hover:scale-105" asChild>
                                <Link to="/chardham-yatra-route-map">View Interactive Map</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FEATURED SNIPPET: What is Char Dham Yatra? */}
                <section className="py-8 bg-background border-b border-border">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-2xl border border-orange-200 dark:border-orange-900/50">
                            <h2 className="text-xl font-bold text-foreground mb-3">What is Char Dham Yatra?</h2>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                The Char Dham Yatra is a sacred Hindu pilgrimage circuit in the Indian Himalayas of Uttarakhand. It consists of four holy sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. Completing this high-altitude journey is believed to cleanse devotees of past sins and pave the way to Moksha (ultimate salvation).
                            </p>
                        </div>
                    </div>
                </section>

                {/* ESSENTIAL TOOLS GRID */}
                <section className="py-12 bg-muted/10 border-b border-border">
                    <div className="container">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/chardham-yatra-route-map" className="group bg-card border border-border p-6 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all flex items-center gap-5">
                                <div className="bg-blue-100 text-blue-600 p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
                                    <MapPin className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground mb-1">Route & Distance Map</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Distances, Elevations & Pitstops</p>
                                </div>
                            </Link>
                            <Link to="/is-chardham-yatra-safe" className="group bg-card border border-border p-6 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all flex items-center gap-5">
                                <div className="bg-red-100 text-red-600 p-4 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors shadow-inner">
                                    <ShieldCheck className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground mb-1">Safety & Medical Guide</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Acclimatization & Fitness</p>
                                </div>
                            </Link>
                            <Link to="/chardham-yatra-price" className="group bg-card border border-border p-6 rounded-2xl hover:border-green-500 hover:shadow-lg transition-all flex items-center gap-5">
                                <div className="bg-green-100 text-green-600 p-4 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors shadow-inner">
                                    <Activity className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground mb-1">Official Price List 2026</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Helicopter, Pony & Taxi Rates</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Table of Contents */}
                <section className="py-10 bg-background border-b">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-card rounded-xl border shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground border-b pb-4">
                                <Navigation className="w-6 h-6 text-orange-600" />
                                Ultimate Char Dham Guide
                            </h2>
                            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground font-medium text-lg">
                                <li><a href="#spiritual-significance" className="hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-500" /> 1. The Spiritual Gravity of the Yatra</a></li>
                                <li><a href="#temples" className="hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-500" /> 2. The Four Divine Abodes</a></li>
                                <li><a href="#logistics" className="hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-500" /> 3. Route Planning & Ground Logistics</a></li>
                                <li><a href="#preparation" className="hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-500" /> 4. Physical Prep & Medical Rules</a></li>
                                <li><a href="#packages" className="hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-500" /> 5. View Authorized Tour Packages</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Introduction & Legitimacy */}
                <section id="spiritual-significance" className="py-20 bg-background scroll-mt-20">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                            <div className="space-y-6">
                                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-none px-3 py-1 text-sm font-bold uppercase tracking-widest hidden md:inline-block">
                                    Spiritual Significance
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                                    Why is Char Dham the Ultimate Pilgrimage?
                                </h2>
                                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Located high in the majestic altitudes of the Garhwal Himalayas in Uttarakhand, the Char Dham Yatra is considered the pinnacle of spiritual journeys in Hinduism. Initiated by the great philosopher and saint Adi Shankaracharya in the 8th century, this circuit is believed to cleanse the soul of all worldly sins and open the gates to <strong>Moksha (Salvation)</strong>.
                                    </p>
                                    <p>
                                        The sacred journey always proceeds in a clockwise direction—from West to East. It begins at <strong>Yamunotri</strong> (the source of the Yamuna River), proceeds to <strong>Gangotri</strong> (the source of the Ganges), climbs up to the perilous heights of <strong>Kedarnath</strong> (the abode of Lord Shiva), and culminates at <strong>Badrinath</strong> (the seat of Lord Vishnu).
                                    </p>
                                    <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-xl border-l-4 border-orange-500 shadow-inner my-6">
                                        <h3 className="text-xl font-bold text-foreground mb-3">Our Promise as Your Yatra Partner</h3>
                                        <p className="text-base">
                                            Undertaking this journey demands massive physical endurance and complex logistical planning in remote terrains. At Rudraksh Safar, we remove the friction of the journey. Whether you require a <span className="font-bold text-foreground">VIP Helicopter charter</span> for elderly parents or an organized <span className="font-bold text-foreground">road expedition in luxury tempo travelers</span>, our priority is guaranteeing your darshan safely.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Authorized Partner', icon: ShieldCheck },
                                        { label: '24/7 Medical Network', icon: Activity },
                                        { label: 'Priority Darshan Access', icon: MapPin },
                                        { label: 'Transparent Pricing', icon: Mountain },
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border shadow-sm hover:border-orange-300 transition-colors">
                                            <feature.icon className="h-6 w-6 text-orange-600" />
                                            <span className="font-bold text-foreground">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-[2.5rem] transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000&auto=format&fit=crop"
                                    alt="Scenic View of Himalayan Temple Architecture"
                                    loading="lazy"
                                    className="relative rounded-[2.5rem] shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-700 w-full object-cover h-[700px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 4 Temples Grid */}
                <section id="temples" className="py-20 bg-muted/30 border-y scroll-mt-20">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm bg-orange-100 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">The Divine Circuit</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-foreground">The Four Abodes of God</h2>
                            <p className="mt-6 text-muted-foreground text-xl leading-relaxed">Each of the four dhams holds a unique mythology and requires specific physical preparation to conquer the dramatic Himalayan altitudes.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.values(charDhamData.temples).map((temple) => (
                                <div key={temple.id} className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                                        <img
                                            src={temple.image}
                                            alt={`Image of ${temple.name} temple`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <h3 className="text-3xl font-serif font-bold mb-2 drop-shadow-md">{temple.name}</h3>
                                            <div className="flex items-center gap-2 text-orange-400 font-bold mb-4 drop-shadow-sm">
                                                <Mountain className="w-4 h-4" />
                                                <span>Altitude: {temple.altitude}</span>
                                            </div>

                                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
                                                <div className="space-y-3 text-sm text-gray-200 mb-6 border-t border-white/20 pt-4 mt-2">
                                                    <p className="flex items-center gap-2"><span className="w-16 font-bold text-white/50">Deity:</span> {temple.deity}</p>
                                                    <p className="flex items-center gap-2"><span className="w-16 font-bold text-white/50">Opens:</span> {temple.openingDate}</p>
                                                </div>
                                            </div>

                                            <Link
                                                to={`/${temple.slug}`}
                                                className="inline-flex items-center justify-center w-full py-3 bg-white/10 hover:bg-orange-500 backdrop-blur-sm rounded-xl text-sm font-bold text-white transition-colors border border-white/20"
                                            >
                                                Explore Temple Deep Dive <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PILGRIMAGE INTENT & MASTER HUB */}
                <section className="py-16 bg-background border-y border-border">
                    <div className="container max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Master Hub Links */}
                            <div className="bg-muted/20 p-8 rounded-3xl border border-border">
                                <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Complete Char Dham Travel Guide</h2>
                                <ul className="space-y-4">
                                    <li><Link to="/chardham/KedarnathTemple" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Kedarnath Temple Guide</Link></li>
                                    <li><Link to="/chardham/BadrinathTemple" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Badrinath Temple Guide</Link></li>
                                    <li><Link to="/chardham/GangotriTemple" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Gangotri Temple Guide</Link></li>
                                    <li><Link to="/chardham/YamunotriTemple" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Yamunotri Temple Guide</Link></li>
                                    <li><Link to="/chardham-yatra-route-map" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Char Dham Route Map</Link></li>
                                    <li><Link to="/chardham/CharDhamRegistration" className="text-lg font-medium text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Char Dham Registration</Link></li>
                                </ul>
                            </div>

                            {/* Pilgrimage Intent Block */}
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-3xl border-2 border-orange-500 flex flex-col justify-center">
                                <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Plan Your Char Dham Yatra</h2>
                                <p className="text-muted-foreground mb-8 text-lg">Secure your journey to salvation. Book all-inclusive travel packages with authorized passes and VIP Darshan.</p>
                                <div className="space-y-4">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 text-lg" asChild>
                                        <Link to="/chardham-yatra-package">View Char Dham Tour Packages</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 font-bold h-14 text-lg" asChild>
                                        <Link to="/chardham-yatra-package">Explore Helicopter Packages</Link>
                                    </Button>
                                    <Button variant="ghost" className="w-full text-foreground hover:bg-orange-100 font-medium h-12" asChild>
                                        <Link to="/chardham/CharDhamRegistration">Read Yatra Registration Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logistics Masterclass (SEO Deep Content) */}
                <section id="logistics" className="py-24 bg-background scroll-mt-20">
                    <div className="container max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12">

                            <div className="lg:col-span-8">
                                <h2 className="text-4xl font-serif font-bold mb-8 text-foreground">Ground Logistics & Route Masterplan</h2>
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed border-l-4 border-orange-500 pl-6">
                                    A standard road Yatra covers over 1,600 km round-trip originating from Haridwar/Dehradun. Due to strict municipal driving bans at night on Himalayan ghats, travel time extends significantly.
                                </p>

                                <div className="space-y-8 bg-muted/10 p-8 rounded-3xl border border-border">
                                    <h3 className="text-2xl font-bold border-b pb-4 text-foreground">The Authorized Route Flow</h3>
                                    {charDhamData.routes.map((route, idx) => (
                                        <div key={idx} className="flex gap-6 relative">
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg shadow-sm z-10">
                                                    {idx + 1}
                                                </div>
                                                {idx !== charDhamData.routes.length - 1 && (
                                                    <div className="w-1 h-full bg-gradient-to-b from-orange-200 to-muted my-2 absolute top-12 bottom-0 left-[22px] -z-10" />
                                                )}
                                            </div>
                                            <div className="pb-8 pt-1">
                                                <h4 className="text-2xl font-bold text-foreground mb-3">{route.from} ➝ {route.to}</h4>
                                                <div className="flex flex-wrap gap-3 mb-4">
                                                    <Badge variant="outline" className="bg-background text-sm py-1"><MapPin className="w-3 h-3 mr-1" /> {route.distanceKm} km</Badge>
                                                    <Badge variant="outline" className="bg-background text-sm py-1"><Activity className="w-3 h-3 mr-1" /> {route.timeHours} drive</Badge>
                                                </div>
                                                <p className="text-lg text-muted-foreground leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-border line-clamp-2 md:line-clamp-none">
                                                    {route.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="preparation" className="lg:col-span-4 scroll-mt-24">
                                <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 shadow-2xl sticky top-28 border border-slate-800">
                                    <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-700 flex items-center gap-3">
                                        <AlertTriangle className="h-6 w-6 text-red-500" /> Medical Protocols
                                    </h3>
                                    <div className="space-y-8">
                                        <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl">
                                            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Mandatory Biometrics</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                The Uttarakhand government requires mandatory biometric registration for ALL pilgrims prior to ascending the mountains to monitor carrying capacity.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-orange-300 font-bold mb-2">Altitude Sickness (AMS)</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                                Kedarnath sits at 11,755 ft. Oxygen levels drop by 30%. Symptoms include nausea and dizziness. We enforce strict acclimatization pit-stops.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-orange-300 font-bold mb-2">Fitness Test Required</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                                Pilgrims over 50 must carry a licensed doctor's fitness certificate identifying them as clear for high-altitude trekking.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold h-12" asChild>
                                            <Link to="/is-chardham-yatra-safe">Read Full Safety Rules</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Commercial Packages Section */}
                <section id="packages" className="py-24 bg-muted/20 border-t scroll-mt-20">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-6">Transparent Bookings</Badge>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Choose Your Package</h2>
                            <p className="text-muted-foreground text-xl mb-8 leading-relaxed">Whether you prefer the scenic roads or the speed of a helicopter, we have official, heavily vetted packages ready.</p>
                            <Button variant="link" className="text-orange-600 font-bold text-lg" asChild>
                                <Link to="/chardham-yatra-price">Review Official Govt Price List (No Hidden Charges) &rarr;</Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {charDhamData.packages.map((pkg, idx) => (
                                <div key={idx} className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col relative overflow-hidden group">
                                    {pkg.type === 'Helicopter' && (
                                        <div className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                                    )}
                                    <div className="mb-6">
                                        <Badge variant={pkg.type === 'Helicopter' ? 'destructive' : 'default'} className={`mb-6 text-sm py-1 px-3 ${pkg.type === 'Road' ? 'bg-blue-600' : ''}`}>
                                            {pkg.type} Package
                                        </Badge>
                                        <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">{pkg.title}</h3>
                                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-orange-500" /> {pkg.duration}
                                        </p>
                                    </div>
                                    <div className="mb-8 border-t border-b border-border py-6 bg-muted/30 -mx-8 px-8 group-hover:bg-orange-50 transition-colors">
                                        <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest font-bold">Starting from</p>
                                        <p className="text-4xl font-bold text-foreground tracking-tighter">{pkg.price}</p>
                                        <p className="text-xs text-muted-foreground mt-2">*Per person, subject to hotel slab</p>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-1">
                                        {pkg.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-4 text-foreground/80 font-medium">
                                                <div className="min-w-[5px] min-h-[5px] w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                                                <span className="leading-snug">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className={`w-full h-14 text-lg font-bold shadow-md hover:-translate-y-1 transition-transform ${pkg.type === 'Helicopter' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-orange-600 hover:bg-orange-500 text-white'}`} asChild>
                                        <Link to={pkg.link}>View Itinerary</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INTERNAL HUB LINKS (PHASE 2C) */}
                <section className="py-12 bg-white dark:bg-slate-950 border-y">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Explore More Domestic & Pilgrimage Collections</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/domestic-packages" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition flex items-center gap-2">
                                🏔️ View All Domestic Packages
                            </Link>
                            <Link to="/budget-tour-packages" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition flex items-center gap-2">
                                🎒 Budget Travel Deals
                            </Link>
                            <Link to="/domestic-tours/kashmir" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition flex items-center gap-2">
                                ❄️ Kashmir Tour Packages
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content FAQs & Schema */}
                <section className="py-24 bg-background border-t">
                    <div className="container max-w-4xl mx-auto">
                        <FAQSection title="Char Dham Yatra Booking FAQs" faqs={charDhamData.faqs} />
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif drop-shadow-md">Book Your Divine Escapade</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            Slots for Kedarnath and Badrinath helicopter tickets are extremely limited. Secure your dates today to guarantee a friction-free yatra.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 font-bold h-16 px-10 rounded-full shadow-2xl text-lg transition-transform hover:scale-105" asChild>
                                <a href="https://wa.me/919203650311?text=Hi, I want to inquire about Char Dham Yatra 2026.">
                                    <MessageCircle className="w-6 h-6 mr-3" /> WhatsApp the Helpdesk
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white/50 border-2 hover:bg-white/10 h-16 px-10 rounded-full shadow-lg text-lg transition-transform hover:scale-105" asChild>
                                <a href="tel:+919203650311">
                                    <Phone className="w-6 h-6 mr-3" /> Call a Yatra Expert
                                </a>
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

export default CharDhamPillar;
