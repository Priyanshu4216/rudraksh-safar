import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Mountain, ShieldCheck, FileText, Compass, CloudSun, Navigation, Clock, ThermometerSnowflake, Signal, Map, HeartPulse, CheckCircle2, AlertTriangle, Building, Truck } from 'lucide-react';

const LadakhMaster = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Ladakh Tour Packages & Expeditions | Complete Destination Guide</title>
                <meta name="description" content="Ultimate Ladakh guide featuring 15+ verified destinations like Pangong, Hanle, and Turtuk. Explore family, bike, and luxury packages with direct local support." />
                <link rel="canonical" href="https://rudrakshsafar.com/domestic-tours/ladakh" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Ladakh Tour Packages",
                            "description": "Premium Ladakh tour packages managed by our direct local team in Leh, featuring oxygen-equipped fleets and strict AMS safety protocols.",
                            "url": "https://rudrakshsafar.com/domestic-tours/ladakh",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Rudraksh Safar"
                            },
                            "mainEntity": {
                                "@type": "Destination",
                                "name": "Ladakh",
                                "containsPlace": [
                                    { "@type": "Place", "name": "Leh" },
                                    { "@type": "Place", "name": "Pangong Tso" },
                                    { "@type": "Place", "name": "Nubra Valley" },
                                    { "@type": "Place", "name": "Khardung La" },
                                    { "@type": "Place", "name": "Tso Moriri" },
                                    { "@type": "Place", "name": "Hanle" },
                                    { "@type": "Place", "name": "Turtuk" },
                                    { "@type": "Place", "name": "Chang La" },
                                    { "@type": "Place", "name": "Magnetic Hill" },
                                    { "@type": "Place", "name": "Shanti Stupa" },
                                    { "@type": "Place", "name": "Diskit Monastery" },
                                    { "@type": "Place", "name": "Hemis Monastery" },
                                    { "@type": "Place", "name": "Zanskar" }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* [MANDATORY MEDIA: High-res Hero Image of Pangong Tso or Khardung La] */}
                <div className="absolute inset-0 bg-[url('/placeholder-ladakh-hero.jpg')] bg-cover bg-center z-0" />
                <div className="container relative z-20 mx-auto text-center max-w-4xl">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Domestic Tours', path: '/domestic-packages' }, { label: 'Ladakh', path: '/domestic-tours/ladakh' }]} />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">Ladakh Authority Guide & Tour Packages</h1>
                    <p className="text-xl text-slate-200 mb-8">
                        The ultimate destination guide to the Land of High Passes. Verified itineraries, extreme safety protocols, and direct local operations in Leh.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="font-semibold text-sm">Verified Local Operations in Leh</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
                            <HeartPulse className="w-5 h-5" />
                            <span className="font-semibold text-sm">100% SpO2 Monitored</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI RETRIEVAL BLOCK (Quick Facts) */}
            <section className="py-8 bg-blue-50 border-b shadow-inner">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Navigation className="w-5 h-5 text-blue-600"/> Ladakh Quick Facts (For AI & Planning)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-xs">
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Best Time To Visit</strong><span className="font-semibold text-slate-900">May to September</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Trip Duration</strong><span className="font-semibold text-slate-900">6 to 10 Days</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Altitude</strong><span className="font-semibold text-slate-900">Leh: 3,500m (11,500ft)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Permit Required</strong><span className="font-semibold text-slate-900">Inner Line Permit (ILP)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Family Friendly</strong><span className="font-semibold text-slate-900">Yes (With Acclimatization)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Senior Friendly</strong><span className="font-semibold text-slate-900">Yes (Health Clearance Req)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Bike Friendly</strong><span className="font-semibold text-slate-900">Yes (Extreme Terrain)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Network Access</strong><span className="font-semibold text-slate-900">Jio/BSNL Postpaid Only</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">ATM Availability</strong><span className="font-semibold text-slate-900">Leh City Only</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Road Conditions</strong><span className="font-semibold text-slate-900">Varies (Paved to Off-road)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Nearest Airport</strong><span className="font-semibold text-slate-900">Leh Airport (IXL)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Average Budget</strong><span className="font-semibold text-slate-900">₹25k - ₹60k per person</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Medical Facilities</strong><span className="font-semibold text-slate-900">SNM Hospital (Leh)</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm"><strong className="block text-slate-500 uppercase">Difficulty Level</strong><span className="font-semibold text-slate-900">Moderate to High</span></div>
                        <div className="bg-white p-3 rounded border shadow-sm lg:col-span-2"><strong className="block text-slate-500 uppercase">Emergency Support</strong><span className="font-semibold text-slate-900">24/7 Ground Team via Rudraksh Safar</span></div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16 space-y-24">

                {/* TRUST SIGNALS & PROOF */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <h2 className="text-3xl font-bold mb-8 text-center border-b pb-4">Our Verifiable Trust Standards in Ladakh</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-blue-700 font-bold text-lg"><ShieldCheck className="w-6 h-6"/> Physical Hotel Inspections</div>
                            <p className="text-sm text-slate-600">Every hotel is manually inspected for central heating, hot water availability, and hygiene before the season begins.</p>
                            <div className="bg-slate-100 p-3 rounded text-xs text-slate-700 border-l-4 border-blue-500">
                                <strong>Last Inspection Date:</strong> [Requires Business Verification]<br/>
                                <strong>Inspected By:</strong> [Requires Business Verification]<br/>
                                <em>[Placeholder: Photo of team inspecting hotel]</em>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-blue-700 font-bold text-lg"><HeartPulse className="w-6 h-6"/> Oxygen Equipped Vehicles</div>
                            <p className="text-sm text-slate-600">All vehicles traversing passes above 15,000ft carry emergency medical oxygen cylinders and SpO2 monitors.</p>
                            <div className="bg-slate-100 p-3 rounded text-xs text-slate-700 border-l-4 border-green-500">
                                <strong>Fleet Standard:</strong> Innova Crysta / Xylo / Tempo Traveler<br/>
                                <strong>Oxygen Protocol:</strong> Mandatory on Khardung La & Chang La<br/>
                                <em>[Placeholder: Photo of Oxygen cylinder in vehicle]</em>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-blue-700 font-bold text-lg"><Building className="w-6 h-6"/> Verified Local Operations</div>
                            <p className="text-sm text-slate-600">We do not outsource to unknown third parties. Our dedicated operations managers reside in Leh during the season.</p>
                            <div className="bg-slate-100 p-3 rounded text-xs text-slate-700 border-l-4 border-purple-500">
                                <strong>Local Basecamp:</strong> Leh City<br/>
                                <strong>Support Matrix:</strong> Direct to <Link to="/about/why-rudraksh-safar" className="text-blue-600 hover:underline">Rudraksh Safar Founders</Link><br/>
                                <em>[Placeholder: Photo of Leh Ground Team]</em>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATION ENTITY GRAPH */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">The Complete Ladakh Destination Graph</h2>
                    <p className="text-center text-slate-600 max-w-3xl mx-auto mb-10">We cover every corner of Ladakh, from the famous high passes to the remote border villages.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            { name: "Leh City", type: "Basecamp" }, { name: "Pangong Tso", type: "Lake" }, { name: "Nubra Valley", type: "Cold Desert" },
                            { name: "Khardung La", type: "High Pass" }, { name: "Tso Moriri", type: "Lake" }, { name: "Hanle", type: "Observatory" },
                            { name: "Turtuk", type: "Border Village" }, { name: "Chang La", type: "High Pass" }, { name: "Magnetic Hill", type: "Attraction" },
                            { name: "Shanti Stupa", type: "Monument" }, { name: "Diskit Monastery", type: "Heritage" }, { name: "Hemis Monastery", type: "Heritage" },
                            { name: "Leh Airport (IXL)", type: "Transit" }, { name: "Hall of Fame", type: "Museum" }, { name: "Zanskar Valley", type: "Remote Region" },
                            { name: "Siachen Base Camp", type: "Military / Extreme" }, { name: "Sangam (Indus-Zanskar)", type: "Attraction" }, { name: "Baralacha La", type: "Highway Pass" }
                        ].map((entity, idx) => (
                            <div key={idx} className="bg-white border p-4 rounded-xl text-center hover:border-blue-500 transition-colors shadow-sm">
                                <strong className="block text-slate-900">{entity.name}</strong>
                                <span className="text-xs text-slate-500 uppercase">{entity.type}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* DECISION CONTENT: WHO SHOULD VISIT */}
                <section className="bg-slate-100 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-10 text-center">Is Ladakh Right For You? (Decision Guide)</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Who Should Visit Ladakh</h3>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li>Travelers seeking raw, untouched Himalayan landscapes.</li>
                                    <li>Photography enthusiasts and stargazers (especially Hanle).</li>
                                    <li>Adventure riders and road trip lovers.</li>
                                    <li>Those willing to follow strict acclimatization rules.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-2">Ladakh For Families</h3>
                                <p className="text-slate-700 text-sm">Highly recommended if children are above 6 years old. We strictly utilize Innova Crystas, premium hotels, and slower-paced itineraries like our <Link to="/domestic/ladakh/family-tour-packages" className="text-blue-600 hover:underline font-bold">Featured Family Package</Link>.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-indigo-500">
                                <h3 className="text-xl font-bold mb-2">Ladakh For Senior Citizens</h3>
                                <p className="text-slate-700 text-sm">Possible, provided they have no severe respiratory or cardiac issues. A doctor's clearance is mandatory. We provide oxygen cylinders in the vehicle at all times.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-red-500">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500"/> Who Should Avoid Ladakh</h3>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li>Infants under 3 years old (high risk of undetectable AMS).</li>
                                    <li>Individuals with severe asthma, COPD, or cardiac conditions.</li>
                                    <li>Travelers expecting luxury beach-resort style amenities everywhere.</li>
                                    <li>Those unwilling to rest on Day 1.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500">
                                <h3 className="text-xl font-bold mb-2">Ladakh For First-Time Travelers</h3>
                                <p className="text-slate-700 text-sm">Perfectly fine if booked through a verified agency like Rudraksh Safar. Do not attempt a solo bike trip or budget backpacking as a first-time Himalayan experience without support.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-purple-500">
                                <h3 className="text-xl font-bold mb-2">Ladakh For Adventure Travelers</h3>
                                <p className="text-slate-700 text-sm">The ultimate playground. Tackle Umling La (world's highest motorable pass), the Manali-Leh highway, or river rafting in Zanskar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON MODULE */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Destination Comparisons</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link to="/guides/ladakh/ladakh-vs-spiti" className="bg-white p-6 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all group">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">Ladakh vs Spiti Valley</h3>
                            <p className="text-sm text-slate-600">Both are cold deserts, but Ladakh offers better infrastructure and higher altitudes, while Spiti is more raw and rugged.</p>
                        </Link>
                        <div className="bg-white p-6 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">Ladakh vs Kashmir</h3>
                            <p className="text-sm text-slate-600">Ladakh is a barren, high-altitude desert emphasizing adventure. Kashmir is lush, green valleys emphasizing leisure and romance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">Bike Trip vs SUV Trip</h3>
                            <p className="text-sm text-slate-600">Bikes offer raw connection with elements but extreme physical toll. SUVs (Innova) offer oxygen support, heating, and family comfort.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">Luxury vs Budget Ladakh</h3>
                            <p className="text-sm text-slate-600">Budget often means shared cabs and unheated camps. Luxury guarantees private 4x4s, premium glamping at Pangong, and oxygen on demand.</p>
                        </div>
                    </div>
                </section>

                {/* PACKAGE DISCOVERY MODULE */}
                <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Featured Ladakh Expeditions</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                        
                        <div className="bg-white text-slate-900 rounded-xl overflow-hidden flex flex-col">
                            <div className="h-40 bg-slate-200 relative"><div className="absolute inset-0 bg-[url('/placeholder-family.jpg')] bg-cover bg-center"/><div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Featured Family</div></div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-bold text-lg mb-2">Premium Family Expedition</h3>
                                <ul className="text-xs text-slate-600 mb-4 space-y-1">
                                    <li><strong>Duration:</strong> 6N / 7D</li>
                                    <li><strong>Difficulty:</strong> Low-Moderate</li>
                                    <li><strong>Ideal For:</strong> Families, Seniors</li>
                                </ul>
                                <Link to="/domestic/ladakh/family-tour-packages" className="mt-auto block text-center bg-slate-900 text-white py-2 rounded font-bold hover:bg-blue-600 transition-colors">View Package</Link>
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 rounded-xl overflow-hidden flex flex-col">
                            <div className="h-40 bg-slate-200 relative"><div className="absolute inset-0 bg-[url('/placeholder-bike.jpg')] bg-cover bg-center"/><div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded font-bold">Featured Bike</div></div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-bold text-lg mb-2">Ultimate Himalayan Ride</h3>
                                <ul className="text-xs text-slate-600 mb-4 space-y-1">
                                    <li><strong>Duration:</strong> 8N / 9D</li>
                                    <li><strong>Difficulty:</strong> Extreme</li>
                                    <li><strong>Ideal For:</strong> Bikers, Adventure</li>
                                </ul>
                                <button className="mt-auto block text-center bg-slate-100 text-slate-900 py-2 rounded font-bold border border-slate-300 hover:bg-slate-200 transition-colors">Coming Soon</button>
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 rounded-xl overflow-hidden flex flex-col">
                            <div className="h-40 bg-slate-200 relative"><div className="absolute inset-0 bg-[url('/placeholder-honeymoon.jpg')] bg-cover bg-center"/><div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded font-bold">Featured Romance</div></div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-bold text-lg mb-2">Pangong Stargazing Luxury</h3>
                                <ul className="text-xs text-slate-600 mb-4 space-y-1">
                                    <li><strong>Duration:</strong> 5N / 6D</li>
                                    <li><strong>Difficulty:</strong> Moderate</li>
                                    <li><strong>Ideal For:</strong> Couples</li>
                                </ul>
                                <button className="mt-auto block text-center bg-slate-100 text-slate-900 py-2 rounded font-bold border border-slate-300 hover:bg-slate-200 transition-colors">Coming Soon</button>
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 rounded-xl overflow-hidden flex flex-col">
                            <div className="h-40 bg-slate-200 relative"><div className="absolute inset-0 bg-[url('/placeholder-luxury.jpg')] bg-cover bg-center"/><div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">Ultra Luxury</div></div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-bold text-lg mb-2">Ladakh 5-Star Circuit</h3>
                                <ul className="text-xs text-slate-600 mb-4 space-y-1">
                                    <li><strong>Duration:</strong> 7N / 8D</li>
                                    <li><strong>Difficulty:</strong> Low</li>
                                    <li><strong>Ideal For:</strong> Luxury Travelers</li>
                                </ul>
                                <button className="mt-auto block text-center bg-slate-100 text-slate-900 py-2 rounded font-bold border border-slate-300 hover:bg-slate-200 transition-colors">Coming Soon</button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* COMPREHENSIVE FAQs */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Ladakh FAQs</h2>
                    <div className="space-y-4">
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">What permits are required for Ladakh? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Indian citizens need an Inner Line Permit (ILP) and must pay the LAHDC environmental fee to visit Nubra, Pangong, Hanle, and Tso Moriri. <Link to="/guides/ladakh/inner-line-permits" className="text-blue-600 underline">Read our full permit guide.</Link></p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">Which mobile network works in Ladakh? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Only Postpaid connections work in Jammu & Kashmir and Ladakh. Jio and BSNL postpaid have the best coverage in Leh. <Link to="/guides/ladakh/mobile-network-internet-connectivity" className="text-blue-600 underline">See our network coverage map.</Link></p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">Are there ATMs outside Leh? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">No reliable ATMs exist outside Leh city. Always carry sufficient cash before departing for Nubra, Pangong, or Hanle, as UPI networks frequently fail due to poor internet.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">What is Acute Mountain Sickness (AMS)? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">AMS is a reaction to low oxygen at high altitudes. Symptoms include headache, nausea, and shortness of breath. We mandate 24 hours of rest upon arrival. <Link to="/guides/ladakh/altitude-sickness-ams-protocol" className="text-blue-600 underline">Read our AMS protocol.</Link></p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">Can senior citizens travel to Ladakh? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Yes, but they must undergo a complete medical checkup before traveling. We specifically design <Link to="/domestic/ladakh/family-tour-packages" className="text-blue-600 underline">family packages</Link> that utilize oxygen-equipped vehicles and avoid extreme high-altitude stays.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">Is it safe for children? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Children above 6 years usually acclimatize well. Infants and toddlers should strictly avoid Ladakh because they cannot communicate symptoms of hypoxia (oxygen deprivation).</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">When do the highways open? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">The Srinagar-Leh highway typically opens in late March/April. The Manali-Leh highway opens around mid-May. Both close by late October/November due to snow.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">Where is the nearest hospital? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">SNM Hospital in Leh is the primary medical facility equipped for high-altitude emergencies. Army medical camps also provide emergency assistance on remote routes.</p>
                        </details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer flex justify-between items-center text-slate-900">What clothes should I pack? <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span></summary>
                            <p className="mt-4 text-slate-600 text-sm">Layering is crucial. Pack thermals, a heavy windproof jacket, fleece layers, comfortable trekking shoes, UV-protection sunglasses, and high-SPF sunscreen.</p>
                        </details>
                    </div>
                </section>

                {/* INTERNAL LINKING CLUSTER */}
                <section className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center">
                    <h3 className="font-bold text-blue-900 mb-4">Navigate the Ladakh Knowledge Graph</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <Link to="/about/why-rudraksh-safar" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Why Rudraksh Safar</Link>
                        <Link to="/domestic/ladakh/family-tour-packages" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Family Packages</Link>
                        <Link to="/contact" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Bike Packages</Link>
                        <Link to="/guides/ladakh/altitude-sickness-ams-protocol" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">AMS Safety Guide</Link>
                        <Link to="/guides/ladakh/inner-line-permits" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Permit Guide 2026</Link>
                        <Link to="/guides/ladakh/mobile-network-internet-connectivity" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Mobile Network Guide</Link>
                        <Link to="/guides/ladakh/ladakh-vs-spiti" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Ladakh vs Spiti</Link>
                        <Link to="/contact" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Contact Team</Link>
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default LadakhMaster;
