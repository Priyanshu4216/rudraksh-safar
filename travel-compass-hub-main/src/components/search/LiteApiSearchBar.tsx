import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    LiteAPI: any;
  }
}

const LiteApiSearchBar: React.FC = () => {
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
        window.LiteAPI.init({
          domain: 'rudrakshsafar.nuitee.link',
          labelsOverride: {
            searchAction: 'Find Luxury Hotels',
            placePlaceholderText: 'Where to next?',
          },
        });

        window.LiteAPI.SearchBar.create({
          selector: '#liteapi-search-bar',
          primaryColor: '#D4AF37', // Gold color to match our luxury theme
          onSearchClick: (searchData: any) => {
            console.log('LiteAPI Search triggered:', searchData);
            
            // Map the widget payload to our application's search parameters
            const params = new URLSearchParams();
            
            if (searchData.place?.description) {
               const parts = searchData.place.description.split(',');
               // Use the first part as city name
               params.set('cityName', parts[0].trim());
               
               // Attempt to guess country code from last part if it exists, otherwise default
               let countryCode = 'US';
               const lastPart = parts[parts.length - 1].trim();
               // Simple mapping for common ones, ideally this would use a robust geocoding map
               if (lastPart === 'United Arab Emirates' || lastPart === 'UAE') countryCode = 'AE';
               else if (lastPart === 'India') countryCode = 'IN';
               else if (lastPart === 'United Kingdom' || lastPart === 'UK') countryCode = 'GB';
               else if (lastPart === 'Thailand') countryCode = 'TH';
               else if (lastPart === 'Singapore') countryCode = 'SG';
               
               params.set('countryCode', countryCode); 
            } else if (searchData.query) {
               params.set('cityName', searchData.query);
               params.set('countryCode', 'US');
            }
            
            if (searchData.checkin) params.set('chkIn', searchData.checkin);
            if (searchData.checkout) params.set('chkOut', searchData.checkout);
            if (searchData.adults) params.set('guestInfo', searchData.adults.toString());

            // Navigate to our internal search results page, triggering the streaming endpoint
            navigate(`/search?${params.toString()}`);
          },
        });
      } catch (err) {
        console.error("Failed to initialize LiteAPI Search Bar:", err);
      }
    }
  }, [navigate]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-white/10 transition-all duration-300 hover:border-white/20">
      <div id="liteapi-search-bar" className="w-full min-h-[60px]"></div>
    </div>
  );
};

export default LiteApiSearchBar;
