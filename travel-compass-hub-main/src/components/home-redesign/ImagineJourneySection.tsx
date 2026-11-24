import React, { useState } from 'react';
import { 
    MapPin, 
    Compass, 
    Calendar, 
    Users, 
    CircleDollarSign, 
    Check, 
    Sparkles, 
    ArrowRight, 
    Clock, 
    CheckCircle2, 
    X,
    MessageCircle,
    Hotel,
    Info,
    Copy,
    Printer,
    ShieldAlert,
    AlertCircle,
    Navigation,
    Utensils,
    Lightbulb,
    FileText,
    CalendarCheck,
    Plane,
    Heart,
    Sliders,
    Zap,
    Send,
    HelpCircle
} from 'lucide-react';
import { 
    TripRequest, 
    GeneratedItinerary, 
    generateItinerary, 
    buildWhatsAppInquiryUrl,
    formatItineraryForSharing
} from '@/services/aiTripPlanner.service';
import { printItineraryPdf } from '@/services/pdfGenerator.service';
import { AiRateLimiter } from '@/lib/aiSafety';
import { toast } from '@/hooks/use-toast';

interface DestinationPreset {
    id: string;
    label: string;
    dest: string;
    badge: string;
    defaultDays: number;
    defaultStyle: string;
}

const DESTINATION_PRESETS: DestinationPreset[] = [
    { id: 'kashmir', label: 'Kashmir & Gulmarg', dest: 'Kashmir Valley & Gulmarg', badge: '❄️ Snow & Shikara', defaultDays: 6, defaultStyle: 'Comfort (4-Star)' },
    { id: 'chardham', label: 'Char Dham & Kedarnath', dest: 'Kedarnath & Badrinath', badge: '🕉️ Sacred Darshan', defaultDays: 9, defaultStyle: 'Comfort (4-Star)' },
    { id: 'kumbh', label: 'Maha Kumbh 2027', dest: 'Haridwar Kumbh Mela 2027', badge: '🚩 Royal Amrit Snan', defaultDays: 4, defaultStyle: 'Comfort (4-Star)' },
    { id: 'dubai', label: 'Dubai Luxury', dest: 'Dubai & Desert Safari', badge: '🏙️ Luxury & Shopping', defaultDays: 5, defaultStyle: 'Luxury (5-Star / Villa)' },
    { id: 'bali', label: 'Bali Tropical', dest: 'Bali & Ubud Villas', badge: '🌴 Private Pool Villa', defaultDays: 6, defaultStyle: 'Luxury (5-Star / Villa)' },
    { id: 'kerala', label: 'Kerala Backwaters', dest: 'Kerala Backwaters & Munnar', badge: '🛶 Houseboat & Tea Hills', defaultDays: 5, defaultStyle: 'Comfort (4-Star)' },
    { id: 'manali', label: 'Manali & Kasol', dest: 'Manali, Solang & Kasol', badge: '🏔️ Mountain Escape', defaultDays: 6, defaultStyle: 'Comfort (4-Star)' },
    { id: 'goa', label: 'Goa Coastal', dest: 'Goa Beaches & Heritage', badge: '🏖️ Sun, Sand & Cafes', defaultDays: 4, defaultStyle: 'Comfort (4-Star)' },
    { id: 'bastar', label: 'Bastar Tribal Circuit', dest: 'Bastar & Chitrakote Falls, CG', badge: '🦚 Chhattisgarh Pride', defaultDays: 4, defaultStyle: 'Comfort (4-Star)' },
    { id: 'thailand', label: 'Thailand Explorer', dest: 'Phuket & Bangkok Island Tour', badge: '🏝️ Beaches & Nightlife', defaultDays: 6, defaultStyle: 'Comfort (4-Star)' }
];

const TRAVEL_MONTHS = [
    "Next 30 Days (Immediate)",
    "April - June (Summer Holidays)",
    "July - September (Monsoon & Valleys)",
    "October - December (Festive & Winter)",
    "Jan - March 2027 (Kumbh Season)",
    "Flexible / Just Exploring"
];

