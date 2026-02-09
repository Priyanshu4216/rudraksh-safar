import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Search, Loader2, CheckCircle2, Clock, Car, Hotel } from 'lucide-react';
import { bookingStatusSteps, supportContacts } from '@/data/booking/resources';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const YatraStatus = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [formData, setFormData] = useState({ mobile: '', pnr: '' });

    // Mock Current Status Index (0 to 3)
    // 0: Confirmed, 1: Hotels, 2: Transport, 3: Ready
    const currentStatusIndex = 2; // Simulating "Transport Assigned"

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            if (formData.mobile.length < 10) {
                toast({
                    variant: "destructive",
                    title: "Invalid Input",
                    description: "Please enter a valid mobile number.",
                });
                return;
            }
            setShowStatus(true);
            toast({
                title: "Status Retrieved",
                description: "Showing current trip status for recent booking.",
            });
        }, 1500);
    };

    return (
        <>
            <Helmet>
                <title>Check Booking Status | Rudraksh Safar</title>
                <meta name="description" content="Track your Char Dham or Thailand trip status. See hotel confirmations, driver details, and permit status live." />
            </Helmet>

            <Navbar />

            <main className="min-h-[80vh] bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-2xl space-y-8">

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-serif font-bold">Track Your Yatra</h1>
                        <p className="text-muted-foreground">See exactly what's happening with your booking.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">

                        {!showStatus ? (
                            <form onSubmit={handleSearch} className="space-y-6 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4">
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
                                    <Label>Booking Reference (Optional)</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. RS-2026-XYZ"
                                        value={formData.pnr}
                                        onChange={(e) => setFormData({ ...formData, pnr: e.target.value })}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg" disabled={isLoading}>
                                    {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
                                    Check Status
                                </Button>
                            </form>
                        ) : (
                            <div className="animate-in fade-in zoom-in duration-500">
                                <div className="flex justify-between items-center mb-8 border-b pb-4">
                                    <div>
                                        <h2 className="text-xl font-bold">Booking #RS-8821</h2>
                                        <p className="text-sm text-muted-foreground">Guest: Anjali Singh | Trip: Char Dham Yatra</p>
                                    </div>
                                    <Button onClick={() => setShowStatus(false)} variant="outline" size="sm">Back</Button>
                                </div>

                                {/* TIMELINE */}
                                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                                    {bookingStatusSteps.map((step, index) => {
                                        const isCompleted = index <= currentStatusIndex;
                                        const isCurrent = index === currentStatusIndex;
                                        const Icon = step.icon;

                                        return (
                                            <div key={step.id} className={cn(
                                                "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
                                                isCompleted ? "opacity-100" : "opacity-50 grayscale"
                                            )}>
                                                {/* Icon Bubble */}
                                                <div className={cn(
                                                    "flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 bg-white dark:bg-slate-900 transition-all duration-500",
                                                    isCompleted ? `border-${step.color.split('-')[1]}-500 text-${step.color.split('-')[1]}-600` : "border-slate-300 text-slate-400",
                                                    isCurrent && "ring-4 ring-orange-100 scale-110"
                                                )}>
                                                    <Icon className="w-5 h-5" />
                                                </div>

                                                {/* Content Card */}
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <h3 className="font-bold text-slate-900 dark:text-slate-100">{step.label}</h3>
                                                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                                    {isCurrent && (
                                                        <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-1 rounded-full animate-pulse">
                                                            Current Stage
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-12 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl text-center">
                                    <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">Need help with your booking?</p>
                                    <div className="flex justify-center gap-4">
                                        <Button variant="outline" className="bg-white" asChild>
                                            <a href={`tel:${supportContacts.support.phone}`}>Call Support</a>
                                        </Button>
                                        <Button variant="outline" className="bg-white" asChild>
                                            <Link to="/download-ticket">Download Ticket</Link>
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default YatraStatus;
