import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LastUpdatedProps {
    date?: string; // e.g., "February 2026"
    className?: string;
}

const LastUpdated: React.FC<LastUpdatedProps> = ({ date, className }) => {
    // If no date provided, default to current month/year for freshness signal
    const displayDate = date || new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className={cn("flex items-center gap-2 text-sm text-muted-foreground opacity-80 my-4", className)}>
            <Clock className="w-3.5 h-3.5" />
            <span>Last updated: <span className="font-medium text-foreground">{displayDate}</span></span>
        </div>
    );
};

export default LastUpdated;
