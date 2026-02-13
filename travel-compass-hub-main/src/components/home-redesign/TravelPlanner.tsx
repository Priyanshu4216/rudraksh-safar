
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, Phone, Mail, User, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PLANNER_CONFIG } from "@/data/plannerData";
import { sanitizeUrlParam } from "@/lib/validation";
import { toast } from "@/hooks/use-toast";
import Confetti from 'react-confetti';

interface TravelPlannerProps {
    isOpen: boolean;
    onClose: () => void;
    initialType: string | null;
}

const PHONE_NUMBER = "919406182174";

const TravelPlanner = ({ isOpen, onClose, initialType }: TravelPlannerProps) => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [answers, setAnswers] = useState<any>({});
    const [leadDetails, setLeadDetails] = useState({ name: "", phone: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    // Reset when opened
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setAnswers({});
            setLeadDetails({ name: "", phone: "", email: "" });
            setDirection(0);
            setShowConfetti(false);
        }
    }, [isOpen, initialType]);

    const handleNext = (key: string, value: any) => {
        setAnswers((prev: any) => ({ ...prev, [key]: value }));
        setDirection(1);
        setTimeout(() => setStep((prev) => prev + 1), 300); // Slight delay for selection animation
    };

    const handleBack = () => {
        setDirection(-1);
        setStep((prev) => prev - 1);
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Construct WhatsApp Message
        const style = PLANNER_CONFIG.styles[initialType as keyof typeof PLANNER_CONFIG.styles]?.find((s: any) => s.id === answers.style)?.title || answers.style;
        const dest = PLANNER_CONFIG.destinations.find(d => d.id === answers.destination)?.title || answers.destination;
        const exp = answers.experience; // Assuming ID is stored, mapped would be better but keeping simple
        const budget = PLANNER_CONFIG.budgets.find(b => b.id === answers.budget)?.title || answers.budget;
        const time = PLANNER_CONFIG.timelines.find(t => t.id === answers.timeline)?.title || answers.timeline;

        const message = `*New Trip Planner Lead* 🚀\n\n*Traveler:* ${leadDetails.name}\n*Phone:* ${leadDetails.phone}\n*Email:* ${leadDetails.email}\n\n*Preferences:*\n- Type: ${initialType?.toUpperCase()}\n- Style: ${style}\n- Destination: ${dest}\n- Experience: ${exp}\n- Budget: ${budget}\n- Timeline: ${time}`;

        const url = `https://wa.me/${PHONE_NUMBER}?text=${sanitizeUrlParam(message)}`;
        window.open(url, '_blank');

        setIsSubmitting(false);
        setShowConfetti(true);
        toast({
            title: "Preferences Sent!",
            description: "Redirecting to WhatsApp to finalize your plan.",
        });

        // Close after a delay or show success screen
        setTimeout(() => {
            onClose();
        }, 4000);
    };

    if (!isOpen) return null;

    // Render Step Content
    const renderStep = () => {
        switch (step) {
            case 1: // Travel Style
                const styles = PLANNER_CONFIG.styles[initialType as keyof typeof PLANNER_CONFIG.styles] || [];
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-center mb-6 text-slate-900 dark:text-white">How do you prefer to travel?</h3>
                        <div className="flex md:grid md:grid-cols-1 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0 scrollbar-hide">
                            {styles.map((option: any) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleNext('style', option.id)}
                                    className="group relative flex-shrink-0 snap-center w-[85vw] md:w-full flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <option.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{option.title}</h4>
                                        <p className="text-sm text-slate-500 whitespace-normal">{option.desc}</p>
                                    </div>
                                    <ArrowRight className="hidden md:block ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 2: // Destination Type
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-center mb-6 text-slate-900 dark:text-white">Where are you planning to go?</h3>
                        <div className="flex md:grid md:grid-cols-1 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0 scrollbar-hide">
                            {PLANNER_CONFIG.destinations.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleNext('destination', option.id)}
                                    className="group relative flex-shrink-0 snap-center w-[85vw] md:w-full flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <option.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{option.title}</h4>
                                        <p className="text-sm text-slate-500 whitespace-normal">{option.desc}</p>
                                    </div>
                                    <ArrowRight className="hidden md:block ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 3: // Experiences (Simplified Logic)
                const experiences = answers.destination === 'india' ? PLANNER_CONFIG.experiences.india : PLANNER_CONFIG.experiences.international;
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-center mb-6 text-slate-900 dark:text-white">What kind of experience are you looking for?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {experiences.map((option: any) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleNext('experience', option.title)}
                                    className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-center h-32"
                                >
                                    <option.icon className="w-8 h-8 mb-3 text-slate-400 group-hover:text-secondary transition-colors" />
                                    <span className="font-medium text-slate-900 dark:text-white">{option.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4: // Budget
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-center mb-6 text-slate-900 dark:text-white">What is your budget preference?</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {PLANNER_CONFIG.budgets.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleNext('budget', option.id)}
                                    className="group relative flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-left"
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-secondary group-hover:text-white transition-colors font-serif font-bold text-slate-500 group-hover:text-white">
                                        ₹
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-slate-900 dark:text-white">{option.title}</h4>
                                        <p className="text-xs text-slate-500">{option.desc}</p>
                                    </div>
                                    <Check className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 text-secondary" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 5: // Timeline
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-center mb-6 text-slate-900 dark:text-white">When are you planning to travel?</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {PLANNER_CONFIG.timelines.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleNext('timeline', option.id)}
                                    className="group relative flex items-center p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-left"
                                >
                                    <span className="font-medium text-lg text-slate-900 dark:text-white">{option.title}</span>
                                    <ArrowRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 text-secondary" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 6: // Lead Capture
                return (
                    <div className="space-y-6">
                        {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2 text-slate-900 dark:text-white">Almost Done! 🎉</h3>
                            <p className="text-slate-500">Enter your details to get your personalized itinerary via WhatsApp.</p>
                        </div>

                        <form onSubmit={handleLeadSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input
                                        required
                                        placeholder="John Doe"
                                        className="pl-10"
                                        value={leadDetails.name}
                                        onChange={(e) => setLeadDetails({ ...leadDetails, name: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="pl-10"
                                        value={leadDetails.phone}
                                        onChange={(e) => setLeadDetails({ ...leadDetails, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email (Optional)</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="pl-10"
                                        value={leadDetails.email}
                                        onChange={(e) => setLeadDetails({ ...leadDetails, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" className="w-full btn-gold py-6 text-lg gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Get My Free Itinerary'}
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
                                    <ShieldCheck className="w-3 h-3" /> No spam. Your details are safe with us.
                                </p>
                            </div>
                        </form>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[5000] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-sm p-4 pt-20 md:pt-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                        {step > 1 && step < 6 && (
                            <button onClick={handleBack} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}
                        <div className="flex-1 px-4">
                            <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-secondary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(step / 6) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={step}
                                custom={direction}
                                initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {renderStep()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TravelPlanner;
