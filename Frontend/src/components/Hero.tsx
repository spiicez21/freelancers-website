import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative w-[calc(100vw-20px)] relative left-1/2 -ml-[calc(50vw-10px)] pb-10">
            {/* Main Rounded Container */}
            <div className="relative w-full min-h-[70vh] md:min-h-[90vh] bg-black rounded-[48px] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                {/* Background Image with Parallax-like effect */}
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Students collaborating"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                />

                {/* Intelligent Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 p-10 md:px-20 md:py-32 flex flex-col justify-between">
                    {/* Top Announcement */}
                    <div className="flex items-center gap-3">
                        <div className="px-4 py-1.5 apple-blur border border-white/20 rounded-full flex items-center gap-2 animate-bounce-subtle">
                            <Sparkles size={14} className="text-emerald-400" />
                            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em] font-display">New Talent Arriving Weekly</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-5xl">
                        <h1 className="text-[14vw] md:text-[10vw] lg:text-[11vw] font-bold text-white leading-[0.75] tracking-tighter font-display mb-10 translate-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            PURE <br /> <span className="text-emerald-500">POTENTIAL</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-body font-medium leading-relaxed opacity-0 animate-in fade-in duration-1000 delay-500 fill-mode-forwards">
                            The elite marketplace for high-performance student freelancers. <br className="hidden md:block" />
                            Expert results, academic speed.
                        </p>

                        {/* Action Row */}
                        <div className="flex flex-wrap gap-6 items-center mt-12 opacity-0 animate-in fade-in duration-1000 delay-700 fill-mode-forwards">
                            <Link to="/hire">
                                <button className="group/btn relative px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[20px] font-bold flex items-center gap-4 transition-all active:scale-95 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)] font-display text-sm tracking-widest uppercase">
                                    START A PROJECT <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/works">
                                <button className="px-10 py-5 apple-blur text-white border border-white/10 hover:border-white/20 rounded-[20px] font-bold flex items-center gap-4 transition-all active:scale-95 font-display text-sm tracking-widest uppercase group/works">
                                    VIEW SHOWCASE <Play size={16} className="fill-white group-hover/works:scale-110 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Utility Row */}
                    <div className="flex justify-between items-end">
                        <div className="flex gap-12 text-white/40 font-display text-[10px] tracking-[0.3em] font-bold uppercase">
                            <div className="flex flex-col gap-2">
                                <span className="text-white/20">01</span>
                                <span>Design</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-white/20">02</span>
                                <span>Code</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-white/20">03</span>
                                <span>Motion</span>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                            <span className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] vertical-rl">Scroll</span>
                        </div>
                    </div>
                </div>

                {/* The "Inverted Cave" Stats Section - Unified with Theme */}
                <div className="hidden lg:block absolute bottom-0 right-0 z-20">
                    <div className="bg-bg-end pl-12 pt-12 rounded-tl-[48px] relative transition-colors duration-500">
                        {/* Top Curve */}
                        <div className="absolute -top-[48px] right-0 w-[48px] h-[48px] overflow-hidden pointer-events-none">
                            <div className="w-[48px] h-[48px] rounded-br-[48px] shadow-[15px_15px_0_0_theme('colors.bg-end')] transition-colors duration-500 bg-transparent"></div>
                        </div>

                        {/* Left Curve */}
                        <div className="absolute bottom-0 -left-[48px] w-[48px] h-[48px] overflow-hidden pointer-events-none">
                            <div className="w-[48px] h-[48px] rounded-br-[48px] shadow-[15px_15px_0_0_theme('colors.bg-end')] transition-colors duration-500 bg-transparent"></div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-20 pr-20 pb-16 pt-6">
                            <div className="group/stat">
                                <h3 className="text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tighter group-hover/stat:text-emerald-500 transition-colors">50+</h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest mt-3 font-display">Successes</p>
                            </div>
                            <div className="group/stat">
                                <h3 className="text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tighter group-hover/stat:text-emerald-500 transition-colors">30+</h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest mt-3 font-display">Specialists</p>
                            </div>
                            <div className="group/stat">
                                <h3 className="text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tighter group-hover/stat:text-emerald-500 transition-colors">100%</h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest mt-3 font-display">Integrity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
