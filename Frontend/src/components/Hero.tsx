import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative w-[calc(100vw-20px)] relative left-1/2 -ml-[calc(50vw-10px)] pb-10">
            {/* Main Rounded Container */}
            <div className="relative w-full min-h-[60vh] md:min-h-[85vh] bg-black rounded-[40px] overflow-hidden group">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Students collaborating"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay for Text Readability - Apple Style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:px-16 md:py-24 flex flex-col justify-center">
                    {/* Top Content */}
                    <div className="max-w-4xl">
                        <span className="text-emerald-400 font-semibold tracking-widest text-xs md:text-sm mb-6 block uppercase font-display">#1 Student Freelance Platform</span>
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-bold text-white leading-[0.8] tracking-tighter font-display">
                            NEW <br /> <span className="text-emerald-500">ENERGY</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-xl font-body">
                            The future of professional services, powered by the next generation of academic talent.
                        </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex flex-wrap gap-4 items-center mt-12">
                        <Link to="/hire">
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-500/20 font-display">
                                Get in touch <ArrowRight size={20} />
                            </button>
                        </Link>
                        <Link to="/works">
                            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all active:scale-95 font-display">
                                Our services <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* The "Inverted Cave" Stats Section */}
                <div className="hidden lg:block absolute bottom-0 right-0 z-20">
                    <div className="bg-bg-end pl-10 pt-10 rounded-tl-[40px] relative transition-colors duration-300">
                        {/* Top Curve */}
                        <div className="absolute -top-[40px] right-0 w-[40px] h-[40px] overflow-hidden pointer-events-none">
                            <div className="w-[40px] h-[40px] rounded-br-[40px] shadow-[10px_10px_0_0_theme('colors.bg-end')] transition-colors duration-300 bg-transparent"></div>
                        </div>

                        {/* Left Curve */}
                        <div className="absolute bottom-0 -left-[40px] w-[40px] h-[40px] overflow-hidden pointer-events-none">
                            <div className="w-[40px] h-[40px] rounded-br-[40px] shadow-[10px_10px_0_0_theme('colors.bg-end')] transition-colors duration-300 bg-transparent"></div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-16 pr-16 pb-14 pt-4">
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white font-display">50+</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 font-body mt-2">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white font-display">30+</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 font-body mt-2">Student Experts</p>
                            </div>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white font-display">100%</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 font-body mt-2">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
