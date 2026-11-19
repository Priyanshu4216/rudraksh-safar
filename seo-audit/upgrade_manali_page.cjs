const fs = require('fs');
const file = 'travel-compass-hub-main/src/pages/domestic/manali/ManaliKasolStrangersTrip.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Event schema to schema graph
const eventSchema = `      {
        '@type': 'Event',
        '@id': 'https://rudrakshsafar.com/manali-kasol-strangers-trip#event-upcoming',
        'name': 'Manali Kasol Strangers Group Trip — Weekend Departure',
        'startDate': '2026-11-20T18:00:00+05:30',
        'endDate': '2026-11-25T10:00:00+05:30',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'eventStatus': 'https://schema.org/EventScheduled',
        'location': {
          '@type': 'Place',
          'name': 'Delhi Assembly Point (Majnu Ka Tila / Kashmere Gate)',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'New Delhi',
            'addressRegion': 'Delhi',
            'addressCountry': 'IN'
          }
        },
        'offers': {
          '@type': 'Offer',
          'price': '5999',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'validFrom': '2026-11-01',
          'url': 'https://rudrakshsafar.com/manali-kasol-strangers-trip'
        },
        'performer': {
          '@type': 'Organization',
          'name': 'Rudraksh Safar',
          'url': 'https://rudrakshsafar.com'
        }
      },`;

if (!content.includes('#event-upcoming')) {
    content = content.replace("{\n        '@type': 'Product',", `${eventSchema}\n      {\n        '@type': 'Product',`);
}

// 2. Add Supporting Guides and Sticky Mobile Bar before <FloatingWhatsApp />
const guidesAndMobileBar = `      {/* Supporting Guides Silo */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Plan Your Himachal Journey</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">Official Manali &amp; Kasol Travel Guides</h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              Read our local guides on winter snowfall dates, Solang adventure tariffs, Atal Tunnel transit rules, and essential packing checklists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link to="/guides/manali-in-winter" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-500 transition group flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase">Winter Guide</span>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition mt-1">Manali in Winter 2026-2027</h3>
                <p className="text-xs text-slate-500 mt-2">Snowfall timeline, Solang Valley winter adventure, and temperature details.</p>
              </div>
              <span className="text-xs font-bold text-amber-600 mt-4 flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link to="/guides/atal-tunnel-solang-guide" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-500 transition group flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase">Transit &amp; Permits</span>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition mt-1">Atal Tunnel &amp; Solang Guide</h3>
                <p className="text-xs text-slate-500 mt-2">Permit rules, distance from Mall Road, and adventure sports tariffs.</p>
              </div>
              <span className="text-xs font-bold text-amber-600 mt-4 flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link to="/guides/manali-weather-by-month" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-500 transition group flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">Climate Calendar</span>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition mt-1">Manali Weather by Month</h3>
                <p className="text-xs text-slate-500 mt-2">Month-by-month temperature, snowfall likelihood, and clothing tips.</p>
              </div>
              <span className="text-xs font-bold text-amber-600 mt-4 flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link to="/guides/manali-snow-packing-list" className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-500 transition group flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase">Packing Essentials</span>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition mt-1">Snow Trip Packing List</h3>
                <p className="text-xs text-slate-500 mt-2">The 3-layer warmth system, waterproof boots, and medical kit.</p>
              </div>
              <span className="text-xs font-bold text-amber-600 mt-4 flex items-center gap-1">Read Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Persistent Mobile Sticky Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="leading-tight">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Starting At</div>
          <div className="text-lg font-black text-amber-400">₹5,999<span className="text-xs font-normal text-slate-300">/person</span></div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:9713057086"
            className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition"
            aria-label="Call Trip Advisor"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4" /> Book ₹5,999
          </a>
        </div>
      </div>
`;

if (!content.includes('Official Manali &amp; Kasol Travel Guides')) {
    content = content.replace('<FloatingWhatsApp />', `${guidesAndMobileBar}\n      <FloatingWhatsApp />`);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully upgraded ManaliKasolStrangersTrip.tsx with Event schema, guides grid, and sticky bar!');
