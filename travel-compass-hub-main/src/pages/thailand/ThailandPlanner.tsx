import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Plane, PartyPopper, Heart, Users, Briefcase, MapPin, IndianRupee, Send, CheckCircle2 } from 'lucide-react';
import SmartImage from '@/components/SmartImage';

const ThailandPlanner = () => {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        vibe: [] as string[],
        budget: 40000,
        days: 5,
        pax: 2,
        name: '',
        phone: ''
    });

    const vibes = [
        { id: 'party', label: 'Nightlife & Party', icon: <PartyPopper className="w-5 h-5 text-purple-500" /> },
        { id: 'honeymoon', label: 'Honeymoon', icon: <Heart className="w-5 h-5 text-red-500" /> },
        { id: 'family', label: 'Family Fun', icon: <Users className="w-5 h-5 text-blue-500" /> },
        { id: 'adventure', label: 'Adventure', icon: <MapPin className="w-5 h-5 text-green-500" /> },
        { id: 'shopping', label: 'Shopping', icon: <Briefcase className="w-5 h-5 text-orange-500" /> }
    ];

    const handleVibeToggle = (id: string) => {
        setFormData(prev => ({
            ...prev,
            vibe: prev.vibe.includes(id)
                ? prev.vibe.filter(v => v !== id)
                : [...prev.vibe, id]
        }));
    };

    // Analytics Helper
    const trackEvent = (eventName: string, data: any) => {
        // In production, send this to GA4 / Facebook Pixel
        console.log(`[Analytics] ${eventName}:`, data);

        // Example: if (window.gtag) window.gtag('event', eventName, data);
    };

    const nextStep = () => {
        if (step === 1) trackEvent('step_1_complete', { vibe: formData.vibe });
        if (step === 2) trackEvent('step_2_complete', { budget: formData.budget, days: formData.days, pax: formData.pax });
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        trackEvent('conversion_whatsapp_click', formData);

        // Construct WhatsApp Message
        const message = `*New Thailand Trip Inquiry* 🇹🇭\n\n` +
            `👤 Name: ${formData.name}\n` +
            `📱 Phone: ${formData.phone}\n` +
            `✨ Vibe: ${formData.vibe.join(', ')}\n` +
            `💰 Budget: ₹${formData.budget} / person\n` +
            `🗓 Days: ${formData.days}\n` +
            `👥 Pax: ${formData.pax}\n\n` +
            `Generated via Thailand Planner`;

        const waLink = `https://wa.me/919406182174?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');

        toast({
            title: "Request Sent!",
            description: "We are redirecting you to WhatsApp to finalize your quote.",
        });
    };

    return (
        <>
            <Helmet>
                <title>Plan Your Thailand Trip | Budget Calculator</title>
                <meta name="description" content="Calculate your Thailand trip cost. Customized packages for Bachelors, Couples, and Families from Raipur/Bhilai." />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 flex items-center justify-center">
                <div className="container max-w-2xl">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">

                        {/* HEADER */}
                        <div className="bg-orange-600 p-6 text-white text-center">
                            <h1 className="text-2xl font-bold font-serif">Thailand Trip Planner 🇹🇭</h1>
                            <p className="text-orange-100 text-sm">3 quick steps to your Thailand quote</p>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="h-1 bg-slate-100 dark:bg-slate-800">
                            <div
                                className="h-full bg-orange-500 transition-all duration-500"
                                style={{ width: `${(step / 3) * 100}%` }}
                            />
                        </div>

                        <div className="p-8">
                            {/* STEP 1: VIBE */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-8">
                                    <h2 className="text-xl font-bold mb-6 text-center">What's your trip vibe?</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {vibes.map((v) => (
                                            <div
                                                key={v.id}
                                                onClick={() => handleVibeToggle(v.id)}
                                                className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.vibe.includes(v.id)
                                                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 ring-1 ring-orange-500'
                                                    : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
                                                    }`}
                                            >
                                                {v.icon}
                                                <span className="font-medium">{v.label}</span>
                                                {formData.vibe.includes(v.id) && <CheckCircle2 className="w-4 h-4 text-orange-600 ml-auto" />}
                                            </div>
                                        ))}
                                    </div>
                                    <Button onClick={nextStep} className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg" disabled={formData.vibe.length === 0}>
                                        Next: Budget & Duration
                                    </Button>
                                </div>
                            )}

                            {/* STEP 2: BUDGET & DETAILS */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-8">
                                    <h2 className="text-xl font-bold mb-6 text-center">Customize your Trip</h2>

                                    <div className="space-y-8 mb-8">

                                        {/* BUDGET SLIDER */}
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <Label className="font-bold">Budget Per Person (Approx)</Label>
                                                <span className="text-orange-600 font-bold">₹{formData.budget.toLocaleString()}</span>
                                            </div>
                                            <Slider
                                                value={[formData.budget]}
                                                onValueChange={(val) => setFormData({ ...formData, budget: val[0] })}
                                                min={25000}
                                                max={100000}
                                                step={5000}
                                                className="py-4"
                                            />
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>₹25k (Budget)</span>
                                                <span>₹1L+ (Luxury)</span>
                                            </div>
                                        </div>

                                        {/* DURATION SLIDER */}
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <Label className="font-bold">Duration (Days)</Label>
                                                <span className="text-orange-600 font-bold">{formData.days} Days</span>
                                            </div>
                                            <Slider
                                                value={[formData.days]}
                                                onValueChange={(val) => setFormData({ ...formData, days: val[0] })}
                                                min={4}
                                                max={10}
                                                step={1}
                                                className="py-4"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <Label className="mb-2 block">Travelers</Label>
                                                <div className="flex items-center gap-2 border rounded-md p-2">
                                                    <Users className="w-4 h-4 text-slate-400" />
                                                    <Input
                                                        type="number"
                                                        value={formData.pax}
                                                        onChange={(e) => setFormData({ ...formData, pax: parseInt(e.target.value) })}
                                                        className="border-none p-0 h-auto focus-visible:ring-0"
                                                        min={1}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex gap-4">
                                        <Button onClick={prevStep} variant="outline" className="flex-1">Back</Button>
                                        <Button onClick={nextStep} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">Next: Get Quote</Button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: CONTACT */}
                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-8">
                                    <h2 className="text-xl font-bold mb-2 text-center">Almost Done!</h2>
                                    <p className="text-center text-muted-foreground mb-6">Where should we send your custom itinerary?</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label>Your Name</Label>
                                            <Input
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>WhatsApp Number</Label>
                                            <Input
                                                required
                                                type="tel"
                                                placeholder="e.g. 9876543210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-3 text-sm text-green-800 dark:text-green-200 mt-4">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold mb-1">You will receive a PDF itinerary with flight options.</p>
                                                <p className="opacity-80">Handled by Rudraksh Safar — trusted travel agent in Bhilai since 2010.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <Button type="button" onClick={prevStep} variant="outline" className="flex-1">Back</Button>
                                            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                                                <Send className="w-4 h-4 mr-2" /> Get My Quote
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default ThailandPlanner;
