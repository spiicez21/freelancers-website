import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="space-y-6 max-w-4xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                    A curated network of <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                        student freelancers
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    Designers. Developers. Creators. Ready to work. Connect with the best talent from our college club.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
                        Hire From Us
                        <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-full border border-zinc-700 transition-all hover:border-emerald-500/50">
                        Explore Portfolios
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
