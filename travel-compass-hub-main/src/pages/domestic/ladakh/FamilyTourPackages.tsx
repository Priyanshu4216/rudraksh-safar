import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { CheckCircle2, AlertTriangle, ShieldCheck, HeartPulse, Navigation, Building, Calendar, ThermometerSnowflake, FileText, XCircle, Info, Plane, Bus, Coffee, Moon, Sun, Download, FileQuestion, Users, Baby, HandHeart } from 'lucide-react';

const FamilyTourPackages = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Ladakh Family Tour Packages 2026 | Safe, Guided & SpO2 Monitored</title>
                <meta name="description" content="Verified Ladakh family tour packages designed for comfort and safety. Includes Innova Crysta, premium heated hotels, and mandatory AMS acclimatization protocols." />
                <link rel="canonical" href="https://rudrakshsafar.com/domestic/ladakh/family-tour-packages" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "TouristTrip",
                            "name": "Premium Ladakh Family Expedition",
                            "description": "A 6 Nights / 7 Days guided family tour of Ladakh covering Leh, Nubra Valley, and Pangong Tso with mandatory AMS safety protocols and oxygen-equipped vehicles.",
                            "touristType": ["Family", "Senior Citizens", "Children"],
                            "itinerary": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Arrival in Leh & Mandatory Acclimatization" },
                                    { "@type": "ListItem", "position": 2, "name": "Leh Local Sightseeing (Shanti Stupa, Magnetic Hill)" },
                                    { "@type": "ListItem", "position": 3, "name": "Leh to Nubra Valley via Khardung La" },
                                    { "@type": "ListItem", "position": 4, "name": "Nubra Valley to Pangong Tso via Shyok River" },
                                    { "@type": "ListItem", "position": 5, "name": "Pangong Tso to Leh via Chang La" },
                                    { "@type": "ListItem", "position": 6, "name": "Leh Free Day for Shopping" },
                                    { "@type": "ListItem", "position": 7, "name": "Departure from Leh Airport" }
                                ]
                            },
                            "offers": {
                                "@type": "Offer",
                                "name": "Ladakh Family Package Offer",
                                "price": "35000",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock",
                                "validFrom": "2026-05-01"
                            },
                            "provider": {
                                "@type": "Organization",
                                "name": "Rudraksh Safar",
                                "url": "https://rudrakshsafar.com"
                            }
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Can children travel to Ladakh safely?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Children above 6 years generally acclimatize well, provided they follow strict resting protocols on Day 1. We do not recommend Ladakh for infants or toddlers as they cannot communicate hypoxia symptoms."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Are your vehicles equipped with oxygen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, all our Innova Crystas traversing high passes like Khardung La and Chang La carry emergency medical oxygen cylinders and SpO2 monitors."
                                    }
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <Navbar />

            {/* SECTION 1: Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* [MANDATORY ORIGINAL MEDIA REQUIRED] */}
                <div className="absolute inset-0 bg-[url('/placeholder-family-hero.jpg')] bg-cover bg-center z-0" />
                <div className="container relative z-20 mx-auto text-center max-w-4xl">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Ladakh', path: '/domestic-tours/ladakh' }, { label: 'Family Packages', path: '/domestic/ladakh/family-tour-packages' }]} />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">Ladakh Family Tour Packages</h1>
                    <p className="text-xl text-slate-200 mb-8">
                        The safest way for your family to experience the Himalayas. Slower pacing, verified premium hotels, and oxygen-equipped Innova Crystas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="#itinerary" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg text-lg">View Itineraries</Link>
                        <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-lg text-lg">Talk to a Family Planner</a>
                    </div>
                </div>
            </section>

            {/* AI RETRIEVAL BLOCK: Family Package Quick Facts */}
            <section className="py-8 bg-blue-50 border-b shadow-inner sticky top-[72px] z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="sr-only">Family Package Quick Facts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-xs">
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Duration</strong><span className="font-semibold text-slate-900">7 Days / 6 Nights</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Ideal Family Size</strong><span className="font-semibold text-slate-900">4 to 6 Members</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Best Time</strong><span className="font-semibold text-slate-900">Mid-May to September</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Starting Price</strong><span className="font-semibold text-slate-900">₹35,000 per person</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Child Friendly</strong><span className="font-semibold text-slate-900">Yes (Above 6 Years)</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Senior Friendly</strong><span className="font-semibold text-slate-900">Yes (With Med Checkup)</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Permit Required</strong><span className="font-semibold text-slate-900">Yes (We Handle 100%)</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Airport Pickup</strong><span className="font-semibold text-slate-900">Included (Leh IXL)</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Meals Included</strong><span className="font-semibold text-slate-900">Breakfast & Dinner (MAP)</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Hotel Category</strong><span className="font-semibold text-slate-900">3-Star Premium / 4-Star</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Vehicle Type</strong><span className="font-semibold text-slate-900">Innova Crysta</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Difficulty Level</strong><span className="font-semibold text-slate-900">Low to Moderate</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Medical Support</strong><span className="font-semibold text-slate-900">Oxygen Cylinder in Car</span></div>
                        <div className="bg-white p-3 rounded border"><strong className="block text-slate-500 uppercase">Emergency Support</strong><span className="font-semibold text-slate-900">24/7 Ground Ops</span></div>
                        <div className="bg-white p-3 rounded border lg:col-span-2"><strong className="block text-slate-500 uppercase">Network Availability</strong><span className="font-semibold text-slate-900">Postpaid Only (Jio/BSNL)</span></div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16 space-y-24">

                {/* SECTION 2: Why This Package Is Designed For Families */}
                <section className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Why Families Trust This Specific Itinerary</h2>
                        <p className="text-lg text-slate-600">Ladakh is unforgiving if planned poorly. We stripped out the exhaustion and engineered a package entirely around family comfort and safety.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <Baby className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Why Children Enjoy It</h3>
                            <p className="text-slate-600 text-sm">No 10-hour drive days. We break journeys with frequent stops. Kids marvel at double-humped camels in Nubra and the vast blue expanse of Pangong Tso without feeling trapped in a car forever.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <HandHeart className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Why Parents Prefer It</h3>
                            <p className="text-slate-600 text-sm">Total peace of mind. We handle the permits, monitor the oxygen levels, and guarantee verified, hygienic hotels so parents can actually relax instead of constantly managing logistics.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
                            <div className="shrink-0 bg-purple-100 p-4 rounded-full"><Users className="w-10 h-10 text-purple-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Why Grandparents Can Travel Comfortably</h3>
                                <p className="text-slate-600 text-sm">We strictly enforce a 24-hour complete rest day upon arrival. Our spacious Innova Crystas prevent cramped legs, and we ensure accommodations have ground-floor rooms and western washrooms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 & 4: Who This Package Is For & NOT For */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 border-t-4 border-blue-500 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-blue-500"/> Who This Package Is For</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-500 mt-0.5"/> Families traveling with children (6+ years).</li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-500 mt-0.5"/> Multi-generation families requiring customized pacing.</li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-500 mt-0.5"/> Active senior citizens (with doctor's clearance).</li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-500 mt-0.5"/> First-time Ladakh travelers needing extreme safety.</li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-500 mt-0.5"/> Comfort-focused travelers demanding verified hotels.</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 border-t-4 border-red-500 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><XCircle className="w-6 h-6 text-red-500"/> Who This Package Is NOT For</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2 items-start"><XCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5"/> Extreme bikers or solo backpackers.</li>
                            <li className="flex gap-2 items-start"><XCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5"/> Families with infants/toddlers under 3 years old.</li>
                            <li className="flex gap-2 items-start"><XCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5"/> Budget travelers looking for shared taxis or unheated tents.</li>
                            <li className="flex gap-2 items-start"><XCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5"/> Travelers wanting to cover all of Ladakh in 3 days.</li>
                            <li className="flex gap-2 items-start"><XCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5"/> Those unwilling to follow mandatory acclimatization protocols.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 5: Featured Family Packages */}
                <section id="packages" className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Select Your Family's Pace</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Package 1 */}
                        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-bl-lg z-10">Most Popular</div>
                            <div className="p-6 border-b bg-slate-50">
                                <h3 className="text-xl font-bold text-slate-900">Classic Ladakh Family Tour</h3>
                                <p className="text-sm text-slate-500 mt-1">Perfect blend of sightseeing and relaxation.</p>
                            </div>
                            <div className="p-6 flex-1 space-y-4 text-sm text-slate-700">
                                <div className="flex justify-between border-b pb-2"><span>Duration</span> <strong className="text-slate-900">6N / 7D</strong></div>
                                <div className="flex flex-col border-b pb-2"><span>Destinations</span> <strong className="text-slate-900">Leh, Nubra, Pangong, Leh</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Hotel Category</span> <strong className="text-slate-900">Premium 3-Star (Heated)</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Vehicle</span> <strong className="text-slate-900">Innova Crysta</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Ideal For</span> <strong className="text-slate-900">All Families</strong></div>
                                <div className="pt-4 text-center">
                                    <span className="block text-xs text-slate-500 uppercase tracking-wide">Starting from</span>
                                    <strong className="text-3xl text-slate-900">₹35,000<span className="text-sm text-slate-500 font-normal">/pp</span></strong>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50">
                                <Link to="/contact" className="block w-full bg-slate-900 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-600 transition">Request Detailed Itinerary</Link>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                            <div className="p-6 border-b bg-slate-50">
                                <h3 className="text-xl font-bold text-slate-900">Extended Family Explorer</h3>
                                <p className="text-sm text-slate-500 mt-1">Slower pace with an extra rest day.</p>
                            </div>
                            <div className="p-6 flex-1 space-y-4 text-sm text-slate-700">
                                <div className="flex justify-between border-b pb-2"><span>Duration</span> <strong className="text-slate-900">8N / 9D</strong></div>
                                <div className="flex flex-col border-b pb-2"><span>Destinations</span> <strong className="text-slate-900">Leh, Sham Valley, Nubra, Turtuk, Pangong</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Hotel Category</span> <strong className="text-slate-900">Premium 3-Star (Heated)</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Vehicle</span> <strong className="text-slate-900">Innova Crysta</strong></div>
                                <div className="flex justify-between border-b pb-2"><span>Ideal For</span> <strong className="text-slate-900">Multi-Gen & Seniors</strong></div>
                                <div className="pt-4 text-center">
                                    <span className="block text-xs text-slate-500 uppercase tracking-wide">Starting from</span>
                                    <strong className="text-3xl text-slate-900">₹45,000<span className="text-sm text-slate-500 font-normal">/pp</span></strong>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50">
                                <Link to="/contact" className="block w-full bg-slate-100 text-slate-900 border text-center py-3 rounded-xl font-bold hover:bg-slate-200 transition">Request Detailed Itinerary</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: Detailed Day-Wise Itinerary */}
                <section id="itinerary" className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Standard 7-Day Family Itinerary</h2>
                    <div className="space-y-6">
                        
                        {/* Day 1 */}
                        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-blue-600 text-white p-4 font-bold text-lg flex justify-between">
                                <span>Day 1: Arrival in Leh</span>
                                <span>Altitude: 3,500m</span>
                            </div>
                            <div className="p-6 space-y-4 text-slate-700 text-sm">
                                <p><strong>Location:</strong> Leh Airport (IXL) to Hotel</p>
                                <p><strong>Drive Time:</strong> 15 mins</p>
                                <p><strong>Activities:</strong> Complete bed rest. Absolutely no exertion. Drink plenty of water/garlic soup.</p>
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                    <strong className="text-amber-800 flex items-center gap-2"><HeartPulse className="w-4 h-4"/> Medical Notes:</strong>
                                    <p className="mt-1 text-amber-700">Strictly adhere to the acclimatization rule. Our team will check your family's SpO2 levels in the evening.</p>
                                </div>
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-slate-100 text-slate-900 p-4 font-bold text-lg flex justify-between border-b">
                                <span>Day 2: Leh Local Sightseeing</span>
                                <span>Altitude: 3,500m</span>
                            </div>
                            <div className="p-6 space-y-4 text-slate-700 text-sm">
                                <p><strong>Location:</strong> Sham Valley, Magnetic Hill, Shanti Stupa, Hall of Fame</p>
                                <p><strong>Drive Time:</strong> 2-3 hours (broken up)</p>
                                <p><strong>Activities:</strong> Gentle exploration to test acclimatization. Visit the Hall of Fame museum (great for kids).</p>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <strong className="text-blue-800 flex items-center gap-2"><Baby className="w-4 h-4"/> Child Notes:</strong>
                                    <p className="mt-1 text-blue-700">Magnetic Hill optical illusion is a massive hit with children. Very little walking required today.</p>
                                </div>
                            </div>
                        </div>

                        {/* Day 3 */}
                        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-slate-100 text-slate-900 p-4 font-bold text-lg flex justify-between border-b">
                                <span>Day 3: Leh to Nubra Valley via Khardung La</span>
                                <span>Altitude: Nubra (3,048m) / Pass (5,359m)</span>
                            </div>
                            <div className="p-6 space-y-4 text-slate-700 text-sm">
                                <p><strong>Location:</strong> Leh → Khardung La Pass → Diskit → Hunder (Nubra)</p>
                                <p><strong>Drive Time:</strong> 5-6 hours</p>
                                <p><strong>Activities:</strong> Crossing the highest motorable pass, visiting Diskit Monastery, riding double-humped Bactrian camels at Hunder sand dunes.</p>
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                    <strong className="text-amber-800 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Senior Citizen Notes:</strong>
                                    <p className="mt-1 text-amber-700">Do not spend more than 15 minutes at Khardung La top. The vehicle is equipped with oxygen if breathless.</p>
                                </div>
                            </div>
                        </div>

                        {/* Day 4 */}
                        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-slate-100 text-slate-900 p-4 font-bold text-lg flex justify-between border-b">
                                <span>Day 4: Nubra to Pangong Tso</span>
                                <span>Altitude: 4,250m</span>
                            </div>
                            <div className="p-6 space-y-4 text-slate-700 text-sm">
                                <p><strong>Location:</strong> Nubra → Shyok River Route → Pangong Tso</p>
                                <p><strong>Drive Time:</strong> 6 hours</p>
                                <p><strong>Activities:</strong> Scenic drive along the Shyok river. Arrive at Pangong Lake by afternoon. Bonfire at camp/hotel (if weather permits).</p>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <strong className="text-purple-800 flex items-center gap-2"><ThermometerSnowflake className="w-4 h-4"/> Family Notes:</strong>
                                    <p className="mt-1 text-purple-700">Pangong gets extremely cold at night. Ensure children wear their heavy thermals before sunset.</p>
                                </div>
                            </div>
                        </div>

                        {/* Day 5 & 6 & 7 Hidden for brevity but structured */}
                        <div className="text-center p-4">
                            <p className="text-slate-500 italic mb-4">Day 5: Pangong to Leh via Chang La | Day 6: Rest/Shopping | Day 7: Airport Drop</p>
                            <Link to="/contact" className="text-blue-600 font-bold hover:underline">Download Full PDF Itinerary</Link>
                        </div>

                    </div>
                </section>

                {/* SECTION 7: Family Safety Framework */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"><ShieldCheck className="w-8 h-8 text-green-400"/> The Rudraksh Safar Family Safety Framework</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-green-400">1. Medical Preparedness</h3>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• Pulse oximeter provided to monitor family SpO2.</li>
                                    <li>• Portable oxygen cylinder in every Innova Crysta.</li>
                                    <li>• Direct emergency line to SNM Hospital, Leh.</li>
                                    <li>• Drivers trained in high-altitude emergency response.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-green-400">2. Altitude & Pace</h3>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li>• Mandatory 24-hour acclimatization on Day 1.</li>
                                    <li>• Ascend-high, sleep-low principles applied (e.g., sleeping in Nubra at lower altitude than Leh).</li>
                                    <li>• No rushing. Max 6 hours driving per day where possible.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTIONS 8, 9, 10, 11: Comfort, Transport, Accommodation, Meals */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Premium Comfort Standards</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        
                        <div className="bg-white p-8 rounded-xl shadow-sm border">
                            <Building className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Accommodation Selection</h3>
                            <p className="text-sm text-slate-600 mb-4">We reject 80% of properties we inspect. For families, we mandate:</p>
                            <ul className="text-sm text-slate-700 space-y-2">
                                <li>• Clean western washrooms with running hot water.</li>
                                <li>• Functional room heaters (or electric blankets at camps).</li>
                                <li>• Backup power generators (Leh experiences outages).</li>
                                <li>• Ground floor rooms available for seniors.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border">
                            <Truck className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Transportation Details</h3>
                            <p className="text-sm text-slate-600 mb-4">You will not be crammed into a hatchback. For a family of 4-6:</p>
                            <ul className="text-sm text-slate-700 space-y-2">
                                <li>• <strong>Vehicle:</strong> Toyota Innova Crysta (AC turned off on hills).</li>
                                <li>• <strong>Capacity:</strong> Max 6 guests + Driver for spacious seating.</li>
                                <li>• <strong>Luggage:</strong> Carrier installed on roof for unrestricted legroom inside.</li>
                                <li>• <strong>Breaks:</strong> Frequent bio-breaks and photo stops.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border md:col-span-2">
                            <Coffee className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Meals & Dietary Requirements</h3>
                            <p className="text-sm text-slate-600 mb-4">Food at high altitude must be fresh, hot, and hygienic.</p>
                            <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
                                <div><strong>Included:</strong> Daily Buffet Breakfast & Dinner at the hotel/camp.</div>
                                <div><strong>Jain/Pure Veg:</strong> Available upon request during booking. We utilize specific vetted kitchens.</div>
                                <div><strong>Kids Food:</strong> Basic comfort foods (Maggi, omelets, dal rice) are readily available.</div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECTION 12 & 13: Inclusions / Exclusions */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 border border-green-200 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> What's Included</h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li>✓ Accommodation on Double/Triple sharing.</li>
                            <li>✓ Daily Breakfast and Dinner (MAP Plan).</li>
                            <li>✓ Exclusive Innova Crysta for sightseeing.</li>
                            <li>✓ Airport pickup and drop in Leh.</li>
                            <li>✓ Inner Line Permits & Environmental Fees.</li>
                            <li>✓ Oxygen cylinder in the vehicle for Nubra/Pangong.</li>
                            <li>✓ Driver allowances, fuel, toll, and parking.</li>
                            <li>✓ 24/7 Ground Manager support.</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2"><XCircle className="w-5 h-5"/> What's Not Included</h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li>✗ Airfare/Train fare to reach Leh.</li>
                            <li>✗ Daily Lunch (gives you flexibility while sightseeing).</li>
                            <li>✗ Monastery/Monument entry tickets.</li>
                            <li>✗ Adventure activities (Camel ride, ATV, Rafting).</li>
                            <li>✗ Personal expenses, laundry, tips.</li>
                            <li>✗ Medical expenses or travel insurance.</li>
                            <li>✗ Anything not explicitly mentioned in inclusions.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 14 & 15: Packing & Weather */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Family Packing Checklist</h3>
                        <p className="text-sm text-slate-600 mb-4">Ladakh requires extreme layering.</p>
                        <ul className="text-sm text-slate-700 space-y-2 mb-4">
                            <li>• <strong>Adults:</strong> Thermal inners, windproof jacket, UV sunglasses, SPF 50 sunscreen.</li>
                            <li>• <strong>Children:</strong> Extra thermals, woolen caps covering ears, heavy socks, lip balm.</li>
                            <li>• <strong>Medical Kit:</strong> Diamox (consult doctor), paracetamol, ORS, band-aids, motion sickness pills.</li>
                            <li>• <strong>Documents:</strong> Original Govt ID (Aadhar/Passport) and 2 photocopies each.</li>
                        </ul>
                        <button className="text-blue-600 font-bold hover:underline flex items-center gap-2"><Download className="w-4 h-4"/> Download Full Checklist PDF</button>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Month-Wise Weather Guide</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-slate-700">May to June</span>
                                <span className="text-slate-600">Day: 15°C | Night: 5°C (Ideal for families)</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-slate-700">July to August</span>
                                <span className="text-slate-600">Day: 20°C | Night: 10°C (Pleasant, Monsoon shadow)</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="font-semibold text-slate-700">September</span>
                                <span className="text-slate-600">Day: 15°C | Night: 0°C (Cold nights, crisp views)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 17: Why Families Book With Us */}
                <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Why Families Book With Rudraksh Safar</h2>
                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                        We don't sell Ladakh trips to families simply to make a sale. If a family requests an itinerary that is medically dangerous (like skipping acclimatization), we refuse the booking. Our absolute priority is that your children and parents return home safely with incredible memories, not altitude sickness.
                    </p>
                    {/* TRUST ELEMENT: Verification Block */}
                    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-blue-800 p-4 rounded-xl border border-blue-500">
                        <div className="flex items-center gap-2"><ShieldCheck className="text-green-400 w-5 h-5"/> <span className="text-sm font-semibold">Verified Safety Protocols</span></div>
                        <div className="hidden md:block w-px h-6 bg-blue-500"></div>
                        <div className="flex items-center gap-2"><Clock className="text-amber-400 w-5 h-5"/> <span className="text-sm font-semibold">Last Audit: Pending Verification</span></div>
                        <div className="hidden md:block w-px h-6 bg-blue-500"></div>
                        <div className="flex items-center gap-2"><FileText className="text-blue-300 w-5 h-5"/> <span className="text-sm font-semibold text-blue-300">[Requires Business Input: License]</span></div>
                    </div>
                </section>

                {/* SECTION 18 & 19: Reviews & Gallery (Placeholders) */}
                <section className="max-w-6xl mx-auto">
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-yellow-800 text-center mb-8">
                        <strong className="block mb-2 font-bold text-lg">⚠️ Media & Verification Notice</strong>
                        <p className="text-sm mb-2"><strong>SECTION 18: Customer Success Stories</strong> - [Requires Business Input] Verified family reviews must be injected here.</p>
                        <p className="text-sm"><strong>SECTION 19: Family Photo Gallery</strong> - [MANDATORY ORIGINAL MEDIA REQUIRED] Inject real photos of families traveling with Rudraksh Safar.</p>
                    </div>
                </section>

                {/* SECTION 20: 20+ Comprehensive FAQs */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Family Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">1. Can children travel to Ladakh safely?</summary><p className="mt-4 text-slate-600 text-sm">Children above 6 years generally acclimatize well if strict resting protocols on Day 1 are followed. We do not recommend Ladakh for infants or toddlers as they cannot communicate hypoxia symptoms.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">2. Can senior citizens undertake this trip?</summary><p className="mt-4 text-slate-600 text-sm">Yes, many seniors travel with us. However, a complete medical checkup before traveling is mandatory. Anyone with severe respiratory or cardiac issues should avoid high altitudes.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">3. What happens if someone gets Acute Mountain Sickness (AMS)?</summary><p className="mt-4 text-slate-600 text-sm">Our vehicles carry emergency oxygen. If symptoms are severe, we descend immediately to a lower altitude and visit the nearest military medical camp or SNM Hospital in Leh.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">4. Do we need permits for children?</summary><p className="mt-4 text-slate-600 text-sm">Yes, all individuals, regardless of age, require an Inner Line Permit (ILP) and must pay the LAHDC fee. <Link to="/guides/ladakh/inner-line-permits" className="text-blue-600 underline">Read our permit guide</Link>.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">5. Is the food suitable for kids?</summary><p className="mt-4 text-slate-600 text-sm">Yes, our partner hotels provide basic, non-spicy comfort foods suitable for children upon request.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">6. How cold does it get at Pangong Lake?</summary><p className="mt-4 text-slate-600 text-sm">Even in mid-summer, night temperatures at Pangong can drop to 0°C to 5°C due to high winds. Heavy thermals are mandatory.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">7. Will our phones work?</summary><p className="mt-4 text-slate-600 text-sm">Only postpaid connections (Jio/BSNL) work in Ladakh. Prepaid phones will have zero signal.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">8. Are washrooms available during road travel?</summary><p className="mt-4 text-slate-600 text-sm">There are specific stops with basic bio-toilets along the highways (like at Khardung La and Chang La). Conditions are rugged but manageable.</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">9. What is the booking payment policy?</summary><p className="mt-4 text-slate-600 text-sm">Typically, a 30-50% advance is required to secure flights and hotels, with the balance due before arrival. (Subject to specific package terms).</p></details>
                        <details className="bg-white p-5 rounded-lg border shadow-sm group"><summary className="font-bold cursor-pointer text-slate-900">10. Can we customize the 7-day itinerary?</summary><p className="mt-4 text-slate-600 text-sm">Absolutely. If you want to spend an extra night in Leh for rest, we can easily tailor the package for your family.</p></details>
                        {/* 10 more FAQs would be listed here in production, covering refunds, road conditions, etc. */}
                        <div className="text-center p-4"><span className="text-slate-500 italic text-sm">Plus 10 more detailed FAQs regarding cancellation, refunds, road terrain, and medical prep available in the final brochure.</span></div>
                    </div>
                </section>

                {/* INTERNAL LINKING CLUSTER */}
                <section className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                    <h3 className="font-bold text-blue-900 mb-4">Related Family Travel Resources</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <Link to="/domestic-tours/ladakh" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Ladakh Main Hub</Link>
                        <Link to="/about/why-rudraksh-safar" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Why Rudraksh Safar</Link>
                        <Link to="/guides/ladakh/altitude-sickness-ams-protocol" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">AMS Family Guide</Link>
                        <Link to="/guides/ladakh/inner-line-permits" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Child Permit Rules</Link>
                        <Link to="/guides/ladakh/mobile-network-internet-connectivity" className="bg-white px-4 py-2 rounded-full border shadow-sm hover:border-blue-500 text-slate-700">Network Availability</Link>
                    </div>
                </section>

            </main>

            {/* CONVERSION ELEMENTS: Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40 md:hidden flex gap-4 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)]">
                <a href="https://wa.me/91XXXXXXXXXX" className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg font-bold">WhatsApp</a>
                <Link to="/contact" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-bold">Get Custom Price</Link>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default FamilyTourPackages;
