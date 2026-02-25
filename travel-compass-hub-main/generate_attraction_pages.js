import fs from 'fs';
import path from 'path';

const cityAttractions = {
    pattaya: [
        { id: "nong-nooch-garden", name: "Nong Nooch Garden", image: "/images/Discover/Thailand/Pattaya/nong nooch.jpg", cat: "Nature" },
        { id: "tiger-park", name: "Tiger Park", image: "/images/Discover/Thailand/Pattaya/tiger parl.jpg", cat: "Wildlife" },
        { id: "alcazar-show", name: "Alcazar Show", image: "/images/Discover/Thailand/Pattaya/alcazar-cabaret-show.jpg", cat: "Entertainment" },
        { id: "underwater-world", name: "Underwater World", image: "/images/Discover/Thailand/Pattaya/underwaterworld.jpg", cat: "Family" },
        { id: "tiffany-show", name: "Tiffany Show", image: "/images/Discover/Thailand/Pattaya/tiffany-s-show-pattaya.jpg", cat: "Entertainment" },
        { id: "ramayana-water-park", name: "Ramayana Water Park", image: "/images/Discover/Thailand/Pattaya/Ramayana waterpark.jpg", cat: "Adventure" }
    ],
    bangkok: [
        { id: "safari-world", name: "Safari World", image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2609&auto=format&fit=crop", cat: "Wildlife" },
        { id: "chao-phraya-cruise", name: "Chao Phraya Cruise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg/960px-Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg", cat: "Luxury" },
        { id: "temple-tour", name: "Temple Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg", cat: "Cultural" },
        { id: "dream-world", name: "Dream World", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dream_World%2C_Thailand.jpg", cat: "Family" },
        { id: "sky-walk", name: "Sky Walk", image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop", cat: "Iconic" },
        { id: "sea-life", name: "Sea Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Siam_Ocean_World_Enterance_2011.jpg/960px-Siam_Ocean_World_Enterance_2011.jpg", cat: "Nature" }
    ],
    krabi: [
        { id: "4-islands-tour", name: "4 Islands Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Poda_island_beach.jpg/960px-Poda_island_beach.jpg", cat: "Nature" },
        { id: "7-islands-tour", name: "7 Islands Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/960px-Railay_Beach_5.jpg", cat: "Nature" },
        { id: "jungle-tour", name: "Jungle Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg/960px-Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg", cat: "Adventure" },
        { id: "krabi-city-tour", name: "Krabi City Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wat_Tham_Sua_18.jpg/960px-Wat_Tham_Sua_18.jpg", cat: "Cultural" },
        { id: "elephant-trekking", name: "Elephant Trekking", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Navann_was_born_at_the_park_Oct_2012.jpg/960px-Navann_was_born_at_the_park_Oct_2012.jpg", cat: "Wildlife" }
    ],
    phuket: [
        { id: "phi-phi-island", name: "Phi Phi Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/960px-KohPhiPhi.JPG", cat: "Nature" },
        { id: "james-bond-island", name: "James Bond Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG/960px-Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG", cat: "Iconic" },
        { id: "fantasea-show", name: "FantaSea Show", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/FantaSea.png", cat: "Cultural" },
        { id: "dolphin-show", name: "Dolphin Show", image: "https://images.unsplash.com/photo-1570417957960-4414008bc0aa?q=80&w=2574&auto=format&fit=crop", cat: "Family" },
        { id: "tiger-kingdom", name: "Tiger Kingdom", image: "https://images.unsplash.com/photo-1598583486338-7bb400d3dce4?q=80&w=2670&auto=format&fit=crop", cat: "Wildlife" }
    ],
    'koh-samui': [
        { id: "jungle-safari", name: "Jungle Safari", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Koh_Samui_Lipa_Noi2.jpg/960px-Koh_Samui_Lipa_Noi2.jpg", cat: "Adventure" },
        { id: "koh-samui-city-tour", name: "Koh Samui City Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Budda_kuju.jpg/960px-Budda_kuju.jpg", cat: "Cultural" },
        { id: "ang-thong-marine-park", name: "Ang Thong Marine Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg/960px-Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg", cat: "Nature" },
        { id: "safari-tour", name: "Safari Tour", image: "https://images.unsplash.com/photo-1582299863456-ccde3b132890?q=80&w=2670&auto=format&fit=crop", cat: "Wildlife" }
    ]
};

const template = (city, cityTitle, attr) => {
    const makeName = (id) => id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('').replace(/^(\d)/, (match) => {
        const numWords = { '4': 'Four', '7': 'Seven' };
        return numWords[match] || match;
    });
    const compName = makeName(attr.id);

    return `import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2, Navigation, Star, ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const ${compName} = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>${attr.name} Tour | ${cityTitle} Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to ${attr.name} in ${cityTitle}. Facts, timings, tickets, and travel tips for tourists." />
            </Helmet>

            <Navbar />

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="${attr.image}"
                    alt="${attr.name}"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${attr.cat}</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">${attr.name}</h1>
                    <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-6 font-medium drop-shadow-md">An iconic experience in ${cityTitle} offering unforgettable memories and stunning sights.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 5. PRACTICAL INFORMATION (Quick Info Bar) */}
                        <div className="flex flex-wrap gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm">
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <Clock className="w-6 h-6 text-primary" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Duration</span><span className="font-bold text-sm">Half Day</span></div>
                            </div>
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <MapPin className="w-6 h-6 text-green-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</span><span className="font-bold text-sm">Central ${cityTitle}</span></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Ticket className="w-6 h-6 text-orange-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Entry Fee</span><span className="font-bold text-sm">Paid Access</span></div>
                            </div>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION & 8. STORYTELLING SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Discover ${attr.name}</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Nestled in the heart of ${cityTitle}, ${attr.name} stands as an emblem of the city's vibrant tourist scene. 
                                Whether you are an adventure seeker, a culture enthusiast, or traveling with family, this attraction offers something uniquely spectacular. 
                                From the moment you arrive, the atmosphere captivates you, immersing you in a world far removed from the ordinary.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                                Beyond its immediate visual appeal, the site carries a rich history and cultural significance, making it not just a visual treat but a deeply educational and enriching stop on your Thai itinerary.
                            </p>
                        </section>

                        {/* 3. WHY VISIT (HIGHLIGHTS) */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">Top Highlights <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /></h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex gap-4 p-4 border rounded-xl bg-muted/20">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Incredible Photo Ops</h4>
                                            <p className="text-sm text-muted-foreground">Capture stunning memories against beautiful backdrops.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. THINGS TO DO */}
                        <section className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6">Things To Do</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Take a guided tour to understand the deep history.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Enjoy local cuisine at nearby acclaimed restaurants.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg text-muted-foreground">Shop for authentic souvenirs at the local markets attached to the venue.</span>
                                </li>
                            </ul>
                        </section>

                        {/* 7. TRAVEL TIPS FOR INDIAN TRAVELERS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Tips for Indian Travelers</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Food:</strong> Indian and vegetarian options are readily available in the vicinity. Ask your guide for the best spots.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Attire:</strong> Dress comfortably but respect local customs if visiting cultural segments of the attraction.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Timing:</strong> Arrive early in the morning to beat the crowds and the afternoon heat.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">${attr.name}, ${cityTitle}</p>
                                    <p className="text-muted-foreground mb-4">Easily accessible via local taxis, Tuk-Tuks, or pre-arranged tour transfers.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="w-full bg-card border rounded-2xl px-6 py-2 shadow-sm">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg font-semibold text-left">Is it suitable for children and families?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        Absolutely. The venue is highly family-friendly with dedicated spaces and activities suited for all age groups.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg font-semibold text-left">How much time should we allocate?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        We recommend dedicating at least 3-4 hours to fully experience everything without rushing.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg font-semibold text-left">Can we buy tickets at the venue?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        Yes, but booking in advance through a package allows you to skip the long queues and often secures a better rate.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA (Sidebar Sidebar) */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-24 space-y-8">
                            
                            <div className="bg-card rounded-2xl border shadow-xl overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-8">
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Visit</h3>
                                    <p className="text-muted-foreground mb-6">Add ${attr.name} to your custom ${cityTitle} itinerary. Let our experts handle the tickets and transfers.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Priority access</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private transfers</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm">
                                <h4 className="font-serif font-bold text-xl mb-4">More in ${cityTitle}</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/${city}" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore ${cityTitle} Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ${compName};
`;
};

const rootPath = path.join(process.cwd(), 'src', 'pages', 'destinations', 'thailand', 'attractions');

Object.keys(cityAttractions).forEach(city => {
    const cityDir = path.join(rootPath, city);
    if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true });
    }

    cityAttractions[city].forEach(attr => {
        const filePath = path.join(cityDir, attr.id + ".tsx");
        const cityTitle = city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ');
        fs.writeFileSync(filePath, template(city, cityTitle, attr));
        console.log("Updated: ", filePath);
    });
});
