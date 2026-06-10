import { Schema } from '@/components/ladakh/Schema';
import { HeroSection } from '@/components/ladakh/HeroSection';
import { TableOfContents } from '@/components/ladakh/TableOfContents';
import { OpeningDatePrediction } from '@/components/ladakh/OpeningDatePrediction';
import { HistoricalOpeningDates } from '@/components/ladakh/HistoricalOpeningDates';
import { HighwayStatusSection } from '@/components/ladakh/HighwayStatusSection';
import { MonthlyTravelGuide } from '@/components/ladakh/MonthlyTravelGuide';
import { ComparisonTables } from '@/components/ladakh/ComparisonTables';
import { FAQSection } from '@/components/ladakh/FAQSection';
import { AuthorBox } from '@/components/ladakh/AuthorBox';
import { RelatedResources } from '@/components/ladakh/RelatedResources';
import { CTASection } from '@/components/ladakh/CTASection';

export default function LadakhOpeningDate() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. SEO & Schema Injection */}
      <Schema />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* Main Content Layout with Sticky TOC Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Article Content */}
          <article className="w-full lg:w-3/4 max-w-4xl space-y-12">
            <AuthorBox />
            
            <OpeningDatePrediction />
            <CTASection title="Want a hassle-free trip? Let us plan your itinerary." />

            <HistoricalOpeningDates />

            <HighwayStatusSection />
            <CTASection title="Not sure which route to take? Ask our local experts." />

            <MonthlyTravelGuide />
            
            <ComparisonTables />

            <FAQSection />

            <RelatedResources />

          </article>

          {/* Sticky Table of Contents Sidebar */}
          <aside className="w-full lg:w-1/4 hidden lg:block">
            <TableOfContents />
          </aside>
          
        </div>
      </div>
    </main>
  );
}
