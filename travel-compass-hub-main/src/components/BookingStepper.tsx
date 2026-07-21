import React from 'react';
import { Check } from 'lucide-react';

interface BookingStepperProps {
  currentStep: number;
}

export const BookingStepper: React.FC<BookingStepperProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Select Room' },
    { id: 2, name: 'Guest Details' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Confirmation' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="relative">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full" />
        
        {/* Active Line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        <div className="relative flex justify-between items-center">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            const isPending = currentStep < step.id;

            return (
              <div key={step.id} className="flex flex-col items-center relative z-10 w-24">
                {/* Step Circle */}
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 shadow-sm ${
                    isCompleted 
                      ? 'bg-blue-600 border-blue-100 text-white shadow-blue-200' 
                      : isActive 
                        ? 'bg-white border-blue-600 text-blue-600 scale-110 shadow-blue-100'
                        : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                </div>
                
                {/* Step Label */}
                <div className={`mt-3 text-center text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-blue-700' : isCompleted ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {step.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
