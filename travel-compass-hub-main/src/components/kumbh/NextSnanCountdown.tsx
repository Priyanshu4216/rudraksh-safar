import React, { useState, useEffect } from 'react';
import { SNAN_DATES_2027 } from '@/data/kumbh/kumbh2027';
import { Clock, Sparkles } from 'lucide-react';

interface NextSnanCountdownProps {
  lang?: 'en' | 'hi';
}

export const NextSnanCountdown: React.FC<NextSnanCountdownProps> = ({ lang = 'en' }) => {
  const isHi = lang === 'hi';
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [targetSnan, setTargetSnan] = useState(SNAN_DATES_2027[0]);

  useEffect(() => {
    // Find next upcoming snan date based on current time
    const now = new Date();
    const upcoming = SNAN_DATES_2027.find((s) => new Date(`${s.dateISO}T04:00:00+05:30`) > now) || SNAN_DATES_2027[0];
    setTargetSnan(upcoming);

    const targetTime = new Date(`${upcoming.dateISO}T04:00:00+05:30`).getTime();

    const updateCountdown = () => {
      const diff = targetTime - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 md:p-6 my-6 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
        <Sparkles className="w-3.5 h-3.5" />
        {isHi ? "आगामी पावन स्नान की उलटी गिनती" : "Countdown to Next Holy Snan"}
      </div>

      <h3 className="text-lg md:text-xl font-bold font-serif text-foreground mb-4">
        {isHi ? targetSnan.occasionHi : targetSnan.occasionEn} ({targetSnan.dateISO})
      </h3>

      <div className="flex items-center justify-center gap-3 md:gap-6 text-foreground font-mono">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.days}</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase">{isHi ? "दिन" : "Days"}</span>
        </div>
        <span className="text-xl md:text-3xl font-light text-muted-foreground">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.hours}</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase">{isHi ? "घंटे" : "Hours"}</span>
        </div>
        <span className="text-xl md:text-3xl font-light text-muted-foreground">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase">{isHi ? "मिनट" : "Mins"}</span>
        </div>
        <span className="text-xl md:text-3xl font-light text-muted-foreground">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase">{isHi ? "सेकंड" : "Secs"}</span>
        </div>
      </div>
    </div>
  );
};
