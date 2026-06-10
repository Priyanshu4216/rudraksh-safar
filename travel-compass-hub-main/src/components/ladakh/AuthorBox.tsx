import { CheckCircle2, Calendar, Users, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AuthorBox = () => {
  return (
    <Card className="my-8 border-l-4 border-l-primary bg-slate-50 dark:bg-slate-900">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <Users className="w-8 h-8" />
          </div>
          
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-bold flex items-center gap-2">
              Reviewed by Rudraksh Safar Ladakh Operations Team
              <CheckCircle2 className="w-5 h-5 text-green-600 fill-green-100 dark:fill-green-900" />
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              This guide has been fact-checked and verified by our on-ground expedition leaders in Leh. We continuously monitor Border Roads Organisation (BRO) snow clearance operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: June 2026</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Fact Checked & Verified</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Activity className="w-4 h-4" />
                <span>50+ Departures Conducted</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
