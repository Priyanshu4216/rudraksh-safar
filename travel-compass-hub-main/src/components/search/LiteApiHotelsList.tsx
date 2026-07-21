import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    LiteAPI: any;
  }
}

interface LiteApiHotelsListProps {
  placeId?: string;
  rows?: number;
  hasSearchBar?: boolean;
}

const LiteApiHotelsList: React.FC<LiteApiHotelsListProps> = ({ 
  placeId = 'ChIJdd4hrwug2EcRmSrV3Vo6llI', // Default: London 
  rows = 2,
  hasSearchBar = false
}) => {
  const navigate = useNavigate();
  const initialized = useRef(false);

  useEffect(() => {
    if (!window.LiteAPI) {
      console.warn('LiteAPI SDK not found.');
      return;
    }

    // Ensure we only initialize the widget once
    if (!initialized.current) {
      initialized.current = true;
      
      try {
        // Ensure SDK is initialized
        if (!window.LiteAPI.isInitialized) {
          window.LiteAPI.init({
            domain: 'rudrakshsafar.nuitee.link',
            labelsOverride: {
              searchAction: 'Find Luxury Hotels',
              placePlaceholderText: 'Where to next?',
            },
          });
          window.LiteAPI.isInitialized = true;
        }

        window.LiteAPI.HotelsList.create({
          selector: '#liteapi-hotels-list',
          placeId: placeId,
          primaryColor: '#D4AF37', // Gold color to match our luxury theme
          hasSearchBar: hasSearchBar,
          rows: rows,
          onHotelClick: (data: any) => {
            console.log('LiteAPI Hotel clicked:', data);
            
            // Navigate to our internal hotel details page
            const params = new URLSearchParams();
            if (data.checkin) params.set('chkIn', data.checkin);
            if (data.checkout) params.set('chkOut', data.checkout);
            if (data.adults) params.set('guestInfo', data.adults.toString());
            
            // Our application uses /hotel/:hotelId route
            const hotelId = data.hotel?.id || data.hotel?.hotelId;
            if (hotelId) {
              navigate(`/hotel/${hotelId}?${params.toString()}`);
            }
          },
        });
      } catch (err) {
        console.error("Failed to initialize LiteAPI Hotels List:", err);
      }
    }
  }, [navigate, placeId, rows, hasSearchBar]);

  return (
    <div className="w-full">
      <div id="liteapi-hotels-list" className="w-full text-black"></div>
    </div>
  );
};

export default LiteApiHotelsList;
