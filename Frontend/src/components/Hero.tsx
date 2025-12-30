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

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:px-12 md:py-20 flex flex-col justify-center md:justify-center items-start">
                    {/* Top Content */}
                    <div className="max-w-4xl">
                        <span className="text-white/80 font-medium tracking-wide text-lg md:text-xl mb-4 block">#1 Student Freelance Platform</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter">
                            New Energy <br /> <span className="text-emerald-400">for the Future</span>
                        </h1>
                    </div>

                    {/* Bottom Action Row (Visual Only, real links in footer/navbar) */}
                    <div className="flex gap-8 items-center mt-12">
                        <Link to="/hire" className="flex items-center gap-3 text-white text-lg hover:text-emerald-400 transition-colors group/link">
                            Get in touch <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/works" className="flex items-center gap-3 text-white text-lg hover:text-emerald-400 transition-colors group/link">
                            Our services <ArrowRight className="w-6 h-6 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>



                {/* The "Inverted Cave" Stats Section */}
                <div className="hidden lg:block absolute bottom-0 right-0 z-20">
                    {/* The Stats Box */}
                    <div className="bg-zinc-50 dark:bg-zinc-950 pl-10 pt-10 rounded-tl-[40px] relative">
                        {/* THE MAGIC CURVES via Pseudo Elements replacement (since tailwind before/after is tricky with arbitrary values, using empty divs) */}

                        {/* Top Curve */}
                        <div className="absolute -top-[40px] right-0 w-[40px] h-[40px] overflow-hidden pointer-events-none">
                            <div className="w-[40px] h-[40px] rounded-br-[40px] shadow-[10px_10px_0_0_var(--color-zinc-50)] dark:shadow-[10px_10px_0_0_var(--color-zinc-950)] bg-transparent"></div>
                        </div>

                        {/* Left Curve */}
                        <div className="absolute bottom-0 -left-[40px] w-[40px] h-[40px] overflow-hidden pointer-events-none">
                            <div className="w-[40px] h-[40px] rounded-br-[40px] shadow-[10px_10px_0_0_var(--color-zinc-50)] dark:shadow-[10px_10px_0_0_var(--color-zinc-950)] bg-transparent"></div>
                        </div>

                        {/* Content Grid */}
                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-16 pr-16 pb-14 pt-4">
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white">50+</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white">30+</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">Student Experts</p>
                            </div>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white">100%</h3>
                                <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
