import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  activeId: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, activeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar if necessary
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0EA5E9] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar/Mobile Menu */}
      <div
        className={`fixed lg:sticky top-0 lg:top-24 left-0 w-full lg:w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 h-screen lg:h-auto overflow-y-auto' : '-translate-y-full lg:translate-y-0 h-0 lg:h-auto overflow-hidden lg:overflow-visible'
        }`}
      >
        <div className="p-6 lg:p-0 lg:pr-6">
          <h3 className="text-lg font-serif font-bold mb-4 pt-16 lg:pt-0 dark:text-slate-200">Table of Contents</h3>
          <nav className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeId === item.id
                    ? 'bg-sky-50 dark:bg-sky-900/30 text-[#0EA5E9] dark:text-[#14B8A6] font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TableOfContents;
