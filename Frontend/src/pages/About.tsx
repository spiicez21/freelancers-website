import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="space-y-16 max-w-4xl mx-auto">
            <section className="text-center space-y-6">
                <h1 className="text-4xl font-bold dark:text-white">About the Club</h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    We are a collective of driven student freelancers, bridging the gap between academic learning and real-world impact.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                        <Users size={24} />
                    </div>
                    <h3 className="font-semibold text-lg dark:text-white">Community</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Fostering collaboration and growth among student creatives and developers.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                        <Target size={24} />
                    </div>
                    <h3 className="font-semibold text-lg dark:text-white">Excellence</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Delivering professional-grade work that rivals industry standards.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-semibold text-lg dark:text-white">Trust</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">A vetted, College-affiliated platform ensuring reliability and quality.</p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold dark:text-white">Meet the Core Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-center">
                            <div className="w-20 h-20 mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-full mb-3" />
                            <h4 className="font-semibold dark:text-white">Team Member</h4>
                            <span className="text-xs text-emerald-500 font-medium">Lead Organizer</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
