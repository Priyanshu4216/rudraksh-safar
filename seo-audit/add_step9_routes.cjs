const fs = require('fs');

let c = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const target = '<Route path="/guides/canton-fair-buyer-registration-guide" element={<CantonFairBuyerBadgeGuide />} />';
const replacement = `<Route path="/guides/canton-fair-buyer-registration-guide" element={<CantonFairBuyerBadgeGuide />} />
                    <Route path="/international-tours/vietnam" element={<VietnamMaster />} />
                    <Route path="/international-tours/almaty-kazakhstan" element={<AlmatyMaster />} />
                    <Route path="/domestic-tours/rajasthan" element={<RajasthanMaster />} />
                    <Route path="/domestic-tours/puri-jagannath-dham" element={<PuriMaster />} />`;

if (c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync('travel-compass-hub-main/src/App.tsx', c, 'utf8');
  console.log('REPLACED SUCCESSFULLY');
} else {
  console.log('TARGET NOT FOUND');
}
