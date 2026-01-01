import React from 'react';
import { ArrowUpRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
    id: number | string;
    title: string;
    category: string;
    member: string;
    imageColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, title, category, member, imageColor = 'bg-zinc-100 dark:bg-white/5' }) => {
    return (
        <Link to={`/works/${id}`} className="block h-full">
            <div className="group relative w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 active:scale-[0.98]">

                {/* Image Area */}
                <div className={`absolute inset-0 ${imageColor} transition-transform duration-700 group-hover:scale-110 flex items-center justify-center`}>
                    <div className="text-zinc-500/10 dark:text-white/5 font-bold text-9xl font-display select-none">
                        {title.charAt(0)}
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-black/90 dark:via-black/20 dark:to-transparent flex flex-col justify-end p-6">
                    <div className="apple-blur p-4 rounded-2xl border border-zinc-200/50 dark:border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-display leading-tight">{title}</h3>
                            <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 font-display">
                                {category}
                            </span>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-white/10 flex items-center justify-center">
                                    <User size={12} className="text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-300 font-body">by {member}</span>
                            </div>

                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 group/btn transition-transform group-hover:scale-110">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
