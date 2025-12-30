import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
    return (
        <div className="space-y-20">
            <Hero />

            {/* Featured Portfolios Preview - Placeholder */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold dark:text-white">Featured Talent</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Hand-picked professionals ready for your next project.</p>
                    </div>
                    <button className="text-emerald-500 font-medium hover:text-emerald-400 py-1 border-b border-transparent hover:border-emerald-500 transition-colors">
                        View All Members
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Skeleton Cards for now */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-lg dark:hover:shadow-emerald-900/10">
                            <div className="h-48 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                                {/* Placeholder for project thumbnail */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <span className="text-white text-sm font-medium">Portfolio Preview</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                                    <div>
                                        <h3 className="font-semibold dark:text-white">Member Name</h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Full Stack Developer</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 text-xs rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">React</span>
                                    <span className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Node.js</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
