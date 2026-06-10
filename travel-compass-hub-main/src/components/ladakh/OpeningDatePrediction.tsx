import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const OpeningDatePrediction = () => {
  return (
    <section id="opening-date" className="space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Opening Date Prediction</h2>
      
      {/* Answer Block / Fact Box for AI Overviews */}
      <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" />
          Quick Answer: When Will Ladakh Open in 2026?
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          Based on Border Roads Organisation (BRO) snow clearance operations (Project Beacon and Project Himank), the <strong>Srinagar-Leh highway</strong> is predicted to open by <strong>late March 2026</strong>. The higher altitude <strong>Manali-Leh highway</strong> is expected to open by <strong>early May 2026</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 font-medium">
          <li><strong>Earliest Possible Opening:</strong> Mid-March (Srinagar route), Late April (Manali route)</li>
          <li><strong>Latest Possible Opening:</strong> Late April (Srinagar route), Late May (Manali route)</li>
          <li><strong>Best Week to Travel (Early Season):</strong> 1st Week of June 2026</li>
        </ul>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Expert Insight</AlertTitle>
        <AlertDescription>
          Historically, BRO is inducting advanced rotary snow blowers. If winter 2025-2026 sees average snowfall, a mid-April 2026 opening for both major highways is highly probable.
        </AlertDescription>
      </Alert>

      {/* SVG Placeholder for Road Opening Timeline Graphic */}
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
            <span className="font-mono text-sm mb-2 text-slate-500">Image Specification</span>
            <p className="font-bold">Road Opening Timeline Graphic</p>
            <p className="text-sm text-slate-500 mt-2">Purpose: Visual timeline of BRO clearance</p>
            <p className="text-sm text-slate-500">Alt Text: Timeline showing snow clearance progress from February to May 2026</p>
            <p className="text-sm text-slate-500">Dimensions: 800x400</p>
            <p className="text-sm text-slate-500">Filename: ladakh-road-opening-timeline-2026.svg</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