const SPECIAL_ADDONS = [
    { id: 'jain-veg', label: 'Pure Veg / Jain Meals Only', icon: '🥗' },
    { id: 'senior-care', label: 'Senior Care (Ground Floor & Slow Pace)', icon: '🛡️' },
    { id: 'candlelight', label: 'Romantic Candlelight Dinner Setup', icon: '🕯️' },
    { id: 'vip-darshan', label: 'VIP Darshan / Helicopter Coordination', icon: '🚁' },
    { id: 'airport-chauffeur', label: 'Doorstep Raipur/Bhilai Chauffeur', icon: '🚗' },
    { id: 'photo-spots', label: 'Curated Hidden Photography Spots', icon: '📸' }
];

const VIBE_OPTIONS = [
    { label: "Culture & heritage", icon: "🏛️" },
    { label: "Nature & scenic", icon: "🌲" },
    { label: "Adventure & sports", icon: "🧗" },
    { label: "Foodie & gourmet", icon: "🥘" },
    { label: "Beach & islands", icon: "🏖️" },
    { label: "Family bonding", icon: "👨‍👩‍👧‍👦" },
    { label: "Romance & honeymoon", icon: "💍" },
    { label: "Wellness & spirituality", icon: "🕉️" }
];

type ModalTab = 'timeline' | 'overview' | 'cost' | 'advisory';

