import React from 'react';
import { Linkedin, Globe, Download, ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {

    // Mock data based on ID - normally fetched from API
    // For demo purposes, we'll just display static data

    return (
        <div className="space-y-12 max-w-5xl mx-auto pb-20">
            <Link to="/members" className="inline-flex items-center text-sm text-zinc-500 hover:text-emerald-500 transition-colors gap-2 font-body">
                <ArrowLeft size={16} /> BACK TO MEMBERS
            </Link>

            {/* Header */}
            <header className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-zinc-200 dark:to-emerald-950/40 shrink-0 border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <User className="text-zinc-400 dark:text-zinc-500/20" size={80} />
                    </div>
                </div>

                <div className="space-y-6 flex-1">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap mb-2">
                            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tight">Alex Johnson</h1>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                            <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-500 font-medium font-body">UI/UX Designer & Frontend Developer</p>
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider">Available</span>
                        </div>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg leading-relaxed font-body transition-colors duration-300">
                        Passionate about creating intuitive digital experiences. I specialize in React ecosystem and clean, modern interfaces. Currently a 3rd year CS student.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                        <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-xl shadow-emerald-500/20 font-display">
                            CONTACT ME
                        </button>
                        <div className="flex gap-2">
                            <button className="p-3 apple-blur rounded-2xl text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                <Linkedin size={20} />
                            </button>
                            <button className="p-3 apple-blur rounded-2xl text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                <Globe size={20} />
                            </button>
                            <button className="px-6 py-3 apple-blur rounded-2xl text-zinc-600 dark:text-zinc-400 font-bold text-sm tracking-wide flex items-center gap-2 transition-colors">
                                <Download size={18} /> RESUME
                            </button>
                        </div>
                    </div>
                </div>
            </header>

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
            <section className="space-y-6">
                <h2 className="text-xl font-bold dark:text-white">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    );
};

export default Portfolio;
