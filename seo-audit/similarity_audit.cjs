const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('seo-audit/audit_compiled.json', 'utf8'));
const registry = data.registry;

const existingUrls = new Set(registry.filter(r => r.status === 'existing').map(r => r.url));
const redirectUrls = new Map(registry.filter(r => r.status === 'redirect').map(r => [r.url, r.owner]));

// Find broken internal links
const brokenLinks = [];
const redirectLinks = [];

for (const page of registry) {
    if (page.status !== 'existing') continue;
    // We can read the internalLinks from component
    // Let's check each link against existingUrls
}

// B1, B2, B3 Destination Lists
const B1_destinations = [
    { name: 'Thailand', type: 'international' },
    { name: 'Bali', type: 'international' },
    { name: 'Dubai', type: 'international' },
    { name: 'Vietnam', type: 'international' },
    { name: 'Seychelles', type: 'international' },
    { name: 'Almaty (Kazakhstan)', type: 'international', key: 'almaty' },
    { name: 'Macau', type: 'international' },
    { name: 'Philippines', type: 'international' },
    { name: 'Sri Lanka', type: 'international', key: 'srilanka' },
    { name: 'Japan', type: 'international' },
    { name: 'Malaysia', type: 'international' },
    { name: 'Singapore', type: 'international' },
    { name: 'China (Canton Fair)', type: 'international', key: 'canton' },
    { name: 'Char Dham', type: 'india', key: 'chardham' },
    { name: 'Kerala', type: 'india' },
    { name: 'Haridwar-Rishikesh', type: 'india', key: 'haridwar' },
    { name: 'Haridwar Kumbh', type: 'india', key: 'kumbh' },
    { name: 'Kashmir', type: 'india' },
    { name: 'Puri', type: 'india' },
    { name: 'Manali', type: 'india' },
    { name: 'Ladakh', type: 'india' },
    { name: 'Goa', type: 'india' },
    { name: 'Rajasthan', type: 'india' },
    { name: 'Gujarat', type: 'india', key: 'gujarat' }
];

const B2_priorities = [
    { name: 'Manali Group Trip at ₹5,999', key: 'manali-kasol-strangers-trip' },
    { name: 'Haridwar Kumbh', key: 'kumbh-mela-2027' },
    { name: 'Canton Fair', key: 'canton' },
    { name: 'Winter-peak leisure (Kashmir, Manali, Ladakh, Kerala, Thailand, Bali, Dubai, Vietnam, Singapore, Malaysia, Japan)', key: 'winter' }
];

