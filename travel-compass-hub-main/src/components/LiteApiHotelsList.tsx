import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface LiteApiHotelsListProps {
  primaryColor?: string;
  rows?: number;
}

export const LiteApiHotelsList: React.FC<LiteApiHotelsListProps> = ({ 
  primaryColor = '#2563eb', // Default to Tailwind blue-600
  rows = 4 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRendered = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Only render once in Strict Mode
    if (widgetRendered.current || !containerRef.current) return;
    
    // Ensure LiteAPI is available
    if (typeof window !== 'undefined' && (window as any).LiteAPI) {
      const LiteAPI = (window as any).LiteAPI;
      
      // Initialize if not already done
      if (!LiteAPI.isInitialized) {
        LiteAPI.init({
          domain: 'whitelabel.nuitee.link',
          labelsOverride: {
            searchAction: 'Search Hotels',
            placePlaceholderText: 'Where are you going?',
          }
        });
        LiteAPI.isInitialized = true;
      }

      // Create the widget
      LiteAPI.HotelsList.create({
        selector: '#liteapi-hotels-list',
        primaryColor: primaryColor,
        hasSearchBar: true,
        rows: rows,
        currency: 'INR',
        onHotelClick: (data: any) => {
          console.log('Hotel clicked:', data);
          
          // Navigate to hotel details page with all required data in state
          const hotelId = data.hotel?.id || data.hotel?.hotelId;
          if (hotelId) {
             navigate(`/hotels/${hotelId}`, {
               state: {
                 checkin: data.checkin,
                 checkout: data.checkout,
                 adults: data.adults,
                 children: data.children || [],
                 hotelInfo: data.hotel
               }
             });
          }
        }
      });
      
      widgetRendered.current = true;
    } else {
      console.error("LiteAPI SDK not loaded!");
    }
  }, [navigate, primaryColor, rows]);

  return (
    <div className="w-full">
      <div id="liteapi-hotels-list" ref={containerRef} style={{ width: '100%', minHeight: '600px' }}></div>
    </div>
  );
};
