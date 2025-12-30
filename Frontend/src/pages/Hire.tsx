import React from 'react';
import { Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Hire: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Work With Us</span>
                <h1 className="text-4xl font-bold dark:text-white">Start Your Project</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Tell us about your goals. We'll match you with the perfect student talent.</p>
            </div>

            <form className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-black/20 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Organization</label>
                        <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm transition-all" placeholder="Company / Startup" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm transition-all" placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Project Type</label>
                        <select className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm transition-all appearance-none">
                            <option>Web Development</option>
                            <option>Design & Branding</option>
                            <option>Mobile App</option>
                            <option>Content & Copy</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Budget Range</label>
                        <select className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm transition-all appearance-none">
                            <option>$500 - $1k</option>
                            <option>$1k - $5k</option>
                            <option>$5k+</option>
                            <option>Not sure yet</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">Project Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none dark:text-white text-sm resize-none transition-all" placeholder="Describe your project, goals, and timeline..."></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full gap-2 group">
                    Submit Project Request
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </form>
        </div>
    );
};

export default Hire;
