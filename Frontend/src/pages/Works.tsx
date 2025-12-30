import React from 'react';
import { Filter, Search } from 'lucide-react';

const Works: React.FC = () => {
    const projects = [
        { id: 1, title: 'E-Commerce Redesign', category: 'Design', image: 'bg-emerald-100', member: 'Alex J.' },
        { id: 2, title: 'SaaS Dashboard', category: 'Development', image: 'bg-blue-100', member: 'Sam R.' },
        { id: 3, title: 'Marketing Campaign', category: 'Marketing', image: 'bg-purple-100', member: 'Casey S.' },
        { id: 4, title: 'Mobile Banking App', category: 'Development', image: 'bg-orange-100', member: 'Morgan K.' },
        { id: 5, title: 'Brand Identity', category: 'Design', image: 'bg-pink-100', member: 'Taylor D.' },
        { id: 6, title: 'AI Content Tool', category: 'AI / ML', image: 'bg-green-100', member: 'Jordan L.' },
    ];

    const categories = ['All', 'Design', 'Development', 'Marketing', 'AI / ML'];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold dark:text-white tracking-tight">Featured Projects</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Real work delivered by our students.</p>
                </div>

                <div className="flex gap-2">
                    <button className="p-2 text-sm border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                        <Filter size={16} /> Filters
                    </button>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat, i) => (
                    <button key={cat} className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${i === 0 ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project) => (
                    <div key={project.id} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all hover:shadow-lg dark:hover:shadow-emerald-900/10 cursor-pointer">
                        <div className={`h-56 ${project.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors" />
                            {/* Placeholder visual */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-400/50 font-bold text-4xl select-none">
                                {project.title.charAt(0)}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-[10px] uppercase font-semibold text-emerald-500 tracking-wider">{project.category}</span>
                                    <h3 className="font-bold dark:text-white text-lg leading-tight group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                                <span className="text-xs text-zinc-500 dark:text-zinc-500">by {project.member}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
