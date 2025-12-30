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
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">

                {/* Image Area */}
                <div className="relative aspect-[4/5] w-full bg-zinc-100 dark:bg-zinc-800 rounded-[24px] overflow-hidden mb-4 group">
                    {/* Placeholder for the large portrait image */}
                    <div className="absolute inset-0 bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-400 dark:text-zinc-500 font-bold text-6xl opacity-20">{name.charAt(0)}</span>
                    </div>
                    {/* Overlay Gradient (optional, for text readability if needed, but keeping clean for now) */}
                </div>

                {/* Info Area */}
                <div className="px-2 pb-2 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">{name}</h3>
                        <BadgeCheck className="text-emerald-500 fill-emerald-500 text-white dark:text-zinc-900" size={20} />
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {role} who focuses on simplicity & usability.
                        {/* Using static bio text to match the design vibe if dynamic bio isn't passed, or concatenate skills */}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <User size={16} />
                                <span>312</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <CheckSquare size={16} />
                                <span>48</span>
                            </div>
                        </div>

                        <button className="flex items-center gap-1 px-5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold transition-colors">
                            Follow <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MemberCard;
