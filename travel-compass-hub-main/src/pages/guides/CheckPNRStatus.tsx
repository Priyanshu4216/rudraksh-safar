import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, AlertTriangle, Train, Plane, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckPNRStatus = () => {
    return (
        <>
            <Helmet>
                <title>How to Check PNR Status (2026 Guide) | IRCTC & Flights</title>
                <meta name="description" content="Step-by-step guide to check your Train (IRCTC) and Flight PNR status. excessive waiting list? Book confirmed tickets with Rudraksh Safar." />
                <meta name="keywords" content="check pnr status, irctc pnr status, flight pnr check, indigo pnr status, air india pnr status, railway enquiry" />
                <link rel="canonical" href="https://rudrakshsafar.com/how-to-check-pnr-status" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Check IRCTC PNR Status",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Locate PNR",
                                "text": "Find the 10-digit PNR number on the top left of your train ticket."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Visit Indian Railways Website",
                                "text": "Go to indianrail.gov.in or use the IRCTC Rail Connect App."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Enter PNR",
                                "text": "Enter your 10-digit number and solve the captcha."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "View Status",
                                "text": "See your current status (CNF, RAC, or WL)."
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO SECTION */}
                <div className="bg-slate-900 text-white py-20 px-4">
                    <div className="container max-w-4xl text-center space-y-6">
                        <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                            Traveler Utility Guide
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            The Ultimate Guide to Checking PNR Status
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Whether you're flying to Bangkok or taking a train to Haridwar, your PNR is the key to your journey. Here is how to track it.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                <Link to="/download-ticket">Check Rudraksh Booking</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                                <Link to="/contact">Need Help?</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl py-12 px-4 space-y-16">

                    {/* SECTION 1: WHAT IS PNR */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What is a PNR Number?</h2>
                            <p className="text-lg text-muted-foreground">
                                <strong>PNR (Passenger Name Record)</strong> is a unique 10-digit code (for trains) or 6-character code (for flights) generated when you book a ticket.
                            </p>
                            <p className="text-muted-foreground">
                                It holds all your journey details: Passenger Name, Gender, Age, Berth Preference, and Train/Flight Number.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 text-blue-800 dark:text-blue-200 mt-4">
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Pro Tip</p>
                                    <p className="text-sm">For Rudraksh Safar bookings, you can use your Mobile Number to find your PNR directly on our <Link to="/download-ticket" className="underline font-semibold">Download Portal</Link>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Train className="w-5 h-5 text-orange-600" /> PNR Status Codes Decoded
                            </h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Code</TableHead>
                                        <TableHead>Meaning</TableHead>
                                        <TableHead>Travel Allowed?</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-mono font-bold text-green-600">CNF</TableCell>
                                        <TableCell>Confirmed</TableCell>
                                        <TableCell>✅ Yes</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-mono font-bold text-yellow-600">RAC</TableCell>
                                        <TableCell>Reservation Against Cancellation</TableCell>
                                        <TableCell>⚠️ Yes (Shared Seat)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-mono font-bold text-red-600">WL / GNWL</TableCell>
                                        <TableCell>Waitlisted</TableCell>
                                        <TableCell>❌ No (If mostly WL)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-mono font-bold text-blue-600">PQWL</TableCell>
                                        <TableCell>Pooled Quota Waitlist</TableCell>
                                        <TableCell>❌ Hard to Confirm</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* SECTION 2: FLIGHT PNR */}
                    <section>
                        <h2 className="text-3xl font-bold text-center mb-8">How to Check Flight PNR Status</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { airline: 'IndiGo', link: 'https://www.goindigo.in/', code: '6E' },
                                { airline: 'Air India', link: 'https://www.airindia.com/', code: 'AI' },
                                { airline: 'Vistara', link: 'https://www.airvistara.com/', code: 'UK' }
                            ].map(item => (
                                <Card key={item.airline} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            {item.airline} <Plane className="w-5 h-5 text-slate-400" />
                                        </CardTitle>
                                        <CardDescription>Airline Code: {item.code}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Visit the official website and enter your PNR (Booking Reference) and Last Name.
                                        </p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">Visit Website <ArrowRight className="w-3 h-3 ml-2" /></a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 3: CTA BLOCK */}
                    <div className="bg-orange-600 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold">Tired of Waiting Lists?</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">
                            Stop refreshing the PNR page every hour. Book your next trip with Rudraksh Safar for guaranteed bookings, premium assistance, and zero headaches.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" variant="secondary" className="bg-white text-orange-900 hover:bg-orange-50" asChild>
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700" asChild>
                                <Link to="/thailand-tour-packages">Explore Packages</Link>
                            </Button>
                        </div>
                    </div>

                    {/* SECTION 4: FAQ */}
                    <section className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Can I travel with a WL ticket?", a: "If you booked online (e-ticket), NO. Your ticket will be automatically cancelled and refunded. If you bought a counter ticket, you can legally board the general compartment." },
                                { q: "What does RAC mean?", a: "RAC means you have a confirmed seat but you have to share it with another passenger. You are allowed to board the train." },
                                { q: "How to check PNR status via SMS?", a: "SMS 'PNR <10-digit-number>' to 139 from your registered mobile number." }
                            ].map((faq, i) => (
                                <div key={i} className="border p-4 rounded-lg bg-white dark:bg-slate-900">
                                    <h3 className="font-bold mb-2">{faq.q}</h3>
                                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CheckPNRStatus;
