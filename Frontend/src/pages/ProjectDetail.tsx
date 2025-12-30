import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Layers, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

const ProjectDetail: React.FC = () => {
    useParams<{ id: string }>();

    // Mock data - in a real app, fetch based on ID
    const project = {
        title: 'E-Commerce Redesign',
        category: 'Design & Development',
        client: 'Acme Corp',
        year: '2024',
        challenge: 'The client needed a complete overhaul of their legacy platform to improve conversion rates and mobile responsiveness. The existing site was slow, difficult to navigate, and visually outdated.',
        solution: 'We implemented a headless commerce architecture using Next.js and Shopify. The design focuses on minimalism and speed, reducing load times by 60% and simplifying the checkout process to just 3 steps.',
        results: [
            { label: 'Conversion Rate', value: '+45%' },
            { label: 'Page Load Speed', value: '0.8s' },
            { label: 'Mobile Traffic', value: '+120%' },
        ],
        stack: ['React', 'Next.js', 'Tailwind', 'Shopify', 'Framer Motion'],
        team: ['Alex J.', 'Sam R.'],
        images: [
            'bg-zinc-100 dark:bg-zinc-800',
            'bg-zinc-200 dark:bg-zinc-700',
        ]
    };

    return (
        <div className="max-w-5xl mx-auto space-y-16 pb-20">
            {/* Navigation */}
            <Link to="/works" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-emerald-500 transition-colors gap-2 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Works
            </Link>

            {/* Header & Hero */}
            <header className="space-y-8">
                <div className="space-y-4 max-w-3xl">
                    <span className="text-emerald-500 font-bold tracking-wider uppercase text-xs border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">{project.category}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">{project.title}</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        A strategic redesign focused on performance, accessibility, and user engagement for a leading retail brand.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-video rounded-[32px] bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 text-2xl font-semibold">Hero Image Placeholder</div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">The Challenge</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-loose text-lg">
                            {project.challenge}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">The Solution</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-loose text-lg">
                            {project.solution}
                        </p>
                    </section>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
                            <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
                        </div>
                    </div>

                    {/* Results */}
                    <section className="py-8 border-y border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Key Results</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {project.results.map((res) => (
                                <div key={res.label}>
                                    <div className="text-4xl font-bold text-emerald-500 mb-1">{res.value}</div>
                                    <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{res.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-10">
                    <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[32px] border border-zinc-200 dark:border-zinc-800 space-y-8 sticky top-24">
                        <Button className="w-full justify-between group">
                            Visit Live Site <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="space-y-1">
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2"><Users size={16} /> Client</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">{project.client}</p>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2"><Calendar size={16} /> Year</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">{project.year}</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2"><Layers size={16} /> Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">Team</h3>
                            <div className="flex -space-x-3">
                                {project.team.map((member, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] font-bold" title={member}>
                                        {member.charAt(0)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="bg-emerald-500 dark:bg-emerald-500/10 border border-transparent dark:border-emerald-500/20 rounded-[32px] p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold text-white dark:text-emerald-400 max-w-xl mx-auto">Ready to build something similar?</h2>
                <p className="text-emerald-100 dark:text-emerald-200/70 max-w-lg mx-auto">Our students are ready to bring your vision to life.</p>
                <Link to="/hire" className="inline-block">
                    <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        Hire This Team
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default ProjectDetail;
