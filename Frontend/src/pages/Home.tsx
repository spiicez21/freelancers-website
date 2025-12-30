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

            {/* Stats Ticker */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-zinc-200 dark:border-zinc-800 py-8">
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">50+</h4>
                    <span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">Projects Delivered</span>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">30+</h4>
                    <span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">Student Experts</span>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">100%</h4>
                    <span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">Client Satisfaction</span>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">24h</h4>
                    <span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">Avg. Response Time</span>
                </div>
            </div>

            {/* Why Choose Us */}
            <section className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold dark:text-white mb-3">Why Hire Student Freelancers?</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">Professional quality at startup-friendly rates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-lg dark:text-white mb-2">Fresh Perspectives</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Access talent that is up-to-date with the latest technologies, frameworks, and design trends straight from academia.
                        </p>
                    </div>
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                            <Rocket size={24} />
                        </div>
                        <h3 className="font-bold text-lg dark:text-white mb-2">Agile Delivery</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            We work fast and iterate quickly. Perfect for MVPs, prototypes, and rapid redesigns for your startup.
                        </p>
                    </div>
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                            <Shield size={24} />
                        </div>
                        <h3 className="font-bold text-lg dark:text-white mb-2">Vetted & Trusted</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Every freelancer is screened by the club's core team. We ensure accountability and quality in every deliverable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Portfolios */}
            <section>
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
            </section>
        </div>
    );
};

export default Home;
