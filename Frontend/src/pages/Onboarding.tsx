import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, X, Briefcase, Clock, DollarSign, Github, Linkedin, Globe, ChevronRight, ChevronLeft, User } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const POPULAR_TECH = ['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Python', 'Figma', 'AWS', 'Docker', 'PostgreSQL'];

const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    const { completeOnboarding } = useAuth();
    const [step, setStep] = useState(1);

    // Form State
    const [tagline, setTagline] = useState('');
    const [bio, setBio] = useState('');
    const [yearsExp, setYearsExp] = useState('');
    const [rate, setRate] = useState('');
    const [availability, setAvailability] = useState<'Available' | 'Busy' | 'Open'>('Available');
    const [bannerImage, setBannerImage] = useState('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop');

    // Tech Stack
    const [techStack, setTechStack] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');

    // Socials
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [portfolio, setPortfolio] = useState('');

    // Projects
    const [projects, setProjects] = useState<{ title: string, link: string, description: string }[]>([
        { title: '', link: '', description: '' }
    ]);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const toggleTech = (tech: string) => {
        if (techStack.includes(tech)) {
            setTechStack(techStack.filter(t => t !== tech));
        } else {
            setTechStack([...techStack, tech]);
        }
    };

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && newTag.trim()) {
            e.preventDefault();
            if (!techStack.includes(newTag.trim())) {
                setTechStack([...techStack, newTag.trim()]);
            }
            setNewTag('');
        }
    };

    const updateProject = (index: number, field: string, value: string) => {
        const newProjects = [...projects];
        // @ts-ignore
        newProjects[index][field] = value;
        setProjects(newProjects);
    };

    const addProject = () => {
        setProjects([...projects, { title: '', link: '', description: '' }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        completeOnboarding({
            tagline,
            bio,
            experience: yearsExp,
            rate,
            availability,
            techStack,
            bannerImage,
            socials: { github, linkedin, portfolio },
            projects
        });
        navigate('/members');
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            {/* Progress Bar */}
            <div className="mb-12 px-6">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 font-display">
                    <span className={step >= 1 ? 'text-emerald-500' : ''}>Identity</span>
                    <span className={step >= 2 ? 'text-emerald-500' : ''}>Expertise</span>
                    <span className={step >= 3 ? 'text-emerald-500' : ''}>Showcase</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="apple-blur border border-zinc-200 dark:border-white/10 rounded-[48px] shadow-2xl overflow-hidden min-h-[600px] flex flex-col transition-all duration-500">
                <div className="p-10 md:p-14 flex-1">

                    {/* STEP 1: BASIC PROFILE */}
                    {step === 1 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold dark:text-white font-display tracking-tight leading-none mb-4">Create your identity</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 font-body">This is how the world will see you.</p>
                            </div>

                            <div className="space-y-8">
                                {/* Banner Picker */}
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Profile Banner</label>
                                    <div
                                        onClick={() => setBannerImage('https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=2070&auto=format&fit=crop')}
                                        className="relative w-full h-32 md:h-44 rounded-3xl overflow-hidden group cursor-pointer border-2 border-zinc-200 dark:border-white/5 hover:border-emerald-500 transition-colors"
                                    >
                                        <img src={bannerImage} className="w-full h-full object-cover shadow-sm" alt="Banner Preview" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <div className="flex items-center gap-2 text-white font-display text-xs font-bold uppercase tracking-widest">
                                                <Upload size={18} /> Change Banner
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                                    {/* Avatar Upload */}
                                    <div className="flex flex-col items-center gap-4 shrink-0 relative -mt-16 md:-mt-20">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white dark:bg-zinc-900 border-[6px] border-white dark:border-[#0a0a0a] shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden relative">
                                            <div className="w-full h-full bg-emerald-500/5 flex items-center justify-center">
                                                <User className="text-emerald-500/20" size={60} />
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm text-white">
                                                <Upload size={24} />
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-display">Profile Photo</span>
                                    </div>

                                    <div className="flex-1 space-y-6 w-full pt-4 md:pt-0">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Professional Tagline</label>
                                            <input
                                                type="text"
                                                required
                                                value={tagline}
                                                onChange={(e) => setTagline(e.target.value)}
                                                className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-500 font-body transition-all"
                                                placeholder="e.g. Senior Product Designer"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Bio</label>
                                            <textarea
                                                rows={3}
                                                required
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-500 font-body transition-all resize-none"
                                                placeholder="Briefly describe your unique value proposition..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: PROFESSIONAL DETAILS */}
                    {step === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold dark:text-white font-display tracking-tight leading-none mb-4">Professional expertise</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 font-body">Define your skills and market value.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display flex items-center gap-2"><Clock size={12} /> Years of Experience</label>
                                    <input type="text" required value={yearsExp} onChange={e => setYearsExp(e.target.value)} className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none dark:text-white font-body" placeholder="e.g. 3+ Years" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display flex items-center gap-2"><DollarSign size={12} /> Target Hourly Rate</label>
                                    <input type="text" required value={rate} onChange={e => setRate(e.target.value)} className="w-full px-6 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none dark:text-white font-body" placeholder="e.g. $45/hr" />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Availability Status</label>
                                    <div className="flex flex-wrap gap-4 p-6 bg-white/50 dark:bg-black/20 rounded-3xl border border-zinc-200 dark:border-white/5">
                                        {['Available', 'Open', 'Busy'].map(status => (
                                            <button
                                                key={status}
                                                type="button"
                                                onClick={() => setAvailability(status as any)}
                                                className={`flex-1 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest font-display transition-all ${availability === status
                                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                                    : 'bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10'}`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Tech Stack & Tools</label>
                                <div className="flex flex-wrap gap-2.5">
                                    {POPULAR_TECH.map(tech => (
                                        <button
                                            key={tech}
                                            type="button"
                                            onClick={() => toggleTech(tech)}
                                            className={`px-5 py-2.5 rounded-full text-xs font-bold font-display tracking-wider uppercase border transition-all ${techStack.includes(tech)
                                                ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20'
                                                : 'bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border-transparent hover:border-emerald-500/50'
                                                }`}
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <input
                                        type="text"
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyDown={handleAddTag}
                                        className="w-full px-6 py-4 bg-transparent border-b border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none text-sm dark:text-white transition-all font-body"
                                        placeholder="Add custom tools (press Enter)..."
                                    />
                                </div>
                                {techStack.filter(t => !POPULAR_TECH.includes(t)).length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {techStack.filter(t => !POPULAR_TECH.includes(t)).map(tag => (
                                            <span key={tag} className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-emerald-500/20">
                                                {tag} <button type="button" onClick={() => toggleTech(tag)} className="hover:text-red-500"><X size={12} /></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 pt-6">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 pl-1 font-display">Social Presence</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="relative">
                                        <Github className="absolute left-4 top-4 text-zinc-400" size={18} />
                                        <input type="text" value={github} onChange={e => setGithub(e.target.value)} placeholder="GitHub URL" className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none text-sm dark:text-white font-body" />
                                    </div>
                                    <div className="relative">
                                        <Linkedin className="absolute left-4 top-4 text-zinc-400" size={18} />
                                        <input type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="LinkedIn URL" className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none text-sm dark:text-white font-body" />
                                    </div>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-4 text-zinc-400" size={18} />
                                        <input type="text" value={portfolio} onChange={e => setPortfolio(e.target.value)} placeholder="Portfolio URL" className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 rounded-2xl focus:border-emerald-500 outline-none text-sm dark:text-white font-body" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: PROJECTS */}
                    {step === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold dark:text-white font-display tracking-tight leading-none mb-4">Showcase your work</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 font-body">Add your best projects to stand out.</p>
                            </div>

                            <div className="space-y-6 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="p-8 rounded-[32px] bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 space-y-4 group hover:border-emerald-500/30 transition-all shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] font-display">PROJECT 0{idx + 1}</h4>
                                            {idx > 0 && <button type="button" onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="text-zinc-400 hover:text-red-500 transition-colors"><X size={20} /></button>}
                                        </div>
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                required
                                                value={proj.title}
                                                onChange={(e) => updateProject(idx, 'title', e.target.value)}
                                                className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 px-0 py-2 font-display font-bold text-2xl outline-none focus:border-emerald-500 dark:text-white placeholder:text-zinc-700"
                                                placeholder="Project Title"
                                            />
                                            <input
                                                type="url"
                                                value={proj.link}
                                                onChange={(e) => updateProject(idx, 'link', e.target.value)}
                                                className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 px-0 py-2 text-sm outline-none focus:border-emerald-500 text-emerald-500 font-body placeholder:text-zinc-600"
                                                placeholder="https://your-project-link.com"
                                            />
                                            <textarea
                                                rows={2}
                                                required
                                                value={proj.description}
                                                onChange={(e) => updateProject(idx, 'description', e.target.value)}
                                                className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 px-0 py-2 text-sm outline-none focus:border-emerald-500 dark:text-zinc-400 placeholder:text-zinc-600 resize-none font-body"
                                                placeholder="Describe your role and the impact of this project..."
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button type="button" onClick={addProject} variant="secondary" className="w-full rounded-[20px] py-6 border-dashed text-xs tracking-widest uppercase">
                                <Plus size={16} /> Add Another Project
                            </Button>
                        </div>
                    )}

                </div>

                {/* Footer Actions */}
                <div className="px-10 py-8 border-t border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-black/20 flex justify-between items-center backdrop-blur-sm">
                    {step > 1 ? (
                        <Button type="button" onClick={handleBack} variant="secondary" className="gap-2 rounded-2xl px-8 py-4 text-xs font-bold font-display tracking-widest uppercase">
                            <ChevronLeft size={16} /> Back
                        </Button>
                    ) : (
                        <div /> // Spacer
                    )}

                    {step < 3 ? (
                        <Button type="button" onClick={handleNext} variant="primary" className="gap-2 rounded-2xl px-10 py-4 text-xs font-bold font-display tracking-widest uppercase shadow-emerald-500/20">
                            Continue <ChevronRight size={16} />
                        </Button>
                    ) : (
                        <Button type="submit" variant="primary" className="gap-2 rounded-2xl px-12 py-4 text-xs font-bold font-display tracking-widest uppercase shadow-emerald-500/40">
                            Launch Profile <Briefcase size={16} />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Onboarding;
