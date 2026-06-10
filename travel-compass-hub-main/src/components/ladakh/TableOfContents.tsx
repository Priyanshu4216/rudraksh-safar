import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const links = [
  { id: 'opening-date', title: 'Opening Date Prediction' },
  { id: 'historical-data', title: 'Historical Opening Dates' },
  { id: 'manali-route', title: 'Manali-Leh Highway Status' },
  { id: 'srinagar-route', title: 'Srinagar-Leh Highway Status' },
  { id: 'weather', title: 'Month-by-Month Weather' },
  { id: 'planning', title: 'Travel Planning Guide' },
  { id: 'faqs', title: 'Frequently Asked Questions (FAQs)' },
  { id: 'resources', title: 'Related Resources' },
];

export const TableOfContents = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors block py-1"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};
