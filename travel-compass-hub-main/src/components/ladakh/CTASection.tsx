import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const CTASection = ({ title = "Need help planning your Ladakh trip?" }: { title?: string }) => {
  return (
    <Card className="my-8 bg-primary/5 border-primary/20">
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">Talk to a Rudraksh Safar travel expert for personalized advice and latest road conditions.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button className="w-full sm:w-auto" size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Talk to an Expert
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" size="lg">
            <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
            WhatsApp Us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
