import { Card, CardContent } from '@/components/ui/card';
import { CloudSnow, ThermometerSun, Map, Navigation } from 'lucide-react';

export const MonthlyTravelGuide = () => {
  return (
    <section id="weather" className="space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold">Month-by-Month Travel Guide 2026</h2>
      <p className="text-lg text-muted-foreground">
        Timing your trip is critical. Here is a detailed breakdown of what to expect regarding weather, road accessibility, and crowds as the 2026 season opens.
      </p>

      {/* Monthly Weather Comparison Graphic Placeholder */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
            <span className="font-mono text-sm mb-2 text-slate-500">Image Specification</span>
            <p className="font-bold">Monthly Weather Comparison Graphic</p>
            <p className="text-sm text-slate-500">Alt Text: Chart showing temperature ranges and road accessibility from March to June in Ladakh.</p>
            <p className="text-sm text-slate-500">Dimensions: 800x400</p>
            <p className="text-sm text-slate-500">Filename: ladakh-weather-comparison-2026.svg</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 bg-slate-50 dark:bg-slate-900/50 hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">March 2026</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Map className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span><strong>Road Status:</strong> Manali-Leh closed. Srinagar-Leh might open late March (regulated).</span>
            </li>
            <li className="flex gap-3">
              <CloudSnow className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Weather:</strong> Freezing. Night temperatures drop to -15°C.</span>
            </li>
            <li className="flex gap-3">
              <Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Verdict:</strong> Fly into Leh. Ideal for snow lovers and Snow Leopard expeditions.</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-slate-50 dark:bg-slate-900/50 hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">April 2026</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Map className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span><strong>Road Status:</strong> Srinagar-Leh usually open. Manali-Leh closed until late April.</span>
            </li>
            <li className="flex gap-3">
              <CloudSnow className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span><strong>Weather:</strong> Cold, daytime temps 10°C - 15°C.</span>
            </li>
            <li className="flex gap-3">
              <Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Verdict:</strong> Great for avoiding crowds. See majestic 20-foot snow walls at Zojila.</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-slate-50 dark:bg-slate-900/50 hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">May 2026</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Map className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span><strong>Road Status:</strong> Both highways open. Expect bumpy roads and swelling water crossings.</span>
            </li>
            <li className="flex gap-3">
              <ThermometerSun className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span><strong>Weather:</strong> Pleasant days (15°C - 20°C), chilly nights.</span>
            </li>
            <li className="flex gap-3">
              <Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Verdict:</strong> Official start of the season. Perfect for early-bird road trippers.</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-slate-50 dark:bg-slate-900/50 hover:border-primary transition-colors border-primary/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">June 2026 <span className="text-xs bg-primary text-white px-2 py-1 rounded-full uppercase ml-2 tracking-wide font-medium">Peak Season</span></h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Map className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <span><strong>Road Status:</strong> Roads stabilize. High water levels in streams during the afternoon.</span>
            </li>
            <li className="flex gap-3">
              <ThermometerSun className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span><strong>Weather:</strong> Warm days, comfortable nights. Perfect visibility.</span>
            </li>
            <li className="flex gap-3">
              <Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Verdict:</strong> The absolute best time to visit Ladakh. High accessibility to all remote regions like Hanle and Umling La.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
