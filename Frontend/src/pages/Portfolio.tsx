import React from 'react';
import { Linkedin, Download, ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {

    // Mock data based on ID - normally fetched from API
    // For demo purposes, we'll just display static data

    return (
        <div className="pb-20 max-w-screen-2xl mx-auto px-4 md:px-8">
            {/* Top Navigation */}
            <div className="mb-6">
                <Link to="/members" className="inline-flex items-center text-sm text-zinc-500 hover:text-emerald-500 transition-colors gap-2 font-display font-bold tracking-widest uppercase">
                    <ArrowLeft size={16} /> BACK TO MEMBERS
                </Link>
            </div>

            {/* Banner Section - Now Contained */}
            <div className="relative w-full h-[18vh] md:h-[28vh] overflow-hidden rounded-[24px] md:rounded-[40px] shadow-xl">
                <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
                    alt="Profile Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="relative px-2 md:px-6">
                {/* Header Container with Overlap */}
                <header className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end -mt-10 md:-mt-14 mb-12">
                    {/* Profile Picture - Circular */}
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white dark:bg-zinc-900 border-[5px] border-white dark:border-[#0a0a0a] shadow-2xl overflow-hidden shrink-0 relative z-20">
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-transparent">
                            <User className="text-emerald-500/20" size={60} />
                        </div>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1 pt-6 md:pt-14 pb-2 md:pb-4 text-center md:text-left relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-3">
                                <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tight leading-none">Alex Johnson</h1>
                                <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                                    <p className="text-lg md:text-xl text-emerald-600 dark:text-emerald-500 font-bold font-display tracking-tight uppercase">UI/UX Designer & Frontend Developer</p>
                                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">Available</span>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-center md:justify-end">
                                <button className="p-3 apple-blur rounded-2xl text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                    <Linkedin size={20} />
                                </button>
                                <button className="px-6 py-3 apple-blur rounded-2xl text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 font-bold font-display text-xs tracking-widest flex items-center gap-2 transition-colors">
                                    <Download size={18} /> RESUME
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Bio Section */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-display uppercase tracking-widest">About Me</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-body font-medium leading-relaxed">
                                Passionate about creating intuitive digital experiences. I specialize in the React ecosystem and clean, modern interfaces. Currently building the future of student-led professional services.
                            </p>
                        </section>

                        <hr className="border-zinc-200 dark:border-white/5" />

                        {/* Skills */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-display">Technical Proficiency</h2>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js', 'PostgreSQL'].map(skill => (
                                    <span key={skill} className="px-5 py-2 apple-blur text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-semibold border border-zinc-200 dark:border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="space-y-8">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-display uppercase tracking-widest">Selected Works</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[1, 2].map((i) => (
                                    <ProjectCard
                                        key={i}
                                        id={i}
                                        title={`Project Title ${i}`}
                                        category="Design"
                                        member="Alex Johnson"
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
