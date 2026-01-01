import React, { useState } from 'react';
import { useAuth, type User } from '../context/AuthContext';
import MemberCard from '../components/MemberCard';
import { BadgeCheck, Check, Globe, Linkedin, ArrowLeft, Clock, DollarSign } from 'lucide-react';

const Admin: React.FC = () => {
    const { pendingUsers, approveUser, rejectUser } = useAuth();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleApprove = (id: string) => {
        approveUser(id);
        setSelectedUser(null);
    };

    const handleReject = (id: string) => {
        rejectUser(id);
        setSelectedUser(null);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-8 min-h-screen">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Admin Dashboard</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Review and approve new member applications.</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold ring-1 ring-emerald-500/20">
                        {pendingUsers.length} Pending
                    </span>
                </div>
            </div>

            {pendingUsers.length === 0 ? (
                <div className="p-20 text-center bg-zinc-50 dark:bg-zinc-900/50 rounded-[32px] border border-zinc-200 dark:border-zinc-800 ">
                    <div className="text-zinc-400 mb-4 text-6xl">🎉</div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">All Caught Up!</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">No pending applications at the moment.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {pendingUsers.map(user => (
                        <div key={user.id} className="relative">
                            <MemberCard
                                id={user.id}
                                name={user.name}
                                role={user.tagline || user.role}
                                skills={user.techStack || []}
                                image={user.profileImage}
                                onClick={() => setSelectedUser(user)}
                            />
                            {/* Quick Actions overlay on hover could go here, but modal is cleaner */}
                        </div>
                    ))}
                </div>
            )}

            {/* PROFILE PREVIEW MODAL */}
            {selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-zinc-950 w-full max-w-4xl max-h-[90vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-zinc-200 dark:border-zinc-800 relative">

                        {/* Modal Header / Actions */}
                        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 pointer-events-none">
                            <button onClick={() => setSelectedUser(null)} className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white pointer-events-auto hover:bg-black/40 transition-colors flex items-center gap-2 font-medium border border-white/10">
                                <ArrowLeft size={18} />
                                <span>Back</span>
                            </button>
                            <div className="flex gap-2 pointer-events-auto">
                                <button onClick={() => handleReject(selectedUser.id)} className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-red-500/20 hover:bg-red-600 transition-colors">
                                    Reject
                                </button>
                                <button onClick={() => handleApprove(selectedUser.id)} className="px-6 py-2 bg-emerald-500 text-white rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center gap-2">
                                    Approve Candidate <Check size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="overflow-y-auto custom-scrollbar flex-1 h-full">
                            {/* Cover / Header Section */}
                            <div className="h-32 bg-gradient-to-r from-emerald-900 to-zinc-900 relative"></div>

                            <div className="px-8 md:px-12 pb-12 -mt-16">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-800 border-4 border-white dark:border-zinc-950 shadow-xl overflow-hidden shrink-0 flex items-center justify-center text-4xl font-bold text-zinc-600">
                                        {selectedUser.profileImage ? <img src={selectedUser.profileImage} alt={selectedUser.name} className="w-full h-full object-cover" /> : selectedUser.name[0]}
                                    </div>

                                    <div className="pt-20 md:pt-24 flex-1 space-y-2">
                                        <h2 className="text-3xl font-bold dark:text-white flex items-center gap-2">
                                            {selectedUser.name}
                                            <BadgeCheck className="text-emerald-500" size={24} />
                                        </h2>
                                        <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">{selectedUser.tagline || selectedUser.role}</p>

                                        <div className="flex flex-wrap gap-4 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                            {selectedUser.availability && (
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full font-semibold">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> {selectedUser.availability}
                                                </span>
                                            )}
                                            {selectedUser.rate && <span className="flex items-center gap-1.5"><DollarSign size={14} /> {selectedUser.rate}</span>}
                                            {selectedUser.experience && <span className="flex items-center gap-1.5"><Clock size={14} /> {selectedUser.experience}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-8">
                                    {/* Bio */}
                                    <div className="prose dark:prose-invert max-w-none">
                                        <h3 className="text-lg font-bold dark:text-white mb-2">About</h3>
                                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                            {selectedUser.bio || "No bio provided."}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="text-lg font-bold dark:text-white mb-3">Tech Configuration</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedUser.techStack?.map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                                                    {tech}
                                                </span>
                                            )) || <p className="text-zinc-500 italic">No tech stack listed.</p>}
                                        </div>
                                    </div>

                                    {/* Projects */}
                                    <div>
                                        <h3 className="text-lg font-bold dark:text-white mb-4">Selected Projects</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedUser.projects?.map((project, i) => (
                                                <div key={i} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors">
                                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-1">{project.title || "Untitled Project"}</h4>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-500 hover:underline mb-2 block">{project.link}</a>
                                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                                                </div>
                                            ))}
                                            {(!selectedUser.projects || selectedUser.projects.length === 0) && (
                                                <p className="text-zinc-500 italic">No projects added.</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Socials */}
                                    {selectedUser.socials && (
                                        <div className="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                            {selectedUser.socials.github && (
                                                <a href={selectedUser.socials.github} target="_blank" rel="noopener" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-emerald-500 transition-colors">
                                                    <span className="sr-only">GitHub</span>
                                                    {/* GitHub Icon SVG or Lucide */}
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                </a>
                                            )}
                                            {selectedUser.socials.linkedin && (
                                                <a href={selectedUser.socials.linkedin} target="_blank" rel="noopener" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
                                            )}
                                            {selectedUser.socials.portfolio && (
                                                <a href={selectedUser.socials.portfolio} target="_blank" rel="noopener" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-emerald-500 transition-colors"><Globe size={20} /></a>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
