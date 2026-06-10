import { MapPin, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const HighwayStatusSection = () => {
  return (
    <div className="space-y-12">
      <section id="manali-route" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <Navigation className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Manali-Leh Highway Status 2026</h2>
        </div>
        
        <p className="text-lg text-muted-foreground">
          The Manali to Leh highway (NH-3) spans approximately 428 km (via the Atal Tunnel) and crosses five major high-altitude passes. It is the more adventurous but higher-altitude route.
        </p>

        {/* Route Map Placeholder */}
        <Card>
          <CardContent className="p-6">
            <div className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
              <span className="font-mono text-sm mb-2 text-slate-500">Image Specification</span>
              <p className="font-bold">Manali-Leh Route Map</p>
              <p className="text-sm text-slate-500">Alt Text: Detailed map showing the Manali to Leh route passes and elevations.</p>
              <p className="text-sm text-slate-500">Dimensions: 1200x600</p>
              <p className="text-sm text-slate-500">Filename: manali-leh-route-map-2026.webp</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              Major Bottlenecks
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Baralacha La (16,040 ft):</strong> The primary obstacle. Receives heaviest snowfall.</li>
              <li><strong>Tanglang La (17,480 ft):</strong> Highest pass on this route.</li>
              <li><strong>Pagal Nallahs:</strong> High water crossings that swell rapidly by afternoon.</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border">
            <h3 className="font-bold text-lg mb-4">BRO Clearance Timeline</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2 border-slate-200 dark:border-slate-800">
                <span className="text-muted-foreground">Manali to Sarchu</span>
                <span className="font-medium">Early March</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-slate-200 dark:border-slate-800">
                <span className="text-muted-foreground">Baralacha La</span>
                <span className="font-medium">Mid April</span>
              </li>
              <li className="flex justify-between text-primary font-bold">
                <span>Expected Full Opening</span>
                <span>Early May 2026</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="srinagar-route" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <Navigation className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Srinagar-Leh Highway Status 2026</h2>
        </div>
        
        <p className="text-lg text-muted-foreground">
          The Srinagar to Leh highway (NH-1) covers 434 km and serves as the primary lifeline for the region. The major hurdle on this route is the Zojila Pass (11,575 ft).
        </p>

        {/* Route Map Placeholder */}
        <Card>
          <CardContent className="p-6">
            <div className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
              <span className="font-mono text-sm mb-2 text-slate-500">Image Specification</span>
              <p className="font-bold">Srinagar-Leh Route Map</p>
              <p className="text-sm text-slate-500">Alt Text: Map showing the Srinagar to Kargil and Leh route with Zojila pass.</p>
              <p className="text-sm text-slate-500">Dimensions: 1200x600</p>
              <p className="text-sm text-slate-500">Filename: srinagar-leh-route-map-2026.webp</p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-6">
          <h3 className="text-xl font-bold mb-2">Why choose the Srinagar route early in the season?</h3>
          <p className="mb-0 text-slate-700 dark:text-slate-300">
            The Srinagar-Leh highway is at a significantly lower altitude than the Manali route. It allows for better acclimatization and usually opens 3-4 weeks earlier. The gradual ascent prevents Acute Mountain Sickness (AMS).
          </p>
        </div>
      </section>
    </div>
  );
};
