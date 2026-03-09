const fs = require('fs');

function appendToDeepSeo(filePath, contentToAppend) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if the deep-seo section exists
    if (content.includes('id="deep-seo"')) {
        // Find the boundary to insert before </section>
        const sectionStart = content.indexOf('id="deep-seo"');
        const sectionEnd = content.indexOf('</section>', sectionStart);

        if (sectionEnd !== -1) {
            // Find the last </div> before </section>
            const lastDivIdx = content.lastIndexOf('</div>', sectionEnd);
            if (lastDivIdx !== -1) {
                const before = content.substring(0, lastDivIdx);
                const after = content.substring(lastDivIdx);
                const newContent = before + '\n' + contentToAppend + '\n' + after;
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Added enrichment content to ${filePath}`);
            }
        }
    }
}

// 1. BhilaiToKedarnath
const b2kPath = 'src/pages/chardham/BhilaiToKedarnath.tsx';
const b2kContent = `
                    <div className="mt-12 border-t pt-12 border-border/50">
                        <h2 className="text-3xl font-bold mb-4">Complete Kedarnath Travel Planner for Bhilai Residents</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-orange-600 mb-3">Best Time to Visit & Opening Dates</h3>
                                <p className="text-muted-foreground mb-3">
                                    The temple portals traditionally open on the auspicious occasion of Akshaya Tritiya (usually early May) and close on Bhai Dooj (late October or early November). 
                                </p>
                                <p className="text-muted-foreground">
                                    <strong>Ideal Window:</strong> The pristine post-monsoon period from September to October offers crystal clear views of the high peaks, stable weather, and lush green valleys, though May-June is the peak family rushing season. Avoid July-August (monsoons).
                                </p>
                            </div>
                            
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-blue-600 mb-3">Altitude & Weather Guidance</h3>
                                <p className="text-muted-foreground mb-3">
                                    Kedarnath is situated at a staggering 3,583 meters (11,755 ft). Air pressure drops significantly here, decreasing oxygen availability.
                                </p>
                                <p className="text-muted-foreground">
                                    Even during peak summer (May), night temperatures frequently plummet below freezing (-2°C to 5°C). Ensure you carry extreme winter gear. Heavy snow often greets early-season pilgrims.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Accommodation Options in Kedar Valley</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Staying near the temple is a surreal experience, though facilities are Spartan due to the extreme terrain. The GMVN (Garhwal Mandal Vikas Nigam) operates basic cottages and dormitory beds near the temple complex. Alternatively, many pilgrims choose to stay at base camps in Sonprayag, Guptkashi, or Phata (where helicopter pads are located), ascending early in the morning and returning the same evening.
                        </p>

                        {/* Conversion Layer */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                            <h3 className="text-3xl font-bold mb-4">Plan Your Char Dham Yatra from Bhilai</h3>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Skip the stress of securing helicopter tickets and registering passes. Let our Bhilai-based experts craft an end-to-end luxury itinerary for your family.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://wa.me/919406182174?text=I%20want%20to%20plan%20Kedarnath%20Yatra" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                    Quick Enquiry (WhatsApp)
                                </a>
                                <Link to="/chardham-yatra-package" className="bg-white text-orange-600 font-bold border-2 border-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition">
                                    View Related Char Dham Packages
                                </Link>
                            </div>
                        </div>
                    </div>
`;
appendToDeepSeo(b2kPath, b2kContent);


// 2. BadrinathTemple
const badPath = 'src/pages/chardham/BadrinathTemple.tsx';
const badContent = `
                    <div className="mt-12 border-t pt-12 border-border/50">
                        <h2 className="text-3xl font-bold mb-4">Badrinath Travel Tips & Pilgrim Guidance</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-orange-600 mb-3">Best Time to Visit Badrinath</h3>
                                <p className="text-muted-foreground mb-3">
                                    Badrinath remains accessible for only six months a year. The ideal visiting windows are May to June (peak summer) and September to late October (post-monsoon). 
                                </p>
                                <p className="text-muted-foreground">
                                    During the winter months (November to April), heavy snow renders the town inaccessible. The presiding deity is temporarily relocated to Pandukeshwar for winter worship.
                                </p>
                            </div>
                            
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-blue-600 mb-3">Road Access & Altitude</h3>
                                <p className="text-muted-foreground mb-3">
                                    Altitude: 3,133 meters (10,279 ft). While lower than Kedarnath, the air is still thin. Acclimatization is essential.
                                </p>
                                <p className="text-muted-foreground">
                                    The town is highly accessible by motorable road right up to the temple perimeter. However, the route features strict traffic gating operations between Joshimath and Badrinath to manage mountain traffic safely.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Accommodation & Food</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Because Badrinath is fully motorable, it boasts a much wider spectrum of hotels compared to Kedarnath—ranging from budget Dharamshalas and GMVN guest houses to premium luxury hotels. Traditional Indian vegetarian food (Sattvic diet) without onion and garlic is strictly adhered to in and around the sanctuary area. 
                        </p>

                        {/* Conversion Layer */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                            <h3 className="text-3xl font-bold mb-4">Plan Your Badrinath Yatra</h3>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Want to visit Badrinath temple with the comfort of a private Tempo Traveller and pre-booked premium hotels? Contact our Yatra experts today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://wa.me/919406182174?text=I%20want%20to%20plan%20Badrinath%20Yatra" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                    Enquire on WhatsApp
                                </a>
                                <Link to="/chardham-yatra-package" className="bg-white text-orange-600 font-bold border-2 border-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition">
                                    View Char Dham Packages
                                </Link>
                            </div>
                        </div>
                    </div>
`;
appendToDeepSeo(badPath, badContent);


// 3. CharDhamRegistration
const regPath = 'src/pages/chardham/CharDhamRegistration.tsx';
const regContent = `
                    <div className="mt-12 border-t pt-12 border-border/50">
                        <h2 className="text-3xl font-bold mb-4">Step-by-Step Registration & Common Mistakes</h2>
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-foreground mb-3">The Registration Process Workflow</h3>
                            <ol className="list-decimal pl-6 space-y-3 text-lg text-muted-foreground">
                                <li><strong>Sign Up:</strong> Create an account on the official Tourist Care Uttarakhand portal using your mobile number and email.</li>
                                <li><strong>Create Yatra Plan:</strong> Add tour type (Char Dham/Do Dham), select tour mode (road/heli), and add exact dates.</li>
                                <li><strong>Add Pilgrims:</strong> Input personal details for every individual in the group. Upload high-res passport photos and Aadhar.</li>
                                <li><strong>Generate Yatra Letter:</strong> Confirm submission and download the unique barcode-enabled Yatra Registration Pass PDF to your phone.</li>
                            </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200">
                                <h3 className="text-xl font-bold text-red-600 mb-3">Top Mistakes to Avoid</h3>
                                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                    <li>Mismatch between Aadhar name and Registration form.</li>
                                    <li>Attempting to book helicopter tickets without a valid Yatri ID.</li>
                                    <li>Waiting until the arrival in Haridwar to register (offline queues are massive).</li>
                                    <li>Booking a non-approved medical certificate format for seniors.</li>
                                </ul>
                            </div>
                            
                            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200">
                                <h3 className="text-xl font-bold text-green-600 mb-3">Helicopter Booking Rules</h3>
                                <p className="text-muted-foreground mb-3">
                                    The IRCTC portal is the <strong>ONLY</strong> authorized agency to sell Kedarnath helicopter tickets.
                                </p>
                                <p className="text-muted-foreground">
                                    Do not fall for black-market scams. A valid Yatra Registration Number is mandated by the IRCTC interface before it allows you to even check seat availability.
                                </p>
                            </div>
                        </div>

                        {/* Conversion Layer */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-8 rounded-2xl border-2 border-orange-500 text-center my-10">
                            <h3 className="text-3xl font-bold mb-4">Let Us Handle the Red Tape</h3>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Skip the stress of server crashes and registration forms. Book an all-inclusive Char Dham Yatra package and our backend team will secure all your permits, priority Darshan passes, and helicopter tickets.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://wa.me/919406182174?text=CharDham%20Enquiry" target="_blank" className="bg-orange-600 font-bold text-white px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-700 transition">
                                    Speak to Our Tour Experts
                                </a>
                                <Link to="/chardham-yatra-package" className="bg-white text-orange-600 font-bold border-2 border-orange-600 px-8 py-4 rounded-full text-lg hover:bg-orange-50 transition">
                                    Explore Packages
                                </Link>
                            </div>
                        </div>
                    </div>
`;
appendToDeepSeo(regPath, regContent);
