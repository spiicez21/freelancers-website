import React from 'react';
import Hero from '../components/Hero';
import MemberCard from '../components/MemberCard';

import { ArrowRight, Lightbulb, ShieldCheck, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="space-y-24 pb-10">
            <Hero />

            {/* Why Choose Us - Bento Grid */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Main Title Card - Spans 2 columns on large screens if desired, or just 1. Let's make it span 2 cols or 3 cols? 
                        Let's try: Title Card (Large) + 3 Feature Cards. 
                        Actually, let's just make the 3 feature cards stunning. And keep title separate or regular.
                        Wait, "Make Why Choose Us... kind of that grids cards".
                        I will put the Title + Intro in a large card (span 2), and the first feature in span 1. Then other two below?
                        Layout:
                        [ Title & Intro (Span 2) ] [ Fresh Perspectives (Span 1) ]
                        [ Vetted Talent (Span 1) ] [ Cost Effective (Span 2) ]
                        Or:
                        [ Title (Span 1 or 2) ] ...
                        Let's do a uniform height grid.
                    */}

                    {/* Card 1: Header/Intro */}
                    <div className="md:col-span-2 p-10 rounded-[40px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-black opacity-80 dark:opacity-50" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Why Choose Us?</h2>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                                We combine academic excellence with professional delivery standards to bring you the best of both worlds.
                            </p>
                        </div>
                        {/* Decorative grain/noise */}
                        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover"></div>
                    </div>

                    {/* Card 2: Fresh Perspectives */}
                    <div className="p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/40 dark:to-black" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100/50 dark:bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                <Lightbulb size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Fresh Perspectives</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Innovative solutions using the latest technologies.</p>
                        </div>
                    </div>

                    {/* Card 3: Vetted Talent */}
                    <div className="p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/40 dark:to-black" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100/50 dark:bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Vetted Talent</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Only top-performing students with proven portfolios.</p>
                        </div>
                    </div>

                    {/* Card 4: Cost Effective (Span 2 to balance) */}
                    <div className="md:col-span-2 p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex items-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/40 dark:to-black" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100/50 dark:bg-purple-500/10 flex items-center justify-center border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                                <Gem size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Cost Effective</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">Premium quality deliverables at competitive academic rates, ensuring you get maximum value for your investment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Portfolios */}
            < section >
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold dark:text-white">Featured Talent</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Hand-picked professionals ready for your next project.</p>
                    </div>
                    <Link to="/members" className="text-emerald-500 font-medium hover:text-emerald-400 py-1 transition-colors flex items-center gap-1">
                        View All Members <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <MemberCard
                        id={1}
                        name="Alex Johnson"
                        role="UI/UX Designer"
                        skills={['Figma', 'React', 'Prototyping']}
                        status="Available"
                    />
                    <MemberCard
                        id={2}
                        name="Sam Rivera"
                        role="Frontend Dev"
                        skills={['React', 'Tailwind', 'TypeScript']}
                        status="Busy"
                    />
                    <MemberCard
                        id={3}
                        name="Jordan Lee"
                        role="Full Stack"
                        skills={['Node.js', 'Python', 'AWS']}
                        status="Available"
                    />
                </div>
            </section >
        </div >
    );
};

export default Home;
