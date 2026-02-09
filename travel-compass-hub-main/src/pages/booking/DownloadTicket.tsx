import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { FileDown, Search, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supportContacts } from '@/data/booking/resources';

const DownloadTicket = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState<'search' | 'result'>('search');
    const [formData, setFormData] = useState({ mobile: '', pnr: '' });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API Call
        setTimeout(() => {
            setIsLoading(false);
            if (formData.mobile.length < 10) {
                toast({
                    variant: "destructive",
                    title: "Invalid Mobile Number",
                    description: "Please enter a valid 10-digit mobile number.",
                });
                return;
            }
            // Mock Success
            setStep('result');
            toast({
                title: "Booking Found!",
                description: "Your ticket follows below.",
            });
        }, 1500);
    };

    const handleDownload = () => {
        toast({
            title: "Downloading...",
            description: "Your PDF ticket is being generated.",
        });
        // Mock download - in real app, this would trigger a blob download
    };

    return (
        <>
            <Helmet>
                <title>Download Ticket | Rudraksh Safar</title>
                <meta name="description" content="Download your confirmed tour ticket, hotel vouchers, and itinerary. Enter your PNR or registered mobile number." />
            </Helmet>

            <Navbar />

            <main className="min-h-[80vh] bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md space-y-8">

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-serif font-bold">Manage Your Booking</h1>
                        <p className="text-muted-foreground">Enter your details to retrieve your ticket & vouchers.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">

                        {step === 'search' && (
                            <form onSubmit={handleSearch} className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                                <div className="space-y-2">
                                    <Label>Registered Mobile Number</Label>
                                    <Input
                                        type="tel"
                                        placeholder="e.g. 9876543210"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Booking ID / PNR (Optional)</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. RS-2026-XYZ"
                                        value={formData.pnr}
                                        onChange={(e) => setFormData({ ...formData, pnr: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg" disabled={isLoading}>
                                    {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
                                    Find My Ticket
                                </Button>

                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 text-sm text-blue-800 dark:text-blue-200">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p>Can't find your booking? Call support at <span className="font-bold">{supportContacts.support.phone}</span>.</p>
                                </div>
                            </form>
                        )}

                        {step === 'result' && (
                            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Booking Confirmed</h2>
                                    <p className="text-muted-foreground">Ref: {formData.pnr || 'RS-AG-BM-01'}</p>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Guest:</span>
                                        <span className="font-bold">Valued Traveler</span>
                                    </div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Mobile:</span>
                                        <span className="font-bold">{formData.mobile}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Status:</span>
                                        <span className="text-green-600 font-bold bg-green-100 dark:bg-green-900/30 px-2 rounded-full text-xs py-0.5">Confirmed</span>
                                    </div>
                                </div>

                                <Button onClick={handleDownload} className="w-full" variant="outline" size="lg">
                                    <FileDown className="w-4 h-4 mr-2" /> Download E-Ticket (PDF)
                                </Button>

                                <Button onClick={() => setStep('search')} variant="ghost" size="sm" className="text-muted-foreground">
                                    Search Another Booking
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="text-center text-xs text-muted-foreground">
                        <p>Secure SSL Encrypted Connection</p>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DownloadTicket;
