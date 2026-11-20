const fs = require('fs');

const file = 'travel-compass-hub-main/src/App.tsx';
let c = fs.readFileSync(file, 'utf8');

const targetImport = 'const B2BThailand = lazy(() => import("./pages/b2b/B2BThailand"));';
const newImports = `const B2BThailand = lazy(() => import("./pages/b2b/B2BThailand"));
const B2BChardham = lazy(() => import("./pages/b2b/B2BChardham"));
const B2BKashmir = lazy(() => import("./pages/b2b/B2BKashmir"));
const B2BLadakh = lazy(() => import("./pages/b2b/B2BLadakh"));
const B2BManali = lazy(() => import("./pages/b2b/B2BManali"));
const B2BNainital = lazy(() => import("./pages/b2b/B2BNainital"));
const B2BMussoorie = lazy(() => import("./pages/b2b/B2BMussoorie"));
const B2BPuri = lazy(() => import("./pages/b2b/B2BPuri"));
const B2BAndaman = lazy(() => import("./pages/b2b/B2BAndaman"));
const B2BDubai = lazy(() => import("./pages/b2b/B2BDubai"));
const B2BVietnam = lazy(() => import("./pages/b2b/B2BVietnam"));`;

const targetRoute = '<Route path="/b2b/thailand" element={<B2BThailand />} />';
const newRoutes = `<Route path="/b2b/thailand" element={<B2BThailand />} />
                    <Route path="/b2b/chardham" element={<B2BChardham />} />
                    <Route path="/b2b/kashmir" element={<B2BKashmir />} />
                    <Route path="/b2b/ladakh" element={<B2BLadakh />} />
                    <Route path="/b2b/manali" element={<B2BManali />} />
                    <Route path="/b2b/nainital" element={<B2BNainital />} />
                    <Route path="/b2b/mussoorie" element={<B2BMussoorie />} />
                    <Route path="/b2b/puri" element={<B2BPuri />} />
                    <Route path="/b2b/andaman" element={<B2BAndaman />} />
                    <Route path="/b2b/dubai" element={<B2BDubai />} />
                    <Route path="/b2b/vietnam" element={<B2BVietnam />} />`;

c = c.replace(targetImport, newImports);
c = c.replace(targetRoute, newRoutes);

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated App.tsx with 10 new B2B destination routes!');
