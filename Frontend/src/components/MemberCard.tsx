import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, User, CheckSquare, Plus } from 'lucide-react';

interface MemberProps {
    id: number | string;
    name: string;
    role: string;
    skills: string[];
    status: string;
    image?: string;
}

const MemberCard: React.FC<MemberProps> = ({ id, name, role, skills }) => {
    return (
        <Link to={`/members/${id}`} className="block h-full">
            <div className="group relative w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800">

                {/* Full Background Image Area */}
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 transition-transform duration-700 group-hover:scale-105">
                    {/* Placeholder for the full portrait image */}
                    <div className="absolute inset-0 bg-linear-to-b from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-500 dark:text-zinc-600 font-bold text-9xl opacity-10 select-none">{name.charAt(0)}</span>
                    </div>
                    {/* Placeholder Image Overlay (Optional Real Image would go here) */}
                </div>

                {/* Gradient Blur Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-20 bg-gradient-to-t from-white/95 via-white/80 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80 backdrop-blur-[2px] flex flex-col gap-1 transition-all duration-300 group-hover:via-white/90 dark:group-hover:via-zinc-950/90">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">{name}</h3>
                        <BadgeCheck className="text-emerald-500 fill-emerald-500 text-white dark:text-zinc-900 shrink-0" size={24} />
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-300 text-sm font-medium leading-relaxed mb-4 line-clamp-2">
                        {role} • {skills.slice(0, 3).join(', ')}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
                            <div className="flex items-center gap-1.5 text-sm font-semibold">
                                <User size={18} />
                                <span>312</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-semibold">
                                <CheckSquare size={18} />
                                <span>48</span>
                            </div>
                        </div>

                        <button className="flex items-center gap-1 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-sm font-bold shadow-sm transition-colors border border-zinc-100 dark:border-zinc-700/50">
                            Follow <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MemberCard;