const B3_candidates = [
    // India
    { name: 'Andaman & Nicobar', type: 'india', key: 'andaman' },
    { name: 'Himachal beyond Manali (Shimla, Dharamshala, Kasauli, Spiti)', type: 'india', key: 'shimla' },
    { name: 'Sikkim-Darjeeling-Gangtok', type: 'india', key: 'darjeeling' },
    { name: 'Meghalaya and Northeast (Shillong, Cherrapunji, Kaziranga)', type: 'india', key: 'meghalaya' },
    { name: 'Uttarakhand beyond Haridwar (Nainital, Mussoorie, Jim Corbett, Auli)', type: 'india', key: 'uttarakhand' },
    { name: 'Kedarnath-Badrinath (circuits)', type: 'india', key: 'kedarnath' },
    { name: 'Ayodhya-Varanasi-Prayagraj (Kashi-Ayodhya circuit)', type: 'india', key: 'varanasi' },
    { name: 'Vaishno Devi & Amritsar', type: 'india', key: 'vaishno' },
    { name: 'Tirupati, Rameshwaram, Madurai', type: 'india', key: 'tirupati' },
    { name: 'Shirdi-Nashik', type: 'india', key: 'shirdi' },
    { name: 'Mahakaleshwar-Omkareshwar & Jyotirlinga circuits', type: 'india', key: 'jyotirlinga' },
    { name: 'Dwarka-Somnath & Gujarat circuits', type: 'india', key: 'dwarka' },
    { name: 'Ooty-Kodaikanal-Coorg-Mysuru-Hampi', type: 'india', key: 'ooty' },
    { name: 'Amarnath Yatra', type: 'india', key: 'amarnath' },
    // International
    { name: 'Maldives', type: 'international', key: 'maldives' },
    { name: 'Hong Kong (and HK + Macau combo)', type: 'international', key: 'hong-kong' },
    { name: 'Europe (Switzerland, Paris, Italy; Schengen)', type: 'international', key: 'europe' },
    { name: 'Turkey', type: 'international', key: 'turkey' },
    { name: 'Azerbaijan', type: 'international', key: 'azerbaijan' },
    { name: 'Georgia', type: 'international', key: 'georgia' },
    { name: 'Nepal', type: 'international', key: 'nepal' },
    { name: 'Bhutan', type: 'international', key: 'bhutan' },
    { name: 'Mauritius', type: 'international', key: 'mauritius' },
    { name: 'South Korea', type: 'international', key: 'korea' },
    { name: 'Egypt', type: 'international', key: 'egypt' },
    { name: 'Uzbekistan', type: 'international', key: 'uzbekistan' },
    { name: 'Cambodia (Angkor)', type: 'international', key: 'cambodia' },
    { name: 'Singapore + Malaysia combo', type: 'international', key: 'singapore-malaysia' },
    { name: 'Thailand + Vietnam/Cambodia combo', type: 'international', key: 'thailand-vietnam' },
    // Themes / Services
    { name: 'Honeymoon Packages', type: 'theme', key: 'honeymoon' },
    { name: 'Family Packages', type: 'theme', key: 'family' },
    { name: 'Group Tours', type: 'theme', key: 'group' },
    { name: 'Budget Packages', type: 'theme', key: 'budget' },
    { name: 'Luxury Packages', type: 'theme', key: 'luxury' },
    { name: 'Corporate / MICE / Incentive trips', type: 'theme', key: 'corporate' },
    { name: 'Visa Assistance', type: 'service', key: 'visa' },
    { name: 'Travel Insurance', type: 'service', key: 'insurance' },
    { name: 'Flight + Hotel Booking', type: 'service', key: 'flight' }
];

// Perform similarity audit for each
function auditDestinationList(destList) {
    return destList.map(item => {
        const key = item.key || item.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Find matching existing pages
        const matches = registry.filter(r => {
            const u = r.url.toLowerCase();
            return u.includes(key);
        });

        const existingActive = matches.filter(m => m.status === 'existing');
        const existingRedirects = matches.filter(m => m.status === 'redirect');

        let status = 'CREATE';
        let action = 'CREATE';
        let matchedUrls = existingActive.map(m => m.url);

        if (existingActive.length > 0) {
            status = 'SIMILAR_PAGE_EXISTS';
            action = 'UPGRADE-IN-PLACE';
        } else if (existingRedirects.length > 0) {
            status = 'REDIRECT_EXISTS_NO_ACTIVE_PAGE';
            action = 'CREATE';
        }

        return {
            name: item.name,
            type: item.type || 'general',
            status: status,
            action: action,
            existingActiveCount: existingActive.length,
            existingRedirectCount: existingRedirects.length,
            matchedUrls: matchedUrls.slice(0, 5),
            notes: existingActive.length > 0 ? `Found ${existingActive.length} active pages` : 'No active page found'
        };
    });
}

const b1Audit = auditDestinationList(B1_destinations);
const b2Audit = auditDestinationList(B2_priorities);
const b3Audit = auditDestinationList(B3_candidates);

// Identify on-site destinations not in B1/B2/B3
const recognizedKeys = [...B1_destinations, ...B2_priorities, ...B3_candidates].map(d => d.key || d.name.toLowerCase());
const unlistedDestinationsOnSite = [];

const allDestsInRegistry = new Set(registry.map(r => r.destination).filter(d => d && d !== 'General' && d !== 'Redirect Target'));
for (const d of allDestsInRegistry) {
    const dLower = d.toLowerCase();
    const matched = recognizedKeys.some(k => dLower.includes(k) || k.includes(dLower));
    if (!matched) {
        unlistedDestinationsOnSite.push(d);
    }
}

fs.writeFileSync('seo-audit/similarity_audit.json', JSON.stringify({
    b1Audit,
    b2Audit,
    b3Audit,
    unlistedDestinationsOnSite
}, null, 2));

console.log('Saved seo-audit/similarity_audit.json');
