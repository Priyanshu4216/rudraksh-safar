import React from 'react';
import { AlertCircle, FileText, Info, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

type DisclaimerVariant = 'tour' | 'transport' | 'cruise' | 'visa' | 'guide' | 'local' | 'general';

interface DisclaimerSectionProps {
    variant: DisclaimerVariant;
    className?: string;
}

const DisclaimerSection = ({ variant, className }: DisclaimerSectionProps) => {
    const getContent = () => {
        switch (variant) {
            case 'tour':
                return {
                    title: "Important Tour Information",
                    text: "Tour itineraries, prices, and inclusions are subject to change based on availability and supplier policies. Images are for representation purposes only. Hotels and transport are provided by third-party vendors.",
                    icon: Info
                };
            case 'transport':
                return {
                    title: "Booking & Liability Disclaimer",
                    text: "Rudraksh Safar assists with ticket booking through authorized platforms or suppliers. We are not responsible for delays, cancellations, schedule changes, or service quality issues caused by transport providers (Airlines, Railways, Bus Operators).",
                    icon: AlertCircle
                };
            case 'cruise':
                return {
                    title: "Cruise Booking Disclaimer",
                    text: "Cruise line names are mentioned for informational purposes only. Rudraksh Safar is not an official partner or representative of any cruise line unless explicitly stated. Cruise itineraries, onboard services, and inclusions are controlled by cruise operators and may change without notice.",
                    icon: FileText
                };
            case 'visa':
                return {
                    title: "Visa Approval Disclaimer",
                    text: "Visa approval is solely at the discretion of the respective embassy or consulate. Rudraksh Safar acts only as a facilitator and does not guarantee visa approval. We are not responsible for visa rejections, delays, or financial losses incurred due to rejection.",
                    icon: ShieldAlert
                };
            case 'guide':
                return {
                    title: "General Information",
                    text: "The information provided in this guide is for general awareness only and may change without notice. Please verify official rules and regulations before travelling.",
                    icon: Info
                };
            case 'local':
                return {
                    title: "Service Availability",
                    text: "Local assistance is provided through remote and appointment-based support. Physical visit availability may vary. Please contact us to schedule an appointment.",
                    icon: Info
                };
            default:
                return {
                    title: "Legal Disclaimer",
                    text: "Rudraksh Safar provides travel planning and booking assistance. Prices, availability, and services depend on third-party providers.",
                    icon: Info
                };
        }
    };

    const content = getContent();
    const Icon = content.icon;

    return (
        <section className={cn("py-8", className)}>
            <div className="container mx-auto px-4">
                <div className="bg-muted/30 border border-muted rounded-xl p-6 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 shrink-0 mt-0.5 opacity-70" />
                        <div>
                            <h4 className="font-semibold text-foreground mb-1">{content.title}</h4>
                            <p className="leading-relaxed opacity-90">{content.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisclaimerSection;
