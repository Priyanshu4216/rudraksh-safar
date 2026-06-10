import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const ComparisonTables = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Route Comparison: Srinagar vs Manali</h2>
      <p className="text-lg text-muted-foreground">
        Choosing the right route depends on your travel dates, vehicle, and experience level. Here is a definitive comparison to help you decide.
      </p>

      <div className="rounded-xl border bg-card overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900">
            <TableRow>
              <TableHead className="w-1/3">Feature</TableHead>
              <TableHead className="w-1/3 font-bold text-primary">Srinagar to Leh Route</TableHead>
              <TableHead className="w-1/3 font-bold text-primary">Manali to Leh Route</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Total Distance</TableCell>
              <TableCell>434 km</TableCell>
              <TableCell>428 km (via Atal Tunnel)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Expected Opening 2026</TableCell>
              <TableCell>Late March - Early April</TableCell>
              <TableCell>Late April - Early May</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Acclimatization (AMS Risk)</TableCell>
              <TableCell className="text-green-600 font-medium">Excellent (Gradual Ascent)</TableCell>
              <TableCell className="text-red-600 font-medium">Poor (Rapid Ascent)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Major Passes</TableCell>
              <TableCell>Zojila (11,575 ft), Namik La, Fotu La</TableCell>
              <TableCell>Baralacha La (16,040 ft), Tanglang La (17,480 ft)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Scenic Landscape</TableCell>
              <TableCell>Green valleys turning into barren mountains</TableCell>
              <TableCell>High-altitude desert, rugged, desolate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Best For</TableCell>
              <TableCell>Families, First-timers, Early Season Travelers</TableCell>
              <TableCell>Adventure Bikers, Repeat Visitors</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
