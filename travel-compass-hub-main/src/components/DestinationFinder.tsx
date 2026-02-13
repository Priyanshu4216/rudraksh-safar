
import { useState } from 'react';
import { Search, Calendar, Map, Wallet, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DestinationFinder = () => {
    return (
        <section className="section-padding bg-depth-1 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -right-20 bottom-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

            <div className="container px-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-gold font-medium tracking-wider text-sm uppercase mb-3 block">Not sure where to go?</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Smart <span className="text-gradient-gold">Destination Finder</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            Tell us your preferences, and we will curate the perfect itinerary for you.
                        </p>
                    </div>

                    {/* Filter Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Duration Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gold" /> Duration
                            </label>
                            <Select>
                                <SelectTrigger className="h-14 bg-navy-deep/50 border-white/10 text-white rounded-xl focus:ring-gold/50">
                                    <SelectValue placeholder="How many days?" />
                                </SelectTrigger>
                                <SelectContent className="bg-navy-light border-white/10 text-white">
                                    <SelectItem value="3-5">3-5 Days (Short Trip)</SelectItem>
                                    <SelectItem value="5-8">5-8 Days (Standard)</SelectItem>
                                    <SelectItem value="9+">9+ Days (Long Vacation)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Budget Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                <Wallet className="w-4 h-4 text-gold" /> Budget (Per Person)
                            </label>
                            <Select>
                                <SelectTrigger className="h-14 bg-navy-deep/50 border-white/10 text-white rounded-xl focus:ring-gold/50">
                                    <SelectValue placeholder="Set your budget" />
                                </SelectTrigger>
                                <SelectContent className="bg-navy-light border-white/10 text-white">
                                    <SelectItem value="low">Under ₹20,000</SelectItem>
                                    <SelectItem value="medium">₹20,000 - ₹50,000</SelectItem>
                                    <SelectItem value="high">₹50,000 - ₹1 Lakh</SelectItem>
                                    <SelectItem value="luxury">₹1 Lakh+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Month Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gold" /> Month of Travel
                            </label>
                            <Select>
                                <SelectTrigger className="h-14 bg-navy-deep/50 border-white/10 text-white rounded-xl focus:ring-gold/50">
                                    <SelectValue placeholder="When are you traveling?" />
                                </SelectTrigger>
                                <SelectContent className="bg-navy-light border-white/10 text-white">
                                    <SelectItem value="jan">January</SelectItem>
                                    <SelectItem value="feb">February</SelectItem>
                                    <SelectItem value="mar">March</SelectItem>
                                    <SelectItem value="apr">April</SelectItem>
                                    {/* Add rest... */}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Type Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                <Map className="w-4 h-4 text-gold" /> Trip Type
                            </label>
                            <Select>
                                <SelectTrigger className="h-14 bg-navy-deep/50 border-white/10 text-white rounded-xl focus:ring-gold/50">
                                    <SelectValue placeholder="What's the vibe?" />
                                </SelectTrigger>
                                <SelectContent className="bg-navy-light border-white/10 text-white">
                                    <SelectItem value="beach">Relaxing Beach</SelectItem>
                                    <SelectItem value="adventure">Mountain Adventure</SelectItem>
                                    <SelectItem value="culture">Culture & History</SelectItem>
                                    <SelectItem value="spiritual">Spiritual Pilgrimage</SelectItem>
                                    <SelectItem value="city">City Life & Shopping</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Button className="btn-gold h-16 px-12 text-lg w-full md:w-auto shadow-2xl hover:shadow-gold/30">
                            Find My Perfect Trip <Search className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationFinder;
