import React, { useEffect, useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { HotelApiService } from '../services/api/hotel.service';
import { ChevronDown, Loader2 } from 'lucide-react';

interface CurrencyData {
  code: string;
  currency: string;
  countries: string[];
}

export const CurrencySelector: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let isMounted = true;
    HotelApiService.getCurrencies()
      .then((res: any) => {
        if (isMounted && res.data) {
          setCurrencies(res.data);
        }
      })
      .catch((err) => console.error('Failed to load currencies', err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false; };
  }, []);

  const filteredCurrencies = currencies.filter(
    c => c.code.toLowerCase().includes(search.toLowerCase()) || 
         c.currency.toLowerCase().includes(search.toLowerCase()) ||
         c.countries?.some(country => country.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="flex items-center text-sm font-medium text-gray-500 py-2 px-3">
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        {currency}
      </div>
    );
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100"
      >
        {currency}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden flex flex-col max-h-[400px]">
            <div className="p-3 border-b border-gray-100">
              <input
                type="text"
                placeholder="Search currency or country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                autoFocus
              />
            </div>
            
            <div className="overflow-y-auto flex-1 p-2">
              {filteredCurrencies.length === 0 ? (
                <div className="text-center py-4 text-sm text-gray-500">No currencies found</div>
              ) : (
                filteredCurrencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center ${
                      currency === c.code 
                        ? 'bg-blue-50 text-blue-700 font-bold' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{c.code}</div>
                      <div className="text-xs text-gray-500 truncate max-w-[150px]">{c.currency}</div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
