import fs from 'fs';
import path from 'path';

const redirects = {
    "/visa-guide": "/travel-services/visa-assistance",
    "/passport-guide": "/travel-services/passport-assistance",
    "/cab-rental": "/travel-services/cab-rental",
    "/cruise-booking": "/travel-services/cruise-booking",
    "/hotel-booking": "/travel-services/hotel-booking",
    "/about-us": "/about-rudraksh-safar",

    "/tour-packages-bhilai": "/tour-packages-from-bhilai",
    "/international-packages-bhilai": "/tour-packages-from-bhilai/international-tours",
    "/corporate-tour-packages-bhilai": "/tour-packages-from-bhilai/corporate-tours",
    "/international-tour-packages-bhilai": "/tour-packages-from-bhilai/international-tours",
    "/weekend-getaways-bhilai": "/tour-packages-from-bhilai/weekend-getaways",
    "/weekend-getaways-raipur": "/tour-packages-from-raipur/weekend-getaways",
    "/international-tours-from-raipur": "/tour-packages-from-raipur/international-tours",
    "/international-tours-from-bhilai": "/tour-packages-from-bhilai/international-tours",
    "/honeymoon-packages-from-bhilai": "/tour-packages-from-bhilai/honeymoon-packages",

    "/ladakh-tour-packages-from-delhi": "/domestic-tours/ladakh",
    "/ladakh-tour-packages": "/domestic-tours/ladakh",
    "/kashmir-tour-package-from-bhilai": "/domestic-tours/kashmir-from-bhilai",
    "/kashmir-tour-packages": "/domestic-tours/kashmir",
    "/manali-tour-package-from-bhilai": "/domestic-tours/manali-from-bhilai",
    "/manali-tour-packages": "/domestic-tours/manali",
    "/kerala-tour-package-from-bhilai": "/domestic-tours/kerala-from-bhilai",
    "/kerala-tour-packages": "/domestic-tours/kerala",
    "/andaman-tour-package-from-bhilai": "/domestic-tours/andaman-from-bhilai",
    "/andaman-tour-packages": "/domestic-tours/andaman",
    "/goa-tour-package-from-bhilai": "/domestic-tours/goa-from-bhilai",
    "/goa-tour-packages": "/domestic-tours/goa",
    "/goa-package-from-raipur": "/domestic-tours/goa-from-raipur",
    "/goa-package-from-durg": "/domestic-tours/goa-from-durg",
    "/goa-trip-from-supela": "/domestic-tours/goa-trip-from-supela",
    "/goa-cheap-trip-guide": "/domestic-tours/goa-cheap-trip-guide",
    "/goa-budget-itinerary-from-cg": "/domestic-tours/goa-budget-itinerary",
    "/north-vs-south-goa-from-cg": "/domestic-tours/north-vs-south-goa",
    "/train-vs-flight-to-goa-from-cg": "/domestic-tours/train-vs-flight-goa",
    "/train-vs-flight-goa-from-cg": "/domestic-tours/train-vs-flight-goa",

    "/dubai-tour-package-from-raipur": "/international-tours/dubai-from-raipur",
    "/dubai-tour-package-from-bhilai": "/international-tours/dubai-from-bhilai",
    "/dubai-tour-packages": "/international-tours/dubai",
    "/thailand-tour-package-from-raipur": "/international-tours/thailand-from-raipur",
    "/thailand-tour-package-from-bhilai": "/international-tours/thailand-from-bhilai",
    "/thailand-tour-packages-from-raipur": "/international-tours/thailand-from-raipur",
    "/thailand-tour-packages": "/international-tours/thailand",
    "/singapore-tour-package-from-bhilai": "/international-tours/singapore-from-bhilai",
    "/singapore-tour-packages": "/international-tours/singapore",
    "/bali-tour-package-from-raipur": "/international-tours/bali-from-raipur",
    "/bali-tour-package-from-bhilai": "/international-tours/bali-from-bhilai",
    "/bali-tour-packages": "/international-tours/bali",
    "/sri-lanka-tour-package-from-bhilai": "/international-tours/srilanka-from-bhilai",
    "/sri-lanka-tour-package-from-raipur": "/international-tours/srilanka-from-raipur",
    "/srilanka-tour-packages": "/international-tours/srilanka"
};

const dirsToScan = ['src', 'public'];

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        // Ignore node_modules, dist, .git, etc just in case
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('.next') || fullPath.includes('dist')) continue;

        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (['.tsx', '.ts', '.html', '.xml', '.js', '.jsx', '.json'].includes(ext)) {
                let originalContent = fs.readFileSync(fullPath, 'utf8');
                let content = originalContent;

                // Ensure we process longer URLs first to avoid partial replacements!
                // e.g. /dubai-tour-packages-from-bhilai MUST be parsed before /dubai-tour-packages
                const sortedOldUrls = Object.keys(redirects).sort((a, b) => b.length - a.length);

                for (const oldUrl of sortedOldUrls) {
                    const newUrl = redirects[oldUrl];

                    // Match standard react router Link or href
                    // Look for to="OLD", href="OLD", to={`OLD`} etc
                    // Also match sitemap URLs: <loc>https://rudrakshsafar.com/OLD</loc>

                    const prefixes = ['to="', "to='", 'to={`', 'href="', "href='", "path: '", 'path: "', "link: '", 'link: "', 'https://rudrakshsafar.com', 'https://www.rudrakshsafar.com'];
                    const suffixes = ['"', "'", '`', '<', '/"', "/'"];

                    for (const prefix of prefixes) {
                        for (const suffix of suffixes) {
                            const searchString = prefix + oldUrl + suffix;
                            if (content.includes(searchString)) {
                                // Escape searchString for RegExp
                                const escapedSearchStr = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                                const regex = new RegExp(escapedSearchStr, 'g');
                                content = content.replace(regex, prefix + newUrl + suffix);
                            }

                            // Also handle the case where it has a trailing slash or anchor
                            const searchStr2 = prefix + oldUrl + '#'
                            if (content.includes(searchStr2)) {
                                content = content.replace(new RegExp(searchStr2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), prefix + newUrl + '#');
                            }

                            const searchStr3 = prefix + oldUrl + '?'
                            if (content.includes(searchStr3)) {
                                content = content.replace(new RegExp(searchStr3.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), prefix + newUrl + '?');
                            }
                        }
                    }
                }

                if (content !== originalContent) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Updated ${fullPath}`);
                }
            }
        }
    }
}

for (const dir of dirsToScan) {
    processDirectory(path.join(process.cwd(), dir));
}

console.log('Mass replacement complete!');
