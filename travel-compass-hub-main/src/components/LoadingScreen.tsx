import { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Compass */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-secondary/20 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-pulse" />
            
            {/* Compass Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '3s' }}>
                <Compass className="w-10 h-10 text-secondary-foreground" />
              </div>
            </div>

            {/* Orbiting Dots */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-secondary rounded-full animate-orbit"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  animation: `orbit 2s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Rudraksh
          </span>
        </h1>
        <p className="text-secondary text-sm font-semibold tracking-[0.3em] uppercase mb-8">
          Safar
        </p>

        {/* Progress Bar */}
        <div className="w-48 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-secondary/70 transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Preparing your journey...
          </p>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-orbit {
          animation: orbit 2s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