export const ImagineJourneySection: React.FC = () => {
    // Form state
    const [destination, setDestination] = useState('Kashmir Valley & Gulmarg');
    const [startingCity, setStartingCity] = useState('Bhilai / Raipur (Chhattisgarh)');
    const [days, setDays] = useState<number>(6);
    const [travellers, setTravellers] = useState<number>(2);
    const [style, setStyle] = useState('Comfort (4-Star)');
    const [pace, setPace] = useState<'Relaxed' | 'Balanced' | 'Packed'>('Balanced');
    const [travelMonth, setTravelMonth] = useState('Next 30 Days (Immediate)');
    const [selectedVibes, setSelectedVibes] = useState<string[]>(['Culture & heritage', 'Nature & scenic']);
    const [selectedAddons, setSelectedAddons] = useState<string[]>(['airport-chauffeur']);
    const [includeFlight, setIncludeFlight] = useState<boolean>(true);
    const [customNotes, setCustomNotes] = useState<string>('');
    const [showMobileAdvanced, setShowMobileAdvanced] = useState<boolean>(false);

    // Modal & generation state
    const [isLoading, setIsLoading] = useState(false);
    const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<ModalTab>('timeline');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const applyPreset = (preset: DestinationPreset) => {
        setDestination(preset.dest);
        setDays(preset.defaultDays);
        setStyle(preset.defaultStyle);
        toast({
            title: `Preset Applied: ${preset.label}`,
            description: `${preset.defaultDays} Days • ${preset.defaultStyle}`,
        });
    };

    const toggleVibe = (vibe: string) => {
        setSelectedVibes(prev => 
            prev.includes(vibe) ? prev.filter(v => v !== vibe) : [...prev, vibe]
        );
    };

    const toggleAddon = (addonId: string) => {
        setSelectedAddons(prev =>
            prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        // Pre-check rate limit
        const rateCheck = AiRateLimiter.checkLimit();
        if (!rateCheck.allowed) {
            setErrorMessage(rateCheck.errorMessage || 'Please wait a moment before requesting another itinerary.');
            toast({
                title: "Safety Rate Limit",
                description: rateCheck.errorMessage,
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);
        setModalOpen(true);
        setActiveTab('timeline');

        const tripData: TripRequest = {
            packageChoice: `Custom ${destination} Journey`,
            destination: destination || 'Custom Tour',
            startingCity: startingCity || 'Bhilai / Raipur',
            days: Number(days) || 6,
            travellers: Number(travellers) || 2,
            style,
            pace,
            vibes: selectedVibes,
            travelMonth,
            specialRequirements: selectedAddons.map(id => SPECIAL_ADDONS.find(a => a.id === id)?.label || id),
            includeFlight,
            notes: customNotes
        };

        try {
            const result = await generateItinerary(tripData);
            setItinerary(result);
        } catch (error: any) {
            console.error('Failed to generate trip:', error);
            setErrorMessage(error?.message || 'Generation failed. Please try again or chat directly on WhatsApp.');
        } finally {
            setIsLoading(false);
        }
    };

    const currentTripData: TripRequest = {
        packageChoice: `Custom ${destination}`,
        destination: destination || 'Custom Destination',
        startingCity: startingCity || 'My City',
        days: Number(days) || 6,
        travellers: Number(travellers) || 2,
        style,
        pace,
        vibes: selectedVibes,
        travelMonth,
        specialRequirements: selectedAddons.map(id => SPECIAL_ADDONS.find(a => a.id === id)?.label || id),
        includeFlight,
        notes: customNotes
    };

    const handleWhatsAppDirect = () => {
        const url = buildWhatsAppInquiryUrl(currentTripData, itinerary || undefined);
        window.open(url, '_blank');
    };

    const handleCopyItinerary = () => {
        if (!itinerary) return;
        const formatted = formatItineraryForSharing(itinerary, currentTripData);
        navigator.clipboard.writeText(formatted);
        toast({
            title: "Itinerary Copied!",
            description: "Full day-by-day plan & budget copied to clipboard.",
        });
    };

    const handlePrintItinerary = () => {
        if (!itinerary) return;
        printItineraryPdf(itinerary, currentTripData);
        toast({
            title: "Generating Official PDF...",
            description: "Opening print & PDF export with Rudraksh Safar branding.",
        });
    };

    return (
        <section id="ai-planner" className="py-10 md:py-24 bg-gradient-to-b from-slate-50 via-orange-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 transition-colors scroll-mt-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/70 text-[#ea580c] dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs border border-orange-200/60 dark:border-orange-900/50">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                        <span>RUDRAKSH SAFAR • AI TRIP ARCHITECT</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                        Craft Your Dream Journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">30 Seconds</span>
                    </h2>
                    <p className="hidden sm:block text-sm md:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                        No generic packages. Set your rhythm, destinations, and dates—our intelligent engine drafts an on-ground day-by-day plan with transparent pricing, verified stays, and local secrets.
                    </p>
                </div>

                {/* Inspiration Chips Carousel */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-orange-500" />
                            Popular Inspirations (1-Click Fill)
                        </span>
                        <span className="text-xs text-slate-400">Swipe & Select</span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
                        {DESTINATION_PRESETS.map((p) => {
                            const isSelected = destination.toLowerCase().includes(p.id);
                            return (
                                <button
                                    type="button"
                                    key={p.id}
                                    onClick={() => applyPreset(p)}
                                    className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 snap-start border shrink-0 ${
                                        isSelected
                                            ? 'bg-orange-600 text-white border-orange-600 shadow-md scale-[1.02]'
                                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-slate-700'
                                    }`}
                                >
                                    <span>{p.badge}</span>
                                    <span>{p.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Rate Limit Alert */}
                {errorMessage && (
                    <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 flex items-center gap-3 text-sm">
                        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="flex-1">{errorMessage}</span>
                        <button 
                            type="button" 
                            onClick={handleWhatsAppDirect}
                            className="font-bold underline text-amber-900 dark:text-amber-100 hover:text-orange-600"
                        >
                            Chat on WhatsApp
                        </button>
                    </div>
                )}

                {/* Main Interactive Studio Form */}
                <form 
                    onSubmit={handleSubmit}
                    className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-5 sm:space-y-8"
                >
                    {/* SECTION 1: DESTINATION & HUB */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/80 text-[#ea580c] font-black text-xs flex items-center justify-center">1</span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs sm:text-sm">
                                Where & When are you traveling?
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Destination */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                                    Destination
                                </label>
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="e.g. Kashmir, Dubai, Char Dham, Kerala"
                                    className="w-full bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-slate-700/80 focus:border-orange-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all"
                                    required
                                />
                                <p className="text-[11px] text-slate-400">Can be a city, state, or international country</p>
                            </div>

                            {/* Starting City */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <Compass className="w-3.5 h-3.5 text-orange-600" />
                                    Departure City / Hub
                                </label>
                                <input
                                    type="text"
                                    value={startingCity}
                                    onChange={(e) => setStartingCity(e.target.value)}
                                    placeholder="e.g. Bhilai / Raipur / Delhi"
                                    className="w-full bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-slate-700/80 focus:border-orange-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all"
                                />
                                <p className="text-[11px] text-slate-400">We coordinate connections from your nearest airport/railway</p>
                            </div>

                            {/* Travel Month */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                                    Preferred Travel Window
                                </label>
                                <div className="relative">
                                    <select
                                        value={travelMonth}
                                        onChange={(e) => setTravelMonth(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-slate-900 dark:text-white text-sm font-semibold appearance-none border border-slate-200 dark:border-slate-700/80 focus:border-orange-500 focus:outline-none cursor-pointer pr-9"
                                    >
                                        {TRAVEL_MONTHS.map(m => (
                                            <option key={m} value={m}>{m}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-400">Allows climate-optimized sight timing</p>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: DURATION, TRAVELLERS & STYLE */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/80 text-[#ea580c] font-black text-xs flex items-center justify-center">2</span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs sm:text-sm">
                                Duration, Guests & Stay Classification
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
                            {/* Days */}
                            <div className="col-span-1 lg:col-span-3 space-y-1.5">
                                <label className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <span>Duration (Days)</span>
                                    <span className="text-orange-600">{days - 1} Nights</span>
                                </label>
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80">
                                    <button 
                                        type="button"
                                        onClick={() => setDays(Math.max(1, days - 1))}
                                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 font-bold text-lg text-slate-800 dark:text-white shadow-xs hover:bg-orange-50 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="flex-1 text-center font-extrabold text-base text-slate-900 dark:text-white">
                                        {days} Days
                                    </span>
                                    <button 
                                        type="button"
                                        onClick={() => setDays(Math.min(14, days + 1))}
                                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 font-bold text-lg text-slate-800 dark:text-white shadow-xs hover:bg-orange-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Travellers */}
                            <div className="col-span-1 lg:col-span-3 space-y-1.5">
                                <label className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    <span>Total Travellers</span>
                                    <span className="text-orange-600">{travellers > 1 ? 'Group' : 'Solo'}</span>
                                </label>
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80">
                                    <button 
                                        type="button"
                                        onClick={() => setTravellers(Math.max(1, travellers - 1))}
                                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 font-bold text-lg text-slate-800 dark:text-white shadow-xs hover:bg-orange-50 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="flex-1 text-center font-extrabold text-base text-slate-900 dark:text-white">
                                        {travellers} Person{travellers > 1 ? 's' : ''}
                                    </span>
                                    <button 
                                        type="button"
                                        onClick={() => setTravellers(Math.min(30, travellers + 1))}
                                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 font-bold text-lg text-slate-800 dark:text-white shadow-xs hover:bg-orange-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Style Cards */}
                            <div className="col-span-2 lg:col-span-6 space-y-1.5">
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    Stay Classification & Comfort
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { label: 'Budget (3-Star)', tag: 'Value Stays' },
                                        { label: 'Comfort (4-Star)', tag: 'Recommended' },
                                        { label: 'Luxury (5-Star / Villa)', tag: 'Palace Stays' }
                                    ].map((s) => {
                                        const active = style === s.label;
                                        return (
                                            <button
                                                type="button"
                                                key={s.label}
                                                onClick={() => setStyle(s.label)}
                                                className={`p-2.5 rounded-2xl text-left border transition-all ${
                                                    active
                                                        ? 'bg-orange-50/80 dark:bg-orange-950/40 border-orange-500 shadow-sm'
                                                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300'
                                                }`}
                                            >
                                                <span className={`text-[10px] font-bold uppercase block ${active ? 'text-orange-600' : 'text-slate-400'}`}>
                                                    {s.tag}
                                                </span>
                                                <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white block mt-0.5 truncate">
                                                    {s.label.split(' ')[0]}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        
                        {/* Mobile Toggle for Advanced Preferences */}
                        <div className="md:hidden pt-1">
                            <button
                                type="button"
                                onClick={() => setShowMobileAdvanced(!showMobileAdvanced)}
                                className="w-full py-2.5 px-3.5 rounded-2xl bg-orange-50/80 dark:bg-slate-800/80 border border-orange-200 dark:border-slate-700 text-xs font-bold text-orange-700 dark:text-orange-300 flex items-center justify-between transition-colors shadow-xs"
                            >
                                <span className="flex items-center gap-2">
                                    <Sliders className="w-3.5 h-3.5 text-orange-600" />
                                    <span>{showMobileAdvanced ? 'Hide Advanced Options' : '+ Customize Vibes, Pace & Stays (Optional)'}</span>
                                </span>
                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white dark:bg-slate-700 shadow-xs">
                                    {showMobileAdvanced ? 'Less ▲' : 'More ▼'}
                                </span>
                            </button>
                        </div>

                        {/* Collapsible Wrapper for Extra Customizations on Mobile */}
                        <div className={showMobileAdvanced ? "space-y-5 animate-fade-in" : "hidden md:block space-y-5"}>
                        {/* Pace & Flight Toggle Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                            {/* Travel Pace */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    Travel Tempo / Pace
                                </label>
                                <div className="flex gap-2">
                                    {(['Relaxed', 'Balanced', 'Packed'] as const).map((mode) => {
                                        const active = pace === mode;
                                        return (
                                            <button
                                                type="button"
                                                key={mode}
                                                onClick={() => setPace(mode)}
                                                className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                                                    active
                                                        ? 'bg-[#ea580c] text-white border-orange-600 shadow-sm'
                                                        : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100'
                                                }`}
                                            >
                                                {mode}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Transport Coordination Checkbox */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                    Transport Coordination
                                </label>
                                <label className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 cursor-pointer hover:border-orange-300">
                                    <div className="flex items-center gap-2.5">
                                        <Plane className="w-4 h-4 text-orange-600" />
                                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            Include Chauffeur & Flight Coordination
                                        </span>
                                    </div>
                                    <input 
                                        type="checkbox"
                                        checked={includeFlight}
                                        onChange={(e) => setIncludeFlight(e.target.checked)}
                                        className="w-4 h-4 accent-orange-600 rounded cursor-pointer"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* SECTION 3: EXPERIENCES & SPECIAL ADD-ONS */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/80 text-[#ea580c] font-black text-xs flex items-center justify-center">3</span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs sm:text-sm">
                                Experiences, Vibes & Special Requests
                            </h3>
                        </div>

                        {/* Vibes Pills */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                What should this trip feel like? (Select Vibes)
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {VIBE_OPTIONS.map((v) => {
                                    const selected = selectedVibes.includes(v.label);
                                    return (
                                        <button
                                            type="button"
                                            key={v.label}
                                            onClick={() => toggleVibe(v.label)}
                                            className={`inline-flex items-center gap-1.5 py-2 px-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                                                selected
                                                    ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                                                    : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span>{v.icon}</span>
                                            <span>{v.label}</span>
                                            {selected && <Check className="w-3.5 h-3.5 ml-0.5 stroke-[3]" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Beneficial Addons / Dietary / Senior Care */}
                        <div className="space-y-2 pt-2">
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                Helpful Trip Add-ons (Optional)
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                                {SPECIAL_ADDONS.map((addon) => {
                                    const checked = selectedAddons.includes(addon.id);
                                    return (
                                        <div
                                            key={addon.id}
                                            onClick={() => toggleAddon(addon.id)}
                                            className={`p-3 rounded-2xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                                                checked
                                                    ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-slate-900 dark:text-white'
                                                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                                            }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span>{addon.icon}</span>
                                                <span>{addon.label}</span>
                                            </span>
                                            <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                                                checked ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-300'
                                            }`}>
                                                {checked && <Check className="w-3 h-3 stroke-[3]" />}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Special Custom Notes (Optional) */}
                        <div className="pt-2">
                            <input
                                type="text"
                                value={customNotes}
                                onChange={(e) => setCustomNotes(e.target.value)}
                                placeholder="Any special notes? (e.g. 10th anniversary trip, travelling with infant, pure Jain food)"
                                className="w-full bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 placeholder:text-slate-400 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* ACTION BAR */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                            
                            {/* Summary & Trust Badge */}
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-950/70 text-[#ea580c] flex items-center justify-center shrink-0 hidden sm:flex">
                                    <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                        Tailor-Made by Rudraksh Safar
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Instant day-by-day blueprint with hotels, sightseeing & 1-click printable PDF
                                    </p>
                                </div>
                            </div>

                            {/* DUAL ACTION BUTTONS */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                                {/* Primary AI Generator Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition-all transform active:scale-98 cursor-pointer disabled:opacity-60"
                                >
                                    <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
                                    <span>Build My Custom Itinerary</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                {/* Direct WhatsApp Consultation */}
                                <button
                                    type="button"
                                    onClick={handleWhatsAppDirect}
                                    className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                                >
                                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                                    <span>WhatsApp Specialist</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </form>

            </div>

            {/* AI Generated Itinerary & Professional Lead Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/65 backdrop-blur-sm animate-fade-in overflow-y-auto">
                    <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 my-6 overflow-hidden max-h-[92vh] flex flex-col">
                        
                        {/* Modal Top Brand Bar */}
                        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-orange-50 via-amber-50/30 to-white dark:from-slate-800/90 dark:via-slate-900 dark:to-slate-900 flex items-start justify-between">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ea580c] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Rudraksh Safar • Master Itinerary Blueprint
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    {isLoading ? 'Designing Your Bespoke Itinerary...' : (itinerary?.title || 'Your Custom Travel Plan')}
                                </h3>
                                {itinerary?.tagline && !isLoading && (
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                                        {itinerary.tagline}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-1.5">
                                {!isLoading && itinerary && (
                                    <>
                                        <button
                                            onClick={handleCopyItinerary}
                                            title="Copy full itinerary to clipboard"
                                            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                                        >
                                            <Copy className="w-4 h-4 text-orange-600" />
                                            <span className="hidden sm:inline">Copy</span>
                                        </button>
                                        <button
                                            onClick={handlePrintItinerary}
                                            title="Export or Print Official PDF with Rudraksh Safar Branding"
                                            className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/40 dark:hover:bg-orange-900/50 text-orange-700 dark:text-orange-300 border border-orange-200/80 dark:border-orange-800 transition-all flex items-center gap-1.5 text-xs font-bold shadow-xs active:scale-95"
                                        >
                                            <Printer className="w-4 h-4 text-[#ea580c]" />
                                            <span>PDF / Print</span>
                                        </button>
                                    </>
                                )}
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Tabs (Timeline, Overview, Cost & Hotels, Advisory) */}
                        {!isLoading && itinerary && (
                            <div className="flex border-b border-slate-100 dark:border-slate-800 px-6 sm:px-8 bg-slate-50/70 dark:bg-slate-900 overflow-x-auto scrollbar-none gap-2 sm:gap-6">
                                <button
                                    onClick={() => setActiveTab('timeline')}
                                    className={`py-3 sm:py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                        activeTab === 'timeline'
                                            ? 'border-[#ea580c] text-[#ea580c]'
                                            : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                    }`}
                                >
                                    <CalendarCheck className="w-4 h-4" /> Day-by-Day Timeline ({itinerary.days.length} Days)
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`py-3 sm:py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                        activeTab === 'overview'
                                            ? 'border-[#ea580c] text-[#ea580c]'
                                            : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                    }`}
                                >
                                    <FileText className="w-4 h-4" /> Route & Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('cost')}
                                    className={`py-3 sm:py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                        activeTab === 'cost'
                                            ? 'border-[#ea580c] text-[#ea580c]'
                                            : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                    }`}
                                >
                                    <CircleDollarSign className="w-4 h-4" /> Pricing & Hotels
                                </button>
                                <button
                                    onClick={() => setActiveTab('advisory')}
                                    className={`py-3 sm:py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                        activeTab === 'advisory'
                                            ? 'border-[#ea580c] text-[#ea580c]'
                                            : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                    }`}
                                >
                                    <Info className="w-4 h-4" /> Travel Advisory
                                </button>
                            </div>
                        )}

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
                            {isLoading ? (
                                <div className="py-20 text-center space-y-4">
                                    <div className="relative inline-block">
                                        <div className="w-16 h-16 rounded-full border-4 border-orange-200 border-t-[#ea580c] animate-spin mx-auto" />
                                        <Sparkles className="w-6 h-6 text-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Architecting Your Personalized Route...
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                                        Calibrating verified chauffeur transit, boutique property availability, and culinary stops for <strong>{currentTripData.destination}</strong> from <strong>{currentTripData.startingCity}</strong>.
                                    </p>
                                </div>
                            ) : itinerary ? (
                                <>
                                    {/* TAB 1: DAY-BY-DAY TIMELINE */}
                                    {activeTab === 'timeline' && (
                                        <div className="space-y-5">
                                            {itinerary.days.map((d) => (
                                                <div 
                                                    key={d.day}
                                                    className="border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 hover:border-orange-300 dark:hover:border-orange-800/60 transition-all bg-white dark:bg-slate-900 shadow-sm space-y-3.5"
                                                >
                                                    {/* Day Header */}
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                                        <div className="flex items-center gap-2.5">
                                                            <span className="px-3 py-1 rounded-xl bg-orange-600 text-white text-xs font-extrabold uppercase tracking-wide">
                                                                Day {d.day}
                                                            </span>
                                                            <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                                                                {d.title}
                                                            </h4>
                                                        </div>
                                                        {d.route && (
                                                            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                                                <Navigation className="w-3 h-3 text-orange-600" />
                                                                {d.route}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Time Breakdown Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                        <div className="bg-amber-50/50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-amber-100/60 dark:border-slate-700/50 text-xs">
                                                            <span className="font-bold text-amber-900 dark:text-amber-200 block mb-1">
                                                                🌅 Morning Schedule
                                                            </span>
                                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                                {d.morning}
                                                            </p>
                                                        </div>

                                                        <div className="bg-orange-50/40 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-orange-100/60 dark:border-slate-700/50 text-xs">
                                                            <span className="font-bold text-orange-950 dark:text-orange-200 block mb-1">
                                                                ☀️ Afternoon Schedule
                                                            </span>
                                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                                {d.afternoon}
                                                            </p>
                                                        </div>

                                                        <div className="bg-indigo-50/40 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-indigo-100/60 dark:border-slate-700/50 text-xs">
                                                            <span className="font-bold text-indigo-950 dark:text-indigo-200 block mb-1">
                                                                🌙 Sunset & Evening
                                                            </span>
                                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                                {d.evening}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Culinary & Stay Pills */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                                        {d.dinner && (
                                                            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300">
                                                                <Utensils className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                                                                <span><strong>Dinner Experience:</strong> {d.dinner}</span>
                                                            </div>
                                                        )}
                                                        {d.stay && (
                                                            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300">
                                                                <Hotel className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                                <span><strong>Stay:</strong> {d.stay}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Insider Tip Alert Box */}
                                                    {d.insiderTip && (
                                                        <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200 text-xs">
                                                            <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                            <div>
                                                                <strong>Insider Secret:</strong> {d.insiderTip}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Highlights Tags */}
                                                    {d.highlights && d.highlights.length > 0 && (
                                                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Highlights:</span>
                                                            {d.highlights.map((h, i) => (
                                                                <span key={i} className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg">
                                                                    ✓ {h}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* TAB 2: OVERVIEW & ROUTE */}
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6">
                                            {/* Overview Narrative */}
                                            <div className="bg-orange-50/60 dark:bg-slate-800/50 border border-orange-100 dark:border-slate-700 rounded-3xl p-6 sm:p-7 space-y-3">
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                    <FileText className="w-5 h-5 text-[#ea580c]" /> Journey Philosophy & Route Arc
                                                </h4>
                                                <div className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed space-y-3 font-normal whitespace-pre-line">
                                                    {itinerary.overview}
                                                </div>
                                            </div>

                                            {/* Route Milestones Map */}
                                            {itinerary.routeMap && itinerary.routeMap.length > 0 && (
                                                <div className="border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 space-y-3">
                                                    <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                                                        <Navigation className="w-4 h-4 text-[#ea580c]" /> Geographic Circuit Waypoints
                                                    </h5>
                                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                                        {itinerary.routeMap.map((hub, idx) => (
                                                            <React.Fragment key={idx}>
                                                                <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                                                                    {hub}
                                                                </span>
                                                                {idx < itinerary.routeMap.length - 1 && (
                                                                    <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                                                        <span><strong>Estimated Transit Distance:</strong> {itinerary.totalDistanceApprox}</span>
                                                        <span><strong>Ideal Climate Window:</strong> {itinerary.bestTimeToVisit}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* TAB 3: COST ESTIMATOR & HOTELS */}
                                    {activeTab === 'cost' && (
                                        <div className="space-y-6">
                                            {/* Tier Cards */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="border border-slate-200 dark:border-slate-800 rounded-3xl p-5 bg-white dark:bg-slate-900 text-center space-y-2">
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                                        Standard Boutique
                                                    </span>
                                                    <h5 className="text-xl font-extrabold text-slate-900 dark:text-white">
                                                        {itinerary.costEstimator?.budgetTier || '₹18,000 - ₹24,000'}
                                                    </h5>
                                                    <p className="text-xs text-slate-500">Quality 3-star rated boutique stays, private cab local transfers.</p>
                                                </div>

                                                <div className="border-2 border-orange-500 rounded-3xl p-5 bg-orange-50/50 dark:bg-slate-900 text-center space-y-2 relative shadow-md">
                                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#ea580c] text-white rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                                                        Selected Tier
                                                    </span>
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
                                                        Comfort Premium
                                                    </span>
                                                    <h5 className="text-xl font-extrabold text-orange-900 dark:text-white">
                                                        {itinerary.costEstimator?.comfortTier || '₹28,000 - ₹38,000'}
                                                    </h5>
                                                    <p className="text-xs text-slate-600 dark:text-slate-300">4-Star luxury resorts, executive SUV chauffeur, breakfast & dinner.</p>
                                                </div>

                                                <div className="border border-slate-200 dark:border-slate-800 rounded-3xl p-5 bg-white dark:bg-slate-900 text-center space-y-2">
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                                                        Palace / Luxury Villa
                                                    </span>
                                                    <h5 className="text-xl font-extrabold text-slate-900 dark:text-white">
                                                        {itinerary.costEstimator?.luxuryTier || '₹55,000+'}
                                                    </h5>
                                                    <p className="text-xs text-slate-500">5-Star heritage palaces, private pool villas & personalized butler service.</p>
                                                </div>
                                            </div>

                                            {/* Inclusions vs Exclusions */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="border border-emerald-200/80 dark:border-emerald-900/40 rounded-3xl p-5 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2.5">
                                                    <h5 className="font-bold text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Package Inclusions
                                                    </h5>
                                                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                                                        {(itinerary.costEstimator?.includes || []).map((inc, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-emerald-600 font-bold">✓</span>
                                                                <span>{inc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bg-slate-50/50 dark:bg-slate-800/30 space-y-2.5">
                                                    <h5 className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                        <AlertCircle className="w-4 h-4 text-slate-500" /> Standard Exclusions
                                                    </h5>
                                                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                                                        {(itinerary.costEstimator?.excludes || []).map((exc, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-slate-400 font-bold">✗</span>
                                                                <span>{exc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Curated Hotel Stays */}
                                            {itinerary.recommendedHotels && itinerary.recommendedHotels.length > 0 && (
                                                <div className="border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 space-y-3">
                                                    <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                                                        <Hotel className="w-4 h-4 text-[#ea580c]" /> Verified Partner Accommodations
                                                    </h5>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                        {itinerary.recommendedHotels.map((h, i) => (
                                                            <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 text-xs space-y-1">
                                                                <span className="font-extrabold text-slate-900 dark:text-white block text-sm">
                                                                    {h.name}
                                                                </span>
                                                                <span className="text-orange-600 dark:text-orange-400 font-bold block text-[11px]">
                                                                    {h.category} • {h.location}
                                                                </span>
                                                                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-tight pt-1">
                                                                    {h.highlight}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* TAB 4: TRAVEL ADVISORY */}
                                    {activeTab === 'advisory' && (
                                        <div className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bg-slate-50/50 dark:bg-slate-800/30 space-y-2.5">
                                                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                                                        <Info className="w-4 h-4 text-[#ea580c]" /> Essential Travel Guidelines
                                                    </h5>
                                                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2">
                                                        {(itinerary.travelAdvisories || []).map((adv, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-[#ea580c] font-bold">•</span>
                                                                <span>{adv}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bg-slate-50/50 dark:bg-slate-800/30 space-y-2.5">
                                                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mandatory Document Checklist
                                                    </h5>
                                                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2">
                                                        {(itinerary.documentRequirements || []).map((doc, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-emerald-600 font-bold">✓</span>
                                                                <span>{doc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-3">
                                                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                                                <span>
                                                    <strong>Rudraksh Safar Quality Assurance:</strong> All itineraries are custom-reviewed by our central operations desk. Real-time driver credentials, emergency SOS helpline, and live flight tracking are provisioned upon package finalization.
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : null}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                                <span className="font-semibold text-slate-700 dark:text-slate-200">
                                    {itinerary?.providerUsed || 'Rudraksh Safar Smart Planner'}
                                </span> • Generated {itinerary?.generatedAt || 'Today'}
                            </div>
                            <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handlePrintItinerary}
                                    className="px-4 py-2.5 rounded-xl border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950/40 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors"
                                >
                                    <Printer className="w-4 h-4 text-[#ea580c]" />
                                    <span>Download PDF</span>
                                </button>
                                <button
                                    onClick={handleWhatsAppDirect}
                                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-green-600/25 transition-all"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Chat with Expert on WhatsApp</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default ImagineJourneySection;
