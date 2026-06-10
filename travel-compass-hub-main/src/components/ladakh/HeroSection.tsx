import { Calendar, MapPin, Activity } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-slate-900 text-white min-h-[60vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Placeholder styling instead of an img tag for now as requested */}
        <div 
          className="w-full h-full bg-slate-800 object-cover opacity-50 flex items-center justify-center text-slate-500 flex-col"
        >
          <span className="text-sm">Image Placeholder: ladakh-opening-date-2026-hero-snow-walls.jpg</span>
          <span className="text-xs">Purpose: Hero Background | Size: 1920x1080 | Alt: A convoy of SUVs driving through high snow walls on the Manali-Leh highway.</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ladakh Opening Date 2026: Official Road Status & Updates
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Planning a road trip to Leh Ladakh? Get the official Manali-Leh and Srinagar-Leh highway opening dates, weather predictions, and expert travel advice for 2026.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider mb-1">Expected Opening</p>
                <p className="font-bold text-lg">Mid-March to May 2026</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider mb-1">Current Status</p>
                <p className="font-bold text-lg text-amber-400">Monitoring Winter Snowfall</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider mb-1">Best Travel Window</p>
                <p className="font-bold text-lg">Late May - September 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
