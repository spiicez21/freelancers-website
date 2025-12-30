import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
    id: number | string;
    title: string;
    category: string;
    member: string;
    imageColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, title, category, member, imageColor = 'bg-zinc-200 dark:bg-zinc-800' }) => {
    return (
        <Link to={`/works/${id}`} className="block h-full">
            <div className="group relative w-full aspect-[16/10] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 cursor-pointer">

                {/* Full Background Image Area */}
                <div className={`absolute inset-0 ${imageColor} transition-transform duration-700 group-hover:scale-105`}>
                    <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors" />
                    {/* Placeholder for real project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-500/20 dark:text-zinc-400/20 font-bold text-8xl select-none group-hover:scale-110 transition-transform duration-500">
                        {title.charAt(0)}
                    </div>
                </div>

                {/* Gradient Blur Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-16 bg-gradient-to-t from-white/95 via-white/80 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80 backdrop-blur-[2px] flex flex-col justify-end transition-all duration-300 group-hover:via-white/90 dark:group-hover:via-zinc-950/90">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-emerald-500 transition-colors pr-4">{title}</h3>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
                            {category}
                        </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 ring-2 ring-white dark:ring-zinc-900" />
                            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">by {member}</span>
                        </div>

                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors shadow-sm group/btn border border-zinc-100 dark:border-zinc-700/50">
                            <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
