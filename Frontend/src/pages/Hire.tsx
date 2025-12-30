import React from 'react';
import { Send } from 'lucide-react';

const Hire: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold dark:text-white">Hire From Us</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Tell us about your project. We'll match you with the perfect talent.</p>
            </div>

            <form className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Name</label>
                        <input type="text" className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm" placeholder="Your Name" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Organization</label>
                        <input type="text" className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm" placeholder="Company / Startup" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Email</label>
                    <input type="email" className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm" placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Project Type</label>
                        <select className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm">
                            <option>Web Development</option>
                            <option>Design & Branding</option>
                            <option>Mobile App</option>
                            <option>Content & Copy</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Budget Range</label>
                        <select className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm">
                            <option>$500 - $1k</option>
                            <option>$1k - $5k</option>
                            <option>$5k+</option>
                            <option>Not sure yet</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Project Details</label>
                    <textarea rows={4} className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none dark:text-white text-sm resize-none" placeholder="Describe your project, goals, and timeline..."></textarea>
                </div>

                <button type="button" className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                    Submit Project Request
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
};

export default Hire;
