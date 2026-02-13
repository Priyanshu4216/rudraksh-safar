import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ChevronRight, X, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SEARCH_EXPERIENCE_DESTINATIONS } from '@/data/homeRedesignData';
import SmartImage from '@/components/SmartImage';
import { Button } from '@/components/ui/button';

const SearchExperience = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleClose = () => {
        navigate(-1);
    };

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 10);
            // Allow a small buffer (5px) for browser rounding differences
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    // Check on mount and resize
    useEffect(() => {
        const timer = setTimeout(checkScrollButtons, 500);
        window.addEventListener('resize', checkScrollButtons);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Reduced scroll amount
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            // Check buttons after scroll animation (roughly)
            setTimeout(checkScrollButtons, 300);
        }
    };

    const filteredDestinations = SEARCH_EXPERIENCE_DESTINATIONS.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // Force light mode styles for this specific page to match the reference vibe
        <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-green-100 flex flex-col relative overflow-hidden">

            {/* Background Map Pattern (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 20%',
                    backgroundSize: '120%'
                }}
            />

            <main className="flex-grow container mx-auto px-4 pt-8 md:pt-16 pb-8 flex flex-col items-center relative z-10">

                {/* Header - Scaled Down */}
                <div className="text-center mb-8 animate-fade-in-up max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                        What's <span className="text-[#00D285] font-handwrite text-4xl md:text-5xl relative inline-block px-2 transform translate-y-2">
                            your pick
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00D285]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span> for your next vacation?
                    </h1>
                </div>

                {/* Large Search Input - Scaled Down */}
                <div className="w-full max-w-2xl mb-10 animate-fade-in-up delay-100">
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00D285] transition-colors duration-300" />
                        <Input
                            autoFocus
                            type="text"
                            placeholder="Pick your destination"
                            className="w-full h-16 pl-16 pr-6 rounded-full text-lg border-2 border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-visible:ring-0 focus-visible:border-[#00D285] hover:border-[#00D285]/50 transition-all bg-white placeholder:text-slate-300 placeholder:font-light"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Horizontal Scroll Layout with Side Buttons */}
                <div className="flex items-center justify-center w-full max-w-[1920px] gap-4 md:gap-6 px-2 md:px-8 relative animate-fade-in-up delay-200">

                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className={`hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-[#00D285] hover:border-[#00D285] items-center justify-center transition-all duration-300 z-20 flex-shrink-0 ${showLeftArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Hide Scrollbar Class added inline style for cross-browser */}
                    <style>{`
                        .hide-scrollbar::-webkit-scrollbar { display: none; }
                        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    `}</style>

                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollButtons}
                        className="overflow-x-auto hide-scrollbar py-8 px-4 scroll-smooth w-full"
                    >
                        <div className="flex gap-4 md:gap-6 w-max mx-auto px-4">
                            {filteredDestinations.map((dest) => (
                                <Link
                                    key={dest.id}
                                    to={`/${dest.slug}`}
                                    className="group relative flex flex-col items-center w-[180px] md:w-[220px] flex-shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:z-30"
                                >
                                    {/* Arch Shape Container */}
                                    <div
                                        className="relative w-full aspect-[4/5] rounded-t-[1000px] rounded-b-[30px] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white"
                                        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} // Fix for safari/chrome border-radius clipping bug with transform
                                    >
                                        <SmartImage
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                        <div className="absolute bottom-0 left-0 w-full p-6 text-center flex flex-col items-center">
                                            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">
                                                {dest.tag}
                                            </p>
                                            <h3 className={`text-xl md:text-2xl font-bold text-white mb-0 leading-none ${(dest as any).fontClass || 'font-serif'}`}>
                                                {dest.name}
                                            </h3>
                                        </div>

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 border border-white/30">
                                            <ChevronRight className="w-6 h-6 text-white stroke-[3]" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className={`hidden md:flex w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-[#00D285] hover:border-[#00D285] items-center justify-center transition-all duration-300 z-20 flex-shrink-0 ${showRightArrow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </main>

            {/* Optional Footer or close button at bottom if needed, but cleaner without for this view */}
            <div className="w-full py-6 text-center text-slate-400 text-sm relative z-10">
                <Button variant="ghost" onClick={handleClose} className="hover:bg-slate-100 text-slate-500">
                    Close Search
                </Button>
            </div>
        </div>
    );
};

export default SearchExperience;
