const fs = require('fs');

const filesToFix = [
    {
        file: 'src/pages/chardham/KedarnathTemple.tsx',
        deepContent: \`
                    {/* --- DEEP SEO CONTENT BLOCKS --- */}
                    <section id="deep-seo" className="py-16 bg-muted/20 mt-12 mb-12 rounded-3xl">
                        <div className="container mx-auto px-4 max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">The Ultimate Kedarnath Pilgrimage Guide</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Situated at an astronomical elevation of 3,583 meters near the Chorabari Glacier, Kedarnath is one of the twelve Jyotirlingas of Lord Shiva. According to Hindu mythology, the temple was originally built by the Pandavas to seek atonement for the sins of the Kurukshetra war. Today, it stands as the most remote and challenging shrine of the Uttarakhand Char Dham circuit, drawing millions of devotees seeking spiritual awakening amidst the rugged Himalayan peaks.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The temple architecture itself is a marvel, constructed from massive, evenly cut grey stone slabs. Unlike modern structures, the ancient interlocking technique used here allowed the temple to withstand the catastrophic 2013 flash floods, protected by the divine intervention of the now-famous Bheem Shila—a massive boulder that diverted the floodwaters around the main shrine.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Kedarnath Trek & Helicopter Logistics</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The 16-kilometer trek starts from Gaurikund. For medically fit pilgrims, the trek is a test of devotion, typically taking 7-10 hours depending on fitness levels and weather. However, due to the extreme altitude and steep inclines, many pilgrims opt for alternative transport:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                    <li><strong>Kedarnath Helicopter Services:</strong> The most efficient way to reach the shrine. Shuttles operate from Phata, Sirsi, and Guptkashi. Pre-booking via the official IRCTC portal is mandatory.</li>
                                    <li><strong>Ponies and Mules (Khachhar):</strong> Available at Gaurikund. Booking must be done through official GMVN counters to avoid overcharging.</li>
                                    <li><strong>Dandi/Palki (Palanquins):</strong> Borne by four helpers, this is the safest traditional option for senior citizens who cannot secure helicopter tickets.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link to="/bhilai-to-kedarnath-yatra-package-2026" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Bhilai to Kedarnath</Link>
                                    <Link to="/chardham-yatra-registration-process" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Yatra Registration</Link>
                                    <Link to="/is-chardham-yatra-safe" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Safety Guidelines</Link>
                                    <Link to="/chardham-yatra-package" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Explore Tour Packages</Link>
                                </div>
                            </div>

                            {/* Conversion Layer */}
                            <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                                <h3 className="text-3xl font-bold mb-4">Book Your VIP Kedarnath Darshan</h3>
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Avoid the grueling queues and permit hurdles. Our local experts arrange guaranteed helicopter tickets, GMVN stays, and priority Darshan passes.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="https://wa.me/919406182174?text=Kedarnath%20Yatra%20Enquiry" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                        WhatsApp Enquiry
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
        \`
    },
    {
        file: 'src/pages/chardham/GangotriTemple.tsx',
        deepContent: \`
                    {/* --- DEEP SEO CONTENT BLOCKS --- */}
                    <section id="deep-seo" className="py-16 bg-muted/20 mt-12 mb-12 rounded-3xl">
                        <div className="container mx-auto px-4 max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">The Ultimate Gangotri Pilgrimage Guide</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Perched at an altitude of 3,100 meters amidst the towering Garhwal Himalayas, Gangotri is the spiritual source of India's most sacred river, the Ganges. The white granite temple, built in the 18th century by Amar Singh Thapa, stands on the banks of the Bhagirathi river (as the Ganges is known before Devprayag). For millions of devotees, a pilgrimage to Gangotri represents the washing away of ancestral sins and the ultimate quest for purity.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    According to legend, King Bhagirath meditated here intensely for a thousand years to bring the cosmic river Ganges down to Earth to grant salvation to his ancestors. Lord Shiva caught the mighty river in his matted locks to save the Earth from its destructive force. The sheer mythological weight of this location makes it the most revered Dham for ritual bathing and collecting the holy Gangajal.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Travel Logistics & The Route to Gangotri</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Unlike Kedarnath or Yamunotri, Gangotri boasts excellent road connectivity right up to the temple precinct. The mesmerizing drive from Uttarkashi to Gangotri takes you through the lush, dense deodar forests of the Gangotri National Park, crossing the breathtaking bridge at Lanka and the apple orchards of Harsil.
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                    <li><strong>The Harsil Advantage:</strong> Many pilgrims experiencing high-altitude sickness prefer to stay in the picturesque cantonment town of Harsil (70 km before Gangotri) and make a day trip to the temple.</li>
                                    <li><strong>Gomukh Trek (Advanced):</strong> The actual physical origin of the river is the Gomukh Glacier, an arduous 18-km uphill trek from the temple. This requires special permits from the forest department and is only recommended for seasoned trekkers.</li>
                                    <li><strong>Acclimatization at Uttarkashi:</strong> We strongly advise spending a night in Uttarkashi (1,158m) before proceeding to the 3,100m elevation of Gangotri to prevent Acute Mountain Sickness (AMS).</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link to="/yamunotri-temple" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Yamunotri Guide</Link>
                                    <Link to="/chardham-yatra-registration-process" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Yatra Registration</Link>
                                    <Link to="/chardham-yatra-package" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Explore Tour Packages</Link>
                                </div>
                            </div>

                            {/* Conversion Layer */}
                            <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                                <h3 className="text-3xl font-bold mb-4">Plan Your Gangotri & Do-Dham Yatra</h3>
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Experience the divinity of the Ganges with our all-inclusive packages. We provide premium tempo travelers, exceptional hotel stays in Harsil, and expert local guidance.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="https://wa.me/919406182174?text=Gangotri%20Yatra%20Enquiry" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                        WhatsApp Enquiry
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
        \`
    },
    {
        file: 'src/pages/chardham/YamunotriTemple.tsx',
        deepContent: \`
                    {/* --- DEEP SEO CONTENT BLOCKS --- */}
                    <section id="deep-seo" className="py-16 bg-muted/20 mt-12 mb-12 rounded-3xl">
                        <div className="container mx-auto px-4 max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">The Ultimate Yamunotri Pilgrimage Guide</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Nestled in the western region of the Garhwal Himalayas at an altitude of 3,291 meters, Yamunotri is the first stop in the traditional Uttarakhand Char Dham circuit. It is the seat of Goddess Yamuna, the daughter of Surya (Sun) and Sanjna, and the twin sister of Yama (the deity of death). According to the Puranas, a dip in the Yamuna protects devotees from the agony of death. The main shrine sits on the flank of the Bandarpoonch Parvat, amidst towering ravines and roaring waterfalls.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The temple was originally constructed by Maharaja Pratap Shah of Tehri Garhwal. Due to immense avalanches and weather degradation, the temple has been rebuilt multiple times over the centuries. A unique highlight here is the Tapt Kund—boiling hot geysers emerging from the freezing rocks. Pilgrims cook raw rice and potatoes in these boiling pools and proudly take them home as the divine Prasad.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Yamunotri Trek & Barkot Logistics</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    The road connectivity ends at Janki Chatti. From here, pilgrims must undertake a steep 6-kilometer trek along the rugged canyon walls to reach the temple. While shorter than Kedarnath, the Yamunotri trek is famously steep and narrow, demanding good physical endurance.
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                                    <li><strong>The Yamunotri Trek:</strong> Takes approximately 3 to 4 hours one way. Palkis (palanquins) and mules are readily available at the Janki Chatti base camp for around ₹1,500-₹3,000 depending on demand.</li>
                                    <li><strong>Base Camp Stays (Barkot):</strong> The most comfortable and hygienic accommodation options are situated in Barkot (approx. 45 km from Janki Chatti). Barkot serves as the primary night-halt hub for the Yamunotri leg.</li>
                                    <li><strong>Kharsali Village (Winter Seat):</strong> Just across the river from Janki Chatti lies Kharsali, where the idol of Goddess Yamuna is brought down to the Shani Temple during the harsh winter months when Yamunotri is snowbound.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">Essential Internal Links for Yatra Planning</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link to="/gangotri-temple" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Gangotri Guide</Link>
                                    <Link to="/chardham-yatra-registration-process" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Yatra Registration</Link>
                                    <Link to="/chardham-yatra-package" className="bg-white border text-orange-600 px-4 py-2 rounded-full hover:bg-orange-50 font-medium">Explore Tour Packages</Link>
                                </div>
                            </div>

                            {/* Conversion Layer */}
                            <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                                <h3 className="text-3xl font-bold mb-4">Plan Your Yamunotri & Gangotri Yatra</h3>
                                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Start your spiritual journey on the right note. We provide well-paced itineraries with pre-booked Palkis, premium stays at Barkot, and experienced hill drivers.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="https://wa.me/919406182174?text=Yamunotri%20Yatra%20Enquiry" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                        WhatsApp Enquiry
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
        \`
    }
];

filesToFix.forEach(({ file, deepContent }) => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add import if missing
    if (!content.includes('FAQSection')) {
        const importMatch = content.match(/import .* from 'lucide-react';/);
        if (importMatch) {
            content = content.replace(
                importMatch[0],
                importMatch[0] + "\\nimport FAQSection from '@/components/seo/FAQSection';"
            );
        }
    }

    // Replace the faqs.map
    const mapStartIdx = content.indexOf('{faqs.map(');
    if (mapStartIdx !== -1) {
        const sectionStartIdx = content.lastIndexOf('<section', mapStartIdx);
        const sectionEndIdx = content.indexOf('</section>', mapStartIdx);
        
        if (sectionStartIdx !== -1 && sectionEndIdx !== -1) {
            const fullSectionEndIdx = sectionEndIdx + '</section>'.length;
            
            const newSection = \`
                    <section className="mb-12">
                        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
                    </section>\`;
                    
            const before = content.substring(0, sectionStartIdx);
            const after = content.substring(fullSectionEndIdx);
            content = before + newSection + after;
        }
    }

    // Attempt to inject deep-seo before closing </article>
    // These files have <article className="space-y-16"> and then </article> at the end of the left column
    if (!content.includes('id="deep-seo"')) {
        const articleClosingIdx = content.lastIndexOf('</article>');
        if (articleClosingIdx !== -1) {
            const before = content.substring(0, articleClosingIdx);
            const after = content.substring(articleClosingIdx);
            content = before + '\\n' + deepContent + '\\n' + after;
        }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(\`Processed \${file}\`);
});
