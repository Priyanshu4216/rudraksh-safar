import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const historicalData = [
  { year: '2026 (Predicted)', srinagar: 'Late March', manali: 'Early May', snowfall: 'Pending' },
  { year: '2025', srinagar: 'March 20', manali: 'May 05', snowfall: 'Moderate' },
  { year: '2024', srinagar: 'March 24', manali: 'April 29', snowfall: 'Low' },
  { year: '2023', srinagar: 'March 16', manali: 'May 18', snowfall: 'High' },
  { year: '2022', srinagar: 'March 19', manali: 'April 26', snowfall: 'Low' },
  { year: '2021', srinagar: 'Feb 28', manali: 'March 28', snowfall: 'Very Low' },
  { year: '2020', srinagar: 'April 11', manali: 'May 18', snowfall: 'High' },
  { year: '2019', srinagar: 'April 28', manali: 'June 10', snowfall: 'Very High' },
  { year: '2018', srinagar: 'April 06', manali: 'May 13', snowfall: 'Moderate' },
  { year: '2017', srinagar: 'April 05', manali: 'June 08', snowfall: 'High' },
  { year: '2016', srinagar: 'April 18', manali: 'May 28', snowfall: 'Moderate' },
  { year: '2015', srinagar: 'May 06', manali: 'June 13', snowfall: 'Extreme' },
];

export const HistoricalOpeningDates = () => {
  return (
    <section id="historical-data" className="space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold">Historical Opening Date Analysis (2015–2026)</h2>
      <p className="text-lg text-muted-foreground">
        Understanding historical trends is the most accurate way to predict the 2026 opening dates. Notice how the induction of better BRO machinery since 2021 has drastically reduced opening times even in heavy snowfall years.
      </p>

      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Year</TableHead>
              <TableHead>Srinagar-Leh Opening</TableHead>
              <TableHead>Manali-Leh Opening</TableHead>
              <TableHead>Snowfall Intensity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historicalData.map((data, index) => (
              <TableRow key={index} className={index === 0 ? "bg-primary/5 font-semibold" : ""}>
                <TableCell>{data.year}</TableCell>
                <TableCell>{data.srinagar}</TableCell>
                <TableCell>{data.manali}</TableCell>
                <TableCell>{data.snowfall}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Risk Assessment Matrix Information Gain */}
      <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-900">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-3">Risk Assessment Matrix (Early Season)</h3>
        <p className="text-amber-800 dark:text-amber-300 mb-4">
          Traveling in the first 2 weeks of the road opening carries significant risk. Avalanches, sudden snowstorms, and black ice are highly prevalent. 
          If you travel in early May, ensure a flexible itinerary with a buffer of 2-3 days for road blocks.
        </p>
      </div>
    </section>
  );
};
