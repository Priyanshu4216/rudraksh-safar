import React, { useState } from 'react';
import { Download, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadMagnetCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    magnetType?: 'itinerary' | 'checklist' | 'guide';
}

const LeadMagnetCTA = ({
    title = "Download the Ultimate Packing Checklist",
    description = "Get our exclusive PDF guide for Indian tourists traveling abroad. Avoid luggage fees and visa hassles.",
    buttonText = "Unlock PDF Guide",
    magnetType = 'checklist'
}: LeadMagnetCTAProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call to save lead
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // In a real app, this would trigger a WhatsApp API message or email dispatch
            // For now, we simulate providing the resource
            window.open('https://wa.me/919406182174?text=' + encodeURIComponent(`Hi! I just unlocked the ${magnetType} from your website. Can you send me the PDF?`), '_blank');
        }, 800);
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center my-10 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">Success!</h3>
                <p className="text-green-700">Check your WhatsApp. Our team is sending the resource directly to your phone.</p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden bg-navy-deep rounded-2xl p-8 md:p-12 my-10 shadow-xl border border-gold/20">
            {/* Background pattern */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl mix-blend-screen"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                    <div className="flex items-center gap-2 mb-4 text-gold">
                        <Lock className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-wider uppercase">Gated Content</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-3">{title}</h3>
                    <p className="text-white/80 leading-relaxed mb-6 font-light">
                        {description}
                    </p>
                    <ul className="space-y-2 mb-2">
                        <li className="flex items-center gap-2 text-sm text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-gold" /> Delivered Instantly to WhatsApp
                        </li>
                        <li className="flex items-center gap-2 text-sm text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-gold" /> Completely Free
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Your WhatsApp Number
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50">+91</span>
                                <input
                                    id="lead-phone"
                                    type="tel"
                                    required
                                    pattern="[0-9]{10}"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                    placeholder="9876543210"
                                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting || phone.length !== 10}
                            className="bg-gold hover:bg-gold-light text-navy-deep font-bold py-6 text-base w-full flex items-center justify-center transition-transform hover:scale-[1.02]"
                        >
                            {isSubmitting ? 'Processing...' : (
                                <>
                                    <Download className="w-5 h-5 mr-2" />
                                    {buttonText}
                                </>
                            )}
                        </Button>
                        <p className="text-xs text-center text-gray-400 mt-2">
                            We never spam. Your number is secure.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetCTA;
