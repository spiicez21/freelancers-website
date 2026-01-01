import React from 'react';
import { Search, Filter } from 'lucide-react';
import MemberCard from '../components/MemberCard';

const Members: React.FC = () => {
    const members = [
        { id: 1, name: 'Alex Johnson', role: 'UI/UX Designer', skills: ['Figma', 'React', 'Prototyping'], status: 'Available' },
        { id: 2, name: 'Sam Rivera', role: 'Frontend Dev', skills: ['React', 'Tailwind', 'TypeScript'], status: 'Busy' },
        { id: 3, name: 'Jordan Lee', role: 'Full Stack', skills: ['Node.js', 'Python', 'AWS'], status: 'Available' },
        { id: 4, name: 'Casey Smith', role: 'Content Writer', skills: ['SEO', 'Copywriting', 'Blogs'], status: 'Available' },
        { id: 5, name: 'Taylor Doe', role: 'Graphic Designer', skills: ['Photoshop', 'Illustrator', 'Branding'], status: 'Busy' },
        { id: 6, name: 'Morgan Kim', role: 'Mobile Dev', skills: ['Flutter', 'Dart', 'Firebase'], status: 'Available' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white font-display">Our Members</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 font-body">Discover the talented freelancers in our club.</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-12 pr-4 py-3 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm font-body transition-all"
                        />
                    </div>
                    <button className="p-3 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors">
                        <Filter size={20} />
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
