import React from 'react';
import { Search, Filter } from 'lucide-react';
import MemberCard from '../components/MemberCard';
import mockProfiles from '../data/mockProfiles.json';

const Members: React.FC = () => {
    const members = mockProfiles.map(m => ({
        id: m.id,
        name: m.name,
        role: m.tagline,
        skills: m.techStack,
        status: m.availability,
        image: m.profileImage
    }));

    return (
        <div className="space-y-6 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white font-display tracking-tight">Our Members</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 font-body mt-1 md:mt-2">Discover the elite talent within our community.</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-12 pr-4 py-3 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-xs font-display tracking-wide uppercase transition-all"
                        />
                    </div>
                    <button className="p-3 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <MemberCard
                        key={member.id}
                        {...member}
                    />
                ))}
            </div>
        </div>
    );
};

export default Members;
