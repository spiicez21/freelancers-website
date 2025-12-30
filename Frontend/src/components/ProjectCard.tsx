import React from 'react';

interface ProjectProps {
    id: number | string;
    title: string;
    category: string;
    member: string;
    imageColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, category, member, imageColor = 'bg-zinc-100 dark:bg-zinc-800' }) => {
    return (
        <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all hover:shadow-lg dark:hover:shadow-emerald-900/10 cursor-pointer h-full flex flex-col">
            <div className={`h-52 ${imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors" />
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400/50 font-bold text-5xl select-none group-hover:scale-110 transition-transform duration-500">
                    {title.charAt(0)}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <div className="mb-3">
                    <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider mb-1 block">{category}</span>
                    <h3 className="font-bold dark:text-white text-lg leading-tight group-hover:text-emerald-500 transition-colors">{title}</h3>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
                    <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">by {member}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
