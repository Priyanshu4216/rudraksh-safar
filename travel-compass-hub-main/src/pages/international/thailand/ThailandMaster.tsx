import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import { thaiCities, thailandMeta, thailandFAQs } from '@/data/thailand/master';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Utensils, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import SmartImage from '../../../components/SmartImage';

const ThailandMaster = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": thailandFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <Helmet>
                <title>{thailandMeta.title} | Rudraksh Safar</title>
                <meta name="description" content={thailandMeta.description} />
                <meta name="keywords" content={thailandMeta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/international-tours/thailand" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-foreground">

                {/* HERO SECTION */}
                <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <SmartImage
                            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop"
                            alt="Beautiful Thailand"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    <div className="relative z-10 container text-center text-white">
                        <div className="inline-block bg-green-500/20 backdrop-blur-md border border-green-400/30 px-4 py-1 rounded-full text-green-300 font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            ✨ Visa Free Entry for Indians
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl animate-in fade-in zoom-in duration-700 delay-150">
                            Amazing Thailand
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                            From the bustling streets of Bangkok to the turquoise waters of Phuket.
                            <br className="hidden md:block" /> Experience the "Land of Smiles" with Chhattisgarh's trusted travel partner.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px] text-lg h-14 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all" asChild>
                                <Link to="/plan-your-thailand-trip">Plan My Trip (Free Quote)</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white backdrop-blur-sm min-w-[200px] text-lg h-14 rounded-full" asChild>
                                <Link to="/international-tours/thailand-from-raipur">Flights from Raipur</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* TRUST & KEY FEATURES */}
                <div className="bg-white dark:bg-slate-900 py-12 border-b border-slate-100 dark:border-slate-800">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold">100% Safe</h3>
                                <p className="text-sm text-muted-foreground">Certified Local Guides</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto text-blue-600">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold">Easy Flights</h3>
                                <p className="text-sm text-muted-foreground">Direct connections</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto text-orange-600">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold">Indian Food</h3>
                                <p className="text-sm text-muted-foreground">Veg/Jain meals available</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto text-purple-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold">Local Office</h3>
                                <p className="text-sm text-muted-foreground">Support in Bhilai/Raipur</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESTINATION HIGHLIGHTS */}
                <div className="container py-20">
                    <h2 className="sr-only">Thailand Tour Packages from Raipur & Bhilai</h2>
                    <p className="sr-only">
                        Customized Thailand tour packages with flights from Raipur and local support from Bhilai.
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">Choose Your Vibe</h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                        Thailand offers something for everyone. Whether you want to party till dawn, relax on a quiet beach, or shop till you drop.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {thaiCities.map((city) => (
                            <Link key={city.id} to={`/international-tours/thailand/${city.id}`} className="block">
                                <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all">
                                    <SmartImage src={city.image} alt={city.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full border border-white/30">
                                            {city.alias}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{city.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {city.bestFor.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-white/20 text-white px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-orange-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                            View Packages <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>



                {/* THAILAND TRAVEL GUIDE (New High-Value Content) */}
                <div className="bg-white dark:bg-slate-950 py-20 border-t border-slate-100 dark:border-slate-900">
                    <div className="container">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Essential Guide</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Planning Thailand from Bhilai/Raipur?</h2>
                            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                                Everything you need to know before you pack your bags. We handle the complexities so you don't have to.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Flights */}
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Flight Connectivity</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    There are no direct flights from Raipur (RPR). The best routes for Bhilai residents are:
                                </p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span><strong>Best:</strong> Raipur ➝ Kolkata ➝ Bangkok (Shortest duration)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span><strong>Alternative:</strong> Raipur ➝ Delhi ➝ Phuket/Bangkok</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Visa */}
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Visa Free Entry</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong>Good News:</strong> Indian tourists currently enjoy Visa-Free entry (Temporary Scheme).
                                </p>
                                <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                                    <p className="font-bold text-xs uppercase mb-2 text-slate-500">Documents Required:</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">✅ Passport (6 months validity)</li>
                                        <li className="flex items-center gap-2">✅ Return Flight Tickets</li>
                                        <li className="flex items-center gap-2">✅ Hotel Vouchers</li>
                                        <li className="flex items-center gap-2">✅ 10,000 THB Cash (Proof of Funds)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 3: Currency & Tips */}
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Smart Travel Tips</h3>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <strong className="block text-foreground mb-1">Currency Exchange</strong>
                                        <span className="text-muted-foreground">Don't exchange INR at Bangkok airport (poor rates). Buy THB or USD in Bhilai/Raipur before flying.</span>
                                    </li>
                                    <li>
                                        <strong className="block text-foreground mb-1">Food for Vegetarians</strong>
                                        <span className="text-muted-foreground">"Jay" (Jain) food festivals are common. Indian restaurants are available in every major city.</span>
                                    </li>
                                    <li>
                                        <strong className="block text-foreground mb-1">SIM Card</strong>
                                        <span className="text-muted-foreground">Buy a 'Tourist SIM' at the airport (AIS or TrueMove) for unlimited 5G data.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WHY US SECTION */}
                <div className="bg-slate-100 dark:bg-slate-900 py-20">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2 block">Why Rudraksh Safar?</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">We Don't Just Book Tickets, We Manage Your Experience.</h2>
                                <p className="text-muted-foreground mb-6 text-lg">
                                    Traveling abroad can be daunting. Language barriers, food issues, and scams are real concerns.
                                    We bridge the gap with our local presence in Chhattisgarh and as a <Link to="/travel-agent-bhilai" className="text-orange-600 hover:underline">trusted travel agent in Bhilai</Link>.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Visa-Free Assistance (TDAC filling included)",
                                        "Indian Meals included in all packages",
                                        "Escorted Tours with Hindi/English speaking guides",
                                        "No Hidden Costs - What you see is what you pay"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-8 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 text-white" size="lg" asChild>
                                    <Link to="/contact">Visit Bhilai Office</Link>
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-200 rounded-3xl rotate-6 transform scale-95 opacity-50" />
                                <SmartImage
                                    src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2274&auto=format&fit=crop"
                                    alt="Thailand Experience"
                                    className="relative rounded-3xl shadow-2xl z-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ SECTION */}
                <div className="container py-20 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        {thailandFAQs.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded mt-1">Q</span>
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground ml-9">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </main >
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default ThailandMaster;
