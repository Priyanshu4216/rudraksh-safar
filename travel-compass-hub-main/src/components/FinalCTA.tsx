
import { Button } from '@/components/ui/button';
import { ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-navy-deep relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-light via-navy-deep to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
            </div>

            <div className="container relative z-10 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-6 block animate-fade-up">
                        Your Journey Awaits
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight animate-fade-up delay-100">
                        Stop Dreaming, <br className="hidden md:block" />
                        <span className="text-gradient-gold">Start Exploring.</span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
                        The world is vast, beautiful, and waiting for you. Let Rudraksh Safar curate an experience that you'll cherish forever.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
                        <Button className="btn-gold h-16 px-10 text-lg group md:w-auto w-full shadow-2xl hover:shadow-gold/30" asChild>
                            <Link to="/contact">
                                Start Planning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button variant="outline" className="h-16 px-10 text-lg text-white border-white/20 hover:bg-white/10 md:w-auto w-full" asChild>
                            <Link to="/#packages">
                                <Plane className="mr-2 w-5 h-5" /> View Packages
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
