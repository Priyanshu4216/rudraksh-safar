import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldAlert, Info, Scale, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LegalDisclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Legal Disclaimer & Terms of Use | Rudraksh Safar</title>
                <meta name="description" content="Legal disclaimers regarding third-party services, pricing, visa approvals, and liability limitations for Rudraksh Safar." />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Legal Disclaimer</h1>
                        <p className="text-muted-foreground text-lg">Important information regarding our services and liabilities.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Service Intermediary */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    Service Intermediary Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                Rudraksh Safar acts as a travel planning and booking assistance provider. Actual services such as transportation (flights, trains, buses), accommodation (hotels, resorts), cruises, and activities are provided by independent third-party suppliers. We are not responsible for the acts, errors, omissions, representations, warranties, breaches, or negligence of any such suppliers or for any personal injuries, death, property damage, or other damages or expenses resulting there from.
                            </CardContent>
                        </Card>

                        {/* Pricing */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Scale className="w-6 h-6 text-green-600" />
                                    Pricing & Payments
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                All prices mentioned on the website are indicative and subject to change based on availability, season, and supplier policies. Final costs are confirmed only at the time of booking. Budget pricing depends on travel dates and selected services.
                            </CardContent>
                        </Card>

                        {/* No Guarantee */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <ShieldAlert className="w-6 h-6 text-amber-600" />
                                    No Guarantee Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                We do not guarantee availability, pricing, or approval of visas, permits, or services unless confirmed in writing. Visa approval is solely at the discretion of the respective embassy or consulate. Rudraksh Safar is not responsible for visa rejections or delays.
                            </CardContent>
                        </Card>

                        {/* Information Accuracy */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Info className="w-6 h-6 text-blue-600" />
                                    Information Accuracy
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                Information provided on this website including travel guides, blog posts, and tips is for general guidance only and may change without notice. It should not be considered as professional legal or medical advice.
                            </CardContent>
                        </Card>

                        {/* Trademark */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <FileText className="w-6 h-6 text-purple-600" />
                                    Trademarks & Copyrights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                All trademarks, logos, and brand names (including cruise lines, airlines, and hotel chains) belong to their respective owners and are used for identification purposes only. Rudraksh Safar is not an official partner or representative of these brands unless explicitly stated.
                            </CardContent>
                        </Card>

                        <div className="text-center text-sm text-muted-foreground pt-8">
                            All disputes are subject to Indian jurisdiction.
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default LegalDisclaimer;
