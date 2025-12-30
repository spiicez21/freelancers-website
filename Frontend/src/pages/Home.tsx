import React from 'react';
import Hero from '../components/Hero';
import MemberCard from '../components/MemberCard';
import ProjectCard from '../components/ProjectCard'; // Make sure this path is correct if we want to use it here, or stick to features if requested.
import { Zap, Shield, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="space-y-24 pb-10">
            <Hero />

            {/* Why Choose Us */}
            <section>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">Why Choose Us?</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">We combine academic excellence with professional delivery standards.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Fresh Perspectives', icon: '💡', desc: 'Innovative solutions using the latest technologies and academic research.' },
                        { title: 'Vetted Talent', icon: '✨', desc: 'Only top-performing students with proven project portfolios.' },
                        { title: 'Cost Effective', icon: '💎', desc: 'Premium quality deliverables at competitive academic rates.' }
                    ].map((item) => (
                        <div key={item.title} className="p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Portfolios */}
            < section >
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold dark:text-white">Featured Talent</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Hand-picked professionals ready for your next project.</p>
                    </div>
                    <Link to="/members" className="text-emerald-500 font-medium hover:text-emerald-400 py-1 transition-colors flex items-center gap-1">
                        View All Members <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <MemberCard
                        id={1}
                        name="Alex Johnson"
                        role="UI/UX Designer"
                        skills={['Figma', 'React', 'Prototyping']}
                        status="Available"
                    />
                    <MemberCard
                        id={2}
                        name="Sam Rivera"
                        role="Frontend Dev"
                        skills={['React', 'Tailwind', 'TypeScript']}
                        status="Busy"
                    />
                    <MemberCard
                        id={3}
                        name="Jordan Lee"
                        role="Full Stack"
                        skills={['Node.js', 'Python', 'AWS']}
                        status="Available"
                    />
                </div>
            </section >
        </div >
    );
};

export default Home;
