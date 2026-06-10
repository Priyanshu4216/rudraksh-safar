import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const relatedLinks = [
  { title: "Ladakh Weather In May", url: "/ladakh/weather-may" },
  { title: "Ladakh Weather In June", url: "/ladakh/weather-june" },
  { title: "Complete AMS Guide for Ladakh", url: "/ladakh/ams-guide" },
  { title: "Ultimate Ladakh Packing List", url: "/ladakh/packing-list" },
  { title: "Ladakh Permit Guide 2026", url: "/ladakh/permit-guide" },
  { title: "Ladakh Trip Cost Estimator", url: "/ladakh/trip-cost" },
  { title: "7 Day Ladakh Itinerary", url: "/ladakh/7-day-itinerary" },
  { title: "10 Day Ladakh Itinerary", url: "/ladakh/10-day-itinerary" },
  { title: "Ladakh Bike Trip Cost", url: "/ladakh/bike-trip-cost" },
  { title: "Best Time to Visit Ladakh", url: "/ladakh/best-time" },
  { title: "Srinagar to Leh Highway Guide", url: "/ladakh/srinagar-leh-guide" },
  { title: "Manali to Leh Highway Guide", url: "/ladakh/manali-leh-guide" },
  { title: "Pangong Lake Travel Guide", url: "/ladakh/pangong-lake" },
  { title: "Nubra Valley Attractions", url: "/ladakh/nubra-valley" },
  { title: "Renting a Bike in Leh", url: "/ladakh/bike-rental-leh" }
];

export const RelatedResources = () => {
  return (
    <section id="resources" className="space-y-6 scroll-mt-24 mt-12 mb-12">
      <Card className="bg-slate-50 dark:bg-slate-900 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Related Planning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.url}
                className="flex items-center text-primary hover:text-primary/80 hover:underline transition-colors p-2 rounded-lg hover:bg-primary/5"
              >
                <ArrowRight className="w-4 h-4 mr-2 text-muted-foreground" />
                {link.title}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
