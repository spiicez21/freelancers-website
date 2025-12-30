import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="space-y-16 max-w-4xl mx-auto">
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                    Building the future of <span className="text-emerald-500">freelance</span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    College Freelancers is a platform bridging the gap between talented computer science students and businesses needing high-quality digital solutions.
                </p>
            </div>

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Quality First', desc: 'We maintain high standards through mentorship and peer code reviews.' },
                        { title: 'Fresh Perspective', desc: 'Students bring the latest tech stack knowledge and innovative ideas.' },
                        { title: 'Reliable Delivery', desc: 'Managed by senior students to ensure deadlines and requirements are met.' }
                    ].map((value) => (
                        <div key={value.title} className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{value.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
