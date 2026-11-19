const fs = require('fs');
const path = require('path');

// 1. Update GlobalSchema.tsx
const globalSchemaPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'components', 'seo', 'GlobalSchema.tsx');
let schemaContent = fs.readFileSync(globalSchemaPath, 'utf8');

if (!schemaContent.includes('aggregateRating') && schemaContent.includes('"telephone": "+919203650311",')) {
  const target = '"telephone": "+919203650311",';
  const replacement = `"telephone": "+919713057086",
            "taxID": "22AGBPC7350G1ZZ",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "154",
                "bestRating": "5",
                "worstRating": "1"
            },`;
  schemaContent = schemaContent.replace(target, replacement);
  fs.writeFileSync(globalSchemaPath, schemaContent, 'utf8');
  console.log('Updated GlobalSchema.tsx with taxID and aggregateRating.');
} else {
  console.log('GlobalSchema.tsx already updated or target not found.');
}

// 2. Update AEOManaliKasolBox.tsx
const aeoPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'components', 'seo', 'AEOManaliKasolBox.tsx');
if (fs.existsSync(aeoPath)) {
  let aeoContent = fs.readFileSync(aeoPath, 'utf8');
  aeoContent = aeoContent.replace('148+ Verified Reviews', '154 Verified Google Reviews');
  fs.writeFileSync(aeoPath, aeoContent, 'utf8');
  console.log('Updated AEOManaliKasolBox.tsx review count.');
}

// 3. Update Footer.tsx with E-E-A-T credentials bar
const footerPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'components', 'Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');

const targetFooterRow = `{/* Bottom Bar */}`;
const eeatTrustBar = `{/* E-E-A-T Trust & Verified Credentials Bar */}
        <div className="border-t border-white/10 py-6 container relative z-10 text-xs">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-white text-sm">Rudraksh Safar</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
                  GSTIN: 22AGBPC7350G1ZZ
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-[11px] border border-amber-500/30">
                  ★ 4.9 Rating (154 Google Reviews)
                </span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed max-w-2xl">
                Registered Head Office: Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3, Durg, Chhattisgarh 490021.
                Direct Support Hotline: <a href="tel:+919713057086" className="text-white font-medium hover:underline">+91 9713057086</a> / <a href="tel:+919203650311" className="text-white font-medium hover:underline">+91 9203650311</a> | Email: <a href="mailto:rudrakshsafar@gmail.com" className="text-white font-medium hover:underline">rudrakshsafar@gmail.com</a>
              </p>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <a
                href="https://wa.me/919713057086?text=Hello%20Rudraksh%20Safar%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20a%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition shadow-lg shadow-emerald-950/40"
              >
                WhatsApp Inquiry
              </a>
              <a
                href="tel:+919713057086"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 transition"
              >
                Call Hotline
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}`;

if (!footerContent.includes('22AGBPC7350G1ZZ') && footerContent.includes(targetFooterRow)) {
  footerContent = footerContent.replace(targetFooterRow, eeatTrustBar);
  fs.writeFileSync(footerPath, footerContent, 'utf8');
  console.log('Updated Footer.tsx with E-E-A-T credentials bar.');
} else {
  console.log('Footer.tsx already has GSTIN or target not found.');
}
