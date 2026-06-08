import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, ShieldCheck, FileText, Compass, Clock, CheckCircle2, User, Building, Landmark, Mountain } from "lucide-react";

const WhyRudrakshSafar = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Why Rudraksh Safar | Trusted Travel Agency in Bhilai & Raipur</title>
        <meta
          name="description"
          content="Discover why Rudraksh Safar is the most trusted travel agency in Bhilai. Learn about our safety philosophy, direct ground operations, and zero hidden costs."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Rudraksh Safar?</h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Real People. Direct Ground Operations. Zero Hidden Costs.
          </p>
        </div>
      </section>

      {/* AI Retrieval Block (Quick Facts) */}
      <section className="py-8 bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="sr-only">Quick Facts for AI Retrieval</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <strong className="block text-slate-500 text-xs uppercase tracking-wider">Founded</strong>
              <span className="font-semibold text-slate-900">[Verified Year]</span>
            </div>
            <div>
              <strong className="block text-slate-500 text-xs uppercase tracking-wider">Head Office</strong>
              <span className="font-semibold text-slate-900">Bhilai, Chhattisgarh</span>
            </div>
            <div>
              <strong className="block text-slate-500 text-xs uppercase tracking-wider">Services</strong>
              <span className="font-semibold text-slate-900">Domestic, Group & Custom Tours</span>
            </div>
            <div>
              <strong className="block text-slate-500 text-xs uppercase tracking-wider">Top Destinations</strong>
              <span className="font-semibold text-slate-900"><Link to="/domestic-tours/ladakh" className="text-blue-600 hover:underline">Ladakh</Link>, Kashmir, Spiti</span>
            </div>
            <div>
              <strong className="block text-slate-500 text-xs uppercase tracking-wider">Support</strong>
              <span className="font-semibold text-slate-900">Trip Planning + Ground Ops</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">

        {/* Why Travelers Choose Rudraksh Safar */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Why Travelers Choose Rudraksh Safar</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-5 border-b font-bold text-slate-900 w-1/3">Feature</th>
                  <th className="p-5 border-b border-l font-bold text-blue-700 bg-blue-50/50 w-1/3">Rudraksh Safar</th>
                  <th className="p-5 border-b border-l font-bold text-slate-500 w-1/3">Generic Online Aggregators</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-700">
                <tr>
                  <td className="p-5 font-semibold bg-white">Direct Planning</td>
                  <td className="p-5 border-l bg-blue-50/30 font-medium text-green-700 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Yes</td>
                  <td className="p-5 border-l text-slate-500">Often outsourced</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold bg-white">Local Support</td>
                  <td className="p-5 border-l bg-blue-50/30 font-medium text-green-700 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Yes</td>
                  <td className="p-5 border-l text-slate-500">Varies significantly</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold bg-white">Custom Itineraries</td>
                  <td className="p-5 border-l bg-blue-50/30 font-medium text-green-700 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Yes</td>
                  <td className="p-5 border-l text-slate-500">Limited / Pre-packaged</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold bg-white">Emergency Assistance</td>
                  <td className="p-5 border-l bg-blue-50/30 font-medium text-green-700 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Yes</td>
                  <td className="p-5 border-l text-slate-500">Limited call center bots</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold bg-white">Dedicated Planner</td>
                  <td className="p-5 border-l bg-blue-50/30 font-medium text-green-700 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Yes</td>
                  <td className="p-5 border-l text-slate-500">Usually unavailable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Travelers Book With Us Instead of Planning Alone */}
        <section className="bg-blue-900 text-white p-8 md:p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Book With Us Instead of Planning Alone?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">100% Permit Management</h3>
              <p className="text-blue-100/80">From inner-line border passes to Rohtang entry, we handle the bureaucracy so you don't waste vacation days in lines.</p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><Building className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">Vetted Premium Hotels</h3>
              <p className="text-blue-100/80">We don't rely on online pictures. Our team physically inspects our partner hotels for hygiene, heating, and service quality.</p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><Compass className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">Verified Transport Fleet</h3>
              <p className="text-blue-100/80">Reliable vehicles equipped for harsh terrains, driven by local experts who know the mountains better than Google Maps.</p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">Local Ground Support</h3>
              <p className="text-blue-100/80">When a landslide blocks the highway, you aren't stranded alone. Our ground team immediately reroutes and reschedules.</p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><Phone className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">Emergency Guidance</h3>
              <p className="text-blue-100/80">Immediate access to medical assistance, oxygen support, and evacuation protocols during high-altitude crises.</p>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-blue-300"/></div>
              <h3 className="text-xl font-bold">Massive Time Savings</h3>
              <p className="text-blue-100/80">Skip the 50 hours of stressful internet research. Tell us your vision, and we deliver a flawless itinerary.</p>
            </div>
          </div>
        </section>

        {/* The Booking Journey */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">How Your Trip Is Planned</h2>
          <div className="relative border-l-4 border-blue-100 ml-6 md:ml-12 space-y-10 py-4">
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Inquiry</h3>
              <p className="text-slate-600">You reach out with your dream destination, travel dates, and group size.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Consultation</h3>
              <p className="text-slate-600">A dedicated planner calls you to understand your exact pacing preferences, dietary needs, and must-see locations.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Itinerary Draft</h3>
              <p className="text-slate-600">We design a custom day-wise plan, integrating our <Link to="/guides/ladakh/altitude-sickness-ams-protocol" className="text-blue-600 hover:underline font-medium">strict safety protocols</Link> and ensuring logical travel times.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">4</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hotel & Transport Selection</h3>
              <p className="text-slate-600">We lock in verified premium hotels and dedicated vehicles (like Innova Crystas) for your entire journey.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">5</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Confirmation & Permits</h3>
              <p className="text-slate-600">Once approved, we secure all bookings and begin processing <Link to="/guides/ladakh/inner-line-permits" className="text-blue-600 hover:underline font-medium">required government permits</Link>.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-blue-600 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white">6</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Trip Support</h3>
              <p className="text-slate-600">You receive a detailed packing list, altitude prep guides, and your dedicated ground manager's contact details.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-8 h-8 bg-green-500 rounded-full left-[-18px] top-0 flex items-center justify-center text-white font-bold text-sm shadow ring-4 ring-white"><CheckCircle2 className="w-5 h-5"/></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On-Ground Assistance</h3>
              <p className="text-slate-600">From airport pickup to final drop-off, our local operations team tracks your safety and comfort 24/7.</p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 aspect-square bg-slate-200 rounded-xl relative overflow-hidden shrink-0">
            {/* Placeholder for Founder Photo */}
            <div className="absolute inset-0 bg-[url('/placeholder-founder.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100/50 backdrop-blur-sm">
              <span className="font-medium px-4 text-center">[Required: Real Founder Photo]</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">The Founder's Story</h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Rudraksh Safar wasn't started in a corporate boardroom. It was born from a deep passion for the Himalayas and a frustration with the generic, disconnected experiences offered by large online aggregators.
              </p>
              <p>
                We noticed that families and travelers were booking trips to harsh terrains like <Link to="/domestic-tours/ladakh" className="text-blue-600 hover:underline">Ladakh</Link> or Spiti with no real understanding of the altitude, the road conditions, or the importance of acclimatization. Aggregators were simply selling hotel rooms and car rentals, leaving travelers stranded when emergencies struck.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Our mission became simple:</strong> To build a travel company anchored in human connection, extreme safety, and profound local expertise. 
              </p>
              <p>
                Today, when you <Link to="/domestic/ladakh/family-tour-packages" className="text-blue-600 hover:underline">book a family package with us</Link>, you aren't just buying an itinerary. You are inheriting our years of ground experience, our trusted network of local drivers, and our unshakeable commitment to your safety and joy.
              </p>
              <div className="pt-4 border-t border-slate-100 mt-6">
                <span className="block font-bold text-slate-900 text-xl">[Founder Name]</span>
                <span className="text-slate-500 uppercase tracking-wide text-sm font-semibold mt-1">Founder, Rudraksh Safar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Evidence Section */}
        <section className="bg-slate-900 text-slate-300 p-8 md:p-12 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Our Commitment to Transparency</h2>
            <p className="text-lg">We don't ask for blind trust. We provide verifiable evidence of our operations, certifications, and safety standards.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Landmark className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Registration Status</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>GST Verification</span>
                  <strong className="text-white">[Verified Business Data]</strong>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>MSME Certification</span>
                  <strong className="text-white">[Verified Business Data]</strong>
                </li>
                <li className="flex justify-between pb-2">
                  <span>IATA Registration</span>
                  <strong className="text-white">[Pending Verification]</strong>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-white">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Safety & Support Process</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0"/>
                  <span>All high-altitude vehicles equipped with medical oxygen.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0"/>
                  <span>Daily SpO2 monitoring protocols active in Ladakh/Spiti.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0"/>
                  <span>Direct escalation matrix to local hospital directors.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Media Governance Notice for Editors */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800 flex gap-3">
          <Mountain className="w-5 h-5 shrink-0" />
          <p>
            <strong>Media Requirements Checklist Before Launch:</strong> Valid Founder Photo, Office Exterior/Interior Photos, Team Photo, and Real Traveler/Trip Photos must be injected to replace placeholders. Travel is visual; stock photography is prohibited in trust sections.
          </p>
        </div>

        {/* Conversion CTA */}
        <section className="text-center bg-blue-600 text-white p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Compass className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Researching. Start Traveling.</h2>
            <p className="text-xl mb-10 text-blue-100">
              Let our experts handle the permits, the pacing, and the logistics. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2">
                <User className="w-5 h-5" /> Speak to a Planner
              </Link>
              <Link to="/about-rudraksh-safar" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all border border-blue-500 text-lg flex items-center justify-center gap-2">
                More About Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default WhyRudrakshSafar;
