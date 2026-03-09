const fs = require('fs');
const path = require('path');

function injectBeforeFooter(filePath, contentToInject) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Inject before <Footer />
    // Also need to make sure we import SEO elements if required, but we can just use standard HTML
    if (content.includes('<Footer />') && !content.includes('id="deep-seo"')) {
        content = content.replace('<Footer />', contentToInject + '\n            <Footer />');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Expanded content in ${filePath}`);
    } else {
        console.log(`Could not find <Footer /> or already injected in ${filePath}`);
    }
}

// 1. Adventure Packages Expansion (already ~684, need to reach 1500+)
const advPath = 'src/pages/AdventurePackages.tsx';
const advContent = `
            {/* --- EXTRA DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Why Book Adventure Tour Packages With Rudraksh Safar?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            When it comes to adrenaline-pumping extreme sports, security and expert guidance are non-negotiable. At Rudraksh Safar, we partner exclusively with certified, highly vetted instructors to offer the finest adventure tour packages across India and Asia. Whether you're planning a bike expedition through the rugged terrain of Leh-Ladakh, a scuba diving retreat in the clear waters of the Andaman Islands, or tackling the Grade IV rapids of the Ganges in Rishikesh, your safety remains our highest priority.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Every adventure itinerary is extensively mapped out. For high-altitude treks in the Himalayas (like Spiti Valley or Everest Base Camp), our packages include acclimatization days, oxygen support, and seasoned trek leaders. We provide end-to-end support for our adventurers traveling from Raipur, Bhilai, or Durg, ensuring seamless flight connections to adventure hubs like Dehradun (for Uttarakhand treks) or Leh (for bike tours).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Understanding Adventure Difficulty Grades</h2>
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-green-600 mb-2">Grade 1: Beginner / Leisure Adventure</h3>
                                <p className="text-muted-foreground">Activities like kayaking, short day hikes, parasailing, and snorkeling in destinations like Goa or Phuket. Minimal physical fitness required. Perfect for family packages and casual thrill-seekers.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Grade 2: Moderate Expeditions</h3>
                                <p className="text-muted-foreground">White water rafting in Rishikesh, scuba diving in Andaman, desert safaris in Dubai, and short Himalayan winter treks. Basic cardiovascular fitness is recommended. No prior technical experience necessary.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-red-600 mb-2">Grade 3: Extreme / Technical</h3>
                                <p className="text-muted-foreground">Multi-day high-altitude trekking (above 14,000 feet), long-distance bullet bike riding through Ladakh or Spiti, and advanced technical ascents. High physical fitness, stamina, and prior acclimatization protocols are mandatory.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Top 5 Destinations for Thrill Seekers in 2026</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>Ladakh (India):</strong> The ultimate destination for bullet bike riders. Navigate the treacherous curves of Khardung La and Chang La passes.</li>
                            <li><strong>Andaman Islands (India):</strong> Home to the best PADI-certified scuba diving sites in the country. Dive at Nemo Reef to witness vibrant coral life.</li>
                            <li><strong>Rishikesh (India):</strong> The adventure capital of India. Combines spiritual yoga retreats with white-water rafting and bungee jumping over the Ganges.</li>
                            <li><strong>Phuket & Krabi (Thailand):</strong> World-class island hopping, deep water soloing, rock climbing, and snorkeling in pristine tropical waters.</li>
                            <li><strong>Dubai (UAE):</strong> High-octane motorized adventures. Enjoy evening desert dune bashing in 4x4s, sandboarding, and skydiving over the Palm Jumeirah.</li>
                        </ul>
                    </div>
                </div>
            </section>
`;

injectBeforeFooter(advPath, advContent);

// 2. CharDhamFromBhilai Expansion
const cdbPath = 'src/pages/chardham/CharDhamFromBhilai.tsx';
const cdbContent = `
            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
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
                </div>
            </section>
`;

injectBeforeFooter(cdbPath, cdbContent);

// 3. BhilaiToKedarnath Expansion
const b2kPath = 'src/pages/chardham/BhilaiToKedarnath.tsx';
const b2kContent = `
            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Comprehensive Guide: Bhilai To Kedarnath Yatra 2026</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The journey to the seat of Lord Shiva is a test of devotion. The **Bhilai to Kedarnath** route connects the industrial heartland of Chhattisgarh to the divine Kedar Valley in Uttarakhand. Whether you are seeking a solo spiritual retreat, a family pilgrimage, or a specialized group tour, planning ahead is non-negotiable. Kedarnath temple is perched at a massive altitude of 3,583 meters (11,755 feet) near the Chorabari Glacier, making it one of the most remote, yet heavily trekked destinations in India.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            For pilgrims from Bhilai-Durg, Raipur, or Rajnandgaon, the most efficient transition involves reaching Delhi (via flight/train) and taking an overnight Volvo bus or train to Haridwar. At Haridwar, your dedicated Rudraksh Safar transport takes over, navigating the winding mountain roads of the Garhwal Himalayas up to Sonprayag/Gaurikund.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">The 16 km Kedarnath Trek: What to Expect</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            From Gaurikund, all vehicular movement is halted. Pilgrims must ascend a steep, paved 16-kilometer trek alongside the Mandakini river to reach the Kedarnath shrine. 
                        </p>
                        <div className="bg-card p-6 rounded-xl border border-border mt-4">
                            <h3 className="font-bold text-lg mb-2 text-foreground">Altnerative Trekking Modes</h3>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li><strong>Helicopter Service:</strong> The fastest and most comfortable method. Shuttles fly from Phata, Sirsi, and Guptkashi directly to the Kedarnath helipad (just 500m from the temple). Booking early is crucial due to extreme demand.</li>
                                <li><strong>Ponies / Mules:</strong> The most common alternative to walking. Pony charges are regulated by the government and take approximately 4-5 hours to reach the top.</li>
                                <li><strong>Palki (Palanquins) / Kandi:</strong> Primarily used by elderly pilgrims who cannot ride ponies. Four men carry a comfortable wooden chair.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Packing Checklist for Kedarnath specifically for Chhattisgarh Residents</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Coming from the tropical climate of Chhattisgarh, preparation for sub-zero Himalayan nights is critical. Snowfall can occur even in May or June.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>Clothing:</strong> Thermal body warmers, a heavy fleece jacket, windproof outer layer, and woolen socks are mandatory. Layering is your best defense against the mountain wind.</li>
                            <li><strong>Footwear:</strong> Waterproof trekking shoes with a strong grip. Running shoes are highly discouraged as the path can get slippery with rain or mule dung.</li>
                            <li><strong>Medicine:</strong> Carry Diamox (consult your doctor) for altitude sickness, pain relievers, muscle relaxants (like Volini), and personal prescriptions.</li>
                            <li><strong>Documents:</strong> Aadhar Card, Yatra Registration slip, and helicopter boarding passes if booked.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">When is the Best Time to Travel?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The portals of Kedarnath open during Akshay Tritiya (usually early May) and close on Bhai Dooj (post-Diwali in November). <strong>May and June</strong> see peak summertime rush ideal for families. The <strong>monsoon season (July to August)</strong> is risky due to potential landslides along the Rudraprayag highway. The absolute best time for clear skies, crisp photography, and a serene spiritual experience is <strong>September to October</strong> after the rains wash the valley clean.
                        </p>
                    </div>
                </div>
            </section>
`;

injectBeforeFooter(b2kPath, b2kContent);


// 4. BadrinathTemple Expansion
const badPath = 'src/pages/chardham/BadrinathTemple.tsx';
const badContent = `
            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">The Significance of Badrinath Temple</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Perched at an elevation of 3,133 meters (10,279 feet) along the banks of the Alaknanda River, the **Badrinath Temple** is one of the most universally revered shrines in the Hindu religion. Unlike the arduous trek required for Kedarnath, Badrinath is easily accessible by motorable roads, making it a prominent focal point for elders and families completing the Char Dham Yatra.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            According to the Puranas, Lord Vishnu meditated here for thousands of years. To protect him from the harsh Himalayan weather, Goddess Lakshmi took the form of a Badri tree (jujube tree), spreading her branches over him—giving the location its name, "Badri-nath" (Lord of the Badri tree). Architecturally, the temple features a distinct, brightly painted facade with a conical roof topped by a small cupola, shining against the backdrop of the imposing Neelkanth peak.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Key Rituals and Darshan Information</h2>
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Maha Abhishek Pooja</h3>
                                <p className="text-muted-foreground">The most sacred ritual performed at Badrinath. Devotees must book in advance. The ritual involves the holy bathing of the Shaligram-stone idol of Lord Badrinarayan with milk, ghee, and local herbs.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Tapt Kund (Hot Sulphur Spring)</h3>
                                <p className="text-muted-foreground">Located just below the temple, taking a holy dip in the natural thermal springs of Tapt Kund is customary before entering the temple for Darshan. The water is naturally heated to around 45°C despite the freezing temperatures outside.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Mana Village Sightseeing</h3>
                                <p className="text-muted-foreground">Situated just 3 km from the Badrinath temple, Mana is the "Last Indian Village" before the Tibet border. Key attractions include Vyas Gufa (where sage Vyasa dictated the Mahabharata), Ganesh Gufa, and the roaring Saraswati river originating at Bhim Pul.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">How to Reach Badrinath</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Badrinath features excellent road connectivity compared to the other Dham shrines.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>By Air:</strong> The nearest airport is Jolly Grant Airport in Dehradun (314 km away). Pawan Hans offers helicopter flights connecting Dehradun and Phata to the Badrinath helipad.</li>
                            <li><strong>By Train:</strong> Rishikesh is the nearest major railhead (295 km away). From there, National Highway 7 connects directly to Badrinath via Devprayag, Rudraprayag, Karnaprayag, and Joshimath.</li>
                            <li><strong>By Road:</strong> Taxis and regular state buses ply from Haridwar and Rishikesh. The final stretch from Joshimath to Badrinath involves restricted gate timings to regulate mountain traffic.</li>
                        </ul>
                    </div>
                </div>
            </section>
`;

injectBeforeFooter(badPath, badContent);

// 5. CharDhamRegistration Expansion
const regPath = 'src/pages/chardham/CharDhamRegistration.tsx';
const regContent = `
            {/* --- DEEP SEO CONTENT BLOCKS --- */}
            <section id="deep-seo" className="py-16 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Why is Char Dham Yatra Registration Mandatory?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The **Char Dham Yatra Registration**, also widely known as the Yatra E-Pass or Photo Registration, is a mandatory governmental protocol enforced by the Uttarakhand Tourism Development Board. Following the tragic 2013 floods, the administration implemented strict tracking systems to effectively manage crowd capacities, ensure public safety, and quickly identify pilgrims during natural emergencies or medical evacuations.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Without a valid Yatra Registration document (either digital or printed), you will be denied entry at the physical checkpoints erected near Barkot, Uttarkashi, Sonprayag (for Kedarnath), and Joshimath (for Badrinath). Moreover, booking helicopter tickets to Kedarnath requires validating your Registration ID.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">How to Register for Char Dham Yatra 2026?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            The government provides three highly accessible methods for pilgrims. At Rudraksh Safar, we facilitate this entirely for users who book packages with us. However, if you are registering independently, here are the steps:
                        </p>
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">1. Through the Official Web Portal</h3>
                                <p className="text-muted-foreground">Visit the official Uttarakhand Tourist Care website (registrationandtouristcare.uk.gov.in). Create an account using your mobile number, fill in passenger details, upload a government-approved ID (Aadhar Card/Voter ID), and select the respective shrine travel dates. Once verified, download the PDF Yatri pass.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-green-600 mb-2">2. Through the "Tourist Care Uttarakhand" Mobile App</h3>
                                <p className="text-muted-foreground">Available on Android and iOS. The app allows users to simply scan their Aadhar card, auto-fill the forms, and store the digital QR-coded pass locally on their smartphone. This is highly recommended as internet connectivity can be sparse in the upper Himalayas.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-purple-600 mb-2">3. Via WhatsApp Automated Bot</h3>
                                <p className="text-muted-foreground">The government introduced a WhatsApp bot. Save the number +91-8394833833, send "Yatra", and interact with the prompts. It will ask for details and issue the registration directly to your chat inbox.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">4. Offline Verification Centers (Physical)</h3>
                                <p className="text-muted-foreground">If digital access fails, you can physically register by showing your original ID proof at centers situated in Haridwar (Rahi Hotel), Rishikesh (ISBT), Barkot, or Sonprayag. Note: Relying on offline centers can result in hours of waiting queues during peak season.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Essential Documents Needed</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                            <li><strong>Primary ID Proof:</strong> Aadhar Card, Voter ID Card, PAN Card, Driving License, or Passport.</li>
                            <li><strong>Recent Photograph:</strong> A passport-size photo (soft copy for digital registration).</li>
                            <li><strong>Medical Certificate:</strong> While not strictly mandatory for registration, travelers above 50 must fill out health declarations, particularly screening for heart and blood pressure anomalies.</li>
                        </ul>
                    </div>
                </div>
            </section>
`;

injectBeforeFooter(regPath, regContent);
