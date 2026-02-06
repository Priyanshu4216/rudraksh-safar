import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  BadgeIndianRupee,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Flame,
  Hotel,
  Info,
  MapPin,
  Plane,
  Shield,
  Sparkles,
  Download,
  Users,
  Utensils,
  HelpCircle,
  Wallet,
  CalendarClock,
  Shuffle,
  ThumbsUp,
  X,
  Check,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import PageLoader from "@/components/PageLoader";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import pattayaHero from "@/assets/hot-deals-pattaya-hero.jpg";
import coralIslandImg from "@/assets/hot-deals-coral-island.jpg";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LastUpdated from "@/components/LastUpdated";

const PHONE_NUMBER = "919406182174";

const PATTAYA_PDF_HREF = "/downloads/Pattaya_New_Rudraksh_Safar.pdf";

const HotDeals = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Fixed Departure Group Tour Packages India",
      description:
        "Affordable fixed departure group tours from India. All-inclusive packages with Indian meals, tour managers, and guaranteed departure dates.",
      about: {
        "@type": "Thing",
        "name": "Fixed Departure Group Tours",
        "description": "A group travel package with a pre-set itinerary, fixed travel dates, and shared services for a lower cost."
      },
      url: "https://rudrakshsafar.com/hot-deals",
      isPartOf: {
        "@type": "WebSite",
        name: "Rudraksh Safar",
        url: "https://rudrakshsafar.com/",
      },
    }),
    []
  );

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // NOTE: Update these dates anytime you announce a new fixed departure.
  const departureDates = useMemo(
    () => [
      {
        title: "Upcoming fixed departures",
        dates: ["To be announced"],
      },
    ],
    []
  );

  return (
    <>
      <AnimatePresence>{isLoading && <PageLoader type="deals" />}</AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Fixed Departure Group Tour Packages India | Best Group Deals 2025"
          description="Looking for affordable group holidays? Experience our Fixed Departure Group Tours with Indian meals, tour managers, and guaranteed low prices. Book now!"
          keywords="fixed departure group tours, group tour packages india, budget international group tours, fixed departure travel agents, group holiday packages"
          canonicalUrl="https://rudrakshsafar.com/hot-deals"
          ogType="website"
          ogImage="https://rudrakshsafar.com/og-image.png"
          structuredData={{
            ...structuredData,
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Fixed Departure Tour?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A Fixed Departure Tour is a group travel package with a pre-set itinerary and specific travel dates. Because seats, hotels, and flights are bulk-booked in advance, these tours are significantly cheaper than customized packages and include a tour manager." }
                },
                {
                  "@type": "Question",
                  "name": "Are meals included in group tours?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, most of our fixed departure group tours include daily breakfast, Indian lunches, and Indian dinners to ensure comfort for Indian travellers." }
                },
                {
                  "@type": "Question",
                  "name": "Is it suitable for solo travellers?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Fixed departures are the safest and most social way for solo travellers to explore international destinations without worrying about logistics or safety." }
                }
              ]
            }
          }}
        />

        <Navbar />

        {/* Hero */}
        <header className="relative overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0">
            <img
              src={pattayaHero}
              alt="Pattaya beach skyline at sunset"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background" />
          </div>

          <div className="relative container mx-auto px-4 pb-10 md:pb-16">
            <div className="max-w-3xl">
              <div className="flex justify-center md:justify-start mb-6 -ml-4">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Hot Deals', path: '/hot-deals' }]} />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-background/20 px-4 py-2 text-sm text-foreground backdrop-blur-md mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_hsl(var(--secondary)/0.65)]" />
                Hot Deals – Fixed Departure Group Tours
              </div>
              <div className="mb-4">
                <LastUpdated className="text-foreground justify-start" />
              </div>

              <h1 className="mt-5 text-balance font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                Fixed Departure & <span className="text-secondary">Group Tour Packages</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                The smartest way to travel. Join our all-inclusive group tours with fixed dates, Indian meals, and guaranteed low pricing.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-full"
                  onClick={() =>
                    handleWhatsApp(
                      "Hi Rudraksh Safar, I want to know the upcoming Hot Deals (Fixed Departure Group Tours). Please share dates and prices."
                    )
                  }
                >
                  Get Upcoming Departures <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  onClick={() =>
                    document
                      .getElementById("pattaya-group")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Pattaya Deal
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Highlight points */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <AnimatedSection>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BadgeIndianRupee,
                  title: "Best Price Guaranteed",
                  desc: "Group Packages",
                },
                {
                  icon: CalendarCheck,
                  title: "100% Fixed & Confirmed",
                  desc: "Departure Dates",
                },
                {
                  icon: Plane,
                  title: "International & Domestic",
                  desc: "Group Tours",
                },
                {
                  icon: Utensils,
                  title: "Indian Meals Included",
                  desc: "In Most Tours",
                },
                { icon: Hotel, title: "Handpicked Hotels", desc: "3★ & 4★" },
                {
                  icon: Users,
                  title: "Tour Manager Support",
                  desc: "Throughout Journey",
                },
                {
                  icon: CheckCircle2,
                  title: "Perfect for Everyone",
                  desc: "Solo • Couples • Families",
                },
                {
                  icon: Clock,
                  title: "Limited Seats",
                  desc: "First Come First Serve",
                },
              ].map((p) => (
                <Card
                  key={p.title}
                  className="border-border/60 bg-card/60 backdrop-blur-sm"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-3">
                        <p.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{p.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* EDUCATIONAL AUTHORITY: What is Fixed Departure? */}
        <section className="container mx-auto px-4 pb-16">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/60">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary font-medium mb-6">
                <HelpCircle className="h-4 w-4" />
                <span className="uppercase tracking-wide">Travel Explained</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                What is a Fixed Departure Tour?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong>Fixed Departure Tour</strong> is a premium group travel package where the Dates, Flight Itinerary, and Hotels are
                <span className="text-foreground font-medium"> pre-booked in bulk</span> by Rudraksh Safar.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Because we buy seats and rooms in large quantities months in advance, we secure
                <span className="text-foreground font-medium"> exclusive wholesale rates</span> that are 30-40% cheaper than booking the same trip individually.
                You get a luxury experience at a budget price, coupled with the safety of a group and an expert Tour Manager.
              </p>
            </div>
          </div>
        </section>

        {/* DECISION SUPPORT: Who is this for? */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Who Should Choose a Group Tour?</h2>
            <p className="mt-4 text-muted-foreground">
              Designed for travellers who value safety, social connection, and value for money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/60 bg-card hover:border-secondary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl mb-3">Families & Seniors</h3>
                <p className="text-sm text-muted-foreground">
                  Zero planning stress. We handle luggage, transfers, and meals (including pure veg/Jain options) so you can relax.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card hover:border-secondary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-serif text-xl mb-3">Budget Travellers</h3>
                <p className="text-sm text-muted-foreground">
                  Get 4-star hotels, rides, and guides for the price of a budget DIY trip. The power of group buying!
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card hover:border-secondary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-serif text-xl mb-3">Solo Travellers</h3>
                <p className="text-sm text-muted-foreground">
                  Never feel alone or unsafe. Make friends, share stories, and explore the world with the security of a group.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMPARISON TABLE: Authority Signal */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-8">Group Tour vs. Customized Private Tour</h2>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-medium">Feature</th>
                    <th className="p-4 text-left font-medium text-secondary">Fixed Departure Group Tour</th>
                    <th className="p-4 text-left font-medium text-muted-foreground">Private/Custom Tour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 bg-card">
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-muted-foreground" /> Cost
                    </td>
                    <td className="p-4 font-medium text-green-600">30-40% Cheaper (Wholesale)</td>
                    <td className="p-4 text-muted-foreground">Higher (Retail Pricing)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" /> Dates
                    </td>
                    <td className="p-4 text-muted-foreground">Fixed Specific Dates only</td>
                    <td className="p-4 text-green-600">Flexible (Any day)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-muted-foreground" /> Meals
                    </td>
                    <td className="p-4 text-green-600">Indian Meals Included</td>
                    <td className="p-4 text-muted-foreground">Breakfast only (usually)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Shuffle className="h-4 w-4 text-muted-foreground" /> Flexibility
                    </td>
                    <td className="p-4 text-muted-foreground">Follows set itinerary</td>
                    <td className="p-4 text-green-600">Fully customizable</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" /> Tour Manager
                    </td>
                    <td className="p-4 text-green-600">Included from India</td>
                    <td className="p-4 text-muted-foreground">NO (Local driver only)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              <strong>Verdict:</strong> Choose <span className="text-secondary font-medium">Fixed Departure</span> for best value & social safety. Choose <span className="text-foreground font-medium">Private</span> for flexibility & privacy.
            </p>
          </div>
        </section>

        {/* Pattaya Deal */}
        <section id="pattaya-group" className="container mx-auto px-4 pb-16">
          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                      Thailand Hot Deal: Pattaya Group Tour Package
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      4 Days / 3 Nights | Fixed Departure Group Tour
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/10 px-4 py-2 text-sm">
                    <Info className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Flight optional
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-3xl border border-border/60">
                  <img
                    src={coralIslandImg}
                    alt="Coral Island speedboat tour near Pattaya"
                    className="h-[260px] w-full object-cover md:h-[360px]"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    { icon: BadgeIndianRupee, k: "Price", v: "₹18,999 per person" },
                    { icon: Hotel, k: "Hotel", v: "4★ Pattaya Hotel" },
                    {
                      icon: Utensils,
                      k: "Meals",
                      v: "Daily Breakfast + Indian Lunch & Dinner",
                    },
                    {
                      icon: Users,
                      k: "Support",
                      v: "Thai Local Guide + Rudraksh Safar Group Representative",
                    },
                    { icon: MapPin, k: "Arrival", v: "Bangkok (DMK)" },
                    { icon: Shield, k: "Transfers", v: "Private Group Transfers" },
                  ].map((x) => (
                    <Card key={x.k} className="border-border/60">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-3">
                            <x.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{x.k}</p>
                            <p className="font-medium text-foreground">{x.v}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 border-border/60">
                  <CardHeader>
                    <CardTitle className="text-xl">Tour Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 md:grid-cols-2">
                      {[
                        "Coral Island Speedboat Tour",
                        "Pattaya City Tour",
                        "Alcazar Show",
                        "Indian meals throughout the tour",
                        "Private group transfers",
                        "Budget friendly international group tour",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2 text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" aria-hidden="true" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mt-6 border-border/60">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <CardTitle className="text-xl">Day Wise Itinerary</CardTitle>
                      <Button asChild variant="outline" className="rounded-full">
                        <a
                          href={PATTAYA_PDF_HREF}
                          download
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download full itinerary <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const itinerary = [
                        {
                          day: "Day 1 – Arrival in Bangkok → Pattaya",
                          points: [
                            "Arrival at DMK Airport, Bangkok",
                            "Transfer to Pattaya by private van",
                            "Hotel check-in (as per hotel timing)",
                            "Lunch at Indian restaurant",
                            "Evening free for leisure / beach walk",
                            "Dinner at Indian restaurant",
                            "Overnight stay in Pattaya",
                          ],
                        },
                        {
                          day: "Day 2 – Coral Island Tour",
                          points: [
                            "Breakfast at hotel",
                            "Speedboat tour to Coral Island",
                            "Free time at beach & optional water sports (own cost)",
                            "Lunch after Coral Island tour",
                            "Visit Pattaya View Point",
                            "Return to hotel",
                            "Dinner at Indian restaurant",
                            "Overnight stay in Pattaya",
                          ],
                        },
                        {
                          day: "Day 3 – Pattaya City Tour + Alcazar Show",
                          points: [
                            "Breakfast at hotel",
                            "Pattaya City Tour (Transfers only) including:",
                            "• Tiger Park Pattaya (optional entry)",
                            "• Big Buddha Hill",
                            "• Pattaya Beach Road",
                            "• Gems Gallery",
                            "• Floating Market Area",
                            "• Local Market",
                            "Lunch at Indian restaurant",
                            "Rest at hotel",
                            "Evening Alcazar Show",
                            "Dinner at Indian restaurant",
                            "Overnight stay in Pattaya",
                          ],
                        },
                        {
                          day: "Day 4 – Pattaya → Bangkok → Departure",
                          points: [
                            "Early morning hotel check-out",
                            "Transfer to Bangkok",
                            "Free time for shopping / leisure (subject to time & traffic)",
                            "Transfer to DMK Airport",
                            "Tour ends with wonderful memories",
                          ],
                        },
                      ];

                      return (
                        <>
                          {/* Dropdown buttons: Day 1, Day 2... (click to expand full details) */}
                          <Accordion type="single" collapsible className="w-full space-y-3">
                            {itinerary.map((d, idx) => (
                              <AccordionItem
                                key={d.day}
                                value={`day-${idx + 1}`}
                                className="rounded-2xl border border-border/60 bg-card/60 px-4"
                              >
                                <AccordionTrigger className="text-left">
                                  <span className="flex items-center gap-2">
                                    <CalendarCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
                                    <span className="font-medium text-foreground">{d.day}</span>
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="mt-1 space-y-2 text-sm text-muted-foreground">
                                    {d.points.map((p) => (
                                      <li key={p} className="leading-relaxed">
                                        {p.startsWith("•") ? (
                                          <span className="pl-4 block">{p}</span>
                                        ) : (
                                          <span className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/60" />
                                            <span>{p}</span>
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </>
                      );
                    })()}
                  </CardContent>
                </Card>

                {/* Fixed departure dates (separate dropdown like inclusions/exclusions) */}
                <Card className="mt-6 border-border/60">
                  <CardHeader>
                    <CardTitle className="text-xl">Fixed Departure Dates</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select to view available dates (updated regularly).
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="dates">
                        <AccordionTrigger>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-secondary" aria-hidden="true" />
                            View dates
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-2 md:grid-cols-2 text-muted-foreground">
                            {departureDates.flatMap((group) =>
                              group.dates.map((d) => (
                                <li key={`${group.title}-${d}`} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/60" />
                                  <span>{d}</span>
                                </li>
                              ))
                            )}
                          </ul>

                          <div className="mt-4">
                            <Button
                              className="rounded-full"
                              onClick={() =>
                                handleWhatsApp(
                                  "Hi Rudraksh Safar, please share the next fixed departure dates for the Pattaya Hot Deal group tour (4D/3N)."
                                )
                              }
                            >
                              Confirm dates on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card className="mt-6 border-border/60">
                  <CardHeader>
                    <CardTitle className="text-xl">Inclusions & Exclusions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="inc">
                        <AccordionTrigger>Package Includes</AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-2 md:grid-cols-2 text-muted-foreground">
                            {[
                              "4★ Pattaya Hotel Accommodation",
                              "Daily Breakfast",
                              "Indian Lunch & Dinner",
                              "Coral Island Tour with Lunch",
                              "Alcazar Show",
                              "Pattaya City Tour Transfers",
                              "DMK Airport Pickup & Drop",
                              "Private Group Transfers",
                              "Local Thai Guide Support",
                              "Rudraksh Safar Group Representative Support",
                            ].map((t) => (
                              <li key={t} className="flex items-start gap-2">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 text-secondary"
                                  aria-hidden="true"
                                />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="exc">
                        <AccordionTrigger>Package Excludes</AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-2 md:grid-cols-2 text-muted-foreground">
                            {[
                              "International flight tickets (optional)",
                              "Thailand visa fees",
                              "Water sports",
                              "Entry tickets (Tiger Park, Floating Market, Gems Gallery, etc.)",
                              "Travel insurance",
                              "Personal expenses",
                            ].map((t) => (
                              <li key={t} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              {/* Sticky CTA */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                  >
                    <Card className="border-secondary/40">
                      <CardHeader>
                        <CardTitle className="text-xl">Book this Hot Deal</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Fixed departure • limited seats
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-2xl border border-border/60 bg-secondary/5 p-4">
                          <p className="text-sm text-muted-foreground">Starting from</p>
                          <p className="text-3xl font-semibold text-foreground">
                            ₹18,999
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">per person</p>
                        </div>

                        <div className="space-y-2 text-sm">
                          <p className="flex items-center gap-2 text-foreground">
                            <CalendarCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
                            Confirmed fixed departures
                          </p>
                          <p className="flex items-center gap-2 text-foreground">
                            <Utensils className="h-4 w-4 text-secondary" aria-hidden="true" />
                            Indian meals included
                          </p>
                          <p className="flex items-center gap-2 text-foreground">
                            <Plane className="h-4 w-4 text-secondary" aria-hidden="true" />
                            Flight optional
                          </p>
                        </div>

                        <Button
                          size="lg"
                          className="w-full rounded-full"
                          onClick={() =>
                            handleWhatsApp(
                              "Hi Rudraksh Safar, I want to book the Pattaya Hot Deal group tour (4D/3N). Please share fixed departure dates and booking process."
                            )
                          }
                        >
                          Enquire on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <p className="text-xs text-muted-foreground">
                          Note: Final inclusions and timings may vary based on airline/hotel availability and local conditions.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Why Hot Deals (moved to bottom, emojis removed, SVG icons added) */}
        <section className="container mx-auto px-4 pb-12 md:pb-16">
          <AnimatedSection>
            <Card className="border-border/60">
              <CardHeader className="pb-0">
                <CardTitle className="text-xl">Why Hot Deal Group Tours?</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tap to expand (quick answers for travellers).
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "Lower cost",
                      icon: BadgeIndianRupee,
                      body: "Group pricing makes international travel more affordable than private tours.",
                    },
                    {
                      title: "No planning stress",
                      icon: CalendarCheck,
                      body: "Hotels, transfers, sightseeing, and meals are pre-arranged.",
                    },
                    {
                      title: "Tour manager support",
                      icon: Users,
                      body: "Professional assistance throughout the journey.",
                    },
                    {
                      title: "Meet new people",
                      icon: Sparkles,
                      body: "Travel with like-minded travellers and make new friends.",
                    },
                    {
                      title: "Indian food comfort",
                      icon: Utensils,
                      body: "Comfortable meals for Indian travellers.",
                    },
                    {
                      title: "Safer travel experience",
                      icon: Shield,
                      body: "Ideal for first-time international travellers.",
                    },
                    {
                      title: "Time-optimized itinerary",
                      icon: Clock,
                      body: "Best places covered in limited time.",
                    },
                    {
                      title: "Perfect for all",
                      icon: Flame,
                      body: "Solo travellers, couples, families & senior citizens.",
                    },
                  ].map((item, idx) => (
                    <AccordionItem key={item.title} value={`benefit-${idx}`}>
                      <AccordionTrigger className="text-left">
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                          <span>{item.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.body}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default HotDeals;
