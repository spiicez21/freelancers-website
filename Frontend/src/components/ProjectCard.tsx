import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
    id: number | string;
    title: string;
    category: string;
    member: string;
    imageColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, category, member, imageColor = 'bg-zinc-100 dark:bg-zinc-800' }) => {
    return (
        <div className="group bg-white dark:bg-zinc-900 p-4 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100 dark:border-zinc-800 h-full flex flex-col cursor-pointer">

            {/* Image Area */}
            <div className={`relative aspect-[4/3] w-full ${imageColor} rounded-[24px] overflow-hidden mb-4`}>
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors" />
                {/* Simple visual placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-bold text-5xl opacity-30 select-none group-hover:scale-110 transition-transform duration-500">
                    {title.charAt(0)}
                </div>
            </div>

            {/* Info Area */}
            <div className="px-2 pb-2 flex-1 flex flex-col">
                <div className="mb-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-emerald-500 transition-colors pr-2">{title}</h3>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {category}
                        </span>
                    </div>
                </div>

                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium mb-6">
                    Designed & developed for client success.
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{member}</span>
                    </div>

                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors group/btn">
                        <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
