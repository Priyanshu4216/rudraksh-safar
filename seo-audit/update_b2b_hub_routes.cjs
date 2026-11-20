const fs = require('fs');

const file = 'travel-compass-hub-main/src/pages/b2b/B2BHub.tsx';
let c = fs.readFileSync(file, 'utf8');

// Update canonicalRoute for destinations
c = c.replace("canonicalRoute: '/chardham-yatra-package'", "canonicalRoute: '/b2b/chardham'");
c = c.replace("canonicalRoute: '/tours/kashmir'", "canonicalRoute: '/b2b/kashmir'");
c = c.replace("canonicalRoute: '/domestic-tours/ladakh'", "canonicalRoute: '/b2b/ladakh'");
c = c.replace("canonicalRoute: '/packages/manali-kasol-strangers-trip'", "canonicalRoute: '/b2b/manali'");
c = c.replace("canonicalRoute: '/domestic-packages'", "canonicalRoute: '/b2b/nainital'");
// For mussoorie, it also had /domestic-packages earlier, so replace next occurrence:
c = c.replace("canonicalRoute: '/domestic-packages'", "canonicalRoute: '/b2b/mussoorie'");
c = c.replace("canonicalRoute: '/domestic-tours/puri-jagannath-dham'", "canonicalRoute: '/b2b/puri'");
c = c.replace("canonicalRoute: '/domestic-tours/andaman'", "canonicalRoute: '/b2b/andaman'");
c = c.replace("canonicalRoute: '/international-tours/dubai'", "canonicalRoute: '/b2b/dubai'");
c = c.replace("canonicalRoute: '/international-tours/vietnam'", "canonicalRoute: '/b2b/vietnam'");

// In card actions, add link to dedicated page:
c = c.replace(
  `<button 
                                            onClick={() => {
                                                setSelectedDest(dest);
                                                const el = document.getElementById('dest-detail-modal');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-lg transition-colors text-center"
                                        >
                                            Inspect Operations
                                        </button>`,
  `<Link 
                                            to={dest.canonicalRoute}
                                            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
                                        >
                                            DMC Rates <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>`
);

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated B2BHub.tsx routes to dedicated /b2b/* links');
