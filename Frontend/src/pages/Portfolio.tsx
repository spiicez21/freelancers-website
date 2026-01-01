import React from 'react';
import { Linkedin, ArrowLeft, User, Edit2, Github, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { useAuth } from '../context/AuthContext';
import mockProfiles from '../data/mockProfiles.json';

const Portfolio: React.FC = () => {
    const { currentUser } = useAuth();

    // Fallback data for preview/demo using the first mock profile
    const defaultUser: any = mockProfiles[0];

    // Check if current user has any meaningful personal data
    const isProfileComplete = !!(currentUser?.bio && currentUser?.bio.trim().length > 0);

    // Fallback to mock data if the user hasn't set up their profile yet
    const user = (currentUser && isProfileComplete) ? currentUser : defaultUser;

    return (
        <div className="pb-20 max-w-screen-2xl mx-auto px-4 md:px-8">
            {/* Top Navigation */}
            <div className="mb-6">
                <Link to="/members" className="inline-flex items-center text-sm text-zinc-500 hover:text-emerald-500 transition-colors gap-2 font-display font-bold tracking-widest uppercase">
                    <ArrowLeft size={16} /> BACK TO MEMBERS
                </Link>
            </div>

            {/* Banner Section */}
            <div className="relative w-full h-[18vh] md:h-[28vh] overflow-hidden rounded-[24px] md:rounded-[40px] shadow-xl">
                <img
                    src={user.bannerImage || defaultUser.bannerImage}
                    alt="Profile Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="relative px-4 md:px-12">
                {/* Discord-style Card Background */}
                <div className="absolute inset-0 top-0 bottom-[-40px] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-3xl rounded-[48px] border border-zinc-200 dark:border-white/5 -z-10" />

                {/* Header Container */}
                <header className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-end mb-12 pt-8">
                    {/* Profile Picture (Discord Style) */}
                    <div className="relative z-20 -mt-24 md:-mt-32 group">
                        <div className="w-36 h-36 md:w-56 md:h-56 rounded-full bg-[#09090b] border-[12px] border-[#09090b] shadow-2xl overflow-hidden relative">
                            {user.profileImage ? (
                                <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-emerald-500/5">
                                    <User className="text-emerald-500/20" size={100} />
                                </div>
                            )}
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute bottom-6 right-6 w-10 h-10 bg-emerald-500 border-[8px] border-[#09090b] rounded-full shadow-lg shadow-emerald-500/30" />
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1 pb-4 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white font-display tracking-tight leading-none">{user.name}</h1>
                                <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                                    <p className="text-xl md:text-2xl text-emerald-500 font-bold font-display uppercase tracking-[0.1em]">{user.tagline || user.role}</p>
                                    <span className="px-5 py-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-[0.25em]">
                                        {user.availability || 'Available'}
                                    </span>
                                </div>
                                {/* Stats Bar */}
                                <div className="flex items-center justify-center md:justify-start gap-10 pt-4 text-zinc-500 dark:text-zinc-400 text-sm font-bold font-display uppercase tracking-widest">
                                    <div className="flex items-center gap-2.5"><Clock size={20} className="text-emerald-500" /> {user.experience || '2+ Years'}</div>
                                    <div className="flex items-center gap-2.5"><DollarSign size={20} className="text-emerald-500" /> {user.rate || '$40/hr'}</div>
                                </div>
                            </div>

                            <div className="flex gap-3 justify-center md:justify-end pb-2">
                                <Link to="/edit-profile" className="px-10 py-5 bg-emerald-500 text-white rounded-[28px] font-bold font-display text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 uppercase">
                                    <Edit2 size={18} /> Edit Profile
                                </Link>
                                <div className="flex gap-2">
                                    {user.socials?.linkedin && (
                                        <a href={user.socials.linkedin} target="_blank" rel="noopener" className="p-5 apple-blur rounded-[28px] text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                            <Linkedin size={24} />
                                        </a>
                                    )}
                                    {user.socials?.github && (
                                        <a href={user.socials.github} target="_blank" rel="noopener" className="p-5 apple-blur rounded-[28px] text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                            <Github size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-12 px-2 md:px-0">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Bio Section */}
                        <section className="space-y-6">
                            <h2 className="text-xs font-bold text-zinc-400 font-display uppercase tracking-[0.3em]">About Me</h2>
                            <p className="text-zinc-700 dark:text-zinc-200 text-xl md:text-2xl font-body font-medium leading-[1.6]">
                                {user.bio}
                            </p>
                        </section>

                        <hr className="border-zinc-200 dark:border-white/5" />

                        {/* Skills */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-display">Technical Proficiency</h2>
                            <div className="flex flex-wrap gap-3">
                                {user.techStack?.map((skill: string) => (
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
                                {user.projects?.map((proj: any, i: number) => (
                                    <ProjectCard
                                        key={i}
                                        id={i}
                                        title={proj.title}
                                        category={proj.description.split(' ')[0] || "Project"}
                                        member={user.name}
                                    />
                                ))}
                                {(!user.projects || user.projects.length === 0) && (
                                    <p className="text-zinc-500 italic">No projects added yet.</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
