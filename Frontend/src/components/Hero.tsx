import React from 'react';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-6 pb-20">
            {/* Main Rounded Container */}
            <div className="relative w-full aspect-[16/16] md:aspect-[16/9] lg:aspect-[2.4/1] bg-black rounded-[40px] overflow-hidden group">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Students collaborating"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                        <span className="text-white/80 font-medium tracking-wide">#1 Student Freelance Platform</span>
                        <h1 className="mt-4 text-5xl md:text-7xl font-bold text-white leading-tight max-w-2xl">
                            New Energy <br /> <span className="text-emerald-400">for the Future</span>
                        </h1>
                    </div>

                    {/* Bottom Action Row (Visual Only, real links in footer/navbar) */}
                    <div className="flex gap-6 items-center">
                        <Link to="/hire" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors group/link">
                            Get in touch <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                        <Link to="/works" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors group/link">
                            Our services <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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
                        <div className="grid grid-cols-3 gap-12 pr-10 pb-10">
                            <div>
                                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">50+</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-[100px]">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">30+</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-[100px]">Student Experts</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">100%</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-[100px]">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
