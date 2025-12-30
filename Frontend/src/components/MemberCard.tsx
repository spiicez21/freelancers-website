import React from 'react';
import { Link } from 'react-router-dom';

interface MemberProps {
    id: number | string;
    name: string;
    role: string;
    skills: string[];
    status: string;
    image?: string;
}

const MemberCard: React.FC<MemberProps> = ({ id, name, role, skills, status }) => {
    return (
        <Link to={`/members/${id}`} className="block h-full">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 shadow-xl group-hover:scale-105 transition-transform duration-300"></div>
                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm ${status === 'Available'
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : 'bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700'
                        }`}>
                        {status}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">{name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-6">{role}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-auto w-full">
                    {skills.slice(0, 3).map(skill => (
                        <span key={skill} className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default MemberCard;
