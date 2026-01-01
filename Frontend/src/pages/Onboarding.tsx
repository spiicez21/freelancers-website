import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, X, Briefcase, Clock, DollarSign, Github, Linkedin, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
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
            socials: { github, linkedin, portfolio },
            projects
        });
        navigate('/members');
    };

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    <span className={step >= 1 ? 'text-emerald-500' : ''}>Basic Profile</span>
                    <span className={step >= 2 ? 'text-emerald-500' : ''}>Professional Details</span>
                    <span className={step >= 3 ? 'text-emerald-500' : ''}>Showcase</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[32px] shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
                <div className="p-8 md:p-10 flex-1">

                    {/* STEP 1: BASIC PROFILE */}
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="text-2xl font-bold dark:text-white">Let's start with the basics</h2>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Image Upload */}
                                <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
                                    <div className="w-32 h-32 rounded-full bg-zinc-50 dark:bg-zinc-800 border-2 border-dashed border-zinc-200 dark:border-zinc-700 flex items-center justify-center group cursor-pointer hover:border-emerald-500 hover:bg-emerald-500/5 transition-all">
                                        <Upload className="text-zinc-400 group-hover:text-emerald-500" size={32} />
                                    </div>
                                    <span className="text-xs font-medium text-zinc-500">Upload Photo</span>
                                </div>

                                <div className="flex-1 space-y-6 w-full">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1">Professional Tagline</label>
                                        <input
                                            type="text"
                                            value={tagline}
                                            onChange={(e) => setTagline(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-400 font-medium"
                                            placeholder="e.g. Full Stack Developer | UI Designer"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1">Short Bio</label>
                                        <textarea
                                            rows={4}
                                            value={bio}
                                            onChange={(e) => setBio(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-400 resize-none"
                                            placeholder="Tell us a bit about yourself, your passion, and what you do best..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: PROFESSIONAL DETAILS */}
                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="text-2xl font-bold dark:text-white">Your Expertise</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1 flex items-center gap-1"><Clock size={12} /> Years Experience</label>
                                    <input type="text" value={yearsExp} onChange={e => setYearsExp(e.target.value)} className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none dark:text-white" placeholder="e.g. 2 Years" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1 flex items-center gap-1"><DollarSign size={12} /> Hourly Rate</label>
                                    <input type="text" value={rate} onChange={e => setRate(e.target.value)} className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none dark:text-white" placeholder="e.g. $40/hr" />
                                </div>
                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1">Availability Status</label>
                                    <div className="flex gap-6 p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                        {['Available', 'Open', 'Busy'].map(status => (
                                            <label key={status} className="flex items-center gap-2 cursor-pointer group">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${availability === status ? 'border-emerald-500 bg-emerald-500' : 'border-zinc-400 dark:border-zinc-600'}`}>
                                                    {availability === status && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                                </div>
                                                <button type="button" onClick={() => setAvailability(status as any)} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-emerald-500 transition-colors">{status}</button>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1">Tech Stack</label>
                                <div className="flex flex-wrap gap-2">
                                    {POPULAR_TECH.map(tech => (
                                        <button
                                            key={tech}
                                            type="button"
                                            onClick={() => toggleTech(tech)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${techStack.includes(tech)
                                                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20'
                                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-emerald-500/50'
                                                }`}
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    onKeyDown={handleAddTag}
                                    className="w-full px-4 py-2.5 bg-transparent border-b border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 outline-none text-sm dark:text-white transition-colors"
                                    placeholder="Type custom skill and press Enter..."
                                />
                                {techStack.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {techStack.filter(t => !POPULAR_TECH.includes(t)).map(tag => (
                                            <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs flex items-center gap-1 border border-zinc-700">
                                                {tag} <button type="button" onClick={() => toggleTech(tag)}><X size={12} /></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 pl-1">Social Links</label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <Github className="absolute left-3 top-3 text-zinc-400" size={18} />
                                        <input type="text" value={github} onChange={e => setGithub(e.target.value)} placeholder="GitHub URL" className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:border-emerald-500 outline-none text-sm dark:text-white" />
                                    </div>
                                    <div className="relative">
                                        <Linkedin className="absolute left-3 top-3 text-zinc-400" size={18} />
                                        <input type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="LinkedIn URL" className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:border-emerald-500 outline-none text-sm dark:text-white" />
                                    </div>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-3 text-zinc-400" size={18} />
                                        <input type="text" value={portfolio} onChange={e => setPortfolio(e.target.value)} placeholder="Portfolio Website" className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:border-emerald-500 outline-none text-sm dark:text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: PROJECTS */}
                    {step === 3 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="text-2xl font-bold dark:text-white">Showcase Your Work</h2>

                            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 space-y-3 group hover:border-emerald-500/30 transition-colors">
                                        <div className="flex justify-between">
                                            <h4 className="text-sm font-bold text-zinc-400">PROJECT {idx + 1}</h4>
                                            {idx > 0 && <button type="button" onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="text-red-500"><X size={16} /></button>}
                                        </div>
                                        <input
                                            type="text"
                                            value={proj.title}
                                            onChange={(e) => updateProject(idx, 'title', e.target.value)}
                                            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-2 py-1.5 font-bold text-lg outline-none focus:border-emerald-500 dark:text-white placeholder:text-zinc-600"
                                            placeholder="Project Title"
                                        />
                                        <input
                                            type="text"
                                            value={proj.link}
                                            onChange={(e) => updateProject(idx, 'link', e.target.value)}
                                            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-2 py-1 text-sm outline-none focus:border-emerald-500 text-emerald-500 placeholder:text-zinc-500"
                                            placeholder="https://..."
                                        />
                                        <textarea
                                            rows={2}
                                            value={proj.description}
                                            onChange={(e) => updateProject(idx, 'description', e.target.value)}
                                            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-2 py-1 text-sm outline-none focus:border-emerald-500 dark:text-zinc-300 placeholder:text-zinc-600 resize-none"
                                            placeholder="Brief description of what you built..."
                                        />
                                    </div>
                                ))}
                            </div>

                            <Button type="button" onClick={addProject} variant="secondary" className="w-full border-dashed">
                                <Plus size={16} /> Add Another Project
                            </Button>
                        </div>
                    )}

                </div>

                {/* Footer Actions */}
                <div className="p-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-between items-center backdrop-blur-sm">
                    {step > 1 ? (
                        <Button type="button" onClick={handleBack} variant="secondary" className="gap-2">
                            <ChevronLeft size={16} /> Back
                        </Button>
                    ) : (
                        <div></div> // Spacer
                    )}

                    {step < 3 ? (
                        <Button type="button" onClick={handleNext} variant="primary" className="gap-2 shadow-emerald-500/20">
                            Continue <ChevronRight size={16} />
                        </Button>
                    ) : (
                        <Button type="submit" variant="primary" className="gap-2 shadow-emerald-500/20 px-8">
                            Complete Profile <Briefcase size={16} />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Onboarding;
