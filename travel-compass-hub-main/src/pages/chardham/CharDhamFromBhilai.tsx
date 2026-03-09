import { bhilaiData } from '@/data/chardham/from-bhilai-data';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Train, Plane, MapPin, Calendar, CheckCircle2, ArrowRight, TrainFront } from 'lucide-react';
import FAQSection from '@/components/seo/FAQSection';

const CharDhamFromBhilai = () => {
    const { meta, hero, transport, itinerary, faqs } = bhilaiData;

    return (
        <>
            <Helmet>
                <title>{meta.title} | Rudraksh Safar</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords.join(', ')} />
                <link rel="canonical" href="https://rudrakshsafar.com/chardham-yatra-from-bhilai" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">

                {/* HERO */}
                <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Char Dham from Bhilai"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container relative z-10 text-center text-white max-w-4xl">
                        <Badge className="bg-orange-600 mb-4 hover:bg-orange-700 border-none text-white px-4 py-1">
                            Bhilai / Durg / Raipur Special
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-8 font-light">
                            {hero.subtitle}
                        </p>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px]" asChild>
                            <Link to="/chardham-yatra-package">View Packages</Link>
                        </Button>
                    </div>
                </div>

                <div className="container py-12 max-w-5xl space-y-16">

                    {/* 1. TRANSPORT STRATEGY */}
                    <section>
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Logistics: Reaching the Himalayas</h2>

                        {/* ALERT */}
                        {bhilaiData.bookingTips && (
                            <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-8">
                                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">📢 Important Booking Tip</h3>
                                <ul className="list-disc pl-5 text-sm text-red-700 dark:text-red-400 space-y-1">
                                    {bhilaiData.bookingTips.map((tip, i) => (
                                        <li key={i}>{tip.replace(/\*\*/g, '')}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {transport.options.map((opt, idx) => (
                                <div key={idx} className={`bg-card rounded-2xl p-6 border ${opt.recommended ? 'border-orange-500 ring-2 ring-orange-100 dark:ring-orange-900/20' : 'border-border'} flex flex-col`}>
                                    {opt.recommended && (
                                        <div className="mb-4">
                                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Recommended for Families</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-muted rounded-full">
                                            {opt.mode === 'Train' ? <TrainFront className="h-6 w-6 text-blue-600" /> : <Plane className="h-6 w-6 text-sky-500" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{opt.title}</h3>
                                            <p className="text-sm text-muted-foreground">{opt.route}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <p className="text-sm font-semibold mb-2">Pros:</p>
                                            <ul className="grid gap-1">
                                                {opt.pros.map((p, i) => (
                                                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-border">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</p>
                                        <p className="font-mono text-lg">{opt.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TRAIN TABLE */}
                        {bhilaiData.trainTable && (
                            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-slate-100 dark:bg-slate-900 px-6 py-4 border-b border-border">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Train className="h-5 w-5 text-orange-600" />
                                        Recommended Trains from Durg/Raipur
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                                            <tr>
                                                <th className="px-6 py-3">Train</th>
                                                <th className="px-6 py-3">Departs (Durg)</th>
                                                <th className="px-6 py-3">Arrives</th>
                                                <th className="px-6 py-3">Frequency</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bhilaiData.trainTable.map((train, i) => (
                                                <tr key={i} className="border-b border-border last:border-none hover:bg-muted/20">
                                                    <td className="px-6 py-4 font-medium">
                                                        {train.trainNo} - {train.name}
                                                    </td>
                                                    <td className="px-6 py-4">{train.departure}</td>
                                                    <td className="px-6 py-4">{train.arrival}</td>
                                                    <td className="px-6 py-4 text-muted-foreground">{train.days}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* KEDARNATH SPECIFIC CTA */}
                        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2 text-orange-800 dark:text-orange-400">
                                    <MapPin className="h-6 w-6" /> Planning only for Kedarnath?
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                                    Check our dedicated guide for Bhilai to Kedarnath Yatra 2026. Includes detailed itinerary, helicopter booking, and exclusive packages.
                                </p>
                            </div>
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white shrink-0" asChild>
                                <Link to="/bhilai-to-kedarnath-yatra-package-2026">View Kedarnath Guide</Link>
                            </Button>
                        </div>

                    </section>

                    {/* 2. ITINERARY */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-border">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold">{itinerary.title}</h2>
                            <p className="text-muted-foreground mt-2">Designed for travellers from Chhattisgarh</p>
                        </div>

                        <div className="relative border-l-2 border-orange-200 dark:border-orange-800 ml-4 md:ml-12 space-y-8">
                            {itinerary.days.map((day, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-orange-500 border-4 border-white dark:border-slate-900" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                        <span className="font-black text-orange-600 text-lg">Day {day.day}</span>
                                        <h3 className="font-bold text-lg text-foreground">{day.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{day.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. FAQs */}
                    <section className="mb-12">
                        <FAQSection title="Bhilai Traveller FAQs" faqs={faqs} />
                    </section>

                    <div className="text-center pb-12">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                            <Link to="/chardham-yatra-package">Get Quote from Durg/Raipur</Link>
                        </Button>
                    </div>

                    {/* --- DEEP SEO CONTENT BLOCKS --- */}
                    <section id="deep-seo" className="py-16 bg-muted/20 rounded-3xl mb-12">
                        <div className="container mx-auto px-4 max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Complete Guide to Char Dham Yatra From Bhilai & Raipur</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Undertaking the sacred **Char Dham Yatra from Bhilai, Durg, or Raipur** is a deeply spiritual journey that requires meticulous planning. The Yatra traditionally covers the four holy shrines located in the high Himalayas of Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. For pilgrims traveling from Chhattisgarh, logistics—including train bookings, flights, helicopter tickets, and accommodation—can be overwhelming. Rudraksh Safar specializes in organizing seamless, all-inclusive Char Dham Yatra packages specifically tailored for Central Indian devotees.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Most Yatris from Bhilai prefer to take connecting trains from Durg Junction or flights from Swami Vivekananda Airport (Raipur) to Delhi or Dehradun. From Haridwar or Rishikesh, the real mountain journey begins. Our packages include premium tempo travelers, experienced mountain drivers, pre-booked hygienic hotels, and VIP Darshan arrangements where applicable.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Route Map & Distance Guide (Chhattisgarh to Uttarakhand)</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Understanding the route map is crucial. Here is the standard trajectory our pilgrims follow:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                    <li><strong>Leg 1: Bhilai to Delhi/Haridwar.</strong> Travel via flight (Raipur to Delhi - 1.5 hrs) or train (Durg to Hazrat Nizamuddin - 18 hrs).</li>
                                    <li><strong>Leg 2: Haridwar to Barkot (Yamunotri).</strong> A 200 km drive into the mountains. Yamunotri requires a 6km steep trek from Janki Chatti.</li>
                                    <li><strong>Leg 3: Barkot to Uttarkashi (Gangotri).</strong> Exploring the origin of the holy River Ganga. The drive is scenic and the temple is directly accessible by road.</li>
                                    <li><strong>Leg 4: Uttarkashi to Guptkashi/Sonprayag (Kedarnath).</strong> The most physically demanding leg. Includes a 16km trek. Helicopter services from Phata/Sirsi are heavily utilized by our senior citizen guests.</li>
                                    <li><strong>Leg 5: Kedarnath to Badrinath.</strong> A spiritual culmination at the temple of Lord Vishnu, accessible by road via Joshimath.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Medical & Physical Preparedness</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The altitudes at Kedarnath (11,755 ft) and Badrinath (10,826 ft) can induce acute mountain sickness (AMS) in unacclimatized travelers. We strongly advise pilgrims from the plains of Chhattisgarh to consult their physicians before booking. Engaging in brisk walking and breathing exercises (Pranayama) at least a month prior to departure dramatically improves oxygen retention in the mountains. We carry basic first aid kits and portable oxygen canisters in our expedition vehicles to ensure absolute safety.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link to="/kedarnath-temple" className="text-orange-600 hover:underline font-medium">Kedarnath Temple Details</Link>
                                    <Link to="/badrinath-temple" className="text-orange-600 hover:underline font-medium">Badrinath Guide</Link>
                                    <Link to="/chardham-yatra-registration-process" className="text-orange-600 hover:underline font-medium">Yatra Registration</Link>
                                    <Link to="/is-chardham-yatra-safe" className="text-orange-600 hover:underline font-medium">Is the Yatra Safe?</Link>
                                    <Link to="/chardham-yatra-package" className="text-orange-600 hover:underline font-medium">View All Char Dham Packages</Link>
                                </div>
                            </div>

                            <div className="mt-12 border-t pt-12 border-border/50">
                                <h2 className="text-3xl font-bold mb-4">The Religious Merit (Punya) and Spiritual Context</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    According to Hindu theology, undertaking the Char Dham Yatra washes away the sins of a lifetime and opens the doors to Moksha (liberation). Translating to "four abodes," this circuit was originally pioneered by the great 8th-century philosopher Adi Shankaracharya to revive the Hindu faith across the vast expanse of the Indian subcontinent. For devotees leaving their homes in Bhilai, crossing central India into the heart of Devbhoomi (The Land of Gods) marks a transition from materialistic life into deep, reflective spirituality.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The strict progression of the Yatra flows from West to East, mimicking the flow of cosmic energy. It starts at Yamunotri (dedicated to Goddess Yamuna), proceeds to Gangotri (the mythological source of the holy River Ganga), heads to Kedarnath (revering Lord Shiva as one of the 12 Jyotirlingas), and concludes at Badrinath (the sprawling temporal estate of Lord Vishnu). This precise geographical and spiritual progression is why Rudraksh Safar ensures our itineraries are perfectly aligned with Vedic sequencing.
                                </p>

                                <h2 className="text-3xl font-bold mb-4 mt-8">Catering to Senior Citizens from Chhattisgarh</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    A significant percentage of the pilgrims undertaking this journey from Raipur and Bhilai are senior citizens supported by their children. We understand that multi-day mountain travel is exhausting. To counter the fatigue of traversing high Himalayan passes in a bus or traveler, our VIP packages focus heavily on pacing.
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground mb-4">
                                    <li><strong>Phased Acclimatization:</strong> Instead of rushing from sea-level plains straight to 10,000 feet, our itineraries include buffer nights at intermediary altitudes like Haridwar, Barkot, and Guptkashi.</li>
                                    <li><strong>Helicopter Priority:</strong> The 16-kilometer Kedarnath trek is brutal on the knees of the elderly. Our elite VIP Darshan packages secure highly sought-after tickets on Pawan Hans or Himalayan Heli charters operating out of Sirsi and Phata.</li>
                                    <li><strong>Dietary Needs:</strong> Recognizing the Sattvic diet required during a pilgrimage, our partner hotels across the Char Dham circuit serve pure vegetarian, mildly spiced meals suitable for travelers hailing from Central India.</li>
                                </ul>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    No journey to the heavens is entirely predictable. Landslides across the treacherous Rudraprayag to Joshimath belt can halt traffic for hours. Our expert ground teams maintain real-time communication with the Uttarakhand Border Roads Organisation (BRO) to reroute travelers or provide comfortable temporary halting points. Ensuring our pilgrims from Chhattisgarh never feel stranded in the mountains is what separates Rudraksh Safar from generic travel operators.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CharDhamFromBhilai;
