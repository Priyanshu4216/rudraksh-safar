import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface LiteApiWidgetProps {
  type: 'list' | 'map' | 'search';
  placeId?: string;
  rows?: number;
  height?: string;
  primaryColor?: string;
}

export const LiteApiWidget: React.FC<LiteApiWidgetProps> = ({ 
  type, 
  placeId, 
  rows = 2, 
  height = '500px',
  primaryColor = '#7057F0' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const widgetId = `liteapi-${type}-${placeId.slice(0, 5)}`;

  useEffect(() => {
    // 1. Load SDK if not present
    const scriptId = 'liteapi-sdk';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    const initWidget = () => {
      const w = window as any;
      if (!w.LiteAPI) return;

      // 2. Initialize domain globally once
      if (!w.LiteAPI.isInitialized) {
         w.LiteAPI.init({
           domain: 'rudrakshsafar.nuitee.link' // Fallback whitelabel domain
         });
         w.LiteAPI.isInitialized = true;
      }

      // 3. Mount Widget
      const config: any = {
        selector: `#${widgetId}`,
        primaryColor,
      };

      if (placeId) {
        config.placeId = placeId;
      }

      if (type === 'list' || type === 'map') {
        // Click hijacking: sends user to our custom React flow!
        config.onHotelClick = (data: any) => {
           console.log("Widget Click Intercepted: ", data);
           if (data?.hotel?.id) {
             navigate(`/hotel/${data.hotel.id}`);
           }
        };
      }

      if (type === 'search') {
        config.onSearchClick = (searchData: any) => {
          console.log("Search intercepted: ", searchData);
          // Redirect to our HotelsHub (assumes we can pass destination in state or URL)
          // For now we'll route them to the /hotels page where they can see the results
          navigate(`/hotels`, { 
            state: { searchData } 
          });
        };
        w.LiteAPI.SearchBar.create(config);
      } else if (type === 'list') {
        w.LiteAPI.HotelsList.create({ ...config, rows, hasSearchBar: false });
      } else {
        w.LiteAPI.Map.create(config);
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://components.liteapi.travel/v1.0/sdk.umd.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      // If script is already loaded from previous navigation
      if ((window as any).LiteAPI) {
        initWidget();
      } else {
        script.addEventListener('load', initWidget);
      }
    }

    return () => {
       // Cleanup if needed (the LiteAPI SDK might not have a destroy method, so we clear innerHTML)
       if (containerRef.current) {
          containerRef.current.innerHTML = '';
       }
    };
  }, [placeId, type, rows, primaryColor, widgetId, navigate]);

  return (
    <div className={`liteapi-widget-wrapper w-full ${type === 'search' ? 'my-4' : 'my-8'}`}>
      <div 
        ref={containerRef} 
        id={widgetId} 
        style={type === 'map' ? { height, width: '100%' } : { width: '100%' }}
        className={type === 'search' ? '' : 'rounded-2xl overflow-hidden shadow-lg border border-gray-100'}
      >
         {/* SDK Injects Here */}
      </div>
    </div>
  );
};
