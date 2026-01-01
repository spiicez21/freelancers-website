import React, { useState } from 'react';
import { Camera, User, Globe, Linkedin, Github, Save, X, Plus, ArrowLeft, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const EditProfile: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser, completeOnboarding } = useAuth();

    // Form State
    const [formData, setFormData] = useState({
        name: currentUser?.name || '',
        tagline: currentUser?.tagline || '',
        bio: currentUser?.bio || '',
        availability: currentUser?.availability || 'Available',
        rate: currentUser?.rate || '',
        experience: currentUser?.experience || '',
        profileImage: currentUser?.profileImage || '',
        bannerImage: currentUser?.bannerImage || 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop',
    });

    const [skills, setSkills] = useState<string[]>(currentUser?.techStack || []);
    const [newSkill, setNewSkill] = useState('');

    const [projects, setProjects] = useState<any[]>(currentUser?.projects || []);

    const [socials, setSocials] = useState({
        github: currentUser?.socials?.github || '',
        linkedin: currentUser?.socials?.linkedin || '',
        portfolio: currentUser?.socials?.portfolio || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSocials(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        completeOnboarding({
            ...formData,
            techStack: skills,
            socials: socials,
            projects: projects
        });
        alert('Profile updated successfully!');
        navigate('/portfolio');
    };

    const toggleSkill = (skill: string) => {
        if (skills.includes(skill)) {
            setSkills(skills.filter(s => s !== skill));
        } else {
            setSkills([...skills, skill]);
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-10">
            {/* Header Navigation */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-12 h-12 rounded-full apple-blur border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-all active:scale-90"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white font-display tracking-tight">Edit Profile</h1>
                        <p className="text-zinc-500 dark:text-zinc-400 font-body mt-2">Manage your public presence.</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/portfolio" className="flex items-center gap-2 px-6 py-3 text-zinc-500 hover:text-emerald-500 font-bold font-display text-xs tracking-widest uppercase transition-colors">
                        View Public Profile <ExternalLink size={14} />
                    </Link>
                    <Button variant="secondary" className="rounded-2xl px-8" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                    <Button className="rounded-2xl px-8 flex items-center gap-2" onClick={handleSave}>
                        <Save size={18} /> Save Changes
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Media */}
                <div className="space-y-10">
                    {/* Banner Section */}
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 overflow-hidden shadow-xl">
                        <div className="p-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Profile Banner</h3>
                            <div className="relative w-full aspect-[3/1] rounded-3xl overflow-hidden group border-2 border-transparent hover:border-emerald-500 transition-colors cursor-pointer">
                                <img src={formData.bannerImage} className="w-full h-full object-cover" alt="Banner" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <Camera size={24} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avatar Section */}
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 overflow-hidden shadow-xl">
                        <div className="p-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Profile Photo</h3>
                            <div className="flex items-center gap-6">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl group flex items-center justify-center">
                                    {formData.profileImage ? (
                                        <img src={formData.profileImage} className="w-full h-full object-cover" alt="Avatar" />
                                    ) : (
                                        <div className="w-full h-full bg-emerald-500/5 flex items-center justify-center">
                                            <User className="text-emerald-500/20" size={40} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm">
                                        <Camera size={20} className="text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Button variant="secondary" size="sm" className="rounded-xl text-[10px] py-2 uppercase tracking-widest font-bold">Update Photo</Button>
                                    <p className="text-[10px] text-zinc-500 font-body">400x400 Recommended.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Forms */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 p-8 md:p-12 shadow-xl">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10 font-display">Identity & Profession</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold font-display text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                                <input name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold font-display text-zinc-500 uppercase tracking-widest ml-1">Headline</label>
                                <input name="tagline" value={formData.tagline} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-bold font-display text-zinc-500 uppercase tracking-widest ml-1">Professional Bio</label>
                                <textarea name="bio" rows={4} value={formData.bio} onChange={handleChange} className="w-full px-6 py-4 rounded-3xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body resize-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold font-display text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2"><Clock size={12} /> Experience</label>
                                <input name="experience" value={formData.experience} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body" placeholder="e.g. 3 Years" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold font-display text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2"><DollarSign size={12} /> Hourly Rate</label>
                                <input name="rate" value={formData.rate} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body" placeholder="e.g. $45/hr" />
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 p-8 md:p-12 shadow-xl">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 font-display">Technical Expertise</h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-display text-[10px] font-bold uppercase tracking-widest group transition-all hover:bg-emerald-500 hover:text-white">
                                    {skill}
                                    <button onClick={() => toggleSkill(skill)} className="hover:text-white/80"><X size={12} /></button>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <input
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (setSkills([...skills, newSkill]), setNewSkill(''))}
                                placeholder="Add skill (e.g. React, Python)..."
                                className="flex-1 px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body"
                            />
                            <button onClick={() => { if (newSkill) setSkills([...skills, newSkill]); setNewSkill('') }} className="w-14 min-w-[56px] h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-transform">
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Showcase Projects */}
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 p-8 md:p-12 shadow-xl">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 font-display">Showcase Projects</h3>
                            <button onClick={() => setProjects([...projects, { title: '', description: '', link: '' }])} className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 font-bold font-display text-[10px] uppercase tracking-widest transition-colors">
                                <Plus size={16} /> Add project
                            </button>
                        </div>

                        <div className="space-y-8">
                            {projects.map((proj, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-white/5 space-y-4 relative group">
                                    <button onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="absolute top-6 right-6 text-zinc-400 hover:text-red-500 transition-colors">
                                        <X size={18} />
                                    </button>
                                    <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-display">PROJECT 0{idx + 1}</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Title</label>
                                            <input
                                                value={proj.title}
                                                onChange={(e) => {
                                                    const newProj = [...projects];
                                                    newProj[idx].title = e.target.value;
                                                    setProjects(newProj);
                                                }}
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 outline-none focus:border-emerald-500 dark:text-white text-sm font-body"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Link</label>
                                            <input
                                                value={proj.link}
                                                onChange={(e) => {
                                                    const newProj = [...projects];
                                                    newProj[idx].link = e.target.value;
                                                    setProjects(newProj);
                                                }}
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 outline-none focus:border-emerald-500 dark:text-white text-sm font-body"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Role/Description</label>
                                            <textarea
                                                rows={2}
                                                value={proj.description}
                                                onChange={(e) => {
                                                    const newProj = [...projects];
                                                    newProj[idx].description = e.target.value;
                                                    setProjects(newProj);
                                                }}
                                                className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 outline-none focus:border-emerald-500 dark:text-white text-sm font-body resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {projects.length === 0 && (
                                <p className="text-zinc-500 text-sm italic py-4 text-center">No projects added. Showcase your best work!</p>
                            )}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="apple-blur rounded-[40px] border border-zinc-200 dark:border-white/10 p-8 md:p-12 shadow-xl">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10 font-display">Social Presence</h3>
                        <div className="space-y-5">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-zinc-400"><Github size={20} /></div>
                                <input name="github" value={socials.github} onChange={handleSocialChange} placeholder="GitHub URL" className="flex-1 px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body text-sm" />
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-zinc-400"><Linkedin size={20} /></div>
                                <input name="linkedin" value={socials.linkedin} onChange={handleSocialChange} placeholder="LinkedIn URL" className="flex-1 px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body text-sm" />
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-zinc-400"><Globe size={20} /></div>
                                <input name="portfolio" value={socials.portfolio} onChange={handleSocialChange} placeholder="Portfolio URL" className="flex-1 px-6 py-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 focus:border-emerald-500 outline-none transition-all dark:text-white font-body text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="flex md:hidden flex-col gap-4 pb-10">
                        <Button className="w-full rounded-2xl py-5 font-display tracking-widest uppercase" onClick={handleSave}>SAVE CHANGES</Button>
                        <Button variant="secondary" className="w-full rounded-2xl py-5 font-display tracking-widest uppercase" onClick={() => navigate(-1)}>CANCEL</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
