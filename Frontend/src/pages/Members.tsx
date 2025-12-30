import React from 'react';
import { Search, Filter } from 'lucide-react';

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
                    <h1 className="text-3xl font-bold dark:text-white">Our Members</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Discover the talented freelancers in our club.</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white"
                        />
                    </div>
                    <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <div key={member.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-all group relative overflow-hidden">
                        {/* Gradient glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700"></div>
                            <span className={`text-xs px-2 py-1 rounded-full border ${member.status === 'Available'
                                    ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400'
                                    : 'bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700'
                                }`}>
                                {member.status}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold dark:text-white mb-1 group-hover:text-emerald-500 transition-colors">{member.name}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">{member.role}</p>

                        <div className="flex flex-wrap gap-2">
                            {member.skills.map(skill => (
                                <span key={skill} className="text-xs px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
