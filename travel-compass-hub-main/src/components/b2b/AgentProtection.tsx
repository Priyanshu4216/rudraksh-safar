import React from 'react';
import { Shield, Lock, EyeOff, Handshake, BadgeCheck } from 'lucide-react';

const AgentProtection = () => {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            {/* Decorative gradients */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                        <Lock className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-semibold tracking-wide uppercase text-white">Agent Protection & Non-Compete Commitment</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance leading-tight">
                        Your Clients Remain <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">100% Yours.</span> Guaranteed.
                    </h2>
                    <p className="text-lg text-slate-300">
                        We operate strictly as a backend wholesale supplier. We grow only when you grow. We pledge to never bypass you or contact your customers directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                            <EyeOff className="w-7 h-7 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary rounded-md" tabIndex={0}>100% Agent Safe Policy</h3>
                        <p className="text-slate-400">All communication goes through you. We will NEVER market to or contact your retail customers directly under any circumstances.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                            <Shield className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary rounded-md" tabIndex={0}>Confidential Handling</h3>
                        <p className="text-slate-400">Your client data, itineraries, and margins are strictly confidential. We provide white-label support so your brand always remains the primary focal point.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                            <Handshake className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary rounded-md" tabIndex={0}>No Direct Customer Contact Guarantee</h3>
                        <p className="text-slate-400">We offer strict B2B wholesale pricing. We do not compete with our agents by offering B2B rates directly to end customers. Your profit is protected.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-1 rounded-2xl">
                    <div className="bg-slate-950 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-md" tabIndex={0}>
                                <BadgeCheck className="w-6 h-6 text-secondary" /> The Rudraksh Safar Promise
                            </h4>
                            <p className="text-slate-300">
                                We view our B2B agents as long-term partners, not transactional deals. We provide the ground support out of Thailand and globally, so you can focus on building your business relationships without fear of losing your clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentProtection;
