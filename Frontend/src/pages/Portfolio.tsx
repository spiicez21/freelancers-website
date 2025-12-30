import React from 'react';
import { Mail, Linkedin, Globe, Download, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Portfolio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mock data based on ID - normally fetched from API
    // For demo purposes, we'll just display static data

    return (
        <div className="space-y-10 max-w-5xl mx-auto">
            <Link to="/members" className="inline-flex items-center text-sm text-zinc-500 hover:text-emerald-500 transition-colors gap-1">
                <ArrowLeft size={16} /> Back to Members
            </Link>

            {/* Header */}
            <header className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 shrink-0 border-4 border-white dark:border-zinc-950 shadow-xl" />

                <div className="space-y-4 flex-1">
                    <div>
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Alex Johnson</h1>
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-medium">Available for Hire</span>
                        </div>
                        <p className="text-xl text-zinc-600 dark:text-zinc-300 mt-1">UI/UX Designer & Frontend Developer</p>
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm leading-relaxed">
                        Passionate about creating intuitive digital experiences. I specialize in React ecosystem and clean, modern interfaces. Currently a 3rd year CS student.
                    </p>

                    <div className="flex gap-3 pt-2">
                        <button className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                            Contact Me
                        </button>
                        <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <Linkedin size={18} />
                        </button>
                        <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <Globe size={18} />
                        </button>
                        <button className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm flex items-center gap-2">
                            <Download size={16} /> Resume
                        </button>
                    </div>
                </div>
            </header>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Skills */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js', 'PostgreSQL'].map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-md text-sm border border-zinc-200 dark:border-zinc-800">
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
                        <div key={i} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all cursor-pointer">
                            <div className="h-64 bg-zinc-100 dark:bg-zinc-800 relative">
                                {/* Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">Project Thumbnail</div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg dark:text-white group-hover:text-emerald-500 transition-colors">Project Title {i}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Design • Development</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
