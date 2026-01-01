import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, User, Plus } from 'lucide-react';

interface MemberProps {
    id: number | string;
    name: string;
    role: string;
    skills: string[];
    status?: string;
    image?: string;
    onClick?: () => void;
}

const MemberCard: React.FC<MemberProps> = ({ id, name, role, skills, image, onClick }) => {

    const CardContent = (
        <div className="group relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 active:scale-[0.98]">
            {/* Image Area */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center">
                        <User className="text-white/20" size={64} />
                    </div>
                )}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-black/90 dark:via-black/20 dark:to-transparent flex flex-col justify-end p-6">
                <div className="apple-blur p-4 rounded-2xl border border-zinc-200/50 dark:border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-display">{name}</h3>
                        <BadgeCheck className="text-emerald-600 dark:text-emerald-400" size={20} />
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium font-body mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-1">
                        {role} • {skills[0]}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                            {skills.slice(0, 3).map((skill, i) => (
                                <div key={i} className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-white/10 flex items-center justify-center text-[8px] text-emerald-600 dark:text-emerald-400 font-bold uppercase backdrop-blur-sm">
                                    {skill[0]}
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-display">
                            VIEW <Plus size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (onClick) {
        return (
            <div onClick={onClick} className="block h-full">
                {CardContent}
            </div>
        );
    }

    return (
        <Link to={`/members/${id}`} className="block h-full">
            {CardContent}
        </Link>
    );
};

export default MemberCard;
